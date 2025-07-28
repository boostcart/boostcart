import Link from "next/link";
import { auth } from "@/server/auth";

export default async function HomePage() {
	const user = (await auth())?.user;

	return (
		<main className="p-8">
			{user ? (
				<div className="flex flex-col space-y-2">
					<h1>Welcome {user.name}</h1>
					<p>Email: {user.email}</p>
					<p>Role: {user.role}</p>

					<Link href={"/api/auth/signout"} className="text-blue-500">
						Sign out
					</Link>

					{user.role === "ADMIN" && (
						<Link href={"/dashboard"} className="text-blue-500">
							Admin Dashboard
						</Link>
					)}
				</div>
			) : (
				<Link href={"/api/auth/signin"} className="text-blue-500">
					Sign in
				</Link>
			)}
		</main>
	);
}
