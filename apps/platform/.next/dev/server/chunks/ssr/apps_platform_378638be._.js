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
	"[project]/apps/platform/src/server/api/internal/media.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					/* __next_internal_action_entry_do_not_use__ [{"001f446f123485ec8205ed6c939930b125e190e210":"getFolders","00e7db616afd54876f23011ae5464cf53f85eec582":"getMediaStats","402840317718526ba38ff5c15d230d4f4d2d535d12":"deleteMedia","403aaad6a78ff57a6eaeeed7fca0cba79c28528bfb":"createMedia","4066adb31aea47cbe3d3c3cdaa072aaf2342d452cc":"deleteMultipleMedia","4082838bfd65add75bc32d884be00afe04bc252f47":"getMediaFile","40fa332c213fef2ca06e6f169ef552043c44bda688":"getMediaFiles","602d41140a8ab1ed250c65c3c449f3ec422448b2ad":"updateMedia","6053dbc292df79e0dd18d4f759264ba1b6a4d3ca42":"moveToFolder"},"",""] */ __turbopack_context__.s(
						[
							"createMedia",
							() => createMedia,
							"deleteMedia",
							() => deleteMedia,
							"deleteMultipleMedia",
							() => deleteMultipleMedia,
							"getFolders",
							() => getFolders,
							"getMediaFile",
							() => getMediaFile,
							"getMediaFiles",
							() => getMediaFiles,
							"getMediaStats",
							() => getMediaStats,
							"moveToFolder",
							() => moveToFolder,
							"updateMedia",
							() => updateMedia,
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
					async function getMediaFiles(folder) {
						const { tenantId } = await requireStoreAccess();
						const where = {
							tenantId,
						};
						if (folder) {
							where.folder = folder;
						}
						const files =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].media.findMany({
								where,
								orderBy: {
									createdAt: "desc",
								},
							});
						return files.map((file) => ({
							id: file.id,
							filename: file.filename,
							originalName: file.originalName,
							url: file.url,
							mimeType: file.mimeType,
							size: file.size,
							width: file.width,
							height: file.height,
							altText: file.altText,
							folder: file.folder,
							createdAt: file.createdAt,
							updatedAt: file.updatedAt,
						}));
					}
					async function getMediaFile(id) {
						const { tenantId } = await requireStoreAccess();
						const file =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].media.findFirst({
								where: {
									id,
									tenantId,
								},
							});
						if (!file) {
							throw new Error("File not found");
						}
						return file;
					}
					async function createMedia(input) {
						const { tenantId } = await requireStoreAccess();
						const media =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].media.create({
								data: {
									filename: input.filename,
									originalName: input.originalName,
									url: input.url,
									mimeType: input.mimeType,
									size: input.size,
									width: input.width,
									height: input.height,
									altText: input.altText,
									folder: input.folder,
									tenantId,
								},
							});
						return media;
					}
					async function updateMedia(id, input) {
						const { tenantId } = await requireStoreAccess();
						const file =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].media.findFirst({
								where: {
									id,
									tenantId,
								},
							});
						if (!file) {
							throw new Error("File not found or access denied");
						}
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].media.update({
								where: {
									id,
								},
								data: {
									altText: input.altText,
									folder: input.folder,
								},
							});
						return updated;
					}
					async function deleteMedia(id) {
						const { tenantId } = await requireStoreAccess();
						const file =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].media.findFirst({
								where: {
									id,
									tenantId,
								},
							});
						if (!file) {
							throw new Error("File not found or access denied");
						}
						// TODO: Delete from storage provider (S3, etc.)
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].media.delete({
							where: {
								id,
							},
						});
						return {
							success: true,
						};
					}
					async function deleteMultipleMedia(ids) {
						const { tenantId } = await requireStoreAccess();
						// Verify all files belong to tenant
						const files =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].media.findMany({
								where: {
									id: {
										in: ids,
									},
									tenantId,
								},
							});
						if (files.length !== ids.length) {
							throw new Error("Some files not found or access denied");
						}
						// TODO: Delete from storage provider (S3, etc.)
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].media.deleteMany({
							where: {
								id: {
									in: ids,
								},
								tenantId,
							},
						});
						return {
							success: true,
							count: files.length,
						};
					}
					async function getMediaStats() {
						const { tenantId } = await requireStoreAccess();
						const [totalFiles, files] = await Promise.all([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].media.count({
								where: {
									tenantId,
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].media.findMany({
								where: {
									tenantId,
								},
								select: {
									size: true,
									mimeType: true,
									folder: true,
								},
							}),
						]);
						const totalSize = files.reduce((sum, f) => sum + f.size, 0);
						const images = files.filter((f) =>
							f.mimeType.startsWith("image/"),
						).length;
						const documents = files.filter(
							(f) =>
								f.mimeType.includes("pdf") ||
								f.mimeType.includes("document") ||
								f.mimeType.includes("text"),
						).length;
						const videos = files.filter((f) =>
							f.mimeType.startsWith("video/"),
						).length;
						const folders = [
							...new Set(files.map((f) => f.folder).filter(Boolean)),
						];
						return {
							totalFiles,
							totalSize,
							images,
							documents,
							videos,
							folderCount: folders.length,
						};
					}
					async function getFolders() {
						const { tenantId } = await requireStoreAccess();
						const files =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].media.findMany({
								where: {
									tenantId,
								},
								select: {
									folder: true,
								},
								distinct: ["folder"],
							});
						return files
							.map((f) => f.folder)
							.filter((f) => f !== null && f !== "");
					}
					async function moveToFolder(ids, folder) {
						const { tenantId } = await requireStoreAccess();
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].media.updateMany({
							where: {
								id: {
									in: ids,
								},
								tenantId,
							},
							data: {
								folder: folder,
							},
						});
						return {
							success: true,
						};
					}
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"ensureServerEntryExports"
					])([
						getMediaFiles,
						getMediaFile,
						createMedia,
						updateMedia,
						deleteMedia,
						deleteMultipleMedia,
						getMediaStats,
						getFolders,
						moveToFolder,
					]);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getMediaFiles, "40fa332c213fef2ca06e6f169ef552043c44bda688", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getMediaFile, "4082838bfd65add75bc32d884be00afe04bc252f47", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(createMedia, "403aaad6a78ff57a6eaeeed7fca0cba79c28528bfb", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(updateMedia, "602d41140a8ab1ed250c65c3c449f3ec422448b2ad", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(deleteMedia, "402840317718526ba38ff5c15d230d4f4d2d535d12", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						deleteMultipleMedia,
						"4066adb31aea47cbe3d3c3cdaa072aaf2342d452cc",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getMediaStats, "00e7db616afd54876f23011ae5464cf53f85eec582", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getFolders, "001f446f123485ec8205ed6c939930b125e190e210", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(moveToFolder, "6053dbc292df79e0dd18d4f759264ba1b6a4d3ca42", null);
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	'[project]/apps/platform/.next-internal/server/app/(internal)/admin/content/files/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/media.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>',
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
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/internal/media.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
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
	'[project]/apps/platform/.next-internal/server/app/(internal)/admin/content/files/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/media.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript)',
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					__turbopack_context__.s([
						"001f446f123485ec8205ed6c939930b125e190e210",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getFolders"
							],
						"003bfcd7ac293af20dc22123ec44e81263e2c95347",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getUserStores"
							],
						"00b865bde8853c0b2200356e8a44aabbfda99ded8f",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"userHasStore"
							],
						"00e7db616afd54876f23011ae5464cf53f85eec582",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getMediaStats"
							],
						"00f61908051b9076d3d4981917b5b0f4b9a64a3f03",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getCurrentTenant"
							],
						"40177cd97a285945b21e6d3751ddbdc14238608821",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"createStore"
							],
						"402840317718526ba38ff5c15d230d4f4d2d535d12",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"deleteMedia"
							],
						"4066adb31aea47cbe3d3c3cdaa072aaf2342d452cc",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"deleteMultipleMedia"
							],
						"40ece7c8b327f75aed046925634f22b2bd96f4eb54",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"checkSlugAvailability"
							],
						"40fa332c213fef2ca06e6f169ef552043c44bda688",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getMediaFiles"
							],
						"602d41140a8ab1ed250c65c3c449f3ec422448b2ad",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"updateMedia"
							],
					]);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$content$2f$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ =
						__turbopack_context__.i(
							'[project]/apps/platform/.next-internal/server/app/(internal)/admin/content/files/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/media.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>',
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/internal/media.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$content$2f$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$content$2f$files$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
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

//# sourceMappingURL=apps_platform_378638be._.js.map
