import { auth as betterAuth } from "./auth";
import { headers } from "next/headers";
import { db } from "../db";

export const auth = async () => {
	const session = await betterAuth.api.getSession({
		headers: await headers(),
	});

	if (!session) return null;

	// Fetch full user data with role from database
	const fullUser = await db.user.findUnique({
		where: { id: session.user.id },
		select: {
			id: true,
			email: true,
			name: true,
			firstName: true,
			lastName: true,
			image: true,
			emailVerified: true,
			emailVerifiedAt: true,
			role: true,
			createdAt: true,
			updatedAt: true,
		},
	});

	if (!fullUser) return null;

	return {
		...session,
		user: fullUser,
	};
};

export { betterAuth };
