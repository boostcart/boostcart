module.exports = [
	"[project]/apps/platform/src/components/admin/polaris-button.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["PolarisButton", () => PolarisButton]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)",
			);
		function PolarisButton({
			children,
			size = "slim",
			fullWidth = false,
			loading = false,
			disabled = false,
			icon,
			className,
			...props
		}) {
			const sizeClasses = {
				micro: "h-7 px-2.5 text-xs",
				slim: "h-9 px-3 text-sm",
				medium: "h-10 px-4 text-sm",
				large: "h-12 px-5 text-base",
			};
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"button",
				{
					type: "button",
					disabled: disabled || loading,
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						// Base styles matching Polaris primary button
						"relative inline-flex items-center justify-center gap-2",
						"font-semibold rounded-[10px] cursor-pointer",
						"transition-all duration-200 ease-out",
						"outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
						"border-0",
						"shadow-[inset_0_1.5px_0_0_rgba(0,0,0,0.6),inset_1.5px_0_0_0_rgba(0,0,0,0.8),inset_-1.5px_0_0_0_rgba(0,0,0,0.8),inset_0_-3px_0_0_rgba(0,0,0,0.8)]",
						"bg-linear-to-b from-[#4a4a4a] to-[#303030]", // Text colors from Polaris tokens
						"text-white",
						"hover:before:absolute hover:before:inset-0 hover:before:rounded-[10px] hover:before:bg-black hover:before:opacity-30 hover:before:transition-opacity hover:before:duration-200 hover:before:content-['']", // Disabled state
						"disabled:bg-linear-to-b disabled:from-[rgba(0,0,0,0.2)] disabled:to-[rgba(0,0,0,0.17)]",
						"disabled:text-[rgba(255,255,255,0.6)]",
						"disabled:cursor-not-allowed",
						"disabled:shadow-[inset_0_1.5px_0_0_rgba(0,0,0,0.2),inset_1.5px_0_0_0_rgba(0,0,0,0.2),inset_-1.5px_0_0_0_rgba(0,0,0,0.2),inset_0_-3px_0_0_rgba(0,0,0,0.2)]",
						"disabled:hover:before:opacity-0", // Focus state border
						"focus-visible:outline-[#005BD3]",
						"active:shadow-[inset_0_4px_0_0_rgba(0,0,0,0.8),inset_1.5px_0_0_0_rgba(0,0,0,0.8),inset_-1.5px_0_0_0_rgba(0,0,0,0.8),inset_0_-3px_0_0_rgba(0,0,0,0.8)]",
						"active:bg-linear-to-b active:from-[#2a2a2a] active:to-[#1a1a1a]",
						"active:[&>span:last-child]:translate-y-px", // Size variants
						sizeClasses[size], // Full width
						fullWidth && "w-full",
						className,
					),
					...props,
					children: [
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							"span",
							{
								className:
									"absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0_3px_0_0_rgba(255,255,255,0.2),inset_1.5px_0_0_0_rgba(255,255,255,0.1),inset_-1.5px_0_0_0_rgba(255,255,255,0.1)] active:opacity-0 transition-opacity duration-200",
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/components/admin/polaris-button.tsx",
								lineNumber: 76,
								columnNumber: 4,
							},
							this,
						),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							"span",
							{
								className:
									"relative flex items-center justify-center gap-2 transition-transform duration-200",
								children: [
									loading
										? /*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"svg",
												{
													className: "animate-spin size-4",
													xmlns: "http://www.w3.org/2000/svg",
													fill: "none",
													viewBox: "0 0 24 24",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"title",
															{
																children: "Loading",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/components/admin/polaris-button.tsx",
																lineNumber: 86,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"circle",
															{
																className: "opacity-25",
																cx: "12",
																cy: "12",
																r: "10",
																stroke: "currentColor",
																strokeWidth: "4",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/components/admin/polaris-button.tsx",
																lineNumber: 87,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"path",
															{
																className: "opacity-75",
																fill: "currentColor",
																d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/components/admin/polaris-button.tsx",
																lineNumber: 95,
																columnNumber: 7,
															},
															this,
														),
													],
												},
												void 0,
												true,
												{
													fileName:
														"[project]/apps/platform/src/components/admin/polaris-button.tsx",
													lineNumber: 80,
													columnNumber: 6,
												},
												this,
											)
										: icon &&
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"span",
												{
													className: "shrink-0",
													children: icon,
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/components/admin/polaris-button.tsx",
													lineNumber: 102,
													columnNumber: 14,
												},
												this,
											),
									children,
								],
							},
							void 0,
							true,
							{
								fileName:
									"[project]/apps/platform/src/components/admin/polaris-button.tsx",
								lineNumber: 78,
								columnNumber: 4,
							},
							this,
						),
					],
				},
				void 0,
				true,
				{
					fileName:
						"[project]/apps/platform/src/components/admin/polaris-button.tsx",
					lineNumber: 32,
					columnNumber: 3,
				},
				this,
			);
		}
	},
	"[project]/apps/platform/src/components/ui/card.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"Card",
			() => Card,
			"CardContent",
			() => CardContent,
			"CardDescription",
			() => CardDescription,
			"CardFooter",
			() => CardFooter,
			"CardHeader",
			() => CardHeader,
			"CardTitle",
			() => CardTitle,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)",
			);
		const Card =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"div",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"rounded-lg border bg-card text-card-foreground shadow-sm",
							className,
						),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/card.tsx",
						lineNumber: 9,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		Card.displayName = "Card";
		const CardHeader =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"div",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("flex flex-col space-y-1.5 p-6", className),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/card.tsx",
						lineNumber: 24,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		CardHeader.displayName = "CardHeader";
		const CardTitle =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"div",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("text-2xl font-semibold leading-none tracking-tight", className),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/card.tsx",
						lineNumber: 36,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		CardTitle.displayName = "CardTitle";
		const CardDescription =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"div",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("text-sm text-muted-foreground", className),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/card.tsx",
						lineNumber: 51,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		CardDescription.displayName = "CardDescription";
		const CardContent =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"div",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("p-6 pt-0", className),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/card.tsx",
						lineNumber: 63,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		CardContent.displayName = "CardContent";
		const CardFooter =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"div",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("flex items-center p-6 pt-0", className),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/card.tsx",
						lineNumber: 71,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		CardFooter.displayName = "CardFooter";
	},
	"[project]/apps/platform/src/components/ui/table.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"Table",
			() => Table,
			"TableBody",
			() => TableBody,
			"TableCaption",
			() => TableCaption,
			"TableCell",
			() => TableCell,
			"TableFooter",
			() => TableFooter,
			"TableHead",
			() => TableHead,
			"TableHeader",
			() => TableHeader,
			"TableRow",
			() => TableRow,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)",
			);
		const Table =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"div",
					{
						className: "relative w-full overflow-auto",
						children: /*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							"table",
							{
								ref: ref,
								className: (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"cn"
								])("w-full caption-bottom text-sm", className),
								...props,
							},
							void 0,
							false,
							{
								fileName: "[project]/apps/platform/src/components/ui/table.tsx",
								lineNumber: 10,
								columnNumber: 3,
							},
							("TURBOPACK compile-time value", void 0),
						),
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/table.tsx",
						lineNumber: 9,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		Table.displayName = "Table";
		const TableHeader =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"thead",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("[&_tr]:border-b", className),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/table.tsx",
						lineNumber: 23,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		TableHeader.displayName = "TableHeader";
		const TableBody =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"tbody",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("[&_tr:last-child]:border-0", className),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/table.tsx",
						lineNumber: 31,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		TableBody.displayName = "TableBody";
		const TableFooter =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"tfoot",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
							className,
						),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/table.tsx",
						lineNumber: 43,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		TableFooter.displayName = "TableFooter";
		const TableRow =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"tr",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
							className,
						),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/table.tsx",
						lineNumber: 58,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		TableRow.displayName = "TableRow";
		const TableHead =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"th",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
							className,
						),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/table.tsx",
						lineNumber: 73,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		TableHead.displayName = "TableHead";
		const TableCell =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"td",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/table.tsx",
						lineNumber: 88,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		TableCell.displayName = "TableCell";
		const TableCaption =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"caption",
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("mt-4 text-sm text-muted-foreground", className),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/table.tsx",
						lineNumber: 100,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		TableCaption.displayName = "TableCaption";
	},
	"[project]/apps/platform/src/server/api/internal/data:49487e [app-ssr] (ecmascript) <text/javascript>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["deletePage", () => $$RSC_SERVER_ACTION_4]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)",
			);
		/* __next_internal_action_entry_do_not_use__ [{"40e37672919721ec0e79b35dabac5314b91395c59e":"deletePage"},"apps/platform/src/server/api/internal/pages.ts",""] */ ("use turbopack no side effects");
		const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"createServerReference"
		])(
			"40e37672919721ec0e79b35dabac5314b91395c59e",
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"callServer"
			],
			void 0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"findSourceMapURL"
			],
			"deletePage",
		);
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcGFnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9zZXJ2ZXIvYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7IHJlcXVpcmVBZG1pblRlbmFudCB9IGZyb20gXCJAL3NlcnZlci90ZW5hbnRcIjtcbmltcG9ydCB7IGNsZWFudXBQYWdlSW1hZ2VzIH0gZnJvbSBcIkAvc2VydmVyL3NlcnZpY2VzL21lZGlhLWNsZWFudXBcIjtcbmltcG9ydCB0eXBlIHsgUGFnZVR5cGUgfSBmcm9tIFwiQGJvb3N0Y2FydC9kYXRhYmFzZVwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZXMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHBhZ2VzID0gYXdhaXQgZGIucGFnZS5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHsgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdGxvY2FsZTogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIHBhZ2VzLm1hcCgocGFnZSkgPT4gKHtcblx0XHRpZDogcGFnZS5pZCxcblx0XHRzbHVnOiBwYWdlLnNsdWcsXG5cdFx0dHlwZTogcGFnZS50eXBlLFxuXHRcdGlzQWN0aXZlOiBwYWdlLmlzQWN0aXZlLFxuXHRcdHRpdGxlOiBwYWdlLnRyYW5zbGF0aW9uc1swXT8udGl0bGUgPz8gcGFnZS5zbHVnLFxuXHRcdGNvbnRlbnQ6IHBhZ2UudHJhbnNsYXRpb25zWzBdPy5jb250ZW50ID8/IFwiXCIsXG5cdFx0dHJhbnNsYXRpb25zOiBwYWdlLnRyYW5zbGF0aW9ucy5tYXAoKHQpID0+ICh7XG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcGFnZS5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwYWdlLnVwZGF0ZWRBdCxcblx0fSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZShpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHBhZ2UgPSBhd2FpdCBkYi5wYWdlLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRsb2NhbGU6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghcGFnZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlBhZ2Ugbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpZDogcGFnZS5pZCxcblx0XHRzbHVnOiBwYWdlLnNsdWcsXG5cdFx0dHlwZTogcGFnZS50eXBlLFxuXHRcdGlzQWN0aXZlOiBwYWdlLmlzQWN0aXZlLFxuXHRcdHRyYW5zbGF0aW9uczogcGFnZS50cmFuc2xhdGlvbnMubWFwKCh0KSA9PiAoe1xuXHRcdFx0aWQ6IHQuaWQsXG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcGFnZS5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwYWdlLnVwZGF0ZWRBdCxcblx0fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVQYWdlSW5wdXQge1xuXHRzbHVnOiBzdHJpbmc7XG5cdHR5cGU6IFBhZ2VUeXBlO1xuXHRpc0FjdGl2ZT86IGJvb2xlYW47XG5cdHRyYW5zbGF0aW9uczoge1xuXHRcdGxvY2FsZUlkOiBzdHJpbmc7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRjb250ZW50OiBzdHJpbmc7XG5cdH1bXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoaW5wdXQ6IENyZWF0ZVBhZ2VJbnB1dCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHQvLyBDaGVjayBmb3IgZHVwbGljYXRlIHNsdWdcblx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCBkYi5wYWdlLmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZF9zbHVnOiB7XG5cdFx0XHRcdHRlbmFudElkLFxuXHRcdFx0XHRzbHVnOiBpbnB1dC5zbHVnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhZ2Ugd2l0aCB0aGlzIHNsdWcgYWxyZWFkeSBleGlzdHNcIik7XG5cdH1cblxuXHRjb25zdCBwYWdlID0gYXdhaXQgZGIucGFnZS5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHR0eXBlOiBpbnB1dC50eXBlLFxuXHRcdFx0aXNBY3RpdmU6IGlucHV0LmlzQWN0aXZlID8/IHRydWUsXG5cdFx0XHR0ZW5hbnRJZCxcblx0XHRcdHRyYW5zbGF0aW9uczoge1xuXHRcdFx0XHRjcmVhdGU6IGlucHV0LnRyYW5zbGF0aW9ucyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHRydWUsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHBhZ2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlUGFnZUlucHV0IHtcblx0c2x1Zz86IHN0cmluZztcblx0dHlwZT86IFBhZ2VUeXBlO1xuXHRpc0FjdGl2ZT86IGJvb2xlYW47XG5cdHRyYW5zbGF0aW9ucz86IHtcblx0XHRsb2NhbGVJZDogc3RyaW5nO1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0Y29udGVudDogc3RyaW5nO1xuXHR9W107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYWdlKGlkOiBzdHJpbmcsIGlucHV0OiBVcGRhdGVQYWdlSW5wdXQpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IHBhZ2UgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgcGFnZSA9IGF3YWl0IGRiLnBhZ2UuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFwYWdlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUGFnZSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc2x1ZyBpZiBjaGFuZ2luZ1xuXHRpZiAoaW5wdXQuc2x1ZyAmJiBpbnB1dC5zbHVnICE9PSBwYWdlLnNsdWcpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLnBhZ2UuZmluZFVuaXF1ZSh7XG5cdFx0XHR3aGVyZToge1xuXHRcdFx0XHR0ZW5hbnRJZF9zbHVnOiB7XG5cdFx0XHRcdFx0dGVuYW50SWQsXG5cdFx0XHRcdFx0c2x1ZzogaW5wdXQuc2x1Zyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRpZiAoZXhpc3RpbmcpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkEgcGFnZSB3aXRoIHRoaXMgc2x1ZyBhbHJlYWR5IGV4aXN0c1wiKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucGFnZS51cGRhdGUoe1xuXHRcdHdoZXJlOiB7IGlkIH0sXG5cdFx0ZGF0YToge1xuXHRcdFx0c2x1ZzogaW5wdXQuc2x1Zyxcblx0XHRcdHR5cGU6IGlucHV0LnR5cGUsXG5cdFx0XHRpc0FjdGl2ZTogaW5wdXQuaXNBY3RpdmUsXG5cdFx0XHQuLi4oaW5wdXQudHJhbnNsYXRpb25zICYmIHtcblx0XHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdFx0ZGVsZXRlTWFueToge30sXG5cdFx0XHRcdFx0Y3JlYXRlOiBpbnB1dC50cmFuc2xhdGlvbnMsXG5cdFx0XHRcdH0sXG5cdFx0XHR9KSxcblx0XHR9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHRyYW5zbGF0aW9uczogdHJ1ZSxcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gdXBkYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBhZ2UoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHQvLyBWZXJpZnkgcGFnZSBiZWxvbmdzIHRvIHRlbmFudCBhbmQgZ2V0IGNvbnRlbnQgZm9yIGNsZWFudXBcblx0Y29uc3QgcGFnZSA9IGF3YWl0IGRiLnBhZ2UuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0c2VsZWN0OiB7IGNvbnRlbnQ6IHRydWUgfSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFwYWdlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUGFnZSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdC8vIENvbGxlY3QgYWxsIGNvbnRlbnQgZnJvbSB0cmFuc2xhdGlvbnMgdG8gZmluZCBlbWJlZGRlZCBpbWFnZXNcblx0Y29uc3QgYWxsQ29udGVudCA9IHBhZ2UudHJhbnNsYXRpb25zLm1hcCgodCkgPT4gdC5jb250ZW50KS5qb2luKFwiXCIpO1xuXG5cdC8vIERlbGV0ZSB0aGUgcGFnZSBmaXJzdFxuXHRhd2FpdCBkYi5wYWdlLmRlbGV0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0Ly8gQ2xlYW51cCBpbWFnZXMgdGhhdCBhcmUgbm8gbG9uZ2VyIHVzZWQgKGFmdGVyIGRlbGV0aW9uKVxuXHRpZiAoYWxsQ29udGVudCkge1xuXHRcdGF3YWl0IGNsZWFudXBQYWdlSW1hZ2VzKGFsbENvbnRlbnQsIHRlbmFudElkLCBpZCk7XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVQYWdlQWN0aXZlKGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgcGFnZSA9IGF3YWl0IGRiLnBhZ2UuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFwYWdlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUGFnZSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5wYWdlLnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiB7IGlzQWN0aXZlOiAhcGFnZS5pc0FjdGl2ZSB9LFxuXHR9KTtcblxuXHRyZXR1cm4gdXBkYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VUeXBlcygpIHtcblx0cmV0dXJuIFtcblx0XHR7IHZhbHVlOiBcIkZBUVwiLCBsYWJlbDogXCJGQVFcIiB9LFxuXHRcdHsgdmFsdWU6IFwiQ09OVEFDVFwiLCBsYWJlbDogXCJDb250YWN0XCIgfSxcblx0XHR7IHZhbHVlOiBcIkFCT1VUX1VTXCIsIGxhYmVsOiBcIkFib3V0IFVzXCIgfSxcblx0XHR7IHZhbHVlOiBcIlBSSVZBQ1lfUE9MSUNZXCIsIGxhYmVsOiBcIlByaXZhY3kgUG9saWN5XCIgfSxcblx0XHR7IHZhbHVlOiBcIlRFUk1TX09GX1NFUlZJQ0VcIiwgbGFiZWw6IFwiVGVybXMgb2YgU2VydmljZVwiIH0sXG5cdFx0eyB2YWx1ZTogXCJDVVNUT01cIiwgbGFiZWw6IFwiQ3VzdG9tIFBhZ2VcIiB9LFxuXHRdO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2U0FrTnNCLHVMQUFBIn0=
	},
	"[project]/apps/platform/src/server/api/internal/data:877624 [app-ssr] (ecmascript) <text/javascript>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["getPages", () => $$RSC_SERVER_ACTION_0]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)",
			);
		/* __next_internal_action_entry_do_not_use__ [{"00cc607478e21e37e38251ef6eb5bab9bc152bf49f":"getPages"},"apps/platform/src/server/api/internal/pages.ts",""] */ ("use turbopack no side effects");
		const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"createServerReference"
		])(
			"00cc607478e21e37e38251ef6eb5bab9bc152bf49f",
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"callServer"
			],
			void 0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"findSourceMapURL"
			],
			"getPages",
		);
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcGFnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9zZXJ2ZXIvYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7IHJlcXVpcmVBZG1pblRlbmFudCB9IGZyb20gXCJAL3NlcnZlci90ZW5hbnRcIjtcbmltcG9ydCB7IGNsZWFudXBQYWdlSW1hZ2VzIH0gZnJvbSBcIkAvc2VydmVyL3NlcnZpY2VzL21lZGlhLWNsZWFudXBcIjtcbmltcG9ydCB0eXBlIHsgUGFnZVR5cGUgfSBmcm9tIFwiQGJvb3N0Y2FydC9kYXRhYmFzZVwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZXMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHBhZ2VzID0gYXdhaXQgZGIucGFnZS5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHsgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdGxvY2FsZTogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIHBhZ2VzLm1hcCgocGFnZSkgPT4gKHtcblx0XHRpZDogcGFnZS5pZCxcblx0XHRzbHVnOiBwYWdlLnNsdWcsXG5cdFx0dHlwZTogcGFnZS50eXBlLFxuXHRcdGlzQWN0aXZlOiBwYWdlLmlzQWN0aXZlLFxuXHRcdHRpdGxlOiBwYWdlLnRyYW5zbGF0aW9uc1swXT8udGl0bGUgPz8gcGFnZS5zbHVnLFxuXHRcdGNvbnRlbnQ6IHBhZ2UudHJhbnNsYXRpb25zWzBdPy5jb250ZW50ID8/IFwiXCIsXG5cdFx0dHJhbnNsYXRpb25zOiBwYWdlLnRyYW5zbGF0aW9ucy5tYXAoKHQpID0+ICh7XG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcGFnZS5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwYWdlLnVwZGF0ZWRBdCxcblx0fSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZShpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHBhZ2UgPSBhd2FpdCBkYi5wYWdlLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRsb2NhbGU6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghcGFnZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlBhZ2Ugbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpZDogcGFnZS5pZCxcblx0XHRzbHVnOiBwYWdlLnNsdWcsXG5cdFx0dHlwZTogcGFnZS50eXBlLFxuXHRcdGlzQWN0aXZlOiBwYWdlLmlzQWN0aXZlLFxuXHRcdHRyYW5zbGF0aW9uczogcGFnZS50cmFuc2xhdGlvbnMubWFwKCh0KSA9PiAoe1xuXHRcdFx0aWQ6IHQuaWQsXG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcGFnZS5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwYWdlLnVwZGF0ZWRBdCxcblx0fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVQYWdlSW5wdXQge1xuXHRzbHVnOiBzdHJpbmc7XG5cdHR5cGU6IFBhZ2VUeXBlO1xuXHRpc0FjdGl2ZT86IGJvb2xlYW47XG5cdHRyYW5zbGF0aW9uczoge1xuXHRcdGxvY2FsZUlkOiBzdHJpbmc7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRjb250ZW50OiBzdHJpbmc7XG5cdH1bXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoaW5wdXQ6IENyZWF0ZVBhZ2VJbnB1dCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHQvLyBDaGVjayBmb3IgZHVwbGljYXRlIHNsdWdcblx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCBkYi5wYWdlLmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZF9zbHVnOiB7XG5cdFx0XHRcdHRlbmFudElkLFxuXHRcdFx0XHRzbHVnOiBpbnB1dC5zbHVnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhZ2Ugd2l0aCB0aGlzIHNsdWcgYWxyZWFkeSBleGlzdHNcIik7XG5cdH1cblxuXHRjb25zdCBwYWdlID0gYXdhaXQgZGIucGFnZS5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHR0eXBlOiBpbnB1dC50eXBlLFxuXHRcdFx0aXNBY3RpdmU6IGlucHV0LmlzQWN0aXZlID8/IHRydWUsXG5cdFx0XHR0ZW5hbnRJZCxcblx0XHRcdHRyYW5zbGF0aW9uczoge1xuXHRcdFx0XHRjcmVhdGU6IGlucHV0LnRyYW5zbGF0aW9ucyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHRydWUsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHBhZ2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlUGFnZUlucHV0IHtcblx0c2x1Zz86IHN0cmluZztcblx0dHlwZT86IFBhZ2VUeXBlO1xuXHRpc0FjdGl2ZT86IGJvb2xlYW47XG5cdHRyYW5zbGF0aW9ucz86IHtcblx0XHRsb2NhbGVJZDogc3RyaW5nO1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0Y29udGVudDogc3RyaW5nO1xuXHR9W107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYWdlKGlkOiBzdHJpbmcsIGlucHV0OiBVcGRhdGVQYWdlSW5wdXQpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IHBhZ2UgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgcGFnZSA9IGF3YWl0IGRiLnBhZ2UuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFwYWdlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUGFnZSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc2x1ZyBpZiBjaGFuZ2luZ1xuXHRpZiAoaW5wdXQuc2x1ZyAmJiBpbnB1dC5zbHVnICE9PSBwYWdlLnNsdWcpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLnBhZ2UuZmluZFVuaXF1ZSh7XG5cdFx0XHR3aGVyZToge1xuXHRcdFx0XHR0ZW5hbnRJZF9zbHVnOiB7XG5cdFx0XHRcdFx0dGVuYW50SWQsXG5cdFx0XHRcdFx0c2x1ZzogaW5wdXQuc2x1Zyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRpZiAoZXhpc3RpbmcpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkEgcGFnZSB3aXRoIHRoaXMgc2x1ZyBhbHJlYWR5IGV4aXN0c1wiKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucGFnZS51cGRhdGUoe1xuXHRcdHdoZXJlOiB7IGlkIH0sXG5cdFx0ZGF0YToge1xuXHRcdFx0c2x1ZzogaW5wdXQuc2x1Zyxcblx0XHRcdHR5cGU6IGlucHV0LnR5cGUsXG5cdFx0XHRpc0FjdGl2ZTogaW5wdXQuaXNBY3RpdmUsXG5cdFx0XHQuLi4oaW5wdXQudHJhbnNsYXRpb25zICYmIHtcblx0XHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdFx0ZGVsZXRlTWFueToge30sXG5cdFx0XHRcdFx0Y3JlYXRlOiBpbnB1dC50cmFuc2xhdGlvbnMsXG5cdFx0XHRcdH0sXG5cdFx0XHR9KSxcblx0XHR9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHRyYW5zbGF0aW9uczogdHJ1ZSxcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gdXBkYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBhZ2UoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHQvLyBWZXJpZnkgcGFnZSBiZWxvbmdzIHRvIHRlbmFudCBhbmQgZ2V0IGNvbnRlbnQgZm9yIGNsZWFudXBcblx0Y29uc3QgcGFnZSA9IGF3YWl0IGRiLnBhZ2UuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0c2VsZWN0OiB7IGNvbnRlbnQ6IHRydWUgfSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFwYWdlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUGFnZSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdC8vIENvbGxlY3QgYWxsIGNvbnRlbnQgZnJvbSB0cmFuc2xhdGlvbnMgdG8gZmluZCBlbWJlZGRlZCBpbWFnZXNcblx0Y29uc3QgYWxsQ29udGVudCA9IHBhZ2UudHJhbnNsYXRpb25zLm1hcCgodCkgPT4gdC5jb250ZW50KS5qb2luKFwiXCIpO1xuXG5cdC8vIERlbGV0ZSB0aGUgcGFnZSBmaXJzdFxuXHRhd2FpdCBkYi5wYWdlLmRlbGV0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0Ly8gQ2xlYW51cCBpbWFnZXMgdGhhdCBhcmUgbm8gbG9uZ2VyIHVzZWQgKGFmdGVyIGRlbGV0aW9uKVxuXHRpZiAoYWxsQ29udGVudCkge1xuXHRcdGF3YWl0IGNsZWFudXBQYWdlSW1hZ2VzKGFsbENvbnRlbnQsIHRlbmFudElkLCBpZCk7XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVQYWdlQWN0aXZlKGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgcGFnZSA9IGF3YWl0IGRiLnBhZ2UuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFwYWdlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUGFnZSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5wYWdlLnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiB7IGlzQWN0aXZlOiAhcGFnZS5pc0FjdGl2ZSB9LFxuXHR9KTtcblxuXHRyZXR1cm4gdXBkYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VUeXBlcygpIHtcblx0cmV0dXJuIFtcblx0XHR7IHZhbHVlOiBcIkZBUVwiLCBsYWJlbDogXCJGQVFcIiB9LFxuXHRcdHsgdmFsdWU6IFwiQ09OVEFDVFwiLCBsYWJlbDogXCJDb250YWN0XCIgfSxcblx0XHR7IHZhbHVlOiBcIkFCT1VUX1VTXCIsIGxhYmVsOiBcIkFib3V0IFVzXCIgfSxcblx0XHR7IHZhbHVlOiBcIlBSSVZBQ1lfUE9MSUNZXCIsIGxhYmVsOiBcIlByaXZhY3kgUG9saWN5XCIgfSxcblx0XHR7IHZhbHVlOiBcIlRFUk1TX09GX1NFUlZJQ0VcIiwgbGFiZWw6IFwiVGVybXMgb2YgU2VydmljZVwiIH0sXG5cdFx0eyB2YWx1ZTogXCJDVVNUT01cIiwgbGFiZWw6IFwiQ3VzdG9tIFBhZ2VcIiB9LFxuXHRdO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyU0FrQ3NCLHFMQUFBIn0=
	},
	"[project]/apps/platform/src/server/api/internal/data:662813 [app-ssr] (ecmascript) <text/javascript>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["togglePageActive", () => $$RSC_SERVER_ACTION_5]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)",
			);
		/* __next_internal_action_entry_do_not_use__ [{"40feda76ca91ded101f223b7d503375f4e6d1c2310":"togglePageActive"},"apps/platform/src/server/api/internal/pages.ts",""] */ ("use turbopack no side effects");
		const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"createServerReference"
		])(
			"40feda76ca91ded101f223b7d503375f4e6d1c2310",
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"callServer"
			],
			void 0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"findSourceMapURL"
			],
			"togglePageActive",
		);
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcGFnZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9zZXJ2ZXIvYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7IHJlcXVpcmVBZG1pblRlbmFudCB9IGZyb20gXCJAL3NlcnZlci90ZW5hbnRcIjtcbmltcG9ydCB7IGNsZWFudXBQYWdlSW1hZ2VzIH0gZnJvbSBcIkAvc2VydmVyL3NlcnZpY2VzL21lZGlhLWNsZWFudXBcIjtcbmltcG9ydCB0eXBlIHsgUGFnZVR5cGUgfSBmcm9tIFwiQGJvb3N0Y2FydC9kYXRhYmFzZVwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZXMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHBhZ2VzID0gYXdhaXQgZGIucGFnZS5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHsgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdGxvY2FsZTogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIHBhZ2VzLm1hcCgocGFnZSkgPT4gKHtcblx0XHRpZDogcGFnZS5pZCxcblx0XHRzbHVnOiBwYWdlLnNsdWcsXG5cdFx0dHlwZTogcGFnZS50eXBlLFxuXHRcdGlzQWN0aXZlOiBwYWdlLmlzQWN0aXZlLFxuXHRcdHRpdGxlOiBwYWdlLnRyYW5zbGF0aW9uc1swXT8udGl0bGUgPz8gcGFnZS5zbHVnLFxuXHRcdGNvbnRlbnQ6IHBhZ2UudHJhbnNsYXRpb25zWzBdPy5jb250ZW50ID8/IFwiXCIsXG5cdFx0dHJhbnNsYXRpb25zOiBwYWdlLnRyYW5zbGF0aW9ucy5tYXAoKHQpID0+ICh7XG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcGFnZS5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwYWdlLnVwZGF0ZWRBdCxcblx0fSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZShpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHBhZ2UgPSBhd2FpdCBkYi5wYWdlLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRsb2NhbGU6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghcGFnZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlBhZ2Ugbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpZDogcGFnZS5pZCxcblx0XHRzbHVnOiBwYWdlLnNsdWcsXG5cdFx0dHlwZTogcGFnZS50eXBlLFxuXHRcdGlzQWN0aXZlOiBwYWdlLmlzQWN0aXZlLFxuXHRcdHRyYW5zbGF0aW9uczogcGFnZS50cmFuc2xhdGlvbnMubWFwKCh0KSA9PiAoe1xuXHRcdFx0aWQ6IHQuaWQsXG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcGFnZS5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwYWdlLnVwZGF0ZWRBdCxcblx0fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVQYWdlSW5wdXQge1xuXHRzbHVnOiBzdHJpbmc7XG5cdHR5cGU6IFBhZ2VUeXBlO1xuXHRpc0FjdGl2ZT86IGJvb2xlYW47XG5cdHRyYW5zbGF0aW9uczoge1xuXHRcdGxvY2FsZUlkOiBzdHJpbmc7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRjb250ZW50OiBzdHJpbmc7XG5cdH1bXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoaW5wdXQ6IENyZWF0ZVBhZ2VJbnB1dCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHQvLyBDaGVjayBmb3IgZHVwbGljYXRlIHNsdWdcblx0Y29uc3QgZXhpc3RpbmcgPSBhd2FpdCBkYi5wYWdlLmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZF9zbHVnOiB7XG5cdFx0XHRcdHRlbmFudElkLFxuXHRcdFx0XHRzbHVnOiBpbnB1dC5zbHVnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHBhZ2Ugd2l0aCB0aGlzIHNsdWcgYWxyZWFkeSBleGlzdHNcIik7XG5cdH1cblxuXHRjb25zdCBwYWdlID0gYXdhaXQgZGIucGFnZS5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHR0eXBlOiBpbnB1dC50eXBlLFxuXHRcdFx0aXNBY3RpdmU6IGlucHV0LmlzQWN0aXZlID8/IHRydWUsXG5cdFx0XHR0ZW5hbnRJZCxcblx0XHRcdHRyYW5zbGF0aW9uczoge1xuXHRcdFx0XHRjcmVhdGU6IGlucHV0LnRyYW5zbGF0aW9ucyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHRydWUsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHBhZ2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlUGFnZUlucHV0IHtcblx0c2x1Zz86IHN0cmluZztcblx0dHlwZT86IFBhZ2VUeXBlO1xuXHRpc0FjdGl2ZT86IGJvb2xlYW47XG5cdHRyYW5zbGF0aW9ucz86IHtcblx0XHRsb2NhbGVJZDogc3RyaW5nO1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0Y29udGVudDogc3RyaW5nO1xuXHR9W107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQYWdlKGlkOiBzdHJpbmcsIGlucHV0OiBVcGRhdGVQYWdlSW5wdXQpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IHBhZ2UgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgcGFnZSA9IGF3YWl0IGRiLnBhZ2UuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFwYWdlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUGFnZSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc2x1ZyBpZiBjaGFuZ2luZ1xuXHRpZiAoaW5wdXQuc2x1ZyAmJiBpbnB1dC5zbHVnICE9PSBwYWdlLnNsdWcpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLnBhZ2UuZmluZFVuaXF1ZSh7XG5cdFx0XHR3aGVyZToge1xuXHRcdFx0XHR0ZW5hbnRJZF9zbHVnOiB7XG5cdFx0XHRcdFx0dGVuYW50SWQsXG5cdFx0XHRcdFx0c2x1ZzogaW5wdXQuc2x1Zyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRpZiAoZXhpc3RpbmcpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkEgcGFnZSB3aXRoIHRoaXMgc2x1ZyBhbHJlYWR5IGV4aXN0c1wiKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucGFnZS51cGRhdGUoe1xuXHRcdHdoZXJlOiB7IGlkIH0sXG5cdFx0ZGF0YToge1xuXHRcdFx0c2x1ZzogaW5wdXQuc2x1Zyxcblx0XHRcdHR5cGU6IGlucHV0LnR5cGUsXG5cdFx0XHRpc0FjdGl2ZTogaW5wdXQuaXNBY3RpdmUsXG5cdFx0XHQuLi4oaW5wdXQudHJhbnNsYXRpb25zICYmIHtcblx0XHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdFx0ZGVsZXRlTWFueToge30sXG5cdFx0XHRcdFx0Y3JlYXRlOiBpbnB1dC50cmFuc2xhdGlvbnMsXG5cdFx0XHRcdH0sXG5cdFx0XHR9KSxcblx0XHR9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHRyYW5zbGF0aW9uczogdHJ1ZSxcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gdXBkYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBhZ2UoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHQvLyBWZXJpZnkgcGFnZSBiZWxvbmdzIHRvIHRlbmFudCBhbmQgZ2V0IGNvbnRlbnQgZm9yIGNsZWFudXBcblx0Y29uc3QgcGFnZSA9IGF3YWl0IGRiLnBhZ2UuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0c2VsZWN0OiB7IGNvbnRlbnQ6IHRydWUgfSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFwYWdlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUGFnZSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdC8vIENvbGxlY3QgYWxsIGNvbnRlbnQgZnJvbSB0cmFuc2xhdGlvbnMgdG8gZmluZCBlbWJlZGRlZCBpbWFnZXNcblx0Y29uc3QgYWxsQ29udGVudCA9IHBhZ2UudHJhbnNsYXRpb25zLm1hcCgodCkgPT4gdC5jb250ZW50KS5qb2luKFwiXCIpO1xuXG5cdC8vIERlbGV0ZSB0aGUgcGFnZSBmaXJzdFxuXHRhd2FpdCBkYi5wYWdlLmRlbGV0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0Ly8gQ2xlYW51cCBpbWFnZXMgdGhhdCBhcmUgbm8gbG9uZ2VyIHVzZWQgKGFmdGVyIGRlbGV0aW9uKVxuXHRpZiAoYWxsQ29udGVudCkge1xuXHRcdGF3YWl0IGNsZWFudXBQYWdlSW1hZ2VzKGFsbENvbnRlbnQsIHRlbmFudElkLCBpZCk7XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVQYWdlQWN0aXZlKGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgcGFnZSA9IGF3YWl0IGRiLnBhZ2UuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFwYWdlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUGFnZSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5wYWdlLnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiB7IGlzQWN0aXZlOiAhcGFnZS5pc0FjdGl2ZSB9LFxuXHR9KTtcblxuXHRyZXR1cm4gdXBkYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VUeXBlcygpIHtcblx0cmV0dXJuIFtcblx0XHR7IHZhbHVlOiBcIkZBUVwiLCBsYWJlbDogXCJGQVFcIiB9LFxuXHRcdHsgdmFsdWU6IFwiQ09OVEFDVFwiLCBsYWJlbDogXCJDb250YWN0XCIgfSxcblx0XHR7IHZhbHVlOiBcIkFCT1VUX1VTXCIsIGxhYmVsOiBcIkFib3V0IFVzXCIgfSxcblx0XHR7IHZhbHVlOiBcIlBSSVZBQ1lfUE9MSUNZXCIsIGxhYmVsOiBcIlByaXZhY3kgUG9saWN5XCIgfSxcblx0XHR7IHZhbHVlOiBcIlRFUk1TX09GX1NFUlZJQ0VcIiwgbGFiZWw6IFwiVGVybXMgb2YgU2VydmljZVwiIH0sXG5cdFx0eyB2YWx1ZTogXCJDVVNUT01cIiwgbGFiZWw6IFwiQ3VzdG9tIFBhZ2VcIiB9LFxuXHRdO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtVEFtUHNCLDZMQUFBIn0=
	},
	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["default", () => PagesPage]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/admin/polaris-button.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/badge.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/button.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/card.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/dialog.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/empty.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/table.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$49487e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/server/api/internal/data:49487e [app-ssr] (ecmascript) <text/javascript>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$877624__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/server/api/internal/data:877624 [app-ssr] (ecmascript) <text/javascript>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$662813__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/server/api/internal/data:662813 [app-ssr] (ecmascript) <text/javascript>",
			);
		("use client");
		function PagesPage() {
			const router = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useRouter"
			])();
			const [pages, setPages] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])([]);
			const [loading, setLoading] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(true);
			const [viewDialogOpen, setViewDialogOpen] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(false);
			const [deleteDialogOpen, setDeleteDialogOpen] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(false);
			const [selectedPage, setSelectedPage] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(null);
			const [deleting, setDeleting] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(false);
			const loadData = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useCallback"
			])(async () => {
				try {
					setLoading(true);
					const pagesData = await (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$877624__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__[
						"getPages"
					])();
					setPages(pagesData);
				} catch {
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].error("Failed to load pages");
				} finally {
					setLoading(false);
				}
			}, []);
			(0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useEffect"
			])(() => {
				loadData();
			}, [loadData]);
			const handleView = (page) => {
				setSelectedPage(page);
				setViewDialogOpen(true);
			};
			const handleDeleteClick = (page) => {
				setSelectedPage(page);
				setDeleteDialogOpen(true);
			};
			const handleToggleActive = async (page) => {
				try {
					await (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$662813__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__[
						"togglePageActive"
					])(page.id);
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].success(page.isActive ? "Page deactivated" : "Page activated");
					loadData();
				} catch {
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].error("Failed to update page status");
				}
			};
			const handleDelete = async () => {
				if (!selectedPage) return;
				try {
					setDeleting(true);
					await (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$49487e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__[
						"deletePage"
					])(selectedPage.id);
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].success("Page deleted");
					setDeleteDialogOpen(false);
					loadData();
				} catch {
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].error("Failed to delete page");
				} finally {
					setDeleting(false);
				}
			};
			const formatDate = (date) => {
				return new Date(date).toLocaleDateString("bg-BG", {
					year: "numeric",
					month: "short",
					day: "numeric",
				});
			};
			const activePages = pages.filter((p) => p.isActive).length;
			const draftPages = pages.filter((p) => !p.isActive).length;
			if (loading) {
				return /*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"div",
					{
						className: "flex items-center justify-center h-64",
						children: /*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							"div",
							{
								className:
									"animate-spin rounded-full h-8 w-8 border-b-2 border-primary",
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
								lineNumber: 136,
								columnNumber: 5,
							},
							this,
						),
					},
					void 0,
					false,
					{
						fileName:
							"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
						lineNumber: 135,
						columnNumber: 4,
					},
					this,
				);
			}
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"div",
				{
					className: "space-y-6",
					children: [
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							"div",
							{
								className:
									"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
								children: [
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										"div",
										{
											children: [
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"h1",
													{
														className: "text-3xl font-bold tracking-tight",
														children: "Pages",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
														lineNumber: 145,
														columnNumber: 6,
													},
													this,
												),
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"p",
													{
														className: "text-muted-foreground mt-1",
														children: "Manage static pages and content",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
														lineNumber: 146,
														columnNumber: 6,
													},
													this,
												),
											],
										},
										void 0,
										true,
										{
											fileName:
												"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
											lineNumber: 144,
											columnNumber: 5,
										},
										this,
									),
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											"PolarisButton"
										],
										{
											onClick: () => router.push("/admin/pages/new"),
											children: [
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__[
														"Plus"
													],
													{
														className: "h-4 w-4",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
														lineNumber: 151,
														columnNumber: 6,
													},
													this,
												),
												"Create Page",
											],
										},
										void 0,
										true,
										{
											fileName:
												"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
											lineNumber: 150,
											columnNumber: 5,
										},
										this,
									),
								],
							},
							void 0,
							true,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
								lineNumber: 143,
								columnNumber: 4,
							},
							this,
						),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							"div",
							{
								className: "grid gap-4 md:grid-cols-3",
								children: [
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											"Card"
										],
										{
											className: "p-4",
											children: [
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"p",
													{
														className: "text-sm text-muted-foreground",
														children: "Total Pages",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
														lineNumber: 158,
														columnNumber: 6,
													},
													this,
												),
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"p",
													{
														className: "text-2xl font-bold mt-1",
														children: pages.length,
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
														lineNumber: 159,
														columnNumber: 6,
													},
													this,
												),
											],
										},
										void 0,
										true,
										{
											fileName:
												"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
											lineNumber: 157,
											columnNumber: 5,
										},
										this,
									),
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											"Card"
										],
										{
											className: "p-4",
											children: [
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"p",
													{
														className: "text-sm text-muted-foreground",
														children: "Active Pages",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
														lineNumber: 162,
														columnNumber: 6,
													},
													this,
												),
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"p",
													{
														className: "text-2xl font-bold mt-1",
														children: activePages,
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
														lineNumber: 163,
														columnNumber: 6,
													},
													this,
												),
											],
										},
										void 0,
										true,
										{
											fileName:
												"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
											lineNumber: 161,
											columnNumber: 5,
										},
										this,
									),
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											"Card"
										],
										{
											className: "p-4",
											children: [
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"p",
													{
														className: "text-sm text-muted-foreground",
														children: "Draft Pages",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
														lineNumber: 166,
														columnNumber: 6,
													},
													this,
												),
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"p",
													{
														className: "text-2xl font-bold mt-1",
														children: draftPages,
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
														lineNumber: 167,
														columnNumber: 6,
													},
													this,
												),
											],
										},
										void 0,
										true,
										{
											fileName:
												"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
											lineNumber: 165,
											columnNumber: 5,
										},
										this,
									),
								],
							},
							void 0,
							true,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
								lineNumber: 156,
								columnNumber: 4,
							},
							this,
						),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"Card"
							],
							{
								children:
									pages.length === 0
										? /*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"Empty"
												],
												{
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"EmptyMedia"
															],
															{
																children: /*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	"jsxDEV"
																])(
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__[
																		"FileText"
																	],
																	{
																		className:
																			"h-12 w-12 text-muted-foreground",
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																		lineNumber: 175,
																		columnNumber: 8,
																	},
																	this,
																),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 174,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"EmptyHeader"
															],
															{
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"EmptyTitle"
																		],
																		{
																			children: "No pages yet",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																			lineNumber: 178,
																			columnNumber: 8,
																		},
																		this,
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"EmptyDescription"
																		],
																		{
																			children:
																				"Create your first page to add content to your store",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																			lineNumber: 179,
																			columnNumber: 8,
																		},
																		this,
																	),
																],
															},
															void 0,
															true,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 177,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"EmptyContent"
															],
															{
																children: /*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	"jsxDEV"
																])(
																	__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"PolarisButton"
																	],
																	{
																		onClick: () =>
																			router.push("/admin/pages/new"),
																		children: [
																			/*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__[
																					"Plus"
																				],
																				{
																					className: "h-4 w-4",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																					lineNumber: 185,
																					columnNumber: 9,
																				},
																				this,
																			),
																			"Create Page",
																		],
																	},
																	void 0,
																	true,
																	{
																		fileName:
																			"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																		lineNumber: 184,
																		columnNumber: 8,
																	},
																	this,
																),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 183,
																columnNumber: 7,
															},
															this,
														),
													],
												},
												void 0,
												true,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
													lineNumber: 173,
													columnNumber: 6,
												},
												this,
											)
										: /*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"Table"
												],
												{
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"TableHeader"
															],
															{
																children: /*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	"jsxDEV"
																])(
																	__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"TableRow"
																	],
																	{
																		children: [
																			/*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"TableHead"
																				],
																				{
																					children: "Title",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																					lineNumber: 194,
																					columnNumber: 9,
																				},
																				this,
																			),
																			/*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"TableHead"
																				],
																				{
																					children: "Slug",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																					lineNumber: 195,
																					columnNumber: 9,
																				},
																				this,
																			),
																			/*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"TableHead"
																				],
																				{
																					children: "Type",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																					lineNumber: 196,
																					columnNumber: 9,
																				},
																				this,
																			),
																			/*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"TableHead"
																				],
																				{
																					children: "Status",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																					lineNumber: 197,
																					columnNumber: 9,
																				},
																				this,
																			),
																			/*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"TableHead"
																				],
																				{
																					children: "Updated",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																					lineNumber: 198,
																					columnNumber: 9,
																				},
																				this,
																			),
																			/*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"TableHead"
																				],
																				{
																					className: "text-right",
																					children: "Actions",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																					lineNumber: 199,
																					columnNumber: 9,
																				},
																				this,
																			),
																		],
																	},
																	void 0,
																	true,
																	{
																		fileName:
																			"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																		lineNumber: 193,
																		columnNumber: 8,
																	},
																	this,
																),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 192,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"TableBody"
															],
															{
																children: pages.map((page) =>
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"TableRow"
																		],
																		{
																			children: [
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"TableCell"
																					],
																					{
																						className: "font-medium",
																						children: page.title,
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																						lineNumber: 205,
																						columnNumber: 10,
																					},
																					this,
																				),
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"TableCell"
																					],
																					{
																						className: "font-mono text-sm",
																						children: ["/", page.slug],
																					},
																					void 0,
																					true,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																						lineNumber: 206,
																						columnNumber: 10,
																					},
																					this,
																				),
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"TableCell"
																					],
																					{
																						children: /*#__PURE__*/ (0,
																						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																							"jsxDEV"
																						])(
																							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																								"Badge"
																							],
																							{
																								variant: "outline",
																								children: page.type.replace(
																									"_",
																									" ",
																								),
																							},
																							void 0,
																							false,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																								lineNumber: 210,
																								columnNumber: 11,
																							},
																							this,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																						lineNumber: 209,
																						columnNumber: 10,
																					},
																					this,
																				),
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"TableCell"
																					],
																					{
																						children: /*#__PURE__*/ (0,
																						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																							"jsxDEV"
																						])(
																							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																								"Badge"
																							],
																							{
																								variant: page.isActive
																									? "default"
																									: "secondary",
																								className: "cursor-pointer",
																								onClick: () =>
																									handleToggleActive(page),
																								children: page.isActive
																									? "Active"
																									: "Draft",
																							},
																							void 0,
																							false,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																								lineNumber: 215,
																								columnNumber: 11,
																							},
																							this,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																						lineNumber: 214,
																						columnNumber: 10,
																					},
																					this,
																				),
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"TableCell"
																					],
																					{
																						children: formatDate(
																							page.updatedAt,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																						lineNumber: 223,
																						columnNumber: 10,
																					},
																					this,
																				),
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"TableCell"
																					],
																					{
																						className: "text-right",
																						children: /*#__PURE__*/ (0,
																						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																							"jsxDEV"
																						])(
																							"div",
																							{
																								className:
																									"flex justify-end gap-2",
																								children: [
																									/*#__PURE__*/ (0,
																									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																										"jsxDEV"
																									])(
																										__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																											"Button"
																										],
																										{
																											variant: "ghost",
																											size: "icon",
																											onClick: () =>
																												handleView(page),
																											children:
																												/*#__PURE__*/ (0,
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																													"jsxDEV"
																												])(
																													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__[
																														"Eye"
																													],
																													{
																														className:
																															"h-4 w-4",
																													},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																														lineNumber: 231,
																														columnNumber: 13,
																													},
																													this,
																												),
																										},
																										void 0,
																										false,
																										{
																											fileName:
																												"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																											lineNumber: 226,
																											columnNumber: 12,
																										},
																										this,
																									),
																									/*#__PURE__*/ (0,
																									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																										"jsxDEV"
																									])(
																										__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																											"Button"
																										],
																										{
																											variant: "ghost",
																											size: "icon",
																											asChild: true,
																											children:
																												/*#__PURE__*/ (0,
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																													"jsxDEV"
																												])(
																													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																														"default"
																													],
																													{
																														href: `/admin/pages/${page.id}/edit`,
																														children:
																															/*#__PURE__*/ (0,
																															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																																"jsxDEV"
																															])(
																																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__[
																																	"Pencil"
																																],
																																{
																																	className:
																																		"h-4 w-4",
																																},
																																void 0,
																																false,
																																{
																																	fileName:
																																		"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																																	lineNumber: 235,
																																	columnNumber: 14,
																																},
																																this,
																															),
																													},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																														lineNumber: 234,
																														columnNumber: 13,
																													},
																													this,
																												),
																										},
																										void 0,
																										false,
																										{
																											fileName:
																												"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																											lineNumber: 233,
																											columnNumber: 12,
																										},
																										this,
																									),
																									/*#__PURE__*/ (0,
																									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																										"jsxDEV"
																									])(
																										__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																											"Button"
																										],
																										{
																											variant: "ghost",
																											size: "icon",
																											onClick: () =>
																												handleDeleteClick(page),
																											children:
																												/*#__PURE__*/ (0,
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																													"jsxDEV"
																												])(
																													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__[
																														"Trash2"
																													],
																													{
																														className:
																															"h-4 w-4",
																													},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																														lineNumber: 243,
																														columnNumber: 13,
																													},
																													this,
																												),
																										},
																										void 0,
																										false,
																										{
																											fileName:
																												"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																											lineNumber: 238,
																											columnNumber: 12,
																										},
																										this,
																									),
																								],
																							},
																							void 0,
																							true,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																								lineNumber: 225,
																								columnNumber: 11,
																							},
																							this,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																						lineNumber: 224,
																						columnNumber: 10,
																					},
																					this,
																				),
																			],
																		},
																		page.id,
																		true,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																			lineNumber: 204,
																			columnNumber: 9,
																		},
																		this,
																	),
																),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 202,
																columnNumber: 7,
															},
															this,
														),
													],
												},
												void 0,
												true,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
													lineNumber: 191,
													columnNumber: 6,
												},
												this,
											),
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
								lineNumber: 171,
								columnNumber: 4,
							},
							this,
						),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"Dialog"
							],
							{
								open: viewDialogOpen,
								onOpenChange: setViewDialogOpen,
								children: /*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"DialogContent"
									],
									{
										className: "max-w-3xl max-h-[90vh] overflow-y-auto",
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"DialogHeader"
												],
												{
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"DialogTitle"
															],
															{
																children: "Page Preview",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 258,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"DialogDescription"
															],
															{
																children: "Preview how your page will look",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 259,
																columnNumber: 7,
															},
															this,
														),
													],
												},
												void 0,
												true,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
													lineNumber: 257,
													columnNumber: 6,
												},
												this,
											),
											selectedPage &&
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"div",
													{
														className: "space-y-4",
														children: [
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																"div",
																{
																	className: "flex items-center gap-2",
																	children: [
																		/*#__PURE__*/ (0,
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"jsxDEV"
																		])(
																			__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"Badge"
																			],
																			{
																				variant: selectedPage.isActive
																					? "default"
																					: "secondary",
																				children: selectedPage.isActive
																					? "Active"
																					: "Draft",
																			},
																			void 0,
																			false,
																			{
																				fileName:
																					"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																				lineNumber: 265,
																				columnNumber: 9,
																			},
																			this,
																		),
																		/*#__PURE__*/ (0,
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"jsxDEV"
																		])(
																			__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"Badge"
																			],
																			{
																				variant: "outline",
																				children: selectedPage.type.replace(
																					"_",
																					" ",
																				),
																			},
																			void 0,
																			false,
																			{
																				fileName:
																					"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																				lineNumber: 270,
																				columnNumber: 9,
																			},
																			this,
																		),
																		/*#__PURE__*/ (0,
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"jsxDEV"
																		])(
																			"span",
																			{
																				className:
																					"text-sm text-muted-foreground",
																				children: ["/", selectedPage.slug],
																			},
																			void 0,
																			true,
																			{
																				fileName:
																					"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																				lineNumber: 273,
																				columnNumber: 9,
																			},
																			this,
																		),
																	],
																},
																void 0,
																true,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																	lineNumber: 264,
																	columnNumber: 8,
																},
																this,
															),
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																"h2",
																{
																	className: "text-2xl font-bold",
																	children: selectedPage.title,
																},
																void 0,
																false,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																	lineNumber: 278,
																	columnNumber: 8,
																},
																this,
															),
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																"div",
																{
																	className: "border-t pt-4",
																	children: /*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"div",
																		{
																			className:
																				"prose prose-sm dark:prose-invert max-w-none",
																			// biome-ignore lint/security/noDangerouslySetInnerHtml: Rich text content
																			dangerouslySetInnerHTML: {
																				__html: selectedPage.content,
																			},
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																			lineNumber: 281,
																			columnNumber: 9,
																		},
																		this,
																	),
																},
																void 0,
																false,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																	lineNumber: 280,
																	columnNumber: 8,
																},
																this,
															),
														],
													},
													void 0,
													true,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
														lineNumber: 263,
														columnNumber: 7,
													},
													this,
												),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"DialogFooter"
												],
												{
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Button"
															],
															{
																variant: "outline",
																onClick: () => setViewDialogOpen(false),
																children: "Close",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 291,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"PolarisButton"
															],
															{
																onClick: () =>
																	router.push(
																		`/admin/pages/${selectedPage?.id}/edit`,
																	),
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__[
																			"Pencil"
																		],
																		{
																			className: "h-4 w-4",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																			lineNumber: 295,
																			columnNumber: 8,
																		},
																		this,
																	),
																	"Edit Page",
																],
															},
															void 0,
															true,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 294,
																columnNumber: 7,
															},
															this,
														),
													],
												},
												void 0,
												true,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
													lineNumber: 290,
													columnNumber: 6,
												},
												this,
											),
										],
									},
									void 0,
									true,
									{
										fileName:
											"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
										lineNumber: 256,
										columnNumber: 5,
									},
									this,
								),
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
								lineNumber: 255,
								columnNumber: 4,
							},
							this,
						),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"Dialog"
							],
							{
								open: deleteDialogOpen,
								onOpenChange: setDeleteDialogOpen,
								children: /*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"DialogContent"
									],
									{
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"DialogHeader"
												],
												{
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"DialogTitle"
															],
															{
																children: "Delete Page",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 306,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"DialogDescription"
															],
															{
																children: [
																	'Are you sure you want to delete "',
																	selectedPage?.title,
																	'"? This action cannot be undone.',
																],
															},
															void 0,
															true,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 307,
																columnNumber: 7,
															},
															this,
														),
													],
												},
												void 0,
												true,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
													lineNumber: 305,
													columnNumber: 6,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"DialogFooter"
												],
												{
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Button"
															],
															{
																variant: "outline",
																onClick: () => setDeleteDialogOpen(false),
																children: "Cancel",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 314,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Button"
															],
															{
																variant: "destructive",
																onClick: handleDelete,
																disabled: deleting,
																children: deleting
																	? "Deleting..."
																	: "Delete Page",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
																lineNumber: 320,
																columnNumber: 7,
															},
															this,
														),
													],
												},
												void 0,
												true,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
													lineNumber: 313,
													columnNumber: 6,
												},
												this,
											),
										],
									},
									void 0,
									true,
									{
										fileName:
											"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
										lineNumber: 304,
										columnNumber: 5,
									},
									this,
								),
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
								lineNumber: 303,
								columnNumber: 4,
							},
							this,
						),
					],
				},
				void 0,
				true,
				{
					fileName:
						"[project]/apps/platform/src/app/(internal)/admin/pages/page.tsx",
					lineNumber: 142,
					columnNumber: 3,
				},
				this,
			);
		}
	},
];

//# sourceMappingURL=apps_platform_src_8d3d9bf4._.js.map
