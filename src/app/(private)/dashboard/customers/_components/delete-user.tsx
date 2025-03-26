"use client";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteUser } from "@/data/user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const DeleteUser: React.FC<{ userId: string; }> = ({ userId }) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setOpen] = useState<boolean>(false);
	const router = useRouter();

	const handleDelete = async () => {
		startTransition(() => {
			deleteUser(userId)
				.then((callback) => {
					if (callback.error) {
						toast.error(t(`dashboard.errors.${callback.error}`));
					}

					if (callback.success) {
						toast.success(t(`dashboard.success.${callback.success}`));
						router.refresh();
						setOpen(false);
					}
				});
		});
	};

	return (
		<Dialog open={isOpen} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="destructiveGhost" size="icon" disabled={isPending}>
							<Trash2 />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>{t("dashboard.customers.deleteUser.tooltip")}</p>
					</TooltipContent>
				</Tooltip>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{t("dashboard.customers.deleteUser.title")}</DialogTitle>
					<DialogDescription>{t("dashboard.customers.deleteUser.description")}</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="secondary" disabled={isPending}>{t("general.cancel")}</Button>
					</DialogClose>
					<Button variant="destructive" onClick={() => handleDelete()} disabled={isPending}>
						<Trash2 />
						{t("general.delete")}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default DeleteUser;