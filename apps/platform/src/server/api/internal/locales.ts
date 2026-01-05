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

/**
 * Get or create a default locale for the platform.
 * This ensures there's always a valid locale available for translations.
 */
export async function getOrCreateDefaultLocale() {
	// First try to get the default locale
	let defaultLocale = await db.locale.findFirst({
		where: { isDefault: true },
	});

	if (!defaultLocale) {
		// Try to get any existing locale
		defaultLocale = await db.locale.findFirst();
	}

	if (!defaultLocale) {
		// Create a default Bulgarian locale since this is a Bulgarian-focused platform
		defaultLocale = await db.locale.create({
			data: {
				code: "bg-BG",
				name: "Български",
				isDefault: true,
			},
		});
	}

	return {
		id: defaultLocale.id,
		code: defaultLocale.code,
		name: defaultLocale.name,
		isDefault: defaultLocale.isDefault,
	};
}

export async function getLocales() {
	await requireStoreAccess();

	const locales = await db.locale.findMany({
		orderBy: [{ isDefault: "desc" }, { name: "asc" }],
	});

	return locales.map((locale) => ({
		id: locale.id,
		code: locale.code,
		name: locale.name,
		isDefault: locale.isDefault,
	}));
}

export async function getLocale(id: string) {
	await requireStoreAccess();

	const locale = await db.locale.findUnique({
		where: { id },
	});

	if (!locale) {
		throw new Error("Locale not found");
	}

	return {
		id: locale.id,
		code: locale.code,
		name: locale.name,
		isDefault: locale.isDefault,
	};
}

export interface CreateLocaleInput {
	code: string;
	name: string;
	isDefault?: boolean;
}

export async function createLocale(input: CreateLocaleInput) {
	await requireStoreAccess();

	// Check for duplicate code
	const existing = await db.locale.findUnique({
		where: { code: input.code },
	});

	if (existing) {
		throw new Error("A locale with this code already exists");
	}

	// If setting as default, unset other defaults
	if (input.isDefault) {
		await db.locale.updateMany({
			where: { isDefault: true },
			data: { isDefault: false },
		});
	}

	const locale = await db.locale.create({
		data: {
			code: input.code,
			name: input.name,
			isDefault: input.isDefault ?? false,
		},
	});

	return locale;
}

export interface UpdateLocaleInput {
	code?: string;
	name?: string;
	isDefault?: boolean;
}

export async function updateLocale(id: string, input: UpdateLocaleInput) {
	await requireStoreAccess();

	const locale = await db.locale.findUnique({
		where: { id },
	});

	if (!locale) {
		throw new Error("Locale not found");
	}

	// Check for duplicate code if changing
	if (input.code && input.code !== locale.code) {
		const existing = await db.locale.findUnique({
			where: { code: input.code },
		});

		if (existing) {
			throw new Error("A locale with this code already exists");
		}
	}

	// If setting as default, unset other defaults
	if (input.isDefault && !locale.isDefault) {
		await db.locale.updateMany({
			where: { isDefault: true },
			data: { isDefault: false },
		});
	}

	const updated = await db.locale.update({
		where: { id },
		data: {
			code: input.code,
			name: input.name,
			isDefault: input.isDefault,
		},
	});

	return updated;
}

export async function deleteLocale(id: string) {
	await requireStoreAccess();

	const locale = await db.locale.findUnique({
		where: { id },
	});

	if (!locale) {
		throw new Error("Locale not found");
	}

	if (locale.isDefault) {
		throw new Error("Cannot delete the default locale");
	}

	// Check if locale is used in any translations
	const usageCount = await Promise.all([
		db.productTranslation.count({ where: { localeId: id } }),
		db.categoryTranslation.count({ where: { localeId: id } }),
		db.brandTranslation.count({ where: { localeId: id } }),
		db.pageTranslation.count({ where: { localeId: id } }),
		db.collectionTranslation.count({ where: { localeId: id } }),
		db.blogPostTranslation.count({ where: { localeId: id } }),
	]);

	const totalUsage = usageCount.reduce((sum, count) => sum + count, 0);

	if (totalUsage > 0) {
		throw new Error(
			`Cannot delete locale: it is used in ${totalUsage} translation(s)`,
		);
	}

	await db.locale.delete({
		where: { id },
	});

	return { success: true };
}

export async function setDefaultLocale(id: string) {
	await requireStoreAccess();

	const locale = await db.locale.findUnique({
		where: { id },
	});

	if (!locale) {
		throw new Error("Locale not found");
	}

	// Unset current default
	await db.locale.updateMany({
		where: { isDefault: true },
		data: { isDefault: false },
	});

	// Set new default
	const updated = await db.locale.update({
		where: { id },
		data: { isDefault: true },
	});

	return updated;
}
