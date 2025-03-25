"use client";

import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Message } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { toggleMessageStatus } from "@/data/message";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const ViewMessage: React.FC<{ message: Message; }> = ({ message }) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setOpen] = useState<boolean>(false);
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
						setOpen(false);
					}
				});
		});
	}

	return (
		<Sheet open={isOpen} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<Eye />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>{message.subject}</SheetTitle>
				</SheetHeader>
				<div className="flex flex-col my-4 space-y-4">
					<div>
						<Label>{t("general.name")}</Label>
						<Input
							value={message.name}
							placeholder={t("general.name")}
							readOnly
						/>
					</div>

					<div>
						<Label>{t("general.email")}</Label>
						<Input
							value={message.email}
							placeholder={t("general.email")}
							readOnly
						/>
					</div>

					<div>
						<Label>{t("general.phone")}</Label>
						<Input
							value={message.phone || ""}
							placeholder={t("general.phone")}
							readOnly
						/>
					</div>

					<div>
						<Label>{t("general.subject")}</Label>
						<Input
							value={message.subject}
							placeholder={t("general.subject")}
							readOnly
						/>
					</div>

					<div>
						<Label>{t("general.message")}</Label>
						<Textarea
							value={message.message}
							placeholder={t("general.message")}
							readOnly
						/>
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button variant="secondary" disabled={isPending}>
							{t("general.close")}
						</Button>
					</SheetClose>
					<Button onClick={() => handleRead(message.id)} disabled={isPending}>
						{message.read ? t("dashboard.messages.markAsUnread") : t("dashboard.messages.markAsRead")}
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet >
	)
}

export default ViewMessage;