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

export async function getReviews(productId?: string) {
	const { tenantId } = await requireStoreAccess();

	const reviews = await db.review.findMany({
		where: {
			tenantId,
			...(productId ? { productId } : {}),
		},
		include: {
			product: {
				select: {
					id: true,
					slug: true,
					translations: {
						take: 1,
					},
				},
			},
			customer: {
				select: {
					id: true,
					firstName: true,
					lastName: true,
					email: true,
				},
			},
		},
		orderBy: { createdAt: "desc" },
	});

	return reviews;
}

export async function getReview(id: string) {
	const { tenantId } = await requireStoreAccess();

	const review = await db.review.findFirst({
		where: { id, tenantId },
		include: {
			product: true,
			customer: true,
		},
	});

	if (!review) {
		throw new Error("Review not found");
	}

	return review;
}

export async function approveReview(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify review belongs to tenant
	const review = await db.review.findFirst({
		where: { id, tenantId },
	});

	if (!review) {
		throw new Error("Review not found or access denied");
	}

	const updated = await db.review.update({
		where: { id },
		data: { isApproved: true },
	});

	return updated;
}

export async function unapproveReview(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify review belongs to tenant
	const review = await db.review.findFirst({
		where: { id, tenantId },
	});

	if (!review) {
		throw new Error("Review not found or access denied");
	}

	const updated = await db.review.update({
		where: { id },
		data: { isApproved: false },
	});

	return updated;
}

export async function deleteReview(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify review belongs to tenant
	const review = await db.review.findFirst({
		where: { id, tenantId },
	});

	if (!review) {
		throw new Error("Review not found or access denied");
	}

	await db.review.delete({
		where: { id },
	});

	return { success: true };
}

export async function bulkApproveReviews(ids: string[]) {
	const { tenantId } = await requireStoreAccess();

	// Verify all reviews belong to tenant
	const reviews = await db.review.findMany({
		where: {
			id: { in: ids },
			tenantId,
		},
	});

	if (reviews.length !== ids.length) {
		throw new Error("One or more reviews not found or access denied");
	}

	await db.review.updateMany({
		where: {
			id: { in: ids },
			tenantId,
		},
		data: { isApproved: true },
	});

	return { success: true, count: reviews.length };
}

export async function bulkDeleteReviews(ids: string[]) {
	const { tenantId } = await requireStoreAccess();

	// Verify all reviews belong to tenant
	const reviews = await db.review.findMany({
		where: {
			id: { in: ids },
			tenantId,
		},
	});

	if (reviews.length !== ids.length) {
		throw new Error("One or more reviews not found or access denied");
	}

	await db.review.deleteMany({
		where: {
			id: { in: ids },
			tenantId,
		},
	});

	return { success: true, count: reviews.length };
}
