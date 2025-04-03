"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronsUpDown, Eye } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import DeletePost from "./delete-post";
import EditPost from "./edit-post";
import Link from "next/link";
import { Post } from "@/types";
import { useTranslations } from "use-intl";

const PostsTableClient: React.FC<{ posts: Post[]; }> = ({ posts }) => {
	const t = useTranslations();

	const columns: ColumnDef<Post>[] = [
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
			accessorKey: "defaultTitle",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.title")}
						<ChevronsUpDown className="size-4" />
					</Button>
				)
			},
			cell: ({ row }) => {
				const post = row.original;

				return (
					<div className="flex flex-col">
						<span>{post.defaultTitle}</span>
						<span className="text-xs text-muted-foreground">{post.slug}</span>
					</div>
				)
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
				const post = row.original;

				return (
					<Tooltip>
						<TooltipTrigger asChild>
							<Badge variant={post.status === "PUBLISHED" ? "success" : "secondary"}>
								{post.status === "PUBLISHED" ? t("status.published") : (post.status === "HIDDEN" ? t("status.hidden") : t("status.draft"))}
							</Badge>
						</TooltipTrigger>
						<TooltipContent>
							{post.status === "HIDDEN" ? t("status.hiddenStatus") : (post.status === "PUBLISHED" ? t("status.published") : t("status.draft"))}
						</TooltipContent>
					</Tooltip>
				)
			}
		},
		{
			accessorKey: "user",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.author")}
						<ChevronsUpDown className="size-4" />
					</Button>
				)
			},
			cell: ({ row }) => {
				const user = row.original.user;

				return (
					<div className="flex items-center space-x-2">
						<Avatar>
							<AvatarImage
								src={user.image as string}
								alt={user.name as string}
							/>
							<AvatarFallback>
								{user.name ?
									user.name.split(' ').length > 1
										? `${user.name.split(' ')[0][0]}${user.name.split(' ')[user.name.split(' ').length - 1][0]}`
										: user.name.substring(0, 2)
									: '??'}
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-col">
							<span>{user.name}</span>
							<Link
								href={`mailto:${user.email}`}
								className="text-xs text-muted-foreground underline hover:no-underline"
							>
								{user.email}
							</Link>
						</div>
					</div>
				)
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
				const post = row.original;

				return (
					<div className="flex items-center space-x-2">
						{post.status === "DRAFT" ? (
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
								<Link href={`/blog/${post.slug}`}>
									<Eye />
								</Link>
							</Button>
						)}
						<EditPost post={post} />
						<DeletePost postId={post.id} />
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
			data={posts}
			searchPlaceholder={t("dashboard.blog.search")}
			searchFor="defaultTitle"
			noResultsText={t("dashboard.blog.noResults")}
		/>
	)
}

export default PostsTableClient;