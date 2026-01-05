import {
	ALLOWED_FILE_TYPES,
	validateFileSize,
	validateFileType,
} from "@boostcart/storage";
import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { storage } from "@/server/storage";
import { requireAdminTenant } from "@/server/tenant";

const MAX_FILE_SIZE_MB = 10;

export async function POST(request: NextRequest) {
	try {
		// Authenticate user
		const session = await auth();
		if (!session?.user?.id) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Get tenant context
		const tenant = await requireAdminTenant();

		// Verify staff access
		const staffRecord = await db.tenantStaff.findFirst({
			where: {
				userId: session.user.id,
				tenantId: tenant.id,
			},
		});

		if (!staffRecord) {
			return NextResponse.json(
				{ error: "Forbidden: No access to this store" },
				{ status: 403 },
			);
		}

		// Parse multipart form data
		const formData = await request.formData();
		const file = formData.get("file") as File | null;
		const folder = formData.get("folder") as string | null;

		if (!file) {
			return NextResponse.json({ error: "No file provided" }, { status: 400 });
		}

		// Validate file size
		if (!validateFileSize(file.size, MAX_FILE_SIZE_MB)) {
			return NextResponse.json(
				{ error: `File size exceeds ${MAX_FILE_SIZE_MB}MB limit` },
				{ status: 400 },
			);
		}

		// Validate file type
		if (!validateFileType(file.type, ALLOWED_FILE_TYPES)) {
			return NextResponse.json(
				{ error: "File type not allowed" },
				{ status: 400 },
			);
		}

		// Convert File to Buffer
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		// Get image dimensions if it's an image
		let width: number | undefined;
		let height: number | undefined;

		if (file.type.startsWith("image/")) {
			// We could use sharp here for server-side processing
			// For now, we'll get dimensions from client or leave undefined
		}

		// Upload to R2
		const result = await storage.upload(buffer, {
			tenantId: tenant.id,
			filename: file.name,
			contentType: file.type,
			folder: folder || undefined,
			metadata: {
				uploadedBy: session.user.id,
			},
		});

		// Create Media record in database
		const media = await db.media.create({
			data: {
				filename: result.key.split("/").pop() ?? result.filename,
				originalName: file.name,
				url: result.url,
				mimeType: result.contentType,
				size: result.size,
				width,
				height,
				folder: folder || null,
				tenantId: tenant.id,
			},
		});

		return NextResponse.json({
			success: true,
			media: {
				id: media.id,
				filename: media.filename,
				originalName: media.originalName,
				url: media.url,
				mimeType: media.mimeType,
				size: media.size,
				width: media.width,
				height: media.height,
				folder: media.folder,
				createdAt: media.createdAt,
			},
		});
	} catch (error) {
		console.error("Upload error:", error);
		return NextResponse.json(
			{ error: error instanceof Error ? error.message : "Upload failed" },
			{ status: 500 },
		);
	}
}

/**
 * Get presigned URL for direct upload (alternative to server upload)
 */
export async function PUT(request: NextRequest) {
	try {
		// Authenticate user
		const session = await auth();
		if (!session?.user?.id) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Get tenant context
		const tenant = await requireAdminTenant();

		// Verify staff access
		const staffRecord = await db.tenantStaff.findFirst({
			where: {
				userId: session.user.id,
				tenantId: tenant.id,
			},
		});

		if (!staffRecord) {
			return NextResponse.json(
				{ error: "Forbidden: No access to this store" },
				{ status: 403 },
			);
		}

		const body = await request.json();
		const { filename, contentType, folder } = body as {
			filename: string;
			contentType: string;
			folder?: string;
		};

		if (!filename || !contentType) {
			return NextResponse.json(
				{ error: "Missing filename or contentType" },
				{ status: 400 },
			);
		}

		// Validate file type
		if (!validateFileType(contentType, ALLOWED_FILE_TYPES)) {
			return NextResponse.json(
				{ error: "File type not allowed" },
				{ status: 400 },
			);
		}

		// Get presigned URL for direct upload
		const presigned = await storage.getPresignedUploadUrl({
			tenantId: tenant.id,
			filename,
			contentType,
			folder,
		});

		return NextResponse.json({
			success: true,
			uploadUrl: presigned.uploadUrl,
			key: presigned.key,
			publicUrl: presigned.publicUrl,
		});
	} catch (error) {
		console.error("Presigned URL error:", error);
		return NextResponse.json(
			{
				error:
					error instanceof Error ? error.message : "Failed to get upload URL",
			},
			{ status: 500 },
		);
	}
}
