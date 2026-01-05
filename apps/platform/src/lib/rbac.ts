import type { StaffRole } from "@boostcart/database";

/**
 * Permission definitions for the BoostCart admin dashboard
 *
 * Role Hierarchy:
 * - OWNER: Full access, can manage staff, billing, delete store
 * - ADMIN: Almost full access, can manage most settings
 * - MANAGER: Can manage products, orders, customers, content
 * - SUPPORT: Can view and manage orders, customers (read-only products)
 * - VIEWER: Read-only access to everything
 */

export type Permission =
	// Navigation / Page Access
	| "dashboard:view"
	| "orders:view"
	| "orders:manage"
	| "orders:delete"
	| "products:view"
	| "products:manage"
	| "products:delete"
	| "categories:view"
	| "categories:manage"
	| "collections:view"
	| "collections:manage"
	| "brands:view"
	| "brands:manage"
	| "gift-cards:view"
	| "gift-cards:manage"
	| "customers:view"
	| "customers:manage"
	| "customers:delete"
	| "content:view"
	| "content:manage"
	| "files:view"
	| "files:manage"
	| "discounts:view"
	| "discounts:manage"
	| "promo-codes:view"
	| "promo-codes:manage"
	| "reviews:view"
	| "reviews:manage"
	| "analytics:view"
	// Settings
	| "settings:view"
	| "settings:manage"
	| "locales:view"
	| "locales:manage"
	| "payments:view"
	| "payments:manage"
	| "shipping:view"
	| "shipping:manage"
	// Staff management
	| "staff:view"
	| "staff:manage"
	| "staff:delete"
	// Billing & Store
	| "billing:view"
	| "billing:manage"
	| "store:delete";

/**
 * Permission matrix: defines which permissions each role has
 */
const ROLE_PERMISSIONS: Record<StaffRole, Permission[]> = {
	OWNER: [
		// Full access to everything
		"dashboard:view",
		"orders:view",
		"orders:manage",
		"orders:delete",
		"products:view",
		"products:manage",
		"products:delete",
		"categories:view",
		"categories:manage",
		"collections:view",
		"collections:manage",
		"brands:view",
		"brands:manage",
		"gift-cards:view",
		"gift-cards:manage",
		"customers:view",
		"customers:manage",
		"customers:delete",
		"content:view",
		"content:manage",
		"files:view",
		"files:manage",
		"discounts:view",
		"discounts:manage",
		"promo-codes:view",
		"promo-codes:manage",
		"reviews:view",
		"reviews:manage",
		"analytics:view",
		"settings:view",
		"settings:manage",
		"locales:view",
		"locales:manage",
		"payments:view",
		"payments:manage",
		"shipping:view",
		"shipping:manage",
		"staff:view",
		"staff:manage",
		"staff:delete",
		"billing:view",
		"billing:manage",
		"store:delete",
	],

	ADMIN: [
		// Almost full access, except billing management and store deletion
		"dashboard:view",
		"orders:view",
		"orders:manage",
		"orders:delete",
		"products:view",
		"products:manage",
		"products:delete",
		"categories:view",
		"categories:manage",
		"collections:view",
		"collections:manage",
		"brands:view",
		"brands:manage",
		"gift-cards:view",
		"gift-cards:manage",
		"customers:view",
		"customers:manage",
		"customers:delete",
		"content:view",
		"content:manage",
		"files:view",
		"files:manage",
		"discounts:view",
		"discounts:manage",
		"promo-codes:view",
		"promo-codes:manage",
		"reviews:view",
		"reviews:manage",
		"analytics:view",
		"settings:view",
		"settings:manage",
		"locales:view",
		"locales:manage",
		"payments:view",
		"payments:manage",
		"shipping:view",
		"shipping:manage",
		"staff:view",
		"staff:manage",
		"billing:view",
	],

	MANAGER: [
		// Can manage products, orders, customers, content
		"dashboard:view",
		"orders:view",
		"orders:manage",
		"products:view",
		"products:manage",
		"categories:view",
		"categories:manage",
		"collections:view",
		"collections:manage",
		"brands:view",
		"brands:manage",
		"gift-cards:view",
		"gift-cards:manage",
		"customers:view",
		"customers:manage",
		"content:view",
		"content:manage",
		"files:view",
		"files:manage",
		"discounts:view",
		"discounts:manage",
		"promo-codes:view",
		"promo-codes:manage",
		"reviews:view",
		"reviews:manage",
		"analytics:view",
		"settings:view",
		"locales:view",
		"payments:view",
		"shipping:view",
	],

	SUPPORT: [
		// Can view most things, manage orders and customers only
		"dashboard:view",
		"orders:view",
		"orders:manage",
		"products:view",
		"categories:view",
		"collections:view",
		"brands:view",
		"gift-cards:view",
		"customers:view",
		"customers:manage",
		"content:view",
		"files:view",
		"discounts:view",
		"promo-codes:view",
		"reviews:view",
		"reviews:manage",
	],

	VIEWER: [
		// Read-only access
		"dashboard:view",
		"orders:view",
		"products:view",
		"categories:view",
		"collections:view",
		"brands:view",
		"gift-cards:view",
		"customers:view",
		"content:view",
		"files:view",
		"discounts:view",
		"promo-codes:view",
		"reviews:view",
		"analytics:view",
		"settings:view",
		"locales:view",
		"payments:view",
		"shipping:view",
	],
};

