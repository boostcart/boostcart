"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronsUpDown, Eye, Pencil } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/data-table";
import { Brand } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useTranslations } from "use-intl";
import DeleteBrand from "./delete-brand";

const BrandsTableClient: React.FC<{ brands: Brand[] }> = ({ brands }) => {
	const t = useTranslations();

	const columns: ColumnDef<Brand>[] = [
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
						onCheckedChange={(value) =>
							table.toggleAllPageRowsSelected(!!value)
						}
						aria-label="Select all"
					/>
				</div>
			),
			cell: ({ row }) => (
				<div className="flex items-center">
					<Checkbox
						variant="black"
						checked={row.getIsSelected()}
						onCheckedChange={(value) => row.toggleSelected(!!value)}
						aria-label="Select row"
					/>
				</div>
			),
			enableSorting: false,
			enableHiding: false,
		},
		{
			accessorKey: "name",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.name")}
						<ChevronsUpDown className="size-4" />
					</Button>
				);
			},
			cell: ({ row }) => {
				const brand = row.original;

				return (
					<div className="flex flex-col">
						<span>{brand.name}</span>
						<span className="text-xs text-muted-foreground">{brand.slug}</span>
					</div>
				);
			},
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
				);
			},
			cell: ({ row }) => {
				const brand = row.original;

				return (
					<Tooltip>
						<TooltipTrigger asChild>
							<Badge
								variant={brand.status === "PUBLISHED" ? "success" : "secondary"}
							>
								{brand.status === "PUBLISHED"
									? t("status.published")
									: brand.status === "HIDDEN"
										? t("status.hidden")
										: t("status.draft")}
							</Badge>
						</TooltipTrigger>
						<TooltipContent>
							{brand.status === "HIDDEN"
								? t("status.hiddenStatus")
								: brand.status === "PUBLISHED"
									? t("status.published")
									: t("status.draft")}
						</TooltipContent>
					</Tooltip>
				);
			},
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
				);
			},
			cell: ({ row }) => {
				const productsCount = row.original.products.length;

				return productsCount;
			},
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
				);
			},
			cell: ({ row }) => {
				const formattedDate = new Date(
					row.original.createdAt,
				).toLocaleDateString(t("locale"));

				return formattedDate;
			},
		},
		{
			accessorKey: "actions",
			header: t("general.actions"),
			cell: ({ row }) => {
				const brand = row.original;

				return (
					<div className="flex items-center space-x-2">
						{brand.status === "DRAFT" ? (
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
								<Link href={`/brand/${brand.slug}`}>
									<Eye />
								</Link>
							</Button>
						)}
						<Button variant="ghost" size="icon" asChild>
							<Link href={`/dashboard/brands/${brand.id}`}>
								<Pencil />
							</Link>
						</Button>
						<DeleteBrand brandId={brand.id} />
					</div>
				);
			},
			enableHiding: false,
			enableSorting: false,
		},
	];

	return (
		<DataTable
			columns={columns}
			data={brands}
			searchPlaceholder={t("dashboard.brand.search")}
			noResultsText={t("dashboard.brand.noResults")}
		/>
	);
};

export default BrandsTableClient;
