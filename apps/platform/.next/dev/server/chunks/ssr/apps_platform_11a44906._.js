module.exports = [
"[project]/apps/platform/src/lib/rbac.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canDelete",
    ()=>canDelete,
    "canManage",
    ()=>canManage,
    "canView",
    ()=>canView,
    "getPermissions",
    ()=>getPermissions,
    "getRoleDescription",
    ()=>getRoleDescription,
    "getRoleDisplayName",
    ()=>getRoleDisplayName,
    "hasAllPermissions",
    ()=>hasAllPermissions,
    "hasAnyPermission",
    ()=>hasAnyPermission,
    "hasHigherOrEqualAuthority",
    ()=>hasHigherOrEqualAuthority,
    "hasPermission",
    ()=>hasPermission
]);
/**
 * Permission matrix: defines which permissions each role has
 */ const ROLE_PERMISSIONS = {
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
        "store:delete"
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
        "billing:view"
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
        "shipping:view"
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
        "reviews:manage"
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
        "shipping:view"
    ]
};
function hasPermission(role, permission) {
    if (!role) return false;
    const permissions = ROLE_PERMISSIONS[role];
    if (!permissions) return false;
    return permissions.includes(permission);
}
function hasAnyPermission(role, permissions) {
    return permissions.some((permission)=>hasPermission(role, permission));
}
function hasAllPermissions(role, permissions) {
    return permissions.every((permission)=>hasPermission(role, permission));
}
function getPermissions(role) {
    if (!role) return [];
    return ROLE_PERMISSIONS[role] || [];
}
function canManage(role, resource) {
    return hasPermission(role, `${resource}:manage`);
}
function canView(role, resource) {
    return hasPermission(role, `${resource}:view`);
}
function canDelete(role, resource) {
    return hasPermission(role, `${resource}:delete`);
}
/**
 * Role hierarchy for comparison
 * Higher number = more authority
 */ const ROLE_HIERARCHY = {
    OWNER: 100,
    ADMIN: 80,
    MANAGER: 60,
    SUPPORT: 40,
    VIEWER: 20
};
function hasHigherOrEqualAuthority(roleA, roleB) {
    if (!roleA || !roleB) return false;
    const levelA = ROLE_HIERARCHY[roleA] || 0;
    const levelB = ROLE_HIERARCHY[roleB] || 0;
    return levelA >= levelB;
}
function getRoleDisplayName(role) {
    switch(role){
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
function getRoleDescription(role) {
    switch(role){
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
}),
"[project]/apps/platform/src/server/api/permissions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00a706a94a67eaefa12aeb99bd64b48e37f9f0772b":"getStaffContext","4045cc2fe045129d6de17f612ff98135a04ffafd77":"requireManagePermission","405327669be82b5cfae08b81e3953032e2dc2eaaec":"requireAnyPermission","405354f277500459ea1dcb0c25f54a859e4c7b9e90":"checkPermission","4055722279a37aeef7bab0f5707cb866ff97fb7787":"requireDeletePermission","407e524d5835fb8dc5e809ae480a06610149a5d886":"requirePermission","40e71060068dccb6588d96b5f289a9e5ac38ce84d8":"requireAllPermissions","40eb18c7363d41f684334f8756ed1ba9adde87b22c":"requireViewPermission"},"",""] */ __turbopack_context__.s([
    "checkPermission",
    ()=>checkPermission,
    "getStaffContext",
    ()=>getStaffContext,
    "requireAllPermissions",
    ()=>requireAllPermissions,
    "requireAnyPermission",
    ()=>requireAnyPermission,
    "requireDeletePermission",
    ()=>requireDeletePermission,
    "requireManagePermission",
    ()=>requireManagePermission,
    "requirePermission",
    ()=>requirePermission,
    "requireViewPermission",
    ()=>requireViewPermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/auth/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function getStaffContext() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"])();
    if (!session?.user?.id) {
        throw new Error("Unauthorized: Not authenticated");
    }
    // Get tenant from header (set by proxy)
    const headersList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const tenantSlug = headersList.get("x-tenant-slug");
    if (!tenantSlug) {
        throw new Error("Unauthorized: No tenant context");
    }
    // Get the tenant
    const tenant = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenant.findUnique({
        where: {
            slug: tenantSlug
        },
        select: {
            id: true
        }
    });
    if (!tenant) {
        throw new Error("Unauthorized: Tenant not found");
    }
    // Get staff record
    const staff = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantStaff.findFirst({
        where: {
            userId: session.user.id,
            tenantId: tenant.id
        },
        select: {
            role: true
        }
    });
    if (!staff) {
        throw new Error("Unauthorized: Not a staff member of this tenant");
    }
    return {
        userId: session.user.id,
        tenantId: tenant.id,
        role: staff.role
    };
}
async function requirePermission(permission) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasPermission"])(context.role, permission)) {
        throw new Error(`Forbidden: Missing permission '${permission}'`);
    }
    return context;
}
async function requireAnyPermission(permissions) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAnyPermission"])(context.role, permissions)) {
        throw new Error(`Forbidden: Missing required permissions`);
    }
    return context;
}
async function requireAllPermissions(permissions) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAllPermissions"])(context.role, permissions)) {
        throw new Error(`Forbidden: Missing required permissions`);
    }
    return context;
}
async function requireManagePermission(resource) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canManage"])(context.role, resource)) {
        throw new Error(`Forbidden: Cannot manage '${resource}'`);
    }
    return context;
}
async function requireViewPermission(resource) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canView"])(context.role, resource)) {
        throw new Error(`Forbidden: Cannot view '${resource}'`);
    }
    return context;
}
async function requireDeletePermission(resource) {
    const context = await getStaffContext();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canDelete"])(context.role, resource)) {
        throw new Error(`Forbidden: Cannot delete '${resource}'`);
    }
    return context;
}
async function checkPermission(permission) {
    try {
        const context = await getStaffContext();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasPermission"])(context.role, permission);
    } catch  {
        return false;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getStaffContext,
    requirePermission,
    requireAnyPermission,
    requireAllPermissions,
    requireManagePermission,
    requireViewPermission,
    requireDeletePermission,
    checkPermission
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStaffContext, "00a706a94a67eaefa12aeb99bd64b48e37f9f0772b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requirePermission, "407e524d5835fb8dc5e809ae480a06610149a5d886", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireAnyPermission, "405327669be82b5cfae08b81e3953032e2dc2eaaec", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireAllPermissions, "40e71060068dccb6588d96b5f289a9e5ac38ce84d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireManagePermission, "4045cc2fe045129d6de17f612ff98135a04ffafd77", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireViewPermission, "40eb18c7363d41f684334f8756ed1ba9adde87b22c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireDeletePermission, "4055722279a37aeef7bab0f5707cb866ff97fb7787", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkPermission, "405354f277500459ea1dcb0c25f54a859e4c7b9e90", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/src/server/api/internal/orders.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"0018caf7ecfc73ca43f40bb67967bd0ec4f22ee255":"getOrders","40995bc316754820abd7e4c31ca9df9afd983d04cf":"getOrder","603f2c49b464be270be1a3018e569542fb6c590d0e":"addOrderNote","60528fdb8c8ea176fda1580c390f83526bb75c4ade":"cancelOrder","608ac60c4b7d63c22d07dd35564735a6a40edcb4fa":"updatePaymentStatus","60e079db27af12220040e69aaae849adc6c7a51d39":"updateOrderStatus","7088c0965d1981c43495049974672facb6fd9deb87":"fulfillOrder"},"",""] */ __turbopack_context__.s([
    "addOrderNote",
    ()=>addOrderNote,
    "cancelOrder",
    ()=>cancelOrder,
    "fulfillOrder",
    ()=>fulfillOrder,
    "getOrder",
    ()=>getOrder,
    "getOrders",
    ()=>getOrders,
    "updateOrderStatus",
    ()=>updateOrderStatus,
    "updatePaymentStatus",
    ()=>updatePaymentStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/permissions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function requireOrderViewAccess() {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireViewPermission"])("orders");
}
async function requireOrderManageAccess() {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireManagePermission"])("orders");
}
async function getOrders() {
    const { tenantId } = await requireOrderViewAccess();
    const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.findMany({
        where: {
            tenantId
        },
        include: {
            customer: true,
            items: {
                include: {
                    selectedVariant: true,
                    product: true
                }
            },
            shippingMethod: true,
            paymentMethod: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return orders;
}
async function getOrder(id) {
    const { tenantId } = await requireOrderViewAccess();
    const order = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.findFirst({
        where: {
            id,
            tenantId
        },
        include: {
            customer: true,
            items: {
                include: {
                    selectedVariant: true,
                    product: true
                }
            },
            shippingMethod: true,
            paymentMethod: true,
            history: true,
            tenant: true
        }
    });
    if (!order) {
        throw new Error("Order not found");
    }
    return order;
}
async function updateOrderStatus(orderId, status) {
    const { tenantId } = await requireOrderManageAccess();
    // Verify order belongs to tenant
    const order = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.findFirst({
        where: {
            id: orderId,
            tenantId
        }
    });
    if (!order) {
        throw new Error("Order not found or access denied");
    }
    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.update({
        where: {
            id: orderId
        },
        data: {
            status
        }
    });
    return updated;
}
async function updatePaymentStatus(orderId, paymentStatus) {
    const { tenantId } = await requireOrderManageAccess();
    // Verify order belongs to tenant
    const order = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.findFirst({
        where: {
            id: orderId,
            tenantId
        }
    });
    if (!order) {
        throw new Error("Order not found or access denied");
    }
    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.update({
        where: {
            id: orderId
        },
        data: {
            paymentStatus
        }
    });
    return updated;
}
async function addOrderNote(orderId, note) {
    const { tenantId, userId } = await requireOrderManageAccess();
    // Verify order belongs to tenant
    const order = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.findFirst({
        where: {
            id: orderId,
            tenantId
        }
    });
    if (!order) {
        throw new Error("Order not found or access denied");
    }
    // Add note to order history instead
    const historyEntry = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orderHistory.create({
        data: {
            orderId,
            status: order.status,
            notes: note,
            userId
        }
    });
    return historyEntry;
}
async function cancelOrder(orderId, reason) {
    const { tenantId, userId } = await requireOrderManageAccess();
    // Verify order belongs to tenant
    const order = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.findFirst({
        where: {
            id: orderId,
            tenantId
        }
    });
    if (!order) {
        throw new Error("Order not found or access denied");
    }
    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.update({
        where: {
            id: orderId
        },
        data: {
            status: "CANCELLED",
            cancelledAt: new Date()
        }
    });
    // Add cancellation reason to history
    if (reason) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orderHistory.create({
            data: {
                orderId,
                status: "CANCELLED",
                notes: `Cancellation reason: ${reason}`,
                userId
            }
        });
    }
    return updated;
}
async function fulfillOrder(orderId, trackingNumber, trackingUrl) {
    const { tenantId, userId } = await requireOrderManageAccess();
    // Verify order belongs to tenant
    const order = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.findFirst({
        where: {
            id: orderId,
            tenantId
        }
    });
    if (!order) {
        throw new Error("Order not found or access denied");
    }
    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.update({
        where: {
            id: orderId
        },
        data: {
            status: "DELIVERED"
        }
    });
    // Add fulfillment info to history
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orderHistory.create({
        data: {
            orderId,
            status: "DELIVERED",
            notes: trackingNumber ? `Tracking: ${trackingNumber}${trackingUrl ? ` - ${trackingUrl}` : ""}` : undefined,
            userId
        }
    });
    return updated;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getOrders,
    getOrder,
    updateOrderStatus,
    updatePaymentStatus,
    addOrderNote,
    cancelOrder,
    fulfillOrder
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrders, "0018caf7ecfc73ca43f40bb67967bd0ec4f22ee255", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrder, "40995bc316754820abd7e4c31ca9df9afd983d04cf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateOrderStatus, "60e079db27af12220040e69aaae849adc6c7a51d39", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePaymentStatus, "608ac60c4b7d63c22d07dd35564735a6a40edcb4fa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addOrderNote, "603f2c49b464be270be1a3018e569542fb6c590d0e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(cancelOrder, "60528fdb8c8ea176fda1580c390f83526bb75c4ade", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fulfillOrder, "7088c0965d1981c43495049974672facb6fd9deb87", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/.next-internal/server/app/(internal)/admin/orders/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/platform/src/server/api/internal/orders.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/orders.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/.next-internal/server/app/(internal)/admin/orders/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/platform/src/server/api/internal/orders.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "0018caf7ecfc73ca43f40bb67967bd0ec4f22ee255",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrders"],
    "003bfcd7ac293af20dc22123ec44e81263e2c95347",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserStores"],
    "00b865bde8853c0b2200356e8a44aabbfda99ded8f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userHasStore"],
    "00f61908051b9076d3d4981917b5b0f4b9a64a3f03",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentTenant"],
    "40177cd97a285945b21e6d3751ddbdc14238608821",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStore"],
    "40ece7c8b327f75aed046925634f22b2bd96f4eb54",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkSlugAvailability"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$orders$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/platform/.next-internal/server/app/(internal)/admin/orders/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/orders.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/orders.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$orders$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$orders$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=apps_platform_11a44906._.js.map