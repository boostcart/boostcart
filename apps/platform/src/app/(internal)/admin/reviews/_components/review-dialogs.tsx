"use client";

import { CheckCircle, Package, Star, User } from "lucide-react";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

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

interface ViewReviewDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	review: Review | null;
}

export function ViewReviewDialog({
	open,
	onOpenChange,
	review,
}: ViewReviewDialogProps) {
	if (!review) return null;

	const renderStars = (rating: number) => {
		return (
			<div className="flex gap-1">
				{[1, 2, 3, 4, 5].map((star) => (
					<Star
						key={star}
						className={`h-4 w-4 ${
							star <= rating
								? `fill-yellow-400 text-yellow-400`
								: `text-gray-300`
						}`}
					/>
				))}
			</div>
		);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Review Details</DialogTitle>
					<DialogDescription>
						View complete review information
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="review" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="review">Review</TabsTrigger>
						<TabsTrigger value="customer">Customer</TabsTrigger>
						<TabsTrigger value="moderation">Moderation</TabsTrigger>
					</TabsList>

					<TabsContent value="review" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									{renderStars(review.rating)}
									<span className="text-lg font-bold">{review.rating}.0</span>
								</div>
								<Badge
									variant={
										review.status === `Approved` ? `default` : `secondary`
									}
								>
									{review.status}
								</Badge>
							</div>

							<div>
								<p className="text-sm text-muted-foreground">Review Title</p>
								<p className="text-lg font-semibold mt-1">{review.title}</p>
							</div>

							<div>
								<p className="text-sm text-muted-foreground">Review Comment</p>
								<p className="text-base mt-1">{review.comment}</p>
							</div>

							<Separator />

							<div className="flex items-center gap-4">
								<div className="flex items-center gap-2">
									<Package className="h-4 w-4 text-muted-foreground" />
									<div>
										<p className="text-sm text-muted-foreground">Product</p>
										<p className="font-medium">{review.productName}</p>
									</div>
								</div>
							</div>

							<div className="flex items-center gap-6">
								<div>
									<p className="text-sm text-muted-foreground">
										Verified Purchase
									</p>
									<div className="flex items-center gap-2 mt-1">
										{review.verified ? (
											<>
												<CheckCircle className="h-4 w-4 text-green-500" />
												<span className="font-medium text-green-600">
													Verified
												</span>
											</>
										) : (
											<span className="text-muted-foreground">
												Not Verified
											</span>
										)}
									</div>
								</div>

								<div>
									<p className="text-sm text-muted-foreground">Helpful Votes</p>
									<p className="text-lg font-bold mt-1">{review.helpful}</p>
								</div>

								<div>
									<p className="text-sm text-muted-foreground">Date Posted</p>
									<p className="font-medium mt-1">{review.date}</p>
								</div>
							</div>

							{review.response && (
								<>
									<Separator />
									<div className="bg-muted p-4 rounded-lg">
										<p className="text-sm font-medium mb-2">Store Response</p>
										<p className="text-sm">{review.response}</p>
									</div>
								</>
							)}
						</div>
					</TabsContent>

					<TabsContent value="customer" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div className="flex items-center gap-4 p-4 border rounded-lg">
								<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
									<User className="h-8 w-8 text-primary" />
								</div>
								<div>
									<p className="font-semibold text-lg">{review.customerName}</p>
									<p className="text-sm text-muted-foreground">
										{review.customerEmail}
									</p>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground">Total Reviews</p>
									<p className="text-2xl font-bold mt-1">12</p>
								</div>
								<div className="p-4 border rounded-lg">
									<p className="text-sm text-muted-foreground">
										Average Rating
									</p>
									<div className="flex items-center gap-2 mt-1">
										<p className="text-2xl font-bold">4.5</p>
										<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
									</div>
								</div>
							</div>

							<div className="p-4 border rounded-lg">
								<p className="text-sm text-muted-foreground mb-3">
									Recent Reviews
								</p>
								<div className="space-y-2">
									<div className="flex items-center justify-between text-sm">
										<span>Product A</span>
										<div className="flex gap-1">{renderStars(5)}</div>
									</div>
									<div className="flex items-center justify-between text-sm">
										<span>Product B</span>
										<div className="flex gap-1">{renderStars(4)}</div>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="moderation" className="space-y-4 mt-4">
						<div className="space-y-4">
							<div>
								<Label>Current Status</Label>
								<Badge
									variant={
										review.status === `Approved` ? `default` : `secondary`
									}
									className="mt-2"
								>
									{review.status}
								</Badge>
							</div>

							<Separator />

							<div>
								<Label>Moderation Actions</Label>
								<p className="text-sm text-muted-foreground mb-3">
									Change review status or add response
								</p>
								<div className="space-y-2">
									<Button type="button" variant="outline" className="w-full">
										Approve Review
									</Button>
									<Button type="button" variant="outline" className="w-full">
										Flag for Review
									</Button>
									<Button
										type="button"
										variant="outline"
										className="w-full text-red-600 hover:text-red-600"
									>
										Reject Review
									</Button>
								</div>
							</div>

							<Separator />

							<div className="p-4 bg-muted rounded-lg space-y-2">
								<p className="text-sm font-medium">Review Guidelines Check</p>
								<div className="space-y-1 text-sm">
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>No profanity detected</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>Verified purchase</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>Sufficient length</span>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>

				<DialogFooter>
					<Button
						type="button"
						variant="outline"
						onClick={() => onOpenChange(false)}
					>
						Close
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface ReviewFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	mode: "create" | "edit" | "respond";
	review?: Review | null;
	onSuccess?: () => void | Promise<void>;
}

export function ReviewFormDialog({
	open,
	onOpenChange,
	mode,
	review,
	onSuccess,
}: ReviewFormDialogProps) {
	const renderStars = (rating: number) => {
		return (
			<div className="flex gap-1">
				{[1, 2, 3, 4, 5].map((star) => (
					<Star
						key={star}
						className={`h-5 w-5 cursor-pointer ${
							star <= rating
								? `fill-yellow-400 text-yellow-400`
								: `text-gray-300`
						}`}
					/>
				))}
			</div>
		);
	};

	if (mode === `respond`) {
		return (
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent className="max-w-2xl">
					<DialogHeader>
						<DialogTitle>Respond to Review</DialogTitle>
						<DialogDescription>
							Add a public response to this customer review
						</DialogDescription>
					</DialogHeader>

					<div className="space-y-4 py-4">
						<div className="p-4 bg-muted rounded-lg">
							<div className="flex items-center gap-2 mb-2">
								{renderStars(review?.rating || 0)}
							</div>
							<p className="font-medium">{review?.title}</p>
							<p className="text-sm text-muted-foreground mt-1">
								{review?.comment}
							</p>
						</div>

						<div className="space-y-2">
							<Label htmlFor="response">Your Response *</Label>
							<Textarea
								id="response"
								placeholder="Thank you for your review..."
								rows={6}
								defaultValue={review?.response}
							/>
							<p className="text-xs text-muted-foreground">
								This response will be publicly visible
							</p>
						</div>
					</div>

					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							onClick={() => onOpenChange(false)}
						>
							Cancel
						</Button>
						<PolarisButton type="submit">Post Response</PolarisButton>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						{mode === `create` ? `Create Review` : `Edit Review`}
					</DialogTitle>
					<DialogDescription>
						{mode === `create`
							? `Add a new review (admin override)`
							: `Update review information`}
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="space-y-2">
						<Label htmlFor="product">Product *</Label>
						<Select defaultValue={review?.productId}>
							<SelectTrigger>
								<SelectValue placeholder="Select a product" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1">Product 1</SelectItem>
								<SelectItem value="2">Product 2</SelectItem>
								<SelectItem value="3">Product 3</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label>Rating *</Label>
						<div className="flex gap-1">{renderStars(review?.rating || 5)}</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="title">Review Title *</Label>
						<Input
							id="title"
							placeholder="Summary of your review"
							defaultValue={review?.title}
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="comment">Review Comment *</Label>
						<Textarea
							id="comment"
							placeholder="Share your experience..."
							rows={6}
							defaultValue={review?.comment}
							required
						/>
					</div>

					<Separator />

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="customerName">Customer Name *</Label>
							<Input
								id="customerName"
								defaultValue={review?.customerName}
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="customerEmail">Customer Email *</Label>
							<Input
								id="customerEmail"
								type="email"
								defaultValue={review?.customerEmail}
								required
							/>
						</div>
					</div>

					<Separator />

					<div className="space-y-2">
						<Label htmlFor="status">Status *</Label>
						<Select defaultValue={review?.status || `Pending`}>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="Pending">Pending</SelectItem>
								<SelectItem value="Approved">Approved</SelectItem>
								<SelectItem value="Rejected">Rejected</SelectItem>
								<SelectItem value="Flagged">Flagged</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="flex items-center justify-between">
						<div>
							<Label htmlFor="verified">Verified Purchase</Label>
							<p className="text-xs text-muted-foreground">
								Mark as verified customer purchase
							</p>
						</div>
						<Switch id="verified" defaultChecked={review?.verified || false} />
					</div>
				</div>

				<DialogFooter>
					<Button
						type="button"
						variant="outline"
						onClick={() => onOpenChange(false)}
					>
						Cancel
					</Button>
					<Button type="submit">
						{mode === `create` ? `Create Review` : `Save Changes`}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

interface DeleteReviewDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	review: Review | null;
	onConfirm?: () => void | Promise<void>;
}

export function DeleteReviewDialog({
	open,
	onOpenChange,
	review,
	onConfirm,
}: DeleteReviewDialogProps) {
	if (!review) return null;

	const renderStars = (rating: number) => {
		return (
			<div className="flex gap-1">
				{[1, 2, 3, 4, 5].map((star) => (
					<Star
						key={star}
						className={`h-4 w-4 ${
							star <= rating
								? `fill-yellow-400 text-yellow-400`
								: `text-gray-300`
						}`}
					/>
				))}
			</div>
		);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Review</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this review? This action cannot be
						undone.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="p-4 bg-muted rounded-lg space-y-3">
						<div>
							<div className="flex items-center gap-2 mb-1">
								{renderStars(review.rating)}
							</div>
							<p className="font-medium">{review.title}</p>
							<p className="text-sm text-muted-foreground mt-1">
								{review.comment}
							</p>
						</div>
						<Separator />
						<div className="grid grid-cols-2 gap-2 text-sm">
							<div>
								<span className="text-muted-foreground">Customer:</span>
								<span className="ml-2 font-medium">{review.customerName}</span>
							</div>
							<div>
								<span className="text-muted-foreground">Product:</span>
								<span className="ml-2 font-medium">{review.productName}</span>
							</div>
						</div>
					</div>

					<div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
						<p className="text-sm text-yellow-800 dark:text-yellow-200">
							⚠️ This review will be permanently deleted and cannot be recovered.
						</p>
					</div>
				</div>

				<DialogFooter>
					<Button
						type="button"
						variant="outline"
						onClick={() => onOpenChange(false)}
					>
						Cancel
					</Button>
					<Button
						type="button"
						variant="destructive"
						onClick={() => {
							onConfirm?.();
						}}
					>
						Delete Review
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
