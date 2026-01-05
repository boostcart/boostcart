"use client";

import {
	ChartVerticalFilledIcon,
	ChartVerticalIcon,
	ExitIcon,
	HomeFilledIcon,
	HomeIcon,
	MenuIcon,
	PersonFilledIcon,
	PersonIcon,
	SearchIcon,
	SettingsFilledIcon,
	SettingsIcon,
	StoreFilledIcon,
	StoreIcon,
	XIcon,
} from "@shopify/polaris-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useIsAppleDevice } from "@/hooks/use-is-apple-device";
import { signOut } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const navigation = [
	{
		name: "Dashboard",
		href: "/platform-admin",
		icon: HomeFilledIcon,
		activeIcon: HomeIcon,
	},
	{
		name: "Tenants",
		href: "/platform-admin/tenants",
		icon: StoreFilledIcon,
		activeIcon: StoreIcon,
	},
	{
		name: "Users",
		href: "/platform-admin/users",
		icon: PersonFilledIcon,
		activeIcon: PersonIcon,
	},
	{
		name: "Analytics",
		href: "/platform-admin/analytics",
		icon: ChartVerticalFilledIcon,
		activeIcon: ChartVerticalIcon,
	},
	{
		name: "Settings",
		href: "/platform-admin/settings",
		icon: SettingsFilledIcon,
		activeIcon: SettingsIcon,
	},
];

export default function PlatformAdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const pathname = usePathname();
	const user = useCurrentUser();
	const isApple = useIsAppleDevice();
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		router.push("/signin");
	};

	return (
		<div className="flex h-screen flex-col bg-[#0d1117]">
			{/* Top navigation - Dark theme for platform admin */}
			<header className="h-14 bg-[#0d1117] shrink-0 z-50 border-b border-[#30363d]">
				<div className="flex h-full items-center px-4 gap-3">
					<button
						type="button"
						className="lg:hidden text-white"
						onClick={() => setSidebarOpen(true)}
					>
						<MenuIcon className="size-5 shrink-0" />
					</button>
					{/* Logo */}
					<Link
						href="/platform-admin"
						className="flex items-center gap-2 font-semibold text-[15px] text-white"
					>
						<Image
							src="/icon.png"
							alt="BoostCart Icon"
							width={100}
							height={100}
							className="size-9"
						/>
						<span className="hidden lg:inline">BoostCart</span>
						<Badge
							variant="outline"
							className="border-amber-500 text-amber-500 text-xs"
						>
							Platform Admin
						</Badge>
					</Link>
					<div className="flex-1" />
					{/* Search */}
					<Button
						type="button"
						variant="ghost"
						className="relative w-full max-w-150 justify-start text-[#8b949e] hover:text-white bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded-lg px-2 transition-all h-9"
						onClick={() => {
							const event = new KeyboardEvent("keydown", {
								key: "k",
								metaKey: true,
								ctrlKey: true,
							});
							document.dispatchEvent(event);
						}}
					>
						<SearchIcon className="size-5 shrink-0 transition-all" />
						<span className="hidden sm:inline-flex text-[13px] font-normal">
							Search
						</span>
						<div className="absolute right-2 dark">
							<KbdGroup>
								<Kbd>{isApple ? "⌘" : "Ctrl"}</Kbd>
								<Kbd>K</Kbd>
							</KbdGroup>
						</div>
					</Button>
					<div className="flex-1" />
					{/* Right side actions */}
					<div className="flex items-center gap-1 dark">
						{/* User menu */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									type="button"
									variant="ghost"
									className="gap-2 rounded-lg px-2 h-9 hover:bg-[#21262d] transition"
								>
									<Avatar className="size-7 rounded-lg">
										<AvatarImage
											src={user?.image || ""}
											alt={user?.name || ""}
											className="rounded-lg"
										/>
										<AvatarFallback className="rounded-lg bg-amber-600">
											{user?.name?.charAt(0).toUpperCase() || (
												<PersonIcon className="size-5 shrink-0" />
											)}
										</AvatarFallback>
									</Avatar>
									<span className="hidden md:inline text-[13px] font-medium text-white">
										{user?.name || "Loading"}
									</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56">
								<div className="px-2 py-1.5">
									<p className="text-sm font-medium">
										{user?.name || "Loading..."}
									</p>
									<p className="text-xs text-muted-foreground">
										{user?.email || ""}
									</p>
									<Badge
										variant="outline"
										className="mt-1 text-xs border-amber-500 text-amber-500"
									>
										Platform Admin
									</Badge>
								</div>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link href="/admin" className="cursor-pointer">
										<StoreIcon className="size-5 shrink-0" />
										<span>Store Admin</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<button
										type="button"
										onClick={handleSignOut}
										className="cursor-pointer w-full flex items-center gap-2"
									>
										<ExitIcon className="size-5 shrink-0" />
										<span>Sign Out</span>
									</button>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</header>

			{/* Mobile sidebar backdrop */}
			{sidebarOpen && (
				<button
					type="button"
					className="fixed inset-0 bg-black/50 z-40 lg:hidden"
					onClick={() => setSidebarOpen(false)}
					aria-label="Close sidebar"
				/>
			)}

			{/* Main content area with sidebar and content */}
			<div className="flex-1 flex overflow-hidden">
				{/* Sidebar */}
				<aside
					className={cn(
						"fixed inset-y-0 left-0 top-14 z-50 w-60 transform bg-[#161b22] transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-[#30363d]",
						sidebarOpen ? "translate-x-0" : "-translate-x-full",
					)}
				>
					<div className="flex h-full flex-col">
						{/* Sidebar header */}
						<div className="flex items-center justify-end px-3 py-3 lg:hidden">
							<button
								type="button"
								className="text-white"
								onClick={() => setSidebarOpen(false)}
							>
								<XIcon className="size-5 shrink-0" />
							</button>
						</div>

						{/* Navigation */}
						<nav className="flex-1 overflow-y-auto py-3 px-3">
							{navigation.map((item) => {
								const Icon = item.icon;
								const ActiveIcon = item.activeIcon;
								const isActive =
									item.href === "/platform-admin"
										? pathname === "/platform-admin"
										: pathname.startsWith(item.href);
								return (
									<Link
										key={item.name}
										href={item.href}
										className={cn(
											"flex items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] font-medium transition-all mb-0.5",
											isActive
												? "bg-[#21262d] text-white"
												: "text-[#8b949e] hover:bg-[#21262d] hover:text-white",
										)}
									>
										{isActive && ActiveIcon ? (
											<ActiveIcon className="size-5 shrink-0" />
										) : (
											<Icon className="size-5 shrink-0" />
										)}
										<span>{item.name}</span>
									</Link>
								);
							})}
						</nav>
					</div>
				</aside>

				{/* Main content */}
				<main className="flex-1 overflow-y-auto bg-[#0d1117] px-6 py-6">
					{children}
				</main>
			</div>
		</div>
	);
}
