import { forbidden, redirect } from "next/navigation";
import { userHasStore } from "@/server/api/private/tenant";
import { auth } from "@/server/auth";

export default async function AdminLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const session = await auth();

	if (!session?.user) {
		redirect("/signin");
	}

	// Check if user has a store, redirect to onboarding if not
	const hasStore = await userHasStore();
	if (!hasStore) {
		redirect("/onboarding");
	}

	// User has a store - they can access admin
	// More granular permissions (OWNER, ADMIN, MANAGER, etc.) are handled per-route
	return <>{children}</>;
}
