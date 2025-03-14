import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ResetPasswordForm from "./_components/reset-password-form";
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations();

	return {
		title: `${t('auth.resetPassword.meta.title')} 🚀 ${t('app')}`,
		robots: {
			index: false,
			follow: false
		}
	}
}

export default async function ResetPasswordPage() {
	const t = await getTranslations();

	return (
		<div className="flex flex-col items-center w-2/3 px-4 py-8 mx-auto space-y-8 min-w-80 lg:min-w-full lg:w-1/2">
			<Link href="/">
				<Image
					src="/wordmark-black.png"
					alt="BoostCart"
					width={200}
					height={50}
					className="object-contain h-16 transition-opacity cursor-pointer hover:opacity-70"
				/>
			</Link>

			<div className="flex flex-col items-center w-full space-y-2">
				<h1 className="text-4xl font-bold">{t("auth.resetPassword.title")}</h1>
				<h2 className="font-medium text-neutral-500">{t("auth.resetPassword.subtitle")}</h2>
			</div>

			<ResetPasswordForm />
		</div>
	)
}