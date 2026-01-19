import { z } from "zod";

// Enums matching Prisma schema
export const ProductStatusEnum = z.enum(["ACTIVE", "UNLISTED", "DRAFT"]);
export const MediaTypeEnum = z.enum(["IMAGE", "VIDEO"]);
export const PurchaseTypeEnum = z.enum([
	"ONE_TIME",
	"SUBSCRIPTION",
	"ONE_TIME_AND_SUBSCRIPTION",
	"PRE_ORDER",
]);
export const SubscriptionIntervalEnum = z.enum([
	"WEEKLY",
	"BI_WEEKLY",
	"MONTHLY",
	"BI_MONTHLY",
	"QUARTERLY",
	"YEARLY",
]);
export const PackageTypeEnum = z.enum([
	"BOX",
	"ENVELOPE",
	"SOFT_PACKAGE",
	"PALLET",
]);
export const MeasurementUnitEnum = z.enum([
	"KG",
	"G",
	"L",
	"ML",
	"M",
	"CM",
	"MM",
	"SQM",
	"SQCM",
	"PER_ITEM",
]);

// Types
export type ProductStatus = z.infer<typeof ProductStatusEnum>;
export type MediaType = z.infer<typeof MediaTypeEnum>;
export type PurchaseType = z.infer<typeof PurchaseTypeEnum>;
export type SubscriptionInterval = z.infer<typeof SubscriptionIntervalEnum>;
export type PackageType = z.infer<typeof PackageTypeEnum>;
export type MeasurementUnit = z.infer<typeof MeasurementUnitEnum>;

// Product Media Schema
export const ProductMediaSchema = z.object({
	id: z.string().optional(),
	url: z.string().url(),
	mediaType: MediaTypeEnum,
	altText: z.string().optional(),
	order: z.number().int().min(0),
});
export type ProductMediaInput = z.infer<typeof ProductMediaSchema>;

