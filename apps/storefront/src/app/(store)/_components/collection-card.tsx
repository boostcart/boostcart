import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

interface CollectionCardProps {
	collection: {
		slug: string;
		imageUrl: string | null;
		translations: Array<{
			name: string;
			description: string | null;
		}>;
	};
}

export function CollectionCard({ collection }: CollectionCardProps) {
	const translation = collection.translations[0];
	const title = translation?.name || collection.slug;
	const description = translation?.description;

	return (
		<Link href={`/collections/${collection.slug}`}>
			<Card className="group overflow-hidden transition-all hover:shadow-lg">
				<div className="relative aspect-video overflow-hidden bg-muted">
					{collection.imageUrl ? (
						<Image
							src={collection.imageUrl}
							alt={title}
							fill
							className="object-cover transition-transform group-hover:scale-105"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center text-4xl bg-linear-to-br from-primary/20 to-primary/5">
							🛍️
						</div>
					)}
					<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
					<div className="absolute bottom-0 left-0 right-0 p-4">
						<h3 className="font-semibold text-white text-lg">{title}</h3>
						{description && (
							<p className="text-white/80 text-sm line-clamp-1 mt-1">
								{description}
							</p>
						)}
					</div>
				</div>
			</Card>
		</Link>
	);
}
