"use client";

import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { SearchableMultiSelect } from "@/components/ui/searchable-select";
import type { CreateProductInput } from "@/schemas/product";

interface Collection {
	id: string;
	name: string;
}

interface ProductCollectionsSectionProps {
	collections: Collection[];
}

export function ProductCollectionsSection({
	collections,
}: ProductCollectionsSectionProps) {
	const form = useFormContext<CreateProductInput>();

	const collectionOptions = collections.map((collection) => ({
		value: collection.id,
		label: collection.name,
	}));

	return (
		<Card>
			<CardHeader>
				<CardTitle>Collections</CardTitle>
			</CardHeader>
			<CardContent>
				<FormField
					control={form.control}
					name="collectionIds"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Product collections</FormLabel>
							<FormControl>
								<SearchableMultiSelect
									options={collectionOptions}
									values={field.value || []}
									onValuesChange={field.onChange}
									placeholder="Search collections..."
									emptyText="No collections found."
								/>
							</FormControl>
							<FormDescription>
								Add this product to one or more collections
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
			</CardContent>
		</Card>
	);
}
