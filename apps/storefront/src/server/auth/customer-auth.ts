"use server";

import { compare, hash } from "bcryptjs";
import { type JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { env } from "@/env";
import { db } from "@/server/db";

// JWT configuration
const JWT_SECRET = new TextEncoder().encode(env.JWT_SECRET);
const ACCESS_TOKEN_EXPIRY = "15m"; // 15 minutes
const REFRESH_TOKEN_EXPIRY = "30d"; // 30 days
const COOKIE_NAME = "customer_session";

interface CustomerJWTPayload extends JWTPayload {
	customerId: string;
	tenantId: string;
	email: string;
	type: "access" | "refresh";
}

interface CustomerSession {
	id: string;
	customerId: string;
	email: string;
	firstName: string | null;
	lastName: string | null;
	tenantId: string;
}

// ============================================================================
// TOKEN MANAGEMENT
// ============================================================================

async function createAccessToken(customer: {
	id: string;
	email: string;
	tenantId: string;
}): Promise<string> {
	return new SignJWT({
		customerId: customer.id,
		tenantId: customer.tenantId,
		email: customer.email,
		type: "access",
	})
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime(ACCESS_TOKEN_EXPIRY)
		.sign(JWT_SECRET);
}

async function createRefreshToken(customer: {
	id: string;
	email: string;
	tenantId: string;
}): Promise<string> {
	return new SignJWT({
		customerId: customer.id,
		tenantId: customer.tenantId,
		email: customer.email,
		type: "refresh",
	})
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime(REFRESH_TOKEN_EXPIRY)
		.sign(JWT_SECRET);
}

async function verifyToken(token: string): Promise<CustomerJWTPayload | null> {
	try {
		const { payload } = await jwtVerify(token, JWT_SECRET);
		return payload as CustomerJWTPayload;
	} catch {
		return null;
	}
}

async function setSessionCookie(refreshToken: string): Promise<void> {
	const cookieStore = await cookies();
	cookieStore.set(COOKIE_NAME, refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		maxAge: 30 * 24 * 60 * 60, // 30 days
		path: "/",
	});
}

async function clearSessionCookie(): Promise<void> {
	const cookieStore = await cookies();
	cookieStore.delete(COOKIE_NAME);
}

// ============================================================================
// AUTHENTICATION ACTIONS
// ============================================================================

interface RegisterInput {
	tenantId: string;
	email: string;
	password: string;
	firstName?: string;
	lastName?: string;
	acceptsMarketing?: boolean;
}

interface RegisterResult {
	success: boolean;
	error?: string;
	accessToken?: string;
	refreshToken?: string;
	customer?: {
		id: string;
		email: string;
		firstName: string | null;
		lastName: string | null;
	};
}

export async function registerCustomer(
	input: RegisterInput,
): Promise<RegisterResult> {
	try {
		const tenantId = input.tenantId;

		// Check if customer already exists for this store
		const existing = await db.customer.findFirst({
			where: {
				email: input.email,
				tenantId: tenantId,
			},
		});

		if (existing) {
			return {
				success: false,
				error: "An account with this email already exists",
			};
		}

		// Hash password
		const hashedPassword = await hash(input.password, 12);

		// Create customer
		const customer = await db.customer.create({
			data: {
				email: input.email,
				password: hashedPassword,
				firstName: input.firstName || null,
				lastName: input.lastName || null,
				acceptsMarketing: input.acceptsMarketing ?? false,
				tenantId: tenantId,
			},
		});

		// Create tokens
		const accessToken = await createAccessToken(customer);
		const refreshToken = await createRefreshToken(customer);

		// Store refresh token in database
		await db.customerSession.create({
			data: {
				customerId: customer.id,
				token: refreshToken,
				expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
			},
		});

		// Set cookie
		await setSessionCookie(refreshToken);

		return {
			success: true,
			accessToken,
			refreshToken,
			customer: {
				id: customer.id,
				email: customer.email,
				firstName: customer.firstName,
				lastName: customer.lastName,
			},
		};
	} catch (error) {
		console.error("Registration error:", error);
		return {
			success: false,
			error: "Registration failed. Please try again.",
		};
	}
}

interface LoginInput {
	tenantId: string;
	email: string;
	password: string;
}

interface LoginResult {
	success: boolean;
	error?: string;
	accessToken?: string;
	refreshToken?: string;
	customer?: {
		id: string;
		email: string;
		firstName: string | null;
		lastName: string | null;
	};
}

