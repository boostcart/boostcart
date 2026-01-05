module.exports = [
"[project]/apps/platform/src/lib/tenant.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "clearTenantCache",
    ()=>clearTenantCache,
    "getTenantByDomain",
    ()=>getTenantByDomain,
    "getTenantBySlug",
    ()=>getTenantBySlug,
    "getTenantFromRequest",
    ()=>getTenantFromRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
// Cache for tenant lookups
const tenantCache = new Map();
const CACHE_TTL = 60 * 1000; // 1 minute
async function getTenantBySlug(slug) {
    // Check cache first
    const cached = tenantCache.get(`slug:${slug}`);
    if (cached && cached.expiry > Date.now()) {
        return cached.tenant;
    }
    const tenant = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenant.findFirst({
        where: {
            slug,
            isActive: true,
            deletedAt: null
        }
    });
    if (tenant) {
        tenantCache.set(`slug:${slug}`, {
            tenant,
            expiry: Date.now() + CACHE_TTL
        });
    }
    return tenant;
}
async function getTenantByDomain(domain) {
    // Check cache first
    const cached = tenantCache.get(`domain:${domain}`);
    if (cached && cached.expiry > Date.now()) {
        return cached.tenant;
    }
    const tenantDomain = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.findFirst({
        where: {
            domain,
            dnsVerified: true
        },
        include: {
            tenant: true
        }
    });
    if (tenantDomain?.tenant && tenantDomain.tenant.isActive) {
        tenantCache.set(`domain:${domain}`, {
            tenant: tenantDomain.tenant,
            expiry: Date.now() + CACHE_TTL
        });
        return tenantDomain.tenant;
    }
    return null;
}
async function getTenantFromRequest(hostname) {
    if (!hostname) return null;
    // Remove port if present
    const host = hostname.split(":")[0];
    if (!host) return null;
    // Check if it's the main platform domain
    const platformDomains = [
        "boostcart.bg",
        "localhost",
        "127.0.0.1"
    ];
    const isMainDomain = platformDomains.some((d)=>host === d || host === `www.${d}`);
    if (isMainDomain) {
        // No tenant for main domain
        return null;
    }
    // Check for subdomain (e.g., store.boostcart.bg)
    const subdomainMatch = host.match(/^([a-z0-9-]+)\.boostcart\.bg$/i);
    if (subdomainMatch?.[1]) {
        const slug = subdomainMatch[1];
        // Skip common subdomains
        if ([
            "www",
            "api",
            "admin",
            "staging",
            "dev"
        ].includes(slug)) {
            return null;
        }
        return getTenantBySlug(slug);
    }
    // Check for local dev subdomain (e.g., store.localhost)
    const localSubdomainMatch = host.match(/^([a-z0-9-]+)\.localhost$/i);
    if (localSubdomainMatch?.[1]) {
        return getTenantBySlug(localSubdomainMatch[1]);
    }
    // Otherwise, check if it's a custom domain
    return getTenantByDomain(host);
}
function clearTenantCache(identifier) {
    if (identifier) {
        tenantCache.delete(`slug:${identifier}`);
        tenantCache.delete(`domain:${identifier}`);
    } else {
        tenantCache.clear();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/src/server/tenant.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"001d80d23ee4de084e157d4e89620a1865cf7a84db":"requireTenant","00ac6fbe1edbf277cbe10ce51119339897cf9c40fc":"requireAdminTenant","00ef7ea9c506c03d0e1da36234d82ac9c2fbdbb80d":"hasTenantContext","7f7d901350253c3c2a57e0fe127f4f59ebb0a7828e":"getCurrentTenant","7fb08b94911a0ec057cd4150fe6878164206608e71":"getAdminTenant"},"",""] */ __turbopack_context__.s([
    "getAdminTenant",
    ()=>getAdminTenant,
    "getCurrentTenant",
    ()=>getCurrentTenant,
    "hasTenantContext",
    ()=>hasTenantContext,
    "requireAdminTenant",
    ()=>requireAdminTenant,
    "requireTenant",
    ()=>requireTenant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/auth/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const getCurrentTenant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const headersList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    // Check for tenant slug from subdomain
    const tenantSlug = headersList.get("x-tenant-slug");
    if (tenantSlug) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantBySlug"])(tenantSlug);
    }
    // Check for custom domain
    const customDomain = headersList.get("x-custom-domain");
    if (customDomain) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTenantByDomain"])(customDomain);
    }
    return null;
});
const getAdminTenant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"])();
    if (!session?.user?.id) {
        return null;
    }
    // Get the user's primary store (first store they have access to)
    const staffRecord = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantStaff.findFirst({
        where: {
            userId: session.user.id
        },
        include: {
            tenant: true
        },
        orderBy: {
            createdAt: "asc"
        }
    });
    return staffRecord?.tenant ?? null;
});
async function requireTenant() {
    const tenant = await getCurrentTenant();
    if (!tenant) {
        throw new Error("Tenant not found");
    }
    return tenant;
}
async function requireAdminTenant() {
    // First try storefront context (subdomain access)
    const storefrontTenant = await getCurrentTenant();
    if (storefrontTenant) {
        return storefrontTenant;
    }
    // Fall back to user's store (main domain admin access)
    const adminTenant = await getAdminTenant();
    if (adminTenant) {
        return adminTenant;
    }
    throw new Error("No tenant context found. Please create or select a store.");
}
async function hasTenantContext() {
    const tenant = await getCurrentTenant();
    return tenant !== null;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    requireTenant,
    requireAdminTenant,
    hasTenantContext,
    getCurrentTenant,
    getAdminTenant
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireTenant, "001d80d23ee4de084e157d4e89620a1865cf7a84db", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requireAdminTenant, "00ac6fbe1edbf277cbe10ce51119339897cf9c40fc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(hasTenantContext, "00ef7ea9c506c03d0e1da36234d82ac9c2fbdbb80d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurrentTenant, "7f7d901350253c3c2a57e0fe127f4f59ebb0a7828e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdminTenant, "7fb08b94911a0ec057cd4150fe6878164206608e71", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$rbac$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/rbac.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    // Get tenant context (from subdomain or user's store membership)
    const tenant = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminTenant"])();
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
"[project]/apps/platform/src/server/api/internal/domains.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"0039aec277912afd4d01246ac7ba2e72032eb260d6":"getDomains","400cabd68b4758a91a7e4b77cbe129dfbf0f92627b":"getDomainVerificationInstructions","40335ab5226bd948dde18f66fa41d2c6a492e3f2b0":"verifyDomain","405fa7bfc89c3d069e3466cebb96251ed386e72bac":"setPrimaryDomain","4067d84f3892469279bff7c939554a56cd19b0b31e":"getDomain","4095bfdbff7509e269d164352ff3e406f53a8bc2a2":"removeDomain","40cc31663a422896f468a3f28d2a20f5fe65de730b":"refreshDnsToken","40e9db0f701fb5732c69ea6fc1a7e77244d5237ab6":"addDomain"},"",""] */ __turbopack_context__.s([
    "addDomain",
    ()=>addDomain,
    "getDomain",
    ()=>getDomain,
    "getDomainVerificationInstructions",
    ()=>getDomainVerificationInstructions,
    "getDomains",
    ()=>getDomains,
    "refreshDnsToken",
    ()=>refreshDnsToken,
    "removeDomain",
    ()=>removeDomain,
    "setPrimaryDomain",
    ()=>setPrimaryDomain,
    "verifyDomain",
    ()=>verifyDomain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/permissions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
// Validation schemas
const AddDomainSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    domain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Domain is required").regex(/^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, "Invalid domain format").transform((d)=>d.toLowerCase())
});
async function getDomains() {
    const { tenantId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireViewPermission"])("settings");
    const domains = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.findMany({
        where: {
            tenantId
        },
        orderBy: [
            {
                isPrimary: "desc"
            },
            {
                createdAt: "asc"
            }
        ]
    });
    return domains;
}
async function getDomain(domainId) {
    const { tenantId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireViewPermission"])("settings");
    const domain = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.findFirst({
        where: {
            id: domainId,
            tenantId
        }
    });
    if (!domain) {
        throw new Error("Domain not found");
    }
    return domain;
}
async function addDomain(input) {
    const { tenantId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireManagePermission"])("settings");
    const validated = AddDomainSchema.parse(input);
    // Check if domain already exists (globally)
    const existingDomain = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.findUnique({
        where: {
            domain: validated.domain
        }
    });
    if (existingDomain) {
        throw new Error("This domain is already in use");
    }
    // Check domain limit (e.g., max 5 custom domains per tenant)
    const domainCount = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.count({
        where: {
            tenantId
        }
    });
    if (domainCount >= 5) {
        throw new Error("Maximum number of custom domains reached (5)");
    }
    // Create the domain with a verification token
    const domain = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.create({
        data: {
            tenantId,
            domain: validated.domain,
            isPrimary: domainCount === 0,
            sslStatus: "pending",
            dnsVerified: false
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/settings/domains");
    return domain;
}
async function removeDomain(domainId) {
    const { tenantId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireManagePermission"])("settings");
    const domain = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.findFirst({
        where: {
            id: domainId,
            tenantId
        }
    });
    if (!domain) {
        throw new Error("Domain not found");
    }
    // Don't allow removing the primary domain if others exist
    if (domain.isPrimary) {
        const otherDomains = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.count({
            where: {
                tenantId,
                id: {
                    not: domainId
                }
            }
        });
        if (otherDomains > 0) {
            throw new Error("Cannot remove primary domain. Set another domain as primary first.");
        }
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.delete({
        where: {
            id: domainId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/settings/domains");
    return {
        success: true
    };
}
async function setPrimaryDomain(domainId) {
    const { tenantId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireManagePermission"])("settings");
    const domain = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.findFirst({
        where: {
            id: domainId,
            tenantId
        }
    });
    if (!domain) {
        throw new Error("Domain not found");
    }
    if (!domain.dnsVerified) {
        throw new Error("Domain must be verified before setting as primary");
    }
    // Update all domains: unset current primary, set new primary
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].$transaction([
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.updateMany({
            where: {
                tenantId,
                isPrimary: true
            },
            data: {
                isPrimary: false
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.update({
            where: {
                id: domainId
            },
            data: {
                isPrimary: true
            }
        })
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/settings/domains");
    return {
        success: true
    };
}
async function verifyDomain(domainId) {
    const { tenantId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireManagePermission"])("settings");
    const domain = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.findFirst({
        where: {
            id: domainId,
            tenantId
        }
    });
    if (!domain) {
        throw new Error("Domain not found");
    }
    // Perform DNS verification
    const isVerified = await checkDnsVerification(domain.domain, domain.dnsToken);
    if (isVerified) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.update({
            where: {
                id: domainId
            },
            data: {
                dnsVerified: true,
                sslStatus: "provisioning"
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/settings/domains");
        return {
            success: true,
            verified: true
        };
    }
    return {
        success: true,
        verified: false
    };
}
async function refreshDnsToken(domainId) {
    const { tenantId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireManagePermission"])("settings");
    const domain = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.findFirst({
        where: {
            id: domainId,
            tenantId
        }
    });
    if (!domain) {
        throw new Error("Domain not found");
    }
    // Generate a new token by updating the record (cuid will auto-generate)
    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.update({
        where: {
            id: domainId
        },
        data: {
            dnsToken: generateVerificationToken(),
            dnsVerified: false
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/settings/domains");
    return updated;
}
// Helper function to check DNS TXT record
async function checkDnsVerification(domain, expectedToken) {
    try {
        // Use DNS over HTTPS (Cloudflare) for verification
        const response = await fetch(`https://cloudflare-dns.com/dns-query?name=_boostcart-verification.${domain}&type=TXT`, {
            headers: {
                Accept: "application/dns-json"
            }
        });
        if (!response.ok) {
            return false;
        }
        const data = await response.json();
        if (!data.Answer || !Array.isArray(data.Answer)) {
            return false;
        }
        // Check if any TXT record contains our verification token
        for (const answer of data.Answer){
            if (answer.type === 16) {
                // TXT record type
                const txtValue = answer.data?.replace(/"/g, "");
                if (txtValue === `boostcart-verify=${expectedToken}`) {
                    return true;
                }
            }
        }
        return false;
    } catch (error) {
        console.error("DNS verification error:", error);
        return false;
    }
}
// Helper function to generate verification token
function generateVerificationToken() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for(let i = 0; i < 32; i++){
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}
async function getDomainVerificationInstructions(domainId) {
    const { tenantId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$permissions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireViewPermission"])("settings");
    const domain = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantDomain.findFirst({
        where: {
            id: domainId,
            tenantId
        }
    });
    if (!domain) {
        throw new Error("Domain not found");
    }
    return {
        domain: domain.domain,
        dnsToken: domain.dnsToken,
        verified: domain.dnsVerified,
        instructions: {
            type: "TXT",
            host: `_boostcart-verification.${domain.domain}`,
            value: `boostcart-verify=${domain.dnsToken}`,
            ttl: 3600,
            cname: {
                host: domain.domain,
                value: "cname.boostcart.bg"
            }
        }
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getDomains,
    getDomain,
    addDomain,
    removeDomain,
    setPrimaryDomain,
    verifyDomain,
    refreshDnsToken,
    getDomainVerificationInstructions
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDomains, "0039aec277912afd4d01246ac7ba2e72032eb260d6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDomain, "4067d84f3892469279bff7c939554a56cd19b0b31e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addDomain, "40e9db0f701fb5732c69ea6fc1a7e77244d5237ab6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeDomain, "4095bfdbff7509e269d164352ff3e406f53a8bc2a2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setPrimaryDomain, "405fa7bfc89c3d069e3466cebb96251ed386e72bac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyDomain, "40335ab5226bd948dde18f66fa41d2c6a492e3f2b0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(refreshDnsToken, "40cc31663a422896f468a3f28d2a20f5fe65de730b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDomainVerificationInstructions, "400cabd68b4758a91a7e4b77cbe129dfbf0f92627b", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/.next-internal/server/app/(internal)/admin/settings/domains/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/platform/src/server/api/internal/domains.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/domains.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/.next-internal/server/app/(internal)/admin/settings/domains/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/platform/src/server/api/internal/domains.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "0039aec277912afd4d01246ac7ba2e72032eb260d6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDomains"],
    "003bfcd7ac293af20dc22123ec44e81263e2c95347",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserStores"],
    "00b865bde8853c0b2200356e8a44aabbfda99ded8f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userHasStore"],
    "00f61908051b9076d3d4981917b5b0f4b9a64a3f03",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentTenant"],
    "400cabd68b4758a91a7e4b77cbe129dfbf0f92627b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDomainVerificationInstructions"],
    "40177cd97a285945b21e6d3751ddbdc14238608821",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStore"],
    "40335ab5226bd948dde18f66fa41d2c6a492e3f2b0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyDomain"],
    "405fa7bfc89c3d069e3466cebb96251ed386e72bac",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setPrimaryDomain"],
    "4095bfdbff7509e269d164352ff3e406f53a8bc2a2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeDomain"],
    "40cc31663a422896f468a3f28d2a20f5fe65de730b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["refreshDnsToken"],
    "40e9db0f701fb5732c69ea6fc1a7e77244d5237ab6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDomain"],
    "40ece7c8b327f75aed046925634f22b2bd96f4eb54",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkSlugAvailability"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$settings$2f$domains$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/platform/.next-internal/server/app/(internal)/admin/settings/domains/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/domains.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/domains.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$settings$2f$domains$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$settings$2f$domains$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$domains$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=apps_platform_baff0c0d._.js.map