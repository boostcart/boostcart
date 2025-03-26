"use client";

import { Check, ChevronsUpDown, MailPlus, Plus } from "lucide-react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MessagesSchema, MessagesSchemaType } from "@/schemas";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import type { User } from "@prisma/client";
import { cn } from "@/lib/utils";
import { newMessage } from "@/data/message";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

const NewMessage: React.FC<{ users: User[]; }> = ({ users }) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setOpen] = useState<boolean>(false);
	const router = useRouter();

	const form = useForm<MessagesSchemaType>({
		resolver: zodResolver(MessagesSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
			read: false,
			userId: undefined
		}
	});

	const onSubmit = (data: any) => {
		startTransition(() => {
			newMessage(data)
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
	}

	return (
		<Sheet open={isOpen} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button>
					<MailPlus />
					{t("dashboard.messages.newMessage.button")}
				</Button>
			</SheetTrigger>
			<SheetContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<SheetHeader>
							<SheetTitle>{t("dashboard.messages.newMessage.title")}</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col my-4 space-y-4">
							<FormField
								control={form.control}
								name="userId"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel>{t("dashboard.messages.newMessage.selectUser")}</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant="outline"
														role="combobox"
														className={cn(
															"justify-between",
															!field.value && "text-muted-foreground"
														)}
													>
														{field.value
															? users.find(
																(user) => user.name || user.email === field.value
															)?.name
															: t("dashboard.messages.newMessage.selectUser")}
														<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent className="p-0">
												<Command>
													<CommandInput placeholder={t("dashboard.customers.search")} />
													<CommandList>
														<CommandEmpty>{t("dashboard.customers.noResults")}</CommandEmpty>
														<CommandGroup>
															{users.map((user) => (
																<CommandItem
																	key={user.id}
																	value={user.id}
																	onSelect={() => {
																		form.setValue("userId", user.id);
																		form.setValue("name", user.name);
																		form.setValue("email", user.email);
																	}}
																>
																	<div className="flex flex-col">
																		<span>{user.name}</span>
																		<span className="text-muted-foreground">{user.email}</span>
																	</div>
																	<Check
																		className={cn(
																			"ml-auto",
																			user.id === field.value
																				? "opacity-100"
																				: "opacity-0"
																		)}
																	/>
																</CommandItem>
															))}
														</CommandGroup>
													</CommandList>
												</Command>
											</PopoverContent>
										</Popover>
										<FormMessage />
									</FormItem>
								)}
							/>

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
								<Button onClick={() => {
									form.reset();
									form.setValue("userId", undefined);
								}} variant="secondary" disabled={isPending}>
									{t("general.cancel")}
								</Button>
							</SheetClose>
							<Button disabled={isPending}>
								<Plus />
								{t("general.create")}
							</Button>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	)
}

export default NewMessage;