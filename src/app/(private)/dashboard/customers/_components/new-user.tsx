"use client";

import { DashboardCustomersNewUserSchema, DashboardCustomersNewUserSchemaType } from "@/schemas";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

const NewUser = () => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();

	const form = useForm<DashboardCustomersNewUserSchemaType>({
		resolver: zodResolver(DashboardCustomersNewUserSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			role: "USER",
			marketingEmails: false,
		}
	});

	const onSubmit = (data: DashboardCustomersNewUserSchemaType) => {
		startTransition(() => {
			console.log(data);
		});
	}

	return (
		<Sheet >
			<SheetTrigger asChild>
				<Button>
					{t("dashboard.customers.newUser.button")}
				</Button>
			</SheetTrigger>
			<SheetContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<SheetHeader>
							<SheetTitle>{t("dashboard.customers.newUser.title")}</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col space-y-4 my-4">
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
											<Input
												{...field}
												placeholder={t("general.password")}
												type="password"
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
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder={t("dashboard.customers.newUser.rolePlaceholder")}>{t(`general.roles.${field.value.toLowerCase()}`)}</SelectValue>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="USER">{t("general.roles.user")}</SelectItem>
												<SelectItem value="ADMIN">{t("general.roles.admin")}</SelectItem>
												<SelectItem value="SUPER_ADMIN">{t("general.roles.superAdmin")}</SelectItem>
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
									<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
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
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<SheetFooter>
							<SheetClose asChild>
								<Button variant="secondary" type="button" onClick={() => form.reset()} disabled={isPending}>
									{t("general.cancel")}
								</Button>
							</SheetClose>
							<Button type="submit" disabled={isPending}>
								{t("general.create")}
							</Button>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	)
}

export default NewUser;