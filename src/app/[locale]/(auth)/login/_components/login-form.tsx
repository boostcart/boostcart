"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { LoginSchema, LoginSchemaType } from "@/schemas";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import { PasswordInput } from "@/components/ui/password-input";
import { login } from "@/server/auth";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
	const [isPending, startTransition] = useTransition();
	const t = useTranslations();
	const router = useRouter();

	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	});

	const onSubmit = (data: LoginSchemaType) => {
		startTransition(() => {
			login(data)
				.then((callback) => {
					if (callback?.error) {
						form.resetField("password");
						toast.error(t(`auth.errors.${callback.error as keyof IntlMessages["auth"]["errors"]}`));
					}

					if (callback?.success) {
						form.reset();
						toast.success(t(`auth.success.${callback.success as keyof IntlMessages["auth"]["success"]}`));
						router.push("/");
					}
				})
				.catch(() => { toast.error(t(`auth.errors.something_went_wrong`)) });
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center w-full space-y-4 lg:max-w-xl">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>{t("auth.general.email")}</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="email"
									placeholder="boostcart@lanoow.dev"
									startIcon={MailIcon}
									disabled={isPending}
									tabIndex={1}
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
						<FormItem className="w-full">
							<FormLabel className="flex items-center justify-between">
								<span>{t("auth.general.password")}</span>

								<Button variant="link" asChild className="p-0 m-0 h-fit" tabIndex={4}>
									<Link href="/forgot-password">
										{t("auth.general.forgotPassword")}
									</Link>
								</Button>
							</FormLabel>
							<FormControl>
								<PasswordInput
									{...field}
									placeholder="********"
									showIcon
									disabled={isPending}
									tabIndex={2}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full h-10 px-4 py-2 text-sm rounded-md md:px-8 md:h-11 text-md" disabled={isPending} tabIndex={3}>
					{t('auth.general.signIn')}
				</Button>

				<Button variant="link" asChild disabled={isPending} tabIndex={5}>
					<Link href="/signup">
						{t("auth.general.noAccount")}
					</Link>
				</Button>
			</form>
		</Form>
	)
}

export default LoginForm;