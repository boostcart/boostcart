"use client";

import { Calendar, Tag, TrendingUp } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PromoCode {
	id: string;
	code: string;
	type: string;
	value: string;
	description: string;
	usageCount: number;
	usageLimit: number | null;
	minPurchase: number;
	startDate: string;
	endDate: string | null;
	status: string;
	onePerCustomer: boolean;
}

interface ViewPromoCodeDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	promoCode: PromoCode | null;
}

export function ViewPromoCodeDialog({
	open,
	onOpenChange,
	promoCode,
}: ViewPromoCodeDialogProps) {
	if (!promoCode) return null;

	const usagePercentage = promoCode.usageLimit
		? (promoCode.usageCount / promoCode.usageLimit) * 100
		: 0;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Promo Code Details</DialogTitle>
					<DialogDescription>
						View promo code usage and settings
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="details" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="details">Details</TabsTrigger>
						<TabsTrigger value="analytics">Analytics</TabsTrigger>
					</TabsList>

					<TabsContent value="details" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="p-6 border-2 border-primary rounded-lg text-center bg-primary/5">
								<p className="text-sm text-muted-foreground mb-2">Promo Code</p>
								<p className="text-3xl font-bold font-mono tracking-wider">
									{promoCode.code}
								</p>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-sm text-muted-foreground">Discount Type</p>
									<Badge variant="outline" className="mt-1">
										{promoCode.type}
									</Badge>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">
										Discount Value
									</p>
									<p className="text-xl font-bold mt-1">{promoCode.value}</p>
								</div>
							</div>

							<div>
								<p className="text-sm text-muted-foreground">Description</p>
								<p className="text-base mt-1">{promoCode.description}</p>
							</div>

							<Separator />

							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-sm text-muted-foreground">Status</p>
									<Badge
										variant={
											promoCode.status === `Active` ? `default` : `secondary`
										}
										className="mt-1"
									>
										{promoCode.status}
									</Badge>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Min. Purchase</p>
									<p className="font-medium mt-1">
										${promoCode.minPurchase.toFixed(2)}
									</p>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-sm text-muted-foreground">Start Date</p>
									<div className="flex items-center gap-2 mt-1">
										<Calendar className="h-4 w-4 text-muted-foreground" />
										<p className="font-medium">{promoCode.startDate}</p>
									</div>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">End Date</p>
									<div className="flex items-center gap-2 mt-1">
										<Calendar className="h-4 w-4 text-muted-foreground" />
										<p className="font-medium">
											{promoCode.endDate || `No expiry`}
										</p>
									</div>
								</div>
							</div>

							<Separator />

							<div>
								<p className="text-sm text-muted-foreground mb-2">
									Usage Limit
								</p>
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm">
											{promoCode.usageCount} /{` `}
											{promoCode.usageLimit || `Unlimited`} uses
										</span>
										<span className="text-sm font-medium">
											{promoCode.usageLimit
												? `${usagePercentage.toFixed(0)}%`
												: `∞`}
										</span>
									</div>
									{promoCode.usageLimit && (
										<div className="w-full bg-secondary rounded-full h-2">
											<div
												className="bg-primary h-2 rounded-full transition-all"
												style={{ width: `${usagePercentage}%` }}
											/>
										</div>
									)}
								</div>
							</div>

							<div className="flex items-center justify-between p-4 bg-muted rounded-lg">
								<div>
									<p className="font-medium">One Per Customer</p>
									<p className="text-sm text-muted-foreground">
										Limit to one use per customer
									</p>
								</div>
								<Badge
									variant={promoCode.onePerCustomer ? `default` : `outline`}
								>
									{promoCode.onePerCustomer ? `Yes` : `No`}
								</Badge>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="analytics" className="space-y-4 mt-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="p-4 border rounded-lg">
								<p className="text-sm text-muted-foreground">Total Uses</p>
								<p className="text-3xl font-bold mt-2">
									{promoCode.usageCount}
								</p>
							</div>
							<div className="p-4 border rounded-lg">
								<p className="text-sm text-muted-foreground">Remaining</p>
								<p className="text-3xl font-bold mt-2">
									{promoCode.usageLimit
										? promoCode.usageLimit - promoCode.usageCount
										: `∞`}
								</p>
							</div>
						</div>

						<div className="p-4 border rounded-lg">
							<div className="flex items-center gap-2 mb-3">
								<TrendingUp className="h-5 w-5 text-primary" />
								<p className="font-medium">Performance</p>
							</div>
							<div className="space-y-3">
								<div className="flex justify-between items-center">
									<span className="text-sm text-muted-foreground">
										Total Discounts Given
									</span>
									<span className="font-bold">$1,234.00</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm text-muted-foreground">
										Average Order Value
									</span>
									<span className="font-bold">$156.80</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-sm text-muted-foreground">
										Conversion Rate
									</span>
									<span className="font-bold">23.5%</span>
								</div>
							</div>
						</div>

						<div className="p-4 border rounded-lg">
							<p className="font-medium mb-3">Recent Uses</p>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-muted-foreground">Order #12345</span>
									<span>$99.00</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">Order #12344</span>
									<span>$149.00</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">Order #12343</span>
									<span>$79.00</span>
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>

				<DialogFooter>
					<Button
						type="button"
						variant="outline"
						onClick={() => onOpenChange(false)}
					>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface PromoCodeFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	mode: "create" | "edit";
	promoCode?: PromoCode | null;
}

