module.exports = [
	"[project]/apps/platform/src/lib/tenant.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					__turbopack_context__.s([
						"clearTenantCache",
						() => clearTenantCache,
						"getTenantByDomain",
						() => getTenantByDomain,
						"getTenantBySlug",
						() => getTenantBySlug,
						"getTenantFromRequest",
						() => getTenantFromRequest,
					]);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
					] = __turbopack_async_dependencies__.then
						? (await __turbopack_async_dependencies__)()
						: __turbopack_async_dependencies__;
					// Cache for tenant lookups
					const tenantCache = new Map();
					const CACHE_TTL = 60 * 1000; // 1 minute
					async function getTenantBySlug(slug) {
						// Check cache first
						const cached = tenantCache.get(`slug:${slug}`);
						if (cached && cached.expiry > Date.now()) {
							return cached.tenant;
						}
						const tenant =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.findFirst({
								where: {
									slug,
									isActive: true,
									deletedAt: null,
								},
							});
						if (tenant) {
							tenantCache.set(`slug:${slug}`, {
								tenant,
								expiry: Date.now() + CACHE_TTL,
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
						const tenantDomain =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenantDomain.findFirst({
								where: {
									domain,
									dnsVerified: true,
								},
								include: {
									tenant: true,
								},
							});
						if (tenantDomain?.tenant && tenantDomain.tenant.isActive) {
							tenantCache.set(`domain:${domain}`, {
								tenant: tenantDomain.tenant,
								expiry: Date.now() + CACHE_TTL,
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
						const platformDomains = ["boostcart.bg", "localhost", "127.0.0.1"];
						const isMainDomain = platformDomains.some(
							(d) => host === d || host === `www.${d}`,
						);
						if (isMainDomain) {
							// No tenant for main domain
							return null;
						}
						// Check for subdomain (e.g., store.boostcart.bg)
						const subdomainMatch = host.match(/^([a-z0-9-]+)\.boostcart\.bg$/i);
						if (subdomainMatch?.[1]) {
							const slug = subdomainMatch[1];
							// Skip common subdomains
							if (["www", "api", "admin", "staging", "dev"].includes(slug)) {
								return null;
							}
							return getTenantBySlug(slug);
						}
						// Check for local dev subdomain (e.g., store.localhost)
						const localSubdomainMatch = host.match(
							/^([a-z0-9-]+)\.localhost$/i,
						);
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
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	"[project]/apps/platform/src/server/tenant.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					/* __next_internal_action_entry_do_not_use__ [{"001d80d23ee4de084e157d4e89620a1865cf7a84db":"requireTenant","00ac6fbe1edbf277cbe10ce51119339897cf9c40fc":"requireAdminTenant","00ef7ea9c506c03d0e1da36234d82ac9c2fbdbb80d":"hasTenantContext","7f7d901350253c3c2a57e0fe127f4f59ebb0a7828e":"getCurrentTenant","7fb08b94911a0ec057cd4150fe6878164206608e71":"getAdminTenant"},"",""] */ __turbopack_context__.s(
						[
							"getAdminTenant",
							() => getAdminTenant,
							"getCurrentTenant",
							() => getCurrentTenant,
							"hasTenantContext",
							() => hasTenantContext,
							"requireAdminTenant",
							() => requireAdminTenant,
							"requireTenant",
							() => requireTenant,
						],
					);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/headers.js [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/lib/tenant.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/auth/index.ts [app-rsc] (ecmascript) <locals>",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
					] = __turbopack_async_dependencies__.then
						? (await __turbopack_async_dependencies__)()
						: __turbopack_async_dependencies__;
					const getCurrentTenant = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"cache"
					])(async () => {
						const headersList = await (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"headers"
						])();
						// Check for tenant slug from subdomain
						const tenantSlug = headersList.get("x-tenant-slug");
						if (tenantSlug) {
							return (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getTenantBySlug"
							])(tenantSlug);
						}
						// Check for custom domain
						const customDomain = headersList.get("x-custom-domain");
						if (customDomain) {
							return (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getTenantByDomain"
							])(customDomain);
						}
						return null;
					});
					const getAdminTenant = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"cache"
					])(async () => {
						const session = await (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
							"auth"
						])();
						if (!session?.user?.id) {
							return null;
						}
						// Get the user's primary store (first store they have access to)
						const staffRecord =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenantStaff.findFirst({
								where: {
									userId: session.user.id,
								},
								include: {
									tenant: true,
								},
								orderBy: {
									createdAt: "asc",
								},
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
						throw new Error(
							"No tenant context found. Please create or select a store.",
						);
					}
					async function hasTenantContext() {
						const tenant = await getCurrentTenant();
						return tenant !== null;
					}
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"ensureServerEntryExports"
					])([
						requireTenant,
						requireAdminTenant,
						hasTenantContext,
						getCurrentTenant,
						getAdminTenant,
					]);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(requireTenant, "001d80d23ee4de084e157d4e89620a1865cf7a84db", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						requireAdminTenant,
						"00ac6fbe1edbf277cbe10ce51119339897cf9c40fc",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						hasTenantContext,
						"00ef7ea9c506c03d0e1da36234d82ac9c2fbdbb80d",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						getCurrentTenant,
						"7f7d901350253c3c2a57e0fe127f4f59ebb0a7828e",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						getAdminTenant,
						"7fb08b94911a0ec057cd4150fe6878164206608e71",
						null,
					);
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	"[project]/apps/platform/src/server/api/internal/settings.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					/* __next_internal_action_entry_do_not_use__ [{"003e1107fd002dbcad404322f1f8ec45d5585d7a6a":"getTenantSettings","003e954206d0fc5ef534aa31ec03ab21691591f54c":"getEnabledPaymentMethods","00b2af1e6b1414037acb99ef45b360089a7954e87c":"getEnabledShippingMethods","4001fd46bcd413f7f7af07130a8e1f1c5b35b7c4b7":"updateStoreInfo","400803ae68940ad0ba4cbd7f2105d48ac2c3090eb2":"updateStoreFavicon","402250ef2912a771a292e20a0575903ff4c23e0e61":"removeCustomDomain","403f2eeab5a535dbedd67c4f139d58089e99ba8558":"toggleShippingMethod","40442e1fbfad966c4ce4b2f541201e747e56ca0a01":"togglePaymentMethod","4088ed6dd1ba6091c7fbc0f468e792310ee816e6c0":"setPrimaryDomain","40ad174d4ed4c717286774c2e2ca69230757b25066":"updateTheme","40b94cbdd540f2d4e61afb35114d2957637093f1fa":"updateStoreLogo","40dfadd315cd7b80720e4a23aa5070f5773dc4c157":"updateLocalization","40fd693aecb34e75bb4838f493a8ad0a6e08bbba1b":"addCustomDomain"},"",""] */ __turbopack_context__.s(
						[
							"addCustomDomain",
							() => addCustomDomain,
							"getEnabledPaymentMethods",
							() => getEnabledPaymentMethods,
							"getEnabledShippingMethods",
							() => getEnabledShippingMethods,
							"getTenantSettings",
							() => getTenantSettings,
							"removeCustomDomain",
							() => removeCustomDomain,
							"setPrimaryDomain",
							() => setPrimaryDomain,
							"togglePaymentMethod",
							() => togglePaymentMethod,
							"toggleShippingMethod",
							() => toggleShippingMethod,
							"updateLocalization",
							() => updateLocalization,
							"updateStoreFavicon",
							() => updateStoreFavicon,
							"updateStoreInfo",
							() => updateStoreInfo,
							"updateStoreLogo",
							() => updateStoreLogo,
							"updateTheme",
							() => updateTheme,
						],
					);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/auth/index.ts [app-rsc] (ecmascript) <locals>",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/tenant.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
					] = __turbopack_async_dependencies__.then
						? (await __turbopack_async_dependencies__)()
						: __turbopack_async_dependencies__;
					async function requireStoreAccess() {
						const session = await (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
							"auth"
						])();
						if (!session?.user?.id) {
							throw new Error("Unauthorized");
						}
						const tenant = await (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"requireAdminTenant"
						])();
						const staffRecord =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenantStaff.findFirst({
								where: {
									userId: session.user.id,
									tenantId: tenant.id,
								},
							});
						if (!staffRecord) {
							throw new Error("Forbidden: No access to this store");
						}
						return {
							userId: session.user.id,
							tenantId: tenant.id,
							role: staffRecord.role,
						};
					}
					async function getTenantSettings() {
						const { tenantId } = await requireStoreAccess();
						const tenant =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.findUnique({
								where: {
									id: tenantId,
								},
								select: {
									id: true,
									slug: true,
									name: true,
									description: true,
									email: true,
									phone: true,
									logoUrl: true,
									faviconUrl: true,
									currency: true,
									locale: true,
									timezone: true,
									themeId: true,
									themeConfig: true,
									billingStatus: true,
									billingCycle: true,
									planId: true,
									trialEndsAt: true,
									currentPeriodEnd: true,
									isActive: true,
									domains: {
										select: {
											id: true,
											domain: true,
											isPrimary: true,
											sslStatus: true,
											dnsVerified: true,
										},
									},
								},
							});
						if (!tenant) {
							throw new Error("Tenant not found");
						}
						return tenant;
					}
					async function updateStoreInfo(input) {
						const { tenantId } = await requireStoreAccess();
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.update({
								where: {
									id: tenantId,
								},
								data: {
									name: input.name,
									description: input.description,
									email: input.email,
									phone: input.phone,
								},
							});
						return updated;
					}
					async function updateLocalization(input) {
						const { tenantId } = await requireStoreAccess();
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.update({
								where: {
									id: tenantId,
								},
								data: {
									currency: input.currency,
									locale: input.locale,
									timezone: input.timezone,
								},
							});
						return updated;
					}
					async function updateTheme(input) {
						const { tenantId } = await requireStoreAccess();
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.update({
								where: {
									id: tenantId,
								},
								data: {
									themeId: input.themeId,
									themeConfig: input.themeConfig
										? JSON.parse(JSON.stringify(input.themeConfig))
										: undefined,
								},
							});
						return updated;
					}
					async function updateStoreLogo(logoUrl) {
						const { tenantId } = await requireStoreAccess();
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.update({
								where: {
									id: tenantId,
								},
								data: {
									logoUrl,
								},
							});
						return updated;
					}
					async function updateStoreFavicon(faviconUrl) {
						const { tenantId } = await requireStoreAccess();
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.update({
								where: {
									id: tenantId,
								},
								data: {
									faviconUrl,
								},
							});
						return updated;
					}
					async function getEnabledPaymentMethods() {
						const { tenantId } = await requireStoreAccess();
						const paymentMethods =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].paymentMethod.findMany({
								where: {
									tenantId,
								},
								orderBy: {
									createdAt: "asc",
								},
							});
						return paymentMethods;
					}
					async function getEnabledShippingMethods() {
						const { tenantId } = await requireStoreAccess();
						const shippingMethods =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].shippingMethod.findMany({
								where: {
									tenantId,
								},
								orderBy: {
									createdAt: "asc",
								},
							});
						return shippingMethods;
					}
					async function togglePaymentMethod(paymentMethodId) {
						const { tenantId } = await requireStoreAccess();
						const paymentMethod =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].paymentMethod.findFirst({
								where: {
									id: paymentMethodId,
									tenantId,
								},
							});
						if (!paymentMethod) {
							throw new Error("Payment method not found");
						}
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].paymentMethod.update({
								where: {
									id: paymentMethodId,
								},
								data: {
									isActive: !paymentMethod.isActive,
								},
							});
						return updated;
					}
					async function toggleShippingMethod(shippingMethodId) {
						const { tenantId } = await requireStoreAccess();
						const shippingMethod =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].shippingMethod.findFirst({
								where: {
									id: shippingMethodId,
									tenantId,
								},
							});
						if (!shippingMethod) {
							throw new Error("Shipping method not found");
						}
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].shippingMethod.update({
								where: {
									id: shippingMethodId,
								},
								data: {
									isActive: !shippingMethod.isActive,
								},
							});
						return updated;
					}
					async function addCustomDomain(domain) {
						const { tenantId } = await requireStoreAccess();
						// Check if domain already exists
						const existing =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenantDomain.findUnique({
								where: {
									domain,
								},
							});
						if (existing) {
							throw new Error("Domain already in use");
						}
						const newDomain =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenantDomain.create({
								data: {
									tenantId,
									domain,
									isPrimary: false,
									sslStatus: "pending",
									dnsVerified: false,
								},
							});
						return newDomain;
					}
					async function removeCustomDomain(domainId) {
						const { tenantId } = await requireStoreAccess();
						const domain =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenantDomain.findFirst({
								where: {
									id: domainId,
									tenantId,
								},
							});
						if (!domain) {
							throw new Error("Domain not found");
						}
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].tenantDomain.delete({
							where: {
								id: domainId,
							},
						});
						return {
							success: true,
						};
					}
					async function setPrimaryDomain(domainId) {
						const { tenantId } = await requireStoreAccess();
						// First, unset all other primary domains
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].tenantDomain.updateMany({
							where: {
								tenantId,
								isPrimary: true,
							},
							data: {
								isPrimary: false,
							},
						});
						// Set the new primary domain
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenantDomain.update({
								where: {
									id: domainId,
								},
								data: {
									isPrimary: true,
								},
							});
						return updated;
					}
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"ensureServerEntryExports"
					])([
						getTenantSettings,
						updateStoreInfo,
						updateLocalization,
						updateTheme,
						updateStoreLogo,
						updateStoreFavicon,
						getEnabledPaymentMethods,
						getEnabledShippingMethods,
						togglePaymentMethod,
						toggleShippingMethod,
						addCustomDomain,
						removeCustomDomain,
						setPrimaryDomain,
					]);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						getTenantSettings,
						"003e1107fd002dbcad404322f1f8ec45d5585d7a6a",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						updateStoreInfo,
						"4001fd46bcd413f7f7af07130a8e1f1c5b35b7c4b7",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						updateLocalization,
						"40dfadd315cd7b80720e4a23aa5070f5773dc4c157",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(updateTheme, "40ad174d4ed4c717286774c2e2ca69230757b25066", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						updateStoreLogo,
						"40b94cbdd540f2d4e61afb35114d2957637093f1fa",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						updateStoreFavicon,
						"400803ae68940ad0ba4cbd7f2105d48ac2c3090eb2",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						getEnabledPaymentMethods,
						"003e954206d0fc5ef534aa31ec03ab21691591f54c",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						getEnabledShippingMethods,
						"00b2af1e6b1414037acb99ef45b360089a7954e87c",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						togglePaymentMethod,
						"40442e1fbfad966c4ce4b2f541201e747e56ca0a01",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						toggleShippingMethod,
						"403f2eeab5a535dbedd67c4f139d58089e99ba8558",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						addCustomDomain,
						"40fd693aecb34e75bb4838f493a8ad0a6e08bbba1b",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						removeCustomDomain,
						"402250ef2912a771a292e20a0575903ff4c23e0e61",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						setPrimaryDomain,
						"4088ed6dd1ba6091c7fbc0f468e792310ee816e6c0",
						null,
					);
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	'[project]/apps/platform/.next-internal/server/app/(internal)/admin/settings/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/settings.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>',
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					__turbopack_context__.s([]);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/internal/settings.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
					] = __turbopack_async_dependencies__.then
						? (await __turbopack_async_dependencies__)()
						: __turbopack_async_dependencies__;
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	'[project]/apps/platform/.next-internal/server/app/(internal)/admin/settings/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/settings.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript)',
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					__turbopack_context__.s([
						"003bfcd7ac293af20dc22123ec44e81263e2c95347",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getUserStores"
							],
						"003e1107fd002dbcad404322f1f8ec45d5585d7a6a",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getTenantSettings"
							],
						"003e954206d0fc5ef534aa31ec03ab21691591f54c",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getEnabledPaymentMethods"
							],
						"00b2af1e6b1414037acb99ef45b360089a7954e87c",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getEnabledShippingMethods"
							],
						"00b865bde8853c0b2200356e8a44aabbfda99ded8f",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"userHasStore"
							],
						"00f61908051b9076d3d4981917b5b0f4b9a64a3f03",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getCurrentTenant"
							],
						"4001fd46bcd413f7f7af07130a8e1f1c5b35b7c4b7",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"updateStoreInfo"
							],
						"40177cd97a285945b21e6d3751ddbdc14238608821",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"createStore"
							],
						"403f2eeab5a535dbedd67c4f139d58089e99ba8558",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"toggleShippingMethod"
							],
						"40442e1fbfad966c4ce4b2f541201e747e56ca0a01",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"togglePaymentMethod"
							],
						"40dfadd315cd7b80720e4a23aa5070f5773dc4c157",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"updateLocalization"
							],
						"40ece7c8b327f75aed046925634f22b2bd96f4eb54",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"checkSlugAvailability"
							],
					]);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$settings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ =
						__turbopack_context__.i(
							'[project]/apps/platform/.next-internal/server/app/(internal)/admin/settings/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/settings.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>',
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/internal/settings.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$settings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$settings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
					] = __turbopack_async_dependencies__.then
						? (await __turbopack_async_dependencies__)()
						: __turbopack_async_dependencies__;
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
];

//# sourceMappingURL=apps_platform_9bce9fd2._.js.map
