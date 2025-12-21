"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon, Loader } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
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
import { ResetPasswordSchema, type ResetPasswordSchemaType } from "@/schemas";
import { userResetPassword } from "@/server/api/public/auth";

export const ResetPasswordForm = () => {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	// Check for error in URL (from better-auth redirect on invalid token)
	const error = searchParams.get("error");
	
	if (error === "INVALID_TOKEN") {
		redirect("/forgot-password?error=invalid-token");
	}

	if (!token) {
		redirect("/signin?error=missing-token");
	}

	const form = useForm<ResetPasswordSchemaType>({
		resolver: zodResolver(ResetPasswordSchema),
		defaultValues: {
			token: token,
			password: "",
		},
	});

	const onSubmit = async (data: ResetPasswordSchemaType) => {
		startTransition(() => {
			userResetPassword(data).then((result) => {
				if (result.success) {
					toast.success("Password reset successfully!", {
						description: "Redirecting to sign in...",
					});
					setTimeout(() => {
						router.push("/signin?message=password-reset-success");
					}, 1500);
				}

				if (result.error) {
					const errorMessages: Record<string, string> = {
						no_data: "No data provided.",
						already_logged_in: "You are already logged in.",
						invalid_data: "Invalid data provided.",
						invalid_token: "Invalid or expired reset token. Please request a new one.",
						token_expired: "Reset token has expired. Please request a new one.",
						user_not_found: "User not found.",
						password_not_set: "Password not set for this account.",
						something_went_wrong: "Something went wrong. Please try again.",
					};
					toast.error("Password reset failed", {
						description: errorMessages[result.error] || "An error occurred.",
					});
				}
			});
		});
	};

	return (
		<div className="flex flex-col flex-1 lg:w-1/2 w-full">
			<div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
				<Link
					href="/signin"
					className="inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
				>
					<ChevronLeftIcon />
					Back to Sign In
				</Link>
			</div>
			<div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
				<div>
					<div className="mb-5 sm:mb-8">
						<h1 className="mb-2 font-semibold text-neutral-800 text-3xl dark:text-white/90 sm:text-4xl">
							Reset Password
						</h1>
						<p className="text-sm text-neutral-500 dark:text-neutral-400">
							Enter your new password below to reset it.
						</p>
					</div>
					<div className="flex flex-col space-y-8">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="flex flex-col space-y-4"
							>
								<FormField
									control={form.control}
									name="password"
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

								<Button type="submit" disabled={isLoading}>
									{isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
									{isLoading ? "Resetting..." : "Reset Password"}
								</Button>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};