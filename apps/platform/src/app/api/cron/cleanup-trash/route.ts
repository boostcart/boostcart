import { NextResponse } from "next/server";
import { cleanupTrashedProducts } from "@/server/api/internal/products";

// This route is called by a cron job (e.g., Vercel Cron)
// It should be protected by a secret token in production
export async function GET(request: Request) {
	// Verify cron secret in production
	const authHeader = request.headers.get("authorization");
	const cronSecret = process.env.CRON_SECRET;

	if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	try {
		const result = await cleanupTrashedProducts(30);

		return NextResponse.json({
			success: true,
			message: `Cleaned up ${result.deleted} products older than 30 days`,
			deletedCount: result.deleted,
		});
	} catch (error) {
		console.error("Cron job error:", error);
		return NextResponse.json(
			{ success: false, error: "Failed to cleanup trashed products" },
			{ status: 500 },
		);
	}
}

// Vercel Cron config - run daily at 3 AM UTC
export const dynamic = "force-dynamic";
