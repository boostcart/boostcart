"use client";

import {
	CreditCard,
	FileText,
	Gift,
	Globe,
	Grid3x3,
	Home,
	LayoutGrid,
	Package,
	Percent,
	Search,
	Settings,
	ShoppingCart,
	Star,
	Store,
	Tag,
	TrendingUp,
	Truck,
	Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "../ui/empty";

interface SearchItem {
	id: string;
	title: string;
	description?: string;
	url: string;
	icon: React.ComponentType<{ className?: string }>;
	category: string;
}

const searchItems: SearchItem[] = [
	// Pages
	{
		id: "home",
		title: "Dashboard",
		description: "View admin dashboard overview",
		url: "/admin",
		icon: Home,
		category: "Pages",
	},
	{
		id: "orders",
		title: "Orders",
		description: "Manage customer orders",
		url: "/admin/orders",
		icon: ShoppingCart,
		category: "Pages",
	},
	{
		id: "products",
		title: "Products",
		description: "Manage products and inventory",
		url: "/admin/products",
		icon: Package,
		category: "Pages",
	},
	{
		id: "customers",
		title: "Customers",
		description: "View and manage customers",
		url: "/admin/customers",
		icon: Users,
		category: "Pages",
	},
	{
		id: "discounts",
		title: "Discounts",
		description: "Manage discount codes",
		url: "/admin/discounts",
		icon: Percent,
		category: "Pages",
	},
	{
		id: "promo-codes",
		title: "Promo Codes",
		description: "Manage promotional codes",
		url: "/admin/promo-codes",
		icon: Tag,
		category: "Pages",
	},
	{
		id: "gift-cards",
		title: "Gift Cards",
		description: "Manage gift cards",
		url: "/admin/gift-cards",
		icon: Gift,
		category: "Pages",
	},
	{
		id: "categories",
		title: "Categories",
		description: "Manage product categories",
		url: "/admin/categories",
		icon: LayoutGrid,
		category: "Pages",
	},
	{
		id: "brands",
		title: "Brands",
		description: "Manage product brands",
		url: "/admin/brands",
		icon: Store,
		category: "Pages",
	},
	{
		id: "collections",
		title: "Collections",
		description: "Manage product collections",
		url: "/admin/collections",
		icon: Grid3x3,
		category: "Pages",
	},
	{
		id: "reviews",
		title: "Reviews",
		description: "Manage product reviews",
		url: "/admin/reviews",
		icon: Star,
		category: "Pages",
	},
	{
		id: "pages",
		title: "Pages",
		description: "Manage content pages",
		url: "/admin/pages",
		icon: FileText,
		category: "Pages",
	},
	{
		id: "shipping",
		title: "Shipping",
		description: "Manage shipping methods",
		url: "/admin/shipping",
		icon: Truck,
		category: "Pages",
	},
	{
		id: "payments",
		title: "Payments",
		description: "Manage payment methods",
		url: "/admin/payments",
		icon: CreditCard,
		category: "Pages",
	},
	{
		id: "locales",
		title: "Locales",
		description: "Manage languages and locales",
		url: "/admin/locales",
		icon: Globe,
		category: "Pages",
	},
	{
		id: "analytics",
		title: "Analytics",
		description: "View store analytics",
		url: "/admin/analytics",
		icon: TrendingUp,
		category: "Pages",
	},
	{
		id: "settings",
		title: "Settings",
		description: "Store settings and configuration",
		url: "/admin/settings",
		icon: Settings,
		category: "Pages",
	},
	// Quick Actions
	{
		id: "search-orders",
		title: "Search Orders",
		description: "Find orders by ID or customer",
		url: "/admin/orders",
		icon: Search,
		category: "Quick Actions",
	},
	{
		id: "search-products",
		title: "Search Products",
		description: "Find products by name or SKU",
		url: "/admin/products",
		icon: Search,
		category: "Quick Actions",
	},
	{
		id: "search-customers",
		title: "Search Customers",
		description: "Find customers by name or email",
		url: "/admin/customers",
		icon: Search,
		category: "Quick Actions",
	},
];

export function CommandSearch() {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const handleSelect = (url: string) => {
		setOpen(false);
		router.push(url);
	};

	return (
		<CommandDialog open={open} onOpenChange={setOpen}>
			<CommandInput placeholder="Search orders, products, customers, settings..." />
			<CommandList>
				<CommandEmpty>
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<span className="text-lg">🔍</span>
							</EmptyMedia>
							<EmptyTitle>No results found.</EmptyTitle>
							<EmptyDescription>
								Try adjusting your search to find what you're looking for.
							</EmptyDescription>
						</EmptyHeader>
					</Empty>
				</CommandEmpty>
				<CommandGroup heading="Pages">
					{searchItems
						.filter((item) => item.category === "Pages")
						.map((item) => {
							const Icon = item.icon;
							return (
								<CommandItem
									key={item.id}
									value={`${item.title} ${item.description}`}
									onSelect={() => handleSelect(item.url)}
								>
									<Icon className="h-4 w-4" />
									<div className="flex flex-col">
										<span>{item.title}</span>
										{item.description && (
											<span className="text-xs text-muted-foreground">
												{item.description}
											</span>
										)}
									</div>
								</CommandItem>
							);
						})}
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Quick Actions">
					{searchItems
						.filter((item) => item.category === "Quick Actions")
						.map((item) => {
							const Icon = item.icon;
							return (
								<CommandItem
									key={item.id}
									value={`${item.title} ${item.description}`}
									onSelect={() => handleSelect(item.url)}
								>
									<Icon className="h-4 w-4" />
									<div className="flex flex-col">
										<span>{item.title}</span>
										{item.description && (
											<span className="text-xs text-muted-foreground">
												{item.description}
											</span>
										)}
									</div>
								</CommandItem>
							);
						})}
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	);
}
