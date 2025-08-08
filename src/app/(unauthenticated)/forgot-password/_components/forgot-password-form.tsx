"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ForgotPasswordSchema, type ForgotPasswordSchemaType } from "@/schemas";
import { userForgotPassword } from "@/server/api/public/auth";

export const ForgotPasswordForm = () => {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<ForgotPasswordSchemaType>({
		resolver: zodResolver(ForgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (data: ForgotPasswordSchemaType) => {
		startTransition(() => {
			userForgotPassword(data).then((result) => {
				if (result.success) {
					router.push("/signin");
					toast.success("Password updated successfully. Please sign in.");
				}

				if (result.error) {
					toast.error(result.error);
				}
			});
		});
	};

	return (
		<div className="flex flex-col flex-1 lg:w-1/2 w-full">
			<div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
				<Link
					href="/signin"
					className="inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
				>
					<ChevronLeftIcon />
					Back to Sign In
				</Link>
			</div>
			<div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="mb-5 sm:mb-8">
							<h1 className="mb-2 font-semibold text-neutral-800 text-3xl dark:text-white/90 sm:text-4xl">
								Forgot Password
							</h1>
							<p className="text-sm text-neutral-500 dark:text-neutral-400">
								Enter your email so we can send you a link to reset your
								password.
							</p>
						</div>
						<div className="flex flex-col space-y-6">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<Label>Email</Label>
										<FormControl>
											<Input
												{...field}
												type="email"
												placeholder="Enter your email"
												disabled={isLoading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type="submit" className="w-full">
								{isLoading && <Loader className="animate-spin" />}
								{isLoading ? "Sending..." : "Send Reset Link"}
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};
