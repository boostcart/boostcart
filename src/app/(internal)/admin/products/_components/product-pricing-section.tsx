"use client";

import { useFormContext } from "react-hook-form";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
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
import { MEASUREMENT_UNITS } from "@/components/ui/measurement-input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import type { CreateProductInput } from "@/schemas/product";

export function ProductPricingSection() {
	const form = useFormContext<CreateProductInput>();

	const price = form.watch("price");
	const costPerItem = form.watch("costPerItem");

	// Calculate profit and margin
	const profit = price && costPerItem ? price - costPerItem : undefined;
	const margin =
		price && costPerItem && price > 0
			? ((profit ?? 0) / price) * 100
			: undefined;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Pricing</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{/* Main price - always visible */}
				<FormField
					control={form.control}
					name="price"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Price</FormLabel>
							<FormControl>
								<div className="relative">
									<span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
										€
									</span>
									<Input
										type="number"
										step="0.01"
										min="0"
										placeholder="0.00"
										className="pl-7"
										value={field.value || ""}
										onChange={(e) => {
											const value = e.target.value;
											field.onChange(value ? parseFloat(value) : 0);
										}}
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Expandable pricing options */}
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="advanced-pricing" className="border-none">
						<AccordionTrigger className="text-sm text-muted-foreground hover:no-underline py-2">
							<span className="flex items-center gap-2">
								More pricing options
							</span>
						</AccordionTrigger>
						<AccordionContent className="space-y-4 pt-2">
							{/* Compare at price */}
							<FormField
								control={form.control}
								name="compareAtPrice"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Compare at price</FormLabel>
										<FormControl>
											<div className="relative">
												<span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
													€
												</span>
												<Input
													type="number"
													step="0.01"
													min="0"
													placeholder="0.00"
													className="pl-7"
													value={field.value ?? ""}
													onChange={(e) => {
														const value = e.target.value;
														field.onChange(
															value ? parseFloat(value) : undefined,
														);
													}}
												/>
											</div>
										</FormControl>
										<FormDescription>
											To display a sale price, enter a higher compare at price
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Cost per item */}
							<FormField
								control={form.control}
								name="costPerItem"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Cost per item</FormLabel>
										<FormControl>
											<div className="relative">
												<span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
													€
												</span>
												<Input
													type="number"
													step="0.01"
													min="0"
													placeholder="0.00"
													className="pl-7"
													value={field.value ?? ""}
													onChange={(e) => {
														const value = e.target.value;
														field.onChange(
															value ? parseFloat(value) : undefined,
														);
													}}
												/>
											</div>
										</FormControl>
										<FormDescription>
											Customers won't see this. Used to calculate profit.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Profit display */}
							{profit !== undefined && (
								<div className="rounded-md bg-muted p-3">
									<div className="flex justify-between text-sm">
										<span className="text-muted-foreground">Profit</span>
										<span className="font-medium">€{profit.toFixed(2)}</span>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-muted-foreground">Margin</span>
										<span className="font-medium">{margin?.toFixed(1)}%</span>
									</div>
								</div>
							)}

							{/* Unit price section */}
							<div className="space-y-3 pt-2 border-t">
								<FormLabel className="text-base">Unit price</FormLabel>
								<p className="text-sm text-muted-foreground -mt-1">
									Used to show price per unit (e.g., €2.50/100g)
								</p>

								<div className="grid grid-cols-2 gap-4">
									{/* Amount */}
									<FormField
										control={form.control}
										name="unitPrice.unitPriceAmount"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-xs">Total amount</FormLabel>
												<FormControl>
													<div className="flex gap-2">
														<Input
															type="number"
															step="0.01"
															min="0"
															placeholder="0"
															value={field.value ?? ""}
															onChange={(e) => {
																const value = e.target.value;
																field.onChange(
																	value ? parseFloat(value) : undefined,
																);
															}}
															className="flex-1"
														/>
														<FormField
															control={form.control}
															name="unitPrice.unitPriceMeasurement"
															render={({ field: unitField }) => (
																<Select
																	value={unitField.value ?? ""}
																	onValueChange={(value) => {
																		if (value !== unitField.value) {
																			unitField.onChange(value);
																		}
																	}}
																>
																	<SelectTrigger className="w-20">
																		<SelectValue placeholder="Unit" />
																	</SelectTrigger>
																	<SelectContent>
																		{MEASUREMENT_UNITS.map((unit) => (
																			<SelectItem
																				key={unit.value}
																				value={unit.value}
																			>
																				{unit.shortLabel}
																			</SelectItem>
																		))}
																	</SelectContent>
																</Select>
															)}
														/>
													</div>
												</FormControl>
											</FormItem>
										)}
									/>

									{/* Base measure */}
									<FormField
										control={form.control}
										name="unitPrice.unitPriceBaseAmount"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-xs">Base measure</FormLabel>
												<FormControl>
													<div className="flex gap-2">
														<Input
															type="number"
															step="0.01"
															min="0"
															placeholder="100"
															value={field.value ?? ""}
															onChange={(e) => {
																const value = e.target.value;
																field.onChange(
																	value ? parseFloat(value) : undefined,
																);
															}}
															className="flex-1"
														/>
														<FormField
															control={form.control}
															name="unitPrice.unitPriceBaseMeasurement"
															render={({ field: baseField }) => (
																<Select
																	value={baseField.value ?? ""}
																	onValueChange={(value) => {
																		if (value !== baseField.value) {
																			baseField.onChange(value);
																		}
																	}}
																>
																	<SelectTrigger className="w-20">
																		<SelectValue placeholder="Unit" />
																	</SelectTrigger>
																	<SelectContent>
																		{MEASUREMENT_UNITS.map((unit) => (
																			<SelectItem
																				key={unit.value}
																				value={unit.value}
																			>
																				{unit.shortLabel}
																			</SelectItem>
																		))}
																	</SelectContent>
																</Select>
															)}
														/>
													</div>
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</CardContent>
		</Card>
	);
}
