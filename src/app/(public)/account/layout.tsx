import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";
import { auth } from "@/auth";
import { getUserById } from "@/data/user";
import { UserCircleIcon } from "lucide-react";
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
				<h1 className="text-xl font-bold">Your BoostCart Account</h1>

				<Button
					size="sm"
					variant="outline"
				>
					{t("general.logout")}
				</Button>
			</div>

			<Separator className="mt-4 mb-8" />

			<div className="flex flex-col gap-16 lg:flex-row">
				<div className="flex flex-col w-full space-y-8 lg:w-48">
					<div className="flex flex-col">
						{user.image ? (
							<Image
								src={user.image}
								alt={user.name}
								width={64}
								height={64}
								className="rounded-full"
							/>
						) : (
							<UserCircleIcon className="size-16 text-muted-foreground" />
						)}
						<p className="text-base font-medium">{user.name}</p>
						<p className="text-sm text-muted-foreground">{user.email}</p>
					</div>

					<Navigation />
				</div>

				<div className="w-full">
					{children}
				</div>
			</div>
		</div>
	);
}