import { type NextRequest, NextResponse } from "next/server";
import {
	getUserByEmail,
	getVerificationTokenByToken,
} from "@/server/api/helpers";
import { db } from "@/server/db";

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const token = searchParams.get("token");

		if (!token) {
			return NextResponse.redirect(
				new URL("/?error=missing-token", request.url),
			);
		}

		// Get the verification token from the database
		const verificationToken = await getVerificationTokenByToken(
			"verify",
			token,
		);

		if (!verificationToken) {
			return NextResponse.redirect(
				new URL("/?error=invalid-token", request.url),
			);
		}

		// Check if the token has expired
		if (new Date() > verificationToken.expires) {
			// Delete the expired token
			await db.verification.delete({
				where: { id: verificationToken.id },
			});

			return NextResponse.redirect(
				new URL("/?error=token-expired", request.url),
			);
		}

		// Get the user by email
		const user = await getUserByEmail(verificationToken.email);

		if (!user) {
			return NextResponse.redirect(
				new URL("/?error=user-not-found", request.url),
			);
		}

		// Check if email is already verified
		if (user.emailVerified) {
			// Delete the token since email is already verified
			await db.verification.delete({
				where: { id: verificationToken.id },
			});

			return NextResponse.redirect(
				new URL("/?message=already-verified", request.url),
			);
		}

		// Update user's email verification status
		await db.user.update({
			where: { id: user.id },
			data: {
				emailVerified: true,
				emailVerifiedAt: new Date(),
			},
		});

		// Delete the used verification token
		await db.verification.delete({
			where: { id: verificationToken.id },
		});

		// Redirect to homepage with success message
		return NextResponse.redirect(
			new URL("/?message=email-verified", request.url),
		);
	} catch (error) {
		console.error("Email verification error:", error);

		return NextResponse.redirect(
			new URL("/?error=verification-failed", request.url),
		);
	}
}
