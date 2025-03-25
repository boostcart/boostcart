"use client";

import { ChevronRight, Folders, Home, Inbox, Mail, Settings, Store, Tag, Users } from "lucide-react";
import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "./ui/sidebar";

import { CollapsibleTrigger } from "./ui/collapsible";
import LanguageSwitcher from "./language-switcher";
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface DashboardSidebarProps {
	orderCount: number;
	messageCount: number;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ orderCount, messageCount }) => {
	const t = useTranslations();
	const pathname = usePathname();

	const items = [
		{
			title: t("dashboard.nav.home"),
			url: "/dashboard",
			icon: Home
		},
		{
			title: t("dashboard.nav.orders"),
			url: "/dashboard/orders",
			icon: Inbox,
			hasBadge: true,
			badgeContent: orderCount
		},
		{
			title: t("dashboard.nav.messages"),
			url: "/dashboard/messages",
			icon: Mail,
			hasBadge: true,
			badgeContent: messageCount
		},
		{
			title: t("dashboard.nav.inventory"),
			url: "#",
			icon: Tag,
			children: [
				{
					title: t("dashboard.nav.products"),
					url: "/dashboard/products"
				},
				{
					title: t("dashboard.nav.categories"),
					url: "/dashboard/categories"
				},
				{
					title: t("dashboard.nav.brands"),
					url: "/dashboard/brands"
				}
			]
		},
		{
			title: t("dashboard.nav.content"),
			url: "#",
			icon: Folders,
			children: [
				{
					title: t("dashboard.nav.blog"),
					url: "/dashboard/blog"
				},
				{
					title: t("dashboard.nav.pages"),
					url: "/dashboard/pages"
				}
			]
		},
		{
			title: t("dashboard.nav.customers"),
			url: "/dashboard/customers",
			icon: Users
		},
		{
			title: t("dashboard.nav.settings"),
			url: "/dashboard/settings",
			icon: Settings
		}
	];

	return (
		<Sidebar collapsible="none">
			<SidebarHeader>
				<Logo
					variant="logo"
					color="black"
					href="/dashboard"
					width={150}
					height={30}
					className="p-2 hover:opacity-70 transition-opacity"
				/>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<div key={item.title}>
									{item.children ? (
										<Collapsible defaultOpen className="group/collapsible">
											<SidebarMenuItem>
												<CollapsibleTrigger asChild>
													<SidebarMenuButton isActive={item.children.some((child) => pathname == child.url)}>
														<item.icon />
														<span>{item.title}</span>
														<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
													</SidebarMenuButton>
												</CollapsibleTrigger>
												<CollapsibleContent>
													<SidebarMenuSub>
														{item.children.map((child) => (
															<SidebarMenuSubItem key={child.title}>
																<SidebarMenuSubButton asChild isActive={pathname.includes(child.url)}>
																	<Link href={child.url}>
																		{child.title}
																	</Link>
																</SidebarMenuSubButton>
															</SidebarMenuSubItem>
														))}
													</SidebarMenuSub>
												</CollapsibleContent>
											</SidebarMenuItem>
										</Collapsible>
									) : (
										<SidebarMenuItem key={item.title}>
											<SidebarMenuButton asChild isActive={pathname == item.url}>
												<Link href={item.url}>
													<item.icon />
													<span>{item.title}</span>
												</Link>
											</SidebarMenuButton>
											{item.hasBadge && (
												<SidebarMenuBadge>
													{item.badgeContent}
												</SidebarMenuBadge>
											)}
										</SidebarMenuItem>
									)}
								</div>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link href="/">
								<Store />
								<span>{t("dashboard.nav.toStore")}</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<LanguageSwitcher />
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar >
	)
}

export default DashboardSidebar;