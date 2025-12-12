"use client";

import { Eye, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	DeletePageDialog,
	PageFormDialog,
	ViewPageDialog,
} from "./_components/page-dialogs";

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

const mockPages: Page[] = [
	{
		id: "1",
		title: "About Us",
		slug: "about-us",
		content: "Learn more about our company and mission...",
		metaTitle: "About Us - Company Information",
		metaDescription:
			"Discover our story, values, and the team behind our success.",
		status: "Published",
		isPublished: true,
		author: "Admin",
		createdAt: "2024-01-15",
		updatedAt: "2024-12-01",
		views: 3456,
	},
	{
		id: "2",
		title: "Privacy Policy",
		slug: "privacy-policy",
		content: "Your privacy is important to us...",
		metaTitle: "Privacy Policy - Data Protection",
		metaDescription:
			"Read our comprehensive privacy policy and data protection practices.",
		status: "Published",
		isPublished: true,
		author: "Legal Team",
		createdAt: "2024-01-10",
		updatedAt: "2024-11-15",
		views: 1234,
	},
	{
		id: "3",
		title: "Terms of Service",
		slug: "terms-of-service",
		content: "Please read these terms carefully before using our service...",
		metaTitle: "Terms of Service - User Agreement",
		metaDescription: "Review the terms and conditions for using our services.",
		status: "Draft",
		isPublished: false,
		author: "Legal Team",
		createdAt: "2024-12-01",
		updatedAt: "2024-12-10",
		views: 0,
	},
];

export default function PagesPage() {
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedPage, setSelectedPage] = useState<Page | null>(null);
	const [formMode, setFormMode] = useState<"create" | "edit">("create");

	const handleView = (page: Page) => {
		setSelectedPage(page);
		setViewDialogOpen(true);
	};

	const handleEdit = (page: Page) => {
		setSelectedPage(page);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDelete = (page: Page) => {
		setSelectedPage(page);
		setDeleteDialogOpen(true);
	};

	const handleCreate = () => {
		setSelectedPage(null);
		setFormMode("create");
		setFormDialogOpen(true);
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Pages</h1>
					<p className="text-muted-foreground mt-1">
						Manage static pages and content
					</p>
				</div>
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Create Page
				</PolarisButton>
			</div>{" "}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Pages</p>
					<p className="text-2xl font-bold mt-1">12</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Pages</p>
					<p className="text-2xl font-bold mt-1">10</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Draft Pages</p>
					<p className="text-2xl font-bold mt-1">2</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Views</p>
					<p className="text-2xl font-bold mt-1">8,456</p>
				</Card>
			</div>
			<Card>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Title</TableHead>
							<TableHead>Slug</TableHead>
							<TableHead>Author</TableHead>
							<TableHead>Views</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Updated</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{mockPages.map((page) => (
							<TableRow key={page.id}>
								<TableCell className="font-medium">{page.title}</TableCell>
								<TableCell className="font-mono text-sm">
									/{page.slug}
								</TableCell>
								<TableCell>{page.author}</TableCell>
								<TableCell>{page.views.toLocaleString()}</TableCell>
								<TableCell>
									<Badge
										variant={
											page.status === "Published"
												? "default"
												: page.status === "Draft"
													? "secondary"
													: "outline"
										}
									>
										{page.status}
									</Badge>
								</TableCell>
								<TableCell>{page.updatedAt}</TableCell>
								<TableCell className="text-right">
									<div className="flex justify-end gap-2">
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleView(page)}
										>
											<Eye className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleEdit(page)}
										>
											<Pencil className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleDelete(page)}
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
			<ViewPageDialog
				open={viewDialogOpen}
				onOpenChange={setViewDialogOpen}
				page={selectedPage}
			/>
			<PageFormDialog
				open={formDialogOpen}
				onOpenChange={setFormDialogOpen}
				page={selectedPage}
				mode={formMode}
			/>
			<DeletePageDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				page={selectedPage}
			/>
		</div>
	);
}
