"use client";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { BrandSchema, BrandSchemaType } from "@/schemas";

import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { newBrand } from "@/data/brand";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function CreateBrandPage() {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<BrandSchemaType>({
		resolver: zodResolver(BrandSchema),
		defaultValues: {
			name: "",
			slug: "",
			logo: "",
			description: "",
			status: "DRAFT",
		},
	});

	const onSubmit = (data: BrandSchemaType) => {
		startTransition(() => {
			newBrand(data).then((callback) => {
				if (callback.error) {
					toast.error(t(`dashboard.errors.${callback.error}`));
				}

				if (callback.success) {
					toast.success(t(`dashboard.success.${callback.success}`));
					form.reset();
					router.push("/dashboard/brands");
				}
			});
		});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col space-y-4"
			>
				<Header
					title={t("dashboard.brand.newBrand.title")}
					// description={t("dashboard.blog.newPost.description")}
				>
					<Button
						variant="secondary"
						type="button"
						onClick={() => {
							form.reset();
							router.back();
						}}
						disabled={isPending}
					>
						{t("general.cancel")}
					</Button>
					<Button type="submit" disabled={isPending}>
						<Plus />
						{t("general.create")}
					</Button>
				</Header>

				<div className="flex flex-col space-y-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("general.name")}</FormLabel>
								<FormControl>
									<Input
										{...field}
										onChange={(e) => {
											field.onChange(e);

											// Convert title to slug format
											const slug = e.target.value
												.toLowerCase()
												.replace(/[^\w\s-]/g, "") // Remove special characters
												.replace(/\s+/g, "-") // Replace spaces with hyphens
												.replace(/_/g, "-") // Replace underscores with hyphens
												.replace(/-+/g, "-") // Replace multiple hyphens with single
												.replace(/^-+|-+$/g, "") // Remove hyphens from start and end
												.trim();

											// Update the slug field
											form.setValue("slug", slug);
										}}
										placeholder={t("general.brand")}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="slug"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("general.slug")}</FormLabel>
								<FormControl>
									<Input {...field} placeholder="an-example-slug-of-a-brand" />
								</FormControl>
								<FormDescription>
									{t("dashboard.blog.newPost.slug.description")}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="flex items-center space-x-2">
									<span>{t("general.description")}</span>
									<span className="text-xs text-muted-foreground">
										({t("general.optional")})
									</span>
								</FormLabel>
								<FormControl>
									<Textarea {...field} placeholder={t("general.description")} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="status"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("general.status")}</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder={t("general.status")} />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="DRAFT">{t("status.draft")}</SelectItem>
										<SelectItem value="HIDDEN">{t("status.hidden")}</SelectItem>
										<SelectItem value="PUBLISHED">
											{t("status.published")}
										</SelectItem>
									</SelectContent>
								</Select>
								<FormDescription>{t("status.hiddenStatus")}</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
			</form>
		</Form>
	);
}
