"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { verifyEmail } from "@/server/actions/email-verification";

export default function VerifyEmailPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const [status, setStatus] = useState<"loading" | "success" | "error">(
		"loading",
	);
	const [error, setError] = useState("");

	useEffect(() => {
		if (!token) {
			setStatus("error");
			setError("Невалиден линк за потвърждение");
			return;
		}

		const verify = async () => {
			const result = await verifyEmail(token);

			if (result.success) {
				setStatus("success");
				setTimeout(() => {
					router.push("/account");
				}, 3000);
			} else {
				setStatus("error");
				setError(result.error || "Неуспешно потвърждение");
			}
		};

		verify();
	}, [token, router]);

	if (status === "loading") {
		return (
			<div className="container mx-auto max-w-md py-16 px-4">
				<div className="bg-white rounded-lg shadow-sm border p-8 text-center">
					<div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4" />
					<h1 className="text-2xl font-bold mb-2">Потвърждаване...</h1>
					<p className="text-gray-600">
						Моля, изчакайте докато потвърдим вашия имейл адрес.
					</p>
				</div>
			</div>
		);
	}

	if (status === "success") {
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
					<h1 className="text-2xl font-bold mb-2">Имейлът е потвърден!</h1>
					<p className="text-gray-600 mb-6">
						Вашият имейл адрес беше успешно потвърден. Пренасочване към профила
						ви...
					</p>
				</div>
			</div>
		);
	}

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
				<h1 className="text-2xl font-bold mb-2">Грешка при потвърждение</h1>
				<p className="text-gray-600 mb-6">{error}</p>
				<Link href="/account">
					<Button variant="outline" className="w-full">
						Обратно към профила
					</Button>
				</Link>
			</div>
		</div>
	);
}
