import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { getUsers } from "@/data/user";
import { getCurrentUser } from "@/lib/actions";
import { UserPlus } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { forbidden } from "next/navigation";
import UsersTableClient from "./_components/client";

export default async function DashboardCustomers() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	const users = await getUsers();

	return (
		<div className="flex flex-col space-y-4">
			<Header title={t("dashboard.nav.customers")}>
				<Button asChild>
					<Link href="/dashboard/customers/create">
						<UserPlus />
						{t("dashboard.customers.newUser.button")}
					</Link>
				</Button>
			</Header>

			<UsersTableClient users={users} currentUser={currentUser} />
		</div>
	);
}
