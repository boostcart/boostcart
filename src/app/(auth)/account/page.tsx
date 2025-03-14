import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AccountPage() {
	const session = await auth();

	if (!session) {
		return redirect("/login");
	}

	const user = session.user;

	return (
		<div>{user.name} - {user.role}</div>
	)
}