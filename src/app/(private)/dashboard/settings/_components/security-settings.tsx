"use client";

import { Card, CardContent } from "@/components/ui/card";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCallback, useState, useTransition } from "react";

// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { toggleEmailVerification, toggleTwoFactorAuthentication } from "@/server/dashboard";
import { useTranslations } from "next-intl";
import type { SecuritySettings } from "@prisma/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// import { useForm } from "react-hook-form";

// import { zodResolver } from "@hookform/resolvers/zod";

const SecuritySettings: React.FC<{ settings: SecuritySettings }> = ({ settings }) => {
	const t = useTranslations();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [isLocked, setIsLocked] = useState<boolean>(true);
	const [isEmailVerificationEnforced, setIsEmailVerificationEnforced] = useState<boolean>(settings.requireVerifiedEmail);
	const [isTwoFactorAuthenticationEnforced, setIsTwoFactorAuthenticationEnforced] = useState<boolean>(settings.requireTwoFactor);

	const handleEmailVerificationChange = useCallback(() => {
		startTransition(() => {
			toggleEmailVerification()
				.then((callback) => {
					if (callback.error) {
						toast.error(t(`dashboard.errors.${callback.error as keyof IntlMessages["dashboard"]["errors"]}`));
					}

					if (callback.success) {
						setIsEmailVerificationEnforced(!isEmailVerificationEnforced);
						toast.success(t(`dashboard.success.${callback.success as keyof IntlMessages["dashboard"]["success"]}`));
						router.refresh();
					}
				});
		});
	}, [isEmailVerificationEnforced, router, t]);

	const handleTwoFactorAuthenticationChange = useCallback(() => {
		startTransition(() => {
			toggleTwoFactorAuthentication()
				.then((callback) => {
					if (callback.error) {
						toast.error(t(`dashboard.errors.${callback.error as keyof IntlMessages["dashboard"]["errors"]}`));
					}

					if (callback.success) {
						setIsTwoFactorAuthenticationEnforced(!isTwoFactorAuthenticationEnforced);
						toast.success(t(`dashboard.success.${callback.success as keyof IntlMessages["dashboard"]["success"]}`));
						router.refresh();
					}
				});
		});
	}, [isTwoFactorAuthenticationEnforced, router, t]);

	// const form = useForm<DashboardSecuritySettingsSchemaType>({
	// 	resolver: zodResolver(DashboardSecuritySettingsSchema),
	// 	defaultValues: {
	// 		facebook: "",
	// 		instagram: "",
	// 		tiktok: "",
	// 		youtube: "",
	// 		twitter: "",
	// 		linkedin: ""
	// 	}
	// });

	return (
		// <Form {...form}>
		// 	<form onSubmit={form.handleSubmit(data => console.log(data))} className="flex flex-col space-y-2">
		// 		<FormField
		// 			control={form.control}
		// 			name="facebook"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel>
		// 						Facebook
		// 					</FormLabel>
		// 					<FormControl>
		// 						<Input
		// 							placeholder="https://facebook.com/your-page"
		// 							startIcon={FaFacebook}
		// 							{...field}
		// 						/>
		// 					</FormControl>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>

		// 		<FormField
		// 			control={form.control}
		// 			name="instagram"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel>
		// 						Instagram
		// 					</FormLabel>
		// 					<FormControl>
		// 						<Input
		// 							placeholder="https://instagram.com/your-page"
		// 							startIcon={FaInstagram}
		// 							{...field}
		// 						/>
		// 					</FormControl>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>

		// 		<FormField
		// 			control={form.control}
		// 			name="tiktok"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel>
		// 						TikTok
		// 					</FormLabel>
		// 					<FormControl>
		// 						<Input
		// 							placeholder="https://tiktok.com/@your-page"
		// 							startIcon={FaTiktok}
		// 							{...field}
		// 						/>
		// 					</FormControl>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>

		// 		<FormField
		// 			control={form.control}
		// 			name="youtube"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel>
		// 						YouTube
		// 					</FormLabel>
		// 					<FormControl>
		// 						<Input
		// 							placeholder="https://youtube.com/@your-page"
		// 							startIcon={FaYoutube}
		// 							{...field}
		// 						/>
		// 					</FormControl>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>

		// 		<FormField
		// 			control={form.control}
		// 			name="twitter"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel>
		// 						X (Twitter)
		// 					</FormLabel>
		// 					<FormControl>
		// 						<Input
		// 							placeholder="https://x.com/your-page"
		// 							startIcon={FaXTwitter}
		// 							{...field}
		// 						/>
		// 					</FormControl>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>

		// 		<FormField
		// 			control={form.control}
		// 			name="linkedin"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel>
		// 						LinkedIn
		// 					</FormLabel>
		// 					<FormControl>
		// 						<Input
		// 							placeholder="https://linkedin.com/in/your-page"
		// 							startIcon={FaLinkedinIn}
		// 							{...field}
		// 						/>
		// 					</FormControl>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>

		// 		<div className="flex flex-row justify-end mt-2 space-x-2">
		// 			<Button type="button" variant="secondary">
		// 				{t("general.cancel")}
		// 			</Button>

		// 			<Button type="submit">
		// 				{t("general.saveChanges")}
		// 			</Button>
		// 		</div>
		// 	</form>
		// </Form>
		<div className="flex flex-col space-y-8">
			<div className="flex flex-col space-y-4">
				<h2 className="text-xl font-medium">{t("dashboard.settings.security.storeSecurity")}</h2>

				<div className="flex flex-col space-y-4">
					<Card>
						<CardContent className="flex flex-col p-6 space-y-4">
							<div className="grid items-start grid-cols-1 sm:grid-cols-2">
								<div className="flex flex-col">
									<h3 className="text-base font-medium">{t("dashboard.settings.security.lockYourStore.title")}</h3>
									<p className="text-sm text-muted-foreground">{t("dashboard.settings.security.lockYourStore.description")}</p>
								</div>
								<div>
									<Switch
										checked={isLocked}
										onCheckedChange={setIsLocked}
										disabled={isPending}
									/>
								</div>
							</div>

							{isLocked && (
								<>
									<Separator />

									<div className="grid items-start grid-cols-1 sm:grid-cols-2">
										<div className="flex flex-col">
											<h3 className="text-base font-medium">{t("dashboard.settings.security.storePassword.title")}</h3>
											<p className="text-sm text-muted-foreground">{t("dashboard.settings.security.storePassword.description")}</p>
										</div>
										<div>
											<Input
												placeholder={t("dashboard.settings.security.storePassword.placeholder")}
												startIcon={Lock}
												disabled={isPending}
											/>
										</div>
									</div>
								</>
							)}
						</CardContent>
					</Card>
				</div>
			</div>

			<Separator />

			<div className="flex flex-col space-y-4">
				<h2 className="text-xl font-medium">{t("dashboard.settings.security.accountSecurity")}</h2>

				<div className="flex flex-col space-y-4">
					<Card>
						<CardContent className="flex flex-col p-6 space-y-4">
							<div className="grid items-start grid-cols-1 sm:grid-cols-2">
								<div className="flex flex-col">
									<h3 className="text-base font-medium">{t("dashboard.settings.security.enforceEmailVerification.title")}</h3>
									<p className="text-sm text-muted-foreground">{t("dashboard.settings.security.enforceEmailVerification.description")}</p>
								</div>
								<div>
									<Switch
										checked={isEmailVerificationEnforced}
										onCheckedChange={handleEmailVerificationChange}
										disabled={isPending}
									/>
								</div>
							</div>

							<Separator />

							<div className="grid items-start grid-cols-1 sm:grid-cols-2">
								<div className="flex flex-col">
									<h3 className="text-base font-medium">{t("dashboard.settings.security.enforceTwoFactorAuthentication.title")}</h3>
									<p className="text-sm text-muted-foreground">{t("dashboard.settings.security.enforceTwoFactorAuthentication.description")}</p>
								</div>
								<div>
									<Switch
										checked={isTwoFactorAuthenticationEnforced}
										onCheckedChange={handleTwoFactorAuthenticationChange}
										disabled={isPending}
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default SecuritySettings;