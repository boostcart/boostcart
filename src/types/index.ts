import { ClientUploadedFileData } from "uploadthing/types";
import { User } from "@prisma/client";

export type Roles = "USER" | "ADMIN" | "SUPER_ADMIN";

export type UploadedFile<T = unknown> = ClientUploadedFileData<T>;

export type SafeUser = Omit<User, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};