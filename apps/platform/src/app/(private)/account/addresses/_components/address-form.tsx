"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CountrySelect } from "@/components/ui/country-select";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import RegionSelect from "@/components/ui/region-select";
import { CreateAddressSchema } from "@/schemas";

const AddressFormSchema = CreateAddressSchema.extend({
	id: z.string().optional(),
});
type AddressFormValues = z.infer<typeof AddressFormSchema>;

interface AddressFormProps {
	initialValues?: Partial<AddressFormValues>;
	onSubmit: (values: AddressFormValues) => void;
	isLoading?: boolean;
	onCancel?: () => void;
}

export function AddressForm({
	initialValues,
	onSubmit,
	isLoading,
	onCancel,
}: AddressFormProps) {
	const [invoiceDesire, SetInvoiceDesire] = useState(false);

	const form = useForm<AddressFormValues>({
		resolver: zodResolver(AddressFormSchema),
		defaultValues: {
			name: "",
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			company: "",
			vatNumber: "",
			country: "BG",
			region: "",
			city: "",
			postcode: "",
			addressLine1: "",
			addressLine2: "",
			isDefault: false,
			...initialValues,
		},
	});

	const submit = (values: AddressFormValues) => onSubmit(values);

	const handleInvoiceDesireChange = () => {
		SetInvoiceDesire((prev) => !prev);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(submit)}
				className="grid grid-cols-1 gap-3 md:grid-cols-2"
			>
				<FormField
					control={form.control}
					name={"name"}
					render={({ field }) => (
						<FormItem>
							<Label>Label</Label>
							<FormControl>
								<Input
									{...field}
									placeholder="Home, Work, etc."
									disabled={isLoading}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name={"isDefault"}
					render={({ field }) => (
						<FormItem>
							<div className="flex items-center gap-2 h-9 mt-6">
								<input
									type="checkbox"
									className="h-4 w-4"
									checked={Boolean(field.value)}
									onChange={(e) => field.onChange(e.target.checked)}
									disabled={isLoading}
								/>
								<Label>Default</Label>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name={"firstName"}
					render={({ field }) => (
						<FormItem>
							<Label>First name</Label>
							<FormControl>
								<Input {...field} disabled={isLoading} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name={"lastName"}
					render={({ field }) => (
						<FormItem>
							<Label>Last name</Label>
							<FormControl>
								<Input {...field} disabled={isLoading} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name={"phone"}
					render={({ field }) => (
						<FormItem>
							<Label>Phone</Label>
							<FormControl>
								<PhoneInput
									international={false}
									initialValueFormat="national"
									defaultCountry="BG"
									{...field}
									disabled={isLoading}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name={"email"}
					render={({ field }) => (
						<FormItem>
							<Label>Email</Label>
							<FormControl>
								<Input type="email" {...field} disabled={isLoading} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="md:col-span-2 flex items-center space-x-2">
					<Checkbox
						id="invoiceDesire"
						checked={invoiceDesire}
						onCheckedChange={handleInvoiceDesireChange}
						disabled={isLoading}
					/>
					<Label htmlFor="invoiceDesire">I want an invoice</Label>
				</div>

				{invoiceDesire && (
					<>
						<FormField
							control={form.control}
							name={"company"}
							render={({ field }) => (
								<FormItem>
									<Label>Company</Label>
									<FormControl>
										<Input {...field} disabled={isLoading} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name={"vatNumber"}
							render={({ field }) => (
								<FormItem>
									<Label>VAT Number</Label>
									<FormControl>
										<Input {...field} disabled={isLoading} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</>
				)}

				<FormField
					control={form.control}
					name={"country"}
					render={({ field }) => (
						<FormItem>
							<Label>Country</Label>
							<FormControl>
								<CountrySelect
									value={field.value || undefined}
									onChange={(code) => field.onChange(code)}
									disabled={isLoading}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name={"region"}
					render={({ field }) => (
						<FormItem>
							<Label>Region/State</Label>
							<FormControl>
								<RegionSelect
									countryCode={form.watch("country") || ""}
									priorityOptions={[]}
									whitelist={[]}
									blacklist={[]}
									onChange={(code) => field.onChange(code)}
									disabled={isLoading || !form.watch("country")}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name={"city"}
					render={({ field }) => (
						<FormItem>
							<Label>City</Label>
							<FormControl>
								<Input {...field} disabled={isLoading} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name={"postcode"}
					render={({ field }) => (
						<FormItem>
							<Label>Postcode</Label>
							<FormControl>
								<Input {...field} disabled={isLoading} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name={"addressLine1"}
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<Label>Address line 1</Label>
							<FormControl>
								<Input {...field} disabled={isLoading} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name={"addressLine2"}
					render={({ field }) => (
						<FormItem className="md:col-span-2">
							<Label>Address line 2</Label>
							<FormControl>
								<Input {...field} disabled={isLoading} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="md:col-span-2 flex items-center gap-2">
					<Button type="submit" disabled={isLoading}>
						{isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
						{isLoading ? "Saving..." : "Save"}
					</Button>
					{onCancel ? (
						<Button
							type="button"
							variant="ghost"
							onClick={onCancel}
							disabled={isLoading}
						>
							Cancel
						</Button>
					) : null}
				</div>
			</form>
		</Form>
	);
}