export async function loginCustomer(input: LoginInput): Promise<LoginResult> {
	try {
		const tenantId = input.tenantId;

		// Find customer
		const customer = await db.customer.findFirst({
			where: {
				email: input.email,
				tenantId: tenantId,
			},
		});

		if (!customer) {
			return {
				success: false,
				error: "Invalid email or password",
			};
		}

		if (!customer.isActive) {
			return {
				success: false,
				error: "Your account has been deactivated",
			};
		}

		// Verify password
		const isValid = await compare(input.password, customer.password);

		if (!isValid) {
			return {
				success: false,
				error: "Invalid email or password",
			};
		}

		// Create tokens
		const accessToken = await createAccessToken(customer);
		const refreshToken = await createRefreshToken(customer);

		// Store refresh token in database
		await db.customerSession.create({
			data: {
				customerId: customer.id,
				token: refreshToken,
				expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
			},
		});

		// Set cookie
		await setSessionCookie(refreshToken);

		return {
			success: true,
			accessToken,
			refreshToken,
			customer: {
				id: customer.id,
				email: customer.email,
				firstName: customer.firstName,
				lastName: customer.lastName,
			},
		};
	} catch (error) {
		console.error("Login error:", error);
		return {
			success: false,
			error: "Login failed. Please try again.",
		};
	}
}

export async function logoutCustomer(
	sessionId?: string,
): Promise<{ success: boolean }> {
	try {
		if (sessionId) {
			// Delete specific session
			await db.customerSession
				.delete({
					where: { id: sessionId },
				})
				.catch(() => {
					// Session might not exist, that's ok
				});
		} else {
			const cookieStore = await cookies();
			const refreshToken = cookieStore.get(COOKIE_NAME)?.value;

			if (refreshToken) {
				// Delete session from database
				await db.customerSession.deleteMany({
					where: { token: refreshToken },
				});
			}
		}

		// Clear cookie
		await clearSessionCookie();

		return { success: true };
	} catch (error) {
		console.error("Logout error:", error);
		return { success: true }; // Always return success for logout
	}
}

interface RefreshResult {
	success: boolean;
	accessToken?: string;
	error?: string;
}

export async function refreshAccessToken(): Promise<RefreshResult> {
	try {
		const cookieStore = await cookies();
		const refreshToken = cookieStore.get(COOKIE_NAME)?.value;

		if (!refreshToken) {
			return { success: false, error: "No session found" };
		}

		// Verify refresh token
		const payload = await verifyToken(refreshToken);

		if (!payload || payload.type !== "refresh") {
			await clearSessionCookie();
			return { success: false, error: "Invalid session" };
		}

		// Check if session exists in database
		const session = await db.customerSession.findFirst({
			where: {
				token: refreshToken,
				expiresAt: { gt: new Date() },
			},
			include: {
				customer: true,
			},
		});

		if (!session || !session.customer.isActive) {
			await clearSessionCookie();
			return { success: false, error: "Session expired" };
		}

		// Update last active
		await db.customerSession.update({
			where: { id: session.id },
			data: { lastActiveAt: new Date() },
		});

		// Create new access token
		const accessToken = await createAccessToken(session.customer);

		return { success: true, accessToken };
	} catch (error) {
		console.error("Refresh error:", error);
		return { success: false, error: "Session refresh failed" };
	}
}

// ============================================================================
// SESSION HELPERS
// ============================================================================

export async function getCurrentCustomer(): Promise<CustomerSession | null> {
	try {
		const cookieStore = await cookies();
		const refreshToken = cookieStore.get(COOKIE_NAME)?.value;

		if (!refreshToken) {
			return null;
		}

		// Verify refresh token
		const payload = await verifyToken(refreshToken);

		if (!payload || payload.type !== "refresh") {
			return null;
		}

		// Get session from database
		const session = await db.customerSession.findFirst({
			where: {
				token: refreshToken,
				expiresAt: { gt: new Date() },
			},
			include: {
				customer: {
					select: {
						id: true,
						email: true,
						firstName: true,
						lastName: true,
						tenantId: true,
						isActive: true,
					},
				},
			},
		});

		if (!session || !session.customer.isActive) {
			return null;
		}

		return {
			id: session.id,
			customerId: session.customer.id,
			email: session.customer.email,
			firstName: session.customer.firstName,
			lastName: session.customer.lastName,
			tenantId: session.customer.tenantId,
		};
	} catch {
		return null;
	}
}

export async function requireCustomer(): Promise<CustomerSession> {
	const customer = await getCurrentCustomer();

	if (!customer) {
		throw new Error("Unauthorized");
	}

	return customer;
}

// ============================================================================
// PASSWORD RESET
// ============================================================================

export async function requestPasswordReset(
	tenantId: string,
	email: string,
): Promise<{ success: boolean }> {
	try {
		const customer = await db.customer.findFirst({
			where: {
				email,
				tenantId,
			},
		});

		// Always return success to prevent email enumeration
		if (!customer) {
			return { success: true };
		}

		// TODO: Generate reset token and send email
		// For now, just log
		console.log(`Password reset requested for customer: ${customer.id}`);

		return { success: true };
	} catch {
		return { success: true };
	}
}

export async function resetPassword(
	_token: string,
	_newPassword: string,
): Promise<{ success: boolean; error?: string }> {
	// TODO: Implement password reset with token verification
	return { success: false, error: "Not implemented yet" };
}
