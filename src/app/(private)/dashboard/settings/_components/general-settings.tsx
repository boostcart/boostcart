"use client";

import { DashboardGeneralSettingsSchema, DashboardGeneralSettingsSchemaType } from "@/schemas";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import type { GeneralSettings } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { updateGeneral } from "@/server/dashboard";
import { toast } from "sonner";
import { SaveIcon } from "lucide-react";

const GeneralSettings: React.FC<{ settings: GeneralSettings }> = ({ settings }) => {
	const t = useTranslations();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const form = useForm<DashboardGeneralSettingsSchemaType>({
		resolver: zodResolver(DashboardGeneralSettingsSchema),
		defaultValues: {
			name: settings.appName,
			url: settings.appUrl,
			logo: settings.appLogo,
			favicon: settings.appFavicon
		}
	});

	const onSubmit = (data: DashboardGeneralSettingsSchemaType) => {
		startTransition(() => {
			updateGeneral(data)
				.then((callback) => {
					if (callback.error) {
						toast.error(t(`dashboard.errors.${callback.error}`));
					}

					if (callback.success) {
						toast.success(t(`dashboard.success.${callback.success}`));
						router.refresh();
					}
				});
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-2">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{t("general.name")}
							</FormLabel>
							<FormControl>
								<Input
									placeholder="BoostCart"
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormDescription>
								{t("dashboard.settings.general.appName.description")}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="url"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{t("general.url")}
							</FormLabel>
							<FormControl>
								<Input
									placeholder="https://boostcart.dev"
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormDescription>
								{t("dashboard.settings.general.appUrl.description")}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* <FormField
					control={form.control}
					name="logo"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{t("general.logo")}
							</FormLabel>
							<FormDescription>
								{t("dashboard.settings.general.logo.description")}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="favicon"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{t("general.favicon")}
							</FormLabel>
							<FormControl>
							</FormControl>
							<FormDescription>
								{t("dashboard.settings.general.favicon.description")}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/> */}

				<div className="flex flex-row justify-end mt-2 space-x-2">
					<Button
						type="button"
						variant="secondary"
						disabled={isPending}
						onClick={() => form.reset()}
					>
						{t("general.cancel")}
					</Button>

					<Button
						type="submit"
						disabled={isPending}
					>
						<SaveIcon />
						{t("general.saveChanges")}
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default GeneralSettings;