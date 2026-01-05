"use client";

import { Clock, RefreshCw, ShoppingCart } from "lucide-react";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
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
import type { CreateProductInput } from "@/schemas/product";

const purchaseTypes = [
	{
		value: "ONE_TIME",
		label: "One-time purchase",
		description: "Standard single purchase",
		icon: ShoppingCart,
	},
	{
		value: "SUBSCRIPTION",
		label: "Subscription",
		description: "Recurring delivery on a schedule",
		icon: RefreshCw,
	},
	{
		value: "PRE_ORDER",
		label: "Pre-order",
		description: "Purchase before release",
		icon: Clock,
	},
] as const;

const subscriptionIntervals = [
	{ value: "WEEKLY", label: "Weekly" },
	{ value: "BI_WEEKLY", label: "Every 2 weeks" },
	{ value: "MONTHLY", label: "Monthly" },
	{ value: "BI_MONTHLY", label: "Every 2 months" },
	{ value: "QUARTERLY", label: "Every 3 months" },
	{ value: "YEARLY", label: "Yearly" },
] as const;

// Extract PurchaseTypeRadioGroup to prevent re-render loops
const PurchaseTypeRadioGroup = React.memo(function PurchaseTypeRadioGroup({
	value,
	onChange,
}: {
	value: string | undefined;
	onChange: (value: string) => void;
}) {
	const currentValue = value ?? "ONE_TIME";

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
			className="space-y-3"
		>
			{purchaseTypes.map((type) => {
				const Icon = type.icon;
				const isSelected = currentValue === type.value;
				return (
					<div key={type.value}>
						<RadioGroupItem
							value={type.value}
							id={`purchase-${type.value}`}
							className="peer sr-only"
						/>
						<Label
							htmlFor={`purchase-${type.value}`}
							className={`flex items-center gap-4 rounded-lg border-2 p-4 cursor-pointer transition-colors hover:bg-accent ${
								isSelected ? "border-primary bg-primary/5" : "border-muted"
							}`}
						>
							<Icon
								className={`h-5 w-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`}
							/>
							<div className="flex-1">
								<span className="text-sm font-medium">{type.label}</span>
								<p className="text-xs text-muted-foreground">
									{type.description}
								</p>
							</div>
							{type.value === "SUBSCRIPTION" && (
								<Badge variant="secondary">Recurring</Badge>
							)}
							{type.value === "PRE_ORDER" && (
								<Badge variant="outline">Coming</Badge>
							)}
						</Label>
					</div>
				);
			})}
		</RadioGroup>
	);
});

export function ProductPurchaseOptionsSection() {
	const form = useFormContext<CreateProductInput>();
	const purchaseOptions = form.watch("purchaseOptions");
	const purchaseType = purchaseOptions?.type;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Purchase options</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Purchase Type Selection */}
				<FormField
					control={form.control}
					name="purchaseOptions.type"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>How customers can purchase this product</FormLabel>
							<PurchaseTypeRadioGroup
								value={field.value}
								onChange={field.onChange}
							/>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Subscription Options */}
				{purchaseType === "SUBSCRIPTION" && (
					<div className="space-y-4 rounded-lg border p-4 bg-muted/30">
						<h4 className="text-sm font-medium">Subscription settings</h4>

						{/* Allow one-time purchase as well */}
						<FormField
							control={form.control}
							name="purchaseOptions.allowOneTimePurchase"
							render={({ field }) => (
								<FormItem className="flex items-center space-x-3 space-y-0">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel className="text-sm font-normal">
											Also allow one-time purchase
										</FormLabel>
										<FormDescription>
											Customers can choose between subscription or single
											purchase
										</FormDescription>
									</div>
								</FormItem>
							)}
						/>

						{/* Subscription intervals - multi-select using checkboxes */}
						<FormField
							control={form.control}
							name="purchaseOptions.subscriptionIntervals"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Available delivery frequencies</FormLabel>
									<FormDescription className="text-xs">
										Select all intervals customers can choose from
									</FormDescription>
									<div className="grid grid-cols-2 gap-2 mt-2">
										{subscriptionIntervals.map((interval) => {
											const isChecked = (field.value ?? []).includes(
												interval.value,
											);
											const checkboxId = `interval-${interval.value}`;
											return (
												<div
													key={interval.value}
													className={`flex items-center gap-2 rounded-md border p-2 cursor-pointer transition-colors ${
														isChecked
															? "border-primary bg-primary/5"
															: "border-muted hover:bg-accent"
													}`}
												>
													<Checkbox
														id={checkboxId}
														checked={isChecked}
														onCheckedChange={(checked) => {
															const current = field.value ?? [];
															if (checked) {
																field.onChange([...current, interval.value]);
															} else {
																field.onChange(
																	current.filter(
																		(v: string) => v !== interval.value,
																	),
																);
															}
														}}
													/>
													<label
														htmlFor={checkboxId}
														className="text-sm cursor-pointer flex-1"
													>
														{interval.label}
													</label>
												</div>
											);
										})}
									</div>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Subscription discount */}
						<FormField
							control={form.control}
							name="purchaseOptions.subscriptionDiscount"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Subscription discount (%)</FormLabel>
									<FormControl>
										<Input
											type="number"
											min="0"
											max="100"
											placeholder="0"
											value={field.value ?? ""}
											onChange={(e) => {
												const value = e.target.value;
												field.onChange(value ? parseFloat(value) : undefined);
											}}
										/>
									</FormControl>
									<FormDescription>
										Percentage off regular price for subscribers
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				)}

				{/* Pre-order Options */}
				{purchaseType === "PRE_ORDER" && (
					<div className="space-y-4 rounded-lg border p-4 bg-muted/30">
						<h4 className="text-sm font-medium">Pre-order settings</h4>

						{/* Release date */}
						<FormField
							control={form.control}
							name="purchaseOptions.preOrderReleaseDate"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Expected release date</FormLabel>
									<DatePicker
										value={field.value}
										onChange={field.onChange}
										placeholder="Select release date"
									/>
									<FormDescription>
										When customers can expect to receive their order
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Deposit percentage */}
						<FormField
							control={form.control}
							name="purchaseOptions.preOrderDepositPercent"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Deposit amount (%)</FormLabel>
									<FormControl>
										<Input
											type="number"
											min="0"
											max="100"
											placeholder="100"
											value={field.value ?? ""}
											onChange={(e) => {
												const value = e.target.value;
												field.onChange(value ? parseFloat(value) : undefined);
											}}
										/>
									</FormControl>
									<FormDescription>
										Percentage of price collected at time of pre-order. Leave
										empty or 100 for full price upfront.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
