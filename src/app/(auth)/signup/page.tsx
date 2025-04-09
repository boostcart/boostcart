import { auth } from "@/auth";
import AuthProviders from "@/components/auth-providers";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import SignUpForm from "./_components/sign-up-form";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations();

	return {
		title: `${t("auth.signUp.meta.title")} 🚀 ${t("app")}`,
		description: t("auth.signUp.meta.description"),
	};
}

export default async function SignUpPage() {
	const t = await getTranslations();
	const session = await auth();

	if (session) {
		return redirect("/");
	}

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
				<h1 className="text-4xl font-bold">{t("auth.signUp.title")}</h1>
				<h2 className="font-medium text-neutral-500">
					{t("auth.signUp.subtitle")}
				</h2>
			</div>

			<AuthProviders />

			<div className="relative flex flex-col items-center justify-center w-full">
				<span className="h-[2px] w-96 bg-linear-to-r from-transparent via-neutral-300 to-transparent"></span>
				<span className="absolute px-1 text-sm font-semibold uppercase bg-white text-neutral-500">
					{t("general.or")}
				</span>
			</div>

			<SignUpForm />
		</div>
	);
}
