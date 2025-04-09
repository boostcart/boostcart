"use client";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { deleteCategory } from "@/data/category";
import { Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DeleteCategory: React.FC<{ categoryId: string }> = ({ categoryId }) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setOpen] = useState<boolean>(false);
	const router = useRouter();

	const handleDelete = async () => {
		startTransition(() => {
			deleteCategory(categoryId).then((callback) => {
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
				<Button variant="destructiveGhost" size="icon" disabled={isPending}>
					<Trash2 />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						{t("dashboard.category.deleteCategory.title")}
					</DialogTitle>
					<DialogDescription>
						{t("dashboard.category.deleteCategory.description")}
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="secondary" disabled={isPending}>
							{t("general.cancel")}
						</Button>
					</DialogClose>
					<Button
						variant="destructive"
						onClick={() => handleDelete()}
						disabled={isPending}
					>
						<Trash2 />
						{t("general.delete")}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteCategory;
