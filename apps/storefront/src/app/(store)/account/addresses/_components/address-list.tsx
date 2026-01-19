"use client";

import {
	ArrowLeft,
	Loader2,
	MapPin,
	MoreVertical,
	Pencil,
	Plus,
	Star,
	Trash2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteAddress, setDefaultAddress } from "../../_actions/addresses";

interface Address {
	id: string;
	firstName: string;
	lastName: string;
	company: string | null;
	address1: string;
	address2: string | null;
	city: string;
	province: string | null;
	country: string;
	postalCode: string;
	phone: string | null;
	isDefault: boolean;
}

interface AddressListProps {
	addresses: Address[];
}

export function AddressList({ addresses }: AddressListProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [addressToDelete, setAddressToDelete] = useState<string | null>(null);

	const handleSetDefault = (addressId: string) => {
		startTransition(async () => {
			const result = await setDefaultAddress(addressId);
			if (result.success) {
				toast.success("Default address updated");
				router.refresh();
			} else {
				toast.error(result.error || "Failed to update default address");
			}
		});
	};

	const handleDelete = (addressId: string) => {
		setAddressToDelete(addressId);
		setDeleteDialogOpen(true);
	};

	const confirmDelete = () => {
		if (!addressToDelete) return;

		startTransition(async () => {
			const result = await deleteAddress(addressToDelete);
			if (result.success) {
				toast.success("Address deleted");
				router.refresh();
			} else {
				toast.error(result.error || "Failed to delete address");
			}
			setDeleteDialogOpen(false);
			setAddressToDelete(null);
		});
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Link href="/account">
						<Button variant="ghost" size="icon">
							<ArrowLeft className="h-4 w-4" />
						</Button>
					</Link>
					<div>
						<h1 className="text-2xl font-bold">My Addresses</h1>
						<p className="text-sm text-muted-foreground">
							{addresses.length} address{addresses.length !== 1 ? "es" : ""}{" "}
							saved
						</p>
					</div>
				</div>
				<Link href="/account/addresses/new">
					<Button>
						<Plus className="h-4 w-4 mr-2" />
						Add Address
					</Button>
				</Link>
			</div>

			{/* Addresses grid */}
			{addresses.length > 0 ? (
				<div className="grid gap-4 md:grid-cols-2">
					{addresses.map((address) => (
						<Card
							key={address.id}
							className={address.isDefault ? "border-primary" : ""}
						>
							<CardHeader className="pb-2">
								<div className="flex items-start justify-between">
									<div className="flex items-center gap-2">
										<CardTitle className="text-base">
											{address.firstName} {address.lastName}
										</CardTitle>
										{address.isDefault && (
											<Badge variant="secondary" className="text-xs">
												<Star className="h-3 w-3 mr-1 fill-current" />
												Default
											</Badge>
										)}
									</div>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" size="icon" className="h-8 w-8">
												<MoreVertical className="h-4 w-4" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem asChild>
												<Link href={`/account/addresses/${address.id}/edit`}>
													<Pencil className="h-4 w-4 mr-2" />
													Edit
												</Link>
											</DropdownMenuItem>
											{!address.isDefault && (
												<DropdownMenuItem
													onClick={() => handleSetDefault(address.id)}
													disabled={isPending}
												>
													<Star className="h-4 w-4 mr-2" />
													Set as Default
												</DropdownMenuItem>
											)}
											<DropdownMenuSeparator />
											<DropdownMenuItem
												onClick={() => handleDelete(address.id)}
												className="text-destructive"
												disabled={isPending}
											>
												<Trash2 className="h-4 w-4 mr-2" />
												Delete
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
								{address.company && (
									<CardDescription>{address.company}</CardDescription>
								)}
							</CardHeader>
							<CardContent className="text-sm text-muted-foreground">
								<p>{address.address1}</p>
								{address.address2 && <p>{address.address2}</p>}
								<p>
									{address.city}
									{address.province && `, ${address.province}`}{" "}
									{address.postalCode}
								</p>
								<p>{address.country}</p>
								{address.phone && <p className="mt-2">{address.phone}</p>}
							</CardContent>
						</Card>
					))}
				</div>
			) : (
				<Card>
					<CardContent className="flex flex-col items-center justify-center py-16">
						<MapPin className="h-16 w-16 text-muted-foreground" />
						<h3 className="mt-4 text-lg font-medium">No addresses saved</h3>
						<p className="text-sm text-muted-foreground mt-1">
							Add an address to speed up checkout
						</p>
						<Link href="/account/addresses/new" className="mt-4">
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								Add Address
							</Button>
						</Link>
					</CardContent>
				</Card>
			)}

			{/* Delete confirmation dialog */}
			<AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Delete Address</AlertDialogTitle>
						<AlertDialogDescription>
							Are you sure you want to delete this address? This action cannot
							be undone.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction
							onClick={confirmDelete}
							className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
							disabled={isPending}
						>
							{isPending ? (
								<Loader2 className="h-4 w-4 mr-2 animate-spin" />
							) : (
								<Trash2 className="h-4 w-4 mr-2" />
							)}
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}
