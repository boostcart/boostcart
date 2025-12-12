"use client";

import { CheckCircle, CreditCard, Lock, TrendingUp } from "lucide-react";
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

interface PaymentGateway {
	id: string;
	name: string;
	provider: string;
	description: string;
	isActive: boolean;
	isTestMode: boolean;
	supportedCurrencies: string[];
	supportedMethods: string[];
	fees: {
		percentage: number;
		fixed: number;
	};
	totalTransactions: number;
	totalRevenue: number;
}

interface ViewPaymentDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	payment: PaymentGateway | null;
}

export function ViewPaymentDialog({
	open,
	onOpenChange,
	payment,
}: ViewPaymentDialogProps) {
	if (!payment) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Payment Gateway Details</DialogTitle>
					<DialogDescription>
						View gateway configuration and statistics
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="overview" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="methods">Payment Methods</TabsTrigger>
						<TabsTrigger value="analytics">Analytics</TabsTrigger>
					</TabsList>

					<TabsContent value="overview" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="flex items-start gap-4">
								<div className="w-16 h-16 border-2 rounded-lg flex items-center justify-center bg-primary/10">
									<CreditCard className="h-8 w-8 text-primary" />
								</div>
								<div className="flex-1 space-y-2">
									<div>
										<h3 className="text-2xl font-bold">{payment.name}</h3>
										<p className="text-sm text-muted-foreground">
											{payment.provider}
										</p>
									</div>
									<div className="flex gap-2">
										<Badge variant={payment.isActive ? `default` : `secondary`}>
											{payment.isActive ? `Active` : `Inactive`}
										</Badge>
										{payment.isTestMode && (
											<Badge variant="outline">Test Mode</Badge>
										)}
									</div>
								</div>
							</div>

							<Separator />

							<div>
								<p className="text-sm text-muted-foreground mb-1">
									Description
								</p>
								<p className="text-base">{payment.description}</p>
							</div>

							<Separator />

							<div className="p-4 border rounded-lg space-y-3">
								<div className="flex items-center gap-2">
									<Lock className="h-4 w-4 text-primary" />
									<p className="font-medium">Transaction Fees</p>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<p className="text-sm text-muted-foreground">Percentage</p>
										<p className="text-2xl font-bold">
											{payment.fees.percentage}%
										</p>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">Fixed Fee</p>
										<p className="text-2xl font-bold">
											${payment.fees.fixed.toFixed(2)}
										</p>
									</div>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground">
										Total Transactions
									</p>
									<p className="text-3xl font-bold mt-2">
										{payment.totalTransactions}
									</p>
								</div>
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground">Total Revenue</p>
									<p className="text-3xl font-bold mt-2">
										${payment.totalRevenue.toLocaleString()}
									</p>
								</div>
							</div>

							<div>
								<p className="text-sm text-muted-foreground mb-2">
									Supported Currencies
								</p>
								<div className="flex flex-wrap gap-2">
									{payment.supportedCurrencies.map((currency) => (
										<Badge key={currency} variant="outline">
											{currency}
										</Badge>
									))}
								</div>
							</div>

							{payment.isTestMode && (
								<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
									<p className="text-sm text-yellow-800 dark:text-yellow-200">
										⚠️ This gateway is in test mode. Real transactions will not
										be processed.
									</p>
								</div>
							)}
						</div>
					</TabsContent>

					<TabsContent value="methods" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div>
								<p className="font-medium mb-3">
									Supported Payment Methods ({payment.supportedMethods.length})
								</p>
								<div className="space-y-2">
									{payment.supportedMethods.map((method) => (
										<div
											key={method}
											className="p-4 border rounded-lg flex items-center justify-between"
										>
											<div className="flex items-center gap-3">
												<CreditCard className="h-5 w-5 text-primary" />
												<div>
													<p className="font-medium">{method}</p>
													<p className="text-xs text-muted-foreground">
														{method === `Credit Card` &&
															`Visa, Mastercard, Amex, Discover`}
														{method === `Debit Card` &&
															`Visa Debit, Mastercard Debit`}
														{method === `Digital Wallet` &&
															`Apple Pay, Google Pay`}
														{method === `Bank Transfer` && `ACH, Wire Transfer`}
													</p>
												</div>
											</div>
											<CheckCircle className="h-5 w-5 text-green-600" />
										</div>
									))}
								</div>
							</div>

							<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
								<p className="text-sm text-blue-800 dark:text-blue-200">
									💡 Customers can select from any of these payment methods
									during checkout.
								</p>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="analytics" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<TrendingUp className="h-5 w-5 text-primary" />
								<p className="font-medium">Performance Metrics</p>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground">Success Rate</p>
									<p className="text-3xl font-bold mt-2">98.7%</p>
								</div>
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground">
										Avg. Transaction
									</p>
									<p className="text-3xl font-bold mt-2">$156.80</p>
								</div>
							</div>

							<div className="p-4 border rounded-lg space-y-3">
								<p className="font-medium">Recent Activity</p>
								<div className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span className="text-muted-foreground">Today</span>
										<span className="font-medium">45 transactions</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">This Week</span>
										<span className="font-medium">312 transactions</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">This Month</span>
										<span className="font-medium">1,234 transactions</span>
									</div>
								</div>
							</div>

							<div className="p-4 border rounded-lg space-y-3">
								<p className="font-medium">Fee Breakdown</p>
								<div className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span className="text-muted-foreground">
											Processing Fees Paid
										</span>
										<span className="font-medium">$1,234.56</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Net Revenue</span>
										<span className="font-medium text-green-600">
											${(payment.totalRevenue - 1234.56).toLocaleString()}
										</span>
									</div>
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

interface PaymentFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	mode: "create" | "edit";
	payment?: PaymentGateway | null;
}

