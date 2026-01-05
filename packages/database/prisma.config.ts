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

	// Database connection configuration
	// Use DIRECT_URL for CLI operations (migrations, db push) to bypass PgBouncer
	// This is required for Supabase and other pooled connections
	datasource: {
		// For CLI operations like migrations, use direct connection (bypasses pooler)
		url: env("DIRECT_URL") || env("DATABASE_URL"),
		// For Prisma Client at runtime, it will use DATABASE_URL (pooled connection)
		// The directUrl is used by CLI for schema operations
		directUrl: env("DIRECT_URL"),
	},
});
