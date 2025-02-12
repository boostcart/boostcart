import { User } from "@prisma/client";
import { ClientUploadedFileData } from "uploadthing/types";

export type Roles = "USER" | "ADMIN" | "SUPER_ADMIN";

export type Locale = "en" | "bg";

export type UploadedFile<T = unknown> = ClientUploadedFileData<T>;

export type SafeUser = Omit<User, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};