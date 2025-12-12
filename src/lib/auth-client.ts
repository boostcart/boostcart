import { createAuthClient } from "better-auth/react";
import { cache } from "react";

const { useSession: uncachedSession, signIn, signUp, signOut } = createAuthClient({
	/** The base URL of the server (optional if you're using the same domain) */
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
});

const session = cache(uncachedSession);

export { session, signIn, signUp, signOut };
