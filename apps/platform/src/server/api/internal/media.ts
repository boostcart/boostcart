"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { storage } from "@/server/storage";
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

export async function getMediaFiles(folder?: string) {
	const { tenantId } = await requireStoreAccess();

	const where: { tenantId: string; folder?: string } = { tenantId };
	if (folder) {
		where.folder = folder;
	}

	const files = await db.media.findMany({
		where,
		orderBy: { createdAt: "desc" },
	});

	return files.map((file) => ({
		id: file.id,
		filename: file.filename,
		originalName: file.originalName,
		url: file.url,
		mimeType: file.mimeType,
		size: file.size,
		width: file.width,
		height: file.height,
		altText: file.altText,
		folder: file.folder,
		createdAt: file.createdAt,
		updatedAt: file.updatedAt,
	}));
}

export async function getMediaFile(id: string) {
	const { tenantId } = await requireStoreAccess();

	const file = await db.media.findFirst({
		where: { id, tenantId },
	});

	if (!file) {
		throw new Error("File not found");
	}

	return file;
}

export interface CreateMediaInput {
	filename: string;
	originalName: string;
	url: string;
	mimeType: string;
	size: number;
	width?: number;
	height?: number;
	altText?: string;
	folder?: string;
}

export async function createMedia(input: CreateMediaInput) {
	const { tenantId } = await requireStoreAccess();

	const media = await db.media.create({
		data: {
			filename: input.filename,
			originalName: input.originalName,
			url: input.url,
			mimeType: input.mimeType,
			size: input.size,
			width: input.width,
			height: input.height,
			altText: input.altText,
			folder: input.folder,
			tenantId,
		},
	});

	return media;
}

export interface UpdateMediaInput {
	altText?: string;
	folder?: string;
}

export async function updateMedia(id: string, input: UpdateMediaInput) {
	const { tenantId } = await requireStoreAccess();

	const file = await db.media.findFirst({
		where: { id, tenantId },
	});

	if (!file) {
		throw new Error("File not found or access denied");
	}

	const updated = await db.media.update({
		where: { id },
		data: {
			altText: input.altText,
			folder: input.folder,
		},
	});

	return updated;
}

export async function deleteMedia(id: string) {
	const { tenantId } = await requireStoreAccess();

	const file = await db.media.findFirst({
		where: { id, tenantId },
	});

	if (!file) {
		throw new Error("File not found or access denied");
	}

	// Delete from R2 storage
	const key = storage.getKeyFromUrl(file.url);
	if (key) {
		try {
			await storage.delete(key);
		} catch (error) {
			console.error("Failed to delete file from storage:", error);
		}
	}

	await db.media.delete({
		where: { id },
	});

	revalidatePath("/admin/media");

	return { success: true };
}

export async function deleteMultipleMedia(ids: string[]) {
	const { tenantId } = await requireStoreAccess();

	// Verify all files belong to tenant
	const files = await db.media.findMany({
		where: {
			id: { in: ids },
			tenantId,
		},
	});

	if (files.length !== ids.length) {
		throw new Error("Some files not found or access denied");
	}

	// Delete from R2 storage
	const keys = files
		.map((f) => storage.getKeyFromUrl(f.url))
		.filter((k): k is string => k !== null);

	if (keys.length > 0) {
		try {
			await storage.deleteMany(keys);
		} catch (error) {
			console.error("Failed to delete files from storage:", error);
		}
	}

	await db.media.deleteMany({
		where: {
			id: { in: ids },
			tenantId,
		},
	});

	revalidatePath("/admin/media");

	return { success: true, count: files.length };
}

export async function getMediaStats() {
	const { tenantId } = await requireStoreAccess();

	const [totalFiles, files] = await Promise.all([
		db.media.count({ where: { tenantId } }),
		db.media.findMany({
			where: { tenantId },
			select: {
				size: true,
				mimeType: true,
				folder: true,
			},
		}),
	]);

	const totalSize = files.reduce((sum, f) => sum + f.size, 0);
	const images = files.filter((f) => f.mimeType.startsWith("image/")).length;
	const documents = files.filter(
		(f) =>
			f.mimeType.includes("pdf") ||
			f.mimeType.includes("document") ||
			f.mimeType.includes("text"),
	).length;
	const videos = files.filter((f) => f.mimeType.startsWith("video/")).length;
	const folders = [...new Set(files.map((f) => f.folder).filter(Boolean))];

	return {
		totalFiles,
		totalSize,
		images,
		documents,
		videos,
		folderCount: folders.length,
	};
}

export async function getFolders() {
	const { tenantId } = await requireStoreAccess();

	const files = await db.media.findMany({
		where: { tenantId },
		select: { folder: true },
		distinct: ["folder"],
	});

	return files
		.map((f) => f.folder)
		.filter((f): f is string => f !== null && f !== "");
}

export async function moveToFolder(ids: string[], folder: string | null) {
	const { tenantId } = await requireStoreAccess();

	await db.media.updateMany({
		where: {
			id: { in: ids },
			tenantId,
		},
		data: {
			folder: folder,
		},
	});

	revalidatePath("/admin/media");

	return { success: true };
}

/**
 * Get presigned URL for direct upload to R2
 */
export async function getUploadUrl(
	filename: string,
	folder: string = "general",
	contentType?: string,
) {
	const { tenantId } = await requireStoreAccess();

	const result = await storage.getPresignedUploadUrl({
		tenantId,
		filename,
		folder,
		contentType,
	});

	return result;
}

/**
 * Confirm upload and create media record
 */
export async function confirmUpload(input: {
	key: string;
	publicUrl: string;
	filename: string;
	originalName: string;
	mimeType: string;
	size: number;
	width?: number;
	height?: number;
	folder?: string;
}) {
	const { tenantId } = await requireStoreAccess();

	// Verify the key belongs to this tenant
	if (!input.key.startsWith(`${tenantId}/`)) {
		throw new Error("Unauthorized");
	}

	const media = await db.media.create({
		data: {
			filename: input.filename,
			originalName: input.originalName,
			url: input.publicUrl,
			mimeType: input.mimeType,
			size: input.size,
			width: input.width,
			height: input.height,
			folder: input.folder || "general",
			tenantId,
		},
	});

	revalidatePath("/admin/media");

	return media;
}
