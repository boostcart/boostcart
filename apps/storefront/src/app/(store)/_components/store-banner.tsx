"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface StoreBannerProps {
	text: string;
	backgroundColor?: string;
	textColor?: string;
}

export function StoreBanner({
	text,
	backgroundColor = "#000000",
	textColor = "#ffffff",
}: StoreBannerProps) {
	const [dismissed, setDismissed] = useState(false);

	if (dismissed) {
		return null;
	}

	return (
		<div
			className="relative py-2 px-4 text-center text-sm"
			style={{
				backgroundColor,
				color: textColor,
			}}
		>
			<p className="pr-8">{text}</p>
			<Button
				variant="ghost"
				size="icon"
				className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 hover:bg-white/20"
				style={{ color: textColor }}
				onClick={() => setDismissed(true)}
			>
				<X className="h-4 w-4" />
				<span className="sr-only">Dismiss</span>
			</Button>
		</div>
	);
}
