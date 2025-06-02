"use client";

import { ShoppingCartIcon } from "lucide-react";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Image from "next/image";

export const tempItems = [
	{
		id: 1,
		name: "Термопомпа Daikin Altherma 3 M EBLA08E3V3, 8 kW, отопление, охлаждане и БГВ",
		image:
			"https://ecom.lanoow.dev/_next/image?url=https%3A%2F%2Fpeterm.bg%2Fstorage%2Fimages%2Fproducts%2Fpeterm-1709475270.webp&w=128&q=75",
		slug: "termopompa-daikin-altherma-3-m-ebla08e3v3-8-kw-otoplenie-ohlajdane-i-bgv",
		price: 12000,
		quantity: 1,
	},
	{
		id: 2,
		name: "Хиперинверторен климатик General Fujitsu ASHG14KGTB(E)/AOHG14KGCA, Wi-Fi, 14000 BTU",
		image:
			"https://ecom.lanoow.dev/_next/image?url=https%3A%2F%2Fpeterm.bg%2Fstorage%2Fimages%2Fproducts%2Fpeterm-1716206151.webp&w=128&q=75",
		slug: "hiperinvertoren-klimatik-general-fujitsu-ashg14kgtb-e-aohg14kgca-wi-fi-14000-btu",
		price: 1500,
		quantity: 2,
	},
	{
		id: 3,
		name: "Термопомпа Daikin Altherma 3 M EBLA16E3V3, 16 kW, отопление, охлаждане и БГВ",
		image:
			"https://ecom.lanoow.dev/_next/image?url=https%3A%2F%2Fpeterm.bg%2Fstorage%2Fimages%2Fproducts%2Fpeterm-1709475270.webp&w=128&q=75",
		slug: "termopompa-daikin-altherma-3-m-ebla16e3v3-16-kw-otoplenie-ohlajdane-i-bgv",
		price: 15000,
		quantity: 1,
	},
];

export const CartDropdown = () => {
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
						<ShoppingCartIcon />
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

							<div className="flex flex-col w-full space-y-2">
								<p className="text-sm font-bold transition-colors hover:text-primary">
									{item.name}
								</p>

								<div className="flex items-center w-full space-x-1">
									<p className="text-sm font-bold">
										{item.price.toLocaleString("bg-BG", {
											style: "currency",
											currency: "BGN",
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										})}
									</p>

									<p className="text-sm font-normal text-muted-foreground">
										x {item.quantity}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>

				<div>
					<p className="flex items-center justify-between py-2 text-base font-bold">
						<span>{t("general.total")}</span>
						<span>{tempItems.map((item) => {
							return item.price * item.quantity;
						}).reduce((a, b) => a + b, 0).toLocaleString("bg-BG", {
							style: "currency",
							currency: "BGN",
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}</span>
					</p>

					<Button className="w-full">
						{t("general.checkout")}
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
};

