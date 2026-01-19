/**
 * Currency utilities for the storefront
 * Prices in storefront are displayed with the tenant's default currency
 */

// Currency information type
export interface CurrencyInfo {
	code: string;
	symbol: string;
	decimals: number;
	symbolFirst: boolean;
}

// Default to EUR
export const DEFAULT_CURRENCY: CurrencyInfo = {
	code: "EUR",
	symbol: "€",
	decimals: 2,
	symbolFirst: true,
};

/**
 * Format a price with the given currency info
 */
export function formatPrice(
	amount: number | { toString: () => string },
	currency: CurrencyInfo = DEFAULT_CURRENCY,
): string {
	const numAmount =
		typeof amount === "number" ? amount : Number.parseFloat(amount.toString());

	// Use Intl.NumberFormat for proper locale-aware formatting
	const formatted = new Intl.NumberFormat("en-US", {
		minimumFractionDigits: currency.decimals,
		maximumFractionDigits: currency.decimals,
	}).format(numAmount);

	if (currency.symbolFirst) {
		return `${currency.symbol}${formatted}`;
	}
	return `${formatted} ${currency.symbol}`;
}

/**
 * Format a price with full currency code (e.g., "EUR 10.00")
 */
export function formatPriceWithCode(
	amount: number,
	currency: CurrencyInfo = DEFAULT_CURRENCY,
): string {
	const formatted = new Intl.NumberFormat("en-US", {
		minimumFractionDigits: currency.decimals,
		maximumFractionDigits: currency.decimals,
	}).format(amount);

	return `${currency.code} ${formatted}`;
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(
	price: number,
	compareAtPrice: number,
): number {
	if (compareAtPrice <= 0 || price >= compareAtPrice) return 0;
	return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

/**
 * Format price range (e.g., "€10.00 - €20.00")
 */
export function formatPriceRange(
	minPrice: number,
	maxPrice: number,
	currency: CurrencyInfo = DEFAULT_CURRENCY,
): string {
	if (minPrice === maxPrice) {
		return formatPrice(minPrice, currency);
	}
	return `${formatPrice(minPrice, currency)} - ${formatPrice(maxPrice, currency)}`;
}

/**
 * Parse price string to number
 */
export function parsePrice(priceString: string): number {
	const cleaned = priceString.replace(/[^0-9.,-]/g, "").replace(",", ".");
	return Number.parseFloat(cleaned) || 0;
}

// Currency code to symbol map
const CURRENCY_SYMBOLS: Record<string, string> = {
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

/**
 * Get currency info from code
 */
export function getCurrencyInfo(code: string): CurrencyInfo {
	const symbol = CURRENCY_SYMBOLS[code] || code;
	const decimals = ["JPY", "HUF", "ISK", "KRW"].includes(code) ? 0 : 2;
	const symbolFirst = ![
		"SEK",
		"NOK",
		"DKK",
		"PLN",
		"CZK",
		"HUF",
		"RON",
		"ISK",
	].includes(code);

	return {
		code,
		symbol,
		decimals,
		symbolFirst,
	};
}
