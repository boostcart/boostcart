"use client";

import { CreditCard, Eye, Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	deactivateGiftCard,
	deleteGiftCard,
	getGiftCards,
} from "@/server/api/internal/gift-cards";
import {
	DeleteGiftCardDialog,
	GiftCardFormDialog,
	ViewGiftCardDialog,
} from "./_components/gift-card-dialogs";

// Type from server action
type ServerGiftCard = Awaited<ReturnType<typeof getGiftCards>>[number];

interface GiftCardDisplay {
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
	isActive: boolean;
	orderId?: string;
}

function mapGiftCardToDisplay(giftCard: ServerGiftCard): GiftCardDisplay {
	const isExpired = giftCard.expirationDate
		? new Date(giftCard.expirationDate) < new Date()
		: false;
	const isRedeemed = Number(giftCard.currentValue) === 0;

	let status = "Active";
	if (!giftCard.isActive) {
		status = "Inactive";
	} else if (isExpired) {
		status = "Expired";
	} else if (isRedeemed) {
		status = "Redeemed";
	}

	return {
		id: giftCard.id,
		code: giftCard.code,
		initialBalance: Number(giftCard.initialValue),
		currentBalance: Number(giftCard.currentValue),
		currency: giftCard.currency?.code ?? "USD",
		recipientEmail: giftCard.recipient?.email ?? "",
		recipientName: "",
		senderName: "",
		message: "",
		issueDate: new Date(giftCard.createdAt).toLocaleDateString(),
		expiryDate: giftCard.expirationDate
			? new Date(giftCard.expirationDate).toLocaleDateString()
			: null,
		status,
		isRedeemed,
		isActive: giftCard.isActive,
	};
}

export default function GiftCardsPage() {
	const [giftCards, setGiftCards] = React.useState<GiftCardDisplay[]>([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [viewDialogOpen, setViewDialogOpen] = React.useState(false);
	const [formDialogOpen, setFormDialogOpen] = React.useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
	const [selectedGiftCard, setSelectedGiftCard] =
		React.useState<GiftCardDisplay | null>(null);
	const [formMode, setFormMode] = React.useState<"create" | "edit" | "adjust">(
		"create",
	);

	const fetchGiftCards = React.useCallback(async () => {
		try {
			const data = await getGiftCards();
			setGiftCards(data.map(mapGiftCardToDisplay));
		} catch (error) {
			console.error("Failed to fetch gift cards:", error);
			toast.error("Failed to load gift cards");
		} finally {
			setIsLoading(false);
		}
	}, []);

	React.useEffect(() => {
		fetchGiftCards();
	}, [fetchGiftCards]);

	// Stats calculations
	const totalGiftCards = giftCards.length;
	const activeGiftCards = giftCards.filter(
		(gc) => gc.status === "Active",
	).length;
	const totalValue = giftCards.reduce((acc, gc) => acc + gc.initialBalance, 0);
	const redeemedValue = giftCards.reduce(
		(acc, gc) => acc + (gc.initialBalance - gc.currentBalance),
		0,
	);

	const handleView = (giftCard: GiftCardDisplay) => {
		setSelectedGiftCard(giftCard);
		setViewDialogOpen(true);
	};

	const handleEdit = (giftCard: GiftCardDisplay) => {
		setSelectedGiftCard(giftCard);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDelete = (giftCard: GiftCardDisplay) => {
		setSelectedGiftCard(giftCard);
		setDeleteDialogOpen(true);
	};

	const handleCreate = () => {
		setSelectedGiftCard(null);
		setFormMode("create");
		setFormDialogOpen(true);
	};

	const handleDeactivate = async (giftCardId: string) => {
		try {
			await deactivateGiftCard(giftCardId);
			toast.success("Gift card deactivated");
			await fetchGiftCards();
		} catch (error) {
			console.error("Failed to deactivate gift card:", error);
			toast.error("Failed to deactivate gift card");
		}
	};

	const handleDeleteConfirm = async () => {
		if (!selectedGiftCard) return;
		try {
			await deleteGiftCard(selectedGiftCard.id);
			toast.success("Gift card deleted");
			setDeleteDialogOpen(false);
			await fetchGiftCards();
		} catch (error) {
			console.error("Failed to delete gift card:", error);
			toast.error(
				error instanceof Error ? error.message : "Failed to delete gift card",
			);
		}
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-[400px]">
				<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
			</div>
		);
	}

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
			</div>
			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Gift Cards</p>
					<p className="text-2xl font-bold mt-1">{totalGiftCards}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Active Cards</p>
					<p className="text-2xl font-bold mt-1">{activeGiftCards}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Value</p>
					<p className="text-2xl font-bold mt-1">
						${totalValue.toLocaleString()}
					</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Redeemed</p>
					<p className="text-2xl font-bold mt-1">
						${redeemedValue.toLocaleString()}
					</p>
				</Card>
			</div>
			<Card>
				{giftCards.length === 0 ? (
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<CreditCard className="h-8 w-8" />
							</EmptyMedia>
							<EmptyTitle>No gift cards found</EmptyTitle>
							<EmptyDescription>
								Create your first gift card to get started
							</EmptyDescription>
						</EmptyHeader>
						<EmptyContent>
							<PolarisButton type="button" onClick={handleCreate}>
								<Plus className="h-4 w-4" />
								Create Gift Card
							</PolarisButton>
						</EmptyContent>
					</Empty>
				) : (
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
							{giftCards.map((card) => (
								<TableRow key={card.id}>
									<TableCell className="font-mono font-medium">
										{card.code}
									</TableCell>
									<TableCell>
										{card.recipientEmail ? (
											<div>
												<div className="font-medium">
													{card.recipientName || "—"}
												</div>
												<div className="text-sm text-muted-foreground">
													{card.recipientEmail}
												</div>
											</div>
										) : (
											<span className="text-muted-foreground">
												No recipient
											</span>
										)}
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
										<button
											type="button"
											onClick={() => card.isActive && handleDeactivate(card.id)}
											disabled={!card.isActive}
										>
											<Badge
												className={card.isActive ? "cursor-pointer" : ""}
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
										</button>
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
				)}
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
				onSuccess={fetchGiftCards}
			/>
			<DeleteGiftCardDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				giftCard={selectedGiftCard}
				onConfirm={handleDeleteConfirm}
			/>
		</div>
	);
}
