import FilesTableClient from "./_components/client";
import { forbidden } from "next/navigation";
import { getCurrentUser } from "@/lib/actions";
import { getTranslations } from "next-intl/server";
import { utapi } from "@/server/uploadthing";

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
}

export default async function DashboardFiles() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center">
				<h1 className="text-2xl font-bold">{t("dashboard.nav.files")}</h1>

				{/* <NewUser /> */}
			</div>

			<FilesTableClient files={[...files] as UploadedFile[]} />
		</div>
	)
}