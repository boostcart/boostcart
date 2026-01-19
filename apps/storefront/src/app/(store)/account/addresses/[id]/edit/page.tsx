import { notFound, redirect } from "next/navigation";
import { getCurrentCustomer } from "@/server/auth/customer-auth";
import { getCurrentTenant } from "@/server/tenant";
import { getAddress } from "../../../_actions/addresses";
import { AddressForm } from "../../_components/address-form";

interface EditAddressPageProps {
	params: Promise<{ id: string }>;
}

export default async function EditAddressPage({
	params,
}: EditAddressPageProps) {
	const tenant = await getCurrentTenant();
	const session = await getCurrentCustomer();

	if (!tenant || !session) {
		redirect("/account/login");
	}

	const { id } = await params;
	const address = await getAddress(id);

	if (!address) {
		notFound();
	}

	return (
		<AddressForm
			mode="edit"
			address={{
				id: address.id,
				firstName: address.firstName,
				lastName: address.lastName,
				company: address.company,
				address1: address.address1,
				address2: address.address2,
				city: address.city,
				province: address.province,
				country: address.country,
				postalCode: address.postalCode,
				phone: address.phone,
				isDefault: address.isDefault,
			}}
		/>
	);
}
