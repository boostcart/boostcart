import { db } from "@/server/db";

// ECB provides daily exchange rates for free
// Base currency is EUR
const ECB_API_URL = "https://api.frankfurter.app/latest";

// All supported currencies with their metadata
export const SUPPORTED_CURRENCIES = [
	// Major currencies
	{ code: "EUR", symbol: "€", name: "Euro", decimals: 2, symbolFirst: true },
	{
		code: "USD",
		symbol: "$",
		name: "US Dollar",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "GBP",
		symbol: "£",
		name: "British Pound",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "CAD",
		symbol: "CA$",
		name: "Canadian Dollar",
		decimals: 2,
		symbolFirst: true,
	},
	// European currencies (non-Euro)
	{
		code: "CHF",
		symbol: "CHF",
		name: "Swiss Franc",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "SEK",
		symbol: "kr",
		name: "Swedish Krona",
		decimals: 2,
		symbolFirst: false,
	},
	{
		code: "NOK",
		symbol: "kr",
		name: "Norwegian Krone",
		decimals: 2,
		symbolFirst: false,
	},
	{
		code: "DKK",
		symbol: "kr",
		name: "Danish Krone",
		decimals: 2,
		symbolFirst: false,
	},
	{
		code: "PLN",
		symbol: "zł",
		name: "Polish Zloty",
		decimals: 2,
		symbolFirst: false,
	},
	{
		code: "CZK",
		symbol: "Kč",
		name: "Czech Koruna",
		decimals: 2,
		symbolFirst: false,
	},
	{
		code: "HUF",
		symbol: "Ft",
		name: "Hungarian Forint",
		decimals: 0,
		symbolFirst: false,
	},
	{
		code: "RON",
		symbol: "lei",
		name: "Romanian Leu",
		decimals: 2,
		symbolFirst: false,
	},
	{
		code: "HRK",
		symbol: "kn",
		name: "Croatian Kuna",
		decimals: 2,
		symbolFirst: false,
	},
	{
		code: "ISK",
		symbol: "kr",
		name: "Icelandic Krona",
		decimals: 0,
		symbolFirst: false,
	},
	// Other popular currencies
	{
		code: "AUD",
		symbol: "A$",
		name: "Australian Dollar",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "NZD",
		symbol: "NZ$",
		name: "New Zealand Dollar",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "JPY",
		symbol: "¥",
		name: "Japanese Yen",
		decimals: 0,
		symbolFirst: true,
	},
	{
		code: "CNY",
		symbol: "¥",
		name: "Chinese Yuan",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "SGD",
		symbol: "S$",
		name: "Singapore Dollar",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "HKD",
		symbol: "HK$",
		name: "Hong Kong Dollar",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "TRY",
		symbol: "₺",
		name: "Turkish Lira",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "RUB",
		symbol: "₽",
		name: "Russian Ruble",
		decimals: 2,
		symbolFirst: false,
	},
	{
		code: "INR",
		symbol: "₹",
		name: "Indian Rupee",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "BRL",
		symbol: "R$",
		name: "Brazilian Real",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "MXN",
		symbol: "MX$",
		name: "Mexican Peso",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "ZAR",
		symbol: "R",
		name: "South African Rand",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "KRW",
		symbol: "₩",
		name: "South Korean Won",
		decimals: 0,
		symbolFirst: true,
	},
	{
		code: "THB",
		symbol: "฿",
		name: "Thai Baht",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "MYR",
		symbol: "RM",
		name: "Malaysian Ringgit",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "PHP",
		symbol: "₱",
		name: "Philippine Peso",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "IDR",
		symbol: "Rp",
		name: "Indonesian Rupiah",
		decimals: 0,
		symbolFirst: true,
	},
	{
		code: "ILS",
		symbol: "₪",
		name: "Israeli Shekel",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "AED",
		symbol: "د.إ",
		name: "UAE Dirham",
		decimals: 2,
		symbolFirst: true,
	},
	{
		code: "SAR",
		symbol: "﷼",
		name: "Saudi Riyal",
		decimals: 2,
		symbolFirst: true,
	},
] as const;

