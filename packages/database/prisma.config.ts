import path from "node:path";
import { defineConfig, env } from "prisma/config";

// Load .env from root if not already set
if (!process.env.DATABASE_URL) {
	const dotenv = await import("dotenv");
	dotenv.config({ path: path.resolve(import.meta.dirname, "../../.env") });
}

export default defineConfig({
	// The main entry for your schema
	schema: "prisma/schema.prisma",

	// Where migrations should be generated
	migrations: {
		path: "prisma/migrations",
	},

	// The database URL for Prisma CLI operations
	datasource: {
		url: env("DATABASE_URL"),
	},
});
