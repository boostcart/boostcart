"use client";

import { HeartIcon } from "lucide-react";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Image from "next/image";
import { tempItems } from "./cart-dropdown";

export const WishlistDropdown = () => {
	const t = useTranslations();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="relative">
					<Button
						size="icon"
						variant="primaryGhost"
						className="[&_svg]:size-8 [&_svg]:shrink-0"
					>
						<HeartIcon />
					</Button>

					<span className="absolute flex items-center justify-center p-1 text-xs font-bold text-center text-white bg-red-500 border-2 border-white rounded-full shadow -top-1 -right-1 size-5">3</span>
				</div>
			</PopoverTrigger>
			<PopoverContent className="w-full sm:w-96" align="end">
				<div className="flex flex-col">
					{tempItems.map((item) => (
						<Link key={item.id} href={`/product/${item.slug}`} className="flex items-start py-2 border-b last:border-0 gap-x-4">
							<Image
								src={item.image}
								alt={item.name}
								width={80}
								height={80}
							/>

							<p className="text-sm font-bold transition-colors hover:text-primary">
								{item.name}
							</p>
						</Link>
					))}
				</div>

				<Button className="w-full">
					<Link href="/wishlist">
						{t("general.viewAll")}
					</Link>
				</Button>
			</PopoverContent>
		</Popover>
	);
};

