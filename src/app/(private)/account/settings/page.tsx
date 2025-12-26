import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/server/api/shared";
import { db } from "@/server/db";
import { LinkedAccounts } from "./_components/linked-accounts";
import { SetPassword } from "./_components/set-password";
import { UpdatePassword } from "./_components/update-password";
import { UpdatePersonalInfo } from "./_components/update-personal-info";

export default async function AccountSettingsPage() {
	const user = await getCurrentUser();

	if (!user) {
		redirect("/signin?silent=not_logged_in");
	}

	// Fetch linked OAuth accounts for this user
	const accounts = await db.account.findMany({
		where: { userId: user.id },
		orderBy: { providerId: "asc" },
		select: { id: true, providerId: true, accountId: true },
	});

	// Check if user has a credential account with password (better-auth stores passwords here)
	const credentialAccount = await db.account.findFirst({
		where: {
			userId: user.id,
			providerId: "credential",
		},
		select: { password: true },
	});

	const hasPassword = !!credentialAccount?.password;

	// Derive configured OAuth providers for display.
	// We know Google is present; include it only if env has client ID/secret.
	const availableProviders: { id: string; name: string }[] = [];
	if (process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET) {
		availableProviders.push({ id: "google", name: "Google" });
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

			<UpdatePersonalInfo user={user} />

			{hasPassword ? <UpdatePassword /> : <SetPassword />}

			<LinkedAccounts
				accounts={accounts}
				hasPassword={hasPassword}
				availableProviders={availableProviders}
			/>
		</main>
	);
}
