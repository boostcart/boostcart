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

		const verification = await db.verification.findFirst({
			where: { identifier: email },
		});

		if (!verification) return null;

		return {
			id: verification.id,
			email: verification.identifier,
			token: verification.value,
			expires: verification.expiresAt,
		};
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

		const verification = await db.verification.findFirst({
			where: { value: token },
		});

		if (!verification) return null;

		return {
			id: verification.id,
			email: verification.identifier,
			token: verification.value,
			expires: verification.expiresAt,
		};
	} catch {
		return null;
	}
};
