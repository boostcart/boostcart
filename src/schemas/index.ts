import * as z from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
