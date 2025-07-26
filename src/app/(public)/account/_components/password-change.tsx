"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { userChangePassword } from "@/data/user";
import { AccountPasswordChangeSchema, AccountPasswordChangeSchemaType } from "@/schemas";
import { User } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SaveIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface AccountPasswordChangeProps {
	user: User;
}

export default function AccountPasswordChange({ user }: AccountPasswordChangeProps) {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<AccountPasswordChangeSchemaType>({
		resolver: zodResolver(AccountPasswordChangeSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (data: AccountPasswordChangeSchemaType) => {
		startTransition(() => {
			userChangePassword(user.id, data)
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
				<h2 className="text-lg font-semibold">{t("account.passwordChange.title")}</h2>
				<p className="text-sm text-muted-foreground">{t("account.passwordChange.description")}</p>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4">
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<PasswordInput {...field} disabled={isPending} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm password</FormLabel>
								<FormControl>
									<PasswordInput {...field} disabled={isPending} />
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