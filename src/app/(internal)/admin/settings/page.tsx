"use client";

import { Bell, CreditCard, Globe, Store, Truck } from "lucide-react";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function SettingsPage() {
	return (
		<div className="space-y-6">
			{/* Header */}
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Settings</h1>
				<p className="text-muted-foreground mt-1">
					Manage your store settings and preferences
				</p>
			</div>

			{/* Settings Grid */}
			<div className="grid gap-6">
				{/* Store Information */}
				<Card className="p-6">
					<div className="flex items-center gap-3 mb-6">
						<div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
							<Store className="h-5 w-5 text-blue-600 dark:text-blue-300" />
						</div>
						<div>
							<h2 className="text-xl font-bold">Store Information</h2>
							<p className="text-sm text-muted-foreground">
								Basic details about your store
							</p>
						</div>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="store-name">Store Name</Label>
							<Input
								id="store-name"
								placeholder="BoostCart"
								defaultValue="BoostCart"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="store-email">Store Email</Label>
							<Input
								id="store-email"
								type="email"
								placeholder="store@boostcart.com"
								defaultValue="store@boostcart.com"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="store-phone">Store Phone</Label>
							<Input
								id="store-phone"
								type="tel"
								placeholder="+359 88 123 4567"
								defaultValue="+359 88 123 4567"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="store-url">Store URL</Label>
							<Input
								id="store-url"
								placeholder="https://boostcart.com"
								defaultValue="https://boostcart.com"
							/>
						</div>
						<div className="space-y-2 md:col-span-2">
							<Label htmlFor="store-description">Store Description</Label>
							<Input
								id="store-description"
								placeholder="Your one-stop shop for electronics and gadgets"
								defaultValue="Your one-stop shop for electronics and gadgets"
							/>
						</div>
					</div>
					<div className="flex justify-end mt-6">
						<PolarisButton type="button">Save Changes</PolarisButton>
					</div>
				</Card>

				{/* Localization */}
				<Card className="p-6">
					<div className="flex items-center gap-3 mb-6">
						<div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
							<Globe className="h-5 w-5 text-purple-600 dark:text-purple-300" />
						</div>
						<div>
							<h2 className="text-xl font-bold">Localization</h2>
							<p className="text-sm text-muted-foreground">
								Configure languages and currencies
							</p>
						</div>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="default-locale">Default Language</Label>
							<Select defaultValue="en-US">
								<SelectTrigger id="default-locale">
									<SelectValue placeholder="Select language" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="en-US">English (US)</SelectItem>
									<SelectItem value="bg-BG">Български</SelectItem>
									<SelectItem value="de-DE">Deutsch</SelectItem>
									<SelectItem value="fr-FR">Français</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="space-y-2">
							<Label htmlFor="default-currency">Default Currency</Label>
							<Select defaultValue="USD">
								<SelectTrigger id="default-currency">
									<SelectValue placeholder="Select currency" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="USD">USD - US Dollar</SelectItem>
									<SelectItem value="EUR">EUR - Euro</SelectItem>
									<SelectItem value="BGN">BGN - Bulgarian Lev</SelectItem>
									<SelectItem value="GBP">GBP - British Pound</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="space-y-2">
							<Label htmlFor="timezone">Timezone</Label>
							<Select defaultValue="UTC">
								<SelectTrigger id="timezone">
									<SelectValue placeholder="Select timezone" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="UTC">UTC</SelectItem>
									<SelectItem value="Europe/Sofia">Europe/Sofia</SelectItem>
									<SelectItem value="America/New_York">
										America/New York
									</SelectItem>
									<SelectItem value="Europe/London">Europe/London</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="space-y-2">
							<Label htmlFor="date-format">Date Format</Label>
							<Select defaultValue="MM/DD/YYYY">
								<SelectTrigger id="date-format">
									<SelectValue placeholder="Select format" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
									<SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
									<SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="flex justify-end mt-6">
						<PolarisButton type="button">Save Changes</PolarisButton>
					</div>
				</Card>

				{/* Payment & Shipping */}
				<div className="grid gap-6 md:grid-cols-2">
					<Card className="p-6">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
								<CreditCard className="h-5 w-5 text-green-600 dark:text-green-300" />
							</div>
							<div>
								<h2 className="text-lg font-bold">Payment Methods</h2>
								<p className="text-xs text-muted-foreground">
									Manage payment options
								</p>
							</div>
						</div>
						<div className="space-y-3">
							{[
								{ name: `Credit Card`, enabled: true },
								{ name: `Cash on Delivery`, enabled: true },
								{ name: `Bank Transfer`, enabled: false },
								{ name: `Apple Pay`, enabled: true },
								{ name: `Google Pay`, enabled: true },
							].map((method) => (
								<div
									key={method.name}
									className="flex items-center justify-between p-3 border rounded-lg"
								>
									<span className="text-sm font-medium">{method.name}</span>
									<span
										className={`px-2 py-1 text-xs font-medium rounded-full ${
											method.enabled
												? `bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`
												: `bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`
										}`}
									>
										{method.enabled ? `Enabled` : `Disabled`}
									</span>
								</div>
							))}
						</div>
						<Button type="button" variant="outline" className="w-full mt-4">
							Configure Payment Methods
						</Button>
					</Card>

					<Card className="p-6">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
								<Truck className="h-5 w-5 text-orange-600 dark:text-orange-300" />
							</div>
							<div>
								<h2 className="text-lg font-bold">Shipping Methods</h2>
								<p className="text-xs text-muted-foreground">
									Manage shipping options
								</p>
							</div>
						</div>
						<div className="space-y-3">
							{[
								{ name: `Delivery to Address`, enabled: true },
								{ name: `Delivery Box`, enabled: true },
								{ name: `Delivery Office`, enabled: true },
								{ name: `In-Store Pickup`, enabled: false },
							].map((method) => (
								<div
									key={method.name}
									className="flex items-center justify-between p-3 border rounded-lg"
								>
									<span className="text-sm font-medium">{method.name}</span>
									<span
										className={`px-2 py-1 text-xs font-medium rounded-full ${
											method.enabled
												? `bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`
												: `bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`
										}`}
									>
										{method.enabled ? `Enabled` : `Disabled`}
									</span>
								</div>
							))}
						</div>
						<Button type="button" variant="outline" className="w-full mt-4">
							Configure Shipping Methods
						</Button>
					</Card>
				</div>

				{/* Notifications */}
				<Card className="p-6">
					<div className="flex items-center gap-3 mb-6">
						<div className="h-10 w-10 rounded-lg bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
							<Bell className="h-5 w-5 text-yellow-600 dark:text-yellow-300" />
						</div>
						<div>
							<h2 className="text-xl font-bold">Notifications</h2>
							<p className="text-sm text-muted-foreground">
								Configure notification preferences
							</p>
						</div>
					</div>
					<div className="space-y-4">
						{[
							{ name: `New orders`, description: `Get notified of new orders` },
							{
								name: `Low stock alerts`,
								description: `Alert when products are low in stock`,
							},
							{
								name: `New customer registrations`,
								description: `Get notified of new customer sign-ups`,
							},
							{
								name: `Product reviews`,
								description: `Get notified when customers leave reviews`,
							},
						].map((notification) => (
							<div
								key={notification.name}
								className="flex items-start justify-between p-4 border rounded-lg"
							>
								<div className="space-y-1">
									<p className="font-medium text-sm">{notification.name}</p>
									<p className="text-xs text-muted-foreground">
										{notification.description}
									</p>
								</div>
								<Button type="button" variant="outline" size="sm">
									Configure
								</Button>
							</div>
						))}
					</div>
				</Card>
			</div>
		</div>
	);
}
