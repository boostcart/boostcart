"use client";

import { Loader2, Package, Search, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatPrice } from "@/lib/currency";
import { searchProducts } from "../_actions/search";

interface SearchResult {
	id: string;
	slug: string;
	name: string;
	price: number;
	compareAtPrice: number | null;
	image: string | null;
	category: string | null;
}

interface GlobalSearchProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function GlobalSearch({ open, onOpenChange }: GlobalSearchProps) {
	const router = useRouter();
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<SearchResult[]>([]);
	const [isSearching, startSearching] = useTransition();
	const [hasSearched, setHasSearched] = useState(false);

	// Debounced search
	useEffect(() => {
		if (!query.trim()) {
			setResults([]);
			setHasSearched(false);
			return;
		}

		const timer = setTimeout(() => {
			startSearching(async () => {
				const searchResults = await searchProducts(query, 8);
				setResults(searchResults);
				setHasSearched(true);
			});
		}, 300);

		return () => clearTimeout(timer);
	}, [query]);

	// Reset on close
	useEffect(() => {
		if (!open) {
			setQuery("");
			setResults([]);
			setHasSearched(false);
		}
	}, [open]);

	// Keyboard shortcut to open search
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				onOpenChange(!open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [open, onOpenChange]);

	const handleResultClick = useCallback(
		(slug: string) => {
			onOpenChange(false);
			router.push(`/products/${slug}`);
		},
		[onOpenChange, router],
	);

	const handleViewAll = useCallback(() => {
		onOpenChange(false);
		router.push(`/products?q=${encodeURIComponent(query)}`);
	}, [onOpenChange, router, query]);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-150 p-0 gap-0">
				<DialogHeader className="p-4 pb-0">
					<DialogTitle className="sr-only">Search products</DialogTitle>
					<div className="relative">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="Search products..."
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							className="pl-9 pr-9"
							autoFocus
						/>
						{query && (
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
								onClick={() => setQuery("")}
							>
								<X className="h-4 w-4" />
								<span className="sr-only">Clear</span>
							</Button>
						)}
					</div>
					<div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
						<span>
							Press{" "}
							<kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">
								⌘K
							</kbd>{" "}
							to open
						</span>
						<span>
							Press{" "}
							<kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">
								Esc
							</kbd>{" "}
							to close
						</span>
					</div>
				</DialogHeader>

				<div className="border-t mt-2">
					{isSearching ? (
						<div className="flex items-center justify-center py-12">
							<Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
						</div>
					) : results.length > 0 ? (
						<>
							<ScrollArea className="max-h-100">
								<div className="p-2">
									{results.map((product) => (
										<button
											key={product.id}
											type="button"
											onClick={() => handleResultClick(product.slug)}
											className="w-full flex items-center gap-3 p-2 hover:bg-muted rounded-md transition-colors text-left"
										>
											<div className="w-12 h-12 rounded-md overflow-hidden bg-muted shrink-0">
												{product.image ? (
													<Image
														src={product.image}
														alt={product.name}
														width={48}
														height={48}
														className="w-full h-full object-cover"
													/>
												) : (
													<div className="w-full h-full flex items-center justify-center">
														<Package className="w-5 h-5 text-muted-foreground" />
													</div>
												)}
											</div>
											<div className="flex-1 min-w-0">
												<p className="font-medium truncate">{product.name}</p>
												{product.category && (
													<p className="text-xs text-muted-foreground truncate">
														{product.category}
													</p>
												)}
											</div>
											<div className="text-right">
												{product.compareAtPrice ? (
													<>
														<p className="font-medium text-destructive">
															{formatPrice(product.price)}
														</p>
														<p className="text-xs text-muted-foreground line-through">
															{formatPrice(product.compareAtPrice)}
														</p>
													</>
												) : (
													<p className="font-medium">
														{formatPrice(product.price)}
													</p>
												)}
											</div>
										</button>
									))}
								</div>
							</ScrollArea>
							<div className="p-2 border-t">
								<Button
									variant="ghost"
									className="w-full justify-center"
									onClick={handleViewAll}
								>
									View all results for &quot;{query}&quot;
								</Button>
							</div>
						</>
					) : hasSearched && query.trim() ? (
						<div className="flex flex-col items-center justify-center py-12 text-center">
							<Package className="h-12 w-12 text-muted-foreground mb-4" />
							<p className="text-muted-foreground">
								No products found for &quot;{query}&quot;
							</p>
							<Button variant="link" className="mt-2" onClick={handleViewAll}>
								Browse all products
							</Button>
						</div>
					) : (
						<div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
							<Search className="h-12 w-12 mb-4" />
							<p>Start typing to search products</p>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
