import MessagesTableClient from "./_components/client";
import { forbidden } from "next/navigation";
import { getCurrentUser } from "@/lib/actions";
import { getMessages } from "@/data/message";
import { getTranslations } from "next-intl/server";

export default async function DashboardMessages() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	let messages = await getMessages();

	if (!messages) {
		messages = [];
	}

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center">
				<h1 className="text-2xl font-bold">{t("dashboard.nav.messages")}</h1>
			</div>

			<MessagesTableClient messages={messages} />
		</div>
	)
}