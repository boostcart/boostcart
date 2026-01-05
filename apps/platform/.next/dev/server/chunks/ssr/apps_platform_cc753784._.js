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
"[project]/apps/platform/src/server/api/internal/abandoned-carts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"008383a3cfd5f573c97614ab7d3862746c82a5dd8c":"getAbandonedCarts","00e344ca32fba57f962a282726ba061f619e3fc212":"getAbandonedCartStats","402e4db47585a79d13ca193e0710c5a391edd8674a":"deleteAbandonedCart","40be805595fceaaf3606af70c3aea9e37b029063fc":"getAbandonedCart"},"",""] */ __turbopack_context__.s([
    "deleteAbandonedCart",
    ()=>deleteAbandonedCart,
    "getAbandonedCart",
    ()=>getAbandonedCart,
    "getAbandonedCartStats",
    ()=>getAbandonedCartStats,
    "getAbandonedCarts",
    ()=>getAbandonedCarts
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
async function getAbandonedCarts() {
    const { tenantId } = await requireStoreAccess();
    // A cart is considered abandoned if:
    // 1. It has items
    // 2. It was last updated more than 1 hour ago
    // 3. It hasn't been converted to an order
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const carts = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].cart.findMany({
        where: {
            tenantId,
            updatedAt: {
                lt: oneHourAgo
            },
            items: {
                some: {}
            }
        },
        include: {
            customer: true,
            items: {
                include: {
                    product: {
                        include: {
                            translations: {
                                take: 1
                            }
                        }
                    },
                    selectedVariant: true
                }
            }
        },
        orderBy: {
            updatedAt: "desc"
        }
    });
    return carts.map((cart)=>({
            id: cart.id,
            customer: cart.customer ? {
                id: cart.customer.id,
                email: cart.customer.email,
                name: `${cart.customer.firstName ?? ""} ${cart.customer.lastName ?? ""}`.trim() || "Unknown"
            } : null,
            sessionId: cart.sessionId,
            itemCount: cart.items.reduce((sum, item)=>sum + item.quantity, 0),
            totalValue: cart.items.reduce((sum, item)=>{
                const price = item.selectedVariant?.price ?? item.product.price;
                return sum + Number(price) * item.quantity;
            }, 0),
            items: cart.items.map((item)=>({
                    id: item.id,
                    productId: item.productId,
                    productName: item.product.translations[0]?.name ?? item.product.slug,
                    variantSku: item.selectedVariant?.sku,
                    quantity: item.quantity,
                    price: Number(item.selectedVariant?.price ?? item.product.price)
                })),
            abandonedAt: cart.updatedAt,
            createdAt: cart.createdAt
        }));
}
async function getAbandonedCart(id) {
    const { tenantId } = await requireStoreAccess();
    const cart = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].cart.findFirst({
        where: {
            id,
            tenantId
        },
        include: {
            customer: true,
            items: {
                include: {
                    product: {
                        include: {
                            translations: {
                                take: 1
                            },
                            media: {
                                orderBy: {
                                    order: "asc"
                                },
                                take: 1
                            }
                        }
                    },
                    selectedVariant: true
                }
            }
        }
    });
    if (!cart) {
        throw new Error("Cart not found");
    }
    return {
        id: cart.id,
        customer: cart.customer ? {
            id: cart.customer.id,
            email: cart.customer.email,
            name: `${cart.customer.firstName ?? ""} ${cart.customer.lastName ?? ""}`.trim() || "Unknown",
            phone: cart.customer.phone
        } : null,
        sessionId: cart.sessionId,
        items: cart.items.map((item)=>({
                id: item.id,
                productId: item.productId,
                productName: item.product.translations[0]?.name ?? item.product.slug,
                productImage: item.product.media[0]?.url,
                variantSku: item.selectedVariant?.sku,
                variantOptions: item.selectedVariant ? Object.entries(item.selectedVariant.options).map(([key, value])=>`${key}: ${value}`).join(", ") : null,
                quantity: item.quantity,
                price: Number(item.selectedVariant?.price ?? item.product.price)
            })),
        totalValue: cart.items.reduce((sum, item)=>{
            const price = item.selectedVariant?.price ?? item.product.price;
            return sum + Number(price) * item.quantity;
        }, 0),
        abandonedAt: cart.updatedAt,
        createdAt: cart.createdAt
    };
}
async function deleteAbandonedCart(id) {
    const { tenantId } = await requireStoreAccess();
    // Verify cart belongs to tenant
    const cart = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].cart.findFirst({
        where: {
            id,
            tenantId
        }
    });
    if (!cart) {
        throw new Error("Cart not found or access denied");
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].cart.delete({
        where: {
            id
        }
    });
    return {
        success: true
    };
}
async function getAbandonedCartStats() {
    const { tenantId } = await requireStoreAccess();
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    // Get all abandoned carts
    const abandonedCarts = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].cart.findMany({
        where: {
            tenantId,
            updatedAt: {
                lt: oneHourAgo
            },
            items: {
                some: {}
            }
        },
        include: {
            items: {
                include: {
                    product: true,
                    selectedVariant: true
                }
            }
        }
    });
    // Calculate stats
    const totalCarts = abandonedCarts.length;
    const totalValue = abandonedCarts.reduce((sum, cart)=>{
        return sum + cart.items.reduce((itemSum, item)=>{
            const price = item.selectedVariant?.price ?? item.product.price;
            return itemSum + Number(price) * item.quantity;
        }, 0);
    }, 0);
    const last24Hours = abandonedCarts.filter((cart)=>cart.updatedAt >= oneDayAgo).length;
    const lastWeek = abandonedCarts.filter((cart)=>cart.updatedAt >= oneWeekAgo).length;
    return {
        totalCarts,
        totalValue,
        last24Hours,
        lastWeek,
        averageValue: totalCarts > 0 ? totalValue / totalCarts : 0
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAbandonedCarts,
    getAbandonedCart,
    deleteAbandonedCart,
    getAbandonedCartStats
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAbandonedCarts, "008383a3cfd5f573c97614ab7d3862746c82a5dd8c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAbandonedCart, "40be805595fceaaf3606af70c3aea9e37b029063fc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAbandonedCart, "402e4db47585a79d13ca193e0710c5a391edd8674a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAbandonedCartStats, "00e344ca32fba57f962a282726ba061f619e3fc212", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/platform/.next-internal/server/app/(internal)/admin/orders/abandoned-checkouts/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/platform/src/server/api/internal/abandoned-carts.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/abandoned-carts.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
"[project]/apps/platform/.next-internal/server/app/(internal)/admin/orders/abandoned-checkouts/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/platform/src/server/api/internal/abandoned-carts.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "003bfcd7ac293af20dc22123ec44e81263e2c95347",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserStores"],
    "008383a3cfd5f573c97614ab7d3862746c82a5dd8c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAbandonedCarts"],
    "00b865bde8853c0b2200356e8a44aabbfda99ded8f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userHasStore"],
    "00e344ca32fba57f962a282726ba061f619e3fc212",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAbandonedCartStats"],
    "00f61908051b9076d3d4981917b5b0f4b9a64a3f03",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentTenant"],
    "40177cd97a285945b21e6d3751ddbdc14238608821",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStore"],
    "402e4db47585a79d13ca193e0710c5a391edd8674a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAbandonedCart"],
    "40ece7c8b327f75aed046925634f22b2bd96f4eb54",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkSlugAvailability"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$orders$2f$abandoned$2d$checkouts$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/platform/.next-internal/server/app/(internal)/admin/orders/abandoned-checkouts/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/abandoned-carts.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/abandoned-carts.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$orders$2f$abandoned$2d$checkouts$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$orders$2f$abandoned$2d$checkouts$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$abandoned$2d$carts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=apps_platform_cc753784._.js.map