"use client";

import { DollarSign, Globe, Languages, MapPin } from "lucide-react";
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

interface Locale {
	id: string;
	name: string;
	code: string;
	language: string;
	languageCode: string;
	country: string;
	countryCode: string;
	currency: string;
	currencySymbol: string;
	isDefault: boolean;
	isActive: boolean;
	dateFormat: string;
	timeFormat: string;
	numberFormat: string;
	translations: number;
}

interface ViewLocaleDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	locale: Locale | null;
}

export function ViewLocaleDialog({
	open,
	onOpenChange,
	locale,
}: ViewLocaleDialogProps) {
	if (!locale) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Locale Details</DialogTitle>
					<DialogDescription>
						View locale configuration and formats
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="overview" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="formats">Formats</TabsTrigger>
						<TabsTrigger value="translations">Translations</TabsTrigger>
					</TabsList>

					<TabsContent value="overview" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="flex items-start gap-4">
								<div className="w-16 h-16 border-2 rounded-lg flex items-center justify-center bg-primary/10">
									<Globe className="h-8 w-8 text-primary" />
								</div>
								<div className="flex-1 space-y-2">
									<div>
										<h3 className="text-2xl font-bold">{locale.name}</h3>
										<p className="text-sm text-muted-foreground">
											{locale.code}
										</p>
									</div>
									<div className="flex gap-2">
										<Badge variant={locale.isActive ? `default` : `secondary`}>
											{locale.isActive ? `Active` : `Inactive`}
										</Badge>
										{locale.isDefault && (
											<Badge variant="outline">Default</Badge>
										)}
									</div>
								</div>
							</div>

							<Separator />

							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 border rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<Languages className="h-4 w-4 text-primary" />
										<p className="text-sm text-muted-foreground">Language</p>
									</div>
									<p className="font-medium">{locale.language}</p>
									<p className="text-xs text-muted-foreground mt-1">
										Code: {locale.languageCode}
									</p>
								</div>

								<div className="p-4 border rounded-lg">
									<div className="flex items-center gap-2 mb-2">
										<MapPin className="h-4 w-4 text-primary" />
										<p className="text-sm text-muted-foreground">Country</p>
									</div>
									<p className="font-medium">{locale.country}</p>
									<p className="text-xs text-muted-foreground mt-1">
										Code: {locale.countryCode}
									</p>
								</div>
							</div>

							<div className="p-4 border rounded-lg">
								<div className="flex items-center gap-2 mb-2">
									<DollarSign className="h-4 w-4 text-primary" />
									<p className="text-sm text-muted-foreground">Currency</p>
								</div>
								<div className="flex items-center gap-2">
									<p className="text-2xl font-bold">{locale.currencySymbol}</p>
									<p className="font-medium">{locale.currency}</p>
								</div>
							</div>

							<Separator />

							<div className="p-4 bg-muted rounded-lg space-y-2">
								<p className="font-medium">Quick Preview</p>
								<div className="grid grid-cols-2 gap-2 text-sm">
									<div>
										<span className="text-muted-foreground">Date:</span>
										<span className="ml-2 font-medium">Dec 15, 2024</span>
									</div>
									<div>
										<span className="text-muted-foreground">Time:</span>
										<span className="ml-2 font-medium">2:30 PM</span>
									</div>
									<div>
										<span className="text-muted-foreground">Number:</span>
										<span className="ml-2 font-medium">1,234.56</span>
									</div>
									<div>
										<span className="text-muted-foreground">Currency:</span>
										<span className="ml-2 font-medium">
											{locale.currencySymbol}1,234.56
										</span>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="formats" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div>
								<Label>Date Format</Label>
								<div className="p-3 bg-muted rounded-md mt-1 font-mono">
									{locale.dateFormat}
								</div>
								<p className="text-xs text-muted-foreground mt-1">
									Example: December 15, 2024
								</p>
							</div>

							<div>
								<Label>Time Format</Label>
								<div className="p-3 bg-muted rounded-md mt-1 font-mono">
									{locale.timeFormat}
								</div>
								<p className="text-xs text-muted-foreground mt-1">
									Example: 2:30 PM
								</p>
							</div>

							<div>
								<Label>Number Format</Label>
								<div className="p-3 bg-muted rounded-md mt-1 font-mono">
									{locale.numberFormat}
								</div>
								<p className="text-xs text-muted-foreground mt-1">
									Example: 1,234.56
								</p>
							</div>

							<Separator />

							<div className="p-4 border rounded-lg space-y-3">
								<p className="font-medium">Format Examples</p>
								<div className="space-y-2 text-sm">
									<div className="flex justify-between p-2 bg-muted rounded">
										<span className="text-muted-foreground">Long Date</span>
										<span className="font-mono">Monday, December 15, 2024</span>
									</div>
									<div className="flex justify-between p-2 bg-muted rounded">
										<span className="text-muted-foreground">Short Date</span>
										<span className="font-mono">12/15/24</span>
									</div>
									<div className="flex justify-between p-2 bg-muted rounded">
										<span className="text-muted-foreground">Currency</span>
										<span className="font-mono">
											{locale.currencySymbol}1,234.56
										</span>
									</div>
									<div className="flex justify-between p-2 bg-muted rounded">
										<span className="text-muted-foreground">Percentage</span>
										<span className="font-mono">75.5%</span>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="translations" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="p-4 border rounded-lg">
								<p className="text-sm text-muted-foreground">
									Total Translations
								</p>
								<p className="text-4xl font-bold mt-2">{locale.translations}</p>
								<p className="text-xs text-muted-foreground mt-2">
									strings translated
								</p>
							</div>

							<Separator />

							<div>
								<div className="flex items-center justify-between mb-3">
									<p className="font-medium">Common Translations</p>
									<Button size="sm" variant="outline">
										Manage All
									</Button>
								</div>

								<div className="space-y-2">
									<div className="p-3 border rounded-lg">
										<div className="flex justify-between items-start">
											<div className="flex-1">
												<p className="text-sm text-muted-foreground">
													Key: common.add_to_cart
												</p>
												<p className="font-medium mt-1">Add to Cart</p>
											</div>
											<Badge variant="outline">UI</Badge>
										</div>
									</div>

									<div className="p-3 border rounded-lg">
										<div className="flex justify-between items-start">
											<div className="flex-1">
												<p className="text-sm text-muted-foreground">
													Key: common.checkout
												</p>
												<p className="font-medium mt-1">Checkout</p>
											</div>
											<Badge variant="outline">UI</Badge>
										</div>
									</div>

									<div className="p-3 border rounded-lg">
										<div className="flex justify-between items-start">
											<div className="flex-1">
												<p className="text-sm text-muted-foreground">
													Key: common.welcome
												</p>
												<p className="font-medium mt-1">Welcome</p>
											</div>
											<Badge variant="outline">UI</Badge>
										</div>
									</div>
								</div>
							</div>

							<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
								<p className="text-sm text-blue-800 dark:text-blue-200">
									💡 Translations help provide a localized experience for
									customers in different regions.
								</p>
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

interface LocaleFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	mode: "create" | "edit";
	locale?: Locale | null;
}

