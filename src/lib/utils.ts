import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { getResetTokenByEmail } from "@/data/reset-token";
import { prisma } from "@/lib/db";
import { twMerge } from "tailwind-merge";
import { v4 as uuid } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateResetToken = async (email: string) => {
  const token = uuid();

  // expires in 1 hour
  const expires = new Date(new Date().getTime() + 60 * 60 * 1000);

  const existingToken = await getResetTokenByEmail(email);

  if (existingToken) {
    await prisma.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }

  const resetToken = await prisma.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return resetToken;
};
