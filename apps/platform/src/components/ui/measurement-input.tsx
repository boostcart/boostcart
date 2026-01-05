"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// EU-focused measurement units
export type MeasurementUnit =
	// Weight
	| "KG"
	| "G"
	// Volume
	| "L"
	| "ML"
	// Length
	| "M"
	| "CM"
	| "MM"
	// Area
	| "SQM"
	| "SQCM"
	// Per item
	| "PER_ITEM";

export type MeasurementCategory =
	| "weight"
	| "volume"
	| "length"
	| "area"
	| "item";

interface MeasurementUnitOption {
	value: MeasurementUnit;
	label: string;
	shortLabel: string;
	category: MeasurementCategory;
}

export const MEASUREMENT_UNITS: MeasurementUnitOption[] = [
	// Weight
	{ value: "KG", label: "Kilograms", shortLabel: "kg", category: "weight" },
	{ value: "G", label: "Grams", shortLabel: "g", category: "weight" },
	// Volume
	{ value: "L", label: "Liters", shortLabel: "L", category: "volume" },
	{ value: "ML", label: "Milliliters", shortLabel: "mL", category: "volume" },
	// Length
	{ value: "M", label: "Meters", shortLabel: "m", category: "length" },
	{ value: "CM", label: "Centimeters", shortLabel: "cm", category: "length" },
	{ value: "MM", label: "Millimeters", shortLabel: "mm", category: "length" },
	// Area
	{ value: "SQM", label: "Square meters", shortLabel: "m²", category: "area" },
	{
		value: "SQCM",
		label: "Square centimeters",
		shortLabel: "cm²",
		category: "area",
	},
	// Per item
	{
		value: "PER_ITEM",
		label: "Per item",
		shortLabel: "item",
		category: "item",
	},
];

export function getUnitsByCategory(
	category?: MeasurementCategory,
): MeasurementUnitOption[] {
	if (!category) return MEASUREMENT_UNITS;
	return MEASUREMENT_UNITS.filter((u) => u.category === category);
}

export function getUnitLabel(unit: MeasurementUnit): string {
	return MEASUREMENT_UNITS.find((u) => u.value === unit)?.shortLabel ?? unit;
}

interface MeasurementInputProps {
	value?: number;
	unit?: MeasurementUnit;
	onValueChange?: (value: number | undefined) => void;
	onUnitChange?: (unit: MeasurementUnit) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
	allowedCategories?: MeasurementCategory[];
	min?: number;
	max?: number;
	step?: number;
}

export function MeasurementInput({
	value,
	unit = "KG",
	onValueChange,
	onUnitChange,
	placeholder = "0",
	disabled = false,
	className,
	allowedCategories,
	min = 0,
	max,
	step = 0.01,
}: MeasurementInputProps) {
	const availableUnits = React.useMemo(() => {
		if (!allowedCategories || allowedCategories.length === 0) {
			return MEASUREMENT_UNITS;
		}
		return MEASUREMENT_UNITS.filter((u) =>
			allowedCategories.includes(u.category),
		);
	}, [allowedCategories]);

	// Group units by category for better UX
	const groupedUnits = React.useMemo(() => {
		const groups: Record<string, MeasurementUnitOption[]> = {};
		for (const u of availableUnits) {
			if (!groups[u.category]) {
				groups[u.category] = [];
			}
			groups[u.category]?.push(u);
		}
		return groups;
	}, [availableUnits]);

	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		if (val === "") {
			onValueChange?.(undefined);
		} else {
			const num = parseFloat(val);
			if (!Number.isNaN(num)) {
				onValueChange?.(num);
			}
		}
	};

	const categoryLabels: Record<MeasurementCategory, string> = {
		weight: "Weight",
		volume: "Volume",
		length: "Length",
		area: "Area",
		item: "Per Item",
	};

	return (
		<div className={cn("flex gap-2", className)}>
			<Input
				type="number"
				value={value ?? ""}
				onChange={handleValueChange}
				placeholder={placeholder}
				disabled={disabled}
				min={min}
				max={max}
				step={step}
				className="flex-1"
			/>
			<Select
				value={unit}
				onValueChange={(v) => onUnitChange?.(v as MeasurementUnit)}
				disabled={disabled}
			>
				<SelectTrigger className="w-24 shrink-0">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{Object.entries(groupedUnits).map(([category, units]) => (
						<React.Fragment key={category}>
							{Object.keys(groupedUnits).length > 1 && (
								<div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
									{categoryLabels[category as MeasurementCategory]}
								</div>
							)}
							{units.map((u) => (
								<SelectItem key={u.value} value={u.value}>
									{u.shortLabel}
								</SelectItem>
							))}
						</React.Fragment>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}

// Simple dimension inputs (length x width x height)
interface DimensionInputProps {
	length?: number;
	width?: number;
	height?: number;
	onLengthChange?: (value: number | undefined) => void;
	onWidthChange?: (value: number | undefined) => void;
	onHeightChange?: (value: number | undefined) => void;
	unit?: string;
	disabled?: boolean;
	className?: string;
}

export function DimensionInput({
	length,
	width,
	height,
	onLengthChange,
	onWidthChange,
	onHeightChange,
	unit = "cm",
	disabled = false,
	className,
}: DimensionInputProps) {
	const handleChange =
		(setter?: (value: number | undefined) => void) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const val = e.target.value;
			if (val === "") {
				setter?.(undefined);
			} else {
				const num = parseFloat(val);
				if (!Number.isNaN(num)) {
					setter?.(num);
				}
			}
		};

	return (
		<div className={cn("flex items-center gap-2", className)}>
			<div className="flex-1">
				<Input
					type="number"
					value={length ?? ""}
					onChange={handleChange(onLengthChange)}
					placeholder="L"
					disabled={disabled}
					min={0}
					step={0.1}
				/>
			</div>
			<span className="text-muted-foreground">×</span>
			<div className="flex-1">
				<Input
					type="number"
					value={width ?? ""}
					onChange={handleChange(onWidthChange)}
					placeholder="W"
					disabled={disabled}
					min={0}
					step={0.1}
				/>
			</div>
			<span className="text-muted-foreground">×</span>
			<div className="flex-1">
				<Input
					type="number"
					value={height ?? ""}
					onChange={handleChange(onHeightChange)}
					placeholder="H"
					disabled={disabled}
					min={0}
					step={0.1}
				/>
			</div>
			<span className="text-sm text-muted-foreground w-8">{unit}</span>
		</div>
	);
}
