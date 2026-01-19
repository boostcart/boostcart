import { LogOut, MapPin, Package, User } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getCurrentCustomer } from "@/server/auth/customer-auth";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";

export default async function AccountPage() {
	const tenant = await getCurrentTenant();
	const session = await getCurrentCustomer();

	if (!tenant || !session) {
		redirect("/account/login");
	}

	// Get customer with their orders
	const customer = await db.customer.findUnique({
		where: { id: session.customerId },
		include: {
			orders: {
				orderBy: { createdAt: "desc" },
				take: 5,
			},
			addresses: {
				where: { isDefault: true },
				take: 1,
			},
		},
	});

	if (!customer) {
		redirect("/account/login");
	}

	const recentOrders = customer.orders;
	const defaultAddress = customer.addresses[0];

	return (
		<div className="space-y-8">
			<div>
				<h1 className="text-3xl font-bold">My Account</h1>
				<p className="text-muted-foreground">
					Welcome back, {customer.firstName || customer.email}!
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				{/* Profile Card */}
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Profile</CardTitle>
						<User className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{customer.firstName} {customer.lastName}
						</div>
						<p className="text-xs text-muted-foreground">{customer.email}</p>
						<Button variant="link" className="px-0 mt-2" asChild>
							<Link href="/account/settings">Edit Profile</Link>
						</Button>
					</CardContent>
				</Card>

				{/* Address Card */}
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Default Address
						</CardTitle>
						<MapPin className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						{defaultAddress ? (
							<>
								<div className="text-sm">
									<p>{defaultAddress.address1}</p>
									{defaultAddress.address2 && <p>{defaultAddress.address2}</p>}
									<p>
										{defaultAddress.city}, {defaultAddress.province}{" "}
										{defaultAddress.postalCode}
									</p>
									<p>{defaultAddress.country}</p>
								</div>
								<Button variant="link" className="px-0 mt-2" asChild>
									<Link href="/account/addresses">Manage Addresses</Link>
								</Button>
							</>
						) : (
							<>
								<p className="text-sm text-muted-foreground">
									No address saved yet.
								</p>
								<Button variant="link" className="px-0 mt-2" asChild>
									<Link href="/account/addresses/new">Add Address</Link>
								</Button>
							</>
						)}
					</CardContent>
				</Card>
			</div>

			{/* Recent Orders */}
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<div>
							<CardTitle>Recent Orders</CardTitle>
							<CardDescription>
								Your most recent orders and their status
							</CardDescription>
						</div>
						<Button variant="outline" asChild>
							<Link href="/account/orders">View All Orders</Link>
						</Button>
					</div>
				</CardHeader>
				<CardContent>
					{recentOrders.length > 0 ? (
						<div className="space-y-4">
							{recentOrders.map((order) => (
								<Link
									key={order.id}
									href={`/account/orders/${order.orderNumber}`}
									className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
								>
									<div className="flex items-center gap-4">
										<Package className="h-8 w-8 text-muted-foreground" />
										<div>
											<p className="font-medium">Order #{order.orderNumber}</p>
											<p className="text-sm text-muted-foreground">
												{new Date(order.createdAt).toLocaleDateString()}
											</p>
										</div>
									</div>
									<div className="text-right">
										<p className="font-medium">
											{new Intl.NumberFormat("bg-BG", {
												style: "currency",
												currency: "EUR",
											}).format(Number(order.totalAmount))}
										</p>
										<p className="text-sm text-muted-foreground capitalize">
											{order.status.toLowerCase().replace(/_/g, " ")}
										</p>
									</div>
								</Link>
							))}
						</div>
					) : (
						<div className="text-center py-8">
							<Package className="h-12 w-12 mx-auto text-muted-foreground" />
							<h3 className="mt-4 font-medium">No orders yet</h3>
							<p className="text-sm text-muted-foreground">
								Start shopping to see your orders here!
							</p>
							<Button className="mt-4" asChild>
								<Link href="/products">Browse Products</Link>
							</Button>
						</div>
					)}
				</CardContent>
			</Card>

			{/* Logout */}
			<Card>
				<CardContent className="pt-6">
					<form action="/account/logout" method="POST">
						<Button variant="outline" type="submit" className="w-full">
							<LogOut className="h-4 w-4 mr-2" />
							Sign Out
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
