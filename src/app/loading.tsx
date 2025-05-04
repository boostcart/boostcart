import Loader from "@/components/loader";
import { useTranslations } from "next-intl";

export default function Loading() {
	const t = useTranslations("general");
	return (
		<div className="flex items-center justify-center w-full py-48">
			<div className="flex flex-col items-center mx-auto space-y-4">
				<Loader />

				<span className="text-neutral-700 text-sm">{t("loading")}</span>
			</div>
		</div>
	);
}
