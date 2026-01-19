/**
 * Client-side currency utilities for formatting and displaying prices
 */

// Currency type matching what we get from the API
export interface Currency {
	id: string;
	code: string;
	symbol: string;
	name: string;
	rate: number;
	decimals: number;
	symbolFirst: boolean;
	isActive: boolean;
}

// Default currency (EUR) for fallback
export const DEFAULT_CURRENCY: Currency = {
	id: "default-eur",
	code: "EUR",
	symbol: "€",
	name: "Euro",
	rate: 1,
	decimals: 2,
	symbolFirst: true,
	isActive: true,
};

/**
 * Format a price with the given currency
 */
export function formatPrice(
	amount: number,
	currency: Pick<
		Currency,
		"symbol" | "decimals" | "symbolFirst"
	> = DEFAULT_CURRENCY,
): string {
	const formatted = amount.toFixed(currency.decimals);

	if (currency.symbolFirst) {
		return `${currency.symbol}${formatted}`;
	}
	return `${formatted} ${currency.symbol}`;
}

/**
 * Format a price with currency code (e.g., "EUR 10.00")
 */
export function formatPriceWithCode(
	amount: number,
	currency: Pick<Currency, "code" | "decimals"> = DEFAULT_CURRENCY,
): string {
	const formatted = amount.toFixed(currency.decimals);
	return `${currency.code} ${formatted}`;
}

/**
 * Convert price from one currency to another via EUR base
 */
export function convertPrice(
	amount: number,
	fromRate: number,
	toRate: number,
): number {
	// Convert to EUR first, then to target currency
	const amountInEur = amount / fromRate;
	return Math.round(amountInEur * toRate * 100) / 100;
}

/**
 * Convert price from EUR to target currency
 */
export function convertFromEur(amount: number, targetRate: number): number {
	return Math.round(amount * targetRate * 100) / 100;
}

/**
 * Convert price from any currency to EUR
 */
export function convertToEur(amount: number, sourceRate: number): number {
	return Math.round((amount / sourceRate) * 100) / 100;
}

/**
 * Calculate percentage discount between two prices
 */
export function calculateDiscount(
	price: number,
	compareAtPrice: number,
): number {
	if (compareAtPrice <= 0 || price >= compareAtPrice) return 0;
	return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

/**
 * Format price range (e.g., "$10.00 - $20.00")
 */
export function formatPriceRange(
	minPrice: number,
	maxPrice: number,
	currency: Pick<
		Currency,
		"symbol" | "decimals" | "symbolFirst"
	> = DEFAULT_CURRENCY,
): string {
	if (minPrice === maxPrice) {
		return formatPrice(minPrice, currency);
	}
	return `${formatPrice(minPrice, currency)} - ${formatPrice(maxPrice, currency)}`;
}

/**
 * Parse price string to number (removes currency symbols)
 */
export function parsePrice(priceString: string): number {
	// Remove currency symbols and whitespace, then parse
	const cleaned = priceString.replace(/[^0-9.,-]/g, "").replace(",", ".");
	return Number.parseFloat(cleaned) || 0;
}

/**
 * Get display price with optional compare at price
 */
export function getDisplayPrice(
	price: number,
	compareAtPrice: number | null,
	currency: Currency = DEFAULT_CURRENCY,
): {
	formattedPrice: string;
	formattedCompareAtPrice: string | null;
	discount: number;
	hasDiscount: boolean;
} {
	const formattedPrice = formatPrice(price, currency);
	const formattedCompareAtPrice = compareAtPrice
		? formatPrice(compareAtPrice, currency)
		: null;
	const discount = compareAtPrice
		? calculateDiscount(price, compareAtPrice)
		: 0;

	return {
		formattedPrice,
		formattedCompareAtPrice,
		discount,
		hasDiscount: discount > 0,
	};
}

/**
 * Popular currency codes for quick access
 */
export const POPULAR_CURRENCIES = ["EUR", "USD", "GBP", "CAD", "CHF"] as const;

/**
 * European currency codes (non-Euro)
 */
export const EUROPEAN_CURRENCIES = [
	"CHF",
	"SEK",
	"NOK",
	"DKK",
	"PLN",
	"CZK",
	"HUF",
	"RON",
	"ISK",
] as const;

/**
 * Get currency symbol for display
 */
export function getCurrencySymbol(code: string): string {
	const symbols: Record<string, string> = {
		EUR: "€",
		USD: "$",
		GBP: "£",
		CAD: "CA$",
		CHF: "CHF",
		SEK: "kr",
		NOK: "kr",
		DKK: "kr",
		PLN: "zł",
		CZK: "Kč",
		HUF: "Ft",
		RON: "lei",
		ISK: "kr",
		AUD: "A$",
		NZD: "NZ$",
		JPY: "¥",
		CNY: "¥",
	};
	return symbols[code] || code;
}
