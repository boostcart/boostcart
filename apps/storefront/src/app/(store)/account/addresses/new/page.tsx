import { redirect } from "next/navigation";
import { getCurrentCustomer } from "@/server/auth/customer-auth";
import { getCurrentTenant } from "@/server/tenant";
import { AddressForm } from "../_components/address-form";

export default async function NewAddressPage() {
	const tenant = await getCurrentTenant();
	const session = await getCurrentCustomer();

	if (!tenant || !session) {
		redirect("/account/login");
	}

	return <AddressForm mode="create" />;
}
