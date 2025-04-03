import NewPost from "./_components/new-post";
import { Post } from "@/types";
import PostsTableClient from "./_components/client";
import { forbidden } from "next/navigation";
import { getCurrentUser } from "@/lib/actions";
import { getPosts } from "@/data/post";
import { getTranslations } from "next-intl/server";

export default async function DashboardBlog() {
	const t = await getTranslations();
	const currentUser = await getCurrentUser();

	if (!currentUser) return forbidden();

	const posts = await getPosts() as Post[] || [];

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center">
				<h1 className="text-2xl font-bold">{t("dashboard.nav.blog")}</h1>

				<NewPost />
			</div>

			<PostsTableClient posts={posts} />
		</div>
	)
}