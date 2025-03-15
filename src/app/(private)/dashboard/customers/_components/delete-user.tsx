"use client";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteUser } from "@/server/dashboard";
import { toast } from "sonner";
import { useTransition } from "react";
import { useTranslations } from "next-intl";

const DeleteUser: React.FC<{ userId: string; }> = ({ userId }) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();

	const handleDelete = async () => {
		startTransition(() => {
			deleteUser(userId)
				.then((callback) => {
					if (callback.error) {
						toast.error(t(`dashboard.errors.${callback.error}`));
					}

					if (callback.success) {
						toast.success(t(`dashboard.success.${callback.success}`));
					}
				});
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="destructiveGhost" size="icon">
					<Trash2 />
				</Button>
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
					<Button variant="destructive" onClick={() => handleDelete()} disabled={isPending}>{t("general.delete")}</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default DeleteUser;