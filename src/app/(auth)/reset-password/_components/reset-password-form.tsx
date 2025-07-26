"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { ResetPasswordSchema, ResetPasswordSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

const ResetPasswordForm = () => {
	// const t = useTranslations();

	const form = useForm<ResetPasswordSchemaType>({
		resolver: zodResolver(ResetPasswordSchema),
		defaultValues: {
			password: "",
		},
	});

	const onSubmit = (data: ResetPasswordSchemaType) => {
		console.log(data);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col items-center w-full space-y-4 lg:max-w-xl"
			>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>Password</FormLabel>
							<FormControl>
								<PasswordInput {...field} showIcon placeholder="********" />
							</FormControl>
							<FormDescription>
								Make sure your password contains at least 8 characters,
								including one uppercase letter, one lowercase letter, and one
								number.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="w-full h-10 px-4 py-2 text-sm rounded-md md:px-8 md:h-11 text-base"
				>
					Send
				</Button>
			</form>
		</Form>
	);
};

export default ResetPasswordForm;
