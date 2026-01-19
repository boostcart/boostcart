"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";

export interface AddressInput {
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
	isDefault: boolean;
}

async function getAuthenticatedCustomerProfile() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session?.user) {
		throw new Error("Unauthorized");
	}

	const tenant = await getCurrentTenant();
	if (!tenant) {
		throw new Error("Store not found");
	}

	// Get or create customer profile
	let profile = await db.customerProfile.findUnique({
		where: {
			userId_tenantId: {
				userId: session.user.id,
				tenantId: tenant.id,
			},
		},
	});

	if (!profile) {
		profile = await db.customerProfile.create({
			data: {
				userId: session.user.id,
				tenantId: tenant.id,
			},
		});
	}

	return { profile, tenant };
}

export async function getAddresses() {
	const { profile } = await getAuthenticatedCustomerProfile();

	const addresses = await db.customerAddress.findMany({
		where: { customerProfileId: profile.id },
		orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
	});

	return addresses;
}

export async function createAddress(input: AddressInput) {
	const { profile } = await getAuthenticatedCustomerProfile();

	// If this is the default address, unset other defaults
	if (input.isDefault) {
		await db.customerAddress.updateMany({
			where: { customerProfileId: profile.id, isDefault: true },
			data: { isDefault: false },
		});
	}

	const address = await db.customerAddress.create({
		data: {
			customerProfileId: profile.id,
			firstName: input.firstName,
			lastName: input.lastName,
			company: input.company || null,
			address1: input.address1,
			address2: input.address2 || null,
			city: input.city,
			province: input.province || null,
			country: input.country,
			postalCode: input.postalCode,
			phone: input.phone || null,
			isDefault: input.isDefault,
		},
	});

	revalidatePath("/account/addresses");
	return address;
}

export async function updateAddress(id: string, input: AddressInput) {
	const { profile } = await getAuthenticatedCustomerProfile();

	// Verify the address belongs to this customer
	const existing = await db.customerAddress.findFirst({
		where: { id, customerProfileId: profile.id },
	});

	if (!existing) {
		throw new Error("Address not found");
	}

	// If this is the default address, unset other defaults
	if (input.isDefault) {
		await db.customerAddress.updateMany({
			where: {
				customerProfileId: profile.id,
				isDefault: true,
				id: { not: id },
			},
			data: { isDefault: false },
		});
	}

	const address = await db.customerAddress.update({
		where: { id },
		data: {
			firstName: input.firstName,
			lastName: input.lastName,
			company: input.company || null,
			address1: input.address1,
			address2: input.address2 || null,
			city: input.city,
			province: input.province || null,
			country: input.country,
			postalCode: input.postalCode,
			phone: input.phone || null,
			isDefault: input.isDefault,
		},
	});

	revalidatePath("/account/addresses");
	return address;
}

export async function deleteAddress(id: string) {
	const { profile } = await getAuthenticatedCustomerProfile();

	// Verify the address belongs to this customer
	const existing = await db.customerAddress.findFirst({
		where: { id, customerProfileId: profile.id },
	});

	if (!existing) {
		throw new Error("Address not found");
	}

	await db.customerAddress.delete({ where: { id } });

	revalidatePath("/account/addresses");
	return { success: true };
}

export async function setDefaultAddress(id: string) {
	const { profile } = await getAuthenticatedCustomerProfile();

	// Verify the address belongs to this customer
	const existing = await db.customerAddress.findFirst({
		where: { id, customerProfileId: profile.id },
	});

	if (!existing) {
		throw new Error("Address not found");
	}

	// Unset other defaults and set this one
	await db.$transaction([
		db.customerAddress.updateMany({
			where: { customerProfileId: profile.id, isDefault: true },
			data: { isDefault: false },
		}),
		db.customerAddress.update({
			where: { id },
			data: { isDefault: true },
		}),
	]);

	revalidatePath("/account/addresses");
	return { success: true };
}
