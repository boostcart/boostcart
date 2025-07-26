import { getCurrentUser } from "@/lib/actions";
import AccountDetailsChange from "./_components/details-change";
import { redirect } from "next/navigation";
import AccountPasswordChange from "./_components/password-change";

export default async function AccountPage() {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return redirect("/login");
	}

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-1">
				<h2 className="text-2xl font-bold">Personal information</h2>
				<p className="text-sm text-muted-foreground">Manage your personal information, name, email, marketing preferences and etc.</p>
			</div>

			<div className="flex flex-col space-y-8">
				<AccountDetailsChange user={currentUser} />
				{currentUser.password && (
					<AccountPasswordChange user={currentUser} />
				)}
			</div>
		</div>
	);
}
