"use client";

import {
	Calendar,
	Key,
	Loader2,
	Mail,
	MapPin,
	Package,
	RefreshCw,
	User,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
	createCustomer,
	getCustomer,
	resetCustomerPassword,
	sendCustomerEmail,
	updateCustomer,
} from "@/server/api/internal/customers";

// UI Customer type for list display
interface Customer {
	id: string;
	name: string;
	email: string;
	phone: string;
	status: string;
	orders: number;
	totalSpent: string;
	joined: string;
}

// Full customer data from API
interface CustomerDetail {
	id: string;
	email: string;
	firstName: string | null;
	lastName: string | null;
	phone: string | null;
	acceptsMarketing: boolean;
	locale: string;
	emailVerified: boolean;
	totalSpent: number;
	ordersCount: number;
	lastOrderAt: Date | null;
	isActive: boolean;
	createdAt: Date;
	addresses: CustomerAddress[];
	orders: CustomerOrder[];
	_count: {
		addresses: number;
		orders: number;
	};
}

interface CustomerAddress {
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

interface CustomerOrder {
	id: string;
	orderNumber: string;
	status: string;
	paymentStatus: string;
	totalAmount: number;
	createdAt: Date;
}

interface ViewCustomerDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	customer: Customer | null;
	onRefresh?: () => void;
}

