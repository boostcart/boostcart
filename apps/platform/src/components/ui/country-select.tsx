"use client";

import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import flags from "react-phone-number-input/flags";

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
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type CountryCode = string; // ISO 3166-1 alpha-2

export type CountrySelectProps = {
	className?: string;
	disabled?: boolean;
	value?: CountryCode;
	placeholder?: string;
	onChange?: (country: CountryCode) => void;
};

export const CountrySelect = ({
	className,
	disabled,
	value,
	placeholder = "Select country",
	onChange,
}: CountrySelectProps) => {
	const scrollAreaRef = React.useRef<HTMLDivElement>(null);
	const [searchValue, setSearchValue] = React.useState("");
	const [isOpen, setIsOpen] = React.useState(false);

	const displayNames = React.useMemo(() => {
		try {
			return new Intl.DisplayNames(["en"], { type: "region" });
		} catch {
			return undefined;
		}
	}, []);

	const countries = React.useMemo(() => {
		const codes = Object.keys(flags) as CountryCode[];
		const entries = codes.map((code) => ({
			code,
			label: displayNames?.of(code) ?? code,
		}));
		return entries
			.filter((e) => !!e.code)
			.sort((a, b) => a.label.localeCompare(b.label));
	}, [displayNames]);

	const filtered = countries.filter((c) =>
		c.label.toLowerCase().includes(searchValue.toLowerCase()),
	);

	const selected = value;

	return (
		<Popover
			open={isOpen}
			modal
			onOpenChange={(open) => {
				setIsOpen(open);
				open && setSearchValue("");
			}}
		>
			<PopoverTrigger asChild>
				<Button
					type="button"
					variant="outline"
					className={cn(
						"flex gap-2 justify-start rounded-lg px-3 w-full",
						!selected ? "text-muted-foreground" : undefined,
						className,
					)}
					disabled={disabled}
				>
					{selected ? (
						<FlagComponent country={selected} countryName={selected} />
					) : (
						<span className="h-4 w-6" />
					)}
					<span className="flex-1 text-left text-sm truncate">
						{selected ? (displayNames?.of(selected) ?? selected) : placeholder}
					</span>
					<ChevronsUpDown
						className={cn(
							"-mr-1 size-4 opacity-50",
							disabled ? "hidden" : "opacity-100",
						)}
					/>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[300px] p-0" align="start">
				<Command>
					<CommandInput
						value={searchValue}
						onValueChange={(value) => {
							setSearchValue(value);
							setTimeout(() => {
								if (scrollAreaRef.current) {
									const viewportElement = scrollAreaRef.current.querySelector(
										"[data-radix-scroll-area-viewport]",
									);
									if (viewportElement) {
										(viewportElement as HTMLElement).scrollTop = 0;
									}
								}
							}, 0);
						}}
						placeholder="Search country..."
					/>
					<CommandList>
						<ScrollArea ref={scrollAreaRef} className="h-72">
							<CommandEmpty>No country found.</CommandEmpty>
							<CommandGroup>
								{filtered.map(({ code, label }) => (
									<CommandItem
										key={code}
										className="gap-2"
										onSelect={() => {
											onChange?.(code);
											setIsOpen(false);
										}}
									>
										<FlagComponent country={code} countryName={label} />
										<span className="flex-1 text-sm">{label}</span>
										<CheckIcon
											className={cn(
												"ml-auto size-4",
												code === selected ? "opacity-100" : "opacity-0",
											)}
										/>
									</CommandItem>
								))}
							</CommandGroup>
						</ScrollArea>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

const FlagComponent = ({
	country,
	countryName,
}: {
	country?: CountryCode;
	countryName?: string;
}) => {
	const Flag = country
		? (
				flags as Record<
					string,
					React.ComponentType<{ title?: string; className?: string }>
				>
			)[country]
		: undefined;
	return (
		<span className="flex h-4 w-6 overflow-hidden rounded-sm [&_svg]:size-full">
			{Flag && <Flag title={countryName} className="size-full opacity-100" />}
		</span>
	);
};

CountrySelect.displayName = "CountrySelect";

export default CountrySelect;
