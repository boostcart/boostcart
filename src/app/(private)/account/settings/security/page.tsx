import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/server/api/shared";
import { SetPassword } from "./_components/set-password";
import { UpdatePassword } from "./_components/update-password";

export default async function AccountSecurityPage() {
	const user = await getCurrentUser();

	if (!user) {
		redirect("/signin?silent=not_logged_in");
	}

	return (
		<main className="flex flex-col w-full p-8 space-y-4">
			<Link href={"/account/settings"} className="text-blue-500">
				Back to Account Settings
			</Link>

			<h1 className="text-xl font-bold">Account Security Settings</h1>
			<p className="text-muted-foreground">
				Manage your account security settings here.
			</p>

			{user.password ? <UpdatePassword /> : <SetPassword />}
		</main>
	);
}
