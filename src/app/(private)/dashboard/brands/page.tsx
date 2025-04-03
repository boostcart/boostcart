import BrandsTableClient from "./_components/client";
import NewBrand from "./_components/new-brand";
import { forbidden } from "next/navigation";
import { getBrands } from "@/data/brand";
import { getCurrentUser } from "@/lib/actions";
import { getTranslations } from "next-intl/server";

export default async function DashboardBrands() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	const brands = await getBrands();

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center">
				<h1 className="text-2xl font-bold">{t("dashboard.nav.brands")}</h1>

				<NewBrand />
			</div>

			<BrandsTableClient brands={brands} />
		</div>
	)
}