"use client";

import { ArrowLeft, Save, Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { PolarisButton } from "@/components/admin/polaris-button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
	deleteBlogPost,
	getBlogPost,
	updateBlogPost,
} from "@/server/api/internal/blog";
import { getOrCreateDefaultLocale } from "@/server/api/internal/locales";

export default function EditBlogPostPage() {
	const router = useRouter();
	const params = useParams();
	const postId = params.id as string;

	const [defaultLocaleId, setDefaultLocaleId] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [deleting, setDeleting] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

	// Form state
	const [formData, setFormData] = useState({
		title: "",
		slug: "",
		excerpt: "",
		content: "",
		author: "",
		isPublished: false,
	});

	const loadData = useCallback(async () => {
		try {
			const [postData, localeData] = await Promise.all([
				getBlogPost(postId),
				getOrCreateDefaultLocale(),
			]);

			if (!postData) {
				toast.error("Blog post not found");
				router.push("/admin/content/blog");
				return;
			}

			setDefaultLocaleId(localeData.id);

			// Find default locale translation or use first one
			const translation =
				postData.translations.find((t) => t.localeId === localeData.id) ||
				postData.translations[0];

			// Set form data from post and translation
			setFormData({
				title: translation?.title ?? "",
				slug: postData.slug,
				excerpt: translation?.excerpt ?? "",
				content: translation?.content ?? "",
				author: postData.author ?? "",
				isPublished: postData.isPublished,
			});
		} catch {
			toast.error("Failed to load blog post");
			router.push("/admin/content/blog");
		} finally {
			setLoading(false);
		}
	}, [postId, router]);

	useEffect(() => {
		loadData();
	}, [loadData]);

	const handleSubmit = async () => {
		if (!formData.title || !formData.slug) {
			toast.error("Title and slug are required");
			return;
		}

		if (!defaultLocaleId) {
			toast.error("No default locale available");
			return;
		}

		try {
			setSaving(true);
			await updateBlogPost(postId, {
				slug: formData.slug,
				author: formData.author || undefined,
				isPublished: formData.isPublished,
				publishedAt: formData.isPublished ? new Date() : undefined,
				translations: [
					{
						localeId: defaultLocaleId,
						title: formData.title,
						excerpt: formData.excerpt || undefined,
						content: formData.content,
					},
				],
			});
			toast.success("Blog post updated");
			router.push("/admin/content/blog");
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Failed to update blog post",
			);
		} finally {
			setSaving(false);
		}
	};

	const handleDelete = async () => {
		try {
			setDeleting(true);
			await deleteBlogPost(postId);
			toast.success("Blog post deleted");
			router.push("/admin/content/blog");
		} catch {
			toast.error("Failed to delete blog post");
		} finally {
			setDeleting(false);
			setDeleteDialogOpen(false);
		}
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center h-64">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
			</div>
		);
	}

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link href="/admin/content/blog">
							<ArrowLeft className="h-4 w-4" />
						</Link>
					</Button>
					<div>
						<h1 className="text-2xl font-bold tracking-tight">
							Edit Blog Post
						</h1>
						<p className="text-sm text-muted-foreground">
							Update your blog post content
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						onClick={() => setDeleteDialogOpen(true)}
						className="text-destructive hover:text-destructive"
					>
						<Trash2 className="h-4 w-4" />
						Delete
					</Button>
					<PolarisButton onClick={handleSubmit} disabled={saving}>
						<Save className="h-4 w-4" />
						{saving ? "Saving..." : "Save Changes"}
					</PolarisButton>
				</div>
			</div>

			{/* Main Content */}
			<div className="grid gap-6 lg:grid-cols-3">
				<div className="lg:col-span-2 space-y-6">
					<Card className="p-6">
						<div className="space-y-4">
							<div>
								<Label htmlFor="title">Title</Label>
								<Input
									id="title"
									value={formData.title}
									onChange={(e) =>
										setFormData({ ...formData, title: e.target.value })
									}
									placeholder="Enter blog post title"
									className="mt-1.5"
								/>
							</div>

							<div>
								<Label htmlFor="slug">URL Slug</Label>
								<div className="flex items-center gap-2 mt-1.5">
									<span className="text-muted-foreground">/blog/</span>
									<Input
										id="slug"
										value={formData.slug}
										onChange={(e) =>
											setFormData({ ...formData, slug: e.target.value })
										}
										placeholder="post-url-slug"
									/>
								</div>
							</div>

							<div>
								<Label htmlFor="excerpt">Excerpt</Label>
								<Textarea
									id="excerpt"
									value={formData.excerpt}
									onChange={(e) =>
										setFormData({ ...formData, excerpt: e.target.value })
									}
									placeholder="A short summary of the post..."
									rows={3}
									className="mt-1.5"
								/>
							</div>
						</div>
					</Card>

					<Card className="p-6">
						<Label>Content</Label>
						<div className="mt-1.5">
							<RichTextEditor
								value={formData.content}
								onChange={(value: string) =>
									setFormData({ ...formData, content: value })
								}
								placeholder="Write your blog post content here..."
								minHeight="400px"
								imageFolder="blog"
							/>
						</div>
					</Card>
				</div>

				{/* Sidebar */}
				<div className="space-y-6">
					<Card className="p-6">
						<h3 className="font-medium mb-4">Post Settings</h3>
						<div className="space-y-4">
							<div>
								<Label htmlFor="author">Author</Label>
								<Input
									id="author"
									value={formData.author}
									onChange={(e) =>
										setFormData({ ...formData, author: e.target.value })
									}
									placeholder="Enter author name"
									className="mt-1.5"
								/>
							</div>

							<div className="flex items-center justify-between p-4 border rounded-lg">
								<div>
									<Label htmlFor="published">Published</Label>
									<p className="text-sm text-muted-foreground">
										Make this post visible
									</p>
								</div>
								<Switch
									id="published"
									checked={formData.isPublished}
									onCheckedChange={(checked) =>
										setFormData({ ...formData, isPublished: checked })
									}
								/>
							</div>
						</div>
					</Card>
				</div>
			</div>

			{/* Delete Dialog */}
			<Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Delete Blog Post</DialogTitle>
						<DialogDescription>
							Are you sure you want to delete &quot;{formData.title}&quot;? This
							action cannot be undone.
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
