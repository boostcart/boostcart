module.exports = [
	"[project]/apps/platform/src/server/api/platform/actions.ts [app-rsc] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		return __turbopack_context__.a(
			async (
				__turbopack_handle_async_dependencies__,
				__turbopack_async_result__,
			) => {
				try {
					/* __next_internal_action_entry_do_not_use__ [{"00cd4c510fadb9a5a5598461b38f4586af8aaa3e44":"getPlatformStats","405ace8eb3a36fcdbf8adbc751e1fc4538b3feadc1":"deleteTenant","40b3e16e098f902d0ba3aa55530578af341744c1a1":"getTenants","40e0dcea7e68e9d5c2969f8b90d0388b8ac43bf623":"getPlatformUsers","40eea079f5e3dcd9be37481548c4733725c80a9e60":"deleteUser","6051f7f1db88ed4fbf450c07462c8a8abdceef9e60":"updateTenantStatus","60cd19758d90e5fcbefb5e9c7fa842c2ef725a424b":"updateUserRole"},"",""] */ __turbopack_context__.s(
						[
							"deleteTenant",
							() => deleteTenant,
							"deleteUser",
							() => deleteUser,
							"getPlatformStats",
							() => getPlatformStats,
							"getPlatformUsers",
							() => getPlatformUsers,
							"getTenants",
							() => getTenants,
							"updateTenantStatus",
							() => updateTenantStatus,
							"updateUserRole",
							() => updateUserRole,
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
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
					] = __turbopack_async_dependencies__.then
						? (await __turbopack_async_dependencies__)()
						: __turbopack_async_dependencies__;
					// Helper to check if user is platform admin
					async function requirePlatformAdmin() {
						const session = await (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$auth$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
							"auth"
						])();
						if (!session?.user) {
							throw new Error("Unauthorized: Not authenticated");
						}
						if (session.user.role !== "ADMIN") {
							throw new Error("Unauthorized: Platform admin access required");
						}
						return session.user;
					}
					async function getPlatformStats() {
						await requirePlatformAdmin();
						const [
							totalTenants,
							activeTenants,
							totalUsers,
							totalProducts,
							totalOrders,
							recentTenants,
						] = await Promise.all([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.count(),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.count({
								where: {
									isActive: true,
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].user.count(),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].product.count(),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].order.count(),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.findMany({
								take: 5,
								orderBy: {
									createdAt: "desc",
								},
								select: {
									id: true,
									name: true,
									slug: true,
									isActive: true,
									createdAt: true,
									_count: {
										select: {
											products: true,
											orders: true,
										},
									},
								},
							}),
						]);
						// Calculate revenue (sum of all orders)
						const revenueResult =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].order.aggregate({
								_sum: {
									totalAmount: true,
								},
							});
						return {
							totalTenants,
							activeTenants,
							totalUsers,
							totalProducts,
							totalOrders,
							totalRevenue: revenueResult._sum?.totalAmount?.toNumber() ?? 0,
							recentTenants: recentTenants.map((t) => ({
								id: t.id,
								name: t.name,
								slug: t.slug,
								isActive: t.isActive,
								createdAt: t.createdAt.toISOString(),
								_count: t._count,
							})),
						};
					}
					async function getTenants(options) {
						await requirePlatformAdmin();
						const page = options?.page ?? 1;
						const limit = options?.limit ?? 20;
						const skip = (page - 1) * limit;
						const where = {};
						if (options?.search) {
							where.OR = [
								{
									name: {
										contains: options.search,
										mode: "insensitive",
									},
								},
								{
									slug: {
										contains: options.search,
										mode: "insensitive",
									},
								},
							];
						}
						if (options?.status && options.status !== "all") {
							// Map status string to isActive boolean
							if (options.status === "ACTIVE") {
								where.isActive = true;
							} else if (
								options.status === "INACTIVE" ||
								options.status === "SUSPENDED"
							) {
								where.isActive = false;
							}
						}
						const [tenants, total] = await Promise.all([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.findMany({
								where,
								skip,
								take: limit,
								orderBy: {
									createdAt: "desc",
								},
								include: {
									_count: {
										select: {
											products: true,
											orders: true,
											staff: true,
										},
									},
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.count({
								where,
							}),
						]);
						return {
							tenants: tenants.map((t) => ({
								id: t.id,
								name: t.name,
								slug: t.slug,
								isActive: t.isActive,
								email: t.email,
								createdAt: t.createdAt.toISOString(),
								updatedAt: t.updatedAt.toISOString(),
								productCount: t._count.products,
								orderCount: t._count.orders,
								staffCount: t._count.staff,
							})),
							pagination: {
								page,
								limit,
								total,
								totalPages: Math.ceil(total / limit),
							},
						};
					}
					async function updateTenantStatus(tenantId, isActive) {
						await requirePlatformAdmin();
						const tenant =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.update({
								where: {
									id: tenantId,
								},
								data: {
									isActive,
								},
								select: {
									id: true,
									name: true,
									isActive: true,
								},
							});
						return tenant;
					}
					async function deleteTenant(tenantId) {
						await requirePlatformAdmin();
						// First check if tenant exists and get info
						const tenant =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].tenant.findUnique({
								where: {
									id: tenantId,
								},
								select: {
									name: true,
									_count: {
										select: {
											orders: true,
											products: true,
										},
									},
								},
							});
						if (!tenant) {
							throw new Error("Tenant not found");
						}
						// Delete tenant (cascading deletes should handle related data)
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].tenant.delete({
							where: {
								id: tenantId,
							},
						});
						return {
							success: true,
							name: tenant.name,
						};
					}
					async function getPlatformUsers(options) {
						await requirePlatformAdmin();
						const page = options?.page ?? 1;
						const limit = options?.limit ?? 20;
						const skip = (page - 1) * limit;
						const where = {};
						if (options?.search) {
							where.OR = [
								{
									name: {
										contains: options.search,
										mode: "insensitive",
									},
								},
								{
									email: {
										contains: options.search,
										mode: "insensitive",
									},
								},
							];
						}
						if (options?.role && options.role !== "all") {
							where.role = options.role;
						}
						const [users, total] = await Promise.all([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].user.findMany({
								where,
								skip,
								take: limit,
								orderBy: {
									createdAt: "desc",
								},
								select: {
									id: true,
									name: true,
									email: true,
									emailVerified: true,
									image: true,
									role: true,
									createdAt: true,
									updatedAt: true,
								},
							}),
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].user.count({
								where,
							}),
						]);
						return {
							users: users.map((u) => ({
								...u,
								createdAt: u.createdAt.toISOString(),
								updatedAt: u.updatedAt.toISOString(),
							})),
							pagination: {
								page,
								limit,
								total,
								totalPages: Math.ceil(total / limit),
							},
						};
					}
					async function updateUserRole(userId, role) {
						const admin = await requirePlatformAdmin();
						// Prevent removing own admin role
						if (userId === admin.id && role !== "ADMIN") {
							throw new Error("Cannot remove your own admin role");
						}
						const user =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].user.update({
								where: {
									id: userId,
								},
								data: {
									role,
								},
								select: {
									id: true,
									name: true,
									email: true,
									role: true,
								},
							});
						return user;
					}
					async function deleteUser(userId) {
						const admin = await requirePlatformAdmin();
						// Prevent self-deletion
						if (userId === admin.id) {
							throw new Error("Cannot delete your own account");
						}
						const user =
							await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"db"
							].user.findUnique({
								where: {
									id: userId,
								},
								select: {
									name: true,
									email: true,
								},
							});
						if (!user) {
							throw new Error("User not found");
						}
						await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
							"db"
						].user.delete({
							where: {
								id: userId,
							},
						});
						return {
							success: true,
							name: user.name,
							email: user.email,
						};
					}
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"ensureServerEntryExports"
					])([
						getPlatformStats,
						getTenants,
						updateTenantStatus,
						deleteTenant,
						getPlatformUsers,
						updateUserRole,
						deleteUser,
					]);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						getPlatformStats,
						"00cd4c510fadb9a5a5598461b38f4586af8aaa3e44",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(getTenants, "40b3e16e098f902d0ba3aa55530578af341744c1a1", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						updateTenantStatus,
						"6051f7f1db88ed4fbf450c07462c8a8abdceef9e60",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(deleteTenant, "405ace8eb3a36fcdbf8adbc751e1fc4538b3feadc1", null);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						getPlatformUsers,
						"40e0dcea7e68e9d5c2969f8b90d0388b8ac43bf623",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(
						updateUserRole,
						"60cd19758d90e5fcbefb5e9c7fa842c2ef725a424b",
						null,
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
						"registerServerReference"
					])(deleteUser, "40eea079f5e3dcd9be37481548c4733725c80a9e60", null);
					__turbopack_async_result__();
				} catch (e) {
					__turbopack_async_result__(e);
				}
			},
			false,
		);
	},
	'[project]/apps/platform/.next-internal/server/app/(internal)/platform-admin/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/platform/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>',
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
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$platform$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/platform/actions.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$platform$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$platform$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
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
	'[project]/apps/platform/.next-internal/server/app/(internal)/platform-admin/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/platform/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript)',
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
						"00cd4c510fadb9a5a5598461b38f4586af8aaa3e44",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$platform$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"getPlatformStats"
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
						"40ece7c8b327f75aed046925634f22b2bd96f4eb54",
						() =>
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
								"checkSlugAvailability"
							],
					]);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$platform$2d$admin$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$platform$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ =
						__turbopack_context__.i(
							'[project]/apps/platform/.next-internal/server/app/(internal)/platform-admin/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/platform/src/server/api/platform/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>',
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/private/tenant.ts [app-rsc] (ecmascript)",
						);
					var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$platform$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							"[project]/apps/platform/src/server/api/platform/actions.ts [app-rsc] (ecmascript)",
						);
					var __turbopack_async_dependencies__ =
						__turbopack_handle_async_dependencies__([
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$platform$2d$admin$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$platform$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$platform$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						]);
					[
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f2e$next$2d$internal$2f$server$2f$app$2f28$internal$292f$platform$2d$admin$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$platform$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$private$2f$tenant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$platform$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
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

//# sourceMappingURL=apps_platform_b9351a5f._.js.map
