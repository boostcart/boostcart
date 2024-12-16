import * as z from "zod";

import { UserRole } from "@prisma/client";

export const LoginSchema = z.object({
	email: z.string().email('Please enter a valid email address.'),
	password: z.string().min(1, 'Please enter a password.'),
});