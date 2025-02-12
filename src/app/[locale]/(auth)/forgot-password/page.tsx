import ForgotPasswordForm from "./_components/forgot-password-form";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getCurrentUser } from "@/lib/actions";
import { getTranslations } from "next-intl/server"
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations();

	return {
		title: `${t('auth.forgotPassword.meta.title')} 🚀 ${t('app')}`,
		robots: {
			index: false,
			follow: false
		}
	}
}

export default async function ForgotPasswordPage() {
	const currentUser = await getCurrentUser();

	if (currentUser) {
		return redirect("/");
	}

	return (
		<div className="flex flex-col items-center w-2/3 px-4 py-8 mx-auto mt-16 space-y-8 min-w-80 lg:min-w-full lg:w-1/2">
			<Link href="/">
				<Image
					src="/wordmark-black.png"
					alt="BoostCart"
					width={200}
					height={50}
					className="object-contain h-16 transition-opacity cursor-pointer hover:opacity-70"
				/>
			</Link>

			<ForgotPasswordForm />
		</div>
	)
}