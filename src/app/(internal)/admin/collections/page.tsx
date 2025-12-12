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
	CollectionFormDialog,
	DeleteCollectionDialog,
	ViewCollectionDialog,
} from "./_components/collection-dialogs";

interface Collection {
	id: string;
	name: string;
	slug: string;
	description: string;
	type: string;
	products: number;
	featured: boolean;
	status: string;
}

const mockCollections: Collection[] = [
	{
		id: "1",
		name: "Summer Collection",
		slug: "summer-collection",
		description: "Hot summer products and essentials",
		type: "MANUAL",
		products: 45,
		featured: true,
		status: "Active",
	},
	{
		id: "2",
		name: "Best Sellers",
		slug: "best-sellers",
		description: "Our most popular products",
		type: "AUTOMATED",
		products: 32,
		featured: true,
		status: "Active",
	},
	{
		id: "3",
		name: "New Arrivals",
		slug: "new-arrivals",
		description: "Latest additions to our catalog",
		type: "AUTOMATED",
		products: 28,
		featured: false,
		status: "Active",
	},
];

export default function CollectionsPage() {
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedCollection, setSelectedCollection] =
		useState<Collection | null>(null);
	const [formMode, setFormMode] = useState<"create" | "edit">("create");

	const handleView = (collection: Collection) => {
		setSelectedCollection(collection);
		setViewDialogOpen(true);
	};

	const handleEdit = (collection: Collection) => {
		setSelectedCollection(collection);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDelete = (collection: Collection) => {
		setSelectedCollection(collection);
		setDeleteDialogOpen(true);
	};

	const handleCreate = () => {
		setSelectedCollection(null);
		setFormMode("create");
		setFormDialogOpen(true);
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Collections</h1>
					<p className="text-muted-foreground mt-1">
						Create curated product collections
					</p>
				</div>
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Create Collection
				</PolarisButton>
			</div>{" "}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Collections</p>
					<p className="text-2xl font-bold mt-1">18</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Collections</p>
					<p className="text-2xl font-bold mt-1">15</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Featured Products</p>
					<p className="text-2xl font-bold mt-1">456</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Views</p>
					<p className="text-2xl font-bold mt-1">23,456</p>
				</Card>
			</div>
			<Card>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Products</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{mockCollections.map((collection) => (
							<TableRow key={collection.id}>
								<TableCell>
									<div>
										<p className="font-medium">{collection.name}</p>
										{collection.featured && (
											<Badge variant="outline" className="mt-1">
												Featured
											</Badge>
										)}
									</div>
								</TableCell>
								<TableCell>
									<Badge variant="secondary">{collection.type}</Badge>
								</TableCell>
								<TableCell>{collection.products}</TableCell>
								<TableCell>
									<Badge
										variant={
											collection.status === "Active" ? "default" : "secondary"
										}
									>
										{collection.status}
									</Badge>
								</TableCell>
								<TableCell className="text-right">
									<div className="flex justify-end gap-2">
										<Button
											variant="ghost"
											size="sm"
											onClick={() => handleView(collection)}
										>
											<Eye className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="sm"
											onClick={() => handleEdit(collection)}
										>
											<Pencil className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="sm"
											onClick={() => handleDelete(collection)}
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
			<ViewCollectionDialog
				open={viewDialogOpen}
				onOpenChange={setViewDialogOpen}
				collection={selectedCollection}
			/>
			<CollectionFormDialog
				open={formDialogOpen}
				onOpenChange={setFormDialogOpen}
				mode={formMode}
				collection={selectedCollection}
			/>
			<DeleteCollectionDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				collection={selectedCollection}
			/>
		</div>
	);
}
