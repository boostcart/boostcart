"use client";

import { Calendar, Eye, FileText, Globe } from "lucide-react";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface Page {
	id: string;
	title: string;
	slug: string;
	content: string;
	metaTitle: string;
	metaDescription: string;
	status: string;
	isPublished: boolean;
	author: string;
	createdAt: string;
	updatedAt: string;
	views: number;
}

interface ViewPageDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	page: Page | null;
}

export function ViewPageDialog({
	open,
	onOpenChange,
	page,
}: ViewPageDialogProps) {
	if (!page) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Page Details</DialogTitle>
					<DialogDescription>View page content and metadata</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="content" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="content">Content</TabsTrigger>
						<TabsTrigger value="seo">SEO</TabsTrigger>
						<TabsTrigger value="metadata">Metadata</TabsTrigger>
					</TabsList>

					<TabsContent value="content" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div>
								<h3 className="text-2xl font-bold mb-2">{page.title}</h3>
								<div className="flex items-center gap-2">
									<Badge variant={page.isPublished ? `default` : `secondary`}>
										{page.status}
									</Badge>
									<span className="text-sm text-muted-foreground">
										/{page.slug}
									</span>
								</div>
							</div>
							<Separator />
							<div>
								<p className="text-sm text-muted-foreground mb-2">
									Page Content
								</p>
								<div className="p-4 border rounded-lg bg-muted/30 prose prose-sm dark:prose-invert max-w-none">
									<div
										// biome-ignore lint/security/noDangerouslySetInnerHtml: It's not really viable to sanitize rich text content here
										dangerouslySetInnerHTML={{ __html: page.content }}
										className="whitespace-pre-wrap"
									/>
								</div>
							</div>{" "}
							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 border rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<Eye className="h-4 w-4 text-primary" />
										<p className="text-sm text-muted-foreground">Total Views</p>
									</div>
									<p className="text-3xl font-bold">{page.views}</p>
								</div>
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground mb-2">Author</p>
									<p className="font-medium">{page.author}</p>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="seo" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="p-4 border rounded-lg">
								<div className="flex items-center gap-2 mb-3">
									<Globe className="h-5 w-5 text-primary" />
									<p className="font-medium">Search Engine Preview</p>
								</div>
								<div className="space-y-2">
									<div className="text-blue-600 dark:text-blue-400 text-lg font-medium hover:underline cursor-pointer">
										{page.metaTitle || page.title}
									</div>
									<div className="text-sm text-green-700 dark:text-green-400">
										https://yourstore.com/{page.slug}
									</div>
									<div className="text-sm text-muted-foreground">
										{page.metaDescription ||
											`No meta description provided. Consider adding one for better SEO.`}
									</div>
								</div>
							</div>

							<Separator />

							<div>
								<Label>Meta Title</Label>
								<p className="mt-1 p-3 bg-muted rounded-md">
									{page.metaTitle || page.title}
								</p>
								<p className="text-xs text-muted-foreground mt-1">
									{page.metaTitle?.length || page.title.length} characters
									(recommended: 50-60)
								</p>
							</div>

							<div>
								<Label>Meta Description</Label>
								<p className="mt-1 p-3 bg-muted rounded-md">
									{page.metaDescription || `Not set`}
								</p>
								<p className="text-xs text-muted-foreground mt-1">
									{page.metaDescription?.length || 0} characters (recommended:
									150-160)
								</p>
							</div>

							<div>
								<Label>URL Slug</Label>
								<p className="mt-1 p-3 bg-muted rounded-md font-mono">
									/{page.slug}
								</p>
							</div>

							<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
								<p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
									💡 SEO Tips
								</p>
								<ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
									<li>Keep meta titles under 60 characters</li>
									<li>Write compelling meta descriptions (150-160 chars)</li>
									<li>Use descriptive, keyword-rich slugs</li>
									<li>Ensure content is unique and valuable</li>
								</ul>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="metadata" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-sm text-muted-foreground">Status</p>
									<Badge
										variant={page.isPublished ? `default` : `secondary`}
										className="mt-1"
									>
										{page.status}
									</Badge>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Author</p>
									<p className="font-medium mt-1">{page.author}</p>
								</div>
							</div>

							<Separator />

							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-sm text-muted-foreground">Created</p>
									<div className="flex items-center gap-2 mt-1">
										<Calendar className="h-4 w-4 text-muted-foreground" />
										<p className="font-medium">{page.createdAt}</p>
									</div>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Last Updated</p>
									<div className="flex items-center gap-2 mt-1">
										<Calendar className="h-4 w-4 text-muted-foreground" />
										<p className="font-medium">{page.updatedAt}</p>
									</div>
								</div>
							</div>

							<Separator />

							<div className="p-4 border rounded-lg">
								<p className="font-medium mb-3">Publishing Info</p>
								<div className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span className="text-muted-foreground">Visibility:</span>
										<span className="font-medium">
											{page.isPublished ? `Public` : `Private`}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Page Views:</span>
										<span className="font-medium">{page.views}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">URL:</span>
										<span className="font-mono text-xs">/{page.slug}</span>
									</div>
								</div>
							</div>

							<div className="p-4 bg-muted rounded-lg">
								<p className="font-medium mb-2">Quick Actions</p>
								<div className="flex gap-2">
									<Button size="sm" variant="outline">
										Preview Page
									</Button>
									<Button size="sm" variant="outline">
										View Live
									</Button>
									<Button size="sm" variant="outline">
										Duplicate
									</Button>
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>

				<DialogFooter>
					<Button
						type="button"
						variant="outline"
						onClick={() => onOpenChange(false)}
					>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface PageFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	mode: "create" | "edit";
	page?: Page | null;
}

