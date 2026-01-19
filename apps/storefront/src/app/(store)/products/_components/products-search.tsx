"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProductsSearchProps {
	defaultValue: string;
}

export function ProductsSearch({ defaultValue }: ProductsSearchProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isPending, startTransition] = useTransition();
	const [query, setQuery] = useState(defaultValue);

	const handleSearch = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			const params = new URLSearchParams(searchParams.toString());

			if (query.trim()) {
				params.set("q", query.trim());
			} else {
				params.delete("q");
			}
			params.delete("page"); // Reset to page 1

			startTransition(() => {
				router.push(`/products?${params.toString()}`);
			});
		},
		[router, searchParams, query],
	);

	const clearSearch = useCallback(() => {
		setQuery("");
		const params = new URLSearchParams(searchParams.toString());
		params.delete("q");
		params.delete("page");

		startTransition(() => {
			router.push(`/products?${params.toString()}`);
		});
	}, [router, searchParams]);

	return (
		<form
			onSubmit={handleSearch}
			className={`flex items-center gap-2 w-full md:w-auto ${isPending ? "opacity-60" : ""}`}
		>
			<div className="relative flex-1 md:w-75">
				<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<Input
					type="text"
					placeholder="Search products..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="pl-9 pr-9"
				/>
				{query && (
					<Button
						type="button"
						variant="ghost"
						size="sm"
						className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
						onClick={clearSearch}
					>
						<X className="h-4 w-4" />
						<span className="sr-only">Clear search</span>
					</Button>
				)}
			</div>
			<Button type="submit" variant="secondary">
				Search
			</Button>
		</form>
	);
}
