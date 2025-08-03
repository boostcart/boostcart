import { forbidden } from "next/navigation";
import { auth } from "@/server/auth";

export default async function AdminLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const user = (await auth())?.user;

	if (!user || user.role !== "ADMIN") {
		return forbidden();
	}

	return <>{children}</>;
}
