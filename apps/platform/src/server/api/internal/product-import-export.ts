"use server";

import type { ProductStatus } from "@boostcart/database";
import { z } from "zod";
import {
	requireManagePermission,
	requireViewPermission,
} from "@/server/api/permissions";
import { db } from "@/server/db";

// CSV Row Schema for Product Import
const ProductImportRowSchema = z.object({
	sku: z.string().min(1, "SKU is required"),
	name: z.string().min(1, "Name is required"),
	description: z.string().optional(),
	price: z.coerce.number().positive("Price must be positive"),
	compareAtPrice: z.coerce.number().optional(),
	costPerItem: z.coerce.number().optional(),
	stock: z.coerce.number().int().optional(),
	trackStock: z.coerce.boolean().optional().default(false),
	status: z.enum(["DRAFT", "ACTIVE", "UNLISTED"]).optional().default("DRAFT"),
	categorySlug: z.string().optional(),
	brandSlug: z.string().optional(),
	// SEO fields
	metaTitle: z.string().optional(),
	metaDescription: z.string().optional(),
});

interface ImportResult {
	success: boolean;
	totalRows: number;
	imported: number;
	updated: number;
	skipped: number;
	errors: Array<{
		row: number;
		sku: string;
		error: string;
	}>;
}

interface ExportOptions {
	format: "csv" | "json";
	includeVariants?: boolean;
	includeDrafts?: boolean;
	categoryIds?: string[];
}

/**
 * Parse CSV content into rows
 */
function parseCSV(content: string): Record<string, string>[] {
	const lines = content.trim().split("\n");
	if (lines.length < 2) return [];

	// Parse header
	const headerLine = lines[0];
	if (!headerLine) return [];
	const headers = headerLine
		.split(",")
		.map((h) => h.trim().replace(/^"|"$/g, ""));

	// Parse data rows
	const rows: Record<string, string>[] = [];
	for (let i = 1; i < lines.length; i++) {
		const line = lines[i];
		if (!line) continue;
		const values = parseCSVLine(line);
		const row: Record<string, string> = {};
		headers.forEach((header, index) => {
			row[header] = values[index] ?? "";
		});
		rows.push(row);
	}

	return rows;
}

/**
 * Parse a single CSV line, handling quoted values with commas
 */
function parseCSVLine(line: string): string[] {
	const values: string[] = [];
	let current = "";
	let inQuotes = false;

	for (let i = 0; i < line.length; i++) {
		const char = line[i];
		if (!char) continue;
		const nextChar = line[i + 1];

		if (char === '"' && !inQuotes) {
			inQuotes = true;
		} else if (char === '"' && inQuotes) {
			if (nextChar === '"') {
				current += '"';
				i++; // Skip escaped quote
			} else {
				inQuotes = false;
			}
		} else if (char === "," && !inQuotes) {
			values.push(current.trim());
			current = "";
		} else {
			current += char;
		}
	}
	values.push(current.trim());

	return values;
}

/**
 * Generate slug from name
 */
