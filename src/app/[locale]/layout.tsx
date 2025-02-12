import { generateStaticParams } from "@/lib/generate-intl-static-params";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// @ts-nocheck
export default async function LocaleLayout(
	props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }>
) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	setRequestLocale(locale);

	const messages = await getMessages();

	generateStaticParams();

	return (
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
}
