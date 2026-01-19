"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
	productId: string;
	variantId?: string;
	name: string;
	price: number;
	quantity: number;
	imageUrl?: string;
	options?: Record<string, string>;
	maxQuantity?: number;
}

interface CartState {
	items: CartItem[];
	isOpen: boolean;
}

interface CartActions {
	addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
	removeItem: (productId: string, variantId?: string) => void;
	updateQuantity: (
		productId: string,
		quantity: number,
		variantId?: string,
	) => void;
	clearCart: () => void;
	openCart: () => void;
	closeCart: () => void;
	toggleCart: () => void;
	getSubtotal: () => number;
	getItemCount: () => number;
}

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			items: [],
			isOpen: false,

			addItem: (item) => {
				set((state) => {
					const existingIndex = state.items.findIndex(
						(i) =>
							i.productId === item.productId && i.variantId === item.variantId,
					);

					if (existingIndex > -1) {
						// Update quantity of existing item
						const items = [...state.items];
						// biome-ignore lint/style/noNonNullAssertion: it's working just fine
						const existing = items[existingIndex]!;
						const newQuantity = existing.quantity + (item.quantity || 1);
						items[existingIndex] = {
							...existing,
							quantity: item.maxQuantity
								? Math.min(newQuantity, item.maxQuantity)
								: newQuantity,
						};
						return { items };
					}

					// Add new item
					return {
						items: [
							...state.items,
							{
								...item,
								quantity: item.quantity || 1,
							},
						],
					};
				});
			},

			removeItem: (productId, variantId) => {
				set((state) => ({
					items: state.items.filter(
						(item) =>
							!(item.productId === productId && item.variantId === variantId),
					),
				}));
			},

			updateQuantity: (productId, quantity, variantId) => {
				if (quantity <= 0) {
					get().removeItem(productId, variantId);
					return;
				}

				set((state) => ({
					items: state.items.map((item) =>
						item.productId === productId && item.variantId === variantId
							? {
									...item,
									quantity: item.maxQuantity
										? Math.min(quantity, item.maxQuantity)
										: quantity,
								}
							: item,
					),
				}));
			},

			clearCart: () => set({ items: [] }),

			openCart: () => set({ isOpen: true }),
			closeCart: () => set({ isOpen: false }),
			toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

			getSubtotal: () => {
				return get().items.reduce(
					(total, item) => total + item.price * item.quantity,
					0,
				);
			},

			getItemCount: () => {
				return get().items.reduce((count, item) => count + item.quantity, 0);
			},
		}),
		{
			name: "boostcart-cart",
			partialize: (state) => ({ items: state.items }), // Only persist items
		},
	),
);

/**
 * Format price with currency
 */
export function formatPrice(price: number, currency = "EUR"): string {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
	}).format(price);
}
