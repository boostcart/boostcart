"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { SignInSchema, type SignInSchemaType } from "@/schemas";
import { userSignIn } from "@/server/api/public/auth";

export const SignInForm = () => {
	const [isLoading, startTransition] = useTransition();
	const [signInMethod, setSignInMethod] = useState<"social" | "email">(
		"social",
	);
	const [email, setEmail] = useState<string>("");
	const router = useRouter();

	const form = useForm<SignInSchemaType>({
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
		reValidateMode: "onChange",
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

	return (
		<main className="w-full max-w-sm mx-auto">
			<h1 className="my-8 text-xl font-bold text-center">
				BoostCart | Sign in
			</h1>

			{signInMethod === "social" ? (
				<div className="flex flex-col space-y-8">
					<div className="flex flex-col space-y-4">
						<Button
							onClick={() => signIn("google")}
							className="w-full"
							variant="outline"
						>
							Sign in with Google
						</Button>
					</div>

					<span className="text-center">or</span>

					<div className="flex flex-col space-y-4">
						<div className="flex flex-col space-y-1">
							<Label>Email</Label>
							<Input
								type="email"
								value={email}
								placeholder="Enter your email"
								onChange={(e) => setEmail(e.target.value)}
								onKeyUp={(e) => {
									if (e.key === "Enter") {
										setSignInMethod("email");
									}
								}}
							/>
						</div>

						<Button
							onClick={() => setSignInMethod("email")}
							className="w-full"
							disabled={!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
						>
							Sign in with Email
						</Button>
					</div>

					<Button asChild>
						<Link href={"/signup"}>
							Don't have an account? Sign up
						</Link>
					</Button>
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

							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<div className="flex flex-col space-y-1">
										<Label className="flex items-center justify-between">
											<span>Password</span>
											<Link href={"/forgot-password"}>Forgot password?</Link>
										</Label>
										<PasswordInput
											{...field}
											placeholder="Enter your password"
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
								{isLoading ? "Signing in..." : "Sign in"}
							</Button>
						</form>
					</Form>

					<span className="text-center">or</span>

					<div className="flex flex-col space-y-4">
						<Button
							onClick={() => signIn("resend", { email })}
							variant="outline"
						>
							<Sparkles />
							<span>Email me a magic link</span>
						</Button>

						<Button variant="ghost" onClick={() => setSignInMethod("social")}>
							Go back
						</Button>
					</div>
				</div>
			)}
		</main>
	);
};
