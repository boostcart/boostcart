import { Resend } from "resend";
import { env } from "@/env";

const resend = new Resend(env.RESEND_API_KEY);

/**
 * NOTE: Password reset emails are now handled by better-auth's sendResetPassword callback
 * in the auth configuration (src/server/auth/auth.ts).
 *
 * The custom sendPasswordReset function has been removed as it was causing double-hashing issues.
 * Better-auth handles password hashing internally with scrypt.
 */

// Export resend instance for other email needs
export { resend };
