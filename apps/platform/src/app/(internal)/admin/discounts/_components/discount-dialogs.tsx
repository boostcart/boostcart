"use client";

import { Calendar } from "lucide-react";
import { PolarisButton } from "@/components/admin/polaris-button";
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

interface Discount {
	id: string;
	name: string;
	code: string;
	type: string;
	value: string;
	scope: string;
	uses: number;
	startDate: string;
	endDate: string | null;
	status: string;
	description?: string;
	limit?: number;
	minimumPurchase?: number;
	combinable?: boolean;
}

interface ViewDiscountDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	discount: Discount | null;
}

export function ViewDiscountDialog({
	open,
	onOpenChange,
	discount,
}: ViewDiscountDialogProps) {
	if (!discount) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl">
				<DialogHeader>
					<DialogTitle className="flex items-center justify-between">
						<span>{discount.name}</span>
						<Badge>{discount.status}</Badge>
					</DialogTitle>
					<DialogDescription>Discount campaign details</DialogDescription>
				</DialogHeader>

				<div className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<p className="text-sm font-medium text-muted-foreground">
								Discount Code
							</p>
							<p className="text-lg font-mono font-bold">{discount.code}</p>
						</div>
						<div className="space-y-2">
							<p className="text-sm font-medium text-muted-foreground">Type</p>
							<Badge variant="outline">{discount.type}</Badge>
						</div>
						<div className="space-y-2">
							<p className="text-sm font-medium text-muted-foreground">Value</p>
							<p className="text-lg font-bold">{discount.value}</p>
						</div>
						<div className="space-y-2">
							<p className="text-sm font-medium text-muted-foreground">Scope</p>
							<Badge variant="outline">{discount.scope}</Badge>
						</div>
					</div>

					<Separator />

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
								<Calendar className="h-4 w-4" />
								Start Date
							</div>
							<p className="text-sm">{discount.startDate}</p>
						</div>
						<div className="space-y-2">
							<div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
								<Calendar className="h-4 w-4" />
								End Date
							</div>
							<p className="text-sm">{discount.endDate}</p>
						</div>
					</div>

					<Separator />

					<div className="space-y-2">
						<p className="text-sm font-medium text-muted-foreground">
							Usage Statistics
						</p>
						<div className="grid grid-cols-3 gap-4">
							<div className="p-4 border rounded-lg bg-muted/30">
								<p className="text-sm text-muted-foreground mb-1">Used</p>
								<p className="text-2xl font-bold">{discount.uses}</p>
							</div>
							<div className="p-4 border rounded-lg bg-muted/30">
								<p className="text-sm text-muted-foreground mb-1">Limit</p>
								<p className="text-2xl font-bold">100</p>
							</div>
							<div className="p-4 border rounded-lg bg-muted/30">
								<p className="text-sm text-muted-foreground mb-1">Remaining</p>
								<p className="text-2xl font-bold">{100 - discount.uses}</p>
							</div>
						</div>
					</div>

					<div className="space-y-2">
						<p className="text-sm font-medium text-muted-foreground">
							Description
						</p>
						<p className="text-sm text-muted-foreground">
							Special discount for Black Friday campaign. Valid on all
							electronics category products.
						</p>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Close
					</Button>
					<Button type="button">Duplicate</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface DiscountFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	discount?: Discount | null;
	mode: "create" | "edit";
	onSuccess?: () => void | Promise<void>;
}

export function DiscountFormDialog({
	open,
	onOpenChange,
	discount,
	mode,
	onSuccess,
}: DiscountFormDialogProps) {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onOpenChange(false);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === "create" ? "Create New Discount" : "Edit Discount"}
					</DialogTitle>
					<DialogDescription>
						{mode === "create"
							? "Set up a new discount campaign"
							: "Update discount settings"}
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="discountName">Campaign Name *</Label>
						<Input
							id="discountName"
							defaultValue={discount?.name}
							placeholder="Black Friday Sale"
							required
						/>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="discountCode">Discount Code *</Label>
							<Input
								id="discountCode"
								defaultValue={discount?.code}
								placeholder="BLACKFRIDAY2025"
								className="font-mono uppercase"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="discountType">Type *</Label>
							<Select defaultValue={discount?.type || "PERCENTAGE"}>
								<SelectTrigger id="discountType">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="PERCENTAGE">Percentage</SelectItem>
									<SelectItem value="FIXED_AMOUNT">Fixed Amount</SelectItem>
									<SelectItem value="FREE_SHIPPING">Free Shipping</SelectItem>
									<SelectItem value="BUY_X_GET_Y">Buy X Get Y</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="discountValue">Value *</Label>
							<Input
								id="discountValue"
								type="number"
								step="0.01"
								min="0"
								defaultValue={discount?.value.replace(`%`, ``).replace(`$`, ``)}
								placeholder="20"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="discountScope">Scope *</Label>
							<Select defaultValue={discount?.scope || "ALL_PRODUCTS"}>
								<SelectTrigger id="discountScope">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="ALL_PRODUCTS">All Products</SelectItem>
									<SelectItem value="CATEGORY">Specific Category</SelectItem>
									<SelectItem value="PRODUCT">Specific Product</SelectItem>
									<SelectItem value="BRAND">Specific Brand</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					<Separator />

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="startDate">Start Date *</Label>
							<Input
								id="startDate"
								type="datetime-local"
								defaultValue={discount?.startDate}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="endDate">End Date *</Label>
							<Input
								id="endDate"
								type="datetime-local"
								defaultValue={discount?.endDate || ``}
								required
							/>
						</div>
					</div>

					<Separator />

					<div className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="usageLimit">Usage Limit</Label>
								<Input
									id="usageLimit"
									type="number"
									min="0"
									placeholder="100"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="minPurchase">Minimum Purchase ($)</Label>
								<Input
									id="minPurchase"
									type="number"
									step="0.01"
									min="0"
									placeholder="50.00"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="description">Description</Label>
							<Textarea
								id="description"
								placeholder="Internal notes about this discount..."
								rows={3}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="active">Active Status</Label>
								<p className="text-sm text-muted-foreground">
									Enable this discount immediately
								</p>
							</div>
							<Switch
								id="active"
								defaultChecked={discount?.status === "Active"}
							/>
						</div>

						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="combinable">Combinable</Label>
								<p className="text-sm text-muted-foreground">
									Can be combined with other discounts
								</p>
							</div>
							<Switch id="combinable" />
						</div>
					</div>

					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
						>
							Cancel
						</Button>
						<PolarisButton type="submit">
							{mode === "create" ? "Create Discount" : "Save Changes"}
						</PolarisButton>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteDiscountDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	discount: Discount | null;
	onConfirm?: () => void | Promise<void>;
}

export function DeleteDiscountDialog({
	open,
	onOpenChange,
	discount,
	onConfirm,
}: DeleteDiscountDialogProps) {
	const handleDelete = () => {
		onConfirm?.();
	};

	if (!discount) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Discount</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this discount? This action cannot be
						undone.
					</DialogDescription>
				</DialogHeader>

				<div className="p-4 border rounded-lg bg-muted/30 space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Campaign:</span>
						<span className="font-medium">{discount.name}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Code:</span>
						<span className="font-medium font-mono">{discount.code}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Value:</span>
						<span className="font-medium">{discount.value}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Times Used:</span>
						<span className="font-medium">{discount.uses}</span>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Cancel
					</Button>
					<Button variant="destructive" onClick={handleDelete}>
						Delete Discount
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
