"use server";

import { prisma } from "@/lib/db";

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      where: { parentId: null },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        translations: true,
        parent: true,
        subcategories: {
          include: {
            parent: true,
            translations: true,
            subcategories: true,
            products: true,
          },
        },
        products: true,
      },
    });

    return categories;
  } catch {
    return [];
  }
}

export async function getCategoryById(id: string) {
  try {
    const category = await prisma.category.findUnique({
      where: { id },
    });

    return category;
  } catch {
    return null;
  }
}

export async function getCategoryBySlug(slug: string) {
  try {
    const category = await prisma.category.findUnique({
      where: { slug },
    });

    return category;
  } catch {
    return null;
  }
}