export function PageFormDialog({
	open,
	onOpenChange,
	mode,
	page,
}: PageFormDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === `create` ? `Create Page` : `Edit Page`}
					</DialogTitle>
					<DialogDescription>
						{mode === `create`
							? `Add a new page to your store`
							: `Update page content and settings`}
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="content" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="content">Content</TabsTrigger>
						<TabsTrigger value="seo">SEO & Settings</TabsTrigger>
					</TabsList>

					<TabsContent value="content" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="title">Page Title *</Label>
								<Input
									id="title"
									placeholder="About Us"
									defaultValue={page?.title}
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="slug">URL Slug *</Label>
								<Input
									id="slug"
									placeholder="about-us"
									defaultValue={page?.slug}
									required
								/>
								<p className="text-xs text-muted-foreground">
									Will be accessible at: /pages/about-us
								</p>
							</div>

							<div className="space-y-2">
								<Label htmlFor="content">Page Content *</Label>
								<Textarea
									id="content"
									placeholder="Enter your page content here..."
									defaultValue={page?.content}
									rows={12}
									required
								/>
								<p className="text-xs text-muted-foreground">
									Supports HTML and Markdown formatting
								</p>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="seo" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="metaTitle">Meta Title</Label>
								<Input
									id="metaTitle"
									placeholder="About Our Company"
									defaultValue={page?.metaTitle}
								/>
								<p className="text-xs text-muted-foreground">
									Leave empty to use page title (recommended: 50-60 characters)
								</p>
							</div>

							<div className="space-y-2">
								<Label htmlFor="metaDescription">Meta Description</Label>
								<Textarea
									id="metaDescription"
									placeholder="Learn more about our company, mission, and values..."
									defaultValue={page?.metaDescription}
									rows={3}
								/>
								<p className="text-xs text-muted-foreground">
									Recommended: 150-160 characters
								</p>
							</div>

							<Separator />

							<div className="space-y-2">
								<Label htmlFor="author">Author</Label>
								<Input
									id="author"
									placeholder="Admin"
									defaultValue={page?.author || `Admin`}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="status">Status</Label>
								<select
									id="status"
									className="w-full rounded-md border border-input bg-background px-3 py-2"
									defaultValue={page?.status || `Draft`}
								>
									<option value="Draft">Draft</option>
									<option value="Published">Published</option>
									<option value="Archived">Archived</option>
								</select>
							</div>

							<Separator />

							<div className="flex items-center justify-between">
								<div>
									<Label htmlFor="isPublished">Publish Immediately</Label>
									<p className="text-xs text-muted-foreground">
										Make this page visible to visitors
									</p>
								</div>
								<Switch
									id="isPublished"
									defaultChecked={page?.isPublished ?? false}
								/>
							</div>

							<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
								<p className="text-xs text-blue-800 dark:text-blue-200">
									💡 Tip: Use descriptive titles and meta descriptions to
									improve SEO and click-through rates from search engines.
								</p>
							</div>
						</div>
					</TabsContent>
				</Tabs>

				<DialogFooter className="mt-4">
					<Button
						type="button"
						variant="outline"
						onClick={() => onOpenChange(false)}
					>
						Cancel
					</Button>
					<Button type="button" variant="outline">
						Save Draft
					</Button>
					<PolarisButton type="submit">
						{mode === `create` ? `Create Page` : `Save Changes`}
					</PolarisButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface DeletePageDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	page: Page | null;
}

export function DeletePageDialog({
	open,
	onOpenChange,
	page,
}: DeletePageDialogProps) {
	if (!page) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Page</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this page? This action cannot be
						undone.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="p-4 bg-muted rounded-lg space-y-2">
						<div className="flex items-center gap-2">
							<FileText className="h-4 w-4 text-muted-foreground" />
							<p className="font-bold text-lg">{page.title}</p>
						</div>
						<p className="text-sm text-muted-foreground">/{page.slug}</p>
						<div className="grid grid-cols-2 gap-2 text-sm pt-2">
							<div>
								<span className="text-muted-foreground">Status:</span>
								<span className="ml-2 font-medium">{page.status}</span>
							</div>
							<div>
								<span className="text-muted-foreground">Views:</span>
								<span className="ml-2 font-medium">{page.views}</span>
							</div>
						</div>
					</div>

					{page.isPublished && (
						<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
							<p className="text-sm text-yellow-800 dark:text-yellow-200">
								⚠️ This page is currently published and visible to customers. It
								will be removed from your store immediately.
							</p>
						</div>
					)}

					<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
						<p className="text-sm text-red-800 dark:text-red-200">
							🚨 The page URL /{page.slug} will become unavailable and any links
							to it will result in 404 errors.
						</p>
					</div>
				</div>

				<DialogFooter>
					<Button
						type="button"
						variant="outline"
						onClick={() => onOpenChange(false)}
					>
						Cancel
					</Button>
					<Button
						type="button"
						variant="destructive"
						onClick={() => {
							// TODO: Implement delete logic
							console.log(`Deleting page:`, page);
							onOpenChange(false);
						}}
					>
						Delete Page
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
