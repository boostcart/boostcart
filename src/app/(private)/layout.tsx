import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { forbidden, unauthorized } from "next/navigation";

import DashboardSidebar from "@/components/dashboard-sidebar";
import LanguageSwitcher from "@/components/language-switcher";
import { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import UserMenu from "./dashboard/_components/user-menu-dropdown";
import { UserRole } from "@prisma/client";
import { auth } from "@/auth";
import { getMessages } from "@/data/message";
import { getUserById } from "@/data/user";

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

	if (!session || !session.user || !session.user.id) {
		return unauthorized();
	}

	if (session.user.role === UserRole.USER) {
		return forbidden();
	}

	const user = await getUserById(session.user.id);

	if (!user) {
		return unauthorized();
	}

	const messageCount = await getMessages().then((messages) => messages?.filter(message => !message.read).length || 0);

	return (
		<div className="flex flex-col flex-1 w-full h-screen overflow-hidden md:flex-row bg-background">
			<TooltipProvider>
				<SidebarProvider>
					<DashboardSidebar messageCount={messageCount} orderCount={3} />

					<SidebarInset>
						<div className="flex flex-col space-y-4 px-4 py-3 overflow-y-auto">
							<div className="flex items-center space-x-2 justify-between">
								<SidebarTrigger />

								<div className="flex items-center space-x-2">
									<LanguageSwitcher />
									<UserMenu user={user} />
								</div>
							</div>

							<main>{children}</main>
						</div>
					</SidebarInset>
				</SidebarProvider>
			</TooltipProvider>
		</div>
	)
}