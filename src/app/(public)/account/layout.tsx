import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";
import { auth, signOut } from "@/auth";
import { getUserById } from "@/data/user";
import { LogOutIcon, UserCircleIcon } from "lucide-react";
import Image from "next/image";

export default async function AccountLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const t = await getTranslations();

	const session = await auth();

	if (!session) {
		return redirect("/login");
	}

	const user = await getUserById(session.user.id);

	if (!user) {
		return redirect("/login");
	}

	return (
		<div className="container flex flex-col mx-auto my-8">
			<div className="flex items-center justify-between">
				<div className="flex flex-col">
					<h1 className="text-xl font-bold">👋 Hey, {user.name?.split(' ')[0]}!</h1>
					<p className="text-muted-foreground">Welcome to your BoostCart account!</p>
				</div>

				<form action={async () => {
					"use server";
					await signOut();
				}}>
					<Button
						type="submit"
						size="sm"
						variant="outline"
					>
						<LogOutIcon />

						<span>{t("general.logout")}</span>
					</Button>
				</form>
			</div>

			<Separator className="mt-4 mb-8" />

			<div className="flex flex-col gap-16 lg:flex-row">
				<div className="flex flex-col w-full space-y-8 lg:w-48">
					<Navigation />
				</div>

				<div className="w-full">
					{children}
				</div>
			</div>
		</div>
	);
}