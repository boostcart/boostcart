"use server";

import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { cleanupBlogPostImages } from "@/server/services/media-cleanup";
import { requireAdminTenant } from "@/server/tenant";

async function requireStoreAccess() {
	const session = await auth();
	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}

	const tenant = await requireAdminTenant();

	const staffRecord = await db.tenantStaff.findFirst({
		where: {
			userId: session.user.id,
			tenantId: tenant.id,
		},
	});

	if (!staffRecord) {
		throw new Error("Forbidden: No access to this store");
	}

	return {
		userId: session.user.id,
		tenantId: tenant.id,
		role: staffRecord.role,
	};
}

export async function getBlogPosts() {
	const { tenantId } = await requireStoreAccess();

	const posts = await db.blogPost.findMany({
		where: { tenantId },
		include: {
			translations: {
				include: {
					locale: true,
				},
			},
		},
		orderBy: { createdAt: "desc" },
	});

	return posts.map((post) => ({
		id: post.id,
		slug: post.slug,
		featuredImage: post.featuredImage,
		author: post.author,
		isPublished: post.isPublished,
		publishedAt: post.publishedAt,
		title: post.translations[0]?.title ?? post.slug,
		excerpt: post.translations[0]?.excerpt ?? "",
		content: post.translations[0]?.content ?? "",
		translations: post.translations.map((t) => ({
			localeId: t.localeId,
			localeCode: t.locale.code,
			localeName: t.locale.name,
			title: t.title,
			excerpt: t.excerpt,
			content: t.content,
		})),
		createdAt: post.createdAt,
		updatedAt: post.updatedAt,
	}));
}

export async function getBlogPost(id: string) {
	const { tenantId } = await requireStoreAccess();

	const post = await db.blogPost.findFirst({
		where: { id, tenantId },
		include: {
			translations: {
				include: {
					locale: true,
				},
			},
		},
	});

	if (!post) {
		throw new Error("Blog post not found");
	}

	return {
		id: post.id,
		slug: post.slug,
		featuredImage: post.featuredImage,
		author: post.author,
		isPublished: post.isPublished,
		publishedAt: post.publishedAt,
		translations: post.translations.map((t) => ({
			id: t.id,
			localeId: t.localeId,
			localeCode: t.locale.code,
			localeName: t.locale.name,
			title: t.title,
			excerpt: t.excerpt,
			content: t.content,
		})),
		createdAt: post.createdAt,
		updatedAt: post.updatedAt,
	};
}

export interface CreateBlogPostInput {
	slug: string;
	featuredImage?: string;
	author?: string;
	isPublished?: boolean;
	publishedAt?: Date;
	translations: {
		localeId: string;
		title: string;
		excerpt?: string;
		content: string;
	}[];
}

export async function createBlogPost(input: CreateBlogPostInput) {
	const { tenantId } = await requireStoreAccess();

	// Check for duplicate slug
	const existing = await db.blogPost.findUnique({
		where: {
			tenantId_slug: {
				tenantId,
				slug: input.slug,
			},
		},
	});

	if (existing) {
		throw new Error("A blog post with this slug already exists");
	}

	const post = await db.blogPost.create({
		data: {
			slug: input.slug,
			featuredImage: input.featuredImage,
			author: input.author,
			isPublished: input.isPublished ?? false,
			publishedAt: input.isPublished ? (input.publishedAt ?? new Date()) : null,
			tenantId,
			translations: {
				create: input.translations.map((t) => ({
					localeId: t.localeId,
					title: t.title,
					excerpt: t.excerpt,
					content: t.content,
				})),
			},
		},
		include: {
			translations: true,
		},
	});

	return post;
}

export interface UpdateBlogPostInput {
	slug?: string;
	featuredImage?: string | null;
	author?: string;
	isPublished?: boolean;
	publishedAt?: Date | null;
	translations?: {
		localeId: string;
		title: string;
		excerpt?: string;
		content: string;
	}[];
}

export async function updateBlogPost(id: string, input: UpdateBlogPostInput) {
	const { tenantId } = await requireStoreAccess();

	const post = await db.blogPost.findFirst({
		where: { id, tenantId },
	});

	if (!post) {
		throw new Error("Blog post not found or access denied");
	}

	// Check for duplicate slug if changing
	if (input.slug && input.slug !== post.slug) {
		const existing = await db.blogPost.findUnique({
			where: {
				tenantId_slug: {
					tenantId,
					slug: input.slug,
				},
			},
		});

		if (existing) {
			throw new Error("A blog post with this slug already exists");
		}
	}

	// Handle publish state change
	let publishedAt = input.publishedAt;
	if (input.isPublished !== undefined) {
		if (input.isPublished && !post.isPublished) {
			// Publishing for the first time
			publishedAt = publishedAt ?? new Date();
		} else if (!input.isPublished) {
			// Unpublishing
			publishedAt = null;
		}
	}

	const updated = await db.blogPost.update({
		where: { id },
		data: {
			slug: input.slug,
			featuredImage: input.featuredImage,
			author: input.author,
			isPublished: input.isPublished,
			publishedAt,
			...(input.translations && {
				translations: {
					deleteMany: {},
					create: input.translations.map((t) => ({
						localeId: t.localeId,
						title: t.title,
						excerpt: t.excerpt,
						content: t.content,
					})),
				},
			}),
		},
		include: {
			translations: true,
		},
	});

	return updated;
}

export async function deleteBlogPost(id: string) {
	const { tenantId } = await requireStoreAccess();

	const post = await db.blogPost.findFirst({
		where: { id, tenantId },
		include: {
			translations: {
				select: { content: true },
			},
		},
	});

	if (!post) {
		throw new Error("Blog post not found or access denied");
	}

	// Collect all content from translations to find embedded images
	const allContent = post.translations.map((t) => t.content).join("");

	// Delete the blog post first
	await db.blogPost.delete({
		where: { id },
	});

	// Cleanup images that are no longer used (after deletion)
	if (allContent) {
		await cleanupBlogPostImages(allContent, tenantId, id);
	}

	return { success: true };
}

export async function toggleBlogPostPublished(id: string) {
	const { tenantId } = await requireStoreAccess();

	const post = await db.blogPost.findFirst({
		where: { id, tenantId },
	});

	if (!post) {
		throw new Error("Blog post not found or access denied");
	}

	const isPublished = !post.isPublished;
	const publishedAt = isPublished
		? (post.publishedAt ?? new Date())
		: post.publishedAt;

	const updated = await db.blogPost.update({
		where: { id },
		data: {
			isPublished,
			publishedAt,
		},
	});

	return updated;
}

export async function getBlogStats() {
	const { tenantId } = await requireStoreAccess();

	const [total, published, drafts] = await Promise.all([
		db.blogPost.count({ where: { tenantId } }),
		db.blogPost.count({ where: { tenantId, isPublished: true } }),
		db.blogPost.count({ where: { tenantId, isPublished: false } }),
	]);

	// Get recent posts (last 7 days)
	const weekAgo = new Date();
	weekAgo.setDate(weekAgo.getDate() - 7);

	const recent = await db.blogPost.count({
		where: {
			tenantId,
			createdAt: { gte: weekAgo },
		},
	});

	return {
		total,
		published,
		drafts,
		recent,
	};
}
