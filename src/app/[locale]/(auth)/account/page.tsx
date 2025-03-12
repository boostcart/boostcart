import { getCurrentUser } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function AccountPage() {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		redirect("/login");
	}

	return (
		<div>{currentUser.name} - {currentUser.role}</div>
	)
}