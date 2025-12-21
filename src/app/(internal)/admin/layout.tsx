"use client";

import {
	ChartVerticalFilledIcon,
	ChartVerticalIcon,
	ContentFilledIcon,
	ContentIcon,
	DiscountFilledIcon,
	DiscountIcon,
	ExitIcon,
	HomeFilledIcon,
	HomeIcon,
	MenuIcon,
	OrderFilledIcon,
	OrderIcon,
	PersonFilledIcon,
	PersonIcon,
	ProductFilledIcon,
	ProductIcon,
	SearchIcon,
	SettingsFilledIcon,
	SettingsIcon,
	StarFilledIcon,
	StarIcon,
	XIcon,
} from "@shopify/polaris-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { CommandSearch } from "@/components/admin/command-search";
import { NotificationsDropdown } from "@/components/admin/notifications-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { cn } from "@/lib/utils";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const navigation = [
	{ name: `Home`, href: `/admin`, icon: HomeFilledIcon, activeIcon: HomeIcon },
	{
		name: `Orders`,
		href: `/admin/orders`,
		icon: OrderFilledIcon,
		activeIcon: OrderIcon,
		subItems: [{ name: `Test`, href: `/admin/orders/test` }],
	},
	{
		name: `Products`,
		href: `/admin/products`,
		icon: ProductFilledIcon,
		activeIcon: ProductIcon,
		subItems: [
			{ name: `Categories`, href: `/admin/categories` },
			{ name: `Collections`, href: `/admin/collections` },
			{ name: `Gift cards`, href: `/admin/gift-cards` },
			{ name: `Brands`, href: `/admin/brands` },
		],
	},
	{
		name: `Customers`,
		href: `/admin/customers`,
		icon: PersonFilledIcon,
		activeIcon: PersonIcon,
	},
	{
		name: `Discounts`,
		href: `/admin/discounts`,
		icon: DiscountFilledIcon,
		activeIcon: DiscountIcon,
	},
	{
		name: `Content`,
		href: `/admin/pages`,
		icon: ContentFilledIcon,
		activeIcon: ContentIcon,
		subItems: [
			{ name: `Files`, href: `/admin/content/files` },
			{ name: `Blog posts`, href: `/admin/content/blog` },
		],
	},
	{
		name: `Reviews`,
		href: `/admin/reviews`,
		icon: StarFilledIcon,
		activeIcon: StarIcon,
	},
	{
		name: `Analytics`,
		href: `/admin/analytics`,
		icon: ChartVerticalFilledIcon,
		activeIcon: ChartVerticalIcon,
	},
];

