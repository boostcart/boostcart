import { v4 as uuid } from "uuid";
import { db } from "@/server/db";
import { getVerificationTokenByEmail } from "@/server/api/helpers";

export async function generateVerificationToken(
	type: "verify" | "reset",
	email: string,
) {
	const token = uuid();

	// expires in 1 hour(s)
	const expires = new Date(Date.now() + 1 * 60 * 60 * 1000);

	const existingToken = await getVerificationTokenByEmail(type, email);

	if (existingToken) {
		if (type === "verify") {
			await db.emailVerificationToken.delete({
				where: { id: existingToken.id },
			});
		}

		if (type === "reset") {
			await db.passwordResetToken.delete({
				where: { id: existingToken.id },
			});
		}

		return;
	}

	if (type === "verify") {
		const verificationToken = await db.emailVerificationToken.create({
			data: {
				email,
				token,
				expires,
			},
		});
		return verificationToken;
	}
	if (type === "reset") {
		const verificationToken = await db.passwordResetToken.create({
			data: {
				email,
				token,
				expires,
			},
		});
		return verificationToken;
	}
}
