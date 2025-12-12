"use client";

import { Eye, Pencil, Star, Trash2 } from "lucide-react";
import { useState } from "react";
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
	DeleteReviewDialog,
	ReviewFormDialog,
	ViewReviewDialog,
} from "./_components/review-dialogs";

interface Review {
	id: string;
	rating: number;
	title: string;
	comment: string;
	customerName: string;
	customerEmail: string;
	productName: string;
	productId: string;
	status: string;
	verified: boolean;
	helpful: number;
	date: string;
	response?: string;
}

const mockReviews: Review[] = [
	{
		id: "1",
		rating: 5,
		title: "Excellent sound quality!",
		comment:
			"These headphones exceeded my expectations. The noise cancellation is fantastic and the battery lasts all day.",
		customerName: "John Doe",
		customerEmail: "john@example.com",
		productName: "Wireless Headphones",
		productId: "prod_123",
		status: "Approved",
		verified: true,
		helpful: 12,
		date: "2024-12-10",
	},
	{
		id: "2",
		rating: 4,
		title: "Great features but battery could be better",
		comment:
			"Love the design and features, but I wish the battery lasted longer than 2 days.",
		customerName: "Jane Smith",
		customerEmail: "jane@example.com",
		productName: "Smart Watch",
		productId: "prod_456",
		status: "Approved",
		verified: true,
		helpful: 8,
		date: "2024-12-09",
		response:
			"Thank you for your feedback! We're working on improving battery life in our next version.",
	},
	{
		id: "3",
		rating: 5,
		title: "Perfect for my desk setup",
		comment:
			"Sturdy construction and adjustable height make this stand perfect for my workspace.",
		customerName: "Bob Johnson",
		customerEmail: "bob@example.com",
		productName: "Laptop Stand",
		productId: "prod_789",
		status: "Pending",
		verified: false,
		helpful: 3,
		date: "2024-12-08",
	},
];

export default function ReviewsPage() {
	const [viewDialogOpen, setViewDialogOpen] = useState(false);
	const [formDialogOpen, setFormDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [selectedReview, setSelectedReview] = useState<Review | null>(null);
	const [formMode, setFormMode] = useState<"create" | "edit" | "respond">(
		"create",
	);

	const handleView = (review: Review) => {
		setSelectedReview(review);
		setViewDialogOpen(true);
	};

	const handleEdit = (review: Review) => {
		setSelectedReview(review);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDelete = (review: Review) => {
		setSelectedReview(review);
		setDeleteDialogOpen(true);
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Reviews</h1>
					<p className="text-muted-foreground mt-1">
						Manage customer product reviews
					</p>
				</div>
			</div>

			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Total Reviews</p>
					<p className="text-2xl font-bold mt-1">1,234</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Pending Approval</p>
					<p className="text-2xl font-bold mt-1">23</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Average Rating</p>
					<p className="text-2xl font-bold mt-1">4.6</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">This Month</p>
					<p className="text-2xl font-bold mt-1">89</p>
				</Card>
			</div>

			<Card>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Product</TableHead>
							<TableHead>Customer</TableHead>
							<TableHead>Rating</TableHead>
							<TableHead>Comment</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Date</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{mockReviews.map((review) => (
							<TableRow key={review.id}>
								<TableCell className="font-medium">
									{review.productName}
								</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										{review.customerName}
										{review.verified && (
											<Badge variant="outline" className="text-xs">
												Verified
											</Badge>
										)}
									</div>
								</TableCell>
								<TableCell>
									<div className="flex items-center gap-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={`star-${review.id}-${i}`}
												className={`h-4 w-4 ${
													i < review.rating
														? "fill-yellow-400 text-yellow-400"
														: "fill-gray-300 text-gray-300"
												}`}
											/>
										))}
									</div>
								</TableCell>
								<TableCell className="max-w-xs truncate">
									{review.comment}
								</TableCell>
								<TableCell>
									<Badge
										variant={
											review.status === "Approved"
												? "default"
												: review.status === "Pending"
													? "secondary"
													: "destructive"
										}
									>
										{review.status}
									</Badge>
								</TableCell>
								<TableCell>{review.date}</TableCell>
								<TableCell className="text-right">
									<div className="flex justify-end gap-2">
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleView(review)}
										>
											<Eye className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleEdit(review)}
										>
											<Pencil className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleDelete(review)}
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

			<ViewReviewDialog
				open={viewDialogOpen}
				onOpenChange={setViewDialogOpen}
				review={selectedReview}
			/>
			<ReviewFormDialog
				open={formDialogOpen}
				onOpenChange={setFormDialogOpen}
				review={selectedReview}
				mode={formMode}
			/>
			<DeleteReviewDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				review={selectedReview}
			/>
		</div>
	);
}
