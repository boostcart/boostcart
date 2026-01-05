import { env } from "@/env";
import { db } from "@/server/db";
import { storage } from "@/server/storage";

/**
 * Extract image URLs from HTML content that belong to our R2 bucket
 */
export function extractR2ImageUrls(htmlContent: string): string[] {
	if (!htmlContent) return [];

	const publicUrl = env.R2_CUSTOM_DOMAIN;
	if (!publicUrl) return [];

	// Match img src attributes that point to our R2 bucket
	const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
	const urls: string[] = [];
	let match: RegExpExecArray | null;

	while (true) {
		match = imgRegex.exec(htmlContent);
		if (!match) break;
		const url = match[1];
		if (url?.startsWith(publicUrl)) {
			urls.push(url);
		}
	}

	return urls;
}

/**
 * Convert public URL to R2 key
 */
export function urlToR2Key(url: string): string | null {
	const publicUrl = env.R2_CUSTOM_DOMAIN;
	if (!publicUrl || !url.startsWith(publicUrl)) return null;

	// Remove the public URL prefix to get the key
	return url.slice(publicUrl.length + 1); // +1 for the trailing slash
}

/**
 * Check if an image URL is used in any blog post content
 */
async function isImageUsedInBlogPosts(
	url: string,
	tenantId: string,
	excludePostId?: string,
): Promise<boolean> {
	const posts = await db.blogPostTranslation.findMany({
		where: {
			post: { tenantId },
			...(excludePostId && { postId: { not: excludePostId } }),
			content: { contains: url },
		},
		select: { id: true },
		take: 1,
	});

	return posts.length > 0;
}

/**
 * Check if an image URL is used in any page content
 */
async function isImageUsedInPages(
	url: string,
	tenantId: string,
	excludePageId?: string,
): Promise<boolean> {
	const pages = await db.pageTranslation.findMany({
		where: {
			page: { tenantId },
			...(excludePageId && { pageId: { not: excludePageId } }),
			content: { contains: url },
		},
		select: { id: true },
		take: 1,
	});

	return pages.length > 0;
}

/**
 * Check if an image URL is used in product media
 */
async function isImageUsedInProducts(
	url: string,
	tenantId: string,
): Promise<boolean> {
	const media = await db.productMedia.findFirst({
		where: {
			product: { tenantId },
			url,
		},
		select: { id: true },
	});

	return !!media;
}

/**
 * Check if an image is used anywhere in the tenant's content
 */
export async function isImageUsedElsewhere(
	url: string,
	tenantId: string,
	context: {
		excludeBlogPostId?: string;
		excludePageId?: string;
	} = {},
): Promise<boolean> {
	const [inBlogPosts, inPages, inProducts] = await Promise.all([
		isImageUsedInBlogPosts(url, tenantId, context.excludeBlogPostId),
		isImageUsedInPages(url, tenantId, context.excludePageId),
		isImageUsedInProducts(url, tenantId),
	]);

	return inBlogPosts || inPages || inProducts;
}

/**
 * Delete images from R2 that are not used elsewhere
 * Returns the number of images deleted
 */
export async function cleanupUnusedImages(
	imageUrls: string[],
	tenantId: string,
	context: {
		excludeBlogPostId?: string;
		excludePageId?: string;
	} = {},
): Promise<number> {
	let deletedCount = 0;

	for (const url of imageUrls) {
		const isUsed = await isImageUsedElsewhere(url, tenantId, context);

		if (!isUsed) {
			const key = urlToR2Key(url);
			if (key) {
				try {
					await storage.delete(key);
					deletedCount++;
					console.log(`[Media Cleanup] Deleted unused image: ${key}`);
				} catch (error) {
					console.error(
						`[Media Cleanup] Failed to delete image: ${key}`,
						error,
					);
				}
			}
		}
	}

	return deletedCount;
}

/**
 * Cleanup images from blog post content
 */
export async function cleanupBlogPostImages(
	content: string,
	tenantId: string,
	blogPostId: string,
): Promise<number> {
	const imageUrls = extractR2ImageUrls(content);
	if (imageUrls.length === 0) return 0;

	return cleanupUnusedImages(imageUrls, tenantId, {
		excludeBlogPostId: blogPostId,
	});
}

/**
 * Cleanup images from page content
 */
export async function cleanupPageImages(
	content: string,
	tenantId: string,
	pageId: string,
): Promise<number> {
	const imageUrls = extractR2ImageUrls(content);
	if (imageUrls.length === 0) return 0;

	return cleanupUnusedImages(imageUrls, tenantId, {
		excludePageId: pageId,
	});
}

/**
 * Cleanup product media files
 */
export async function cleanupProductMedia(
	mediaUrls: string[],
	tenantId: string,
): Promise<number> {
	let deletedCount = 0;

	for (const url of mediaUrls) {
		// Check if the URL is from our R2 bucket
		const key = urlToR2Key(url);
		if (!key) continue;

		// Check if this media is used in other products or content
		const isUsed = await isImageUsedElsewhere(url, tenantId);

		if (!isUsed) {
			try {
				await storage.delete(key);
				deletedCount++;
				console.log(`[Media Cleanup] Deleted product media: ${key}`);
			} catch (error) {
				console.error(`[Media Cleanup] Failed to delete media: ${key}`, error);
			}
		}
	}

	return deletedCount;
}
