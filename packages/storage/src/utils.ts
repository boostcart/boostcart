import { randomUUID } from "crypto";

/**
 * File type categories
 */
export type FileType = "image" | "video" | "document" | "other";

/**
 * Common MIME types mapping
 */
const MIME_TYPES: Record<string, string> = {
  // Images
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
  svg: "image/svg+xml",
  avif: "image/avif",
  // Videos
  mp4: "video/mp4",
  webm: "video/webm",
  mov: "video/quicktime",
  avi: "video/x-msvideo",
  // Documents
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  csv: "text/csv",
  txt: "text/plain",
  json: "application/json",
};

/**
 * Generate a unique upload key for R2
 * Format: {tenantId}/{folder}/{uuid}.{ext}
 */
export function generateUploadKey(
  tenantId: string,
  originalFilename: string,
  folder?: string | null
): string {
  const ext = getFileExtension(originalFilename);
  const uuid = randomUUID();
  const filename = `${uuid}${ext ? `.${ext}` : ""}`;

  if (folder) {
    return `${tenantId}/${folder}/${filename}`;
  }
  return `${tenantId}/${filename}`;
}

/**
 * Get file extension from filename
 */
export function getFileExtension(filename: string): string {
  const parts = filename.split(".");
  if (parts.length < 2) return "";
  return parts.pop()?.toLowerCase() ?? "";
}

/**
 * Get MIME type from filename
 */
export function getMimeType(filename: string): string {
  const ext = getFileExtension(filename);
  return MIME_TYPES[ext] ?? "application/octet-stream";
}

/**
 * Check if file is an image
 */
export function isImageFile(mimeType: string): boolean {
  return mimeType.startsWith("image/");
}

/**
 * Check if file is a video
 */
export function isVideoFile(mimeType: string): boolean {
  return mimeType.startsWith("video/");
}

/**
 * Check if file is a document
 */
export function isDocumentFile(mimeType: string): boolean {
  return (
    mimeType.includes("pdf") ||
    mimeType.includes("document") ||
    mimeType.includes("spreadsheet") ||
    mimeType.includes("text/")
  );
}

/**
 * Get file type category
 */
export function getFileType(mimeType: string): FileType {
  if (isImageFile(mimeType)) return "image";
  if (isVideoFile(mimeType)) return "video";
  if (isDocumentFile(mimeType)) return "document";
  return "other";
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

/**
 * Validate file size
 */
export function validateFileSize(
  bytes: number,
  maxSizeMB: number = 10
): boolean {
  return bytes <= maxSizeMB * 1024 * 1024;
}

/**
 * Allowed file types for upload
 */
export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
  "image/avif",
];

export const ALLOWED_VIDEO_TYPES = [
  "video/mp4",
  "video/webm",
  "video/quicktime",
];

export const ALLOWED_DOCUMENT_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/csv",
  "text/plain",
];

export const ALLOWED_FILE_TYPES = [
  ...ALLOWED_IMAGE_TYPES,
  ...ALLOWED_VIDEO_TYPES,
  ...ALLOWED_DOCUMENT_TYPES,
];

/**
 * Validate file type
 */
export function validateFileType(
  mimeType: string,
  allowedTypes: string[] = ALLOWED_FILE_TYPES
): boolean {
  return allowedTypes.includes(mimeType);
}
