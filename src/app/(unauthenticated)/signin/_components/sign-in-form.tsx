"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon, Loader, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useCallback, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { SignInSchema, type SignInSchemaType } from "@/schemas";
import { getUserByEmail } from "@/server/api/helpers";
import { userSignIn } from "@/server/api/public/auth";
import { SocialSignIn } from "../../_components/social-sign-in";

export const SignInForm = () => {
	const [isLoading, startTransition] = useTransition();
	const [signInMethod, setSignInMethod] = useState<"social" | "email">(
		"social",
	);
	const [email, setEmail] = useState<string>("");
	const [emailError, setEmailError] = useState<string | undefined>(undefined);
	const router = useRouter();

	const form = useForm<SignInSchemaType>({
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: SignInSchemaType) => {
		startTransition(() => {
			userSignIn(data).then((result) => {
				if (result.success) {
					toast.success("Signed in successfully!");
					form.reset();
					router.push("/");
				}

				if (result.error) {
					toast.error(result.error);
				}
			});
		});
	};

	const switchToEmailSignIn = useCallback(async () => {
		if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			setEmailError("Please enter a valid email address.");
			return;
		}

		const result = await getUserByEmail(email);

		if (!result) {
			setEmailError("No account found with this email.");
			return;
		}

		setSignInMethod("email");
	}, [email]);

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
													value={email}
													onChange={(e) => {
														setEmail(e.target.value);
														field.onChange(e);
													}}
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
													<Link
														href={"/forgot-password"}
														className="text-sm hover:text-blue-600 transition"
													>
														Forgot password?
													</Link>
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

									{form.formState.errors && (
										<div className="text-sm text-red-500">
											{Object.values(form.formState.errors).map((error) => (
												<p key={error.message}>{error.message}</p>
											))}
										</div>
									)}

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
									onClick={() => signIn("resend", { email })}
									variant="outline"
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
