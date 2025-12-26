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
import { UpdatePasswordSchema, type UpdatePasswordSchemaType } from "@/schemas";
import { updatePassword } from "@/server/api/private/auth";

export const UpdatePassword = () => {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<UpdatePasswordSchemaType>({
		resolver: zodResolver(UpdatePasswordSchema),
		defaultValues: {
			oldPassword: "",
			newPassword: "",
		},
	});

	const onSubmit = async (data: UpdatePasswordSchemaType) => {
		startTransition(() => {
			updatePassword(data).then((result) => {
				if (result.success) {
					form.reset();
					router.refresh();
					toast.success("Password updated successfully.");
				}

				if (result.error) {
					const errorMessages: Record<string, string> = {
						no_data: "No data provided.",
						not_logged_in: "You must be logged in to update your password.",
						password_not_set:
							"You don't have a password set. Use 'Set Password' instead.",
						invalid_data: "Invalid password format. Please check your input.",
						invalid_old_password: "Your old password is incorrect.",
						password_corrupted:
							"Your password is in an invalid format. Please use 'Forgot Password' to reset it.",
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
				<h2 className="font-medium">Update Password</h2>
				<p className="text-sm text-muted-foreground mt-1">
					Change your current password to a new one.
				</p>
			</div>{" "}
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col space-y-4"
				>
					<FormField
						control={form.control}
						name="oldPassword"
						render={({ field }) => (
							<FormItem>
								<Label>Old Password</Label>
								<FormControl>
									<PasswordInput
										{...field}
										placeholder="Enter your old password"
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="newPassword"
						render={({ field }) => (
							<FormItem>
								<Label>New Password</Label>
								<FormControl>
									<PasswordInput
										{...field}
										placeholder="Enter your new password"
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
						{isLoading ? "Updating Password..." : "Update Password"}
					</Button>
				</form>
			</Form>
		</div>
	);
};
