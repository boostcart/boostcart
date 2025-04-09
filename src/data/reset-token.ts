import { prisma } from "@/lib/db";

export const getResetTokenByEmail = async (email: string) => {
	try {
		const user = await prisma.passwordResetToken.findFirst({
			where: { email },
		});

		return user;
	} catch {
		return null;
	}
};

export const getResetTokenById = async (id: string) => {
	try {
		const user = await prisma.passwordResetToken.findUnique({ where: { id } });

		return user;
	} catch {
		return null;
	}
};
