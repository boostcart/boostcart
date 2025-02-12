import DashboardSidebar from "@/components/dashboard-sidebar";
import { forbidden, unauthorized } from "next/navigation";
import { getCurrentUser } from "@/lib/actions";
import { UserRole } from "@prisma/client";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard - BoostCart",
	robots: {
		index: false,
		follow: false
	}
};

export default async function DashboardLayout(
	props: Readonly<{
		children: React.ReactNode;
	}>
) {
	const { children } = props;
	const currentUser = await getCurrentUser();

	// if (!currentUser) {
	// 	return unauthorized();
	// }

	// if (currentUser.role === UserRole.USER) {
	// 	return forbidden();
	// }

	return (
		<div className="flex flex-col flex-1 w-full h-screen overflow-hidden md:flex-row bg-background dark">
			<DashboardSidebar />
			
			<main className="w-full h-screen px-4 py-3 overflow-y-auto rounded-l-large bg-background">
				{children}
			</main>
		</div>
	)
}