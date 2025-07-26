"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { userChangeDetails } from "@/data/user";
import { AccountDetailsChangeSchema, AccountDetailsChangeSchemaType } from "@/schemas";
import { User } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SaveIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface AccountDetailsChangeProps {
	user: User;
}

export default function AccountDetailsChange({ user }: AccountDetailsChangeProps) {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<AccountDetailsChangeSchemaType>({
		resolver: zodResolver(AccountDetailsChangeSchema),
		defaultValues: {
			name: user.name,
			email: user.email,
		},
	});

	const onSubmit = async (data: AccountDetailsChangeSchemaType) => {
		startTransition(() => {
			userChangeDetails(data)
				.then((result) => {
					if (result.error) {
						toast.error(t(`errors.${result.error}`));
					} else {
						toast.success(t("account.detailsChange.success"));
						router.refresh();
					}
				})
				.catch((error) => {
					toast.error(t("general.errors.generic"));
					console.error("Error changing user details:", error);
				});
		});
	}

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col">
				<h2 className="text-lg font-semibold">{t("account.detailsChange.title")}</h2>
				<p className="text-sm text-muted-foreground">{t("account.detailsChange.description")}</p>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter your name" {...field} disabled={isPending} />
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
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Enter your email" {...field} disabled={isPending} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex justify-end flex-row space-x-2">
						<Button type="submit" disabled={isPending}>
							<SaveIcon />
							<span>{t("general.saveChanges")}</span>
						</Button>

						<Button type="reset" variant="outline" onClick={() => form.reset()} disabled={isPending}>
							{t("general.cancel")}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}