"use client";

import { Heart, Loader2 } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { isInWishlist, toggleWishlist } from "@/server/actions/wishlist";
import { useCustomerAuth } from "@/stores/customer-auth-store";

interface WishlistButtonProps {
	productId: string;
	variant?: "default" | "icon";
	className?: string;
}

export function WishlistButton({
	productId,
	variant = "icon",
	className,
}: WishlistButtonProps) {
	const { customer } = useCustomerAuth();
	const [isWishlisted, setIsWishlisted] = useState(false);
	const [isPending, startTransition] = useTransition();
	const [isLoading, setIsLoading] = useState(true);

	// Check initial wishlist status
	useEffect(() => {
		if (customer) {
			isInWishlist(productId).then((inWishlist) => {
				setIsWishlisted(inWishlist);
				setIsLoading(false);
			});
		} else {
			setIsLoading(false);
		}
	}, [customer, productId]);

	const handleToggle = () => {
		if (!customer) {
			toast.error("Please sign in to add items to your wishlist");
			return;
		}

		startTransition(async () => {
			const result = await toggleWishlist(productId);
			if (result.success) {
				setIsWishlisted(result.isInWishlist);
				toast.success(
					result.isInWishlist ? "Added to wishlist" : "Removed from wishlist",
				);
			} else {
				toast.error(result.error || "Something went wrong");
			}
		});
	};

	if (variant === "icon") {
		return (
			<Button
				size="lg"
				variant="outline"
				className={cn("px-4", className)}
				onClick={handleToggle}
				disabled={isPending || isLoading}
			>
				{isPending || isLoading ? (
					<Loader2 className="h-5 w-5 animate-spin" />
				) : (
					<Heart
						className={cn(
							"h-5 w-5 transition-colors",
							isWishlisted && "fill-red-500 text-red-500",
						)}
					/>
				)}
				<span className="sr-only">
					{isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
				</span>
			</Button>
		);
	}

	return (
		<Button
			variant={isWishlisted ? "default" : "outline"}
			onClick={handleToggle}
			disabled={isPending || isLoading}
			className={className}
		>
			{isPending || isLoading ? (
				<Loader2 className="mr-2 h-4 w-4 animate-spin" />
			) : (
				<Heart className={cn("mr-2 h-4 w-4", isWishlisted && "fill-current")} />
			)}
			{isWishlisted ? "In Wishlist" : "Add to Wishlist"}
		</Button>
	);
}