export type CurrencyCode = (typeof SUPPORTED_CURRENCIES)[number]["code"];

interface ECBResponse {
	amount: number;
	base: string;
	date: string;
	rates: Record<string, number>;
}

/**
 * Fetch latest exchange rates from ECB/Frankfurter API
 * Returns rates relative to EUR (base currency)
 */
export async function fetchExchangeRates(): Promise<Record<string, number>> {
	try {
		const codes = SUPPORTED_CURRENCIES.map((c) => c.code).filter(
			(c) => c !== "EUR",
		);
		const response = await fetch(`${ECB_API_URL}?to=${codes.join(",")}`);

		if (!response.ok) {
			throw new Error(`ECB API error: ${response.status}`);
		}

		const data: ECBResponse = await response.json();

		// EUR is always 1 (base currency)
		return {
			EUR: 1,
			...data.rates,
		};
	} catch (error) {
		console.error("Failed to fetch exchange rates:", error);
		// Return cached/default rates if API fails
		return getDefaultRates();
	}
}

/**
 * Default exchange rates (approximate) to use if API is unavailable
 */
function getDefaultRates(): Record<string, number> {
	return {
		EUR: 1,
		USD: 1.08,
		GBP: 0.86,
		CAD: 1.47,
		CHF: 0.94,
		SEK: 11.2,
		NOK: 11.5,
		DKK: 7.46,
		PLN: 4.35,
		CZK: 25.3,
		HUF: 395,
		RON: 4.97,
		HRK: 7.53,
		ISK: 150,
		AUD: 1.65,
		NZD: 1.78,
		JPY: 162,
		CNY: 7.85,
		SGD: 1.45,
		HKD: 8.45,
		TRY: 35.5,
		RUB: 100,
		INR: 90,
		BRL: 5.35,
		MXN: 18.5,
		ZAR: 20,
		KRW: 1420,
		THB: 38,
		MYR: 5.1,
		PHP: 60,
		IDR: 17000,
		ILS: 4.0,
		AED: 4.0,
		SAR: 4.05,
	};
}

/**
 * Update exchange rates in database
 */
export async function updateExchangeRates(): Promise<void> {
	const rates = await fetchExchangeRates();

	// Update each currency in the database
	for (const currency of SUPPORTED_CURRENCIES) {
		const rate = rates[currency.code] ?? 1;

		await db.currency.upsert({
			where: { code: currency.code },
			create: {
				code: currency.code,
				symbol: currency.symbol,
				name: currency.name,
				rate,
				decimals: currency.decimals,
				symbolFirst: currency.symbolFirst,
				isActive: ["EUR", "USD", "GBP", "CAD", "CHF"].includes(currency.code), // Common currencies active by default
			},
			update: {
				rate,
				updatedAt: new Date(),
			},
		});
	}
}

/**
 * Get all currencies from database
 */
export async function getCurrencies(activeOnly = false) {
	const currencies = await db.currency.findMany({
		where: activeOnly ? { isActive: true } : undefined,
		orderBy: [{ code: "asc" }],
	});

	return currencies.map((c) => ({
		...c,
		rate: Number(c.rate),
	}));
}

/**
 * Convert amount from one currency to another
 * All conversions go through EUR as base
 */
export function convertCurrency(
	amount: number,
	fromRate: number,
	toRate: number,
): number {
	// Convert to EUR first, then to target currency
	const amountInEur = amount / fromRate;
	return amountInEur * toRate;
}

/**
 * Format price with currency
 */
export function formatPrice(
	amount: number,
	currency: {
		code: string;
		symbol: string;
		decimals: number;
		symbolFirst: boolean;
	},
): string {
	const formatted = amount.toFixed(currency.decimals);

	if (currency.symbolFirst) {
		return `${currency.symbol}${formatted}`;
	}
	return `${formatted} ${currency.symbol}`;
}

/**
 * Seed currencies if they don't exist
 */
export async function seedCurrencies(): Promise<void> {
	const count = await db.currency.count();

	if (count === 0) {
		console.log("Seeding currencies...");
		await updateExchangeRates();
		console.log("Currencies seeded successfully");
	}
}
