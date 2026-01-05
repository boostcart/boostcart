module.exports = [
	"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/server/app-render/action-async-storage.external.js",
			() =>
				require("next/dist/server/app-render/action-async-storage.external.js"),
		);

		module.exports = mod;
	},
	"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/server/app-render/work-unit-async-storage.external.js",
			() =>
				require("next/dist/server/app-render/work-unit-async-storage.external.js"),
		);

		module.exports = mod;
	},
	"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)",
	(__turbopack_context__, module, exports) => {
		const mod = __turbopack_context__.x(
			"next/dist/server/app-render/work-async-storage.external.js",
			() =>
				require("next/dist/server/app-render/work-async-storage.external.js"),
		);

		module.exports = mod;
	},
	"[project]/packages/auth/src/client.ts [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["createAuthClient", () => createAuthClient]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$plugins$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/better-auth/dist/client/plugins/index.mjs [app-ssr] (ecmascript) <locals>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$magic$2d$link$2f$client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/better-auth/dist/plugins/magic-link/client.mjs [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/better-auth/dist/client/react/index.mjs [app-ssr] (ecmascript) <locals>",
			);
		("use client");
		function createAuthClient(config) {
			return (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
				"createAuthClient"
			])({
				baseURL: config.baseURL,
				plugins: [
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$magic$2d$link$2f$client$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"magicLinkClient"
					])(),
				],
			});
		} // Types are exported inline with the interface definition
	},
	"[project]/apps/platform/src/lib/auth-client.ts [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"authClient",
			() => authClient,
			"signIn",
			() => signIn,
			"signOut",
			() => signOut,
			"signUp",
			() => signUp,
			"useSession",
			() => useSession,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/packages/auth/src/client.ts [app-ssr] (ecmascript)",
			);
		("use client");
		const authClient = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"createAuthClient"
		])({
			baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
		});
		const { signIn, signUp, signOut, useSession } = authClient;
	},
	"[project]/apps/platform/src/app/_components/sign-out-button.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["SignOutButton", () => SignOutButton]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/auth-client.ts [app-ssr] (ecmascript)",
			);
		("use client");
		function SignOutButton() {
			const router = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useRouter"
			])();
			const handleSignOut = async () => {
				await (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"signOut"
				])();
				router.push("/signin");
			};
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"button",
				{
					type: "button",
					onClick: handleSignOut,
					className: "text-blue-500 text-left",
					children: "Sign out",
				},
				void 0,
				false,
				{
					fileName:
						"[project]/apps/platform/src/app/_components/sign-out-button.tsx",
					lineNumber: 15,
					columnNumber: 3,
				},
				this,
			);
		}
	},
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d9c82f4d._.js.map
