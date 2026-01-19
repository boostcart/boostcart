"use server";

import { cookies } from "next/headers";
import { sendVerificationEmail } from "@/server/actions/email-verification";
import { registerCustomer as registerCustomerAuth } from "@/server/auth/customer-auth";
import { getCurrentTenant } from "@/server/tenant";

interface RegisterResult {
	success: boolean;
	error?: string;
}

export async function registerCustomer(data: {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}): Promise<RegisterResult> {
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return { success: false, error: "Store not found" };
	}

	const result = await registerCustomerAuth({
		tenantId: tenant.id,
		email: data.email,
		password: data.password,
		firstName: data.firstName,
		lastName: data.lastName,
	});

	if (!result.success) {
		return { success: false, error: result.error };
	}

	// Set cookies
	const cookieStore = await cookies();

	// biome-ignore lint/style/noNonNullAssertion: it's working just fine
	cookieStore.set("bc_customer_access", result.accessToken!, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 15 * 60, // 15 minutes
	});

	// biome-ignore lint/style/noNonNullAssertion: it's working just fine
	cookieStore.set("bc_customer_refresh", result.refreshToken!, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	});

	// Send verification email (async, don't block)
	if (result.customer?.id) {
		sendVerificationEmail(result.customer.id).catch((error) => {
			console.error("Failed to send verification email:", error);
		});
	}

	return { success: true };
}
