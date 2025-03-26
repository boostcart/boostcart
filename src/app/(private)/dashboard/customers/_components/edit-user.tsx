"use client";

import { DashboardCustomersEditUserSchema, DashboardCustomersEditUserSchemaType } from "@/schemas";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Pencil, SaveIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Switch } from "@/components/ui/switch";
import type { User } from "@prisma/client";
import { editUser } from "@/data/user";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

const EditUser: React.FC<{ user: User; }> = ({ user }) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setOpen] = useState<boolean>(false);
	const router = useRouter();

	const form = useForm<DashboardCustomersEditUserSchemaType>({
		resolver: zodResolver(DashboardCustomersEditUserSchema),
		defaultValues: {
			name: user.name,
			email: user.email,
			password: "",
			role: user.role,
			marketingEmails: user.marketingEmails,
		}
	});

	const onSubmit = (data: any) => {
		startTransition(() => {
			editUser(user.id, data)
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
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="ghost" size="icon" disabled={isPending}>
							<Pencil />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>{t("dashboard.customers.editUser.tooltip")}</p>
					</TooltipContent>
				</Tooltip>
			</SheetTrigger>
			<SheetContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<SheetHeader>
							<SheetTitle>{t("dashboard.customers.editUser.title", { userName: user.name })}</SheetTitle>
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
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("general.password")}</FormLabel>
										<FormControl>
											<PasswordInput
												{...field}
												placeholder={t("general.password")}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="role"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("general.role")}</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder={t("dashboard.customers.newUser.rolePlaceholder")}>{t(`general.roles.${field.value.toLowerCase()}`)}</SelectValue>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="USER">{t("general.roles.user")}</SelectItem>
												<SelectItem value="ADMIN">{t("general.roles.admin")}</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="marketingEmails"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center justify-between p-4 border rounded-lg">
										<div className="space-y-0.5">
											<FormLabel className="text-base">
												{t("dashboard.customers.marketingEmails.title")}
											</FormLabel>
											<FormDescription>
												{t("dashboard.customers.marketingEmails.description")}
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
								<Button onClick={() => form.reset()} variant="secondary" disabled={isPending}>
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
	)
}

export default EditUser;