export function PaymentFormDialog({
	open,
	onOpenChange,
	mode,
	payment,
}: PaymentFormDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === `create` ? `Add Payment Gateway` : `Edit Payment Gateway`}
					</DialogTitle>
					<DialogDescription>
						{mode === `create`
							? `Configure a new payment gateway`
							: `Update gateway settings and credentials`}
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="general" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="general">General</TabsTrigger>
						<TabsTrigger value="credentials">Credentials</TabsTrigger>
						<TabsTrigger value="settings">Settings</TabsTrigger>
					</TabsList>

					<TabsContent value="general" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="name">Gateway Name *</Label>
								<Input
									id="name"
									placeholder="Stripe Payments"
									defaultValue={payment?.name}
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="provider">Provider *</Label>
								<select
									id="provider"
									className="w-full rounded-md border border-input bg-background px-3 py-2"
									defaultValue={payment?.provider || `STRIPE`}
								>
									<option value="STRIPE">Stripe</option>
									<option value="PAYPAL">PayPal</option>
									<option value="SQUARE">Square</option>
									<option value="AUTHORIZE_NET">Authorize.net</option>
									<option value="BRAINTREE">Braintree</option>
									<option value="CUSTOM">Custom Gateway</option>
								</select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="description">Description</Label>
								<Textarea
									id="description"
									placeholder="Describe this payment gateway..."
									defaultValue={payment?.description}
									rows={3}
								/>
							</div>

							<Separator />

							<div className="space-y-3">
								<Label>Supported Payment Methods</Label>
								{[
									{ id: `credit`, label: `Credit Card` },
									{ id: `debit`, label: `Debit Card` },
									{ id: `wallet`, label: `Digital Wallet` },
									{ id: `bank`, label: `Bank Transfer` },
								].map((method) => (
									<div
										key={method.id}
										className="flex items-center justify-between p-3 border rounded-lg"
									>
										<Label htmlFor={method.id} className="cursor-pointer">
											{method.label}
										</Label>
										<Switch id={method.id} />
									</div>
								))}
							</div>
						</div>
					</TabsContent>

					<TabsContent value="credentials" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
								<div className="flex items-center gap-2 mb-2">
									<Lock className="h-4 w-4 text-blue-600" />
									<p className="text-sm font-medium text-blue-800 dark:text-blue-200">
										Secure Credentials
									</p>
								</div>
								<p className="text-xs text-blue-700 dark:text-blue-300">
									All credentials are encrypted and stored securely. Never share
									your API keys publicly.
								</p>
							</div>

							<div className="space-y-2">
								<Label htmlFor="apiKey">API Key / Public Key *</Label>
								<Input
									id="apiKey"
									type="password"
									placeholder="pk_live_••••••••••••••••"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="secretKey">Secret Key *</Label>
								<Input
									id="secretKey"
									type="password"
									placeholder="sk_live_••••••••••••••••"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="webhookSecret">Webhook Secret</Label>
								<Input
									id="webhookSecret"
									type="password"
									placeholder="whsec_••••••••••••••••"
								/>
								<p className="text-xs text-muted-foreground">
									Used to verify webhook signatures
								</p>
							</div>

							<Separator />

							<div className="flex items-center justify-between">
								<div>
									<Label htmlFor="testMode">Test Mode</Label>
									<p className="text-xs text-muted-foreground">
										Use test credentials and process test transactions
									</p>
								</div>
								<Switch
									id="testMode"
									defaultChecked={payment?.isTestMode || false}
								/>
							</div>

							<Button type="button" variant="outline" size="sm">
								Test Connection
							</Button>
						</div>
					</TabsContent>

					<TabsContent value="settings" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="space-y-3">
								<Label>Supported Currencies</Label>
								<p className="text-xs text-muted-foreground">
									Select currencies this gateway can process
								</p>
								<div className="grid grid-cols-3 gap-2">
									{[`USD`, `EUR`, `GBP`, `CAD`, `AUD`, `JPY`].map(
										(currency) => (
											<div
												key={currency}
												className="flex items-center space-x-2 p-2 border rounded"
											>
												<input
													type="checkbox"
													id={`currency-${currency}`}
													className="rounded"
													defaultChecked={payment?.supportedCurrencies.includes(
														currency,
													)}
												/>
												<Label
													htmlFor={`currency-${currency}`}
													className="cursor-pointer text-sm"
												>
													{currency}
												</Label>
											</div>
										),
									)}
								</div>
							</div>

							<Separator />

							<div>
								<Label>Transaction Fees</Label>
								<p className="text-xs text-muted-foreground mb-3">
									Configure processing fees for this gateway
								</p>
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="feePercentage">Percentage (%)</Label>
										<Input
											id="feePercentage"
											type="number"
											placeholder="2.9"
											defaultValue={payment?.fees.percentage}
											step="0.1"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="feeFixed">Fixed Amount ($)</Label>
										<Input
											id="feeFixed"
											type="number"
											placeholder="0.30"
											defaultValue={payment?.fees.fixed}
											step="0.01"
										/>
									</div>
								</div>
							</div>

							<Separator />

							<div className="flex items-center justify-between">
								<div>
									<Label htmlFor="isActive">Active</Label>
									<p className="text-xs text-muted-foreground">
										Enable this gateway for customer payments
									</p>
								</div>
								<Switch
									id="isActive"
									defaultChecked={payment?.isActive ?? true}
								/>
							</div>
						</div>
					</TabsContent>
				</Tabs>

				<DialogFooter className="mt-4">
					<Button
						type="button"
						variant="outline"
						onClick={() => onOpenChange(false)}
					>
						Cancel
					</Button>
					<PolarisButton type="submit">
						{mode === `create` ? `Add Gateway` : `Save Changes`}
					</PolarisButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface DeletePaymentDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	payment: PaymentGateway | null;
}

