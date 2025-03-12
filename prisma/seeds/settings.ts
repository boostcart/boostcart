import type { PrismaClient } from "@prisma/client";

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

  console.log("Seeding app settings...");
  const appSettings = await prisma.appSettings.create({
    data: {
      generalSettingsId: generalSettings.id,
      appearanceSettingsId: appearanceSettings.id,
      paymentSettingsId: paymentSettings.id,
      securitySettingsId: securitySettings.id,
    },
  });
  console.log("Seeding app settings completed.");

  const end = Date.now();
  console.log(`Seeding settings completed in ${end - start}ms`);

  return {
    generalSettings,
    appearanceSettings,
    paymentSettings,
    securitySettings,
    appSettings,
  };
};

export default seedSettings;
