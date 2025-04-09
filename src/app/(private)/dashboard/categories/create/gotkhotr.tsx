"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
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
import {
	CategorySchema,
	CategorySchemaType,
	CategoryTranslationSchemaType,
} from "@/schemas";
import { Loader2, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getCategories } from "@/data/category";
import { Category } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function DashboardCreateCategory() {
	const router = useRouter();
	const [isLoading, _setIsLoading] = useState(false);
	const [categories, setCategories] = useState<Category[]>([]);
	const [translations, setTranslations] = useState<
		CategoryTranslationSchemaType[]
	>([]);
	const [language, setLanguage] = useState("");
	const [translationName, setTranslationName] = useState("");
	const [translationDescription, setTranslationDescription] = useState("");

	const form = useForm<CategorySchemaType>({
		resolver: zodResolver(CategorySchema),
		defaultValues: {
			defaultName: "",
			slug: "",
			description: "",
			image: "",
			status: "DRAFT",
			parentId: undefined,
			level: 0,
			translations: [],
		},
	});

	// Fetch categories for parent selection
	useEffect(() => {
		async function loadCategories() {
			const fetchedCategories = await getCategories();
			setCategories(fetchedCategories as unknown as Category[]);
		}
		loadCategories();
	}, []);

	// Auto-generate slug from name
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.value;
		form.setValue("defaultName", name);
		// const generatedSlug = slugify(name, { lower: true, strict: true });
		// form.setValue("slug", generatedSlug);
	};

	// Add a translation
	const handleAddTranslation = () => {
		if (!language || !translationName) {
			// toast({
			//   title: "Error",
			//   description: "Language code and name are required for translations",
			//   variant: "destructive",
			// });
			return;
		}

		const newTranslation: CategoryTranslationSchemaType = {
			language,
			name: translationName,
			description: translationDescription || undefined,
		};

		setTranslations([...translations, newTranslation]);
		form.setValue("translations", [...translations, newTranslation]);

		// Reset fields
		setLanguage("");
		setTranslationName("");
		setTranslationDescription("");
	};

	// Remove a translation
	const handleRemoveTranslation = (index: number) => {
		const updatedTranslations = translations.filter((_, i) => i !== index);
		setTranslations(updatedTranslations);
		form.setValue("translations", updatedTranslations);
	};

	// Handle form submission
	// const onSubmit = async (data: CategorySchemaType) => {
	//   setIsLoading(true);

	//   try {
	//     const result = await createCategory(data);

	//     if (result.error) {
	//       let errorMessage = "Failed to create category";

	//       if (result.error === "not_logged_in") {
	//         errorMessage = "You must be logged in to create a category";
	//       } else if (result.error === "unauthorized") {
	//         errorMessage = "You don't have permission to create categories";
	//       } else if (result.error === "invalid_data") {
	//         errorMessage = "Please check your inputs and try again";
	//       } else if (result.error === "slug_exists") {
	//         errorMessage = "A category with this slug already exists";
	//       } else if (result.error === "parent_not_found") {
	//         errorMessage = "The selected parent category was not found";
	//       }

	//       // toast({
	//       //   title: "Error",
	//       //   description: errorMessage,
	//       //   variant: "destructive",
	//       // });
	//     } else {
	//       // toast({
	//       //   title: "Success",
	//       //   description: "Category has been created successfully",
	//       // });
	//       router.push("/dashboard/categories");
	//     }
	//   } catch (error) {
	//     console.error("Error creating category:", error);
	//     // toast({
	//     //   title: "Error",
	//     //   description: "An unexpected error occurred",
	//     //   variant: "destructive",
	//     // });
	//   } finally {
	//     setIsLoading(false);
	//   }
	// };
	const onSubmit = async (data: CategorySchemaType) => {
		console.log(data);
	};

	return (
		<div className="container py-10 mx-auto">
			<Card>
				<CardHeader>
					<CardTitle>Create New Category</CardTitle>
					<CardDescription>
						Add a new product category to your store
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								<FormField
									control={form.control}
									name="defaultName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input
													placeholder="Category name"
													{...field}
													onChange={handleNameChange}
												/>
											</FormControl>
											<FormDescription>
												The default name of your category
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
											<FormLabel>Slug</FormLabel>
											<FormControl>
												<Input placeholder="category-slug" {...field} />
											</FormControl>
											<FormDescription>
												The URL-friendly version of the name
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description (Optional)</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Category description"
												className="min-h-[100px]"
												{...field}
												value={field.value || ""}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								<FormField
									control={form.control}
									name="status"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Status</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select a status" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="DRAFT">Draft</SelectItem>
													<SelectItem value="HIDDEN">Hidden</SelectItem>
													<SelectItem value="PUBLISHED">Published</SelectItem>
												</SelectContent>
											</Select>
											<FormDescription>
												Determines the visibility of the category
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="parentId"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Parent Category (Optional)</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select a parent category" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="0">None (Top Level)</SelectItem>
													{categories.map((category) => (
														<SelectItem key={category.id} value={category.id}>
															{category.defaultName}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormDescription>
												Create a hierarchy by selecting a parent
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className="p-4 border rounded-md">
								<div className="mb-2 font-medium">Translations (Optional)</div>
								<div className="mb-4 text-sm text-muted-foreground">
									Add translations for your category name and description
								</div>

								{translations.length > 0 && (
									<div className="mb-4 space-y-2">
										{translations.map((translation, index) => (
											<div
												key={index}
												className="flex items-center justify-between p-2 border rounded-md"
											>
												<div>
													<span className="font-medium">
														{translation.language}
													</span>
													: {translation.name}
												</div>
												<Button
													type="button"
													variant="ghost"
													size="sm"
													onClick={() => handleRemoveTranslation(index)}
												>
													<X className="w-4 h-4" />
												</Button>
											</div>
										))}
									</div>
								)}

								<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
									<div>
										<FormLabel className="text-xs">Language Code</FormLabel>
										<Input
											placeholder="en"
											value={language}
											onChange={(e) => setLanguage(e.target.value)}
											className="mt-1"
										/>
									</div>
									<div>
										<FormLabel className="text-xs">Name</FormLabel>
										<Input
											placeholder="Translated name"
											value={translationName}
											onChange={(e) => setTranslationName(e.target.value)}
											className="mt-1"
										/>
									</div>
									<div>
										<FormLabel className="text-xs">
											Description (Optional)
										</FormLabel>
										<Input
											placeholder="Translated description"
											value={translationDescription}
											onChange={(e) =>
												setTranslationDescription(e.target.value)
											}
											className="mt-1"
										/>
									</div>
								</div>
								<Button
									type="button"
									variant="outline"
									size="sm"
									className="mt-2"
									onClick={handleAddTranslation}
								>
									<Plus className="w-4 h-4 mr-2" />
									Add Translation
								</Button>
							</div>

							<CardFooter className="flex justify-between px-0">
								<Button
									type="button"
									variant="outline"
									onClick={() => router.push("/dashboard/categories")}
								>
									Cancel
								</Button>
								<Button type="submit" disabled={isLoading}>
									{isLoading && (
										<Loader2 className="w-4 h-4 mr-2 animate-spin" />
									)}
									Create Category
								</Button>
							</CardFooter>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
