"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { SignUpSchema, type SignUpSchemaType } from "@/schemas";
import { signUp } from "@/lib/auth-client";
import { SocialSignIn } from "../../_components/social-sign-in";

export const SignUpForm = () => {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<SignUpSchemaType>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: SignUpSchemaType) => {
		startTransition(async () => {
			try {
				const result = await signUp.email({
					email: data.email,
					password: data.password,
					name: `${data.firstName} ${data.lastName}`,
					callbackURL: "/",
				});

				if (result.error) {
					toast.error(result.error.message || "Failed to sign up");
				} else {
					toast.success("Account created successfully! Please verify your email.");
					form.reset({
						firstName: "",
						lastName: "",
						email: "",
						password: "",
					});
					router.push("/signin");
				}
			} catch (error) {
				toast.error("An error occurred during sign up");
			}
		});
	};

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
							Create an account
						</h1>
						<p className="text-sm text-neutral-500 dark:text-neutral-400">
							Sign up and experience a new way of shopping online.
						</p>
					</div>
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
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="flex flex-col space-y-4"
								>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<FormField
											control={form.control}
											name="firstName"
											render={({ field }) => (
												<div className="flex flex-col space-y-2">
													<Label>First Name</Label>
													<Input
														{...field}
														placeholder="Enter your first name"
														disabled={isLoading}
														required
													/>
												</div>
											)}
										/>

										<FormField
											control={form.control}
											name="lastName"
											render={({ field }) => (
												<div className="flex flex-col space-y-2">
													<Label>Last Name</Label>
													<Input
														{...field}
														placeholder="Enter your last name"
														disabled={isLoading}
														required
													/>
												</div>
											)}
										/>
									</div>

									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<div className="flex flex-col space-y-2">
												<Label>Email</Label>
												<Input
													{...field}
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
												<Label>Password</Label>
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
										{isLoading ? "Signing up..." : "Sign up"}
									</Button>
								</form>
							</Form>

							<span className="text-sm text-neutral-700 dark:text-neutral-400 text-center sm:text-start">
								Already have an account?{" "}
								<Link
									href={"/signin"}
									className="text-blue-500 hover:text-blue-600 transition"
								>
									Sign in
								</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
