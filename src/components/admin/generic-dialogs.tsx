"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

/**
 * Generic Simple Form Dialog
 * Use this for simple create/edit dialogs with basic fields
 */
interface SimpleFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title: string;
	description: string;
	mode: "create" | "edit";
	children: React.ReactNode;
	onSubmit?: (e: React.FormEvent) => void;
}

export function SimpleFormDialog({
	open,
	onOpenChange,
	title,
	description,
	mode,
	children,
	onSubmit,
}: SimpleFormDialogProps) {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit?.(e);
		onOpenChange(false);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4">
					{children}

					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
						>
							Cancel
						</Button>
						<Button type="submit">
							{mode === "create" ? "Create" : "Save Changes"}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

/**
 * Generic View/Details Dialog
 * Use this to display detailed information about an item
 */
interface ViewDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title: string;
	description?: string;
	children: React.ReactNode;
	actions?: React.ReactNode;
}

export function ViewDialog({
	open,
	onOpenChange,
	title,
	description,
	children,
	actions,
}: ViewDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					{description && <DialogDescription>{description}</DialogDescription>}
				</DialogHeader>

				<div className="space-y-4">{children}</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Close
					</Button>
					{actions}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

/**
 * Generic Delete Confirmation Dialog
 * Use this for delete confirmations
 */
interface DeleteDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title: string;
	description: string;
	itemName: string;
	itemDetails?: Record<string, string | number>;
	onConfirm: () => void;
}

export function DeleteDialog({
	open,
	onOpenChange,
	title,
	description,
	itemName,
	itemDetails,
	onConfirm,
}: DeleteDialogProps) {
	const handleDelete = () => {
		onConfirm();
		onOpenChange(false);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>

				<div className="p-4 border rounded-lg bg-destructive/10 space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Item:</span>
						<span className="font-medium">{itemName}</span>
					</div>
					{itemDetails &&
						Object.entries(itemDetails).map(([key, value]) => (
							<div key={key} className="flex justify-between text-sm">
								<span className="text-muted-foreground capitalize">
									{key.replace(/_/g, ` `)}:
								</span>
								<span className="font-medium">{value}</span>
							</div>
						))}
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Cancel
					</Button>
					<Button variant="destructive" onClick={handleDelete}>
						Delete
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

/**
 * Reusable Form Field Components
 */
export const FormField = {
	Text: ({
		id,
		label,
		placeholder,
		defaultValue,
		required,
		...props
	}: {
		id: string;
		label: string;
		placeholder?: string;
		defaultValue?: string;
		required?: boolean;
		type?: string;
	}) => (
		<div className="space-y-2">
			<Label htmlFor={id}>
				{label} {required && <span className="text-red-500">*</span>}
			</Label>
			<Input
				id={id}
				placeholder={placeholder}
				defaultValue={defaultValue}
				required={required}
				{...props}
			/>
		</div>
	),

	Textarea: ({
		id,
		label,
		placeholder,
		defaultValue,
		rows = 3,
	}: {
		id: string;
		label: string;
		placeholder?: string;
		defaultValue?: string;
		rows?: number;
	}) => (
		<div className="space-y-2">
			<Label htmlFor={id}>{label}</Label>
			<Textarea
				id={id}
				placeholder={placeholder}
				defaultValue={defaultValue}
				rows={rows}
			/>
		</div>
	),

	Select: ({
		id,
		label,
		placeholder,
		defaultValue,
		required,
		options,
	}: {
		id: string;
		label: string;
		placeholder?: string;
		defaultValue?: string;
		required?: boolean;
		options: { value: string; label: string }[];
	}) => (
		<div className="space-y-2">
			<Label htmlFor={id}>
				{label} {required && <span className="text-red-500">*</span>}
			</Label>
			<Select defaultValue={defaultValue} required={required}>
				<SelectTrigger id={id}>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					{options.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	),

	Switch: ({
		id,
		label,
		description,
		defaultChecked,
	}: {
		id: string;
		label: string;
		description?: string;
		defaultChecked?: boolean;
	}) => (
		<div className="flex items-center justify-between">
			<div className="space-y-0.5">
				<Label htmlFor={id}>{label}</Label>
				{description && (
					<p className="text-sm text-muted-foreground">{description}</p>
				)}
			</div>
			<Switch id={id} defaultChecked={defaultChecked} />
		</div>
	),

	Number: ({
		id,
		label,
		placeholder,
		defaultValue,
		min,
		max,
		step,
		required,
	}: {
		id: string;
		label: string;
		placeholder?: string;
		defaultValue?: string | number;
		min?: number;
		max?: number;
		step?: string;
		required?: boolean;
	}) => (
		<div className="space-y-2">
			<Label htmlFor={id}>
				{label} {required && <span className="text-red-500">*</span>}
			</Label>
			<Input
				id={id}
				type="number"
				placeholder={placeholder}
				defaultValue={defaultValue}
				min={min}
				max={max}
				step={step}
				required={required}
			/>
		</div>
	),
};

/**
 * Reusable Display Components for View Dialogs
 */
export const DisplayField = {
	Text: ({
		label,
		value,
		variant,
	}: {
		label: string;
		value: string | number;
		variant?: "default" | "large" | "mono";
	}) => (
		<div className="space-y-2">
			<p className="text-sm font-medium text-muted-foreground">{label}</p>
			<p
				className={`${
					variant === "large"
						? "text-2xl font-bold"
						: variant === "mono"
							? "text-sm font-mono"
							: "text-sm"
				}`}
			>
				{value}
			</p>
		</div>
	),

	Badge: ({
		label,
		value,
		variant,
	}: {
		label: string;
		value: string;
		variant?: "default" | "secondary" | "destructive" | "outline";
	}) => (
		<div className="space-y-2">
			<p className="text-sm font-medium text-muted-foreground">{label}</p>
			<Badge variant={variant}>{value}</Badge>
		</div>
	),

	Stat: ({ label, value }: { label: string; value: string | number }) => (
		<div className="p-4 border rounded-lg bg-muted/30">
			<p className="text-sm text-muted-foreground mb-1">{label}</p>
			<p className="text-3xl font-bold">{value}</p>
		</div>
	),

	Section: ({
		title,
		children,
	}: {
		title: string;
		children: React.ReactNode;
	}) => (
		<div className="space-y-2">
			<p className="text-sm font-medium text-muted-foreground">{title}</p>
			<div className="text-sm text-muted-foreground">{children}</div>
		</div>
	),
};

/**
 * Layout Components
 */
export const FormLayout = {
	Grid: ({
		children,
		cols = 2,
	}: {
		children: React.ReactNode;
		cols?: 2 | 3;
	}) => <div className={`grid grid-cols-${cols} gap-4`}>{children}</div>,

	Separator: () => <Separator className="my-4" />,

	Section: ({
		title,
		children,
	}: {
		title?: string;
		children: React.ReactNode;
	}) => (
		<div className="space-y-4">
			{title && <h3 className="text-lg font-semibold">{title}</h3>}
			{children}
		</div>
	),
};
