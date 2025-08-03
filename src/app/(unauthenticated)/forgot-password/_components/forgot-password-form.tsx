"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ForgotPasswordSchema, type ForgotPasswordSchemaType } from "@/schemas";
import { userForgotPassword } from "@/server/api/public/auth";

export const ForgotPasswordForm = () => {
	const [isLoading, startTransition] = useTransition();
	const [email, setEmail] = useState<string>("");
	const router = useRouter();

	const form = useForm<ForgotPasswordSchemaType>({
		resolver: zodResolver(ForgotPasswordSchema),
		defaultValues: {
			email: "",
		},
		mode: "onChange",
		reValidateMode: "onChange",
	});

	const onSubmit = (data: ForgotPasswordSchemaType) => {
		startTransition(() => {
			userForgotPassword(data).then((result) => {
				if (result.success) {
					toast.success("Password reset email sent!");
					router.push("/signin");
				}

				if (result.error) {
					toast.error(result.error);
				}
			});
		});
	};

	return (
		<div className="w-full max-w-sm mx-auto">
			<h2 className="my-8 text-xl font-bold text-center">
				BoostCart | Forgot Password
			</h2>

			<div className="flex flex-col space-y-8">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col space-y-4"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<div className="flex flex-col space-y-1">
									<Label>Email</Label>
									<Input
										{...field}
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
											field.onChange(e);
										}}
										placeholder="Enter your email"
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
							{isLoading ? "Sending..." : "Send Reset Link"}
						</Button>
					</form>
				</Form>

				<span className="text-center">or</span>

				<div className="flex flex-col space-y-4">
					<Button onClick={() => signIn("resend", { email })} variant="outline">
						<Sparkles />
						<span>Email me a magic link instead</span>
					</Button>
				</div>
			</div>
		</div>
	);
};