export function LocaleFormDialog({
	open,
	onOpenChange,
	mode,
	locale,
}: LocaleFormDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === `create` ? `Add Locale` : `Edit Locale`}
					</DialogTitle>
					<DialogDescription>
						{mode === `create`
							? `Configure a new locale for your store`
							: `Update locale settings and formats`}
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="general" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="general">General</TabsTrigger>
						<TabsTrigger value="formats">Formats</TabsTrigger>
					</TabsList>

					<TabsContent value="general" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="name">Locale Name *</Label>
								<Input
									id="name"
									placeholder="English (United States)"
									defaultValue={locale?.name}
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="code">Locale Code *</Label>
								<Input
									id="code"
									placeholder="en-US"
									defaultValue={locale?.code}
									required
								/>
								<p className="text-xs text-muted-foreground">
									Format: language-COUNTRY (e.g., en-US, fr-FR, es-ES)
								</p>
							</div>

							<Separator />

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="language">Language *</Label>
									<Input
										id="language"
										placeholder="English"
										defaultValue={locale?.language}
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="languageCode">Language Code *</Label>
									<Input
										id="languageCode"
										placeholder="en"
										defaultValue={locale?.languageCode}
										required
									/>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="country">Country *</Label>
									<Input
										id="country"
										placeholder="United States"
										defaultValue={locale?.country}
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="countryCode">Country Code *</Label>
									<Input
										id="countryCode"
										placeholder="US"
										defaultValue={locale?.countryCode}
										required
									/>
								</div>
							</div>

							<Separator />

							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="currency">Currency *</Label>
									<select
										id="currency"
										className="w-full rounded-md border border-input bg-background px-3 py-2"
										defaultValue={locale?.currency || `USD`}
									>
										<option value="USD">USD - US Dollar</option>
										<option value="EUR">EUR - Euro</option>
										<option value="GBP">GBP - British Pound</option>
										<option value="CAD">CAD - Canadian Dollar</option>
										<option value="AUD">AUD - Australian Dollar</option>
										<option value="JPY">JPY - Japanese Yen</option>
									</select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="currencySymbol">Currency Symbol *</Label>
									<Input
										id="currencySymbol"
										placeholder="$"
										defaultValue={locale?.currencySymbol}
										required
									/>
								</div>
							</div>

							<Separator />

							<div className="flex items-center justify-between">
								<div>
									<Label htmlFor="isDefault">Set as Default</Label>
									<p className="text-xs text-muted-foreground">
										Use this locale by default for new customers
									</p>
								</div>
								<Switch
									id="isDefault"
									defaultChecked={locale?.isDefault || false}
								/>
							</div>

							<div className="flex items-center justify-between">
								<div>
									<Label htmlFor="isActive">Active</Label>
									<p className="text-xs text-muted-foreground">
										Make this locale available to customers
									</p>
								</div>
								<Switch
									id="isActive"
									defaultChecked={locale?.isActive ?? true}
								/>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="formats" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="dateFormat">Date Format *</Label>
								<select
									id="dateFormat"
									className="w-full rounded-md border border-input bg-background px-3 py-2"
									defaultValue={locale?.dateFormat || `MM/DD/YYYY`}
								>
									<option value="MM/DD/YYYY">MM/DD/YYYY (12/15/2024)</option>
									<option value="DD/MM/YYYY">DD/MM/YYYY (15/12/2024)</option>
									<option value="YYYY-MM-DD">YYYY-MM-DD (2024-12-15)</option>
									<option value="MMMM D, YYYY">
										MMMM D, YYYY (December 15, 2024)
									</option>
								</select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="timeFormat">Time Format *</Label>
								<select
									id="timeFormat"
									className="w-full rounded-md border border-input bg-background px-3 py-2"
									defaultValue={locale?.timeFormat || `12h`}
								>
									<option value="12h">12-hour (2:30 PM)</option>
									<option value="24h">24-hour (14:30)</option>
								</select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="numberFormat">Number Format *</Label>
								<select
									id="numberFormat"
									className="w-full rounded-md border border-input bg-background px-3 py-2"
									defaultValue={locale?.numberFormat || `1,234.56`}
								>
									<option value="1,234.56">
										1,234.56 (comma separator, period decimal)
									</option>
									<option value="1.234,56">
										1.234,56 (period separator, comma decimal)
									</option>
									<option value="1 234.56">
										1 234.56 (space separator, period decimal)
									</option>
									<option value="1 234,56">
										1 234,56 (space separator, comma decimal)
									</option>
								</select>
							</div>

							<Separator />

							<div className="p-4 bg-muted rounded-lg space-y-2">
								<p className="text-sm font-medium">Format Preview</p>
								<div className="text-xs space-y-1">
									<div className="flex justify-between">
										<span className="text-muted-foreground">Date:</span>
										<span className="font-mono">December 15, 2024</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Time:</span>
										<span className="font-mono">2:30 PM</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Number:</span>
										<span className="font-mono">1,234.56</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">Currency:</span>
										<span className="font-mono">$1,234.56</span>
									</div>
								</div>
							</div>

							<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
								<p className="text-xs text-blue-800 dark:text-blue-200">
									💡 Format settings affect how dates, times, numbers, and
									currencies are displayed throughout your store.
								</p>
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
						{mode === `create` ? `Add Locale` : `Save Changes`}
					</PolarisButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteLocaleDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	locale: Locale | null;
}

