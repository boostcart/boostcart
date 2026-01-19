"use client";

import { Calendar, CreditCard, Gift, History, User } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";

interface GiftCard {
	id: string;
	code: string;
	initialBalance: number;
	currentBalance: number;
	currency: string;
	recipientEmail: string;
	recipientName: string;
	senderName: string;
	message: string;
	issueDate: string;
	expiryDate: string | null;
	status: string;
	isRedeemed: boolean;
	orderId?: string;
}

interface ViewGiftCardDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	giftCard: GiftCard | null;
}

export function ViewGiftCardDialog({
	open,
	onOpenChange,
	giftCard,
}: ViewGiftCardDialogProps) {
	if (!giftCard) return null;

	const usagePercentage =
		((giftCard.initialBalance - giftCard.currentBalance) /
			giftCard.initialBalance) *
		100;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Gift Card Details</DialogTitle>
					<DialogDescription>
						View gift card balance and usage
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="overview" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="recipient">Recipient</TabsTrigger>
						<TabsTrigger value="history">History</TabsTrigger>
					</TabsList>

					<TabsContent value="overview" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="p-8 border-2 border-primary rounded-lg text-center bg-linear-to-br from-primary/10 to-primary/5">
								<div className="flex items-center justify-center gap-2 mb-2">
									<Gift className="h-6 w-6 text-primary" />
									<p className="text-sm text-muted-foreground">
										Gift Card Code
									</p>
								</div>
								<p className="text-3xl font-bold font-mono tracking-wider mb-4">
									{giftCard.code}
								</p>
								<Badge
									variant={
										giftCard.status === `Active` ? `default` : `secondary`
									}
									className="text-base px-4 py-1"
								>
									{giftCard.status}
								</Badge>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground">
										Current Balance
									</p>
									<p className="text-3xl font-bold mt-2">
										{giftCard.currency}
										{giftCard.currentBalance.toFixed(2)}
									</p>
								</div>
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground">
										Initial Balance
									</p>
									<p className="text-3xl font-bold mt-2 text-muted-foreground">
										{giftCard.currency}
										{giftCard.initialBalance.toFixed(2)}
									</p>
								</div>
							</div>

							<div>
								<p className="text-sm text-muted-foreground mb-2">
									Balance Used
								</p>
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm">
											{giftCard.currency}
											{(
												giftCard.initialBalance - giftCard.currentBalance
											).toFixed(2)}
											{` `}
											used
										</span>
										<span className="text-sm font-medium">
											{usagePercentage.toFixed(0)}%
										</span>
									</div>
									<div className="w-full bg-secondary rounded-full h-2">
										<div
											className="bg-primary h-2 rounded-full transition-all"
											style={{ width: `${usagePercentage}%` }}
										/>
									</div>
								</div>
							</div>

							<Separator />

							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-sm text-muted-foreground">Issue Date</p>
									<div className="flex items-center gap-2 mt-1">
										<Calendar className="h-4 w-4 text-muted-foreground" />
										<p className="font-medium">{giftCard.issueDate}</p>
									</div>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">Expiry Date</p>
									<div className="flex items-center gap-2 mt-1">
										<Calendar className="h-4 w-4 text-muted-foreground" />
										<p className="font-medium">
											{giftCard.expiryDate || `No expiry`}
										</p>
									</div>
								</div>
							</div>

							{giftCard.orderId && (
								<div className="p-4 bg-muted rounded-lg">
									<p className="text-sm text-muted-foreground">
										Purchased via Order
									</p>
									<p className="font-mono font-medium mt-1">
										#{giftCard.orderId}
									</p>
								</div>
							)}

							<div className="flex items-center justify-between p-4 bg-muted rounded-lg">
								<div>
									<p className="font-medium">Redeemed</p>
									<p className="text-sm text-muted-foreground">
										Has been used at least once
									</p>
								</div>
								<Badge variant={giftCard.isRedeemed ? `default` : `outline`}>
									{giftCard.isRedeemed ? `Yes` : `No`}
								</Badge>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="recipient" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="p-4 border rounded-lg">
								<div className="flex items-center gap-2 mb-3">
									<User className="h-5 w-5 text-primary" />
									<p className="font-medium">Recipient Information</p>
								</div>
								<div className="space-y-3">
									<div>
										<p className="text-sm text-muted-foreground">Name</p>
										<p className="font-medium">{giftCard.recipientName}</p>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">Email</p>
										<p className="font-medium">{giftCard.recipientEmail}</p>
									</div>
								</div>
							</div>

							<div className="p-4 border rounded-lg">
								<div className="flex items-center gap-2 mb-3">
									<Gift className="h-5 w-5 text-primary" />
									<p className="font-medium">Sender Information</p>
								</div>
								<div>
									<p className="text-sm text-muted-foreground">From</p>
									<p className="font-medium">{giftCard.senderName}</p>
								</div>
							</div>

							{giftCard.message && (
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground mb-2">
										Gift Message
									</p>
									<p className="text-base italic">"{giftCard.message}"</p>
								</div>
							)}

							<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
								<p className="text-sm text-blue-800 dark:text-blue-200">
									💡 Gift card was sent to {giftCard.recipientEmail} on{` `}
									{giftCard.issueDate}
								</p>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="history" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<History className="h-5 w-5 text-primary" />
								<p className="font-medium">Transaction History</p>
							</div>

							<div className="space-y-2">
								<div className="p-4 border rounded-lg">
									<div className="flex justify-between items-start mb-2">
										<div>
											<p className="font-medium">Order #12345</p>
											<p className="text-sm text-muted-foreground">
												Dec 15, 2024, 10:30 AM
											</p>
										</div>
										<p className="font-bold text-red-600">-$50.00</p>
									</div>
									<p className="text-sm text-muted-foreground">
										Applied to order total
									</p>
								</div>

								<div className="p-4 border rounded-lg">
									<div className="flex justify-between items-start mb-2">
										<div>
											<p className="font-medium">Order #12123</p>
											<p className="text-sm text-muted-foreground">
												Dec 10, 2024, 3:45 PM
											</p>
										</div>
										<p className="font-bold text-red-600">-$25.00</p>
									</div>
									<p className="text-sm text-muted-foreground">
										Applied to order total
									</p>
								</div>

								<div className="p-4 border rounded-lg">
									<div className="flex justify-between items-start mb-2">
										<div>
											<p className="font-medium">Gift Card Issued</p>
											<p className="text-sm text-muted-foreground">
												{giftCard.issueDate}
											</p>
										</div>
										<p className="font-bold text-green-600">
											+{giftCard.currency}
											{giftCard.initialBalance.toFixed(2)}
										</p>
									</div>
									<p className="text-sm text-muted-foreground">
										Initial balance loaded
									</p>
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

interface GiftCardFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	mode: "create" | "edit" | "adjust";
	giftCard?: GiftCard | null;
	onSuccess?: () => void | Promise<void>;
}

