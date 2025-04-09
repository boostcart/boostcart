import { Button } from "@/components/ui/button";
import { getCategories } from "@/data/category";
import { getCurrentUser } from "@/lib/actions";
import { Category } from "@/types";
import { LayoutGrid } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { forbidden } from "next/navigation";
import CategoriesTableClient from "./_components/client";

export default async function DashboardBrands() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	const categories = (await getCategories(0, false)) as Category[];

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center">
				<h1 className="text-2xl font-bold">{t("dashboard.nav.categories")}</h1>

				<Button asChild>
					<Link
						href="/dashboard/categories/create"
						className="w-full sm:w-auto"
					>
						<LayoutGrid />
						{t("dashboard.categories.create")}
					</Link>
				</Button>
			</div>

			<CategoriesTableClient categories={categories} />
		</div>
	);
}
