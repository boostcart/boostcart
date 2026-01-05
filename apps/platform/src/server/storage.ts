import { R2Client } from "@boostcart/storage";
import { env } from "@/env";

/**
 * R2 Storage Client Singleton
 * Used for file uploads throughout the platform
 */
function createStorageClient() {
	return new R2Client({
		accountId: env.R2_ACCOUNT_ID,
		accessKeyId: env.R2_ACCESS_KEY_ID,
		secretAccessKey: env.R2_SECRET_ACCESS_KEY,
		bucketName: env.R2_BUCKET_NAME,
		endpoint: env.R2_ENDPOINT, // Optional: for regional buckets
		publicUrl: env.R2_CUSTOM_DOMAIN, // Custom domain for public URLs
	});
}

// Global singleton for storage client
const globalForStorage = globalThis as unknown as {
	storage: R2Client | undefined;
};

export const storage = globalForStorage.storage ?? createStorageClient();

if (process.env.NODE_ENV !== "production") {
	globalForStorage.storage = storage;
}
