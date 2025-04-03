"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronsUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import DeleteFile from "./delete-file";
import { UploadedFile } from "../page";
import ViewFile from "./view-file";
import { useTranslations } from "use-intl";

const FilesTableClient: React.FC<{ files: UploadedFile[]; }> = ({ files }) => {
	const t = useTranslations();

	const columns: ColumnDef<UploadedFile>[] = [
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
				)
			}
		},
		{
			accessorKey: "size",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.size")}
						<ChevronsUpDown className="size-4" />
					</Button>
				)
			},
			cell: ({ row }) => {
				const sizeInMB = (row.original.size / 1024 / 1024).toFixed(2);
				return `${sizeInMB} MB`;
			}
		},
		{
			accessorKey: "uploadedAt",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.uploadedAt")}
						<ChevronsUpDown className="size-4" />
					</Button>
				)
			},
			cell: ({ row }) => {
				const formattedDate = new Date(row.original.uploadedAt).toLocaleDateString(t("locale"));

				return formattedDate;
			}
		},
		{
			accessorKey: "actions",
			header: t("general.actions"),
			cell: ({ row }) => {
				const file = row.original;

				return (
					<div className="flex items-center space-x-2">
						<ViewFile file={file} />
						<DeleteFile fileId={file.key} />
					</div>
				)
			},
			enableHiding: false,
			enableSorting: false,
		},
	];

	return (
		<DataTable
			columns={columns}
			data={files}
			searchPlaceholder={t("dashboard.files.search")}
			noResultsText={t("dashboard.files.noResults")}
		/>
	)
}

export default FilesTableClient;