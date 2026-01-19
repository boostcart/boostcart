import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { db } from "@/server/db";
import { getCurrentTenant } from "@/server/tenant";
import { CollectionCard } from "./_components/collection-card";
import { ProductCard } from "./_components/product-card";

export default async function StorefrontHomePage() {
	const tenant = await getCurrentTenant();

	if (!tenant) {
		return null; // Layout handles the not found case
	}

	// Fetch featured products
	const featuredProducts = await db.product.findMany({
		where: {
			tenantId: tenant.id,
			status: "ACTIVE",
		},
		include: {
			media: {
				orderBy: { order: "asc" },
				take: 1,
			},
			variants: {
				take: 1,
				orderBy: { price: "asc" },
			},
			translations: {
				take: 1, // Get default translation
			},
		},
		orderBy: { createdAt: "desc" },
		take: 8,
	});

	// Fetch collections with translations
	const collections = await db.collection.findMany({
		where: {
			tenantId: tenant.id,
			isActive: true,
		},
		include: {
			translations: {
				take: 1, // Get default translation
			},
		},
		take: 4,
	});

	return (
		<div className="flex flex-col gap-16 pb-16">
			{/* Hero Section */}
			<section className="relative bg-muted/40">
				<div className="container mx-auto py-24 md:py-32">
					<div className="mx-auto max-w-3xl text-center">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
							{tenant.name}
						</h1>
						{tenant.description && (
							<p className="mt-6 text-lg text-muted-foreground">
								{tenant.description}
							</p>
						)}
						<div className="mt-10 flex items-center justify-center gap-4">
							<Button size="lg" asChild>
								<Link href="/products">
									Shop Now
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="/collections">Browse Collections</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Products */}
			{featuredProducts.length > 0 && (
				<section className="container mx-auto">
					<div className="flex items-center justify-between mb-8">
						<div>
							<h2 className="text-2xl font-bold tracking-tight">
								Featured Products
							</h2>
							<p className="text-muted-foreground">
								Check out our latest products
							</p>
						</div>
						<Button variant="ghost" asChild>
							<Link href="/products">
								View All
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{featuredProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</section>
			)}

			{/* Collections */}
			{collections.length > 0 && (
				<section className="container mx-auto">
					<div className="flex items-center justify-between mb-8">
						<div>
							<h2 className="text-2xl font-bold tracking-tight">Collections</h2>
							<p className="text-muted-foreground">Shop by collection</p>
						</div>
						<Button variant="ghost" asChild>
							<Link href="/collections">
								View All
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{collections.map((collection) => (
							<CollectionCard key={collection.id} collection={collection} />
						))}
					</div>
				</section>
			)}

			{/* Empty State */}
			{featuredProducts.length === 0 && collections.length === 0 && (
				<section className="container mx-auto py-24 text-center">
					<h2 className="text-2xl font-bold tracking-tight">
						Welcome to {tenant.name}
					</h2>
					<p className="mt-4 text-muted-foreground">
						Products are coming soon. Please check back later!
					</p>
				</section>
			)}
		</div>
	);
}
