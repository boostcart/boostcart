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
"[project]/apps/platform/src/server/api/internal/analytics.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"401fdcba2f5bcc0f653588826458ce0d0cad6eb5c7":"getOrdersByStatus","402172bd330f6f5bda19541dd1c2a49fd8d588d62d":"getAnalyticsOverview","402f731f5a490fbcf1f685f183c14ac0d0f9a3dcb5":"getRecentActivity","408168f4dc5eb182b23cab844a80c9c8e9e7b38247":"getRevenueByDay","603008f31faab29dde8cac93ce5016e9f4ba32508a":"getTopCategories","6064e5473817c2c6ffd582ff13e099eceeeeecfe1d":"getTopProducts"},"",""] */ __turbopack_context__.s([
    "getAnalyticsOverview",
    ()=>getAnalyticsOverview,
    "getOrdersByStatus",
    ()=>getOrdersByStatus,
    "getRecentActivity",
    ()=>getRecentActivity,
    "getRevenueByDay",
    ()=>getRevenueByDay,
    "getTopCategories",
    ()=>getTopCategories,
    "getTopProducts",
    ()=>getTopProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/auth/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function requireStoreAccess() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"])();
    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    }
    const tenant = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdminTenant"])();
    const staffRecord = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].tenantStaff.findFirst({
        where: {
            userId: session.user.id,
            tenantId: tenant.id
        }
    });
    if (!staffRecord) {
        throw new Error("Forbidden: No access to this store");
    }
    return {
        userId: session.user.id,
        tenantId: tenant.id,
        role: staffRecord.role
    };
}
// Get date range for analytics
function getDateRange(period) {
    const endDate = new Date();
    const startDate = new Date();
    switch(period){
        case "7days":
            startDate.setDate(endDate.getDate() - 7);
            break;
        case "30days":
            startDate.setDate(endDate.getDate() - 30);
            break;
        case "90days":
            startDate.setDate(endDate.getDate() - 90);
            break;
        case "year":
            startDate.setFullYear(endDate.getFullYear() - 1);
            break;
        default:
            startDate.setDate(endDate.getDate() - 30);
    }
    return {
        startDate,
        endDate
    };
}
async function getAnalyticsOverview(period = "30days") {
    const { tenantId } = await requireStoreAccess();
    const { startDate, endDate } = getDateRange(period);
    // Get previous period for comparison
    const periodLength = endDate.getTime() - startDate.getTime();
    const previousStartDate = new Date(startDate.getTime() - periodLength);
    const previousEndDate = startDate;
    // Current period orders
    const currentOrders = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.findMany({
        where: {
            tenantId,
            createdAt: {
                gte: startDate,
                lte: endDate
            }
        },
        select: {
            id: true,
            totalAmount: true,
            status: true
        }
    });
    // Previous period orders
    const previousOrders = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.findMany({
        where: {
            tenantId,
            createdAt: {
                gte: previousStartDate,
                lte: previousEndDate
            }
        },
        select: {
            id: true,
            totalAmount: true
        }
    });
    // Current period customers
    const currentCustomers = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].customer.count({
        where: {
            tenantId,
            createdAt: {
                gte: startDate,
                lte: endDate
            }
        }
    });
    // Previous period customers
    const previousCustomers = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].customer.count({
        where: {
            tenantId,
            createdAt: {
                gte: previousStartDate,
                lte: previousEndDate
            }
        }
    });
    // Current period products
    const currentProducts = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.count({
        where: {
            tenantId,
            createdAt: {
                gte: startDate,
                lte: endDate
            }
        }
    });
    // Total products
    const totalProducts = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.count({
        where: {
            tenantId
        }
    });
    // Get products sold in current period
    const currentOrderItems = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orderItem.findMany({
        where: {
            order: {
                tenantId,
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            }
        },
        select: {
            quantity: true
        }
    });
    // Get products sold in previous period
    const previousOrderItems = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orderItem.findMany({
        where: {
            order: {
                tenantId,
                createdAt: {
                    gte: previousStartDate,
                    lte: previousEndDate
                }
            }
        },
        select: {
            quantity: true
        }
    });
    const currentProductsSold = currentOrderItems.reduce((sum, item)=>sum + item.quantity, 0);
    const previousProductsSold = previousOrderItems.reduce((sum, item)=>sum + item.quantity, 0);
    const productsSoldGrowth = previousProductsSold > 0 ? (currentProductsSold - previousProductsSold) / previousProductsSold * 100 : 0;
    // Calculate metrics
    const currentRevenue = currentOrders.reduce((sum, order)=>sum + Number(order.totalAmount), 0);
    const previousRevenue = previousOrders.reduce((sum, order)=>sum + Number(order.totalAmount), 0);
    const revenueGrowth = previousRevenue > 0 ? (currentRevenue - previousRevenue) / previousRevenue * 100 : 0;
    const ordersGrowth = previousOrders.length > 0 ? (currentOrders.length - previousOrders.length) / previousOrders.length * 100 : 0;
    const customersGrowth = previousCustomers > 0 ? (currentCustomers - previousCustomers) / previousCustomers * 100 : 0;
    const currentAverageOrderValue = currentOrders.length > 0 ? currentRevenue / currentOrders.length : 0;
    const previousAverageOrderValue = previousOrders.length > 0 ? previousRevenue / previousOrders.length : 0;
    const averageOrderValueGrowth = previousAverageOrderValue > 0 ? (currentAverageOrderValue - previousAverageOrderValue) / previousAverageOrderValue * 100 : 0;
    return {
        revenue: {
            total: currentRevenue,
            previous: previousRevenue,
            growth: Math.round(revenueGrowth * 10) / 10
        },
        orders: {
            total: currentOrders.length,
            previous: previousOrders.length,
            growth: Math.round(ordersGrowth * 10) / 10
        },
        customers: {
            total: currentCustomers,
            previous: previousCustomers,
            growth: Math.round(customersGrowth * 10) / 10
        },
        products: {
            total: totalProducts,
            new: currentProducts
        },
        productsSold: {
            total: currentProductsSold,
            previous: previousProductsSold,
            growth: Math.round(productsSoldGrowth * 10) / 10
        },
        averageOrderValue: {
            total: Math.round(currentAverageOrderValue * 100) / 100,
            previous: Math.round(previousAverageOrderValue * 100) / 100,
            growth: Math.round(averageOrderValueGrowth * 10) / 10
        }
    };
}
async function getTopProducts(period = "30days", limit = 5) {
    const { tenantId } = await requireStoreAccess();
    const { startDate, endDate } = getDateRange(period);
    // Get order items with product info
    const orderItems = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orderItem.findMany({
        where: {
            order: {
                tenantId,
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            }
        },
        include: {
            product: {
                select: {
                    id: true,
                    slug: true,
                    translations: {
                        select: {
                            name: true
                        },
                        take: 1
                    }
                }
            }
        }
    });
    // Aggregate by product
    const productStats = new Map();
    for (const item of orderItems){
        if (!item.product) continue;
        const productId = item.product.id;
        const productName = item.product.translations[0]?.name ?? item.product.slug;
        const revenue = Number(item.price) * item.quantity;
        const existing = productStats.get(productId);
        if (existing) {
            existing.revenue += revenue;
            existing.sales += item.quantity;
        } else {
            productStats.set(productId, {
                name: productName,
                revenue,
                sales: item.quantity
            });
        }
    }
    // Sort by revenue and take top N
    const topProducts = Array.from(productStats.entries()).map(([id, stats])=>({
            id,
            ...stats
        })).sort((a, b)=>b.revenue - a.revenue).slice(0, limit);
    return topProducts;
}
async function getTopCategories(period = "30days", limit = 5) {
    const { tenantId } = await requireStoreAccess();
    const { startDate, endDate } = getDateRange(period);
    // Get order items with product and category info
    const orderItems = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orderItem.findMany({
        where: {
            order: {
                tenantId,
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            }
        },
        include: {
            product: {
                select: {
                    id: true,
                    categoryId: true,
                    category: {
                        select: {
                            id: true,
                            slug: true,
                            translations: {
                                select: {
                                    name: true
                                },
                                take: 1
                            }
                        }
                    }
                }
            }
        }
    });
    // Aggregate by category
    const categoryStats = new Map();
    for (const item of orderItems){
        if (!item.product?.category) continue;
        const categoryId = item.product.category.id;
        const categoryName = item.product.category.translations[0]?.name ?? item.product.category.slug;
        const revenue = Number(item.price) * item.quantity;
        const existing = categoryStats.get(categoryId);
        if (existing) {
            existing.revenue += revenue;
            existing.orders.add(item.orderId);
        } else {
            categoryStats.set(categoryId, {
                name: categoryName,
                revenue,
                orders: new Set([
                    item.orderId
                ])
            });
        }
    }
    // Calculate total revenue for percentage
    const totalRevenue = Array.from(categoryStats.values()).reduce((sum, stats)=>sum + stats.revenue, 0);
    // Sort by revenue and take top N
    const topCategories = Array.from(categoryStats.entries()).map(([id, stats])=>({
            id,
            name: stats.name,
            revenue: stats.revenue,
            orders: stats.orders.size,
            share: totalRevenue > 0 ? Math.round(stats.revenue / totalRevenue * 100) : 0
        })).sort((a, b)=>b.revenue - a.revenue).slice(0, limit);
    return topCategories;
}
async function getRecentActivity(limit = 10) {
    const { tenantId } = await requireStoreAccess();
    // Get recent orders
    const recentOrders = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.findMany({
        where: {
            tenantId
        },
        orderBy: {
            createdAt: "desc"
        },
        take: limit,
        select: {
            id: true,
            orderNumber: true,
            totalAmount: true,
            status: true,
            createdAt: true,
            customer: {
                select: {
                    firstName: true,
                    lastName: true,
                    email: true
                }
            }
        }
    });
    // Get recent customers
    const recentCustomers = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].customer.findMany({
        where: {
            tenantId
        },
        orderBy: {
            createdAt: "desc"
        },
        take: limit,
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            createdAt: true
        }
    });
    // Get recent reviews
    const recentReviews = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].review.findMany({
        where: {
            tenantId
        },
        orderBy: {
            createdAt: "desc"
        },
        take: limit,
        select: {
            id: true,
            rating: true,
            createdAt: true,
            product: {
                select: {
                    slug: true,
                    translations: {
                        select: {
                            name: true
                        },
                        take: 1
                    }
                }
            }
        }
    });
    const activities = [];
    for (const order of recentOrders){
        const customerName = order.customer ? `${order.customer.firstName ?? ""} ${order.customer.lastName ?? ""}`.trim() || order.customer.email : "Guest";
        activities.push({
            id: `order-${order.id}`,
            type: "order",
            action: order.status === "PENDING" ? "New order" : `Order ${order.status.toLowerCase()}`,
            details: `#${order.orderNumber} - ${customerName} - $${Number(order.totalAmount).toFixed(2)}`,
            timestamp: order.createdAt
        });
    }
    for (const customer of recentCustomers){
        const customerName = `${customer.firstName ?? ""} ${customer.lastName ?? ""}`.trim() || customer.email;
        activities.push({
            id: `customer-${customer.id}`,
            type: "customer",
            action: "New customer",
            details: `${customerName} registered`,
            timestamp: customer.createdAt
        });
    }
    for (const review of recentReviews){
        const productName = review.product.translations[0]?.name ?? review.product.slug;
        activities.push({
            id: `review-${review.id}`,
            type: "review",
            action: "Review posted",
            details: `${review.rating} stars - ${productName}`,
            timestamp: review.createdAt
        });
    }
    // Sort by timestamp and take top N
    activities.sort((a, b)=>b.timestamp.getTime() - a.timestamp.getTime());
    return activities.slice(0, limit).map((activity)=>({
            ...activity,
            time: getRelativeTime(activity.timestamp)
        }));
}
// Helper function to get relative time
function getRelativeTime(date) {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    return date.toLocaleDateString();
}
async function getOrdersByStatus(period = "30days") {
    const { tenantId } = await requireStoreAccess();
    const { startDate, endDate } = getDateRange(period);
    const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.groupBy({
        by: [
            "status"
        ],
        where: {
            tenantId,
            createdAt: {
                gte: startDate,
                lte: endDate
            }
        },
        _count: {
            id: true
        }
    });
    return orders.map((o)=>({
            status: o.status,
            count: o._count.id
        }));
}
async function getRevenueByDay(period = "30days") {
    const { tenantId } = await requireStoreAccess();
    const { startDate, endDate } = getDateRange(period);
    const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].order.findMany({
        where: {
            tenantId,
            createdAt: {
                gte: startDate,
                lte: endDate
            }
        },
        select: {
            totalAmount: true,
            createdAt: true
        },
        orderBy: {
            createdAt: "asc"
        }
    });
    // Group by day
    const dailyRevenue = new Map();
    for (const order of orders){
        const day = order.createdAt.toISOString().split("T")[0];
        if (!day) continue;
        const amount = Number(order.totalAmount);
        dailyRevenue.set(day, (dailyRevenue.get(day) ?? 0) + amount);
    }
    return Array.from(dailyRevenue.entries()).map(([date, revenue])=>({
            date,
            revenue: Math.round(revenue * 100) / 100
        }));
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAnalyticsOverview,
    getTopProducts,
    getTopCategories,
    getRecentActivity,
    getOrdersByStatus,
    getRevenueByDay
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAnalyticsOverview, "402172bd330f6f5bda19541dd1c2a49fd8d588d62d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTopProducts, "6064e5473817c2c6ffd582ff13e099eceeeeecfe1d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTopCategories, "603008f31faab29dde8cac93ce5016e9f4ba32508a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRecentActivity, "402f731f5a490fbcf1f685f183c14ac0d0f9a3dcb5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrdersByStatus, "401fdcba2f5bcc0f653588826458ce0d0cad6eb5c7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRevenueByDay, "408168f4dc5eb182b23cab844a80c9c8e9e7b38247", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/.next-internal/server/app/(internal)/admin/analytics/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/platform/src/server/api/internal/analytics.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/analytics.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
"[project]/apps/platform/.next-internal/server/app/(internal)/admin/analytics/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/platform/src/server/api/internal/analytics.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "003bfcd7ac293af20dc22123ec44e81263e2c95347",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserStores"],
    "00b865bde8853c0b2200356e8a44aabbfda99ded8f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userHasStore"],
    "00f61908051b9076d3d4981917b5b0f4b9a64a3f03",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentTenant"],
    "40177cd97a285945b21e6d3751ddbdc14238608821",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStore"],
    "402172bd330f6f5bda19541dd1c2a49fd8d588d62d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAnalyticsOverview"],
    "402f731f5a490fbcf1f685f183c14ac0d0f9a3dcb5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRecentActivity"],
    "40ece7c8b327f75aed046925634f22b2bd96f4eb54",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkSlugAvailability"],
    "603008f31faab29dde8cac93ce5016e9f4ba32508a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTopCategories"],
    "6064e5473817c2c6ffd582ff13e099eceeeeecfe1d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTopProducts"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$analytics$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/platform/.next-internal/server/app/(internal)/admin/analytics/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/analytics.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/analytics.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$analytics$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$analytics$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=apps_platform_73f23343._.js.map