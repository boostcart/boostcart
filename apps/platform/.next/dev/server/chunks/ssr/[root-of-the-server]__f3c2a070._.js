module.exports = [
"[project]/apps/platform/src/schemas/product.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateProductSchema",
    ()=>CreateProductSchema,
    "MeasurementUnitEnum",
    ()=>MeasurementUnitEnum,
    "MediaTypeEnum",
    ()=>MediaTypeEnum,
    "PackageTypeEnum",
    ()=>PackageTypeEnum,
    "ProductFilterSchema",
    ()=>ProductFilterSchema,
    "ProductMediaSchema",
    ()=>ProductMediaSchema,
    "ProductPurchaseOptionsSchema",
    ()=>ProductPurchaseOptionsSchema,
    "ProductSeoSchema",
    ()=>ProductSeoSchema,
    "ProductShippingSchema",
    ()=>ProductShippingSchema,
    "ProductStatusEnum",
    ()=>ProductStatusEnum,
    "ProductUnitPriceSchema",
    ()=>ProductUnitPriceSchema,
    "ProductVariantSchema",
    ()=>ProductVariantSchema,
    "PurchaseTypeEnum",
    ()=>PurchaseTypeEnum,
    "SubscriptionIntervalEnum",
    ()=>SubscriptionIntervalEnum,
    "UpdateProductSchema",
    ()=>UpdateProductSchema,
    "VariantGroupSchema",
    ()=>VariantGroupSchema,
    "VariantOptionMetaSchema",
    ()=>VariantOptionMetaSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const ProductStatusEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "ACTIVE",
    "UNLISTED",
    "DRAFT"
]);
const MediaTypeEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "IMAGE",
    "VIDEO"
]);
const PurchaseTypeEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "ONE_TIME",
    "SUBSCRIPTION",
    "ONE_TIME_AND_SUBSCRIPTION",
    "PRE_ORDER"
]);
const SubscriptionIntervalEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "WEEKLY",
    "BI_WEEKLY",
    "MONTHLY",
    "BI_MONTHLY",
    "QUARTERLY",
    "YEARLY"
]);
const PackageTypeEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "BOX",
    "ENVELOPE",
    "SOFT_PACKAGE",
    "PALLET"
]);
const MeasurementUnitEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "KG",
    "G",
    "L",
    "ML",
    "M",
    "CM",
    "MM",
    "SQM",
    "SQCM",
    "PER_ITEM"
]);
const ProductMediaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    mediaType: MediaTypeEnum,
    altText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    order: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0)
});
const VariantOptionMetaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    optionName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    hexColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^#[0-9A-Fa-f]{6}$/).optional()
});
const ProductVariantSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    sku: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    priceAdjustment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(0),
    stock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).optional(),
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
    options: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default({}),
    optionMeta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(VariantOptionMetaSchema).optional()
});
const ProductShippingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    packageType: PackageTypeEnum.default("BOX"),
    // Packaging weight
    weight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    // Package dimensions
    packageLength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    packageWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    packageHeight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    // Product weight
    productWeight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    // Product dimensions (for pallets)
    productLength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    productWidth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    productHeight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    // Flags
    isFragile: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    isFreeShipping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([])
});
const ProductSeoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    metaTitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(70).optional(),
    metaDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(160).optional(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional()
});
const ProductPurchaseOptionsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: PurchaseTypeEnum.default("ONE_TIME"),
    allowOneTimePurchase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true),
    subscriptionDiscount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).optional(),
    subscriptionIntervals: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(SubscriptionIntervalEnum).optional(),
    preOrderReleaseDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.date().optional(),
    preOrderDepositPercent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).optional()
});
const ProductUnitPriceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    unitPriceAmount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    unitPriceMeasurement: MeasurementUnitEnum.optional(),
    unitPriceBaseAmount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    unitPriceBaseMeasurement: MeasurementUnitEnum.optional()
});
const CreateProductSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    // Basic info
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Name is required").max(255),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid URL format"),
    status: ProductStatusEnum.default("DRAFT"),
    // Categorization
    categoryId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Category is required"),
    brandId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    collectionIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    // Pricing
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive("Price must be greater than 0"),
    compareAtPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    costPerItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    unitPrice: ProductUnitPriceSchema.optional(),
    // Inventory
    sku: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    trackStock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    stock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).optional(),
    lowStockThreshold: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).optional(),
    // Media
    media: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ProductMediaSchema).optional(),
    // Variants
    variants: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ProductVariantSchema).optional(),
    // Shipping
    shippingInfo: ProductShippingSchema.optional(),
    // Purchase options
    purchaseOptions: ProductPurchaseOptionsSchema.optional(),
    // SEO
    seo: ProductSeoSchema.optional()
});
const UpdateProductSchema = CreateProductSchema.partial().extend({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const VariantGroupSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Variant name is required"),
    values: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        hexColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^#[0-9A-Fa-f]{6}$/).optional()
    })).min(1, "At least one value is required")
});
const ProductFilterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ProductStatusEnum).optional(),
    categoryIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    brandIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    stockStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "all",
        "in_stock",
        "low_stock",
        "out_of_stock"
    ]).optional(),
    priceMin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).optional(),
    priceMax: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).optional(),
    purchaseType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(PurchaseTypeEnum).optional(),
    sortBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "name_asc",
        "name_desc",
        "price_asc",
        "price_desc",
        "created_asc",
        "created_desc",
        "stock_asc",
        "stock_desc"
    ]).optional(),
    page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).default(1),
    pageSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).max(100).default(20)
});
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/packages/storage/src/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALLOWED_DOCUMENT_TYPES",
    ()=>ALLOWED_DOCUMENT_TYPES,
    "ALLOWED_FILE_TYPES",
    ()=>ALLOWED_FILE_TYPES,
    "ALLOWED_IMAGE_TYPES",
    ()=>ALLOWED_IMAGE_TYPES,
    "ALLOWED_VIDEO_TYPES",
    ()=>ALLOWED_VIDEO_TYPES,
    "formatFileSize",
    ()=>formatFileSize,
    "generateUploadKey",
    ()=>generateUploadKey,
    "getFileExtension",
    ()=>getFileExtension,
    "getFileType",
    ()=>getFileType,
    "getMimeType",
    ()=>getMimeType,
    "isDocumentFile",
    ()=>isDocumentFile,
    "isImageFile",
    ()=>isImageFile,
    "isVideoFile",
    ()=>isVideoFile,
    "validateFileSize",
    ()=>validateFileSize,
    "validateFileType",
    ()=>validateFileType
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
/**
 * Common MIME types mapping
 */ const MIME_TYPES = {
    // Images
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    avif: "image/avif",
    // Videos
    mp4: "video/mp4",
    webm: "video/webm",
    mov: "video/quicktime",
    avi: "video/x-msvideo",
    // Documents
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    xls: "application/vnd.ms-excel",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    csv: "text/csv",
    txt: "text/plain",
    json: "application/json"
};
function generateUploadKey(tenantId, originalFilename, folder) {
    const ext = getFileExtension(originalFilename);
    const uuid = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
    const filename = `${uuid}${ext ? `.${ext}` : ""}`;
    if (folder) {
        return `${tenantId}/${folder}/${filename}`;
    }
    return `${tenantId}/${filename}`;
}
function getFileExtension(filename) {
    const parts = filename.split(".");
    if (parts.length < 2) return "";
    return parts.pop()?.toLowerCase() ?? "";
}
function getMimeType(filename) {
    const ext = getFileExtension(filename);
    return MIME_TYPES[ext] ?? "application/octet-stream";
}
function isImageFile(mimeType) {
    return mimeType.startsWith("image/");
}
function isVideoFile(mimeType) {
    return mimeType.startsWith("video/");
}
function isDocumentFile(mimeType) {
    return mimeType.includes("pdf") || mimeType.includes("document") || mimeType.includes("spreadsheet") || mimeType.includes("text/");
}
function getFileType(mimeType) {
    if (isImageFile(mimeType)) return "image";
    if (isVideoFile(mimeType)) return "video";
    if (isDocumentFile(mimeType)) return "document";
    return "other";
}
function formatFileSize(bytes) {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = [
        "B",
        "KB",
        "MB",
        "GB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}
function validateFileSize(bytes, maxSizeMB = 10) {
    return bytes <= maxSizeMB * 1024 * 1024;
}
const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/svg+xml",
    "image/avif"
];
const ALLOWED_VIDEO_TYPES = [
    "video/mp4",
    "video/webm",
    "video/quicktime"
];
const ALLOWED_DOCUMENT_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
    "text/plain"
];
const ALLOWED_FILE_TYPES = [
    ...ALLOWED_IMAGE_TYPES,
    ...ALLOWED_VIDEO_TYPES,
    ...ALLOWED_DOCUMENT_TYPES
];
function validateFileType(mimeType, allowedTypes = ALLOWED_FILE_TYPES) {
    return allowedTypes.includes(mimeType);
}
}),
"[project]/packages/storage/src/r2.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "R2Client",
    ()=>R2Client,
    "createR2Client",
    ()=>createR2Client
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs, [project]/node_modules/@aws-sdk/client-s3)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/s3-request-presigner/dist-es/getSignedUrl.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/storage/src/utils.ts [app-rsc] (ecmascript)");
;
;
;
class R2Client {
    client;
    bucketName;
    publicUrl;
    constructor(config){
        // Support custom endpoint (for regional buckets) or construct default
        const endpoint = config.endpoint ?? `https://${config.accountId}.r2.cloudflarestorage.com`;
        this.client = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["S3Client"]({
            region: "auto",
            endpoint,
            credentials: {
                accessKeyId: config.accessKeyId,
                secretAccessKey: config.secretAccessKey
            }
        });
        this.bucketName = config.bucketName;
        // Use custom domain or construct R2 public URL
        this.publicUrl = config.publicUrl ?? `https://${config.bucketName}.${config.accountId}.r2.cloudflarestorage.com`;
    }
    /**
   * Upload a file directly to R2
   */ async upload(file, options) {
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateUploadKey"])(options.tenantId, options.filename, options.folder);
        const contentType = options.contentType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMimeType"])(options.filename);
        const params = {
            Bucket: this.bucketName,
            Key: key,
            Body: file,
            ContentType: contentType,
            Metadata: {
                ...options.metadata,
                tenantId: options.tenantId,
                originalFilename: options.filename
            }
        };
        await this.client.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["PutObjectCommand"](params));
        // Get file size
        const headResponse = await this.client.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["HeadObjectCommand"]({
            Bucket: this.bucketName,
            Key: key
        }));
        return {
            key,
            url: this.getPublicUrl(key),
            filename: options.filename,
            size: headResponse.ContentLength ?? 0,
            contentType
        };
    }
    /**
   * Generate a presigned URL for client-side uploads
   * This allows direct upload to R2 without going through the server
   */ async getPresignedUploadUrl(options, expiresIn = 3600 // 1 hour
    ) {
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateUploadKey"])(options.tenantId, options.filename, options.folder);
        const contentType = options.contentType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMimeType"])(options.filename);
        const command = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["PutObjectCommand"]({
            Bucket: this.bucketName,
            Key: key,
            ContentType: contentType,
            Metadata: {
                tenantId: options.tenantId,
                originalFilename: options.filename
            }
        });
        const uploadUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSignedUrl"])(this.client, command, {
            expiresIn
        });
        return {
            uploadUrl,
            key,
            publicUrl: this.getPublicUrl(key)
        };
    }
    /**
   * Get a presigned URL for downloading/viewing a private file
   */ async getPresignedDownloadUrl(key, expiresIn = 3600) {
        const command = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["GetObjectCommand"]({
            Bucket: this.bucketName,
            Key: key
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSignedUrl"])(this.client, command, {
            expiresIn
        });
    }
    /**
   * Delete a file from R2
   */ async delete(key) {
        await this.client.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["DeleteObjectCommand"]({
            Bucket: this.bucketName,
            Key: key
        }));
    }
    /**
   * Delete multiple files from R2
   */ async deleteMany(keys) {
        await Promise.all(keys.map((key)=>this.delete(key)));
    }
    /**
   * Check if a file exists
   */ async exists(key) {
        try {
            await this.client.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["HeadObjectCommand"]({
                Bucket: this.bucketName,
                Key: key
            }));
            return true;
        } catch  {
            return false;
        }
    }
    /**
   * List files in a folder
   */ async listFiles(tenantId, folder, maxKeys = 1000) {
        const prefix = folder ? `${tenantId}/${folder}/` : `${tenantId}/`;
        const response = await this.client.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["ListObjectsV2Command"]({
            Bucket: this.bucketName,
            Prefix: prefix,
            MaxKeys: maxKeys
        }));
        return response.Contents?.map((item)=>({
                key: item.Key,
                size: item.Size ?? 0,
                lastModified: item.LastModified,
                url: this.getPublicUrl(item.Key)
            })) ?? [];
    }
    /**
   * Get public URL for a file
   */ getPublicUrl(key) {
        return `${this.publicUrl}/${key}`;
    }
    /**
   * Extract key from public URL
   */ getKeyFromUrl(url) {
        if (!url.startsWith(this.publicUrl)) return null;
        return url.slice(this.publicUrl.length + 1);
    }
}
function createR2Client(config) {
    return new R2Client(config);
}
}),
"[project]/packages/storage/src/folders.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Flat folder structure for organizing media files.
 * Files are stored with paths like: /{tenantId}/{folder}/{filename}
 */ __turbopack_context__.s([
    "FOLDERS",
    ()=>FOLDERS,
    "FOLDER_META",
    ()=>FOLDER_META,
    "getFolderLabel",
    ()=>getFolderLabel,
    "isValidFolder",
    ()=>isValidFolder
]);
const FOLDERS = {
    ROOT: null,
    PRODUCTS: "products",
    BLOG: "blog",
    PAGES: "pages",
    MARKETING: "marketing",
    AVATARS: "avatars",
    OTHER: "other"
};
const FOLDER_META = {
    products: {
        label: "Products",
        description: "Product images and galleries"
    },
    blog: {
        label: "Blog",
        description: "Blog post images and media"
    },
    pages: {
        label: "Pages",
        description: "Static page images"
    },
    marketing: {
        label: "Marketing",
        description: "Banners, promotional images"
    },
    avatars: {
        label: "Avatars",
        description: "User and customer avatars"
    },
    other: {
        label: "Other",
        description: "Miscellaneous files"
    }
};
function getFolderLabel(folder) {
    if (folder === null) return "All Files";
    return FOLDER_META[folder]?.label ?? folder;
}
function isValidFolder(folder) {
    if (folder === null) return true;
    return Object.values(FOLDERS).includes(folder);
}
}),
"[project]/packages/storage/src/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$r2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/storage/src/r2.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/storage/src/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$folders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/storage/src/folders.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/apps/platform/src/server/storage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/storage/src/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$r2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/storage/src/r2.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/env.js [app-rsc] (ecmascript)");
;
;
/**
 * R2 Storage Client Singleton
 * Used for file uploads throughout the platform
 */ function createStorageClient() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$r2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["R2Client"]({
        accountId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].R2_ACCOUNT_ID,
        accessKeyId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].R2_ACCESS_KEY_ID,
        secretAccessKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].R2_SECRET_ACCESS_KEY,
        bucketName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].R2_BUCKET_NAME,
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].R2_ENDPOINT,
        publicUrl: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].R2_CUSTOM_DOMAIN
    });
}
// Global singleton for storage client
const globalForStorage = globalThis;
const storage = globalForStorage.storage ?? createStorageClient();
if ("TURBOPACK compile-time truthy", 1) {
    globalForStorage.storage = storage;
}
}),
"[project]/apps/platform/src/server/services/media-cleanup.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "cleanupBlogPostImages",
    ()=>cleanupBlogPostImages,
    "cleanupPageImages",
    ()=>cleanupPageImages,
    "cleanupProductMedia",
    ()=>cleanupProductMedia,
    "cleanupUnusedImages",
    ()=>cleanupUnusedImages,
    "extractR2ImageUrls",
    ()=>extractR2ImageUrls,
    "isImageUsedElsewhere",
    ()=>isImageUsedElsewhere,
    "urlToR2Key",
    ()=>urlToR2Key
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/env.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/storage.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function extractR2ImageUrls(htmlContent) {
    if (!htmlContent) return [];
    const publicUrl = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].R2_CUSTOM_DOMAIN;
    if (!publicUrl) return [];
    // Match img src attributes that point to our R2 bucket
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    const urls = [];
    let match;
    while(true){
        match = imgRegex.exec(htmlContent);
        if (!match) break;
        const url = match[1];
        if (url?.startsWith(publicUrl)) {
            urls.push(url);
        }
    }
    return urls;
}
function urlToR2Key(url) {
    const publicUrl = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].R2_CUSTOM_DOMAIN;
    if (!publicUrl || !url.startsWith(publicUrl)) return null;
    // Remove the public URL prefix to get the key
    return url.slice(publicUrl.length + 1); // +1 for the trailing slash
}
/**
 * Check if an image URL is used in any blog post content
 */ async function isImageUsedInBlogPosts(url, tenantId, excludePostId) {
    const posts = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].blogPostTranslation.findMany({
        where: {
            post: {
                tenantId
            },
            ...excludePostId && {
                postId: {
                    not: excludePostId
                }
            },
            content: {
                contains: url
            }
        },
        select: {
            id: true
        },
        take: 1
    });
    return posts.length > 0;
}
/**
 * Check if an image URL is used in any page content
 */ async function isImageUsedInPages(url, tenantId, excludePageId) {
    const pages = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].pageTranslation.findMany({
        where: {
            page: {
                tenantId
            },
            ...excludePageId && {
                pageId: {
                    not: excludePageId
                }
            },
            content: {
                contains: url
            }
        },
        select: {
            id: true
        },
        take: 1
    });
    return pages.length > 0;
}
/**
 * Check if an image URL is used in product media
 */ async function isImageUsedInProducts(url, tenantId) {
    const media = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].productMedia.findFirst({
        where: {
            product: {
                tenantId
            },
            url
        },
        select: {
            id: true
        }
    });
    return !!media;
}
async function isImageUsedElsewhere(url, tenantId, context = {}) {
    const [inBlogPosts, inPages, inProducts] = await Promise.all([
        isImageUsedInBlogPosts(url, tenantId, context.excludeBlogPostId),
        isImageUsedInPages(url, tenantId, context.excludePageId),
        isImageUsedInProducts(url, tenantId)
    ]);
    return inBlogPosts || inPages || inProducts;
}
async function cleanupUnusedImages(imageUrls, tenantId, context = {}) {
    let deletedCount = 0;
    for (const url of imageUrls){
        const isUsed = await isImageUsedElsewhere(url, tenantId, context);
        if (!isUsed) {
            const key = urlToR2Key(url);
            if (key) {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["storage"].delete(key);
                    deletedCount++;
                    console.log(`[Media Cleanup] Deleted unused image: ${key}`);
                } catch (error) {
                    console.error(`[Media Cleanup] Failed to delete image: ${key}`, error);
                }
            }
        }
    }
    return deletedCount;
}
async function cleanupBlogPostImages(content, tenantId, blogPostId) {
    const imageUrls = extractR2ImageUrls(content);
    if (imageUrls.length === 0) return 0;
    return cleanupUnusedImages(imageUrls, tenantId, {
        excludeBlogPostId: blogPostId
    });
}
async function cleanupPageImages(content, tenantId, pageId) {
    const imageUrls = extractR2ImageUrls(content);
    if (imageUrls.length === 0) return 0;
    return cleanupUnusedImages(imageUrls, tenantId, {
        excludePageId: pageId
    });
}
async function cleanupProductMedia(mediaUrls, tenantId) {
    let deletedCount = 0;
    for (const url of mediaUrls){
        // Check if the URL is from our R2 bucket
        const key = urlToR2Key(url);
        if (!key) continue;
        // Check if this media is used in other products or content
        const isUsed = await isImageUsedElsewhere(url, tenantId);
        if (!isUsed) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["storage"].delete(key);
                deletedCount++;
                console.log(`[Media Cleanup] Deleted product media: ${key}`);
            } catch (error) {
                console.error(`[Media Cleanup] Failed to delete media: ${key}`, error);
            }
        }
    }
    return deletedCount;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/src/lib/tenant.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "clearTenantCache",
    ()=>clearTenantCache,
    "getTenantByDomain",
    ()=>getTenantByDomain,
    "getTenantBySlug",
    ()=>getTenantBySlug,
    "getTenantFromRequest",
    ()=>getTenantFromRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
