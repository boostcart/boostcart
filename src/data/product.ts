import { prisma } from "@/lib/db";

export async function getProducts() {
	try {
		const products = await prisma.product.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				brand: true,
				category: true,
				images: true,
				variants: true,
			},
		});

		return products;
	} catch (error) {
		console.error("[PRODUCTS_GET]", error);
		throw new Error("Failed to fetch products");
	}
}

export async function getProductById(id: string) {
	try {
		const product = await prisma.product.findUnique({
			where: { id },
			include: {
				brand: true,
				category: true,
				images: true,
				variants: true,
			},
		});

		return product;
	} catch (error) {
		console.error("[PRODUCT_GET]", error);
		throw new Error("Failed to fetch product");
	}
}
