import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/server/api/shared";

export default async function AccountPage() {
	const user = await getCurrentUser();

	if (!user) {
		redirect("/signin?silent=not_logged_in");
	}

	return (
		<main className="flex flex-col w-full p-8 space-y-8">
			<h1 className="text-lg font-bold">Account Settings</h1>

			<div className="flex flex-col space-y-2">
				<p>Name: {user.name}</p>
				<p>Email: {user.email}</p>
				<p>Role: {user.role}</p>

				<Link href={"/"} className="text-blue-500">
					Go home
				</Link>

				<Link href={"/account/security"} className="text-blue-500">
					Go to security settings
				</Link>

				<Link href={"/account/settings"} className="text-blue-500">
					Go to settings
				</Link>

				<Link href={"/api/auth/signout"} className="text-blue-500">
					Sign out
				</Link>

				{user.role !== "USER" && (
					<Link href={"/dashboard"} className="text-blue-500">
						Admin Dashboard
					</Link>
				)}
			</div>
		</main>
	);
}
