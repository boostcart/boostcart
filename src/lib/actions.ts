"use server";

import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";

export async function getCurrentUser() {
  try {
    const session = await auth();

    if (!session?.user?.email) return null;

    const currentUser = await getUserByEmail(session.user.email);

    if (!currentUser) return null;

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
    };
  } catch {
    return null;
  }
}