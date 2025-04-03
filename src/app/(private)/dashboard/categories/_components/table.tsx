"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Fragment, useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Category } from "@/types";
import { Input } from "@/components/ui/input";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	searchPlaceholder?: string;
	searchFor?: string;
	noResultsText?: string;
	expandedRows?: Record<string, boolean>;
	setExpandedRows?: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

export function DataTable<TData, TValue>({
	columns,
	data,
	searchPlaceholder = "Search...",
	searchFor = "name",
	noResultsText = "No results found.",
	expandedRows = {},
	setExpandedRows,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = useState({});
	const [nestedExpanded, setNestedExpanded] = useState<Record<string, boolean>>({});

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	const toggleNestedExpanded = (id: string) => {
		setNestedExpanded(prev => ({
			...prev,
			[id]: !prev[id]
		}));
	};

	// Helper function to render nested subcategories
	const renderSubcategories = (category: Category, level: number = 1) => {
		if (!expandedRows[category.id] || !category.subcategories?.length) return null;

		return category.subcategories.map((subcategory) => (
			<Fragment key={`subcategory-${subcategory.id}`}>
				<TableRow className={`nested-row level-${level}`}>
					<TableCell colSpan={1} className="p-0"></TableCell>
					<TableCell>
						{subcategory.subcategories?.length > 0 && (
							<Button
								variant="ghost"
								size="sm"
								className="p-0 h-6 w-6 ml-4"
								onClick={() => toggleNestedExpanded(subcategory.id)}
							>
								{nestedExpanded[subcategory.id] ?
									<ChevronDown className="size-4" /> :
									<ChevronRight className="size-4" />
								}
							</Button>
						)}
					</TableCell>
					<TableCell>
						<div className="ml-4 flex flex-col">
							<span>{subcategory.defaultName}</span>
							<span className="text-xs text-muted-foreground">{subcategory.slug}</span>
						</div>
					</TableCell>
					<TableCell>{subcategory.subcategories?.length || 0}</TableCell>
					<TableCell>
						{subcategory.status === "PUBLISHED" ? "Published" :
							(subcategory.status === "HIDDEN" ? "Hidden" : "Draft")}
					</TableCell>
					<TableCell>{subcategory.products?.length || 0}</TableCell>
					<TableCell>
						{new Date(subcategory.createdAt).toLocaleDateString()}
					</TableCell>
					<TableCell>
						<div className="flex items-center space-x-2">
							<Button variant="ghost" size="icon">View</Button>
							<Button variant="ghost" size="icon">Edit</Button>
							<Button variant="ghost" size="icon">Delete</Button>
						</div>
					</TableCell>
				</TableRow>

				{/* Render sub-subcategories if this subcategory is expanded */}
				{nestedExpanded[subcategory.id] && subcategory.subcategories?.map((subSubcategory) => (
					<TableRow key={`subsubcategory-${subSubcategory.id}`} className={`nested-row level-${level + 1}`}>
						<TableCell colSpan={2} className="p-0"></TableCell>
						<TableCell>
							<div className="ml-8 flex flex-col">
								<span>{subSubcategory.defaultName}</span>
								<span className="text-xs text-muted-foreground">{subSubcategory.slug}</span>
							</div>
						</TableCell>
						<TableCell>{subSubcategory.subcategories?.length || 0}</TableCell>
						<TableCell>
							{subSubcategory.status === "PUBLISHED" ? "Published" :
								(subSubcategory.status === "HIDDEN" ? "Hidden" : "Draft")}
						</TableCell>
						<TableCell>{subSubcategory.products?.length || 0}</TableCell>
						<TableCell>
							{new Date(subSubcategory.createdAt).toLocaleDateString()}
						</TableCell>
						<TableCell>
							<div className="flex items-center space-x-2">
								<Button variant="ghost" size="icon">View</Button>
								<Button variant="ghost" size="icon">Edit</Button>
								<Button variant="ghost" size="icon">Delete</Button>
							</div>
						</TableCell>
					</TableRow>
				))}
			</Fragment>
		));
	};

	return (
		<div>
			<div className="flex items-center py-4">
				<Input
					placeholder={searchPlaceholder}
					value={(table.getColumn(searchFor)?.getFilterValue() as string) ?? ""}
					onChange={(event) =>
						table.getColumn(searchFor)?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
			</div>
			<div className="rounded-md border overflow-hidden">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id} className={header.id === "expander" ? "w-6" : ""}>
										{header.isPlaceholder
											? null
											: flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<Fragment key={`row-${row.id}`}>
									<TableRow
										data-state={row.getIsSelected() && "selected"}
									>
										{row.getVisibleCells().map((cell) => (
											<TableCell key={cell.id}>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</TableCell>
										))}
									</TableRow>
									{renderSubcategories(row.original as Category)}
								</Fragment>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									{noResultsText}
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</Button>
			</div>

			<style jsx global>{`
        .nested-row {
          background-color: #f9fafb;
        }
        .nested-row.level-2 {
          background-color: #f3f4f6;
        }
      `}</style>
		</div>
	);
}
