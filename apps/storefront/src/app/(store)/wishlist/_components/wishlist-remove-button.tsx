"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { removeFromWishlist } from "@/server/actions/wishlist";

interface WishlistRemoveButtonProps {
	productId: string;
}

export function WishlistRemoveButton({ productId }: WishlistRemoveButtonProps) {
	const [isPending, startTransition] = useTransition();

	const handleRemove = () => {
		startTransition(async () => {
			const result = await removeFromWishlist(productId);
			if (result.success) {
				toast.success("Removed from wishlist");
			} else {
				toast.error(result.error || "Failed to remove from wishlist");
			}
		});
	};

	return (
		<Button
			variant="destructive"
			size="icon"
			className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
			onClick={handleRemove}
			disabled={isPending}
		>
			<Trash2 className="h-4 w-4" />
		</Button>
	);
}
