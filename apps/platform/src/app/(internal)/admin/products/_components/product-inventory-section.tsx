"use client";

import * as React from "react";
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
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import type { CreateProductInput } from "@/schemas/product";

// Extract TrackStockSwitch to prevent re-render loops
const TrackStockSwitch = React.memo(function TrackStockSwitch({
	checked,
	onChange,
}: {
	checked: boolean | undefined;
	onChange: (checked: boolean) => void;
}) {
	const handleChange = React.useCallback(
		(newChecked: boolean) => {
			if (newChecked !== checked) {
				onChange(newChecked);
			}
		},
		[checked, onChange],
	);

	return <Switch checked={checked ?? false} onCheckedChange={handleChange} />;
});

export function ProductInventorySection() {
	const form = useFormContext<CreateProductInput>();
	const trackStock = form.watch("trackStock");

	return (
		<Card>
			<CardHeader>
				<CardTitle>Inventory</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{/* SKU */}
				<FormField
					control={form.control}
					name="sku"
					render={({ field }) => (
						<FormItem>
							<FormLabel>SKU (Stock Keeping Unit)</FormLabel>
							<FormControl>
								<Input
									placeholder="SKU-12345"
									{...field}
									value={field.value ?? ""}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Track stock toggle */}
				<FormField
					control={form.control}
					name="trackStock"
					render={({ field }) => (
						<FormItem className="flex items-center justify-between rounded-lg border p-3">
							<div className="space-y-0.5">
								<FormLabel className="text-base">Track quantity</FormLabel>
								<FormDescription>
									Keep track of inventory levels
								</FormDescription>
							</div>
							<TrackStockSwitch
								checked={field.value}
								onChange={field.onChange}
							/>
						</FormItem>
					)}
				/>

				{/* Stock quantity - only show when tracking */}
				{trackStock && (
					<>
						<FormField
							control={form.control}
							name="stock"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Quantity in stock</FormLabel>
									<FormControl>
										<Input
											type="number"
											min="0"
											placeholder="0"
											value={field.value ?? ""}
											onChange={(e) => {
												const value = e.target.value;
												field.onChange(value ? parseInt(value) : undefined);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="lowStockThreshold"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Low stock alert</FormLabel>
									<FormControl>
										<Input
											type="number"
											min="0"
											placeholder="10"
											value={field.value ?? ""}
											onChange={(e) => {
												const value = e.target.value;
												field.onChange(value ? parseInt(value) : undefined);
											}}
										/>
									</FormControl>
									<FormDescription>
										Get notified when stock reaches this level
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</>
				)}
			</CardContent>
		</Card>
	);
}
