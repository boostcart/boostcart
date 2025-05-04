import * as z from "zod";

const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?#^();'<>\\\/\|\_\-&]{8,}$/;

export const LoginSchema = z.object({
	email: z.string().email("Please enter a valid email address."),
	password: z.string().min(1, "Please enter a password."),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const SignUpSchema = z.object({
	name: z.string().min(2, "Please enter your name."),
	email: z.string().email("Please enter a valid email address."),
	password: z
		.string()
		.regex(
			passwordRegex,
			"Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.",
		),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const ForgotPasswordSchema = z.object({
	email: z.string().email("Please enter a valid email address."),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

export const ResetPasswordSchema = z.object({
	password: z
		.string()
		.regex(
			passwordRegex,
			"Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.",
		),
});

export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;

export const DashboardGeneralSettingsSchema = z.object({
	name: z.string(),
	url: z.string(),
	logo: z.string(),
	favicon: z.string(),
});

export type DashboardGeneralSettingsSchemaType = z.infer<
	typeof DashboardGeneralSettingsSchema
>;

export const DashboardSocialsSettingsSchema = z.object({
	facebook: z.string().url("Please enter a valid URL.").optional(),
	instagram: z.string().url("Please enter a valid URL.").optional(),
	tiktok: z.string().url("Please enter a valid URL.").optional(),
	youtube: z.string().url("Please enter a valid URL.").optional(),
	twitter: z.string().url("Please enter a valid URL.").optional(),
	linkedin: z.string().url("Please enter a valid URL.").optional(),
});

export type DashboardSocialsSettingsSchemaType = z.infer<
	typeof DashboardSocialsSettingsSchema
>;

export const DashboardCustomersNewUserSchema = z.object({
	name: z.string().min(2, "Please enter a name."),
	email: z.string().email("Please enter a valid email address."),
	emailVerified: z.date().optional(),
	password: z
		.string()
		.regex(
			passwordRegex,
			"Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.",
		),
	role: z.enum(["USER", "ADMIN", "SUPER_ADMIN"]),
	marketingEmails: z.boolean(),
});

export type DashboardCustomersNewUserSchemaType = z.infer<
	typeof DashboardCustomersNewUserSchema
>;

export const DashboardCustomersEditUserSchema = z.object({
	name: z.string().min(2, "Please enter a name."),
	email: z.string().email("Please enter a valid email address."),
	emailVerified: z.date().optional(),
	password: z
		.string()
		.regex(
			passwordRegex,
			"Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.",
		)
		.optional()
		.or(z.literal("")),
	role: z.enum(["USER", "ADMIN", "SUPER_ADMIN"]),
	marketingEmails: z.boolean(),
});

export type DashboardCustomersEditUserSchemaType = z.infer<
	typeof DashboardCustomersNewUserSchema
>;

export const MessagesSchema = z.object({
	name: z.string().min(2, "Please enter a name."),
	email: z.string().email("Please enter a valid email address."),
	phone: z.string().min(10, "Please enter a valid phone number.").optional(),
	subject: z.string().min(2, "Please enter a subject."),
	message: z.string().min(2, "Please enter a message."),
	read: z.boolean(),
	userId: z.string().optional(),
});

export type MessagesSchemaType = z.infer<typeof MessagesSchema>;

export const PostTranslationSchema = z.object({
	language: z.string().min(2, "Please enter a valid language code."),
	title: z.string().min(2, "Please enter a translated title."),
	content: z.string().optional(),
});

export const PostSchema = z.object({
	defaultTitle: z
		.string()
		.min(2, "Please enter a title.")
		.regex(
			/^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{}|;:'",.<>/?\\]*$/,
			"Title cannot contain non-english letters.",
		),
	slug: z
		.string()
		.min(2, "Please enter a slug.")
		.regex(
			/^[a-z0-9]+(?:-[a-z0-9]+)*$/,
			"Slug must contain only lowercase letters, numbers, and hyphens, and cannot start or end with a hyphen.",
		),
	cover: z.string().optional(),
	status: z.enum(["DRAFT", "HIDDEN", "PUBLISHED"]),
	translations: z.array(PostTranslationSchema).optional(),
});

export type PostSchemaType = z.infer<typeof PostSchema>;

export const BrandSchema = z.object({
	name: z
		.string()
		.min(2, "Please enter a name.")
		.regex(
			/^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{}|;:'",.<>/?\\]*$/,
			"Title cannot contain non-english letters.",
		),
	slug: z
		.string()
		.min(2, "Please enter a slug.")
		.regex(
			/^[a-z0-9]+(?:-[a-z0-9]+)*$/,
			"Slug must contain only lowercase letters, numbers, and hyphens, and cannot start or end with a hyphen.",
		),
	logo: z.string().optional(),
	description: z.string().optional(),
	status: z.enum(["DRAFT", "HIDDEN", "PUBLISHED"]),
});

export type BrandSchemaType = z.infer<typeof BrandSchema>;

export const CategoryTranslationSchema = z.object({
	language: z.string().min(2, "Please enter a valid language code."),
	name: z.string().min(2, "Please enter a translated name."),
	description: z.string().optional(),
});

export const CategorySchema = z.object({
	defaultName: z
		.string()
		.min(2, "Please enter a name.")
		.regex(
			/^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{}|;:'",.<>/?\\]*$/,
			"Name cannot contain non-english letters.",
		),
	slug: z
		.string()
		.min(2, "Please enter a slug.")
		.regex(
			/^[a-z0-9]+(?:-[a-z0-9]+)*$/,
			"Slug must contain only lowercase letters, numbers, and hyphens, and cannot start or end with a hyphen.",
		),
	image: z.string().optional(),
	status: z.enum(["DRAFT", "HIDDEN", "PUBLISHED"]),
	parentId: z.string().optional(),
	level: z.number().min(0).max(2).default(0),
	translations: z.array(CategoryTranslationSchema).optional(),
});

export type CategorySchemaType = z.infer<typeof CategorySchema>;
export type CategoryTranslationSchemaType = z.infer<
	typeof CategoryTranslationSchema
>;

export const ProductTranslationSchema = z.object({
	language: z.string().min(2, "Please enter a valid language code."),
	name: z.string().min(2, "Please enter a translated name."),
	shortDescription: z.string().optional(),
	description: z.string().optional(),
});

export type ProductTranslationSchemaType = z.infer<typeof ProductTranslationSchema>;

export const ProductImageSchema = z.object({
	url: z.string().url("Please enter a valid image URL."),
	isMain: z.boolean().default(false),
});

export type ProductImageSchemaType = z.infer<typeof ProductImageSchema>;

export const TechnicalInfoTranslationSchema = z.object({
	language: z.string().min(2, "Please enter a valid language code."),
	key: z.string().min(2, "Please enter a translated specification key."),
	value: z.string().min(1, "Please enter a translated specification value."),
});

export type TechnicalInfoTranslationSchemaType = z.infer<typeof TechnicalInfoTranslationSchema>;

export const TechnicalInfoSchema = z.object({
	key: z.string().min(2, "Please enter a specification key."),
	value: z.string().min(1, "Please enter a specification value."),
	translations: z.array(TechnicalInfoTranslationSchema).optional(),
});

export type TechnicalInfoSchemaType = z.infer<typeof TechnicalInfoSchema>;

export const ShippingInfoSchema = z.object({
	weight: z.number().min(0).optional(),
	width: z.number().min(0).optional(),
	height: z.number().min(0).optional(),
	depth: z.number().min(0).optional(),
	isFragile: z.boolean().default(false),
	freeShipping: z.boolean().default(false),
	requiresPallet: z.boolean().default(false),
});

export type ShippingInfoSchemaType = z.infer<typeof ShippingInfoSchema>;

export const ProductVariantOptionValueSchema = z.object({
	value: z.string().min(1, "Please enter an option value."),
});

export type ProductVariantOptionValueSchemaType = z.infer<
	typeof ProductVariantOptionValueSchema
>;

export const ProductVariantOptionTranslationSchema = z.object({
	language: z.string().min(2, "Please enter a valid language code."),
	name: z.string().min(2, "Please enter a translated option name."),
	value: z.string().min(1, "Please enter a translated option value."),
});

export type ProductVariantOptionTranslationSchemaType = z.infer<
	typeof ProductVariantOptionTranslationSchema
>;

export const ProductVariantTranslationSchema = z.object({
	language: z.string().min(2, "Please enter a valid language code."),
	name: z.string().min(2, "Please enter a translated name."),
});

export type ProductVariantTranslationSchemaType = z.infer<
	typeof ProductVariantTranslationSchema
>;

export const ProductVariantOptionSchema = z.object({
	name: z.string().min(2, "Please enter an option name."),
	value: z.string().min(1, "Please enter an option value."),
	values: z.array(ProductVariantOptionValueSchema).optional(),
	translations: z.array(ProductVariantOptionTranslationSchema).optional(),
});

export type ProductVariantOptionSchemaType = z.infer<
	typeof ProductVariantOptionSchema
>;

export const ProductVariantImageSchema = z.object({
	url: z.string().url("Please enter a valid image URL."),
	isMain: z.boolean().default(false),
});

export type ProductVariantImageSchemaType = z.infer<
	typeof ProductVariantImageSchema
>;

export const ProductVariantSchema = z.object({
	name: z.string().min(2, "Please enter a variant name."),
	sku: z.string().optional(),
	barcode: z.string().optional(),
	price: z.number().min(0, "Price must be a positive number."),
	stock: z.number().int().min(0, "Stock must be a non-negative integer.").default(0),
	status: z.enum(["DRAFT", "HIDDEN", "PUBLISHED"]).default("DRAFT"),
	images: z.array(ProductVariantImageSchema).optional(),
	options: z.array(ProductVariantOptionSchema).optional(),
	translations: z.array(ProductVariantTranslationSchema).optional(),
});

export type ProductVariantSchemaType = z.infer<typeof ProductVariantSchema>;

export const ProductTagTranslationSchema = z.object({
	language: z.string().min(2, "Please enter a valid language code."),
	name: z.string().min(2, "Please enter a translated name."),
});

export type ProductTagTranslationSchemaType = z.infer<
	typeof ProductTagTranslationSchema
>;

export const ProductTagSchema = z.object({
	name: z
		.string()
		.min(2, "Please enter a name.")
		.regex(
			/^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{}|;:'",.<>/?\\]*$/,
			"Name cannot contain non-english letters.",
		),
	slug: z
		.string()
		.min(2, "Please enter a slug.")
		.regex(
			/^[a-z0-9]+(?:-[a-z0-9]+)*$/,
			"Slug must contain only lowercase letters, numbers, and hyphens, and cannot start or end with a hyphen.",
		),
	translations: z.array(ProductTagTranslationSchema).optional(),
});

export type ProductTagSchemaType = z.infer<typeof ProductTagSchema>;

export const ProductReviewSchema = z.object({
	name: z.string().min(2, "Please enter a name."),
	email: z.string().email("Please enter a valid email address."),
	rating: z.number().min(1).max(5),
	title: z.string().min(2, "Please enter a review title."),
	comment: z.string().min(2, "Please enter a review comment."),
	status: z.enum(["DRAFT", "HIDDEN", "PUBLISHED"]).default("DRAFT"),
	verified: z.boolean().default(false),
});

export type ProductReviewSchemaType = z.infer<typeof ProductReviewSchema>;

export const ProductSchema = z.object({
	defaultName: z
		.string()
		.min(2, "Please enter a name.")
		.regex(
			/^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{}|;:'",.<>/?\\]*$/,
			"Name cannot contain non-english letters.",
		),
	slug: z
		.string()
		.min(2, "Please enter a slug.")
		.regex(
			/^[a-z0-9]+(?:-[a-z0-9]+)*$/,
			"Slug must contain only lowercase letters, numbers, and hyphens, and cannot start or end with a hyphen.",
		),
	price: z.number().min(0, "Price must be a positive number."),
	stock: z.number().int().min(0, "Stock must be a non-negative integer.").default(0),
	sku: z.string(),
	barcode: z.string().optional(),
	status: z.enum(["DRAFT", "HIDDEN", "PUBLISHED"]).default("DRAFT"),
	discountType: z.enum(["PERCENTAGE", "FIXED"]).optional(),
	discountValue: z.number().min(0, "Discount value must be a positive number.").optional(),
	discountStart: z.date().optional(),
	discountEnd: z.date().optional(),
	brandId: z.string(),
	categoryId: z.string(),
	translations: z.array(ProductTranslationSchema).optional(),
	images: z.array(ProductImageSchema).optional(),
	technicalInfo: z.array(TechnicalInfoSchema).optional(),
	shippingInfo: ShippingInfoSchema.optional(),
	variants: z.array(ProductVariantSchema).optional(),
	tagIds: z.array(z.string()).optional(),
	relatedProductIds: z.array(z.string()).optional(),
	ignoreStock: z.boolean().default(false),
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;
