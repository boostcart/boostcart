"use server";

import type { OrderEmailData } from "@boostcart/email";
import { revalidatePath } from "next/cache";
import { getCurrentCustomer } from "@/server/auth/customer-auth";
import { db } from "@/server/db";
import { emailService } from "@/server/email";
import { getCurrentTenant } from "@/server/tenant";

interface OrderItemInput {
	productId: string;
	variantId?: string | null;
	quantity: number;
	price: number;
	productName?: string;
	productSku?: string;
	variantName?: string;
}

interface CreateOrderInput {
	// Contact info
	email: string;
	phone?: string;
	// Shipping address
	firstName: string;
	lastName: string;
	company?: string;
	vatNumber?: string;
	address1: string;
	address2?: string;
	city: string;
	country: string;
	postalCode: string;
	// Shipping & Payment
	shippingMethodId?: string;
	shippingCost: number;
	paymentMethodId?: string;
	paymentMethod: string; // 'cod', 'card', etc.
	// Items
	items: OrderItemInput[];
	// Totals
	totalAmount: number;
	// Notes
	notes?: string;
}

interface CreateOrderResult {
	success: boolean;
	error?: string;
	orderId?: string;
	orderNumber?: string;
}

// Generate unique order number
function generateOrderNumber(): string {
	const timestamp = Date.now().toString(36).toUpperCase();
	const random = Math.random().toString(36).substring(2, 6).toUpperCase();
	return `ORD-${timestamp}-${random}`;
}

// Helper to get or create default currency for tenant
async function getDefaultCurrency(tenantId: string) {
	// First try to get the tenant's default currency
	const tenantCurrency = await db.tenantCurrency.findFirst({
		where: { tenantId, isDefault: true },
		include: { currency: true },
	});

	if (tenantCurrency) {
		return tenantCurrency.currency;
	}

	// Fallback to EUR if no tenant currency is set
	let currency = await db.currency.findUnique({
		where: { code: "EUR" },
	});

	if (!currency) {
		currency = await db.currency.create({
			data: {
				code: "EUR",
				symbol: "€",
				name: "Euro",
				rate: 1,
				isActive: true,
			},
		});
	}

	return currency;
}

