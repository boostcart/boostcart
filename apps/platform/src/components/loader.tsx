"use client";

import { LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps {
	className?: string;
	size?: "sm" | "md" | "lg";
}

export function Loader({ className, size = "md" }: LoaderProps) {
	const sizeClasses = {
		sm: "size-4",
		md: "size-6",
		lg: "size-8",
	};

	return (
		<LoaderIcon
			className={cn(
				"text-muted-foreground animate-spin",
				sizeClasses[size],
				className,
			)}
		/>
	);
}

export default Loader;
