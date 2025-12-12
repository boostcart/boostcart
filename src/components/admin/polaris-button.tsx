import { Slot as SlotPrimitive } from "radix-ui";
import type React from "react";
import { cn } from "@/lib/utils";

interface PolarisButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	size?: "micro" | "slim" | "medium" | "large";
	fullWidth?: boolean;
	loading?: boolean;
	disabled?: boolean;
	icon?: React.ReactNode;
	asChild?: boolean;
}

export function PolarisButton({
	children,
	size = "slim",
	fullWidth = false,
	loading = false,
	disabled = false,
	icon,
	asChild = false,
	className,
	...props
}: PolarisButtonProps) {
	const Comp = asChild ? SlotPrimitive.Slot : "button";
	const sizeClasses = {
		micro: "h-7 px-2.5 text-xs",
		slim: "h-9 px-3 text-sm",
		medium: "h-10 px-4 text-sm",
		large: "h-12 px-5 text-base",
	};

	return (
		<Comp
			disabled={disabled || loading}
			className={cn(
				// Base styles matching Polaris primary button
				"relative inline-flex items-center justify-center gap-2",
				"font-semibold rounded-[10px] cursor-pointer",
				"transition-all duration-200 ease-out",
				"outline-none focus-visible:outline-2 focus-visible:outline-offset-2",

				"border-0",
				"shadow-[inset_0_1.5px_0_0_rgba(0,0,0,0.6),inset_1.5px_0_0_0_rgba(0,0,0,0.8),inset_-1.5px_0_0_0_rgba(0,0,0,0.8),inset_0_-3px_0_0_rgba(0,0,0,0.8)]",

				"bg-linear-to-b from-[#4a4a4a] to-[#303030]",

				// Text colors from Polaris tokens
				"text-white",

				"hover:before:absolute hover:before:inset-0 hover:before:rounded-[10px] hover:before:bg-black hover:before:opacity-30 hover:before:transition-opacity hover:before:duration-200 hover:before:content-['']",

				// Disabled state
				"disabled:bg-linear-to-b disabled:from-[rgba(0,0,0,0.2)] disabled:to-[rgba(0,0,0,0.17)]",
				"disabled:text-[rgba(255,255,255,0.6)]",
				"disabled:cursor-not-allowed",
				"disabled:shadow-[inset_0_1.5px_0_0_rgba(0,0,0,0.2),inset_1.5px_0_0_0_rgba(0,0,0,0.2),inset_-1.5px_0_0_0_rgba(0,0,0,0.2),inset_0_-3px_0_0_rgba(0,0,0,0.2)]",
				"disabled:hover:before:opacity-0",

				// Focus state border
				"focus-visible:outline-[#005BD3]",

				"active:shadow-[inset_0_4px_0_0_rgba(0,0,0,0.8),inset_1.5px_0_0_0_rgba(0,0,0,0.8),inset_-1.5px_0_0_0_rgba(0,0,0,0.8),inset_0_-3px_0_0_rgba(0,0,0,0.8)]",
				"active:bg-linear-to-b active:from-[#2a2a2a] active:to-[#1a1a1a]",
				"active:[&>span:last-child]:translate-y-px",

				// Size variants
				sizeClasses[size],

				// Full width
				fullWidth && "w-full",

				asChild && disabled && "pointer-events-none opacity-50",

				className,
			)}
			{...props}
		>
			<span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0_3px_0_0_rgba(255,255,255,0.2),inset_1.5px_0_0_0_rgba(255,255,255,0.1),inset_-1.5px_0_0_0_rgba(255,255,255,0.1)] active:opacity-0 transition-opacity duration-200" />

			<span className="relative flex items-center justify-center gap-2 transition-transform duration-200">
				{loading ? (
					<svg
						className="animate-spin size-4"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<title>Loading</title>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				) : (
					icon && <span className="shrink-0">{icon}</span>
				)}
				{children}
			</span>
		</Comp>
	);
}
