"use client";

import confetti from "canvas-confetti";
import { ArrowRight, CheckCircle2, Home, Package } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CheckoutSuccessPage() {
	const searchParams = useSearchParams();
	const orderNumber = searchParams.get("order") || "Unknown";

	// Trigger confetti on mount
	useEffect(() => {
		const duration = 3 * 1000;
		const animationEnd = Date.now() + duration;
		const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

		function randomInRange(min: number, max: number) {
			return Math.random() * (max - min) + min;
		}

		const interval = setInterval(() => {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			const particleCount = 50 * (timeLeft / duration);

			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
			});
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
			});
		}, 250);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="container mx-auto py-16">
			<div className="max-w-lg mx-auto text-center">
				{/* Success icon */}
				<div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
					<CheckCircle2 className="w-10 h-10 text-green-600" />
				</div>

				<h1 className="text-3xl font-bold mb-2">Thank you for your order!</h1>
				<p className="text-muted-foreground mb-8">
					Your order has been placed successfully. We&apos;ll send you an email
					confirmation shortly.
				</p>

				{/* Order info card */}
				<Card className="mb-8">
					<CardContent className="pt-6">
						<div className="flex items-center justify-center gap-3 mb-4">
							<Package className="w-5 h-5 text-muted-foreground" />
							<span className="text-sm text-muted-foreground">
								Order Number
							</span>
						</div>
						<p className="text-2xl font-mono font-bold">{orderNumber}</p>
						<p className="text-sm text-muted-foreground mt-4">
							You can track your order status in your account page.
						</p>
					</CardContent>
				</Card>

				{/* Action buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button asChild size="lg">
						<Link href="/account">
							View Order
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link href="/">
							<Home className="mr-2 h-4 w-4" />
							Back to Home
						</Link>
					</Button>
				</div>

				{/* Additional info */}
				<div className="mt-12 text-sm text-muted-foreground">
					<p>
						Need help?{" "}
						<Link href="/contact" className="text-primary hover:underline">
							Contact us
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
