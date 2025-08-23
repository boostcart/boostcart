"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
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
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { SetPasswordSchema, type SetPasswordSchemaType } from "@/schemas";
import { setPassword } from "@/server/api/private/auth";

export const SetPassword = () => {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<SetPasswordSchemaType>({
		resolver: zodResolver(SetPasswordSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = (data: SetPasswordSchemaType) => {
		startTransition(() => {
			setPassword(data).then((result) => {
				if (result.success) {
					form.reset();
					router.refresh();
					toast.success("Password set successfully.");
				}

				if (result.error) {
					toast.error(result.error);
				}
			});
		});
	};

	return (
		<div className="flex flex-col w-full max-w-sm my-4 space-y-4">
			<h2 className="font-medium">Set Password</h2>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col space-y-4"
				>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<Label>Password</Label>
								<FormControl>
									<PasswordInput {...field} disabled={isLoading} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<Label>Confirm Password</Label>
								<FormControl>
									<PasswordInput {...field} disabled={isLoading} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button>
						{isLoading && <Loader className="animate-spin" />}
						{isLoading ? "Loading..." : "Set Password"}
					</Button>
				</form>
			</Form>
		</div>
	);
};
