"use client";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MessagesSchema, MessagesSchemaType } from "@/schemas";
import { Pencil, SaveIcon } from "lucide-react";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { editMessage } from "@/data/message";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Message } from "@/app/generated/prisma/client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EditMessage: React.FC<{ message: Message }> = ({ message }) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setOpen] = useState<boolean>(false);
	const router = useRouter();

	const form = useForm<MessagesSchemaType>({
		resolver: zodResolver(MessagesSchema),
		defaultValues: {
			name: message.name,
			email: message.email,
			phone: message.phone || "",
			subject: message.subject,
			message: message.message,
			read: message.read,
		},
	});

	const onSubmit = (data: any) => {
		startTransition(() => {
			editMessage(message.id, data).then((callback) => {
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
		<Sheet open={isOpen} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" disabled={isPending}>
					<Pencil />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<SheetHeader>
							<SheetTitle>
								{t("dashboard.messages.editMessage.title", {
									subject: message.subject,
								})}
							</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col my-4 space-y-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("general.name")}</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={t("general.name")}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("general.email")}</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={t("general.email")}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("general.phone")}</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={t("general.phone")}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="subject"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("general.subject")}</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder={t("general.subject")}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("general.message")}</FormLabel>
										<FormControl>
											<Textarea
												{...field}
												placeholder={t("general.message")}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="read"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
										<div className="space-y-0.5">
											<FormLabel className="text-base">
												{t("dashboard.messages.markAsRead")}
											</FormLabel>
											<FormDescription>
												{t("dashboard.messages.markAsReadDescription")}
											</FormDescription>
										</div>
										<FormControl>
											<Switch
												checked={field.value}
												onCheckedChange={field.onChange}
												disabled={isPending}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<SheetFooter>
							<SheetClose asChild>
								<Button
									onClick={() => form.reset()}
									variant="secondary"
									disabled={isPending}
								>
									{t("general.cancel")}
								</Button>
							</SheetClose>
							<Button disabled={isPending}>
								<SaveIcon />
								{t("general.saveChanges")}
							</Button>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
};

export default EditMessage;
