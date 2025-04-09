"use server";

import { BrandSchema, BrandSchemaType } from "@/schemas";

import { getCurrentUser } from "@/lib/actions";
import { prisma } from "@/lib/db";

export async function getBrands() {
	try {
		const brands = await prisma.brand.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				products: true,
			},
		});

		return brands;
	} catch {
		return [];
	}
}

export async function getBrandById(id: string) {
	try {
		const brand = await prisma.brand.findUnique({
			where: { id },
			include: {
				products: true,
			},
		});

		return brand;
	} catch {
		return null;
	}
}

export async function getBrandBySlug(slug: string) {
	try {
		const brand = await prisma.brand.findUnique({
			where: { slug },
			include: {
				products: true,
			},
		});

		return brand;
	} catch {
		return null;
	}
}

export const newBrand = async (data: BrandSchemaType) => {
	const currentUser = await getCurrentUser();

	if (!currentUser) return { error: "not_logged_in" };

	if (currentUser.role === "USER") return { error: "unauthorized" };

	const validatedFields = BrandSchema.safeParse(data);

	if (!validatedFields.success) return { error: "invalid_data" };

	try {
		await prisma.brand.create({
			data: {
				...validatedFields.data,
			},
		});

		return { success: "brand_created" };
	} catch {
		return { error: "something_went_wrong" };
	}
};

export const editBrand = async (brandId: string, data: BrandSchemaType) => {
	const currentUser = await getCurrentUser();

	if (!currentUser) return { error: "not_logged_in" };

	if (currentUser.role === "USER") return { error: "unauthorized" };

	const validatedFields = BrandSchema.safeParse(data);

	if (!validatedFields.success) return { error: "invalid_data" };

	const brand = await prisma.brand.findUnique({
		where: { id: brandId },
	});

	if (!brand) return { error: "brand_not_found" };

	try {
		await prisma.brand.update({
			where: { id: brandId },
			data: {
				...validatedFields.data,
			},
		});

		return { success: "brand_updated" };
	} catch {
		return { error: "something_went_wrong" };
	}
};

export const deleteBrand = async (brandId: string) => {
	const currentUser = await getCurrentUser();

	if (!currentUser) return { error: "not_logged_in" };

	if (currentUser.role === "USER") return { error: "unauthorized" };

	const brand = await prisma.brand.findUnique({
		where: { id: brandId },
	});

	if (!brand) return { error: "brand_not_found" };

	try {
		await prisma.brand.delete({
			where: { id: brandId },
		});

		return { success: "brand_deleted" };
	} catch {
		return { error: "something_went_wrong" };
	}
};
