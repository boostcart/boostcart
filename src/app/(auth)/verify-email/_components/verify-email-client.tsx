"use client";

import { sendVerificationLink, verifyEmail } from "@/server/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

import Loader from "@/components/loader";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

const VerifyEmailClient = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");
	const resend = searchParams.get("resend");
	const email = searchParams.get("email");
	const t = useTranslations();

	const handleResend = useCallback(() => {
		if (resend === "true" && email && !token) {
			sendVerificationLink(email)
				.then((callback) => {
					if (callback.error) {
						toast.error(
							t(
								`auth.errors.${callback.error as keyof IntlMessages["auth"]["errors"]}`,
							),
						);
						router.push("/");
					}

					if (callback.success) {
						toast.success(
							t(
								`auth.success.${callback.success as keyof IntlMessages["auth"]["success"]}`,
							),
						);
						router.push("/");
					}
				})
				.catch(() => {
					toast.error(t("auth.errors.something_went_wrong"));
				});
		} else if (resend === "true" && !email) {
			toast.error(t("auth.errors.email_not_provided"));
			router.push("/");
		}
	}, [resend, email, token, t, router]);

	const handleVerification = useCallback(() => {
		if (!token) {
			toast.error(t("auth.errors.email_verification_token_not_found"));
			router.push("/");
			return;
		}

		if (!resend) {
			verifyEmail(token)
				.then((callback) => {
					if (callback.error) {
						toast.error(
							t(
								`auth.errors.${callback.error as keyof IntlMessages["auth"]["errors"]}`,
							),
						);
						router.push("/");
					}

					if (callback.success) {
						toast.success(
							t(
								`auth.success.${callback.success as keyof IntlMessages["auth"]["success"]}`,
							),
						);
						router.push("/login");
					}
				})
				.catch(() => {
					toast.error(t("auth.errors.something_went_wrong"));
				});
		}
	}, [token, router, resend, t]);

	useEffect(() => {
		if (resend === "true") {
			handleResend();
		}

		handleVerification();
	}, [handleResend, handleVerification, resend]);

	return (
		<div className="flex flex-col space-y-4 items-center w-full h-screen justify-center">
			<Loader />

			<span className="text-neutral-700">{t("auth.verifyEmail.loading")}</span>
		</div>
	);
};

export default VerifyEmailClient;
