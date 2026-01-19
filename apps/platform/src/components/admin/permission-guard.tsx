"use client";

import type { ReactNode } from "react";
import { usePermissions } from "@/hooks/use-permissions";
import type { Permission } from "@/lib/rbac";

interface PermissionGuardProps {
	/** Single permission required */
	permission?: Permission;
	/** Multiple permissions - user must have ALL of them */
	permissions?: Permission[];
	/** Multiple permissions - user must have ANY of them */
	anyPermission?: Permission[];
	/** What to show when user has permission */
	children: ReactNode;
	/** What to show when user doesn't have permission (optional) */
	fallback?: ReactNode;
}

/**
 * Component that conditionally renders children based on user permissions
 *
 * @example
 * // Single permission
 * <PermissionGuard permission="products:manage">
 *   <Button>Edit Product</Button>
 * </PermissionGuard>
 *
 * @example
 * // Any of multiple permissions
 * <PermissionGuard anyPermission={["orders:manage", "orders:view"]}>
 *   <OrdersList />
 * </PermissionGuard>
 *
 * @example
 * // All permissions required
 * <PermissionGuard permissions={["staff:view", "staff:manage"]}>
 *   <StaffEditor />
 * </PermissionGuard>
 *
 * @example
 * // With fallback
 * <PermissionGuard permission="analytics:view" fallback={<AccessDenied />}>
 *   <Analytics />
 * </PermissionGuard>
 */
export function PermissionGuard({
	permission,
	permissions,
	anyPermission,
	children,
	fallback = null,
}: PermissionGuardProps) {
	const { hasPermission, hasAllPermissions, hasAnyPermission, isLoading } =
		usePermissions();

	// While loading, don't render anything or show a loading state
	if (isLoading) {
		return null;
	}

	let hasAccess = false;

	if (permission) {
		hasAccess = hasPermission(permission);
	} else if (permissions && permissions.length > 0) {
		hasAccess = hasAllPermissions(permissions);
	} else if (anyPermission && anyPermission.length > 0) {
		hasAccess = hasAnyPermission(anyPermission);
	} else {
		// No permission specified, allow access
		hasAccess = true;
	}

	if (hasAccess) {
		return <>{children}</>;
	}

	return <>{fallback}</>;
}

/**
 * Component that hides children if user has the specified permission
 * Useful for hiding "upgrade" or "contact admin" messages for users with access
 */
export function HideIfHasPermission({
	permission,
	children,
}: {
	permission: Permission;
	children: ReactNode;
}) {
	const { hasPermission, isLoading } = usePermissions();

	if (isLoading || hasPermission(permission)) {
		return null;
	}

	return <>{children}</>;
}

/**
 * HOC to wrap a component with permission check
 */
export function withPermission<P extends object>(
	WrappedComponent: React.ComponentType<P>,
	permission: Permission,
	Fallback?: React.ComponentType,
) {
	return function PermissionProtectedComponent(props: P) {
		return (
			<PermissionGuard
				permission={permission}
				fallback={Fallback ? <Fallback /> : null}
			>
				<WrappedComponent {...props} />
			</PermissionGuard>
		);
	};
}