export function ViewCustomerDialog({
	open,
	onOpenChange,
	customer,
	onRefresh,
}: ViewCustomerDialogProps) {
	const [isLoading, setIsLoading] = useState(false);
	const [customerDetail, setCustomerDetail] = useState<CustomerDetail | null>(
		null,
	);
	const [isSendingEmail, setIsSendingEmail] = useState(false);
	const [isResettingPassword, setIsResettingPassword] = useState(false);
	const [showEmailDialog, setShowEmailDialog] = useState(false);
	const [emailSubject, setEmailSubject] = useState("");
	const [emailBody, setEmailBody] = useState("");

	// Fetch full customer data when dialog opens
	const fetchCustomerDetail = useCallback(async () => {
		if (!customer?.id) return;

		setIsLoading(true);
		try {
			const data = await getCustomer(customer.id);
			setCustomerDetail(data as CustomerDetail);
		} catch (error) {
			console.error("Failed to fetch customer details:", error);
			toast.error("Failed to load customer details");
		} finally {
			setIsLoading(false);
		}
	}, [customer?.id]);

	useEffect(() => {
		if (open && customer?.id) {
			fetchCustomerDetail();
		} else {
			setCustomerDetail(null);
		}
	}, [open, customer?.id, fetchCustomerDetail]);

	const handleSendEmail = async () => {
		if (!customerDetail || !emailSubject.trim() || !emailBody.trim()) {
			toast.error("Please fill in subject and message");
			return;
		}

		setIsSendingEmail(true);
		try {
			await sendCustomerEmail(customerDetail.id, {
				subject: emailSubject,
				body: emailBody,
			});
			toast.success("Email sent successfully");
			setShowEmailDialog(false);
			setEmailSubject("");
			setEmailBody("");
		} catch (error) {
			console.error("Failed to send email:", error);
			toast.error("Failed to send email");
		} finally {
			setIsSendingEmail(false);
		}
	};

	const handleResetPassword = async () => {
		if (!customerDetail) return;

		const confirmed = window.confirm(
			`Send password reset email to ${customerDetail.email}?`,
		);
		if (!confirmed) return;

		setIsResettingPassword(true);
		try {
			await resetCustomerPassword(customerDetail.id);
			toast.success("Password reset email sent");
		} catch (error) {
			console.error("Failed to reset password:", error);
			toast.error("Failed to send password reset email");
		} finally {
			setIsResettingPassword(false);
		}
	};

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("bg-BG", {
			style: "currency",
			currency: "EUR",
		}).format(amount);
	};

	const formatDate = (date: Date | string) => {
		return new Date(date).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		});
	};

	const getStatusBadgeVariant = (status: string) => {
		switch (status) {
			case "DELIVERED":
			case "COMPLETED":
				return "default";
			case "PENDING":
			case "PROCESSING":
				return "secondary";
			case "CANCELLED":
			case "REFUNDED":
				return "destructive";
			default:
				return "outline";
		}
	};

	if (!customer) return null;

	const customerName = customerDetail
		? `${customerDetail.firstName || ""} ${customerDetail.lastName || ""}`.trim() ||
			"Unknown"
		: customer.name;

	const avgOrderValue =
		customerDetail && customerDetail.ordersCount > 0
			? customerDetail.totalSpent / customerDetail.ordersCount
			: 0;

	return (
		<>
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle className="flex items-center gap-2">
							<User className="h-5 w-5" />
							{customerName}
						</DialogTitle>
						<DialogDescription>Complete customer information</DialogDescription>
					</DialogHeader>

					{isLoading ? (
						<div className="flex items-center justify-center py-12">
							<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
						</div>
					) : (
						<Tabs defaultValue="overview" className="w-full">
							<TabsList className="grid w-full grid-cols-4">
								<TabsTrigger value="overview">Overview</TabsTrigger>
								<TabsTrigger value="orders">
									Orders ({customerDetail?._count.orders ?? 0})
								</TabsTrigger>
								<TabsTrigger value="addresses">
									Addresses ({customerDetail?._count.addresses ?? 0})
								</TabsTrigger>
								<TabsTrigger value="actions">Actions</TabsTrigger>
							</TabsList>

							<TabsContent value="overview" className="space-y-4">
								<div className="grid grid-cols-2 gap-6">
									<div className="space-y-4">
										<div>
											<p className="text-sm font-medium text-muted-foreground mb-2">
												Contact Information
											</p>
											<div className="space-y-2 text-sm">
												<div className="flex items-center gap-2">
													<span className="font-medium">Email:</span>
													<span>{customerDetail?.email ?? customer.email}</span>
													{customerDetail?.emailVerified && (
														<Badge variant="outline" className="text-xs">
															Verified
														</Badge>
													)}
												</div>
												<div className="flex items-center gap-2">
													<span className="font-medium">Phone:</span>
													<span>
														{customerDetail?.phone ?? customer.phone ?? "N/A"}
													</span>
												</div>
												<div className="flex items-center gap-2">
													<span className="font-medium">Status:</span>
													<Badge
														variant={
															customerDetail?.isActive ? "default" : "secondary"
														}
													>
														{customerDetail?.isActive ? "Active" : "Inactive"}
													</Badge>
												</div>
												<div className="flex items-center gap-2">
													<span className="font-medium">Marketing:</span>
													<Badge
														variant={
															customerDetail?.acceptsMarketing
																? "default"
																: "outline"
														}
													>
														{customerDetail?.acceptsMarketing
															? "Subscribed"
															: "Not subscribed"}
													</Badge>
												</div>
											</div>
										</div>

										<Separator />

										<div>
											<p className="text-sm font-medium text-muted-foreground mb-2">
												Account Details
											</p>
											<div className="space-y-2 text-sm">
												<div className="flex items-center gap-2">
													<Calendar className="h-4 w-4" />
													<span>
														Joined{" "}
														{customerDetail
															? formatDate(customerDetail.createdAt)
															: customer.joined}
													</span>
												</div>
												{customerDetail?.lastOrderAt && (
													<div className="flex items-center gap-2">
														<Package className="h-4 w-4" />
														<span>
															Last order{" "}
															{formatDate(customerDetail.lastOrderAt)}
														</span>
													</div>
												)}
												<div className="flex items-center gap-2">
													<span className="font-medium">Customer ID:</span>
													<span className="font-mono text-xs">
														{customer.id}
													</span>
												</div>
												<div className="flex items-center gap-2">
													<span className="font-medium">Locale:</span>
													<span>{customerDetail?.locale ?? "bg"}</span>
												</div>
											</div>
										</div>
									</div>

									<div className="space-y-4">
										<div className="p-4 border rounded-lg bg-muted/30">
											<p className="text-sm text-muted-foreground mb-2">
												Lifetime Value
											</p>
											<p className="text-3xl font-bold">
												{formatCurrency(customerDetail?.totalSpent ?? 0)}
											</p>
										</div>

										<div className="p-4 border rounded-lg bg-muted/30">
											<p className="text-sm text-muted-foreground mb-2">
												Total Orders
											</p>
											<p className="text-3xl font-bold">
												{customerDetail?.ordersCount ?? customer.orders}
											</p>
										</div>

										<div className="p-4 border rounded-lg bg-muted/30">
											<p className="text-sm text-muted-foreground mb-2">
												Average Order Value
											</p>
											<p className="text-3xl font-bold">
												{formatCurrency(avgOrderValue)}
											</p>
										</div>
									</div>
								</div>
							</TabsContent>

							<TabsContent value="orders" className="space-y-4">
								{customerDetail?.orders && customerDetail.orders.length > 0 ? (
									<div className="space-y-3">
										{customerDetail.orders.map((order) => (
											<button
												type="button"
												key={order.id}
												className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer text-left"
												onClick={() => {
													window.location.href = `/admin/orders?id=${order.id}`;
												}}
											>
												<div>
													<p className="font-medium">{order.orderNumber}</p>
													<p className="text-sm text-muted-foreground">
														{formatDate(order.createdAt)}
													</p>
												</div>
												<div className="text-right">
													<p className="font-medium">
														{formatCurrency(order.totalAmount)}
													</p>
													<div className="flex gap-2 mt-1">
														<Badge
															variant={getStatusBadgeVariant(order.status)}
														>
															{order.status}
														</Badge>
														<Badge
															variant={getStatusBadgeVariant(
																order.paymentStatus,
															)}
														>
															{order.paymentStatus}
														</Badge>
													</div>
												</div>
											</button>
										))}
									</div>
								) : (
									<div className="text-center py-8 text-muted-foreground">
										<Package className="h-12 w-12 mx-auto mb-3 opacity-50" />
										<p>No orders yet</p>
									</div>
								)}
							</TabsContent>

							<TabsContent value="addresses" className="space-y-4">
								{customerDetail?.addresses &&
								customerDetail.addresses.length > 0 ? (
									<div className="space-y-4">
										{customerDetail.addresses.map((address) => (
											<div key={address.id} className="p-4 border rounded-lg">
												<div className="flex items-start justify-between mb-2">
													<div className="flex items-start gap-2">
														<MapPin className="h-4 w-4 mt-0.5" />
														<div>
															<p className="font-medium">
																{address.firstName} {address.lastName}
															</p>
															{address.isDefault && (
																<Badge
																	variant="outline"
																	className="text-xs mt-1"
																>
																	Default
																</Badge>
															)}
														</div>
													</div>
												</div>
												<div className="text-sm text-muted-foreground ml-6">
													{address.company && <p>{address.company}</p>}
													<p>{address.address1}</p>
													{address.address2 && <p>{address.address2}</p>}
													<p>
														{address.city}
														{address.province && `, ${address.province}`}{" "}
														{address.postalCode}
													</p>
													<p>{address.country}</p>
													{address.phone && (
														<p className="mt-1">📞 {address.phone}</p>
													)}
												</div>
											</div>
										))}
									</div>
								) : (
									<div className="text-center py-8 text-muted-foreground">
										<MapPin className="h-12 w-12 mx-auto mb-3 opacity-50" />
										<p>No addresses saved</p>
									</div>
								)}
							</TabsContent>

							<TabsContent value="actions" className="space-y-4">
								<div className="grid gap-4">
									<div className="p-4 border rounded-lg">
										<div className="flex items-center justify-between">
											<div>
												<p className="font-medium flex items-center gap-2">
													<Mail className="h-4 w-4" />
													Send Email
												</p>
												<p className="text-sm text-muted-foreground">
													Send a custom email to this customer
												</p>
											</div>
											<Button onClick={() => setShowEmailDialog(true)}>
												Compose Email
											</Button>
										</div>
									</div>

									<div className="p-4 border rounded-lg">
										<div className="flex items-center justify-between">
											<div>
												<p className="font-medium flex items-center gap-2">
													<Key className="h-4 w-4" />
													Password Reset
												</p>
												<p className="text-sm text-muted-foreground">
													Send a password reset link to the customer
												</p>
											</div>
											<Button
												variant="outline"
												onClick={handleResetPassword}
												disabled={isResettingPassword}
											>
												{isResettingPassword ? (
													<>
														<Loader2 className="h-4 w-4 animate-spin mr-2" />
														Sending...
													</>
												) : (
													<>
														<RefreshCw className="h-4 w-4 mr-2" />
														Reset Password
													</>
												)}
											</Button>
										</div>
									</div>

									<div className="p-4 border rounded-lg">
										<div className="flex items-center justify-between">
											<div>
												<p className="font-medium flex items-center gap-2">
													<User className="h-4 w-4" />
													Account Status
												</p>
												<p className="text-sm text-muted-foreground">
													{customerDetail?.isActive
														? "Customer account is active"
														: "Customer account is disabled"}
												</p>
											</div>
											<Button
												variant={
													customerDetail?.isActive ? "destructive" : "default"
												}
												onClick={async () => {
													if (!customerDetail) return;
													try {
														await updateCustomer(customerDetail.id, {
															isActive: !customerDetail.isActive,
														});
														toast.success(
															customerDetail.isActive
																? "Account disabled"
																: "Account enabled",
														);
														fetchCustomerDetail();
														onRefresh?.();
													} catch {
														toast.error("Failed to update account status");
													}
												}}
											>
												{customerDetail?.isActive
													? "Disable Account"
													: "Enable Account"}
											</Button>
										</div>
									</div>
								</div>
							</TabsContent>
						</Tabs>
					)}

					<DialogFooter>
						<Button variant="outline" onClick={() => onOpenChange(false)}>
							Close
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Email Dialog */}
			<Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Send Email</DialogTitle>
						<DialogDescription>
							Send an email to {customerDetail?.email}
						</DialogDescription>
					</DialogHeader>
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email-subject">Subject</Label>
							<Input
								id="email-subject"
								value={emailSubject}
								onChange={(e) => setEmailSubject(e.target.value)}
								placeholder="Email subject..."
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email-body">Message</Label>
							<Textarea
								id="email-body"
								value={emailBody}
								onChange={(e) => setEmailBody(e.target.value)}
								placeholder="Write your message..."
								rows={6}
							/>
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onClick={() => setShowEmailDialog(false)}>
							Cancel
						</Button>
						<Button onClick={handleSendEmail} disabled={isSendingEmail}>
							{isSendingEmail ? (
								<>
									<Loader2 className="h-4 w-4 animate-spin mr-2" />
									Sending...
								</>
							) : (
								"Send Email"
							)}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}

