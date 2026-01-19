"use client";

import {
	ArrowLeft,
	Check,
	Download,
	Eye,
	Loader2,
	Palette,
	RotateCcw,
	Save,
	Sparkles,
	Type,
	Upload,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
	type ThemePreset,
	exportTheme,
	importTheme,
	themePresets,
} from "@/lib/theme-presets";
import { getTenantSettings, updateTheme } from "@/server/api/internal/settings";

interface ThemeConfig {
	[key: string]: unknown;
	// Colors
	primaryColor?: string;
	secondaryColor?: string;
	accentColor?: string;
	backgroundColor?: string;
	foregroundColor?: string;
	mutedColor?: string;
	borderColor?: string;
	// Typography
	fontFamily?: string;
	headingFontFamily?: string;
	fontSizeScale?: "compact" | "default" | "comfortable" | "large";
	// Layout
	headerStyle?: "default" | "centered" | "minimal";
	footerStyle?: "default" | "simple" | "expanded";
	productCardStyle?: "default" | "minimal" | "detailed";
	spacingScale?: "compact" | "default" | "comfortable" | "spacious";
	// Features
	showBanner?: boolean;
	bannerText?: string;
	bannerBackgroundColor?: string;
	bannerTextColor?: string;
	// Border & Shadow
	borderRadius?: "none" | "small" | "medium" | "large" | "full";
	shadowStyle?: "none" | "subtle" | "medium" | "dramatic";
	// Social
	facebookUrl?: string;
	instagramUrl?: string;
	twitterUrl?: string;
	youtubeUrl?: string;
	tiktokUrl?: string;
	// Contact
	contactEmail?: string;
	contactPhone?: string;
	address?: string;
}

const DEFAULT_THEME = {
	primaryColor: "#000000",
	secondaryColor: "#f4f4f5",
	accentColor: "#000000",
	backgroundColor: "#ffffff",
	foregroundColor: "#09090b",
	mutedColor: "#f4f4f5",
	borderColor: "#e4e4e7",
	fontFamily: "Inter, system-ui, sans-serif",
	headingFontFamily: "Inter, system-ui, sans-serif",
	fontSizeScale: "default" as const,
	headerStyle: "default" as const,
	footerStyle: "default" as const,
	productCardStyle: "default" as const,
	spacingScale: "default" as const,
	showBanner: false,
	bannerText: "",
	bannerBackgroundColor: "#000000",
	bannerTextColor: "#ffffff",
	borderRadius: "medium" as const,
	shadowStyle: "subtle" as const,
};

const FONT_OPTIONS = [
	{ value: "Inter, system-ui, sans-serif", label: "Inter (Default)" },
	{ value: "system-ui, sans-serif", label: "System UI" },
	{ value: "Georgia, serif", label: "Georgia (Serif)" },
	{ value: "'Playfair Display', serif", label: "Playfair Display" },
	{ value: "'Roboto', sans-serif", label: "Roboto" },
	{ value: "'Open Sans', sans-serif", label: "Open Sans" },
	{ value: "'Lato', sans-serif", label: "Lato" },
	{ value: "'Montserrat', sans-serif", label: "Montserrat" },
	{ value: "'Poppins', sans-serif", label: "Poppins" },
	{ value: "'Nunito', sans-serif", label: "Nunito" },
	{ value: "'Space Grotesk', sans-serif", label: "Space Grotesk" },
	{ value: "'JetBrains Mono', monospace", label: "JetBrains Mono" },
];

