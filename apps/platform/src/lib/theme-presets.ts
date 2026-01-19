/**
 * Theme Presets for BoostCart Storefronts
 *
 * Each preset provides a complete theme configuration that merchants
 * can use as a starting point for their store customization.
 */

export interface ThemePreset {
	id: string;
	name: string;
	description: string;
	preview: {
		primaryColor: string;
		secondaryColor: string;
		accentColor: string;
	};
	config: ThemeConfig;
}

export interface ThemeConfig {
	// Colors
	primaryColor: string;
	secondaryColor: string;
	accentColor: string;
	backgroundColor: string;
	foregroundColor: string;
	mutedColor: string;
	borderColor: string;
	// Typography
	fontFamily: string;
	headingFontFamily: string;
	fontSizeScale: "compact" | "default" | "comfortable" | "large";
	// Layout
	headerStyle: "default" | "centered" | "minimal";
	footerStyle: "default" | "simple" | "expanded";
	productCardStyle: "default" | "minimal" | "detailed";
	spacingScale: "compact" | "default" | "comfortable" | "spacious";
	// Features
	showBanner: boolean;
	bannerText: string;
	bannerBackgroundColor: string;
	bannerTextColor: string;
	// Border radius
	borderRadius: "none" | "small" | "medium" | "large" | "full";
	// Shadows
	shadowStyle: "none" | "subtle" | "medium" | "dramatic";
}

/**
 * Sofia Theme - Default Bulgarian-inspired theme
 * Clean, professional look with a modern feel
 */
export const sofiaTheme: ThemePreset = {
	id: "sofia",
	name: "София",
	description: "Модерен и чист дизайн, подходящ за повечето магазини",
	preview: {
		primaryColor: "#000000",
		secondaryColor: "#f4f4f5",
		accentColor: "#2563eb",
	},
	config: {
		// Colors - Clean black & white with blue accent
		primaryColor: "#000000",
		secondaryColor: "#f4f4f5",
		accentColor: "#2563eb",
		backgroundColor: "#ffffff",
		foregroundColor: "#09090b",
		mutedColor: "#f4f4f5",
		borderColor: "#e4e4e7",
		// Typography - Modern sans-serif
		fontFamily: "Inter, system-ui, sans-serif",
		headingFontFamily: "Inter, system-ui, sans-serif",
		fontSizeScale: "default",
		// Layout - Standard e-commerce
		headerStyle: "default",
		spacingScale: "default",
		footerStyle: "default",
		productCardStyle: "default",
		// Features
		showBanner: false,
		bannerText: "",
		bannerBackgroundColor: "#000000",
		bannerTextColor: "#ffffff",
		// Border radius - Medium rounded corners
		borderRadius: "medium",
		// Shadows - Subtle
		shadowStyle: "subtle",
	},
};

/**
 * Minimal Theme - Ultra-clean, content-focused design
 * Best for high-end fashion, art, or luxury products
 */
export const minimalTheme: ThemePreset = {
	id: "minimal",
	name: "Минимал",
	description: "Ултра-чист дизайн, перфектен за луксозни продукти",
	preview: {
		primaryColor: "#171717",
		secondaryColor: "#fafafa",
		accentColor: "#171717",
	},
	config: {
		// Colors - Monochromatic palette
		primaryColor: "#171717",
		secondaryColor: "#fafafa",
		accentColor: "#171717",
		backgroundColor: "#ffffff",
		foregroundColor: "#171717",
		mutedColor: "#fafafa",
		borderColor: "#e5e5e5",
		// Typography - Elegant serif for headings
		fontFamily: "Inter, system-ui, sans-serif",
		headingFontFamily: "'Playfair Display', Georgia, serif",
		fontSizeScale: "default",
		// Layout - Minimal, centered
		headerStyle: "centered",
		spacingScale: "comfortable",
		footerStyle: "simple",
		productCardStyle: "minimal",
		// Features
		showBanner: false,
		bannerText: "",
		bannerBackgroundColor: "#171717",
		bannerTextColor: "#ffffff",
		// Border radius - None for sharp edges
		borderRadius: "none",
		// Shadows - None
		shadowStyle: "none",
	},
};

/**
 * Bold Theme - Vibrant, energetic design
 * Best for youth brands, sports, tech products
 */
export const boldTheme: ThemePreset = {
	id: "bold",
	name: "Смел",
	description: "Енергичен и забележим дизайн за младежки брандове",
	preview: {
		primaryColor: "#7c3aed",
		secondaryColor: "#fef3c7",
		accentColor: "#f97316",
	},
	config: {
		// Colors - Vibrant purple with orange accent
		primaryColor: "#7c3aed",
		secondaryColor: "#fef3c7",
		accentColor: "#f97316",
		backgroundColor: "#fffbeb",
		foregroundColor: "#1c1917",
		mutedColor: "#fef3c7",
		borderColor: "#fed7aa",
		// Typography - Bold, playful
		fontFamily: "'Poppins', system-ui, sans-serif",
		headingFontFamily: "'Poppins', system-ui, sans-serif",
		fontSizeScale: "large",
		// Layout - Default with detailed cards
		headerStyle: "default",
		spacingScale: "spacious",
		footerStyle: "expanded",
		productCardStyle: "detailed",
		// Features - Banner enabled
		showBanner: true,
		bannerText: "🔥 Безплатна доставка над 50лв!",
		bannerBackgroundColor: "#7c3aed",
		bannerTextColor: "#ffffff",
		// Border radius - Large for playful feel
		borderRadius: "large",
		// Shadows - Dramatic
		shadowStyle: "dramatic",
	},
};

