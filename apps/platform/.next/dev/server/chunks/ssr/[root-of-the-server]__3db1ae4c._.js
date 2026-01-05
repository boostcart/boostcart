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
	"[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["cn", () => cn]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)",
			);
		function cn(...inputs) {
			return (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"twMerge"
			])(
				(0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"clsx"
				])(inputs),
			);
		}
	},
	"[project]/apps/platform/src/components/ui/avatar.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"Avatar",
			() => Avatar,
			"AvatarFallback",
			() => AvatarFallback,
			"AvatarImage",
			() => AvatarImage,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript)",
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
		const Avatar =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"Root"
					],
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
							className,
						),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/avatar.tsx",
						lineNumber: 12,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		Avatar.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Root"
			].displayName;
		const AvatarImage =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"Image"
					],
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("aspect-square h-full w-full", className),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/avatar.tsx",
						lineNumber: 27,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		AvatarImage.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Image"
			].displayName;
		const AvatarFallback =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"Fallback"
					],
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"flex h-full w-full items-center justify-center rounded-full bg-muted",
							className,
						),
						...props,
					},
					void 0,
					false,
					{
						fileName: "[project]/apps/platform/src/components/ui/avatar.tsx",
						lineNumber: 39,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		AvatarFallback.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Fallback"
			].displayName;
	},
	"[project]/apps/platform/src/components/ui/badge.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"Badge",
			() => Badge,
			"badgeVariants",
			() => badgeVariants,
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
		const badgeVariants = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"cva"
		])(
			"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
			{
				variants: {
					variant: {
						default:
							"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
						secondary:
							"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
						destructive:
							"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
						outline: "text-foreground",
					},
				},
				defaultVariants: {
					variant: "default",
				},
			},
		);
		function Badge({ className, variant, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"div",
				{
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						badgeVariants({
							variant,
						}),
						className,
					),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/badge.tsx",
					lineNumber: 32,
					columnNumber: 3,
				},
				this,
			);
		}
	},
	"[project]/apps/platform/src/components/ui/button.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"Button",
			() => Button,
			"ButtonArrow",
			() => ButtonArrow,
			"buttonVariants",
			() => buttonVariants,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript) <export * as Slot>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)",
			);
		const buttonVariants = (0,
		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
			"cva"
		])(
			"cursor-pointer group whitespace-nowrap focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap text-sm font-medium ring-offset-background transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0",
			{
				variants: {
					variant: {
						primary:
							"bg-primary text-primary-foreground hover:bg-primary/90 data-[state=open]:bg-primary/90",
						mono: "bg-zinc-950 text-white dark:bg-zinc-300 dark:text-black hover:bg-zinc-950/90 dark:hover:bg-zinc-300/90 data-[state=open]:bg-zinc-950/90 dark:data-[state=open]:bg-zinc-300/90",
						destructive:
							"bg-destructive text-destructive-foreground hover:bg-destructive/90 data-[state=open]:bg-destructive/90",
						secondary:
							"bg-secondary text-secondary-foreground hover:bg-secondary/90 data-[state=open]:bg-secondary/90",
						outline:
							"bg-background text-accent-foreground border border-input hover:bg-accent data-[state=open]:bg-accent",
						dashed:
							"text-accent-foreground border border-input border-dashed bg-background hover:bg-accent hover:text-accent-foreground data-[state=open]:text-accent-foreground",
						ghost:
							"text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
						dim: "text-muted-foreground hover:text-foreground data-[state=open]:text-foreground",
						foreground: "",
						inverse: "",
					},
					appearance: {
						default: "",
						ghost: "",
					},
					underline: {
						solid: "",
						dashed: "",
					},
					underlined: {
						solid: "",
						dashed: "",
					},
					size: {
						lg: "h-10 rounded-md px-4 text-sm gap-1.5 [&_svg:not([class*=size-])]:size-4",
						md: "h-8.5 rounded-md px-3 gap-1.5 text-[0.8125rem] leading-(--text-sm--line-height) [&_svg:not([class*=size-])]:size-4",
						sm: "h-7 rounded-md px-2.5 gap-1.25 text-xs [&_svg:not([class*=size-])]:size-3.5",
						icon: "size-8.5 rounded-md [&_svg:not([class*=size-])]:size-4 shrink-0",
					},
					autoHeight: {
						true: "",
						false: "",
					},
					shape: {
						default: "",
						circle: "rounded-full",
					},
					mode: {
						default:
							"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
						icon: "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shrink-0",
						link: "text-primary h-auto p-0 bg-transparent rounded-none hover:bg-transparent data-[state=open]:bg-transparent",
						input: `
            justify-start font-normal hover:bg-background [&_svg]:transition-colors [&_svg]:hover:text-foreground data-[state=open]:bg-background 
            focus-visible:border-ring focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-ring/30 
            [[data-state=open]>&]:border-ring [[data-state=open]>&]:outline-hidden [[data-state=open]>&]:ring-[3px] 
            [[data-state=open]>&]:ring-ring/30 
            aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/20
            in-data-[invalid=true]:border-destructive/60 in-data-[invalid=true]:ring-destructive/10  dark:in-data-[invalid=true]:border-destructive dark:in-data-[invalid=true]:ring-destructive/20
          `,
					},
					placeholder: {
						true: "text-muted-foreground",
						false: "",
					},
				},
				compoundVariants: [
					// Icons opacity for default mode
					{
						variant: "ghost",
						mode: "default",
						className:
							"[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60",
					},
					{
						variant: "outline",
						mode: "default",
						className:
							"[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60",
					},
					{
						variant: "dashed",
						mode: "default",
						className:
							"[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60",
					},
					{
						variant: "secondary",
						mode: "default",
						className:
							"[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60",
					},
					// Icons opacity for default mode
					{
						variant: "outline",
						mode: "input",
						className:
							"[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60",
					},
					{
						variant: "outline",
						mode: "icon",
						className:
							"[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60",
					},
					// Auto height
					{
						size: "md",
						autoHeight: true,
						className: "h-auto min-h-8.5",
					},
					{
						size: "sm",
						autoHeight: true,
						className: "h-auto min-h-7",
					},
					{
						size: "lg",
						autoHeight: true,
						className: "h-auto min-h-10",
					},
					// Shadow support
					{
						variant: "primary",
						mode: "default",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					{
						variant: "mono",
						mode: "default",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					{
						variant: "secondary",
						mode: "default",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					{
						variant: "outline",
						mode: "default",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					{
						variant: "dashed",
						mode: "default",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					{
						variant: "destructive",
						mode: "default",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					// Shadow support
					{
						variant: "primary",
						mode: "icon",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					{
						variant: "mono",
						mode: "icon",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					{
						variant: "secondary",
						mode: "icon",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					{
						variant: "outline",
						mode: "icon",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					{
						variant: "dashed",
						mode: "icon",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					{
						variant: "destructive",
						mode: "icon",
						appearance: "default",
						className: "shadow-xs shadow-black/5",
					},
					// Link
					{
						variant: "primary",
						mode: "link",
						underline: "solid",
						className:
							"font-medium text-primary hover:text-primary/90 [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-solid",
					},
					{
						variant: "primary",
						mode: "link",
						underline: "dashed",
						className:
							"font-medium text-primary hover:text-primary/90 [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-dashed decoration-1",
					},
					{
						variant: "primary",
						mode: "link",
						underlined: "solid",
						className:
							"font-medium text-primary hover:text-primary/90 [&_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-solid",
					},
					{
						variant: "primary",
						mode: "link",
						underlined: "dashed",
						className:
							"font-medium text-primary hover:text-primary/90 [&_svg]:opacity-60 underline underline-offset-4 decoration-dashed decoration-1",
					},
					{
						variant: "inverse",
						mode: "link",
						underline: "solid",
						className:
							"font-medium text-inherit [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-solid",
					},
					{
						variant: "inverse",
						mode: "link",
						underline: "dashed",
						className:
							"font-medium text-inherit [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-dashed decoration-1",
					},
					{
						variant: "inverse",
						mode: "link",
						underlined: "solid",
						className:
							"font-medium text-inherit [&_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-solid",
					},
					{
						variant: "inverse",
						mode: "link",
						underlined: "dashed",
						className:
							"font-medium text-inherit [&_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-dashed decoration-1",
					},
					{
						variant: "foreground",
						mode: "link",
						underline: "solid",
						className:
							"font-medium text-foreground [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-solid",
					},
					{
						variant: "foreground",
						mode: "link",
						underline: "dashed",
						className:
							"font-medium text-foreground [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-dashed decoration-1",
					},
					{
						variant: "foreground",
						mode: "link",
						underlined: "solid",
						className:
							"font-medium text-foreground [&_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-solid",
					},
					{
						variant: "foreground",
						mode: "link",
						underlined: "dashed",
						className:
							"font-medium text-foreground [&_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-dashed decoration-1",
					},
					// Ghost
					{
						variant: "primary",
						appearance: "ghost",
						className:
							"bg-transparent text-primary/90 hover:bg-primary/5 data-[state=open]:bg-primary/5",
					},
					{
						variant: "destructive",
						appearance: "ghost",
						className:
							"bg-transparent text-destructive/90 hover:bg-destructive/5 data-[state=open]:bg-destructive/5",
					},
					{
						variant: "ghost",
						mode: "icon",
						className: "text-muted-foreground",
					},
					// Size
					{
						size: "sm",
						mode: "icon",
						className: "w-7 h-7 p-0 [[&_svg:not([class*=size-])]:size-3.5",
					},
					{
						size: "md",
						mode: "icon",
						className: "w-8.5 h-8.5 p-0 [&_svg:not([class*=size-])]:size-4",
					},
					{
						size: "icon",
						className: "w-8.5 h-8.5 p-0 [&_svg:not([class*=size-])]:size-4",
					},
					{
						size: "lg",
						mode: "icon",
						className: "w-10 h-10 p-0 [&_svg:not([class*=size-])]:size-4",
					},
					// Input mode
					{
						mode: "input",
						placeholder: true,
						variant: "outline",
						className: "font-normal text-muted-foreground",
					},
					{
						mode: "input",
						variant: "outline",
						size: "sm",
						className: "gap-1.25",
					},
					{
						mode: "input",
						variant: "outline",
						size: "md",
						className: "gap-1.5",
					},
					{
						mode: "input",
						variant: "outline",
						size: "lg",
						className: "gap-1.5",
					},
				],
				defaultVariants: {
					variant: "primary",
					mode: "default",
					size: "md",
					shape: "default",
					appearance: "default",
				},
			},
		);
		function Button({
			className,
			selected,
			variant,
			shape,
			appearance,
			mode,
			size,
			autoHeight,
			underlined,
			underline,
			asChild = false,
			placeholder = false,
			...props
		}) {
			const Comp = asChild
				? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__[
						"Slot"
					].Slot
				: "button";
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				Comp,
				{
					"data-slot": "button",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						buttonVariants({
							variant,
							size,
							shape,
							appearance,
							mode,
							autoHeight,
							placeholder,
							underlined,
							underline,
							className,
						}),
						asChild && props.disabled && "pointer-events-none opacity-50",
					),
					...(selected && {
						"data-state": "open",
					}),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/button.tsx",
					lineNumber: 393,
					columnNumber: 3,
				},
				this,
			);
		}
		function ButtonArrow({
			icon:
				Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
				"ChevronDown"
			],
			className,
			...props
		}) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				Icon,
				{
					"data-slot": "button-arrow",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])("ms-auto -me-1", className),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/button.tsx",
					lineNumber: 426,
					columnNumber: 3,
				},
				this,
			);
		}
	},
	"[project]/apps/platform/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s([
			"DropdownMenu",
			() => DropdownMenu,
			"DropdownMenuCheckboxItem",
			() => DropdownMenuCheckboxItem,
			"DropdownMenuContent",
			() => DropdownMenuContent,
			"DropdownMenuGroup",
			() => DropdownMenuGroup,
			"DropdownMenuItem",
			() => DropdownMenuItem,
			"DropdownMenuLabel",
			() => DropdownMenuLabel,
			"DropdownMenuPortal",
			() => DropdownMenuPortal,
			"DropdownMenuRadioGroup",
			() => DropdownMenuRadioGroup,
			"DropdownMenuRadioItem",
			() => DropdownMenuRadioItem,
			"DropdownMenuSeparator",
			() => DropdownMenuSeparator,
			"DropdownMenuShortcut",
			() => DropdownMenuShortcut,
			"DropdownMenuSub",
			() => DropdownMenuSub,
			"DropdownMenuSubContent",
			() => DropdownMenuSubContent,
			"DropdownMenuSubTrigger",
			() => DropdownMenuSubTrigger,
			"DropdownMenuTrigger",
			() => DropdownMenuTrigger,
		]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>",
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
		const DropdownMenu =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Root"
			];
		const DropdownMenuTrigger =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Trigger"
			];
		const DropdownMenuGroup =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Group"
			];
		const DropdownMenuPortal =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Portal"
			];
		const DropdownMenuSub =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Sub"
			];
		const DropdownMenuRadioGroup =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"RadioGroup"
			];
		const DropdownMenuSubTrigger =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, inset, children, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"SubTrigger"
					],
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
							inset && "pl-8",
							className,
						),
						...props,
						children: [
							children,
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"jsxDEV"
							])(
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__[
									"ChevronRight"
								],
								{
									className: "ml-auto",
								},
								void 0,
								false,
								{
									fileName:
										"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
									lineNumber: 37,
									columnNumber: 3,
								},
								("TURBOPACK compile-time value", void 0),
							),
						],
					},
					void 0,
					true,
					{
						fileName:
							"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
						lineNumber: 27,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		DropdownMenuSubTrigger.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"SubTrigger"
			].displayName;
		const DropdownMenuSubContent =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"SubContent"
					],
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
							className,
						),
						...props,
					},
					void 0,
					false,
					{
						fileName:
							"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
						lineNumber: 47,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		DropdownMenuSubContent.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"SubContent"
			].displayName;
		const DropdownMenuContent =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, sideOffset = 4, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"Portal"
					],
					{
						children: /*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"Content"
							],
							{
								ref: ref,
								sideOffset: sideOffset,
								className: (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"cn"
								])(
									"z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-32 overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
									className,
								),
								...props,
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
								lineNumber: 64,
								columnNumber: 3,
							},
							("TURBOPACK compile-time value", void 0),
						),
					},
					void 0,
					false,
					{
						fileName:
							"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
						lineNumber: 63,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		DropdownMenuContent.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Content"
			].displayName;
		const DropdownMenuItem =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, inset, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"Item"
					],
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
							inset && "pl-8",
							className,
						),
						...props,
					},
					void 0,
					false,
					{
						fileName:
							"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
						lineNumber: 83,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		DropdownMenuItem.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Item"
			].displayName;
		const DropdownMenuCheckboxItem =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, children, checked, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"CheckboxItem"
					],
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
							className,
						),
						checked: checked,
						...props,
						children: [
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"jsxDEV"
							])(
								"span",
								{
									className:
										"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
									children: /*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											"ItemIndicator"
										],
										{
											children: /*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__[
													"Check"
												],
												{
													className: "h-4 w-4",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
													lineNumber: 110,
													columnNumber: 5,
												},
												("TURBOPACK compile-time value", void 0),
											),
										},
										void 0,
										false,
										{
											fileName:
												"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
											lineNumber: 109,
											columnNumber: 4,
										},
										("TURBOPACK compile-time value", void 0),
									),
								},
								void 0,
								false,
								{
									fileName:
										"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
									lineNumber: 108,
									columnNumber: 3,
								},
								("TURBOPACK compile-time value", void 0),
							),
							children,
						],
					},
					void 0,
					true,
					{
						fileName:
							"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
						lineNumber: 99,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		DropdownMenuCheckboxItem.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"CheckboxItem"
			].displayName;
		const DropdownMenuRadioItem =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, children, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"RadioItem"
					],
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])(
							"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
										"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
									children: /*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											"ItemIndicator"
										],
										{
											children: /*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__[
													"Circle"
												],
												{
													className: "h-2 w-2 fill-current",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
													lineNumber: 133,
													columnNumber: 5,
												},
												("TURBOPACK compile-time value", void 0),
											),
										},
										void 0,
										false,
										{
											fileName:
												"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
											lineNumber: 132,
											columnNumber: 4,
										},
										("TURBOPACK compile-time value", void 0),
									),
								},
								void 0,
								false,
								{
									fileName:
										"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
									lineNumber: 131,
									columnNumber: 3,
								},
								("TURBOPACK compile-time value", void 0),
							),
							children,
						],
					},
					void 0,
					true,
					{
						fileName:
							"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
						lineNumber: 123,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		DropdownMenuRadioItem.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"RadioItem"
			].displayName;
		const DropdownMenuLabel =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, inset, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"Label"
					],
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
						...props,
					},
					void 0,
					false,
					{
						fileName:
							"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
						lineNumber: 147,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		DropdownMenuLabel.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Label"
			].displayName;
		const DropdownMenuSeparator =
			/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"forwardRef"
			](({ className, ...props }, ref) =>
				/*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					"jsxDEV"
				])(
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"Separator"
					],
					{
						ref: ref,
						className: (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"cn"
						])("-mx-1 my-1 h-px bg-muted", className),
						...props,
					},
					void 0,
					false,
					{
						fileName:
							"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
						lineNumber: 163,
						columnNumber: 2,
					},
					("TURBOPACK compile-time value", void 0),
				),
			);
		DropdownMenuSeparator.displayName =
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"Separator"
			].displayName;
		const DropdownMenuShortcut = ({ className, ...props }) => {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"span",
				{
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])("ml-auto text-xs tracking-widest opacity-60", className),
					...props,
				},
				void 0,
				false,
				{
					fileName:
						"[project]/apps/platform/src/components/ui/dropdown-menu.tsx",
					lineNumber: 176,
					columnNumber: 3,
				},
				("TURBOPACK compile-time value", void 0),
			);
		};
		DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
	},
	"[project]/apps/platform/src/components/ui/kbd.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["Kbd", () => Kbd, "KbdGroup", () => KbdGroup]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)",
			);
		function Kbd({ className, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"kbd",
				{
					"data-slot": "kbd",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])(
						"bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
						"[&_svg:not([class*='size-'])]:size-3",
						"[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
						className,
					),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/kbd.tsx",
					lineNumber: 5,
					columnNumber: 3,
				},
				this,
			);
		}
		function KbdGroup({ className, ...props }) {
			return /*#__PURE__*/ (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"jsxDEV"
			])(
				"kbd",
				{
					"data-slot": "kbd-group",
					className: (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						"cn"
					])("inline-flex items-center gap-1", className),
					...props,
				},
				void 0,
				false,
				{
					fileName: "[project]/apps/platform/src/components/ui/kbd.tsx",
					lineNumber: 20,
					columnNumber: 3,
				},
				this,
			);
		}
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
	"[project]/apps/platform/src/hooks/use-current-user.ts [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["useCurrentUser", () => useCurrentUser]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/auth-client.ts [app-ssr] (ecmascript)",
			);
		const useCurrentUser = () => {
			const { data: session } = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useSession"
			])();
			return session?.user;
		};
	},
	"[project]/apps/platform/src/hooks/use-is-apple-device.ts [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["useIsAppleDevice", () => useIsAppleDevice]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)",
			);
		function useIsAppleDevice() {
			const [isApple, setIsApple] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(false);
			(0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useEffect"
			])(() => {
				const userAgent = window.navigator.userAgent.toLowerCase();
				const platform = window.navigator.platform.toLowerCase();
				const isAppleDevice =
					/mac|iphone|ipad|ipod/.test(userAgent) ||
					/mac|iphone|ipad|ipod/.test(platform) ||
					platform === "macintel" ||
					platform === "macppc" ||
					platform === "mac68k";
				setIsApple(isAppleDevice);
			}, []);
			return isApple;
		}
	},
	"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx [app-ssr] (ecmascript)",
	(__turbopack_context__) => {
		"use strict";

		__turbopack_context__.s(["default", () => PlatformAdminLayout]);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChartVerticalFilledIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChartVerticalFilledIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/ChartVerticalFilledIcon.svg.mjs [app-ssr] (ecmascript) <export S as ChartVerticalFilledIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChartVerticalIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChartVerticalIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/ChartVerticalIcon.svg.mjs [app-ssr] (ecmascript) <export S as ChartVerticalIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ExitIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ExitIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/ExitIcon.svg.mjs [app-ssr] (ecmascript) <export S as ExitIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$HomeFilledIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__HomeFilledIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/HomeFilledIcon.svg.mjs [app-ssr] (ecmascript) <export S as HomeFilledIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$HomeIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__HomeIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/HomeIcon.svg.mjs [app-ssr] (ecmascript) <export S as HomeIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$MenuIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__MenuIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/MenuIcon.svg.mjs [app-ssr] (ecmascript) <export S as MenuIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$PersonFilledIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__PersonFilledIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/PersonFilledIcon.svg.mjs [app-ssr] (ecmascript) <export S as PersonFilledIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$PersonIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__PersonIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/PersonIcon.svg.mjs [app-ssr] (ecmascript) <export S as PersonIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SearchIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__SearchIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/SearchIcon.svg.mjs [app-ssr] (ecmascript) <export S as SearchIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SettingsFilledIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__SettingsFilledIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/SettingsFilledIcon.svg.mjs [app-ssr] (ecmascript) <export S as SettingsFilledIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SettingsIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__SettingsIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/SettingsIcon.svg.mjs [app-ssr] (ecmascript) <export S as SettingsIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$StoreFilledIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__StoreFilledIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/StoreFilledIcon.svg.mjs [app-ssr] (ecmascript) <export S as StoreFilledIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$StoreIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__StoreIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/StoreIcon.svg.mjs [app-ssr] (ecmascript) <export S as StoreIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$XIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__XIcon$3e$__ =
			__turbopack_context__.i(
				"[project]/node_modules/@shopify/polaris-icons/dist/icons/XIcon.svg.mjs [app-ssr] (ecmascript) <export S as XIcon>",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/node_modules/next/image.js [app-ssr] (ecmascript)",
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
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/avatar.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/badge.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/button.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$kbd$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/components/ui/kbd.tsx [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$hooks$2f$use$2d$current$2d$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/hooks/use-current-user.ts [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$hooks$2f$use$2d$is$2d$apple$2d$device$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/hooks/use-is-apple-device.ts [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/auth-client.ts [app-ssr] (ecmascript)",
			);
		var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
			__turbopack_context__.i(
				"[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)",
			);
		("use client");
		const navigation = [
			{
				name: "Dashboard",
				href: "/platform-admin",
				icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$HomeFilledIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__HomeFilledIcon$3e$__[
					"HomeFilledIcon"
				],
				activeIcon:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$HomeIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__HomeIcon$3e$__[
						"HomeIcon"
					],
			},
			{
				name: "Tenants",
				href: "/platform-admin/tenants",
				icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$StoreFilledIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__StoreFilledIcon$3e$__[
					"StoreFilledIcon"
				],
				activeIcon:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$StoreIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__StoreIcon$3e$__[
						"StoreIcon"
					],
			},
			{
				name: "Users",
				href: "/platform-admin/users",
				icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$PersonFilledIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__PersonFilledIcon$3e$__[
					"PersonFilledIcon"
				],
				activeIcon:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$PersonIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__PersonIcon$3e$__[
						"PersonIcon"
					],
			},
			{
				name: "Analytics",
				href: "/platform-admin/analytics",
				icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChartVerticalFilledIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChartVerticalFilledIcon$3e$__[
					"ChartVerticalFilledIcon"
				],
				activeIcon:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ChartVerticalIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ChartVerticalIcon$3e$__[
						"ChartVerticalIcon"
					],
			},
			{
				name: "Settings",
				href: "/platform-admin/settings",
				icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SettingsFilledIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__SettingsFilledIcon$3e$__[
					"SettingsFilledIcon"
				],
				activeIcon:
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SettingsIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__SettingsIcon$3e$__[
						"SettingsIcon"
					],
			},
		];
		function PlatformAdminLayout({ children }) {
			const [sidebarOpen, setSidebarOpen] = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useState"
			])(false);
			const pathname = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"usePathname"
			])();
			const user = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$hooks$2f$use$2d$current$2d$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useCurrentUser"
			])();
			const isApple = (0,
			__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$hooks$2f$use$2d$is$2d$apple$2d$device$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
				"useIsAppleDevice"
			])();
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
				"div",
				{
					className: "flex h-screen flex-col bg-[#0d1117]",
					children: [
						/*#__PURE__*/ (0,
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
							"jsxDEV"
						])(
							"header",
							{
								className:
									"h-14 bg-[#0d1117] shrink-0 z-50 border-b border-[#30363d]",
								children: /*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									"jsxDEV"
								])(
									"div",
									{
										className: "flex h-full items-center px-4 gap-3",
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"button",
												{
													type: "button",
													className: "lg:hidden text-white",
													onClick: () => setSidebarOpen(true),
													children: /*#__PURE__*/ (0,
													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
														"jsxDEV"
													])(
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$MenuIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__MenuIcon$3e$__[
															"MenuIcon"
														],
														{
															className: "size-5 shrink-0",
														},
														void 0,
														false,
														{
															fileName:
																"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
															lineNumber: 98,
															columnNumber: 7,
														},
														this,
													),
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
													lineNumber: 93,
													columnNumber: 6,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													"default"
												],
												{
													href: "/platform-admin",
													className:
														"flex items-center gap-2 font-semibold text-[15px] text-white",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																"default"
															],
															{
																src: "/icon.png",
																alt: "BoostCart Icon",
																width: 100,
																height: 100,
																className: "size-9",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																lineNumber: 105,
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
																className: "hidden lg:inline",
																children: "BoostCart",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																lineNumber: 112,
																columnNumber: 7,
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
																className:
																	"border-amber-500 text-amber-500 text-xs",
																children: "Platform Admin",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																lineNumber: 113,
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
														"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
													lineNumber: 101,
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
													className: "flex-1",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
													lineNumber: 120,
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
													type: "button",
													variant: "ghost",
													className:
														"relative w-full max-w-150 justify-start text-[#8b949e] hover:text-white bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded-lg px-2 transition-all h-9",
													onClick: () => {
														const event = new KeyboardEvent("keydown", {
															key: "k",
															metaKey: true,
															ctrlKey: true,
														});
														document.dispatchEvent(event);
													},
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$SearchIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__SearchIcon$3e$__[
																"SearchIcon"
															],
															{
																className: "size-5 shrink-0 transition-all",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																lineNumber: 135,
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
																className:
																	"hidden sm:inline-flex text-[13px] font-normal",
																children: "Search",
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																lineNumber: 136,
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
																className: "absolute right-2 dark",
																children: /*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	"jsxDEV"
																])(
																	__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$kbd$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"KbdGroup"
																	],
																	{
																		children: [
																			/*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$kbd$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"Kbd"
																				],
																				{
																					children: isApple ? "⌘" : "Ctrl",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																					lineNumber: 141,
																					columnNumber: 9,
																				},
																				this,
																			),
																			/*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$kbd$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																					"Kbd"
																				],
																				{
																					children: "K",
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																					lineNumber: 142,
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
																			"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																		lineNumber: 140,
																		columnNumber: 8,
																	},
																	this,
																),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																lineNumber: 139,
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
														"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
													lineNumber: 122,
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
													className: "flex-1",
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
													lineNumber: 146,
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
													className: "flex items-center gap-1 dark",
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
																		children: /*#__PURE__*/ (0,
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"jsxDEV"
																		])(
																			__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"Button"
																			],
																			{
																				type: "button",
																				variant: "ghost",
																				className:
																					"gap-2 rounded-lg px-2 h-9 hover:bg-[#21262d] transition",
																				children: [
																					/*#__PURE__*/ (0,
																					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"jsxDEV"
																					])(
																						__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																							"Avatar"
																						],
																						{
																							className: "size-7 rounded-lg",
																							children: [
																								/*#__PURE__*/ (0,
																								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																									"jsxDEV"
																								])(
																									__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																										"AvatarImage"
																									],
																									{
																										src: user?.image || "",
																										alt: user?.name || "",
																										className: "rounded-lg",
																									},
																									void 0,
																									false,
																									{
																										fileName:
																											"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																										lineNumber: 158,
																										columnNumber: 11,
																									},
																									this,
																								),
																								/*#__PURE__*/ (0,
																								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																									"jsxDEV"
																								])(
																									__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																										"AvatarFallback"
																									],
																									{
																										className:
																											"rounded-lg bg-amber-600",
																										children:
																											user?.name
																												?.charAt(0)
																												.toUpperCase() ||
																											/*#__PURE__*/ (0,
																											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																												"jsxDEV"
																											])(
																												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$PersonIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__PersonIcon$3e$__[
																													"PersonIcon"
																												],
																												{
																													className:
																														"size-5 shrink-0",
																												},
																												void 0,
																												false,
																												{
																													fileName:
																														"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																													lineNumber: 165,
																													columnNumber: 13,
																												},
																												this,
																											),
																									},
																									void 0,
																									false,
																									{
																										fileName:
																											"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																										lineNumber: 163,
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
																								"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																							lineNumber: 157,
																							columnNumber: 10,
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
																								"hidden md:inline text-[13px] font-medium text-white",
																							children: user?.name || "Loading",
																						},
																						void 0,
																						false,
																						{
																							fileName:
																								"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																							lineNumber: 169,
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
																					"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																				lineNumber: 152,
																				columnNumber: 9,
																			},
																			this,
																		),
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																		lineNumber: 151,
																		columnNumber: 8,
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
																		className: "w-56",
																		children: [
																			/*#__PURE__*/ (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"jsxDEV"
																			])(
																				"div",
																				{
																					className: "px-2 py-1.5",
																					children: [
																						/*#__PURE__*/ (0,
																						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																							"jsxDEV"
																						])(
																							"p",
																							{
																								className:
																									"text-sm font-medium",
																								children:
																									user?.name || "Loading...",
																							},
																							void 0,
																							false,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																								lineNumber: 176,
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
																								className:
																									"text-xs text-muted-foreground",
																								children: user?.email || "",
																							},
																							void 0,
																							false,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																								lineNumber: 179,
																								columnNumber: 10,
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
																								className:
																									"mt-1 text-xs border-amber-500 text-amber-500",
																								children: "Platform Admin",
																							},
																							void 0,
																							false,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																								lineNumber: 182,
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
																						"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																					lineNumber: 175,
																					columnNumber: 9,
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
																						"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																					lineNumber: 189,
																					columnNumber: 9,
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
																					asChild: true,
																					children: /*#__PURE__*/ (0,
																					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"jsxDEV"
																					])(
																						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																							"default"
																						],
																						{
																							href: "/admin",
																							className: "cursor-pointer",
																							children: [
																								/*#__PURE__*/ (0,
																								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																									"jsxDEV"
																								])(
																									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$StoreIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__StoreIcon$3e$__[
																										"StoreIcon"
																									],
																									{
																										className:
																											"size-5 shrink-0",
																									},
																									void 0,
																									false,
																									{
																										fileName:
																											"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																										lineNumber: 192,
																										columnNumber: 11,
																									},
																									this,
																								),
																								/*#__PURE__*/ (0,
																								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																									"jsxDEV"
																								])(
																									"span",
																									{
																										children: "Store Admin",
																									},
																									void 0,
																									false,
																									{
																										fileName:
																											"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																										lineNumber: 193,
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
																								"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																							lineNumber: 191,
																							columnNumber: 10,
																						},
																						this,
																					),
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																					lineNumber: 190,
																					columnNumber: 9,
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
																						"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																					lineNumber: 196,
																					columnNumber: 9,
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
																					asChild: true,
																					children: /*#__PURE__*/ (0,
																					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																						"jsxDEV"
																					])(
																						"button",
																						{
																							type: "button",
																							onClick: handleSignOut,
																							className:
																								"cursor-pointer w-full flex items-center gap-2",
																							children: [
																								/*#__PURE__*/ (0,
																								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																									"jsxDEV"
																								])(
																									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$ExitIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__ExitIcon$3e$__[
																										"ExitIcon"
																									],
																									{
																										className:
																											"size-5 shrink-0",
																									},
																									void 0,
																									false,
																									{
																										fileName:
																											"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																										lineNumber: 203,
																										columnNumber: 11,
																									},
																									this,
																								),
																								/*#__PURE__*/ (0,
																								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																									"jsxDEV"
																								])(
																									"span",
																									{
																										children: "Sign Out",
																									},
																									void 0,
																									false,
																									{
																										fileName:
																											"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																										lineNumber: 204,
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
																								"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																							lineNumber: 198,
																							columnNumber: 10,
																						},
																						this,
																					),
																				},
																				void 0,
																				false,
																				{
																					fileName:
																						"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																					lineNumber: 197,
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
																			"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																		lineNumber: 174,
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
																"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
															lineNumber: 150,
															columnNumber: 7,
														},
														this,
													),
												},
												void 0,
												false,
												{
													fileName:
														"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
													lineNumber: 148,
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
											"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
										lineNumber: 92,
										columnNumber: 5,
									},
									this,
								),
							},
							void 0,
							false,
							{
								fileName:
									"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
								lineNumber: 91,
								columnNumber: 4,
							},
							this,
						),
						sidebarOpen &&
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								"jsxDEV"
							])(
								"button",
								{
									type: "button",
									className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
									onClick: () => setSidebarOpen(false),
									"aria-label": "Close sidebar",
								},
								void 0,
								false,
								{
									fileName:
										"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
									lineNumber: 215,
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
								className: "flex-1 flex overflow-hidden",
								children: [
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										"aside",
										{
											className: (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"cn"
											])(
												"fixed inset-y-0 left-0 top-14 z-50 w-60 transform bg-[#161b22] transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-[#30363d]",
												sidebarOpen ? "translate-x-0" : "-translate-x-full",
											),
											children: /*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												"jsxDEV"
											])(
												"div",
												{
													className: "flex h-full flex-col",
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"div",
															{
																className:
																	"flex items-center justify-end px-3 py-3 lg:hidden",
																children: /*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	"jsxDEV"
																])(
																	"button",
																	{
																		type: "button",
																		className: "text-white",
																		onClick: () => setSidebarOpen(false),
																		children: /*#__PURE__*/ (0,
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"jsxDEV"
																		])(
																			__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$shopify$2f$polaris$2d$icons$2f$dist$2f$icons$2f$XIcon$2e$svg$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__XIcon$3e$__[
																				"XIcon"
																			],
																			{
																				className: "size-5 shrink-0",
																			},
																			void 0,
																			false,
																			{
																				fileName:
																					"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																				lineNumber: 240,
																				columnNumber: 9,
																			},
																			this,
																		),
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																		lineNumber: 235,
																		columnNumber: 8,
																	},
																	this,
																),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																lineNumber: 234,
																columnNumber: 7,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															"jsxDEV"
														])(
															"nav",
															{
																className: "flex-1 overflow-y-auto py-3 px-3",
																children: navigation.map((item) => {
																	const Icon = item.icon;
																	const ActiveIcon = item.activeIcon;
																	const isActive =
																		item.href === "/platform-admin"
																			? pathname === "/platform-admin"
																			: pathname.startsWith(item.href);
																	return /*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																		"jsxDEV"
																	])(
																		__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																			"default"
																		],
																		{
																			href: item.href,
																			className: (0,
																			__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																				"cn"
																			])(
																				"flex items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] font-medium transition-all mb-0.5",
																				isActive
																					? "bg-[#21262d] text-white"
																					: "text-[#8b949e] hover:bg-[#21262d] hover:text-white",
																			),
																			children: [
																				isActive && ActiveIcon
																					? /*#__PURE__*/ (0,
																						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																							"jsxDEV"
																						])(
																							ActiveIcon,
																							{
																								className: "size-5 shrink-0",
																							},
																							void 0,
																							false,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																								lineNumber: 265,
																								columnNumber: 12,
																							},
																							this,
																						)
																					: /*#__PURE__*/ (0,
																						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																							"jsxDEV"
																						])(
																							Icon,
																							{
																								className: "size-5 shrink-0",
																							},
																							void 0,
																							false,
																							{
																								fileName:
																									"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																								lineNumber: 267,
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
																						children: item.name,
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																						lineNumber: 269,
																						columnNumber: 11,
																					},
																					this,
																				),
																			],
																		},
																		item.name,
																		true,
																		{
																			fileName:
																				"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
																			lineNumber: 254,
																			columnNumber: 10,
																		},
																		this,
																	);
																}),
															},
															void 0,
															false,
															{
																fileName:
																	"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
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
														"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
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
												"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
											lineNumber: 226,
											columnNumber: 5,
										},
										this,
									),
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										"jsxDEV"
									])(
										"main",
										{
											className:
												"flex-1 overflow-y-auto bg-[#0d1117] px-6 py-6",
											children: children,
										},
										void 0,
										false,
										{
											fileName:
												"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
											lineNumber: 278,
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
									"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
								lineNumber: 224,
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
						"[project]/apps/platform/src/app/(internal)/platform-admin/layout.tsx",
					lineNumber: 89,
					columnNumber: 3,
				},
				this,
			);
		}
	},
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3db1ae4c._.js.map
