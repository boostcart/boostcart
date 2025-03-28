"use server";

import { MessagesSchema, MessagesSchemaType } from "@/schemas";

import { getCurrentUser } from "@/lib/actions";
import { prisma } from "@/lib/db";

export const getMessageByEmail = async (email: string) => {
  try {
    const message = await prisma.message.findFirst({ where: { email } });

    return message;
  } catch {
    return null;
  }
};

export const getMessageById = async (id: string) => {
  try {
    const message = await prisma.message.findUnique({ where: { id } });

    return message;
  } catch {
    return null;
  }
};

export const getMessages = async () => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    return messages;
  } catch {
    return null;
  }
};

export const newMessage = async (data: MessagesSchemaType) => {
  const currentUser = await getCurrentUser();

  const validatedFields = MessagesSchema.safeParse(data);

  if (!validatedFields.success) return { error: "invalid_data" };

  try {
    await prisma.message.create({
      data: {
        ...validatedFields.data,
        userId: validatedFields.data.userId || currentUser?.id,
      },
    });

    return { success: "message_created" };
  } catch {
    return { error: "something_went_wrong" };
  }
};

export const editMessage = async (
  messageId: string,
  data: MessagesSchemaType
) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const message = await prisma.message.findUnique({
    where: { id: messageId },
  });

  if (!message) return { error: "message_not_found" };

  const validatedFields = MessagesSchema.safeParse(data);

  if (!validatedFields.success) return { error: "invalid_data" };

  try {
    await prisma.message.update({
      where: { id: messageId },
      data: validatedFields.data,
    });

    return { success: "message_updated" };
  } catch {
    return { error: "something_went_wrong" };
  }
};

export const deleteMessage = async (messageId: string) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const message = await prisma.message.findUnique({
    where: { id: messageId },
  });

  if (!message) return { error: "message_not_found" };

  try {
    await prisma.message.delete({
      where: { id: messageId },
    });

    return { success: "message_deleted" };
  } catch {
    return { error: "something_went_wrong" };
  }
};

export const toggleMessageStatus = async (messageId: string) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const message = await prisma.message.findUnique({
    where: { id: messageId },
  });

  if (!message) return { error: "message_not_found" };

  try {
    await prisma.message.update({
      where: { id: messageId },
      data: { read: !message.read },
    });

    return {
      success: !message.read
        ? "message_marked_as_read"
        : "message_marked_as_unread",
    };
  } catch {
    return { error: "something_went_wrong" };
  }
};
