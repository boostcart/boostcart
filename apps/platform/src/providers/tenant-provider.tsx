"use client";

import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { getCurrentTenant } from "@/server/api/private/tenant";

interface Tenant {
	id: string;
	name: string;
	slug: string;
	email: string;
	billingStatus: string;
	trialEndsAt: Date | null;
	currency: string;
	locale: string;
	logoUrl: string | null;
}

interface TenantStats {
	totalProducts: number;
	totalOrders: number;
	totalCustomers: number;
	totalRevenue: number;
}

interface TenantContextType {
	tenant: Tenant | null;
	role: string | null;
	stats: TenantStats;
	isLoading: boolean;
	refresh: () => Promise<void>;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export function TenantProvider({ children }: { children: ReactNode }) {
	const [tenant, setTenant] = useState<Tenant | null>(null);
	const [role, setRole] = useState<string | null>(null);
	const [stats, setStats] = useState<TenantStats>({
		totalProducts: 0,
		totalOrders: 0,
		totalCustomers: 0,
		totalRevenue: 0,
	});
	const [isLoading, setIsLoading] = useState(true);

	const fetchTenant = useCallback(async () => {
		try {
			setIsLoading(true);
			const result = await getCurrentTenant();
			setTenant(result.tenant);
			setRole(result.role);
			setStats(result.stats);
		} catch (error) {
			console.error("Failed to fetch tenant:", error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchTenant();
	}, [fetchTenant]);

	return (
		<TenantContext.Provider
			value={{
				tenant,
				role,
				stats,
				isLoading,
				refresh: fetchTenant,
			}}
		>
			{children}
		</TenantContext.Provider>
	);
}

export function useTenant() {
	const context = useContext(TenantContext);
	if (context === undefined) {
		throw new Error("useTenant must be used within a TenantProvider");
	}
	return context;
}
