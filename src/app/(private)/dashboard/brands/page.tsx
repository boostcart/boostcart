import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { getBrands } from "@/data/brand";
import { getCurrentUser } from "@/lib/actions";
import { Plus } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { forbidden } from "next/navigation";
import BrandsTableClient from "./_components/client";

export default async function DashboardBrands() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	const brands = await getBrands();

	return (
		<div className="flex flex-col space-y-4">
			<Header title={t("dashboard.nav.brands")}>
				<Button asChild>
					<Link href="/dashboard/brands/create">
						<Plus />
						{t("dashboard.brand.newBrand.button")}
					</Link>
				</Button>
			</Header>

			<BrandsTableClient brands={brands} />
		</div>
	);
}
