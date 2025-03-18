import { ClientUploadedFileData } from "uploadthing/types";

export type Roles = "USER" | "ADMIN" | "SUPER_ADMIN";

export type UploadedFile<T = unknown> = ClientUploadedFileData<T>;
