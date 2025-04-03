"use client";

import { CircleHelp, FilePlus2, Plus } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { PostSchema, PostSchemaType } from "@/schemas";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { locales } from "@/i18n/config";
import { newPost } from "@/data/post";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

const languages = locales;

const NewPost = () => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [isOpen, setOpen] = useState<boolean>(false);
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
				content: ""
			}))
		}
	});

	const onSubmit = (data: PostSchemaType) => {
		startTransition(() => {
			newPost(data)
				.then((callback) => {
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
	}

	// Helper function to find the translation for a specific language
	const getTranslationIndex = (lang: string) => {
		const translations = form.getValues().translations;
		if (!translations) return -1;
		return translations.findIndex(t => t.language === lang);
	}

	return (
		<Sheet open={isOpen} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button>
					<FilePlus2 />
					{t("dashboard.blog.newPost.button")}
				</Button>
			</SheetTrigger>
			<SheetContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<SheetHeader>
							<SheetTitle>{t("dashboard.blog.newPost.title")}</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col my-4 space-y-4">
							<FormField
								control={form.control}
								name="defaultTitle"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											{t("dashboard.blog.newPost.defaultTitle.label")}
										</FormLabel>
										<div className="flex items-center space-x-2">
											<FormControl>
												<Input
													{...field}
													onChange={(e) => {
														field.onChange(e);

														// Convert title to slug format
														const slug = e.target.value
															.toLowerCase()
															.replace(/[^\w\s-]/g, '') // Remove special characters
															.replace(/\s+/g, '-')     // Replace spaces with hyphens
															.replace(/_/g, '-')       // Replace underscores with hyphens
															.replace(/-+/g, '-')      // Replace multiple hyphens with single
															.replace(/^-+|-+$/g, '')  // Remove hyphens from start and end
															.trim();

														// Update the slug field
														form.setValue("slug", slug);
													}}
													placeholder="An example title of a post"
												/>
											</FormControl>
											<Tooltip>
												<TooltipTrigger type="button" className="text-muted-foreground hover:text-black transition-colors">
													<CircleHelp />
												</TooltipTrigger>
												<TooltipContent
													side="left"
													avoidCollisions={false}
													className="max-w-sm"
												>
													<p>{t("dashboard.blog.newPost.defaultTitle.description")}</p>
												</TooltipContent>
											</Tooltip>
										</div>
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
													placeholder="an-example-slug-of-a-post"
												/>
											</FormControl>
											<Tooltip>
												<TooltipTrigger type="button" className="text-muted-foreground hover:text-black transition-colors">
													<CircleHelp />
												</TooltipTrigger>
												<TooltipContent
													side="left"
													avoidCollisions={false}
													className="max-w-sm"
												>
													<p>{t("dashboard.blog.newPost.slug.description")}</p>
												</TooltipContent>
											</Tooltip>
										</div>
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
											<Select onValueChange={field.onChange} defaultValue={field.value}>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder={t("general.status")} />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="DRAFT">{t("status.draft")}</SelectItem>
													<SelectItem value="HIDDEN">{t("status.hidden")}</SelectItem>
													<SelectItem value="PUBLISHED">{t("status.published")}</SelectItem>
												</SelectContent>
											</Select>
											<Tooltip>
												<TooltipTrigger type="button" className="text-muted-foreground hover:text-black transition-colors">
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

							{/* Translations section */}
							<div className="border rounded-md p-4 mt-6">
								<h3 className="font-medium mb-4">{t("dashboard.blog.newPost.translations.title")}</h3>

								<Tabs value={activeTab} onValueChange={setActiveTab}>
									<TabsList className="mb-4">
										{languages.map(lang => (
											<TabsTrigger key={lang} value={lang} className="uppercase cursor-pointer">
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
						<SheetFooter>
							<SheetClose asChild>
								<Button onClick={() => {
									form.reset();
								}} variant="secondary" disabled={isPending}>
									{t("general.cancel")}
								</Button>
							</SheetClose>
							<Button disabled={isPending}>
								<Plus />
								{t("general.create")}
							</Button>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	)
}

export default NewPost;