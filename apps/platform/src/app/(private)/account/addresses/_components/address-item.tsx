"use client";

import type { UserAddress } from "@boostcart/database";
import { Button } from "@/components/ui/button";

export function AddressItem({
	address,
	onEdit,
	onDelete,
}: {
	address: UserAddress;
	onEdit: () => void;
	onDelete: () => void;
}) {
	return (
		<div className="flex flex-col gap-2">
			<div className="text-sm">
				<div className="flex items-center gap-2">
					<span className="font-medium">{address.name || "Address"}</span>
					{address.isDefault ? (
						<span className="text-xs text-green-600">Default</span>
					) : null}
				</div>
				<div>
					{address.firstName} {address.lastName}
				</div>
				<div>{address.phone}</div>
				{address.email ? <div>{address.email}</div> : null}
				<div>
					{address.addressLine1}
					{address.addressLine2 ? `, ${address.addressLine2}` : ""},{" "}
					{address.city}, {address.postcode}, {address.country}
				</div>
				{address.company ? <div>Company: {address.company}</div> : null}
				{address.vatNumber ? <div>VAT: {address.vatNumber}</div> : null}
			</div>

			<div className="flex items-center gap-2">
				<Button size="sm" variant="secondary" onClick={onEdit}>
					Edit
				</Button>
				<Button size="sm" variant="destructive" onClick={onDelete}>
					Remove
				</Button>
			</div>
		</div>
	);
}