export function DeleteLocaleDialog({
	open,
	onOpenChange,
	locale,
}: DeleteLocaleDialogProps) {
	if (!locale) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Locale</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this locale? This action cannot be
						undone.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="p-4 bg-muted rounded-lg space-y-2">
						<div className="flex items-center gap-2">
							<Globe className="h-4 w-4 text-muted-foreground" />
							<p className="font-bold text-lg">{locale.name}</p>
						</div>
						<p className="text-sm text-muted-foreground">{locale.code}</p>
						<div className="grid grid-cols-2 gap-2 text-sm pt-2">
							<div>
								<span className="text-muted-foreground">Language:</span>
								<span className="ml-2 font-medium">{locale.language}</span>
							</div>
							<div>
								<span className="text-muted-foreground">Currency:</span>
								<span className="ml-2 font-medium">{locale.currency}</span>
							</div>
						</div>
					</div>

					{locale.isDefault && (
						<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
							<p className="text-sm text-yellow-800 dark:text-yellow-200">
								⚠️ This is your default locale. You must set another locale as
								default before deleting this one.
							</p>
						</div>
					)}

					{locale.translations > 0 && (
						<div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
							<p className="text-sm text-red-800 dark:text-red-200">
								🚨 This locale has {locale.translations} translations. All
								translations will be permanently deleted.
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
							console.log(`Deleting locale:`, locale);
							onOpenChange(false);
						}}
						disabled={locale.isDefault}
					>
						Delete Locale
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
