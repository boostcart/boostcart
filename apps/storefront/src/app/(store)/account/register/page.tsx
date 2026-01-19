"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v3";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerCustomer } from "./actions";

const registerSchema = z
	.object({
		firstName: z.string().min(1, "First name is required"),
		lastName: z.string().min(1, "Last name is required"),
		email: z.string().email("Please enter a valid email address"),
		password: z.string().min(8, "Password must be at least 8 characters"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = async (data: RegisterFormData) => {
		setError(null);
		setIsLoading(true);

		try {
			const result = await registerCustomer({
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				password: data.password,
			});

			if (result.success) {
				router.push("/account");
				router.refresh();
			} else {
				setError(result.error || "Registration failed");
			}
		} catch {
			setError("An unexpected error occurred");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Card>
			<CardHeader className="text-center">
				<CardTitle className="text-2xl">Create Account</CardTitle>
				<CardDescription>
					Enter your details to create a new account
				</CardDescription>
			</CardHeader>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CardContent className="space-y-4">
					{error && (
						<div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
							{error}
						</div>
					)}

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="firstName">First Name</Label>
							<Input
								id="firstName"
								placeholder="John"
								{...register("firstName")}
								disabled={isLoading}
							/>
							{errors.firstName && (
								<p className="text-sm text-destructive">
									{errors.firstName.message}
								</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="lastName">Last Name</Label>
							<Input
								id="lastName"
								placeholder="Doe"
								{...register("lastName")}
								disabled={isLoading}
							/>
							{errors.lastName && (
								<p className="text-sm text-destructive">
									{errors.lastName.message}
								</p>
							)}
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="you@example.com"
							{...register("email")}
							disabled={isLoading}
						/>
						{errors.email && (
							<p className="text-sm text-destructive">{errors.email.message}</p>
						)}
					</div>

					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							placeholder="••••••••"
							{...register("password")}
							disabled={isLoading}
						/>
						{errors.password && (
							<p className="text-sm text-destructive">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="space-y-2">
						<Label htmlFor="confirmPassword">Confirm Password</Label>
						<Input
							id="confirmPassword"
							type="password"
							placeholder="••••••••"
							{...register("confirmPassword")}
							disabled={isLoading}
						/>
						{errors.confirmPassword && (
							<p className="text-sm text-destructive">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>
				</CardContent>
				<CardFooter className="flex flex-col gap-4">
					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading ? "Creating account..." : "Create Account"}
					</Button>
					<p className="text-sm text-muted-foreground text-center">
						Already have an account?{" "}
						<Link
							href="/account/login"
							className="text-primary hover:underline"
						>
							Sign in
						</Link>
					</p>
				</CardFooter>
			</form>
		</Card>
	);
}
