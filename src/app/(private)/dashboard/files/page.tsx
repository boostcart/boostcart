import Header from "@/components/ui/header";
import { getCurrentUser } from "@/lib/actions";
import { utapi } from "@/server/uploadthing";
import { getTranslations } from "next-intl/server";
import { forbidden } from "next/navigation";
import FilesTableClient from "./_components/client";

const filesResponse = await utapi.listFiles();
const files = filesResponse.files;

export type UploadedFile = {
	name: string;
	size: number;
	customId: string | null;
	key: string;
	status: "Deletion Pending" | "Failed" | "Uploaded" | "Uploading";
	id: string;
	uploadedAt: number;
};

export default async function DashboardFiles() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	return (
		<div className="flex flex-col space-y-4">
			<Header title={t("dashboard.nav.files")} />

			<FilesTableClient files={[...files] as UploadedFile[]} />
		</div>
	);
}
