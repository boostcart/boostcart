"use server";

import { db } from "@/server/db";
import { auth } from "@/server/auth";
import { requireAdminTenant } from "@/server/tenant";
import type { StaffRole } from "@boostcart/database";
import {
	hasPermission,
	hasAnyPermission,
	hasAllPermissions,
	canManage,
	canView,
	canDelete,
	type Permission,
} from "@/lib/rbac";

interface StaffContext {
	userId: string;
	tenantId: string;
	role: StaffRole;
}

/**
 * Get the current staff context (user, tenant, role)
 * Throws an error if the user is not authenticated or not a staff member
 */
export async function getStaffContext(): Promise<StaffContext> {
	const session = await auth();

	if (!session?.user?.id) {
		throw new Error("Unauthorized: Not authenticated");
	}

	// Get tenant context (from subdomain or user's store membership)
	const tenant = await requireAdminTenant();

	// Get staff record
	const staff = await db.tenantStaff.findFirst({
		where: {
			userId: session.user.id,
			tenantId: tenant.id,
		},
		select: {
			role: true,
		},
	});

	if (!staff) {
		throw new Error("Unauthorized: Not a staff member of this tenant");
	}

	return {
		userId: session.user.id,
		tenantId: tenant.id,
		role: staff.role,
	};
}

/**
 * Require a specific permission to continue
 * Throws an error if the user doesn't have the required permission
 */
export async function requirePermission(permission: Permission): Promise<StaffContext> {
	const context = await getStaffContext();

	if (!hasPermission(context.role, permission)) {
		throw new Error(`Forbidden: Missing permission '${permission}'`);
	}

	return context;
}

/**
 * Require any of the specified permissions
 */
export async function requireAnyPermission(permissions: Permission[]): Promise<StaffContext> {
	const context = await getStaffContext();

	if (!hasAnyPermission(context.role, permissions)) {
		throw new Error(`Forbidden: Missing required permissions`);
	}

	return context;
}

/**
 * Require all of the specified permissions
 */
export async function requireAllPermissions(permissions: Permission[]): Promise<StaffContext> {
	const context = await getStaffContext();

	if (!hasAllPermissions(context.role, permissions)) {
		throw new Error(`Forbidden: Missing required permissions`);
	}

	return context;
}

/**
 * Require ability to manage a resource
 */
export async function requireManagePermission(
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
): Promise<StaffContext> {
	const context = await getStaffContext();

	if (!canManage(context.role, resource)) {
		throw new Error(`Forbidden: Cannot manage '${resource}'`);
	}

	return context;
}

/**
 * Require ability to view a resource
 */
export async function requireViewPermission(
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
): Promise<StaffContext> {
	const context = await getStaffContext();

	if (!canView(context.role, resource)) {
		throw new Error(`Forbidden: Cannot view '${resource}'`);
	}

	return context;
}

/**
 * Require ability to delete a resource
 */
export async function requireDeletePermission(
	resource: "orders" | "products" | "customers" | "staff" | "store"
): Promise<StaffContext> {
	const context = await getStaffContext();

	if (!canDelete(context.role, resource)) {
		throw new Error(`Forbidden: Cannot delete '${resource}'`);
	}

	return context;
}

/**
 * Check if current user has a permission (doesn't throw)
 */
export async function checkPermission(permission: Permission): Promise<boolean> {
	try {
		const context = await getStaffContext();
		return hasPermission(context.role, permission);
	} catch {
		return false;
	}
}
