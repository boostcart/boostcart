import * as z from "zod";

const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?#^();'<>\\/|_\-&]{8,}$/;

export const SignUpSchema = z.object({
	firstName: z.string().min(2, "Please enter your first name."),
	lastName: z.string().min(2, "Please enter your last name."),
	email: z.email("Please enter a valid email address."),
	password: z
		.string()
		.regex(
			passwordRegex,
			"Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.",
		),
});

export const SignInSchema = z.object({
	email: z.email("Please enter a valid email address."),
	password: z.string().min(8, "Password must be at least 8 characters long."),
});

export const ForgotPasswordSchema = z.object({
	email: z.email("Please enter a valid email address."),
});

export const ResetPasswordSchema = z.object({
	token: z.string().min(1, "Token is required."),
	email: z.email("Please enter a valid email address."),
	password: z
		.string()
		.regex(
			passwordRegex,
			"Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.",
		),
});

export const UpdatePasswordSchema = z.object({
	oldPassword: z
		.string()
		.min(8, "Password must be at least 8 characters long."),
	newPassword: z
		.string()
		.regex(
			passwordRegex,
			"Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.",
		),
});

export const SetPasswordSchema = z
	.object({
		password: z
			.string()
			.regex(
				passwordRegex,
				"Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.",
			),
		confirmPassword: z.string().min(1, "Confirm password is required."),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match.",
	});

export const UpdatePersonalInfoSchema = z.object({
	firstName: z.string().min(2, "Please enter your first name."),
	lastName: z.string().min(2, "Please enter your last name."),
	email: z.email("Please enter a valid email address."),
});

// Addresses
const AddressBaseSchema = z.object({
	name: z.string().optional(),
	firstName: z.string().min(2, "Please enter your first name."),
	lastName: z.string().min(2, "Please enter your last name."),
	phone: z.string().min(5, "Please enter a valid phone number."),
	email: z.string().email().optional().or(z.literal("")),
	company: z.string().optional(),
	vatNumber: z.string().optional(),
	country: z.string().min(2, "Please enter your country."),
	city: z.string().min(1, "Please enter your city."),
	region: z.string().optional(),
	postcode: z.string().min(1, "Please enter your postcode."),
	addressLine1: z.string().min(3, "Please enter your address."),
	addressLine2: z.string().optional(),
	isDefault: z.boolean().optional(),
});

export const CreateAddressSchema = AddressBaseSchema;
export const UpdateAddressSchema = AddressBaseSchema.extend({
	id: z.string().min(1, "Address id is required."),
});
export const DeleteAddressSchema = z.object({ id: z.string() });

// Exporting schema types for use in other parts of the application
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type SignInSchemaType = z.infer<typeof SignInSchema>;
export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;
export type UpdatePasswordSchemaType = z.infer<typeof UpdatePasswordSchema>;
export type SetPasswordSchemaType = z.infer<typeof SetPasswordSchema>;
export type UpdatePersonalInfoSchemaType = z.infer<
	typeof UpdatePersonalInfoSchema
>;
export type CreateAddressSchemaType = z.infer<typeof CreateAddressSchema>;
export type UpdateAddressSchemaType = z.infer<typeof UpdateAddressSchema>;
export type DeleteAddressSchemaType = z.infer<typeof DeleteAddressSchema>;
