"use client";

import { Eye, Globe, Pencil, Plus, Star, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { PolarisButton } from "@/components/admin/polaris-button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	createLocale,
	deleteLocale,
	getLocales,
	setDefaultLocale,
	updateLocale,
} from "@/server/api/internal/locales";

interface LocaleData {
	id: string;
	code: string;
	name: string;
	isDefault: boolean;
}

export default function LocalesPage() {
	const [locales, setLocales] = useState<LocaleData[]>([]);
	const [loading, setLoading] = useState(true);
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedLocale, setSelectedLocale] = useState<LocaleData | null>(null);
	const [formMode, setFormMode] = useState<"create" | "edit">("create");
	const [saving, setSaving] = useState(false);
	const [deleting, setDeleting] = useState(false);

	// Form state
	const [formData, setFormData] = useState({
		code: "",
		name: "",
	});

	useEffect(() => {
		loadData();
	}, []);

	async function loadData() {
		try {
			setLoading(true);
			const data = await getLocales();
			setLocales(data);
		} catch (error) {
			toast.error("Failed to load locales");
		} finally {
			setLoading(false);
		}
	}

	const handleView = (locale: LocaleData) => {
		setSelectedLocale(locale);
		setViewDialogOpen(true);
	};

	const handleEdit = (locale: LocaleData) => {
		setSelectedLocale(locale);
		setFormMode("edit");
		setFormData({
			code: locale.code,
			name: locale.name,
		});
		setFormDialogOpen(true);
	};

	const handleCreate = () => {
		setSelectedLocale(null);
		setFormMode("create");
		setFormData({
			code: "",
			name: "",
		});
		setFormDialogOpen(true);
	};

	const handleDeleteClick = (locale: LocaleData) => {
		setSelectedLocale(locale);
		setDeleteDialogOpen(true);
	};

	const handleSetDefault = async (locale: LocaleData) => {
		try {
			await setDefaultLocale(locale.id);
			toast.success(`${locale.name} is now the default locale`);
			loadData();
		} catch (error) {
			toast.error("Failed to set default locale");
		}
	};

	const handleSubmit = async () => {
		if (!formData.code || !formData.name) {
			toast.error("Code and name are required");
			return;
		}

		try {
			setSaving(true);

			if (formMode === "create") {
				await createLocale({
					code: formData.code,
					name: formData.name,
				});
				toast.success("Locale created");
			} else if (selectedLocale) {
				await updateLocale(selectedLocale.id, {
					code: formData.code,
					name: formData.name,
				});
				toast.success("Locale updated");
			}

			setFormDialogOpen(false);
			loadData();
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Failed to save locale",
			);
		} finally {
			setSaving(false);
		}
	};

	const handleDelete = async () => {
		if (!selectedLocale) return;

		try {
			setDeleting(true);
			await deleteLocale(selectedLocale.id);
			toast.success("Locale deleted");
			setDeleteDialogOpen(false);
			loadData();
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Failed to delete locale",
			);
		} finally {
			setDeleting(false);
		}
	};

	const defaultLocale = locales.find((l) => l.isDefault);

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
					<h1 className="text-3xl font-bold tracking-tight">
						Locales & Translations
					</h1>
					<p className="text-muted-foreground mt-1">
						Manage languages and translations
					</p>
				</div>
				<PolarisButton onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Add Locale
				</PolarisButton>
			</div>

			<div className="grid gap-4 md:grid-cols-2">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Locales</p>
					<p className="text-2xl font-bold mt-1">{locales.length}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Default Locale</p>
					<p className="text-2xl font-bold mt-1">
						{defaultLocale?.code ?? "None"}
					</p>
				</Card>
			</div>

			<Card>
				{locales.length === 0 ? (
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<Globe className="h-8 w-8" />
							</EmptyMedia>
							<EmptyTitle>No locales yet</EmptyTitle>
							<EmptyDescription>
								Create your first locale to enable multi-language support
							</EmptyDescription>
						</EmptyHeader>
						<EmptyContent>
							<PolarisButton onClick={handleCreate}>
								<Plus className="h-4 w-4" />
								Add Locale
							</PolarisButton>
						</EmptyContent>
					</Empty>
				) : (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Code</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Default</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{locales.map((locale) => (
								<TableRow key={locale.id}>
									<TableCell className="font-mono">{locale.code}</TableCell>
									<TableCell className="font-medium">{locale.name}</TableCell>
									<TableCell>
										{locale.isDefault && (
											<Badge variant="outline" className="text-xs">
												<Star className="h-3 w-3 mr-1" />
												Default
											</Badge>
										)}
									</TableCell>
									<TableCell className="text-right">
										<div className="flex justify-end gap-2">
											{!locale.isDefault && (
												<Button
													variant="ghost"
													size="icon"
													onClick={() => handleSetDefault(locale)}
													title="Set as default"
												>
													<Star className="h-4 w-4" />
												</Button>
											)}
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleView(locale)}
											>
												<Eye className="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleEdit(locale)}
											>
												<Pencil className="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleDeleteClick(locale)}
												disabled={locale.isDefault}
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
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Locale Details</DialogTitle>
						<DialogDescription>View locale information</DialogDescription>
					</DialogHeader>

					{selectedLocale && (
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<Label className="text-muted-foreground">Code</Label>
									<p className="font-mono">{selectedLocale.code}</p>
								</div>
								<div>
									<Label className="text-muted-foreground">Name</Label>
									<p>{selectedLocale.name}</p>
								</div>
								<div>
									<Label className="text-muted-foreground">Default</Label>
									<p>{selectedLocale.isDefault ? "Yes" : "No"}</p>
								</div>
							</div>
						</div>
					)}

					<DialogFooter>
						<Button variant="outline" onClick={() => setViewDialogOpen(false)}>
							Close
						</Button>
						<PolarisButton
							onClick={() => {
								setViewDialogOpen(false);
								if (selectedLocale) handleEdit(selectedLocale);
							}}
						>
							<Pencil className="h-4 w-4" />
							Edit Locale
						</PolarisButton>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Form Dialog */}
			<Dialog open={formDialogOpen} onOpenChange={setFormDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							{formMode === "create" ? "Add Locale" : "Edit Locale"}
						</DialogTitle>
						<DialogDescription>
							{formMode === "create"
								? "Add a new locale for translations"
								: "Update locale settings"}
						</DialogDescription>
					</DialogHeader>

					<div className="space-y-4">
						<div>
							<Label htmlFor="code">Locale Code</Label>
							<Input
								id="code"
								value={formData.code}
								onChange={(e) =>
									setFormData({ ...formData, code: e.target.value })
								}
								placeholder="e.g. bg-BG, en-US"
							/>
							<p className="text-xs text-muted-foreground mt-1">
								Use format: language-COUNTRY (e.g. bg-BG, en-US)
							</p>
						</div>

						<div>
							<Label htmlFor="name">Display Name</Label>
							<Input
								id="name"
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								placeholder="e.g. Bulgarian, English (US)"
							/>
						</div>
					</div>

					<DialogFooter>
						<Button variant="outline" onClick={() => setFormDialogOpen(false)}>
							Cancel
						</Button>
						<PolarisButton onClick={handleSubmit} disabled={saving}>
							{saving
								? "Saving..."
								: formMode === "create"
									? "Add Locale"
									: "Save Changes"}
						</PolarisButton>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Dialog */}
			<Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Delete Locale</DialogTitle>
						<DialogDescription>
							Are you sure you want to delete &quot;{selectedLocale?.name}
							&quot;? This will also remove all translations for this locale.
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
							{deleting ? "Deleting..." : "Delete Locale"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
