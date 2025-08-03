"use server";

import { auth } from "../auth";
import { getUserByEmail } from "./helpers";

export async function getCurrentUser() {
	try {
		const session = await auth();

		if (!session?.user?.email) return null;

		const currentUser = await getUserByEmail(session.user.email);

		if (!currentUser) return null;

		return currentUser;
	} catch {
		return null;
	}
}