function generateSlug(name: string): string {
	return name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

/**
 * Import products from CSV
 */
export async function importProductsFromCSV(
	csvContent: string,
	options?: { updateExisting?: boolean },
): Promise<ImportResult> {
	const { tenantId } = await requireManagePermission("products");
	const updateExisting = options?.updateExisting ?? true;

	const result: ImportResult = {
		success: true,
		totalRows: 0,
		imported: 0,
		updated: 0,
		skipped: 0,
		errors: [],
	};

	try {
		const rows = parseCSV(csvContent);
		result.totalRows = rows.length;

		// Get default locale
		const defaultLocale = await db.locale.findFirst({
			where: { isDefault: true },
		});

		if (!defaultLocale) {
			return {
				...result,
				success: false,
				errors: [
					{
						row: 0,
						sku: "",
						error: "No default locale found. Please configure locales first.",
					},
				],
			};
		}

		// Get all categories and brands for this tenant (for slug lookup)
		const [categories, brands] = await Promise.all([
			db.category.findMany({
				where: { tenantId },
				select: { id: true, slug: true },
			}),
			db.brand.findMany({
				where: { tenantId },
				select: { id: true, slug: true },
			}),
		]);

		const categoryMap = new Map(categories.map((c) => [c.slug, c.id]));
		const brandMap = new Map(brands.map((b) => [b.slug, b.id]));

		// Get default category if no category is specified
		const defaultCategory = categories[0];
		if (!defaultCategory) {
			return {
				...result,
				success: false,
				errors: [
					{
						row: 0,
						sku: "",
						error: "No categories found. Please create a category first.",
					},
				],
			};
		}

		// Process each row
		for (let i = 0; i < rows.length; i++) {
			const rowNum = i + 2; // 1-based, accounting for header
			const rawRow = rows[i];
			if (!rawRow) continue;

			try {
				// Validate row
				const parseResult = ProductImportRowSchema.safeParse(rawRow);
				if (!parseResult.success) {
					result.errors.push({
						row: rowNum,
						sku: rawRow.sku ?? "",
						error: parseResult.error.issues
							.map((e) => `${e.path.join(".")}: ${e.message}`)
							.join(", "),
					});
					continue;
				}

				const row = parseResult.data;

				// Look up category and brand IDs
				const categoryId = row.categorySlug
					? (categoryMap.get(row.categorySlug) ?? defaultCategory.id)
					: defaultCategory.id;

				const brandId = row.brandSlug ? brandMap.get(row.brandSlug) : undefined;

				// Check if product exists by SKU
				const existingProduct = await db.product.findFirst({
					where: {
						tenantId,
						sku: row.sku,
						deletedAt: null,
					},
					include: {
						translations: true,
					},
				});

				if (existingProduct) {
					if (updateExisting) {
						// Update existing product
						await db.$transaction(async (tx) => {
							await tx.product.update({
								where: { id: existingProduct.id },
								data: {
									price: row.price,
									compareAtPrice: row.compareAtPrice,
									costPerItem: row.costPerItem,
									stock: row.stock,
									trackStock: row.trackStock,
									status: row.status as ProductStatus,
									categoryId,
									brandId,
								},
							});

							// Find existing translation for default locale
							const existingTranslation = existingProduct.translations.find(
								(t) => t.localeId === defaultLocale.id,
							);

							if (existingTranslation) {
								// Update existing translation
								await tx.productTranslation.update({
									where: { id: existingTranslation.id },
									data: {
										name: row.name,
										description: row.description,
										metaTitle: row.metaTitle,
										metaDescription: row.metaDescription,
									},
								});
							} else {
								// Create new translation
								await tx.productTranslation.create({
									data: {
										productId: existingProduct.id,
										localeId: defaultLocale.id,
										name: row.name,
										description: row.description,
										metaTitle: row.metaTitle,
										metaDescription: row.metaDescription,
									},
								});
							}
						});
						result.updated++;
					} else {
						result.skipped++;
					}
				} else {
					// Create new product
					const slug = generateSlug(row.name);

					// Ensure unique slug
					let finalSlug = slug;
					let counter = 1;
					while (
						await db.product.findFirst({
							where: { tenantId, slug: finalSlug },
						})
					) {
						finalSlug = `${slug}-${counter}`;
						counter++;
					}

					await db.product.create({
						data: {
							tenantId,
							slug: finalSlug,
							sku: row.sku,
							price: row.price,
							compareAtPrice: row.compareAtPrice,
							costPerItem: row.costPerItem,
							stock: row.stock,
							trackStock: row.trackStock ?? false,
							status: row.status as ProductStatus,
							categoryId,
							brandId,
							translations: {
								create: {
									localeId: defaultLocale.id,
									name: row.name,
									description: row.description,
									metaTitle: row.metaTitle,
									metaDescription: row.metaDescription,
								},
							},
						},
					});
					result.imported++;
				}
			} catch (error) {
				result.errors.push({
					row: rowNum,
					sku: rawRow.sku ?? "",
					error: error instanceof Error ? error.message : "Unknown error",
				});
			}
		}

		result.success = result.errors.length === 0;
	} catch (error) {
		result.success = false;
		result.errors.push({
			row: 0,
			sku: "",
			error: error instanceof Error ? error.message : "Failed to parse CSV",
		});
	}

	return result;
}

/**
 * Export products to CSV or JSON
 */
export async function exportProducts(options?: ExportOptions): Promise<string> {
	const { tenantId } = await requireViewPermission("products");

	const format = options?.format ?? "csv";
	const includeDrafts = options?.includeDrafts ?? false;

	// Get default locale
	const defaultLocale = await db.locale.findFirst({
		where: { isDefault: true },
	});

	const where: Record<string, unknown> = {
		tenantId,
		deletedAt: null,
	};

	if (!includeDrafts) {
		where.status = { not: "DRAFT" };
	}

	if (options?.categoryIds && options.categoryIds.length > 0) {
		where.categoryId = { in: options.categoryIds };
	}

	const products = await db.product.findMany({
		where,
		include: {
			translations: defaultLocale
				? {
						where: { localeId: defaultLocale.id },
					}
				: true,
			category: {
				select: { slug: true },
			},
			brand: {
				select: { slug: true },
			},
		},
		orderBy: { createdAt: "desc" },
	});

	if (format === "json") {
		return JSON.stringify(
			products.map((p) => ({
				sku: p.sku,
				name: p.translations[0]?.name ?? "",
				description: p.translations[0]?.description ?? "",
				price: Number(p.price),
				compareAtPrice: p.compareAtPrice ? Number(p.compareAtPrice) : null,
				costPerItem: p.costPerItem ? Number(p.costPerItem) : null,
				stock: p.stock,
				trackStock: p.trackStock,
				status: p.status,
				categorySlug: p.category.slug,
				brandSlug: p.brand?.slug ?? "",
				metaTitle: p.translations[0]?.metaTitle ?? "",
				metaDescription: p.translations[0]?.metaDescription ?? "",
				createdAt: p.createdAt.toISOString(),
				updatedAt: p.updatedAt.toISOString(),
			})),
			null,
			2,
		);
	}

	// Generate CSV
	const headers = [
		"sku",
		"name",
		"description",
		"price",
		"compareAtPrice",
		"costPerItem",
		"stock",
		"trackStock",
		"status",
		"categorySlug",
		"brandSlug",
		"metaTitle",
		"metaDescription",
	];

	const rows = products.map((p) => [
		escapeCSVValue(p.sku ?? ""),
		escapeCSVValue(p.translations[0]?.name ?? ""),
		escapeCSVValue(p.translations[0]?.description ?? ""),
		String(Number(p.price)),
		p.compareAtPrice ? String(Number(p.compareAtPrice)) : "",
		p.costPerItem ? String(Number(p.costPerItem)) : "",
		p.stock?.toString() ?? "",
		p.trackStock ? "true" : "false",
		p.status,
		escapeCSVValue(p.category.slug),
		escapeCSVValue(p.brand?.slug ?? ""),
		escapeCSVValue(p.translations[0]?.metaTitle ?? ""),
		escapeCSVValue(p.translations[0]?.metaDescription ?? ""),
	]);

	const csv = [headers.join(","), ...rows.map((row) => row.join(","))].join(
		"\n",
	);

	return csv;
}

/**
 * Escape a value for CSV output
 */
function escapeCSVValue(value: string): string {
	if (value.includes(",") || value.includes('"') || value.includes("\n")) {
		return `"${value.replace(/"/g, '""')}"`;
	}
	return value;
}

/**
 * Get a CSV template for importing products
 */
export async function getProductImportTemplate(): Promise<string> {
	const headers = [
		"sku",
		"name",
		"description",
		"price",
		"compareAtPrice",
		"costPerItem",
		"stock",
		"trackStock",
		"status",
		"categorySlug",
		"brandSlug",
		"metaTitle",
		"metaDescription",
	];

	const exampleRow = [
		"SKU-001",
		"Example Product",
		"Product description here",
		"29.99",
		"39.99",
		"15.00",
		"100",
		"true",
		"DRAFT",
		"electronics",
		"apple",
		"Example Product | My Store",
		"Buy this amazing product",
	];

	return [headers.join(","), exampleRow.join(",")].join("\n");
}

/**
 * Validate CSV content before import (dry run)
 */
export async function validateProductCSV(csvContent: string): Promise<{
	valid: boolean;
	totalRows: number;
	validRows: number;
	errors: Array<{ row: number; errors: string[] }>;
}> {
	await requireViewPermission("products");

	const rows = parseCSV(csvContent);
	const result = {
		valid: true,
		totalRows: rows.length,
		validRows: 0,
		errors: [] as Array<{ row: number; errors: string[] }>,
	};

	for (let i = 0; i < rows.length; i++) {
		const rowNum = i + 2;
		const row = rows[i];
		if (!row) continue;

		const validation = ProductImportRowSchema.safeParse(row);

		if (validation.success) {
			result.validRows++;
		} else {
			result.valid = false;
			result.errors.push({
				row: rowNum,
				errors: validation.error.issues.map(
					(e) => `${e.path.join(".")}: ${e.message}`,
				),
			});
		}
	}

	return result;
}
