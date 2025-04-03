import Loader from '@/components/loader';
import { getTranslations } from 'next-intl/server';

const Loading = async () => {
	const t = await getTranslations("general");
	return (
		<div className="flex items-center justify-center w-full py-48">
			<div className="flex flex-col items-center mx-auto space-y-4">
				<Loader />

				<span className="text-neutral-700">{t("loading")}</span>
			</div>
		</div>
	);
}

export default Loading;