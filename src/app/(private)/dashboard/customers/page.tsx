import NewUser from "./_components/new-user";
import UsersTableClient from "./_components/client";
import { forbidden } from "next/navigation";
import { getCurrentUser } from "@/lib/actions";
import { getTranslations } from "next-intl/server";
import { getUsers } from "@/data/user";

export default async function DashboardCustomers() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	const users = await getUsers() || [];

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center">
				<h1 className="text-2xl font-bold">{t("dashboard.nav.customers")}</h1>

				<NewUser />
			</div>

			<UsersTableClient users={users} currentUser={currentUser} />
		</div>
	)
}