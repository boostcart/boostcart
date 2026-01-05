import { v4 as uuid } from "uuid";
import { getVerificationTokenByEmail } from "@/server/api/helpers";
import { db } from "@/server/db";

/**
 * Generate a verification token for email verification or password reset.
 * This function creates a new token if one does not already exist for the given email.
 * If a token already exists, it deletes the old token and creates a new one.
 * @param type "verify" | "reset"
 * @param email string
 * @param validFor number - The duration in hours for which the token is valid (default is 1 hour).
 * @returns The created verification token string.
 */
export async function generateVerificationToken(
	type: "verify" | "reset",
	email: string,
	validFor: number = 1, // Default to 1 hour
) {
	const token = uuid();

	// expires in validFor hour(s)
	const expiresAt = new Date(Date.now() + validFor * 60 * 60 * 1000);

	const existingToken = await getVerificationTokenByEmail(type, email);

	if (existingToken) {
		await db.verification.delete({
			where: { id: existingToken.id },
		});
	}

	const verificationToken = await db.verification.create({
		data: {
			identifier: email,
			value: token,
			expiresAt,
		},
	});

	return { ...verificationToken, token, email, expires: expiresAt };
}
