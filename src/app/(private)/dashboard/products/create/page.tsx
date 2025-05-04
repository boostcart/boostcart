"use client";

import { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Header from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getBrands } from "@/data/brand";
import { getCategories } from "@/data/category";
import { getProductTags, getProducts, newProduct } from "@/data/product";
import { locales } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { Brand, Category, ProductTag } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { TagSelector } from "../_components/tags";
import { CalendarIcon, Check, ChevronsUpDown, Plus, X, ChevronDown } from "lucide-react";
import { ProductSchema, ProductSchemaType } from "@/schemas";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const languages = locales;

export default function CreateProductPage() {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const [categories, setCategories] = useState<Category[]>([]);
	const [brands, setBrands] = useState<Brand[]>([]);
	const [tags, setTags] = useState<ProductTag[]>([]);
	const [availableProducts, setAvailableProducts] = useState<any[]>([]);
	const [activeTab, setActiveTab] = useState("en");
	const router = useRouter();

	const form = useForm<ProductSchemaType>({
		resolver: zodResolver(ProductSchema),
		defaultValues: {
			defaultName: "",
			slug: "",
			price: 0,
			stock: 0,
			sku: "",
			barcode: "",
			status: "DRAFT",
			discountType: undefined,
			discountValue: undefined,
			discountStart: undefined,
			discountEnd: undefined,
			brandId: undefined,
			categoryId: undefined,
			translations: languages.map((lang) => ({
				language: lang,
				name: "",
				shortDescription: "",
				description: "",
			})),
			images: [],
			technicalInfo: [],
			shippingInfo: {
				weight: undefined,
				width: undefined,
				height: undefined,
				depth: undefined,
				isFragile: false,
				freeShipping: false,
				requiresPallet: false,
			},
			variants: [],
			tagIds: [],
			relatedProductIds: [],
			ignoreStock: false,
		},
	});

	// Fetch categories, brands, tags and products for selection
	useEffect(() => {
		async function loadData() {
			const fetchedCategories = await getCategories();
			setCategories(fetchedCategories as unknown as Category[]);

			const fetchedBrands = await getBrands();
			setBrands(fetchedBrands as unknown as Brand[]);

			const fetchedTags = await getProductTags();
			setTags(fetchedTags as unknown as ProductTag[]);

			const fetchedProducts = await getProducts();
			setAvailableProducts(fetchedProducts || []);
		}
		loadData();
	}, []);

	// Fetch the latest product tags on component mount or when refreshed
	useEffect(() => {
		const fetchTags = async () => {
			const fetchedTags = await getProductTags();
			if (fetchedTags && Array.isArray(fetchedTags)) {
				setTags(fetchedTags as ProductTag[]);
			}
		};

		fetchTags();
	}, []);

	// Helper function to find the translation for a specific language
	const getTranslationIndex = (lang: string) => {
		const translations = form.getValues().translations;
		if (!translations) return -1;
		return translations.findIndex((t) => t.language === lang);
	};

	const getTranslationIndexForTechnicalInfo = (index: number, lang: string) => {
		const technicalInfo = form.getValues().technicalInfo;
		if (!technicalInfo || !technicalInfo[index] || !technicalInfo[index].translations) return -1;
		return technicalInfo[index].translations.findIndex((t) => t.language === lang);
	};

	const getTranslationIndexForVariant = (index: number, lang: string) => {
		const variants = form.getValues().variants;
		if (!variants || !variants[index] || !variants[index].translations) return -1;
		return variants[index].translations.findIndex((t) => t.language === lang);
	};

	const onSubmit = (data: ProductSchemaType) => {
		startTransition(async () => {
			const result = await newProduct(data);

			if (result.error) {
				toast.error(
					result.error === "invalid_data"
						? "Please check form for errors"
						: result.error === "not_logged_in"
							? "You must be logged in"
							: result.error === "unauthorized"
								? "You are not authorized to create products"
								: "Something went wrong, please try again"
				);
				return;
			}

			toast.success("Product created successfully");
			form.reset();
			router.push("/dashboard/products");
		});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col space-y-4"
			>
				<Header
					title={t("dashboard.product.newProduct.title")}
					description={t("dashboard.product.newProduct.description")}
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

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2 space-y-6">
						{/* Basic Information */}
						<div className="border rounded-md p-4 space-y-4">
							<h3 className="font-medium text-lg">Basic Information</h3>

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
												placeholder="Product name"
												disabled={isPending}
											/>
										</FormControl>
										<FormDescription>
											Default product name in English
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
												placeholder="product-slug"
												disabled={isPending}
											/>
										</FormControl>
										<FormDescription>
											URL-friendly product identifier
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="price"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Price</FormLabel>
											<FormControl>
												<Input
													{...field}
													type="number"
													step="0.01"
													min="0"
													placeholder="0.00"
													onChange={(e) => field.onChange(parseFloat(e.target.value))}
													disabled={isPending}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="stock"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Stock</FormLabel>
											<FormControl>
												<Input
													{...field}
													type="number"
													min="0"
													step="1"
													placeholder="0"
													onChange={(e) => field.onChange(parseInt(e.target.value))}
													disabled={isPending}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="ignoreStock"
								render={({ field }) => (
									<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
										<div className="space-y-1 leading-none">
											<FormLabel>Ignore Stock</FormLabel>
											<FormDescription>
												Don&apos;t check stock level for this product (useful for digital products, services or dropshipping)
											</FormDescription>
										</div>
									</FormItem>
								)}
							/>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="sku"
									render={({ field }) => (
										<FormItem>
											<FormLabel>SKU (Stock Keeping Unit)</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="SKU123"
													disabled={isPending}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="barcode"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center space-x-2">
												<span>Barcode</span>
												<span className="text-xs text-muted-foreground">
													({t("general.optional")})
												</span>
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="123456789012"
													disabled={isPending}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						{/* Discount Information */}
						<div className="border rounded-md p-4 space-y-4">
							<div className="flex items-center space-x-2">
								<h3 className="font-medium text-lg">Discount</h3>
								<span className="text-xs text-muted-foreground">
									({t("general.optional")})
								</span>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="discountType"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Discount Type</FormLabel>
											<Select
												onValueChange={field.onChange}
												value={field.value}
												disabled={isPending}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select discount type" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="PERCENTAGE">Percentage (%)</SelectItem>
													<SelectItem value="FIXED">Fixed Amount</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="discountValue"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Discount Value</FormLabel>
											<FormControl>
												<Input
													{...field}
													type="number"
													step="0.01"
													min="0"
													placeholder="0.00"
													onChange={(e) => field.onChange(parseFloat(e.target.value))}
													disabled={isPending || !form.watch("discountType")}
												/>
											</FormControl>
											<FormDescription>
												{form.watch("discountType") === "PERCENTAGE"
													? "Percentage discount (e.g., 10 for 10%)"
													: form.watch("discountType") === "FIXED"
														? "Fixed amount discount"
														: "Select a discount type first"}
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="discountStart"
									render={({ field }) => (
										<FormItem className="flex flex-col">
											<FormLabel className="flex items-center space-x-2">
												<span>Discount Start Date</span>
												<span className="text-xs text-muted-foreground">
													({t("general.optional")})
												</span>
											</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={"outline"}
															className={cn(
																"w-full pl-3 text-left font-normal",
																!field.value && "text-muted-foreground"
															)}
															disabled={isPending || !form.watch("discountType")}
														>
															{field.value ? (
																format(field.value, "PPP")
															) : (
																<span>Pick a date</span>
															)}
															<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent className="w-auto p-0" align="start">
													<Calendar
														mode="single"
														selected={field.value}
														onSelect={field.onChange}
														disabled={(date) =>
															date < new Date(new Date().setHours(0, 0, 0, 0))
														}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="discountEnd"
									render={({ field }) => (
										<FormItem className="flex flex-col">
											<FormLabel className="flex items-center space-x-2">
												<span>Discount End Date</span>
												<span className="text-xs text-muted-foreground">
													({t("general.optional")})
												</span>
											</FormLabel>
											<Popover>
												<PopoverTrigger asChild>
													<FormControl>
														<Button
															variant={"outline"}
															className={cn(
																"w-full pl-3 text-left font-normal",
																!field.value && "text-muted-foreground"
															)}
															disabled={
																isPending ||
																!form.watch("discountType") ||
																!form.watch("discountStart")
															}
														>
															{field.value ? (
																format(field.value, "PPP")
															) : (
																<span>Pick a date</span>
															)}
															<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
														</Button>
													</FormControl>
												</PopoverTrigger>
												<PopoverContent className="w-auto p-0" align="start">
													<Calendar
														mode="single"
														selected={field.value}
														onSelect={field.onChange}
														disabled={(date) => {
															const startDate = form.watch("discountStart");
															return (
																date < new Date(new Date()) ||
																(startDate ? date < startDate : false)
															);
														}}
														initialFocus
													/>
												</PopoverContent>
											</Popover>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						{/* Translations section */}
						<div className="border rounded-md p-4">
							<h3 className="mb-4 font-medium text-lg">
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
												name={`translations.${translationIndex}.shortDescription`}
												render={({ field }) => (
													<FormItem>
														<FormLabel className="flex items-center space-x-2">
															<span>Short Description</span>
															<span className="text-xs text-muted-foreground">
																({t("general.optional")})
															</span>
														</FormLabel>
														<FormControl>
															<Textarea
																{...field}
																placeholder="Brief product description"
																className="resize-none"
																rows={3}
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
																placeholder="Full product description"
																className="resize-none"
																rows={6}
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

						{/* Technical Information Section */}
						<div className="border rounded-md p-4 space-y-4">
							<div className="flex justify-between items-center">
								<h3 className="font-medium text-lg">Technical Information</h3>
								<span className="text-xs text-muted-foreground">
									({t("general.optional")})
								</span>
							</div>

							<div className="space-y-4">
								{(form.watch("technicalInfo") || []).map((_field, index) => (
									<div key={`tech-info-${index}`} className="space-y-4 p-4 border rounded-md relative">
										<Button
											type="button"
											variant="ghost"
											size="sm"
											className="absolute right-2 top-2"
											onClick={() => {
												const currentTechInfo = form.getValues("technicalInfo") || [];
												form.setValue(
													"technicalInfo",
													currentTechInfo.filter((_, i) => i !== index)
												);
											}}
										>
											<X className="h-4 w-4" />
										</Button>

										{/* Key and Value inputs */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<FormField
												control={form.control}
												name={`technicalInfo.${index}.key`}
												render={({ field }) => (
													<FormItem>
														<FormLabel>Specification Name</FormLabel>
														<FormControl>
															<Input
																{...field}
																placeholder="e.g. Processor, RAM, Screen Size"
																disabled={isPending}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>

											<FormField
												control={form.control}
												name={`technicalInfo.${index}.value`}
												render={({ field }) => (
													<FormItem>
														<FormLabel>Specification Value</FormLabel>
														<FormControl>
															<Input
																{...field}
																placeholder="e.g. Intel i7, 16GB, 15.6 inches"
																disabled={isPending}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>

										{/* Translations for technical info */}
										<div className="mt-4">
											<Collapsible>
												<CollapsibleTrigger asChild>
													<Button variant="outline" type="button" className="w-full flex justify-between">
														<span>Translations</span>
														<ChevronDown className="h-4 w-4" />
													</Button>
												</CollapsibleTrigger>
												<CollapsibleContent className="mt-2">
													<Tabs defaultValue={activeTab} className="w-full">
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

														{languages.map((lang) => (
															<TabsContent key={lang} value={lang} className="space-y-4">
																<FormField
																	control={form.control}
																	name={`technicalInfo.${index}.translations.${getTranslationIndexForTechnicalInfo(index, lang)}.key`}
																	render={({ field }) => (
																		<FormItem>
																			<FormLabel>Specification Name ({lang.toUpperCase()})</FormLabel>
																			<FormControl>
																				<Input
																					{...field}
																					placeholder={`Translated specification name in ${lang.toUpperCase()}`}
																					disabled={isPending}
																				/>
																			</FormControl>
																			<FormMessage />
																		</FormItem>
																	)}
																/>

																<FormField
																	control={form.control}
																	name={`technicalInfo.${index}.translations.${getTranslationIndexForTechnicalInfo(index, lang)}.value`}
																	render={({ field }) => (
																		<FormItem>
																			<FormLabel>Specification Value ({lang.toUpperCase()})</FormLabel>
																			<FormControl>
																				<Input
																					{...field}
																					placeholder={`Translated specification value in ${lang.toUpperCase()}`}
																					disabled={isPending}
																				/>
																			</FormControl>
																			<FormMessage />
																		</FormItem>
																	)}
																/>
															</TabsContent>
														))}
													</Tabs>
												</CollapsibleContent>
											</Collapsible>
										</div>
									</div>
								))}

								<Button
									type="button"
									variant="outline"
									size="sm"
									className="mt-2 w-full"
									onClick={() => {
										const currentTechInfo = form.getValues("technicalInfo") || [];
										form.setValue("technicalInfo", [
											...currentTechInfo,
											{
												key: "",
												value: "",
												translations: languages.map((lang) => ({
													language: lang,
													key: "",
													value: "",
												})),
											},
										]);
									}}
								>
									<Plus className="h-4 w-4 mr-2" />
									Add Technical Specification
								</Button>
							</div>
						</div>

						{/* Product Variants Section */}
						<div className="border rounded-md p-4 space-y-4">
							<div className="flex justify-between items-center">
								<h3 className="font-medium text-lg">Product Variants</h3>
								<span className="text-xs text-muted-foreground">
									({t("general.optional")})
								</span>
							</div>

							<div className="space-y-4">
								{(form.watch("variants") || []).map((_variant, variantIndex) => (
									<div key={`variant-${variantIndex}`} className="space-y-4 p-4 border rounded-md relative">
										<Button
											type="button"
											variant="ghost"
											size="sm"
											className="absolute right-2 top-2"
											onClick={() => {
												const currentVariants = form.getValues("variants") || [];
												form.setValue(
													"variants",
													currentVariants.filter((_, i) => i !== variantIndex)
												);
											}}
										>
											<X className="h-4 w-4" />
										</Button>

										<div className="space-y-4">
											{/* Variant basic information */}
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<FormField
													control={form.control}
													name={`variants.${variantIndex}.name`}
													render={({ field }) => (
														<FormItem>
															<FormLabel>Variant Name</FormLabel>
															<FormControl>
																<Input
																	{...field}
																	placeholder="e.g. Small/Blue, Large/Red"
																	disabled={isPending}
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>

												<FormField
													control={form.control}
													name={`variants.${variantIndex}.status`}
													render={({ field }) => (
														<FormItem>
															<FormLabel>Status</FormLabel>
															<Select
																onValueChange={field.onChange}
																defaultValue={field.value}
																disabled={isPending}
															>
																<FormControl>
																	<SelectTrigger>
																		<SelectValue placeholder="Select status" />
																	</SelectTrigger>
																</FormControl>
																<SelectContent>
																	<SelectItem value="DRAFT">{t("status.draft")}</SelectItem>
																	<SelectItem value="HIDDEN">{t("status.hidden")}</SelectItem>
																	<SelectItem value="PUBLISHED">{t("status.published")}</SelectItem>
																</SelectContent>
															</Select>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>

											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<FormField
													control={form.control}
													name={`variants.${variantIndex}.price`}
													render={({ field }) => (
														<FormItem>
															<FormLabel>Price</FormLabel>
															<FormControl>
																<Input
																	{...field}
																	type="number"
																	step="0.01"
																	min="0"
																	placeholder="0.00"
																	onChange={(e) => field.onChange(parseFloat(e.target.value))}
																	disabled={isPending}
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>

												<FormField
													control={form.control}
													name={`variants.${variantIndex}.stock`}
													render={({ field }) => (
														<FormItem>
															<FormLabel>Stock</FormLabel>
															<FormControl>
																<Input
																	{...field}
																	type="number"
																	min="0"
																	step="1"
																	placeholder="0"
																	onChange={(e) => field.onChange(parseInt(e.target.value))}
																	disabled={isPending}
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>

											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<FormField
													control={form.control}
													name={`variants.${variantIndex}.sku`}
													render={({ field }) => (
														<FormItem>
															<FormLabel>SKU (Stock Keeping Unit)</FormLabel>
															<FormControl>
																<Input
																	{...field}
																	placeholder="VAR-SKU123"
																	disabled={isPending}
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>

												<FormField
													control={form.control}
													name={`variants.${variantIndex}.barcode`}
													render={({ field }) => (
														<FormItem>
															<FormLabel className="flex items-center space-x-2">
																<span>Barcode</span>
																<span className="text-xs text-muted-foreground">
																	({t("general.optional")})
																</span>
															</FormLabel>
															<FormControl>
																<Input
																	{...field}
																	placeholder="123456789012"
																	disabled={isPending}
																/>
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>

											{/* Variant Options */}
											<div className="space-y-2">
												<div className="flex justify-between items-center">
													<h4 className="font-medium">Variant Options</h4>
													<Button
														type="button"
														variant="outline"
														size="sm"
														onClick={() => {
															const currentOptions = form.getValues(`variants.${variantIndex}.options`) || [];
															form.setValue(`variants.${variantIndex}.options`, [
																...currentOptions,
																{
																	name: "",
																	value: "",
																},
															]);
														}}
													>
														<Plus className="h-3 w-3 mr-1" />
														Add Option
													</Button>
												</div>

												{(form.watch(`variants.${variantIndex}.options`) || []).length > 0 ? (
													<div className="space-y-2">
														{(form.watch(`variants.${variantIndex}.options`) || []).map((_option, optionIndex) => (
															<div key={`option-${variantIndex}-${optionIndex}`} className="grid grid-cols-2 gap-4 items-center border p-2 rounded-md">
																<FormField
																	control={form.control}
																	name={`variants.${variantIndex}.options.${optionIndex}.name`}
																	render={({ field }) => (
																		<FormItem>
																			<FormLabel>Option Name</FormLabel>
																			<FormControl>
																				<Input
																					{...field}
																					placeholder="e.g. Size, Color"
																					disabled={isPending}
																				/>
																			</FormControl>
																			<FormMessage />
																		</FormItem>
																	)}
																/>

																<FormField
																	control={form.control}
																	name={`variants.${variantIndex}.options.${optionIndex}.value`}
																	render={({ field }) => (
																		<FormItem>
																			<FormLabel>Option Value</FormLabel>
																			<div className="flex items-center space-x-2">
																				<FormControl className="flex-1">
																					<Input
																						{...field}
																						placeholder="e.g. Large, Blue"
																						disabled={isPending}
																					/>
																				</FormControl>
																				<Button
																					type="button"
																					variant="ghost"
																					size="icon"
																					className="h-9 w-9"
																					onClick={() => {
																						const currentOptions = form.getValues(`variants.${variantIndex}.options`) || [];
																						form.setValue(
																							`variants.${variantIndex}.options`,
																							currentOptions.filter((_, i) => i !== optionIndex)
																						);
																					}}
																				>
																					<X className="h-4 w-4" />
																				</Button>
																			</div>
																			<FormMessage />
																		</FormItem>
																	)}
																/>
															</div>
														))}
													</div>
												) : (
													<p className="text-sm text-muted-foreground">No options added yet. Add options to define variant attributes like size, color, etc.</p>
												)}
											</div>

											{/* Variant Translations */}
											<div className="mt-4">
												<Collapsible>
													<CollapsibleTrigger asChild>
														<Button variant="outline" type="button" className="w-full flex justify-between">
															<span>Translations</span>
															<ChevronDown className="h-4 w-4" />
														</Button>
													</CollapsibleTrigger>
													<CollapsibleContent className="mt-2">
														<Tabs defaultValue={activeTab} className="w-full">
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

															{languages.map((lang) => (
																<TabsContent key={lang} value={lang} className="space-y-4">
																	<FormField
																		control={form.control}
																		name={`variants.${variantIndex}.translations.${getTranslationIndexForVariant(variantIndex, lang)}.name`}
																		render={({ field }) => (
																			<FormItem>
																				<FormLabel>Variant Name ({lang.toUpperCase()})</FormLabel>
																				<FormControl>
																					<Input
																						{...field}
																						placeholder={`Translated variant name in ${lang.toUpperCase()}`}
																						disabled={isPending}
																					/>
																				</FormControl>
																				<FormMessage />
																			</FormItem>
																		)}
																	/>
																</TabsContent>
															))}
														</Tabs>
													</CollapsibleContent>
												</Collapsible>
											</div>
										</div>
									</div>
								))}

								<Button
									type="button"
									variant="outline"
									size="sm"
									className="w-full"
									onClick={() => {
										const currentVariants = form.getValues("variants") || [];
										form.setValue("variants", [
											...currentVariants,
											{
												name: "",
												price: form.getValues("price") || 0,
												stock: form.getValues("stock") || 0,
												sku: "",
												barcode: "",
												status: "DRAFT",
												options: [],
												translations: languages.map((lang) => ({
													language: lang,
													name: "",
												})),
											},
										]);
									}}
								>
									<Plus className="h-4 w-4 mr-2" />
									Add Product Variant
								</Button>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						{/* Status and Categories */}
						<div className="border rounded-md p-4 space-y-4">
							<h3 className="font-medium text-lg">Status</h3>

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
								name="categoryId"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel>Category</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant="outline"
														role="combobox"
														className={cn(
															"w-full justify-between",
															!field.value && "text-muted-foreground"
														)}
														disabled={isPending}
													>
														{field.value
															? categories.find(
																(category) => category.id === field.value
															)?.defaultName
															: "Select category"}
														<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent
												className="w-[--radix-popover-trigger-width] p-0"
												align="start"
											>
												<Command>
													<CommandInput placeholder="Search category..." />
													<CommandList>
														<CommandEmpty>No category found</CommandEmpty>
														<CommandGroup>
															{categories.map((category) => (
																<CommandItem
																	value={category.defaultName}
																	key={category.id}
																	onSelect={() => {
																		form.setValue("categoryId", category.id);
																	}}
																>
																	<Check
																		className={cn(
																			"mr-2 h-4 w-4",
																			category.id === field.value
																				? "opacity-100"
																				: "opacity-0"
																		)}
																	/>
																	{category.defaultName}
																	{category.level > 0 && (
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
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="brandId"
								render={({ field }) => (
									<FormItem className="flex flex-col">
										<FormLabel>Brand</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button
														variant="outline"
														role="combobox"
														className={cn(
															"w-full justify-between",
															!field.value && "text-muted-foreground"
														)}
														disabled={isPending}
													>
														{field.value
															? brands.find((brand) => brand.id === field.value)?.name
															: "Select brand"}
														<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent
												className="w-[--radix-popover-trigger-width] p-0"
												align="start"
											>
												<Command>
													<CommandInput placeholder="Search brand..." />
													<CommandList>
														<CommandEmpty>No brand found</CommandEmpty>
														<CommandGroup>
															{brands.map((brand) => (
																<CommandItem
																	value={brand.name}
																	key={brand.id}
																	onSelect={() => {
																		form.setValue("brandId", brand.id);
																	}}
																>
																	<Check
																		className={cn(
																			"mr-2 h-4 w-4",
																			brand.id === field.value
																				? "opacity-100"
																				: "opacity-0"
																		)}
																	/>
																	{brand.name}
																</CommandItem>
															))}
														</CommandGroup>
													</CommandList>
												</Command>
											</PopoverContent>
										</Popover>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{/* Shipping Information */}
						<div className="border rounded-md p-4 space-y-4">
							<h3 className="font-medium text-lg">Shipping Information</h3>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="shippingInfo.weight"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Weight (kg)</FormLabel>
											<FormControl>
												<Input
													{...field}
													type="number"
													step="0.01"
													min="0"
													placeholder="0.00"
													onChange={(e) =>
														field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)
													}
													disabled={isPending}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="shippingInfo.width"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Width (cm)</FormLabel>
											<FormControl>
												<Input
													{...field}
													type="number"
													step="0.1"
													min="0"
													placeholder="0.0"
													onChange={(e) =>
														field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)
													}
													disabled={isPending}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="shippingInfo.height"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Height (cm)</FormLabel>
											<FormControl>
												<Input
													{...field}
													type="number"
													step="0.1"
													min="0"
													placeholder="0.0"
													onChange={(e) =>
														field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)
													}
													disabled={isPending}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="shippingInfo.depth"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Depth (cm)</FormLabel>
											<FormControl>
												<Input
													{...field}
													type="number"
													step="0.1"
													min="0"
													placeholder="0.0"
													onChange={(e) =>
														field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)
													}
													disabled={isPending}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className="flex flex-col xl:flex-row gap-4">
								<FormField
									control={form.control}
									name="shippingInfo.isFragile"
									render={({ field }) => (
										<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
											<FormControl>
												<Checkbox
													checked={field.value}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
											<div className="space-y-1 leading-none">
												<FormLabel>Fragile</FormLabel>
												<FormDescription>
													Mark if product requires special handling
												</FormDescription>
											</div>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="shippingInfo.requiresPallet"
									render={({ field }) => (
										<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
											<FormControl>
												<Checkbox
													checked={field.value}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
											<div className="space-y-1 leading-none">
												<FormLabel>Requires Pallet</FormLabel>
												<FormDescription>
													Mark if product needs to be shipped on a pallet
												</FormDescription>
											</div>
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="shippingInfo.freeShipping"
								render={({ field }) => (
									<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
										<div className="space-y-1 leading-none">
											<FormLabel>Free Shipping</FormLabel>
											<FormDescription>
												Offer free shipping for this product
											</FormDescription>
										</div>
									</FormItem>
								)}
							/>
						</div>

						{/* Tags section */}
						<div className="border rounded-md p-4 space-y-4">
							<div className="flex justify-between items-center">
								<h3 className="font-medium text-lg">Tags</h3>
								<span className="text-xs text-muted-foreground">
									({t("general.optional")})
								</span>
							</div>

							<TagSelector
								form={form}
								tags={tags}
								disabled={isPending}
							/>
						</div>

						{/* Related Products section */}
						<div className="border rounded-md p-4 space-y-4">
							<div className="flex justify-between items-center">
								<h3 className="font-medium text-lg">Related Products</h3>
								<span className="text-xs text-muted-foreground">
									({t("general.optional")})
								</span>
							</div>

							<FormField
								control={form.control}
								name="relatedProductIds"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Select Related Products</FormLabel>
										<FormDescription>
											Choose products to display as related items
										</FormDescription>
										<div className="border rounded-md">
											<Command className="rounded-lg border shadow-md">
												<CommandInput placeholder="Search products..." />
												<CommandList>
													<CommandEmpty>No products found</CommandEmpty>
													<CommandGroup heading="Products">
														{availableProducts && availableProducts.length > 0 ? (
															availableProducts.map((product) => (
																<CommandItem
																	key={product.id}
																	onSelect={() => {
																		const currentSelected = field.value || [];
																		const isSelected = currentSelected.includes(product.id);

																		// Toggle selection
																		if (isSelected) {
																			form.setValue(
																				"relatedProductIds",
																				currentSelected.filter((id) => id !== product.id)
																			);
																		} else {
																			form.setValue(
																				"relatedProductIds",
																				[...currentSelected, product.id]
																			);
																		}
																	}}
																>
																	<div className="flex items-center">
																		<Checkbox
																			checked={(field.value || []).includes(product.id)}
																			className="mr-2 h-4 w-4"
																		/>
																		<span>{product.defaultName}</span>
																	</div>
																</CommandItem>
															))
														) : (
															<CommandItem disabled>No products available</CommandItem>
														)}
													</CommandGroup>
												</CommandList>
											</Command>
										</div>
										<div className="mt-2">
											{field.value && field.value.length > 0 ? (
												<div className="flex flex-wrap gap-2 mt-2">
													{field.value.map((productId) => {
														const product = availableProducts.find(p => p.id === productId);
														return product ? (
															<div
																key={productId}
																className="flex items-center bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
															>
																{product.defaultName}
																<Button
																	type="button"
																	variant="ghost"
																	size="sm"
																	className="h-auto p-0 pl-1"
																	onClick={() => {
																		form.setValue(
																			"relatedProductIds",
																			(field.value || []).filter((id) => id !== productId)
																		);
																	}}
																>
																	<span className="sr-only">Remove</span>
																	<span aria-hidden="true" className="text-sm">×</span>
																</Button>
															</div>
														) : null;
													})}
												</div>
											) : (
												<p className="text-sm text-muted-foreground">No related products selected</p>
											)}
										</div>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
				</div>
			</form>
		</Form>
	);
}
