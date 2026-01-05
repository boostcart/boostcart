module.exports = [
	"[project]/apps/platform/src/schemas/product.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"CreateProductSchema",
			() => CreateProductSchema,
			"MeasurementUnitEnum",
			() => MeasurementUnitEnum,
			"MediaTypeEnum",
			() => MediaTypeEnum,
			"PackageTypeEnum",
			() => PackageTypeEnum,
			"ProductFilterSchema",
			() => ProductFilterSchema,
			"ProductMediaSchema",
			() => ProductMediaSchema,
			"ProductPurchaseOptionsSchema",
			() => ProductPurchaseOptionsSchema,
			"ProductSeoSchema",
			() => ProductSeoSchema,
			"ProductShippingSchema",
			() => ProductShippingSchema,
			"ProductStatusEnum",
			() => ProductStatusEnum,
			"ProductUnitPriceSchema",
			() => ProductUnitPriceSchema,
			"ProductVariantSchema",
			() => ProductVariantSchema,
			"PurchaseTypeEnum",
			() => PurchaseTypeEnum,
			"SubscriptionIntervalEnum",
			() => SubscriptionIntervalEnum,
			"UpdateProductSchema",
			() => UpdateProductSchema,
			"VariantGroupSchema",
			() => VariantGroupSchema,
			"VariantOptionMetaSchema",
			() => VariantOptionMetaSchema,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>",
			);
		const ProductStatusEnum =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].enum(["ACTIVE", "UNLISTED", "DRAFT"]);
		const MediaTypeEnum =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].enum(["IMAGE", "VIDEO"]);
		const PurchaseTypeEnum =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].enum([
				"ONE_TIME",
				"SUBSCRIPTION",
				"ONE_TIME_AND_SUBSCRIPTION",
				"PRE_ORDER",
			]);
		const SubscriptionIntervalEnum =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].enum([
				"WEEKLY",
				"BI_WEEKLY",
				"MONTHLY",
				"BI_MONTHLY",
				"QUARTERLY",
				"YEARLY",
			]);
		const PackageTypeEnum =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].enum(["BOX", "ENVELOPE", "SOFT_PACKAGE", "PALLET"]);
		const MeasurementUnitEnum =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].enum([
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
		const ProductMediaSchema =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].object({
				id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
					"z"
				]
					.string()
					.optional(),
				url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
					"z"
				]
					.string()
					.url(),
				mediaType: MediaTypeEnum,
				altText:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.string()
						.optional(),
				order:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.int()
						.min(0),
			});
		const VariantOptionMetaSchema =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].object({
				optionName:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					].string(),
				hexColor:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.string()
						.regex(/^#[0-9A-Fa-f]{6}$/)
						.optional(),
			});
		const ProductVariantSchema =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].object({
				id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
					"z"
				]
					.string()
					.optional(),
				sku: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
					"z"
				]
					.string()
					.optional(),
				price:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				priceAdjustment:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.default(0),
				stock:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.int()
						.min(0)
						.optional(),
				imageUrl:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.string()
						.url()
						.optional(),
				options:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.record(
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
								"z"
							].string(),
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
								"z"
							].string(),
						)
						.default({}),
				optionMeta:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.array(VariantOptionMetaSchema)
						.optional(),
			});
		const ProductShippingSchema =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].object({
				packageType: PackageTypeEnum.default("BOX"),
				// Packaging weight
				weight:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				// Package dimensions
				packageLength:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				packageWidth:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				packageHeight:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				// Product weight
				productWeight:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				// Product dimensions (for pallets)
				productLength:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				productWidth:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				productHeight:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				// Flags
				isFragile:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.boolean()
						.default(false),
				isFreeShipping:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.boolean()
						.default(false),
				tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
					"z"
				]
					.array(
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
							"z"
						].string(),
					)
					.default([]),
			});
		const ProductSeoSchema =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].object({
				metaTitle:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.string()
						.max(70)
						.optional(),
				metaDescription:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.string()
						.max(160)
						.optional(),
				slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
					"z"
				]
					.string()
					.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
					.optional(),
			});
		const ProductPurchaseOptionsSchema =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].object({
				type: PurchaseTypeEnum.default("ONE_TIME"),
				allowOneTimePurchase:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.boolean()
						.default(true),
				subscriptionDiscount:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.min(0)
						.max(100)
						.optional(),
				subscriptionIntervals:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.array(SubscriptionIntervalEnum)
						.optional(),
				preOrderReleaseDate:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					].coerce
						.date()
						.optional(),
				preOrderDepositPercent:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.min(0)
						.max(100)
						.optional(),
			});
		const ProductUnitPriceSchema =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].object({
				unitPriceAmount:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				unitPriceMeasurement: MeasurementUnitEnum.optional(),
				unitPriceBaseAmount:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				unitPriceBaseMeasurement: MeasurementUnitEnum.optional(),
			});
		const CreateProductSchema =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].object({
				// Basic info
				name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
					"z"
				]
					.string()
					.min(1, "Name is required")
					.max(255),
				description:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.string()
						.optional(),
				slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
					"z"
				]
					.string()
					.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid URL format"),
				status: ProductStatusEnum.default("DRAFT"),
				// Categorization
				categoryId:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.string()
						.min(1, "Category is required"),
				brandId:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.string()
						.optional(),
				collectionIds:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.array(
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
								"z"
							].string(),
						)
						.optional(),
				// Pricing
				price:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive("Price must be greater than 0"),
				compareAtPrice:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				costPerItem:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.positive()
						.optional(),
				unitPrice: ProductUnitPriceSchema.optional(),
				// Inventory
				sku: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
					"z"
				]
					.string()
					.optional(),
				trackStock:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.boolean()
						.default(false),
				stock:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.int()
						.min(0)
						.optional(),
				lowStockThreshold:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.int()
						.min(0)
						.optional(),
				// Media
				media:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.array(ProductMediaSchema)
						.optional(),
				// Variants
				variants:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.array(ProductVariantSchema)
						.optional(),
				// Shipping
				shippingInfo: ProductShippingSchema.optional(),
				// Purchase options
				purchaseOptions: ProductPurchaseOptionsSchema.optional(),
				// SEO
				seo: ProductSeoSchema.optional(),
			});
		const UpdateProductSchema = CreateProductSchema.partial().extend({
			id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].string(),
		});
		const VariantGroupSchema =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].object({
				name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
					"z"
				]
					.string()
					.min(1, "Variant name is required"),
				values:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.array(
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
								"z"
							].object({
								value:
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
										"z"
									]
										.string()
										.min(1),
								hexColor:
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
										"z"
									]
										.string()
										.regex(/^#[0-9A-Fa-f]{6}$/)
										.optional(),
							}),
						)
						.min(1, "At least one value is required"),
			});
		const ProductFilterSchema =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
				"z"
			].object({
				search:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.string()
						.optional(),
				status:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.array(ProductStatusEnum)
						.optional(),
				categoryIds:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.array(
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
								"z"
							].string(),
						)
						.optional(),
				brandIds:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.array(
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
								"z"
							].string(),
						)
						.optional(),
				stockStatus:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.enum(["all", "in_stock", "low_stock", "out_of_stock"])
						.optional(),
				priceMin:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.min(0)
						.optional(),
				priceMax:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.min(0)
						.optional(),
				purchaseType:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.array(PurchaseTypeEnum)
						.optional(),
				sortBy:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
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
				page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
					"z"
				]
					.number()
					.int()
					.min(1)
					.default(1),
				pageSize:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__[
						"z"
					]
						.number()
						.int()
						.min(1)
						.max(100)
						.default(20),
			});
	},
	"[project]/apps/platform/src/lib/tenant.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					__turbopack_context__.s([
						"clearTenantCache",
						() => clearTenantCache,
						"getTenantByDomain",
						() => getTenantByDomain,
						"getTenantBySlug",
						() => getTenantBySlug,
						"getTenantFromRequest",
						() => getTenantFromRequest,
					]);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
					] = __turbopack_async_dependencies__.then
						? (await __turbopack_async_dependencies__)()
						: __turbopack_async_dependencies__;
					// Cache for tenant lookups
					const tenantCache = new Map();
					const CACHE_TTL = 60 * 1000; // 1 minute
					async function getTenantBySlug(slug) {
						// Check cache first
						const cached = tenantCache.get(`slug:${slug}`);
						if (cached && cached.expiry > Date.now()) {
							return cached.tenant;
						}
						const tenant =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.findFirst({
								where: {
									slug,
									isActive: true,
									deletedAt: null,
								},
							});
						if (tenant) {
							tenantCache.set(`slug:${slug}`, {
								tenant,
								expiry: Date.now() + CACHE_TTL,
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
						const tenantDomain =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenantDomain.findFirst({
								where: {
									domain,
									dnsVerified: true,
								},
								include: {
									tenant: true,
								},
							});
						if (tenantDomain?.tenant && tenantDomain.tenant.isActive) {
							tenantCache.set(`domain:${domain}`, {
								tenant: tenantDomain.tenant,
								expiry: Date.now() + CACHE_TTL,
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
						const platformDomains = ["boostcart.bg", "localhost", "127.0.0.1"];
						const isMainDomain = platformDomains.some(
							(d) => host === d || host === `www.${d}`,
						);
						if (isMainDomain) {
							// No tenant for main domain
							return null;
						}
						// Check for subdomain (e.g., store.boostcart.bg)
						const subdomainMatch = host.match(/^([a-z0-9-]+)\.boostcart\.bg$/i);
						if (subdomainMatch?.[1]) {
							const slug = subdomainMatch[1];
							// Skip common subdomains
							if (["www", "api", "admin", "staging", "dev"].includes(slug)) {
								return null;
							}
							return getTenantBySlug(slug);
						}
						// Check for local dev subdomain (e.g., store.localhost)
						const localSubdomainMatch = host.match(
							/^([a-z0-9-]+)\.localhost$/i,
						);
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
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	"[project]/apps/platform/src/server/tenant.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					/* __next_internal_action_entry_do_not_use__ [{"001d80d23ee4de084e157d4e89620a1865cf7a84db":"requireTenant","00ac6fbe1edbf277cbe10ce51119339897cf9c40fc":"requireAdminTenant","00ef7ea9c506c03d0e1da36234d82ac9c2fbdbb80d":"hasTenantContext","7f7d901350253c3c2a57e0fe127f4f59ebb0a7828e":"getCurrentTenant","7fb08b94911a0ec057cd4150fe6878164206608e71":"getAdminTenant"},"",""] */ __turbopack_context__.s(
						[
							"getAdminTenant",
							() => getAdminTenant,
							"getCurrentTenant",
							() => getCurrentTenant,
							"hasTenantContext",
							() => hasTenantContext,
							"requireAdminTenant",
							() => requireAdminTenant,
							"requireTenant",
							() => requireTenant,
						],
					);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/headers.js [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/lib/tenant.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/auth/index.ts [app-rsc] (ecmascript) <locals>",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
					] = __turbopack_async_dependencies__.then
						? (await __turbopack_async_dependencies__)()
						: __turbopack_async_dependencies__;
					const getCurrentTenant = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"cache"
					])(async () => {
						const headersList = await (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"headers"
						])();
						// Check for tenant slug from subdomain
						const tenantSlug = headersList.get("x-tenant-slug");
						if (tenantSlug) {
							return (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getTenantBySlug"
							])(tenantSlug);
						}
						// Check for custom domain
						const customDomain = headersList.get("x-custom-domain");
						if (customDomain) {
							return (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getTenantByDomain"
							])(customDomain);
						}
						return null;
					});
					const getAdminTenant = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"cache"
					])(async () => {
						const session = await (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
							"auth"
						])();
						if (!session?.user?.id) {
							return null;
						}
						// Get the user's primary store (first store they have access to)
						const staffRecord =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenantStaff.findFirst({
								where: {
									userId: session.user.id,
								},
								include: {
									tenant: true,
								},
								orderBy: {
									createdAt: "asc",
								},
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
						throw new Error(
							"No tenant context found. Please create or select a store.",
						);
					}
					async function hasTenantContext() {
						const tenant = await getCurrentTenant();
						return tenant !== null;
					}
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"ensureServerEntryExports"
					])([
						requireTenant,
						requireAdminTenant,
						hasTenantContext,
						getCurrentTenant,
						getAdminTenant,
					]);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(requireTenant, "001d80d23ee4de084e157d4e89620a1865cf7a84db", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						requireAdminTenant,
						"00ac6fbe1edbf277cbe10ce51119339897cf9c40fc",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						hasTenantContext,
						"00ef7ea9c506c03d0e1da36234d82ac9c2fbdbb80d",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						getCurrentTenant,
						"7f7d901350253c3c2a57e0fe127f4f59ebb0a7828e",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						getAdminTenant,
						"7fb08b94911a0ec057cd4150fe6878164206608e71",
						null,
					);
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	"[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					/* __next_internal_action_entry_do_not_use__ [{"002b285ac44bb10c639d5761f850a8d1dfb8d985ac":"getTrashedProducts","400bf41a515368060d000c008be7121072342d4535":"getProducts","402ea997692a13868eee414c68b575f51a3565ed2c":"permanentlyDeleteProduct","405d7bf5b1e1ff67b41050f9c6b3b647526820a0d9":"deleteProduct","4060911a32edbd31b948aaa6702daa3ada479c753b":"cleanupTrashedProducts","409c4a4f8e5330a0e68c508441706a640b9ab52108":"restoreProducts","40a8808b8e32bafcff7791d72c167339ca3122ac12":"createProduct","40ab7906bad5c2063546fb66caa71b48507dbc294b":"updateProduct","40b7b814e80fab32f7122cdc051e6e85345e1efb0a":"getProduct","40c29a95514127093c8b7487a1c36c9931ae89bb5c":"permanentlyDeleteProducts","40f79fbc3157e5b5e7dc8eba1d68fccfe13cc6045d":"restoreProduct"},"",""] */ __turbopack_context__.s(
						[
							"cleanupTrashedProducts",
							() => cleanupTrashedProducts,
							"createProduct",
							() => createProduct,
							"deleteProduct",
							() => deleteProduct,
							"getProduct",
							() => getProduct,
							"getProducts",
							() => getProducts,
							"getTrashedProducts",
							() => getTrashedProducts,
							"permanentlyDeleteProduct",
							() => permanentlyDeleteProduct,
							"permanentlyDeleteProducts",
							() => permanentlyDeleteProducts,
							"restoreProduct",
							() => restoreProduct,
							"restoreProducts",
							() => restoreProducts,
							"updateProduct",
							() => updateProduct,
						],
					);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/cache.js [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$schemas$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/schemas/product.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/auth/index.ts [app-rsc] (ecmascript) <locals>",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/tenant.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
					] = __turbopack_async_dependencies__.then
						? (await __turbopack_async_dependencies__)()
						: __turbopack_async_dependencies__;
					// Helper to check access and get tenant context for admin operations
					async function requireStoreAccess() {
						const session = await (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
							"auth"
						])();
						if (!session?.user?.id) {
							throw new Error("Unauthorized");
						}
						// Get tenant context (from user's store membership)
						const tenant = await (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"requireAdminTenant"
						])();
						// Verify user has access to this tenant
						const staffRecord =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenantStaff.findFirst({
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
					async function getProducts(filters) {
						const { tenantId } = await requireStoreAccess();
						const validatedFilters = filters
							? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$schemas$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
									"ProductFilterSchema"
								].parse(filters)
							: {
									page: 1,
									pageSize: 20,
								};
						const {
							page,
							pageSize,
							search,
							status,
							categoryIds,
							brandIds,
							stockStatus,
							priceMin,
							priceMax,
							sortBy,
						} = validatedFilters;
						const where = {
							tenantId,
							deletedAt: null,
						};
						// Search
						if (search) {
							where.OR = [
								{
									sku: {
										contains: search,
										mode: "insensitive",
									},
								},
								{
									translations: {
										some: {
											name: {
												contains: search,
												mode: "insensitive",
											},
										},
									},
								},
							];
						}
						// Status filter
						if (status && status.length > 0) {
							where.status = {
								in: status,
							};
						}
						// Category filter
						if (categoryIds && categoryIds.length > 0) {
							where.categoryId = {
								in: categoryIds,
							};
						}
						// Brand filter
						if (brandIds && brandIds.length > 0) {
							where.brandId = {
								in: brandIds,
							};
						}
						// Stock status filter
						if (stockStatus) {
							switch (stockStatus) {
								case "in_stock":
									where.OR = [
										{
											trackStock: false,
										},
										{
											stock: {
												gt: 10,
											},
										},
									];
									break;
								case "low_stock":
									where.trackStock = true;
									where.stock = {
										gt: 0,
										lte: 10,
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
							switch (sortBy) {
								case "name_asc":
								case "name_desc":
									break;
								case "price_asc":
									orderBy.push({
										price: "asc",
									});
									break;
								case "price_desc":
									orderBy.push({
										price: "desc",
									});
									break;
								case "created_asc":
									orderBy.push({
										createdAt: "asc",
									});
									break;
								case "created_desc":
									orderBy.push({
										createdAt: "desc",
									});
									break;
								case "stock_asc":
									orderBy.push({
										stock: "asc",
									});
									break;
								case "stock_desc":
									orderBy.push({
										stock: "desc",
									});
									break;
							}
						}
						if (orderBy.length === 0) {
							orderBy.push({
								createdAt: "desc",
							});
						}
						const [products, total] = await Promise.all([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].product.findMany({
								where,
								orderBy,
								skip: (page - 1) * pageSize,
								take: pageSize,
								include: {
									category: {
										include: {
											translations: {
												where: {
													localeId: "en",
												},
												take: 1,
											},
										},
									},
									brand: {
										include: {
											translations: {
												where: {
													localeId: "en",
												},
												take: 1,
											},
										},
									},
									translations: {
										where: {
											localeId: "en",
										},
										take: 1,
									},
									media: {
										orderBy: {
											order: "asc",
										},
										take: 1,
									},
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].product.count({
								where,
							}),
						]);
						return {
							products: products.map((p) => ({
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
								categoryName:
									p.category?.translations[0]?.name ?? "Uncategorized",
								brandId: p.brandId,
								brandName: p.brand?.translations[0]?.name,
								imageUrl: p.media[0]?.url,
								createdAt: p.createdAt,
								updatedAt: p.updatedAt,
							})),
							pagination: {
								page,
								pageSize,
								total,
								totalPages: Math.ceil(total / pageSize),
							},
						};
					}
					async function getProduct(productId) {
						const { tenantId } = await requireStoreAccess();
						const product =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].product.findFirst({
								where: {
									id: productId,
									tenantId,
								},
								include: {
									translations: true,
									media: {
										orderBy: {
											order: "asc",
										},
									},
									variants: {
										include: {
											optionMeta: true,
										},
									},
									shippingInfo: true,
									collectionProducts: {
										include: {
											collection: {
												include: {
													translations: {
														where: {
															localeId: "en",
														},
														take: 1,
													},
												},
											},
										},
									},
								},
							});
						if (!product) {
							throw new Error("Product not found");
						}
						const englishTranslation = product.translations.find(
							(t) => t.localeId === "en",
						);
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
							media: product.media.map((m) => ({
								id: m.id,
								url: m.url,
								mediaType: m.mediaType,
								altText: m.altText,
								order: m.order,
							})),
							variants: product.variants.map((v) => ({
								id: v.id,
								sku: v.sku,
								price: v.price,
								priceAdjustment: v.priceAdjustment,
								stock: v.stock,
								imageUrl: v.imageUrl,
								options: v.options,
								optionMeta: v.optionMeta,
							})),
							shippingInfo: product.shippingInfo
								? {
										packageType: product.shippingInfo.packageType,
										packagingWeightKg: product.shippingInfo.packagingWeightKg,
										packagingLengthCm: product.shippingInfo.packagingLengthCm,
										packagingWidthCm: product.shippingInfo.packagingWidthCm,
										packagingHeightCm: product.shippingInfo.packagingHeightCm,
										productWeightKg: product.shippingInfo.productWeightKg,
										productLengthCm: product.shippingInfo.productLengthCm,
										productWidthCm: product.shippingInfo.productWidthCm,
										productHeightCm: product.shippingInfo.productHeightCm,
									}
								: null,
							seo: {
								metaTitle: englishTranslation?.metaTitle,
								metaDescription: englishTranslation?.metaDescription,
								slug: product.slug,
							},
							collectionIds: product.collectionProducts.map(
								(c) => c.collectionId,
							),
						};
					}
					async function createProduct(input) {
						const { tenantId } = await requireStoreAccess();
						const validatedInput =
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$schemas$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"CreateProductSchema"
							].parse(input);
						const product =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].$transaction(async (tx) => {
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
										purchaseType:
											validatedInput.purchaseOptions?.type ?? "ONE_TIME",
										subscriptionDiscountPercent:
											validatedInput.purchaseOptions?.subscriptionDiscount,
										subscriptionIntervals:
											validatedInput.purchaseOptions?.subscriptionIntervals ??
											[],
										preOrderReleaseDate:
											validatedInput.purchaseOptions?.preOrderReleaseDate,
										preOrderDepositPercent:
											validatedInput.purchaseOptions?.preOrderDepositPercent,
										// Unit pricing
										unitPriceAmount: validatedInput.unitPrice?.unitPriceAmount,
										unitPriceMeasurement:
											validatedInput.unitPrice?.unitPriceMeasurement,
										unitPriceBaseAmount:
											validatedInput.unitPrice?.unitPriceBaseAmount,
										unitPriceBaseMeasurement:
											validatedInput.unitPrice?.unitPriceBaseMeasurement,
									},
								});
								// Create translation (English by default)
								await tx.productTranslation.create({
									data: {
										productId: newProduct.id,
										localeId: "en",
										name: validatedInput.name,
										description: validatedInput.description,
										metaTitle: validatedInput.seo?.metaTitle,
										metaDescription: validatedInput.seo?.metaDescription,
									},
								});
								// Create media
								if (validatedInput.media && validatedInput.media.length > 0) {
									await tx.productMedia.createMany({
										data: validatedInput.media.map((m, index) => ({
											productId: newProduct.id,
											url: m.url,
											mediaType: m.mediaType,
											altText: m.altText,
											order: m.order ?? index,
										})),
									});
								}
								// Create variants
								if (
									validatedInput.variants &&
									validatedInput.variants.length > 0
								) {
									for (const variant of validatedInput.variants) {
										const createdVariant = await tx.productVariant.create({
											data: {
												productId: newProduct.id,
												sku: variant.sku,
												price: variant.price,
												priceAdjustment: variant.priceAdjustment ?? 0,
												stock: variant.stock,
												imageUrl: variant.imageUrl,
												options: variant.options,
											},
										});
										// Create variant option meta (for colors)
										if (variant.optionMeta && variant.optionMeta.length > 0) {
											await tx.variantOptionMeta.createMany({
												data: variant.optionMeta.map((meta) => ({
													variantId: createdVariant.id,
													optionName: meta.optionName,
													hexColor: meta.hexColor,
												})),
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
											packagingLengthCm:
												validatedInput.shippingInfo.packageLength,
											packagingWidthCm:
												validatedInput.shippingInfo.packageWidth,
											packagingHeightCm:
												validatedInput.shippingInfo.packageHeight,
											productWeightKg:
												validatedInput.shippingInfo.productWeight,
											productLengthCm:
												validatedInput.shippingInfo.productLength,
											productWidthCm: validatedInput.shippingInfo.productWidth,
											productHeightCm:
												validatedInput.shippingInfo.productHeight,
										},
									});
								}
								// Link to collections
								if (
									validatedInput.collectionIds &&
									validatedInput.collectionIds.length > 0
								) {
									await tx.collectionProduct.createMany({
										data: validatedInput.collectionIds.map((collectionId) => ({
											productId: newProduct.id,
											collectionId,
										})),
									});
								}
								return newProduct;
							});
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"revalidatePath"
						])("/admin/products");
						return {
							success: true,
							productId: product.id,
						};
					}
					async function updateProduct(input) {
						const { tenantId } = await requireStoreAccess();
						const validatedInput =
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$schemas$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"UpdateProductSchema"
							].parse(input);
						// Verify product belongs to tenant
						const existingProduct =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].product.findFirst({
								where: {
									id: validatedInput.id,
									tenantId,
								},
							});
						if (!existingProduct) {
							throw new Error("Product not found");
						}
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].$transaction(async (tx) => {
							// Update the main product
							await tx.product.update({
								where: {
									id: validatedInput.id,
								},
								data: {
									...(validatedInput.slug && {
										slug: validatedInput.slug,
									}),
									...(validatedInput.status && {
										status: validatedInput.status,
									}),
									...(validatedInput.categoryId && {
										categoryId: validatedInput.categoryId,
									}),
									brandId: validatedInput.brandId || null,
									...(validatedInput.price !== undefined && {
										price: validatedInput.price,
									}),
									compareAtPrice: validatedInput.compareAtPrice,
									costPerItem: validatedInput.costPerItem,
									sku: validatedInput.sku,
									trackStock: validatedInput.trackStock,
									stock: validatedInput.stock,
									lowStockThreshold: validatedInput.lowStockThreshold,
									// Purchase options
									...(validatedInput.purchaseOptions && {
										purchaseType: validatedInput.purchaseOptions.type,
										subscriptionDiscountPercent:
											validatedInput.purchaseOptions.subscriptionDiscount,
										subscriptionIntervals:
											validatedInput.purchaseOptions.subscriptionIntervals ??
											[],
										preOrderReleaseDate:
											validatedInput.purchaseOptions.preOrderReleaseDate,
										preOrderDepositPercent:
											validatedInput.purchaseOptions.preOrderDepositPercent,
									}),
									// Unit pricing
									...(validatedInput.unitPrice && {
										unitPriceAmount: validatedInput.unitPrice.unitPriceAmount,
										unitPriceMeasurement:
											validatedInput.unitPrice.unitPriceMeasurement,
										unitPriceBaseAmount:
											validatedInput.unitPrice.unitPriceBaseAmount,
										unitPriceBaseMeasurement:
											validatedInput.unitPrice.unitPriceBaseMeasurement,
									}),
								},
							});
							// Update translation
							if (
								validatedInput.name ||
								validatedInput.description ||
								validatedInput.seo
							) {
								await tx.productTranslation.upsert({
									where: {
										productId_localeId: {
											productId: validatedInput.id,
											localeId: "en",
										},
									},
									update: {
										...(validatedInput.name && {
											name: validatedInput.name,
										}),
										...(validatedInput.description !== undefined && {
											description: validatedInput.description,
										}),
										...(validatedInput.seo?.metaTitle !== undefined && {
											metaTitle: validatedInput.seo.metaTitle,
										}),
										...(validatedInput.seo?.metaDescription !== undefined && {
											metaDescription: validatedInput.seo.metaDescription,
										}),
									},
									create: {
										productId: validatedInput.id,
										localeId: "en",
										name: validatedInput.name ?? "Untitled",
										description: validatedInput.description,
										metaTitle: validatedInput.seo?.metaTitle,
										metaDescription: validatedInput.seo?.metaDescription,
									},
								});
							}
							// Update media (replace all)
							if (validatedInput.media) {
								await tx.productMedia.deleteMany({
									where: {
										productId: validatedInput.id,
									},
								});
								if (validatedInput.media.length > 0) {
									await tx.productMedia.createMany({
										data: validatedInput.media.map((m, index) => ({
											productId: validatedInput.id,
											url: m.url,
											mediaType: m.mediaType,
											altText: m.altText,
											order: m.order ?? index,
										})),
									});
								}
							}
							// Update variants (replace all)
							if (validatedInput.variants) {
								// Delete existing variants and their meta
								const existingVariants = await tx.productVariant.findMany({
									where: {
										productId: validatedInput.id,
									},
									select: {
										id: true,
									},
								});
								for (const v of existingVariants) {
									await tx.variantOptionMeta.deleteMany({
										where: {
											variantId: v.id,
										},
									});
								}
								await tx.productVariant.deleteMany({
									where: {
										productId: validatedInput.id,
									},
								});
								// Create new variants
								for (const variant of validatedInput.variants) {
									const createdVariant = await tx.productVariant.create({
										data: {
											productId: validatedInput.id,
											sku: variant.sku,
											price: variant.price,
											priceAdjustment: variant.priceAdjustment ?? 0,
											stock: variant.stock,
											imageUrl: variant.imageUrl,
											options: variant.options,
										},
									});
									if (variant.optionMeta && variant.optionMeta.length > 0) {
										await tx.variantOptionMeta.createMany({
											data: variant.optionMeta.map((meta) => ({
												variantId: createdVariant.id,
												optionName: meta.optionName,
												hexColor: meta.hexColor,
											})),
										});
									}
								}
							}
							// Update shipping info
							if (validatedInput.shippingInfo) {
								await tx.productShippingInfo.upsert({
									where: {
										productId: validatedInput.id,
									},
									update: {
										packageType: validatedInput.shippingInfo.packageType,
										packagingWeightKg: validatedInput.shippingInfo.weight,
										packagingLengthCm:
											validatedInput.shippingInfo.packageLength,
										packagingWidthCm: validatedInput.shippingInfo.packageWidth,
										packagingHeightCm:
											validatedInput.shippingInfo.packageHeight,
										productWeightKg: validatedInput.shippingInfo.productWeight,
										productLengthCm: validatedInput.shippingInfo.productLength,
										productWidthCm: validatedInput.shippingInfo.productWidth,
										productHeightCm: validatedInput.shippingInfo.productHeight,
									},
									create: {
										productId: validatedInput.id,
										packageType: validatedInput.shippingInfo.packageType,
										packagingWeightKg: validatedInput.shippingInfo.weight,
										packagingLengthCm:
											validatedInput.shippingInfo.packageLength,
										packagingWidthCm: validatedInput.shippingInfo.packageWidth,
										packagingHeightCm:
											validatedInput.shippingInfo.packageHeight,
										productWeightKg: validatedInput.shippingInfo.productWeight,
										productLengthCm: validatedInput.shippingInfo.productLength,
										productWidthCm: validatedInput.shippingInfo.productWidth,
										productHeightCm: validatedInput.shippingInfo.productHeight,
									},
								});
							}
							// Update collection links
							if (validatedInput.collectionIds) {
								await tx.collectionProduct.deleteMany({
									where: {
										productId: validatedInput.id,
									},
								});
								if (validatedInput.collectionIds.length > 0) {
									await tx.collectionProduct.createMany({
										data: validatedInput.collectionIds.map((collectionId) => ({
											productId: validatedInput.id,
											collectionId,
										})),
									});
								}
							}
						});
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"revalidatePath"
						])("/admin/products");
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"revalidatePath"
						])(`/admin/products/${validatedInput.id}/edit`);
						return {
							success: true,
						};
					}
					async function deleteProduct(productId) {
						const { tenantId } = await requireStoreAccess();
						// Verify product belongs to tenant
						const product =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].product.findFirst({
								where: {
									id: productId,
									tenantId,
								},
							});
						if (!product) {
							throw new Error("Product not found");
						}
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].product.update({
							where: {
								id: productId,
							},
							data: {
								deletedAt: new Date(),
							},
						});
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"revalidatePath"
						])("/admin/products");
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"revalidatePath"
						])("/admin/products/trash");
						return {
							success: true,
						};
					}
					async function restoreProduct(productId) {
						const { tenantId } = await requireStoreAccess();
						// Verify product belongs to tenant
						const product =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].product.findFirst({
								where: {
									id: productId,
									tenantId,
								},
							});
						if (!product) {
							throw new Error("Product not found");
						}
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].product.update({
							where: {
								id: productId,
							},
							data: {
								deletedAt: null,
							},
						});
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"revalidatePath"
						])("/admin/products");
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"revalidatePath"
						])("/admin/products/trash");
						return {
							success: true,
						};
					}
					async function restoreProducts(productIds) {
						const { tenantId } = await requireStoreAccess();
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].product.updateMany({
							where: {
								id: {
									in: productIds,
								},
								tenantId,
							},
							data: {
								deletedAt: null,
							},
						});
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"revalidatePath"
						])("/admin/products");
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"revalidatePath"
						])("/admin/products/trash");
						return {
							success: true,
						};
					}
					async function permanentlyDeleteProduct(productId) {
						const { tenantId } = await requireStoreAccess();
						// Verify product belongs to tenant
						const product =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].product.findFirst({
								where: {
									id: productId,
									tenantId,
								},
							});
						if (!product) {
							throw new Error("Product not found");
						}
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].$transaction(async (tx) => {
							// Delete related data
							const variants = await tx.productVariant.findMany({
								where: {
									productId,
								},
								select: {
									id: true,
								},
							});
							for (const v of variants) {
								await tx.variantOptionMeta.deleteMany({
									where: {
										variantId: v.id,
									},
								});
							}
							await tx.productVariant.deleteMany({
								where: {
									productId,
								},
							});
							await tx.productMedia.deleteMany({
								where: {
									productId,
								},
							});
							await tx.productShippingInfo.deleteMany({
								where: {
									productId,
								},
							});
							await tx.productTranslation.deleteMany({
								where: {
									productId,
								},
							});
							await tx.collectionProduct.deleteMany({
								where: {
									productId,
								},
							});
							// Finally delete the product
							await tx.product.delete({
								where: {
									id: productId,
								},
							});
						});
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"revalidatePath"
						])("/admin/products/trash");
						return {
							success: true,
						};
					}
					async function permanentlyDeleteProducts(productIds) {
						await requireStoreAccess(); // Verify access, individual deletes check ownership
						for (const productId of productIds) {
							await permanentlyDeleteProduct(productId);
						}
						return {
							success: true,
						};
					}
					async function getTrashedProducts() {
						const { tenantId } = await requireStoreAccess();
						const products =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].product.findMany({
								where: {
									tenantId,
									deletedAt: {
										not: null,
									},
								},
								orderBy: {
									deletedAt: "desc",
								},
								include: {
									translations: {
										where: {
											localeId: "en",
										},
										take: 1,
									},
									media: {
										orderBy: {
											order: "asc",
										},
										take: 1,
									},
								},
							});
						return products.map((p) => ({
							id: p.id,
							name: p.translations[0]?.name ?? "Untitled",
							sku: p.sku,
							price: p.price,
							deletedAt: p.deletedAt ?? new Date(),
							imageUrl: p.media[0]?.url ?? null,
						}));
					}
					async function cleanupTrashedProducts(retentionDays = 30) {
						// This function should be called by a cron job
						// Don't require admin - it runs as a system task
						const cutoffDate = new Date();
						cutoffDate.setDate(cutoffDate.getDate() - retentionDays);
						const oldProducts =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].product.findMany({
								where: {
									deletedAt: {
										lte: cutoffDate,
									},
								},
								select: {
									id: true,
								},
							});
						for (const product of oldProducts) {
							await permanentlyDeleteProduct(product.id);
						}
						return {
							deleted: oldProducts.length,
						};
					}
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"ensureServerEntryExports"
					])([
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
						cleanupTrashedProducts,
					]);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getProducts, "400bf41a515368060d000c008be7121072342d4535", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getProduct, "40b7b814e80fab32f7122cdc051e6e85345e1efb0a", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(createProduct, "40a8808b8e32bafcff7791d72c167339ca3122ac12", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(updateProduct, "40ab7906bad5c2063546fb66caa71b48507dbc294b", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(deleteProduct, "405d7bf5b1e1ff67b41050f9c6b3b647526820a0d9", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						restoreProduct,
						"40f79fbc3157e5b5e7dc8eba1d68fccfe13cc6045d",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						restoreProducts,
						"409c4a4f8e5330a0e68c508441706a640b9ab52108",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						permanentlyDeleteProduct,
						"402ea997692a13868eee414c68b575f51a3565ed2c",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						permanentlyDeleteProducts,
						"40c29a95514127093c8b7487a1c36c9931ae89bb5c",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						getTrashedProducts,
						"002b285ac44bb10c639d5761f850a8d1dfb8d985ac",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						cleanupTrashedProducts,
						"4060911a32edbd31b948aaa6702daa3ada479c753b",
						null,
					);
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	'[project]/apps/platform/.next-internal/server/app/(internal)/admin/products/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>',
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					__turbopack_context__.s([]);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
					] = __turbopack_async_dependencies__.then
						? (await __turbopack_async_dependencies__)()
						: __turbopack_async_dependencies__;
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	'[project]/apps/platform/.next-internal/server/app/(internal)/admin/products/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript)',
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					__turbopack_context__.s([
						"003bfcd7ac293af20dc22123ec44e81263e2c95347",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getUserStores"
							],
						"00b865bde8853c0b2200356e8a44aabbfda99ded8f",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"userHasStore"
							],
						"00f61908051b9076d3d4981917b5b0f4b9a64a3f03",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getCurrentTenant"
							],
						"400bf41a515368060d000c008be7121072342d4535",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getProducts"
							],
						"40177cd97a285945b21e6d3751ddbdc14238608821",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"createStore"
							],
						"405d7bf5b1e1ff67b41050f9c6b3b647526820a0d9",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"deleteProduct"
							],
						"40ece7c8b327f75aed046925634f22b2bd96f4eb54",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"checkSlugAvailability"
							],
					]);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ =
						__turbopack_context__.i(
							'[project]/apps/platform/.next-internal/server/app/(internal)/admin/products/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>',
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/internal/products.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
					] = __turbopack_async_dependencies__.then
						? (await __turbopack_async_dependencies__)()
						: __turbopack_async_dependencies__;
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
];

//# sourceMappingURL=apps_platform_2d55f31d._.js.map
