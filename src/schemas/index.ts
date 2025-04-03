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
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number."
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
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number."
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
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number."
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
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number."
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
      "Title cannot contain non-english letters."
    ),
  slug: z
    .string()
    .min(2, "Please enter a slug.")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers, and hyphens, and cannot start or end with a hyphen."
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
      "Title cannot contain non-english letters."
    ),
  slug: z
    .string()
    .min(2, "Please enter a slug.")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers, and hyphens, and cannot start or end with a hyphen."
    ),
  logo: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(["DRAFT", "HIDDEN", "PUBLISHED"]),
});

export type BrandSchemaType = z.infer<typeof BrandSchema>;
