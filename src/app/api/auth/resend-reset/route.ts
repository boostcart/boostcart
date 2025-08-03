import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
	getUserByEmail,
	getVerificationTokenByEmail,
} from "@/server/api/helpers";
import { sendPasswordReset } from "@/server/services/email/send";

const ResendResetSchema = z.object({
	email: z.email("Please enter a valid email address."),
});

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const email = searchParams.get("email");

		// Validate email parameter
		const validation = ResendResetSchema.safeParse({ email });

		if (!validation.success) {
			return NextResponse.redirect(
				new URL("/?error=invalid-email", request.url),
			);
		}

		const { email: validatedEmail } = validation.data;

		// Check if user exists
		const user = await getUserByEmail(validatedEmail);

		if (!user) {
			return NextResponse.redirect(
				new URL("/?error=user-not-found", request.url),
			);
		}

		// Check for rate limiting - if there's a password reset token created in the last 3 minutes
		const existingToken = await getVerificationTokenByEmail(
			"reset",
			validatedEmail,
		);

		if (existingToken) {
			// Calculate when the token was created (expires time - 1 hour)
			const tokenCreatedAt = new Date(
				existingToken.expires.getTime() - 60 * 60 * 1000,
			);
			const threeMinutesAgo = new Date(Date.now() - 3 * 60 * 1000);

			if (tokenCreatedAt > threeMinutesAgo) {
				const timeRemaining = Math.ceil(
					(3 * 60 * 1000 - (Date.now() - tokenCreatedAt.getTime())) / 1000,
				);
				return NextResponse.redirect(
					new URL(`/?error=rate-limited&seconds=${timeRemaining}`, request.url),
				);
			}
		}

		// Send password reset email
		await sendPasswordReset(validatedEmail);

		// Redirect to homepage with success message
		return NextResponse.redirect(new URL("/?message=reset-sent", request.url));
	} catch (error) {
		console.error("Resend password reset error:", error);

		return NextResponse.redirect(new URL("/?error=reset-failed", request.url));
	}
}
