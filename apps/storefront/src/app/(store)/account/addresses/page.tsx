import { redirect } from "next/navigation";
import { getCurrentCustomer } from "@/server/auth/customer-auth";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";
import { AddressList } from "./_components/address-list";

export default async function AddressesPage() {
	const tenant = await getCurrentTenant();
	const session = await getCurrentCustomer();

	if (!tenant || !session) {
		redirect("/account/login");
	}

	const addresses = await db.customerAddress.findMany({
		where: {
			customerId: session.customerId,
		},
		orderBy: [{ isDefault: "desc" }, { createdAt: "desc" }],
	});

	return <AddressList addresses={addresses} />;
}
