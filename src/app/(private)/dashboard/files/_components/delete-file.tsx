"use client";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const DeleteFile: React.FC<{ fileId: string; }> = ({ fileId }) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setOpen] = useState<boolean>(false);
	const router = useRouter();

	const handleDelete = async () => {
		startTransition(async () => {
			await fetch('https://api.uploadthing.com/v6/deleteFiles', {
				method: 'POST',
				headers: {
					'X-Uploadthing-Api-Key': 'sk_live_ae0dad1924b6a022c9cd50275355d0581e3f74acd10be68339c44d8c416cfd6f',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					fileKeys: [fileId],
				})
			}).then(async (res) => {
				const data = await res.json();

				if (data.success) {
					toast.success(t(`dashboard.success.deleted_file`));
					router.refresh();
					setOpen(false);
				} else {
					toast.error(t(`dashboard.errors.something_went_wrong`));
				}
			})
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
					<DialogTitle>{t("dashboard.files.deleteFile.title")}</DialogTitle>
					<DialogDescription>{t("dashboard.files.deleteFile.description")}</DialogDescription>
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

export default DeleteFile;