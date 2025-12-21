"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { SetPasswordSchema, type SetPasswordSchemaType } from "@/schemas";
import { setPassword } from "@/server/api/private/auth";

export const SetPassword = () => {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<SetPasswordSchemaType>({
		resolver: zodResolver(SetPasswordSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = (data: SetPasswordSchemaType) => {
		startTransition(() => {
			setPassword(data).then((result) => {
				if (result.success) {
					form.reset();
					router.refresh();
					toast.success("Password set successfully. You can now sign in with your email and password.");
				}

				if (result.error) {
					const errorMessages: Record<string, string> = {
						no_data: "No data provided.",
						not_logged_in: "You must be logged in to set a password.",
						password_already_set: "You already have a password set. Use 'Update Password' instead.",
						invalid_data: "Invalid password format. Please check your input.",
						passwords_do_not_match: "Passwords do not match.",
						something_went_wrong: "Something went wrong. Please try again.",
					};
					toast.error(errorMessages[result.error] || "An error occurred.");
				}
			});
		});
	};

		return (
		<div className="flex flex-col w-full max-w-sm my-4 space-y-4">
			<div>
				<h2 className="font-medium">Set Password</h2>
				<p className="text-sm text-muted-foreground mt-1">
					Create a password to enable email/password sign-in for your account.
				</p>
			</div>			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col space-y-4"
				>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<Label>Password</Label>
								<FormControl>
									<PasswordInput {...field} disabled={isLoading} />
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
								<Label>Confirm Password</Label>
								<FormControl>
									<PasswordInput {...field} disabled={isLoading} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
						{isLoading ? "Setting Password..." : "Set Password"}
					</Button>
				</form>
			</Form>
		</div>
	);
};
