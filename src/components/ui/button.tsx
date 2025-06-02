import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition ease-in-out focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				primaryGhost: "hover:text-primary active:text-primary",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				invisible: "bg-transparent text-muted-foreground hover:text-black",
				destructiveGhost:
					"hover:bg-destructive/80 hover:text-destructive-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				flag: "border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-neutral-50 dark:bg-neutral-950 dark:hover:bg-neutral-50 dark:text-white text-black transition focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2",
				google: "bg-white text-black hover:bg-accent border border-input",
				facebook: "bg-[#1877f2] text-white hover:bg-[#0e5a9d]",
				apple: "bg-black text-white hover:bg-[#333333]",
			},
			size: {
				default: "h-10 px-4 py-2 text-sm",
				sm: "h-9 rounded-md px-3 text-sm",
				lg: "h-11 rounded-md px-8 text-md",
				icon: "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

function Button({ 
	className, 
	variant, 
	size, 
	asChild = false, 
	...props 
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
