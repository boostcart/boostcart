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
	"[project]/apps/platform/src/components/ui/input.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"Input",
			() => Input,
			"InputAddon",
			() => InputAddon,
			"InputGroup",
			() => InputGroup,
			"InputWrapper",
			() => InputWrapper,
			"inputAddonVariants",
			() => inputAddonVariants,
			"inputVariants",
			() => inputVariants,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)",
			);
		// Define input size variants
		const inputVariants = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"cva"
		])(
			`
    flex w-full bg-background border border-input shadow-xs shadow-black/5 transition-[color,box-shadow] text-foreground placeholder:text-muted-foreground/80 
    focus-visible:ring-ring/30  focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px]     
    disabled:cursor-not-allowed disabled:opacity-60 
    [&[readonly]]:bg-muted/80 [&[readonly]]:cursor-not-allowed
    file:h-full [&[type=file]]:py-0 file:border-solid file:border-input file:bg-transparent 
    file:font-medium file:not-italic file:text-foreground file:p-0 file:border-0 file:border-e
    aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/20
  `,
			{
				variants: {
					variant: {
						lg: "h-10 px-4 text-sm rounded-md file:pe-4 file:me-4",
						md: "h-8.5 px-3 text-[0.8125rem] leading-(--text-sm--line-height) rounded-md file:pe-3 file:me-3",
						sm: "h-7 px-2.5 text-xs rounded-md file:pe-2.5 file:me-2.5",
					},
				},
				defaultVariants: {
					variant: "md",
				},
			},
		);
		const inputAddonVariants = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"cva"
		])(
			"flex items-center shrink-0 justify-center bg-muted border border-input shadow-xs shadow-[rgba(0,0,0,0.05)] text-secondary-foreground",
			{
				variants: {
					variant: {
						sm: "rounded-md h-7 min-w-7 text-xs px-2.5 [&_svg:not([class*=size-])]:size-3.5",
						md: "rounded-md h-8.5 min-w-8.5 px-3 text-[0.8125rem] leading-(--text-sm--line-height) [&_svg:not([class*=size-])]:size-4.5",
						lg: "rounded-md h-10 min-w-10 px-4 text-sm [&_svg:not([class*=size-])]:size-4.5",
					},
					mode: {
						default: "",
						icon: "px-0 justify-center",
					},
				},
				defaultVariants: {
					variant: "md",
					mode: "default",
				},
			},
		);
		const inputGroupVariants = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"cva"
		])(
			`
    flex items-stretch
    [&_[data-slot=input]]:grow
    [&_[data-slot=input-addon]:has(+[data-slot=input])]:rounded-e-none [&_[data-slot=input-addon]:has(+[data-slot=input])]:border-e-0
    [&_[data-slot=input-addon]:has(+[data-slot=datefield])]:rounded-e-none [&_[data-slot=input-addon]:has(+[data-slot=datefield])]:border-e-0 
    [&_[data-slot=input]+[data-slot=input-addon]]:rounded-s-none [&_[data-slot=input]+[data-slot=input-addon]]:border-s-0
    [&_[data-slot=input-addon]:has(+[data-slot=button])]:rounded-e-none
    [&_[data-slot=input]+[data-slot=button]]:rounded-s-none
    [&_[data-slot=button]+[data-slot=input]]:rounded-s-none
    [&_[data-slot=input-addon]+[data-slot=input]]:rounded-s-none
    [&_[data-slot=input-addon]+[data-slot=datefield]]:[&_[data-slot=input]]:rounded-s-none
    [&_[data-slot=datefield]:has(+[data-slot=input-addon])]:[&_[data-slot=input]]:rounded-e-none
    [&_[data-slot=input]:has(+[data-slot=button])]:rounded-e-none
    [&_[data-slot=input]:has(+[data-slot=input-addon])]:rounded-e-none
    [&_[data-slot=datefield]]:grow
    [&_[data-slot=datefield]+[data-slot=input-addon]]:rounded-s-none [&_[data-slot=datefield]+[data-slot=input-addon]]:border-s-0
  `,
			{
				variants: {},
				defaultVariants: {},
			},
		);
		const inputWrapperVariants = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"cva"
		])(
			`
    flex items-center gap-1.5
    has-[:focus-visible]:ring-ring/30 
    has-[:focus-visible]:border-ring
    has-[:focus-visible]:outline-none 
    has-[:focus-visible]:ring-[3px]

    [&_[data-slot=datefield]]:grow 
    [&_[data-slot=input]]:data-focus-within:ring-transparent  
    [&_[data-slot=input]]:data-focus-within:ring-0 
    [&_[data-slot=input]]:data-focus-within:border-0 
    [&_[data-slot=input]]:flex 
    [&_[data-slot=input]]:w-full 
    [&_[data-slot=input]]:outline-none 
    [&_[data-slot=input]]:transition-colors 
    [&_[data-slot=input]]:text-foreground
    [&_[data-slot=input]]:placeholder:text-muted-foreground 
    [&_[data-slot=input]]:border-0 
    [&_[data-slot=input]]:bg-transparent 
    [&_[data-slot=input]]:p-0
    [&_[data-slot=input]]:shadow-none 
    [&_[data-slot=input]]:focus-visible:ring-0 
    [&_[data-slot=input]]:h-auto 
    [&_[data-slot=input]]:disabled:cursor-not-allowed
    [&_[data-slot=input]]:disabled:opacity-50    

    has-[[aria-invalid=true]]:border-destructive/60 
    has-[[aria-invalid=true]]:ring-destructive/10 
    dark:has-[[aria-invalid=true]]:border-destructive 
    dark:has-[[aria-invalid=true]]:ring-destructive/20    
  `,
			{
				variants: {
					variant: {
						sm: "gap-1.25 [&_svg:not([class*=size-])]:size-3.5",
						md: "gap-1.5 [&_svg:not([class*=size-])]:size-4",
						lg: "gap-1.5 [&_svg:not([class*=size-])]:size-4",
					},
				},
				defaultVariants: {
					variant: "md",
				},
			},
		);
		function Input({ className, type, variant, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"input",
				{
					"data-slot": "input",
					type: type,
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						inputVariants({
							variant,
						}),
						className,
					),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/input.tsx",
					lineNumber: 128,
					columnNumber: 3,
				},
				this,
			);
		}
		function InputAddon({ className, variant, mode, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"div",
				{
					"data-slot": "input-addon",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						inputAddonVariants({
							variant,
							mode,
						}),
						className,
					),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/input.tsx",
					lineNumber: 144,
					columnNumber: 3,
				},
				this,
			);
		}
		function InputGroup({ className, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"div",
				{
					"data-slot": "input-group",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(inputGroupVariants(), className),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/input.tsx",
					lineNumber: 157,
					columnNumber: 3,
				},
				this,
			);
		}
		function InputWrapper({ className, variant, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"div",
				{
					"data-slot": "input-wrapper",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						inputVariants({
							variant,
						}),
						inputWrapperVariants({
							variant,
						}),
						className,
					),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/input.tsx",
					lineNumber: 171,
					columnNumber: 3,
				},
				this,
			);
		}
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
	"[project]/apps/platform/src/components/ui/label.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["Label", () => Label]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/radix-ui/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript) <export * as Label>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)",
			);
		("use client");
		const labelVariants = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"cva"
		])(
			"text-sm leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
			{
				variants: {
					variant: {
						primary: "font-medium",
						secondary: "font-normal",
					},
				},
				defaultVariants: {
					variant: "primary",
				},
			},
		);
		function Label({ className, variant, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__[
					"Label"
				].Root,
				{
					"data-slot": "label",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						labelVariants({
							variant,
						}),
						className,
					),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/label.tsx",
					lineNumber: 30,
					columnNumber: 3,
				},
				this,
			);
		}
	},
	"[project]/apps/platform/src/components/ui/select.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"Select",
			() => Select,
			"SelectContent",
			() => SelectContent,
			"SelectGroup",
			() => SelectGroup,
			"SelectIndicator",
			() => SelectIndicator,
			"SelectItem",
			() => SelectItem,
			"SelectLabel",
			() => SelectLabel,
			"SelectScrollDownButton",
			() => SelectScrollDownButton,
			"SelectScrollUpButton",
			() => SelectScrollUpButton,
			"SelectSeparator",
			() => SelectSeparator,
			"SelectTrigger",
			() => SelectTrigger,
			"SelectValue",
			() => SelectValue,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript) <export * as Select>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)",
			);
		("use client");
		// Create a Context for `indicatorPosition` and `indicator` control
		const SelectContext =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"createContext"
			]({
				indicatorPosition: "left",
				indicator: null,
				indicatorVisibility: true,
			});
		// Root Component
		const Select = ({
			indicatorPosition = "left",
			indicatorVisibility = true,
			indicator,
			...props
		}) => {
			const contextValue =
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"useMemo"
				](
					() => ({
						indicatorPosition,
						indicatorVisibility,
						indicator,
					}),
					[indicatorPosition, indicatorVisibility, indicator],
				);
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				SelectContext.Provider,
				{
					value: contextValue,
					children: /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"jsxDEV"
					])(
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
							"Select"
						].Root,
						{
							...props,
						},
						void 0,
						false,
						{
							fileName: "[project]/apps/platform/src/components/ui/select.tsx",
							lineNumber: 35,
							columnNumber: 4,
						},
						("TURBOPACK compile-time value", void 0),
					),
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/select.tsx",
					lineNumber: 34,
					columnNumber: 3,
				},
				("TURBOPACK compile-time value", void 0),
			);
		};
		function SelectGroup({ ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
					"Select"
				].Group,
				{
					"data-slot": "select-group",
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/select.tsx",
					lineNumber: 43,
					columnNumber: 9,
				},
				this,
			);
		}
		function SelectValue({ ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
					"Select"
				].Value,
				{
					"data-slot": "select-value",
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/select.tsx",
					lineNumber: 49,
					columnNumber: 9,
				},
				this,
			);
		}
		// Define size variants for SelectTrigger
		const selectTriggerVariants = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"cva"
		])(
			`
    flex bg-background w-full items-center justify-between outline-none border border-input shadow-xs shadow-black/5 transition-shadow 
    text-foreground data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] 
    focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 
    aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/20
    [[data-invalid=true]_&]:border-destructive/60 [[data-invalid=true]_&]:ring-destructive/10  dark:[[data-invalid=true]_&]:border-destructive dark:[[data-invalid=true]_&]:ring-destructive/20
  `,
			{
				variants: {
					size: {
						sm: "h-7 px-2.5 text-xs gap-1 rounded-md",
						md: "h-8.5 px-3 text-[0.8125rem] leading-(--text-sm--line-height) gap-1 rounded-md",
						lg: "h-10 px-4 text-sm gap-1.5 rounded-md",
					},
				},
				defaultVariants: {
					size: "md",
				},
			},
		);
		function SelectTrigger({ className, children, size, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
					"Select"
				].Trigger,
				{
					"data-slot": "select-trigger",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						selectTriggerVariants({
							size,
						}),
						className,
					),
					...props,
					children: [
						children,
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
								"Select"
							].Icon,
							{
								asChild: true,
								children: /*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
										"ChevronDown"
									],
									{
										className: "h-4 w-4 opacity-60 -me-0.5",
									},
									void 0,
									false,
									{
										fileName:
											"[project]/apps/platform/src/components/ui/select.tsx",
										lineNumber: 93,
										columnNumber: 5,
									},
									this,
								),
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/components/ui/select.tsx",
								lineNumber: 92,
								columnNumber: 4,
							},
							this,
						),
					],
				},
				void 0,
				true,
				{
					fileName: "[project]/apps/platform/src/components/ui/select.tsx",
					lineNumber: 86,
					columnNumber: 3,
				},
				this,
			);
		}
		function SelectScrollUpButton({ className, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
					"Select"
				].ScrollUpButton,
				{
					"data-slot": "select-scroll-up-button",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])("flex cursor-default items-center justify-center py-1", className),
					...props,
					children: /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"jsxDEV"
					])(
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__[
							"ChevronUp"
						],
						{
							className: "h-4 w-4",
						},
						void 0,
						false,
						{
							fileName: "[project]/apps/platform/src/components/ui/select.tsx",
							lineNumber: 112,
							columnNumber: 4,
						},
						this,
					),
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/select.tsx",
					lineNumber: 104,
					columnNumber: 3,
				},
				this,
			);
		}
		function SelectScrollDownButton({ className, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
					"Select"
				].ScrollDownButton,
				{
					"data-slot": "select-scroll-down-button",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])("flex cursor-default items-center justify-center py-1", className),
					...props,
					children: /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"jsxDEV"
					])(
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
							"ChevronDown"
						],
						{
							className: "h-4 w-4",
						},
						void 0,
						false,
						{
							fileName: "[project]/apps/platform/src/components/ui/select.tsx",
							lineNumber: 130,
							columnNumber: 4,
						},
						this,
					),
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/select.tsx",
					lineNumber: 122,
					columnNumber: 3,
				},
				this,
			);
		}
		function SelectContent({
			className,
			children,
			position = "popper",
			...props
		}) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
					"Select"
				].Portal,
				{
					children: /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"jsxDEV"
					])(
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
							"Select"
						].Content,
						{
							"data-slot": "select-content",
							className: (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"cn"
							])(
								"relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover shadow-md shadow-black/5 text-secondary-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
								position === "popper" &&
									"data-[side=bottom]:translate-y-1.5 data-[side=left]:-translate-x-1.5 data-[side=right]:translate-x-1.5 data-[side=top]:-translate-y-1.5",
								className,
							),
							position: position,
							...props,
							children: [
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									SelectScrollUpButton,
									{},
									void 0,
									false,
									{
										fileName:
											"[project]/apps/platform/src/components/ui/select.tsx",
										lineNumber: 154,
										columnNumber: 5,
									},
									this,
								),
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
										"Select"
									].Viewport,
									{
										className: (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											"cn"
										])(
											"p-1.5",
											position === "popper" &&
												"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
										),
										children: children,
									},
									void 0,
									false,
									{
										fileName:
											"[project]/apps/platform/src/components/ui/select.tsx",
										lineNumber: 155,
										columnNumber: 5,
									},
									this,
								),
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									SelectScrollDownButton,
									{},
									void 0,
									false,
									{
										fileName:
											"[project]/apps/platform/src/components/ui/select.tsx",
										lineNumber: 164,
										columnNumber: 5,
									},
									this,
								),
							],
						},
						void 0,
						true,
						{
							fileName: "[project]/apps/platform/src/components/ui/select.tsx",
							lineNumber: 143,
							columnNumber: 4,
						},
						this,
					),
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/select.tsx",
					lineNumber: 142,
					columnNumber: 3,
				},
				this,
			);
		}
		function SelectLabel({ className, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
					"Select"
				].Label,
				{
					"data-slot": "select-label",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						"py-1.5 ps-8 pe-2 text-xs text-muted-foreground font-medium",
						className,
					),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/select.tsx",
					lineNumber: 175,
					columnNumber: 3,
				},
				this,
			);
		}
		function SelectItem({ className, children, ...props }) {
			const { indicatorPosition, indicatorVisibility, indicator } =
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"useContext"
				](SelectContext);
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
					"Select"
				].Item,
				{
					"data-slot": "select-item",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						"relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 text-sm outline-hidden text-foreground hover:bg-accent focus:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50",
						indicatorPosition === "left" ? "ps-8 pe-2" : "pe-8 ps-2",
						className,
					),
					...props,
					children: [
						indicatorVisibility &&
							(indicator &&
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"isValidElement"
							])(indicator)
								? indicator
								: /*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										"span",
										{
											className: (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"cn"
											])(
												"absolute flex h-3.5 w-3.5 items-center justify-center",
												indicatorPosition === "left" ? "start-2" : "end-2",
											),
											children: /*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
													"Select"
												].ItemIndicator,
												{
													children: /*#__PURE__*/ (0,
													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
														"jsxDEV"
													])(
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__[
															"Check"
														],
														{
															className: "h-4 w-4 text-primary",
														},
														void 0,
														false,
														{
															fileName:
																"[project]/apps/platform/src/components/ui/select.tsx",
															lineNumber: 215,
															columnNumber: 8,
														},
														this,
													),
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/components/ui/select.tsx",
													lineNumber: 214,
													columnNumber: 7,
												},
												this,
											),
										},
										void 0,
										false,
										{
											fileName:
												"[project]/apps/platform/src/components/ui/select.tsx",
											lineNumber: 208,
											columnNumber: 6,
										},
										this,
									)),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
								"Select"
							].ItemText,
							{
								children: children,
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/components/ui/select.tsx",
								lineNumber: 219,
								columnNumber: 4,
							},
							this,
						),
					],
				},
				void 0,
				true,
				{
					fileName: "[project]/apps/platform/src/components/ui/select.tsx",
					lineNumber: 195,
					columnNumber: 3,
				},
				this,
			);
		}
		function SelectIndicator({ children, className, ...props }) {
			const { indicatorPosition } =
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"useContext"
				](SelectContext);
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"span",
				{
					"data-slot": "select-indicator",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						"absolute flex top-1/2 -translate-y-1/2 items-center justify-center",
						indicatorPosition === "left" ? "start-2" : "end-2",
						className,
					),
					...props,
					children: /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"jsxDEV"
					])(
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
							"Select"
						].ItemIndicator,
						{
							children: children,
						},
						void 0,
						false,
						{
							fileName: "[project]/apps/platform/src/components/ui/select.tsx",
							lineNumber: 241,
							columnNumber: 4,
						},
						this,
					),
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/select.tsx",
					lineNumber: 232,
					columnNumber: 3,
				},
				this,
			);
		}
		function SelectSeparator({ className, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__[
					"Select"
				].Separator,
				{
					"data-slot": "select-separator",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])("-mx-1.5 my-1.5 h-px bg-border", className),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/select.tsx",
					lineNumber: 251,
					columnNumber: 3,
				},
				this,
			);
		}
	},
	"[project]/apps/platform/src/components/ui/switch.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["Switch", () => Switch]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)",
			);
		("use client");
		const Switch =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"Root"
					],
					{
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
							className,
						),
						...props,
						ref: ref,
						children: /*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"Thumb"
							],
							{
								className: (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"cn"
								])(
									"pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
								),
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/components/ui/switch.tsx",
								lineNumber: 20,
								columnNumber: 3,
							},
							("TURBOPACK compile-time value", void 0),
						),
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/switch.tsx",
						lineNumber: 12,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		Switch.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Root"
			].displayName;
	},
	"[project]/apps/platform/src/components/ui/textarea.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["Textarea", () => Textarea]);
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
		const Textarea =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) => {
				return /*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					"textarea",
					{
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
							className,
						),
						ref: ref,
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/textarea.tsx",
						lineNumber: 10,
						columnNumber: 3,
					},
					("TURBOPACK compile-time value", void 0),
				);
			});
		Textarea.displayName = "Textarea";
	},
	"[project]/apps/platform/src/server/api/internal/data:c44bcd [app-ssr] (ecmascript) <text/javascript>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["createCategory", () => $$RSC_SERVER_ACTION_2]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)",
			);
		/* __next_internal_action_entry_do_not_use__ [{"402736aa2cca5f1b848e258b99fd066387bbd5d495":"createCategory"},"apps/platform/src/server/api/internal/categories.ts",""] */ ("use turbopack no side effects");
		const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"createServerReference"
		])(
			"402736aa2cca5f1b848e258b99fd066387bbd5d495",
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"callServer"
			],
			void 0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"findSourceMapURL"
			],
			"createCategory",
		);
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2F0ZWdvcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICBjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcbiAgXG4gIGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICB0ZW5hbnRJZDogdGVuYW50LmlkLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghc3RhZmZSZWNvcmQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICB0ZW5hbnRJZDogdGVuYW50LmlkLFxuICAgIHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IHRlbmFudElkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcGFyZW50OiB0cnVlLFxuICAgICAgX2NvdW50OiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHByb2R1Y3RzOiB0cnVlLFxuICAgICAgICAgIHN1YkNhdGVnb3JpZXM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gIH0pO1xuXG4gIHJldHVybiBjYXRlZ29yaWVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcnkoaWQ6IHN0cmluZykge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcGFyZW50OiB0cnVlLFxuICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgIHRha2U6IDEwLFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICAgIH0sXG4gICAgICBfY291bnQ6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHRydWUsXG4gICAgICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFjYXRlZ29yeSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYXRlZ29yeTtcbn1cblxuaW50ZXJmYWNlIENhdGVnb3J5SW5wdXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHBhcmVudElkPzogc3RyaW5nO1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG4gIHNlb1RpdGxlPzogc3RyaW5nO1xuICBzZW9EZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGlucHV0OiBDYXRlZ29yeUlucHV0KSB7XG4gIGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG4gIC8vIENoZWNrIGlmIHNsdWcgYWxyZWFkeSBleGlzdHMgZm9yIHRoaXMgdGVuYW50XG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgc2x1ZzogaW5wdXQuc2x1ZyxcbiAgICAgIHRlbmFudElkLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IHdpdGggdGhpcyBzbHVnIGFscmVhZHkgZXhpc3RzXCIpO1xuICB9XG5cbiAgLy8gSWYgcGFyZW50SWQgcHJvdmlkZWQsIHZlcmlmeSBpdCBiZWxvbmdzIHRvIHRlbmFudFxuICBpZiAoaW5wdXQucGFyZW50SWQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBhd2FpdCBkYi5jYXRlZ29yeS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlucHV0LnBhcmVudElkLCB0ZW5hbnRJZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmVudCBjYXRlZ29yeSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGRiLmNhdGVnb3J5LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgLi4uaW5wdXQsXG4gICAgICB0ZW5hbnRJZCxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gY2F0ZWdvcnk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeShpZDogc3RyaW5nLCBpbnB1dDogUGFydGlhbDxDYXRlZ29yeUlucHV0Pikge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICAvLyBWZXJpZnkgY2F0ZWdvcnkgYmVsb25ncyB0byB0ZW5hbnRcbiAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5jYXRlZ29yeS5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuICB9KTtcblxuICBpZiAoIWNhdGVnb3J5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2F0ZWdvcnkgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG4gIH1cblxuICAvLyBJZiBzbHVnIGlzIGJlaW5nIGNoYW5nZWQsIGNoZWNrIGZvciBkdXBsaWNhdGVzXG4gIGlmIChpbnB1dC5zbHVnICYmIGlucHV0LnNsdWcgIT09IGNhdGVnb3J5LnNsdWcpIHtcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBzbHVnOiBpbnB1dC5zbHVnLFxuICAgICAgICB0ZW5hbnRJZCxcbiAgICAgICAgaWQ6IHsgbm90OiBpZCB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChleGlzdGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2F0ZWdvcnkgd2l0aCB0aGlzIHNsdWcgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgcGFyZW50SWQgaXMgYmVpbmcgY2hhbmdlZCwgdmVyaWZ5IGl0IGJlbG9uZ3MgdG8gdGVuYW50XG4gIGlmIChpbnB1dC5wYXJlbnRJZCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZDogaW5wdXQucGFyZW50SWQsIHRlbmFudElkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGNhdGVnb3J5IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgIGlmIChpbnB1dC5wYXJlbnRJZCA9PT0gaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IGNhbm5vdCBiZSBpdHMgb3duIHBhcmVudFwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIuY2F0ZWdvcnkudXBkYXRlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICAgIGRhdGE6IGlucHV0LFxuICB9KTtcblxuICByZXR1cm4gdXBkYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5KGlkOiBzdHJpbmcpIHtcbiAgY29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cbiAgLy8gVmVyaWZ5IGNhdGVnb3J5IGJlbG9uZ3MgdG8gdGVuYW50XG4gIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBfY291bnQ6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHRydWUsXG4gICAgICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFjYXRlZ29yeSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuICB9XG5cbiAgaWYgKGNhdGVnb3J5Ll9jb3VudC5wcm9kdWN0cyA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIkNhbm5vdCBkZWxldGUgY2F0ZWdvcnkgd2l0aCBwcm9kdWN0cy4gUGxlYXNlIHJlbW92ZSBvciByZWFzc2lnbiBwcm9kdWN0cyBmaXJzdC5cIlxuICAgICk7XG4gIH1cblxuICBpZiAoY2F0ZWdvcnkuX2NvdW50LnN1YkNhdGVnb3JpZXMgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJDYW5ub3QgZGVsZXRlIGNhdGVnb3J5IHdpdGggc3ViY2F0ZWdvcmllcy4gUGxlYXNlIGRlbGV0ZSBvciByZWFzc2lnbiBzdWJjYXRlZ29yaWVzIGZpcnN0LlwiXG4gICAgKTtcbiAgfVxuXG4gIGF3YWl0IGRiLmNhdGVnb3J5LmRlbGV0ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzVEEwRnNCLDJMQUFBIn0=
	},
	"[project]/apps/platform/src/server/api/internal/data:b38310 [app-ssr] (ecmascript) <text/javascript>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["updateCategory", () => $$RSC_SERVER_ACTION_3]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)",
			);
		/* __next_internal_action_entry_do_not_use__ [{"602bf08d61676fa6546f75e603269ea8ed9e76528c":"updateCategory"},"apps/platform/src/server/api/internal/categories.ts",""] */ ("use turbopack no side effects");
		const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"createServerReference"
		])(
			"602bf08d61676fa6546f75e603269ea8ed9e76528c",
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"callServer"
			],
			void 0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"findSourceMapURL"
			],
			"updateCategory",
		);
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2F0ZWdvcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICBjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcbiAgXG4gIGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICB0ZW5hbnRJZDogdGVuYW50LmlkLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghc3RhZmZSZWNvcmQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICB0ZW5hbnRJZDogdGVuYW50LmlkLFxuICAgIHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IHRlbmFudElkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcGFyZW50OiB0cnVlLFxuICAgICAgX2NvdW50OiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHByb2R1Y3RzOiB0cnVlLFxuICAgICAgICAgIHN1YkNhdGVnb3JpZXM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gIH0pO1xuXG4gIHJldHVybiBjYXRlZ29yaWVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcnkoaWQ6IHN0cmluZykge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcGFyZW50OiB0cnVlLFxuICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgIHRha2U6IDEwLFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICAgIH0sXG4gICAgICBfY291bnQ6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHRydWUsXG4gICAgICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFjYXRlZ29yeSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYXRlZ29yeTtcbn1cblxuaW50ZXJmYWNlIENhdGVnb3J5SW5wdXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHBhcmVudElkPzogc3RyaW5nO1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG4gIHNlb1RpdGxlPzogc3RyaW5nO1xuICBzZW9EZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGlucHV0OiBDYXRlZ29yeUlucHV0KSB7XG4gIGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG4gIC8vIENoZWNrIGlmIHNsdWcgYWxyZWFkeSBleGlzdHMgZm9yIHRoaXMgdGVuYW50XG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgc2x1ZzogaW5wdXQuc2x1ZyxcbiAgICAgIHRlbmFudElkLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IHdpdGggdGhpcyBzbHVnIGFscmVhZHkgZXhpc3RzXCIpO1xuICB9XG5cbiAgLy8gSWYgcGFyZW50SWQgcHJvdmlkZWQsIHZlcmlmeSBpdCBiZWxvbmdzIHRvIHRlbmFudFxuICBpZiAoaW5wdXQucGFyZW50SWQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBhd2FpdCBkYi5jYXRlZ29yeS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlucHV0LnBhcmVudElkLCB0ZW5hbnRJZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmVudCBjYXRlZ29yeSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGRiLmNhdGVnb3J5LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgLi4uaW5wdXQsXG4gICAgICB0ZW5hbnRJZCxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gY2F0ZWdvcnk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeShpZDogc3RyaW5nLCBpbnB1dDogUGFydGlhbDxDYXRlZ29yeUlucHV0Pikge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICAvLyBWZXJpZnkgY2F0ZWdvcnkgYmVsb25ncyB0byB0ZW5hbnRcbiAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5jYXRlZ29yeS5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuICB9KTtcblxuICBpZiAoIWNhdGVnb3J5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2F0ZWdvcnkgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG4gIH1cblxuICAvLyBJZiBzbHVnIGlzIGJlaW5nIGNoYW5nZWQsIGNoZWNrIGZvciBkdXBsaWNhdGVzXG4gIGlmIChpbnB1dC5zbHVnICYmIGlucHV0LnNsdWcgIT09IGNhdGVnb3J5LnNsdWcpIHtcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBzbHVnOiBpbnB1dC5zbHVnLFxuICAgICAgICB0ZW5hbnRJZCxcbiAgICAgICAgaWQ6IHsgbm90OiBpZCB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChleGlzdGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2F0ZWdvcnkgd2l0aCB0aGlzIHNsdWcgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgcGFyZW50SWQgaXMgYmVpbmcgY2hhbmdlZCwgdmVyaWZ5IGl0IGJlbG9uZ3MgdG8gdGVuYW50XG4gIGlmIChpbnB1dC5wYXJlbnRJZCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZDogaW5wdXQucGFyZW50SWQsIHRlbmFudElkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGNhdGVnb3J5IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgIGlmIChpbnB1dC5wYXJlbnRJZCA9PT0gaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IGNhbm5vdCBiZSBpdHMgb3duIHBhcmVudFwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIuY2F0ZWdvcnkudXBkYXRlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICAgIGRhdGE6IGlucHV0LFxuICB9KTtcblxuICByZXR1cm4gdXBkYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5KGlkOiBzdHJpbmcpIHtcbiAgY29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cbiAgLy8gVmVyaWZ5IGNhdGVnb3J5IGJlbG9uZ3MgdG8gdGVuYW50XG4gIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBfY291bnQ6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHRydWUsXG4gICAgICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFjYXRlZ29yeSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuICB9XG5cbiAgaWYgKGNhdGVnb3J5Ll9jb3VudC5wcm9kdWN0cyA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIkNhbm5vdCBkZWxldGUgY2F0ZWdvcnkgd2l0aCBwcm9kdWN0cy4gUGxlYXNlIHJlbW92ZSBvciByZWFzc2lnbiBwcm9kdWN0cyBmaXJzdC5cIlxuICAgICk7XG4gIH1cblxuICBpZiAoY2F0ZWdvcnkuX2NvdW50LnN1YkNhdGVnb3JpZXMgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJDYW5ub3QgZGVsZXRlIGNhdGVnb3J5IHdpdGggc3ViY2F0ZWdvcmllcy4gUGxlYXNlIGRlbGV0ZSBvciByZWFzc2lnbiBzdWJjYXRlZ29yaWVzIGZpcnN0LlwiXG4gICAgKTtcbiAgfVxuXG4gIGF3YWl0IGRiLmNhdGVnb3J5LmRlbGV0ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzVEE4SHNCLDJMQUFBIn0=
	},
	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"CategoryFormDialog",
			() => CategoryFormDialog,
			"DeleteCategoryDialog",
			() => DeleteCategoryDialog,
			"ViewCategoryDialog",
			() => ViewCategoryDialog,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderTree$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/folder-tree.js [app-ssr] (ecmascript) <export default as FolderTree>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>",
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
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/dialog.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/input.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/label.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/select.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/switch.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/textarea.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$c44bcd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/server/api/internal/data:c44bcd [app-ssr] (ecmascript) <text/javascript>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$b38310__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/server/api/internal/data:b38310 [app-ssr] (ecmascript) <text/javascript>",
			);
		("use client");
		function ViewCategoryDialog({ open, onOpenChange, category }) {
			if (!category) return null;
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"Dialog"
				],
				{
					open: open,
					onOpenChange: onOpenChange,
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
													className: "flex items-center gap-2",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderTree$3e$__[
																"FolderTree"
															],
															{
																className: "h-5 w-5",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 68,
																columnNumber: 7,
															},
															this,
														),
														category.name,
													],
												},
												void 0,
												true,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 67,
													columnNumber: 6,
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
													children: "Category details and hierarchy",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 71,
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
											"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
										lineNumber: 66,
										columnNumber: 5,
									},
									this,
								),
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
																className: "space-y-2",
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"p",
																		{
																			className:
																				"text-sm font-medium text-muted-foreground",
																			children: "Category Name",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 77,
																			columnNumber: 8,
																		},
																		this,
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"p",
																		{
																			className: "text-lg font-medium",
																			children: category.name,
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 80,
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
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 76,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"div",
															{
																className: "space-y-2",
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"p",
																		{
																			className:
																				"text-sm font-medium text-muted-foreground",
																			children: "Slug",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 83,
																			columnNumber: 8,
																		},
																		this,
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"p",
																		{
																			className: "text-sm font-mono",
																			children: category.slug,
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 84,
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
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 82,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"div",
															{
																className: "space-y-2",
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"p",
																		{
																			className:
																				"text-sm font-medium text-muted-foreground",
																			children: "Parent Category",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 87,
																			columnNumber: 8,
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
																				category.parent?.slug || "None (Root)",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 90,
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
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 86,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"div",
															{
																className: "space-y-2",
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"p",
																		{
																			className:
																				"text-sm font-medium text-muted-foreground",
																			children: "Status",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 93,
																			columnNumber: 8,
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
																			children: category.status,
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 96,
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
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 92,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 75,
													columnNumber: 6,
												},
												this,
											),
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
																className: "p-4 border rounded-lg bg-muted/30",
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"p",
																		{
																			className:
																				"text-sm text-muted-foreground mb-1",
																			children: "Products",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 102,
																			columnNumber: 8,
																		},
																		this,
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"p",
																		{
																			className: "text-3xl font-bold",
																			children: category.products,
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 103,
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
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 101,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"div",
															{
																className: "p-4 border rounded-lg bg-muted/30",
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"p",
																		{
																			className:
																				"text-sm text-muted-foreground mb-1",
																			children: "Subcategories",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 106,
																			columnNumber: 8,
																		},
																		this,
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"p",
																		{
																			className: "text-3xl font-bold",
																			children: category.subcategories,
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 109,
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
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 105,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 100,
													columnNumber: 6,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "space-y-2",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"p",
															{
																className:
																	"text-sm font-medium text-muted-foreground",
																children: "Description",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 114,
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
																children: [
																	"Browse our wide selection of ",
																	category.name.toLowerCase(),
																	" with the best quality and prices.",
																],
															},
															void 0,
															true,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 117,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 113,
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
											"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
										lineNumber: 74,
										columnNumber: 5,
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
										children: /*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											"jsxDEV"
										])(
											__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"Button"
											],
											{
												variant: "outline",
												onClick: () => onOpenChange(false),
												children: "Close",
											},
											void 0,
											false,
											{
												fileName:
													"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
												lineNumber: 125,
												columnNumber: 6,
											},
											this,
										),
									},
									void 0,
									false,
									{
										fileName:
											"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
										lineNumber: 124,
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
								"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
							lineNumber: 65,
							columnNumber: 4,
						},
						this,
					),
				},
				void 0,
				false,
				{
					fileName:
						"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
					lineNumber: 64,
					columnNumber: 3,
				},
				this,
			);
		}
		function CategoryFormDialog({
			open,
			onOpenChange,
			category,
			mode,
			categories = [],
			onSuccess,
		}) {
			const [isSubmitting, setIsSubmitting] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(false);
			const [name, setName] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])("");
			const [slug, setSlug] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])("");
			const [description, setDescription] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])("");
			const [parentId, setParentId] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(null);
			const [isActive, setIsActive] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(true);
			// Reset form when dialog opens or category changes
			(0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useEffect"
			])(() => {
				if (open) {
					if (mode === "edit" && category) {
						setName(category.name);
						setSlug(category.slug);
						setDescription("");
						setParentId(category.parentId ?? null);
						setIsActive(category.status === "Active");
					} else {
						setName("");
						setSlug("");
						setDescription("");
						setParentId(null);
						setIsActive(true);
					}
				}
			}, [open, mode, category]);
			// Auto-generate slug from name
			const handleNameChange = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useCallback"
			])(
				(value) => {
					setName(value);
					if (mode === "create") {
						const generatedSlug = value
							.toLowerCase()
							.replace(/[^a-z0-9]+/g, "-")
							.replace(/^-|-$/g, "");
						setSlug(generatedSlug);
					}
				},
				[mode],
			);
			const handleSubmit = async (e) => {
				e.preventDefault();
				if (!name.trim() || !slug.trim()) {
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].error("Name and slug are required");
					return;
				}
				setIsSubmitting(true);
				try {
					const data = {
						name: name.trim(),
						slug: slug.trim(),
						description: description.trim() || undefined,
						parentId: parentId || undefined,
						isActive,
					};
					if (mode === "create") {
						await (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$c44bcd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__[
							"createCategory"
						])(data);
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"toast"
						].success("Category created successfully");
					} else if (category) {
						await (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$b38310__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__[
							"updateCategory"
						])(category.id, data);
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"toast"
						].success("Category updated successfully");
					}
					onOpenChange(false);
					onSuccess?.();
				} catch (error) {
					console.error("Failed to save category:", error);
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].error(
						error instanceof Error ? error.message : "Failed to save category",
					);
				} finally {
					setIsSubmitting(false);
				}
			};
			// Filter out current category and its children from parent options
			const availableParents = categories.filter(
				(c) => c.id !== category?.id && c.parentId !== category?.id,
			);
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"Dialog"
				],
				{
					open: open,
					onOpenChange: onOpenChange,
					children: /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"jsxDEV"
					])(
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"DialogContent"
						],
						{
							className: "max-w-2xl max-h-[90vh] overflow-y-auto",
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
													children:
														mode === "create"
															? "Create New Category"
															: "Edit Category",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 236,
													columnNumber: 6,
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
														mode === "create"
															? "Add a new category to organize your products"
															: "Update category information",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 239,
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
											"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
										lineNumber: 235,
										columnNumber: 5,
									},
									this,
								),
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									"form",
									{
										onSubmit: handleSubmit,
										className: "space-y-4",
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "space-y-2",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Label"
															],
															{
																htmlFor: "categoryName",
																children: "Category Name *",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 248,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Input"
															],
															{
																id: "categoryName",
																value: name,
																onChange: (e) =>
																	handleNameChange(e.target.value),
																placeholder: "Electronics",
																required: true,
																disabled: isSubmitting,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 249,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 247,
													columnNumber: 6,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "space-y-2",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Label"
															],
															{
																htmlFor: "slug",
																children: "Slug *",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 260,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Input"
															],
															{
																id: "slug",
																value: slug,
																onChange: (e) => setSlug(e.target.value),
																placeholder: "electronics",
																className: "font-mono",
																required: true,
																disabled: isSubmitting,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 261,
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
																className: "text-xs text-muted-foreground",
																children:
																	"URL-friendly version of the name (e.g., electronics, home-garden)",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 270,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 259,
													columnNumber: 6,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "space-y-2",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Label"
															],
															{
																htmlFor: "parentCategory",
																children: "Parent Category",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 276,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Select"
															],
															{
																value: parentId ?? "none",
																onValueChange: (value) =>
																	setParentId(value === "none" ? null : value),
																disabled: isSubmitting,
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"SelectTrigger"
																		],
																		{
																			id: "parentCategory",
																			children: /*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"SelectValue"
																				],
																				{
																					placeholder: "None (Root Category)",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																					lineNumber: 285,
																					columnNumber: 9,
																				},
																				this,
																			),
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 284,
																			columnNumber: 8,
																		},
																		this,
																	),
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"SelectContent"
																		],
																		{
																			children: [
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"jsxDEV"
																				])(
																					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"SelectItem"
																					],
																					{
																						value: "none",
																						children: "None (Root Category)",
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																						lineNumber: 288,
																						columnNumber: 9,
																					},
																					this,
																				),
																				availableParents.map((cat) =>
																					/*#__PURE__*/ (0,
																					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"jsxDEV"
																					])(
																						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																							"SelectItem"
																						],
																						{
																							value: cat.id,
																							children: cat.name,
																						},
																						cat.id,
																						false,
																						{
																							fileName:
																								"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																							lineNumber: 290,
																							columnNumber: 10,
																						},
																						this,
																					),
																				),
																			],
																		},
																		void 0,
																		true,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 287,
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
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 277,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 275,
													columnNumber: 6,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "space-y-2",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Label"
															],
															{
																htmlFor: "description",
																children: "Description",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 299,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Textarea"
															],
															{
																id: "description",
																value: description,
																onChange: (e) => setDescription(e.target.value),
																placeholder:
																	"Category description for SEO and display...",
																rows: 3,
																disabled: isSubmitting,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 300,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 298,
													columnNumber: 6,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "space-y-2",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Label"
															],
															{
																children: "Category Icon",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 311,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"div",
															{
																className: "flex items-center gap-4",
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		"div",
																		{
																			className:
																				"w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors",
																			children: /*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__[
																					"Upload"
																				],
																				{
																					className:
																						"h-6 w-6 text-muted-foreground",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																					lineNumber: 314,
																					columnNumber: 9,
																				},
																				this,
																			),
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 313,
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
																			className: "flex-1",
																			children: /*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				"p",
																				{
																					className:
																						"text-sm text-muted-foreground",
																					children:
																						"Upload a 512x512px icon for this category",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																					lineNumber: 317,
																					columnNumber: 9,
																				},
																				this,
																			),
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 316,
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
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 312,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 310,
													columnNumber: 6,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "flex items-center justify-between",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"div",
															{
																className: "space-y-0.5",
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"Label"
																		],
																		{
																			htmlFor: "active",
																			children: "Active Status",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 326,
																			columnNumber: 8,
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
																			children: "Make this category visible",
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																			lineNumber: 327,
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
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 325,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"Switch"
															],
															{
																id: "active",
																checked: isActive,
																onCheckedChange: setIsActive,
																disabled: isSubmitting,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 331,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 324,
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
																type: "button",
																variant: "outline",
																onClick: () => onOpenChange(false),
																disabled: isSubmitting,
																children: "Cancel",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 340,
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
																type: "submit",
																disabled: isSubmitting,
																children: isSubmitting
																	? /*#__PURE__*/ (0,
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"jsxDEV"
																		])(
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"Fragment"
																			],
																			{
																				children: [
																					/*#__PURE__*/ (0,
																					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"jsxDEV"
																					])(
																						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
																							"Loader2"
																						],
																						{
																							className:
																								"h-4 w-4 animate-spin mr-2",
																						},
																						void 0,
																						false,
																						{
																							fileName:
																								"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																							lineNumber: 351,
																							columnNumber: 10,
																						},
																						this,
																					),
																					mode === "create"
																						? "Creating..."
																						: "Saving...",
																				],
																			},
																			void 0,
																			true,
																		)
																	: mode === "create"
																		? "Create Category"
																		: "Save Changes",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 348,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 339,
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
											"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
										lineNumber: 246,
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
								"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
							lineNumber: 234,
							columnNumber: 4,
						},
						this,
					),
				},
				void 0,
				false,
				{
					fileName:
						"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
					lineNumber: 233,
					columnNumber: 3,
				},
				this,
			);
		}
		function DeleteCategoryDialog({ open, onOpenChange, category, onConfirm }) {
			const handleDelete = () => {
				if (onConfirm) {
					onConfirm();
				} else {
					onOpenChange(false);
				}
			};
			if (!category) return null;
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"Dialog"
				],
				{
					open: open,
					onOpenChange: onOpenChange,
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
													children: "Delete Category",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 394,
													columnNumber: 6,
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
														"Are you sure you want to delete this category? All subcategories and product associations will be removed. This action cannot be undone.",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 395,
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
											"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
										lineNumber: 393,
										columnNumber: 5,
									},
									this,
								),
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									"div",
									{
										className: "p-4 border rounded-lg bg-muted/30 space-y-2",
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "flex justify-between text-sm",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"span",
															{
																className: "text-muted-foreground",
																children: "Category:",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 403,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"span",
															{
																className: "font-medium",
																children: category.name,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 404,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 402,
													columnNumber: 6,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "flex justify-between text-sm",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"span",
															{
																className: "text-muted-foreground",
																children: "Products:",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 407,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"span",
															{
																className: "font-medium",
																children: category.products,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 406,
													columnNumber: 6,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "flex justify-between text-sm",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"span",
															{
																className: "text-muted-foreground",
																children: "Subcategories:",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 411,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"span",
															{
																className: "font-medium",
																children: category.subcategories,
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
																lineNumber: 412,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 410,
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
											"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
										lineNumber: 401,
										columnNumber: 5,
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
													onClick: () => onOpenChange(false),
													children: "Cancel",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 417,
													columnNumber: 6,
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
													children: "Delete Category",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
													lineNumber: 420,
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
											"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
										lineNumber: 416,
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
								"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
							lineNumber: 392,
							columnNumber: 4,
						},
						this,
					),
				},
				void 0,
				false,
				{
					fileName:
						"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx",
					lineNumber: 391,
					columnNumber: 3,
				},
				this,
			);
		}
	},
	"[project]/apps/platform/src/server/api/internal/data:b95ac6 [app-ssr] (ecmascript) <text/javascript>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["getCategories", () => $$RSC_SERVER_ACTION_0]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)",
			);
		/* __next_internal_action_entry_do_not_use__ [{"00ec00b74fba015a9a0de0e428ab2e160170be9c0f":"getCategories"},"apps/platform/src/server/api/internal/categories.ts",""] */ ("use turbopack no side effects");
		const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"createServerReference"
		])(
			"00ec00b74fba015a9a0de0e428ab2e160170be9c0f",
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"callServer"
			],
			void 0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"findSourceMapURL"
			],
			"getCategories",
		);
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2F0ZWdvcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICBjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcbiAgXG4gIGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICB0ZW5hbnRJZDogdGVuYW50LmlkLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghc3RhZmZSZWNvcmQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICB0ZW5hbnRJZDogdGVuYW50LmlkLFxuICAgIHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IHRlbmFudElkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcGFyZW50OiB0cnVlLFxuICAgICAgX2NvdW50OiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHByb2R1Y3RzOiB0cnVlLFxuICAgICAgICAgIHN1YkNhdGVnb3JpZXM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gIH0pO1xuXG4gIHJldHVybiBjYXRlZ29yaWVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcnkoaWQ6IHN0cmluZykge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcGFyZW50OiB0cnVlLFxuICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgIHRha2U6IDEwLFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICAgIH0sXG4gICAgICBfY291bnQ6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHRydWUsXG4gICAgICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFjYXRlZ29yeSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYXRlZ29yeTtcbn1cblxuaW50ZXJmYWNlIENhdGVnb3J5SW5wdXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHBhcmVudElkPzogc3RyaW5nO1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG4gIHNlb1RpdGxlPzogc3RyaW5nO1xuICBzZW9EZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGlucHV0OiBDYXRlZ29yeUlucHV0KSB7XG4gIGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG4gIC8vIENoZWNrIGlmIHNsdWcgYWxyZWFkeSBleGlzdHMgZm9yIHRoaXMgdGVuYW50XG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgc2x1ZzogaW5wdXQuc2x1ZyxcbiAgICAgIHRlbmFudElkLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IHdpdGggdGhpcyBzbHVnIGFscmVhZHkgZXhpc3RzXCIpO1xuICB9XG5cbiAgLy8gSWYgcGFyZW50SWQgcHJvdmlkZWQsIHZlcmlmeSBpdCBiZWxvbmdzIHRvIHRlbmFudFxuICBpZiAoaW5wdXQucGFyZW50SWQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBhd2FpdCBkYi5jYXRlZ29yeS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlucHV0LnBhcmVudElkLCB0ZW5hbnRJZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmVudCBjYXRlZ29yeSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGRiLmNhdGVnb3J5LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgLi4uaW5wdXQsXG4gICAgICB0ZW5hbnRJZCxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gY2F0ZWdvcnk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeShpZDogc3RyaW5nLCBpbnB1dDogUGFydGlhbDxDYXRlZ29yeUlucHV0Pikge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICAvLyBWZXJpZnkgY2F0ZWdvcnkgYmVsb25ncyB0byB0ZW5hbnRcbiAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5jYXRlZ29yeS5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuICB9KTtcblxuICBpZiAoIWNhdGVnb3J5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2F0ZWdvcnkgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG4gIH1cblxuICAvLyBJZiBzbHVnIGlzIGJlaW5nIGNoYW5nZWQsIGNoZWNrIGZvciBkdXBsaWNhdGVzXG4gIGlmIChpbnB1dC5zbHVnICYmIGlucHV0LnNsdWcgIT09IGNhdGVnb3J5LnNsdWcpIHtcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBzbHVnOiBpbnB1dC5zbHVnLFxuICAgICAgICB0ZW5hbnRJZCxcbiAgICAgICAgaWQ6IHsgbm90OiBpZCB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChleGlzdGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2F0ZWdvcnkgd2l0aCB0aGlzIHNsdWcgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgcGFyZW50SWQgaXMgYmVpbmcgY2hhbmdlZCwgdmVyaWZ5IGl0IGJlbG9uZ3MgdG8gdGVuYW50XG4gIGlmIChpbnB1dC5wYXJlbnRJZCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZDogaW5wdXQucGFyZW50SWQsIHRlbmFudElkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGNhdGVnb3J5IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgIGlmIChpbnB1dC5wYXJlbnRJZCA9PT0gaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IGNhbm5vdCBiZSBpdHMgb3duIHBhcmVudFwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIuY2F0ZWdvcnkudXBkYXRlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICAgIGRhdGE6IGlucHV0LFxuICB9KTtcblxuICByZXR1cm4gdXBkYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5KGlkOiBzdHJpbmcpIHtcbiAgY29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cbiAgLy8gVmVyaWZ5IGNhdGVnb3J5IGJlbG9uZ3MgdG8gdGVuYW50XG4gIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBfY291bnQ6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHRydWUsXG4gICAgICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFjYXRlZ29yeSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuICB9XG5cbiAgaWYgKGNhdGVnb3J5Ll9jb3VudC5wcm9kdWN0cyA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIkNhbm5vdCBkZWxldGUgY2F0ZWdvcnkgd2l0aCBwcm9kdWN0cy4gUGxlYXNlIHJlbW92ZSBvciByZWFzc2lnbiBwcm9kdWN0cyBmaXJzdC5cIlxuICAgICk7XG4gIH1cblxuICBpZiAoY2F0ZWdvcnkuX2NvdW50LnN1YkNhdGVnb3JpZXMgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJDYW5ub3QgZGVsZXRlIGNhdGVnb3J5IHdpdGggc3ViY2F0ZWdvcmllcy4gUGxlYXNlIGRlbGV0ZSBvciByZWFzc2lnbiBzdWJjYXRlZ29yaWVzIGZpcnN0LlwiXG4gICAgKTtcbiAgfVxuXG4gIGF3YWl0IGRiLmNhdGVnb3J5LmRlbGV0ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxVEFnQ3NCLDBMQUFBIn0=
	},
	"[project]/apps/platform/src/server/api/internal/data:a4986b [app-ssr] (ecmascript) <text/javascript>",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["deleteCategory", () => $$RSC_SERVER_ACTION_4]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)",
			);
		/* __next_internal_action_entry_do_not_use__ [{"4080f766c55188f5d12f3d1cfcdf5eca7b5a37d707":"deleteCategory"},"apps/platform/src/server/api/internal/categories.ts",""] */ ("use turbopack no side effects");
		const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"createServerReference"
		])(
			"4080f766c55188f5d12f3d1cfcdf5eca7b5a37d707",
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"callServer"
			],
			void 0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"findSourceMapURL"
			],
			"deleteCategory",
		);
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2F0ZWdvcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICBjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcbiAgXG4gIGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICB0ZW5hbnRJZDogdGVuYW50LmlkLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghc3RhZmZSZWNvcmQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICB0ZW5hbnRJZDogdGVuYW50LmlkLFxuICAgIHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IHRlbmFudElkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcGFyZW50OiB0cnVlLFxuICAgICAgX2NvdW50OiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHByb2R1Y3RzOiB0cnVlLFxuICAgICAgICAgIHN1YkNhdGVnb3JpZXM6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gIH0pO1xuXG4gIHJldHVybiBjYXRlZ29yaWVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcnkoaWQ6IHN0cmluZykge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcGFyZW50OiB0cnVlLFxuICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgIHRha2U6IDEwLFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICAgIH0sXG4gICAgICBfY291bnQ6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHRydWUsXG4gICAgICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFjYXRlZ29yeSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYXRlZ29yeTtcbn1cblxuaW50ZXJmYWNlIENhdGVnb3J5SW5wdXQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHBhcmVudElkPzogc3RyaW5nO1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG4gIHNlb1RpdGxlPzogc3RyaW5nO1xuICBzZW9EZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGlucHV0OiBDYXRlZ29yeUlucHV0KSB7XG4gIGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG4gIC8vIENoZWNrIGlmIHNsdWcgYWxyZWFkeSBleGlzdHMgZm9yIHRoaXMgdGVuYW50XG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgc2x1ZzogaW5wdXQuc2x1ZyxcbiAgICAgIHRlbmFudElkLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IHdpdGggdGhpcyBzbHVnIGFscmVhZHkgZXhpc3RzXCIpO1xuICB9XG5cbiAgLy8gSWYgcGFyZW50SWQgcHJvdmlkZWQsIHZlcmlmeSBpdCBiZWxvbmdzIHRvIHRlbmFudFxuICBpZiAoaW5wdXQucGFyZW50SWQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBhd2FpdCBkYi5jYXRlZ29yeS5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGlucHV0LnBhcmVudElkLCB0ZW5hbnRJZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmVudCBjYXRlZ29yeSBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGRiLmNhdGVnb3J5LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgLi4uaW5wdXQsXG4gICAgICB0ZW5hbnRJZCxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gY2F0ZWdvcnk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeShpZDogc3RyaW5nLCBpbnB1dDogUGFydGlhbDxDYXRlZ29yeUlucHV0Pikge1xuICBjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuICAvLyBWZXJpZnkgY2F0ZWdvcnkgYmVsb25ncyB0byB0ZW5hbnRcbiAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5jYXRlZ29yeS5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuICB9KTtcblxuICBpZiAoIWNhdGVnb3J5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2F0ZWdvcnkgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG4gIH1cblxuICAvLyBJZiBzbHVnIGlzIGJlaW5nIGNoYW5nZWQsIGNoZWNrIGZvciBkdXBsaWNhdGVzXG4gIGlmIChpbnB1dC5zbHVnICYmIGlucHV0LnNsdWcgIT09IGNhdGVnb3J5LnNsdWcpIHtcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBzbHVnOiBpbnB1dC5zbHVnLFxuICAgICAgICB0ZW5hbnRJZCxcbiAgICAgICAgaWQ6IHsgbm90OiBpZCB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChleGlzdGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2F0ZWdvcnkgd2l0aCB0aGlzIHNsdWcgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgcGFyZW50SWQgaXMgYmVpbmcgY2hhbmdlZCwgdmVyaWZ5IGl0IGJlbG9uZ3MgdG8gdGVuYW50XG4gIGlmIChpbnB1dC5wYXJlbnRJZCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBpZDogaW5wdXQucGFyZW50SWQsIHRlbmFudElkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGNhdGVnb3J5IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgIGlmIChpbnB1dC5wYXJlbnRJZCA9PT0gaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IGNhbm5vdCBiZSBpdHMgb3duIHBhcmVudFwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIuY2F0ZWdvcnkudXBkYXRlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICAgIGRhdGE6IGlucHV0LFxuICB9KTtcblxuICByZXR1cm4gdXBkYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5KGlkOiBzdHJpbmcpIHtcbiAgY29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cbiAgLy8gVmVyaWZ5IGNhdGVnb3J5IGJlbG9uZ3MgdG8gdGVuYW50XG4gIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgZGIuY2F0ZWdvcnkuZmluZEZpcnN0KHtcbiAgICB3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBfY291bnQ6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgcHJvZHVjdHM6IHRydWUsXG4gICAgICAgICAgc3ViQ2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFjYXRlZ29yeSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhdGVnb3J5IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuICB9XG5cbiAgaWYgKGNhdGVnb3J5Ll9jb3VudC5wcm9kdWN0cyA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIkNhbm5vdCBkZWxldGUgY2F0ZWdvcnkgd2l0aCBwcm9kdWN0cy4gUGxlYXNlIHJlbW92ZSBvciByZWFzc2lnbiBwcm9kdWN0cyBmaXJzdC5cIlxuICAgICk7XG4gIH1cblxuICBpZiAoY2F0ZWdvcnkuX2NvdW50LnN1YkNhdGVnb3JpZXMgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJDYW5ub3QgZGVsZXRlIGNhdGVnb3J5IHdpdGggc3ViY2F0ZWdvcmllcy4gUGxlYXNlIGRlbGV0ZSBvciByZWFzc2lnbiBzdWJjYXRlZ29yaWVzIGZpcnN0LlwiXG4gICAgKTtcbiAgfVxuXG4gIGF3YWl0IGRiLmNhdGVnb3J5LmRlbGV0ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzVEFpTHNCLDJMQUFBIn0=
	},
	"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["default", () => CategoriesPage]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderTree$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/folder-tree.js [app-ssr] (ecmascript) <export default as FolderTree>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>",
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
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/button.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/card.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/input.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/table.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$categories$2f$_components$2f$category$2d$dialogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$b95ac6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/server/api/internal/data:b95ac6 [app-ssr] (ecmascript) <text/javascript>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$a4986b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/server/api/internal/data:a4986b [app-ssr] (ecmascript) <text/javascript>",
			);
		("use client");
		function CategoriesPage() {
			const [searchQuery, setSearchQuery] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(``);
			const [categories, setCategories] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])([]);
			const [filteredCategories, setFilteredCategories] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])([]);
			const [isLoading, setIsLoading] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(true);
			// Dialog states
			const [viewDialog, setViewDialog] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(false);
			const [createDialog, setCreateDialog] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(false);
			const [editDialog, setEditDialog] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(false);
			const [deleteDialog, setDeleteDialog] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(false);
			const [selectedCategory, setSelectedCategory] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(null);
			const fetchCategories = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useCallback"
			])(async () => {
				setIsLoading(true);
				try {
					const data = await (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$b95ac6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__[
						"getCategories"
					])();
					// Transform API data to match dialog types
					const transformed = data.map((cat) => ({
						id: cat.id,
						name: cat.slug,
						slug: cat.slug,
						parentId: cat.parentId,
						parent: cat.parent,
						products: cat._count.products,
						subcategories: cat._count.subCategories,
						status: "Active",
						_count: cat._count,
					}));
					setCategories(transformed);
					setFilteredCategories(transformed);
				} catch (error) {
					console.error("Failed to fetch categories:", error);
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].error("Failed to load categories");
				} finally {
					setIsLoading(false);
				}
			}, []);
			(0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useEffect"
			])(() => {
				fetchCategories();
			}, [fetchCategories]);
			(0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useEffect"
			])(() => {
				if (!searchQuery.trim()) {
					setFilteredCategories(categories);
					return;
				}
				const query = searchQuery.toLowerCase();
				const filtered = categories.filter(
					(cat) =>
						cat.slug.toLowerCase().includes(query) ||
						cat.parent?.slug.toLowerCase().includes(query),
				);
				setFilteredCategories(filtered);
			}, [searchQuery, categories]);
			const handleDelete = async (id) => {
				try {
					await (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$a4986b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__[
						"deleteCategory"
					])(id);
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].success("Category deleted successfully");
					fetchCategories();
					setDeleteDialog(false);
				} catch (error) {
					console.error("Failed to delete category:", error);
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"toast"
					].error(
						error instanceof Error
							? error.message
							: "Failed to delete category",
					);
				}
			};
			const handleDeleteConfirm = async () => {
				if (!selectedCategory) return;
				await handleDelete(selectedCategory.id);
			};
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
														children: "Categories",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
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
														className: "text-muted-foreground mt-1",
														children:
															"Organize products into categories and subcategories",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
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
												"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
											lineNumber: 157,
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
											type: "button",
											onClick: () => setCreateDialog(true),
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
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
														lineNumber: 164,
														columnNumber: 6,
													},
													this,
												),
												"Add Category",
											],
										},
										void 0,
										true,
										{
											fileName:
												"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
											lineNumber: 163,
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
									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
								lineNumber: 156,
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
													"p",
													{
														className: "text-sm text-muted-foreground",
														children: "Total Categories",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
														lineNumber: 172,
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
														children: categories.length,
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
														lineNumber: 173,
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
												"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
											lineNumber: 171,
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
														children: "Parent Categories",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
														lineNumber: 176,
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
														children: categories.filter((c) => !c.parentId)
															.length,
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
														lineNumber: 177,
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
												"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
											lineNumber: 175,
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
														children: "Subcategories",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
														lineNumber: 182,
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
														children: categories.filter((c) => c.parentId)
															.length,
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
														lineNumber: 183,
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
												"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
											lineNumber: 181,
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
														children: "Total Products",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
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
														children: categories.reduce(
															(sum, c) => sum + c._count.products,
															0,
														),
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
														lineNumber: 189,
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
												"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
											lineNumber: 187,
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
									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
								lineNumber: 170,
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
								className: "p-4",
								children: /*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									"div",
									{
										className: "relative",
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__[
													"Search"
												],
												{
													className:
														"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
													lineNumber: 198,
													columnNumber: 6,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"Input"
												],
												{
													type: "search",
													placeholder: "Search categories by slug...",
													className: "pl-9",
													value: searchQuery,
													onChange: (e) => setSearchQuery(e.target.value),
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
													lineNumber: 199,
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
											"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
										lineNumber: 197,
										columnNumber: 5,
									},
									this,
								),
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
								lineNumber: 196,
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
								children: isLoading
									? /*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											"jsxDEV"
										])(
											"div",
											{
												className: "flex items-center justify-center py-12",
												children: /*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"jsxDEV"
												])(
													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
														"Loader2"
													],
													{
														className:
															"h-8 w-8 animate-spin text-muted-foreground",
													},
													void 0,
													false,
													{
														fileName:
															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
														lineNumber: 213,
														columnNumber: 7,
													},
													this,
												),
											},
											void 0,
											false,
											{
												fileName:
													"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
												lineNumber: 212,
												columnNumber: 6,
											},
											this,
										)
									: filteredCategories.length === 0
										? /*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "text-center py-12",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderTree$3e$__[
																"FolderTree"
															],
															{
																className:
																	"h-12 w-12 text-muted-foreground mx-auto mb-4",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																lineNumber: 217,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"h3",
															{
																className: "text-lg font-semibold mb-2",
																children: "No categories found",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																lineNumber: 218,
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
																className: "text-muted-foreground mb-4",
																children: searchQuery
																	? `No categories match "${searchQuery}"`
																	: "Get started by creating your first category",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																lineNumber: 219,
																columnNumber: 7,
															},
															this,
														),
														!searchQuery &&
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"jsxDEV"
															])(
																__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	"PolarisButton"
																],
																{
																	onClick: () => setCreateDialog(true),
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
																					"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																				lineNumber: 226,
																				columnNumber: 9,
																			},
																			this,
																		),
																		"Add Category",
																	],
																},
																void 0,
																true,
																{
																	fileName:
																		"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																	lineNumber: 225,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
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
																					children: "Category",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																					lineNumber: 235,
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
																						"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																					lineNumber: 236,
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
																					children: "Parent",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
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
																					children: "Products",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
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
																					children: "Subcategories",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
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
																					className: "w-[70px]",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																					lineNumber: 240,
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
																			"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																		lineNumber: 234,
																		columnNumber: 8,
																	},
																	this,
																),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																lineNumber: 233,
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
																children: filteredCategories.map((category) =>
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"TableRow"
																		],
																		{
																			className: "cursor-pointer",
																			children: [
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
																							"div",
																							{
																								className:
																									"flex items-center gap-3",
																								children: [
																									/*#__PURE__*/ (0,
																									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																										"jsxDEV"
																									])(
																										"div",
																										{
																											className:
																												"h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",
																											children:
																												/*#__PURE__*/ (0,
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																													"jsxDEV"
																												])(
																													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderTree$3e$__[
																														"FolderTree"
																													],
																													{
																														className:
																															"h-5 w-5 text-white",
																													},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																														lineNumber: 249,
																														columnNumber: 13,
																													},
																													this,
																												),
																										},
																										void 0,
																										false,
																										{
																											fileName:
																												"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																											lineNumber: 248,
																											columnNumber: 12,
																										},
																										this,
																									),
																									/*#__PURE__*/ (0,
																									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																										"jsxDEV"
																									])(
																										"span",
																										{
																											className: "font-medium",
																											children: category.slug,
																										},
																										void 0,
																										false,
																										{
																											fileName:
																												"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																											lineNumber: 251,
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
																									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																								lineNumber: 247,
																								columnNumber: 11,
																							},
																							this,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																						lineNumber: 246,
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
																							"code",
																							{
																								className:
																									"text-sm text-muted-foreground",
																								children: category.slug,
																							},
																							void 0,
																							false,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																								lineNumber: 255,
																								columnNumber: 11,
																							},
																							this,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																						lineNumber: 254,
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
																						children: category.parent?.slug
																							? /*#__PURE__*/ (0,
																								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																									"jsxDEV"
																								])(
																									"span",
																									{
																										className: "text-sm",
																										children:
																											category.parent.slug,
																									},
																									void 0,
																									false,
																									{
																										fileName:
																											"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																										lineNumber: 261,
																										columnNumber: 12,
																									},
																									this,
																								)
																							: /*#__PURE__*/ (0,
																								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																									"jsxDEV"
																								])(
																									"span",
																									{
																										className:
																											"text-sm text-muted-foreground",
																										children: "Root category",
																									},
																									void 0,
																									false,
																									{
																										fileName:
																											"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																										lineNumber: 263,
																										columnNumber: 12,
																									},
																									this,
																								),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																						lineNumber: 259,
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
																							"span",
																							{
																								className: "text-sm",
																								children:
																									category._count.products,
																							},
																							void 0,
																							false,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																								lineNumber: 269,
																								columnNumber: 11,
																							},
																							this,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																						lineNumber: 268,
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
																							"span",
																							{
																								className: "text-sm",
																								children:
																									category._count.subCategories,
																							},
																							void 0,
																							false,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																								lineNumber: 272,
																								columnNumber: 11,
																							},
																							this,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																						lineNumber: 271,
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
																							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																								"DropdownMenu"
																							],
																							{
																								children: [
																									/*#__PURE__*/ (0,
																									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																										"jsxDEV"
																									])(
																										__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																											"DropdownMenuTrigger"
																										],
																										{
																											asChild: true,
																											children:
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
																														children:
																															/*#__PURE__*/ (0,
																															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																																"jsxDEV"
																															])(
																																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__[
																																	"MoreVertical"
																																],
																																{
																																	className:
																																		"h-4 w-4",
																																},
																																void 0,
																																false,
																																{
																																	fileName:
																																		"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																																	lineNumber: 280,
																																	columnNumber: 14,
																																},
																																this,
																															),
																													},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																														lineNumber: 279,
																														columnNumber: 13,
																													},
																													this,
																												),
																										},
																										void 0,
																										false,
																										{
																											fileName:
																												"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																											lineNumber: 278,
																											columnNumber: 12,
																										},
																										this,
																									),
																									/*#__PURE__*/ (0,
																									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																										"jsxDEV"
																									])(
																										__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																											"DropdownMenuContent"
																										],
																										{
																											align: "end",
																											children: [
																												/*#__PURE__*/ (0,
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																													"jsxDEV"
																												])(
																													__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																														"DropdownMenuLabel"
																													],
																													{
																														children: "Actions",
																													},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																														lineNumber: 284,
																														columnNumber: 13,
																													},
																													this,
																												),
																												/*#__PURE__*/ (0,
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																													"jsxDEV"
																												])(
																													__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																														"DropdownMenuItem"
																													],
																													{
																														onClick: () => {
																															setSelectedCategory(
																																category,
																															);
																															setViewDialog(
																																true,
																															);
																														},
																														children:
																															"View Details",
																													},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																														lineNumber: 285,
																														columnNumber: 13,
																													},
																													this,
																												),
																												/*#__PURE__*/ (0,
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																													"jsxDEV"
																												])(
																													__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																														"DropdownMenuItem"
																													],
																													{
																														onClick: () => {
																															setSelectedCategory(
																																category,
																															);
																															setEditDialog(
																																true,
																															);
																														},
																														children: "Edit",
																													},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																														lineNumber: 293,
																														columnNumber: 13,
																													},
																													this,
																												),
																												/*#__PURE__*/ (0,
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																													"jsxDEV"
																												])(
																													__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																														"DropdownMenuSeparator"
																													],
																													{},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																														lineNumber: 301,
																														columnNumber: 13,
																													},
																													this,
																												),
																												/*#__PURE__*/ (0,
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																													"jsxDEV"
																												])(
																													__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																														"DropdownMenuItem"
																													],
																													{
																														onClick: () => {
																															setSelectedCategory(
																																category,
																															);
																															setDeleteDialog(
																																true,
																															);
																														},
																														className:
																															"text-destructive focus:text-destructive",
																														children: "Delete",
																													},
																													void 0,
																													false,
																													{
																														fileName:
																															"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																														lineNumber: 302,
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
																												"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																											lineNumber: 283,
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
																									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																								lineNumber: 277,
																								columnNumber: 11,
																							},
																							this,
																						),
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																						lineNumber: 276,
																						columnNumber: 10,
																					},
																					this,
																				),
																			],
																		},
																		category.id,
																		true,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																			lineNumber: 245,
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
																	"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
																lineNumber: 243,
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
														"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
													lineNumber: 232,
													columnNumber: 6,
												},
												this,
											),
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
								lineNumber: 210,
								columnNumber: 4,
							},
							this,
						),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$categories$2f$_components$2f$category$2d$dialogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"ViewCategoryDialog"
							],
							{
								open: viewDialog,
								onOpenChange: setViewDialog,
								category: selectedCategory,
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
								lineNumber: 322,
								columnNumber: 4,
							},
							this,
						),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$categories$2f$_components$2f$category$2d$dialogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"CategoryFormDialog"
							],
							{
								open: createDialog,
								onOpenChange: setCreateDialog,
								mode: "create",
								categories: categories,
								onSuccess: fetchCategories,
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
								lineNumber: 327,
								columnNumber: 4,
							},
							this,
						),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$categories$2f$_components$2f$category$2d$dialogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"CategoryFormDialog"
							],
							{
								open: editDialog,
								onOpenChange: setEditDialog,
								mode: "edit",
								category: selectedCategory,
								categories: categories,
								onSuccess: fetchCategories,
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
								lineNumber: 334,
								columnNumber: 4,
							},
							this,
						),
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$categories$2f$_components$2f$category$2d$dialogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"DeleteCategoryDialog"
							],
							{
								open: deleteDialog,
								onOpenChange: setDeleteDialog,
								category: selectedCategory,
								onConfirm: handleDeleteConfirm,
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
								lineNumber: 342,
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
						"[project]/apps/platform/src/app/(internal)/admin/categories/page.tsx",
					lineNumber: 154,
					columnNumber: 3,
				},
				this,
			);
		}
	},
];

//# sourceMappingURL=apps_platform_src_5d9d7a97._.js.map
