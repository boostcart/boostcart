"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartItem {
	id: string; // variant ID or product ID if no variant
	productId: string;
	variantId: string | null;
	name: string;
	variantName: string | null;
	slug: string;
	price: number;
	compareAtPrice: number | null;
	quantity: number;
	image: string | null;
	maxQuantity?: number; // For inventory tracking
}

interface CartState {
	items: CartItem[];
	isOpen: boolean;

	// Actions
	addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
	removeItem: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
	clearCart: () => void;
	toggleCart: () => void;
	openCart: () => void;
	closeCart: () => void;

	// Computed (call these as methods)
	getItemCount: () => number;
	getSubtotal: () => number;
	getSavings: () => number;
}

export const useCartStore = create<CartState>()(
	persist(
		(set, get) => ({
			items: [],
			isOpen: false,

			addItem: (item) => {
				const { items } = get();
				const existingItem = items.find((i) => i.id === item.id);

				if (existingItem) {
					// Update quantity if item exists
					const newQuantity = existingItem.quantity + (item.quantity || 1);
					const maxQty = existingItem.maxQuantity;

					set({
						items: items.map((i) =>
							i.id === item.id
								? {
										...i,
										quantity: maxQty
											? Math.min(newQuantity, maxQty)
											: newQuantity,
									}
								: i,
						),
					});
				} else {
					// Add new item
					set({
						items: [...items, { ...item, quantity: item.quantity || 1 }],
					});
				}
			},

			removeItem: (id) => {
				set({ items: get().items.filter((item) => item.id !== id) });
			},

			updateQuantity: (id, quantity) => {
				if (quantity <= 0) {
					get().removeItem(id);
					return;
				}

				const { items } = get();
				set({
					items: items.map((item) => {
						if (item.id !== id) return item;
						const maxQty = item.maxQuantity;
						return {
							...item,
							quantity: maxQty ? Math.min(quantity, maxQty) : quantity,
						};
					}),
				});
			},

			clearCart: () => {
				set({ items: [] });
			},

			toggleCart: () => {
				set({ isOpen: !get().isOpen });
			},

			openCart: () => {
				set({ isOpen: true });
			},

			closeCart: () => {
				set({ isOpen: false });
			},

			getItemCount: () => {
				return get().items.reduce((total, item) => total + item.quantity, 0);
			},

			getSubtotal: () => {
				return get().items.reduce(
					(total, item) => total + item.price * item.quantity,
					0,
				);
			},

			getSavings: () => {
				return get().items.reduce((total, item) => {
					if (item.compareAtPrice && item.compareAtPrice > item.price) {
						return total + (item.compareAtPrice - item.price) * item.quantity;
					}
					return total;
				}, 0);
			},
		}),
		{
			name: "cart-storage",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ items: state.items }), // Only persist items, not isOpen
		},
	),
);
