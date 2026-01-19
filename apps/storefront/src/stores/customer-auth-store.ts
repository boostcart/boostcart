"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Customer {
	id: string;
	email: string;
	firstName: string | null;
	lastName: string | null;
	phone: string | null;
}

interface CustomerAuthState {
	customer: Customer | null;
	accessToken: string | null;
	isLoading: boolean;

	// Actions
	setCustomer: (customer: Customer | null) => void;
	setAccessToken: (token: string | null) => void;
	setLoading: (loading: boolean) => void;
	clear: () => void;
}

export const useCustomerAuth = create<CustomerAuthState>()(
	persist(
		(set) => ({
			customer: null,
			accessToken: null,
			isLoading: true,

			setCustomer: (customer) => set({ customer }),
			setAccessToken: (accessToken) => set({ accessToken }),
			setLoading: (isLoading) => set({ isLoading }),
			clear: () => set({ customer: null, accessToken: null }),
		}),
		{
			name: "customer-auth",
			partialize: (state) => ({
				// Only persist the access token, customer data will be fetched fresh
				accessToken: state.accessToken,
			}),
		},
	),
);
