"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"

export const Navigation = () => {
	const pathname = usePathname();

	const pages = [
		{
			name: "Personal information",
			href: "/account",
			active: pathname === "/account",
		},
		{
			name: "Shipping information",
			href: "/account/shipping",
			active: pathname === "/account/shipping",
		},
		{
			name: "Orders",
			href: "/account/orders",
			active: pathname === "/account/orders",
		},
	];

	return (
		<div className="flex flex-col w-full space-y-1">
			{pages.map((page) => (
				<Link
					key={page.name}
					href={page.href}
					className={cn(
						"font-medium text-base transition-colors py-1",
						page.active ? "text-primary" : "text-muted-foreground hover:text-primary",
					)}
				>
					{page.name}
				</Link>
			))}
		</div>
	)
}