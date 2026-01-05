"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { SearchableSelect } from "@/components/ui/searchable-select";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import type { CreateProductInput } from "@/schemas/product";

// Extract Status Select to its own component to isolate state
const StatusSelect = React.memo(function StatusSelect({
	value,
	onChange,
}: {
	value: string;
	onChange: (value: string) => void;
}) {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger>
				<SelectValue placeholder="Select status" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="DRAFT">
					<div className="flex items-center gap-2">
						<div className="h-2 w-2 rounded-full bg-gray-400" />
						Draft
					</div>
				</SelectItem>
				<SelectItem value="ACTIVE">
					<div className="flex items-center gap-2">
						<div className="h-2 w-2 rounded-full bg-green-500" />
						Active
					</div>
				</SelectItem>
				<SelectItem value="UNLISTED">
					<div className="flex items-center gap-2">
						<div className="h-2 w-2 rounded-full bg-yellow-500" />
						Unlisted
					</div>
				</SelectItem>
			</SelectContent>
		</Select>
	);
});

interface ProductGeneralSectionProps {
	categories: { id: string; name: string }[];
	brands: { id: string; name: string }[];
}

export function ProductGeneralSection({
	categories,
	brands,
}: ProductGeneralSectionProps) {
	const form = useFormContext<CreateProductInput>();

	const categoryOptions = React.useMemo(
		() =>
			categories.map((c) => ({
				value: c.id,
				label: c.name,
			})),
		[categories],
	);

	const brandOptions = React.useMemo(
		() =>
			brands.map((b) => ({
				value: b.id,
				label: b.name,
			})),
		[brands],
	);

	return (
		<Card>
			<CardHeader>
				<CardTitle>General Information</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{/* Product Name */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Product name</FormLabel>
							<FormControl>
								<Input placeholder="Enter product name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Description */}
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<RichTextEditor
								value={field.value ?? ""}
								onChange={field.onChange}
								placeholder="Describe your product..."
								minHeight="150px"
							/>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Status */}
				<FormField
					control={form.control}
					name="status"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Status</FormLabel>
							<StatusSelect value={field.value} onChange={field.onChange} />
							<p className="text-xs text-muted-foreground">
								{field.value === "DRAFT" &&
									"Not visible anywhere, only in admin dashboard"}
								{field.value === "ACTIVE" &&
									"Visible and available for purchase"}
								{field.value === "UNLISTED" &&
									"Available for purchase via direct link only"}
							</p>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{/* Category */}
					<FormField
						control={form.control}
						name="categoryId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Category</FormLabel>
								<SearchableSelect
									options={categoryOptions}
									value={field.value}
									onValueChange={(value) => {
										if (value !== field.value) {
											field.onChange(value);
										}
									}}
									placeholder="Select category"
									searchPlaceholder="Search categories..."
									emptyText="No categories found"
								/>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Brand */}
					<FormField
						control={form.control}
						name="brandId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Brand (optional)</FormLabel>
								<SearchableSelect
									options={brandOptions}
									value={field.value ?? ""}
									onValueChange={(value) => {
										const newValue = value || undefined;
										if (newValue !== field.value) {
											field.onChange(newValue);
										}
									}}
									placeholder="Select brand"
									searchPlaceholder="Search brands..."
									emptyText="No brands found"
								/>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
			</CardContent>
		</Card>
	);
}