// Cache for tenant lookups
const tenantCache = new Map();
const CACHE_TTL = 60 * 1000; // 1 minute
async function getTenantBySlug(slug) {
    // Check cache first
    const cached = tenantCache.get(`slug:${slug}`);
    if (cached && cached.expiry > Date.now()) {
        return cached.tenant;
    }
    const tenant = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenant.findFirst({
        where: {
            slug,
            isActive: true,
            deletedAt: null
        }
    });
    if (tenant) {
        tenantCache.set(`slug:${slug}`, {
            tenant,
            expiry: Date.now() + CACHE_TTL
        });
    }
    return tenant;
}
async function getTenantByDomain(domain) {
    // Check cache first
    const cached = tenantCache.get(`domain:${domain}`);
    if (cached && cached.expiry > Date.now()) {
        return cached.tenant;
    }
    const tenantDomain = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.findFirst({
        where: {
            domain,
            dnsVerified: true
        },
        include: {
            tenant: true
        }
    });
    if (tenantDomain?.tenant && tenantDomain.tenant.isActive) {
        tenantCache.set(`domain:${domain}`, {
            tenant: tenantDomain.tenant,
            expiry: Date.now() + CACHE_TTL
        });
        return tenantDomain.tenant;
    }
    return null;
}
async function getTenantFromRequest(hostname) {
    if (!hostname) return null;
    // Remove port if present
    const host = hostname.split(":")[0];
    if (!host) return null;
    // Check if it's the main platform domain
    const platformDomains = [
        "boostcart.bg",
        "localhost",
        "127.0.0.1"
    ];
    const isMainDomain = platformDomains.some((d)=>host === d || host === `www.${d}`);
    if (isMainDomain) {
        // No tenant for main domain
        return null;
    }
    // Check for subdomain (e.g., store.boostcart.bg)
    const subdomainMatch = host.match(/^([a-z0-9-]+)\.boostcart\.bg$/i);
    if (subdomainMatch?.[1]) {
        const slug = subdomainMatch[1];
        // Skip common subdomains
        if ([
            "www",
            "api",
            "admin",
            "staging",
            "dev"
        ].includes(slug)) {
            return null;
        }
        return getTenantBySlug(slug);
    }
    // Check for local dev subdomain (e.g., store.localhost)
    const localSubdomainMatch = host.match(/^([a-z0-9-]+)\.localhost$/i);
    if (localSubdomainMatch?.[1]) {
        return getTenantBySlug(localSubdomainMatch[1]);
    }
    // Otherwise, check if it's a custom domain
    return getTenantByDomain(host);
}
function clearTenantCache(identifier) {
    if (identifier) {
        tenantCache.delete(`slug:${identifier}`);
        tenantCache.delete(`domain:${identifier}`);
    } else {
        tenantCache.clear();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/src/server/tenant.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"001d80d23ee4de084e157d4e89620a1865cf7a84db":"requireTenant","00ac6fbe1edbf277cbe10ce51119339897cf9c40fc":"requireAdminTenant","00ef7ea9c506c03d0e1da36234d82ac9c2fbdbb80d":"hasTenantContext","7f7d901350253c3c2a57e0fe127f4f59ebb0a7828e":"getCurrentTenant","7fb08b94911a0ec057cd4150fe6878164206608e71":"getAdminTenant"},"",""] */ __turbopack_context__.s([
    "getAdminTenant",
    ()=>getAdminTenant,
    "getCurrentTenant",
    ()=>getCurrentTenant,
    "hasTenantContext",
    ()=>hasTenantContext,
    "requireAdminTenant",
    ()=>requireAdminTenant,
    "requireTenant",
    ()=>requireTenant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/auth/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const getCurrentTenant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const headersList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    // Check for tenant slug from subdomain
    const tenantSlug = headersList.get("x-tenant-slug");
    if (tenantSlug) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantBySlug"])(tenantSlug);
    }
    // Check for custom domain
    const customDomain = headersList.get("x-custom-domain");
    if (customDomain) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantByDomain"])(customDomain);
    }
    return null;
});
const getAdminTenant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"])();
    if (!session?.user?.id) {
        return null;
    }
    // Get the user's primary store (first store they have access to)
    const staffRecord = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantStaff.findFirst({
        where: {
            userId: session.user.id
        },
        include: {
            tenant: true
        },
        orderBy: {
            createdAt: "asc"
        }
    });
    return staffRecord?.tenant ?? null;
});
async function requireTenant() {
    const tenant = await getCurrentTenant();
    if (!tenant) {
        throw new Error("Tenant not found");
    }
    return tenant;
}
async function requireAdminTenant() {
    // First try storefront context (subdomain access)
    const storefrontTenant = await getCurrentTenant();
    if (storefrontTenant) {
        return storefrontTenant;
    }
    // Fall back to user's store (main domain admin access)
    const adminTenant = await getAdminTenant();
    if (adminTenant) {
        return adminTenant;
    }
    throw new Error("No tenant context found. Please create or select a store.");
}
async function hasTenantContext() {
    const tenant = await getCurrentTenant();
    return tenant !== null;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    requireTenant,
    requireAdminTenant,
    hasTenantContext,
    getCurrentTenant,
    getAdminTenant
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireTenant, "001d80d23ee4de084e157d4e89620a1865cf7a84db", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireAdminTenant, "00ac6fbe1edbf277cbe10ce51119339897cf9c40fc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(hasTenantContext, "00ef7ea9c506c03d0e1da36234d82ac9c2fbdbb80d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurrentTenant, "7f7d901350253c3c2a57e0fe127f4f59ebb0a7828e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdminTenant, "7fb08b94911a0ec057cd4150fe6878164206608e71", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/src/lib/rbac.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canDelete",
    ()=>canDelete,
    "canManage",
    ()=>canManage,
    "canView",
    ()=>canView,
    "getPermissions",
    ()=>getPermissions,
    "getRoleDescription",
    ()=>getRoleDescription,
    "getRoleDisplayName",
    ()=>getRoleDisplayName,
    "hasAllPermissions",
    ()=>hasAllPermissions,
    "hasAnyPermission",
    ()=>hasAnyPermission,
    "hasHigherOrEqualAuthority",
    ()=>hasHigherOrEqualAuthority,
    "hasPermission",
    ()=>hasPermission
]);
/**
 * Permission matrix: defines which permissions each role has
 */ const ROLE_PERMISSIONS = {
    OWNER: [
        // Full access to everything
        "dashboard:view",
        "orders:view",
        "orders:manage",
        "orders:delete",
        "products:view",
        "products:manage",
        "products:delete",
        "categories:view",
        "categories:manage",
        "collections:view",
        "collections:manage",
        "brands:view",
        "brands:manage",
        "gift-cards:view",
        "gift-cards:manage",
        "customers:view",
        "customers:manage",
        "customers:delete",
        "content:view",
        "content:manage",
        "files:view",
        "files:manage",
        "discounts:view",
        "discounts:manage",
        "promo-codes:view",
        "promo-codes:manage",
        "reviews:view",
        "reviews:manage",
        "analytics:view",
        "settings:view",
        "settings:manage",
        "locales:view",
        "locales:manage",
        "payments:view",
        "payments:manage",
        "shipping:view",
        "shipping:manage",
        "staff:view",
        "staff:manage",
        "staff:delete",
        "billing:view",
        "billing:manage",
        "store:delete"
    ],
    ADMIN: [
        // Almost full access, except billing management and store deletion
        "dashboard:view",
        "orders:view",
        "orders:manage",
        "orders:delete",
        "products:view",
        "products:manage",
        "products:delete",
        "categories:view",
        "categories:manage",
        "collections:view",
        "collections:manage",
        "brands:view",
        "brands:manage",
        "gift-cards:view",
        "gift-cards:manage",
        "customers:view",
        "customers:manage",
        "customers:delete",
        "content:view",
        "content:manage",
        "files:view",
        "files:manage",
        "discounts:view",
        "discounts:manage",
        "promo-codes:view",
        "promo-codes:manage",
        "reviews:view",
        "reviews:manage",
        "analytics:view",
        "settings:view",
        "settings:manage",
        "locales:view",
        "locales:manage",
        "payments:view",
        "payments:manage",
        "shipping:view",
        "shipping:manage",
        "staff:view",
        "staff:manage",
        "billing:view"
    ],
    MANAGER: [
        // Can manage products, orders, customers, content
        "dashboard:view",
        "orders:view",
        "orders:manage",
        "products:view",
        "products:manage",
        "categories:view",
        "categories:manage",
        "collections:view",
        "collections:manage",
        "brands:view",
        "brands:manage",
        "gift-cards:view",
        "gift-cards:manage",
        "customers:view",
        "customers:manage",
        "content:view",
        "content:manage",
        "files:view",
        "files:manage",
        "discounts:view",
        "discounts:manage",
        "promo-codes:view",
        "promo-codes:manage",
        "reviews:view",
        "reviews:manage",
        "analytics:view",
        "settings:view",
        "locales:view",
        "payments:view",
        "shipping:view"
    ],
    SUPPORT: [
        // Can view most things, manage orders and customers only
        "dashboard:view",
        "orders:view",
        "orders:manage",
        "products:view",
        "categories:view",
        "collections:view",
        "brands:view",
        "gift-cards:view",
        "customers:view",
        "customers:manage",
        "content:view",
        "files:view",
        "discounts:view",
        "promo-codes:view",
        "reviews:view",
        "reviews:manage"
    ],
    VIEWER: [
        // Read-only access
        "dashboard:view",
        "orders:view",
        "products:view",
        "categories:view",
        "collections:view",
        "brands:view",
        "gift-cards:view",
        "customers:view",
        "content:view",
        "files:view",
        "discounts:view",
        "promo-codes:view",
        "reviews:view",
        "analytics:view",
        "settings:view",
        "locales:view",
        "payments:view",
        "shipping:view"
    ]
};
function hasPermission(role, permission) {
    if (!role) return false;
    const permissions = ROLE_PERMISSIONS[role];
    if (!permissions) return false;
    return permissions.includes(permission);
}
function hasAnyPermission(role, permissions) {
    return permissions.some((permission)=>hasPermission(role, permission));
}
function hasAllPermissions(role, permissions) {
    return permissions.every((permission)=>hasPermission(role, permission));
}
function getPermissions(role) {
    if (!role) return [];
    return ROLE_PERMISSIONS[role] || [];
}
function canManage(role, resource) {
    return hasPermission(role, `${resource}:manage`);
}
function canView(role, resource) {
    return hasPermission(role, `${resource}:view`);
}
function canDelete(role, resource) {
    return hasPermission(role, `${resource}:delete`);
}
/**
 * Role hierarchy for comparison
 * Higher number = more authority
 */ const ROLE_HIERARCHY = {
    OWNER: 100,
    ADMIN: 80,
    MANAGER: 60,
    SUPPORT: 40,
    VIEWER: 20
};
function hasHigherOrEqualAuthority(roleA, roleB) {
    if (!roleA || !roleB) return false;
    const levelA = ROLE_HIERARCHY[roleA] || 0;
    const levelB = ROLE_HIERARCHY[roleB] || 0;
    return levelA >= levelB;
}
function getRoleDisplayName(role) {
    switch(role){
        case "OWNER":
            return "Owner";
        case "ADMIN":
            return "Administrator";
        case "MANAGER":
            return "Manager";
        case "SUPPORT":
            return "Support";
        case "VIEWER":
            return "Viewer";
        default:
            return "Unknown";
    }
}
function getRoleDescription(role) {
    switch(role){
        case "OWNER":
            return "Full access to everything including billing and staff management";
        case "ADMIN":
            return "Manage all store operations except billing";
        case "MANAGER":
            return "Manage products, orders, customers, and content";
        case "SUPPORT":
            return "Handle customer orders and inquiries";
        case "VIEWER":
            return "View-only access to store data";
        default:
            return "Unknown role";
    }
}
}),
"[project]/apps/platform/src/server/api/permissions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00a706a94a67eaefa12aeb99bd64b48e37f9f0772b":"getStaffContext","4045cc2fe045129d6de17f612ff98135a04ffafd77":"requireManagePermission","405327669be82b5cfae08b81e3953032e2dc2eaaec":"requireAnyPermission","405354f277500459ea1dcb0c25f54a859e4c7b9e90":"checkPermission","4055722279a37aeef7bab0f5707cb866ff97fb7787":"requireDeletePermission","407e524d5835fb8dc5e809ae480a06610149a5d886":"requirePermission","40e71060068dccb6588d96b5f289a9e5ac38ce84d8":"requireAllPermissions","40eb18c7363d41f684334f8756ed1ba9adde87b22c":"requireViewPermission"},"",""] */ __turbopack_context__.s([
    "checkPermission",
    ()=>checkPermission,
    "getStaffContext",
    ()=>getStaffContext,
    "requireAllPermissions",
    ()=>requireAllPermissions,
    "requireAnyPermission",
    ()=>requireAnyPermission,
    "requireDeletePermission",
    ()=>requireDeletePermission,
    "requireManagePermission",
    ()=>requireManagePermission,
    "requirePermission",
    ()=>requirePermission,
    "requireViewPermission",
    ()=>requireViewPermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/auth/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function getStaffContext() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"])();
    if (!session?.user?.id) {
        throw new Error("Unauthorized: Not authenticated");
    }
    // Get tenant context (from subdomain or user's store membership)
    const tenant = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminTenant"])();
    // Get staff record
    const staff = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantStaff.findFirst({
        where: {
            userId: session.user.id,
            tenantId: tenant.id
        },
        select: {
            role: true
        }
    });
    if (!staff) {
        throw new Error("Unauthorized: Not a staff member of this tenant");
    }
    return {
        userId: session.user.id,
        tenantId: tenant.id,
        role: staff.role
    };
}
async function requirePermission(permission) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasPermission"])(context.role, permission)) {
        throw new Error(`Forbidden: Missing permission '${permission}'`);
    }
    return context;
}
async function requireAnyPermission(permissions) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAnyPermission"])(context.role, permissions)) {
        throw new Error(`Forbidden: Missing required permissions`);
    }
    return context;
}
async function requireAllPermissions(permissions) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAllPermissions"])(context.role, permissions)) {
        throw new Error(`Forbidden: Missing required permissions`);
    }
    return context;
}
async function requireManagePermission(resource) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canManage"])(context.role, resource)) {
        throw new Error(`Forbidden: Cannot manage '${resource}'`);
    }
    return context;
}
async function requireViewPermission(resource) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canView"])(context.role, resource)) {
        throw new Error(`Forbidden: Cannot view '${resource}'`);
    }
    return context;
}
async function requireDeletePermission(resource) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canDelete"])(context.role, resource)) {
        throw new Error(`Forbidden: Cannot delete '${resource}'`);
    }
    return context;
}
async function checkPermission(permission) {
    try {
        const context = await getStaffContext();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasPermission"])(context.role, permission);
    } catch  {
        return false;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getStaffContext,
    requirePermission,
    requireAnyPermission,
    requireAllPermissions,
    requireManagePermission,
    requireViewPermission,
    requireDeletePermission,
    checkPermission
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStaffContext, "00a706a94a67eaefa12aeb99bd64b48e37f9f0772b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requirePermission, "407e524d5835fb8dc5e809ae480a06610149a5d886", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireAnyPermission, "405327669be82b5cfae08b81e3953032e2dc2eaaec", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireAllPermissions, "40e71060068dccb6588d96b5f289a9e5ac38ce84d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireManagePermission, "4045cc2fe045129d6de17f612ff98135a04ffafd77", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireViewPermission, "40eb18c7363d41f684334f8756ed1ba9adde87b22c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireDeletePermission, "4055722279a37aeef7bab0f5707cb866ff97fb7787", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkPermission, "405354f277500459ea1dcb0c25f54a859e4c7b9e90", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"002b285ac44bb10c639d5761f850a8d1dfb8d985ac":"getTrashedProducts","400bf41a515368060d000c008be7121072342d4535":"getProducts","402ea997692a13868eee414c68b575f51a3565ed2c":"permanentlyDeleteProduct","405d7bf5b1e1ff67b41050f9c6b3b647526820a0d9":"deleteProduct","4060911a32edbd31b948aaa6702daa3ada479c753b":"cleanupTrashedProducts","409c4a4f8e5330a0e68c508441706a640b9ab52108":"restoreProducts","40a8808b8e32bafcff7791d72c167339ca3122ac12":"createProduct","40ab7906bad5c2063546fb66caa71b48507dbc294b":"updateProduct","40b7b814e80fab32f7122cdc051e6e85345e1efb0a":"getProduct","40c29a95514127093c8b7487a1c36c9931ae89bb5c":"permanentlyDeleteProducts","40f79fbc3157e5b5e7dc8eba1d68fccfe13cc6045d":"restoreProduct"},"",""] */ __turbopack_context__.s([
    "cleanupTrashedProducts",
    ()=>cleanupTrashedProducts,
    "createProduct",
    ()=>createProduct,
    "deleteProduct",
    ()=>deleteProduct,
    "getProduct",
    ()=>getProduct,
    "getProducts",
    ()=>getProducts,
    "getTrashedProducts",
    ()=>getTrashedProducts,
    "permanentlyDeleteProduct",
    ()=>permanentlyDeleteProduct,
    "permanentlyDeleteProducts",
    ()=>permanentlyDeleteProducts,
    "restoreProduct",
    ()=>restoreProduct,
    "restoreProducts",
    ()=>restoreProducts,
    "updateProduct",
    ()=>updateProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$schemas$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/schemas/product.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$services$2f$media$2d$cleanup$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/services/media-cleanup.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/permissions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$services$2f$media$2d$cleanup$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$services$2f$media$2d$cleanup$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
// Helper to check access and get tenant context for admin operations (read access)
async function requireStoreAccess() {
    const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireViewPermission"])("products");
    return context;
}
// Helper for write operations (create/update)
async function requireProductManageAccess() {
    const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireManagePermission"])("products");
    return context;
}
// Helper for delete operations
async function requireProductDeleteAccess() {
    const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireDeletePermission"])("products");
    return context;
}
async function getProducts(filters) {
    const { tenantId } = await requireStoreAccess();
    const validatedFilters = filters ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$schemas$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductFilterSchema"].parse(filters) : {
        page: 1,
        pageSize: 20
    };
    const { page, pageSize, search, status, categoryIds, brandIds, stockStatus, priceMin, priceMax, sortBy } = validatedFilters;
    const where = {
        tenantId,
        deletedAt: null
    };
    // Search
    if (search) {
        where.OR = [
            {
                sku: {
                    contains: search,
                    mode: "insensitive"
                }
            },
            {
                translations: {
                    some: {
                        name: {
                            contains: search,
                            mode: "insensitive"
                        }
                    }
                }
            }
        ];
    }
    // Status filter
    if (status && status.length > 0) {
        where.status = {
            in: status
        };
    }
    // Category filter
    if (categoryIds && categoryIds.length > 0) {
        where.categoryId = {
            in: categoryIds
        };
    }
    // Brand filter
    if (brandIds && brandIds.length > 0) {
        where.brandId = {
            in: brandIds
        };
    }
    // Stock status filter
    if (stockStatus) {
        switch(stockStatus){
            case "in_stock":
                where.OR = [
                    {
                        trackStock: false
                    },
                    {
                        stock: {
                            gt: 10
                        }
                    }
                ];
                break;
            case "low_stock":
                where.trackStock = true;
                where.stock = {
                    gt: 0,
                    lte: 10
                };
                break;
            case "out_of_stock":
                where.trackStock = true;
                where.stock = 0;
                break;
        }
    }
    // Price filter
    if (priceMin !== undefined || priceMax !== undefined) {
        where.price = {};
        if (priceMin !== undefined) {
            where.price.gte = priceMin;
        }
        if (priceMax !== undefined) {
            where.price.lte = priceMax;
        }
    }
    // Sorting
    const orderBy = [];
    if (sortBy) {
        switch(sortBy){
            case "name_asc":
            case "name_desc":
                break;
            case "price_asc":
                orderBy.push({
                    price: "asc"
                });
                break;
            case "price_desc":
                orderBy.push({
                    price: "desc"
                });
                break;
            case "created_asc":
                orderBy.push({
                    createdAt: "asc"
                });
                break;
            case "created_desc":
                orderBy.push({
                    createdAt: "desc"
                });
                break;
            case "stock_asc":
                orderBy.push({
                    stock: "asc"
                });
                break;
            case "stock_desc":
                orderBy.push({
                    stock: "desc"
                });
                break;
        }
    }
    if (orderBy.length === 0) {
        orderBy.push({
            createdAt: "desc"
        });
    }
    const [products, total] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findMany({
            where,
            orderBy,
            skip: (page - 1) * pageSize,
            take: pageSize,
            include: {
                category: {
                    include: {
                        translations: {
                            where: {
                                localeId: "en"
                            },
                            take: 1
                        }
                    }
                },
                brand: {
                    include: {
                        translations: {
                            where: {
                                localeId: "en"
                            },
                            take: 1
                        }
                    }
                },
                translations: {
                    where: {
                        localeId: "en"
                    },
                    take: 1
                },
                media: {
                    orderBy: {
                        order: "asc"
                    },
                    take: 1
                }
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.count({
            where
        })
    ]);
    return {
        products: products.map((p)=>({
                id: p.id,
                slug: p.slug,
                status: p.status,
                price: p.price,
                compareAtPrice: p.compareAtPrice,
                sku: p.sku,
                trackStock: p.trackStock,
                stock: p.stock,
                name: p.translations[0]?.name ?? "Untitled",
                description: p.translations[0]?.description,
                categoryId: p.categoryId,
                categoryName: p.category?.translations[0]?.name ?? "Uncategorized",
                brandId: p.brandId,
                brandName: p.brand?.translations[0]?.name,
                imageUrl: p.media[0]?.url,
                createdAt: p.createdAt,
                updatedAt: p.updatedAt
            })),
        pagination: {
            page,
            pageSize,
            total,
            totalPages: Math.ceil(total / pageSize)
        }
    };
}
async function getProduct(productId) {
    const { tenantId } = await requireStoreAccess();
    const product = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findFirst({
        where: {
            id: productId,
            tenantId
        },
        include: {
            translations: true,
            media: {
                orderBy: {
                    order: "asc"
                }
            },
            variants: {
                include: {
                    optionMeta: true
                }
            },
            shippingInfo: true,
            collectionProducts: {
                include: {
                    collection: {
                        include: {
                            translations: {
                                where: {
                                    localeId: "en"
                                },
                                take: 1
                            }
                        }
                    }
                }
            }
        }
    });
    if (!product) {
        throw new Error("Product not found");
    }
    const englishTranslation = product.translations.find((t)=>t.localeId === "en");
    return {
        id: product.id,
        slug: product.slug,
        status: product.status,
        categoryId: product.categoryId,
        brandId: product.brandId,
        price: product.price,
        compareAtPrice: product.compareAtPrice,
        costPerItem: product.costPerItem,
        sku: product.sku,
        trackStock: product.trackStock,
        stock: product.stock,
        lowStockThreshold: product.lowStockThreshold,
        purchaseType: product.purchaseType,
        subscriptionDiscountPercent: product.subscriptionDiscountPercent,
        subscriptionIntervals: product.subscriptionIntervals,
        preOrderReleaseDate: product.preOrderReleaseDate,
        preOrderDepositPercent: product.preOrderDepositPercent,
        unitPriceAmount: product.unitPriceAmount,
        unitPriceMeasurement: product.unitPriceMeasurement,
        unitPriceBaseAmount: product.unitPriceBaseAmount,
        unitPriceBaseMeasurement: product.unitPriceBaseMeasurement,
        name: englishTranslation?.name ?? "",
        description: englishTranslation?.description ?? "",
        media: product.media.map((m)=>({
                id: m.id,
                url: m.url,
                mediaType: m.mediaType,
                altText: m.altText,
                order: m.order
            })),
        variants: product.variants.map((v)=>({
                id: v.id,
                sku: v.sku,
                price: v.price,
                priceAdjustment: v.priceAdjustment,
                stock: v.stock,
                imageUrl: v.imageUrl,
                options: v.options,
                optionMeta: v.optionMeta
            })),
        shippingInfo: product.shippingInfo ? {
            packageType: product.shippingInfo.packageType,
            packagingWeightKg: product.shippingInfo.packagingWeightKg,
            packagingLengthCm: product.shippingInfo.packagingLengthCm,
            packagingWidthCm: product.shippingInfo.packagingWidthCm,
            packagingHeightCm: product.shippingInfo.packagingHeightCm,
            productWeightKg: product.shippingInfo.productWeightKg,
            productLengthCm: product.shippingInfo.productLengthCm,
            productWidthCm: product.shippingInfo.productWidthCm,
            productHeightCm: product.shippingInfo.productHeightCm
        } : null,
        seo: {
            metaTitle: englishTranslation?.metaTitle,
            metaDescription: englishTranslation?.metaDescription,
            slug: product.slug
        },
        collectionIds: product.collectionProducts.map((c)=>c.collectionId)
    };
}
async function createProduct(input) {
    const { tenantId } = await requireProductManageAccess();
    const validatedInput = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$schemas$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreateProductSchema"].parse(input);
    const product = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].$transaction(async (tx)=>{
        // Create the product
        const newProduct = await tx.product.create({
            data: {
                tenantId,
                slug: validatedInput.slug,
                status: validatedInput.status,
                categoryId: validatedInput.categoryId,
                brandId: validatedInput.brandId || null,
                price: validatedInput.price,
                compareAtPrice: validatedInput.compareAtPrice,
                costPerItem: validatedInput.costPerItem,
                sku: validatedInput.sku,
                trackStock: validatedInput.trackStock,
                stock: validatedInput.stock,
                lowStockThreshold: validatedInput.lowStockThreshold,
                // Purchase options
                purchaseType: validatedInput.purchaseOptions?.type ?? "ONE_TIME",
                subscriptionDiscountPercent: validatedInput.purchaseOptions?.subscriptionDiscount,
                subscriptionIntervals: validatedInput.purchaseOptions?.subscriptionIntervals ?? [],
                preOrderReleaseDate: validatedInput.purchaseOptions?.preOrderReleaseDate,
                preOrderDepositPercent: validatedInput.purchaseOptions?.preOrderDepositPercent,
                // Unit pricing
                unitPriceAmount: validatedInput.unitPrice?.unitPriceAmount,
                unitPriceMeasurement: validatedInput.unitPrice?.unitPriceMeasurement,
                unitPriceBaseAmount: validatedInput.unitPrice?.unitPriceBaseAmount,
                unitPriceBaseMeasurement: validatedInput.unitPrice?.unitPriceBaseMeasurement
            }
        });
        // Create translation (English by default)
        await tx.productTranslation.create({
            data: {
                productId: newProduct.id,
                localeId: "en",
                name: validatedInput.name,
                description: validatedInput.description,
                metaTitle: validatedInput.seo?.metaTitle,
                metaDescription: validatedInput.seo?.metaDescription
            }
        });
        // Create media
        if (validatedInput.media && validatedInput.media.length > 0) {
            await tx.productMedia.createMany({
                data: validatedInput.media.map((m, index)=>({
                        productId: newProduct.id,
                        url: m.url,
                        mediaType: m.mediaType,
                        altText: m.altText,
                        order: m.order ?? index
                    }))
            });
        }
        // Create variants
        if (validatedInput.variants && validatedInput.variants.length > 0) {
            for (const variant of validatedInput.variants){
                const createdVariant = await tx.productVariant.create({
                    data: {
                        productId: newProduct.id,
                        sku: variant.sku,
                        price: variant.price,
                        priceAdjustment: variant.priceAdjustment ?? 0,
                        stock: variant.stock,
                        imageUrl: variant.imageUrl,
                        options: variant.options
                    }
                });
                // Create variant option meta (for colors)
                if (variant.optionMeta && variant.optionMeta.length > 0) {
                    await tx.variantOptionMeta.createMany({
                        data: variant.optionMeta.map((meta)=>({
                                variantId: createdVariant.id,
                                optionName: meta.optionName,
                                hexColor: meta.hexColor
                            }))
                    });
                }
            }
        }
        // Create shipping info
        if (validatedInput.shippingInfo) {
            await tx.productShippingInfo.create({
                data: {
                    productId: newProduct.id,
                    packageType: validatedInput.shippingInfo.packageType,
                    packagingWeightKg: validatedInput.shippingInfo.weight,
                    packagingLengthCm: validatedInput.shippingInfo.packageLength,
                    packagingWidthCm: validatedInput.shippingInfo.packageWidth,
                    packagingHeightCm: validatedInput.shippingInfo.packageHeight,
                    productWeightKg: validatedInput.shippingInfo.productWeight,
                    productLengthCm: validatedInput.shippingInfo.productLength,
                    productWidthCm: validatedInput.shippingInfo.productWidth,
                    productHeightCm: validatedInput.shippingInfo.productHeight
                }
            });
        }
        // Link to collections
        if (validatedInput.collectionIds && validatedInput.collectionIds.length > 0) {
            await tx.collectionProduct.createMany({
                data: validatedInput.collectionIds.map((collectionId)=>({
                        productId: newProduct.id,
                        collectionId
                    }))
            });
        }
        return newProduct;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/products");
    return {
        success: true,
        productId: product.id
    };
}
async function updateProduct(input) {
    const { tenantId } = await requireProductManageAccess();
    const validatedInput = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$schemas$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UpdateProductSchema"].parse(input);
    // Verify product belongs to tenant
    const existingProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findFirst({
        where: {
            id: validatedInput.id,
            tenantId
        }
    });
    if (!existingProduct) {
        throw new Error("Product not found");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].$transaction(async (tx)=>{
        // Update the main product
        await tx.product.update({
            where: {
                id: validatedInput.id
            },
            data: {
                ...validatedInput.slug && {
                    slug: validatedInput.slug
                },
                ...validatedInput.status && {
                    status: validatedInput.status
                },
                ...validatedInput.categoryId && {
                    categoryId: validatedInput.categoryId
                },
                brandId: validatedInput.brandId || null,
                ...validatedInput.price !== undefined && {
                    price: validatedInput.price
                },
                compareAtPrice: validatedInput.compareAtPrice,
                costPerItem: validatedInput.costPerItem,
                sku: validatedInput.sku,
                trackStock: validatedInput.trackStock,
                stock: validatedInput.stock,
                lowStockThreshold: validatedInput.lowStockThreshold,
                // Purchase options
                ...validatedInput.purchaseOptions && {
                    purchaseType: validatedInput.purchaseOptions.type,
                    subscriptionDiscountPercent: validatedInput.purchaseOptions.subscriptionDiscount,
                    subscriptionIntervals: validatedInput.purchaseOptions.subscriptionIntervals ?? [],
                    preOrderReleaseDate: validatedInput.purchaseOptions.preOrderReleaseDate,
                    preOrderDepositPercent: validatedInput.purchaseOptions.preOrderDepositPercent
                },
                // Unit pricing
                ...validatedInput.unitPrice && {
                    unitPriceAmount: validatedInput.unitPrice.unitPriceAmount,
                    unitPriceMeasurement: validatedInput.unitPrice.unitPriceMeasurement,
                    unitPriceBaseAmount: validatedInput.unitPrice.unitPriceBaseAmount,
                    unitPriceBaseMeasurement: validatedInput.unitPrice.unitPriceBaseMeasurement
                }
            }
        });
        // Update translation
        if (validatedInput.name || validatedInput.description || validatedInput.seo) {
            await tx.productTranslation.upsert({
                where: {
                    productId_localeId: {
                        productId: validatedInput.id,
                        localeId: "en"
                    }
                },
                update: {
                    ...validatedInput.name && {
                        name: validatedInput.name
                    },
                    ...validatedInput.description !== undefined && {
                        description: validatedInput.description
                    },
                    ...validatedInput.seo?.metaTitle !== undefined && {
                        metaTitle: validatedInput.seo.metaTitle
                    },
                    ...validatedInput.seo?.metaDescription !== undefined && {
                        metaDescription: validatedInput.seo.metaDescription
                    }
                },
                create: {
                    productId: validatedInput.id,
                    localeId: "en",
                    name: validatedInput.name ?? "Untitled",
                    description: validatedInput.description,
                    metaTitle: validatedInput.seo?.metaTitle,
                    metaDescription: validatedInput.seo?.metaDescription
                }
            });
        }
        // Update media (replace all)
        if (validatedInput.media) {
            await tx.productMedia.deleteMany({
                where: {
                    productId: validatedInput.id
                }
            });
            if (validatedInput.media.length > 0) {
                await tx.productMedia.createMany({
                    data: validatedInput.media.map((m, index)=>({
                            productId: validatedInput.id,
                            url: m.url,
                            mediaType: m.mediaType,
                            altText: m.altText,
                            order: m.order ?? index
                        }))
                });
            }
        }
        // Update variants (replace all)
        if (validatedInput.variants) {
            // Delete existing variants and their meta
            const existingVariants = await tx.productVariant.findMany({
                where: {
                    productId: validatedInput.id
                },
                select: {
                    id: true
                }
            });
            for (const v of existingVariants){
                await tx.variantOptionMeta.deleteMany({
                    where: {
                        variantId: v.id
                    }
                });
            }
            await tx.productVariant.deleteMany({
                where: {
                    productId: validatedInput.id
                }
            });
            // Create new variants
            for (const variant of validatedInput.variants){
                const createdVariant = await tx.productVariant.create({
                    data: {
                        productId: validatedInput.id,
                        sku: variant.sku,
                        price: variant.price,
                        priceAdjustment: variant.priceAdjustment ?? 0,
                        stock: variant.stock,
                        imageUrl: variant.imageUrl,
                        options: variant.options
                    }
                });
                if (variant.optionMeta && variant.optionMeta.length > 0) {
                    await tx.variantOptionMeta.createMany({
                        data: variant.optionMeta.map((meta)=>({
                                variantId: createdVariant.id,
                                optionName: meta.optionName,
                                hexColor: meta.hexColor
                            }))
                    });
                }
            }
        }
        // Update shipping info
        if (validatedInput.shippingInfo) {
            await tx.productShippingInfo.upsert({
                where: {
                    productId: validatedInput.id
                },
                update: {
                    packageType: validatedInput.shippingInfo.packageType,
                    packagingWeightKg: validatedInput.shippingInfo.weight,
                    packagingLengthCm: validatedInput.shippingInfo.packageLength,
                    packagingWidthCm: validatedInput.shippingInfo.packageWidth,
                    packagingHeightCm: validatedInput.shippingInfo.packageHeight,
                    productWeightKg: validatedInput.shippingInfo.productWeight,
                    productLengthCm: validatedInput.shippingInfo.productLength,
                    productWidthCm: validatedInput.shippingInfo.productWidth,
                    productHeightCm: validatedInput.shippingInfo.productHeight
                },
                create: {
                    productId: validatedInput.id,
                    packageType: validatedInput.shippingInfo.packageType,
                    packagingWeightKg: validatedInput.shippingInfo.weight,
                    packagingLengthCm: validatedInput.shippingInfo.packageLength,
                    packagingWidthCm: validatedInput.shippingInfo.packageWidth,
                    packagingHeightCm: validatedInput.shippingInfo.packageHeight,
                    productWeightKg: validatedInput.shippingInfo.productWeight,
                    productLengthCm: validatedInput.shippingInfo.productLength,
                    productWidthCm: validatedInput.shippingInfo.productWidth,
                    productHeightCm: validatedInput.shippingInfo.productHeight
                }
            });
        }
        // Update collection links
        if (validatedInput.collectionIds) {
            await tx.collectionProduct.deleteMany({
                where: {
                    productId: validatedInput.id
                }
            });
            if (validatedInput.collectionIds.length > 0) {
                await tx.collectionProduct.createMany({
                    data: validatedInput.collectionIds.map((collectionId)=>({
                            productId: validatedInput.id,
                            collectionId
                        }))
                });
            }
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/products");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/admin/products/${validatedInput.id}/edit`);
    return {
        success: true
    };
}
async function deleteProduct(productId) {
    const { tenantId } = await requireProductManageAccess();
    // Verify product belongs to tenant
    const product = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findFirst({
        where: {
            id: productId,
            tenantId
        }
    });
    if (!product) {
        throw new Error("Product not found");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.update({
        where: {
            id: productId
        },
        data: {
            deletedAt: new Date()
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/products");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/products/trash");
    return {
        success: true
    };
}
async function restoreProduct(productId) {
    const { tenantId } = await requireProductManageAccess();
    // Verify product belongs to tenant
    const product = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findFirst({
        where: {
            id: productId,
            tenantId
        }
    });
    if (!product) {
        throw new Error("Product not found");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.update({
        where: {
            id: productId
        },
        data: {
            deletedAt: null
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/products");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/products/trash");
    return {
        success: true
    };
}
async function restoreProducts(productIds) {
    const { tenantId } = await requireStoreAccess();
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.updateMany({
        where: {
            id: {
                in: productIds
            },
            tenantId
        },
        data: {
            deletedAt: null
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/products");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/products/trash");
    return {
        success: true
    };
}
async function permanentlyDeleteProduct(productId) {
    const { tenantId } = await requireProductDeleteAccess();
    // Verify product belongs to tenant and get media for cleanup
    const product = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findFirst({
        where: {
            id: productId,
            tenantId
        },
        include: {
            media: {
                select: {
                    url: true
                }
            }
        }
    });
    if (!product) {
        throw new Error("Product not found");
    }
    // Collect media URLs for cleanup
    const mediaUrls = product.media.map((m)=>m.url);
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].$transaction(async (tx)=>{
        // Delete related data
        const variants = await tx.productVariant.findMany({
            where: {
                productId
            },
            select: {
                id: true
            }
        });
        for (const v of variants){
            await tx.variantOptionMeta.deleteMany({
                where: {
                    variantId: v.id
                }
            });
        }
        await tx.productVariant.deleteMany({
            where: {
                productId
            }
        });
        await tx.productMedia.deleteMany({
            where: {
                productId
            }
        });
        await tx.productShippingInfo.deleteMany({
            where: {
                productId
            }
        });
        await tx.productTranslation.deleteMany({
            where: {
                productId
            }
        });
        await tx.collectionProduct.deleteMany({
            where: {
                productId
            }
        });
        // Finally delete the product
        await tx.product.delete({
            where: {
                id: productId
            }
        });
    });
    // Cleanup media files from R2 (after DB deletion)
    if (mediaUrls.length > 0) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$services$2f$media$2d$cleanup$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cleanupProductMedia"])(mediaUrls, tenantId);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/products/trash");
    return {
        success: true
    };
}
async function permanentlyDeleteProducts(productIds) {
    await requireProductDeleteAccess(); // Verify delete permission
    for (const productId of productIds){
        await permanentlyDeleteProduct(productId);
    }
    return {
        success: true
    };
}
async function getTrashedProducts() {
    const { tenantId } = await requireStoreAccess();
    const products = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findMany({
        where: {
            tenantId,
            deletedAt: {
                not: null
            }
        },
        orderBy: {
            deletedAt: "desc"
        },
        include: {
            translations: {
                where: {
                    localeId: "en"
                },
                take: 1
            },
            media: {
                orderBy: {
                    order: "asc"
                },
                take: 1
            }
        }
    });
    return products.map((p)=>({
            id: p.id,
            name: p.translations[0]?.name ?? "Untitled",
            sku: p.sku,
            price: p.price,
            deletedAt: p.deletedAt ?? new Date(),
            imageUrl: p.media[0]?.url ?? null
        }));
}
async function cleanupTrashedProducts(retentionDays = 30) {
    // This function should be called by a cron job
    // Don't require admin - it runs as a system task
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - retentionDays);
    const oldProducts = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findMany({
        where: {
            deletedAt: {
                lte: cutoffDate
            }
        },
        select: {
            id: true
        }
    });
    for (const product of oldProducts){
        await permanentlyDeleteProduct(product.id);
    }
    return {
        deleted: oldProducts.length
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    restoreProduct,
    restoreProducts,
    permanentlyDeleteProduct,
    permanentlyDeleteProducts,
    getTrashedProducts,
    cleanupTrashedProducts
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProducts, "400bf41a515368060d000c008be7121072342d4535", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProduct, "40b7b814e80fab32f7122cdc051e6e85345e1efb0a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProduct, "40a8808b8e32bafcff7791d72c167339ca3122ac12", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProduct, "40ab7906bad5c2063546fb66caa71b48507dbc294b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "405d7bf5b1e1ff67b41050f9c6b3b647526820a0d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(restoreProduct, "40f79fbc3157e5b5e7dc8eba1d68fccfe13cc6045d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(restoreProducts, "409c4a4f8e5330a0e68c508441706a640b9ab52108", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(permanentlyDeleteProduct, "402ea997692a13868eee414c68b575f51a3565ed2c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(permanentlyDeleteProducts, "40c29a95514127093c8b7487a1c36c9931ae89bb5c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTrashedProducts, "002b285ac44bb10c639d5761f850a8d1dfb8d985ac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(cleanupTrashedProducts, "4060911a32edbd31b948aaa6702daa3ada479c753b", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/src/server/api/internal/product-import-export.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"004a8a6c4174a4bfcf0e72c41606994eefc25a4c06":"getProductImportTemplate","40a45a85e3221773d994b48ff3cb7c6065f36ea99b":"exportProducts","40f9b43df986fc8c6812df7314ce713ffd8661ca48":"validateProductCSV","602962ea8b7fdec4f33390ba3d29e9248d5eac069b":"importProductsFromCSV"},"",""] */ __turbopack_context__.s([
    "exportProducts",
    ()=>exportProducts,
    "getProductImportTemplate",
    ()=>getProductImportTemplate,
    "importProductsFromCSV",
    ()=>importProductsFromCSV,
    "validateProductCSV",
    ()=>validateProductCSV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/permissions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
// CSV Row Schema for Product Import
const ProductImportRowSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    sku: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "SKU is required"),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Name is required"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().positive("Price must be positive"),
    compareAtPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
    costPerItem: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
    stock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().optional(),
    trackStock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().optional().default(false),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "DRAFT",
        "ACTIVE",
        "UNLISTED"
    ]).optional().default("DRAFT"),
    categorySlug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    brandSlug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // SEO fields
    metaTitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    metaDescription: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
/**
 * Parse CSV content into rows
 */ function parseCSV(content) {
    const lines = content.trim().split("\n");
    if (lines.length < 2) return [];
    // Parse header
    const headerLine = lines[0];
    if (!headerLine) return [];
    const headers = headerLine.split(",").map((h)=>h.trim().replace(/^"|"$/g, ""));
    // Parse data rows
    const rows = [];
    for(let i = 1; i < lines.length; i++){
        const line = lines[i];
        if (!line) continue;
        const values = parseCSVLine(line);
        const row = {};
        headers.forEach((header, index)=>{
            row[header] = values[index] ?? "";
        });
        rows.push(row);
    }
    return rows;
}
/**
 * Parse a single CSV line, handling quoted values with commas
 */ function parseCSVLine(line) {
    const values = [];
    let current = "";
    let inQuotes = false;
    for(let i = 0; i < line.length; i++){
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
 */ function generateSlug(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
async function importProductsFromCSV(csvContent, options) {
    const { tenantId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireManagePermission"])("products");
    const updateExisting = options?.updateExisting ?? true;
    const result = {
        success: true,
        totalRows: 0,
        imported: 0,
        updated: 0,
        skipped: 0,
        errors: []
    };
    try {
        const rows = parseCSV(csvContent);
        result.totalRows = rows.length;
        // Get default locale
        const defaultLocale = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].locale.findFirst({
            where: {
                isDefault: true
            }
        });
        if (!defaultLocale) {
            return {
                ...result,
                success: false,
                errors: [
                    {
                        row: 0,
                        sku: "",
                        error: "No default locale found. Please configure locales first."
                    }
                ]
            };
        }
        // Get all categories and brands for this tenant (for slug lookup)
        const [categories, brands] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].category.findMany({
                where: {
                    tenantId
                },
                select: {
                    id: true,
                    slug: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].brand.findMany({
                where: {
                    tenantId
                },
                select: {
                    id: true,
                    slug: true
                }
            })
        ]);
        const categoryMap = new Map(categories.map((c)=>[
                c.slug,
                c.id
            ]));
        const brandMap = new Map(brands.map((b)=>[
                b.slug,
                b.id
            ]));
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
                        error: "No categories found. Please create a category first."
                    }
                ]
            };
        }
        // Process each row
        for(let i = 0; i < rows.length; i++){
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
                        error: parseResult.error.issues.map((e)=>`${e.path.join(".")}: ${e.message}`).join(", ")
                    });
                    continue;
                }
                const row = parseResult.data;
                // Look up category and brand IDs
                const categoryId = row.categorySlug ? categoryMap.get(row.categorySlug) ?? defaultCategory.id : defaultCategory.id;
                const brandId = row.brandSlug ? brandMap.get(row.brandSlug) : undefined;
                // Check if product exists by SKU
                const existingProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findFirst({
                    where: {
                        tenantId,
                        sku: row.sku,
                        deletedAt: null
                    },
                    include: {
                        translations: true
                    }
                });
                if (existingProduct) {
                    if (updateExisting) {
                        // Update existing product
                        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].$transaction(async (tx)=>{
                            await tx.product.update({
                                where: {
                                    id: existingProduct.id
                                },
                                data: {
                                    price: row.price,
                                    compareAtPrice: row.compareAtPrice,
                                    costPerItem: row.costPerItem,
                                    stock: row.stock,
                                    trackStock: row.trackStock,
                                    status: row.status,
                                    categoryId,
                                    brandId
                                }
                            });
                            // Find existing translation for default locale
                            const existingTranslation = existingProduct.translations.find((t)=>t.localeId === defaultLocale.id);
                            if (existingTranslation) {
                                // Update existing translation
                                await tx.productTranslation.update({
                                    where: {
                                        id: existingTranslation.id
                                    },
                                    data: {
                                        name: row.name,
                                        description: row.description,
                                        metaTitle: row.metaTitle,
                                        metaDescription: row.metaDescription
                                    }
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
                                        metaDescription: row.metaDescription
                                    }
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
                    while(await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findFirst({
                        where: {
                            tenantId,
                            slug: finalSlug
                        }
                    })){
                        finalSlug = `${slug}-${counter}`;
                        counter++;
                    }
                    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.create({
                        data: {
                            tenantId,
                            slug: finalSlug,
                            sku: row.sku,
                            price: row.price,
                            compareAtPrice: row.compareAtPrice,
                            costPerItem: row.costPerItem,
                            stock: row.stock,
                            trackStock: row.trackStock ?? false,
                            status: row.status,
                            categoryId,
                            brandId,
                            translations: {
                                create: {
                                    localeId: defaultLocale.id,
                                    name: row.name,
                                    description: row.description,
                                    metaTitle: row.metaTitle,
                                    metaDescription: row.metaDescription
                                }
                            }
                        }
                    });
                    result.imported++;
                }
            } catch (error) {
                result.errors.push({
                    row: rowNum,
                    sku: rawRow.sku ?? "",
                    error: error instanceof Error ? error.message : "Unknown error"
                });
            }
        }
        result.success = result.errors.length === 0;
    } catch (error) {
        result.success = false;
        result.errors.push({
            row: 0,
            sku: "",
            error: error instanceof Error ? error.message : "Failed to parse CSV"
        });
    }
    return result;
}
async function exportProducts(options) {
    const { tenantId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireViewPermission"])("products");
    const format = options?.format ?? "csv";
    const includeDrafts = options?.includeDrafts ?? false;
    // Get default locale
    const defaultLocale = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].locale.findFirst({
        where: {
            isDefault: true
        }
    });
    const where = {
        tenantId,
        deletedAt: null
    };
    if (!includeDrafts) {
        where.status = {
            not: "DRAFT"
        };
    }
    if (options?.categoryIds && options.categoryIds.length > 0) {
        where.categoryId = {
            in: options.categoryIds
        };
    }
    const products = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findMany({
        where,
        include: {
            translations: defaultLocale ? {
                where: {
                    localeId: defaultLocale.id
                }
            } : true,
            category: {
                select: {
                    slug: true
                }
            },
            brand: {
                select: {
                    slug: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    if (format === "json") {
        return JSON.stringify(products.map((p)=>({
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
                updatedAt: p.updatedAt.toISOString()
            })), null, 2);
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
        "metaDescription"
    ];
    const rows = products.map((p)=>[
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
            escapeCSVValue(p.translations[0]?.metaDescription ?? "")
        ]);
    const csv = [
        headers.join(","),
        ...rows.map((row)=>row.join(","))
    ].join("\n");
    return csv;
}
/**
 * Escape a value for CSV output
 */ function escapeCSVValue(value) {
    if (value.includes(",") || value.includes('"') || value.includes("\n")) {
        return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
}
async function getProductImportTemplate() {
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
        "metaDescription"
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
        "Buy this amazing product"
    ];
    return [
        headers.join(","),
        exampleRow.join(",")
    ].join("\n");
}
async function validateProductCSV(csvContent) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireViewPermission"])("products");
    const rows = parseCSV(csvContent);
    const result = {
        valid: true,
        totalRows: rows.length,
        validRows: 0,
        errors: []
    };
    for(let i = 0; i < rows.length; i++){
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
                errors: validation.error.issues.map((e)=>`${e.path.join(".")}: ${e.message}`)
            });
        }
    }
    return result;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    importProductsFromCSV,
    exportProducts,
    getProductImportTemplate,
    validateProductCSV
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(importProductsFromCSV, "602962ea8b7fdec4f33390ba3d29e9248d5eac069b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(exportProducts, "40a45a85e3221773d994b48ff3cb7c6065f36ea99b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductImportTemplate, "004a8a6c4174a4bfcf0e72c41606994eefc25a4c06", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(validateProductCSV, "40f9b43df986fc8c6812df7314ce713ffd8661ca48", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/.next-internal/server/app/(internal)/admin/products/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/platform/src/server/api/internal/product-import-export.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/product-import-export.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/.next-internal/server/app/(internal)/admin/products/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/platform/src/server/api/internal/product-import-export.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "003bfcd7ac293af20dc22123ec44e81263e2c95347",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserStores"],
    "004a8a6c4174a4bfcf0e72c41606994eefc25a4c06",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductImportTemplate"],
    "00b865bde8853c0b2200356e8a44aabbfda99ded8f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userHasStore"],
    "00f61908051b9076d3d4981917b5b0f4b9a64a3f03",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentTenant"],
    "400bf41a515368060d000c008be7121072342d4535",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"],
    "40177cd97a285945b21e6d3751ddbdc14238608821",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStore"],
    "405d7bf5b1e1ff67b41050f9c6b3b647526820a0d9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"],
    "40a45a85e3221773d994b48ff3cb7c6065f36ea99b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["exportProducts"],
    "40ece7c8b327f75aed046925634f22b2bd96f4eb54",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkSlugAvailability"],
    "40f9b43df986fc8c6812df7314ce713ffd8661ca48",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateProductCSV"],
    "602962ea8b7fdec4f33390ba3d29e9248d5eac069b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importProductsFromCSV"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/platform/.next-internal/server/app/(internal)/admin/products/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/platform/src/server/api/internal/product-import-export.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/product-import-export.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$product$2d$import$2d$export$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f3c2a070._.js.map