export async function createOrder(
	input: CreateOrderInput,
): Promise<CreateOrderResult> {
	const tenant = await getCurrentTenant();
	const customer = await getCurrentCustomer();

	if (!tenant) {
		return { success: false, error: "Store not found" };
	}

	if (input.items.length === 0) {
		return { success: false, error: "Cart is empty" };
	}

	try {
		// Validate products exist and have stock
		const productIds = input.items.map((item) => item.productId);
		const products = await db.product.findMany({
			where: {
				id: { in: productIds },
				tenantId: tenant.id,
				status: "ACTIVE",
				deletedAt: null,
			},
			include: {
				variants: true,
				translations: { take: 1 },
			},
		});

		const productMap = new Map(products.map((p) => [p.id, p]));

		// Verify all items are valid
		for (const item of input.items) {
			const product = productMap.get(item.productId);
			if (!product) {
				return {
					success: false,
					error: `Product not found: ${item.productId}`,
				};
			}

			// Check stock if tracking is enabled
			if (product.trackStock) {
				if (item.variantId) {
					const variant = product.variants.find((v) => v.id === item.variantId);
					if (
						variant &&
						variant.stock !== null &&
						variant.stock < item.quantity
					) {
						return { success: false, error: `Insufficient stock for variant` };
					}
				} else if (product.stock !== null && product.stock < item.quantity) {
					return { success: false, error: `Insufficient stock for product` };
				}
			}
		}

		// Get default currency
		const currency = await getDefaultCurrency(tenant.id);

		// Get or create shipping method
		let shippingMethod = await db.shippingMethod.findFirst({
			where: { tenantId: tenant.id, isActive: true },
		});

		if (!shippingMethod) {
			// Create default shipping method
			shippingMethod = await db.shippingMethod.create({
				data: {
					tenantId: tenant.id,
					name: "Standard Shipping",
					description: "Standard delivery",
					type: "TO_ADDRESS",
					cost: input.shippingCost,
					isActive: true,
				},
			});
		}

		// Get or create payment method
		let paymentMethod = await db.paymentMethod.findFirst({
			where: { tenantId: tenant.id, isActive: true },
		});

		if (!paymentMethod) {
			// Create default payment method (COD)
			paymentMethod = await db.paymentMethod.create({
				data: {
					tenantId: tenant.id,
					name: "Cash on Delivery",
					type: "CASH_ON_DELIVERY",
					isActive: true,
				},
			});
		}

		// Create the order in a transaction
		const order = await db.$transaction(async (tx) => {
			// Create order
			const newOrder = await tx.order.create({
				data: {
					tenantId: tenant.id,
					customerId: customer?.customerId ?? null,
					orderNumber: generateOrderNumber(),
					status: "PENDING",
					paymentStatus: input.paymentMethod === "cod" ? "PENDING" : "PENDING",
					shippingCost: input.shippingCost,
					totalAmount: input.totalAmount,
					currencyId: currency.id,
					// Guest info (if not logged in)
					guestEmail: !customer ? input.email : null,
					guestPhone: !customer ? input.phone : null,
					// Shipping address
					shippingFirstName: input.firstName,
					shippingLastName: input.lastName,
					shippingCompany: input.company ?? null,
					shippingVatNumber: input.vatNumber ?? null,
					shippingAddressLine1: input.address1,
					shippingAddressLine2: input.address2 ?? null,
					shippingCity: input.city,
					shippingCountry: input.country,
					shippingPostcode: input.postalCode,
					shippingPhone: input.phone ?? "",
					shippingEmail: input.email,
					shippingNotes: input.notes ?? null,
					// Methods
					shippingMethodId: shippingMethod.id,
					paymentMethodId: paymentMethod.id,
				},
			});

			// Create order items
			for (const item of input.items) {
				const product = productMap.get(item.productId);
				const variant = item.variantId
					? product?.variants.find((v) => v.id === item.variantId)
					: null;

				await tx.orderItem.create({
					data: {
						orderId: newOrder.id,
						productId: item.productId,
						selectedVariantId: item.variantId || null,
						quantity: item.quantity,
						price: item.price,
						productName:
							item.productName ||
							product?.translations[0]?.name ||
							"Unknown Product",
						productSku: item.productSku || product?.sku || null,
						selectedVariantName:
							item.variantName ||
							(variant
								? Object.entries(variant.options as Record<string, string>)
										.map(([k, v]) => `${k}: ${v}`)
										.join(", ")
								: null),
					},
				});

				// Update stock if tracking
				if (product?.trackStock) {
					if (item.variantId) {
						await tx.productVariant.update({
							where: { id: item.variantId },
							data: {
								stock: {
									decrement: item.quantity,
								},
							},
						});
					} else {
						await tx.product.update({
							where: { id: item.productId },
							data: {
								stock: {
									decrement: item.quantity,
								},
							},
						});
					}
				}
			}

			// Create order history entry
			await tx.orderHistory.create({
				data: {
					orderId: newOrder.id,
					status: "PENDING",
					notes: "Order placed",
				},
			});

			return newOrder;
		});

		// Send order confirmation email (async, don't block)
		try {
			// Fetch order with all details for email
			const orderWithDetails = await db.order.findUnique({
				where: { id: order.id },
				include: {
					items: {
						include: {
							product: {
								include: {
									media: { take: 1, orderBy: { order: "asc" } },
									translations: { take: 1 },
								},
							},
						},
					},
				},
			});

			if (orderWithDetails) {
				const emailData: OrderEmailData = {
					orderNumber: order.orderNumber || "N/A",
					customerName: `${input.firstName} ${input.lastName}`,
					customerEmail: input.email,
					items: orderWithDetails.items.map((item) => ({
						name: item.productName,
						quantity: item.quantity,
						price: Number(item.price),
						image: item.product.media[0]?.url,
					})),
					subtotal: Number(order.totalAmount) - Number(order.shippingCost),
					shipping: Number(order.shippingCost),
					tax: 0, // TODO: Calculate tax
					total: Number(order.totalAmount),
					currency: currency.code,
					shippingAddress: {
						name: `${input.firstName} ${input.lastName}`,
						line1: input.address1,
						line2: input.address2,
						city: input.city,
						postalCode: input.postalCode,
						country: input.country,
					},
					orderDate: order.createdAt,
					storeName: tenant.name,
					storeUrl: `https://${tenant.subdomain}.boostcart.bg`,
					storeEmail: tenant.contactEmail || "noreply@boostcart.bg",
					storeLogo: tenant.logo || undefined,
				};

				// Send email asynchronously
				emailService.sendOrderConfirmation(emailData).catch((error) => {
					console.error("Failed to send order confirmation email:", error);
				});
			}
		} catch (emailError) {
			// Log but don't fail order creation
			console.error("Error preparing order confirmation email:", emailError);
		}

		revalidatePath("/orders");

		return {
			success: true,
			orderId: order.id,
			orderNumber: order.orderNumber || undefined,
		};
	} catch (error) {
		console.error("Failed to create order:", error);
		return {
			success: false,
			error: "Failed to create order. Please try again.",
		};
	}
}

