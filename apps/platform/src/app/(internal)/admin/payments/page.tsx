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
	DeletePaymentDialog,
	PaymentFormDialog,
	ViewPaymentDialog,
} from "./_components/payment-dialogs";

interface PaymentGateway {
	id: string;
	name: string;
	provider: string;
	description: string;
	isActive: boolean;
	isTestMode: boolean;
	supportedCurrencies: string[];
	supportedMethods: string[];
	fees: {
		percentage: number;
		fixed: number;
	};
	totalTransactions: number;
	totalRevenue: number;
}

const mockPaymentGateways: PaymentGateway[] = [
	{
		id: "1",
		name: "Stripe",
		provider: "Stripe Inc.",
		description: "Credit card and digital wallet payments",
		isActive: true,
		isTestMode: false,
		supportedCurrencies: ["USD", "EUR", "GBP"],
		supportedMethods: ["Credit Card", "Debit Card", "Apple Pay", "Google Pay"],
		fees: { percentage: 2.9, fixed: 0.3 },
		totalTransactions: 3456,
		totalRevenue: 145678.99,
	},
	{
		id: "2",
		name: "PayPal",
		provider: "PayPal Holdings",
		description: "PayPal payment gateway",
		isActive: true,
		isTestMode: false,
		supportedCurrencies: ["USD", "EUR"],
		supportedMethods: ["PayPal"],
		fees: { percentage: 3.5, fixed: 0 },
		totalTransactions: 1234,
		totalRevenue: 67890.5,
	},
	{
		id: "3",
		name: "Square",
		provider: "Square Inc.",
		description: "In-person and online payments",
		isActive: false,
		isTestMode: true,
		supportedCurrencies: ["USD"],
		supportedMethods: ["Credit Card", "Debit Card"],
		fees: { percentage: 2.6, fixed: 0.1 },
		totalTransactions: 0,
		totalRevenue: 0,
	},
];

export default function PaymentsPage() {
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedPayment, setSelectedPayment] = useState<PaymentGateway | null>(
		null,
	);
	const [formMode, setFormMode] = useState<"create" | "edit">("create");

	const handleView = (payment: PaymentGateway) => {
		setSelectedPayment(payment);
		setViewDialogOpen(true);
	};

	const handleEdit = (payment: PaymentGateway) => {
		setSelectedPayment(payment);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDelete = (payment: PaymentGateway) => {
		setSelectedPayment(payment);
		setDeleteDialogOpen(true);
	};

	const handleCreate = () => {
		setSelectedPayment(null);
		setFormMode("create");
		setFormDialogOpen(true);
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Payment Methods</h1>
					<p className="text-muted-foreground mt-1">
						Configure payment options and gateways
					</p>
				</div>
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Add Payment Gateway
				</PolarisButton>
			</div>{" "}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Methods</p>
					<p className="text-2xl font-bold mt-1">5</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Methods</p>
					<p className="text-2xl font-bold mt-1">5</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Transactions</p>
					<p className="text-2xl font-bold mt-1">5,678</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Success Rate</p>
					<p className="text-2xl font-bold mt-1">98.5%</p>
				</Card>
			</div>
			<Card>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Gateway Name</TableHead>
							<TableHead>Provider</TableHead>
							<TableHead>Methods</TableHead>
							<TableHead>Transactions</TableHead>
							<TableHead>Revenue</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{mockPaymentGateways.map((gateway) => (
							<TableRow key={gateway.id}>
								<TableCell>
									<div>
										<div className="font-medium">{gateway.name}</div>
										<div className="text-sm text-muted-foreground">
											{gateway.description}
										</div>
									</div>
								</TableCell>
								<TableCell>{gateway.provider}</TableCell>
								<TableCell>{gateway.supportedMethods.length} methods</TableCell>
								<TableCell>
									{gateway.totalTransactions.toLocaleString()}
								</TableCell>
								<TableCell>${gateway.totalRevenue.toLocaleString()}</TableCell>
								<TableCell>
									<div className="flex flex-col gap-1">
										<Badge variant={gateway.isActive ? "default" : "secondary"}>
											{gateway.isActive ? "Active" : "Inactive"}
										</Badge>
										{gateway.isTestMode && (
											<Badge variant="outline" className="text-xs">
												Test Mode
											</Badge>
										)}
									</div>
								</TableCell>
								<TableCell className="text-right">
									<div className="flex justify-end gap-2">
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleView(gateway)}
										>
											<Eye className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleEdit(gateway)}
										>
											<Pencil className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleDelete(gateway)}
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
			<ViewPaymentDialog
				open={viewDialogOpen}
				onOpenChange={setViewDialogOpen}
				payment={selectedPayment}
			/>
			<PaymentFormDialog
				open={formDialogOpen}
				onOpenChange={setFormDialogOpen}
				payment={selectedPayment}
				mode={formMode}
			/>
			<DeletePaymentDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				payment={selectedPayment}
			/>
		</div>
	);
}
