import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import type { StorefrontTenant } from "@/server/tenant";

interface StoreFooterProps {
	tenant: StorefrontTenant;
}

export function StoreFooter({ tenant }: StoreFooterProps) {
	const currentYear = new Date().getFullYear();
	const { themeConfig } = tenant;

	const hasSocialLinks =
		themeConfig.facebookUrl ||
		themeConfig.instagramUrl ||
		themeConfig.twitterUrl ||
		themeConfig.youtubeUrl ||
		themeConfig.tiktokUrl;

	const hasContactInfo =
		themeConfig.contactEmail || themeConfig.contactPhone || themeConfig.address;

	return (
		<footer className="border-t bg-muted/40">
			<div className="container mx-auto py-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					{/* About */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold">{tenant.name}</h3>
						{tenant.description && (
							<p className="text-sm text-muted-foreground">
								{tenant.description}
							</p>
						)}
						{hasSocialLinks && (
							<div className="flex gap-4 pt-2">
								{themeConfig.facebookUrl && (
									<a
										href={themeConfig.facebookUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-foreground"
									>
										<Facebook className="h-5 w-5" />
										<span className="sr-only">Facebook</span>
									</a>
								)}
								{themeConfig.instagramUrl && (
									<a
										href={themeConfig.instagramUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-foreground"
									>
										<Instagram className="h-5 w-5" />
										<span className="sr-only">Instagram</span>
									</a>
								)}
								{themeConfig.twitterUrl && (
									<a
										href={themeConfig.twitterUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-foreground"
									>
										<Twitter className="h-5 w-5" />
										<span className="sr-only">Twitter</span>
									</a>
								)}
								{themeConfig.youtubeUrl && (
									<a
										href={themeConfig.youtubeUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-foreground"
									>
										<Youtube className="h-5 w-5" />
										<span className="sr-only">YouTube</span>
									</a>
								)}
							</div>
						)}
					</div>

					{/* Shop */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold uppercase tracking-wider">
							Shop
						</h3>
						<nav className="flex flex-col space-y-2">
							<Link
								href="/products"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								All Products
							</Link>
							<Link
								href="/collections"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Collections
							</Link>
							<Link
								href="/categories"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Categories
							</Link>
						</nav>
					</div>

					{/* Customer Service */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold uppercase tracking-wider">
							Customer Service
						</h3>
						<nav className="flex flex-col space-y-2">
							<Link
								href="/pages/contact"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Contact Us
							</Link>
							<Link
								href="/pages/shipping"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Shipping & Delivery
							</Link>
							<Link
								href="/pages/returns"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Returns & Refunds
							</Link>
							<Link
								href="/pages/faq"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								FAQ
							</Link>
						</nav>
					</div>

					{/* Contact / Legal */}
					<div className="space-y-4">
						{hasContactInfo && (
							<>
								<h3 className="text-sm font-semibold uppercase tracking-wider">
									Contact
								</h3>
								<div className="space-y-2 text-sm text-muted-foreground">
									{themeConfig.contactEmail && (
										<p>
											<a
												href={`mailto:${themeConfig.contactEmail}`}
												className="hover:text-foreground"
											>
												{themeConfig.contactEmail}
											</a>
										</p>
									)}
									{themeConfig.contactPhone && (
										<p>
											<a
												href={`tel:${themeConfig.contactPhone}`}
												className="hover:text-foreground"
											>
												{themeConfig.contactPhone}
											</a>
										</p>
									)}
									{themeConfig.address && <p>{themeConfig.address}</p>}
								</div>
							</>
						)}
						<h3 className="text-sm font-semibold uppercase tracking-wider">
							Legal
						</h3>
						<nav className="flex flex-col space-y-2">
							<Link
								href="/pages/privacy"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Privacy Policy
							</Link>
							<Link
								href="/pages/terms"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Terms of Service
							</Link>
						</nav>
					</div>
				</div>

				<div className="mt-12 border-t pt-8">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<p className="text-sm text-muted-foreground">
							© {currentYear} {tenant.name}. All rights reserved.
						</p>
						<p className="text-xs text-muted-foreground">
							Powered by{" "}
							<a
								href="https://boostcart.bg"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-foreground"
							>
								BoostCart
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
