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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostSchema, PostSchemaType } from "@/schemas";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { newPost } from "@/data/post";
import { locales } from "@/i18n/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const languages = locales;

export default function CreateBlogPostPage() {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [activeTab, setActiveTab] = useState("en");
	const router = useRouter();

	const form = useForm<PostSchemaType>({
		resolver: zodResolver(PostSchema),
		defaultValues: {
			defaultTitle: "",
			slug: "",
			cover: "",
			status: "DRAFT",
			translations: languages.map((lang) => ({
				language: lang,
				title: "",
				content: "",
			})),
		},
	});

	const onSubmit = (data: PostSchemaType) => {
		startTransition(() => {
			newPost(data).then((callback) => {
				if (callback.error) {
					toast.error(t(`dashboard.errors.${callback.error}`));
				}

				if (callback.success) {
					toast.success(t(`dashboard.success.${callback.success}`));
					form.reset();
					router.push("/dashboard/blog");
				}
			});
		});
	};

	// Helper function to find the translation for a specific language
	const getTranslationIndex = (lang: string) => {
		const translations = form.getValues().translations;
		if (!translations) return -1;
		return translations.findIndex((t) => t.language === lang);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col space-y-4"
			>
				<Header
					title={t("dashboard.blog.newPost.title")}
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
						name="defaultTitle"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									{t("dashboard.blog.newPost.defaultTitle.label")}
								</FormLabel>
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
										placeholder="An example title of a post"
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
									<Input {...field} placeholder="an-example-slug-of-a-post" />
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
											name={`translations.${translationIndex}.title`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>{t("general.title")}</FormLabel>
													<FormControl>
														<Input
															{...field}
															placeholder={t("general.title")}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name={`translations.${translationIndex}.content`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>{t("general.content")}</FormLabel>
													<FormControl>
														<Textarea
															{...field}
															placeholder={t("general.content")}
															rows={8}
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
