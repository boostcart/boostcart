"use client";

import { magicLinkClient } from "better-auth/client/plugins";
import { createAuthClient as createBetterAuthClient } from "better-auth/react";

/**
 * Auth client configuration
 */
export interface AuthClientConfig {
	/**
	 * Base URL for the API (used for auth endpoints)
	 */
	baseURL: string;
}

/**
 * Create a Better Auth client for use in React components.
 *
 * @example
 * ```tsx
 * // lib/auth-client.ts
 * import { createAuthClient } from "@boostcart/auth/client";
 *
 * export const authClient = createAuthClient({
 *   baseURL: process.env.NEXT_PUBLIC_APP_URL!,
 * });
 *
 * export const { signIn, signUp, signOut, useSession } = authClient;
 * ```
 */
export function createAuthClient(config: AuthClientConfig) {
	return createBetterAuthClient({
		baseURL: config.baseURL,
		plugins: [magicLinkClient()],
	});
}

// Types are exported inline with the interface definition
