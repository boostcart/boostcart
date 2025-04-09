import { getUserById } from "@/data/user";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import EditCustomerClient from "./_components/client";

export default async function EditCustomerPage({
	params,
}: Readonly<{
	params: Promise<{ id: string }>;
}>) {
	const t = await getTranslations();
	const { id } = await params;

	if (!id) {
		toast.error(t("dashboard.errors.user_not_found"));
		redirect("/dashboard/customers");
	}

	const user = await getUserById(id);

	if (!user) {
		toast.error(t("dashboard.errors.user_not_found"));
		redirect("/dashboard/customers");
	}

	return <EditCustomerClient user={user} />;
}
