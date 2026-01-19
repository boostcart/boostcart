"use client";

import type { PageType } from "@boostcart/database";
import { Eye, FileText, Pencil, Plus, Trash2 } from "lucide-react";
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
	deletePage,
	getPages,
	togglePageActive,
} from "@/server/api/internal/pages";

interface PageData {
	id: string;
	slug: string;
	type: PageType;
	isActive: boolean;
	title: string;
	content: string;
	translations: {
		localeId: string;
		localeCode: string;
		localeName: string;
		title: string;
		content: string;
	}[];
	createdAt: Date;
	updatedAt: Date;
}

export default function PagesPage() {
	const router = useRouter();
	const [pages, setPages] = useState<PageData[]>([]);
	const [loading, setLoading] = useState(true);
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedPage, setSelectedPage] = useState<PageData | null>(null);
	const [deleting, setDeleting] = useState(false);

	const loadData = useCallback(async () => {
		try {
			setLoading(true);
			const pagesData = await getPages();
			setPages(pagesData);
		} catch {
			toast.error("Failed to load pages");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		loadData();
	}, [loadData]);

	const handleView = (page: PageData) => {
		setSelectedPage(page);
		setViewDialogOpen(true);
	};

	const handleDeleteClick = (page: PageData) => {
		setSelectedPage(page);
		setDeleteDialogOpen(true);
	};

	const handleToggleActive = async (page: PageData) => {
		try {
			await togglePageActive(page.id);
			toast.success(page.isActive ? "Page deactivated" : "Page activated");
			loadData();
		} catch {
			toast.error("Failed to update page status");
		}
	};

	const handleDelete = async () => {
		if (!selectedPage) return;

		try {
			setDeleting(true);
			await deletePage(selectedPage.id);
			toast.success("Page deleted");
			setDeleteDialogOpen(false);
			loadData();
		} catch {
			toast.error("Failed to delete page");
		} finally {
			setDeleting(false);
		}
	};

	const formatDate = (date: Date) => {
		return new Date(date).toLocaleDateString("bg-BG", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	const activePages = pages.filter((p) => p.isActive).length;
	const draftPages = pages.filter((p) => !p.isActive).length;

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
					<h1 className="text-3xl font-bold tracking-tight">Pages</h1>
					<p className="text-muted-foreground mt-1">
						Manage static pages and content
					</p>
				</div>
				<PolarisButton onClick={() => router.push("/admin/pages/new")}>
					<Plus className="h-4 w-4" />
					Create Page
				</PolarisButton>
			</div>

			<div className="grid gap-4 md:grid-cols-3">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Pages</p>
					<p className="text-2xl font-bold mt-1">{pages.length}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Pages</p>
					<p className="text-2xl font-bold mt-1">{activePages}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Draft Pages</p>
					<p className="text-2xl font-bold mt-1">{draftPages}</p>
				</Card>
			</div>

			<Card>
				{pages.length === 0 ? (
					<Empty>
						<EmptyMedia>
							<FileText className="h-12 w-12 text-muted-foreground" />
						</EmptyMedia>
						<EmptyHeader>
							<EmptyTitle>No pages yet</EmptyTitle>
							<EmptyDescription>
								Create your first page to add content to your store
							</EmptyDescription>
						</EmptyHeader>
						<EmptyContent>
							<PolarisButton onClick={() => router.push("/admin/pages/new")}>
								<Plus className="h-4 w-4" />
								Create Page
							</PolarisButton>
						</EmptyContent>
					</Empty>
				) : (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Title</TableHead>
								<TableHead>Slug</TableHead>
								<TableHead>Type</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Updated</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{pages.map((page) => (
								<TableRow key={page.id}>
									<TableCell className="font-medium">{page.title}</TableCell>
									<TableCell className="font-mono text-sm">
										/{page.slug}
									</TableCell>
									<TableCell>
										<Badge variant="outline">
											{page.type.replace("_", " ")}
										</Badge>
									</TableCell>
									<TableCell>
										<Badge
											variant={page.isActive ? "default" : "secondary"}
											className="cursor-pointer"
											onClick={() => handleToggleActive(page)}
										>
											{page.isActive ? "Active" : "Draft"}
										</Badge>
									</TableCell>
									<TableCell>{formatDate(page.updatedAt)}</TableCell>
									<TableCell className="text-right">
										<div className="flex justify-end gap-2">
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleView(page)}
											>
												<Eye className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="icon" asChild>
												<Link href={`/admin/pages/${page.id}/edit`}>
													<Pencil className="h-4 w-4" />
												</Link>
											</Button>
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleDeleteClick(page)}
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
						<DialogTitle>Page Preview</DialogTitle>
						<DialogDescription>
							Preview how your page will look
						</DialogDescription>
					</DialogHeader>

					{selectedPage && (
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<Badge
									variant={selectedPage.isActive ? "default" : "secondary"}
								>
									{selectedPage.isActive ? "Active" : "Draft"}
								</Badge>
								<Badge variant="outline">
									{selectedPage.type.replace("_", " ")}
								</Badge>
								<span className="text-sm text-muted-foreground">
									/{selectedPage.slug}
								</span>
							</div>

							<h2 className="text-2xl font-bold">{selectedPage.title}</h2>

							<div className="border-t pt-4">
								<div
									className="prose prose-sm dark:prose-invert max-w-none"
									// biome-ignore lint/security/noDangerouslySetInnerHtml: Rich text content
									dangerouslySetInnerHTML={{ __html: selectedPage.content }}
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
								router.push(`/admin/pages/${selectedPage?.id}/edit`)
							}
						>
							<Pencil className="h-4 w-4" />
							Edit Page
						</PolarisButton>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Dialog */}
			<Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Delete Page</DialogTitle>
						<DialogDescription>
							Are you sure you want to delete &quot;{selectedPage?.title}&quot;?
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
							{deleting ? "Deleting..." : "Delete Page"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
