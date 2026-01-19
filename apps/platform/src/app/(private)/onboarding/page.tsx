"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Store, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
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
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { CreateStoreSchema, type CreateStoreSchemaType } from "@/schemas";
import {
	checkSlugAvailability,
	createStore,
} from "@/server/api/private/tenant";

const industries = [
	{ value: "fashion", label: "Fashion & Apparel" },
	{ value: "electronics", label: "Electronics & Tech" },
	{ value: "home", label: "Home & Garden" },
	{ value: "beauty", label: "Beauty & Cosmetics" },
	{ value: "food", label: "Food & Beverages" },
	{ value: "sports", label: "Sports & Outdoors" },
	{ value: "toys", label: "Toys & Games" },
	{ value: "books", label: "Books & Media" },
	{ value: "jewelry", label: "Jewelry & Accessories" },
	{ value: "health", label: "Health & Wellness" },
	{ value: "pets", label: "Pets & Animals" },
	{ value: "automotive", label: "Automotive" },
	{ value: "other", label: "Other" },
];

function generateSlug(name: string): string {
	return name
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.substring(0, 30);
}

export default function OnboardingPage() {
	const router = useRouter();
	const [isSubmitting, startTransition] = useTransition();
	const [slugStatus, setSlugStatus] = useState<
		"idle" | "checking" | "available" | "unavailable"
	>("idle");
	const [slugSuggestion, setSlugSuggestion] = useState<string | null>(null);

	const form = useForm<CreateStoreSchemaType>({
		resolver: zodResolver(CreateStoreSchema),
		defaultValues: {
			storeName: "",
			storeSlug: "",
			industry: "",
		},
	});

	const storeSlug = form.watch("storeSlug");

	// Check slug availability with debounce
	const checkSlug = useCallback(async (slug: string) => {
		if (!slug || slug.length < 3) {
			setSlugStatus("idle");
			setSlugSuggestion(null);
			return;
		}

		setSlugStatus("checking");
		const result = await checkSlugAvailability(slug);

		if (result.available) {
			setSlugStatus("available");
			setSlugSuggestion(null);
		} else {
			setSlugStatus("unavailable");
			setSlugSuggestion(result.suggestion || null);
		}
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (storeSlug && storeSlug.length >= 3) {
				checkSlug(storeSlug);
			}
		}, 500);

		return () => clearTimeout(timer);
	}, [storeSlug, checkSlug]);

	// Auto-generate slug from store name
	const handleStoreNameChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const name = e.target.value;
			form.setValue("storeName", name);

			// Only auto-generate if user hasn't manually edited the slug
			const currentSlug = form.getValues("storeSlug");
			const expectedSlug = generateSlug(form.getValues("storeName") || "");

			if (
				!currentSlug ||
				currentSlug === expectedSlug ||
				currentSlug === generateSlug(name.slice(0, -1))
			) {
				form.setValue("storeSlug", generateSlug(name));
			}
		},
		[form],
	);

	const onSubmit = async (data: CreateStoreSchemaType) => {
		if (slugStatus === "unavailable") {
			toast.error("Please choose an available store URL.");
			return;
		}

		startTransition(async () => {
			const result = await createStore(data);

			if (result.success && result.tenant) {
				toast.success("Store created successfully!");
				router.push(`/admin`);
			} else {
				toast.error(result.error || "Failed to create store.");
			}
		});
	};

	const applySuggestion = useCallback(() => {
		if (slugSuggestion) {
			form.setValue("storeSlug", slugSuggestion);
			setSlugStatus("idle");
			setSlugSuggestion(null);
		}
	}, [form, slugSuggestion]);

	return (
		<div className="min-h-screen bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 flex items-center justify-center p-4">
			<Card className="w-full max-w-lg">
				<CardHeader className="text-center">
					<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
						<Store className="h-7 w-7 text-primary" />
					</div>
					<CardTitle className="text-2xl">Create Your Store</CardTitle>
					<CardDescription>
						Set up your online store in just a few steps. You can always change
						these settings later.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<FormField
								control={form.control}
								name="storeName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Store Name</FormLabel>
										<FormControl>
											<Input
												placeholder="My Awesome Store"
												{...field}
												onChange={handleStoreNameChange}
											/>
										</FormControl>
										<FormDescription>
											This is how your store will appear to customers.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="storeSlug"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Store URL</FormLabel>
										<FormControl>
											<div className="relative">
												<Input
													placeholder="my-awesome-store"
													className="pr-10"
													{...field}
													onChange={(e) => {
														field.onChange(
															e.target.value
																.toLowerCase()
																.replace(/[^a-z0-9-]/g, ""),
														);
													}}
												/>
												<div className="absolute inset-y-0 right-0 flex items-center pr-3">
													{slugStatus === "checking" && (
														<Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
													)}
													{slugStatus === "available" && (
														<CheckCircle2 className="h-4 w-4 text-green-500" />
													)}
													{slugStatus === "unavailable" && (
														<XCircle className="h-4 w-4 text-destructive" />
													)}
												</div>
											</div>
										</FormControl>
										<FormDescription>
											Your store will be available at{" "}
											<span className="font-mono text-xs">
												{field.value || "your-store"}.boostcart.bg
											</span>
										</FormDescription>
										{slugStatus === "unavailable" && slugSuggestion && (
											<p className="text-sm text-muted-foreground">
												This URL is taken.{" "}
												<button
													type="button"
													onClick={applySuggestion}
													className="text-primary underline underline-offset-2 hover:text-primary/80"
												>
													Use {slugSuggestion}
												</button>
												?
											</p>
										)}
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="industry"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Industry (Optional)</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select your industry" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{industries.map((industry) => (
													<SelectItem
														key={industry.value}
														value={industry.value}
													>
														{industry.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormDescription>
											This helps us customize your store experience.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type="submit"
								className="w-full"
								disabled={
									isSubmitting ||
									slugStatus === "unavailable" ||
									slugStatus === "checking"
								}
							>
								{isSubmitting ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Creating Store...
									</>
								) : (
									"Create Store"
								)}
							</Button>

							<p className="text-center text-xs text-muted-foreground">
								By creating a store, you agree to our Terms of Service and
								Privacy Policy. Your store will start with a 14-day free trial.
							</p>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
