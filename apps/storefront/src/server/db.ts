import { getPrismaClient } from "@boostcart/database";
import { env } from "@/env";

export const db = getPrismaClient(
	env.DATABASE_URL,
	process.env.NODE_ENV === "development",
);
