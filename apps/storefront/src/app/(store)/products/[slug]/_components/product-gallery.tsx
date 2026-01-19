"use client";

import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
	images: Array<{
		url: string;
		altText: string;
	}>;
}

export function ProductGallery({ images }: ProductGalleryProps) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	if (images.length === 0) {
		return (
			<div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
				<span className="text-6xl">📦</span>
			</div>
		);
	}

	const selectedImage = images[selectedIndex] ?? images[0];

	// This shouldn't happen but TypeScript wants us to be safe
	if (!selectedImage) {
		return (
			<div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
				<span className="text-6xl">📦</span>
			</div>
		);
	}

	const goToPrevious = () => {
		setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
	};

	const goToNext = () => {
		setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
	};

	return (
		<div className="space-y-4">
			{/* Main image */}
			<Dialog>
				<div className="relative aspect-square overflow-hidden rounded-lg bg-muted group">
					<Image
						src={selectedImage.url}
						alt={selectedImage.altText}
						fill
						className="object-cover"
					/>

					{/* Zoom button */}
					<DialogTrigger asChild>
						<Button
							variant="secondary"
							size="icon"
							className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
						>
							<ZoomIn className="h-4 w-4" />
							<span className="sr-only">Zoom image</span>
						</Button>
					</DialogTrigger>

					{/* Navigation arrows */}
					{images.length > 1 && (
						<>
							<Button
								variant="secondary"
								size="icon"
								className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
								onClick={goToPrevious}
							>
								<ChevronLeft className="h-4 w-4" />
								<span className="sr-only">Previous image</span>
							</Button>
							<Button
								variant="secondary"
								size="icon"
								className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
								onClick={goToNext}
							>
								<ChevronRight className="h-4 w-4" />
								<span className="sr-only">Next image</span>
							</Button>
						</>
					)}
				</div>

				{/* Lightbox dialog */}
				<DialogContent className="max-w-4xl">
					<DialogTitle className="sr-only">Product Image</DialogTitle>
					<Image
						src={selectedImage.url}
						alt={selectedImage.altText || "Product image"}
						width={800}
						height={800}
						className="w-full h-auto"
					/>
				</DialogContent>
			</Dialog>

			{/* Thumbnails */}
			{images.length > 1 && (
				<div className="flex gap-2 overflow-x-auto pb-2">
					{images.map((image, index) => (
						<button
							key={image.url}
							type="button"
							className={cn(
								"relative w-20 h-20 rounded-md overflow-hidden shrink-0 ring-2 ring-offset-2 transition-all",
								selectedIndex === index
									? "ring-primary"
									: "ring-transparent hover:ring-muted-foreground/50",
							)}
							onClick={() => setSelectedIndex(index)}
						>
							<Image
								src={image.url}
								alt={image.altText}
								fill
								className="object-cover"
							/>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