export function PromoCodeFormDialog({
	open,
	onOpenChange,
	mode,
	promoCode,
}: PromoCodeFormDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === `create` ? `Create Promo Code` : `Edit Promo Code`}
					</DialogTitle>
					<DialogDescription>
						{mode === `create`
							? `Generate a new promotional code`
							: `Update promo code settings`}
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="space-y-2">
						<Label htmlFor="code">Promo Code *</Label>
						<div className="flex gap-2">
							<Input
								id="code"
								placeholder="SUMMER2025"
								defaultValue={promoCode?.code}
								className="font-mono uppercase"
								required
							/>
							<Button type="button" variant="outline">
								Generate
							</Button>
						</div>
						<p className="text-xs text-muted-foreground">
							Unique code customers will enter at checkout
						</p>
					</div>

					<div className="space-y-2">
						<Label htmlFor="description">Description</Label>
						<Input
							id="description"
							placeholder="Summer sale discount"
							defaultValue={promoCode?.description}
						/>
					</div>

					<Separator />

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="type">Discount Type *</Label>
							<select
								id="type"
								className="w-full rounded-md border border-input bg-background px-3 py-2"
								defaultValue={promoCode?.type || `PERCENTAGE`}
							>
								<option value="PERCENTAGE">Percentage</option>
								<option value="FIXED_AMOUNT">Fixed Amount</option>
								<option value="FREE_SHIPPING">Free Shipping</option>
							</select>
						</div>

						<div className="space-y-2">
							<Label htmlFor="value">Discount Value *</Label>
							<Input
								id="value"
								type="number"
								placeholder="10"
								defaultValue={promoCode?.value}
								required
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="minPurchase">Minimum Purchase Amount</Label>
						<Input
							id="minPurchase"
							type="number"
							placeholder="0.00"
							defaultValue={promoCode?.minPurchase}
							step="0.01"
						/>
					</div>

					<Separator />

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="startDate">Start Date *</Label>
							<Input
								id="startDate"
								type="datetime-local"
								defaultValue={promoCode?.startDate}
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="endDate">End Date</Label>
							<Input
								id="endDate"
								type="datetime-local"
								defaultValue={promoCode?.endDate || ``}
							/>
							<p className="text-xs text-muted-foreground">
								Leave empty for no expiry
							</p>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="usageLimit">Usage Limit</Label>
						<Input
							id="usageLimit"
							type="number"
							placeholder="Unlimited"
							defaultValue={promoCode?.usageLimit || ``}
						/>
						<p className="text-xs text-muted-foreground">
							Maximum number of times this code can be used
						</p>
					</div>

					<Separator />

					<div className="flex items-center justify-between">
						<div>
							<Label htmlFor="onePerCustomer">One Per Customer</Label>
							<p className="text-xs text-muted-foreground">
								Limit each customer to one use
							</p>
						</div>
						<Switch
							id="onePerCustomer"
							defaultChecked={promoCode?.onePerCustomer || false}
						/>
					</div>

					<div className="flex items-center justify-between">
						<div>
							<Label htmlFor="active">Active</Label>
							<p className="text-xs text-muted-foreground">
								Enable or disable this promo code
							</p>
						</div>
						<Switch
							id="active"
							defaultChecked={promoCode?.status === `Active`}
						/>
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
						{mode === `create` ? `Create Promo Code` : `Save Changes`}
					</PolarisButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface DeletePromoCodeDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	promoCode: PromoCode | null;
}

export function DeletePromoCodeDialog({
	open,
	onOpenChange,
	promoCode,
}: DeletePromoCodeDialogProps) {
	if (!promoCode) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Promo Code</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this promo code? This action cannot
						be undone.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="p-4 bg-muted rounded-lg space-y-2">
						<div className="flex items-center gap-2">
							<Tag className="h-4 w-4 text-muted-foreground" />
							<p className="font-mono font-bold text-lg">{promoCode.code}</p>
						</div>
						<p className="text-sm text-muted-foreground">
							{promoCode.description}
						</p>
						<div className="grid grid-cols-2 gap-2 text-sm pt-2">
							<div>
								<span className="text-muted-foreground">Uses:</span>
								<span className="ml-2 font-medium">
									{promoCode.usageCount} /{` `}
									{promoCode.usageLimit || `∞`}
								</span>
							</div>
							<div>
								<span className="text-muted-foreground">Value:</span>
								<span className="ml-2 font-medium">{promoCode.value}</span>
							</div>
						</div>
					</div>

					<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
						<p className="text-sm text-yellow-800 dark:text-yellow-200">
							⚠️ This promo code will be deactivated immediately and cannot be
							used for future orders.
						</p>
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
					<Button
						type="button"
						variant="destructive"
						onClick={() => {
							// TODO: Implement delete logic
							console.log(`Deleting promo code:`, promoCode);
							onOpenChange(false);
						}}
					>
						Delete Promo Code
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
