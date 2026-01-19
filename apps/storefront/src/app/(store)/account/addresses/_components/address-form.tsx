"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Loader2, MapPin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { createAddress, updateAddress } from "../../_actions/addresses";

const addressSchema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	company: z.string().optional(),
	address1: z.string().min(1, "Address is required"),
	address2: z.string().optional(),
	city: z.string().min(1, "City is required"),
	province: z.string().optional(),
	country: z.string().min(1, "Country is required"),
	postalCode: z.string().min(1, "Postal code is required"),
	phone: z.string().optional(),
	isDefault: z.boolean().default(false),
});

type AddressFormData = z.infer<typeof addressSchema>;

interface AddressFormProps {
	mode: "create" | "edit";
	address?: AddressFormData & { id: string };
}

// Common countries for Bulgarian market
const COUNTRIES = [
	{ code: "BG", name: "Bulgaria" },
	{ code: "RO", name: "Romania" },
	{ code: "GR", name: "Greece" },
	{ code: "RS", name: "Serbia" },
	{ code: "MK", name: "North Macedonia" },
	{ code: "TR", name: "Turkey" },
	{ code: "DE", name: "Germany" },
	{ code: "AT", name: "Austria" },
	{ code: "NL", name: "Netherlands" },
	{ code: "FR", name: "France" },
	{ code: "IT", name: "Italy" },
	{ code: "ES", name: "Spain" },
	{ code: "GB", name: "United Kingdom" },
	{ code: "US", name: "United States" },
];

export function AddressForm({ mode, address }: AddressFormProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<AddressFormData>({
		resolver: zodResolver(addressSchema),
		defaultValues: address
			? {
					firstName: address.firstName,
					lastName: address.lastName,
					company: address.company || "",
					address1: address.address1,
					address2: address.address2 || "",
					city: address.city,
					province: address.province || "",
					country: address.country,
					postalCode: address.postalCode,
					phone: address.phone || "",
					isDefault: address.isDefault,
				}
			: {
					country: "BG",
					isDefault: false,
				},
	});

	const isDefault = watch("isDefault");
	const selectedCountry = watch("country");

	const onSubmit = (data: AddressFormData) => {
		startTransition(async () => {
			const addressId = address?.id;
			const result =
				mode === "create" || !addressId
					? await createAddress(data)
					: await updateAddress(addressId, data);

			if (result.success) {
				toast.success(
					mode === "create"
						? "Address created successfully"
						: "Address updated successfully",
				);
				router.push("/account/addresses");
				router.refresh();
			} else {
				toast.error(result.error || "Something went wrong");
			}
		});
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center gap-4">
				<Link href="/account/addresses">
					<Button variant="ghost" size="icon">
						<ArrowLeft className="h-4 w-4" />
					</Button>
				</Link>
				<div>
					<h1 className="text-2xl font-bold">
						{mode === "create" ? "Add New Address" : "Edit Address"}
					</h1>
					<p className="text-sm text-muted-foreground">
						{mode === "create"
							? "Add a new shipping address to your account"
							: "Update your shipping address details"}
					</p>
				</div>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<MapPin className="h-5 w-5" />
							Address Details
						</CardTitle>
						<CardDescription>
							Enter the shipping address information
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						{/* Name fields */}
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="firstName">First Name *</Label>
								<Input
									id="firstName"
									{...register("firstName")}
									placeholder="John"
								/>
								{errors.firstName && (
									<p className="text-sm text-destructive">
										{errors.firstName.message}
									</p>
								)}
							</div>
							<div className="space-y-2">
								<Label htmlFor="lastName">Last Name *</Label>
								<Input
									id="lastName"
									{...register("lastName")}
									placeholder="Doe"
								/>
								{errors.lastName && (
									<p className="text-sm text-destructive">
										{errors.lastName.message}
									</p>
								)}
							</div>
						</div>

						{/* Company */}
						<div className="space-y-2">
							<Label htmlFor="company">Company (Optional)</Label>
							<Input
								id="company"
								{...register("company")}
								placeholder="Company name"
							/>
						</div>

						{/* Address lines */}
						<div className="space-y-2">
							<Label htmlFor="address1">Address Line 1 *</Label>
							<Input
								id="address1"
								{...register("address1")}
								placeholder="Street address"
							/>
							{errors.address1 && (
								<p className="text-sm text-destructive">
									{errors.address1.message}
								</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="address2">Address Line 2 (Optional)</Label>
							<Input
								id="address2"
								{...register("address2")}
								placeholder="Apartment, suite, unit, etc."
							/>
						</div>

						{/* City, Province, Postal Code */}
						<div className="grid gap-4 sm:grid-cols-3">
							<div className="space-y-2">
								<Label htmlFor="city">City *</Label>
								<Input id="city" {...register("city")} placeholder="Sofia" />
								{errors.city && (
									<p className="text-sm text-destructive">
										{errors.city.message}
									</p>
								)}
							</div>
							<div className="space-y-2">
								<Label htmlFor="province">Province/State</Label>
								<Input
									id="province"
									{...register("province")}
									placeholder="Sofia-city"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="postalCode">Postal Code *</Label>
								<Input
									id="postalCode"
									{...register("postalCode")}
									placeholder="1000"
								/>
								{errors.postalCode && (
									<p className="text-sm text-destructive">
										{errors.postalCode.message}
									</p>
								)}
							</div>
						</div>

						{/* Country */}
						<div className="space-y-2">
							<Label htmlFor="country">Country *</Label>
							<Select
								value={selectedCountry}
								onValueChange={(value) => setValue("country", value)}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select country" />
								</SelectTrigger>
								<SelectContent>
									{COUNTRIES.map((country) => (
										<SelectItem key={country.code} value={country.code}>
											{country.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							{errors.country && (
								<p className="text-sm text-destructive">
									{errors.country.message}
								</p>
							)}
						</div>

						{/* Phone */}
						<div className="space-y-2">
							<Label htmlFor="phone">Phone Number (Optional)</Label>
							<Input
								id="phone"
								type="tel"
								{...register("phone")}
								placeholder="+359 88 888 8888"
							/>
						</div>

						{/* Default checkbox */}
						<div className="flex items-center space-x-2">
							<Checkbox
								id="isDefault"
								checked={isDefault}
								onCheckedChange={(checked) =>
									setValue("isDefault", checked === true)
								}
							/>
							<Label htmlFor="isDefault" className="cursor-pointer">
								Set as default address
							</Label>
						</div>

						{/* Actions */}
						<div className="flex gap-4 pt-4">
							<Button type="submit" disabled={isPending}>
								{isPending && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
								{mode === "create" ? "Add Address" : "Save Changes"}
							</Button>
							<Link href="/account/addresses">
								<Button type="button" variant="outline">
									Cancel
								</Button>
							</Link>
						</div>
					</CardContent>
				</Card>
			</form>
		</div>
	);
}