export function GiftCardFormDialog({
	open,
	onOpenChange,
	mode,
	giftCard,
	onSuccess: _onSuccess,
}: GiftCardFormDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === `create` && `Create Gift Card`}
						{mode === `edit` && `Edit Gift Card`}
						{mode === `adjust` && `Adjust Balance`}
					</DialogTitle>
					<DialogDescription>
						{mode === `create` && `Issue a new gift card`}
						{mode === `edit` && `Update gift card details`}
						{mode === `adjust` && `Modify gift card balance`}
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					{mode === `adjust` ? (
						<>
							<div className="p-4 bg-muted rounded-lg space-y-2">
								<p className="text-sm text-muted-foreground">Current Balance</p>
								<p className="text-3xl font-bold">
									{giftCard?.currency}
									{giftCard?.currentBalance.toFixed(2)}
								</p>
								<p className="text-sm text-muted-foreground">
									Code: {giftCard?.code}
								</p>
							</div>

							<div className="space-y-2">
								<Label htmlFor="adjustmentType">Adjustment Type *</Label>
								<select
									id="adjustmentType"
									className="w-full rounded-md border border-input bg-background px-3 py-2"
								>
									<option value="ADD">Add Balance</option>
									<option value="SUBTRACT">Subtract Balance</option>
									<option value="SET">Set New Balance</option>
								</select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="adjustmentAmount">Amount *</Label>
								<Input
									id="adjustmentAmount"
									type="number"
									placeholder="0.00"
									step="0.01"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="adjustmentReason">Reason *</Label>
								<Textarea
									id="adjustmentReason"
									placeholder="Explain why this adjustment is being made..."
									rows={3}
									required
								/>
							</div>
						</>
					) : (
						<>
							<div className="space-y-2">
								<Label htmlFor="code">Gift Card Code *</Label>
								<div className="flex gap-2">
									<Input
										id="code"
										placeholder="GIFT-XXXX-XXXX"
										defaultValue={giftCard?.code}
										className="font-mono uppercase"
										required
									/>
									<Button type="button" variant="outline">
										Generate
									</Button>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="initialBalance">Initial Balance *</Label>
									<Input
										id="initialBalance"
										type="number"
										placeholder="0.00"
										defaultValue={giftCard?.initialBalance}
										step="0.01"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="currency">Currency</Label>
									<select
										id="currency"
										className="w-full rounded-md border border-input bg-background px-3 py-2"
										defaultValue={giftCard?.currency || `$`}
									>
										<option value="$">USD ($)</option>
										<option value="€">EUR (€)</option>
										<option value="£">GBP (£)</option>
									</select>
								</div>
							</div>

							<Separator />

							<div className="space-y-2">
								<Label htmlFor="recipientName">Recipient Name *</Label>
								<Input
									id="recipientName"
									placeholder="John Doe"
									defaultValue={giftCard?.recipientName}
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="recipientEmail">Recipient Email *</Label>
								<Input
									id="recipientEmail"
									type="email"
									placeholder="recipient@example.com"
									defaultValue={giftCard?.recipientEmail}
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="senderName">Sender Name</Label>
								<Input
									id="senderName"
									placeholder="Jane Smith"
									defaultValue={giftCard?.senderName}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="message">Gift Message</Label>
								<Textarea
									id="message"
									placeholder="Happy Birthday! Enjoy your gift..."
									defaultValue={giftCard?.message}
									rows={3}
								/>
							</div>

							<Separator />

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="issueDate">Issue Date</Label>
									<Input
										id="issueDate"
										type="date"
										defaultValue={giftCard?.issueDate}
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="expiryDate">Expiry Date</Label>
									<Input
										id="expiryDate"
										type="date"
										defaultValue={giftCard?.expiryDate || ``}
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div>
									<Label htmlFor="sendEmail">Send Email Notification</Label>
									<p className="text-xs text-muted-foreground">
										Email gift card details to recipient
									</p>
								</div>
								<Switch id="sendEmail" defaultChecked={true} />
							</div>
						</>
					)}
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
						{mode === `create` && `Create Gift Card`}
						{mode === `edit` && `Save Changes`}
						{mode === `adjust` && `Apply Adjustment`}
					</PolarisButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteGiftCardDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	giftCard: GiftCard | null;
	onConfirm?: () => void | Promise<void>;
}

