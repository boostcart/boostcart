import type { Tenant, TenantStaff } from "@boostcart/database";
import { createContext, useContext } from "react";

export interface TenantContextValue {
	tenant: Tenant | null;
	staff: TenantStaff | null;
	isLoading: boolean;
}

export const TenantContext = createContext<TenantContextValue>({
	tenant: null,
	staff: null,
	isLoading: true,
});

export function useTenant() {
	const context = useContext(TenantContext);
	if (!context) {
		throw new Error("useTenant must be used within a TenantProvider");
	}
	return context;
}

export function useTenantId() {
	const { tenant } = useTenant();
	if (!tenant) {
		throw new Error("No tenant found in context");
	}
	return tenant.id;
}
