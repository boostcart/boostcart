"use client";

import { createContext, useContext, useMemo } from "react";
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

	// Return HSL values without the 'hsl()' wrapper for CSS variables
	return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

export function ThemeProvider({ children, themeConfig }: ThemeProviderProps) {
	// Generate CSS custom properties from theme config
	const cssVariables = useMemo(() => {
		const vars: Record<string, string> = {};

		// Colors
		if (themeConfig.primaryColor) {
			vars["--primary"] = hexToHsl(themeConfig.primaryColor);
		}
		if (themeConfig.secondaryColor) {
			vars["--secondary"] = hexToHsl(themeConfig.secondaryColor);
		}
		if (themeConfig.accentColor) {
			vars["--accent"] = hexToHsl(themeConfig.accentColor);
		}
		if (themeConfig.backgroundColor) {
			vars["--background"] = hexToHsl(themeConfig.backgroundColor);
		}
		if (themeConfig.foregroundColor) {
			vars["--foreground"] = hexToHsl(themeConfig.foregroundColor);
		}
		if (themeConfig.mutedColor) {
			vars["--muted"] = hexToHsl(themeConfig.mutedColor);
		}
		if (themeConfig.borderColor) {
			vars["--border"] = hexToHsl(themeConfig.borderColor);
		}

		// Typography
		if (themeConfig.fontFamily) {
			vars["--font-sans"] = themeConfig.fontFamily;
		}
		if (themeConfig.headingFontFamily) {
			vars["--font-heading"] = themeConfig.headingFontFamily;
		}

		return vars;
	}, [themeConfig]);

	const style = useMemo(() => {
		if (Object.keys(cssVariables).length === 0) {
			return undefined;
		}
		return cssVariables as React.CSSProperties;
	}, [cssVariables]);

	return (
		<ThemeContext.Provider value={{ theme: themeConfig }}>
			<div style={style} className="contents">
				{children}
			</div>
		</ThemeContext.Provider>
	);
}
