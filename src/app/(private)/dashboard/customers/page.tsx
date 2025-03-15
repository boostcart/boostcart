import UsersTableClient from "./_components/client";
import { getTranslations } from "next-intl/server";
import { getUsers } from "@/data/user";

export default async function DashboardCustomers() {
	const t = await getTranslations();
	let users = await getUsers();

	if (!users) {
		users = [];
	}

	return (
		<div className="flex flex-col space-y-4">
			<h1 className="text-2xl font-bold">{t("dashboard.nav.customers")}</h1>

			<UsersTableClient users={users} />
		</div>
	)
}