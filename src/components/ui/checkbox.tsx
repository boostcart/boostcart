"use client";

import { cn } from "@/lib/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type VariantProps, cva } from "class-variance-authority";
import { Check } from "lucide-react";
import * as React from "react";

const checkboxVariants = cva(
	"peer shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-primary-foreground transition-all duration-200 cursor-pointer",
	{
		variants: {
			variant: {
				default: "border-primary data-[state=checked]:bg-primary",
				black:
					"border-black data-[state=checked]:bg-black data-[state=checked]:text-white",
			},
			size: {
				default: "size-4",
				sm: "size-3",
				lg: "size-5",
				xl: "size-6",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface CheckboxProps
	extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
		VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
	React.ComponentRef<typeof CheckboxPrimitive.Root>,
	CheckboxProps
>(({ className, variant, size, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(checkboxVariants({ variant, size, className }))}
		{...props}
	>
		<CheckboxPrimitive.Indicator
			className={cn("flex items-center justify-center text-current")}
		>
			<Check className="w-full h-full" />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
