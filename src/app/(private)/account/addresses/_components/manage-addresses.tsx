"use client";

import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { UserAddress } from "@/generated/prisma/client";
import {
	createAddress,
	deleteAddress,
	updateAddress,
} from "@/server/api/private/addresses";
import { AddressForm } from "./address-form";
import { AddressItem } from "./address-item";

type AddressDraft = {
	id?: string;
	name?: string;
	firstName: string;
	lastName: string;
	phone: string;
	email?: string | "";
	company?: string;
	vatNumber?: string;
	country: string;
	city: string;
	postcode: string;
	addressLine1: string;
	addressLine2?: string;
	isDefault?: boolean;
};

interface ManageAddressesProps {
	addresses: UserAddress[];
}

export function ManageAddresses({ addresses }: ManageAddressesProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const [editing, setEditing] = useState<UserAddress | null>(null);
	const [isFormOpen, setIsFormOpen] = useState(false);

	const onCreate = (values: Parameters<typeof createAddress>[0]) => {
		startTransition(() => {
			createAddress(values).then((res) => {
				if (res.success) {
					router.refresh();
					setIsFormOpen(false);
					toast.success("Address added.");
				} else if (res.error) {
					toast.error(res.error);
				}
			});
		});
	};

	const onUpdate = (values: Parameters<typeof updateAddress>[0]) => {
		startTransition(() => {
			updateAddress(values).then((res) => {
				if (res.success) {
					router.refresh();
					setEditing(null);
					toast.success("Address updated.");
				} else if (res.error) {
					toast.error(res.error);
				}
			});
		});
	};

	const onDelete = (id: string) => {
		startTransition(() => {
			deleteAddress({ id }).then((res) => {
				if (res.success) {
					router.refresh();
					toast.success("Address removed.");
				} else if (res.error) {
					toast.error(res.error);
				}
			});
		});
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<h2 className="font-medium">Saved addresses</h2>
				<Button
					onClick={() => setIsFormOpen((v) => !v)}
					disabled={isPending}
					variant="secondary"
				>
					{isPending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
					{isFormOpen ? "Close" : "Add new"}
				</Button>
			</div>

			{isFormOpen && (
				<div className="rounded border p-4">
					<AddressForm onSubmit={onCreate} isLoading={isPending} />
				</div>
			)}

			<div className="flex flex-col gap-3">
				{addresses.length === 0 && (
					<p className="text-sm text-muted-foreground">No addresses yet.</p>
				)}
				{addresses.map((addr) => (
					<div key={addr.id} className="rounded border p-4">
						{editing?.id === addr.id ? (
							<AddressForm
								isLoading={isPending}
								initialValues={{
									id: addr.id,
									name: addr.name ?? undefined,
									firstName: addr.firstName,
									lastName: addr.lastName,
									phone: addr.phone,
									email: addr.email ?? undefined,
									company: addr.company ?? undefined,
									vatNumber: addr.vatNumber ?? undefined,
									country: addr.country,
									city: addr.city,
									postcode: addr.postcode,
									addressLine1: addr.addressLine1,
									addressLine2: addr.addressLine2 ?? undefined,
									isDefault: addr.isDefault,
								}}
								onSubmit={(v: AddressDraft) => onUpdate({ ...v, id: addr.id })}
								onCancel={() => setEditing(null)}
							/>
						) : (
							<AddressItem
								address={addr}
								onEdit={() => setEditing(addr)}
								onDelete={() => onDelete(addr.id)}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
