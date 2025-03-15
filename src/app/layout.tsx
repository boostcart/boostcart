import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import { getLocale } from "next-intl/server";

const font = Inter({ subsets: ["latin-ext", "cyrillic-ext"], display: "auto" });

export const metadata: Metadata = {
  title: "BoostCart",
  description: "Supercharge your online presence with BoostCart, the solution for selling online",
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${font.className} antialiased scheme-light`}>
        <NextTopLoader color="#f03d7e" />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