// Variant Option Meta (for color picker etc)
export const VariantOptionMetaSchema = z.object({
	optionName: z.string(),
	hexColor: z
		.string()
		.regex(/^#[0-9A-Fa-f]{6}$/)
		.optional(),
});
export type VariantOptionMeta = z.infer<typeof VariantOptionMetaSchema>;

// Product Variant Schema
export const ProductVariantSchema = z.object({
	id: z.string().optional(),
	sku: z.string().optional(),
	price: z.number().positive().optional(), // Override price
	priceAdjustment: z.number().default(0),
	stock: z.number().int().min(0).optional(),
	imageUrl: z.string().url().optional(),
	options: z.record(z.string(), z.string()).default({}), // { "Color": "Red", "Size": "Large" }
	optionMeta: z.array(VariantOptionMetaSchema).optional(),
});
export type ProductVariantInput = z.infer<typeof ProductVariantSchema>;

// Product Shipping Schema
export const ProductShippingSchema = z.object({
	packageType: PackageTypeEnum.default("BOX"),
	// Packaging weight
	weight: z.number().positive().optional(),
	// Package dimensions
	packageLength: z.number().positive().optional(),
	packageWidth: z.number().positive().optional(),
	packageHeight: z.number().positive().optional(),
	// Product weight
	productWeight: z.number().positive().optional(),
	// Product dimensions (for pallets)
	productLength: z.number().positive().optional(),
	productWidth: z.number().positive().optional(),
	productHeight: z.number().positive().optional(),
	// Flags
	isFragile: z.boolean().default(false),
	isFreeShipping: z.boolean().default(false),
	tags: z.array(z.string()).default([]),
});
export type ProductShippingInput = z.infer<typeof ProductShippingSchema>;

// Product SEO Schema
export const ProductSeoSchema = z.object({
	metaTitle: z.string().max(70).optional(),
	metaDescription: z.string().max(160).optional(),
	slug: z
		.string()
		.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
		.optional(),
});
export type ProductSeoInput = z.infer<typeof ProductSeoSchema>;

// Product Purchase Options Schema
export const ProductPurchaseOptionsSchema = z.object({
	type: PurchaseTypeEnum.default("ONE_TIME"),
	allowOneTimePurchase: z.boolean().default(true),
	subscriptionDiscount: z.number().min(0).max(100).optional(),
	subscriptionIntervals: z.array(SubscriptionIntervalEnum).optional(),
	preOrderReleaseDate: z.coerce.date().optional(),
	preOrderDepositPercent: z.number().min(0).max(100).optional(),
});
export type ProductPurchaseOptionsInput = z.infer<
	typeof ProductPurchaseOptionsSchema
>;

// Unit Price Schema
export const ProductUnitPriceSchema = z.object({
	unitPriceAmount: z.number().positive().optional(),
	unitPriceMeasurement: MeasurementUnitEnum.optional(),
	unitPriceBaseAmount: z.number().positive().optional(),
	unitPriceBaseMeasurement: MeasurementUnitEnum.optional(),
});
export type ProductUnitPriceInput = z.infer<typeof ProductUnitPriceSchema>;

// Currency Price Schema (for multi-currency pricing)
export const CurrencyPriceSchema = z.object({
	currencyId: z.string(),
	price: z.number().positive().nullable(),
	compareAtPrice: z.number().positive().nullable().optional(),
});
export type CurrencyPriceInput = z.infer<typeof CurrencyPriceSchema>;

// Full Create Product Schema
export const CreateProductSchema = z.object({
	// Basic info
	name: z.string().min(1, "Name is required").max(255),
	description: z.string().optional(),
	slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid URL format"),
	status: ProductStatusEnum.default("DRAFT"),

	// Categorization
	categoryId: z.string().min(1, "Category is required"),
	brandId: z.string().optional(),
	collectionIds: z.array(z.string()).optional(),

	// Pricing
	price: z.number().positive("Price must be greater than 0"),
	compareAtPrice: z.number().positive().optional(),
	costPerItem: z.number().positive().optional(),
	unitPrice: ProductUnitPriceSchema.optional(),

	// Inventory
	sku: z.string().optional(),
	trackStock: z.boolean().default(false),
	stock: z.number().int().min(0).optional(),
	lowStockThreshold: z.number().int().min(0).optional(),

	// Media
	media: z.array(ProductMediaSchema).optional(),

	// Variants
	variants: z.array(ProductVariantSchema).optional(),

	// Shipping
	shippingInfo: ProductShippingSchema.optional(),

	// Purchase options
	purchaseOptions: ProductPurchaseOptionsSchema.optional(),

	// SEO
	seo: ProductSeoSchema.optional(),

	// Multi-currency pricing (optional, for create with currency prices)
	currencyPrices: z.array(CurrencyPriceSchema).optional(),
});

export type CreateProductInput = z.infer<typeof CreateProductSchema>;

// Update Product Schema (all fields optional)
export const UpdateProductSchema = CreateProductSchema.partial().extend({
	id: z.string(),
});
export type UpdateProductInput = z.infer<typeof UpdateProductSchema>;

// Variant Group Schema (for form state)
export const VariantGroupSchema = z.object({
	name: z.string().min(1, "Variant name is required"),
	values: z
		.array(
			z.object({
				value: z.string().min(1),
				hexColor: z
					.string()
					.regex(/^#[0-9A-Fa-f]{6}$/)
					.optional(),
			}),
		)
		.min(1, "At least one value is required"),
});
export type VariantGroupInput = z.infer<typeof VariantGroupSchema>;

// Product filter schema for list page
export const ProductFilterSchema = z.object({
	search: z.string().optional(),
	status: z.array(ProductStatusEnum).optional(),
	categoryIds: z.array(z.string()).optional(),
	brandIds: z.array(z.string()).optional(),
	stockStatus: z
		.enum(["all", "in_stock", "low_stock", "out_of_stock"])
		.optional(),
	priceMin: z.number().min(0).optional(),
	priceMax: z.number().min(0).optional(),
	purchaseType: z.array(PurchaseTypeEnum).optional(),
	sortBy: z
		.enum([
			"name_asc",
			"name_desc",
			"price_asc",
			"price_desc",
			"created_asc",
			"created_desc",
			"stock_asc",
			"stock_desc",
		])
		.optional(),
	page: z.number().int().min(1).default(1),
	pageSize: z.number().int().min(1).max(100).default(20),
});
export type ProductFilterInput = z.infer<typeof ProductFilterSchema>;
