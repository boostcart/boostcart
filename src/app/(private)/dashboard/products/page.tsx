import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions";
import { Product } from "@/types";
import { Shirt } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { forbidden } from "next/navigation";
import ProductsTableClient from "./_components/client";
import { getProducts } from "@/data/product";

export default async function DashboardProducts() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	const products = (await getProducts()) as Product[];

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center">
				<h1 className="text-2xl font-bold">{t("dashboard.nav.products")}</h1>

				<Button asChild>
					<Link
						href="/dashboard/products/create"
						className="w-full sm:w-auto"
					>
						<Shirt />
						{t("dashboard.products.create")}
					</Link>
				</Button>
			</div>

			<ProductsTableClient products={products} />
		</div>
	);
}
