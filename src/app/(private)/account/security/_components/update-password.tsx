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
import { UpdatePasswordSchema, type UpdatePasswordSchemaType } from "@/schemas";
import { updatePassword } from "@/server/api/private/auth";

export const UpdatePassword = () => {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<UpdatePasswordSchemaType>({
		resolver: zodResolver(UpdatePasswordSchema),
		defaultValues: {
			oldPassword: "",
			newPassword: "",
		},
	});

	const onSubmit = async (data: UpdatePasswordSchemaType) => {
		startTransition(() => {
			updatePassword(data).then((result) => {
				if (result.success) {
					form.reset();
					router.refresh();
					toast.success("Password updated successfully.");
				}

				if (result.error) {
					toast.error(result.error);
				}
			});
		});
	};

	return (
		<div className="flex flex-col w-full max-w-sm my-4 space-y-4">
			<h2 className="font-medium">Update Password</h2>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col space-y-4"
				>
					<FormField
						control={form.control}
						name="oldPassword"
						render={({ field }) => (
							<FormItem>
								<Label>Old Password</Label>
								<FormControl>
									<PasswordInput
										{...field}
										placeholder="Enter your old password"
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="newPassword"
						render={({ field }) => (
							<FormItem>
								<Label>New Password</Label>
								<FormControl>
									<PasswordInput
										{...field}
										placeholder="Enter your new password"
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{form.formState.errors && (
						<div className="text-sm text-red-500">
							{Object.values(form.formState.errors).map((error) => (
								<p key={error.message}>{error.message}</p>
							))}
						</div>
					)}

					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading && <Loader className="animate-spin" />}
						{isLoading ? "Updating..." : "Update Password"}
					</Button>
				</form>
			</Form>
		</div>
	);
};
