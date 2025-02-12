"use client";

import { Sidebar, SidebarBody, SidebarLink } from "./custom-sidebar";
import { useTranslations } from "next-intl";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./logo";
import { Boxes, DoorOpen, Home, Inbox, ShoppingBasket, Users } from "lucide-react";

const DashboardSidebar = () => {
	const t = useTranslations();
	const [open, setOpen] = useState<boolean>(false);

	const links = [
		{
			label: t("dashboard.nav.home"),
			href: "/dashboard",
			icon: (
				<Home className="flex-shrink-0 w-6 h-6 text-neutral-700 dark:text-neutral-200" />
			)
		},
		{
			label: t("dashboard.nav.orders"),
			href: "/dashboard/orders",
			icon: (
				<Inbox className="flex-shrink-0 w-6 h-6 text-neutral-700 dark:text-neutral-200" />
			)
		},
		{
			label: t("dashboard.nav.products"),
			href: "/dashboard/products",
			icon: (
				<Boxes className="flex-shrink-0 w-6 h-6 text-neutral-700 dark:text-neutral-200" />
			)
		},
		{
			label: t("dashboard.nav.customers"),
			href: "/dashboard/customers",
			icon: (
				<Users className="flex-shrink-0 w-6 h-6 text-neutral-700 dark:text-neutral-200" />
			)
		}
	];

	return (
		<Sidebar open={open} setOpen={setOpen} animate={true}>
			<SidebarBody className="justify-between gap-10 bg-background">
				<div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
					<div className="w-full">
						<Logo
							width={250}
							height={250}
							href="/dashboard"
							variant="wordmark"
							className="w-48"
						/>
					</div>

					<div className="flex flex-col gap-2 mt-8">
						{links.map((link, idx) => (
							<SidebarLink key={idx} link={link} />
						))}
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<SidebarLink
						link={{
							label: t("dashboard.nav.toStore"),
							href: "/",
							icon: (
								<ShoppingBasket className="flex-shrink-0 w-6 h-6 text-neutral-700 dark:text-neutral-200" />
							)
						}}
					/>

					<button className="flex items-center justify-start gap-2 py-2 group/sidebar" onClick={() => signOut()}>
						<DoorOpen className="flex-shrink-0 w-6 h-6 text-neutral-700 dark:text-neutral-200 group-hover/sidebar:text-destructive-400" />

						<motion.span
							animate={{
								display: open ? "inline-block" : "none",
								opacity: open ? 1 : 0,
							}}

							className="text-neutral-700 dark:text-neutral-200 group-hover/sidebar:text-destructive-400 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
						>
							{t("dashboard.nav.logout")}
						</motion.span>
					</button>
				</div>
			</SidebarBody>
		</Sidebar>
	)
}

export default DashboardSidebar;