export default function AdminLayout({
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
		<div className="flex h-screen flex-col bg-[#1a1a1a]">
			{/* Top navigation - Shopify style */}
			<header className="h-14 bg-[#1a1a1a] shrink-0 z-50">
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
						href="/admin"
						className="flex items-center gap-2 font-semibold text-[15px] text-white"
					>
						<Image
							src={"/icon.png"}
							alt="BoostCart Icon"
							width={100}
							height={100}
							className="size-9 lg:hidden"
						/>
						<Image
							src={"/logo-white.png"}
							alt="BoostCart Logo"
							width={200}
							height={30}
							className="h-9 w-auto hidden lg:inline"
						/>
					</Link>{" "}
					<div className="flex-1" />
					{/* Search */}
					<Button
						type="button"
						variant="ghost"
						className="relative w-full max-w-[600px] justify-start text-[#8a8d91] [&_svg]:fill-[#8a8d91] hover:text-white hover:[&_svg]:fill-white bg-[#2c2d2e] hover:bg-[#3a3b3c] border-0 rounded-xl px-2 transition-all h-9"
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
								<Kbd>{isApple ? `⌘` : `Ctrl`}</Kbd>
								<Kbd>K</Kbd>
							</KbdGroup>
						</div>
					</Button>{" "}
					<div className="flex-1" />
					{/* Right side actions */}
					<div className="flex items-center gap-1 dark">
						<NotificationsDropdown />

						{/* User menu */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									type="button"
									variant="ghost"
									className="gap-2 rounded-xl px-2 h-9 hover:bg-[#2c2d2e] transition"
								>
									<Avatar className="size-7 rounded-lg">
										<AvatarImage
											src={user?.image || ""}
											alt={user?.name || ""}
											className="rounded-lg"
										/>
										<AvatarFallback className="rounded-lg bg-blue-600">
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
								</div>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link href="/account" className="cursor-pointer">
										<PersonIcon className="size-5 shrink-0" />
										<span>Profile</span>
									</Link>
								</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Link href="/account/settings" className="cursor-pointer">
									<SettingsIcon className="size-5 shrink-0" />
									<span>Account Settings</span>
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

			<CommandSearch />

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
						`fixed inset-y-0 left-0 top-14 z-50 w-60 transform bg-[#ebebeb] transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:rounded-tl-xl`,
						sidebarOpen ? `translate-x-0` : `-translate-x-full`,
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
								const isActive = pathname === item.href;
								const shouldKeepOpen =
									isActive ||
									item.subItems?.some((subItem) => subItem.href === pathname);
								return (
									<Fragment key={item.name}>
										{shouldKeepOpen && item.subItems ? (
											<div className="mb-2">
												<Link
													key={item.name}
													href={item.href}
													className={cn(
														`flex items-center gap-2 rounded-lg px-2 py-1 text-[13px] font-medium transition-all`,
														isActive
															? `bg-[#fafafa] text-[#1a1a1a]`
															: `text-[#1a1a1a] hover:bg-[#f1f1f1]`,
													)}
												>
													{shouldKeepOpen && ActiveIcon ? (
														<ActiveIcon className="size-5 shrink-0" />
													) : (
														<Icon className="size-5 shrink-0 fill-[#4a4a4a]" />
													)}
													<span>{item.name}</span>
												</Link>
												{item.subItems.map((subItem) => {
													const isSubItemActive = pathname === subItem.href;
													return (
														<Link
															key={subItem.name}
															href={subItem.href}
															className={cn(
																`flex items-center gap-2 rounded-lg pl-[2.3rem] py-1 text-[13px] font-medium transition-all`,
																isSubItemActive
																	? `bg-[#e0e0e0] text-[#1a1a1a]`
																	: `text-[#4a4a4a] hover:bg-[#f1f1f1]`,
															)}
														>
															<span>{subItem.name}</span>
														</Link>
													);
												})}
											</div>
										) : (
											<Link
												key={item.name}
												href={item.href}
												className={cn(
													`flex items-center gap-2 rounded-lg px-2 py-1 text-[13px] font-medium transition-all`,
													isActive
														? `bg-[#fafafa] text-[#1a1a1a]`
														: `text-[#1a1a1a] hover:bg-[#f1f1f1]`,
												)}
											>
												{isActive && ActiveIcon ? (
													<ActiveIcon className="size-5 shrink-0" />
												) : (
													<Icon className="size-5 shrink-0 fill-[#4a4a4a]" />
												)}
												<span>{item.name}</span>
											</Link>
										)}
									</Fragment>
								);
							})}
						</nav>

						{/* Sidebar footer - Settings at bottom */}
						<div className="px-3 py-2">
							<Link
								href="/admin/settings"
								className={cn(
									`flex items-center gap-2 rounded-lg px-2 py-1 text-[13px] font-medium transition-all mb-1`,
									pathname === "/admin/settings"
										? `bg-[#fafafa] text-[#1a1a1a]`
										: `text-[#1a1a1a] hover:bg-[#f1f1f1]`,
								)}
							>
								{pathname === "/admin/settings" ? (
									<SettingsIcon className="size-5 shrink-0" />
								) : (
									<SettingsFilledIcon className="size-5 shrink-0 fill-[#4a4a4a]" />
								)}
								<span>Settings</span>
							</Link>
						</div>
					</div>
				</aside>

				{/* Main content */}
				<main className="flex-1 overflow-y-auto bg-[#f1f1f1] lg:rounded-tr-xl px-6 py-6">
					{children}
				</main>
			</div>
			{/* <CommandSearch /> */}
		</div>
	);
}
