"use client";

import {
	Form,
	FormControl,
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
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { BrandSchema, BrandSchemaType } from "@/schemas";
import { CircleHelp, Pencil, Save } from "lucide-react";
import React, { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { editBrand } from "@/data/brand";
import { zodResolver } from "@hookform/resolvers/zod";
import { Brand } from "@prisma/client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const EditBrand: React.FC<{ brand: Brand }> = ({ brand }) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setOpen] = useState<boolean>(false);
	const router = useRouter();

	const form = useForm<BrandSchemaType>({
		resolver: zodResolver(BrandSchema),
		defaultValues: {
			name: brand.name,
			slug: brand.slug,
			logo: brand.logo || "",
			description: brand.description || "",
			status: brand.status,
		},
	});

	const onSubmit = (data: BrandSchemaType) => {
		startTransition(() => {
			editBrand(brand.id, data).then((callback) => {
				if (callback.error) {
					toast.error(t(`dashboard.errors.${callback.error}`));
				}

				if (callback.success) {
					toast.success(t(`dashboard.success.${callback.success}`));
					router.refresh();
					setOpen(false);
				}
			});
		});
	};

	return (
		<Sheet open={isOpen} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" disabled={isPending}>
					<Pencil />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<SheetHeader>
							<SheetTitle>
								{t("dashboard.brand.editBrand.title", {
									brandName: brand.name,
								})}
							</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col my-4 space-y-4">
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
										<div className="flex items-center space-x-2">
											<FormControl>
												<Input
													{...field}
													placeholder="an-example-slug-of-a-brand"
												/>
											</FormControl>
											<Tooltip>
												<TooltipTrigger
													type="button"
													className="text-muted-foreground hover:text-black transition-colors"
												>
													<CircleHelp />
												</TooltipTrigger>
												<TooltipContent
													side="left"
													avoidCollisions={false}
													className="max-w-sm"
												>
													<p>
														{t("dashboard.brand.newBrand.slug.description")}
													</p>
												</TooltipContent>
											</Tooltip>
										</div>
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
											<span className="text-muted-foreground text-xs">
												({t("general.optional")})
											</span>
										</FormLabel>
										<FormControl>
											<Textarea
												{...field}
												placeholder={t("general.description")}
											/>
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
										<div className="flex items-center space-x-2">
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
													<SelectItem value="DRAFT">
														{t("status.draft")}
													</SelectItem>
													<SelectItem value="HIDDEN">
														{t("status.hidden")}
													</SelectItem>
													<SelectItem value="PUBLISHED">
														{t("status.published")}
													</SelectItem>
												</SelectContent>
											</Select>
											<Tooltip>
												<TooltipTrigger
													type="button"
													className="text-muted-foreground hover:text-black transition-colors"
												>
													<CircleHelp />
												</TooltipTrigger>
												<TooltipContent
													side="left"
													avoidCollisions={false}
													className="max-w-sm"
												>
													<p>{t("status.hiddenStatus")}</p>
												</TooltipContent>
											</Tooltip>
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<SheetFooter>
							<SheetClose asChild>
								<Button
									onClick={() => {
										form.reset();
									}}
									variant="secondary"
									disabled={isPending}
								>
									{t("general.cancel")}
								</Button>
							</SheetClose>
							<Button disabled={isPending}>
								<Save />
								{t("general.saveChanges")}
							</Button>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
};

export default EditBrand;