// Get customer orders
export async function getCustomerOrders() {
	const tenant = await getCurrentTenant();
	const customer = await getCurrentCustomer();

	if (!tenant || !customer) {
		return [];
	}

	const orders = await db.order.findMany({
		where: {
			tenantId: tenant.id,
			customerId: customer.customerId,
		},
		include: {
			items: {
				include: {
					product: {
						include: {
							media: { take: 1, orderBy: { order: "asc" } },
						},
					},
				},
			},
		},
		orderBy: { createdAt: "desc" },
	});

	return orders.map((order) => ({
		id: order.id,
		orderNumber: order.orderNumber,
		status: order.status,
		paymentStatus: order.paymentStatus,
		shippingCost: Number(order.shippingCost),
		totalAmount: Number(order.totalAmount),
		createdAt: order.createdAt,
		items: order.items.map((item) => ({
			id: item.id,
			productId: item.productId,
			productName: item.productName,
			productImage: item.product.media[0]?.url ?? null,
			quantity: item.quantity,
			price: Number(item.price),
		})),
	}));
}

// Get single order
export async function getOrder(orderId: string) {
	const tenant = await getCurrentTenant();
	const customer = await getCurrentCustomer();

	if (!tenant) {
		return null;
	}

	const order = await db.order.findFirst({
		where: {
			id: orderId,
			tenantId: tenant.id,
			// Allow either customer ID match or guest order access
			...(customer ? { customerId: customer.customerId } : {}),
		},
		include: {
			items: {
				include: {
					product: {
						include: {
							media: { take: 1, orderBy: { order: "asc" } },
						},
					},
					selectedVariant: true,
				},
			},
			shippingMethod: true,
			paymentMethod: true,
			history: {
				orderBy: { timestamp: "desc" },
			},
		},
	});

	if (!order) {
		return null;
	}

	return {
		id: order.id,
		orderNumber: order.orderNumber,
		status: order.status,
		paymentStatus: order.paymentStatus,
		shippingCost: Number(order.shippingCost),
		totalAmount: Number(order.totalAmount),
		createdAt: order.createdAt,
		shippingAddress: {
			firstName: order.shippingFirstName,
			lastName: order.shippingLastName,
			company: order.shippingCompany,
			address1: order.shippingAddressLine1,
			address2: order.shippingAddressLine2,
			city: order.shippingCity,
			country: order.shippingCountry,
			postalCode: order.shippingPostcode,
		},
		shippingMethod: order.shippingMethod
			? {
					name: order.shippingMethod.name,
					price: Number(order.shippingMethod.cost),
				}
			: null,
		paymentMethod: order.paymentMethod
			? {
					name: order.paymentMethod.name,
					type: order.paymentMethod.type,
				}
			: null,
		items: order.items.map((item) => ({
			id: item.id,
			productId: item.productId,
			productName: item.productName,
			productImage: item.product.media[0]?.url ?? null,
			variantName: item.selectedVariantName,
			quantity: item.quantity,
			price: Number(item.price),
		})),
		history: order.history.map((h) => ({
			status: h.status,
			notes: h.notes,
			createdAt: h.timestamp,
		})),
	};
}
