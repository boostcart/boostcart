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
	DeleteGiftCardDialog,
	GiftCardFormDialog,
	ViewGiftCardDialog,
} from "./_components/gift-card-dialogs";

interface GiftCard {
	id: string;
	code: string;
	initialBalance: number;
	currentBalance: number;
	currency: string;
	recipientEmail: string;
	recipientName: string;
	senderName: string;
	message: string;
	issueDate: string;
	expiryDate: string | null;
	status: string;
	isRedeemed: boolean;
	orderId?: string;
}

const mockGiftCards: GiftCard[] = [
	{
		id: "1",
		code: "GIFT-2024-ABC123",
		initialBalance: 100,
		currentBalance: 75.5,
		currency: "USD",
		recipientEmail: "john@example.com",
		recipientName: "John Doe",
		senderName: "Jane Smith",
		message: "Happy Birthday!",
		issueDate: "2024-01-15",
		expiryDate: "2025-01-15",
		status: "Active",
		isRedeemed: false,
		orderId: "ORD-12345",
	},
	{
		id: "2",
		code: "GIFT-2024-XYZ789",
		initialBalance: 50,
		currentBalance: 50,
		currency: "USD",
		recipientEmail: "alice@example.com",
		recipientName: "Alice Johnson",
		senderName: "Bob Wilson",
		message: "Thank you!",
		issueDate: "2024-02-20",
		expiryDate: null,
		status: "Active",
		isRedeemed: false,
	},
	{
		id: "3",
		code: "GIFT-2023-DEF456",
		initialBalance: 200,
		currentBalance: 0,
		currency: "USD",
		recipientEmail: "sarah@example.com",
		recipientName: "Sarah Brown",
		senderName: "Mike Davis",
		message: "Congratulations!",
		issueDate: "2023-12-01",
		expiryDate: "2024-12-01",
		status: "Redeemed",
		isRedeemed: true,
		orderId: "ORD-67890",
	},
];

export default function GiftCardsPage() {
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedGiftCard, setSelectedGiftCard] = useState<GiftCard | null>(
		null,
	);
	const [formMode, setFormMode] = useState<"create" | "edit" | "adjust">(
		"create",
	);

	const handleView = (giftCard: GiftCard) => {
		setSelectedGiftCard(giftCard);
		setViewDialogOpen(true);
	};

	const handleEdit = (giftCard: GiftCard) => {
		setSelectedGiftCard(giftCard);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDelete = (giftCard: GiftCard) => {
		setSelectedGiftCard(giftCard);
		setDeleteDialogOpen(true);
	};

	const handleCreate = () => {
		setSelectedGiftCard(null);
		setFormMode("create");
		setFormDialogOpen(true);
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Gift Cards</h1>
					<p className="text-muted-foreground mt-1">
						Manage gift cards and balances
					</p>
				</div>
				<PolarisButton type="button" onClick={handleCreate}>
					<Plus className="h-4 w-4" />
					Create Gift Card
				</PolarisButton>
			</div>{" "}
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Gift Cards</p>
					<p className="text-2xl font-bold mt-1">156</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Cards</p>
					<p className="text-2xl font-bold mt-1">89</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Value</p>
					<p className="text-2xl font-bold mt-1">$45,678</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Redeemed</p>
					<p className="text-2xl font-bold mt-1">$23,456</p>
				</Card>
			</div>
			<Card>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Code</TableHead>
							<TableHead>Recipient</TableHead>
							<TableHead>Balance</TableHead>
							<TableHead>Issue Date</TableHead>
							<TableHead>Expiry</TableHead>
							<TableHead>Status</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{mockGiftCards.map((card) => (
							<TableRow key={card.id}>
								<TableCell className="font-mono font-medium">
									{card.code}
								</TableCell>
								<TableCell>
									<div>
										<div className="font-medium">{card.recipientName}</div>
										<div className="text-sm text-muted-foreground">
											{card.recipientEmail}
										</div>
									</div>
								</TableCell>
								<TableCell>
									<div>
										<div className="font-medium">
											${card.currentBalance} / ${card.initialBalance}
										</div>
										<div className="text-sm text-muted-foreground">
											{card.currency}
										</div>
									</div>
								</TableCell>
								<TableCell>{card.issueDate}</TableCell>
								<TableCell>{card.expiryDate || "No expiry"}</TableCell>
								<TableCell>
									<Badge
										variant={
											card.status === "Active"
												? "default"
												: card.status === "Redeemed"
													? "secondary"
													: "outline"
										}
									>
										{card.status}
									</Badge>
								</TableCell>
								<TableCell className="text-right">
									<div className="flex justify-end gap-2">
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleView(card)}
										>
											<Eye className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleEdit(card)}
										>
											<Pencil className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleDelete(card)}
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
			<ViewGiftCardDialog
				open={viewDialogOpen}
				onOpenChange={setViewDialogOpen}
				giftCard={selectedGiftCard}
			/>
			<GiftCardFormDialog
				open={formDialogOpen}
				onOpenChange={setFormDialogOpen}
				giftCard={selectedGiftCard}
				mode={formMode}
			/>
			<DeleteGiftCardDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				giftCard={selectedGiftCard}
			/>
		</div>
	);
}
