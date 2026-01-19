"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { resetPassword } from "@/server/actions/password-reset";

const schema = z
	.object({
		password: z.string().min(8, "Паролата трябва да бъде поне 8 символа"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Паролите не съвпадат",
		path: ["confirmPassword"],
	});

type FormData = z.infer<typeof schema>;

export default function ResetPasswordPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	useEffect(() => {
		if (!token) {
			setError("Невалиден линк за нулиране");
		}
	}, [token]);

	const onSubmit = async (data: FormData) => {
		if (!token) return;

		setIsLoading(true);
		setError("");

		const result = await resetPassword(token, data.password);

		setIsLoading(false);

		if (result.success) {
			setSuccess(true);
			setTimeout(() => {
				router.push("/account/login");
			}, 2000);
		} else if (result.error) {
			setError(result.error);
		}
	};

	if (success) {
		return (
			<div className="container mx-auto max-w-md py-16 px-4">
				<div className="bg-white rounded-lg shadow-sm border p-8 text-center">
					<div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-label="Success"
						>
							<title>Success</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<h1 className="text-2xl font-bold mb-2">Паролата е променена</h1>
					<p className="text-gray-600 mb-6">
						Вашата парола беше успешно променена. Пренасочване към вход...
					</p>
				</div>
			</div>
		);
	}

	if (!token || error) {
		return (
			<div className="container mx-auto max-w-md py-16 px-4">
				<div className="bg-white rounded-lg shadow-sm border p-8 text-center">
					<div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-label="Error"
						>
							<title>Error</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>
					<h1 className="text-2xl font-bold mb-2">Невалиден линк</h1>
					<p className="text-gray-600 mb-6">
						{error ||
							"Този линк за нулиране на парола е невалиден или е изтекъл."}
					</p>
					<Link href="/account/forgot-password">
						<Button className="w-full">Изпрати нов линк</Button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto max-w-md py-16 px-4">
			<div className="bg-white rounded-lg shadow-sm border p-8">
				<h1 className="text-2xl font-bold mb-2">Нова парола</h1>
				<p className="text-gray-600 mb-6">Въведете вашата нова парола.</p>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div>
						<Label htmlFor="password">Нова парола</Label>
						<Input
							id="password"
							type="password"
							placeholder="Минимум 8 символа"
							{...register("password")}
							disabled={isLoading}
						/>
						{errors.password && (
							<p className="text-sm text-red-600 mt-1">
								{errors.password.message}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor="confirmPassword">Потвърди парола</Label>
						<Input
							id="confirmPassword"
							type="password"
							placeholder="Повторете паролата"
							{...register("confirmPassword")}
							disabled={isLoading}
						/>
						{errors.confirmPassword && (
							<p className="text-sm text-red-600 mt-1">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading ? "Запазване..." : "Промени паролата"}
					</Button>
				</form>
			</div>
		</div>
	);
}