export function DeletePaymentDialog({
	open,
	onOpenChange,
	payment,
}: DeletePaymentDialogProps) {
	if (!payment) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Payment Gateway</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this payment gateway? This action
						cannot be undone.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="p-4 bg-muted rounded-lg space-y-2">
						<div className="flex items-center gap-2">
							<CreditCard className="h-4 w-4 text-muted-foreground" />
							<p className="font-bold text-lg">{payment.name}</p>
						</div>
						<p className="text-sm text-muted-foreground">{payment.provider}</p>
						<div className="grid grid-cols-2 gap-2 text-sm pt-2">
							<div>
								<span className="text-muted-foreground">Transactions:</span>
								<span className="ml-2 font-medium">
									{payment.totalTransactions}
								</span>
							</div>
							<div>
								<span className="text-muted-foreground">Revenue:</span>
								<span className="ml-2 font-medium">
									${payment.totalRevenue.toLocaleString()}
								</span>
							</div>
						</div>
					</div>

					{payment.isActive && (
						<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
							<p className="text-sm text-yellow-800 dark:text-yellow-200">
								⚠️ This payment gateway is currently active. Customers will no
								longer be able to use it for checkout.
							</p>
						</div>
					)}

					<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
						<p className="text-sm text-red-800 dark:text-red-200">
							🚨 All stored credentials will be permanently deleted. Historical
							transaction data will be preserved.
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
							console.log(`Deleting payment gateway:`, payment);
							onOpenChange(false);
						}}
					>
						Delete Gateway
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
