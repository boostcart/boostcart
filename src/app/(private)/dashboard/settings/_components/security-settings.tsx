"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useCallback, useState, useTransition } from "react";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
	toggleEmailVerification,
	toggleTwoFactorAuthentication,
} from "@/server/dashboard";
import type { SecuritySettings } from "@prisma/client";
import { Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SecuritySettings: React.FC<{ settings: SecuritySettings }> = ({
	settings,
}) => {
	const t = useTranslations();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [isLocked, setIsLocked] = useState<boolean>(true);
	const [isEmailVerificationEnforced, setIsEmailVerificationEnforced] =
		useState<boolean>(settings.requireVerifiedEmail);
	const [
		isTwoFactorAuthenticationEnforced,
		setIsTwoFactorAuthenticationEnforced,
	] = useState<boolean>(settings.requireTwoFactor);

	const handleEmailVerificationChange = useCallback(() => {
		startTransition(() => {
			toggleEmailVerification().then((callback) => {
				if (callback.error) {
					toast.error(
						t(
							`dashboard.errors.${callback.error as keyof IntlMessages["dashboard"]["errors"]}`,
						),
					);
				}

				if (callback.success) {
					setIsEmailVerificationEnforced(!isEmailVerificationEnforced);
					toast.success(
						t(
							`dashboard.success.${callback.success as keyof IntlMessages["dashboard"]["success"]}`,
						),
					);
					router.refresh();
				}
			});
		});
	}, [isEmailVerificationEnforced, router, t]);

	const handleTwoFactorAuthenticationChange = useCallback(() => {
		startTransition(() => {
			toggleTwoFactorAuthentication().then((callback) => {
				if (callback.error) {
					toast.error(
						t(
							`dashboard.errors.${callback.error as keyof IntlMessages["dashboard"]["errors"]}`,
						),
					);
				}

				if (callback.success) {
					setIsTwoFactorAuthenticationEnforced(
						!isTwoFactorAuthenticationEnforced,
					);
					toast.success(
						t(
							`dashboard.success.${callback.success as keyof IntlMessages["dashboard"]["success"]}`,
						),
					);
					router.refresh();
				}
			});
		});
	}, [isTwoFactorAuthenticationEnforced, router, t]);

	return (
		<div className="flex flex-col space-y-8">
			<div className="flex flex-col space-y-4">
				<h2 className="text-xl font-medium">
					{t("dashboard.settings.security.storeSecurity")}
				</h2>

				<div className="flex flex-col space-y-4">
					<Card>
						<CardContent className="flex flex-col p-6 space-y-4">
							<div className="grid items-start grid-cols-1 sm:grid-cols-2">
								<div className="flex flex-col">
									<h3 className="text-base font-medium">
										{t("dashboard.settings.security.lockYourStore.title")}
									</h3>
									<p className="text-sm text-muted-foreground">
										{t("dashboard.settings.security.lockYourStore.description")}
									</p>
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
											<h3 className="text-base font-medium">
												{t("dashboard.settings.security.storePassword.title")}
											</h3>
											<p className="text-sm text-muted-foreground">
												{t(
													"dashboard.settings.security.storePassword.description",
												)}
											</p>
										</div>
										<div>
											<Input
												placeholder={t(
													"dashboard.settings.security.storePassword.placeholder",
												)}
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
				<h2 className="text-xl font-medium">
					{t("dashboard.settings.security.accountSecurity")}
				</h2>

				<div className="flex flex-col space-y-4">
					<Card>
						<CardContent className="flex flex-col p-6 space-y-4">
							<div className="grid items-start grid-cols-1 sm:grid-cols-2">
								<div className="flex flex-col">
									<h3 className="text-base font-medium">
										{t(
											"dashboard.settings.security.enforceEmailVerification.title",
										)}
									</h3>
									<p className="text-sm text-muted-foreground">
										{t(
											"dashboard.settings.security.enforceEmailVerification.description",
										)}
									</p>
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
									<h3 className="text-base font-medium">
										{t(
											"dashboard.settings.security.enforceTwoFactorAuthentication.title",
										)}
									</h3>
									<p className="text-sm text-muted-foreground">
										{t(
											"dashboard.settings.security.enforceTwoFactorAuthentication.description",
										)}
									</p>
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
	);
};

export default SecuritySettings;
