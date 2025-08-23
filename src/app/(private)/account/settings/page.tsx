import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/server/api/shared";
import { UpdatePersonalInfo } from "./_components/update-personal-info";

export default async function AccountSecurityPage() {
	const user = await getCurrentUser();

	if (!user) {
		redirect("/signin?silent=not_logged_in");
	}

	return (
		<main className="flex flex-col w-full p-8 space-y-4">
			<Link href={"/account"} className="text-blue-500">
				Back to Account
			</Link>

			<h1 className="text-xl font-bold">Account Settings</h1>
			<p className="text-muted-foreground">
				Manage your account settings here like name and email.
			</p>

			<Link href={"/account/settings/security"} className="text-blue-500">
				Go to security settings
			</Link>

			<UpdatePersonalInfo user={user} />
		</main>
	);
}