export default function ThemeSettingsPage() {
	const [isLoading, setIsLoading] = React.useState(true);
	const [isSaving, setIsSaving] = React.useState(false);
	const [config, setConfig] = React.useState<ThemeConfig>(DEFAULT_THEME);
	const [originalConfig, setOriginalConfig] =
		React.useState<ThemeConfig>(DEFAULT_THEME);
	const [storeSlug, setStoreSlug] = React.useState<string>("");

	const hasChanges = React.useMemo(() => {
		return JSON.stringify(config) !== JSON.stringify(originalConfig);
	}, [config, originalConfig]);

	const fetchSettings = React.useCallback(async () => {
		try {
			const settings = await getTenantSettings();
			const themeConfig = (settings.themeConfig as ThemeConfig) ?? {};
			const mergedConfig = { ...DEFAULT_THEME, ...themeConfig };
			setConfig(mergedConfig);
			setOriginalConfig(mergedConfig);
			setStoreSlug(settings.slug);
		} catch (error) {
			console.error("Failed to fetch settings:", error);
			toast.error("Failed to load theme settings");
		} finally {
			setIsLoading(false);
		}
	}, []);

	React.useEffect(() => {
		fetchSettings();
	}, [fetchSettings]);

	const handleSave = async () => {
		setIsSaving(true);
		try {
			await updateTheme({ themeConfig: config });
			setOriginalConfig(config);
			toast.success("Theme settings saved successfully");
		} catch (error) {
			console.error("Failed to save theme:", error);
			toast.error("Failed to save theme settings");
		} finally {
			setIsSaving(false);
		}
	};

	const handleReset = () => {
		setConfig(originalConfig);
		toast.info("Changes discarded");
	};

	const handleResetToDefaults = () => {
		setConfig(DEFAULT_THEME);
		toast.info("Reset to default theme");
	};

	const handleApplyPreset = (preset: ThemePreset) => {
		setConfig((prev) => ({
			...prev,
			...preset.config,
		}));
		toast.success(`Applied "${preset.name}" theme`);
	};

	const handleExportTheme = () => {
		const json = exportTheme(config);
		const blob = new Blob([json], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `theme-${storeSlug || "export"}.json`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
		toast.success("Theme exported successfully");
	};

	const handleImportTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			const content = e.target?.result as string;
			const imported = importTheme(content);
			if (imported) {
				setConfig((prev) => ({ ...prev, ...imported }));
				toast.success("Theme imported successfully");
			} else {
				toast.error("Invalid theme file");
			}
		};
		reader.readAsText(file);
		// Reset the input
		event.target.value = "";
	};

	const updateConfig = <K extends keyof ThemeConfig>(
		key: K,
		value: ThemeConfig[K],
	) => {
		setConfig((prev) => ({ ...prev, [key]: value }));
	};

	if (isLoading) {
		return (
			<div className="flex h-[50vh] items-center justify-center">
				<Loader />
			</div>
		);
	}

	const previewUrl = storeSlug
		? `https://${storeSlug}.boostcart.bg`
		: undefined;

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Link href="/admin/settings">
						<Button variant="ghost" size="icon">
							<ArrowLeft className="h-4 w-4" />
						</Button>
					</Link>
					<div>
						<h1 className="text-2xl font-bold tracking-tight">
							Theme Settings
						</h1>
						<p className="text-muted-foreground">
							Customize your store&apos;s appearance
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					{hasChanges && (
						<Button variant="outline" onClick={handleReset}>
							<RotateCcw className="mr-2 h-4 w-4" />
							Discard
						</Button>
					)}
					<Button onClick={handleSave} disabled={isSaving || !hasChanges}>
						{isSaving ? (
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						) : (
							<Save className="mr-2 h-4 w-4" />
						)}
						Save Changes
					</Button>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Settings Panel */}
				<div className="lg:col-span-2 space-y-6">
					<Tabs defaultValue="presets" className="w-full">
						<TabsList className="grid w-full grid-cols-6">
							<TabsTrigger value="presets">Presets</TabsTrigger>
							<TabsTrigger value="colors">Colors</TabsTrigger>
							<TabsTrigger value="typography">Typography</TabsTrigger>
							<TabsTrigger value="layout">Layout</TabsTrigger>
							<TabsTrigger value="banner">Banner</TabsTrigger>
							<TabsTrigger value="social">Social</TabsTrigger>
						</TabsList>

						{/* Presets Tab */}
						<TabsContent value="presets" className="space-y-4">
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Sparkles className="h-5 w-5" />
										Theme Presets
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6">
									<p className="text-sm text-muted-foreground">
										Choose a preset theme as a starting point, then customize it to match your brand.
									</p>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{themePresets.map((preset) => (
											<button
												type="button"
												key={preset.id}
												onClick={() => handleApplyPreset(preset)}
												className="p-4 border rounded-lg text-left transition-all hover:border-primary hover:bg-muted/50"
											>
												<div className="flex items-center gap-3 mb-3">
													<div className="flex -space-x-1">
														<div
															className="h-6 w-6 rounded-full border-2 border-background"
															style={{ backgroundColor: preset.preview.primaryColor }}
														/>
														<div
															className="h-6 w-6 rounded-full border-2 border-background"
															style={{ backgroundColor: preset.preview.secondaryColor }}
														/>
														<div
															className="h-6 w-6 rounded-full border-2 border-background"
															style={{ backgroundColor: preset.preview.accentColor }}
														/>
													</div>
													<h4 className="font-medium">{preset.name}</h4>
												</div>
												<p className="text-sm text-muted-foreground">
													{preset.description}
												</p>
											</button>
										))}
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Download className="h-5 w-5" />
										Import / Export
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-sm text-muted-foreground">
										Export your current theme to share or backup, or import a previously saved theme.
									</p>
									<div className="flex flex-wrap gap-3">
										<Button variant="outline" onClick={handleExportTheme}>
											<Download className="mr-2 h-4 w-4" />
											Export Theme
										</Button>
										<div>
											<input
												type="file"
												accept=".json"
												onChange={handleImportTheme}
												className="hidden"
												id="theme-import"
											/>
											<Button
												variant="outline"
												onClick={() => document.getElementById("theme-import")?.click()}
											>
												<Upload className="mr-2 h-4 w-4" />
												Import Theme
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Colors Tab */}
						<TabsContent value="colors" className="space-y-4">
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Palette className="h-5 w-5" />
										Brand Colors
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<ColorPicker
											label="Primary Color"
											description="Main brand color used for buttons and links"
											value={config.primaryColor ?? DEFAULT_THEME.primaryColor}
											onChange={(v) => updateConfig("primaryColor", v)}
										/>
										<ColorPicker
											label="Secondary Color"
											description="Used for secondary buttons and backgrounds"
											value={
												config.secondaryColor ?? DEFAULT_THEME.secondaryColor
											}
											onChange={(v) => updateConfig("secondaryColor", v)}
										/>
										<ColorPicker
											label="Accent Color"
											description="Highlight color for important elements"
											value={config.accentColor ?? DEFAULT_THEME.accentColor}
											onChange={(v) => updateConfig("accentColor", v)}
										/>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Background Colors</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<ColorPicker
											label="Background Color"
											description="Main page background"
											value={
												config.backgroundColor ?? DEFAULT_THEME.backgroundColor
											}
											onChange={(v) => updateConfig("backgroundColor", v)}
										/>
										<ColorPicker
											label="Foreground Color"
											description="Main text color"
											value={
												config.foregroundColor ?? DEFAULT_THEME.foregroundColor
											}
											onChange={(v) => updateConfig("foregroundColor", v)}
										/>
										<ColorPicker
											label="Muted Color"
											description="Secondary text and backgrounds"
											value={config.mutedColor ?? DEFAULT_THEME.mutedColor}
											onChange={(v) => updateConfig("mutedColor", v)}
										/>
										<ColorPicker
											label="Border Color"
											description="Border and divider lines"
											value={config.borderColor ?? DEFAULT_THEME.borderColor}
											onChange={(v) => updateConfig("borderColor", v)}
										/>
									</div>
								</CardContent>
							</Card>

							<div className="flex justify-end">
								<Button variant="outline" onClick={handleResetToDefaults}>
									Reset to Defaults
								</Button>
							</div>
						</TabsContent>

						{/* Typography Tab */}
						<TabsContent value="typography" className="space-y-4">
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Type className="h-5 w-5" />
										Fonts
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="space-y-2">
										<Label>Body Font</Label>
										<Select
											value={config.fontFamily || DEFAULT_THEME.fontFamily}
											onValueChange={(v) => updateConfig("fontFamily", v)}
										>
											<SelectTrigger>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												{FONT_OPTIONS.map((font) => (
													<SelectItem
														key={font.value}
														value={font.value}
														style={{ fontFamily: font.value }}
													>
														{font.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<p className="text-sm text-muted-foreground">
											Used for all body text
										</p>
									</div>

									<div className="space-y-2">
										<Label>Heading Font</Label>
										<Select
											value={
												config.headingFontFamily ||
												DEFAULT_THEME.headingFontFamily
											}
											onValueChange={(v) =>
												updateConfig("headingFontFamily", v)
											}
										>
											<SelectTrigger>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												{FONT_OPTIONS.map((font) => (
													<SelectItem
														key={font.value}
														value={font.value}
														style={{ fontFamily: font.value }}
													>
														{font.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<p className="text-sm text-muted-foreground">
											Used for headings and titles
										</p>
									</div>

									<Separator />

									<div className="space-y-4">
										<h4 className="font-medium">Preview</h4>
										<div
											className="p-4 border rounded-lg space-y-2"
											style={{ fontFamily: config.fontFamily }}
										>
											<h3
												className="text-xl font-bold"
												style={{ fontFamily: config.headingFontFamily }}
											>
												Heading Preview
											</h3>
											<p className="text-muted-foreground">
												This is how your body text will look. The quick brown
												fox jumps over the lazy dog.
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Text Size Scale</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-sm text-muted-foreground">
										Adjust the overall text size throughout your store
									</p>
									<div className="grid grid-cols-4 gap-3">
										{(
											["compact", "default", "comfortable", "large"] as const
										).map((scale) => (
											<button
												type="button"
												key={scale}
												onClick={() => updateConfig("fontSizeScale", scale)}
												className={`p-4 border rounded-lg text-center transition-all ${
													config.fontSizeScale === scale
														? "border-primary bg-primary/5 ring-2 ring-primary"
														: "hover:border-muted-foreground"
												}`}
											>
												<div
													className="mb-2 font-medium"
													style={{
														fontSize:
															scale === "compact"
																? "0.875rem"
																: scale === "default"
																	? "1rem"
																	: scale === "comfortable"
																		? "1.0625rem"
																		: "1.125rem",
													}}
												>
													Aa
												</div>
												<span className="text-xs font-medium capitalize">
													{scale === "default" ? "Default" : scale}
												</span>
												{config.fontSizeScale === scale && (
													<Check className="h-4 w-4 mx-auto mt-1 text-primary" />
												)}
											</button>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Layout Tab */}
						<TabsContent value="layout" className="space-y-4">
							<Card>
								<CardHeader>
									<CardTitle>Header Style</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid grid-cols-3 gap-4">
										{(
											["default", "centered", "minimal"] as const
										).map((style) => (
											<button
												type="button"
												key={style}
												onClick={() => updateConfig("headerStyle", style)}
												className={`p-4 border rounded-lg text-center transition-all ${
													config.headerStyle === style
														? "border-primary bg-primary/5 ring-2 ring-primary"
														: "hover:border-muted-foreground"
												}`}
											>
												<div className="h-12 mb-2 bg-muted rounded flex items-center justify-center text-xs">
													{style === "default" && (
														<div className="flex w-full justify-between px-2">
															<span>Logo</span>
															<span>Menu</span>
														</div>
													)}
													{style === "centered" && (
														<div className="text-center">
															<span>Logo</span>
															<div className="text-[10px]">Menu</div>
														</div>
													)}
													{style === "minimal" && (
														<div className="flex w-full justify-between px-2">
															<span>☰</span>
															<span>Logo</span>
															<span>🛒</span>
														</div>
													)}
												</div>
												<span className="text-sm font-medium capitalize">
													{style}
												</span>
												{config.headerStyle === style && (
													<Check className="h-4 w-4 mx-auto mt-1 text-primary" />
												)}
											</button>
										))}
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Footer Style</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid grid-cols-3 gap-4">
										{(["default", "simple", "expanded"] as const).map(
											(style) => (
												<button
													type="button"
													key={style}
													onClick={() => updateConfig("footerStyle", style)}
													className={`p-4 border rounded-lg text-center transition-all ${
														config.footerStyle === style
															? "border-primary bg-primary/5 ring-2 ring-primary"
															: "hover:border-muted-foreground"
													}`}
												>
													<div className="h-12 mb-2 bg-muted rounded flex items-center justify-center text-xs px-2">
														{style === "default" && (
															<div className="grid grid-cols-3 gap-1 w-full text-[8px]">
																<div>Links</div>
																<div>Links</div>
																<div>Social</div>
															</div>
														)}
														{style === "simple" && (
															<div className="text-center text-[10px]">
																© 2026 Store
															</div>
														)}
														{style === "expanded" && (
															<div className="grid grid-cols-4 gap-0.5 w-full text-[6px]">
																<div>Shop</div>
																<div>Help</div>
																<div>About</div>
																<div>Social</div>
															</div>
														)}
													</div>
													<span className="text-sm font-medium capitalize">
														{style}
													</span>
													{config.footerStyle === style && (
														<Check className="h-4 w-4 mx-auto mt-1 text-primary" />
													)}
												</button>
											),
										)}
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Product Card Style</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid grid-cols-3 gap-4">
										{(["default", "minimal", "detailed"] as const).map(
											(style) => (
												<button
													type="button"
													key={style}
													onClick={() =>
														updateConfig("productCardStyle", style)
													}
													className={`p-4 border rounded-lg text-center transition-all ${
														config.productCardStyle === style
															? "border-primary bg-primary/5 ring-2 ring-primary"
															: "hover:border-muted-foreground"
													}`}
												>
													<div className="h-20 mb-2 bg-muted rounded p-2 text-[8px] text-left">
														<div className="bg-muted-foreground/20 h-8 w-full mb-1 rounded" />
														{style === "default" && (
															<>
																<div className="font-bold">Product</div>
																<div>$99</div>
															</>
														)}
														{style === "minimal" && (
															<div className="font-bold text-center mt-1">
																Product
															</div>
														)}
														{style === "detailed" && (
															<>
																<div className="font-bold">Product</div>
																<div className="text-[6px]">
																	Description text...
																</div>
																<div>$99</div>
															</>
														)}
													</div>
													<span className="text-sm font-medium capitalize">
														{style}
													</span>
													{config.productCardStyle === style && (
														<Check className="h-4 w-4 mx-auto mt-1 text-primary" />
													)}
												</button>
											),
										)}
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Border Radius</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid grid-cols-5 gap-3">
										{(["none", "small", "medium", "large", "full"] as const).map(
											(style) => (
												<button
													type="button"
													key={style}
													onClick={() => updateConfig("borderRadius", style)}
													className={`p-3 border rounded-lg text-center transition-all ${
														config.borderRadius === style
															? "border-primary bg-primary/5 ring-2 ring-primary"
															: "hover:border-muted-foreground"
													}`}
												>
													<div
														className="h-8 w-full bg-muted mb-2"
														style={{
															borderRadius:
																style === "none"
																	? "0"
																	: style === "small"
																		? "0.25rem"
																		: style === "medium"
																			? "0.5rem"
																			: style === "large"
																				? "0.75rem"
																				: "9999px",
														}}
													/>
													<span className="text-xs font-medium capitalize">
														{style}
													</span>
												</button>
											),
										)}
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Shadow Style</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid grid-cols-4 gap-3">
										{(["none", "subtle", "medium", "dramatic"] as const).map(
											(style) => (
												<button
													type="button"
													key={style}
													onClick={() => updateConfig("shadowStyle", style)}
													className={`p-3 border rounded-lg text-center transition-all ${
														config.shadowStyle === style
															? "border-primary bg-primary/5 ring-2 ring-primary"
															: "hover:border-muted-foreground"
													}`}
												>
													<div
														className="h-10 w-full bg-background border rounded mb-2"
														style={{
															boxShadow:
																style === "none"
																	? "none"
																	: style === "subtle"
																		? "0 1px 2px 0 rgb(0 0 0 / 0.05)"
																		: style === "medium"
																			? "0 4px 6px -1px rgb(0 0 0 / 0.1)"
																			: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
														}}
													/>
													<span className="text-xs font-medium capitalize">
														{style}
													</span>
												</button>
											),
										)}
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Spacing Scale</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-sm text-muted-foreground">
										Control the overall spacing and padding throughout your store
									</p>
									<div className="grid grid-cols-4 gap-3">
										{(
											["compact", "default", "comfortable", "spacious"] as const
										).map((scale) => (
											<button
												type="button"
												key={scale}
												onClick={() => updateConfig("spacingScale", scale)}
												className={`p-3 border rounded-lg text-center transition-all ${
													config.spacingScale === scale
														? "border-primary bg-primary/5 ring-2 ring-primary"
														: "hover:border-muted-foreground"
												}`}
											>
												<div className="flex justify-center items-center h-12 mb-2">
													<div
														className="flex gap-1"
														style={{
															gap:
																scale === "compact"
																	? "0.125rem"
																	: scale === "default"
																		? "0.25rem"
																		: scale === "comfortable"
																			? "0.375rem"
																			: "0.5rem",
														}}
													>
														<div className="w-3 h-6 bg-muted rounded-sm" />
														<div className="w-3 h-6 bg-muted rounded-sm" />
														<div className="w-3 h-6 bg-muted rounded-sm" />
													</div>
												</div>
												<span className="text-xs font-medium capitalize">
													{scale === "default" ? "Default" : scale}
												</span>
												{config.spacingScale === scale && (
													<Check className="h-4 w-4 mx-auto mt-1 text-primary" />
												)}
											</button>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Banner Tab */}
						<TabsContent value="banner" className="space-y-4">
							<Card>
								<CardHeader>
									<CardTitle>Announcement Banner</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="flex items-center justify-between">
										<div>
											<Label>Show Banner</Label>
											<p className="text-sm text-muted-foreground">
												Display a promotional banner at the top of your store
											</p>
										</div>
										<Switch
											checked={config.showBanner}
											onCheckedChange={(v) => updateConfig("showBanner", v)}
										/>
									</div>

									{config.showBanner && (
										<>
											<Separator />

											<div className="space-y-2">
												<Label>Banner Text</Label>
												<Textarea
													value={config.bannerText || ""}
													onChange={(e) =>
														updateConfig("bannerText", e.target.value)
													}
													placeholder="Free shipping on orders over 100лв!"
													rows={2}
												/>
											</div>

											<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
												<ColorPicker
													label="Banner Background"
													value={
														config.bannerBackgroundColor ??
														DEFAULT_THEME.bannerBackgroundColor
													}
													onChange={(v) =>
														updateConfig("bannerBackgroundColor", v)
													}
												/>
												<ColorPicker
													label="Banner Text Color"
													value={
														config.bannerTextColor ??
														DEFAULT_THEME.bannerTextColor
													}
													onChange={(v) => updateConfig("bannerTextColor", v)}
												/>
											</div>

											<div className="space-y-2">
												<Label>Preview</Label>
												<div
													className="p-3 rounded-lg text-center text-sm"
													style={{
														backgroundColor: config.bannerBackgroundColor,
														color: config.bannerTextColor,
													}}
												>
													{config.bannerText || "Your banner text here"}
												</div>
											</div>
										</>
									)}
								</CardContent>
							</Card>
						</TabsContent>

						{/* Social & Contact Tab */}
						<TabsContent value="social" className="space-y-4">
							<Card>
								<CardHeader>
									<CardTitle>Social Media Links</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label>Facebook</Label>
											<Input
												value={config.facebookUrl || ""}
												onChange={(e) =>
													updateConfig("facebookUrl", e.target.value)
												}
												placeholder="https://facebook.com/yourstore"
											/>
										</div>
										<div className="space-y-2">
											<Label>Instagram</Label>
											<Input
												value={config.instagramUrl || ""}
												onChange={(e) =>
													updateConfig("instagramUrl", e.target.value)
												}
												placeholder="https://instagram.com/yourstore"
											/>
										</div>
										<div className="space-y-2">
											<Label>Twitter / X</Label>
											<Input
												value={config.twitterUrl || ""}
												onChange={(e) =>
													updateConfig("twitterUrl", e.target.value)
												}
												placeholder="https://twitter.com/yourstore"
											/>
										</div>
										<div className="space-y-2">
											<Label>YouTube</Label>
											<Input
												value={config.youtubeUrl || ""}
												onChange={(e) =>
													updateConfig("youtubeUrl", e.target.value)
												}
												placeholder="https://youtube.com/@yourstore"
											/>
										</div>
										<div className="space-y-2">
											<Label>TikTok</Label>
											<Input
												value={config.tiktokUrl || ""}
												onChange={(e) =>
													updateConfig("tiktokUrl", e.target.value)
												}
												placeholder="https://tiktok.com/@yourstore"
											/>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Contact Information</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="space-y-2">
										<Label>Contact Email</Label>
										<Input
											type="email"
											value={config.contactEmail || ""}
											onChange={(e) =>
												updateConfig("contactEmail", e.target.value)
											}
											placeholder="contact@yourstore.com"
										/>
										<p className="text-sm text-muted-foreground">
											Displayed on your store footer for customer inquiries
										</p>
									</div>
									<div className="space-y-2">
										<Label>Contact Phone</Label>
										<Input
											type="tel"
											value={config.contactPhone || ""}
											onChange={(e) =>
												updateConfig("contactPhone", e.target.value)
											}
											placeholder="+359 888 123 456"
										/>
									</div>
									<div className="space-y-2">
										<Label>Address</Label>
										<Textarea
											value={config.address || ""}
											onChange={(e) => updateConfig("address", e.target.value)}
											placeholder="123 Main Street, Sofia, Bulgaria"
											rows={2}
										/>
										<p className="text-sm text-muted-foreground">
											Your business address (optional)
										</p>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>

				{/* Preview Panel */}
				<div className="lg:col-span-1">
					<Card className="sticky top-20">
						<CardHeader>
							<div className="flex items-center justify-between">
								<CardTitle className="flex items-center gap-2">
									<Eye className="h-5 w-5" />
									Preview
								</CardTitle>
								{previewUrl && (
									<a
										href={previewUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button variant="outline" size="sm">
											Open Store
										</Button>
									</a>
								)}
							</div>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{/* Color Swatches */}
								<div className="grid grid-cols-4 gap-2">
									<div className="text-center">
										<div
											className="h-8 w-full rounded-md border"
											style={{ backgroundColor: config.primaryColor }}
										/>
										<span className="text-xs text-muted-foreground">
											Primary
										</span>
									</div>
									<div className="text-center">
										<div
											className="h-8 w-full rounded-md border"
											style={{ backgroundColor: config.secondaryColor }}
										/>
										<span className="text-xs text-muted-foreground">
											Secondary
										</span>
									</div>
									<div className="text-center">
										<div
											className="h-8 w-full rounded-md border"
											style={{ backgroundColor: config.accentColor }}
										/>
										<span className="text-xs text-muted-foreground">
											Accent
										</span>
									</div>
									<div className="text-center">
										<div
											className="h-8 w-full rounded-md border"
											style={{ backgroundColor: config.backgroundColor }}
										/>
										<span className="text-xs text-muted-foreground">
											Background
										</span>
									</div>
								</div>

								<Separator />

								{/* Mini Preview */}
								<div
									className="p-4 rounded-lg border overflow-hidden"
									style={{
										backgroundColor: config.backgroundColor,
										color: config.foregroundColor,
										fontFamily: config.fontFamily,
									}}
								>
									{/* Banner Preview */}
									{config.showBanner && (
										<div
											className="text-xs text-center py-1 -mx-4 -mt-4 mb-4"
											style={{
												backgroundColor: config.bannerBackgroundColor,
												color: config.bannerTextColor,
											}}
										>
											{config.bannerText || "Banner"}
										</div>
									)}

									{/* Header Preview */}
									<div
										className="flex items-center justify-between mb-4 pb-2"
										style={{ borderBottom: `1px solid ${config.borderColor}` }}
									>
										<span
											className="font-bold"
											style={{ fontFamily: config.headingFontFamily }}
										>
											Store
										</span>
										<div className="flex gap-2 text-xs">
											<span>🔍</span>
											<span>🛒</span>
										</div>
									</div>

									{/* Product Preview */}
									<div className="space-y-2">
										<div
											className="aspect-square rounded"
											style={{ backgroundColor: config.mutedColor }}
										/>
										<h4
											className="font-medium text-sm"
											style={{ fontFamily: config.headingFontFamily }}
										>
											Product Name
										</h4>
										<p
											className="text-xs"
											style={{ color: config.foregroundColor, opacity: 0.7 }}
										>
											Product description
										</p>
										<button
											type="button"
											className="w-full text-xs py-2 rounded font-medium"
											style={{
												backgroundColor: config.primaryColor,
												color: config.backgroundColor,
											}}
										>
											Add to Cart
										</button>
									</div>
								</div>

								<p className="text-xs text-muted-foreground text-center">
									Save changes to update your live store
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

// Color Picker Component
interface ColorPickerProps {
	label: string;
	description?: string;
	value: string;
	onChange: (value: string) => void;
}

function ColorPicker({ label, description, value, onChange }: ColorPickerProps) {
	const [isOpen, setIsOpen] = React.useState(false);

	// Preset colors
	const presets = [
		"#000000",
		"#ffffff",
		"#ef4444",
		"#f97316",
		"#eab308",
		"#22c55e",
		"#06b6d4",
		"#3b82f6",
		"#8b5cf6",
		"#ec4899",
		"#6b7280",
		"#1f2937",
	];

	return (
		<div className="space-y-2">
			<Label>{label}</Label>
			<div className="flex gap-2">
				<div className="relative">
					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="h-10 w-10 rounded-md border shadow-sm cursor-pointer hover:ring-2 ring-primary transition-all"
						style={{ backgroundColor: value }}
					/>
					{isOpen && (
						<div className="absolute z-50 top-12 left-0 p-3 bg-popover border rounded-lg shadow-lg">
							<div className="grid grid-cols-6 gap-2 mb-3">
								{presets.map((color) => (
									<button
										type="button"
										key={color}
										onClick={() => {
											onChange(color);
											setIsOpen(false);
										}}
										className={`h-6 w-6 rounded border cursor-pointer hover:scale-110 transition-transform ${
											value === color ? "ring-2 ring-primary" : ""
										}`}
										style={{ backgroundColor: color }}
									/>
								))}
							</div>
							<Input
								type="color"
								value={value}
								onChange={(e) => onChange(e.target.value)}
								className="w-full h-8 p-0 cursor-pointer"
							/>
						</div>
					)}
				</div>
				<Input
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder="#000000"
					className="w-28 font-mono text-sm"
				/>
			</div>
			{description && (
				<p className="text-sm text-muted-foreground">{description}</p>
			)}
		</div>
	);
}
