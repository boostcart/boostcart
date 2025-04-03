import CategoriesTableClient from "./_components/client";
import { forbidden } from "next/navigation";
import { getCategories } from "@/data/category";
import { getCurrentUser } from "@/lib/actions";
import { getTranslations } from "next-intl/server";

export default async function DashboardBrands() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	const categories = await getCategories() as any;

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center">
				<h1 className="text-2xl font-bold">{t("dashboard.nav.categories")}</h1>
			</div>

			<CategoriesTableClient categories={categories} />
		</div>
	)
}