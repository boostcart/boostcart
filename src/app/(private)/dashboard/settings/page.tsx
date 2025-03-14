import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getGeneralSettings, getSecuritySettings, getSocialSettings } from "@/server/dashboard";

import AppearanceSettings from "./_components/appearance-settings";
import GeneralSettings from "./_components/general-settings";
import Integrations from "./_components/integrations";
import SecuritySettings from "./_components/security-settings";
import SocialsSettings from "./_components/socials-settings";
import { getTranslations } from "next-intl/server";

export default async function DashboardSettings() {
	const t = await getTranslations();
	const generalSettings = await getGeneralSettings();
	const socialSettings = await getSocialSettings();
	const securitySettings = await getSecuritySettings();

	if ('error' in generalSettings || 'error' in socialSettings || 'error' in securitySettings) {
		return <div>Error loading settings</div>;
	}

	return (
		<div className="flex flex-col space-y-4">
			<h1 className="text-2xl font-bold">{t("dashboard.nav.settings")}</h1>

			<Tabs defaultValue="general" className="space-y-8">
				<TabsList>
					<TabsTrigger value="general" className="cursor-pointer">{t("dashboard.settings.nav.general")}</TabsTrigger>
					<TabsTrigger value="socials" className="cursor-pointer">{t("dashboard.settings.nav.socials")}</TabsTrigger>
					<TabsTrigger value="appearance" className="cursor-pointer">{t("dashboard.settings.nav.appearance")}</TabsTrigger>
					<TabsTrigger value="payments" className="cursor-pointer">{t("dashboard.settings.nav.payments")}</TabsTrigger>
					<TabsTrigger value="security" className="cursor-pointer">{t("dashboard.settings.nav.security")}</TabsTrigger>
					<TabsTrigger value="integrations" className="cursor-pointer">{t("dashboard.settings.nav.integrations")}</TabsTrigger>
				</TabsList>
				<TabsContent value="general"><GeneralSettings settings={generalSettings} /></TabsContent>
				<TabsContent value="socials"><SocialsSettings settings={socialSettings} /></TabsContent>
				<TabsContent value="appearance"><AppearanceSettings /></TabsContent>
				<TabsContent value="payments">payments</TabsContent>
				<TabsContent value="security"><SecuritySettings settings={securitySettings} /></TabsContent>
				<TabsContent value="integrations"><Integrations /></TabsContent>
			</Tabs>
		</div>
	)
}