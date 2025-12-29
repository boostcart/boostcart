"use client";

import { cn } from "@/lib/utils";

interface SeoPreviewProps {
	title?: string;
	description?: string;
	url?: string;
	baseUrl?: string;
	className?: string;
}

export function SeoPreview({
	title = "Page Title",
	description = "Page description will appear here. This is what users will see in search engine results.",
	url = "page-url",
	baseUrl = "yourstore.com",
	className,
}: SeoPreviewProps) {
	// Truncate title to ~60 characters for Google display
	const displayTitle = title.length > 60 ? `${title.slice(0, 57)}...` : title;

	// Truncate description to ~160 characters for Google display
	const displayDescription =
		description.length > 160 ? `${description.slice(0, 157)}...` : description;

	// Clean and format URL
	const cleanUrl = url
		.toLowerCase()
		.replace(/^\/+|\/+$/g, "") // Remove leading/trailing slashes
		.replace(/\s+/g, "-"); // Replace spaces with dashes

	return (
		<div className={cn("rounded-lg border bg-card p-4", className)}>
			<p className="text-xs text-muted-foreground mb-3">
				Preview how this product might appear in search engine results
			</p>
			<div className="space-y-1">
				{/* URL breadcrumb */}
				<div className="flex items-center gap-1 text-sm">
					<span className="text-[#202124] dark:text-gray-300">{baseUrl}</span>
					<span className="text-[#5f6368] dark:text-gray-500">›</span>
					<span className="text-[#5f6368] dark:text-gray-500">products</span>
					<span className="text-[#5f6368] dark:text-gray-500">›</span>
					<span className="text-[#5f6368] dark:text-gray-500 truncate max-w-50">
						{cleanUrl || "..."}
					</span>
				</div>

				{/* Title */}
				<h3 className="text-xl text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer leading-tight">
					{displayTitle || "Untitled Product"}
				</h3>

				{/* Description */}
				<p className="text-sm text-[#4d5156] dark:text-gray-400 leading-snug">
					{displayDescription || "No description provided."}
				</p>
			</div>

			{/* Character counts */}
			<div className="flex gap-4 mt-3 pt-3 border-t text-xs text-muted-foreground">
				<span
					className={cn(
						title.length > 60 && "text-amber-600 dark:text-amber-400",
					)}
				>
					Title: {title.length}/60
					{title.length > 60 && " (truncated)"}
				</span>
				<span
					className={cn(
						description.length > 160 && "text-amber-600 dark:text-amber-400",
					)}
				>
					Description: {description.length}/160
					{description.length > 160 && " (truncated)"}
				</span>
			</div>
		</div>
	);
}
