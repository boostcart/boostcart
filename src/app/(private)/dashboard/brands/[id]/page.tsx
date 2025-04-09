import { getBrandById } from "@/data/brand";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import EditBrandClient from "./_components/client";

export default async function EditBrandPage({
	params,
}: Readonly<{
	params: Promise<{ id: string }>;
}>) {
	const t = await getTranslations();
	const { id } = await params;

	if (!id) {
		toast.error(t("dashboard.errors.brand_not_found"));
		redirect("/dashboard/brands");
	}

	const brand = await getBrandById(id);

	if (!brand) {
		toast.error(t("dashboard.errors.brand_not_found"));
		redirect("/dashboard/brands");
	}

	return <EditBrandClient brand={brand} />;
}
