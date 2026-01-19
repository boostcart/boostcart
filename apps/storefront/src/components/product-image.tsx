"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
	src: string | null;
	alt: string;
	fill?: boolean;
	width?: number;
	height?: number;
	className?: string;
	sizes?: string;
	priority?: boolean;
}

/**
 * ProductImage component that handles dynamic image URLs
 * Falls back to a placeholder if the image fails to load
 */
export function ProductImage({
	src,
	alt,
	fill,
	width,
	height,
	className,
	sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
	priority = false,
}: ProductImageProps) {
	const [error, setError] = useState(false);

	if (!src || error) {
		return (
			<div
				className={`flex items-center justify-center bg-muted text-4xl ${className}`}
			>
				📦
			</div>
		);
	}

	// For fill mode (requires parent with position: relative)
	if (fill) {
		return (
			<Image
				src={src}
				alt={alt}
				fill
				className={className}
				sizes={sizes}
				priority={priority}
				onError={() => setError(true)}
			/>
		);
	}

	// For fixed dimensions
	return (
		<Image
			src={src}
			alt={alt}
			width={width || 300}
			height={height || 300}
			className={className}
			sizes={sizes}
			priority={priority}
			onError={() => setError(true)}
		/>
	);
}
