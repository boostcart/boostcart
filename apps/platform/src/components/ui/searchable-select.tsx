"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface SearchableSelectOption {
	value: string;
	label: string;
	icon?: React.ReactNode;
}

interface SearchableSelectProps {
	options: SearchableSelectOption[];
	value?: string;
	onValueChange?: (value: string) => void;
	placeholder?: string;
	searchPlaceholder?: string;
	emptyText?: string;
	disabled?: boolean;
	className?: string;
}

export function SearchableSelect({
	options,
	value,
	onValueChange,
	placeholder = "Select an option...",
	searchPlaceholder = "Search...",
	emptyText = "No results found.",
	disabled = false,
	className,
}: SearchableSelectProps) {
	const [open, setOpen] = React.useState(false);

	const selectedOption = options.find((option) => option.value === value);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				{/* biome-ignore lint/a11y/useSemanticElements: Custom searchable select requires role="combobox" */}
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					disabled={disabled}
					className={cn(
						"w-full justify-between font-normal",
						!value && "text-muted-foreground",
						className,
					)}
				>
					<span className="flex items-center gap-2 truncate">
						{selectedOption?.icon}
						{selectedOption?.label ?? placeholder}
					</span>
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="w-[--radix-popover-trigger-width] p-0"
				align="start"
			>
				<Command>
					<CommandInput placeholder={searchPlaceholder} />
					<CommandList>
						<CommandEmpty>{emptyText}</CommandEmpty>
						<CommandGroup>
							{options.map((option) => (
								<CommandItem
									key={option.value}
									value={option.label}
									onSelect={() => {
										onValueChange?.(option.value === value ? "" : option.value);
										setOpen(false);
									}}
								>
									{option.icon && <span className="mr-2">{option.icon}</span>}
									{option.label}
									<Check
										className={cn(
											"ml-auto h-4 w-4",
											value === option.value ? "opacity-100" : "opacity-0",
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}

// Multi-select variant
interface SearchableMultiSelectProps {
	options: SearchableSelectOption[];
	values: string[];
	onValuesChange?: (values: string[]) => void;
	placeholder?: string;
	searchPlaceholder?: string;
	emptyText?: string;
	disabled?: boolean;
	className?: string;
	maxDisplay?: number;
}

export function SearchableMultiSelect({
	options,
	values,
	onValuesChange,
	placeholder = "Select options...",
	searchPlaceholder = "Search...",
	emptyText = "No results found.",
	disabled = false,
	className,
	maxDisplay = 3,
}: SearchableMultiSelectProps) {
	const [open, setOpen] = React.useState(false);

	const selectedOptions = options.filter((option) =>
		values.includes(option.value),
	);

	const displayText = React.useMemo(() => {
		if (selectedOptions.length === 0) return null;
		if (selectedOptions.length <= maxDisplay) {
			return selectedOptions.map((o) => o.label).join(", ");
		}
		return `${selectedOptions
			.slice(0, maxDisplay)
			.map((o) => o.label)
			.join(", ")} +${selectedOptions.length - maxDisplay} more`;
	}, [selectedOptions, maxDisplay]);

	const handleSelect = (optionValue: string) => {
		const newValues = values.includes(optionValue)
			? values.filter((v) => v !== optionValue)
			: [...values, optionValue];
		onValuesChange?.(newValues);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				{/* biome-ignore lint/a11y/useSemanticElements: Custom multi-select requires role="combobox" */}
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					disabled={disabled}
					className={cn(
						"w-full justify-between font-normal",
						!displayText && "text-muted-foreground",
						className,
					)}
				>
					<span className="truncate">{displayText ?? placeholder}</span>
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="w-[--radix-popover-trigger-width] p-0"
				align="start"
			>
				<Command>
					<CommandInput placeholder={searchPlaceholder} />
					<CommandList>
						<CommandEmpty>{emptyText}</CommandEmpty>
						<CommandGroup>
							{options.map((option) => (
								<CommandItem
									key={option.value}
									value={option.label}
									onSelect={() => handleSelect(option.value)}
								>
									{option.icon && <span className="mr-2">{option.icon}</span>}
									{option.label}
									<Check
										className={cn(
											"ml-auto h-4 w-4",
											values.includes(option.value)
												? "opacity-100"
												: "opacity-0",
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
