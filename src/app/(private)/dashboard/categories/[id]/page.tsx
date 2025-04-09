import { getCategoryById } from "@/data/category";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import EditCategoryClient from "./_components/client";

export default async function EditCategoryPage({
	params,
}: Readonly<{
	params: Promise<{ id: string }>;
}>) {
	const t = await getTranslations();
	const { id } = await params;

	if (!id) {
		toast.error(t("dashboard.errors.brand_not_found"));
		redirect("/dashboard/categories");
	}

	const category = await getCategoryById(id);

	if (!category) {
		toast.error(t("dashboard.errors.brand_not_found"));
		redirect("/dashboard/categories");
	}

	return <EditCategoryClient category={category} />;
}
