"use client";

import { Card, CardContent } from "@/components/ui/card";
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
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	DashboardCustomersNewUserSchema,
	DashboardCustomersNewUserSchemaType,
} from "@/schemas";

import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Switch } from "@/components/ui/switch";
import { createUser } from "@/data/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function CreateCustomerPage() {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<DashboardCustomersNewUserSchemaType>({
		resolver: zodResolver(DashboardCustomersNewUserSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			role: "USER",
			marketingEmails: false,
		},
	});

	const onSubmit = (data: DashboardCustomersNewUserSchemaType) => {
		startTransition(() => {
			createUser(data).then((callback) => {
				if (callback.error) {
					toast.error(t(`dashboard.errors.${callback.error}`));
				}

				if (callback.success) {
					toast.success(t(`dashboard.success.${callback.success}`));
					form.reset();
					router.push("/dashboard/customers");
				}
			});
		});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col space-y-4"
			>
				<Header
					title={t("dashboard.customers.newUser.title")}
					description={t("dashboard.customers.newUser.description")}
				>
					<Button
						variant="secondary"
						type="button"
						onClick={() => {
							form.reset();
							router.back();
						}}
						disabled={isPending}
					>
						{t("general.cancel")}
					</Button>
					<Button type="submit" disabled={isPending}>
						<Plus />
						{t("general.create")}
					</Button>
				</Header>

				<div className="flex flex-col space-y-4">
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
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue
												placeholder={t(
													"dashboard.customers.newUser.rolePlaceholder",
												)}
											>
												{t(`general.roles.${field.value.toLowerCase()}`)}
											</SelectValue>
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="USER">
											{t("general.roles.user")}
										</SelectItem>
										<SelectItem value="ADMIN">
											{t("general.roles.admin")}
										</SelectItem>
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
							<FormItem>
								<Card>
									<CardContent className="flex flex-col p-6 space-y-4">
										<div className="grid items-start grid-cols-1 sm:grid-cols-2">
											<div className="flex flex-col">
												<FormLabel className="text-base font-medium">
													{t("dashboard.customers.marketingEmails.title")}
												</FormLabel>
												<FormDescription className="text-sm text-muted-foreground">
													{t("dashboard.customers.marketingEmails.description")}
												</FormDescription>
											</div>
											<div>
												<FormControl>
													<Switch
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
											</div>
										</div>
									</CardContent>
								</Card>
							</FormItem>
						)}
					/>
				</div>
			</form>
		</Form>
	);
}
