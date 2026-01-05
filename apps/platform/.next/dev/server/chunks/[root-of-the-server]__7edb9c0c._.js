module.exports = [
	"[externals]/node:buffer [external] (node:buffer, cjs, async loader)",
	(__turbopack_context__) => {
		__turbopack_context__.v((parentImport) => {
			return Promise.all(
				["server/chunks/[externals]_node:buffer_00e2e67a._.js"].map((chunk) =>
					__turbopack_context__.l(chunk),
				),
			).then(() => {
				return parentImport(
					"[externals]/node:buffer [external] (node:buffer, cjs)",
				);
			});
		});
	},
	"[externals]/@prisma/client/runtime/query_compiler_bg.postgresql.mjs [external] (@prisma/client/runtime/query_compiler_bg.postgresql.mjs, esm_import, [project]/node_modules/@prisma/client, async loader)",
	(__turbopack_context__) => {
		__turbopack_context__.v((parentImport) => {
			return Promise.all(
				[
					"server/chunks/[externals]_@prisma_client_runtime_query_compiler_bg_postgresql_mjs_ddc2b862._.js",
				].map((chunk) => __turbopack_context__.l(chunk)),
			).then(() => {
				return parentImport(
					"[externals]/@prisma/client/runtime/query_compiler_bg.postgresql.mjs [external] (@prisma/client/runtime/query_compiler_bg.postgresql.mjs, esm_import, [project]/node_modules/@prisma/client)",
				);
			});
		});
	},
	"[externals]/@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs [external] (@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs, esm_import, [project]/node_modules/@prisma/client, async loader)",
	(__turbopack_context__) => {
		__turbopack_context__.v((parentImport) => {
			return Promise.all(
				[
					"server/chunks/2e4a4_@prisma_client_runtime_query_compiler_bg_postgresql_wasm-base64_mjs_abc8d0b7._.js",
				].map((chunk) => __turbopack_context__.l(chunk)),
			).then(() => {
				return parentImport(
					"[externals]/@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs [external] (@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs, esm_import, [project]/node_modules/@prisma/client)",
				);
			});
		});
	},
	"[project]/node_modules/better-auth/dist/adapters/memory-adapter/index.mjs [app-route] (ecmascript, async loader)",
	(__turbopack_context__) => {
		__turbopack_context__.v((parentImport) => {
			return Promise.all(
				[
					"server/chunks/node_modules_better-auth_dist_adapters_memory-adapter_fd971327._.js",
				].map((chunk) => __turbopack_context__.l(chunk)),
			).then(() => {
				return parentImport(
					"[project]/node_modules/better-auth/dist/adapters/memory-adapter/index.mjs [app-route] (ecmascript)",
				);
			});
		});
	},
	"[project]/node_modules/better-auth/dist/adapters/kysely-adapter/index.mjs [app-route] (ecmascript, async loader)",
	(__turbopack_context__) => {
		__turbopack_context__.v((parentImport) => {
			return Promise.all(
				[
					"server/chunks/node_modules_better-auth_dist_adapters_kysely-adapter_d6d1c3b7._.js",
				].map((chunk) => __turbopack_context__.l(chunk)),
			).then(() => {
				return parentImport(
					"[project]/node_modules/better-auth/dist/adapters/kysely-adapter/index.mjs [app-route] (ecmascript)",
				);
			});
		});
	},
	"[project]/node_modules/better-auth/dist/adapters/kysely-adapter/bun-sqlite-dialect.mjs [app-route] (ecmascript, async loader)",
	(__turbopack_context__) => {
		__turbopack_context__.v((parentImport) => {
			return Promise.all(
				[
					"server/chunks/a9bf9_better-auth_dist_adapters_kysely-adapter_bun-sqlite-dialect_mjs_81919b3b._.js",
				].map((chunk) => __turbopack_context__.l(chunk)),
			).then(() => {
				return parentImport(
					"[project]/node_modules/better-auth/dist/adapters/kysely-adapter/bun-sqlite-dialect.mjs [app-route] (ecmascript)",
				);
			});
		});
	},
	"[project]/node_modules/better-auth/dist/adapters/kysely-adapter/node-sqlite-dialect.mjs [app-route] (ecmascript, async loader)",
	(__turbopack_context__) => {
		__turbopack_context__.v((parentImport) => {
			return Promise.all(
				[
					"server/chunks/a9bf9_better-auth_dist_adapters_kysely-adapter_node-sqlite-dialect_mjs_4d47c97e._.js",
				].map((chunk) => __turbopack_context__.l(chunk)),
			).then(() => {
				return parentImport(
					"[project]/node_modules/better-auth/dist/adapters/kysely-adapter/node-sqlite-dialect.mjs [app-route] (ecmascript)",
				);
			});
		});
	},
	"[project]/node_modules/@react-email/render/dist/node/index.mjs [app-route] (ecmascript, async loader)",
	(__turbopack_context__) => {
		__turbopack_context__.v((parentImport) => {
			return Promise.all(
				[
					"server/chunks/node_modules_next_dist_compiled_react-dom_server_node_da9cdf3a.js",
					"server/chunks/[root-of-the-server]__eceda62d._.js",
					"server/chunks/[externals]_node:stream_ed4cc72c._.js",
				].map((chunk) => __turbopack_context__.l(chunk)),
			).then(() => {
				return parentImport(
					"[project]/node_modules/@react-email/render/dist/node/index.mjs [app-route] (ecmascript)",
				);
			});
		});
	},
];
