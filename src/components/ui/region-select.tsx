//@ts-ignore
import countryRegionData from "country-region-data/dist/data-umd";
import { useEffect, useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { filterRegions } from "@/lib/helpers";

export interface Region {
	name: string;
	shortCode: string;
}

export interface CountryRegion {
	countryName: string;
	countryShortCode: string;
	regions: Region[];
}

interface RegionSelectProps {
	countryCode: string;
	priorityOptions?: string[];
	whitelist?: string[];
	blacklist?: string[];
	onChange?: (value: string) => void;
	className?: string;
	placeholder?: string;
	disabled?: boolean;
}

function RegionSelect({
	countryCode,
	priorityOptions = [],
	whitelist = [],
	blacklist = [],
	onChange = () => {},
	className,
	placeholder = "Region",
	disabled,
}: RegionSelectProps) {
	const [regions, setRegions] = useState<Region[]>([]);

	useEffect(() => {
		const country = countryRegionData.find(
			(country: CountryRegion) => country.countryShortCode === countryCode,
		);

		if (country) {
			setRegions(
				filterRegions(country.regions, priorityOptions, whitelist, blacklist),
			);
		} else {
			setRegions([]);
		}
	}, [countryCode, priorityOptions, whitelist, blacklist]);

	return (
		<Select
			onValueChange={(value: string) => {
				onChange(value);
			}}
			disabled={disabled}
		>
			<SelectTrigger className={className}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{regions.map(({ name, shortCode }) => (
					<SelectItem key={shortCode} value={shortCode}>
						{name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}

export default RegionSelect;
