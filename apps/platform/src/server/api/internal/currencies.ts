"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import {
	fetchExchangeRates,
	SUPPORTED_CURRENCIES,
	updateExchangeRates,
} from "@/server/services/currency/exchange-rates";
import { requireAdminTenant } from "@/server/tenant";

async function requireStoreAccess() {
	const session = await auth();
	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}

	const tenant = await requireAdminTenant();

	const staffRecord = await db.tenantStaff.findFirst({
		where: {
			userId: session.user.id,
			tenantId: tenant.id,
		},
	});

	if (!staffRecord) {
		throw new Error("Forbidden: No access to this store");
	}

	return {
		userId: session.user.id,
		tenantId: tenant.id,
		role: staffRecord.role,
	};
}

// ============================================
// GLOBAL CURRENCIES (Admin only)
// ============================================

/**
 * Get all currencies available in the system
 */
export async function getAllCurrencies() {
	await requireStoreAccess();

	const currencies = await db.currency.findMany({
		orderBy: [{ code: "asc" }],
	});

	// If no currencies exist, seed them first
	if (currencies.length === 0) {
		await seedCurrenciesInternal();
		return db.currency.findMany({
			orderBy: [{ code: "asc" }],
		});
	}

	return currencies.map((c) => ({
		...c,
		rate: Number(c.rate),
	}));
}

/**
 * Refresh exchange rates from ECB API
 */
export async function refreshExchangeRates() {
	await requireStoreAccess();

	try {
		await updateExchangeRates();
		revalidatePath("/admin/settings");
		return { success: true, message: "Exchange rates updated successfully" };
	} catch (error) {
		console.error("Failed to refresh exchange rates:", error);
		return { success: false, message: "Failed to refresh exchange rates" };
	}
}

/**
 * Seed currencies if they don't exist
 */
async function seedCurrenciesInternal() {
	const count = await db.currency.count();

	if (count === 0) {
		const rates = await fetchExchangeRates();

		for (const currency of SUPPORTED_CURRENCIES) {
			const rate = rates[currency.code] ?? 1;

			await db.currency.create({
				data: {
					code: currency.code,
					symbol: currency.symbol,
					name: currency.name,
					rate,
					decimals: currency.decimals,
					symbolFirst: currency.symbolFirst,
					isActive: ["EUR", "USD", "GBP", "CAD", "CHF"].includes(currency.code),
				},
			});
		}
	}
}

// ============================================
// TENANT CURRENCIES
// ============================================

/**
 * Get currencies enabled for the current tenant
 */
export async function getTenantCurrencies() {
	const { tenantId } = await requireStoreAccess();

	const tenantCurrencies = await db.tenantCurrency.findMany({
		where: { tenantId },
		include: {
			currency: true,
		},
		orderBy: [{ isDefault: "desc" }, { currency: { code: "asc" } }],
	});

	return tenantCurrencies.map((tc) => ({
		id: tc.id,
		currencyId: tc.currencyId,
		isDefault: tc.isDefault,
		currency: {
			...tc.currency,
			rate: Number(tc.currency.rate),
		},
	}));
}

/**
 * Get tenant currencies for pricing component (lighter version)
 */
export async function getTenantCurrenciesForPricing() {
	const { tenantId } = await requireStoreAccess();

	const tenantCurrencies = await db.tenantCurrency.findMany({
		where: { tenantId },
		include: {
			currency: {
				select: {
					id: true,
					code: true,
					symbol: true,
					name: true,
					rate: true,
				},
			},
		},
		orderBy: [{ isDefault: "desc" }, { currency: { code: "asc" } }],
	});

	return tenantCurrencies.map((tc) => ({
		currencyId: tc.currencyId,
		isDefault: tc.isDefault,
		currency: {
			code: tc.currency.code,
			symbol: tc.currency.symbol,
			name: tc.currency.name,
			rate: Number(tc.currency.rate),
		},
	}));
}

/**
 * Enable a currency for the tenant
 */
