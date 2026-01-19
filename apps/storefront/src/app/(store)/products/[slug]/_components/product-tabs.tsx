"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductTabsProps {
	description: string | null;
	specifications: {
		weight: number | null;
		length: number | null;
		width: number | null;
		height: number | null;
	} | null;
	specs?: Array<{
		id: string;
		name: string;
		value: string;
	}>;
}

export function ProductTabs({
	description,
	specifications,
	specs,
}: ProductTabsProps) {
	const hasSpecs =
		specifications?.weight ||
		specifications?.length ||
		specifications?.width ||
		specifications?.height ||
		(specs && specs.length > 0);

	return (
		<Tabs defaultValue="description" className="w-full">
			<TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
				<TabsTrigger
					value="description"
					className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
				>
					Description
				</TabsTrigger>
				{hasSpecs && (
					<TabsTrigger
						value="specifications"
						className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
					>
						Specifications
					</TabsTrigger>
				)}
				<TabsTrigger
					value="reviews"
					className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
				>
					Reviews
				</TabsTrigger>
			</TabsList>

			<TabsContent value="description" className="pt-6">
				{description ? (
					<div
						className="prose prose-neutral dark:prose-invert max-w-none"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized content from admin
						dangerouslySetInnerHTML={{ __html: description }}
					/>
				) : (
					<p className="text-muted-foreground">
						No description available for this product.
					</p>
				)}
			</TabsContent>

			{hasSpecs && (
				<TabsContent value="specifications" className="pt-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{/* Shipping dimensions */}
						{specifications?.weight && (
							<div className="flex justify-between py-3 border-b">
								<span className="text-muted-foreground">Weight</span>
								<span className="font-medium">{specifications.weight} kg</span>
							</div>
						)}
						{specifications?.length &&
							specifications?.width &&
							specifications?.height && (
								<div className="flex justify-between py-3 border-b">
									<span className="text-muted-foreground">
										Dimensions (L×W×H)
									</span>
									<span className="font-medium">
										{specifications.length} × {specifications.width} ×{" "}
										{specifications.height} cm
									</span>
								</div>
							)}
						{/* Custom specs */}
						{specs?.map((spec) => (
							<div key={spec.id} className="flex justify-between py-3 border-b">
								<span className="text-muted-foreground">{spec.name}</span>
								<span className="font-medium">{spec.value}</span>
							</div>
						))}
					</div>
				</TabsContent>
			)}

			<TabsContent value="reviews" className="pt-6">
				<div className="text-center py-12">
					<div className="text-4xl mb-4">💬</div>
					<h3 className="text-lg font-semibold">No reviews yet</h3>
					<p className="text-muted-foreground mt-1">
						Be the first to review this product!
					</p>
				</div>
			</TabsContent>
		</Tabs>
	);
}
