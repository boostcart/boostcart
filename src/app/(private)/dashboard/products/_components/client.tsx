"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronsUpDown, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useTranslations } from "use-intl";
import DeleteProduct from "./delete-product";
import { Product } from "@/types";

const ProductsTableClient: React.FC<{ products: Product[]; }> = ({ products }) => {
	const t = useTranslations();

	const columns: ColumnDef<Product>[] = [
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
			accessorKey: "defaultName",
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
				const product = row.original;

				return (
					<div className="flex items-center space-x-2">
						<Avatar className="rounded">
							<AvatarImage
								src={product.images?.find(image => image.isMain)?.url || ''}
								alt={product.defaultName}
							/>
							<AvatarFallback>
								{product.defaultName
									? product.defaultName.split(" ").length > 1
											? `${product.defaultName.split(" ")[0][0]}${product.defaultName.split(" ")[product.defaultName.split(" ").length - 1][0]}`
											: product.defaultName.substring(0, 2)
									: "??"}
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-col">
							<span>{product.defaultName}</span>
							<span className="text-xs underline text-muted-foreground hover:no-underline">
								SKU: {product.sku}
							</span>
						</div>
					</div>
				);
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
				const product = row.original;

				return (
					<div className="flex items-center space-x-2">
						<Button variant="ghost" size="icon" asChild>
							<Link href={`/dashboard/products/${product.id}`}>
								<Pencil />
							</Link>
						</Button>
						<DeleteProduct productId={product.id} />
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
			data={products}
			searchPlaceholder={t("dashboard.products.search")}
			searchFor="defaultName"
			noResultsText={t("dashboard.products.noResults")}
		/>
	);
};

export default ProductsTableClient;
