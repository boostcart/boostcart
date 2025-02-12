import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

const font = Inter({ subsets: ["latin-ext", "cyrillic-ext"], display: "auto" });

export const metadata: Metadata = {
  title: "BoostCart",
  description: "Supercharge your online presence with BoostCart, the solution for selling online",
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }>
) {
  const params = await props.params;
  const { locale } = params;
  const { children } = props;

  return (
    <html lang={locale}>
      <body className={`${font.className} antialiased`}>
        <NextTopLoader color="#f03d7e" />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
