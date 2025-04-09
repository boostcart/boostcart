"use client";

import PrivateNotFound from "@/app/(private)/not-found";
import PublicNotFound from "@/app/(public)/not-found";
import { usePathname } from "next/navigation";

export default function NotFound() {
	const pathname = usePathname();

	if (pathname.includes("/dashboard")) {
		return <PrivateNotFound />;
	}

	return <PublicNotFound />;
}
