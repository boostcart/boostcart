"use client";

import { SettingsIcon } from "@shopify/polaris-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function PlatformSettingsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold text-white">Platform Settings</h1>
				<p className="text-[#8b949e]">
					Configure global platform settings and features
				</p>
			</div>

			{/* General Settings */}
			<Card className="bg-[#161b22] border-[#30363d]">
				<CardHeader>
					<CardTitle className="text-white">General Settings</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2">
						<div className="space-y-2">
							<Label className="text-white">Platform Name</Label>
							<Input
								defaultValue="BoostCart"
								className="bg-[#0d1117] border-[#30363d] text-white"
							/>
						</div>
						<div className="space-y-2">
							<Label className="text-white">Support Email</Label>
							<Input
								defaultValue="support@boostcart.bg"
								className="bg-[#0d1117] border-[#30363d] text-white"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<Label className="text-white">Default Domain</Label>
						<Input
							defaultValue="boostcart.bg"
							className="bg-[#0d1117] border-[#30363d] text-white"
						/>
						<p className="text-xs text-[#8b949e]">
							Tenants will get subdomains like store.boostcart.bg
						</p>
					</div>
				</CardContent>
			</Card>

			{/* Feature Flags */}
			<Card className="bg-[#161b22] border-[#30363d]">
				<CardHeader>
					<CardTitle className="text-white">Feature Flags</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex items-center justify-between">
						<div>
							<Label className="text-white">Allow New Registrations</Label>
							<p className="text-xs text-[#8b949e]">
								Enable or disable new tenant sign-ups
							</p>
						</div>
						<Switch defaultChecked />
					</div>
					<Separator className="bg-[#30363d]" />
					<div className="flex items-center justify-between">
						<div>
							<Label className="text-white">Custom Domains</Label>
							<p className="text-xs text-[#8b949e]">
								Allow tenants to use custom domains
							</p>
						</div>
						<Switch defaultChecked />
					</div>
					<Separator className="bg-[#30363d]" />
					<div className="flex items-center justify-between">
						<div>
							<Label className="text-white">Maintenance Mode</Label>
							<p className="text-xs text-[#8b949e]">
								Show maintenance page to all non-admin users
							</p>
						</div>
						<Switch />
					</div>
				</CardContent>
			</Card>

			{/* Limits */}
			<Card className="bg-[#161b22] border-[#30363d]">
				<CardHeader>
					<CardTitle className="text-white">Default Limits</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid gap-4 md:grid-cols-3">
						<div className="space-y-2">
							<Label className="text-white">Max Products (Free)</Label>
							<Input
								type="number"
								defaultValue="100"
								className="bg-[#0d1117] border-[#30363d] text-white"
							/>
						</div>
						<div className="space-y-2">
							<Label className="text-white">Max Staff (Free)</Label>
							<Input
								type="number"
								defaultValue="2"
								className="bg-[#0d1117] border-[#30363d] text-white"
							/>
						</div>
						<div className="space-y-2">
							<Label className="text-white">Storage Limit (MB)</Label>
							<Input
								type="number"
								defaultValue="500"
								className="bg-[#0d1117] border-[#30363d] text-white"
							/>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Save Button */}
			<div className="flex justify-end">
				<Button className="bg-green-600 hover:bg-green-700">
					Save Settings
				</Button>
			</div>
		</div>
	);
}
