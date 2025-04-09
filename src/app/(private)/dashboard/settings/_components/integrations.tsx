"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Plus, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

type Integration = {
	name: string;
	description: string;
	tags: string[];
	new: boolean;
	comingSoon: boolean;
	featured: boolean;
	image: string;
};

const Integrations = () => {
	const t = useTranslations();
	const [search, setSearch] = useState<string>("");

	const integrations = [
		{
			name: "Google Authentication",
			description:
				"Enhance security and make authentication easier for your users with Google integration.",
			tags: ["Authentication"],
			new: false,
			comingSoon: true,
			featured: true,
			image:
				"https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
		},
		{
			name: "Stripe",
			description: "Accept, track and manage payments with Stripe integration.",
			tags: ["Payments"],
			new: false,
			comingSoon: true,
			featured: true,
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s",
		},
		{
			name: "Facebook Authentication",
			description:
				"Enhance security and make authentication easier for your users with Facebook integration.",
			tags: ["Authentication"],
			new: false,
			comingSoon: true,
			featured: false,
			image:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png",
		},
		{
			name: "Google Analytics",
			description:
				"Track and analyze your website traffic with Google Analytics integration.",
			tags: ["Analytics"],
			new: false,
			comingSoon: true,
			featured: false,
			image:
				"https://images.icon-icons.com/2699/PNG/512/google_analytics_logo_icon_171061.png",
		},
		{
			name: "PayPal",
			description: "Accept, track and manage payments with PayPal integration.",
			tags: ["Payments"],
			new: false,
			comingSoon: true,
			featured: false,
			image:
				"https://w7.pngwing.com/pngs/665/281/png-transparent-logo-computer-icons-paypal-paypal-blue-angle-rectangle.png",
		},
		{
			name: "myPOS",
			description: "Accept, track and manage payments with myPOS integration.",
			tags: ["Payments"],
			new: false,
			comingSoon: true,
			featured: true,
			image:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/MyPOS_Logo.svg/1200px-MyPOS_Logo.svg.png",
		},
		{
			name: "Speedy",
			description: "Make shipping easier with Speedy integration.",
			tags: ["Logistics"],
			new: false,
			comingSoon: true,
			featured: false,
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRZm6Hg0JbLbxDEVM2SF_8wF4m_cSmy8Q0A&s",
		},
		{
			name: "Econt",
			description: "Make shipping easier with Econt integration.",
			tags: ["Logistics"],
			new: false,
			comingSoon: true,
			featured: false,
			image: "https://www.econt.com/images/main/econt_eng.png",
		},
	] as Integration[];

	return (
		<div className="flex flex-col space-y-8">
			<div className="flex flex-col space-y-4">
				<h2 className="text-xl font-medium">
					{t("dashboard.settings.integrations.featured")}
				</h2>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{integrations
						.filter((integration) => integration.featured)
						.map((integration, index) => (
							<IntegrationCard key={index} integration={integration} />
						))}
				</div>
			</div>

			<Separator />

			<div className="flex flex-col space-y-4">
				<div className="flex flex-col items-center justify-between sm:flex-row">
					<div className="flex items-center space-x-2">
						<h2 className="text-xl font-medium">
							{t("dashboard.settings.integrations.allIntegrations")}
						</h2>
						<Badge variant="outline">{integrations.length}</Badge>
					</div>

					<div>
						<Input
							placeholder={t(
								"dashboard.settings.integrations.searchIntegrations",
							)}
							startIcon={Search}
							className="sm:min-w-sm"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{integrations
						.filter(
							(integration) =>
								integration.name.toLowerCase().includes(search.toLowerCase()) ||
								integration.tags.some((tag) =>
									tag.toLowerCase().includes(search.toLowerCase()),
								),
						)
						.map((integration, index) => (
							<IntegrationCard key={index} integration={integration} />
						))}
				</div>
			</div>
		</div>
	);
};

const IntegrationCard = ({ integration }: { integration: Integration }) => {
	const t = useTranslations();

	return (
		<Card>
			<CardContent className="p-6">
				<div className="flex flex-col space-y-6">
					<div className="flex items-center justify-between">
						<Image
							src={integration.image}
							alt={integration.name}
							width={256}
							height={256}
							className="object-cover rounded-lg size-12"
						/>

						<Button variant="outline" disabled={integration.comingSoon}>
							{integration.comingSoon ? (
								t("general.comingSoon")
							) : (
								<>
									<Plus />
									<span>{t("general.connect")}</span>
								</>
							)}
						</Button>
					</div>

					<div className="flex flex-col space-y-2">
						<div className="flex items-center space-x-2">
							<h3 className="text-lg font-medium">{integration.name}</h3>
							{integration.new && <Badge>{t("general.new")}</Badge>}
						</div>

						<p className="text-sm text-muted-foreground">
							{integration.description}
						</p>
					</div>

					<div className="flex items-center space-x-2">
						{integration.tags.map((tag, index) => (
							<Badge key={index} variant="secondary">
								{tag}
							</Badge>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default Integrations;
