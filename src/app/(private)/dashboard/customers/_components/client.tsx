"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronsUpDown, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import DeleteUser from "./delete-user";
import EditUser from "./edit-user";
import Link from "next/link";
import type { User } from "@prisma/client";
import { UsersTable } from "./table";
import { useTranslations } from "use-intl";

const UsersTableClient: React.FC<{ users: User[]; currentUser: User; }> = ({ users, currentUser }) => {
	const t = useTranslations();

	const columns: ColumnDef<User>[] = [
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
			accessorKey: "email",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.roles.user")}
						<ChevronsUpDown className="size-4" />
					</Button>
				)
			},
			cell: ({ row }) => {
				const user = row.original;

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
			accessorKey: "role",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.role")}
						<ChevronsUpDown className="size-4" />
					</Button>
				)
			},
			cell: ({ row }) => {
				if (row.original.role === "USER") {
					return t("general.roles.user");
				}

				if (row.original.role === "ADMIN") {
					return t("general.roles.admin");
				}

				if (row.original.role === "SUPER_ADMIN") {
					return t("general.roles.superAdmin");
				}
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
				const user = row.original;

				if (currentUser.id === user.id || (currentUser.role === "ADMIN" && user.role === "SUPER_ADMIN")) {
					return (
						<div className="flex items-center space-x-2">
							<Button variant="ghost" size="icon" disabled>
								<Pencil />
							</Button>
							<Button variant="destructiveGhost" size="icon" disabled>
								<Trash2 />
							</Button>
						</div>
					)
				}

				return (
					<div className="flex items-center space-x-2">
						<EditUser user={user} />
						<DeleteUser userId={user.id} />
					</div>
				)
			},
			enableHiding: false,
			enableSorting: false,
		},
	];

	return (
		<UsersTable columns={columns} data={users} />
	)
}

export default UsersTableClient;