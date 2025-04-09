"use client";

import {
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	ColumnDef,
	ColumnFiltersState,
	Row,
	SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Eye, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { Input } from "@/components/ui/input";
import { Category } from "@/types";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	searchPlaceholder: string;
	searchFor: string;
	noResultsText: string;
	expandedRows: Record<string, boolean>;
	// setExpandedRows: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
	getNestedRowId: (parentId: string, childId: string) => string;
}

export function DataTable<TData, TValue>({
	columns,
	data,
	searchPlaceholder,
	searchFor,
	noResultsText,
	expandedRows,
	// setExpandedRows,
	getNestedRowId,
}: DataTableProps<TData, TValue>) {
	const t = useTranslations();
	const router = useRouter();
	const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters,
		},
		meta: {
			expandedRows,
		},
	});

	// Function to render a row and its potentially nested children recursively
	const renderRowRecursive = (row: Row<TData>) => {
		const rowData = row.original as unknown as Category;
		const rows = [
			<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
				{row.getVisibleCells().map((cell) => (
					<TableCell key={cell.id}>
						{flexRender(cell.column.columnDef.cell, cell.getContext())}
					</TableCell>
				))}
			</TableRow>,
		];

		// If this row is expanded and has subcategories, render them
		if (
			expandedRows[row.id] &&
			rowData.subcategories &&
			rowData.subcategories.length > 0
		) {
			rowData.subcategories.forEach((subcategory: Category) => {
				// Create a composite ID for the nested row
				const nestedRowId = getNestedRowId(row.id, subcategory.id);

				// Create a dummy row for the subcategory
				const subRow = {
					id: nestedRowId,
					original: subcategory,
					getIsSelected: () => false,
					toggleSelected: () => {},
					getVisibleCells: () =>
						row.getVisibleCells().map((cell) => ({
							...cell,
							id: `${nestedRowId}:${cell.id}`,
							getContext: () => ({
								...cell.getContext(),
								row: {
									id: nestedRowId,
									original: subcategory,
									getIsSelected: () => false,
									toggleSelected: () => {},
								},
							}),
						})),
				} as unknown as Row<TData>;

				// Recursively render this row and its potential children
				rows.push(...renderRowRecursive(subRow));
			});
		}

		return rows;
	};

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col gap-4 w-fit md:flex-row md:items-center">
				<Input
					placeholder={searchPlaceholder}
					value={(table.getColumn(searchFor)?.getFilterValue() as string) ?? ""}
					onChange={(event) => {
						const value = event.target.value;
						table.getColumn(searchFor)?.setFilterValue(value);
					}}
					className="w-full max-w-sm sm:w-sm"
				/>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="w-fit">
							<Eye />
							{t("general.columnsVisibility")}
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
									>
										{column.id}
									</DropdownMenuCheckboxItem>
								);
							})}
					</DropdownMenuContent>
				</DropdownMenu>

				<Button
					onClick={() => {
						router.refresh();
						setIsRefreshing(true);
						setTimeout(() => setIsRefreshing(false), 1000);
					}}
					variant="outline"
					className={isRefreshing ? "[&_svg]:animate-spin" : ""}
					disabled={isRefreshing}
				>
					<RefreshCw />
					{t("general.refresh")}
				</Button>
			</div>

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table
								.getRowModel()
								.rows.map((row) => renderRowRecursive(row))
								.flat()
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									{noResultsText}
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			<DataTablePagination table={table} />
		</div>
	);
}
