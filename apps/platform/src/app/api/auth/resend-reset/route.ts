import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getUserByEmail } from "@/server/api/helpers";
import { auth as betterAuthInstance } from "@/server/auth/auth";
import { db } from "@/server/db";

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

		// Check if user has a credential account with password
		const credentialAccount = await db.account.findFirst({
			where: {
				userId: user.id,
				providerId: "credential",
			},
			select: { password: true },
		});

		if (!credentialAccount?.password) {
			return NextResponse.redirect(
				new URL("/?error=no-password-account", request.url),
			);
		}

		// Use better-auth's password reset - it handles rate limiting and email sending
		await betterAuthInstance.api.requestPasswordReset({
			body: {
				email: validatedEmail,
				redirectTo: "/reset-password",
			},
		});

		// Redirect to homepage with success message
		return NextResponse.redirect(new URL("/?message=reset-sent", request.url));
	} catch (error) {
		console.error("Resend password reset error:", error);

		return NextResponse.redirect(new URL("/?error=reset-failed", request.url));
	}
}
