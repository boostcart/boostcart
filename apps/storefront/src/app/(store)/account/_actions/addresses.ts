"use server";

import { revalidatePath } from "next/cache";
import { getCurrentCustomer } from "@/server/auth/customer-auth";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";

interface AddressInput {
	firstName: string;
	lastName: string;
	company?: string;
	address1: string;
	address2?: string;
	city: string;
	province?: string;
	country: string;
	postalCode: string;
	phone?: string;
	isDefault?: boolean;
}

export async function createAddress(data: AddressInput) {
	const tenant = await getCurrentTenant();
	const session = await getCurrentCustomer();

	if (!tenant || !session) {
		return { success: false, error: "Unauthorized" };
	}

	try {
		// If this is the first address or marked as default, unset other defaults
		if (data.isDefault) {
			await db.customerAddress.updateMany({
				where: { customerId: session.customerId },
				data: { isDefault: false },
			});
		}

		// Check if this is the first address
		const existingCount = await db.customerAddress.count({
			where: { customerId: session.customerId },
		});

		const address = await db.customerAddress.create({
			data: {
				customerId: session.customerId,
				firstName: data.firstName,
				lastName: data.lastName,
				company: data.company || null,
				address1: data.address1,
				address2: data.address2 || null,
				city: data.city,
				province: data.province || null,
				country: data.country,
				postalCode: data.postalCode,
				phone: data.phone || null,
				isDefault: data.isDefault || existingCount === 0, // First address is default
			},
		});

		revalidatePath("/account/addresses");
		return { success: true, address };
	} catch {
		return { success: false, error: "Failed to create address" };
	}
}

export async function updateAddress(addressId: string, data: AddressInput) {
	const tenant = await getCurrentTenant();
	const session = await getCurrentCustomer();

	if (!tenant || !session) {
		return { success: false, error: "Unauthorized" };
	}

	try {
		// Verify ownership
		const existing = await db.customerAddress.findFirst({
			where: {
				id: addressId,
				customerId: session.customerId,
			},
		});

		if (!existing) {
			return { success: false, error: "Address not found" };
		}

		// If marked as default, unset other defaults
		if (data.isDefault && !existing.isDefault) {
			await db.customerAddress.updateMany({
				where: {
					customerId: session.customerId,
					id: { not: addressId },
				},
				data: { isDefault: false },
			});
		}

		const address = await db.customerAddress.update({
			where: { id: addressId },
			data: {
				firstName: data.firstName,
				lastName: data.lastName,
				company: data.company || null,
				address1: data.address1,
				address2: data.address2 || null,
				city: data.city,
				province: data.province || null,
				country: data.country,
				postalCode: data.postalCode,
				phone: data.phone || null,
				isDefault: data.isDefault ?? existing.isDefault,
			},
		});

		revalidatePath("/account/addresses");
		return { success: true, address };
	} catch {
		return { success: false, error: "Failed to update address" };
	}
}

export async function deleteAddress(addressId: string) {
	const tenant = await getCurrentTenant();
	const session = await getCurrentCustomer();

	if (!tenant || !session) {
		return { success: false, error: "Unauthorized" };
	}

	try {
		// Verify ownership
		const existing = await db.customerAddress.findFirst({
			where: {
				id: addressId,
				customerId: session.customerId,
			},
		});

		if (!existing) {
			return { success: false, error: "Address not found" };
		}

		await db.customerAddress.delete({
			where: { id: addressId },
		});

		// If the deleted address was default, make another one default
		if (existing.isDefault) {
			const firstRemaining = await db.customerAddress.findFirst({
				where: { customerId: session.customerId },
				orderBy: { createdAt: "asc" },
			});

			if (firstRemaining) {
				await db.customerAddress.update({
					where: { id: firstRemaining.id },
					data: { isDefault: true },
				});
			}
		}

		revalidatePath("/account/addresses");
		return { success: true };
	} catch {
		return { success: false, error: "Failed to delete address" };
	}
}

export async function setDefaultAddress(addressId: string) {
	const tenant = await getCurrentTenant();
	const session = await getCurrentCustomer();

	if (!tenant || !session) {
		return { success: false, error: "Unauthorized" };
	}

	try {
		// Verify ownership
		const existing = await db.customerAddress.findFirst({
			where: {
				id: addressId,
				customerId: session.customerId,
			},
		});

		if (!existing) {
			return { success: false, error: "Address not found" };
		}

		// Unset all defaults
		await db.customerAddress.updateMany({
			where: { customerId: session.customerId },
			data: { isDefault: false },
		});

		// Set new default
		await db.customerAddress.update({
			where: { id: addressId },
			data: { isDefault: true },
		});

		revalidatePath("/account/addresses");
		return { success: true };
	} catch {
		return { success: false, error: "Failed to set default address" };
	}
}

export async function getAddress(addressId: string) {
	const tenant = await getCurrentTenant();
	const session = await getCurrentCustomer();

	if (!tenant || !session) {
		return null;
	}

	return db.customerAddress.findFirst({
		where: {
			id: addressId,
			customerId: session.customerId,
		},
	});
}
