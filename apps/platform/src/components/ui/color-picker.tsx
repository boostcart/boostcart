"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
	value?: string;
	onChange?: (value: string) => void;
	disabled?: boolean;
	className?: string;
}

const PRESET_COLORS = [
	"#000000",
	"#FFFFFF",
	"#EF4444",
	"#F97316",
	"#F59E0B",
	"#EAB308",
	"#84CC16",
	"#22C55E",
	"#10B981",
	"#14B8A6",
	"#06B6D4",
	"#0EA5E9",
	"#3B82F6",
	"#6366F1",
	"#8B5CF6",
	"#A855F7",
	"#D946EF",
	"#EC4899",
	"#F43F5E",
	"#78716C",
	"#A8A29E",
	"#D6D3D1",
];

export function ColorPicker({
	value = "#000000",
	onChange,
	disabled = false,
	className,
}: ColorPickerProps) {
	const [open, setOpen] = React.useState(false);
	const [inputValue, setInputValue] = React.useState(value);

	React.useEffect(() => {
		setInputValue(value);
	}, [value]);

	const handleColorChange = (color: string) => {
		setInputValue(color);
		onChange?.(color);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let newValue = e.target.value;

		// Ensure it starts with #
		if (!newValue.startsWith("#")) {
			newValue = `#${newValue}`;
		}

		setInputValue(newValue);

		// Only trigger onChange if it's a valid hex color
		if (/^#[0-9A-Fa-f]{6}$/.test(newValue)) {
			onChange?.(newValue);
		}
	};

	const handleInputBlur = () => {
		// Reset to last valid value if current input is invalid
		if (!/^#[0-9A-Fa-f]{6}$/.test(inputValue)) {
			setInputValue(value);
		}
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					disabled={disabled}
					className={cn("w-full justify-start gap-2 font-normal", className)}
				>
					<div
						className="h-4 w-4 rounded border border-border"
						style={{ backgroundColor: value }}
					/>
					<span className="uppercase">{value}</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-64" align="start">
				<div className="space-y-3">
					<div className="space-y-1.5">
						<Label htmlFor="hex-color">Hex Color</Label>
						<div className="flex gap-2">
							<div
								className="h-9 w-9 rounded border border-border shrink-0"
								style={{ backgroundColor: inputValue }}
							/>
							<Input
								id="hex-color"
								value={inputValue}
								onChange={handleInputChange}
								onBlur={handleInputBlur}
								placeholder="#000000"
								className="font-mono uppercase"
								maxLength={7}
							/>
						</div>
					</div>
					<div className="space-y-1.5">
						<Label>Presets</Label>
						<div className="grid grid-cols-7 gap-1">
							{PRESET_COLORS.map((color) => (
								<button
									key={color}
									type="button"
									className={cn(
										"h-6 w-6 rounded border border-border hover:scale-110 transition-transform",
										value === color && "ring-2 ring-primary ring-offset-1",
									)}
									style={{ backgroundColor: color }}
									onClick={() => {
										handleColorChange(color);
										setOpen(false);
									}}
								/>
							))}
						</div>
					</div>
					<div className="space-y-1.5">
						<Label htmlFor="native-picker">Color Picker</Label>
						<input
							id="native-picker"
							type="color"
							value={value}
							onChange={(e) => handleColorChange(e.target.value)}
							className="h-8 w-full cursor-pointer rounded border border-border"
						/>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}

// Inline color swatch for display
interface ColorSwatchProps {
	color: string;
	label?: string;
	className?: string;
}

export function ColorSwatch({ color, label, className }: ColorSwatchProps) {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<div
				className="h-4 w-4 rounded border border-border shrink-0"
				style={{ backgroundColor: color }}
			/>
			{label && <span className="text-sm">{label}</span>}
		</div>
	);
}
