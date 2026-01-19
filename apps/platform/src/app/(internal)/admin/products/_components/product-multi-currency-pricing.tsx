"use client";

import { ChevronDown, Globe, Loader2 } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { CurrencyPriceInput } from "@/schemas/product";
import {
	bulkUpdateProductPrices,
	getProductPrices,
	getTenantCurrenciesForPricing,
} from "@/server/api/internal/currencies";

interface CurrencyInfo {
	currencyId: string;
	currencyCode: string;
	currencySymbol: string;
	currencyName: string;
	rate: number;
	isDefault: boolean;
	price: number | null;
	compareAtPrice: number | null;
}

interface ProductMultiCurrencyPricingProps {
	/** Product ID - if provided, component works in "edit" mode */
	productId?: string;
	/** Base price in EUR */
	basePrice: number;
	/** Base compare-at price in EUR */
	baseCompareAtPrice?: number | null;
	/** Mode - "create" shows inline without save button, "edit" shows save button */
	mode: "create" | "edit";
	/** Callback for create mode - called when prices change */
	onChange?: (prices: CurrencyPriceInput[]) => void;
}

export function ProductMultiCurrencyPricing({
	productId,
	basePrice,
	baseCompareAtPrice,
	mode,
	onChange,
}: ProductMultiCurrencyPricingProps) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const [isSaving, setIsSaving] = React.useState(false);
	const [currencies, setCurrencies] = React.useState<CurrencyInfo[]>([]);
	const [editedPrices, setEditedPrices] = React.useState<
		Record<string, { price: string; compareAtPrice: string }>
	>({});

	// Fetch currencies/prices when opened
	const fetchData = React.useCallback(async () => {
		setIsLoading(true);
		try {
			if (mode === "edit" && productId) {
				// Edit mode: fetch existing product prices
				const prices = await getProductPrices(productId);
				setCurrencies(prices);

				// Initialize edited prices with current values
				const initial: Record<
					string,
					{ price: string; compareAtPrice: string }
				> = {};
				for (const cp of prices) {
					initial[cp.currencyId] = {
						price: cp.price?.toString() || "",
						compareAtPrice: cp.compareAtPrice?.toString() || "",
					};
				}
				setEditedPrices(initial);
			} else {
				// Create mode: just fetch tenant currencies
				const tenantCurrencies = await getTenantCurrenciesForPricing();
				const currencyInfos: CurrencyInfo[] = tenantCurrencies.map((tc) => ({
					currencyId: tc.currencyId,
					currencyCode: tc.currency.code,
					currencySymbol: tc.currency.symbol,
					currencyName: tc.currency.name,
					rate: Number(tc.currency.rate),
					isDefault: tc.isDefault,
					price: null,
					compareAtPrice: null,
				}));
				setCurrencies(currencyInfos);

				// Initialize empty edited prices
				const initial: Record<
					string,
					{ price: string; compareAtPrice: string }
				> = {};
				for (const c of currencyInfos) {
					initial[c.currencyId] = { price: "", compareAtPrice: "" };
				}
				setEditedPrices(initial);
			}
		} catch (error) {
			console.error("Failed to fetch currency data:", error);
			toast.error("Failed to load currencies");
		} finally {
			setIsLoading(false);
		}
	}, [mode, productId]);

	React.useEffect(() => {
		if (isOpen && currencies.length === 0) {
			fetchData();
		}
	}, [isOpen, currencies.length, fetchData]);

	// Notify parent of price changes in create mode
	React.useEffect(() => {
		if (mode === "create" && onChange) {
			const prices: CurrencyPriceInput[] = currencies.map((c) => {
				const edited = editedPrices[c.currencyId];
				return {
					currencyId: c.currencyId,
					price: edited?.price ? Number.parseFloat(edited.price) : null,
					compareAtPrice: edited?.compareAtPrice
						? Number.parseFloat(edited.compareAtPrice)
						: null,
				};
			});
			onChange(prices);
		}
	}, [mode, onChange, currencies, editedPrices]);

	const handlePriceChange = (
		currencyId: string,
		field: "price" | "compareAtPrice",
		value: string,
	) => {
		setEditedPrices((prev) => {
			const existing = prev[currencyId] ?? { price: "", compareAtPrice: "" };
			return {
				...prev,
				[currencyId]: {
					...existing,
					[field]: value,
				},
			};
		});
	};

	const handleSave = async () => {
		if (mode !== "edit" || !productId) return;

		setIsSaving(true);
		try {
			const prices = currencies.map((c) => {
				const edited = editedPrices[c.currencyId];
				return {
					currencyId: c.currencyId,
					price: edited?.price ? Number.parseFloat(edited.price) : null,
					compareAtPrice: edited?.compareAtPrice
						? Number.parseFloat(edited.compareAtPrice)
						: null,
				};
			});

			await bulkUpdateProductPrices(productId, prices);
			toast.success("Currency prices updated");
			await fetchData();
		} catch (error) {
			console.error("Failed to save prices:", error);
			toast.error("Failed to save currency prices");
		} finally {
			setIsSaving(false);
		}
	};

	const handleAutoCalculate = (currencyId: string) => {
		const currency = currencies.find((c) => c.currencyId === currencyId);
		if (!currency) return;

		const calculatedPrice = Math.round(basePrice * currency.rate * 100) / 100;
		const calculatedCompareAt =
			baseCompareAtPrice && baseCompareAtPrice > 0
				? Math.round(baseCompareAtPrice * currency.rate * 100) / 100
				: undefined;

		setEditedPrices((prev) => ({
			...prev,
			[currencyId]: {
				price: calculatedPrice.toString(),
				compareAtPrice: calculatedCompareAt?.toString() || "",
			},
		}));
	};

	const handleAutoCalculateAll = () => {
		const newPrices: Record<string, { price: string; compareAtPrice: string }> =
			{};
		for (const currency of currencies) {
			const calculatedPrice = Math.round(basePrice * currency.rate * 100) / 100;
			const calculatedCompareAt =
				baseCompareAtPrice && baseCompareAtPrice > 0
					? Math.round(baseCompareAtPrice * currency.rate * 100) / 100
					: undefined;

			newPrices[currency.currencyId] = {
				price: calculatedPrice.toString(),
				compareAtPrice: calculatedCompareAt?.toString() || "",
			};
		}
		setEditedPrices(newPrices);
	};

	const handleClearPrice = (currencyId: string) => {
		setEditedPrices((prev) => ({
			...prev,
			[currencyId]: {
				price: "",
				compareAtPrice: "",
			},
		}));
	};

	const handleClearAll = () => {
		const cleared: Record<string, { price: string; compareAtPrice: string }> =
			{};
		for (const currency of currencies) {
			cleared[currency.currencyId] = { price: "", compareAtPrice: "" };
		}
		setEditedPrices(cleared);
	};

	// Check if there are any changes (for edit mode)
	const hasChanges = React.useMemo(() => {
		if (mode !== "edit") return false;

		for (const c of currencies) {
			const edited = editedPrices[c.currencyId];
			const originalPrice = c.price?.toString() || "";
			const originalCompareAt = c.compareAtPrice?.toString() || "";

			if (edited?.price !== originalPrice) return true;
			if (edited?.compareAtPrice !== originalCompareAt) return true;
		}
		return false;
	}, [mode, currencies, editedPrices]);

	// Check if any prices are set (for create mode indicator)
	const hasPricesSet = React.useMemo(() => {
		return Object.values(editedPrices).some((p) => p.price !== "");
	}, [editedPrices]);

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen}>
			<Card>
				<CollapsibleTrigger asChild>
					<CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Globe className="h-5 w-5 text-muted-foreground" />
								<CardTitle className="text-base">
									Multi-Currency Pricing
								</CardTitle>
								{mode === "create" && hasPricesSet && (
									<Badge variant="secondary" className="text-xs">
										Prices set
									</Badge>
								)}
							</div>
							<ChevronDown
								className={cn(
									"h-5 w-5 text-muted-foreground transition-transform",
									isOpen && "rotate-180",
								)}
							/>
						</div>
					</CardHeader>
				</CollapsibleTrigger>

				<CollapsibleContent>
					<CardContent className="pt-0">
						{isLoading ? (
							<div className="flex items-center justify-center py-8">
								<Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
							</div>
						) : currencies.length === 0 ? (
							<p className="text-sm text-muted-foreground text-center py-4">
								No currencies enabled. Go to Settings → Currencies to enable
								currencies for your store.
							</p>
						) : (
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<p className="text-sm text-muted-foreground">
										{mode === "create"
											? "Set custom prices for different currencies. Leave empty to use auto-calculated prices."
											: "Set custom prices for each currency, or leave empty to use auto-calculated prices."}
									</p>
									<div className="flex gap-2">
										<Button
											type="button"
											variant="outline"
											size="sm"
											onClick={handleAutoCalculateAll}
										>
											Auto-fill All
										</Button>
										<Button
											type="button"
											variant="ghost"
											size="sm"
											onClick={handleClearAll}
										>
											Clear All
										</Button>
									</div>
								</div>

								<div className="space-y-3">
									{currencies.map((c) => {
										const edited = editedPrices[c.currencyId] || {
											price: "",
											compareAtPrice: "",
										};
										const autoPrice =
											Math.round(basePrice * c.rate * 100) / 100;

										return (
											<div
												key={c.currencyId}
												className="flex items-start gap-4 p-3 border rounded-lg"
											>
												<div className="flex items-center gap-2 min-w-28">
													<span className="font-mono text-sm font-semibold">
														{c.currencySymbol}
													</span>
													<span className="text-sm">{c.currencyCode}</span>
													{c.isDefault && (
														<Badge variant="secondary" className="text-xs">
															Default
														</Badge>
													)}
												</div>

												<div className="flex-1 grid grid-cols-2 gap-3">
													<div>
														<Label className="text-xs text-muted-foreground">
															Price
														</Label>
														<Input
															type="number"
															step="0.01"
															min="0"
															placeholder={`Auto: ${autoPrice.toFixed(2)}`}
															value={edited.price}
															onChange={(e) =>
																handlePriceChange(
																	c.currencyId,
																	"price",
																	e.target.value,
																)
															}
															className="mt-1"
														/>
													</div>
													<div>
														<Label className="text-xs text-muted-foreground">
															Compare at
														</Label>
														<Input
															type="number"
															step="0.01"
															min="0"
															placeholder="Optional"
															value={edited.compareAtPrice}
															onChange={(e) =>
																handlePriceChange(
																	c.currencyId,
																	"compareAtPrice",
																	e.target.value,
																)
															}
															className="mt-1"
														/>
													</div>
												</div>

												<div className="flex flex-col gap-1">
													<Button
														type="button"
														variant="ghost"
														size="sm"
														onClick={() => handleAutoCalculate(c.currencyId)}
														className="text-xs"
													>
														Auto
													</Button>
													<Button
														type="button"
														variant="ghost"
														size="sm"
														onClick={() => handleClearPrice(c.currencyId)}
														className="text-xs text-muted-foreground"
													>
														Clear
													</Button>
												</div>
											</div>
										);
									})}
								</div>

								{mode === "edit" && hasChanges && (
									<div className="flex justify-end pt-2">
										<Button
											type="button"
											onClick={handleSave}
											disabled={isSaving}
										>
											{isSaving && (
												<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											)}
											Save Prices
										</Button>
									</div>
								)}
							</div>
						)}
					</CardContent>
				</CollapsibleContent>
			</Card>
		</Collapsible>
	);
}
