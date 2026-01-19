"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const sortOptions = [
	{ value: "newest", label: "Newest" },
	{ value: "oldest", label: "Oldest" },
	{ value: "price-asc", label: "Price: Low to High" },
	{ value: "price-desc", label: "Price: High to Low" },
	{ value: "name-asc", label: "Name: A to Z" },
];

interface ProductsSortingProps {
	currentSort: string;
}

export function ProductsSorting({ currentSort }: ProductsSortingProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isPending, startTransition] = useTransition();

	const handleSortChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("sort", value);
		params.delete("page"); // Reset to page 1

		startTransition(() => {
			router.push(`/products?${params.toString()}`);
		});
	};

	return (
		<div className={`flex items-center gap-2 ${isPending ? "opacity-60" : ""}`}>
			<span className="text-sm text-muted-foreground whitespace-nowrap">
				Sort by:
			</span>
			<Select value={currentSort} onValueChange={handleSortChange}>
				<SelectTrigger className="w-45">
					<SelectValue placeholder="Sort by" />
				</SelectTrigger>
				<SelectContent>
					{sortOptions.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
