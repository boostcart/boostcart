"use client";

import { Palette, Plus, Trash2 } from "lucide-react";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ColorPicker } from "@/components/ui/color-picker";
import { Input } from "@/components/ui/input";
import { SingleImageUpload } from "@/components/ui/media-upload";
import { Separator } from "@/components/ui/separator";
import type {
	CreateProductInput,
	ProductVariantInput,
} from "@/schemas/product";

interface VariantGroup {
	name: string;
	values: { value: string; hexColor?: string }[];
}

export function ProductVariantsSection() {
	const form = useFormContext<CreateProductInput>();
	const trackStock = form.watch("trackStock");

	const [variantGroups, setVariantGroups] = React.useState<VariantGroup[]>([]);
	const [showColorPicker, setShowColorPicker] = React.useState<
		Record<string, boolean>
	>({});
	const [newGroupName, setNewGroupName] = React.useState("");
	const [newValueInputs, setNewValueInputs] = React.useState<
		Record<string, string>
	>({});

	// Generate variant combinations from groups
	const generateVariantCombinations = React.useCallback(
		(groups: VariantGroup[]): ProductVariantInput[] => {
			if (groups.length === 0) return [];

			const combine = (
				current: Record<string, string>,
				meta: { optionName: string; hexColor?: string }[],
				remaining: VariantGroup[],
			): {
				options: Record<string, string>;
				meta: { optionName: string; hexColor?: string }[];
			}[] => {
				if (remaining.length === 0) {
					return [{ options: current, meta }];
				}

				const [group, ...rest] = remaining;
				if (!group) return [{ options: current, meta }];

				const results: {
					options: Record<string, string>;
					meta: { optionName: string; hexColor?: string }[];
				}[] = [];

				for (const val of group.values) {
					results.push(
						...combine(
							{ ...current, [group.name]: val.value },
							[...meta, { optionName: group.name, hexColor: val.hexColor }],
							rest,
						),
					);
				}

				return results;
			};

			return combine({}, [], groups).map((combo, index) => ({
				options: combo.options,
				optionMeta: combo.meta.filter((m) => m.hexColor),
				order: index,
				priceAdjustment: 0,
			}));
		},
		[],
	);

	// Update form variants when groups change
	const setVariantsRef = React.useRef(form.setValue);
	setVariantsRef.current = form.setValue;

	React.useEffect(() => {
		const variants = generateVariantCombinations(variantGroups);
		const existingVariants = form.getValues("variants") ?? [];

		// Preserve existing variant data (price, stock, image, sku) when regenerating
		const updatedVariants = variants.map((newVariant) => {
			const optionsKey = JSON.stringify(newVariant.options);
			const existing = existingVariants.find(
				(v) => JSON.stringify(v.options) === optionsKey,
			);
			return existing
				? {
						...newVariant,
						...existing,
						options: newVariant.options,
						optionMeta: newVariant.optionMeta,
					}
				: newVariant;
		});

		setVariantsRef.current("variants", updatedVariants, { shouldDirty: true });
	}, [variantGroups, generateVariantCombinations, form.getValues]);

	const addVariantGroup = () => {
		if (!newGroupName.trim()) return;

		const isColor = newGroupName.toLowerCase() === "color";
		setVariantGroups([
			...variantGroups,
			{ name: newGroupName.trim(), values: [] },
		]);
		setShowColorPicker((prev) => ({
			...prev,
			[newGroupName.trim()]: isColor,
		}));
		setNewGroupName("");
	};

	const addColorGroup = () => {
		if (variantGroups.some((g) => g.name === "Color")) return;
		setVariantGroups([...variantGroups, { name: "Color", values: [] }]);
		setShowColorPicker((prev) => ({ ...prev, Color: true }));
	};

	const removeVariantGroup = (index: number) => {
		const group = variantGroups[index];
		if (!group) return;
		const groupName = group.name;
		setVariantGroups(variantGroups.filter((_, i) => i !== index));
		setShowColorPicker((prev) => {
			const updated = { ...prev };
			delete updated[groupName];
			return updated;
		});
	};

	const addValueToGroup = (
		groupIndex: number,
		value: string,
		hexColor?: string,
	) => {
		if (!value.trim()) return;

		const updated = [...variantGroups];
		const group = updated[groupIndex];
		if (!group) return;

		if (group.values.some((v) => v.value === value.trim())) return;

		group.values = [...group.values, { value: value.trim(), hexColor }];
		setVariantGroups(updated);

		// Clear input
		setNewValueInputs((prev) => ({ ...prev, [groupIndex]: "" }));
	};

	const removeValueFromGroup = (groupIndex: number, valueIndex: number) => {
		const updated = [...variantGroups];
		const group = updated[groupIndex];
		if (!group) return;
		group.values = group.values.filter((_, i) => i !== valueIndex);
		setVariantGroups(updated);
	};

	const updateVariantField = (
		variantIndex: number,
		field: keyof ProductVariantInput,
		value: string | number | undefined,
	) => {
		const variants = form.getValues("variants") ?? [];
		const updated = [...variants];
		const existingVariant = updated[variantIndex];
		if (!existingVariant) return;
		updated[variantIndex] = { ...existingVariant, [field]: value };
		form.setValue("variants", updated, { shouldDirty: true });
	};

	const variants = form.watch("variants") ?? [];
	const hasColorGroup = variantGroups.some((g) => g.name === "Color");

	return (
		<Card>
			<CardHeader>
				<CardTitle>Variants</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Variant groups */}
				<div className="space-y-4">
					{variantGroups.map((group, groupIndex) => (
						<div key={group.name} className="rounded-lg border p-4 space-y-3">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									{showColorPicker[group.name] && (
										<Palette className="h-4 w-4 text-muted-foreground" />
									)}
									<span className="font-medium">{group.name}</span>
									<Badge variant="secondary">
										{group.values.length} values
									</Badge>
								</div>
								<Button
									type="button"
									variant="ghost"
									size="sm"
									onClick={() => removeVariantGroup(groupIndex)}
								>
									<Trash2 className="h-4 w-4" />
								</Button>
							</div>

							{/* Values */}
							<div className="flex flex-wrap gap-2">
								{group.values.map((val, valIndex) => (
									<Badge
										key={val.value}
										variant="outline"
										className="gap-1.5 py-1 px-2"
									>
										{val.hexColor && (
											<div
												className="h-3 w-3 rounded-full border"
												style={{ backgroundColor: val.hexColor }}
											/>
										)}
										{val.value}
										<button
											type="button"
											onClick={() => removeValueFromGroup(groupIndex, valIndex)}
											className="ml-1 hover:text-destructive"
										>
											×
										</button>
									</Badge>
								))}
							</div>

							{/* Add value input */}
							<div className="flex gap-2">
								{showColorPicker[group.name] ? (
									<>
										<Input
											placeholder="Color name (e.g., Red)"
											value={newValueInputs[groupIndex] ?? ""}
											onChange={(e) =>
												setNewValueInputs((prev) => ({
													...prev,
													[groupIndex]: e.target.value,
												}))
											}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													e.preventDefault();
													addValueToGroup(
														groupIndex,
														newValueInputs[groupIndex] ?? "",
													);
												}
											}}
											className="flex-1"
										/>
										<ColorPicker
											value="#000000"
											onChange={(color) => {
												if (newValueInputs[groupIndex]) {
													addValueToGroup(
														groupIndex,
														newValueInputs[groupIndex],
														color,
													);
												}
											}}
											className="w-32"
										/>
									</>
								) : (
									<Input
										placeholder={`Add ${group.name.toLowerCase()} value`}
										value={newValueInputs[groupIndex] ?? ""}
										onChange={(e) =>
											setNewValueInputs((prev) => ({
												...prev,
												[groupIndex]: e.target.value,
											}))
										}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												e.preventDefault();
												addValueToGroup(
													groupIndex,
													newValueInputs[groupIndex] ?? "",
												);
											}
										}}
									/>
								)}
								<Button
									type="button"
									variant="outline"
									onClick={() =>
										addValueToGroup(
											groupIndex,
											newValueInputs[groupIndex] ?? "",
										)
									}
								>
									Add
								</Button>
							</div>
						</div>
					))}
				</div>

				{/* Add variant group */}
				<div className="flex gap-2">
					<Input
						placeholder="Variant name (e.g., Size)"
						value={newGroupName}
						onChange={(e) => setNewGroupName(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								addVariantGroup();
							}
						}}
					/>
					<Button type="button" variant="outline" onClick={addVariantGroup}>
						<Plus className="h-4 w-4 mr-2" />
						Add variant
					</Button>
				</div>

				{/* Quick add color variant */}
				{!hasColorGroup && (
					<Button
						type="button"
						variant="secondary"
						onClick={addColorGroup}
						className="w-full"
					>
						<Palette className="h-4 w-4 mr-2" />
						Add Color variant with color picker
					</Button>
				)}

				{/* Variant combinations table */}
				{variants.length > 0 && (
					<>
						<Separator />
						<div className="space-y-3">
							<h4 className="font-medium">
								Variant combinations ({variants.length})
							</h4>
							<div className="rounded-lg border overflow-hidden">
								<div className="overflow-x-auto">
									<table className="w-full text-sm">
										<thead className="bg-muted">
											<tr>
												<th className="text-left p-3 font-medium">Variant</th>
												<th className="text-left p-3 font-medium w-24">
													Image
												</th>
												<th className="text-left p-3 font-medium w-28">
													Price (€)
												</th>
												<th className="text-left p-3 font-medium w-28">SKU</th>
												{trackStock && (
													<th className="text-left p-3 font-medium w-24">
														Stock
													</th>
												)}
											</tr>
										</thead>
										<tbody className="divide-y">
											{variants.map((variant, index) => {
												const variantKey =
													Object.entries(variant.options)
														.map(([k, v]) => `${k}:${v}`)
														.join("-") || `variant-${index}`;
												return (
													<tr key={variantKey} className="hover:bg-muted/50">
														<td className="p-3">
															<div className="flex items-center gap-2">
																{Object.entries(variant.options).map(
																	([key, value]) => {
																		const meta = variant.optionMeta?.find(
																			(m) => m.optionName === key,
																		);
																		return (
																			<Badge
																				key={key}
																				variant="outline"
																				className="gap-1"
																			>
																				{meta?.hexColor && (
																					<div
																						className="h-2.5 w-2.5 rounded-full border"
																						style={{
																							backgroundColor: meta.hexColor,
																						}}
																					/>
																				)}
																				{value}
																			</Badge>
																		);
																	},
																)}
															</div>
														</td>
														<td className="p-3">
															<SingleImageUpload
																endpoint="variantImage"
																value={variant.imageUrl}
																onChange={(url) =>
																	updateVariantField(index, "imageUrl", url)
																}
																className="h-12 w-12"
																aspectRatio="square"
															/>
														</td>
														<td className="p-3">
															<Input
																type="number"
																step="0.01"
																min="0"
																placeholder="Default"
																value={variant.price ?? ""}
																onChange={(e) =>
																	updateVariantField(
																		index,
																		"price",
																		e.target.value
																			? parseFloat(e.target.value)
																			: undefined,
																	)
																}
																className="w-24"
															/>
														</td>
														<td className="p-3">
															<Input
																placeholder="Auto"
																value={variant.sku ?? ""}
																onChange={(e) =>
																	updateVariantField(
																		index,
																		"sku",
																		e.target.value || undefined,
																	)
																}
																className="w-24"
															/>
														</td>
														{trackStock && (
															<td className="p-3">
																<Input
																	type="number"
																	min="0"
																	placeholder="0"
																	value={variant.stock ?? ""}
																	onChange={(e) =>
																		updateVariantField(
																			index,
																			"stock",
																			e.target.value
																				? parseInt(e.target.value)
																				: undefined,
																		)
																	}
																	className="w-20"
																/>
															</td>
														)}
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</>
				)}
			</CardContent>
		</Card>
	);
}