export async function enableTenantCurrency(
	currencyId: string,
	isDefault = false,
) {
	const { tenantId } = await requireStoreAccess();

	// Check currency exists
	const currency = await db.currency.findUnique({
		where: { id: currencyId },
	});

	if (!currency) {
		throw new Error("Currency not found");
	}

	// If setting as default, remove default from other currencies first
	if (isDefault) {
		await db.tenantCurrency.updateMany({
			where: { tenantId, isDefault: true },
			data: { isDefault: false },
		});
	}

	// Check if already enabled
	const existing = await db.tenantCurrency.findUnique({
		where: {
			tenantId_currencyId: { tenantId, currencyId },
		},
	});

	if (existing) {
		// Just update default status if needed
		if (isDefault) {
			await db.tenantCurrency.update({
				where: { id: existing.id },
				data: { isDefault: true },
			});
		}
		revalidatePath("/admin/settings");
		return { success: true };
	}

	// Check if this is the first currency (make it default)
	const existingCount = await db.tenantCurrency.count({ where: { tenantId } });
	const shouldBeDefault = isDefault || existingCount === 0;

	await db.tenantCurrency.create({
		data: {
			tenantId,
			currencyId,
			isDefault: shouldBeDefault,
		},
	});

	revalidatePath("/admin/settings");
	return { success: true };
}

/**
 * Disable a currency for the tenant
 */
export async function disableTenantCurrency(currencyId: string) {
	const { tenantId } = await requireStoreAccess();

	const tenantCurrency = await db.tenantCurrency.findUnique({
		where: {
			tenantId_currencyId: { tenantId, currencyId },
		},
	});

	if (!tenantCurrency) {
		return { success: true }; // Already disabled
	}

	// Don't allow disabling the default currency
	if (tenantCurrency.isDefault) {
		throw new Error(
			"Cannot disable the default currency. Set another currency as default first.",
		);
	}

	await db.tenantCurrency.delete({
		where: { id: tenantCurrency.id },
	});

	revalidatePath("/admin/settings");
	return { success: true };
}

/**
 * Set a currency as default for the tenant
 */
export async function setDefaultTenantCurrency(currencyId: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify currency is enabled for this tenant
	const tenantCurrency = await db.tenantCurrency.findUnique({
		where: {
			tenantId_currencyId: { tenantId, currencyId },
		},
	});

	if (!tenantCurrency) {
		throw new Error("Currency is not enabled for this store. Enable it first.");
	}

	// Remove default from all other currencies
	await db.tenantCurrency.updateMany({
		where: { tenantId, isDefault: true },
		data: { isDefault: false },
	});

	// Set new default
	await db.tenantCurrency.update({
		where: { id: tenantCurrency.id },
		data: { isDefault: true },
	});

	// Also update the legacy tenant.currency field for backwards compatibility
	const currency = await db.currency.findUnique({
		where: { id: currencyId },
	});

	if (currency) {
		await db.tenant.update({
			where: { id: tenantId },
			data: { currency: currency.code },
		});
	}

	revalidatePath("/admin/settings");
	return { success: true };
}

// ============================================
// PRODUCT PRICING
// ============================================

/**
 * Get prices for a product in all enabled currencies
 */
export async function getProductPrices(productId: string) {
	const { tenantId } = await requireStoreAccess();

	// Get tenant's enabled currencies
	const tenantCurrencies = await db.tenantCurrency.findMany({
		where: { tenantId },
		include: { currency: true },
	});

	// Get existing product prices
	const productPrices = await db.productPrice.findMany({
		where: { productId },
		include: { currency: true },
	});

	// Map currencies to their prices (or null if no custom price set)
	return tenantCurrencies.map((tc) => {
		const price = productPrices.find((pp) => pp.currencyId === tc.currencyId);
		return {
			currencyId: tc.currencyId,
			currencyCode: tc.currency.code,
			currencySymbol: tc.currency.symbol,
			currencyName: tc.currency.name,
			rate: Number(tc.currency.rate),
			isDefault: tc.isDefault,
			price: price ? Number(price.price) : null,
			compareAtPrice: price?.compareAtPrice
				? Number(price.compareAtPrice)
				: null,
		};
	});
}

