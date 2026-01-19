"use client";

import { ArrowLeft, Coins, Loader2, RefreshCw, Star } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	disableTenantCurrency,
	enableTenantCurrency,
	getAllCurrencies,
	getTenantCurrencies,
	refreshExchangeRates,
	setDefaultTenantCurrency,
} from "@/server/api/internal/currencies";

type Currency = Awaited<ReturnType<typeof getAllCurrencies>>[number];
type TenantCurrency = Awaited<ReturnType<typeof getTenantCurrencies>>[number];

export default function CurrenciesSettingsPage() {
	const [isLoading, setIsLoading] = React.useState(true);
	const [isRefreshing, setIsRefreshing] = React.useState(false);
	const [currencies, setCurrencies] = React.useState<Currency[]>([]);
	const [tenantCurrencies, setTenantCurrencies] = React.useState<
		TenantCurrency[]
	>([]);
	const [searchQuery, setSearchQuery] = React.useState("");

	// Map of currencyId -> isEnabled for tenant
	const enabledCurrencyIds = React.useMemo(
		() => new Set(tenantCurrencies.map((tc) => tc.currencyId)),
		[tenantCurrencies],
	);

	// Find default currency
	const defaultCurrency = React.useMemo(
		() => tenantCurrencies.find((tc) => tc.isDefault),
		[tenantCurrencies],
	);

	const fetchData = React.useCallback(async () => {
		try {
			const [allCurrencies, tenantCurs] = await Promise.all([
				getAllCurrencies(),
				getTenantCurrencies(),
			]);
			setCurrencies(allCurrencies);
			setTenantCurrencies(tenantCurs);
		} catch (error) {
			console.error("Failed to fetch currencies:", error);
			toast.error("Failed to load currencies");
		} finally {
			setIsLoading(false);
		}
	}, []);

	React.useEffect(() => {
		fetchData();
	}, [fetchData]);

	const handleRefreshRates = async () => {
		setIsRefreshing(true);
		try {
			const result = await refreshExchangeRates();
			if (result.success) {
				toast.success("Exchange rates updated successfully");
				await fetchData();
			} else {
				toast.error(result.message);
			}
		} catch (error) {
			console.error("Failed to refresh rates:", error);
			toast.error("Failed to refresh exchange rates");
		} finally {
			setIsRefreshing(false);
		}
	};

	const handleToggleCurrency = async (
		currencyId: string,
		isCurrentlyEnabled: boolean,
	) => {
		try {
			if (isCurrentlyEnabled) {
				await disableTenantCurrency(currencyId);
				toast.success("Currency disabled");
			} else {
				await enableTenantCurrency(currencyId);
				toast.success("Currency enabled");
			}
			await fetchData();
		} catch (error) {
			console.error("Failed to toggle currency:", error);
			toast.error(
				error instanceof Error ? error.message : "Failed to toggle currency",
			);
		}
	};

	const handleSetDefault = async (currencyId: string) => {
		try {
			await setDefaultTenantCurrency(currencyId);
			toast.success("Default currency updated");
			await fetchData();
		} catch (error) {
			console.error("Failed to set default currency:", error);
			toast.error(
				error instanceof Error
					? error.message
					: "Failed to set default currency",
			);
		}
	};

	// Group currencies by type
	const popularCurrencies = React.useMemo(
		() =>
			currencies.filter((c) =>
				["EUR", "USD", "GBP", "CAD", "CHF"].includes(c.code),
			),
		[currencies],
	);

	const europeanCurrencies = React.useMemo(
		() =>
			currencies.filter((c) =>
				["SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "ISK"].includes(
					c.code,
				),
			),
		[currencies],
	);

	const otherCurrencies = React.useMemo(
		() =>
			currencies.filter(
				(c) =>
					!["EUR", "USD", "GBP", "CAD", "CHF"].includes(c.code) &&
					!["SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "ISK"].includes(
						c.code,
					),
			),
		[currencies],
	);

	// Filter currencies based on search
	const filterCurrencies = React.useCallback(
		(currencyList: Currency[]) => {
			if (!searchQuery) return currencyList;
			const query = searchQuery.toLowerCase();
			return currencyList.filter(
				(c) =>
					c.code.toLowerCase().includes(query) ||
					c.name.toLowerCase().includes(query),
			);
		},
		[searchQuery],
	);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-100">
				<Loader size="lg" />
			</div>
		);
	}

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center gap-4">
				<Link
					href="/admin/settings"
					className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to Settings
				</Link>
			</div>

			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Currencies</h1>
					<p className="text-muted-foreground mt-1">
						Manage currencies and exchange rates for your store
					</p>
				</div>
				<Button
					type="button"
					variant="outline"
					onClick={handleRefreshRates}
					disabled={isRefreshing}
				>
					{isRefreshing ? (
						<Loader2 className="h-4 w-4 animate-spin" />
					) : (
						<RefreshCw className="h-4 w-4" />
					)}
					Refresh Rates
				</Button>
			</div>

			{/* Info Card */}
			<Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
				<div className="flex gap-3">
					<Coins className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
					<div className="text-sm">
						<p className="font-medium text-blue-900 dark:text-blue-100">
							About Multi-Currency Pricing
						</p>
						<p className="text-blue-700 dark:text-blue-300 mt-1">
							Exchange rates are updated daily from the European Central Bank
							(ECB). EUR is the base currency. Prices in other currencies are
							automatically calculated unless you set a custom price per
							product.
						</p>
					</div>
				</div>
			</Card>

			{/* Enabled Currencies Summary */}
			<Card className="p-6">
				<div className="flex items-center justify-between mb-4">
					<div>
						<h2 className="text-lg font-semibold">Enabled Currencies</h2>
						<p className="text-sm text-muted-foreground">
							{tenantCurrencies.length} currencies enabled for your store
						</p>
					</div>
				</div>

				{tenantCurrencies.length === 0 ? (
					<p className="text-sm text-muted-foreground py-4 text-center">
						No currencies enabled. Enable at least one currency below.
					</p>
				) : (
					<div className="flex flex-wrap gap-2">
						{tenantCurrencies.map((tc) => (
							<Badge
								key={tc.id}
								variant={tc.isDefault ? "default" : "secondary"}
								className="py-1.5 px-3"
							>
								{tc.currency.symbol} {tc.currency.code}
								{tc.isDefault && (
									<Star className="h-3 w-3 ml-1.5 fill-current" />
								)}
							</Badge>
						))}
					</div>
				)}
			</Card>

			{/* Search */}
			<div>
				<Label htmlFor="search-currency">Search Currencies</Label>
				<Input
					id="search-currency"
					placeholder="Search by code or name..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="max-w-sm mt-2"
				/>
			</div>

			{/* Popular Currencies */}
			<Card className="p-6">
				<div className="mb-4">
					<h2 className="text-lg font-semibold">Popular Currencies</h2>
					<p className="text-sm text-muted-foreground">
						Most commonly used currencies worldwide
					</p>
				</div>
				<div className="space-y-2">
					{filterCurrencies(popularCurrencies).map((currency) => (
						<CurrencyRow
							key={currency.id}
							currency={currency}
							isEnabled={enabledCurrencyIds.has(currency.id)}
							isDefault={defaultCurrency?.currencyId === currency.id}
							onToggle={() =>
								handleToggleCurrency(
									currency.id,
									enabledCurrencyIds.has(currency.id),
								)
							}
							onSetDefault={() => handleSetDefault(currency.id)}
						/>
					))}
				</div>
			</Card>

			{/* European Currencies */}
			<Card className="p-6">
				<div className="mb-4">
					<h2 className="text-lg font-semibold">European Currencies</h2>
					<p className="text-sm text-muted-foreground">
						Non-Euro European currencies
					</p>
				</div>
				<div className="space-y-2">
					{filterCurrencies(europeanCurrencies).map((currency) => (
						<CurrencyRow
							key={currency.id}
							currency={currency}
							isEnabled={enabledCurrencyIds.has(currency.id)}
							isDefault={defaultCurrency?.currencyId === currency.id}
							onToggle={() =>
								handleToggleCurrency(
									currency.id,
									enabledCurrencyIds.has(currency.id),
								)
							}
							onSetDefault={() => handleSetDefault(currency.id)}
						/>
					))}
				</div>
			</Card>

			{/* Other Currencies */}
			<Card className="p-6">
				<div className="mb-4">
					<h2 className="text-lg font-semibold">Other Currencies</h2>
					<p className="text-sm text-muted-foreground">
						Additional world currencies
					</p>
				</div>
				<div className="space-y-2">
					{filterCurrencies(otherCurrencies).map((currency) => (
						<CurrencyRow
							key={currency.id}
							currency={currency}
							isEnabled={enabledCurrencyIds.has(currency.id)}
							isDefault={defaultCurrency?.currencyId === currency.id}
							onToggle={() =>
								handleToggleCurrency(
									currency.id,
									enabledCurrencyIds.has(currency.id),
								)
							}
							onSetDefault={() => handleSetDefault(currency.id)}
						/>
					))}
				</div>
			</Card>
		</div>
	);
}

