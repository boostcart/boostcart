"use client";

import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
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
			accessorKey: "name",
			header: t("general.name")
		},
		{
			accessorKey: "email",
			header: t("general.email"),
			cell: ({ row }) => {
				return (
					<Link href={`mailto:${row.original.email}`} className="underline hover:no-underline">
						{row.original.email}
					</Link>
				)
			}
		},
		{
			accessorKey: "role",
			header: t("general.role"),
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
			header: t("general.createdAt"),
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
			}
		}
	];

	return (
		<UsersTable columns={columns} data={users} />
	)
}

export default UsersTableClient;