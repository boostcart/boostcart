"use client";

import {
	Calendar,
	Eye,
	FileText,
	Globe,
	Pencil,
	Plus,
	Trash2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Loader } from "@/components/loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	deleteBlogPost,
	getBlogPosts,
	getBlogStats,
	toggleBlogPostPublished,
} from "@/server/api/internal/blog";

interface BlogPost {
	id: string;
	slug: string;
	featuredImage: string | null;
	author: string | null;
	isPublished: boolean;
	publishedAt: Date | null;
	title: string;
	excerpt: string;
	content: string;
	translations: {
		localeId: string;
		localeCode: string;
		localeName: string;
		title: string;
		excerpt: string | null;
		content: string;
	}[];
	createdAt: Date;
	updatedAt: Date;
}

interface BlogStats {
	total: number;
	published: number;
	drafts: number;
	recent: number;
}

export default function BlogPage() {
	const router = useRouter();
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [stats, setStats] = useState<BlogStats | null>(null);
	const [loading, setLoading] = useState(true);
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
	const [deleting, setDeleting] = useState(false);

	const loadData = useCallback(async () => {
		try {
			setLoading(true);
			const [postsData, statsData] = await Promise.all([
				getBlogPosts(),
				getBlogStats(),
			]);
			setPosts(postsData);
			setStats(statsData);
		} catch {
			toast.error("Failed to load blog posts");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		loadData();
	}, [loadData]);

	const handleView = (post: BlogPost) => {
		setSelectedPost(post);
		setViewDialogOpen(true);
	};

	const handleDeleteClick = (post: BlogPost) => {
		setSelectedPost(post);
		setDeleteDialogOpen(true);
	};

	const handleTogglePublished = async (post: BlogPost) => {
		try {
			await toggleBlogPostPublished(post.id);
			toast.success(post.isPublished ? "Post unpublished" : "Post published");
			loadData();
		} catch {
			toast.error("Failed to update post status");
		}
	};

	const handleDelete = async () => {
		if (!selectedPost) return;

		try {
			setDeleting(true);
			await deleteBlogPost(selectedPost.id);
			toast.success("Blog post deleted");
			setDeleteDialogOpen(false);
			loadData();
		} catch {
			toast.error("Failed to delete blog post");
		} finally {
			setDeleting(false);
		}
	};

	const formatDate = (date: Date | null) => {
		if (!date) return "—";
		return new Date(date).toLocaleDateString("bg-BG", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center h-64">
				<Loader size="lg" />
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
					<p className="text-muted-foreground mt-1">
						Create and manage blog content for your store
					</p>
				</div>
				<PolarisButton onClick={() => router.push("/admin/content/blog/new")}>
					<Plus className="h-4 w-4" />
					Create Post
				</PolarisButton>
			</div>

			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<FileText className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">Total Posts</p>
					</div>
					<p className="text-2xl font-bold mt-1">{stats?.total ?? 0}</p>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<Globe className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">Published</p>
					</div>
					<p className="text-2xl font-bold mt-1">{stats?.published ?? 0}</p>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<FileText className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">Drafts</p>
					</div>
					<p className="text-2xl font-bold mt-1">{stats?.drafts ?? 0}</p>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<Calendar className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">This Week</p>
					</div>
					<p className="text-2xl font-bold mt-1">{stats?.recent ?? 0}</p>
				</Card>
			</div>

			<Card>
				{posts.length === 0 ? (
					<Empty>
						<EmptyMedia>
							<FileText className="h-12 w-12 text-muted-foreground" />
						</EmptyMedia>
						<EmptyHeader>
							<EmptyTitle>No blog posts yet</EmptyTitle>
							<EmptyDescription>
								Create your first blog post to start engaging with your
								customers
							</EmptyDescription>
						</EmptyHeader>
						<EmptyContent>
							<PolarisButton
								onClick={() => router.push("/admin/content/blog/new")}
							>
								<Plus className="h-4 w-4" />
								Create Post
							</PolarisButton>
						</EmptyContent>
					</Empty>
				) : (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Title</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Author</TableHead>
								<TableHead>Date</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{posts.map((post) => (
								<TableRow key={post.id}>
									<TableCell>
										<div>
											<p className="font-medium">{post.title}</p>
											<p className="text-sm text-muted-foreground">
												/{post.slug}
											</p>
										</div>
									</TableCell>
									<TableCell>
										<Badge
											variant={post.isPublished ? "default" : "secondary"}
											className="cursor-pointer"
											onClick={() => handleTogglePublished(post)}
										>
											{post.isPublished ? "Published" : "Draft"}
										</Badge>
									</TableCell>
									<TableCell>{post.author ?? "—"}</TableCell>
									<TableCell>
										{formatDate(post.publishedAt ?? post.createdAt)}
									</TableCell>
									<TableCell className="text-right">
										<div className="flex justify-end gap-2">
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleView(post)}
											>
												<Eye className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="icon" asChild>
												<Link href={`/admin/content/blog/${post.id}/edit`}>
													<Pencil className="h-4 w-4" />
												</Link>
											</Button>
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleDeleteClick(post)}
											>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}
			</Card>

			{/* View Dialog */}
			<Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
				<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle>Blog Post Preview</DialogTitle>
						<DialogDescription>
							Preview how your post will look
						</DialogDescription>
					</DialogHeader>

					{selectedPost && (
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<Badge
									variant={selectedPost.isPublished ? "default" : "secondary"}
								>
									{selectedPost.isPublished ? "Published" : "Draft"}
								</Badge>
								<span className="text-sm text-muted-foreground">
									/{selectedPost.slug}
								</span>
							</div>

							<h2 className="text-2xl font-bold">{selectedPost.title}</h2>

							{selectedPost.author && (
								<p className="text-sm text-muted-foreground">
									By {selectedPost.author} •{" "}
									{formatDate(
										selectedPost.publishedAt ?? selectedPost.createdAt,
									)}
								</p>
							)}

							{selectedPost.excerpt && (
								<p className="text-lg text-muted-foreground italic">
									{selectedPost.excerpt}
								</p>
							)}

							<div className="border-t pt-4">
								<div
									className="prose prose-sm dark:prose-invert max-w-none"
									// biome-ignore lint/security/noDangerouslySetInnerHtml: Rich text content
									dangerouslySetInnerHTML={{ __html: selectedPost.content }}
								/>
							</div>
						</div>
					)}

					<DialogFooter>
						<Button variant="outline" onClick={() => setViewDialogOpen(false)}>
							Close
						</Button>
						<PolarisButton
							onClick={() =>
								router.push(`/admin/content/blog/${selectedPost?.id}/edit`)
							}
						>
							<Pencil className="h-4 w-4" />
							Edit Post
						</PolarisButton>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Dialog */}
			<Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Delete Blog Post</DialogTitle>
						<DialogDescription>
							Are you sure you want to delete &quot;{selectedPost?.title}&quot;?
							This action cannot be undone.
						</DialogDescription>
					</DialogHeader>

					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setDeleteDialogOpen(false)}
						>
							Cancel
						</Button>
						<Button
							variant="destructive"
							onClick={handleDelete}
							disabled={deleting}
						>
							{deleting ? "Deleting..." : "Delete Post"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
