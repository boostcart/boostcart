"use client";

import { Eye, Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	DeleteShippingDialog,
	ShippingFormDialog,
	ViewShippingDialog,
} from "./_components/shipping-dialogs";

interface ShippingZone {
	id: string;
	name: string;
	countries: string[];
	isActive: boolean;
}

interface ShippingRate {
	id: string;
	name: string;
	description: string;
	price: number;
	estimatedDays: string;
	freeShippingThreshold: number | null;
	conditions: string;
}

interface ShippingMethod {
	id: string;
	name: string;
	description: string;
	zones: ShippingZone[];
	rates: ShippingRate[];
	isActive: boolean;
	carrier: string;
	totalOrders: number;
}

const mockShippingMethods: ShippingMethod[] = [
	{
		id: "1",
		name: "Standard Shipping",
		description: "Regular delivery service",
		zones: [{ id: "z1", name: "Domestic", countries: ["US"], isActive: true }],
		rates: [
			{
				id: "r1",
				name: "Standard Rate",
				description: "5-7 business days",
				price: 5.99,
				estimatedDays: "5-7",
				freeShippingThreshold: 50,
				conditions: "Orders over $50",
			},
		],
		isActive: true,
		carrier: "USPS",
		totalOrders: 1234,
	},
	{
		id: "2",
		name: "Express Shipping",
		description: "Fast delivery service",
		zones: [{ id: "z2", name: "Domestic", countries: ["US"], isActive: true }],
		rates: [
			{
				id: "r2",
				name: "Express Rate",
				description: "1-2 business days",
				price: 15.99,
				estimatedDays: "1-2",
				freeShippingThreshold: null,
				conditions: "All orders",
			},
		],
		isActive: true,
		carrier: "FedEx",
		totalOrders: 567,
	},
	{
		id: "3",
		name: "International Shipping",
		description: "Worldwide delivery",
		zones: [
			{
				id: "z3",
				name: "International",
				countries: ["CA", "UK", "AU"],
				isActive: true,
			},
		],
		rates: [
			{
				id: "r3",
				name: "International Rate",
				description: "10-15 business days",
				price: 25.99,
				estimatedDays: "10-15",
				freeShippingThreshold: null,
				conditions: "International orders",
			},
		],
		isActive: true,
		carrier: "DHL",
		totalOrders: 234,
	},
];

export default function ShippingPage() {
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedMethod, setSelectedMethod] = useState<ShippingMethod | null>(
		null,
	);
	const [formMode, setFormMode] = useState<"create" | "edit">("create");

	const handleView = (method: ShippingMethod) => {
		setSelectedMethod(method);
		setViewDialogOpen(true);
	};

	const handleEdit = (method: ShippingMethod) => {
		setSelectedMethod(method);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDelete = (method: ShippingMethod) => {
		setSelectedMethod(method);
		setDeleteDialogOpen(true);
	};

	const handleCreate = () => {
		setSelectedMethod(null);
		setFormMode("create");
		setFormDialogOpen(true);
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">
						Shipping Methods
					</h1>
					<p className="text-muted-foreground mt-1">
						Configure shipping options and rates
					</p>
				</div>
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Add Shipping Method
				</PolarisButton>
			</div>{" "}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Methods</p>
					<p className="text-2xl font-bold mt-1">4</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Methods</p>
					<p className="text-2xl font-bold mt-1">3</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Shipments</p>
					<p className="text-2xl font-bold mt-1">2,345</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Avg. Delivery Time</p>
					<p className="text-2xl font-bold mt-1">3.2 days</p>
				</Card>
			</div>
			<Card>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Method Name</TableHead>
							<TableHead>Carrier</TableHead>
							<TableHead>Zones</TableHead>
							<TableHead>Rates</TableHead>
							<TableHead>Orders</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{mockShippingMethods.map((method) => (
							<TableRow key={method.id}>
								<TableCell>
									<div>
										<div className="font-medium">{method.name}</div>
										<div className="text-sm text-muted-foreground">
											{method.description}
										</div>
									</div>
								</TableCell>
								<TableCell>{method.carrier}</TableCell>
								<TableCell>{method.zones.length} zones</TableCell>
								<TableCell>{method.rates.length} rates</TableCell>
								<TableCell>{method.totalOrders.toLocaleString()}</TableCell>
								<TableCell>
									<Badge variant={method.isActive ? "default" : "secondary"}>
										{method.isActive ? "Active" : "Inactive"}
									</Badge>
								</TableCell>
								<TableCell className="text-right">
									<div className="flex justify-end gap-2">
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleView(method)}
										>
											<Eye className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleEdit(method)}
										>
											<Pencil className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleDelete(method)}
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
			<ViewShippingDialog
				open={viewDialogOpen}
				onOpenChange={setViewDialogOpen}
				shipping={selectedMethod}
			/>
			<ShippingFormDialog
				open={formDialogOpen}
				onOpenChange={setFormDialogOpen}
				shipping={selectedMethod}
				mode={formMode}
			/>
			<DeleteShippingDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				shipping={selectedMethod}
			/>
		</div>
	);
}
