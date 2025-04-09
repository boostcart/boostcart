"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { ForgotPasswordSchema, ForgotPasswordSchemaType } from "@/schemas";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendResetLink } from "@/server/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ForgotPasswordForm = () => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [isCompleted, setIsCompleted] = useState<boolean>(false);
	const [emailAppUrl, setEmailAppUrl] = useState<string>(
		"https://mail.google.com/",
	);

	const form = useForm<ForgotPasswordSchemaType>({
		resolver: zodResolver(ForgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = (data: ForgotPasswordSchemaType) => {
		startTransition(() => {
			sendResetLink(data)
				.then((callback) => {
					if (callback?.error) {
						toast.error(
							t(
								`auth.errors.${callback.error as keyof IntlMessages["auth"]["errors"]}`,
							),
						);
					}

					if (callback?.success) {
						toast.success(
							t(
								`auth.success.${callback.success as keyof IntlMessages["auth"]["success"]}`,
							),
						);
						setIsCompleted(true);

						if (data.email.search(/@gmail\.com$/) !== -1) {
							setEmailAppUrl("https://mail.google.com/");
						}

						if (data.email.search(/@yahoo\.com$/) !== -1) {
							setEmailAppUrl("https://mail.yahoo.com/");
						}

						if (data.email.search(/@outlook\.com$/) !== -1) {
							setEmailAppUrl("https://outlook.live.com/");
						}

						if (data.email.search(/@abv\.bg$/) !== -1) {
							setEmailAppUrl("https://nm50.abv.bg/Mail.html");
						}

						setEmailAppUrl("https://mail.google.com/");
					}
				})
				.catch(() => {
					toast.error(t(`auth.errors.something_went_wrong`));
				});
		});
	};

	return (
		<>
			{!isCompleted ? (
				<>
					<div className="flex flex-col items-center w-full space-y-2">
						<h1 className="text-4xl font-bold">
							{t("auth.forgotPassword.title")}
						</h1>
						<h2 className="font-medium text-neutral-500">
							{t("auth.forgotPassword.subtitle")}
						</h2>
					</div>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-col items-center w-full space-y-4 lg:max-w-xl"
						>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>{t("general.email")}</FormLabel>
										<FormControl>
											<Input
												{...field}
												type="email"
												placeholder="boostcart@lanoow.dev"
												startIcon={MailIcon}
												disabled={isPending}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type="submit"
								className="w-full h-10 px-4 py-2 text-sm rounded-md md:px-8 md:h-11 text-md"
								disabled={isPending}
							>
								{t("general.send")}
							</Button>

							<Button variant="link" asChild>
								<Link href="/login">{t("auth.general.rememberPassword")}</Link>
							</Button>
						</form>
					</Form>
				</>
			) : (
				<div className="flex flex-col items-center w-full space-y-8 lg:max-w-xl">
					<div className="flex flex-col items-center w-full space-y-2">
						<h1 className="text-4xl font-bold">
							{t("auth.forgotPassword.successTitle")}
						</h1>
						<h2 className="flex flex-col items-center font-medium text-neutral-500">
							<span>{t("auth.forgotPassword.successSubtitle")}</span>
							<strong>{form.getValues("email")}</strong>
						</h2>
					</div>

					<Button asChild>
						<Link href={emailAppUrl}>
							{t("auth.forgotPassword.openEmailAppButton")}
						</Link>
					</Button>

					<div className="flex flex-row space-x-1 text-neutral-500">
						<span>{t("auth.forgotPassword.didntReceiveEmail")}</span>
						<button
							className="font-bold hover:text-primary transition cursor-pointer"
							onClick={form.handleSubmit(onSubmit)}
						>
							{t("auth.forgotPassword.clickToResend")}
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default ForgotPasswordForm;