export function DeleteGiftCardDialog({
	open,
	onOpenChange,
	giftCard,
	onConfirm,
}: DeleteGiftCardDialogProps) {
	if (!giftCard) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Gift Card</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this gift card? This action cannot
						be undone.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="p-4 bg-muted rounded-lg space-y-2">
						<div className="flex items-center gap-2">
							<CreditCard className="h-4 w-4 text-muted-foreground" />
							<p className="font-mono font-bold">{giftCard.code}</p>
						</div>
						<div className="grid grid-cols-2 gap-2 text-sm pt-2">
							<div>
								<span className="text-muted-foreground">Balance:</span>
								<span className="ml-2 font-medium">
									{giftCard.currency}
									{giftCard.currentBalance.toFixed(2)}
								</span>
							</div>
							<div>
								<span className="text-muted-foreground">Recipient:</span>
								<span className="ml-2 font-medium">
									{giftCard.recipientName}
								</span>
							</div>
						</div>
					</div>

					{giftCard.currentBalance > 0 && (
						<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
							<p className="text-sm text-yellow-800 dark:text-yellow-200">
								⚠️ This gift card still has a balance of {giftCard.currency}
								{giftCard.currentBalance.toFixed(2)}. Deleting it will make this
								balance unusable.
							</p>
						</div>
					)}

					<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
						<p className="text-sm text-red-800 dark:text-red-200">
							🚨 The recipient will not be able to use this gift card after
							deletion.
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
							onConfirm?.();
						}}
					>
						Delete Gift Card
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
