"use server";

import type { PageType } from "@boostcart/database";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { cleanupPageImages } from "@/server/services/media-cleanup";
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

export async function getPages() {
	const { tenantId } = await requireStoreAccess();

	const pages = await db.page.findMany({
		where: { tenantId },
		include: {
			translations: {
				include: {
					locale: true,
				},
			},
		},
		orderBy: { createdAt: "desc" },
	});

	return pages.map((page) => ({
		id: page.id,
		slug: page.slug,
		type: page.type,
		isActive: page.isActive,
		title: page.translations[0]?.title ?? page.slug,
		content: page.translations[0]?.content ?? "",
		translations: page.translations.map((t) => ({
			localeId: t.localeId,
			localeCode: t.locale.code,
			localeName: t.locale.name,
			title: t.title,
			content: t.content,
		})),
		createdAt: page.createdAt,
		updatedAt: page.updatedAt,
	}));
}

export async function getPage(id: string) {
	const { tenantId } = await requireStoreAccess();

	const page = await db.page.findFirst({
		where: { id, tenantId },
		include: {
			translations: {
				include: {
					locale: true,
				},
			},
		},
	});

	if (!page) {
		throw new Error("Page not found");
	}

	return {
		id: page.id,
		slug: page.slug,
		type: page.type,
		isActive: page.isActive,
		translations: page.translations.map((t) => ({
			id: t.id,
			localeId: t.localeId,
			localeCode: t.locale.code,
			localeName: t.locale.name,
			title: t.title,
			content: t.content,
		})),
		createdAt: page.createdAt,
		updatedAt: page.updatedAt,
	};
}

export interface CreatePageInput {
	slug: string;
	type: PageType;
	isActive?: boolean;
	translations: {
		localeId: string;
		title: string;
		content: string;
	}[];
}

export async function createPage(input: CreatePageInput) {
	const { tenantId } = await requireStoreAccess();

	// Check for duplicate slug
	const existing = await db.page.findUnique({
		where: {
			tenantId_slug: {
				tenantId,
				slug: input.slug,
			},
		},
	});

	if (existing) {
		throw new Error("A page with this slug already exists");
	}

	const page = await db.page.create({
		data: {
			slug: input.slug,
			type: input.type,
			isActive: input.isActive ?? true,
			tenantId,
			translations: {
				create: input.translations,
			},
		},
		include: {
			translations: true,
		},
	});

	return page;
}

export interface UpdatePageInput {
	slug?: string;
	type?: PageType;
	isActive?: boolean;
	translations?: {
		localeId: string;
		title: string;
		content: string;
	}[];
}

export async function updatePage(id: string, input: UpdatePageInput) {
	const { tenantId } = await requireStoreAccess();

	// Verify page belongs to tenant
	const page = await db.page.findFirst({
		where: { id, tenantId },
	});

	if (!page) {
		throw new Error("Page not found or access denied");
	}

	// Check for duplicate slug if changing
	if (input.slug && input.slug !== page.slug) {
		const existing = await db.page.findUnique({
			where: {
				tenantId_slug: {
					tenantId,
					slug: input.slug,
				},
			},
		});

		if (existing) {
			throw new Error("A page with this slug already exists");
		}
	}

	const updated = await db.page.update({
		where: { id },
		data: {
			slug: input.slug,
			type: input.type,
			isActive: input.isActive,
			...(input.translations && {
				translations: {
					deleteMany: {},
					create: input.translations,
				},
			}),
		},
		include: {
			translations: true,
		},
	});

	return updated;
}

export async function deletePage(id: string) {
	const { tenantId } = await requireStoreAccess();

	// Verify page belongs to tenant and get content for cleanup
	const page = await db.page.findFirst({
		where: { id, tenantId },
		include: {
			translations: {
				select: { content: true },
			},
		},
	});

	if (!page) {
		throw new Error("Page not found or access denied");
	}

	// Collect all content from translations to find embedded images
	const allContent = page.translations.map((t) => t.content).join("");

	// Delete the page first
	await db.page.delete({
		where: { id },
	});

	// Cleanup images that are no longer used (after deletion)
	if (allContent) {
		await cleanupPageImages(allContent, tenantId, id);
	}

	return { success: true };
}

export async function togglePageActive(id: string) {
	const { tenantId } = await requireStoreAccess();

	const page = await db.page.findFirst({
		where: { id, tenantId },
	});

	if (!page) {
		throw new Error("Page not found or access denied");
	}

	const updated = await db.page.update({
		where: { id },
		data: { isActive: !page.isActive },
	});

	return updated;
}

export async function getPageTypes() {
	return [
		{ value: "FAQ", label: "FAQ" },
		{ value: "CONTACT", label: "Contact" },
		{ value: "ABOUT_US", label: "About Us" },
		{ value: "PRIVACY_POLICY", label: "Privacy Policy" },
		{ value: "TERMS_OF_SERVICE", label: "Terms of Service" },
		{ value: "CUSTOM", label: "Custom Page" },
	];
}
