module.exports = [
	"[project]/apps/platform/src/components/admin/polaris-button.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["PolarisButton", () => PolarisButton]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript) <export * as Slot>",
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
			asChild = false,
			className,
			...props
		}) {
			const Comp = asChild
				? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__[
						"Slot"
					].Slot
				: "button";
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
				Comp,
				{
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
						asChild && disabled && "pointer-events-none opacity-50",
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
								lineNumber: 81,
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
																lineNumber: 91,
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
																lineNumber: 92,
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
																lineNumber: 100,
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
													lineNumber: 85,
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
													lineNumber: 107,
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
								lineNumber: 83,
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
					lineNumber: 36,
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
	"[project]/apps/platform/src/server/api/internal/data:991291 [app-ssr] (ecmascript) <text/javascript>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"deleteAbandonedCart",
			() => $$RSC_SERVER_ACTION_2,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)",
			);
		/* __next_internal_action_entry_do_not_use__ [{"402e4db47585a79d13ca193e0710c5a391edd8674a":"deleteAbandonedCart"},"apps/platform/src/server/api/internal/abandoned-carts.ts",""] */ ("use turbopack no side effects");
		const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"createServerReference"
		])(
			"402e4db47585a79d13ca193e0710c5a391edd8674a",
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"callServer"
			],
			void 0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"findSourceMapURL"
			],
			"deleteAbandonedCart",
		);
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWJhbmRvbmVkLWNhcnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvc2VydmVyL2F1dGhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvc2VydmVyL2RiXCI7XG5pbXBvcnQgeyByZXF1aXJlQWRtaW5UZW5hbnQgfSBmcm9tIFwiQC9zZXJ2ZXIvdGVuYW50XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVTdG9yZUFjY2VzcygpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcblx0aWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcblx0fVxuXG5cdGNvbnN0IHRlbmFudCA9IGF3YWl0IHJlcXVpcmVBZG1pblRlbmFudCgpO1xuXG5cdGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghc3RhZmZSZWNvcmQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcblx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYmFuZG9uZWRDYXJ0cygpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gQSBjYXJ0IGlzIGNvbnNpZGVyZWQgYWJhbmRvbmVkIGlmOlxuXHQvLyAxLiBJdCBoYXMgaXRlbXNcblx0Ly8gMi4gSXQgd2FzIGxhc3QgdXBkYXRlZCBtb3JlIHRoYW4gMSBob3VyIGFnb1xuXHQvLyAzLiBJdCBoYXNuJ3QgYmVlbiBjb252ZXJ0ZWQgdG8gYW4gb3JkZXJcblx0Y29uc3Qgb25lSG91ckFnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA2MCAqIDYwICogMTAwMCk7XG5cblx0Y29uc3QgY2FydHMgPSBhd2FpdCBkYi5jYXJ0LmZpbmRNYW55KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHR1cGRhdGVkQXQ6IHtcblx0XHRcdFx0bHQ6IG9uZUhvdXJBZ28sXG5cdFx0XHR9LFxuXHRcdFx0aXRlbXM6IHtcblx0XHRcdFx0c29tZToge30sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0Y3VzdG9tZXI6IHRydWUsXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDoge1xuXHRcdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IHVwZGF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIGNhcnRzLm1hcCgoY2FydCkgPT4gKHtcblx0XHRpZDogY2FydC5pZCxcblx0XHRjdXN0b21lcjogY2FydC5jdXN0b21lclxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0aWQ6IGNhcnQuY3VzdG9tZXIuaWQsXG5cdFx0XHRcdFx0ZW1haWw6IGNhcnQuY3VzdG9tZXIuZW1haWwsXG5cdFx0XHRcdFx0bmFtZTogYCR7Y2FydC5jdXN0b21lci5maXJzdE5hbWUgPz8gXCJcIn0gJHtjYXJ0LmN1c3RvbWVyLmxhc3ROYW1lID8/IFwiXCJ9YC50cmltKCkgfHwgXCJVbmtub3duXCIsXG5cdFx0XHRcdH1cblx0XHRcdDogbnVsbCxcblx0XHRzZXNzaW9uSWQ6IGNhcnQuc2Vzc2lvbklkLFxuXHRcdGl0ZW1Db3VudDogY2FydC5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eSwgMCksXG5cdFx0dG90YWxWYWx1ZTogY2FydC5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2UgPSBpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlO1xuXHRcdFx0cmV0dXJuIHN1bSArIE51bWJlcihwcmljZSkgKiBpdGVtLnF1YW50aXR5O1xuXHRcdH0sIDApLFxuXHRcdGl0ZW1zOiBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcblx0XHRcdGlkOiBpdGVtLmlkLFxuXHRcdFx0cHJvZHVjdElkOiBpdGVtLnByb2R1Y3RJZCxcblx0XHRcdHByb2R1Y3ROYW1lOiBpdGVtLnByb2R1Y3QudHJhbnNsYXRpb25zWzBdPy5uYW1lID8/IGl0ZW0ucHJvZHVjdC5zbHVnLFxuXHRcdFx0dmFyaWFudFNrdTogaXRlbS5zZWxlY3RlZFZhcmlhbnQ/LnNrdSxcblx0XHRcdHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuXHRcdFx0cHJpY2U6IE51bWJlcihpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlKSxcblx0XHR9KSksXG5cdFx0YWJhbmRvbmVkQXQ6IGNhcnQudXBkYXRlZEF0LFxuXHRcdGNyZWF0ZWRBdDogY2FydC5jcmVhdGVkQXQsXG5cdH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFiYW5kb25lZENhcnQoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBjYXJ0ID0gYXdhaXQgZGIuY2FydC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdGN1c3RvbWVyOiB0cnVlLFxuXHRcdFx0aXRlbXM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdHByb2R1Y3Q6IHtcblx0XHRcdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0dGFrZTogMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0bWVkaWE6IHtcblx0XHRcdFx0XHRcdFx0XHRvcmRlckJ5OiB7IG9yZGVyOiBcImFzY1wiIH0sXG5cdFx0XHRcdFx0XHRcdFx0dGFrZTogMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZWxlY3RlZFZhcmlhbnQ6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghY2FydCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhcnQgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpZDogY2FydC5pZCxcblx0XHRjdXN0b21lcjogY2FydC5jdXN0b21lclxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0aWQ6IGNhcnQuY3VzdG9tZXIuaWQsXG5cdFx0XHRcdFx0ZW1haWw6IGNhcnQuY3VzdG9tZXIuZW1haWwsXG5cdFx0XHRcdFx0bmFtZTogYCR7Y2FydC5jdXN0b21lci5maXJzdE5hbWUgPz8gXCJcIn0gJHtjYXJ0LmN1c3RvbWVyLmxhc3ROYW1lID8/IFwiXCJ9YC50cmltKCkgfHwgXCJVbmtub3duXCIsXG5cdFx0XHRcdFx0cGhvbmU6IGNhcnQuY3VzdG9tZXIucGhvbmUsXG5cdFx0XHRcdH1cblx0XHRcdDogbnVsbCxcblx0XHRzZXNzaW9uSWQ6IGNhcnQuc2Vzc2lvbklkLFxuXHRcdGl0ZW1zOiBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcblx0XHRcdGlkOiBpdGVtLmlkLFxuXHRcdFx0cHJvZHVjdElkOiBpdGVtLnByb2R1Y3RJZCxcblx0XHRcdHByb2R1Y3ROYW1lOiBpdGVtLnByb2R1Y3QudHJhbnNsYXRpb25zWzBdPy5uYW1lID8/IGl0ZW0ucHJvZHVjdC5zbHVnLFxuXHRcdFx0cHJvZHVjdEltYWdlOiBpdGVtLnByb2R1Y3QubWVkaWFbMF0/LnVybCxcblx0XHRcdHZhcmlhbnRTa3U6IGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5za3UsXG5cdFx0XHR2YXJpYW50T3B0aW9uczogaXRlbS5zZWxlY3RlZFZhcmlhbnRcblx0XHRcdFx0PyBPYmplY3QuZW50cmllcyhpdGVtLnNlbGVjdGVkVmFyaWFudC5vcHRpb25zIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pXG5cdFx0XHRcdFx0XHQubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX06ICR7dmFsdWV9YClcblx0XHRcdFx0XHRcdC5qb2luKFwiLCBcIilcblx0XHRcdFx0OiBudWxsLFxuXHRcdFx0cXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG5cdFx0XHRwcmljZTogTnVtYmVyKGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2UpLFxuXHRcdH0pKSxcblx0XHR0b3RhbFZhbHVlOiBjYXJ0Lml0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBwcmljZSA9IGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2U7XG5cdFx0XHRyZXR1cm4gc3VtICsgTnVtYmVyKHByaWNlKSAqIGl0ZW0ucXVhbnRpdHk7XG5cdFx0fSwgMCksXG5cdFx0YWJhbmRvbmVkQXQ6IGNhcnQudXBkYXRlZEF0LFxuXHRcdGNyZWF0ZWRBdDogY2FydC5jcmVhdGVkQXQsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBYmFuZG9uZWRDYXJ0KGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IGNhcnQgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgY2FydCA9IGF3YWl0IGRiLmNhcnQuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFjYXJ0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FydCBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdGF3YWl0IGRiLmNhcnQuZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYmFuZG9uZWRDYXJ0U3RhdHMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IG9uZUhvdXJBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNjAgKiA2MCAqIDEwMDApO1xuXHRjb25zdCBvbmVEYXlBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cdGNvbnN0IG9uZVdlZWtBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG5cdC8vIEdldCBhbGwgYWJhbmRvbmVkIGNhcnRzXG5cdGNvbnN0IGFiYW5kb25lZENhcnRzID0gYXdhaXQgZGIuY2FydC5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0dXBkYXRlZEF0OiB7XG5cdFx0XHRcdGx0OiBvbmVIb3VyQWdvLFxuXHRcdFx0fSxcblx0XHRcdGl0ZW1zOiB7XG5cdFx0XHRcdHNvbWU6IHt9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdGl0ZW1zOiB7XG5cdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRwcm9kdWN0OiB0cnVlLFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0Ly8gQ2FsY3VsYXRlIHN0YXRzXG5cdGNvbnN0IHRvdGFsQ2FydHMgPSBhYmFuZG9uZWRDYXJ0cy5sZW5ndGg7XG5cdGNvbnN0IHRvdGFsVmFsdWUgPSBhYmFuZG9uZWRDYXJ0cy5yZWR1Y2UoKHN1bSwgY2FydCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRzdW0gK1xuXHRcdFx0Y2FydC5pdGVtcy5yZWR1Y2UoKGl0ZW1TdW0sIGl0ZW0pID0+IHtcblx0XHRcdFx0Y29uc3QgcHJpY2UgPSBpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlO1xuXHRcdFx0XHRyZXR1cm4gaXRlbVN1bSArIE51bWJlcihwcmljZSkgKiBpdGVtLnF1YW50aXR5O1xuXHRcdFx0fSwgMClcblx0XHQpO1xuXHR9LCAwKTtcblxuXHRjb25zdCBsYXN0MjRIb3VycyA9IGFiYW5kb25lZENhcnRzLmZpbHRlcihcblx0XHQoY2FydCkgPT4gY2FydC51cGRhdGVkQXQgPj0gb25lRGF5QWdvLFxuXHQpLmxlbmd0aDtcblx0Y29uc3QgbGFzdFdlZWsgPSBhYmFuZG9uZWRDYXJ0cy5maWx0ZXIoXG5cdFx0KGNhcnQpID0+IGNhcnQudXBkYXRlZEF0ID49IG9uZVdlZWtBZ28sXG5cdCkubGVuZ3RoO1xuXG5cdHJldHVybiB7XG5cdFx0dG90YWxDYXJ0cyxcblx0XHR0b3RhbFZhbHVlLFxuXHRcdGxhc3QyNEhvdXJzLFxuXHRcdGxhc3RXZWVrLFxuXHRcdGF2ZXJhZ2VWYWx1ZTogdG90YWxDYXJ0cyA+IDAgPyB0b3RhbFZhbHVlIC8gdG90YWxDYXJ0cyA6IDAsXG5cdH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdVQWlLc0IsZ01BQUEifQ==
	},
	"[project]/apps/platform/src/server/api/internal/data:99a5d5 [app-ssr] (ecmascript) <text/javascript>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["getAbandonedCarts", () => $$RSC_SERVER_ACTION_0]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)",
			);
		/* __next_internal_action_entry_do_not_use__ [{"008383a3cfd5f573c97614ab7d3862746c82a5dd8c":"getAbandonedCarts"},"apps/platform/src/server/api/internal/abandoned-carts.ts",""] */ ("use turbopack no side effects");
		const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"createServerReference"
		])(
			"008383a3cfd5f573c97614ab7d3862746c82a5dd8c",
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"callServer"
			],
			void 0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"findSourceMapURL"
			],
			"getAbandonedCarts",
		);
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWJhbmRvbmVkLWNhcnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvc2VydmVyL2F1dGhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvc2VydmVyL2RiXCI7XG5pbXBvcnQgeyByZXF1aXJlQWRtaW5UZW5hbnQgfSBmcm9tIFwiQC9zZXJ2ZXIvdGVuYW50XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVTdG9yZUFjY2VzcygpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcblx0aWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcblx0fVxuXG5cdGNvbnN0IHRlbmFudCA9IGF3YWl0IHJlcXVpcmVBZG1pblRlbmFudCgpO1xuXG5cdGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghc3RhZmZSZWNvcmQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcblx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYmFuZG9uZWRDYXJ0cygpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gQSBjYXJ0IGlzIGNvbnNpZGVyZWQgYWJhbmRvbmVkIGlmOlxuXHQvLyAxLiBJdCBoYXMgaXRlbXNcblx0Ly8gMi4gSXQgd2FzIGxhc3QgdXBkYXRlZCBtb3JlIHRoYW4gMSBob3VyIGFnb1xuXHQvLyAzLiBJdCBoYXNuJ3QgYmVlbiBjb252ZXJ0ZWQgdG8gYW4gb3JkZXJcblx0Y29uc3Qgb25lSG91ckFnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA2MCAqIDYwICogMTAwMCk7XG5cblx0Y29uc3QgY2FydHMgPSBhd2FpdCBkYi5jYXJ0LmZpbmRNYW55KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHR1cGRhdGVkQXQ6IHtcblx0XHRcdFx0bHQ6IG9uZUhvdXJBZ28sXG5cdFx0XHR9LFxuXHRcdFx0aXRlbXM6IHtcblx0XHRcdFx0c29tZToge30sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0Y3VzdG9tZXI6IHRydWUsXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDoge1xuXHRcdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IHVwZGF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIGNhcnRzLm1hcCgoY2FydCkgPT4gKHtcblx0XHRpZDogY2FydC5pZCxcblx0XHRjdXN0b21lcjogY2FydC5jdXN0b21lclxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0aWQ6IGNhcnQuY3VzdG9tZXIuaWQsXG5cdFx0XHRcdFx0ZW1haWw6IGNhcnQuY3VzdG9tZXIuZW1haWwsXG5cdFx0XHRcdFx0bmFtZTogYCR7Y2FydC5jdXN0b21lci5maXJzdE5hbWUgPz8gXCJcIn0gJHtjYXJ0LmN1c3RvbWVyLmxhc3ROYW1lID8/IFwiXCJ9YC50cmltKCkgfHwgXCJVbmtub3duXCIsXG5cdFx0XHRcdH1cblx0XHRcdDogbnVsbCxcblx0XHRzZXNzaW9uSWQ6IGNhcnQuc2Vzc2lvbklkLFxuXHRcdGl0ZW1Db3VudDogY2FydC5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eSwgMCksXG5cdFx0dG90YWxWYWx1ZTogY2FydC5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2UgPSBpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlO1xuXHRcdFx0cmV0dXJuIHN1bSArIE51bWJlcihwcmljZSkgKiBpdGVtLnF1YW50aXR5O1xuXHRcdH0sIDApLFxuXHRcdGl0ZW1zOiBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcblx0XHRcdGlkOiBpdGVtLmlkLFxuXHRcdFx0cHJvZHVjdElkOiBpdGVtLnByb2R1Y3RJZCxcblx0XHRcdHByb2R1Y3ROYW1lOiBpdGVtLnByb2R1Y3QudHJhbnNsYXRpb25zWzBdPy5uYW1lID8/IGl0ZW0ucHJvZHVjdC5zbHVnLFxuXHRcdFx0dmFyaWFudFNrdTogaXRlbS5zZWxlY3RlZFZhcmlhbnQ/LnNrdSxcblx0XHRcdHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuXHRcdFx0cHJpY2U6IE51bWJlcihpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlKSxcblx0XHR9KSksXG5cdFx0YWJhbmRvbmVkQXQ6IGNhcnQudXBkYXRlZEF0LFxuXHRcdGNyZWF0ZWRBdDogY2FydC5jcmVhdGVkQXQsXG5cdH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFiYW5kb25lZENhcnQoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBjYXJ0ID0gYXdhaXQgZGIuY2FydC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdGN1c3RvbWVyOiB0cnVlLFxuXHRcdFx0aXRlbXM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdHByb2R1Y3Q6IHtcblx0XHRcdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0dGFrZTogMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0bWVkaWE6IHtcblx0XHRcdFx0XHRcdFx0XHRvcmRlckJ5OiB7IG9yZGVyOiBcImFzY1wiIH0sXG5cdFx0XHRcdFx0XHRcdFx0dGFrZTogMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZWxlY3RlZFZhcmlhbnQ6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghY2FydCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhcnQgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpZDogY2FydC5pZCxcblx0XHRjdXN0b21lcjogY2FydC5jdXN0b21lclxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0aWQ6IGNhcnQuY3VzdG9tZXIuaWQsXG5cdFx0XHRcdFx0ZW1haWw6IGNhcnQuY3VzdG9tZXIuZW1haWwsXG5cdFx0XHRcdFx0bmFtZTogYCR7Y2FydC5jdXN0b21lci5maXJzdE5hbWUgPz8gXCJcIn0gJHtjYXJ0LmN1c3RvbWVyLmxhc3ROYW1lID8/IFwiXCJ9YC50cmltKCkgfHwgXCJVbmtub3duXCIsXG5cdFx0XHRcdFx0cGhvbmU6IGNhcnQuY3VzdG9tZXIucGhvbmUsXG5cdFx0XHRcdH1cblx0XHRcdDogbnVsbCxcblx0XHRzZXNzaW9uSWQ6IGNhcnQuc2Vzc2lvbklkLFxuXHRcdGl0ZW1zOiBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcblx0XHRcdGlkOiBpdGVtLmlkLFxuXHRcdFx0cHJvZHVjdElkOiBpdGVtLnByb2R1Y3RJZCxcblx0XHRcdHByb2R1Y3ROYW1lOiBpdGVtLnByb2R1Y3QudHJhbnNsYXRpb25zWzBdPy5uYW1lID8/IGl0ZW0ucHJvZHVjdC5zbHVnLFxuXHRcdFx0cHJvZHVjdEltYWdlOiBpdGVtLnByb2R1Y3QubWVkaWFbMF0/LnVybCxcblx0XHRcdHZhcmlhbnRTa3U6IGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5za3UsXG5cdFx0XHR2YXJpYW50T3B0aW9uczogaXRlbS5zZWxlY3RlZFZhcmlhbnRcblx0XHRcdFx0PyBPYmplY3QuZW50cmllcyhpdGVtLnNlbGVjdGVkVmFyaWFudC5vcHRpb25zIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pXG5cdFx0XHRcdFx0XHQubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX06ICR7dmFsdWV9YClcblx0XHRcdFx0XHRcdC5qb2luKFwiLCBcIilcblx0XHRcdFx0OiBudWxsLFxuXHRcdFx0cXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG5cdFx0XHRwcmljZTogTnVtYmVyKGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2UpLFxuXHRcdH0pKSxcblx0XHR0b3RhbFZhbHVlOiBjYXJ0Lml0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBwcmljZSA9IGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2U7XG5cdFx0XHRyZXR1cm4gc3VtICsgTnVtYmVyKHByaWNlKSAqIGl0ZW0ucXVhbnRpdHk7XG5cdFx0fSwgMCksXG5cdFx0YWJhbmRvbmVkQXQ6IGNhcnQudXBkYXRlZEF0LFxuXHRcdGNyZWF0ZWRBdDogY2FydC5jcmVhdGVkQXQsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBYmFuZG9uZWRDYXJ0KGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IGNhcnQgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgY2FydCA9IGF3YWl0IGRiLmNhcnQuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFjYXJ0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FydCBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdGF3YWl0IGRiLmNhcnQuZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYmFuZG9uZWRDYXJ0U3RhdHMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IG9uZUhvdXJBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNjAgKiA2MCAqIDEwMDApO1xuXHRjb25zdCBvbmVEYXlBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cdGNvbnN0IG9uZVdlZWtBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG5cdC8vIEdldCBhbGwgYWJhbmRvbmVkIGNhcnRzXG5cdGNvbnN0IGFiYW5kb25lZENhcnRzID0gYXdhaXQgZGIuY2FydC5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0dXBkYXRlZEF0OiB7XG5cdFx0XHRcdGx0OiBvbmVIb3VyQWdvLFxuXHRcdFx0fSxcblx0XHRcdGl0ZW1zOiB7XG5cdFx0XHRcdHNvbWU6IHt9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdGl0ZW1zOiB7XG5cdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRwcm9kdWN0OiB0cnVlLFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0Ly8gQ2FsY3VsYXRlIHN0YXRzXG5cdGNvbnN0IHRvdGFsQ2FydHMgPSBhYmFuZG9uZWRDYXJ0cy5sZW5ndGg7XG5cdGNvbnN0IHRvdGFsVmFsdWUgPSBhYmFuZG9uZWRDYXJ0cy5yZWR1Y2UoKHN1bSwgY2FydCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRzdW0gK1xuXHRcdFx0Y2FydC5pdGVtcy5yZWR1Y2UoKGl0ZW1TdW0sIGl0ZW0pID0+IHtcblx0XHRcdFx0Y29uc3QgcHJpY2UgPSBpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlO1xuXHRcdFx0XHRyZXR1cm4gaXRlbVN1bSArIE51bWJlcihwcmljZSkgKiBpdGVtLnF1YW50aXR5O1xuXHRcdFx0fSwgMClcblx0XHQpO1xuXHR9LCAwKTtcblxuXHRjb25zdCBsYXN0MjRIb3VycyA9IGFiYW5kb25lZENhcnRzLmZpbHRlcihcblx0XHQoY2FydCkgPT4gY2FydC51cGRhdGVkQXQgPj0gb25lRGF5QWdvLFxuXHQpLmxlbmd0aDtcblx0Y29uc3QgbGFzdFdlZWsgPSBhYmFuZG9uZWRDYXJ0cy5maWx0ZXIoXG5cdFx0KGNhcnQpID0+IGNhcnQudXBkYXRlZEF0ID49IG9uZVdlZWtBZ28sXG5cdCkubGVuZ3RoO1xuXG5cdHJldHVybiB7XG5cdFx0dG90YWxDYXJ0cyxcblx0XHR0b3RhbFZhbHVlLFxuXHRcdGxhc3QyNEhvdXJzLFxuXHRcdGxhc3RXZWVrLFxuXHRcdGF2ZXJhZ2VWYWx1ZTogdG90YWxDYXJ0cyA+IDAgPyB0b3RhbFZhbHVlIC8gdG90YWxDYXJ0cyA6IDAsXG5cdH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhUQWdDc0IsOExBQUEifQ==
	},
	"[project]/apps/platform/src/server/api/internal/data:7c0090 [app-ssr] (ecmascript) <text/javascript>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"getAbandonedCartStats",
			() => $$RSC_SERVER_ACTION_3,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)",
			);
		/* __next_internal_action_entry_do_not_use__ [{"00e344ca32fba57f962a282726ba061f619e3fc212":"getAbandonedCartStats"},"apps/platform/src/server/api/internal/abandoned-carts.ts",""] */ ("use turbopack no side effects");
		const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"createServerReference"
		])(
			"00e344ca32fba57f962a282726ba061f619e3fc212",
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"callServer"
			],
			void 0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"findSourceMapURL"
			],
			"getAbandonedCartStats",
		);
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWJhbmRvbmVkLWNhcnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvc2VydmVyL2F1dGhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvc2VydmVyL2RiXCI7XG5pbXBvcnQgeyByZXF1aXJlQWRtaW5UZW5hbnQgfSBmcm9tIFwiQC9zZXJ2ZXIvdGVuYW50XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVTdG9yZUFjY2VzcygpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcblx0aWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcblx0fVxuXG5cdGNvbnN0IHRlbmFudCA9IGF3YWl0IHJlcXVpcmVBZG1pblRlbmFudCgpO1xuXG5cdGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghc3RhZmZSZWNvcmQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcblx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYmFuZG9uZWRDYXJ0cygpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gQSBjYXJ0IGlzIGNvbnNpZGVyZWQgYWJhbmRvbmVkIGlmOlxuXHQvLyAxLiBJdCBoYXMgaXRlbXNcblx0Ly8gMi4gSXQgd2FzIGxhc3QgdXBkYXRlZCBtb3JlIHRoYW4gMSBob3VyIGFnb1xuXHQvLyAzLiBJdCBoYXNuJ3QgYmVlbiBjb252ZXJ0ZWQgdG8gYW4gb3JkZXJcblx0Y29uc3Qgb25lSG91ckFnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA2MCAqIDYwICogMTAwMCk7XG5cblx0Y29uc3QgY2FydHMgPSBhd2FpdCBkYi5jYXJ0LmZpbmRNYW55KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHR1cGRhdGVkQXQ6IHtcblx0XHRcdFx0bHQ6IG9uZUhvdXJBZ28sXG5cdFx0XHR9LFxuXHRcdFx0aXRlbXM6IHtcblx0XHRcdFx0c29tZToge30sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0Y3VzdG9tZXI6IHRydWUsXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDoge1xuXHRcdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IHVwZGF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIGNhcnRzLm1hcCgoY2FydCkgPT4gKHtcblx0XHRpZDogY2FydC5pZCxcblx0XHRjdXN0b21lcjogY2FydC5jdXN0b21lclxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0aWQ6IGNhcnQuY3VzdG9tZXIuaWQsXG5cdFx0XHRcdFx0ZW1haWw6IGNhcnQuY3VzdG9tZXIuZW1haWwsXG5cdFx0XHRcdFx0bmFtZTogYCR7Y2FydC5jdXN0b21lci5maXJzdE5hbWUgPz8gXCJcIn0gJHtjYXJ0LmN1c3RvbWVyLmxhc3ROYW1lID8/IFwiXCJ9YC50cmltKCkgfHwgXCJVbmtub3duXCIsXG5cdFx0XHRcdH1cblx0XHRcdDogbnVsbCxcblx0XHRzZXNzaW9uSWQ6IGNhcnQuc2Vzc2lvbklkLFxuXHRcdGl0ZW1Db3VudDogY2FydC5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eSwgMCksXG5cdFx0dG90YWxWYWx1ZTogY2FydC5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2UgPSBpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlO1xuXHRcdFx0cmV0dXJuIHN1bSArIE51bWJlcihwcmljZSkgKiBpdGVtLnF1YW50aXR5O1xuXHRcdH0sIDApLFxuXHRcdGl0ZW1zOiBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcblx0XHRcdGlkOiBpdGVtLmlkLFxuXHRcdFx0cHJvZHVjdElkOiBpdGVtLnByb2R1Y3RJZCxcblx0XHRcdHByb2R1Y3ROYW1lOiBpdGVtLnByb2R1Y3QudHJhbnNsYXRpb25zWzBdPy5uYW1lID8/IGl0ZW0ucHJvZHVjdC5zbHVnLFxuXHRcdFx0dmFyaWFudFNrdTogaXRlbS5zZWxlY3RlZFZhcmlhbnQ/LnNrdSxcblx0XHRcdHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuXHRcdFx0cHJpY2U6IE51bWJlcihpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlKSxcblx0XHR9KSksXG5cdFx0YWJhbmRvbmVkQXQ6IGNhcnQudXBkYXRlZEF0LFxuXHRcdGNyZWF0ZWRBdDogY2FydC5jcmVhdGVkQXQsXG5cdH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFiYW5kb25lZENhcnQoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBjYXJ0ID0gYXdhaXQgZGIuY2FydC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdGN1c3RvbWVyOiB0cnVlLFxuXHRcdFx0aXRlbXM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdHByb2R1Y3Q6IHtcblx0XHRcdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0dGFrZTogMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0bWVkaWE6IHtcblx0XHRcdFx0XHRcdFx0XHRvcmRlckJ5OiB7IG9yZGVyOiBcImFzY1wiIH0sXG5cdFx0XHRcdFx0XHRcdFx0dGFrZTogMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZWxlY3RlZFZhcmlhbnQ6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghY2FydCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhcnQgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpZDogY2FydC5pZCxcblx0XHRjdXN0b21lcjogY2FydC5jdXN0b21lclxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0aWQ6IGNhcnQuY3VzdG9tZXIuaWQsXG5cdFx0XHRcdFx0ZW1haWw6IGNhcnQuY3VzdG9tZXIuZW1haWwsXG5cdFx0XHRcdFx0bmFtZTogYCR7Y2FydC5jdXN0b21lci5maXJzdE5hbWUgPz8gXCJcIn0gJHtjYXJ0LmN1c3RvbWVyLmxhc3ROYW1lID8/IFwiXCJ9YC50cmltKCkgfHwgXCJVbmtub3duXCIsXG5cdFx0XHRcdFx0cGhvbmU6IGNhcnQuY3VzdG9tZXIucGhvbmUsXG5cdFx0XHRcdH1cblx0XHRcdDogbnVsbCxcblx0XHRzZXNzaW9uSWQ6IGNhcnQuc2Vzc2lvbklkLFxuXHRcdGl0ZW1zOiBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcblx0XHRcdGlkOiBpdGVtLmlkLFxuXHRcdFx0cHJvZHVjdElkOiBpdGVtLnByb2R1Y3RJZCxcblx0XHRcdHByb2R1Y3ROYW1lOiBpdGVtLnByb2R1Y3QudHJhbnNsYXRpb25zWzBdPy5uYW1lID8/IGl0ZW0ucHJvZHVjdC5zbHVnLFxuXHRcdFx0cHJvZHVjdEltYWdlOiBpdGVtLnByb2R1Y3QubWVkaWFbMF0/LnVybCxcblx0XHRcdHZhcmlhbnRTa3U6IGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5za3UsXG5cdFx0XHR2YXJpYW50T3B0aW9uczogaXRlbS5zZWxlY3RlZFZhcmlhbnRcblx0XHRcdFx0PyBPYmplY3QuZW50cmllcyhpdGVtLnNlbGVjdGVkVmFyaWFudC5vcHRpb25zIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pXG5cdFx0XHRcdFx0XHQubWFwKChba2V5LCB2YWx1ZV0pID0+IGAke2tleX06ICR7dmFsdWV9YClcblx0XHRcdFx0XHRcdC5qb2luKFwiLCBcIilcblx0XHRcdFx0OiBudWxsLFxuXHRcdFx0cXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG5cdFx0XHRwcmljZTogTnVtYmVyKGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2UpLFxuXHRcdH0pKSxcblx0XHR0b3RhbFZhbHVlOiBjYXJ0Lml0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBwcmljZSA9IGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2U7XG5cdFx0XHRyZXR1cm4gc3VtICsgTnVtYmVyKHByaWNlKSAqIGl0ZW0ucXVhbnRpdHk7XG5cdFx0fSwgMCksXG5cdFx0YWJhbmRvbmVkQXQ6IGNhcnQudXBkYXRlZEF0LFxuXHRcdGNyZWF0ZWRBdDogY2FydC5jcmVhdGVkQXQsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBYmFuZG9uZWRDYXJ0KGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IGNhcnQgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgY2FydCA9IGF3YWl0IGRiLmNhcnQuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFjYXJ0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FydCBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdGF3YWl0IGRiLmNhcnQuZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYmFuZG9uZWRDYXJ0U3RhdHMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IG9uZUhvdXJBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNjAgKiA2MCAqIDEwMDApO1xuXHRjb25zdCBvbmVEYXlBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cdGNvbnN0IG9uZVdlZWtBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG5cdC8vIEdldCBhbGwgYWJhbmRvbmVkIGNhcnRzXG5cdGNvbnN0IGFiYW5kb25lZENhcnRzID0gYXdhaXQgZGIuY2FydC5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0dXBkYXRlZEF0OiB7XG5cdFx0XHRcdGx0OiBvbmVIb3VyQWdvLFxuXHRcdFx0fSxcblx0XHRcdGl0ZW1zOiB7XG5cdFx0XHRcdHNvbWU6IHt9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdGl0ZW1zOiB7XG5cdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRwcm9kdWN0OiB0cnVlLFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0Ly8gQ2FsY3VsYXRlIHN0YXRzXG5cdGNvbnN0IHRvdGFsQ2FydHMgPSBhYmFuZG9uZWRDYXJ0cy5sZW5ndGg7XG5cdGNvbnN0IHRvdGFsVmFsdWUgPSBhYmFuZG9uZWRDYXJ0cy5yZWR1Y2UoKHN1bSwgY2FydCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHRzdW0gK1xuXHRcdFx0Y2FydC5pdGVtcy5yZWR1Y2UoKGl0ZW1TdW0sIGl0ZW0pID0+IHtcblx0XHRcdFx0Y29uc3QgcHJpY2UgPSBpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlO1xuXHRcdFx0XHRyZXR1cm4gaXRlbVN1bSArIE51bWJlcihwcmljZSkgKiBpdGVtLnF1YW50aXR5O1xuXHRcdFx0fSwgMClcblx0XHQpO1xuXHR9LCAwKTtcblxuXHRjb25zdCBsYXN0MjRIb3VycyA9IGFiYW5kb25lZENhcnRzLmZpbHRlcihcblx0XHQoY2FydCkgPT4gY2FydC51cGRhdGVkQXQgPj0gb25lRGF5QWdvLFxuXHQpLmxlbmd0aDtcblx0Y29uc3QgbGFzdFdlZWsgPSBhYmFuZG9uZWRDYXJ0cy5maWx0ZXIoXG5cdFx0KGNhcnQpID0+IGNhcnQudXBkYXRlZEF0ID49IG9uZVdlZWtBZ28sXG5cdCkubGVuZ3RoO1xuXG5cdHJldHVybiB7XG5cdFx0dG90YWxDYXJ0cyxcblx0XHR0b3RhbFZhbHVlLFxuXHRcdGxhc3QyNEhvdXJzLFxuXHRcdGxhc3RXZWVrLFxuXHRcdGF2ZXJhZ2VWYWx1ZTogdG90YWxDYXJ0cyA+IDAgPyB0b3RhbFZhbHVlIC8gdG90YWxDYXJ0cyA6IDAsXG5cdH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtVQW9Mc0Isa01BQUEifQ==
	},
	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["default", () => AbandonedCheckoutsPage]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>",
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
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$991291__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/server/api/internal/data:991291 [app-ssr] (ecmascript) <text/javascript>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$99a5d5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/server/api/internal/data:99a5d5 [app-ssr] (ecmascript) <text/javascript>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$7c0090__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/server/api/internal/data:7c0090 [app-ssr] (ecmascript) <text/javascript>",
			);
		("use client");
		function AbandonedCheckoutsPage() {
			const [carts, setCarts] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])([]);
			const [stats, setStats] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(null);
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
			const [selectedCart, setSelectedCart] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(null);
			const [deleting, setDeleting] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(false);
			(0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useEffect"
			])(() => {
				loadData();
			}, []);
			async function loadData() {
				try {
					setLoading(true);
					const [cartsData, statsData] = await Promise.all([
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$99a5d5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__[
							"getAbandonedCarts"
						])(),
						(0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$7c0090__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__[
							"getAbandonedCartStats"
						])(),
					]);
					setCarts(cartsData);
					setStats(statsData);
				} catch (error) {
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].error("Failed to load abandoned carts");
				} finally {
					setLoading(false);
				}
			}
			const handleView = (cart) => {
				setSelectedCart(cart);
				setViewDialogOpen(true);
			};
			const handleDeleteClick = (cart) => {
				setSelectedCart(cart);
				setDeleteDialogOpen(true);
			};
			const handleDelete = async () => {
				if (!selectedCart) return;
				try {
					setDeleting(true);
					await (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$991291__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__[
						"deleteAbandonedCart"
					])(selectedCart.id);
					setCarts((prev) => prev.filter((c) => c.id !== selectedCart.id));
					setDeleteDialogOpen(false);
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].success("Abandoned cart deleted");
					loadData(); // Refresh stats
				} catch (error) {
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].error("Failed to delete cart");
				} finally {
					setDeleting(false);
				}
			};
			const handleSendRecoveryEmail = (cart) => {
				if (cart.customer?.email) {
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].success(`Recovery email sent to ${cart.customer.email}`);
				} else {
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].error("No email address available for this cart");
				}
			};
			const formatCurrency = (amount) => {
				return new Intl.NumberFormat("bg-BG", {
					style: "currency",
					currency: "BGN",
				}).format(amount);
			};
			const formatTimeAgo = (date) => {
				const now = new Date();
				const diff = now.getTime() - new Date(date).getTime();
				const hours = Math.floor(diff / (1000 * 60 * 60));
				const days = Math.floor(hours / 24);
				if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
				return `${hours} hour${hours > 1 ? "s" : ""} ago`;
			};
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
									"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
								lineNumber: 163,
								columnNumber: 5,
							},
							this,
						),
					},
					void 0,
					false,
					{
						fileName:
							"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
						lineNumber: 162,
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
								children: [
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										"h1",
										{
											className: "text-3xl font-bold tracking-tight",
											children: "Abandoned Checkouts",
										},
										void 0,
										false,
										{
											fileName:
												"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
											lineNumber: 171,
											columnNumber: 5,
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
											children: "View and recover abandoned shopping carts",
										},
										void 0,
										false,
										{
											fileName:
												"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
											lineNumber: 174,
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
									"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
								lineNumber: 170,
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
								className: "grid gap-4 md:grid-cols-4",
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
													"div",
													{
														className: "flex items-center gap-2",
														children: [
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__[
																	"ShoppingCart"
																],
																{
																	className: "h-4 w-4 text-muted-foreground",
																},
																void 0,
																false,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																	lineNumber: 182,
																	columnNumber: 7,
																},
																this,
															),
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																"p",
																{
																	className: "text-sm text-muted-foreground",
																	children: "Total Abandoned",
																},
																void 0,
																false,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
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
															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
														lineNumber: 181,
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
														children: stats?.totalCarts ?? 0,
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
														lineNumber: 185,
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
												"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
											lineNumber: 180,
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
													"div",
													{
														className: "flex items-center gap-2",
														children: [
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__[
																	"DollarSign"
																],
																{
																	className: "h-4 w-4 text-muted-foreground",
																},
																void 0,
																false,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																	lineNumber: 189,
																	columnNumber: 7,
																},
																this,
															),
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																"p",
																{
																	className: "text-sm text-muted-foreground",
																	children: "Potential Revenue",
																},
																void 0,
																false,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																	lineNumber: 190,
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
															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
														lineNumber: 188,
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
														children: formatCurrency(stats?.totalValue ?? 0),
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
														lineNumber: 192,
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
												"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
											lineNumber: 187,
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
													"div",
													{
														className: "flex items-center gap-2",
														children: [
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__[
																	"Clock"
																],
																{
																	className: "h-4 w-4 text-muted-foreground",
																},
																void 0,
																false,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																	lineNumber: 198,
																	columnNumber: 7,
																},
																this,
															),
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																"p",
																{
																	className: "text-sm text-muted-foreground",
																	children: "Last 24 Hours",
																},
																void 0,
																false,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																	lineNumber: 199,
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
															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
														lineNumber: 197,
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
														children: stats?.last24Hours ?? 0,
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
														lineNumber: 201,
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
												"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
											lineNumber: 196,
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
													"div",
													{
														className: "flex items-center gap-2",
														children: [
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__[
																	"TrendingUp"
																],
																{
																	className: "h-4 w-4 text-muted-foreground",
																},
																void 0,
																false,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																	lineNumber: 205,
																	columnNumber: 7,
																},
																this,
															),
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																"p",
																{
																	className: "text-sm text-muted-foreground",
																	children: "Average Value",
																},
																void 0,
																false,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																	lineNumber: 206,
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
															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
														lineNumber: 204,
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
														children: formatCurrency(stats?.averageValue ?? 0),
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
														lineNumber: 208,
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
												"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
											lineNumber: 203,
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
									"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
								lineNumber: 179,
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
									carts.length === 0
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
																"EmptyHeader"
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
																			variant: "icon",
																			children: /*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__[
																					"ShoppingCart"
																				],
																				{
																					className: "h-8 w-8",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																					lineNumber: 219,
																					columnNumber: 9,
																				},
																				this,
																			),
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																			lineNumber: 218,
																			columnNumber: 8,
																		},
																		this,
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"EmptyTitle"
																		],
																		{
																			children: "No abandoned carts",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																			lineNumber: 221,
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
																				"When customers leave items in their cart without completing checkout, they'll appear here",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																			lineNumber: 222,
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
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 217,
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
																	"p",
																	{
																		className: "text-sm text-muted-foreground",
																		children:
																			"All carts are either completed or empty",
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																		lineNumber: 228,
																		columnNumber: 8,
																	},
																	this,
																),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 227,
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
														"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
													lineNumber: 216,
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
																					children: "Customer",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																					lineNumber: 237,
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
																					children: "Items",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																					lineNumber: 238,
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
																					children: "Value",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																					lineNumber: 239,
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
																					children: "Abandoned",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																					lineNumber: 240,
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
																						"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																					lineNumber: 241,
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
																						"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																					lineNumber: 242,
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
																			"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																		lineNumber: 236,
																		columnNumber: 8,
																	},
																	this,
																),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 235,
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
																children: carts.map((cart) =>
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
																						children: cart.customer
																							? /*#__PURE__*/ (0,
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
																												"p",
																												{
																													className:
																														"font-medium",
																													children:
																														cart.customer.name,
																												},
																												void 0,
																												false,
																												{
																													fileName:
																														"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																													lineNumber: 251,
																													columnNumber: 13,
																												},
																												this,
																											),
																											/*#__PURE__*/ (0,
																											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																												"jsxDEV"
																											])(
																												"p",
																												{
																													className:
																														"text-sm text-muted-foreground",
																													children:
																														cart.customer.email,
																												},
																												void 0,
																												false,
																												{
																													fileName:
																														"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																													lineNumber: 254,
																													columnNumber: 13,
																												},
																												this,
																											),
																										],
																									},
																									void 0,
																									true,
																									{
																										fileName:
																											"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																										lineNumber: 250,
																										columnNumber: 12,
																									},
																									this,
																								)
																							: /*#__PURE__*/ (0,
																								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																									"jsxDEV"
																								])(
																									"p",
																									{
																										className:
																											"text-muted-foreground",
																										children: "Guest",
																									},
																									void 0,
																									false,
																									{
																										fileName:
																											"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																										lineNumber: 259,
																										columnNumber: 12,
																									},
																									this,
																								),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																						lineNumber: 248,
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
																						children: [
																							cart.itemCount,
																							" items",
																						],
																					},
																					void 0,
																					true,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																						lineNumber: 262,
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
																						className: "font-medium",
																						children: formatCurrency(
																							cart.totalValue,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																						lineNumber: 263,
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
																						children: formatTimeAgo(
																							cart.abandonedAt,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																						lineNumber: 266,
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
																								variant: "secondary",
																								children: [
																									/*#__PURE__*/ (0,
																									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																										"jsxDEV"
																									])(
																										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__[
																											"AlertTriangle"
																										],
																										{
																											className: "h-3 w-3 mr-1",
																										},
																										void 0,
																										false,
																										{
																											fileName:
																												"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																											lineNumber: 269,
																											columnNumber: 12,
																										},
																										this,
																									),
																									"Abandoned",
																								],
																							},
																							void 0,
																							true,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																								lineNumber: 268,
																								columnNumber: 11,
																							},
																							this,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																						lineNumber: 267,
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
																												handleView(cart),
																											title: "View details",
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
																															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																														lineNumber: 281,
																														columnNumber: 13,
																													},
																													this,
																												),
																										},
																										void 0,
																										false,
																										{
																											fileName:
																												"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																											lineNumber: 275,
																											columnNumber: 12,
																										},
																										this,
																									),
																									cart.customer?.email &&
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
																													handleSendRecoveryEmail(
																														cart,
																													),
																												title:
																													"Send recovery email",
																												children:
																													/*#__PURE__*/ (0,
																													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																														"jsxDEV"
																													])(
																														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__[
																															"Mail"
																														],
																														{
																															className:
																																"h-4 w-4",
																														},
																														void 0,
																														false,
																														{
																															fileName:
																																"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																															lineNumber: 290,
																															columnNumber: 14,
																														},
																														this,
																													),
																											},
																											void 0,
																											false,
																											{
																												fileName:
																													"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																												lineNumber: 284,
																												columnNumber: 13,
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
																												handleDeleteClick(cart),
																											title: "Delete",
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
																															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																														lineNumber: 299,
																														columnNumber: 13,
																													},
																													this,
																												),
																										},
																										void 0,
																										false,
																										{
																											fileName:
																												"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																											lineNumber: 293,
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
																									"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																								lineNumber: 274,
																								columnNumber: 11,
																							},
																							this,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																						lineNumber: 273,
																						columnNumber: 10,
																					},
																					this,
																				),
																			],
																		},
																		cart.id,
																		true,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																			lineNumber: 247,
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
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 245,
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
														"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
													lineNumber: 234,
													columnNumber: 6,
												},
												this,
											),
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
								lineNumber: 214,
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
										className: "max-w-2xl",
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
																children: "Abandoned Cart Details",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 314,
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
																children:
																	"View the items left in this abandoned cart",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 315,
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
														"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
													lineNumber: 313,
													columnNumber: 6,
												},
												this,
											),
											selectedCart &&
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
																	className: "grid grid-cols-2 gap-4",
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
																						"p",
																						{
																							className:
																								"text-sm text-muted-foreground",
																							children: "Customer",
																						},
																						void 0,
																						false,
																						{
																							fileName:
																								"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																							lineNumber: 324,
																							columnNumber: 10,
																						},
																						this,
																					),
																					selectedCart.customer
																						? /*#__PURE__*/ (0,
																							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																								"jsxDEV"
																							])(
																								"div",
																								{
																									className: "mt-1",
																									children: [
																										/*#__PURE__*/ (0,
																										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																											"jsxDEV"
																										])(
																											"p",
																											{
																												className:
																													"font-medium",
																												children:
																													selectedCart.customer
																														.name,
																											},
																											void 0,
																											false,
																											{
																												fileName:
																													"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																												lineNumber: 327,
																												columnNumber: 12,
																											},
																											this,
																										),
																										/*#__PURE__*/ (0,
																										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																											"jsxDEV"
																										])(
																											"p",
																											{
																												className: "text-sm",
																												children:
																													selectedCart.customer
																														.email,
																											},
																											void 0,
																											false,
																											{
																												fileName:
																													"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																												lineNumber: 330,
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
																										"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																									lineNumber: 326,
																									columnNumber: 11,
																								},
																								this,
																							)
																						: /*#__PURE__*/ (0,
																							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																								"jsxDEV"
																							])(
																								"p",
																								{
																									className:
																										"text-muted-foreground mt-1",
																									children: "Guest visitor",
																								},
																								void 0,
																								false,
																								{
																									fileName:
																										"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																									lineNumber: 333,
																									columnNumber: 11,
																								},
																								this,
																							),
																				],
																			},
																			void 0,
																			true,
																			{
																				fileName:
																					"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																				lineNumber: 323,
																				columnNumber: 9,
																			},
																			this,
																		),
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
																						"p",
																						{
																							className:
																								"text-sm text-muted-foreground",
																							children: "Abandoned",
																						},
																						void 0,
																						false,
																						{
																							fileName:
																								"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																							lineNumber: 337,
																							columnNumber: 10,
																						},
																						this,
																					),
																					/*#__PURE__*/ (0,
																					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"jsxDEV"
																					])(
																						"p",
																						{
																							className: "font-medium mt-1",
																							children: formatTimeAgo(
																								selectedCart.abandonedAt,
																							),
																						},
																						void 0,
																						false,
																						{
																							fileName:
																								"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																							lineNumber: 338,
																							columnNumber: 10,
																						},
																						this,
																					),
																				],
																			},
																			void 0,
																			true,
																			{
																				fileName:
																					"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																				lineNumber: 336,
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
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																	lineNumber: 322,
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
																	children: [
																		/*#__PURE__*/ (0,
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"jsxDEV"
																		])(
																			"p",
																			{
																				className:
																					"text-sm text-muted-foreground mb-2",
																				children: "Cart Items",
																			},
																			void 0,
																			false,
																			{
																				fileName:
																					"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																				lineNumber: 345,
																				columnNumber: 9,
																			},
																			this,
																		),
																		/*#__PURE__*/ (0,
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"jsxDEV"
																		])(
																			"div",
																			{
																				className: "border rounded-lg divide-y",
																				children: selectedCart.items.map(
																					(item) =>
																						/*#__PURE__*/ (0,
																						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																							"jsxDEV"
																						])(
																							"div",
																							{
																								className:
																									"p-3 flex items-center justify-between",
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
																													"p",
																													{
																														className:
																															"font-medium",
																														children:
																															item.productName,
																													},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																														lineNumber: 355,
																														columnNumber: 13,
																													},
																													this,
																												),
																												item.variantSku &&
																													/*#__PURE__*/ (0,
																													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																														"jsxDEV"
																													])(
																														"p",
																														{
																															className:
																																"text-sm text-muted-foreground",
																															children: [
																																"SKU: ",
																																item.variantSku,
																															],
																														},
																														void 0,
																														true,
																														{
																															fileName:
																																"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																															lineNumber: 357,
																															columnNumber: 14,
																														},
																														this,
																													),
																											],
																										},
																										void 0,
																										true,
																										{
																											fileName:
																												"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																											lineNumber: 354,
																											columnNumber: 12,
																										},
																										this,
																									),
																									/*#__PURE__*/ (0,
																									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																										"jsxDEV"
																									])(
																										"div",
																										{
																											className: "text-right",
																											children: [
																												/*#__PURE__*/ (0,
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																													"jsxDEV"
																												])(
																													"p",
																													{
																														className:
																															"font-medium",
																														children:
																															formatCurrency(
																																item.price,
																															),
																													},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																														lineNumber: 363,
																														columnNumber: 13,
																													},
																													this,
																												),
																												/*#__PURE__*/ (0,
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																													"jsxDEV"
																												])(
																													"p",
																													{
																														className:
																															"text-sm text-muted-foreground",
																														children: [
																															"Qty: ",
																															item.quantity,
																														],
																													},
																													void 0,
																													true,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																														lineNumber: 366,
																														columnNumber: 13,
																													},
																													this,
																												),
																											],
																										},
																										void 0,
																										true,
																										{
																											fileName:
																												"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																											lineNumber: 362,
																											columnNumber: 12,
																										},
																										this,
																									),
																								],
																							},
																							item.id,
																							true,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																								lineNumber: 350,
																								columnNumber: 11,
																							},
																							this,
																						),
																				),
																			},
																			void 0,
																			false,
																			{
																				fileName:
																					"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																				lineNumber: 348,
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
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																	lineNumber: 344,
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
																	className:
																		"flex justify-between items-center pt-4 border-t",
																	children: [
																		/*#__PURE__*/ (0,
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"jsxDEV"
																		])(
																			"p",
																			{
																				className: "font-medium",
																				children: "Total Value",
																			},
																			void 0,
																			false,
																			{
																				fileName:
																					"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																				lineNumber: 376,
																				columnNumber: 9,
																			},
																			this,
																		),
																		/*#__PURE__*/ (0,
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"jsxDEV"
																		])(
																			"p",
																			{
																				className: "text-xl font-bold",
																				children: formatCurrency(
																					selectedCart.totalValue,
																				),
																			},
																			void 0,
																			false,
																			{
																				fileName:
																					"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																				lineNumber: 377,
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
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																	lineNumber: 375,
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
															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
														lineNumber: 321,
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
														selectedCart?.customer?.email &&
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	"PolarisButton"
																],
																{
																	onClick: () => {
																		handleSendRecoveryEmail(selectedCart);
																		setViewDialogOpen(false);
																	},
																	children: [
																		/*#__PURE__*/ (0,
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"jsxDEV"
																		])(
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__[
																				"Mail"
																			],
																			{
																				className: "h-4 w-4",
																			},
																			void 0,
																			false,
																			{
																				fileName:
																					"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																				lineNumber: 392,
																				columnNumber: 9,
																			},
																			this,
																		),
																		"Send Recovery Email",
																	],
																},
																void 0,
																true,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																	lineNumber: 386,
																	columnNumber: 8,
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
																variant: "outline",
																onClick: () => setViewDialogOpen(false),
																children: "Close",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 396,
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
														"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
													lineNumber: 384,
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
											"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
										lineNumber: 312,
										columnNumber: 5,
									},
									this,
								),
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
								lineNumber: 311,
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
																children: "Delete Abandoned Cart",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 407,
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
																children:
																	"Are you sure you want to delete this abandoned cart? This action cannot be undone.",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 408,
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
														"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
													lineNumber: 406,
													columnNumber: 6,
												},
												this,
											),
											selectedCart &&
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													"div",
													{
														className: "py-4",
														children: /*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"p",
															{
																className: "text-sm text-muted-foreground",
																children: [
																	"Cart contains ",
																	selectedCart.itemCount,
																	" items worth",
																	" ",
																	formatCurrency(selectedCart.totalValue),
																],
															},
															void 0,
															true,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 416,
																columnNumber: 8,
															},
															this,
														),
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
														lineNumber: 415,
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
																onClick: () => setDeleteDialogOpen(false),
																children: "Cancel",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 424,
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
																	: "Delete Cart",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
																lineNumber: 430,
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
														"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
													lineNumber: 423,
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
											"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
										lineNumber: 405,
										columnNumber: 5,
									},
									this,
								),
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
								lineNumber: 404,
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
						"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
					lineNumber: 169,
					columnNumber: 3,
				},
				this,
			);
		}
	},
];

//# sourceMappingURL=apps_platform_src_36c63ede._.js.map
