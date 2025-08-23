"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { User } from "@prisma/client";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	UpdatePersonalInfoSchema,
	type UpdatePersonalInfoSchemaType,
} from "@/schemas";
import { updatePersonalInfo } from "@/server/api/private/auth";

interface UpdatePersonalInfoProps {
	user: User;
}

export const UpdatePersonalInfo = ({ user }: UpdatePersonalInfoProps) => {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<UpdatePersonalInfoSchemaType>({
		resolver: zodResolver(UpdatePersonalInfoSchema),
		defaultValues: {
			firstName: user.firstName || user.name?.split(" ")[0] || "",
			lastName: user.lastName || user.name?.split(" ")[1] || "",
			email: user.email || "",
		},
	});

	const onSubmit = (data: UpdatePersonalInfoSchemaType) => {
		startTransition(() => {
			updatePersonalInfo(data).then((result) => {
				if (result.success) {
					router.refresh();
					form.reset();
					toast.success("Personal info updated successfully.");
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
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<Label>First Name</Label>
								<FormControl>
									<Input
										{...field}
										placeholder="Enter your first name"
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
										{...field}
										placeholder="Enter your last name"
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

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

					<Button type="submit" disabled={isLoading}>
						{isLoading && <Loader className="animate-spin" />}
						{isLoading ? "Updating..." : "Update"}
					</Button>
				</form>
			</Form>
		</div>
	);
};
