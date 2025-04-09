import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { getPosts } from "@/data/post";
import { Post } from "@/types";
import { FilePlus2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import PostsTableClient from "./_components/client";

export default async function DashboardBlog() {
	const t = await getTranslations();
	const posts = ((await getPosts()) as Post[]) || [];

	return (
		<div className="flex flex-col space-y-4">
			<Header title={t("dashboard.nav.blog")}>
				<Button asChild>
					<Link href="/dashboard/blog/post/create">
						<FilePlus2 />
						{t("dashboard.blog.newPost.button")}
					</Link>
				</Button>
			</Header>

			<PostsTableClient posts={posts} />
		</div>
	);
}
