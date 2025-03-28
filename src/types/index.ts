import { PostTranslation, User } from "@prisma/client";

import { ClientUploadedFileData } from "uploadthing/types";
import { Post as PrismaPost } from "@prisma/client";

export type Roles = "USER" | "ADMIN" | "SUPER_ADMIN";

export type UploadedFile<T = unknown> = ClientUploadedFileData<T>;

export type Post = PrismaPost & {
  translations: PostTranslation[];
  user: User;
};
