"use client";

import type { PageType } from "@boostcart/database";
import { ArrowLeft, Save, Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { getOrCreateDefaultLocale } from "@/server/api/internal/locales";
import {
	deletePage,
	getPage,
	getPageTypes,
	updatePage,
} from "@/server/api/internal/pages";

interface PageTypeOption {
	value: string;
	label: string;
}

export default function EditPagePage() {
	const params = useParams();
	const router = useRouter();
	const pageId = params.id as string;

	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [deleting, setDeleting] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [pageTypes, setPageTypes] = useState<PageTypeOption[]>([]);
	const [defaultLocaleId, setDefaultLocaleId] = useState<string | null>(null);

	const [formData, setFormData] = useState({
		title: "",
		slug: "",
		content: "",
		type: "CUSTOM" as PageType,
		isActive: true,
	});

	useEffect(() => {
		async function loadData() {
			try {
				const [pageData, typesData, localeData] = await Promise.all([
					getPage(pageId),
					getPageTypes(),
					getOrCreateDefaultLocale(),
				]);

				setPageTypes(typesData);
				setDefaultLocaleId(localeData.id);

				// Find default locale translation or use first one
				const translation =
					pageData.translations.find((t) => t.localeId === localeData.id) ||
					pageData.translations[0];

				setFormData({
					title: translation?.title ?? "",
					slug: pageData.slug,
					content: translation?.content ?? "",
					type: pageData.type,
					isActive: pageData.isActive,
				});
			} catch {
				toast.error("Failed to load page");
				router.push("/admin/pages");
			} finally {
				setLoading(false);
			}
		}
		loadData();
	}, [pageId, router]);

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
			await updatePage(pageId, {
				slug: formData.slug,
				type: formData.type,
				isActive: formData.isActive,
				translations: [
					{
						localeId: defaultLocaleId,
						title: formData.title,
						content: formData.content,
					},
				],
			});
			toast.success("Page updated");
			router.push("/admin/pages");
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Failed to update page",
			);
		} finally {
			setSaving(false);
		}
	};

	const handleDelete = async () => {
		try {
			setDeleting(true);
			await deletePage(pageId);
			toast.success("Page deleted");
			router.push("/admin/pages");
		} catch {
			toast.error("Failed to delete page");
		} finally {
			setDeleting(false);
		}
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
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link href="/admin/pages">
							<ArrowLeft className="h-4 w-4" />
						</Link>
					</Button>
					<div>
						<h1 className="text-3xl font-bold tracking-tight">Edit Page</h1>
						<p className="text-muted-foreground mt-1">
							Update your page content and settings
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
									placeholder="Enter page title"
									className="mt-1.5"
								/>
							</div>

							<div>
								<Label htmlFor="slug">URL Slug</Label>
								<div className="flex items-center gap-2 mt-1.5">
									<span className="text-muted-foreground">/</span>
									<Input
										id="slug"
										value={formData.slug}
										onChange={(e) =>
											setFormData({ ...formData, slug: e.target.value })
										}
										placeholder="page-url-slug"
									/>
								</div>
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
								placeholder="Write your page content here..."
								imageFolder="pages"
							/>
						</div>
					</Card>
				</div>

				<div className="space-y-6">
					<Card className="p-6">
						<h3 className="font-medium mb-4">Page Settings</h3>
						<div className="space-y-4">
							<div>
								<Label htmlFor="type">Page Type</Label>
								<Select
									value={formData.type}
									onValueChange={(value) =>
										setFormData({ ...formData, type: value as PageType })
									}
								>
									<SelectTrigger className="mt-1.5">
										<SelectValue placeholder="Select page type" />
									</SelectTrigger>
									<SelectContent>
										{pageTypes.map((type) => (
											<SelectItem key={type.value} value={type.value}>
												{type.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<p className="text-xs text-muted-foreground mt-1">
									Determines how and where this page appears
								</p>
							</div>

							<div className="flex items-center justify-between p-4 border rounded-lg">
								<div>
									<Label htmlFor="active">Published</Label>
									<p className="text-sm text-muted-foreground">
										Make this page visible
									</p>
								</div>
								<Switch
									id="active"
									checked={formData.isActive}
									onCheckedChange={(checked) =>
										setFormData({ ...formData, isActive: checked })
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
						<DialogTitle>Delete Page</DialogTitle>
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
							{deleting ? "Deleting..." : "Delete Page"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
