import NextAuth from "next-auth";
import authConfig from "../auth.config";

export const { auth: middleware } = NextAuth(authConfig);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params and api/trpc routes
    "/((?!_next|api|trpc|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|avif|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    // mine
    "/:path*",
    "/dashboard/:path*",
  ],
};
