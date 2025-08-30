import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/server/api/shared";
import { db } from "@/server/db";
import { ManageAddresses } from "./_components";

export default async function AccountAddressesPage() {
	const user = await getCurrentUser();

	if (!user) {
		redirect("/signin?silent=not_logged_in");
	}

	// Fetch user's addresses
	const addresses = await db.userAddress.findMany({
		where: { userId: user.id },
		orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
	});

	return (
		<main className="flex flex-col w-full p-8 space-y-4">
			<Link href={"/account"} className="text-blue-500">
				Back to Account
			</Link>

			<h1 className="text-xl font-bold">Your addresses</h1>
			<p className="text-muted-foreground">
				Manage your addresses here. You can add, edit, or remove addresses as
				needed.
			</p>

			<ManageAddresses addresses={addresses} />
		</main>
	);
}
