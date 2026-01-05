"use client";

import { useTenant } from "@/providers/tenant-provider";
import {
	canDelete,
	canManage,
	canView,
	getPermissions,
	getRoleDescription,
	getRoleDisplayName,
	hasAllPermissions,
	hasAnyPermission,
	hasHigherOrEqualAuthority,
	hasPermission,
	type Permission,
} from "@/lib/rbac";
import type { StaffRole } from "@boostcart/database";

/**
 * Hook to access RBAC permissions for the current user
 */
export function usePermissions() {
	const { role, isLoading } = useTenant();

	return {
		role: role as StaffRole | null,
		isLoading,
		permissions: getPermissions(role),
		roleDisplayName: getRoleDisplayName(role),
		roleDescription: getRoleDescription(role),

		// Permission checks
		hasPermission: (permission: Permission) => hasPermission(role, permission),
		hasAnyPermission: (permissions: Permission[]) =>
			hasAnyPermission(role, permissions),
		hasAllPermissions: (permissions: Permission[]) =>
			hasAllPermissions(role, permissions),

		// Resource-based checks
		canView: (
			resource:
				| "dashboard"
				| "orders"
				| "products"
				| "categories"
				| "collections"
				| "brands"
				| "gift-cards"
				| "customers"
				| "content"
				| "files"
				| "discounts"
				| "promo-codes"
				| "reviews"
				| "analytics"
				| "settings"
				| "locales"
				| "payments"
				| "shipping"
				| "staff"
				| "billing"
		) => canView(role, resource),
		canManage: (
			resource:
				| "orders"
				| "products"
				| "categories"
				| "collections"
				| "brands"
				| "gift-cards"
				| "customers"
				| "content"
				| "files"
				| "discounts"
				| "promo-codes"
				| "reviews"
				| "settings"
				| "locales"
				| "payments"
				| "shipping"
				| "staff"
				| "billing"
		) => canManage(role, resource),
		canDelete: (
			resource: "orders" | "products" | "customers" | "staff" | "store"
		) => canDelete(role, resource),

		// Role comparison
		hasHigherOrEqualAuthority: (otherRole: StaffRole | string | null) =>
			hasHigherOrEqualAuthority(role, otherRole),

		// Quick role checks
		isOwner: role === "OWNER",
		isAdmin: role === "ADMIN" || role === "OWNER",
		isManager: role === "MANAGER" || role === "ADMIN" || role === "OWNER",
		isSupport:
			role === "SUPPORT" ||
			role === "MANAGER" ||
			role === "ADMIN" ||
			role === "OWNER",
		isViewer: !!role, // Everyone with a role can at least view
	};
}
