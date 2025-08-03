import { redirect } from "next/navigation";
import { auth } from "@/server/auth";

export default async function UnauthenticatedLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const isUserLoggedIn = await auth();

	if (isUserLoggedIn?.user) {
		redirect("/?silent=already_logged_in");
	}

	return <>{children}</>;
}
