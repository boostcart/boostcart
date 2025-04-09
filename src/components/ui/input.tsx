import * as React from "react";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

export interface InputProps extends React.ComponentProps<"input"> {
	startIcon?: IconType | React.ElementType;
	endIcon?: IconType | React.ElementType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, startIcon, endIcon, ...props }, ref) => {
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
					className={cn(
						"flex h-10 w-full rounded-md border border-input hover: bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition",
						startIcon && "pl-10 pr-3",
						endIcon && "pr-10 pl-3",
						startIcon && endIcon && "pl-10 pr-10",
						className,
					)}
					ref={ref}
					{...props}
				/>
				{EndIcon && (
					<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
						<EndIcon className="size-5 text-muted-foreground" />
					</div>
				)}
			</div>
		);
	},
);
Input.displayName = "Input";

export { Input };
