"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";
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

export async function getGiftCards() {
	const { tenantId } = await requireStoreAccess();

	const giftCards = await db.giftCard.findMany({
		where: { tenantId },
		include: {
			currency: true,
			purchaser: {
				select: {
					id: true,
					email: true,
				},
			},
			recipient: {
				select: {
					id: true,
					email: true,
				},
			},
			_count: {
				select: {
					orders: true,
				},
			},
		},
		orderBy: { createdAt: "desc" },
	});

	return giftCards;
}

export async function getGiftCard(id: string) {
	const { tenantId } = await requireStoreAccess();

	const giftCard = await db.giftCard.findFirst({
		where: { id, tenantId },
		include: {
			currency: true,
			purchaser: true,
			recipient: true,
			orders: {
				select: {
					id: true,
					orderNumber: true,
					createdAt: true,
					totalAmount: true,
				},
			},
		},
	});

	if (!giftCard) {
		throw new Error("Gift card not found");
	}

	return giftCard;
}

interface CreateGiftCardInput {
	code?: string;
	initialValue: number;
	currencyId: string;
	expirationDate?: Date;
	purchaserId?: string;
	recipientId?: string;
}

export async function createGiftCard(input: CreateGiftCardInput) {
	const { tenantId } = await requireStoreAccess();

	// Generate unique code if not provided
	const code =
		input.code ||
		`GC-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

	// Check if code already exists
	const existing = await db.giftCard.findFirst({
		where: { code },
	});

	if (existing) {
		throw new Error("Gift card code already exists");
	}

	const giftCard = await db.giftCard.create({
		data: {
			code,
			initialValue: input.initialValue,
			currentValue: input.initialValue,
			currencyId: input.currencyId,
			expirationDate: input.expirationDate,
			purchaserId: input.purchaserId,
			recipientId: input.recipientId,
			tenantId,
		},
	});

	return giftCard;
}

interface UpdateGiftCardInput {
	currentValue?: number;
	expirationDate?: Date;
	isActive?: boolean;
}

export async function updateGiftCard(id: string, input: UpdateGiftCardInput) {
	const { tenantId } = await requireStoreAccess();

	// Verify gift card belongs to tenant
	const giftCard = await db.giftCard.findFirst({
		where: { id, tenantId },
	});

	if (!giftCard) {
		throw new Error("Gift card not found or access denied");
	}

	const updated = await db.giftCard.update({
		where: { id },
		data: input,
	});

	return updated;
}

export async function deactivateGiftCard(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify gift card belongs to tenant
	const giftCard = await db.giftCard.findFirst({
		where: { id, tenantId },
	});

	if (!giftCard) {
		throw new Error("Gift card not found or access denied");
	}

	const updated = await db.giftCard.update({
		where: { id },
		data: { isActive: false },
	});

	return updated;
}

export async function deleteGiftCard(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify gift card belongs to tenant
	const giftCard = await db.giftCard.findFirst({
		where: { id, tenantId },
		include: {
			_count: {
				select: { orders: true },
			},
		},
	});

	if (!giftCard) {
		throw new Error("Gift card not found or access denied");
	}

	if (giftCard._count.orders > 0) {
		throw new Error(
			"Cannot delete gift card that has been used in orders. Consider deactivating instead.",
		);
	}

	await db.giftCard.delete({
		where: { id },
	});

	return { success: true };
}

export async function checkGiftCardBalance(code: string) {
	const { tenantId } = await requireStoreAccess();

	const giftCard = await db.giftCard.findFirst({
		where: {
			code,
			tenantId,
			isActive: true,
		},
		select: {
			id: true,
			code: true,
			currentValue: true,
			initialValue: true,
			expirationDate: true,
			currency: true,
		},
	});

	if (!giftCard) {
		throw new Error("Gift card not found or inactive");
	}

	if (giftCard.expirationDate && giftCard.expirationDate < new Date()) {
		throw new Error("Gift card has expired");
	}

	return giftCard;
}
