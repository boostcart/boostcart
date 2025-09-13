import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
	title: "BoostCart",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={cn("text-base antialiased", font.variable)}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider>
					<SessionProvider>
						<Toaster richColors />
						{children}
					</SessionProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
