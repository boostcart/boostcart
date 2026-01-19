import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";

export default async function CollectionsPage() {
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return null;
	}

	const collections = await db.collection.findMany({
		where: {
			tenantId: tenant.id,
			isActive: true,
		},
		include: {
			translations: {
				take: 1,
			},
			_count: {
				select: {
					products: true,
				},
			},
		},
		orderBy: { createdAt: "asc" },
	});

	return (
		<div className="container mx-auto py-8">
			<div className="space-y-6">
				{/* Header */}
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Collections</h1>
					<p className="text-muted-foreground mt-1">
						Browse our curated collections
					</p>
				</div>

				{/* Collections grid */}
				{collections.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{collections.map((collection) => {
							const translation = collection.translations[0];
							const name = translation?.name || collection.slug;
							const description = translation?.description;

							return (
								<Link
									key={collection.id}
									href={`/collections/${collection.slug}`}
								>
									<Card className="group overflow-hidden transition-all hover:shadow-lg h-full">
										<div className="relative aspect-video overflow-hidden bg-linear-to-br from-primary/20 to-primary/5">
											{collection.imageUrl ? (
												<Image
													src={collection.imageUrl}
													alt={name}
													fill
													className="object-cover transition-transform group-hover:scale-105"
												/>
											) : (
												<div className="w-full h-full flex items-center justify-center text-5xl">
													🏷️
												</div>
											)}
										</div>
										<CardContent className="p-6">
											<h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
												{name}
											</h3>
											{description && (
												<p className="text-muted-foreground mt-2 line-clamp-2">
													{description}
												</p>
											)}
											<p className="text-sm text-muted-foreground mt-3">
												{collection._count.products} products
											</p>
										</CardContent>
									</Card>
								</Link>
							);
						})}
					</div>
				) : (
					<div className="flex flex-col items-center justify-center py-16 text-center">
						<div className="text-6xl mb-4">🏷️</div>
						<h3 className="text-lg font-semibold">No collections yet</h3>
						<p className="text-muted-foreground mt-1">
							Check back later for new collections
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export async function generateMetadata() {
	const tenant = await getCurrentTenant();

	return {
		title: `Collections | ${tenant?.name || "Store"}`,
		description: "Browse our curated product collections",
	};
}
