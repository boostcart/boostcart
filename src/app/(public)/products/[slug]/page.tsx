import { Label } from "@/components/ui/label";
import { MenubarRadioGroup } from "@/components/ui/menubar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import Image from "next/image";
import { AddToCartButton } from "./_components/add-to-cart-button";
import { Button } from "@/components/ui/button";


export default function ProductPage() {
	return (
		<div className="container flex flex-col px-24 mx-auto my-12">
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-12">
				<div className="flex flex-col items-start w-full gap-4">
					<div className="overflow-hidden border rounded-lg shadow-lg aspect-square">
						<Image
							src="https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
							alt="Product Image"
							width={1000}
							height={1000}
							className="object-cover w-full h-full overflow-hidden rounded-lg"
						/>
					</div>

					<div className="flex items-start space-x-4">
						<div className="overflow-hidden rounded-lg ring ring-primary ring-offset-2 aspect-square max-w-20">
							<Image
								src="https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
								alt="Product Image"
								width={600}
								height={600}
								className="object-cover w-full h-full overflow-hidden rounded-lg"
							/>
						</div>

						<div className="overflow-hidden rounded-lg aspect-square max-w-20">
							<Image
								src="https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
								alt="Product Image"
								width={600}
								height={600}
								className="object-cover w-full h-full overflow-hidden rounded-lg"
							/>
						</div>

						<div className="overflow-hidden rounded-lg aspect-square max-w-20">
							<Image
								src="https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
								alt="Product Image"
								width={600}
								height={600}
								className="object-cover w-full h-full overflow-hidden rounded-lg"
							/>
						</div>

						<div className="overflow-hidden rounded-lg aspect-square max-w-20">
							<Image
								src="https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
								alt="Product Image"
								width={600}
								height={600}
								className="object-cover w-full h-full overflow-hidden rounded-lg"
							/>
						</div>

						<div className="overflow-hidden rounded-lg aspect-square max-w-20">
							<Image
								src="https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
								alt="Product Image"
								width={600}
								height={600}
								className="object-cover w-full h-full overflow-hidden rounded-lg"
							/>
						</div>

						<div className="overflow-hidden rounded-lg aspect-square max-w-20">
							<Image
								src="https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
								alt="Product Image"
								width={600}
								height={600}
								className="object-cover w-full h-full overflow-hidden rounded-lg"
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col w-full space-y-8">
					<h1 className="text-5xl font-bold">MacBook Air M4</h1>

					<h2 className="text-2xl font-medium">€999.99</h2>

					<div className="flex items-end justify-between space-x-4">
						<div className="flex items-center space-x-2">
							<span>
								<Star className="inline text-yellow-500 fill-current size-5" />
								<Star className="inline text-yellow-500 fill-current size-5" />
								<Star className="inline text-yellow-500 fill-current size-5" />
								<Star className="inline text-yellow-500 fill-current size-5" />
								<Star className="inline text-yellow-500 fill-current size-5" />
							</span>

							<span className="text-sm text-muted-foreground">429 reviews</span>
						</div>

						<span className="text-xs uppercase text-muted-foreground">SKU: MAC-AIR-M4-16-256</span>
					</div>

					<p className="text-base text-foreground">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam perspiciatis nesciunt hic quod beatae, voluptatibus, libero voluptatum saepe ullam voluptas, eaque alias dolor nisi? Cum accusamus distinctio nemo numquam blanditiis.
					</p>

					<RadioGroup defaultValue="silver" className="flex items-center">
						<div className="flex items-center">
							<RadioGroupItem value="silver" id="color-silver" className="sr-only" />
							<Label
								htmlFor="color-silver"
								className="rounded-full border ring-offset-2 size-8 bg-neutral-100 cursor-pointer hover:ring hover:ring-primary peer-data-[state=checked]:ring peer-data-[state=checked]:ring-primary transition"
							/>
						</div>
						<div className="flex items-center">
							<RadioGroupItem value="black" id="color-black" className="sr-only" />
							<Label
								htmlFor="color-black"
								className="rounded-full border ring-offset-2 size-8 bg-black cursor-pointer hover:ring hover:ring-primary peer-data-[state=checked]:ring peer-data-[state=checked]:ring-primary transition"
							/>
						</div>
						<div className="flex items-center">
							<RadioGroupItem value="blue" id="color-blue" className="sr-only" />
							<Label
								htmlFor="color-blue"
								className="rounded-full border ring-offset-2 size-8 bg-cyan-900 cursor-pointer hover:ring hover:ring-primary peer-data-[state=checked]:ring peer-data-[state=checked]:ring-primary transition"
							/>
						</div>
					</RadioGroup>

					<RadioGroup defaultValue="256" className="grid grid-cols-3 gap-3">
						<div className="flex items-center">
							<RadioGroupItem value="256" id="storage-256" className="sr-only" />
							<Label
								htmlFor="storage-256"
								className="w-full p-3 flex flex-col items-center border rounded-lg cursor-pointer hover:border-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition"
							>
								<span className="font-semibold">256GB</span>
								<span className="text-sm text-muted-foreground">€999.99</span>
							</Label>
						</div>
						<div className="flex items-center">
							<RadioGroupItem value="512" id="storage-512" className="sr-only" />
							<Label
								htmlFor="storage-512"
								className="w-full p-3 flex flex-col items-center border rounded-lg cursor-pointer hover:border-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition"
							>
								<span className="font-semibold">512GB</span>
								<span className="text-sm text-muted-foreground">€1,199.99</span>
							</Label>
						</div>
						<div className="flex items-center">
							<RadioGroupItem value="1tb" id="storage-1tb" className="sr-only" />
							<Label
								htmlFor="storage-1tb"
								className="w-full p-3 flex flex-col items-center border rounded-lg cursor-pointer hover:border-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition"
							>
								<span className="font-semibold">1TB</span>
								<span className="text-sm text-muted-foreground">€1,399.99</span>
							</Label>
						</div>
					</RadioGroup>

					<div className="flex flex-col space-y-2">
						<AddToCartButton product={{}} />
						<Button
							size="lg"
							className="w-full"
						>
							Buy Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}