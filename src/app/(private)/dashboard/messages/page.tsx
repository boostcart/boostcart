import MessagesTableClient from "./_components/client";
import NewMessage from "./_components/new-message";
import { forbidden } from "next/navigation";
import { getCurrentUser } from "@/lib/actions";
import { getMessages } from "@/data/message";
import { getTranslations } from "next-intl/server";
import { getUsers } from "@/data/user";

export default async function DashboardMessages() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	const messages = await getMessages();
	const users = await getUsers();

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center">
				<h1 className="text-2xl font-bold">{t("dashboard.nav.messages")}</h1>

				<NewMessage users={users} />
			</div>

			<MessagesTableClient messages={messages} />
		</div>
	)
}