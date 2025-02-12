"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MailIcon, UserIcon } from "lucide-react";
import { SignUpSchema, SignUpSchemaType } from "@/schemas";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { PasswordInput } from "@/components/ui/password-input";
import { signUp } from "@/server/auth";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = () => {
	const [isPending, startTransition] = useTransition();
	const t = useTranslations();
	const router = useRouter();

	const form = useForm<SignUpSchemaType>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: ""
		}
	});

	const onSubmit = (data: SignUpSchemaType) => {
		startTransition(() => {
			signUp(data)
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
					name="name"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>{t("auth.general.name")}</FormLabel>
							<FormControl>
								<Input
									{...field}
									placeholder="Boost Cart"
									startIcon={UserIcon}
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
						<FormItem className="w-full">
							<FormLabel>{t("auth.general.email")}</FormLabel>
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

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>
								{t("auth.general.password")}
							</FormLabel>
							<FormControl>
								<PasswordInput
									{...field}
									showIcon
									placeholder="********"
									disabled={isPending}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full h-10 px-4 py-2 text-sm rounded-md md:px-8 md:h-11 text-md" disabled={isPending}>
					{t("auth.general.signUp")}
				</Button>

				<Button variant="link" asChild disabled={isPending}>
					<Link href="/login">
						{t("auth.general.haveAccount")}
					</Link>
				</Button>
			</form>
		</Form>
	)
}

export default SignUpForm;