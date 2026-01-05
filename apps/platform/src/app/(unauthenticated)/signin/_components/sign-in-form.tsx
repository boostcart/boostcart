"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
	CheckCircle2,
	ChevronLeftIcon,
	Loader,
	Sparkles,
	XCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { signIn } from "@/lib/auth-client";
import { SignInSchema, type SignInSchemaType } from "@/schemas";
import { userForgotPassword } from "@/server/api/public/auth";
import { checkAndResendVerification } from "@/server/api/public/email-verification";
import { SocialSignIn } from "../../_components/social-sign-in";

export const SignInForm = () => {
	const [isLoading, startTransition] = useTransition();
	const [signInMethod, setSignInMethod] = useState<"social" | "email">(
		"social",
	);
	const [email, setEmail] = useState<string>("");
	const [emailError, setEmailError] = useState<string | undefined>(undefined);
	const [forgotPasswordState, setForgotPasswordState] = useState<{
		status: "idle" | "loading" | "success" | "error";
		message?: string;
	}>({ status: "idle" });
	const router = useRouter();

	const form = useForm<SignInSchemaType>({
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: SignInSchemaType) => {
		startTransition(async () => {
			try {
				const result = await signIn.email({
					email: data.email,
					password: data.password,
					callbackURL: "/",
				});

				if (result.error) {
					const errorMessage = result.error.message || "Failed to sign in";

					// Check for email verification error
					if (
						errorMessage.toLowerCase().includes("email") &&
						errorMessage.toLowerCase().includes("verif")
					) {
						// Handle email verification error
						toast.error(
							"Your email is not verified. Please check your inbox and verify your email.",
						);

						// Check and resend verification email if needed
						const verificationResult = await checkAndResendVerification(
							data.email,
						);

						if (verificationResult.success) {
							if (verificationResult.message === "verification_email_sent") {
								toast.info(
									"A new verification email has been sent to your inbox.",
								);
							} else if (
								verificationResult.message === "verification_email_already_sent"
							) {
								toast.info(
									"Verification email was already sent. Please check your inbox.",
								);
							}
						}
					} else {
						toast.error(errorMessage);
					}
				} else if (result.data) {
					toast.success("Signed in successfully!");
					form.reset({
						email: "",
						password: "",
					});
					router.push("/");
					router.refresh();
				}
			} catch (error) {
				console.error("Sign-in exception:", error);
				toast.error("An error occurred during sign in");
			}
		});
	};

	const switchToEmailSignIn = useCallback(async () => {
		if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			setEmailError("Please enter a valid email address.");
			return;
		}

		// Set the email in the form and switch to password entry
		form.setValue("email", email);
		setEmailError("");
		setSignInMethod("email");
	}, [email, form]);

	const handleForgotPassword = useCallback(async () => {
		const currentEmail = form.getValues("email");
		if (!currentEmail) return;

		setForgotPasswordState({ status: "loading" });

		try {
			const result = await userForgotPassword({ email: currentEmail });
			if (result.success) {
				setForgotPasswordState({
					status: "success",
					message: "Password reset link sent! Check your email.",
				});
			} else {
				setForgotPasswordState({
					status: "error",
					message: result.error || "Failed to send reset link",
				});
			}
		} catch {
			setForgotPasswordState({
				status: "error",
				message: "An error occurred. Please try again.",
			});
		}
	}, [form]);

	// Forgot password result screen
	if (
		forgotPasswordState.status === "success" ||
		forgotPasswordState.status === "error"
	) {
		const isSuccess = forgotPasswordState.status === "success";
		return (
			<div className="flex flex-col flex-1 lg:w-1/2 w-full">
				<div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
					<button
						type="button"
						onClick={() => setForgotPasswordState({ status: "idle" })}
						className="inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
					>
						<ChevronLeftIcon />
						Back to Sign In
					</button>
				</div>
				<div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
					<div className="flex flex-col items-center text-center space-y-4">
						{isSuccess ? (
							<CheckCircle2 className="w-16 h-16 text-green-500" />
						) : (
							<XCircle className="w-16 h-16 text-red-500" />
						)}
						<h1 className="font-semibold text-neutral-800 text-2xl dark:text-white/90 sm:text-3xl">
							{isSuccess ? "Check Your Email" : "Something Went Wrong"}
						</h1>
						<p className="text-neutral-500 dark:text-neutral-400">
							{forgotPasswordState.message}
						</p>
						{isSuccess && (
							<p className="text-sm text-neutral-400 dark:text-neutral-500">
								We sent a password reset link to{" "}
								<strong className="text-neutral-600 dark:text-neutral-300">
									{form.getValues("email")}
								</strong>
							</p>
						)}
						<div className="flex flex-col space-y-3 w-full pt-4">
							{isSuccess ? (
								<Button
									variant="outline"
									onClick={() => setForgotPasswordState({ status: "idle" })}
								>
									Back to Sign In
								</Button>
							) : (
								<>
									<Button onClick={handleForgotPassword}>Try Again</Button>
									<Button
										variant="outline"
										onClick={() => setForgotPasswordState({ status: "idle" })}
									>
										Back to Sign In
									</Button>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}

	// Loading screen while sending forgot password
	if (forgotPasswordState.status === "loading") {
		return (
			<div className="flex flex-col flex-1 lg:w-1/2 w-full">
				<div className="flex flex-col justify-center items-center flex-1 w-full max-w-md mx-auto">
					<Loader className="w-10 h-10 animate-spin text-neutral-400" />
					<p className="mt-4 text-neutral-500 dark:text-neutral-400">
						Sending reset link...
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col flex-1 lg:w-1/2 w-full">
			<div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
				<Link
					href="/"
					className="inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
				>
					<ChevronLeftIcon />
					Back home
				</Link>
			</div>
			<div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
				<div>
					<div className="mb-5 sm:mb-8">
						<h1 className="mb-2 font-semibold text-neutral-800 text-3xl dark:text-white/90 sm:text-4xl">
							Sign In
						</h1>
						<p className="text-sm text-neutral-500 dark:text-neutral-400">
							Sign in to your account and return to shopping.
						</p>
					</div>
					{signInMethod === "social" ? (
						<div>
							<SocialSignIn />
							<div className="relative py-3 sm:py-5">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-neutral-200 dark:border-neutral-800"></div>
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="p-2 text-neutral-400 bg-white dark:bg-neutral-900 sm:px-5 sm:py-2">
										Or
									</span>
								</div>
							</div>
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
												switchToEmailSignIn();
											}
										}}
									/>
									{emailError && (
										<p className="text-sm text-red-500">{emailError}</p>
									)}
								</div>

								<Button
									onClick={() => switchToEmailSignIn()}
									className="w-full"
									disabled={
										!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
									}
								>
									Sign in with Email
								</Button>

								<span className="text-sm text-neutral-700 dark:text-neutral-400 text-center sm:text-start">
									Don't have an account?{" "}
									<Link
										href={"/signup"}
										className="text-blue-500 hover:text-blue-600 transition"
									>
										Sign up
									</Link>
								</span>
							</div>
						</div>
					) : (
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
											<div className="flex flex-col space-y-2">
												<Label>Email</Label>
												<Input
													{...field}
													type="email"
													placeholder="Enter your email"
													disabled={isLoading}
													required
												/>
											</div>
										)}
									/>

									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<div className="flex flex-col space-y-2">
												<Label className="flex items-center justify-between">
													<span>Password</span>
													<button
														type="button"
														onClick={handleForgotPassword}
														className="text-sm hover:text-blue-600 transition"
													>
														Forgot password?
													</button>
												</Label>
												<PasswordInput
													{...field}
													placeholder="Enter your password"
													disabled={isLoading}
													required
												/>
											</div>
										)}
									/>

									<Button type="submit" disabled={isLoading}>
										{isLoading && <Loader className="animate-spin" />}
										{isLoading ? "Signing in..." : "Sign in"}
									</Button>
								</form>
							</Form>
							<div className="relative py-3 sm:py-5">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-neutral-200 dark:border-neutral-800"></div>
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="p-2 text-neutral-400 bg-white dark:bg-neutral-900 sm:px-5 sm:py-2">
										Or
									</span>
								</div>
							</div>
							<div className="flex flex-col space-y-4">
								<Button
									onClick={async () => {
										try {
											await signIn.magicLink({
												email,
												callbackURL: "/",
											});
											toast.success("Magic link sent! Check your email.");
										} catch (_error) {
											toast.error("Failed to send magic link");
										}
									}}
									variant="outline"
									disabled={!email}
								>
									<Sparkles />
									<span>Email me a magic link</span>
								</Button>

								<Button
									variant="ghost"
									onClick={() => setSignInMethod("social")}
								>
									Go back to social sign in
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
