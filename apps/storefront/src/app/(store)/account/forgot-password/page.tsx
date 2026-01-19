"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { requestPasswordReset } from "@/server/actions/password-reset";

const schema = z.object({
	email: z.string().email("Невалиден имейл адрес"),
});

type FormData = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: FormData) => {
		setIsLoading(true);
		setError("");

		const result = await requestPasswordReset(data.email);

		setIsLoading(false);

		if (result.success) {
			setIsSubmitted(true);
		} else if (result.error) {
			setError(result.error);
		}
	};

	if (isSubmitted) {
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
					<h1 className="text-2xl font-bold mb-2">Проверете имейла си</h1>
					<p className="text-gray-600 mb-6">
						Ако съществува акаунт с този имейл адрес, ще получите инструкции за
						нулиране на паролата.
					</p>
					<Link href="/account/login">
						<Button variant="outline" className="w-full">
							Обратно към вход
						</Button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto max-w-md py-16 px-4">
			<div className="bg-white rounded-lg shadow-sm border p-8">
				<h1 className="text-2xl font-bold mb-2">Забравена парола</h1>
				<p className="text-gray-600 mb-6">
					Въведете имейл адреса си и ще ви изпратим линк за нулиране на
					паролата.
				</p>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div>
						<Label htmlFor="email">Имейл адрес</Label>
						<Input
							id="email"
							type="email"
							placeholder="example@email.com"
							{...register("email")}
							disabled={isLoading}
						/>
						{errors.email && (
							<p className="text-sm text-red-600 mt-1">
								{errors.email.message}
							</p>
						)}
					</div>

					{error && (
						<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
							{error}
						</div>
					)}

					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading ? "Изпращане..." : "Изпрати линк"}
					</Button>

					<div className="text-center text-sm">
						<Link
							href="/account/login"
							className="text-blue-600 hover:underline"
						>
							Обратно към вход
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
