"use server";

import {
  DashboardCustomersEditUserSchema,
  DashboardCustomersEditUserSchemaType,
  DashboardCustomersNewUserSchema,
  DashboardCustomersNewUserSchemaType,
} from "@/schemas";

import { getCurrentUser } from "@/lib/actions";
import { prisma } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch {
    return null;
  }
};

export const createUser = async (data: DashboardCustomersNewUserSchemaType) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const validatedFields = DashboardCustomersNewUserSchema.safeParse(data);

  if (!validatedFields.success) return { error: "invalid_data" };

  const { name, email, password, role, marketingEmails } = validatedFields.data;

  if (currentUser.role === "ADMIN" && role === "SUPER_ADMIN")
    return { error: "unauthorized" };

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password,
        role,
        marketingEmails,
      },
    });

    return { success: "user_created" };
  } catch {
    return { error: "something_went_wrong" };
  }
};

export const editUser = async (
  userId: string,
  data: DashboardCustomersEditUserSchemaType
) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const validatedFields = DashboardCustomersEditUserSchema.safeParse(data);

  if (!validatedFields.success) return { error: "invalid_data" };

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) return { error: "user_not_found" };

  if (user.role === "SUPER_ADMIN" && currentUser.role === "ADMIN")
    return { error: "unauthorized" };

  try {
    await prisma.user.update({
      where: { id: userId },
      data: validatedFields.data,
    });

    return { success: "user_updated" };
  } catch {
    return { error: "something_went_wrong" };
  }
};

export const deleteUser = async (userId: string) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) return { error: "user_not_found" };

  if (user.role === "SUPER_ADMIN") return { error: "unauthorized" };

  if (user.role === "ADMIN" && currentUser.role === "ADMIN")
    return { error: "unauthorized" };

  try {
    await prisma.user.delete({
      where: { id: userId },
    });

    return { success: "user_deleted" };
  } catch {
    return { error: "something_went_wrong" };
  }
};
