"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import DeleteUser from "./delete-user";
import Link from "next/link";
import { Pencil } from "lucide-react";
import type { User } from "@prisma/client";
import { UsersTable } from "./table";
import { useTranslations } from "use-intl";

const UsersTableClient: React.FC<{ users: User[] }> = ({ users }) => {
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
					return t("general.user");
				}

				if (row.original.role === "ADMIN") {
					return t("general.admin");
				}

				if (row.original.role === "SUPER_ADMIN") {
					return t("general.superAdmin");
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
				const userId = row.original.id;
				
				return (
					<div className="flex space-x-2">
						<Button variant="ghost" size="icon">
							<Pencil />
						</Button>
						<DeleteUser userId={userId} />
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