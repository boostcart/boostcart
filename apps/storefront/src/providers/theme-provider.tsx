"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import type { ThemeConfig } from "@/server/tenant";

interface ThemeContextValue {
	theme: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context.theme;
}

interface ThemeProviderProps {
	children: React.ReactNode;
	themeConfig: ThemeConfig;
}

// Convert hex to HSL for CSS variables
function hexToHsl(hex: string): string {
	// Remove # if present
	hex = hex.replace(/^#/, "");

	// Parse hex values
	const r = Number.parseInt(hex.substring(0, 2), 16) / 255;
	const g = Number.parseInt(hex.substring(2, 4), 16) / 255;
	const b = Number.parseInt(hex.substring(4, 6), 16) / 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (max !== min) {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r:
				h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
				break;
			case g:
				h = ((b - r) / d + 2) / 6;
				break;
			case b:
				h = ((r - g) / d + 4) / 6;
				break;
		}
	}

	// Return complete hsl() color value for Tailwind v4
	return `hsl(${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`;
}

// Border radius mapping
const borderRadiusMap: Record<string, string> = {
	none: "0px",
	small: "0.25rem",
	medium: "0.5rem",
	large: "0.75rem",
	full: "9999px",
};

// Shadow style mapping
const shadowStyleMap: Record<string, string> = {
	none: "none",
	subtle: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
	medium: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
	dramatic:
		"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
};

// Font size scale mapping
const fontSizeScaleMap: Record<string, { base: string; multiplier: number }> = {
	compact: { base: "0.875rem", multiplier: 0.9 },
	default: { base: "1rem", multiplier: 1 },
	comfortable: { base: "1.0625rem", multiplier: 1.05 },
	large: { base: "1.125rem", multiplier: 1.1 },
};

// Spacing scale mapping
const spacingScaleMap: Record<
	string,
	{ multiplier: number; containerPadding: string }
> = {
	compact: { multiplier: 0.8, containerPadding: "1rem" },
	default: { multiplier: 1, containerPadding: "1.5rem" },
	comfortable: { multiplier: 1.2, containerPadding: "2rem" },
	spacious: { multiplier: 1.5, containerPadding: "2.5rem" },
};

export function ThemeProvider({ children, themeConfig }: ThemeProviderProps) {
	// Generate CSS custom properties from theme config
	const cssVariables = useMemo(() => {
		const vars: Record<string, string> = {};

		// Colors
		if (themeConfig.primaryColor) {
			vars["--primary"] = hexToHsl(themeConfig.primaryColor);
			vars["--primary-foreground"] = hexToHsl("#ffffff"); // Auto-contrast
		}
		if (themeConfig.secondaryColor) {
			vars["--secondary"] = hexToHsl(themeConfig.secondaryColor);
			vars["--secondary-foreground"] = hexToHsl(
				themeConfig.foregroundColor || "#09090b",
			);
		}
		if (themeConfig.accentColor) {
			vars["--accent"] = hexToHsl(themeConfig.accentColor);
			vars["--accent-foreground"] = hexToHsl("#ffffff");
		}
		if (themeConfig.backgroundColor) {
			vars["--background"] = hexToHsl(themeConfig.backgroundColor);
		}
		if (themeConfig.foregroundColor) {
			vars["--foreground"] = hexToHsl(themeConfig.foregroundColor);
		}
		if (themeConfig.mutedColor) {
			vars["--muted"] = hexToHsl(themeConfig.mutedColor);
			vars["--muted-foreground"] = hexToHsl(
				themeConfig.foregroundColor || "#09090b",
			);
		}
		if (themeConfig.borderColor) {
			vars["--border"] = hexToHsl(themeConfig.borderColor);
			vars["--input"] = hexToHsl(themeConfig.borderColor);
		}

		// Card colors (derived from background)
		if (themeConfig.backgroundColor) {
			vars["--card"] = hexToHsl(themeConfig.backgroundColor);
			vars["--card-foreground"] = hexToHsl(
				themeConfig.foregroundColor || "#09090b",
			);
			vars["--popover"] = hexToHsl(themeConfig.backgroundColor);
			vars["--popover-foreground"] = hexToHsl(
				themeConfig.foregroundColor || "#09090b",
			);
		}

		// Ring color (use primary)
		if (themeConfig.primaryColor) {
			vars["--ring"] = hexToHsl(themeConfig.primaryColor);
		}

		// Typography
		if (themeConfig.fontFamily) {
			vars["--font-sans"] = themeConfig.fontFamily;
		}
		if (themeConfig.headingFontFamily) {
			vars["--font-heading"] = themeConfig.headingFontFamily;
		}

		// Border radius
		if (themeConfig.borderRadius) {
			const radius = borderRadiusMap[themeConfig.borderRadius] || "0.5rem";
			vars["--radius"] = radius;
		}

		// Shadows
		if (themeConfig.shadowStyle) {
			vars["--shadow"] = shadowStyleMap[themeConfig.shadowStyle] || "none";
		}

		// Font size scale
		if (themeConfig.fontSizeScale) {
			const scale = fontSizeScaleMap[themeConfig.fontSizeScale] || fontSizeScaleMap.default;
			vars["--font-size-base"] = scale.base;
			vars["--font-size-multiplier"] = String(scale.multiplier);
		}

		// Spacing scale
		if (themeConfig.spacingScale) {
			const scale = spacingScaleMap[themeConfig.spacingScale] || spacingScaleMap.default;
			vars["--spacing-multiplier"] = String(scale.multiplier);
			vars["--container-padding"] = scale.containerPadding;
		}

		return vars;
	}, [themeConfig]);

	// Apply CSS variables to :root (document.documentElement)
	useEffect(() => {
		const root = document.documentElement;
		
		// Apply all CSS variables
		for (const [key, value] of Object.entries(cssVariables)) {
			root.style.setProperty(key, value);
		}

		// Cleanup - remove variables when component unmounts or theme changes
		return () => {
			for (const key of Object.keys(cssVariables)) {
				root.style.removeProperty(key);
			}
		};
	}, [cssVariables]);

	return (
		<ThemeContext.Provider value={{ theme: themeConfig }}>
			{children}
		</ThemeContext.Provider>
	);
}
