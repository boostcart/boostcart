import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { ThemeProvider as NextThemesProvider } from "@/components/theme-provider";
import { ThemeProvider as CustomThemeProvider } from "@/providers/theme-provider";
import { getCurrentTenant } from "@/server/tenant";

export async function generateMetadata(): Promise<Metadata> {
	const tenant = await getCurrentTenant();

	return {
		title: {
			default: tenant?.name || "Store",
			template: `%s | ${tenant?.name || "Store"}`,
		},
		description: `Shop at ${tenant?.name || "our store"}`,
		icons: tenant?.faviconUrl ? [{ url: tenant.faviconUrl }] : [],
	};
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const tenant = await getCurrentTenant();

	// If no tenant found, show a placeholder
	if (!tenant) {
		return (
			<html lang="en" suppressHydrationWarning>
				<body className="min-h-screen bg-background font-sans antialiased">
					<div className="flex min-h-screen items-center justify-center">
						<div className="text-center">
							<h1 className="text-2xl font-bold">Store Not Found</h1>
							<p className="mt-2 text-muted-foreground">
								The store you&apos;re looking for doesn&apos;t exist or is no
								longer active.
							</p>
						</div>
					</div>
				</body>
			</html>
		);
	}

	return (
		<html lang={tenant.locale} suppressHydrationWarning>
			<body className="min-h-screen bg-background font-sans antialiased">
				<CustomThemeProvider themeConfig={tenant.themeConfig}>
					<NextThemesProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<Toaster position="top-center" richColors />
					</NextThemesProvider>
				</CustomThemeProvider>
			</body>
		</html>
	);
}
