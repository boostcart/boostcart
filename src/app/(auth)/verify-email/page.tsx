import { auth } from "@/auth";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import VerifyEmailClient from "./_components/verify-email-client";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations();

	return {
		title: `${t("auth.verifyEmail.title")} 🚀 ${t("app")}`,
		robots: {
			index: false,
			follow: false,
		},
	};
}

export default async function VerifyEmailPage() {
	const session = await auth();

	if (session) {
		return redirect("/");
	}

	return <VerifyEmailClient />;
}
