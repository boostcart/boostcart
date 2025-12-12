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
	DeleteLocaleDialog,
	LocaleFormDialog,
	ViewLocaleDialog,
} from "./_components/locale-dialogs";

interface Locale {
	id: string;
	name: string;
	code: string;
	language: string;
	languageCode: string;
	country: string;
	countryCode: string;
	currency: string;
	currencySymbol: string;
	isDefault: boolean;
	isActive: boolean;
	dateFormat: string;
	timeFormat: string;
	numberFormat: string;
	translations: number;
}

const mockLocales: Locale[] = [
	{
		id: "1",
		name: "English (United States)",
		code: "en-US",
		language: "English",
		languageCode: "en",
		country: "United States",
		countryCode: "US",
		currency: "USD",
		currencySymbol: "$",
		isDefault: true,
		isActive: true,
		dateFormat: "MM/DD/YYYY",
		timeFormat: "12h",
		numberFormat: "1,234.56",
		translations: 1250,
	},
	{
		id: "2",
		name: "Spanish (Spain)",
		code: "es-ES",
		language: "Spanish",
		languageCode: "es",
		country: "Spain",
		countryCode: "ES",
		currency: "EUR",
		currencySymbol: "€",
		isDefault: false,
		isActive: true,
		dateFormat: "DD/MM/YYYY",
		timeFormat: "24h",
		numberFormat: "1.234,56",
		translations: 1089,
	},
	{
		id: "3",
		name: "French (France)",
		code: "fr-FR",
		language: "French",
		languageCode: "fr",
		country: "France",
		countryCode: "FR",
		currency: "EUR",
		currencySymbol: "€",
		isDefault: false,
		isActive: false,
		dateFormat: "DD/MM/YYYY",
		timeFormat: "24h",
		numberFormat: "1 234,56",
		translations: 956,
	},
];

export default function LocalesPage() {
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedLocale, setSelectedLocale] = useState<Locale | null>(null);
	const [formMode, setFormMode] = useState<"create" | "edit">("create");

	const handleView = (locale: Locale) => {
		setSelectedLocale(locale);
		setViewDialogOpen(true);
	};

	const handleEdit = (locale: Locale) => {
		setSelectedLocale(locale);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDelete = (locale: Locale) => {
		setSelectedLocale(locale);
		setDeleteDialogOpen(true);
	};

	const handleCreate = () => {
		setSelectedLocale(null);
		setFormMode("create");
		setFormDialogOpen(true);
	};

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
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Add Locale
				</PolarisButton>
			</div>{" "}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Locales</p>
					<p className="text-2xl font-bold mt-1">4</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Locales</p>
					<p className="text-2xl font-bold mt-1">2</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Translation Coverage</p>
					<p className="text-2xl font-bold mt-1">87%</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Default Locale</p>
					<p className="text-2xl font-bold mt-1">en-US</p>
				</Card>
			</div>
			<Card>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Locale</TableHead>
							<TableHead>Language</TableHead>
							<TableHead>Country</TableHead>
							<TableHead>Currency</TableHead>
							<TableHead>Date Format</TableHead>
							<TableHead>Translations</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{mockLocales.map((locale) => (
							<TableRow key={locale.id}>
								<TableCell>
									<div>
										<div className="font-medium">{locale.name}</div>
										<div className="text-sm text-muted-foreground font-mono">
											{locale.code}
										</div>
									</div>
								</TableCell>
								<TableCell>{locale.language}</TableCell>
								<TableCell>{locale.country}</TableCell>
								<TableCell>
									{locale.currency} ({locale.currencySymbol})
								</TableCell>
								<TableCell className="font-mono text-sm">
									{locale.dateFormat}
								</TableCell>
								<TableCell>{locale.translations.toLocaleString()}</TableCell>
								<TableCell>
									<div className="flex flex-col gap-1">
										<Badge variant={locale.isActive ? "default" : "secondary"}>
											{locale.isActive ? "Active" : "Inactive"}
										</Badge>
										{locale.isDefault && (
											<Badge variant="outline" className="text-xs">
												Default
											</Badge>
										)}
									</div>
								</TableCell>
								<TableCell className="text-right">
									<div className="flex justify-end gap-2">
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
											onClick={() => handleDelete(locale)}
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
			</Card>
			<ViewLocaleDialog
				open={viewDialogOpen}
				onOpenChange={setViewDialogOpen}
				locale={selectedLocale}
			/>
			<LocaleFormDialog
				open={formDialogOpen}
				onOpenChange={setFormDialogOpen}
				locale={selectedLocale}
				mode={formMode}
			/>
			<DeleteLocaleDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				locale={selectedLocale}
			/>
		</div>
	);
}