/**
 * Check if a role has a specific permission
 */
export function hasPermission(
	role: StaffRole | string | null,
	permission: Permission
): boolean {
	if (!role) return false;
	const permissions = ROLE_PERMISSIONS[role as StaffRole];
	if (!permissions) return false;
	return permissions.includes(permission);
}

/**
 * Check if a role has any of the specified permissions
 */
export function hasAnyPermission(
	role: StaffRole | string | null,
	permissions: Permission[]
): boolean {
	return permissions.some((permission) => hasPermission(role, permission));
}

/**
 * Check if a role has all of the specified permissions
 */
export function hasAllPermissions(
	role: StaffRole | string | null,
	permissions: Permission[]
): boolean {
	return permissions.every((permission) => hasPermission(role, permission));
}

/**
 * Get all permissions for a role
 */
export function getPermissions(role: StaffRole | string | null): Permission[] {
	if (!role) return [];
	return ROLE_PERMISSIONS[role as StaffRole] || [];
}

/**
 * Check if role can manage (create/edit/delete) a resource
 */
export function canManage(
	role: StaffRole | string | null,
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
): boolean {
	return hasPermission(role, `${resource}:manage` as Permission);
}

/**
 * Check if role can view a resource
 */
export function canView(
	role: StaffRole | string | null,
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
): boolean {
	return hasPermission(role, `${resource}:view` as Permission);
}

/**
 * Check if role can delete a resource
 */
export function canDelete(
	role: StaffRole | string | null,
	resource: "orders" | "products" | "customers" | "staff" | "store"
): boolean {
	return hasPermission(role, `${resource}:delete` as Permission);
}

/**
 * Role hierarchy for comparison
 * Higher number = more authority
 */
const ROLE_HIERARCHY: Record<StaffRole, number> = {
	OWNER: 100,
	ADMIN: 80,
	MANAGER: 60,
	SUPPORT: 40,
	VIEWER: 20,
};

/**
 * Check if roleA has higher or equal authority than roleB
 */
export function hasHigherOrEqualAuthority(
	roleA: StaffRole | string | null,
	roleB: StaffRole | string | null
): boolean {
	if (!roleA || !roleB) return false;
	const levelA = ROLE_HIERARCHY[roleA as StaffRole] || 0;
	const levelB = ROLE_HIERARCHY[roleB as StaffRole] || 0;
	return levelA >= levelB;
}

/**
 * Get display name for a role
 */
export function getRoleDisplayName(role: StaffRole | string | null): string {
	switch (role) {
		case "OWNER":
			return "Owner";
		case "ADMIN":
			return "Administrator";
		case "MANAGER":
			return "Manager";
		case "SUPPORT":
			return "Support";
		case "VIEWER":
			return "Viewer";
		default:
			return "Unknown";
	}
}

/**
 * Get role description
 */
export function getRoleDescription(role: StaffRole | string | null): string {
	switch (role) {
		case "OWNER":
			return "Full access to everything including billing and staff management";
		case "ADMIN":
			return "Manage all store operations except billing";
		case "MANAGER":
			return "Manage products, orders, customers, and content";
		case "SUPPORT":
			return "Handle customer orders and inquiries";
		case "VIEWER":
			return "View-only access to store data";
		default:
			return "Unknown role";
	}
}
