/**
 * Flat folder structure for organizing media files.
 * Files are stored with paths like: /{tenantId}/{folder}/{filename}
 */
export const FOLDERS = {
  ROOT: null,
  PRODUCTS: "products",
  BLOG: "blog",
  PAGES: "pages",
  MARKETING: "marketing",
  AVATARS: "avatars",
  OTHER: "other",
} as const;

export type FolderType = (typeof FOLDERS)[keyof typeof FOLDERS];

/**
 * Folder metadata for UI display
 */
export const FOLDER_META: Record<
  Exclude<FolderType, null>,
  { label: string; description: string }
> = {
  products: {
    label: "Products",
    description: "Product images and galleries",
  },
  blog: {
    label: "Blog",
    description: "Blog post images and media",
  },
  pages: {
    label: "Pages",
    description: "Static page images",
  },
  marketing: {
    label: "Marketing",
    description: "Banners, promotional images",
  },
  avatars: {
    label: "Avatars",
    description: "User and customer avatars",
  },
  other: {
    label: "Other",
    description: "Miscellaneous files",
  },
};

/**
 * Get folder label for display
 */
export function getFolderLabel(folder: FolderType): string {
  if (folder === null) return "All Files";
  return FOLDER_META[folder]?.label ?? folder;
}

/**
 * Validate folder name
 */
export function isValidFolder(folder: string | null): folder is FolderType {
  if (folder === null) return true;
  return Object.values(FOLDERS).includes(folder as FolderType);
}
