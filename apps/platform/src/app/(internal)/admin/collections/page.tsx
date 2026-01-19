"use client";

import { Eye, FolderOpen, Pencil, Plus, Trash2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Loader } from "@/components/loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
	deleteCollection,
	getCollections,
} from "@/server/api/internal/collections";
import {
	CollectionFormDialog,
	DeleteCollectionDialog,
	ViewCollectionDialog,
} from "./_components/collection-dialogs";

// Backend API type
interface CollectionTranslation {
	id: string;
	collectionId: string;
	localeId: string;
	name: string;
	description: string | null;
}

interface ApiCollection {
	id: string;
	slug: string;
	imageUrl: string | null;
	isActive: boolean;
	tenantId: string;
	createdAt: Date;
	updatedAt: Date;
	translations: CollectionTranslation[];
	_count: {
		products: number;
	};
}

// Dialog component type
interface Collection {
	id: string;
	name: string;
	slug: string;
	description: string;
	imageUrl?: string | null;
	type: string;
	products: number;
	featured: boolean;
	status: string;
}

export default function CollectionsPage() {
	const [collections, setCollections] = useState<Collection[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedCollection, setSelectedCollection] =
		useState<Collection | null>(null);
	const [formMode, setFormMode] = useState<"create" | "edit">("create");

	const fetchCollections = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await getCollections();
			// Transform API data to match dialog types
			const transformed = data.map(
				(col: ApiCollection): Collection => ({
					id: col.id,
					name: col.translations[0]?.name ?? col.slug,
					slug: col.slug,
					description: col.translations[0]?.description ?? "",
					imageUrl: col.imageUrl,
					type: "MANUAL",
					products: col._count.products,
					featured: false,
					status: col.isActive ? "Active" : "Inactive",
				}),
			);
			setCollections(transformed);
		} catch (error) {
			console.error("Failed to fetch collections:", error);
			toast.error("Failed to load collections");
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchCollections();
	}, [fetchCollections]);

	const handleView = (collection: Collection) => {
		setSelectedCollection(collection);
		setViewDialogOpen(true);
	};

	const handleEdit = (collection: Collection) => {
		setSelectedCollection(collection);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDeleteClick = (collection: Collection) => {
		setSelectedCollection(collection);
		setDeleteDialogOpen(true);
	};

	const handleDeleteConfirm = async (collectionId: string) => {
		try {
			await deleteCollection(collectionId);
			toast.success("Collection deleted successfully");
			await fetchCollections();
			setDeleteDialogOpen(false);
			setSelectedCollection(null);
		} catch (error) {
			console.error("Failed to delete collection:", error);
			toast.error(
				error instanceof Error ? error.message : "Failed to delete collection",
			);
		}
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
					<p className="text-2xl font-bold mt-1">{collections.length}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Collections</p>
					<p className="text-2xl font-bold mt-1">
						{collections.filter((c) => c.status === "Active").length}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Products</p>
					<p className="text-2xl font-bold mt-1">
						{collections.reduce((acc, c) => acc + c.products, 0)}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">
						Avg Products/Collection
					</p>
					<p className="text-2xl font-bold mt-1">
						{collections.length > 0
							? Math.round(
									collections.reduce((acc, c) => acc + c.products, 0) /
										collections.length,
								)
							: 0}
					</p>
				</Card>
			</div>
			<Card>
				{isLoading ? (
					<div className="flex items-center justify-center min-h-75">
						<Loader size="lg" />
					</div>
				) : collections.length === 0 ? (
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<FolderOpen className="h-8 w-8" />
							</EmptyMedia>
							<EmptyTitle>No collections yet</EmptyTitle>
							<EmptyDescription>
								Create your first collection to organize your products
							</EmptyDescription>
						</EmptyHeader>
						<EmptyContent>
							<PolarisButton type="button" onClick={handleCreate}>
								<Plus className="h-4 w-4" />
								Create Collection
							</PolarisButton>
						</EmptyContent>
					</Empty>
				) : (
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
							{collections.map((collection) => (
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
												onClick={() => handleDeleteClick(collection)}
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
				onSuccess={fetchCollections}
			/>
			<DeleteCollectionDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				collection={selectedCollection}
				onConfirm={handleDeleteConfirm}
			/>
		</div>
	);
}