/**
 * Warm Theme - Cozy, inviting design
 * Best for home goods, food, handmade products
 */
export const warmTheme: ThemePreset = {
	id: "warm",
	name: "Топъл",
	description: "Уютен и приветлив дизайн за домашни продукти",
	preview: {
		primaryColor: "#92400e",
		secondaryColor: "#fef3c7",
		accentColor: "#dc2626",
	},
	config: {
		// Colors - Warm earth tones
		primaryColor: "#92400e",
		secondaryColor: "#fef3c7",
		accentColor: "#dc2626",
		backgroundColor: "#fffbeb",
		foregroundColor: "#451a03",
		mutedColor: "#fef3c7",
		borderColor: "#fde68a",
		// Typography - Friendly rounded
		fontFamily: "'Nunito', system-ui, sans-serif",
		headingFontFamily: "'Nunito', system-ui, sans-serif",
		fontSizeScale: "comfortable",
		// Layout
		headerStyle: "default",
		spacingScale: "comfortable",
		footerStyle: "expanded",
		productCardStyle: "detailed",
		// Features
		showBanner: false,
		bannerText: "",
		bannerBackgroundColor: "#92400e",
		bannerTextColor: "#ffffff",
		// Border radius - Medium
		borderRadius: "medium",
		// Shadows - Medium
		shadowStyle: "medium",
	},
};

/**
 * Dark Theme - Sleek, modern dark mode
 * Best for tech, gaming, premium products
 */
export const darkTheme: ThemePreset = {
	id: "dark",
	name: "Тъмен",
	description: "Елегантен тъмен дизайн за технологични продукти",
	preview: {
		primaryColor: "#22d3ee",
		secondaryColor: "#1e293b",
		accentColor: "#f472b6",
	},
	config: {
		// Colors - Dark with cyan accent
		primaryColor: "#22d3ee",
		secondaryColor: "#1e293b",
		accentColor: "#f472b6",
		backgroundColor: "#0f172a",
		foregroundColor: "#f8fafc",
		mutedColor: "#1e293b",
		borderColor: "#334155",
		// Typography - Modern monospace-inspired
		fontFamily: "'JetBrains Mono', monospace",
		headingFontFamily: "'Space Grotesk', system-ui, sans-serif",
		fontSizeScale: "compact",
		// Layout - Minimal header
		headerStyle: "minimal",
		spacingScale: "compact",
		footerStyle: "simple",
		productCardStyle: "default",
		// Features
		showBanner: false,
		bannerText: "",
		bannerBackgroundColor: "#22d3ee",
		bannerTextColor: "#0f172a",
		// Border radius - Small
		borderRadius: "small",
		// Shadows - Subtle
		shadowStyle: "subtle",
	},
};

/**
 * All available theme presets
 */
export const themePresets: ThemePreset[] = [
	sofiaTheme,
	minimalTheme,
	boldTheme,
	warmTheme,
	darkTheme,
];

/**
 * Get a theme preset by ID
 */
export function getThemePreset(id: string): ThemePreset | undefined {
	return themePresets.find((preset) => preset.id === id);
}

/**
 * Get the default theme preset
 */
export function getDefaultTheme(): ThemePreset {
	return sofiaTheme;
}

/**
 * Border radius values mapping
 */
export const borderRadiusValues: Record<ThemeConfig["borderRadius"], string> = {
	none: "0px",
	small: "0.25rem",
	medium: "0.5rem",
	large: "0.75rem",
	full: "9999px",
};

/**
 * Shadow style values mapping
 */
export const shadowStyleValues: Record<ThemeConfig["shadowStyle"], string> = {
	none: "none",
	subtle: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
	medium: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
	dramatic:
		"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
};

/**
 * Font size scale values mapping
 * Maps scale names to CSS custom property multipliers
 */
export const fontSizeScaleValues: Record<
	ThemeConfig["fontSizeScale"],
	{ base: string; scale: number }
> = {
	compact: { base: "0.875rem", scale: 0.9 },
	default: { base: "1rem", scale: 1 },
	comfortable: { base: "1.0625rem", scale: 1.05 },
	large: { base: "1.125rem", scale: 1.1 },
};

/**
 * Spacing scale values mapping
 * Maps scale names to CSS custom property multipliers
 */
export const spacingScaleValues: Record<
	ThemeConfig["spacingScale"],
	{ multiplier: number; containerPadding: string }
> = {
	compact: { multiplier: 0.8, containerPadding: "1rem" },
	default: { multiplier: 1, containerPadding: "1.5rem" },
	comfortable: { multiplier: 1.2, containerPadding: "2rem" },
	spacious: { multiplier: 1.5, containerPadding: "2.5rem" },
};

/**
 * Export theme config as JSON
 */
export function exportTheme(config: Partial<ThemeConfig>): string {
	return JSON.stringify(config, null, 2);
}

/**
 * Import theme config from JSON
 */
export function importTheme(json: string): Partial<ThemeConfig> | null {
	try {
		const parsed = JSON.parse(json);
		// Validate it has at least some theme properties
		if (typeof parsed === "object" && parsed !== null) {
			return parsed as Partial<ThemeConfig>;
		}
		return null;
	} catch {
		return null;
	}
}
