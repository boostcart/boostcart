"use server";

import { db } from "../db";

export const getUserByEmail = async (email: string) => {
	try {
		const user = await db.user.findUnique({ where: { email } });

		return user;
	} catch {
		return null;
	}
};

export const getUserById = async (id: string | undefined) => {
	if (!id) return null;

	try {
		const user = await db.user.findUnique({ where: { id } });

		return user;
	} catch {
		return null;
	}
};

export const getVerificationTokenByEmail = async (
	type: "verify" | "reset",
	email: string,
) => {
	try {
		if (!email) return null;

		if (type !== "verify" && type !== "reset") {
			throw new Error("Invalid token type");
		}

		if (type === "verify") {
			const result = await db.emailVerificationToken.findFirst({
				where: { email },
			});
			return result;
		}

		if (type === "reset") {
			const result = await db.passwordResetToken.findFirst({
				where: { email },
			});
			return result;
		}

		return null;
	} catch {
		return null;
	}
};

export const getVerificationTokenByToken = async (
	type: "verify" | "reset",
	token: string,
) => {
	try {
		if (!token) return null;

		if (type !== "verify" && type !== "reset") {
			throw new Error("Invalid token type");
		}

		if (type === "verify") {
			const result = await db.emailVerificationToken.findFirst({
				where: { token },
			});
			return result;
		}

		if (type === "reset") {
			const result = await db.passwordResetToken.findFirst({
				where: { token },
			});
			return result;
		}

		return null;
	} catch {
		return null;
	}
};
