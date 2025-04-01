"use server";

import {
  DashboardGeneralSettingsSchema,
  DashboardGeneralSettingsSchemaType,
  DashboardSocialsSettingsSchema,
  DashboardSocialsSettingsSchemaType,
} from "@/schemas";

import { getCurrentUser } from "@/lib/actions";
import { prisma } from "@/lib/db";
import { utapi } from "./uploadthing";

export const getGeneralSettings = async () => {
  const settings = await prisma.generalSettings.findFirst();

  if (!settings) return { error: "no_settings" };

  return settings;
};

export const getSocialSettings = async () => {
  const settings = await prisma.socialSettings.findFirst();

  if (!settings) return { error: "no_settings" };

  return settings;
};

export const getAppearanceSettings = async () => {
  const settings = await prisma.appearanceSettings.findFirst();

  if (!settings) return { error: "no_settings" };

  return settings;
};

export const getPaymentSettings = async () => {
  const settings = await prisma.paymentSettings.findFirst();

  if (!settings) return { error: "no_settings" };

  return settings;
};

export const getSecuritySettings = async () => {
  const settings = await prisma.securitySettings.findFirst();

  if (!settings) return { error: "no_settings" };

  return settings;
};

export const updateGeneral = async (
  data: DashboardGeneralSettingsSchemaType
) => {
  if (!data) return { error: "no_data" };

  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const validatedFields = DashboardGeneralSettingsSchema.safeParse(data);

  if (!validatedFields.success) return { error: "invalid_data" };

  const { name, url, logo, favicon } = validatedFields.data;

  const settings = await prisma.generalSettings.findFirst();

  if (!settings) return { error: "no_settings" };

  try {
    await prisma.generalSettings.update({
      where: { id: settings.id },
      data: {
        appName: name,
        appUrl: url,
        appLogo: logo,
        appFavicon: favicon,
      },
    });

    return { success: "general_updated" };
  } catch {
    return { error: "something_went_wrong" };
  }
};

export const updateSocials = async (
  data: DashboardSocialsSettingsSchemaType
) => {
  if (!data) return { error: "no_data" };

  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const validatedFields = DashboardSocialsSettingsSchema.safeParse(data);

  if (!validatedFields.success) return { error: "invalid_data" };

  const settings = await prisma.socialSettings.findFirst();

  if (!settings) return { error: "no_settings" };

  try {
    await prisma.socialSettings.update({
      where: { id: settings.id },
      data: validatedFields.data,
    });

    return { success: "socials_updated" };
  } catch {
    return { error: "something_went_wrong" };
  }
};

export const toggleEmailVerification = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const settings = await prisma.securitySettings.findFirst();

  if (!settings) return { error: "no_settings" };

  try {
    await prisma.securitySettings.update({
      where: { id: settings.id },
      data: {
        requireVerifiedEmail: !settings.requireVerifiedEmail,
      },
    });

    return {
      success: !settings.requireVerifiedEmail
        ? "email_verification_enforced"
        : "email_verification_disabled",
    };
  } catch {
    return { error: "something_went_wrong" };
  }
};

export const toggleTwoFactorAuthentication = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "not_logged_in" };

  if (currentUser.role === "USER") return { error: "unauthorized" };

  const settings = await prisma.securitySettings.findFirst();

  if (!settings) return { error: "no_settings" };

  try {
    await prisma.securitySettings.update({
      where: { id: settings.id },
      data: {
        requireVerifiedEmail: !settings.requireTwoFactor,
      },
    });

    return {
      success: !settings.requireTwoFactor
        ? "two_factor_enforced"
        : "two_factor_disabled",
    };
  } catch {
    return { error: "something_went_wrong" };
  }
};

export const deleteFiles = async (fileId: string | string[]) => {
  const response = await utapi.deleteFiles(fileId);

  if (response.success) {
    return { success: true };
  }

  return { success: false };
};
