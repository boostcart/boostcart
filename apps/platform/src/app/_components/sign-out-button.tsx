"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

export function SignOutButton() {
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		router.push("/signin");
	};

	return (
		<button
			type="button"
			onClick={handleSignOut}
			className="text-blue-500 text-left"
		>
			Sign out
		</button>
	);
}
