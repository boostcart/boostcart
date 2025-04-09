"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	DashboardSocialsSettingsSchema,
	DashboardSocialsSettingsSchemaType,
} from "@/schemas";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTiktok,
	FaXTwitter,
	FaYoutube,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateSocials } from "@/server/dashboard";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SocialSettings } from "@prisma/client";
import { SaveIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SocialsSettings: React.FC<{ settings: SocialSettings }> = ({
	settings,
}) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<DashboardSocialsSettingsSchemaType>({
		resolver: zodResolver(DashboardSocialsSettingsSchema),
		defaultValues: {
			facebook: settings.facebook,
			instagram: settings.instagram,
			tiktok: settings.tiktok,
			youtube: settings.youtube,
			twitter: settings.twitter,
			linkedin: settings.linkedin,
		},
	});

	const onSubmit = (data: DashboardSocialsSettingsSchemaType) => {
		startTransition(() => {
			updateSocials(data).then((callback) => {
				if (callback.error) {
					toast.error(t(`dashboard.errors.${callback.error}`));
				}

				if (callback.success) {
					toast.success(t(`dashboard.success.${callback.success}`));
					router.refresh();
				}
			});
		});
	};

	return (
		<div className="flex flex-col space-y-4">
			<h2 className="text-xl font-medium">
				{t("dashboard.settings.nav.socials")}
			</h2>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col space-y-2"
				>
					<FormField
						control={form.control}
						name="facebook"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Facebook</FormLabel>
								<FormControl>
									<Input
										placeholder="https://facebook.com/your-page"
										startIcon={FaFacebook}
										disabled={isPending}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="instagram"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Instagram</FormLabel>
								<FormControl>
									<Input
										placeholder="https://instagram.com/your-page"
										startIcon={FaInstagram}
										disabled={isPending}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="tiktok"
						render={({ field }) => (
							<FormItem>
								<FormLabel>TikTok</FormLabel>
								<FormControl>
									<Input
										placeholder="https://tiktok.com/@your-page"
										startIcon={FaTiktok}
										disabled={isPending}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="youtube"
						render={({ field }) => (
							<FormItem>
								<FormLabel>YouTube</FormLabel>
								<FormControl>
									<Input
										placeholder="https://youtube.com/@your-page"
										startIcon={FaYoutube}
										disabled={isPending}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="twitter"
						render={({ field }) => (
							<FormItem>
								<FormLabel>X (Twitter)</FormLabel>
								<FormControl>
									<Input
										placeholder="https://x.com/your-page"
										startIcon={FaXTwitter}
										disabled={isPending}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="linkedin"
						render={({ field }) => (
							<FormItem>
								<FormLabel>LinkedIn</FormLabel>
								<FormControl>
									<Input
										placeholder="https://linkedin.com/in/your-page"
										startIcon={FaLinkedinIn}
										disabled={isPending}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex flex-row justify-end mt-2 space-x-2">
						<Button
							type="button"
							variant="secondary"
							disabled={isPending}
							onClick={() => form.reset()}
						>
							{t("general.cancel")}
						</Button>

						<Button type="submit" disabled={isPending}>
							<SaveIcon />
							{t("general.saveChanges")}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default SocialsSettings;
