"use server";

import {
	CreateAddressSchema,
	type CreateAddressSchemaType,
	DeleteAddressSchema,
	type DeleteAddressSchemaType,
	UpdateAddressSchema,
	type UpdateAddressSchemaType,
} from "@/schemas";
import { db } from "@/server/db";
import { getCurrentUser } from "../shared";

export async function createAddress(data: CreateAddressSchemaType) {
	if (!data) return { error: "no_data" } as const;

	const user = await getCurrentUser();
	if (!user) return { error: "not_logged_in" } as const;

	const parsed = CreateAddressSchema.safeParse(data);
	if (!parsed.success) return { error: "invalid_data" } as const;

	const {
		name,
		firstName,
		lastName,
		phone,
		email,
		company,
		vatNumber,
		country,
		city,
		postcode,
		addressLine1,
		addressLine2,
		isDefault,
	} = parsed.data;

	try {
		const result = await db.$transaction(async (tx) => {
			if (isDefault) {
				await tx.userAddress.updateMany({
					where: { userId: user.id, isDefault: true },
					data: { isDefault: false },
				});
			}

			const created = await tx.userAddress.create({
				data: {
					userId: user.id,
					name: name || `Address ${Date.now()}`,
					firstName,
					lastName,
					phone,
					email: email || undefined,
					company,
					vatNumber,
					country,
					city,
					postcode,
					addressLine1,
					addressLine2,
					isDefault: Boolean(isDefault),
				},
			});

			return created;
		});

		return { success: true, address: result } as const;
	} catch {
		return { error: "something_went_wrong" } as const;
	}
}

export async function updateAddress(data: UpdateAddressSchemaType) {
	if (!data) return { error: "no_data" } as const;

	const user = await getCurrentUser();
	if (!user) return { error: "not_logged_in" } as const;

	const parsed = UpdateAddressSchema.safeParse(data);
	if (!parsed.success) return { error: "invalid_data" } as const;

	const {
		id,
		name,
		firstName,
		lastName,
		phone,
		email,
		company,
		vatNumber,
		country,
		region,
		city,
		postcode,
		addressLine1,
		addressLine2,
		isDefault,
	} = parsed.data;

	try {
		const existing = await db.userAddress.findUnique({ where: { id } });
		if (!existing || existing.userId !== user.id)
			return { error: "not_found" } as const;

		await db.$transaction(async (tx) => {
			if (isDefault) {
				await tx.userAddress.updateMany({
					where: { userId: user.id, isDefault: true, NOT: { id } },
					data: { isDefault: false },
				});
			}

			await tx.userAddress.update({
				where: { id },
				data: {
					name,
					firstName,
					lastName,
					phone,
					email: email || user.email,
					company,
					vatNumber,
					country,
					region,
					city,
					postcode,
					addressLine1,
					addressLine2,
					isDefault: Boolean(isDefault),
				},
			});
		});

		return { success: true } as const;
	} catch {
		return { error: "something_went_wrong" } as const;
	}
}

export async function deleteAddress(data: DeleteAddressSchemaType) {
	if (!data) return { error: "no_data" } as const;

	const user = await getCurrentUser();
	if (!user) return { error: "not_logged_in" } as const;

	const parsed = DeleteAddressSchema.safeParse(data);
	if (!parsed.success) return { error: "invalid_data" } as const;

	const { id } = parsed.data;

	try {
		const existing = await db.userAddress.findUnique({ where: { id } });
		if (!existing || existing.userId !== user.id)
			return { error: "not_found" } as const;

		await db.userAddress.delete({ where: { id } });

		return { success: true } as const;
	} catch {
		return { error: "something_went_wrong" } as const;
	}
}
