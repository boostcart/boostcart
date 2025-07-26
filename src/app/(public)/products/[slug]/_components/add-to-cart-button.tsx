"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import { useState } from "react";

export const AddToCartButton = ({ product }) => {
	const [quantity, setQuantity] = useState(1);

	const handleIncrement = () => {
		setQuantity((prev) => prev + 1);
	};

	const handleDecrement = () => {
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
	};

	return (
		<div className="flex items-center space-x-2">
			<div className="flex items-center border rounded-md h-11">
				<span className="px-4 text-lg">{quantity}</span>
				<Separator orientation="vertical" className="h-full" />
				<div className="flex flex-col">
					<button onClick={handleIncrement} className="cursor-pointer text-muted-foreground">
						<ChevronUp />
					</button>
					<Separator orientation="horizontal" className="w-full" />
					<button onClick={handleDecrement} className="cursor-pointer text-muted-foreground">
						<ChevronDown />
					</button>
				</div>
			</div>
			<Button
				size="lg"
				variant="outline"
				className="w-full"
			>
				<ShoppingCart />
				<span>Add to Cart</span>
			</Button>
		</div>
	)
}