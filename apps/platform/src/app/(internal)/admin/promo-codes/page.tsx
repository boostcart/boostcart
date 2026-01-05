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
	DeletePromoCodeDialog,
	PromoCodeFormDialog,
	ViewPromoCodeDialog,
} from "./_components/promo-code-dialogs";

interface PromoCode {
	id: string;
	code: string;
	type: string;
	value: string;
	description: string;
	usageCount: number;
	usageLimit: number | null;
	minPurchase: number;
	startDate: string;
	endDate: string | null;
	status: string;
	onePerCustomer: boolean;
}

const mockPromoCodes: PromoCode[] = [
	{
		id: "1",
		code: "SUMMER2024",
		type: "Percentage",
		value: "20%",
		description: "Summer sale discount",
		usageCount: 145,
		usageLimit: 500,
		minPurchase: 50,
		startDate: "2024-06-01",
		endDate: "2024-08-31",
		status: "Active",
		onePerCustomer: true,
	},
	{
		id: "2",
		code: "FREESHIP",
		type: "Free Shipping",
		value: "Free",
		description: "Free shipping on all orders",
		usageCount: 278,
		usageLimit: null,
		minPurchase: 0,
		startDate: "2024-01-01",
		endDate: null,
		status: "Active",
		onePerCustomer: false,
	},
	{
		id: "3",
		code: "WINTER10",
		type: "Fixed Amount",
		value: "$10",
		description: "Winter clearance discount",
		usageCount: 89,
		usageLimit: 200,
		minPurchase: 30,
		startDate: "2024-12-01",
		endDate: "2024-12-31",
		status: "Active",
		onePerCustomer: true,
	},
];

export default function PromoCodesPage() {
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedPromoCode, setSelectedPromoCode] = useState<PromoCode | null>(
		null,
	);
	const [formMode, setFormMode] = useState<"create" | "edit">("create");

	const handleView = (promoCode: PromoCode) => {
		setSelectedPromoCode(promoCode);
		setViewDialogOpen(true);
	};

	const handleEdit = (promoCode: PromoCode) => {
		setSelectedPromoCode(promoCode);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDelete = (promoCode: PromoCode) => {
		setSelectedPromoCode(promoCode);
		setDeleteDialogOpen(true);
	};

	const handleCreate = () => {
		setSelectedPromoCode(null);
		setFormMode("create");
		setFormDialogOpen(true);
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Promo Codes</h1>
					<p className="text-muted-foreground mt-1">
						Create and manage promotional codes
					</p>
				</div>
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Create Promo Code
				</PolarisButton>
			</div>{" "}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Codes</p>
					<p className="text-2xl font-bold mt-1">42</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Codes</p>
					<p className="text-2xl font-bold mt-1">28</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Uses</p>
					<p className="text-2xl font-bold mt-1">3,456</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Savings</p>
					<p className="text-2xl font-bold mt-1">$23,456</p>
				</Card>
			</div>
			<Card>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Code</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Value</TableHead>
							<TableHead>Usage</TableHead>
							<TableHead>Min Purchase</TableHead>
							<TableHead>Valid Period</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{mockPromoCodes.map((code) => (
							<TableRow key={code.id}>
								<TableCell className="font-mono font-medium">
									{code.code}
								</TableCell>
								<TableCell>{code.type}</TableCell>
								<TableCell>{code.value}</TableCell>
								<TableCell>
									{code.usageCount}
									{code.usageLimit && ` / ${code.usageLimit}`}
								</TableCell>
								<TableCell>${code.minPurchase}</TableCell>
								<TableCell>
									{code.startDate}
									{code.endDate && ` - ${code.endDate}`}
								</TableCell>
								<TableCell>
									<Badge
										variant={code.status === "Active" ? "default" : "secondary"}
									>
										{code.status}
									</Badge>
								</TableCell>
								<TableCell className="text-right">
									<div className="flex justify-end gap-2">
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleView(code)}
										>
											<Eye className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleEdit(code)}
										>
											<Pencil className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleDelete(code)}
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
			<ViewPromoCodeDialog
				open={viewDialogOpen}
				onOpenChange={setViewDialogOpen}
				promoCode={selectedPromoCode}
			/>
			<PromoCodeFormDialog
				open={formDialogOpen}
				onOpenChange={setFormDialogOpen}
				promoCode={selectedPromoCode}
				mode={formMode}
			/>
			<DeletePromoCodeDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				promoCode={selectedPromoCode}
			/>
		</div>
	);
}
