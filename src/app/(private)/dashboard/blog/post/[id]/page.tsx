import { getPostById } from "@/data/post";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import EditBlogPostClient from "./_components/client";

export default async function EditBlogPostPage({
	params,
}: Readonly<{
	params: Promise<{ id: string }>;
}>) {
	const t = await getTranslations();
	const { id } = await params;

	if (!id) {
		toast.error(t("dashboard.errors.post_not_found"));
		redirect("/dashboard/blog");
	}

	const post = await getPostById(id);

	if (!post) {
		toast.error(t("dashboard.errors.post_not_found"));
		redirect("/dashboard/blog");
	}

	return <EditBlogPostClient post={post} />;
}
