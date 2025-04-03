"use client";

import { ChevronRight, ChevronsUpDown, Eye } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Category } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./table";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

const CategoriesTableClient: React.FC<{ categories: Category[]; }> = ({ categories }) => {
	const t = useTranslations();
	const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

	const toggleRowExpanded = (rowId: string) => {
		setExpandedRows(prev => ({
			...prev,
			[rowId]: !prev[rowId]
		}));
	};

	// Helper to create a composite ID for nested categories
	const getNestedRowId = (parentId: string, childId: string) => `${parentId}:${childId}`;

	const columns: ColumnDef<Category>[] = [
		{
			id: "expander",
			header: () => null,
			cell: ({ row }) => {
				const category = row.original;
				const hasSubcategories = category?.subcategories && category.subcategories.length > 0;

				if (!hasSubcategories) return null;

				return (
					<Button
						variant="ghost"
						size="sm"
						className="p-0 h-6 w-6"
						onClick={(e) => {
							e.stopPropagation();
							toggleRowExpanded(row.id);
						}}
					>
						<ChevronRight className={`size-4 transition-all duration-200 ${expandedRows[row.id] ? "rotate-90" : "rotate-0"}`} />
					</Button>
				)
			},
			enableSorting: false,
			enableHiding: false,
		},
		{
			id: "select",
			header: ({ table }) => (
				<div className="flex items-center">
					<Checkbox
						variant="black"
						checked={
							table.getIsAllPageRowsSelected() ||
							(table.getIsSomePageRowsSelected() && "indeterminate")
						}
						onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
						aria-label="Select all"
					/>
				</div>
			),
			cell: ({ row }) => {
				// Calculate nesting level
				const nestingLevel = row.id.split(':').length - 1;

				// Only show checkbox if nesting level is 1
				if (nestingLevel === 0) {
					return (
						<div className="flex items-center">
							<Checkbox
								variant="black"
								checked={row.getIsSelected()}
								onCheckedChange={(value) => row.toggleSelected(!!value)}
								aria-label="Select row"
							/>
						</div>
					);
				}

				// Return empty div otherwise
				return <div className="w-4"></div>;
			},
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "defaultName",
			header: ({ column }) => (
				<Button
					variant="invisible"
					className="h-auto pl-0 w-fit"
					onClick={() => column.toggleSorting()}
				>
					{t("general.name")}
					<ChevronsUpDown className="size-4" />
				</Button>
			),
			cell: ({ row }) => {
				const category = row.original;

				return (
					<div className="flex flex-col">
						<span>{category.defaultName}</span>
						<span className="text-xs text-muted-foreground">{category.slug}</span>
					</div>
				);
			}
		},
		{
			accessorKey: "status",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.status")}
						<ChevronsUpDown className="size-4" />
					</Button>
				)
			},
			cell: ({ row }) => {
				const category = row.original;

				return (
					<Tooltip>
						<TooltipTrigger asChild>
							<Badge variant={category.status === "PUBLISHED" ? "success" : "secondary"}>
								{category.status === "PUBLISHED" ? t("status.published") : (category.status === "HIDDEN" ? t("status.hidden") : t("status.draft"))}
							</Badge>
						</TooltipTrigger>
						<TooltipContent>
							{category.status === "HIDDEN" ? t("status.hiddenStatus") : (category.status === "PUBLISHED" ? t("status.published") : t("status.draft"))}
						</TooltipContent>
					</Tooltip>
				)
			}
		},
		{
			accessorKey: "products",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.products")}
						<ChevronsUpDown className="size-4" />
					</Button>
				)
			},
			cell: ({ row }) => {
				const productsCount = row.original.products?.length || 0;

				return productsCount;
			}
		},
		{
			accessorKey: "createdAt",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.createdAt")}
						<ChevronsUpDown className="size-4" />
					</Button>
				)
			},
			cell: ({ row }) => {
				const formattedDate = new Date(row.original.createdAt).toLocaleDateString(t("locale"));

				return formattedDate;
			}
		},
		{
			accessorKey: "actions",
			header: t("general.actions"),
			cell: ({ row }) => {
				const category = row.original;

				return (
					<div className="flex items-center space-x-2">
						{category.status === "DRAFT" ? (
							<Tooltip>
								<TooltipTrigger>
									<div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pointer-events-none opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 size-10">
										<Eye />
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<p>{t("status.previewNotAvailable")}</p>
								</TooltipContent>
							</Tooltip>
						) : (
							<Button variant="ghost" size="icon" asChild>
								<Link href={`/category/${category.slug}`}>
									<Eye />
								</Link>
							</Button>
						)}
					</div>
				)
			},
			enableHiding: false,
			enableSorting: false,
		}
	];

	return (
		<DataTable
			columns={columns}
			data={categories}
			searchPlaceholder={t("dashboard.category.search")}
			searchFor="defaultName"
			noResultsText={t("dashboard.category.noResults")}
			expandedRows={expandedRows}
			// setExpandedRows={setExpandedRows}
			getNestedRowId={getNestedRowId}
		/>
	)
}

export default CategoriesTableClient;