"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { ResetPasswordSchema, type ResetPasswordSchemaType } from "@/schemas";
import { userResetPassword } from "@/server/api/public/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const ResetPasswordForm = () => {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	if (!token) {
		redirect("/signin?error=missing-token");
	}

	const form = useForm<ResetPasswordSchemaType>({
		resolver: zodResolver(ResetPasswordSchema),
		defaultValues: {
			token: token,
			password: "",
		}
	})

	const onSubmit = (data: ResetPasswordSchemaType) => {
		startTransition(() => {
			userResetPassword(data)
				.then((result) => {
					if (result.success) {
						router.push("/signin");
						toast.success("Password updated successfully. Please sign in.");
					}

					if (result.error) {
						toast.error(result.error);
					}
				});
		});
	}

	return (
		<div className="w-full max-w-sm mx-auto">
			<h2 className="my-8 text-xl font-bold text-center">
				BoostCart | Reset Password
			</h2>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col space-y-4"
				>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<div className="flex flex-col space-y-1">
								<Label>Password</Label>
								<PasswordInput
									{...field}
									placeholder="Enter your new password"
									disabled={isLoading}
								/>
							</div>
						)}
					/>

					{form.formState.errors && (
						<div className="text-sm text-red-500">
							{Object.values(form.formState.errors).map((error) => (
								<p key={error.message}>{error.message}</p>
							))}
						</div>
					)}

					<Button type="submit" disabled={isLoading}>
						{isLoading && <Loader className="animate-spin" />}
						{isLoading ? "Updating..." : "Update Password"}
					</Button>
				</form>
			</Form>
		</div>
	)
}