// Currency Row Component
interface CurrencyRowProps {
	currency: Currency;
	isEnabled: boolean;
	isDefault: boolean;
	onToggle: () => void;
	onSetDefault: () => void;
}

function CurrencyRow({
	currency,
	isEnabled,
	isDefault,
	onToggle,
	onSetDefault,
}: CurrencyRowProps) {
	return (
		<div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
			<div className="flex items-center gap-4">
				<div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center font-mono text-sm font-semibold">
					{currency.symbol}
				</div>
				<div>
					<div className="flex items-center gap-2">
						<span className="font-medium">{currency.code}</span>
						<span className="text-muted-foreground">—</span>
						<span className="text-sm text-muted-foreground">
							{currency.name}
						</span>
						{isDefault && (
							<Badge variant="default" className="text-xs">
								<Star className="h-3 w-3 mr-1 fill-current" />
								Default
							</Badge>
						)}
					</div>
					<div className="text-xs text-muted-foreground mt-0.5">
						Rate: 1 EUR = {currency.rate.toFixed(4)} {currency.code}
					</div>
				</div>
			</div>

			<div className="flex items-center gap-3">
				{isEnabled && !isDefault && (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									type="button"
									variant="ghost"
									size="sm"
									onClick={onSetDefault}
								>
									<Star className="h-4 w-4" />
								</Button>
							</TooltipTrigger>
							<TooltipContent>Set as default</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				)}
				<Switch
					checked={isEnabled}
					onCheckedChange={onToggle}
					disabled={isDefault}
				/>
			</div>
		</div>
	);
}
