import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@/server/auth";

const f = createUploadthing();

async function getUser() {
	const session = await auth();
	return session?.user;
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
	// Product media (images and videos)
	productMedia: f({
		image: { maxFileSize: "16MB", maxFileCount: 20 },
		video: { maxFileSize: "64MB", maxFileCount: 5 },
	})
		.middleware(async () => {
			const user = await getUser();

			if (!user) throw new UploadThingError("Unauthorized");
			if (user.role !== "ADMIN")
				throw new UploadThingError("Admin access required");

			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			console.log("Product media upload complete for userId:", metadata.userId);
			console.log("File URL:", file.ufsUrl);

			return { url: file.ufsUrl };
		}),

	// Variant images
	variantImage: f({
		image: { maxFileSize: "4MB", maxFileCount: 1 },
	})
		.middleware(async () => {
			const user = await getUser();

			if (!user) throw new UploadThingError("Unauthorized");
			if (user.role !== "ADMIN")
				throw new UploadThingError("Admin access required");

			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			console.log("Variant image upload complete for userId:", metadata.userId);
			console.log("File URL:", file.ufsUrl);

			return { url: file.ufsUrl };
		}),

	// Brand logo
	brandLogo: f({
		image: { maxFileSize: "2MB", maxFileCount: 1 },
	})
		.middleware(async () => {
			const user = await getUser();

			if (!user) throw new UploadThingError("Unauthorized");
			if (user.role !== "ADMIN")
				throw new UploadThingError("Admin access required");

			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			console.log("Brand logo upload complete for userId:", metadata.userId);
			console.log("File URL:", file.ufsUrl);

			return { url: file.ufsUrl };
		}),

	// Category image
	categoryImage: f({
		image: { maxFileSize: "4MB", maxFileCount: 1 },
	})
		.middleware(async () => {
			const user = await getUser();

			if (!user) throw new UploadThingError("Unauthorized");
			if (user.role !== "ADMIN")
				throw new UploadThingError("Admin access required");

			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			console.log(
				"Category image upload complete for userId:",
				metadata.userId,
			);
			console.log("File URL:", file.ufsUrl);

			return { url: file.ufsUrl };
		}),

	// Collection image
	collectionImage: f({
		image: { maxFileSize: "4MB", maxFileCount: 1 },
	})
		.middleware(async () => {
			const user = await getUser();

			if (!user) throw new UploadThingError("Unauthorized");
			if (user.role !== "ADMIN")
				throw new UploadThingError("Admin access required");

			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			console.log(
				"Collection image upload complete for userId:",
				metadata.userId,
			);
			console.log("File URL:", file.ufsUrl);

			return { url: file.ufsUrl };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
