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
import { loginCustomer } from "./actions";

const loginSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
	password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormData) => {
		setError(null);
		setIsLoading(true);

		try {
			const result = await loginCustomer(data);

			if (result.success) {
				router.push("/account");
				router.refresh();
			} else {
				setError(result.error || "Login failed");
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
				<CardTitle className="text-2xl">Sign In</CardTitle>
				<CardDescription>
					Enter your email and password to access your account
				</CardDescription>
			</CardHeader>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CardContent className="space-y-4">
					{error && (
						<div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
							{error}
						</div>
					)}

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
						<div className="flex items-center justify-between">
							<Label htmlFor="password">Password</Label>
							<Link
								href="/account/forgot-password"
								className="text-sm text-primary hover:underline"
							>
								Forgot password?
							</Link>
						</div>
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
				</CardContent>
				<CardFooter className="flex flex-col gap-4">
					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading ? "Signing in..." : "Sign In"}
					</Button>
					<p className="text-sm text-muted-foreground text-center">
						Don&apos;t have an account?{" "}
						<Link
							href="/account/register"
							className="text-primary hover:underline"
						>
							Create one
						</Link>
					</p>
				</CardFooter>
			</form>
		</Card>
	);
}
