import NextAuth from "next-auth";
import { cache } from "react";

import { authConfig } from "./config";

// @ts-expect-error This works but TypeScript is complaining about the type.
const { auth: uncachedAuth, handlers, signIn, signOut } = NextAuth(authConfig);

const auth = cache(uncachedAuth);

export { auth, handlers, signIn, signOut };
