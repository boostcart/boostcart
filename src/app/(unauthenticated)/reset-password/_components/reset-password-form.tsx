"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon, Loader } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { ResetPasswordSchema, type ResetPasswordSchemaType } from "@/schemas";
import {
	getUserByEmail,
	getVerificationTokenByToken,
} from "@/server/api/helpers";
import { userResetPassword } from "@/server/api/public/auth";

export const ResetPasswordForm = () => {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");
	const [email, setEmail] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const [continueReset, setContinueReset] = useState<boolean>(false);

	if (!token) {
		redirect("/signin?error=missing-token");
	}

	const form = useForm<ResetPasswordSchemaType>({
		resolver: zodResolver(ResetPasswordSchema),
		defaultValues: {
			token: token,
			email: email,
			password: "",
		},
	});

	const onSubmit = async (data: ResetPasswordSchemaType) => {
		startTransition(() => {
			userResetPassword(data).then((result) => {
				if (result.success) {
					router.push("/signin");
					toast.success("Password updated successfully. Please sign in.");
				}

				if (result.error) {
					toast.error(result.error);
				}
			});
		});
	};

	const handleContinueReset = async () => {
		if (!email) {
			setEmailError("Please enter your email.");
			return;
		}

		if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			setEmailError("Please enter a valid email address.");
			return;
		}

		if (!token) {
			redirect("/signin?error=missing-token");
		}

		const user = await getUserByEmail(email);

		if (!user) {
			setEmailError("User not found with this email.");
			return;
		}

		if (!user.password) {
			setEmailError("Password not set for this user.");
			return;
		}

		const tokenEmail = await getVerificationTokenByToken("reset", token).then(
			(tokenData) => tokenData?.email,
		);

		if (tokenEmail !== user.email) {
			setEmailError("Email does not match the token.");
			return;
		}

		setContinueReset(true);
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
							{continueReset
								? "Enter your new password below to reset it."
								: "Enter your email to continue resetting your password."}
						</p>
					</div>
					{continueReset ? (
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
											<div className="flex flex-col space-y-2">
												<Label className="flex items-center justify-between">
													Password
												</Label>
												<PasswordInput
													{...field}
													placeholder="Enter your new password"
													disabled={isLoading}
													required
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
										{isLoading ? "Resetting..." : "Reset Password"}
									</Button>
								</form>
							</Form>
						</div>
					) : (
						<div className="flex flex-col space-y-6">
							<div className="flex flex-col space-y-2">
								<Label>Email</Label>
								<Input
									type="email"
									value={email}
									placeholder="Enter your email"
									onChange={(e) => setEmail(e.target.value)}
									onKeyUp={(e) => {
										if (e.key === "Enter") {
											handleContinueReset();
										}
									}}
								/>
								{emailError && (
									<p className="text-sm text-red-500">{emailError}</p>
								)}
							</div>

							<Button
								onClick={() => handleContinueReset()}
								className="w-full"
								disabled={!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
							>
								Continue
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
