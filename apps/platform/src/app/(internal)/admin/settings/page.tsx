"use client";

import {
	ArrowRight,
	Bell,
	Coins,
	CreditCard,
	Globe,
	Link2,
	Loader2,
	Palette,
	Store,
	Truck,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { toast } from "sonner";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Loader } from "@/components/loader";
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
import {
	getEnabledPaymentMethods,
	getEnabledShippingMethods,
	getTenantSettings,
	togglePaymentMethod,
	toggleShippingMethod,
	updateLocalization,
	updateStoreInfo,
} from "@/server/api/internal/settings";

type TenantSettings = Awaited<ReturnType<typeof getTenantSettings>>;
type PaymentMethod = Awaited<
	ReturnType<typeof getEnabledPaymentMethods>
>[number];
type ShippingMethod = Awaited<
	ReturnType<typeof getEnabledShippingMethods>
>[number];

export default function SettingsPage() {
	const [isLoading, setIsLoading] = React.useState(true);
	const [isSaving, setIsSaving] = React.useState(false);
	const [settings, setSettings] = React.useState<TenantSettings | null>(null);
	const [paymentMethods, setPaymentMethods] = React.useState<PaymentMethod[]>(
		[],
	);
	const [shippingMethods, setShippingMethods] = React.useState<
		ShippingMethod[]
	>([]);

	// Form state
	const [storeName, setStoreName] = React.useState("");
	const [storeEmail, setStoreEmail] = React.useState("");
	const [storePhone, setStorePhone] = React.useState("");
	const [storeDescription, setStoreDescription] = React.useState("");
	const [locale, setLocale] = React.useState("bg");
	const [timezone, setTimezone] = React.useState("Europe/Sofia");

	const fetchSettings = React.useCallback(async () => {
		try {
			const [settingsData, paymentData, shippingData] = await Promise.all([
				getTenantSettings(),
				getEnabledPaymentMethods(),
				getEnabledShippingMethods(),
			]);

			setSettings(settingsData);
			setPaymentMethods(paymentData);
			setShippingMethods(shippingData);

			// Set form values
			setStoreName(settingsData.name);
			setStoreEmail(settingsData.email);
			setStorePhone(settingsData.phone ?? "");
			setStoreDescription(settingsData.description ?? "");
			setLocale(settingsData.locale);
			setTimezone(settingsData.timezone);
		} catch (error) {
			console.error("Failed to fetch settings:", error);
			toast.error("Failed to load settings");
		} finally {
			setIsLoading(false);
		}
	}, []);

	React.useEffect(() => {
		fetchSettings();
	}, [fetchSettings]);

	const handleSaveStoreInfo = async () => {
		setIsSaving(true);
		try {
			await updateStoreInfo({
				name: storeName,
				email: storeEmail,
				phone: storePhone || undefined,
				description: storeDescription || undefined,
			});
			toast.success("Store information updated");
		} catch (error) {
			console.error("Failed to update store info:", error);
			toast.error("Failed to update store information");
		} finally {
			setIsSaving(false);
		}
	};

	const handleSaveLocalization = async () => {
		setIsSaving(true);
		try {
			await updateLocalization({
				currency: "EUR", // Currency is now managed via currencies page
				locale,
				timezone,
			});
			toast.success("Localization settings updated");
		} catch (error) {
			console.error("Failed to update localization:", error);
			toast.error("Failed to update localization settings");
		} finally {
			setIsSaving(false);
		}
	};

	const handleTogglePaymentMethod = async (methodId: string) => {
		try {
			await togglePaymentMethod(methodId);
			await fetchSettings();
			toast.success("Payment method updated");
		} catch (error) {
			console.error("Failed to toggle payment method:", error);
			toast.error("Failed to update payment method");
		}
	};

	const handleToggleShippingMethod = async (methodId: string) => {
		try {
			await toggleShippingMethod(methodId);
			await fetchSettings();
			toast.success("Shipping method updated");
		} catch (error) {
			console.error("Failed to toggle shipping method:", error);
			toast.error("Failed to update shipping method");
		}
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-100">
				<Loader size="lg" />
			</div>
		);
	}

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
								placeholder="My Store"
								value={storeName}
								onChange={(e) => setStoreName(e.target.value)}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="store-email">Store Email</Label>
							<Input
								id="store-email"
								type="email"
								placeholder="store@example.com"
								value={storeEmail}
								onChange={(e) => setStoreEmail(e.target.value)}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="store-phone">Store Phone</Label>
							<Input
								id="store-phone"
								type="tel"
								placeholder="+359 88 123 4567"
								value={storePhone}
								onChange={(e) => setStorePhone(e.target.value)}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="store-url">Store URL</Label>
							<Input
								id="store-url"
								placeholder="https://store.boostcart.bg"
								value={`https://${settings?.slug}.boostcart.bg`}
								disabled
							/>
						</div>
						<div className="space-y-2 md:col-span-2">
							<Label htmlFor="store-description">Store Description</Label>
							<Input
								id="store-description"
								placeholder="Your store description"
								value={storeDescription}
								onChange={(e) => setStoreDescription(e.target.value)}
							/>
						</div>
					</div>
					<div className="flex justify-end mt-6">
						<PolarisButton
							type="button"
							onClick={handleSaveStoreInfo}
							disabled={isSaving}
						>
							{isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
							Save Changes
						</PolarisButton>
					</div>
				</Card>

				{/* Custom Domains */}
				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="h-10 w-10 rounded-lg bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
								<Link2 className="h-5 w-5 text-cyan-600 dark:text-cyan-300" />
							</div>
							<div>
								<h2 className="text-xl font-bold">Custom Domains</h2>
								<p className="text-sm text-muted-foreground">
									Connect your own domain to your store for a professional look
								</p>
							</div>
						</div>
						<Link
							href="/admin/settings/domains"
							className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
						>
							Manage Domains
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</Card>

				{/* Theme Settings */}
				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="h-10 w-10 rounded-lg bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
								<Palette className="h-5 w-5 text-pink-600 dark:text-pink-300" />
							</div>
							<div>
								<h2 className="text-xl font-bold">Theme & Appearance</h2>
								<p className="text-sm text-muted-foreground">
									Customize colors, fonts, layout, and branding for your storefront
								</p>
							</div>
						</div>
						<Link
							href="/admin/settings/theme"
							className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
						>
							Customize Theme
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</Card>

				{/* Currencies */}
				<Card className="p-6">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="h-10 w-10 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
								<Coins className="h-5 w-5 text-amber-600 dark:text-amber-300" />
							</div>
							<div>
								<h2 className="text-xl font-bold">Currencies</h2>
								<p className="text-sm text-muted-foreground">
									Enable multiple currencies with automatic exchange rate
									updates
								</p>
							</div>
						</div>
						<Link
							href="/admin/settings/currencies"
							className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
						>
							Manage Currencies
							<ArrowRight className="h-4 w-4" />
						</Link>
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
								Configure language and regional settings
							</p>
						</div>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="default-locale">Default Language</Label>
							<Select value={locale} onValueChange={setLocale}>
								<SelectTrigger id="default-locale">
									<SelectValue placeholder="Select language" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="bg">Български</SelectItem>
									<SelectItem value="en">English</SelectItem>
									<SelectItem value="de">Deutsch</SelectItem>
									<SelectItem value="fr">Français</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="space-y-2">
							<Label htmlFor="timezone">Timezone</Label>
							<Select value={timezone} onValueChange={setTimezone}>
								<SelectTrigger id="timezone">
									<SelectValue placeholder="Select timezone" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="Europe/Sofia">Europe/Sofia</SelectItem>
									<SelectItem value="Europe/London">Europe/London</SelectItem>
									<SelectItem value="America/New_York">
										America/New York
									</SelectItem>
									<SelectItem value="UTC">UTC</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="space-y-2">
							<Label htmlFor="date-format">Date Format</Label>
							<Select defaultValue="DD/MM/YYYY">
								<SelectTrigger id="date-format">
									<SelectValue placeholder="Select format" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
									<SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
									<SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="flex justify-end mt-6">
						<PolarisButton
							type="button"
							onClick={handleSaveLocalization}
							disabled={isSaving}
						>
							{isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
							Save Changes
						</PolarisButton>
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
							{paymentMethods.length === 0 ? (
								<p className="text-sm text-muted-foreground text-center py-4">
									No payment methods configured
								</p>
							) : (
								paymentMethods.map((method) => (
									<div
										key={method.id}
										className="flex items-center justify-between p-3 border rounded-lg"
									>
										<span className="text-sm font-medium">{method.name}</span>
										<button
											type="button"
											onClick={() => handleTogglePaymentMethod(method.id)}
											className={`px-2 py-1 text-xs font-medium rounded-full cursor-pointer transition-colors ${
												method.isActive
													? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:bg-green-200"
													: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200"
											}`}
										>
											{method.isActive ? "Enabled" : "Disabled"}
										</button>
									</div>
								))
							)}
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
							{shippingMethods.length === 0 ? (
								<p className="text-sm text-muted-foreground text-center py-4">
									No shipping methods configured
								</p>
							) : (
								shippingMethods.map((method) => (
									<div
										key={method.id}
										className="flex items-center justify-between p-3 border rounded-lg"
									>
										<span className="text-sm font-medium">{method.name}</span>
										<button
											type="button"
											onClick={() => handleToggleShippingMethod(method.id)}
											className={`px-2 py-1 text-xs font-medium rounded-full cursor-pointer transition-colors ${
												method.isActive
													? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:bg-green-200"
													: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200"
											}`}
										>
											{method.isActive ? "Enabled" : "Disabled"}
										</button>
									</div>
								))
							)}
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
							{ name: "New orders", description: "Get notified of new orders" },
							{
								name: "Low stock alerts",
								description: "Alert when products are low in stock",
							},
							{
								name: "New customer registrations",
								description: "Get notified of new customer sign-ups",
							},
							{
								name: "Product reviews",
								description: "Get notified when customers leave reviews",
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

				{/* Billing Status */}
				{settings && (
					<Card className="p-6">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
								<CreditCard className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
							</div>
							<div>
								<h2 className="text-xl font-bold">Billing Status</h2>
								<p className="text-sm text-muted-foreground">
									Your current plan and billing information
								</p>
							</div>
						</div>
						<div className="grid gap-4 md:grid-cols-3">
							<div className="p-4 border rounded-lg">
								<p className="text-sm text-muted-foreground">Status</p>
								<p className="text-lg font-semibold mt-1 capitalize">
									{settings.billingStatus.toLowerCase().replace("_", " ")}
								</p>
							</div>
							<div className="p-4 border rounded-lg">
								<p className="text-sm text-muted-foreground">Billing Cycle</p>
								<p className="text-lg font-semibold mt-1 capitalize">
									{settings.billingCycle.toLowerCase()}
								</p>
							</div>
							{settings.trialEndsAt && (
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground">Trial Ends</p>
									<p className="text-lg font-semibold mt-1">
										{new Date(settings.trialEndsAt).toLocaleDateString()}
									</p>
								</div>
							)}
							{settings.currentPeriodEnd && (
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground">Next Billing</p>
									<p className="text-lg font-semibold mt-1">
										{new Date(settings.currentPeriodEnd).toLocaleDateString()}
									</p>
								</div>
							)}
						</div>
						<div className="flex justify-end mt-6">
							<Button type="button" variant="outline">
								Manage Subscription
							</Button>
						</div>
					</Card>
				)}
			</div>
		</div>
	);
}
