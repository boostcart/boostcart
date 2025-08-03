import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
	getUserByEmail,
	getVerificationTokenByEmail,
} from "@/server/api/helpers";
import { sendEmailVerification } from "@/server/services/email/send";

const ResendVerificationSchema = z.object({
	email: z.email("Please enter a valid email address."),
});

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const email = searchParams.get("email");

		// Validate email parameter
		const validation = ResendVerificationSchema.safeParse({ email });

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

		// Check if email is already verified
		if (user.emailVerified) {
			return NextResponse.redirect(
				new URL("/?message=already-verified", request.url),
			);
		}

		// Check for rate limiting - if there's a verification token created in the last 3 minutes
		const existingToken = await getVerificationTokenByEmail(
			"verify",
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

		// Send verification email
		await sendEmailVerification(validatedEmail);

		// Redirect to homepage with success message
		return NextResponse.redirect(
			new URL("/?message=verification-sent", request.url),
		);
	} catch (error) {
		console.error("Resend verification error:", error);

		return NextResponse.redirect(new URL("/?error=resend-failed", request.url));
	}
}
