import { getCurrentCustomer } from "@/server/auth/customer-auth";
import { getCurrentTenant } from "@/server/tenant";
import { StoreBanner } from "./_components/store-banner";
import { StoreFooter } from "./_components/store-footer";
import { StoreHeader } from "./_components/store-header";

export default async function StoreLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const tenant = await getCurrentTenant();
	const customer = await getCurrentCustomer();

	if (!tenant) {
		return null; // Layout handles this in root
	}

	const { themeConfig } = tenant;

	return (
		<div className="flex min-h-screen flex-col">
			{themeConfig.showBanner && themeConfig.bannerText && (
				<StoreBanner
					text={themeConfig.bannerText}
					backgroundColor={themeConfig.bannerBackgroundColor}
					textColor={themeConfig.bannerTextColor}
				/>
			)}
			<StoreHeader
				tenant={tenant}
				customer={
					customer
						? {
								firstName: customer.firstName,
								lastName: customer.lastName,
								email: customer.email,
							}
						: null
				}
			/>
			<main className="flex-1">{children}</main>
			<StoreFooter tenant={tenant} />
		</div>
	);
}
