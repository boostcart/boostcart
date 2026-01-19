import {
	DeleteObjectCommand,
	GetObjectCommand,
	HeadObjectCommand,
	ListObjectsV2Command,
	PutObjectCommand,
	type PutObjectCommandInput,
	S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { generateUploadKey, getMimeType } from "./utils";

export interface R2Config {
	accountId: string;
	accessKeyId: string;
	secretAccessKey: string;
	bucketName: string;
	endpoint?: string; // Optional: full endpoint URL for regional buckets
	publicUrl?: string; // Custom domain or R2 public URL
}

export interface UploadOptions {
	tenantId: string;
	filename: string;
	contentType?: string;
	folder?: string | null;
	metadata?: Record<string, string>;
}

export interface UploadResult {
	key: string;
	url: string;
	filename: string;
	size: number;
	contentType: string;
}

export interface PresignedUploadResult {
	uploadUrl: string;
	key: string;
	publicUrl: string;
}

/**
 * Cloudflare R2 Storage Client
 * Uses S3-compatible API
 */
export class R2Client {
	private client: S3Client;
	private bucketName: string;
	private publicUrl: string;

	constructor(config: R2Config) {
		// Support custom endpoint (for regional buckets) or construct default
		const endpoint =
			config.endpoint ?? `https://${config.accountId}.r2.cloudflarestorage.com`;

		this.client = new S3Client({
			region: "auto",
			endpoint,
			credentials: {
				accessKeyId: config.accessKeyId,
				secretAccessKey: config.secretAccessKey,
			},
		});
		this.bucketName = config.bucketName;
		// Use custom domain or construct R2 public URL
		this.publicUrl =
			config.publicUrl ??
			`https://${config.bucketName}.${config.accountId}.r2.cloudflarestorage.com`;
	}

	/**
	 * Upload a file directly to R2
	 */
	async upload(
		file: Buffer | Uint8Array | ReadableStream,
		options: UploadOptions,
	): Promise<UploadResult> {
		const key = generateUploadKey(
			options.tenantId,
			options.filename,
			options.folder,
		);
		const contentType = options.contentType ?? getMimeType(options.filename);

		const params: PutObjectCommandInput = {
			Bucket: this.bucketName,
			Key: key,
			Body: file,
			ContentType: contentType,
			Metadata: {
				...options.metadata,
				tenantId: options.tenantId,
				originalFilename: options.filename,
			},
		};

		await this.client.send(new PutObjectCommand(params));

		// Get file size
		const headResponse = await this.client.send(
			new HeadObjectCommand({
				Bucket: this.bucketName,
				Key: key,
			}),
		);

		return {
			key,
			url: this.getPublicUrl(key),
			filename: options.filename,
			size: headResponse.ContentLength ?? 0,
			contentType,
		};
	}

	/**
	 * Generate a presigned URL for client-side uploads
	 * This allows direct upload to R2 without going through the server
	 */
	async getPresignedUploadUrl(
		options: UploadOptions,
		expiresIn: number = 3600, // 1 hour
	): Promise<PresignedUploadResult> {
		const key = generateUploadKey(
			options.tenantId,
			options.filename,
			options.folder,
		);
		const contentType = options.contentType ?? getMimeType(options.filename);

		const command = new PutObjectCommand({
			Bucket: this.bucketName,
			Key: key,
			ContentType: contentType,
			Metadata: {
				tenantId: options.tenantId,
				originalFilename: options.filename,
			},
		});

		const uploadUrl = await getSignedUrl(this.client, command, { expiresIn });

		return {
			uploadUrl,
			key,
			publicUrl: this.getPublicUrl(key),
		};
	}

	/**
	 * Get a presigned URL for downloading/viewing a private file
	 */
	async getPresignedDownloadUrl(
		key: string,
		expiresIn: number = 3600,
	): Promise<string> {
		const command = new GetObjectCommand({
			Bucket: this.bucketName,
			Key: key,
		});

		return getSignedUrl(this.client, command, { expiresIn });
	}

	/**
	 * Delete a file from R2
	 */
	async delete(key: string): Promise<void> {
		await this.client.send(
			new DeleteObjectCommand({
				Bucket: this.bucketName,
				Key: key,
			}),
		);
	}

	/**
	 * Delete multiple files from R2
	 */
	async deleteMany(keys: string[]): Promise<void> {
		await Promise.all(keys.map((key) => this.delete(key)));
	}

	/**
	 * Check if a file exists
	 */
	async exists(key: string): Promise<boolean> {
		try {
			await this.client.send(
				new HeadObjectCommand({
					Bucket: this.bucketName,
					Key: key,
				}),
			);
			return true;
		} catch {
			return false;
		}
	}

	/**
	 * List files in a folder
	 */
	async listFiles(
		tenantId: string,
		folder?: string | null,
		maxKeys: number = 1000,
	) {
		const prefix = folder ? `${tenantId}/${folder}/` : `${tenantId}/`;

		const response = await this.client.send(
			new ListObjectsV2Command({
				Bucket: this.bucketName,
				Prefix: prefix,
				MaxKeys: maxKeys,
			}),
		);

		return (
			response.Contents?.filter((item) => item.Key).map((item) => ({
				key: item.Key as string,
				size: item.Size ?? 0,
				lastModified: item.LastModified,
				url: this.getPublicUrl(item.Key as string),
			})) ?? []
		);
	}

	/**
	 * Get public URL for a file
	 */
	getPublicUrl(key: string): string {
		return `${this.publicUrl}/${key}`;
	}

	/**
	 * Extract key from public URL
	 */
	getKeyFromUrl(url: string): string | null {
		if (!url.startsWith(this.publicUrl)) return null;
		return url.slice(this.publicUrl.length + 1);
	}
}

/**
 * Create R2 client from environment variables
 */
export function createR2Client(config: R2Config): R2Client {
	return new R2Client(config);
}
