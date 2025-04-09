"use client";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
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
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategorySchema, CategorySchemaType } from "@/schemas";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getCategories, newCategory } from "@/data/category";
import { locales } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const languages = locales;

export default function CreateCategoryPage() {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [categories, setCategories] = useState<Category[]>([]);
	const [activeTab, setActiveTab] = useState("en");
	const router = useRouter();

	const form = useForm<CategorySchemaType>({
		resolver: zodResolver(CategorySchema),
		defaultValues: {
			defaultName: "",
			slug: "",
			image: "",
			status: "DRAFT",
			parentId: undefined,
			level: 0,
			translations: languages.map((lang) => ({
				language: lang,
				name: "",
				description: "",
			})),
		},
	});

	// Fetch categories for parent selection
	useEffect(() => {
		async function loadCategories() {
			const fetchedCategories = await getCategories(1, true);
			setCategories(fetchedCategories as unknown as Category[]);
		}
		loadCategories();
	}, []);

	// Helper function to find the translation for a specific language
	const getTranslationIndex = (lang: string) => {
		const translations = form.getValues().translations;
		if (!translations) return -1;
		return translations.findIndex((t) => t.language === lang);
	};

	const onSubmit = (data: CategorySchemaType) => {
		startTransition(() => {
			newCategory(data)
				.then((callback) => {
					if (callback.error) {
						toast.error(t(`dashboard.errors.${callback.error}`));
					}

					if (callback.success) {
						toast.success(t(`dashboard.success.${callback.success}`));
						form.reset();
						router.push("/dashboard/categories");
					}
				})
				.catch(() => {
					toast.error(t(`dashboard.errors.something_went_wrong`));
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
					title={t("dashboard.category.newCategory.title")}
					description={t("dashboard.category.newCategory.description")}
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
						name="defaultName"
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
										placeholder="An example name of a category"
										disabled={isPending}
									/>
								</FormControl>
								<FormDescription>
									{t("dashboard.blog.newPost.defaultTitle.description")}
								</FormDescription>
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
									<Input
										{...field}
										placeholder="an-example-slug-of-a-category"
										disabled={isPending}
									/>
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
						name="status"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("general.status")}</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
									disabled={isPending}
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

					<FormField
						control={form.control}
						name="parentId"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>Parent Category (Optional)</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant="outline"
												role="combobox"
												className={cn(
													"w-full justify-between",
													!field.value && "text-muted-foreground",
												)}
												disabled={isPending}
											>
												{field.value
													? categories.find(
															(category) => category.id === field.value,
														)?.defaultName
													: "Select parent category"}
												<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent
										className="w-[--radix-popover-trigger-width] p-0"
										align="start"
									>
										<Command>
											<CommandInput
												placeholder={t("dashboard.category.search")}
											/>
											<CommandList>
												<CommandEmpty>
													{t("dashboard.category.noResults")}
												</CommandEmpty>
												<CommandGroup>
													<CommandItem
														value="null"
														onSelect={() => {
															form.setValue("parentId", undefined);
														}}
													>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																!field.value ? "opacity-100" : "opacity-0",
															)}
														/>
														{t("dashboard.category.noParent")}
													</CommandItem>
													{categories.map((category) => (
														<CommandItem
															value={category.defaultName}
															key={category.id}
															onSelect={() => {
																form.setValue("parentId", category.id);

																if (category.level === 0) {
																	form.setValue("level", 1);
																}

																if (category.level === 1) {
																	form.setValue("level", 2);
																}
															}}
														>
															<Check
																className={cn(
																	"mr-2 h-4 w-4",
																	category.id === field.value
																		? "opacity-100"
																		: "opacity-0",
																)}
															/>
															{category.defaultName}
															{category.level === 1 && category.parentId && (
																<span className="ml-2 text-xs text-muted-foreground">
																	(Subcategory of{" "}
																	{
																		categories.find(
																			(p) => p.id === category.parentId,
																		)?.defaultName
																	}
																	)
																</span>
															)}
														</CommandItem>
													))}
												</CommandGroup>
											</CommandList>
										</Command>
									</PopoverContent>
								</Popover>
								<FormDescription>
									Create a hierarchy by selecting a parent
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Translations section */}
					<div className="p-4 mt-6 border rounded-md">
						<h3 className="mb-4 font-medium">
							{t("dashboard.blog.newPost.translations.title")}
						</h3>

						<Tabs value={activeTab} onValueChange={setActiveTab}>
							<TabsList className="mb-4">
								{languages.map((lang) => (
									<TabsTrigger
										key={lang}
										value={lang}
										className="uppercase cursor-pointer"
									>
										{lang}
									</TabsTrigger>
								))}
							</TabsList>

							{languages.map((lang) => {
								const translationIndex = getTranslationIndex(lang);

								return (
									<TabsContent key={lang} value={lang} className="space-y-4">
										<FormField
											control={form.control}
											name={`translations.${translationIndex}.name`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>{t("general.name")}</FormLabel>
													<FormControl>
														<Input
															{...field}
															placeholder={t("general.name")}
															disabled={isPending}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name={`translations.${translationIndex}.description`}
											render={({ field }) => (
												<FormItem>
													<FormLabel className="flex items-center space-x-2">
														<span>{t("general.description")}</span>
														<span className="text-xs text-muted-foreground">
															({t("general.optional")})
														</span>
													</FormLabel>
													<FormControl>
														<Textarea
															{...field}
															placeholder={t("general.description")}
															disabled={isPending}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</TabsContent>
								);
							})}
						</Tabs>
					</div>
				</div>
			</form>
		</Form>
	);
}
