import type { PrismaClient } from "@/app/generated/prisma/client";

const seedSettings = async (prisma: PrismaClient) => {
	const start = Date.now();
	console.log("Seeding settings...");

	console.log("Seeding general settings...");
	const generalSettings = await prisma.generalSettings.create({
		data: {
			appName: "BoostCart",
			appUrl: "https://boostcart.dev",
			appLogo: "",
			appFavicon: "",
			maintenance: false,
		},
	});
	console.log("Seeding general settings completed.");

	console.log("Seeding social settings...");
	const socialSettings = await prisma.socialSettings.create({
		data: {},
	});
	console.log("Seeding social settings completed.");

	console.log("Seeding appearance settings...");
	const appearanceSettings = await prisma.appearanceSettings.create({
		data: {},
	});
	console.log("Seeding appearance settings completed.");

	console.log("Seeding payment settings...");
	const paymentSettings = await prisma.paymentSettings.create({
		data: {
			currencies: [
				{
					code: "BGN",
					symbol: "лв",
					default: true,
				},
				{
					code: "EUR",
					symbol: "€",
					default: false,
				},
			],
			cashOnDelivery: true,
		},
	});
	console.log("Seeding payment settings completed.");

	console.log("Seeding security settings...");
	const securitySettings = await prisma.securitySettings.create({
		data: { appPasswordProtected: false },
	});
	console.log("Seeding security settings completed.");

	const end = Date.now();
	console.log(`Seeding settings completed in ${end - start}ms`);

	return {
		generalSettings,
		socialSettings,
		appearanceSettings,
		paymentSettings,
		securitySettings,
	};
};

export default seedSettings;
