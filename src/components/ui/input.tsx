import type * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
	startIcon?: React.ElementType;
	endIcon?: React.ElementType;
}

function Input({ className, type, startIcon, endIcon, ...props }: InputProps) {
	const StartIcon = startIcon;
	const EndIcon = endIcon;

	return (
		<div className="relative w-full">
			{StartIcon && (
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<StartIcon className="size-5 text-muted-foreground" />
				</div>
			)}

			<input
				type={type}
				data-slot="input"
				className={cn(
					"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
					"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
					startIcon && "pl-10 pr-3",
					endIcon && "pr-10 pl-3",
					startIcon && endIcon && "pl-10 pr-10",
					className,
				)}
				{...props}
			/>

			{EndIcon && (
				<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
					<EndIcon className="size-5 text-muted-foreground" />
				</div>
			)}
		</div>
	);
}

export { Input };
