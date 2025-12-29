"use client";

import { Grid3x3, Layers, Mail, Package } from "lucide-react";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import type { CreateProductInput } from "@/schemas/product";

const packageTypes = [
	{
		value: "BOX",
		label: "Box",
		description: "Standard cardboard box",
		icon: Package,
	},
	{
		value: "ENVELOPE",
		label: "Envelope",
		description: "Flat documents or small items",
		icon: Mail,
	},
	{
		value: "SOFT_PACKAGE",
		label: "Soft Package",
		description: "Poly mailer or padded envelope",
		icon: Layers,
	},
	{
		value: "PALLET",
		label: "Pallet",
		description: "Large freight shipments",
		icon: Grid3x3,
	},
] as const;

// Extract PackageTypeRadioGroup to prevent re-render loops
const PackageTypeRadioGroup = React.memo(function PackageTypeRadioGroup({
	value,
	onChange,
}: {
	value: string | undefined;
	onChange: (value: string) => void;
}) {
	// Use local state to manage the value and sync with form
	const currentValue = value ?? "BOX";

	const handleChange = React.useCallback(
		(newValue: string) => {
			if (newValue !== value) {
				onChange(newValue);
			}
		},
		[value, onChange],
	);

	return (
		<RadioGroup
			value={currentValue}
			onValueChange={handleChange}
			className="grid grid-cols-2 gap-3"
		>
			{packageTypes.map((type) => {
				const Icon = type.icon;
				const isSelected = currentValue === type.value;
				return (
					<div key={type.value}>
						<RadioGroupItem
							value={type.value}
							id={`package-${type.value}`}
							className="peer sr-only"
						/>
						<Label
							htmlFor={`package-${type.value}`}
							className={`flex flex-col items-center gap-2 rounded-lg border-2 p-4 cursor-pointer transition-colors hover:bg-accent ${
								isSelected ? "border-primary bg-primary/5" : "border-muted"
							}`}
						>
							<Icon
								className={`h-6 w-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`}
							/>
							<span className="text-sm font-medium">{type.label}</span>
							<span className="text-xs text-muted-foreground text-center">
								{type.description}
							</span>
						</Label>
					</div>
				);
			})}
		</RadioGroup>
	);
});

export function ProductShippingSection() {
	const form = useFormContext<CreateProductInput>();
	const shippingInfo = form.watch("shippingInfo");
	const packageType = shippingInfo?.packageType;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Shipping</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Package Type */}
				<FormField
					control={form.control}
					name="shippingInfo.packageType"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>Package type</FormLabel>
							<PackageTypeRadioGroup
								value={field.value}
								onChange={field.onChange}
							/>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Separator />

				{/* Product Weight */}
				<FormField
					control={form.control}
					name="shippingInfo.weight"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Weight (kg)</FormLabel>
							<FormControl>
								<Input
									type="number"
									step="0.01"
									min="0"
									placeholder="0.00"
									value={field.value ?? ""}
									onChange={(e) => {
										const value = e.target.value;
										field.onChange(value ? parseFloat(value) : undefined);
									}}
								/>
							</FormControl>
							<FormDescription>
								Used for shipping rate calculation
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Package Dimensions */}
				<div className="space-y-3">
					<Label className="text-sm font-medium">Package dimensions (cm)</Label>
					<div className="grid grid-cols-3 gap-3">
						<FormField
							control={form.control}
							name="shippingInfo.packageLength"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="number"
											step="0.1"
											min="0"
											placeholder="Length"
											value={field.value ?? ""}
											onChange={(e) => {
												const value = e.target.value;
												field.onChange(value ? parseFloat(value) : undefined);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="shippingInfo.packageWidth"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="number"
											step="0.1"
											min="0"
											placeholder="Width"
											value={field.value ?? ""}
											onChange={(e) => {
												const value = e.target.value;
												field.onChange(value ? parseFloat(value) : undefined);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="shippingInfo.packageHeight"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="number"
											step="0.1"
											min="0"
											placeholder="Height"
											value={field.value ?? ""}
											onChange={(e) => {
												const value = e.target.value;
												field.onChange(value ? parseFloat(value) : undefined);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<p className="text-xs text-muted-foreground">
						Outer dimensions of the shipping package
					</p>
				</div>

				{/* Product Dimensions (only for Pallet or if helpful for customers) */}
				{packageType === "PALLET" && (
					<>
						<Separator />
						<div className="space-y-3">
							<Label className="text-sm font-medium">
								Product dimensions (cm)
							</Label>
							<p className="text-xs text-muted-foreground">
								Actual product dimensions for pallet shipments
							</p>
							<div className="grid grid-cols-3 gap-3">
								<FormField
									control={form.control}
									name="shippingInfo.productLength"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													type="number"
													step="0.1"
													min="0"
													placeholder="Length"
													value={field.value ?? ""}
													onChange={(e) => {
														const value = e.target.value;
														field.onChange(
															value ? parseFloat(value) : undefined,
														);
													}}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="shippingInfo.productWidth"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													type="number"
													step="0.1"
													min="0"
													placeholder="Width"
													value={field.value ?? ""}
													onChange={(e) => {
														const value = e.target.value;
														field.onChange(
															value ? parseFloat(value) : undefined,
														);
													}}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="shippingInfo.productHeight"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													type="number"
													step="0.1"
													min="0"
													placeholder="Height"
													value={field.value ?? ""}
													onChange={(e) => {
														const value = e.target.value;
														field.onChange(
															value ? parseFloat(value) : undefined,
														);
													}}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
					</>
				)}
			</CardContent>
		</Card>
	);
}
