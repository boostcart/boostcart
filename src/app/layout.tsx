import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";

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
		<html lang="en" className={`${font.variable} scheme-light`}>
			<body>
				<SessionProvider>
					<Toaster richColors />
					{children}
				</SessionProvider>
			</body>
		</html>
	);
}
