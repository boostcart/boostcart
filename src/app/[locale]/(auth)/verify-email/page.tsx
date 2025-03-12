import { Metadata } from "next";
import VerifyEmailClient from "./_components/verify-email-client";
import { getCurrentUser } from "@/lib/actions";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations();

	return {
		title: `${t('auth.verifyEmail.title')} 🚀 ${t('app')}`,
		robots: {
			index: false,
			follow: false
		}
	}
}

export default async function VerifyEmailPage() {
	const currentUser = await getCurrentUser();

	if (currentUser) {
		return redirect("/");
	}

	return <VerifyEmailClient />;
}