interface CustomerFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	customer?: Customer | null;
	mode: "create" | "edit";
	onSuccess?: () => void;
}

export function CustomerFormDialog({
	open,
	onOpenChange,
	customer,
	mode,
	onSuccess,
}: CustomerFormDialogProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [acceptsMarketing, setAcceptsMarketing] = useState(false);
	const [notes, setNotes] = useState("");

	// Reset form when dialog opens or customer changes
	useEffect(() => {
		if (open) {
			if (mode === "edit" && customer) {
				// Parse name into first/last names
				const nameParts = customer.name.split(" ");
				setFirstName(nameParts[0] || "");
				setLastName(nameParts.slice(1).join(" ") || "");
				setEmail(customer.email);
				setPhone(customer.phone === "N/A" ? "" : customer.phone);
				setAcceptsMarketing(false);
				setNotes("");
			} else {
				setFirstName("");
				setLastName("");
				setEmail("");
				setPhone("");
				setAcceptsMarketing(false);
				setNotes("");
			}
		}
	}, [open, mode, customer]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email.trim()) {
			toast.error("Email is required");
			return;
		}

		setIsSubmitting(true);
		try {
			const data = {
				email: email.trim(),
				firstName: firstName.trim() || undefined,
				lastName: lastName.trim() || undefined,
				phone: phone.trim() || undefined,
				acceptsMarketing,
			};

			if (mode === "create") {
				await createCustomer(data);
				toast.success("Customer created successfully");
			} else if (customer) {
				await updateCustomer(customer.id, data);
				toast.success("Customer updated successfully");
			}

			onOpenChange(false);
			onSuccess?.();
		} catch (error) {
			console.error("Failed to save customer:", error);
			toast.error(
				error instanceof Error ? error.message : "Failed to save customer",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === "create" ? "Create New Customer" : "Edit Customer"}
					</DialogTitle>
					<DialogDescription>
						{mode === "create"
							? "Add a new customer to your database"
							: "Update customer information"}
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit}>
					<Tabs defaultValue="personal" className="w-full">
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="personal">Personal Info</TabsTrigger>
							<TabsTrigger value="address">Address</TabsTrigger>
						</TabsList>

						<TabsContent value="personal" className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="firstName">First Name</Label>
									<Input
										id="firstName"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										placeholder="John"
										disabled={isSubmitting}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="lastName">Last Name</Label>
									<Input
										id="lastName"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										placeholder="Doe"
										disabled={isSubmitting}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="customerEmail">Email *</Label>
								<Input
									id="customerEmail"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="customer@example.com"
									required
									disabled={isSubmitting}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="customerPhone">Phone</Label>
								<Input
									id="customerPhone"
									type="tel"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									placeholder="+1 (555) 123-4567"
									disabled={isSubmitting}
								/>
							</div>

							<div className="flex items-center justify-between">
								<div>
									<Label htmlFor="acceptsMarketing">Email Marketing</Label>
									<p className="text-xs text-muted-foreground">
										Customer agrees to receive marketing emails
									</p>
								</div>
								<input
									id="acceptsMarketing"
									type="checkbox"
									checked={acceptsMarketing}
									onChange={(e) => setAcceptsMarketing(e.target.checked)}
									disabled={isSubmitting}
									className="h-4 w-4"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="notes">Notes</Label>
								<Textarea
									id="notes"
									value={notes}
									onChange={(e) => setNotes(e.target.value)}
									placeholder="Internal notes about this customer..."
									rows={3}
									disabled={isSubmitting}
								/>
							</div>
						</TabsContent>

						<TabsContent value="address" className="space-y-4">
							<div className="text-center py-8">
								<p className="text-muted-foreground">
									Address management will be available after creating the
									customer
								</p>
								<p className="text-sm text-muted-foreground mt-1">
									Addresses can be added via the customer detail view
								</p>
							</div>
						</TabsContent>
					</Tabs>

					<DialogFooter className="mt-6">
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
							disabled={isSubmitting}
						>
							Cancel
						</Button>
						<PolarisButton type="submit" disabled={isSubmitting}>
							{isSubmitting ? (
								<>
									<Loader2 className="h-4 w-4 animate-spin mr-2" />
									{mode === "create" ? "Creating..." : "Saving..."}
								</>
							) : mode === "create" ? (
								"Create Customer"
							) : (
								"Save Changes"
							)}
						</PolarisButton>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteCustomerDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	customer: Customer | null;
	onConfirm?: () => void;
}

export function DeleteCustomerDialog({
	open,
	onOpenChange,
	customer,
	onConfirm,
}: DeleteCustomerDialogProps) {
	const handleDelete = () => {
		if (onConfirm) {
			onConfirm();
		} else {
			onOpenChange(false);
		}
	};

	if (!customer) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Customer</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this customer? This will also remove
						all associated data. This action cannot be undone.
					</DialogDescription>
				</DialogHeader>

				<div className="p-4 border rounded-lg bg-muted/30 space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Name:</span>
						<span className="font-medium">{customer.name}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Email:</span>
						<span className="font-medium">{customer.email}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Total Orders:</span>
						<span className="font-medium">{customer.orders}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-muted-foreground">Total Spent:</span>
						<span className="font-medium">{customer.totalSpent}</span>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Cancel
					</Button>
					<Button variant="destructive" onClick={handleDelete}>
						Delete Customer
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
