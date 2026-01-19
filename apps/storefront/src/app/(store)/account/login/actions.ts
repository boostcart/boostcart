"use server";

import { cookies } from "next/headers";
import { loginCustomer as loginCustomerAuth } from "@/server/auth/customer-auth";
import { getCurrentTenant } from "@/server/tenant";

interface LoginResult {
	success: boolean;
	error?: string;
}

export async function loginCustomer(data: {
	email: string;
	password: string;
}): Promise<LoginResult> {
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return { success: false, error: "Store not found" };
	}

	const result = await loginCustomerAuth({
		tenantId: tenant.id,
		email: data.email,
		password: data.password,
	});

	if (!result.success) {
		return { success: false, error: result.error };
	}

	// Set cookies
	const cookieStore = await cookies();

	// biome-ignore lint/style/noNonNullAssertion: its' working just fine
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

	return { success: true };
}
