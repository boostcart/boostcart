"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import type { SignUpSchemaType } from "@/schemas";
import { Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useTransition, type JSX } from "react";
import { useForm } from "react-hook-form";

export const SignUpForm = () => {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<SignUpSchemaType>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
	});

	return (
		<main className="w-full max-w-sm mx-auto">
			<h1 className="my-8 text-xl font-bold text-center">
				BoostCart | Sign up
			</h1>

			<div className="flex flex-col space-y-4">
				<Button variant="outline" onClick={() => signIn("google")}>
					Sign up with Google
				</Button>

				<span className="text-center">or</span>

				<Form {...form}>
					<form className="flex flex-col space-y-4">
						<div className="flex items-center space-x-4">
							<FormField
								control={form.control}
								name="firstName"
								render={({ field }) => (
									<FormItem>
										<Label>First Name</Label>
										<FormControl>
											<Input
												placeholder="John"
												{...field}
												disabled={isLoading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="lastName"
								render={({ field }) => (
									<FormItem>
										<Label>Last Name</Label>
										<FormControl>
											<Input
												placeholder="Doe"
												{...field}
												disabled={isLoading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<Label>Email</Label>
									<FormControl>
										<Input
											placeholder="john.doe@example.com"
											{...field}
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<Label>Password</Label>
									<FormControl>
										<PasswordInput
											{...field}
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							type="submit"
							className="w-full"
							disabled={!isLoading}
						>
							{isLoading && (<Loader className="animate-spin" />)}
							{isLoading ? "Signing up..." : "Sign up with Email"}
						</Button>
					</form>
				</Form>
			</div>
		</main>
	)
}