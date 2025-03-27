import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

import { Button } from "@/components/ui/button"
import { Table } from "@tanstack/react-table"
import { useTranslations } from "next-intl"

interface DataTablePaginationProps<TData> {
	table: Table<TData>
}

export function DataTablePagination<TData>({
	table,
}: DataTablePaginationProps<TData>) {
	const t = useTranslations();

	return (
		<div className="flex items-center justify-between px-2">
			<div className="text-sm text-muted-foreground">
				{t("general.pagination.selectedRows", {
					selected: table.getFilteredSelectedRowModel().rows.length,
					total: table.getFilteredRowModel().rows.length,
				})}
			</div>
			<div className="flex items-center space-x-6 lg:space-x-8">
				<div className="flex items-center space-x-2">
					<p className="text-sm text-muted-foreground">{t("general.pagination.rowsPerPage")}</p>
					<Select
						value={`${table.getState().pagination.pageSize}`}
						onValueChange={(value) => {
							table.setPageSize(Number(value))
						}}
					>
						<SelectTrigger className="h-8 w-[70px]">
							<SelectValue placeholder={table.getState().pagination.pageSize} />
						</SelectTrigger>
						<SelectContent side="top">
							{[5, 10, 15, 20, 30, 50].map((pageSize) => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="flex w-fit items-center justify-center text-sm">
					{t("general.pagination.page", {
						current: table.getState().pagination.pageIndex + 1,
						total: table.getPageCount(),
					})}
				</div>
				<div className="flex items-center space-x-2">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="outline"
								className="hidden w-8 h-8 p-0 lg:flex"
								onClick={() => table.setPageIndex(0)}
								disabled={!table.getCanPreviousPage()}
							>
								<span className="sr-only">{t("general.pagination.goToFirstPage")}</span>
								<ChevronsLeft />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>{t("general.pagination.goToFirstPage")}</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="outline"
								className="w-8 h-8 p-0"
								onClick={() => table.previousPage()}
								disabled={!table.getCanPreviousPage()}
							>
								<span className="sr-only">{t("general.pagination.goToPrevPage")}</span>
								<ChevronLeft />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>{t("general.pagination.goToPrevPage")}</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="outline"
								className="w-8 h-8 p-0"
								onClick={() => table.nextPage()}
								disabled={!table.getCanNextPage()}
							>
								<span className="sr-only">{t("general.pagination.goToNextPage")}</span>
								<ChevronRight />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>{t("general.pagination.goToNextPage")}</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="outline"
								className="hidden w-8 h-8 p-0 lg:flex"
								onClick={() => table.setPageIndex(table.getPageCount() - 1)}
								disabled={!table.getCanNextPage()}
							>
								<span className="sr-only">{t("general.pagination.goToLastPage")}</span>
								<ChevronsRight />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>{t("general.pagination.goToLastPage")}</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</div>
	)
}
