"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	// Provide sensible defaults for Tailwind's class-based dark mode
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			{...props}
		>
			{children}
		</NextThemesProvider>
	);
}
