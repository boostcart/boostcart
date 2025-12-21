"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

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
