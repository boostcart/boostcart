/**
 * @boostcart/auth
 *
 * Shared authentication package for BoostCart platform.
 * Uses Better Auth for authentication with Prisma adapter.
 *
 * Usage:
 * - Server: import { createAuth, type Session, type User } from "@boostcart/auth/server"
 * - Client: import { createAuthClient } from "@boostcart/auth/client"
 */

// Re-export types for convenience
export type { Session, User, AuthConfig } from "./types";
