import { prisma } from "@/lib/db";

export const getVerificationTokenByEmail = async (email: string) => {
	try {
		const user = await prisma.emailVerificationToken.findFirst({ where: { email } });

		return user;
	} catch {
		return null;
	}
}

export const getVerificationTokenByToken = async (token: string) => {
	try {
		const user = await prisma.emailVerificationToken.findUnique({ where: { token } });

		return user;
	} catch {
		return null;
	}
}

