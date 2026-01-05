"use client";

import { ChartVerticalIcon } from "@shopify/polaris-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PlatformAnalyticsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold text-white">Platform Analytics</h1>
				<p className="text-[#8b949e]">
					Platform-wide performance metrics and insights
				</p>
			</div>

			<Card className="bg-[#161b22] border-[#30363d]">
				<CardContent className="flex flex-col items-center justify-center py-16">
					<div className="p-4 rounded-full bg-purple-400/10 mb-4">
						<ChartVerticalIcon className="size-12 text-purple-400" />
					</div>
					<h2 className="text-xl font-semibold text-white mb-2">
						Analytics Coming Soon
					</h2>
					<p className="text-[#8b949e] text-center max-w-md">
						Platform-wide analytics including revenue trends, tenant growth,
						user acquisition, and performance metrics are under development.
					</p>
				</CardContent>
			</Card>

			{/* Placeholder cards for future analytics */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				<Card className="bg-[#161b22] border-[#30363d]">
					<CardHeader>
						<CardTitle className="text-white text-sm">Revenue Trends</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="h-32 flex items-center justify-center">
							<p className="text-[#8b949e] text-sm">Chart placeholder</p>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-[#161b22] border-[#30363d]">
					<CardHeader>
						<CardTitle className="text-white text-sm">Tenant Growth</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="h-32 flex items-center justify-center">
							<p className="text-[#8b949e] text-sm">Chart placeholder</p>
						</div>
					</CardContent>
				</Card>

				<Card className="bg-[#161b22] border-[#30363d]">
					<CardHeader>
						<CardTitle className="text-white text-sm">User Activity</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="h-32 flex items-center justify-center">
							<p className="text-[#8b949e] text-sm">Chart placeholder</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
