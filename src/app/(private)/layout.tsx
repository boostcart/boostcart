import { forbidden, unauthorized } from "next/navigation";

import DashboardSidebar from "@/components/dashboard-sidebar";
import { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserRole } from "@prisma/client";
import { auth } from "@/auth";
import { getMessages } from "@/data/message";

export const metadata: Metadata = {
	title: "Dashboard 🚀 BoostCart",
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
	const session = await auth();

	if (!session) {
		return unauthorized();
	}

	if (session.user.role === UserRole.USER) {
		return forbidden();
	}

	const messageCount = await getMessages().then((messages) => messages?.filter(message => !message.read).length || 0);

	return (
		<div className="flex flex-col flex-1 w-full h-screen overflow-hidden md:flex-row bg-background dark">
			<TooltipProvider>
				<SidebarProvider>
					<DashboardSidebar messageCount={messageCount} orderCount={3} />

					<main className="w-full h-screen px-4 py-3 overflow-y-auto rounded-l-large bg-background">
						{children}
					</main>
				</SidebarProvider>
			</TooltipProvider>
		</div>
	)
}