/**
 * Update or create a product price for a specific currency
 */
export async function updateProductPrice(
	productId: string,
	currencyId: string,
	price: number | null,
	compareAtPrice: number | null = null,
) {
	await requireStoreAccess();

	// Verify product exists
	const product = await db.product.findUnique({
		where: { id: productId },
	});

	if (!product) {
		throw new Error("Product not found");
	}

	// If price is null, delete the custom price (will use auto-calculated price)
	if (price === null) {
		await db.productPrice.deleteMany({
			where: { productId, currencyId },
		});
		revalidatePath("/admin/products");
		return { success: true };
	}

	// Upsert the price
	await db.productPrice.upsert({
		where: {
			productId_currencyId: { productId, currencyId },
		},
		create: {
			productId,
			currencyId,
			price,
			compareAtPrice,
		},
		update: {
			price,
			compareAtPrice,
		},
	});

	revalidatePath("/admin/products");
	return { success: true };
}

/**
 * Bulk update product prices for all currencies
 */
export async function bulkUpdateProductPrices(
	productId: string,
	prices: Array<{
		currencyId: string;
		price: number | null;
		compareAtPrice?: number | null;
	}>,
) {
	await requireStoreAccess();

	// Verify product exists
	const product = await db.product.findUnique({
		where: { id: productId },
	});

	if (!product) {
		throw new Error("Product not found");
	}

	// Process each price
	for (const { currencyId, price, compareAtPrice } of prices) {
		if (price === null) {
			// Delete custom price
			await db.productPrice.deleteMany({
				where: { productId, currencyId },
			});
		} else {
			// Upsert price
			await db.productPrice.upsert({
				where: {
					productId_currencyId: { productId, currencyId },
				},
				create: {
					productId,
					currencyId,
					price,
					compareAtPrice,
				},
				update: {
					price,
					compareAtPrice,
				},
			});
		}
	}

	revalidatePath("/admin/products");
	return { success: true };
}

// ============================================
// PRICE CALCULATION UTILITIES
// ============================================

/**
 * Calculate price in a specific currency from the base EUR price
 */
export async function calculatePrice(
	basePrice: number,
	currencyRate: number,
): Promise<number> {
	return Math.round(basePrice * currencyRate * 100) / 100;
}

/**
 * Get the display price for a product in a specific currency
 * Uses custom price if set, otherwise calculates from base price
 */
export async function getProductDisplayPrice(
	productId: string,
	currencyId: string,
) {
	await requireStoreAccess();

	// Get product with base price (price field in EUR)
	const product = await db.product.findUnique({
		where: { id: productId },
		select: { price: true, compareAtPrice: true },
	});

	if (!product) {
		throw new Error("Product not found");
	}

	// Get currency
	const currency = await db.currency.findUnique({
		where: { id: currencyId },
	});

	if (!currency) {
		throw new Error("Currency not found");
	}

	// Check for custom price
	const customPrice = await db.productPrice.findUnique({
		where: {
			productId_currencyId: { productId, currencyId },
		},
	});

	if (customPrice) {
		return {
			price: Number(customPrice.price),
			compareAtPrice: customPrice.compareAtPrice
				? Number(customPrice.compareAtPrice)
				: null,
			isCustom: true,
			currency: {
				code: currency.code,
				symbol: currency.symbol,
				decimals: currency.decimals,
				symbolFirst: currency.symbolFirst,
			},
		};
	}

	// Calculate from base price (which is stored in EUR)
	const rate = Number(currency.rate);
	return {
		price: calculatePrice(Number(product.price), rate),
		compareAtPrice: product.compareAtPrice
			? calculatePrice(Number(product.compareAtPrice), rate)
			: null,
		isCustom: false,
		currency: {
			code: currency.code,
			symbol: currency.symbol,
			decimals: currency.decimals,
			symbolFirst: currency.symbolFirst,
		},
	};
}
