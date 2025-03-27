"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronsUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import DeleteMessage from "./delete-message";
import EditMessage from "./edit-message";
import Link from "next/link";
import type { Message } from "@prisma/client";
import { MessagesTable } from "./table";
import ViewMessage from "./view-message";
import { toast } from "sonner";
import { toggleMessageStatus } from "@/data/message";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useTranslations } from "use-intl";

const MessagesTableClient: React.FC<{ messages: Message[]; }> = ({ messages }) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const handleRead = (messageId: string) => {
		startTransition(() => {
			toggleMessageStatus(messageId)
				.then((callback) => {
					if (callback.error) {
						toast.error(t(`dashboard.error.${callback.error}`));
					}

					if (callback.success) {
						toast.success(t(`dashboard.success.${callback.success}`));
						router.refresh();
					}
				});
		});
	}

	const columns: ColumnDef<Message>[] = [
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
			accessorKey: "email",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.email")}
						<ChevronsUpDown className="size-4" />
					</Button>
				)
			},
			cell: ({ row }) => {
				return (
					<Link href={`mailto:${row.original.email}`} className="underline hover:no-underline">
						{row.original.email}
					</Link>
				)
			}
		},
		{
			accessorKey: "subject",
			header: ({ column }) => {
				return (
					<Button
						variant="invisible"
						className="h-auto pl-0 w-fit"
						onClick={() => column.toggleSorting()}
					>
						{t("general.subject")}
						<ChevronsUpDown className="size-4" />
					</Button>
				)
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
				)
			},
			cell: ({ row }) => {
				const formattedDate = new Date(row.original.createdAt).toLocaleDateString(t("locale"));

				return formattedDate;
			}
		},
		{
			accessorKey: "read",
			header: t("general.status"),
			cell: ({ row }) => {
				const message = row.original;

				return (
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								onClick={() => handleRead(message.id)}
								disabled={isPending}
								variant="invisible"
							>
								<Badge variant={message.read ? "success" : "destructive"}>
									{message.read ? t("general.read") : t("general.unread")}
								</Badge>
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							{message.read ? t("dashboard.messages.markAsUnread") : t("dashboard.messages.markAsRead")}
						</TooltipContent>
					</Tooltip>
				)
			}
		},
		{
			accessorKey: "actions",
			header: t("general.actions"),
			cell: ({ row }) => {
				const message = row.original;

				return (
					<div className="flex items-center space-x-2">
						<ViewMessage message={message} />
						<EditMessage message={message} />
						<DeleteMessage messageId={message.id} />
					</div>
				)
			},
			enableHiding: false,
			enableSorting: false,
		}
	];

	return (
		<MessagesTable columns={columns} data={messages} />
	)
}

export default MessagesTableClient;