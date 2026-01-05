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
	"[externals]/os [external] (os, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x("os", () => require("os"));

		module.exports = mod;
	},
	"[externals]/node:fs/promises [external] (node:fs/promises, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x("node:fs/promises", () =>
			require("node:fs/promises"),
		);

		module.exports = mod;
	},
	"[externals]/buffer [external] (buffer, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x("buffer", () => require("buffer"));

		module.exports = mod;
	},
	"[externals]/crypto [external] (crypto, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x("crypto", () => require("crypto"));

		module.exports = mod;
	},
	"[project]/packages/storage/src/utils.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"ALLOWED_DOCUMENT_TYPES",
			() => ALLOWED_DOCUMENT_TYPES,
			"ALLOWED_FILE_TYPES",
			() => ALLOWED_FILE_TYPES,
			"ALLOWED_IMAGE_TYPES",
			() => ALLOWED_IMAGE_TYPES,
			"ALLOWED_VIDEO_TYPES",
			() => ALLOWED_VIDEO_TYPES,
			"formatFileSize",
			() => formatFileSize,
			"generateUploadKey",
			() => generateUploadKey,
			"getFileExtension",
			() => getFileExtension,
			"getFileType",
			() => getFileType,
			"getMimeType",
			() => getMimeType,
			"isDocumentFile",
			() => isDocumentFile,
			"isImageFile",
			() => isImageFile,
			"isVideoFile",
			() => isVideoFile,
			"validateFileSize",
			() => validateFileSize,
			"validateFileType",
			() => validateFileType,
		]);
		var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ =
			__turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
		/**
		 * Common MIME types mapping
		 */ const MIME_TYPES = {
			// Images
			jpg: "image/jpeg",
			jpeg: "image/jpeg",
			png: "image/png",
			gif: "image/gif",
			webp: "image/webp",
			svg: "image/svg+xml",
			avif: "image/avif",
			// Videos
			mp4: "video/mp4",
			webm: "video/webm",
			mov: "video/quicktime",
			avi: "video/x-msvideo",
			// Documents
			pdf: "application/pdf",
			doc: "application/msword",
			docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			xls: "application/vnd.ms-excel",
			xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			csv: "text/csv",
			txt: "text/plain",
			json: "application/json",
		};
		function generateUploadKey(tenantId, originalFilename, folder) {
			const ext = getFileExtension(originalFilename);
			const uuid = (0,
			__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__[
				"randomUUID"
			])();
			const filename = `${uuid}${ext ? `.${ext}` : ""}`;
			if (folder) {
				return `${tenantId}/${folder}/${filename}`;
			}
			return `${tenantId}/${filename}`;
		}
		function getFileExtension(filename) {
			const parts = filename.split(".");
			if (parts.length < 2) return "";
			return parts.pop()?.toLowerCase() ?? "";
		}
		function getMimeType(filename) {
			const ext = getFileExtension(filename);
			return MIME_TYPES[ext] ?? "application/octet-stream";
		}
		function isImageFile(mimeType) {
			return mimeType.startsWith("image/");
		}
		function isVideoFile(mimeType) {
			return mimeType.startsWith("video/");
		}
		function isDocumentFile(mimeType) {
			return (
				mimeType.includes("pdf") ||
				mimeType.includes("document") ||
				mimeType.includes("spreadsheet") ||
				mimeType.includes("text/")
			);
		}
		function getFileType(mimeType) {
			if (isImageFile(mimeType)) return "image";
			if (isVideoFile(mimeType)) return "video";
			if (isDocumentFile(mimeType)) return "document";
			return "other";
		}
		function formatFileSize(bytes) {
			if (bytes === 0) return "0 B";
			const k = 1024;
			const sizes = ["B", "KB", "MB", "GB"];
			const i = Math.floor(Math.log(bytes) / Math.log(k));
			return `${parseFloat((bytes / k ** i).toFixed(1))} ${sizes[i]}`;
		}
		function validateFileSize(bytes, maxSizeMB = 10) {
			return bytes <= maxSizeMB * 1024 * 1024;
		}
		const ALLOWED_IMAGE_TYPES = [
			"image/jpeg",
			"image/png",
			"image/gif",
			"image/webp",
			"image/svg+xml",
			"image/avif",
		];
		const ALLOWED_VIDEO_TYPES = ["video/mp4", "video/webm", "video/quicktime"];
		const ALLOWED_DOCUMENT_TYPES = [
			"application/pdf",
			"application/msword",
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			"application/vnd.ms-excel",
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			"text/csv",
			"text/plain",
		];
		const ALLOWED_FILE_TYPES = [
			...ALLOWED_IMAGE_TYPES,
			...ALLOWED_VIDEO_TYPES,
			...ALLOWED_DOCUMENT_TYPES,
		];
		function validateFileType(mimeType, allowedTypes = ALLOWED_FILE_TYPES) {
			return allowedTypes.includes(mimeType);
		}
	},
	"[project]/packages/storage/src/r2.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"R2Client",
			() => R2Client,
			"createR2Client",
			() => createR2Client,
		]);
		var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__ =
			__turbopack_context__.i(
				"[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs, [project]/node_modules/@aws-sdk/client-s3)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@aws-sdk/s3-request-presigner/dist-es/getSignedUrl.js [app-rsc] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/packages/storage/src/utils.ts [app-rsc] (ecmascript)",
			);
		class R2Client {
			client;
			bucketName;
			publicUrl;
			constructor(config) {
				// Support custom endpoint (for regional buckets) or construct default
				const endpoint =
					config.endpoint ??
					`https://${config.accountId}.r2.cloudflarestorage.com`;
				this.client =
					new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__[
						"S3Client"
					]({
						region: "auto",
						endpoint,
						credentials: {
							accessKeyId: config.accessKeyId,
							secretAccessKey: config.secretAccessKey,
						},
					});
				this.bucketName = config.bucketName;
				// Use custom domain or construct R2 public URL
				this.publicUrl =
					config.publicUrl ??
					`https://${config.bucketName}.${config.accountId}.r2.cloudflarestorage.com`;
			}
			/**
			 * Upload a file directly to R2
			 */ async upload(file, options) {
				const key = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
					"generateUploadKey"
				])(options.tenantId, options.filename, options.folder);
				const contentType =
					options.contentType ??
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"getMimeType"
					])(options.filename);
				const params = {
					Bucket: this.bucketName,
					Key: key,
					Body: file,
					ContentType: contentType,
					Metadata: {
						...options.metadata,
						tenantId: options.tenantId,
						originalFilename: options.filename,
					},
				};
				await this.client.send(
					new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__[
						"PutObjectCommand"
					](params),
				);
				// Get file size
				const headResponse = await this.client.send(
					new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__[
						"HeadObjectCommand"
					]({
						Bucket: this.bucketName,
						Key: key,
					}),
				);
				return {
					key,
					url: this.getPublicUrl(key),
					filename: options.filename,
					size: headResponse.ContentLength ?? 0,
					contentType,
				};
			}
			/**
			 * Generate a presigned URL for client-side uploads
			 * This allows direct upload to R2 without going through the server
			 */ async getPresignedUploadUrl(
				options,
				expiresIn = 3600, // 1 hour
			) {
				const key = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
					"generateUploadKey"
				])(options.tenantId, options.filename, options.folder);
				const contentType =
					options.contentType ??
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"getMimeType"
					])(options.filename);
				const command =
					new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__[
						"PutObjectCommand"
					]({
						Bucket: this.bucketName,
						Key: key,
						ContentType: contentType,
						Metadata: {
							tenantId: options.tenantId,
							originalFilename: options.filename,
						},
					});
				const uploadUrl = await (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
					"getSignedUrl"
				])(this.client, command, {
					expiresIn,
				});
				return {
					uploadUrl,
					key,
					publicUrl: this.getPublicUrl(key),
				};
			}
			/**
			 * Get a presigned URL for downloading/viewing a private file
			 */ async getPresignedDownloadUrl(key, expiresIn = 3600) {
				const command =
					new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__[
						"GetObjectCommand"
					]({
						Bucket: this.bucketName,
						Key: key,
					});
				return (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
					"getSignedUrl"
				])(this.client, command, {
					expiresIn,
				});
			}
			/**
			 * Delete a file from R2
			 */ async delete(key) {
				await this.client.send(
					new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__[
						"DeleteObjectCommand"
					]({
						Bucket: this.bucketName,
						Key: key,
					}),
				);
			}
			/**
			 * Delete multiple files from R2
			 */ async deleteMany(keys) {
				await Promise.all(keys.map((key) => this.delete(key)));
			}
			/**
			 * Check if a file exists
			 */ async exists(key) {
				try {
					await this.client.send(
						new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__[
							"HeadObjectCommand"
						]({
							Bucket: this.bucketName,
							Key: key,
						}),
					);
					return true;
				} catch {
					return false;
				}
			}
			/**
			 * List files in a folder
			 */ async listFiles(tenantId, folder, maxKeys = 1000) {
				const prefix = folder ? `${tenantId}/${folder}/` : `${tenantId}/`;
				const response = await this.client.send(
					new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__[
						"ListObjectsV2Command"
					]({
						Bucket: this.bucketName,
						Prefix: prefix,
						MaxKeys: maxKeys,
					}),
				);
				return (
					response.Contents?.map((item) => ({
						key: item.Key,
						size: item.Size ?? 0,
						lastModified: item.LastModified,
						url: this.getPublicUrl(item.Key),
					})) ?? []
				);
			}
			/**
			 * Get public URL for a file
			 */ getPublicUrl(key) {
				return `${this.publicUrl}/${key}`;
			}
			/**
			 * Extract key from public URL
			 */ getKeyFromUrl(url) {
				if (!url.startsWith(this.publicUrl)) return null;
				return url.slice(this.publicUrl.length + 1);
			}
		}
		function createR2Client(config) {
			return new R2Client(config);
		}
	},
	"[project]/packages/storage/src/folders.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		/**
		 * Flat folder structure for organizing media files.
		 * Files are stored with paths like: /{tenantId}/{folder}/{filename}
		 */ __turbopack_context__.s([
			"FOLDERS",
			() => FOLDERS,
			"FOLDER_META",
			() => FOLDER_META,
			"getFolderLabel",
			() => getFolderLabel,
			"isValidFolder",
			() => isValidFolder,
		]);
		const FOLDERS = {
			ROOT: null,
			PRODUCTS: "products",
			BLOG: "blog",
			PAGES: "pages",
			MARKETING: "marketing",
			AVATARS: "avatars",
			OTHER: "other",
		};
		const FOLDER_META = {
			products: {
				label: "Products",
				description: "Product images and galleries",
			},
			blog: {
				label: "Blog",
				description: "Blog post images and media",
			},
			pages: {
				label: "Pages",
				description: "Static page images",
			},
			marketing: {
				label: "Marketing",
				description: "Banners, promotional images",
			},
			avatars: {
				label: "Avatars",
				description: "User and customer avatars",
			},
			other: {
				label: "Other",
				description: "Miscellaneous files",
			},
		};
		function getFolderLabel(folder) {
			if (folder === null) return "All Files";
			return FOLDER_META[folder]?.label ?? folder;
		}
		function isValidFolder(folder) {
			if (folder === null) return true;
			return Object.values(FOLDERS).includes(folder);
		}
	},
	"[project]/packages/storage/src/index.ts [app-rsc] (ecmascript) <locals>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$r2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/packages/storage/src/r2.ts [app-rsc] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/packages/storage/src/utils.ts [app-rsc] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$folders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/packages/storage/src/folders.ts [app-rsc] (ecmascript)",
			);
	},
	"[project]/apps/platform/src/server/storage.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["storage", () => storage]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
			__turbopack_context__.i(
				"[project]/packages/storage/src/index.ts [app-rsc] (ecmascript) <locals>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$r2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/packages/storage/src/r2.ts [app-rsc] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/env.js [app-rsc] (ecmascript)",
			);
		/**
		 * R2 Storage Client Singleton
		 * Used for file uploads throughout the platform
		 */ function createStorageClient() {
			return new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$storage$2f$src$2f$r2$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
				"R2Client"
			]({
				accountId:
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"env"
					].R2_ACCOUNT_ID,
				accessKeyId:
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"env"
					].R2_ACCESS_KEY_ID,
				secretAccessKey:
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"env"
					].R2_SECRET_ACCESS_KEY,
				bucketName:
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"env"
					].R2_BUCKET_NAME,
				endpoint:
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"env"
					].R2_ENDPOINT,
				publicUrl:
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"env"
					].R2_CUSTOM_DOMAIN,
			});
		}
		// Global singleton for storage client
		const globalForStorage = globalThis;
		const storage = globalForStorage.storage ?? createStorageClient();
		if (("TURBOPACK compile-time truthy", 1)) {
			globalForStorage.storage = storage;
		}
	},
	"[project]/apps/platform/src/server/services/media-cleanup.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					__turbopack_context__.s([
						"cleanupBlogPostImages",
						() => cleanupBlogPostImages,
						"cleanupPageImages",
						() => cleanupPageImages,
						"cleanupProductMedia",
						() => cleanupProductMedia,
						"cleanupUnusedImages",
						() => cleanupUnusedImages,
						"extractR2ImageUrls",
						() => extractR2ImageUrls,
						"isImageUsedElsewhere",
						() => isImageUsedElsewhere,
						"urlToR2Key",
						() => urlToR2Key,
					]);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/db.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/storage.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/env.js [app-rsc] (ecmascript)",
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
					function extractR2ImageUrls(htmlContent) {
						if (!htmlContent) return [];
						const publicUrl =
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"env"
							].R2_CUSTOM_DOMAIN;
						if (!publicUrl) return [];
						// Match img src attributes that point to our R2 bucket
						const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
						const urls = [];
						let match;
						while (true) {
							match = imgRegex.exec(htmlContent);
							if (!match) break;
							const url = match[1];
							if (url?.startsWith(publicUrl)) {
								urls.push(url);
							}
						}
						return urls;
					}
					function urlToR2Key(url) {
						const publicUrl =
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$env$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"env"
							].R2_CUSTOM_DOMAIN;
						if (!publicUrl || !url.startsWith(publicUrl)) return null;
						// Remove the public URL prefix to get the key
						return url.slice(publicUrl.length + 1); // +1 for the trailing slash
					}
					/**
					 * Check if an image URL is used in any blog post content
					 */ async function isImageUsedInBlogPosts(
						url,
						tenantId,
						excludePostId,
					) {
						const posts =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPostTranslation.findMany({
								where: {
									post: {
										tenantId,
									},
									...(excludePostId && {
										postId: {
											not: excludePostId,
										},
									}),
									content: {
										contains: url,
									},
								},
								select: {
									id: true,
								},
								take: 1,
							});
						return posts.length > 0;
					}
					/**
					 * Check if an image URL is used in any page content
					 */ async function isImageUsedInPages(url, tenantId, excludePageId) {
						const pages =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].pageTranslation.findMany({
								where: {
									page: {
										tenantId,
									},
									...(excludePageId && {
										pageId: {
											not: excludePageId,
										},
									}),
									content: {
										contains: url,
									},
								},
								select: {
									id: true,
								},
								take: 1,
							});
						return pages.length > 0;
					}
					/**
					 * Check if an image URL is used in product media
					 */ async function isImageUsedInProducts(url, tenantId) {
						const media =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].productMedia.findFirst({
								where: {
									product: {
										tenantId,
									},
									url,
								},
								select: {
									id: true,
								},
							});
						return !!media;
					}
					async function isImageUsedElsewhere(url, tenantId, context = {}) {
						const [inBlogPosts, inPages, inProducts] = await Promise.all([
							isImageUsedInBlogPosts(url, tenantId, context.excludeBlogPostId),
							isImageUsedInPages(url, tenantId, context.excludePageId),
							isImageUsedInProducts(url, tenantId),
						]);
						return inBlogPosts || inPages || inProducts;
					}
					async function cleanupUnusedImages(
						imageUrls,
						tenantId,
						context = {},
					) {
						let deletedCount = 0;
						for (const url of imageUrls) {
							const isUsed = await isImageUsedElsewhere(url, tenantId, context);
							if (!isUsed) {
								const key = urlToR2Key(url);
								if (key) {
									try {
										await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
											"storage"
										].delete(key);
										deletedCount++;
										console.log(`[Media Cleanup] Deleted unused image: ${key}`);
									} catch (error) {
										console.error(
											`[Media Cleanup] Failed to delete image: ${key}`,
											error,
										);
									}
								}
							}
						}
						return deletedCount;
					}
					async function cleanupBlogPostImages(content, tenantId, blogPostId) {
						const imageUrls = extractR2ImageUrls(content);
						if (imageUrls.length === 0) return 0;
						return cleanupUnusedImages(imageUrls, tenantId, {
							excludeBlogPostId: blogPostId,
						});
					}
					async function cleanupPageImages(content, tenantId, pageId) {
						const imageUrls = extractR2ImageUrls(content);
						if (imageUrls.length === 0) return 0;
						return cleanupUnusedImages(imageUrls, tenantId, {
							excludePageId: pageId,
						});
					}
					async function cleanupProductMedia(mediaUrls, tenantId) {
						let deletedCount = 0;
						for (const url of mediaUrls) {
							// Check if the URL is from our R2 bucket
							const key = urlToR2Key(url);
							if (!key) continue;
							// Check if this media is used in other products or content
							const isUsed = await isImageUsedElsewhere(url, tenantId);
							if (!isUsed) {
								try {
									await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
										"storage"
									].delete(key);
									deletedCount++;
									console.log(`[Media Cleanup] Deleted product media: ${key}`);
								} catch (error) {
									console.error(
										`[Media Cleanup] Failed to delete media: ${key}`,
										error,
									);
								}
							}
						}
						return deletedCount;
					}
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	"[project]/apps/platform/src/server/api/internal/blog.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					/* __next_internal_action_entry_do_not_use__ [{"008f8492eda7112a375805aa48685413214aeab93d":"getBlogStats","00de3f01b91a9ac6d513de5942c011266961dc79c4":"getBlogPosts","409bc03a689f60f7ab678ca8938b32c2d327ea0677":"createBlogPost","40d7322993d5c124ec007959f402c333effe14ccca":"toggleBlogPostPublished","40d81df54c74dd0f77bc6811c424f98f0caf2d80d1":"deleteBlogPost","40f6848fa6720c8b344249d2318350044637d70575":"getBlogPost","60b1fd248f327bbc25a389733e8187a4947cca4f56":"updateBlogPost"},"",""] */ __turbopack_context__.s(
						[
							"createBlogPost",
							() => createBlogPost,
							"deleteBlogPost",
							() => deleteBlogPost,
							"getBlogPost",
							() => getBlogPost,
							"getBlogPosts",
							() => getBlogPosts,
							"getBlogStats",
							() => getBlogStats,
							"toggleBlogPostPublished",
							() => toggleBlogPostPublished,
							"updateBlogPost",
							() => updateBlogPost,
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
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$services$2f$media$2d$cleanup$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/services/media-cleanup.ts [app-rsc] (ecmascript)",
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
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$services$2f$media$2d$cleanup$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$services$2f$media$2d$cleanup$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
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
					async function getBlogPosts() {
						const { tenantId } = await requireStoreAccess();
						const posts =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.findMany({
								where: {
									tenantId,
								},
								include: {
									translations: {
										include: {
											locale: true,
										},
									},
								},
								orderBy: {
									createdAt: "desc",
								},
							});
						return posts.map((post) => ({
							id: post.id,
							slug: post.slug,
							featuredImage: post.featuredImage,
							author: post.author,
							isPublished: post.isPublished,
							publishedAt: post.publishedAt,
							title: post.translations[0]?.title ?? post.slug,
							excerpt: post.translations[0]?.excerpt ?? "",
							content: post.translations[0]?.content ?? "",
							translations: post.translations.map((t) => ({
								localeId: t.localeId,
								localeCode: t.locale.code,
								localeName: t.locale.name,
								title: t.title,
								excerpt: t.excerpt,
								content: t.content,
							})),
							createdAt: post.createdAt,
							updatedAt: post.updatedAt,
						}));
					}
					async function getBlogPost(id) {
						const { tenantId } = await requireStoreAccess();
						const post =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.findFirst({
								where: {
									id,
									tenantId,
								},
								include: {
									translations: {
										include: {
											locale: true,
										},
									},
								},
							});
						if (!post) {
							throw new Error("Blog post not found");
						}
						return {
							id: post.id,
							slug: post.slug,
							featuredImage: post.featuredImage,
							author: post.author,
							isPublished: post.isPublished,
							publishedAt: post.publishedAt,
							translations: post.translations.map((t) => ({
								id: t.id,
								localeId: t.localeId,
								localeCode: t.locale.code,
								localeName: t.locale.name,
								title: t.title,
								excerpt: t.excerpt,
								content: t.content,
							})),
							createdAt: post.createdAt,
							updatedAt: post.updatedAt,
						};
					}
					async function createBlogPost(input) {
						const { tenantId } = await requireStoreAccess();
						// Check for duplicate slug
						const existing =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.findUnique({
								where: {
									tenantId_slug: {
										tenantId,
										slug: input.slug,
									},
								},
							});
						if (existing) {
							throw new Error("A blog post with this slug already exists");
						}
						const post =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.create({
								data: {
									slug: input.slug,
									featuredImage: input.featuredImage,
									author: input.author,
									isPublished: input.isPublished ?? false,
									publishedAt: input.isPublished
										? (input.publishedAt ?? new Date())
										: null,
									tenantId,
									translations: {
										create: input.translations.map((t) => ({
											localeId: t.localeId,
											title: t.title,
											excerpt: t.excerpt,
											content: t.content,
										})),
									},
								},
								include: {
									translations: true,
								},
							});
						return post;
					}
					async function updateBlogPost(id, input) {
						const { tenantId } = await requireStoreAccess();
						const post =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.findFirst({
								where: {
									id,
									tenantId,
								},
							});
						if (!post) {
							throw new Error("Blog post not found or access denied");
						}
						// Check for duplicate slug if changing
						if (input.slug && input.slug !== post.slug) {
							const existing =
								await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
									"db"
								].blogPost.findUnique({
									where: {
										tenantId_slug: {
											tenantId,
											slug: input.slug,
										},
									},
								});
							if (existing) {
								throw new Error("A blog post with this slug already exists");
							}
						}
						// Handle publish state change
						let publishedAt = input.publishedAt;
						if (input.isPublished !== undefined) {
							if (input.isPublished && !post.isPublished) {
								// Publishing for the first time
								publishedAt = publishedAt ?? new Date();
							} else if (!input.isPublished) {
								// Unpublishing
								publishedAt = null;
							}
						}
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.update({
								where: {
									id,
								},
								data: {
									slug: input.slug,
									featuredImage: input.featuredImage,
									author: input.author,
									isPublished: input.isPublished,
									publishedAt,
									...(input.translations && {
										translations: {
											deleteMany: {},
											create: input.translations.map((t) => ({
												localeId: t.localeId,
												title: t.title,
												excerpt: t.excerpt,
												content: t.content,
											})),
										},
									}),
								},
								include: {
									translations: true,
								},
							});
						return updated;
					}
					async function deleteBlogPost(id) {
						const { tenantId } = await requireStoreAccess();
						const post =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.findFirst({
								where: {
									id,
									tenantId,
								},
								include: {
									translations: {
										select: {
											content: true,
										},
									},
								},
							});
						if (!post) {
							throw new Error("Blog post not found or access denied");
						}
						// Collect all content from translations to find embedded images
						const allContent = post.translations.map((t) => t.content).join("");
						// Delete the blog post first
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].blogPost.delete({
							where: {
								id,
							},
						});
						// Cleanup images that are no longer used (after deletion)
						if (allContent) {
							await (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$services$2f$media$2d$cleanup$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"cleanupBlogPostImages"
							])(allContent, tenantId, id);
						}
						return {
							success: true,
						};
					}
					async function toggleBlogPostPublished(id) {
						const { tenantId } = await requireStoreAccess();
						const post =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.findFirst({
								where: {
									id,
									tenantId,
								},
							});
						if (!post) {
							throw new Error("Blog post not found or access denied");
						}
						const isPublished = !post.isPublished;
						const publishedAt = isPublished
							? (post.publishedAt ?? new Date())
							: post.publishedAt;
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.update({
								where: {
									id,
								},
								data: {
									isPublished,
									publishedAt,
								},
							});
						return updated;
					}
					async function getBlogStats() {
						const { tenantId } = await requireStoreAccess();
						const [total, published, drafts] = await Promise.all([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.count({
								where: {
									tenantId,
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.count({
								where: {
									tenantId,
									isPublished: true,
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.count({
								where: {
									tenantId,
									isPublished: false,
								},
							}),
						]);
						// Get recent posts (last 7 days)
						const weekAgo = new Date();
						weekAgo.setDate(weekAgo.getDate() - 7);
						const recent =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPost.count({
								where: {
									tenantId,
									createdAt: {
										gte: weekAgo,
									},
								},
							});
						return {
							total,
							published,
							drafts,
							recent,
						};
					}
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"ensureServerEntryExports"
					])([
						getBlogPosts,
						getBlogPost,
						createBlogPost,
						updateBlogPost,
						deleteBlogPost,
						toggleBlogPostPublished,
						getBlogStats,
					]);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getBlogPosts, "00de3f01b91a9ac6d513de5942c011266961dc79c4", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getBlogPost, "40f6848fa6720c8b344249d2318350044637d70575", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						createBlogPost,
						"409bc03a689f60f7ab678ca8938b32c2d327ea0677",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						updateBlogPost,
						"60b1fd248f327bbc25a389733e8187a4947cca4f56",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						deleteBlogPost,
						"40d81df54c74dd0f77bc6811c424f98f0caf2d80d1",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						toggleBlogPostPublished,
						"40d7322993d5c124ec007959f402c333effe14ccca",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getBlogStats, "008f8492eda7112a375805aa48685413214aeab93d", null);
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	"[project]/apps/platform/src/server/api/internal/locales.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					/* __next_internal_action_entry_do_not_use__ [{"00c21a4fde5fc4d7ea8af9814bb55639d4f312633e":"getOrCreateDefaultLocale","00e91691b7f42ab5617808351bb848723dc4b54758":"getLocales","401f362e5aaf8f405884971ae2436da791b63ad493":"deleteLocale","4065d87ec4b54bfb8bcc8182e3fb5c78a1697a5d82":"setDefaultLocale","406f737003c1fb01d16938a1d454d7ad91f2a1816e":"getLocale","40969e058f7f35f7266cb67e2bfdfc4093987b52f0":"createLocale","6070b58a72f8742e9145a6937fd56bc634cc254952":"updateLocale"},"",""] */ __turbopack_context__.s(
						[
							"createLocale",
							() => createLocale,
							"deleteLocale",
							() => deleteLocale,
							"getLocale",
							() => getLocale,
							"getLocales",
							() => getLocales,
							"getOrCreateDefaultLocale",
							() => getOrCreateDefaultLocale,
							"setDefaultLocale",
							() => setDefaultLocale,
							"updateLocale",
							() => updateLocale,
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
					async function getOrCreateDefaultLocale() {
						// First try to get the default locale
						let defaultLocale =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.findFirst({
								where: {
									isDefault: true,
								},
							});
						if (!defaultLocale) {
							// Try to get any existing locale
							defaultLocale =
								await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
									"db"
								].locale.findFirst();
						}
						if (!defaultLocale) {
							// Create a default Bulgarian locale since this is a Bulgarian-focused platform
							defaultLocale =
								await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
									"db"
								].locale.create({
									data: {
										code: "bg-BG",
										name: "Български",
										isDefault: true,
									},
								});
						}
						return {
							id: defaultLocale.id,
							code: defaultLocale.code,
							name: defaultLocale.name,
							isDefault: defaultLocale.isDefault,
						};
					}
					async function getLocales() {
						await requireStoreAccess();
						const locales =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.findMany({
								orderBy: [
									{
										isDefault: "desc",
									},
									{
										name: "asc",
									},
								],
							});
						return locales.map((locale) => ({
							id: locale.id,
							code: locale.code,
							name: locale.name,
							isDefault: locale.isDefault,
						}));
					}
					async function getLocale(id) {
						await requireStoreAccess();
						const locale =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.findUnique({
								where: {
									id,
								},
							});
						if (!locale) {
							throw new Error("Locale not found");
						}
						return {
							id: locale.id,
							code: locale.code,
							name: locale.name,
							isDefault: locale.isDefault,
						};
					}
					async function createLocale(input) {
						await requireStoreAccess();
						// Check for duplicate code
						const existing =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.findUnique({
								where: {
									code: input.code,
								},
							});
						if (existing) {
							throw new Error("A locale with this code already exists");
						}
						// If setting as default, unset other defaults
						if (input.isDefault) {
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.updateMany({
								where: {
									isDefault: true,
								},
								data: {
									isDefault: false,
								},
							});
						}
						const locale =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.create({
								data: {
									code: input.code,
									name: input.name,
									isDefault: input.isDefault ?? false,
								},
							});
						return locale;
					}
					async function updateLocale(id, input) {
						await requireStoreAccess();
						const locale =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.findUnique({
								where: {
									id,
								},
							});
						if (!locale) {
							throw new Error("Locale not found");
						}
						// Check for duplicate code if changing
						if (input.code && input.code !== locale.code) {
							const existing =
								await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
									"db"
								].locale.findUnique({
									where: {
										code: input.code,
									},
								});
							if (existing) {
								throw new Error("A locale with this code already exists");
							}
						}
						// If setting as default, unset other defaults
						if (input.isDefault && !locale.isDefault) {
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.updateMany({
								where: {
									isDefault: true,
								},
								data: {
									isDefault: false,
								},
							});
						}
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.update({
								where: {
									id,
								},
								data: {
									code: input.code,
									name: input.name,
									isDefault: input.isDefault,
								},
							});
						return updated;
					}
					async function deleteLocale(id) {
						await requireStoreAccess();
						const locale =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.findUnique({
								where: {
									id,
								},
							});
						if (!locale) {
							throw new Error("Locale not found");
						}
						if (locale.isDefault) {
							throw new Error("Cannot delete the default locale");
						}
						// Check if locale is used in any translations
						const usageCount = await Promise.all([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].productTranslation.count({
								where: {
									localeId: id,
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].categoryTranslation.count({
								where: {
									localeId: id,
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].brandTranslation.count({
								where: {
									localeId: id,
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].pageTranslation.count({
								where: {
									localeId: id,
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].collectionTranslation.count({
								where: {
									localeId: id,
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].blogPostTranslation.count({
								where: {
									localeId: id,
								},
							}),
						]);
						const totalUsage = usageCount.reduce(
							(sum, count) => sum + count,
							0,
						);
						if (totalUsage > 0) {
							throw new Error(
								`Cannot delete locale: it is used in ${totalUsage} translation(s)`,
							);
						}
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].locale.delete({
							where: {
								id,
							},
						});
						return {
							success: true,
						};
					}
					async function setDefaultLocale(id) {
						await requireStoreAccess();
						const locale =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.findUnique({
								where: {
									id,
								},
							});
						if (!locale) {
							throw new Error("Locale not found");
						}
						// Unset current default
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].locale.updateMany({
							where: {
								isDefault: true,
							},
							data: {
								isDefault: false,
							},
						});
						// Set new default
						const updated =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].locale.update({
								where: {
									id,
								},
								data: {
									isDefault: true,
								},
							});
						return updated;
					}
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"ensureServerEntryExports"
					])([
						getOrCreateDefaultLocale,
						getLocales,
						getLocale,
						createLocale,
						updateLocale,
						deleteLocale,
						setDefaultLocale,
					]);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						getOrCreateDefaultLocale,
						"00c21a4fde5fc4d7ea8af9814bb55639d4f312633e",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getLocales, "00e91691b7f42ab5617808351bb848723dc4b54758", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getLocale, "406f737003c1fb01d16938a1d454d7ad91f2a1816e", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(createLocale, "40969e058f7f35f7266cb67e2bfdfc4093987b52f0", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(updateLocale, "6070b58a72f8742e9145a6937fd56bc634cc254952", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(deleteLocale, "401f362e5aaf8f405884971ae2436da791b63ad493", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						setDefaultLocale,
						"4065d87ec4b54bfb8bcc8182e3fb5c78a1697a5d82",
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
	'[project]/apps/platform/.next-internal/server/app/(internal)/admin/content/blog/[id]/edit/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/blog.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/platform/src/server/api/internal/locales.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>',
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
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/internal/blog.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/internal/locales.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
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
	'[project]/apps/platform/.next-internal/server/app/(internal)/admin/content/blog/[id]/edit/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/blog.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/platform/src/server/api/internal/locales.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript)',
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
						"00b865bde8853c0b2200356e8a44aabbfda99ded8f",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"userHasStore"
							],
						"00c21a4fde5fc4d7ea8af9814bb55639d4f312633e",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getOrCreateDefaultLocale"
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
						"40d81df54c74dd0f77bc6811c424f98f0caf2d80d1",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"deleteBlogPost"
							],
						"40ece7c8b327f75aed046925634f22b2bd96f4eb54",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"checkSlugAvailability"
							],
						"40f6848fa6720c8b344249d2318350044637d70575",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getBlogPost"
							],
						"60b1fd248f327bbc25a389733e8187a4947cca4f56",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"updateBlogPost"
							],
					]);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$content$2f$blog$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ =
						__turbopack_context__.i(
							'[project]/apps/platform/.next-internal/server/app/(internal)/admin/content/blog/[id]/edit/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/internal/blog.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/platform/src/server/api/internal/locales.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>',
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/internal/blog.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/internal/locales.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$content$2f$blog$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$admin$2f$content$2f$blog$2f5b$id$5d2f$edit$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$locales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__e6ab0a29._.js.map
