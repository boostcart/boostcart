"use client";

import { Clock, DollarSign, MapPin, Truck } from "lucide-react";
import { useState } from "react";
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

interface ShippingZone {
	id: string;
	name: string;
	countries: string[];
	isActive: boolean;
}

interface ShippingRate {
	id: string;
	name: string;
	description: string;
	price: number;
	estimatedDays: string;
	freeShippingThreshold: number | null;
	conditions: string;
}

interface ShippingMethod {
	id: string;
	name: string;
	description: string;
	zones: ShippingZone[];
	rates: ShippingRate[];
	isActive: boolean;
	carrier: string;
	totalOrders: number;
}

interface ViewShippingDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	shipping: ShippingMethod | null;
}

export function ViewShippingDialog({
	open,
	onOpenChange,
	shipping,
}: ViewShippingDialogProps) {
	if (!shipping) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Shipping Method Details</DialogTitle>
					<DialogDescription>
						View shipping zones, rates, and conditions
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="overview" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="zones">Zones</TabsTrigger>
						<TabsTrigger value="rates">Rates</TabsTrigger>
					</TabsList>

					<TabsContent value="overview" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="flex items-start gap-4">
								<div className="w-16 h-16 border-2 rounded-lg flex items-center justify-center bg-primary/10">
									<Truck className="h-8 w-8 text-primary" />
								</div>
								<div className="flex-1 space-y-2">
									<div>
										<h3 className="text-2xl font-bold">{shipping.name}</h3>
										<p className="text-sm text-muted-foreground">
											{shipping.carrier}
										</p>
									</div>
									<Badge variant={shipping.isActive ? `default` : `secondary`}>
										{shipping.isActive ? `Active` : `Inactive`}
									</Badge>
								</div>
							</div>

							<Separator />

							<div>
								<p className="text-sm text-muted-foreground mb-1">
									Description
								</p>
								<p className="text-base">{shipping.description}</p>
							</div>

							<Separator />

							<div className="grid grid-cols-3 gap-4">
								<div className="p-4 border rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<MapPin className="h-4 w-4 text-primary" />
										<p className="text-sm text-muted-foreground">Zones</p>
									</div>
									<p className="text-3xl font-bold">{shipping.zones.length}</p>
								</div>
								<div className="p-4 border rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<DollarSign className="h-4 w-4 text-primary" />
										<p className="text-sm text-muted-foreground">Rates</p>
									</div>
									<p className="text-3xl font-bold">{shipping.rates.length}</p>
								</div>
								<div className="p-4 border rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<Truck className="h-4 w-4 text-primary" />
										<p className="text-sm text-muted-foreground">Orders</p>
									</div>
									<p className="text-3xl font-bold">{shipping.totalOrders}</p>
								</div>
							</div>

							<div className="p-4 bg-muted rounded-lg space-y-2">
								<p className="font-medium">Performance</p>
								<div className="grid grid-cols-2 gap-4 text-sm">
									<div className="flex justify-between">
										<span className="text-muted-foreground">
											Avg. Delivery:
										</span>
										<span className="font-medium">3-5 days</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Success Rate:</span>
										<span className="font-medium">98.5%</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">
											Customer Rating:
										</span>
										<span className="font-medium">4.7/5.0</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">
											Total Revenue:
										</span>
										<span className="font-medium">$12,345</span>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="zones" className="space-y-4 mt-4">
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<p className="font-medium">
									Shipping Zones ({shipping.zones.length})
								</p>
								<Button size="sm" variant="outline">
									Add Zone
								</Button>
							</div>

							<div className="space-y-2">
								{shipping.zones.map((zone) => (
									<div key={zone.id} className="p-4 border rounded-lg">
										<div className="flex items-start justify-between">
											<div className="flex-1">
												<div className="flex items-center gap-2 mb-2">
													<MapPin className="h-4 w-4 text-primary" />
													<p className="font-medium">{zone.name}</p>
													<Badge
														variant={zone.isActive ? `default` : `outline`}
													>
														{zone.isActive ? `Active` : `Inactive`}
													</Badge>
												</div>
												<div className="flex flex-wrap gap-1">
													{zone.countries.map((country) => (
														<Badge
															key={country}
															variant="secondary"
															className="text-xs"
														>
															{country}
														</Badge>
													))}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</TabsContent>

					<TabsContent value="rates" className="space-y-4 mt-4">
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<p className="font-medium">
									Shipping Rates ({shipping.rates.length})
								</p>
								<Button size="sm" variant="outline">
									Add Rate
								</Button>
							</div>

							<div className="space-y-2">
								{shipping.rates.map((rate) => (
									<div key={rate.id} className="p-4 border rounded-lg">
										<div className="flex items-start justify-between mb-2">
											<div className="flex-1">
												<p className="font-medium">{rate.name}</p>
												<p className="text-sm text-muted-foreground">
													{rate.description}
												</p>
											</div>
											<p className="text-xl font-bold">
												${rate.price.toFixed(2)}
											</p>
										</div>
										<div className="flex items-center gap-4 text-sm mt-3">
											<div className="flex items-center gap-1">
												<Clock className="h-4 w-4 text-muted-foreground" />
												<span className="text-muted-foreground">
													{rate.estimatedDays}
												</span>
											</div>
											{rate.freeShippingThreshold && (
												<Badge variant="outline">
													Free over ${rate.freeShippingThreshold}
												</Badge>
											)}
										</div>
										{rate.conditions && (
											<p className="text-xs text-muted-foreground mt-2">
												Conditions: {rate.conditions}
											</p>
										)}
									</div>
								))}
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

interface ShippingFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	mode: "create" | "edit";
	shipping?: ShippingMethod | null;
}

export function ShippingFormDialog({
	open,
	onOpenChange,
	mode,
	shipping,
}: ShippingFormDialogProps) {
	const [selectedZones, setSelectedZones] = useState<string[]>([]);
	const [rates, setRates] = useState<ShippingRate[]>(shipping?.rates || []);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === `create`
							? `Create Shipping Method`
							: `Edit Shipping Method`}
					</DialogTitle>
					<DialogDescription>
						{mode === `create`
							? `Add a new shipping method with zones and rates`
							: `Update shipping method configuration`}
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="general" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="general">General</TabsTrigger>
						<TabsTrigger value="zones">Zones</TabsTrigger>
						<TabsTrigger value="rates">Rates</TabsTrigger>
					</TabsList>

					<TabsContent value="general" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="name">Method Name *</Label>
								<Input
									id="name"
									placeholder="Standard Shipping"
									defaultValue={shipping?.name}
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="carrier">Carrier</Label>
								<select
									id="carrier"
									className="w-full rounded-md border border-input bg-background px-3 py-2"
									defaultValue={shipping?.carrier || `CUSTOM`}
								>
									<option value="CUSTOM">Custom</option>
									<option value="USPS">USPS</option>
									<option value="UPS">UPS</option>
									<option value="FEDEX">FedEx</option>
									<option value="DHL">DHL</option>
								</select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="description">Description</Label>
								<Textarea
									id="description"
									placeholder="Describe this shipping method..."
									defaultValue={shipping?.description}
									rows={3}
								/>
							</div>

							<Separator />

							<div className="flex items-center justify-between">
								<div>
									<Label htmlFor="isActive">Active</Label>
									<p className="text-xs text-muted-foreground">
										Enable this shipping method for checkout
									</p>
								</div>
								<Switch
									id="isActive"
									defaultChecked={shipping?.isActive ?? true}
								/>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="zones" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div>
								<Label>Shipping Zones *</Label>
								<p className="text-xs text-muted-foreground mb-3">
									Select which zones this method applies to
								</p>
								<div className="space-y-2">
									{[
										{
											id: `1`,
											name: `Domestic (US)`,
											countries: [`United States`],
										},
										{
											id: `2`,
											name: `North America`,
											countries: [`Canada`, `Mexico`],
										},
										{
											id: `3`,
											name: `Europe`,
											countries: [`UK`, `Germany`, `France`],
										},
										{
											id: `4`,
											name: `Asia Pacific`,
											countries: [`Australia`, `Japan`],
										},
									].map((zone) => (
										<div
											key={zone.id}
											className="flex items-center justify-between p-3 border rounded-lg"
										>
											<div>
												<p className="font-medium">{zone.name}</p>
												<p className="text-xs text-muted-foreground">
													{zone.countries.join(`, `)}
												</p>
											</div>
											<Switch
												checked={selectedZones.includes(zone.id)}
												onCheckedChange={(checked) => {
													if (checked) {
														setSelectedZones([...selectedZones, zone.id]);
													} else {
														setSelectedZones(
															selectedZones.filter((z) => z !== zone.id),
														);
													}
												}}
											/>
										</div>
									))}
								</div>
							</div>

							<Button type="button" variant="outline" size="sm">
								Create New Zone
							</Button>
						</div>
					</TabsContent>

					<TabsContent value="rates" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div>
								<Label>Shipping Rates</Label>
								<p className="text-xs text-muted-foreground mb-3">
									Define pricing for this shipping method
								</p>
							</div>

							{rates.map((rate, index) => (
								<div key={rate.id} className="p-4 border rounded-lg space-y-3">
									<div className="flex items-center justify-between">
										<p className="font-medium">Rate {index + 1}</p>
										<Button
											type="button"
											variant="ghost"
											size="sm"
											onClick={() =>
												setRates(rates.filter((r) => r.id !== rate.id))
											}
										>
											Remove
										</Button>
									</div>
									<div className="grid grid-cols-2 gap-3">
										<Input placeholder="Rate name" defaultValue={rate.name} />
										<Input
											type="number"
											placeholder="Price"
											defaultValue={rate.price}
											step="0.01"
										/>
									</div>
									<Input
										placeholder="Estimated delivery (e.g., 3-5 business days)"
										defaultValue={rate.estimatedDays}
									/>
									<Input
										type="number"
										placeholder="Free shipping threshold (optional)"
										defaultValue={rate.freeShippingThreshold || ``}
										step="0.01"
									/>
								</div>
							))}

							<Button
								type="button"
								variant="outline"
								size="sm"
								onClick={() =>
									setRates([
										...rates,
										{
											id: Date.now().toString(),
											name: ``,
											description: ``,
											price: 0,
											estimatedDays: ``,
											freeShippingThreshold: null,
											conditions: ``,
										},
									])
								}
							>
								Add Rate
							</Button>
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
						{mode === `create` ? `Create Method` : `Save Changes`}
					</PolarisButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteShippingDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	shipping: ShippingMethod | null;
}

export function DeleteShippingDialog({
	open,
	onOpenChange,
	shipping,
}: DeleteShippingDialogProps) {
	if (!shipping) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Shipping Method</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this shipping method? This action
						cannot be undone.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="p-4 bg-muted rounded-lg space-y-2">
						<div className="flex items-center gap-2">
							<Truck className="h-4 w-4 text-muted-foreground" />
							<p className="font-bold text-lg">{shipping.name}</p>
						</div>
						<p className="text-sm text-muted-foreground">{shipping.carrier}</p>
						<div className="grid grid-cols-2 gap-2 text-sm pt-2">
							<div>
								<span className="text-muted-foreground">Zones:</span>
								<span className="ml-2 font-medium">
									{shipping.zones.length}
								</span>
							</div>
							<div>
								<span className="text-muted-foreground">Orders:</span>
								<span className="ml-2 font-medium">{shipping.totalOrders}</span>
							</div>
						</div>
					</div>

					{shipping.isActive && (
						<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
							<p className="text-sm text-yellow-800 dark:text-yellow-200">
								⚠️ This shipping method is currently active. Customers will no
								longer be able to select it at checkout.
							</p>
						</div>
					)}

					{shipping.totalOrders > 0 && (
						<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
							<p className="text-sm text-red-800 dark:text-red-200">
								🚨 This method has been used for {shipping.totalOrders} orders.
								Historical data will be preserved.
							</p>
						</div>
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
					<Button
						type="button"
						variant="destructive"
						onClick={() => {
							console.log(`Deleting shipping method:`, shipping);
							onOpenChange(false);
						}}
					>
						Delete Method
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
