"use client";

import { Eye, Pencil, Star, Trash2 } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Empty,
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
	approveReview,
	deleteReview,
	getReviews,
	unapproveReview,
} from "@/server/api/internal/reviews";
import {
	DeleteReviewDialog,
	ReviewFormDialog,
	ViewReviewDialog,
} from "./_components/review-dialogs";

// Review type derived from server action return
type ServerReview = Awaited<ReturnType<typeof getReviews>>[number];

interface ReviewDisplay {
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

function mapReviewToDisplay(review: ServerReview): ReviewDisplay {
	const customerName = review.customer
		? `${review.customer.firstName ?? ""} ${review.customer.lastName ?? ""}`.trim() ||
			review.customer.email
		: "Anonymous";

	const productName =
		review.product.translations[0]?.name ?? review.product.slug;

	return {
		id: review.id,
		rating: review.rating,
		title: review.title ?? "",
		comment: review.comment ?? "",
		customerName,
		customerEmail: review.customer?.email ?? "",
		productName,
		productId: review.productId,
		status: review.isApproved ? "Approved" : "Pending",
		verified: false,
		helpful: 0,
		date: new Date(review.createdAt).toLocaleDateString(),
		response: undefined,
	};
}

export default function ReviewsPage() {
	const [reviews, setReviews] = React.useState<ReviewDisplay[]>([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [viewDialogOpen, setViewDialogOpen] = React.useState(false);
	const [formDialogOpen, setFormDialogOpen] = React.useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
	const [selectedReview, setSelectedReview] =
		React.useState<ReviewDisplay | null>(null);
	const [formMode, setFormMode] = React.useState<"create" | "edit" | "respond">(
		"create",
	);

	const fetchReviews = React.useCallback(async () => {
		try {
			const data = await getReviews();
			setReviews(data.map(mapReviewToDisplay));
		} catch (error) {
			console.error("Failed to fetch reviews:", error);
			toast.error("Failed to load reviews");
		} finally {
			setIsLoading(false);
		}
	}, []);

	React.useEffect(() => {
		fetchReviews();
	}, [fetchReviews]);

	const handleView = (review: ReviewDisplay) => {
		setSelectedReview(review);
		setViewDialogOpen(true);
	};

	const handleEdit = (review: ReviewDisplay) => {
		setSelectedReview(review);
		setFormMode("edit");
		setFormDialogOpen(true);
	};

	const handleDelete = (review: ReviewDisplay) => {
		setSelectedReview(review);
		setDeleteDialogOpen(true);
	};

	const handleApprove = async (reviewId: string, isApproved: boolean) => {
		try {
			if (isApproved) {
				await unapproveReview(reviewId);
				toast.success("Review unapproved");
			} else {
				await approveReview(reviewId);
				toast.success("Review approved");
			}
			await fetchReviews();
		} catch (error) {
			console.error("Failed to update review:", error);
			toast.error("Failed to update review status");
		}
	};

	const handleDeleteConfirm = async () => {
		if (!selectedReview) return;
		try {
			await deleteReview(selectedReview.id);
			toast.success("Review deleted");
			setDeleteDialogOpen(false);
			await fetchReviews();
		} catch (error) {
			console.error("Failed to delete review:", error);
			toast.error("Failed to delete review");
		}
	};

	// Stats calculations
	const totalReviews = reviews.length;
	const pendingReviews = reviews.filter((r) => r.status === "Pending").length;
	const avgRating =
		totalReviews > 0
			? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(
					1,
				)
			: "0";
	const thisMonth = reviews.filter((r) => {
		const reviewDate = new Date(r.date);
		const now = new Date();
		return (
			reviewDate.getMonth() === now.getMonth() &&
			reviewDate.getFullYear() === now.getFullYear()
		);
	}).length;

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-100">
				<Loader size="lg" />
			</div>
		);
	}

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
					<p className="text-2xl font-bold mt-1">{totalReviews}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Pending Approval</p>
					<p className="text-2xl font-bold mt-1">{pendingReviews}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">Average Rating</p>
					<p className="text-2xl font-bold mt-1">{avgRating}</p>
				</Card>
				<Card className="p-4">
					<p className="text-sm text-muted-foreground">This Month</p>
					<p className="text-2xl font-bold mt-1">{thisMonth}</p>
				</Card>
			</div>

			<Card>
				{reviews.length === 0 ? (
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<Star className="h-8 w-8" />
							</EmptyMedia>
							<EmptyTitle>No reviews yet</EmptyTitle>
							<EmptyDescription>
								Reviews from your customers will appear here.
							</EmptyDescription>
						</EmptyHeader>
					</Empty>
				) : (
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
							{reviews.map((review) => (
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
										<button
											type="button"
											onClick={() =>
												handleApprove(review.id, review.status === "Approved")
											}
										>
											<Badge
												className="cursor-pointer"
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
										</button>
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
				)}
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
				onSuccess={fetchReviews}
			/>
			<DeleteReviewDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				review={selectedReview}
				onConfirm={handleDeleteConfirm}
			/>
		</div>
	);
}
