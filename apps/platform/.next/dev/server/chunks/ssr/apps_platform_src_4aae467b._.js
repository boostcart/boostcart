module.exports = [
"[project]/apps/platform/src/components/loader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-ssr] (ecmascript) <export default as LoaderIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Loader({ className, size = "md" }) {
    const sizeClasses = {
        sm: "size-4",
        md: "size-6",
        lg: "size-8"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderIcon$3e$__["LoaderIcon"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground animate-spin", sizeClasses[size], className)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/loader.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
}
const __TURBOPACK__default__export__ = Loader;
}),
"[project]/apps/platform/src/components/admin/polaris-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolarisButton",
    ()=>PolarisButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function PolarisButton({ children, size = "slim", fullWidth = false, loading = false, disabled = false, icon, className, ...props }) {
    const sizeClasses = {
        micro: "h-7 px-2.5 text-xs",
        slim: "h-9 px-3 text-sm",
        medium: "h-10 px-4 text-sm",
        large: "h-12 px-5 text-base"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        disabled: disabled || loading,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// Base styles matching Polaris primary button
        "relative inline-flex items-center justify-center gap-2", "font-semibold rounded-[10px] cursor-pointer", "transition-all duration-200 ease-out", "outline-none focus-visible:outline-2 focus-visible:outline-offset-2", "border-0", "shadow-[inset_0_1.5px_0_0_rgba(0,0,0,0.6),inset_1.5px_0_0_0_rgba(0,0,0,0.8),inset_-1.5px_0_0_0_rgba(0,0,0,0.8),inset_0_-3px_0_0_rgba(0,0,0,0.8)]", "bg-linear-to-b from-[#4a4a4a] to-[#303030]", // Text colors from Polaris tokens
        "text-white", "hover:before:absolute hover:before:inset-0 hover:before:rounded-[10px] hover:before:bg-black hover:before:opacity-30 hover:before:transition-opacity hover:before:duration-200 hover:before:content-['']", // Disabled state
        "disabled:bg-linear-to-b disabled:from-[rgba(0,0,0,0.2)] disabled:to-[rgba(0,0,0,0.17)]", "disabled:text-[rgba(255,255,255,0.6)]", "disabled:cursor-not-allowed", "disabled:shadow-[inset_0_1.5px_0_0_rgba(0,0,0,0.2),inset_1.5px_0_0_0_rgba(0,0,0,0.2),inset_-1.5px_0_0_0_rgba(0,0,0,0.2),inset_0_-3px_0_0_rgba(0,0,0,0.2)]", "disabled:hover:before:opacity-0", // Focus state border
        "focus-visible:outline-[#005BD3]", "active:shadow-[inset_0_4px_0_0_rgba(0,0,0,0.8),inset_1.5px_0_0_0_rgba(0,0,0,0.8),inset_-1.5px_0_0_0_rgba(0,0,0,0.8),inset_0_-3px_0_0_rgba(0,0,0,0.8)]", "active:bg-linear-to-b active:from-[#2a2a2a] active:to-[#1a1a1a]", "active:[&>span:last-child]:translate-y-px", // Size variants
        sizeClasses[size], // Full width
        fullWidth && "w-full", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0_3px_0_0_rgba(255,255,255,0.2),inset_1.5px_0_0_0_rgba(255,255,255,0.1),inset_-1.5px_0_0_0_rgba(255,255,255,0.1)] active:opacity-0 transition-opacity duration-200"
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                lineNumber: 76,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative flex items-center justify-center gap-2 transition-transform duration-200",
                children: [
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "animate-spin size-4",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                children: "Loading"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                                lineNumber: 86,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                                lineNumber: 87,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                                lineNumber: 95,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                        lineNumber: 80,
                        columnNumber: 6
                    }, this) : icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                        lineNumber: 102,
                        columnNumber: 14
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                lineNumber: 78,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, this);
}
}),
"[project]/apps/platform/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/apps/platform/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input,
    "InputAddon",
    ()=>InputAddon,
    "InputGroup",
    ()=>InputGroup,
    "InputWrapper",
    ()=>InputWrapper,
    "inputAddonVariants",
    ()=>inputAddonVariants,
    "inputVariants",
    ()=>inputVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
// Define input size variants
const inputVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])(`
    flex w-full bg-background border border-input shadow-xs shadow-black/5 transition-[color,box-shadow] text-foreground placeholder:text-muted-foreground/80 
    focus-visible:ring-ring/30  focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px]     
    disabled:cursor-not-allowed disabled:opacity-60 
    [&[readonly]]:bg-muted/80 [&[readonly]]:cursor-not-allowed
    file:h-full [&[type=file]]:py-0 file:border-solid file:border-input file:bg-transparent 
    file:font-medium file:not-italic file:text-foreground file:p-0 file:border-0 file:border-e
    aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/20
  `, {
    variants: {
        variant: {
            lg: "h-10 px-4 text-sm rounded-md file:pe-4 file:me-4",
            md: "h-8.5 px-3 text-[0.8125rem] leading-(--text-sm--line-height) rounded-md file:pe-3 file:me-3",
            sm: "h-7 px-2.5 text-xs rounded-md file:pe-2.5 file:me-2.5"
        }
    },
    defaultVariants: {
        variant: "md"
    }
});
const inputAddonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("flex items-center shrink-0 justify-center bg-muted border border-input shadow-xs shadow-[rgba(0,0,0,0.05)] text-secondary-foreground", {
    variants: {
        variant: {
            sm: "rounded-md h-7 min-w-7 text-xs px-2.5 [&_svg:not([class*=size-])]:size-3.5",
            md: "rounded-md h-8.5 min-w-8.5 px-3 text-[0.8125rem] leading-(--text-sm--line-height) [&_svg:not([class*=size-])]:size-4.5",
            lg: "rounded-md h-10 min-w-10 px-4 text-sm [&_svg:not([class*=size-])]:size-4.5"
        },
        mode: {
            default: "",
            icon: "px-0 justify-center"
        }
    },
    defaultVariants: {
        variant: "md",
        mode: "default"
    }
});
const inputGroupVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])(`
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
  `, {
    variants: {},
    defaultVariants: {}
});
const inputWrapperVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])(`
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
  `, {
    variants: {
        variant: {
            sm: "gap-1.25 [&_svg:not([class*=size-])]:size-3.5",
            md: "gap-1.5 [&_svg:not([class*=size-])]:size-4",
            lg: "gap-1.5 [&_svg:not([class*=size-])]:size-4"
        }
    },
    defaultVariants: {
        variant: "md"
    }
});
function Input({ className, type, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        "data-slot": "input",
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(inputVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/input.tsx",
        lineNumber: 128,
        columnNumber: 3
    }, this);
}
function InputAddon({ className, variant, mode, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "input-addon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(inputAddonVariants({
            variant,
            mode
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/input.tsx",
        lineNumber: 144,
        columnNumber: 3
    }, this);
}
function InputGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "input-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(inputGroupVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/input.tsx",
        lineNumber: 157,
        columnNumber: 3
    }, this);
}
function InputWrapper({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "input-wrapper",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(inputVariants({
            variant
        }), inputWrapperVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/input.tsx",
        lineNumber: 171,
        columnNumber: 3
    }, this);
}
;
}),
"[project]/apps/platform/src/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__ = __turbopack_context__.i("[project]/node_modules/radix-ui/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript) <export * as Label>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50", {
    variants: {
        variant: {
            primary: "font-medium",
            secondary: "font-normal"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
});
function Label({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__["Label"].Root, {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/label.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this);
}
;
}),
"[project]/apps/platform/src/server/api/internal/data:4364b9 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDomain",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40e9db0f701fb5732c69ea6fc1a7e77244d5237ab6":"addDomain"},"apps/platform/src/server/api/internal/domains.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40e9db0f701fb5732c69ea6fc1a7e77244d5237ab6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addDomain");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9tYWlucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7XG5cdHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uLFxuXHRyZXF1aXJlVmlld1Blcm1pc3Npb24sXG59IGZyb20gXCJAL3NlcnZlci9hcGkvcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbi8vIFZhbGlkYXRpb24gc2NoZW1hc1xuY29uc3QgQWRkRG9tYWluU2NoZW1hID0gei5vYmplY3Qoe1xuXHRkb21haW46IHpcblx0XHQuc3RyaW5nKClcblx0XHQubWluKDEsIFwiRG9tYWluIGlzIHJlcXVpcmVkXCIpXG5cdFx0LnJlZ2V4KFxuXHRcdFx0L14oPzpbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT9cXC4pK1thLXpBLVpdezIsfSQvLFxuXHRcdFx0XCJJbnZhbGlkIGRvbWFpbiBmb3JtYXRcIlxuXHRcdClcblx0XHQudHJhbnNmb3JtKChkKSA9PiBkLnRvTG93ZXJDYXNlKCkpLFxufSk7XG5cbi8vIEdldCBhbGwgY3VzdG9tIGRvbWFpbnMgZm9yIHRoZSBjdXJyZW50IHRlbmFudFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvbWFpbnMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVWaWV3UGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdFx0b3JkZXJCeTogW3sgaXNQcmltYXJ5OiBcImRlc2NcIiB9LCB7IGNyZWF0ZWRBdDogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGRvbWFpbnM7XG59XG5cbi8vIEdldCBhIHNpbmdsZSBkb21haW4gYnkgSURcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiBkb21haW47XG59XG5cbi8vIEFkZCBhIG5ldyBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRG9tYWluKGlucHV0OiB7IGRvbWFpbjogc3RyaW5nIH0pIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCB2YWxpZGF0ZWQgPSBBZGREb21haW5TY2hlbWEucGFyc2UoaW5wdXQpO1xuXG5cdC8vIENoZWNrIGlmIGRvbWFpbiBhbHJlYWR5IGV4aXN0cyAoZ2xvYmFsbHkpXG5cdGNvbnN0IGV4aXN0aW5nRG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7IGRvbWFpbjogdmFsaWRhdGVkLmRvbWFpbiB9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmdEb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGRvbWFpbiBpcyBhbHJlYWR5IGluIHVzZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGRvbWFpbiBsaW1pdCAoZS5nLiwgbWF4IDUgY3VzdG9tIGRvbWFpbnMgcGVyIHRlbmFudClcblx0Y29uc3QgZG9tYWluQ291bnQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmIChkb21haW5Db3VudCA+PSA1KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWF4aW11bSBudW1iZXIgb2YgY3VzdG9tIGRvbWFpbnMgcmVhY2hlZCAoNSlcIik7XG5cdH1cblxuXHQvLyBDcmVhdGUgdGhlIGRvbWFpbiB3aXRoIGEgdmVyaWZpY2F0aW9uIHRva2VuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0ZG9tYWluOiB2YWxpZGF0ZWQuZG9tYWluLFxuXHRcdFx0aXNQcmltYXJ5OiBkb21haW5Db3VudCA9PT0gMCwgLy8gRmlyc3QgZG9tYWluIGlzIHByaW1hcnlcblx0XHRcdHNzbFN0YXR1czogXCJwZW5kaW5nXCIsXG5cdFx0XHRkbnNWZXJpZmllZDogZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4gZG9tYWluO1xufVxuXG4vLyBSZW1vdmUgYSBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIERvbid0IGFsbG93IHJlbW92aW5nIHRoZSBwcmltYXJ5IGRvbWFpbiBpZiBvdGhlcnMgZXhpc3Rcblx0aWYgKGRvbWFpbi5pc1ByaW1hcnkpIHtcblx0XHRjb25zdCBvdGhlckRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlkOiB7IG5vdDogZG9tYWluSWQgfSB9LFxuXHRcdH0pO1xuXG5cdFx0aWYgKG90aGVyRG9tYWlucyA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJDYW5ub3QgcmVtb3ZlIHByaW1hcnkgZG9tYWluLiBTZXQgYW5vdGhlciBkb21haW4gYXMgcHJpbWFyeSBmaXJzdC5cIlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRhd2FpdCBkYi50ZW5hbnREb21haW4uZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIFNldCBhIGRvbWFpbiBhcyBwcmltYXJ5XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0UHJpbWFyeURvbWFpbihkb21haW5JZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uKFwic2V0dGluZ3NcIik7XG5cblx0Y29uc3QgZG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIWRvbWFpbikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBub3QgZm91bmRcIik7XG5cdH1cblxuXHRpZiAoIWRvbWFpbi5kbnNWZXJpZmllZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBtdXN0IGJlIHZlcmlmaWVkIGJlZm9yZSBzZXR0aW5nIGFzIHByaW1hcnlcIik7XG5cdH1cblxuXHQvLyBVcGRhdGUgYWxsIGRvbWFpbnM6IHVuc2V0IGN1cnJlbnQgcHJpbWFyeSwgc2V0IG5ldyBwcmltYXJ5XG5cdGF3YWl0IGRiLiR0cmFuc2FjdGlvbihbXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlzUHJpbWFyeTogdHJ1ZSB9LFxuXHRcdFx0ZGF0YTogeyBpc1ByaW1hcnk6IGZhbHNlIH0sXG5cdFx0fSksXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZSh7XG5cdFx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRcdGRhdGE6IHsgaXNQcmltYXJ5OiB0cnVlIH0sXG5cdFx0fSksXG5cdF0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vLyBWZXJpZnkgZG9tYWluIEROUyByZWNvcmRzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5RG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIFBlcmZvcm0gRE5TIHZlcmlmaWNhdGlvblxuXHRjb25zdCBpc1ZlcmlmaWVkID0gYXdhaXQgY2hlY2tEbnNWZXJpZmljYXRpb24oZG9tYWluLmRvbWFpbiwgZG9tYWluLmRuc1Rva2VuKTtcblxuXHRpZiAoaXNWZXJpZmllZCkge1xuXHRcdGF3YWl0IGRiLnRlbmFudERvbWFpbi51cGRhdGUoe1xuXHRcdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkIH0sXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGRuc1ZlcmlmaWVkOiB0cnVlLFxuXHRcdFx0XHRzc2xTdGF0dXM6IFwicHJvdmlzaW9uaW5nXCIsIC8vIFNTTCB3aWxsIGJlIHByb3Zpc2lvbmVkIGJ5IFZlcmNlbC9DbG91ZGZsYXJlXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRcdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHZlcmlmaWVkOiB0cnVlIH07XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB2ZXJpZmllZDogZmFsc2UgfTtcbn1cblxuLy8gUmVmcmVzaCB2ZXJpZmljYXRpb24gdG9rZW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoRG5zVG9rZW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlTWFuYWdlUGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkOiBkb21haW5JZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEb21haW4gbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gR2VuZXJhdGUgYSBuZXcgdG9rZW4gYnkgdXBkYXRpbmcgdGhlIHJlY29yZCAoY3VpZCB3aWxsIGF1dG8tZ2VuZXJhdGUpXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4udXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRkYXRhOiB7XG5cdFx0XHRkbnNUb2tlbjogZ2VuZXJhdGVWZXJpZmljYXRpb25Ub2tlbigpLFxuXHRcdFx0ZG5zVmVyaWZpZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBETlMgVFhUIHJlY29yZFxuYXN5bmMgZnVuY3Rpb24gY2hlY2tEbnNWZXJpZmljYXRpb24oXG5cdGRvbWFpbjogc3RyaW5nLFxuXHRleHBlY3RlZFRva2VuOiBzdHJpbmdcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHR0cnkge1xuXHRcdC8vIFVzZSBETlMgb3ZlciBIVFRQUyAoQ2xvdWRmbGFyZSkgZm9yIHZlcmlmaWNhdGlvblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgaHR0cHM6Ly9jbG91ZGZsYXJlLWRucy5jb20vZG5zLXF1ZXJ5P25hbWU9X2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW59JnR5cGU9VFhUYCxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9kbnMtanNvblwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdGlmICghZGF0YS5BbnN3ZXIgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5BbnN3ZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgaWYgYW55IFRYVCByZWNvcmQgY29udGFpbnMgb3VyIHZlcmlmaWNhdGlvbiB0b2tlblxuXHRcdGZvciAoY29uc3QgYW5zd2VyIG9mIGRhdGEuQW5zd2VyKSB7XG5cdFx0XHRpZiAoYW5zd2VyLnR5cGUgPT09IDE2KSB7XG5cdFx0XHRcdC8vIFRYVCByZWNvcmQgdHlwZVxuXHRcdFx0XHRjb25zdCB0eHRWYWx1ZSA9IGFuc3dlci5kYXRhPy5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcblx0XHRcdFx0aWYgKHR4dFZhbHVlID09PSBgYm9vc3RjYXJ0LXZlcmlmeT0ke2V4cGVjdGVkVG9rZW59YCkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJETlMgdmVyaWZpY2F0aW9uIGVycm9yOlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSB2ZXJpZmljYXRpb24gdG9rZW5cbmZ1bmN0aW9uIGdlbmVyYXRlVmVyaWZpY2F0aW9uVG9rZW4oKTogc3RyaW5nIHtcblx0Y29uc3QgY2hhcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuXHRsZXQgdG9rZW4gPSBcIlwiO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcblx0XHR0b2tlbiArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG5cdH1cblx0cmV0dXJuIHRva2VuO1xufVxuXG4vLyBHZXQgdmVyaWZpY2F0aW9uIGluc3RydWN0aW9ucyBmb3IgYSBkb21haW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW5WZXJpZmljYXRpb25JbnN0cnVjdGlvbnMoZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZG9tYWluOiBkb21haW4uZG9tYWluLFxuXHRcdGRuc1Rva2VuOiBkb21haW4uZG5zVG9rZW4sXG5cdFx0dmVyaWZpZWQ6IGRvbWFpbi5kbnNWZXJpZmllZCxcblx0XHRpbnN0cnVjdGlvbnM6IHtcblx0XHRcdHR5cGU6IFwiVFhUXCIsXG5cdFx0XHRob3N0OiBgX2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW4uZG9tYWlufWAsXG5cdFx0XHR2YWx1ZTogYGJvb3N0Y2FydC12ZXJpZnk9JHtkb21haW4uZG5zVG9rZW59YCxcblx0XHRcdHR0bDogMzYwMCxcblx0XHRcdGNuYW1lOiB7XG5cdFx0XHRcdGhvc3Q6IGRvbWFpbi5kb21haW4sXG5cdFx0XHRcdHZhbHVlOiBcImNuYW1lLmJvb3N0Y2FydC5iZ1wiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4U0FrRHNCLHNMQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:80b930 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDomainVerificationInstructions",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"400cabd68b4758a91a7e4b77cbe129dfbf0f92627b":"getDomainVerificationInstructions"},"apps/platform/src/server/api/internal/domains.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("400cabd68b4758a91a7e4b77cbe129dfbf0f92627b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getDomainVerificationInstructions");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9tYWlucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7XG5cdHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uLFxuXHRyZXF1aXJlVmlld1Blcm1pc3Npb24sXG59IGZyb20gXCJAL3NlcnZlci9hcGkvcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbi8vIFZhbGlkYXRpb24gc2NoZW1hc1xuY29uc3QgQWRkRG9tYWluU2NoZW1hID0gei5vYmplY3Qoe1xuXHRkb21haW46IHpcblx0XHQuc3RyaW5nKClcblx0XHQubWluKDEsIFwiRG9tYWluIGlzIHJlcXVpcmVkXCIpXG5cdFx0LnJlZ2V4KFxuXHRcdFx0L14oPzpbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT9cXC4pK1thLXpBLVpdezIsfSQvLFxuXHRcdFx0XCJJbnZhbGlkIGRvbWFpbiBmb3JtYXRcIlxuXHRcdClcblx0XHQudHJhbnNmb3JtKChkKSA9PiBkLnRvTG93ZXJDYXNlKCkpLFxufSk7XG5cbi8vIEdldCBhbGwgY3VzdG9tIGRvbWFpbnMgZm9yIHRoZSBjdXJyZW50IHRlbmFudFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvbWFpbnMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVWaWV3UGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdFx0b3JkZXJCeTogW3sgaXNQcmltYXJ5OiBcImRlc2NcIiB9LCB7IGNyZWF0ZWRBdDogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGRvbWFpbnM7XG59XG5cbi8vIEdldCBhIHNpbmdsZSBkb21haW4gYnkgSURcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiBkb21haW47XG59XG5cbi8vIEFkZCBhIG5ldyBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRG9tYWluKGlucHV0OiB7IGRvbWFpbjogc3RyaW5nIH0pIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCB2YWxpZGF0ZWQgPSBBZGREb21haW5TY2hlbWEucGFyc2UoaW5wdXQpO1xuXG5cdC8vIENoZWNrIGlmIGRvbWFpbiBhbHJlYWR5IGV4aXN0cyAoZ2xvYmFsbHkpXG5cdGNvbnN0IGV4aXN0aW5nRG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7IGRvbWFpbjogdmFsaWRhdGVkLmRvbWFpbiB9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmdEb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGRvbWFpbiBpcyBhbHJlYWR5IGluIHVzZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGRvbWFpbiBsaW1pdCAoZS5nLiwgbWF4IDUgY3VzdG9tIGRvbWFpbnMgcGVyIHRlbmFudClcblx0Y29uc3QgZG9tYWluQ291bnQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmIChkb21haW5Db3VudCA+PSA1KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWF4aW11bSBudW1iZXIgb2YgY3VzdG9tIGRvbWFpbnMgcmVhY2hlZCAoNSlcIik7XG5cdH1cblxuXHQvLyBDcmVhdGUgdGhlIGRvbWFpbiB3aXRoIGEgdmVyaWZpY2F0aW9uIHRva2VuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0ZG9tYWluOiB2YWxpZGF0ZWQuZG9tYWluLFxuXHRcdFx0aXNQcmltYXJ5OiBkb21haW5Db3VudCA9PT0gMCwgLy8gRmlyc3QgZG9tYWluIGlzIHByaW1hcnlcblx0XHRcdHNzbFN0YXR1czogXCJwZW5kaW5nXCIsXG5cdFx0XHRkbnNWZXJpZmllZDogZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4gZG9tYWluO1xufVxuXG4vLyBSZW1vdmUgYSBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIERvbid0IGFsbG93IHJlbW92aW5nIHRoZSBwcmltYXJ5IGRvbWFpbiBpZiBvdGhlcnMgZXhpc3Rcblx0aWYgKGRvbWFpbi5pc1ByaW1hcnkpIHtcblx0XHRjb25zdCBvdGhlckRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlkOiB7IG5vdDogZG9tYWluSWQgfSB9LFxuXHRcdH0pO1xuXG5cdFx0aWYgKG90aGVyRG9tYWlucyA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJDYW5ub3QgcmVtb3ZlIHByaW1hcnkgZG9tYWluLiBTZXQgYW5vdGhlciBkb21haW4gYXMgcHJpbWFyeSBmaXJzdC5cIlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRhd2FpdCBkYi50ZW5hbnREb21haW4uZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIFNldCBhIGRvbWFpbiBhcyBwcmltYXJ5XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0UHJpbWFyeURvbWFpbihkb21haW5JZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uKFwic2V0dGluZ3NcIik7XG5cblx0Y29uc3QgZG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIWRvbWFpbikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBub3QgZm91bmRcIik7XG5cdH1cblxuXHRpZiAoIWRvbWFpbi5kbnNWZXJpZmllZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBtdXN0IGJlIHZlcmlmaWVkIGJlZm9yZSBzZXR0aW5nIGFzIHByaW1hcnlcIik7XG5cdH1cblxuXHQvLyBVcGRhdGUgYWxsIGRvbWFpbnM6IHVuc2V0IGN1cnJlbnQgcHJpbWFyeSwgc2V0IG5ldyBwcmltYXJ5XG5cdGF3YWl0IGRiLiR0cmFuc2FjdGlvbihbXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlzUHJpbWFyeTogdHJ1ZSB9LFxuXHRcdFx0ZGF0YTogeyBpc1ByaW1hcnk6IGZhbHNlIH0sXG5cdFx0fSksXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZSh7XG5cdFx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRcdGRhdGE6IHsgaXNQcmltYXJ5OiB0cnVlIH0sXG5cdFx0fSksXG5cdF0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vLyBWZXJpZnkgZG9tYWluIEROUyByZWNvcmRzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5RG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIFBlcmZvcm0gRE5TIHZlcmlmaWNhdGlvblxuXHRjb25zdCBpc1ZlcmlmaWVkID0gYXdhaXQgY2hlY2tEbnNWZXJpZmljYXRpb24oZG9tYWluLmRvbWFpbiwgZG9tYWluLmRuc1Rva2VuKTtcblxuXHRpZiAoaXNWZXJpZmllZCkge1xuXHRcdGF3YWl0IGRiLnRlbmFudERvbWFpbi51cGRhdGUoe1xuXHRcdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkIH0sXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGRuc1ZlcmlmaWVkOiB0cnVlLFxuXHRcdFx0XHRzc2xTdGF0dXM6IFwicHJvdmlzaW9uaW5nXCIsIC8vIFNTTCB3aWxsIGJlIHByb3Zpc2lvbmVkIGJ5IFZlcmNlbC9DbG91ZGZsYXJlXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRcdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHZlcmlmaWVkOiB0cnVlIH07XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB2ZXJpZmllZDogZmFsc2UgfTtcbn1cblxuLy8gUmVmcmVzaCB2ZXJpZmljYXRpb24gdG9rZW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoRG5zVG9rZW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlTWFuYWdlUGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkOiBkb21haW5JZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEb21haW4gbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gR2VuZXJhdGUgYSBuZXcgdG9rZW4gYnkgdXBkYXRpbmcgdGhlIHJlY29yZCAoY3VpZCB3aWxsIGF1dG8tZ2VuZXJhdGUpXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4udXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRkYXRhOiB7XG5cdFx0XHRkbnNUb2tlbjogZ2VuZXJhdGVWZXJpZmljYXRpb25Ub2tlbigpLFxuXHRcdFx0ZG5zVmVyaWZpZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBETlMgVFhUIHJlY29yZFxuYXN5bmMgZnVuY3Rpb24gY2hlY2tEbnNWZXJpZmljYXRpb24oXG5cdGRvbWFpbjogc3RyaW5nLFxuXHRleHBlY3RlZFRva2VuOiBzdHJpbmdcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHR0cnkge1xuXHRcdC8vIFVzZSBETlMgb3ZlciBIVFRQUyAoQ2xvdWRmbGFyZSkgZm9yIHZlcmlmaWNhdGlvblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgaHR0cHM6Ly9jbG91ZGZsYXJlLWRucy5jb20vZG5zLXF1ZXJ5P25hbWU9X2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW59JnR5cGU9VFhUYCxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9kbnMtanNvblwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdGlmICghZGF0YS5BbnN3ZXIgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5BbnN3ZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgaWYgYW55IFRYVCByZWNvcmQgY29udGFpbnMgb3VyIHZlcmlmaWNhdGlvbiB0b2tlblxuXHRcdGZvciAoY29uc3QgYW5zd2VyIG9mIGRhdGEuQW5zd2VyKSB7XG5cdFx0XHRpZiAoYW5zd2VyLnR5cGUgPT09IDE2KSB7XG5cdFx0XHRcdC8vIFRYVCByZWNvcmQgdHlwZVxuXHRcdFx0XHRjb25zdCB0eHRWYWx1ZSA9IGFuc3dlci5kYXRhPy5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcblx0XHRcdFx0aWYgKHR4dFZhbHVlID09PSBgYm9vc3RjYXJ0LXZlcmlmeT0ke2V4cGVjdGVkVG9rZW59YCkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJETlMgdmVyaWZpY2F0aW9uIGVycm9yOlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSB2ZXJpZmljYXRpb24gdG9rZW5cbmZ1bmN0aW9uIGdlbmVyYXRlVmVyaWZpY2F0aW9uVG9rZW4oKTogc3RyaW5nIHtcblx0Y29uc3QgY2hhcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuXHRsZXQgdG9rZW4gPSBcIlwiO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcblx0XHR0b2tlbiArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG5cdH1cblx0cmV0dXJuIHRva2VuO1xufVxuXG4vLyBHZXQgdmVyaWZpY2F0aW9uIGluc3RydWN0aW9ucyBmb3IgYSBkb21haW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW5WZXJpZmljYXRpb25JbnN0cnVjdGlvbnMoZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZG9tYWluOiBkb21haW4uZG9tYWluLFxuXHRcdGRuc1Rva2VuOiBkb21haW4uZG5zVG9rZW4sXG5cdFx0dmVyaWZpZWQ6IGRvbWFpbi5kbnNWZXJpZmllZCxcblx0XHRpbnN0cnVjdGlvbnM6IHtcblx0XHRcdHR5cGU6IFwiVFhUXCIsXG5cdFx0XHRob3N0OiBgX2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW4uZG9tYWlufWAsXG5cdFx0XHR2YWx1ZTogYGJvb3N0Y2FydC12ZXJpZnk9JHtkb21haW4uZG5zVG9rZW59YCxcblx0XHRcdHR0bDogMzYwMCxcblx0XHRcdGNuYW1lOiB7XG5cdFx0XHRcdGhvc3Q6IGRvbWFpbi5kb21haW4sXG5cdFx0XHRcdHZhbHVlOiBcImNuYW1lLmJvb3N0Y2FydC5iZ1wiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzVUE2UXNCLDhNQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:a89bff [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDomains",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"0039aec277912afd4d01246ac7ba2e72032eb260d6":"getDomains"},"apps/platform/src/server/api/internal/domains.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("0039aec277912afd4d01246ac7ba2e72032eb260d6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getDomains");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9tYWlucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7XG5cdHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uLFxuXHRyZXF1aXJlVmlld1Blcm1pc3Npb24sXG59IGZyb20gXCJAL3NlcnZlci9hcGkvcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbi8vIFZhbGlkYXRpb24gc2NoZW1hc1xuY29uc3QgQWRkRG9tYWluU2NoZW1hID0gei5vYmplY3Qoe1xuXHRkb21haW46IHpcblx0XHQuc3RyaW5nKClcblx0XHQubWluKDEsIFwiRG9tYWluIGlzIHJlcXVpcmVkXCIpXG5cdFx0LnJlZ2V4KFxuXHRcdFx0L14oPzpbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT9cXC4pK1thLXpBLVpdezIsfSQvLFxuXHRcdFx0XCJJbnZhbGlkIGRvbWFpbiBmb3JtYXRcIlxuXHRcdClcblx0XHQudHJhbnNmb3JtKChkKSA9PiBkLnRvTG93ZXJDYXNlKCkpLFxufSk7XG5cbi8vIEdldCBhbGwgY3VzdG9tIGRvbWFpbnMgZm9yIHRoZSBjdXJyZW50IHRlbmFudFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvbWFpbnMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVWaWV3UGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdFx0b3JkZXJCeTogW3sgaXNQcmltYXJ5OiBcImRlc2NcIiB9LCB7IGNyZWF0ZWRBdDogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGRvbWFpbnM7XG59XG5cbi8vIEdldCBhIHNpbmdsZSBkb21haW4gYnkgSURcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiBkb21haW47XG59XG5cbi8vIEFkZCBhIG5ldyBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRG9tYWluKGlucHV0OiB7IGRvbWFpbjogc3RyaW5nIH0pIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCB2YWxpZGF0ZWQgPSBBZGREb21haW5TY2hlbWEucGFyc2UoaW5wdXQpO1xuXG5cdC8vIENoZWNrIGlmIGRvbWFpbiBhbHJlYWR5IGV4aXN0cyAoZ2xvYmFsbHkpXG5cdGNvbnN0IGV4aXN0aW5nRG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7IGRvbWFpbjogdmFsaWRhdGVkLmRvbWFpbiB9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmdEb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGRvbWFpbiBpcyBhbHJlYWR5IGluIHVzZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGRvbWFpbiBsaW1pdCAoZS5nLiwgbWF4IDUgY3VzdG9tIGRvbWFpbnMgcGVyIHRlbmFudClcblx0Y29uc3QgZG9tYWluQ291bnQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmIChkb21haW5Db3VudCA+PSA1KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWF4aW11bSBudW1iZXIgb2YgY3VzdG9tIGRvbWFpbnMgcmVhY2hlZCAoNSlcIik7XG5cdH1cblxuXHQvLyBDcmVhdGUgdGhlIGRvbWFpbiB3aXRoIGEgdmVyaWZpY2F0aW9uIHRva2VuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0ZG9tYWluOiB2YWxpZGF0ZWQuZG9tYWluLFxuXHRcdFx0aXNQcmltYXJ5OiBkb21haW5Db3VudCA9PT0gMCwgLy8gRmlyc3QgZG9tYWluIGlzIHByaW1hcnlcblx0XHRcdHNzbFN0YXR1czogXCJwZW5kaW5nXCIsXG5cdFx0XHRkbnNWZXJpZmllZDogZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4gZG9tYWluO1xufVxuXG4vLyBSZW1vdmUgYSBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIERvbid0IGFsbG93IHJlbW92aW5nIHRoZSBwcmltYXJ5IGRvbWFpbiBpZiBvdGhlcnMgZXhpc3Rcblx0aWYgKGRvbWFpbi5pc1ByaW1hcnkpIHtcblx0XHRjb25zdCBvdGhlckRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlkOiB7IG5vdDogZG9tYWluSWQgfSB9LFxuXHRcdH0pO1xuXG5cdFx0aWYgKG90aGVyRG9tYWlucyA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJDYW5ub3QgcmVtb3ZlIHByaW1hcnkgZG9tYWluLiBTZXQgYW5vdGhlciBkb21haW4gYXMgcHJpbWFyeSBmaXJzdC5cIlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRhd2FpdCBkYi50ZW5hbnREb21haW4uZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIFNldCBhIGRvbWFpbiBhcyBwcmltYXJ5XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0UHJpbWFyeURvbWFpbihkb21haW5JZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uKFwic2V0dGluZ3NcIik7XG5cblx0Y29uc3QgZG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIWRvbWFpbikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBub3QgZm91bmRcIik7XG5cdH1cblxuXHRpZiAoIWRvbWFpbi5kbnNWZXJpZmllZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBtdXN0IGJlIHZlcmlmaWVkIGJlZm9yZSBzZXR0aW5nIGFzIHByaW1hcnlcIik7XG5cdH1cblxuXHQvLyBVcGRhdGUgYWxsIGRvbWFpbnM6IHVuc2V0IGN1cnJlbnQgcHJpbWFyeSwgc2V0IG5ldyBwcmltYXJ5XG5cdGF3YWl0IGRiLiR0cmFuc2FjdGlvbihbXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlzUHJpbWFyeTogdHJ1ZSB9LFxuXHRcdFx0ZGF0YTogeyBpc1ByaW1hcnk6IGZhbHNlIH0sXG5cdFx0fSksXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZSh7XG5cdFx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRcdGRhdGE6IHsgaXNQcmltYXJ5OiB0cnVlIH0sXG5cdFx0fSksXG5cdF0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vLyBWZXJpZnkgZG9tYWluIEROUyByZWNvcmRzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5RG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIFBlcmZvcm0gRE5TIHZlcmlmaWNhdGlvblxuXHRjb25zdCBpc1ZlcmlmaWVkID0gYXdhaXQgY2hlY2tEbnNWZXJpZmljYXRpb24oZG9tYWluLmRvbWFpbiwgZG9tYWluLmRuc1Rva2VuKTtcblxuXHRpZiAoaXNWZXJpZmllZCkge1xuXHRcdGF3YWl0IGRiLnRlbmFudERvbWFpbi51cGRhdGUoe1xuXHRcdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkIH0sXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGRuc1ZlcmlmaWVkOiB0cnVlLFxuXHRcdFx0XHRzc2xTdGF0dXM6IFwicHJvdmlzaW9uaW5nXCIsIC8vIFNTTCB3aWxsIGJlIHByb3Zpc2lvbmVkIGJ5IFZlcmNlbC9DbG91ZGZsYXJlXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRcdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHZlcmlmaWVkOiB0cnVlIH07XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB2ZXJpZmllZDogZmFsc2UgfTtcbn1cblxuLy8gUmVmcmVzaCB2ZXJpZmljYXRpb24gdG9rZW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoRG5zVG9rZW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlTWFuYWdlUGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkOiBkb21haW5JZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEb21haW4gbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gR2VuZXJhdGUgYSBuZXcgdG9rZW4gYnkgdXBkYXRpbmcgdGhlIHJlY29yZCAoY3VpZCB3aWxsIGF1dG8tZ2VuZXJhdGUpXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4udXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRkYXRhOiB7XG5cdFx0XHRkbnNUb2tlbjogZ2VuZXJhdGVWZXJpZmljYXRpb25Ub2tlbigpLFxuXHRcdFx0ZG5zVmVyaWZpZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBETlMgVFhUIHJlY29yZFxuYXN5bmMgZnVuY3Rpb24gY2hlY2tEbnNWZXJpZmljYXRpb24oXG5cdGRvbWFpbjogc3RyaW5nLFxuXHRleHBlY3RlZFRva2VuOiBzdHJpbmdcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHR0cnkge1xuXHRcdC8vIFVzZSBETlMgb3ZlciBIVFRQUyAoQ2xvdWRmbGFyZSkgZm9yIHZlcmlmaWNhdGlvblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgaHR0cHM6Ly9jbG91ZGZsYXJlLWRucy5jb20vZG5zLXF1ZXJ5P25hbWU9X2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW59JnR5cGU9VFhUYCxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9kbnMtanNvblwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdGlmICghZGF0YS5BbnN3ZXIgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5BbnN3ZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgaWYgYW55IFRYVCByZWNvcmQgY29udGFpbnMgb3VyIHZlcmlmaWNhdGlvbiB0b2tlblxuXHRcdGZvciAoY29uc3QgYW5zd2VyIG9mIGRhdGEuQW5zd2VyKSB7XG5cdFx0XHRpZiAoYW5zd2VyLnR5cGUgPT09IDE2KSB7XG5cdFx0XHRcdC8vIFRYVCByZWNvcmQgdHlwZVxuXHRcdFx0XHRjb25zdCB0eHRWYWx1ZSA9IGFuc3dlci5kYXRhPy5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcblx0XHRcdFx0aWYgKHR4dFZhbHVlID09PSBgYm9vc3RjYXJ0LXZlcmlmeT0ke2V4cGVjdGVkVG9rZW59YCkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJETlMgdmVyaWZpY2F0aW9uIGVycm9yOlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSB2ZXJpZmljYXRpb24gdG9rZW5cbmZ1bmN0aW9uIGdlbmVyYXRlVmVyaWZpY2F0aW9uVG9rZW4oKTogc3RyaW5nIHtcblx0Y29uc3QgY2hhcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuXHRsZXQgdG9rZW4gPSBcIlwiO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcblx0XHR0b2tlbiArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG5cdH1cblx0cmV0dXJuIHRva2VuO1xufVxuXG4vLyBHZXQgdmVyaWZpY2F0aW9uIGluc3RydWN0aW9ucyBmb3IgYSBkb21haW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW5WZXJpZmljYXRpb25JbnN0cnVjdGlvbnMoZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZG9tYWluOiBkb21haW4uZG9tYWluLFxuXHRcdGRuc1Rva2VuOiBkb21haW4uZG5zVG9rZW4sXG5cdFx0dmVyaWZpZWQ6IGRvbWFpbi5kbnNWZXJpZmllZCxcblx0XHRpbnN0cnVjdGlvbnM6IHtcblx0XHRcdHR5cGU6IFwiVFhUXCIsXG5cdFx0XHRob3N0OiBgX2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW4uZG9tYWlufWAsXG5cdFx0XHR2YWx1ZTogYGJvb3N0Y2FydC12ZXJpZnk9JHtkb21haW4uZG5zVG9rZW59YCxcblx0XHRcdHR0bDogMzYwMCxcblx0XHRcdGNuYW1lOiB7XG5cdFx0XHRcdGhvc3Q6IGRvbWFpbi5kb21haW4sXG5cdFx0XHRcdHZhbHVlOiBcImNuYW1lLmJvb3N0Y2FydC5iZ1wiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrU0F1QnNCLHVMQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:96b6a9 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "refreshDnsToken",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40cc31663a422896f468a3f28d2a20f5fe65de730b":"refreshDnsToken"},"apps/platform/src/server/api/internal/domains.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40cc31663a422896f468a3f28d2a20f5fe65de730b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "refreshDnsToken");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9tYWlucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7XG5cdHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uLFxuXHRyZXF1aXJlVmlld1Blcm1pc3Npb24sXG59IGZyb20gXCJAL3NlcnZlci9hcGkvcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbi8vIFZhbGlkYXRpb24gc2NoZW1hc1xuY29uc3QgQWRkRG9tYWluU2NoZW1hID0gei5vYmplY3Qoe1xuXHRkb21haW46IHpcblx0XHQuc3RyaW5nKClcblx0XHQubWluKDEsIFwiRG9tYWluIGlzIHJlcXVpcmVkXCIpXG5cdFx0LnJlZ2V4KFxuXHRcdFx0L14oPzpbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT9cXC4pK1thLXpBLVpdezIsfSQvLFxuXHRcdFx0XCJJbnZhbGlkIGRvbWFpbiBmb3JtYXRcIlxuXHRcdClcblx0XHQudHJhbnNmb3JtKChkKSA9PiBkLnRvTG93ZXJDYXNlKCkpLFxufSk7XG5cbi8vIEdldCBhbGwgY3VzdG9tIGRvbWFpbnMgZm9yIHRoZSBjdXJyZW50IHRlbmFudFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvbWFpbnMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVWaWV3UGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdFx0b3JkZXJCeTogW3sgaXNQcmltYXJ5OiBcImRlc2NcIiB9LCB7IGNyZWF0ZWRBdDogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGRvbWFpbnM7XG59XG5cbi8vIEdldCBhIHNpbmdsZSBkb21haW4gYnkgSURcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiBkb21haW47XG59XG5cbi8vIEFkZCBhIG5ldyBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRG9tYWluKGlucHV0OiB7IGRvbWFpbjogc3RyaW5nIH0pIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCB2YWxpZGF0ZWQgPSBBZGREb21haW5TY2hlbWEucGFyc2UoaW5wdXQpO1xuXG5cdC8vIENoZWNrIGlmIGRvbWFpbiBhbHJlYWR5IGV4aXN0cyAoZ2xvYmFsbHkpXG5cdGNvbnN0IGV4aXN0aW5nRG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7IGRvbWFpbjogdmFsaWRhdGVkLmRvbWFpbiB9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmdEb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGRvbWFpbiBpcyBhbHJlYWR5IGluIHVzZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGRvbWFpbiBsaW1pdCAoZS5nLiwgbWF4IDUgY3VzdG9tIGRvbWFpbnMgcGVyIHRlbmFudClcblx0Y29uc3QgZG9tYWluQ291bnQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmIChkb21haW5Db3VudCA+PSA1KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWF4aW11bSBudW1iZXIgb2YgY3VzdG9tIGRvbWFpbnMgcmVhY2hlZCAoNSlcIik7XG5cdH1cblxuXHQvLyBDcmVhdGUgdGhlIGRvbWFpbiB3aXRoIGEgdmVyaWZpY2F0aW9uIHRva2VuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0ZG9tYWluOiB2YWxpZGF0ZWQuZG9tYWluLFxuXHRcdFx0aXNQcmltYXJ5OiBkb21haW5Db3VudCA9PT0gMCwgLy8gRmlyc3QgZG9tYWluIGlzIHByaW1hcnlcblx0XHRcdHNzbFN0YXR1czogXCJwZW5kaW5nXCIsXG5cdFx0XHRkbnNWZXJpZmllZDogZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4gZG9tYWluO1xufVxuXG4vLyBSZW1vdmUgYSBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIERvbid0IGFsbG93IHJlbW92aW5nIHRoZSBwcmltYXJ5IGRvbWFpbiBpZiBvdGhlcnMgZXhpc3Rcblx0aWYgKGRvbWFpbi5pc1ByaW1hcnkpIHtcblx0XHRjb25zdCBvdGhlckRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlkOiB7IG5vdDogZG9tYWluSWQgfSB9LFxuXHRcdH0pO1xuXG5cdFx0aWYgKG90aGVyRG9tYWlucyA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJDYW5ub3QgcmVtb3ZlIHByaW1hcnkgZG9tYWluLiBTZXQgYW5vdGhlciBkb21haW4gYXMgcHJpbWFyeSBmaXJzdC5cIlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRhd2FpdCBkYi50ZW5hbnREb21haW4uZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIFNldCBhIGRvbWFpbiBhcyBwcmltYXJ5XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0UHJpbWFyeURvbWFpbihkb21haW5JZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uKFwic2V0dGluZ3NcIik7XG5cblx0Y29uc3QgZG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIWRvbWFpbikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBub3QgZm91bmRcIik7XG5cdH1cblxuXHRpZiAoIWRvbWFpbi5kbnNWZXJpZmllZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBtdXN0IGJlIHZlcmlmaWVkIGJlZm9yZSBzZXR0aW5nIGFzIHByaW1hcnlcIik7XG5cdH1cblxuXHQvLyBVcGRhdGUgYWxsIGRvbWFpbnM6IHVuc2V0IGN1cnJlbnQgcHJpbWFyeSwgc2V0IG5ldyBwcmltYXJ5XG5cdGF3YWl0IGRiLiR0cmFuc2FjdGlvbihbXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlzUHJpbWFyeTogdHJ1ZSB9LFxuXHRcdFx0ZGF0YTogeyBpc1ByaW1hcnk6IGZhbHNlIH0sXG5cdFx0fSksXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZSh7XG5cdFx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRcdGRhdGE6IHsgaXNQcmltYXJ5OiB0cnVlIH0sXG5cdFx0fSksXG5cdF0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vLyBWZXJpZnkgZG9tYWluIEROUyByZWNvcmRzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5RG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIFBlcmZvcm0gRE5TIHZlcmlmaWNhdGlvblxuXHRjb25zdCBpc1ZlcmlmaWVkID0gYXdhaXQgY2hlY2tEbnNWZXJpZmljYXRpb24oZG9tYWluLmRvbWFpbiwgZG9tYWluLmRuc1Rva2VuKTtcblxuXHRpZiAoaXNWZXJpZmllZCkge1xuXHRcdGF3YWl0IGRiLnRlbmFudERvbWFpbi51cGRhdGUoe1xuXHRcdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkIH0sXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGRuc1ZlcmlmaWVkOiB0cnVlLFxuXHRcdFx0XHRzc2xTdGF0dXM6IFwicHJvdmlzaW9uaW5nXCIsIC8vIFNTTCB3aWxsIGJlIHByb3Zpc2lvbmVkIGJ5IFZlcmNlbC9DbG91ZGZsYXJlXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRcdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHZlcmlmaWVkOiB0cnVlIH07XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB2ZXJpZmllZDogZmFsc2UgfTtcbn1cblxuLy8gUmVmcmVzaCB2ZXJpZmljYXRpb24gdG9rZW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoRG5zVG9rZW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlTWFuYWdlUGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkOiBkb21haW5JZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEb21haW4gbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gR2VuZXJhdGUgYSBuZXcgdG9rZW4gYnkgdXBkYXRpbmcgdGhlIHJlY29yZCAoY3VpZCB3aWxsIGF1dG8tZ2VuZXJhdGUpXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4udXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRkYXRhOiB7XG5cdFx0XHRkbnNUb2tlbjogZ2VuZXJhdGVWZXJpZmljYXRpb25Ub2tlbigpLFxuXHRcdFx0ZG5zVmVyaWZpZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBETlMgVFhUIHJlY29yZFxuYXN5bmMgZnVuY3Rpb24gY2hlY2tEbnNWZXJpZmljYXRpb24oXG5cdGRvbWFpbjogc3RyaW5nLFxuXHRleHBlY3RlZFRva2VuOiBzdHJpbmdcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHR0cnkge1xuXHRcdC8vIFVzZSBETlMgb3ZlciBIVFRQUyAoQ2xvdWRmbGFyZSkgZm9yIHZlcmlmaWNhdGlvblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgaHR0cHM6Ly9jbG91ZGZsYXJlLWRucy5jb20vZG5zLXF1ZXJ5P25hbWU9X2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW59JnR5cGU9VFhUYCxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9kbnMtanNvblwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdGlmICghZGF0YS5BbnN3ZXIgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5BbnN3ZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgaWYgYW55IFRYVCByZWNvcmQgY29udGFpbnMgb3VyIHZlcmlmaWNhdGlvbiB0b2tlblxuXHRcdGZvciAoY29uc3QgYW5zd2VyIG9mIGRhdGEuQW5zd2VyKSB7XG5cdFx0XHRpZiAoYW5zd2VyLnR5cGUgPT09IDE2KSB7XG5cdFx0XHRcdC8vIFRYVCByZWNvcmQgdHlwZVxuXHRcdFx0XHRjb25zdCB0eHRWYWx1ZSA9IGFuc3dlci5kYXRhPy5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcblx0XHRcdFx0aWYgKHR4dFZhbHVlID09PSBgYm9vc3RjYXJ0LXZlcmlmeT0ke2V4cGVjdGVkVG9rZW59YCkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJETlMgdmVyaWZpY2F0aW9uIGVycm9yOlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSB2ZXJpZmljYXRpb24gdG9rZW5cbmZ1bmN0aW9uIGdlbmVyYXRlVmVyaWZpY2F0aW9uVG9rZW4oKTogc3RyaW5nIHtcblx0Y29uc3QgY2hhcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuXHRsZXQgdG9rZW4gPSBcIlwiO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcblx0XHR0b2tlbiArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG5cdH1cblx0cmV0dXJuIHRva2VuO1xufVxuXG4vLyBHZXQgdmVyaWZpY2F0aW9uIGluc3RydWN0aW9ucyBmb3IgYSBkb21haW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW5WZXJpZmljYXRpb25JbnN0cnVjdGlvbnMoZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZG9tYWluOiBkb21haW4uZG9tYWluLFxuXHRcdGRuc1Rva2VuOiBkb21haW4uZG5zVG9rZW4sXG5cdFx0dmVyaWZpZWQ6IGRvbWFpbi5kbnNWZXJpZmllZCxcblx0XHRpbnN0cnVjdGlvbnM6IHtcblx0XHRcdHR5cGU6IFwiVFhUXCIsXG5cdFx0XHRob3N0OiBgX2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW4uZG9tYWlufWAsXG5cdFx0XHR2YWx1ZTogYGJvb3N0Y2FydC12ZXJpZnk9JHtkb21haW4uZG5zVG9rZW59YCxcblx0XHRcdHR0bDogMzYwMCxcblx0XHRcdGNuYW1lOiB7XG5cdFx0XHRcdGhvc3Q6IGRvbWFpbi5kb21haW4sXG5cdFx0XHRcdHZhbHVlOiBcImNuYW1lLmJvb3N0Y2FydC5iZ1wiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvVEE2THNCLDRMQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:5370bc [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeDomain",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4095bfdbff7509e269d164352ff3e406f53a8bc2a2":"removeDomain"},"apps/platform/src/server/api/internal/domains.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4095bfdbff7509e269d164352ff3e406f53a8bc2a2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "removeDomain");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9tYWlucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7XG5cdHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uLFxuXHRyZXF1aXJlVmlld1Blcm1pc3Npb24sXG59IGZyb20gXCJAL3NlcnZlci9hcGkvcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbi8vIFZhbGlkYXRpb24gc2NoZW1hc1xuY29uc3QgQWRkRG9tYWluU2NoZW1hID0gei5vYmplY3Qoe1xuXHRkb21haW46IHpcblx0XHQuc3RyaW5nKClcblx0XHQubWluKDEsIFwiRG9tYWluIGlzIHJlcXVpcmVkXCIpXG5cdFx0LnJlZ2V4KFxuXHRcdFx0L14oPzpbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT9cXC4pK1thLXpBLVpdezIsfSQvLFxuXHRcdFx0XCJJbnZhbGlkIGRvbWFpbiBmb3JtYXRcIlxuXHRcdClcblx0XHQudHJhbnNmb3JtKChkKSA9PiBkLnRvTG93ZXJDYXNlKCkpLFxufSk7XG5cbi8vIEdldCBhbGwgY3VzdG9tIGRvbWFpbnMgZm9yIHRoZSBjdXJyZW50IHRlbmFudFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvbWFpbnMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVWaWV3UGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdFx0b3JkZXJCeTogW3sgaXNQcmltYXJ5OiBcImRlc2NcIiB9LCB7IGNyZWF0ZWRBdDogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGRvbWFpbnM7XG59XG5cbi8vIEdldCBhIHNpbmdsZSBkb21haW4gYnkgSURcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiBkb21haW47XG59XG5cbi8vIEFkZCBhIG5ldyBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRG9tYWluKGlucHV0OiB7IGRvbWFpbjogc3RyaW5nIH0pIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCB2YWxpZGF0ZWQgPSBBZGREb21haW5TY2hlbWEucGFyc2UoaW5wdXQpO1xuXG5cdC8vIENoZWNrIGlmIGRvbWFpbiBhbHJlYWR5IGV4aXN0cyAoZ2xvYmFsbHkpXG5cdGNvbnN0IGV4aXN0aW5nRG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7IGRvbWFpbjogdmFsaWRhdGVkLmRvbWFpbiB9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmdEb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGRvbWFpbiBpcyBhbHJlYWR5IGluIHVzZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGRvbWFpbiBsaW1pdCAoZS5nLiwgbWF4IDUgY3VzdG9tIGRvbWFpbnMgcGVyIHRlbmFudClcblx0Y29uc3QgZG9tYWluQ291bnQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmIChkb21haW5Db3VudCA+PSA1KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWF4aW11bSBudW1iZXIgb2YgY3VzdG9tIGRvbWFpbnMgcmVhY2hlZCAoNSlcIik7XG5cdH1cblxuXHQvLyBDcmVhdGUgdGhlIGRvbWFpbiB3aXRoIGEgdmVyaWZpY2F0aW9uIHRva2VuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0ZG9tYWluOiB2YWxpZGF0ZWQuZG9tYWluLFxuXHRcdFx0aXNQcmltYXJ5OiBkb21haW5Db3VudCA9PT0gMCwgLy8gRmlyc3QgZG9tYWluIGlzIHByaW1hcnlcblx0XHRcdHNzbFN0YXR1czogXCJwZW5kaW5nXCIsXG5cdFx0XHRkbnNWZXJpZmllZDogZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4gZG9tYWluO1xufVxuXG4vLyBSZW1vdmUgYSBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIERvbid0IGFsbG93IHJlbW92aW5nIHRoZSBwcmltYXJ5IGRvbWFpbiBpZiBvdGhlcnMgZXhpc3Rcblx0aWYgKGRvbWFpbi5pc1ByaW1hcnkpIHtcblx0XHRjb25zdCBvdGhlckRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlkOiB7IG5vdDogZG9tYWluSWQgfSB9LFxuXHRcdH0pO1xuXG5cdFx0aWYgKG90aGVyRG9tYWlucyA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJDYW5ub3QgcmVtb3ZlIHByaW1hcnkgZG9tYWluLiBTZXQgYW5vdGhlciBkb21haW4gYXMgcHJpbWFyeSBmaXJzdC5cIlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRhd2FpdCBkYi50ZW5hbnREb21haW4uZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIFNldCBhIGRvbWFpbiBhcyBwcmltYXJ5XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0UHJpbWFyeURvbWFpbihkb21haW5JZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uKFwic2V0dGluZ3NcIik7XG5cblx0Y29uc3QgZG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIWRvbWFpbikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBub3QgZm91bmRcIik7XG5cdH1cblxuXHRpZiAoIWRvbWFpbi5kbnNWZXJpZmllZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBtdXN0IGJlIHZlcmlmaWVkIGJlZm9yZSBzZXR0aW5nIGFzIHByaW1hcnlcIik7XG5cdH1cblxuXHQvLyBVcGRhdGUgYWxsIGRvbWFpbnM6IHVuc2V0IGN1cnJlbnQgcHJpbWFyeSwgc2V0IG5ldyBwcmltYXJ5XG5cdGF3YWl0IGRiLiR0cmFuc2FjdGlvbihbXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlzUHJpbWFyeTogdHJ1ZSB9LFxuXHRcdFx0ZGF0YTogeyBpc1ByaW1hcnk6IGZhbHNlIH0sXG5cdFx0fSksXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZSh7XG5cdFx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRcdGRhdGE6IHsgaXNQcmltYXJ5OiB0cnVlIH0sXG5cdFx0fSksXG5cdF0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vLyBWZXJpZnkgZG9tYWluIEROUyByZWNvcmRzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5RG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIFBlcmZvcm0gRE5TIHZlcmlmaWNhdGlvblxuXHRjb25zdCBpc1ZlcmlmaWVkID0gYXdhaXQgY2hlY2tEbnNWZXJpZmljYXRpb24oZG9tYWluLmRvbWFpbiwgZG9tYWluLmRuc1Rva2VuKTtcblxuXHRpZiAoaXNWZXJpZmllZCkge1xuXHRcdGF3YWl0IGRiLnRlbmFudERvbWFpbi51cGRhdGUoe1xuXHRcdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkIH0sXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGRuc1ZlcmlmaWVkOiB0cnVlLFxuXHRcdFx0XHRzc2xTdGF0dXM6IFwicHJvdmlzaW9uaW5nXCIsIC8vIFNTTCB3aWxsIGJlIHByb3Zpc2lvbmVkIGJ5IFZlcmNlbC9DbG91ZGZsYXJlXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRcdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHZlcmlmaWVkOiB0cnVlIH07XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB2ZXJpZmllZDogZmFsc2UgfTtcbn1cblxuLy8gUmVmcmVzaCB2ZXJpZmljYXRpb24gdG9rZW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoRG5zVG9rZW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlTWFuYWdlUGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkOiBkb21haW5JZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEb21haW4gbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gR2VuZXJhdGUgYSBuZXcgdG9rZW4gYnkgdXBkYXRpbmcgdGhlIHJlY29yZCAoY3VpZCB3aWxsIGF1dG8tZ2VuZXJhdGUpXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4udXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRkYXRhOiB7XG5cdFx0XHRkbnNUb2tlbjogZ2VuZXJhdGVWZXJpZmljYXRpb25Ub2tlbigpLFxuXHRcdFx0ZG5zVmVyaWZpZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBETlMgVFhUIHJlY29yZFxuYXN5bmMgZnVuY3Rpb24gY2hlY2tEbnNWZXJpZmljYXRpb24oXG5cdGRvbWFpbjogc3RyaW5nLFxuXHRleHBlY3RlZFRva2VuOiBzdHJpbmdcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHR0cnkge1xuXHRcdC8vIFVzZSBETlMgb3ZlciBIVFRQUyAoQ2xvdWRmbGFyZSkgZm9yIHZlcmlmaWNhdGlvblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgaHR0cHM6Ly9jbG91ZGZsYXJlLWRucy5jb20vZG5zLXF1ZXJ5P25hbWU9X2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW59JnR5cGU9VFhUYCxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9kbnMtanNvblwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdGlmICghZGF0YS5BbnN3ZXIgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5BbnN3ZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgaWYgYW55IFRYVCByZWNvcmQgY29udGFpbnMgb3VyIHZlcmlmaWNhdGlvbiB0b2tlblxuXHRcdGZvciAoY29uc3QgYW5zd2VyIG9mIGRhdGEuQW5zd2VyKSB7XG5cdFx0XHRpZiAoYW5zd2VyLnR5cGUgPT09IDE2KSB7XG5cdFx0XHRcdC8vIFRYVCByZWNvcmQgdHlwZVxuXHRcdFx0XHRjb25zdCB0eHRWYWx1ZSA9IGFuc3dlci5kYXRhPy5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcblx0XHRcdFx0aWYgKHR4dFZhbHVlID09PSBgYm9vc3RjYXJ0LXZlcmlmeT0ke2V4cGVjdGVkVG9rZW59YCkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJETlMgdmVyaWZpY2F0aW9uIGVycm9yOlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSB2ZXJpZmljYXRpb24gdG9rZW5cbmZ1bmN0aW9uIGdlbmVyYXRlVmVyaWZpY2F0aW9uVG9rZW4oKTogc3RyaW5nIHtcblx0Y29uc3QgY2hhcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuXHRsZXQgdG9rZW4gPSBcIlwiO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcblx0XHR0b2tlbiArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG5cdH1cblx0cmV0dXJuIHRva2VuO1xufVxuXG4vLyBHZXQgdmVyaWZpY2F0aW9uIGluc3RydWN0aW9ucyBmb3IgYSBkb21haW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW5WZXJpZmljYXRpb25JbnN0cnVjdGlvbnMoZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZG9tYWluOiBkb21haW4uZG9tYWluLFxuXHRcdGRuc1Rva2VuOiBkb21haW4uZG5zVG9rZW4sXG5cdFx0dmVyaWZpZWQ6IGRvbWFpbi5kbnNWZXJpZmllZCxcblx0XHRpbnN0cnVjdGlvbnM6IHtcblx0XHRcdHR5cGU6IFwiVFhUXCIsXG5cdFx0XHRob3N0OiBgX2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW4uZG9tYWlufWAsXG5cdFx0XHR2YWx1ZTogYGJvb3N0Y2FydC12ZXJpZnk9JHtkb21haW4uZG5zVG9rZW59YCxcblx0XHRcdHR0bDogMzYwMCxcblx0XHRcdGNuYW1lOiB7XG5cdFx0XHRcdGhvc3Q6IGRvbWFpbi5kb21haW4sXG5cdFx0XHRcdHZhbHVlOiBcImNuYW1lLmJvb3N0Y2FydC5iZ1wiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpVEEwRnNCLHlMQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:8ce927 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setPrimaryDomain",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"405fa7bfc89c3d069e3466cebb96251ed386e72bac":"setPrimaryDomain"},"apps/platform/src/server/api/internal/domains.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("405fa7bfc89c3d069e3466cebb96251ed386e72bac", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "setPrimaryDomain");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9tYWlucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7XG5cdHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uLFxuXHRyZXF1aXJlVmlld1Blcm1pc3Npb24sXG59IGZyb20gXCJAL3NlcnZlci9hcGkvcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbi8vIFZhbGlkYXRpb24gc2NoZW1hc1xuY29uc3QgQWRkRG9tYWluU2NoZW1hID0gei5vYmplY3Qoe1xuXHRkb21haW46IHpcblx0XHQuc3RyaW5nKClcblx0XHQubWluKDEsIFwiRG9tYWluIGlzIHJlcXVpcmVkXCIpXG5cdFx0LnJlZ2V4KFxuXHRcdFx0L14oPzpbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT9cXC4pK1thLXpBLVpdezIsfSQvLFxuXHRcdFx0XCJJbnZhbGlkIGRvbWFpbiBmb3JtYXRcIlxuXHRcdClcblx0XHQudHJhbnNmb3JtKChkKSA9PiBkLnRvTG93ZXJDYXNlKCkpLFxufSk7XG5cbi8vIEdldCBhbGwgY3VzdG9tIGRvbWFpbnMgZm9yIHRoZSBjdXJyZW50IHRlbmFudFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvbWFpbnMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVWaWV3UGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdFx0b3JkZXJCeTogW3sgaXNQcmltYXJ5OiBcImRlc2NcIiB9LCB7IGNyZWF0ZWRBdDogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGRvbWFpbnM7XG59XG5cbi8vIEdldCBhIHNpbmdsZSBkb21haW4gYnkgSURcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiBkb21haW47XG59XG5cbi8vIEFkZCBhIG5ldyBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRG9tYWluKGlucHV0OiB7IGRvbWFpbjogc3RyaW5nIH0pIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCB2YWxpZGF0ZWQgPSBBZGREb21haW5TY2hlbWEucGFyc2UoaW5wdXQpO1xuXG5cdC8vIENoZWNrIGlmIGRvbWFpbiBhbHJlYWR5IGV4aXN0cyAoZ2xvYmFsbHkpXG5cdGNvbnN0IGV4aXN0aW5nRG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7IGRvbWFpbjogdmFsaWRhdGVkLmRvbWFpbiB9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmdEb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGRvbWFpbiBpcyBhbHJlYWR5IGluIHVzZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGRvbWFpbiBsaW1pdCAoZS5nLiwgbWF4IDUgY3VzdG9tIGRvbWFpbnMgcGVyIHRlbmFudClcblx0Y29uc3QgZG9tYWluQ291bnQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmIChkb21haW5Db3VudCA+PSA1KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWF4aW11bSBudW1iZXIgb2YgY3VzdG9tIGRvbWFpbnMgcmVhY2hlZCAoNSlcIik7XG5cdH1cblxuXHQvLyBDcmVhdGUgdGhlIGRvbWFpbiB3aXRoIGEgdmVyaWZpY2F0aW9uIHRva2VuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0ZG9tYWluOiB2YWxpZGF0ZWQuZG9tYWluLFxuXHRcdFx0aXNQcmltYXJ5OiBkb21haW5Db3VudCA9PT0gMCwgLy8gRmlyc3QgZG9tYWluIGlzIHByaW1hcnlcblx0XHRcdHNzbFN0YXR1czogXCJwZW5kaW5nXCIsXG5cdFx0XHRkbnNWZXJpZmllZDogZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4gZG9tYWluO1xufVxuXG4vLyBSZW1vdmUgYSBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIERvbid0IGFsbG93IHJlbW92aW5nIHRoZSBwcmltYXJ5IGRvbWFpbiBpZiBvdGhlcnMgZXhpc3Rcblx0aWYgKGRvbWFpbi5pc1ByaW1hcnkpIHtcblx0XHRjb25zdCBvdGhlckRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlkOiB7IG5vdDogZG9tYWluSWQgfSB9LFxuXHRcdH0pO1xuXG5cdFx0aWYgKG90aGVyRG9tYWlucyA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJDYW5ub3QgcmVtb3ZlIHByaW1hcnkgZG9tYWluLiBTZXQgYW5vdGhlciBkb21haW4gYXMgcHJpbWFyeSBmaXJzdC5cIlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRhd2FpdCBkYi50ZW5hbnREb21haW4uZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIFNldCBhIGRvbWFpbiBhcyBwcmltYXJ5XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0UHJpbWFyeURvbWFpbihkb21haW5JZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uKFwic2V0dGluZ3NcIik7XG5cblx0Y29uc3QgZG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIWRvbWFpbikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBub3QgZm91bmRcIik7XG5cdH1cblxuXHRpZiAoIWRvbWFpbi5kbnNWZXJpZmllZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBtdXN0IGJlIHZlcmlmaWVkIGJlZm9yZSBzZXR0aW5nIGFzIHByaW1hcnlcIik7XG5cdH1cblxuXHQvLyBVcGRhdGUgYWxsIGRvbWFpbnM6IHVuc2V0IGN1cnJlbnQgcHJpbWFyeSwgc2V0IG5ldyBwcmltYXJ5XG5cdGF3YWl0IGRiLiR0cmFuc2FjdGlvbihbXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlzUHJpbWFyeTogdHJ1ZSB9LFxuXHRcdFx0ZGF0YTogeyBpc1ByaW1hcnk6IGZhbHNlIH0sXG5cdFx0fSksXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZSh7XG5cdFx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRcdGRhdGE6IHsgaXNQcmltYXJ5OiB0cnVlIH0sXG5cdFx0fSksXG5cdF0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vLyBWZXJpZnkgZG9tYWluIEROUyByZWNvcmRzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5RG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIFBlcmZvcm0gRE5TIHZlcmlmaWNhdGlvblxuXHRjb25zdCBpc1ZlcmlmaWVkID0gYXdhaXQgY2hlY2tEbnNWZXJpZmljYXRpb24oZG9tYWluLmRvbWFpbiwgZG9tYWluLmRuc1Rva2VuKTtcblxuXHRpZiAoaXNWZXJpZmllZCkge1xuXHRcdGF3YWl0IGRiLnRlbmFudERvbWFpbi51cGRhdGUoe1xuXHRcdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkIH0sXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGRuc1ZlcmlmaWVkOiB0cnVlLFxuXHRcdFx0XHRzc2xTdGF0dXM6IFwicHJvdmlzaW9uaW5nXCIsIC8vIFNTTCB3aWxsIGJlIHByb3Zpc2lvbmVkIGJ5IFZlcmNlbC9DbG91ZGZsYXJlXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRcdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHZlcmlmaWVkOiB0cnVlIH07XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB2ZXJpZmllZDogZmFsc2UgfTtcbn1cblxuLy8gUmVmcmVzaCB2ZXJpZmljYXRpb24gdG9rZW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoRG5zVG9rZW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlTWFuYWdlUGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkOiBkb21haW5JZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEb21haW4gbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gR2VuZXJhdGUgYSBuZXcgdG9rZW4gYnkgdXBkYXRpbmcgdGhlIHJlY29yZCAoY3VpZCB3aWxsIGF1dG8tZ2VuZXJhdGUpXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4udXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRkYXRhOiB7XG5cdFx0XHRkbnNUb2tlbjogZ2VuZXJhdGVWZXJpZmljYXRpb25Ub2tlbigpLFxuXHRcdFx0ZG5zVmVyaWZpZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBETlMgVFhUIHJlY29yZFxuYXN5bmMgZnVuY3Rpb24gY2hlY2tEbnNWZXJpZmljYXRpb24oXG5cdGRvbWFpbjogc3RyaW5nLFxuXHRleHBlY3RlZFRva2VuOiBzdHJpbmdcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHR0cnkge1xuXHRcdC8vIFVzZSBETlMgb3ZlciBIVFRQUyAoQ2xvdWRmbGFyZSkgZm9yIHZlcmlmaWNhdGlvblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgaHR0cHM6Ly9jbG91ZGZsYXJlLWRucy5jb20vZG5zLXF1ZXJ5P25hbWU9X2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW59JnR5cGU9VFhUYCxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9kbnMtanNvblwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdGlmICghZGF0YS5BbnN3ZXIgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5BbnN3ZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgaWYgYW55IFRYVCByZWNvcmQgY29udGFpbnMgb3VyIHZlcmlmaWNhdGlvbiB0b2tlblxuXHRcdGZvciAoY29uc3QgYW5zd2VyIG9mIGRhdGEuQW5zd2VyKSB7XG5cdFx0XHRpZiAoYW5zd2VyLnR5cGUgPT09IDE2KSB7XG5cdFx0XHRcdC8vIFRYVCByZWNvcmQgdHlwZVxuXHRcdFx0XHRjb25zdCB0eHRWYWx1ZSA9IGFuc3dlci5kYXRhPy5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcblx0XHRcdFx0aWYgKHR4dFZhbHVlID09PSBgYm9vc3RjYXJ0LXZlcmlmeT0ke2V4cGVjdGVkVG9rZW59YCkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJETlMgdmVyaWZpY2F0aW9uIGVycm9yOlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSB2ZXJpZmljYXRpb24gdG9rZW5cbmZ1bmN0aW9uIGdlbmVyYXRlVmVyaWZpY2F0aW9uVG9rZW4oKTogc3RyaW5nIHtcblx0Y29uc3QgY2hhcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuXHRsZXQgdG9rZW4gPSBcIlwiO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcblx0XHR0b2tlbiArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG5cdH1cblx0cmV0dXJuIHRva2VuO1xufVxuXG4vLyBHZXQgdmVyaWZpY2F0aW9uIGluc3RydWN0aW9ucyBmb3IgYSBkb21haW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW5WZXJpZmljYXRpb25JbnN0cnVjdGlvbnMoZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZG9tYWluOiBkb21haW4uZG9tYWluLFxuXHRcdGRuc1Rva2VuOiBkb21haW4uZG5zVG9rZW4sXG5cdFx0dmVyaWZpZWQ6IGRvbWFpbi5kbnNWZXJpZmllZCxcblx0XHRpbnN0cnVjdGlvbnM6IHtcblx0XHRcdHR5cGU6IFwiVFhUXCIsXG5cdFx0XHRob3N0OiBgX2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW4uZG9tYWlufWAsXG5cdFx0XHR2YWx1ZTogYGJvb3N0Y2FydC12ZXJpZnk9JHtkb21haW4uZG5zVG9rZW59YCxcblx0XHRcdHR0bDogMzYwMCxcblx0XHRcdGNuYW1lOiB7XG5cdFx0XHRcdGhvc3Q6IGRvbWFpbi5kb21haW4sXG5cdFx0XHRcdHZhbHVlOiBcImNuYW1lLmJvb3N0Y2FydC5iZ1wiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxVEE0SHNCLDZMQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:17fc06 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyDomain",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40335ab5226bd948dde18f66fa41d2c6a492e3f2b0":"verifyDomain"},"apps/platform/src/server/api/internal/domains.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40335ab5226bd948dde18f66fa41d2c6a492e3f2b0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "verifyDomain");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZG9tYWlucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7XG5cdHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uLFxuXHRyZXF1aXJlVmlld1Blcm1pc3Npb24sXG59IGZyb20gXCJAL3NlcnZlci9hcGkvcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbi8vIFZhbGlkYXRpb24gc2NoZW1hc1xuY29uc3QgQWRkRG9tYWluU2NoZW1hID0gei5vYmplY3Qoe1xuXHRkb21haW46IHpcblx0XHQuc3RyaW5nKClcblx0XHQubWluKDEsIFwiRG9tYWluIGlzIHJlcXVpcmVkXCIpXG5cdFx0LnJlZ2V4KFxuXHRcdFx0L14oPzpbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT9cXC4pK1thLXpBLVpdezIsfSQvLFxuXHRcdFx0XCJJbnZhbGlkIGRvbWFpbiBmb3JtYXRcIlxuXHRcdClcblx0XHQudHJhbnNmb3JtKChkKSA9PiBkLnRvTG93ZXJDYXNlKCkpLFxufSk7XG5cbi8vIEdldCBhbGwgY3VzdG9tIGRvbWFpbnMgZm9yIHRoZSBjdXJyZW50IHRlbmFudFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERvbWFpbnMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVWaWV3UGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdFx0b3JkZXJCeTogW3sgaXNQcmltYXJ5OiBcImRlc2NcIiB9LCB7IGNyZWF0ZWRBdDogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGRvbWFpbnM7XG59XG5cbi8vIEdldCBhIHNpbmdsZSBkb21haW4gYnkgSURcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiBkb21haW47XG59XG5cbi8vIEFkZCBhIG5ldyBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRG9tYWluKGlucHV0OiB7IGRvbWFpbjogc3RyaW5nIH0pIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCB2YWxpZGF0ZWQgPSBBZGREb21haW5TY2hlbWEucGFyc2UoaW5wdXQpO1xuXG5cdC8vIENoZWNrIGlmIGRvbWFpbiBhbHJlYWR5IGV4aXN0cyAoZ2xvYmFsbHkpXG5cdGNvbnN0IGV4aXN0aW5nRG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7IGRvbWFpbjogdmFsaWRhdGVkLmRvbWFpbiB9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmdEb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGRvbWFpbiBpcyBhbHJlYWR5IGluIHVzZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGRvbWFpbiBsaW1pdCAoZS5nLiwgbWF4IDUgY3VzdG9tIGRvbWFpbnMgcGVyIHRlbmFudClcblx0Y29uc3QgZG9tYWluQ291bnQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdHdoZXJlOiB7IHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmIChkb21haW5Db3VudCA+PSA1KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWF4aW11bSBudW1iZXIgb2YgY3VzdG9tIGRvbWFpbnMgcmVhY2hlZCAoNSlcIik7XG5cdH1cblxuXHQvLyBDcmVhdGUgdGhlIGRvbWFpbiB3aXRoIGEgdmVyaWZpY2F0aW9uIHRva2VuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0ZG9tYWluOiB2YWxpZGF0ZWQuZG9tYWluLFxuXHRcdFx0aXNQcmltYXJ5OiBkb21haW5Db3VudCA9PT0gMCwgLy8gRmlyc3QgZG9tYWluIGlzIHByaW1hcnlcblx0XHRcdHNzbFN0YXR1czogXCJwZW5kaW5nXCIsXG5cdFx0XHRkbnNWZXJpZmllZDogZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4gZG9tYWluO1xufVxuXG4vLyBSZW1vdmUgYSBjdXN0b20gZG9tYWluXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIERvbid0IGFsbG93IHJlbW92aW5nIHRoZSBwcmltYXJ5IGRvbWFpbiBpZiBvdGhlcnMgZXhpc3Rcblx0aWYgKGRvbWFpbi5pc1ByaW1hcnkpIHtcblx0XHRjb25zdCBvdGhlckRvbWFpbnMgPSBhd2FpdCBkYi50ZW5hbnREb21haW4uY291bnQoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlkOiB7IG5vdDogZG9tYWluSWQgfSB9LFxuXHRcdH0pO1xuXG5cdFx0aWYgKG90aGVyRG9tYWlucyA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJDYW5ub3QgcmVtb3ZlIHByaW1hcnkgZG9tYWluLiBTZXQgYW5vdGhlciBkb21haW4gYXMgcHJpbWFyeSBmaXJzdC5cIlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRhd2FpdCBkYi50ZW5hbnREb21haW4uZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIFNldCBhIGRvbWFpbiBhcyBwcmltYXJ5XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0UHJpbWFyeURvbWFpbihkb21haW5JZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVNYW5hZ2VQZXJtaXNzaW9uKFwic2V0dGluZ3NcIik7XG5cblx0Y29uc3QgZG9tYWluID0gYXdhaXQgZGIudGVuYW50RG9tYWluLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIWRvbWFpbikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBub3QgZm91bmRcIik7XG5cdH1cblxuXHRpZiAoIWRvbWFpbi5kbnNWZXJpZmllZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRvbWFpbiBtdXN0IGJlIHZlcmlmaWVkIGJlZm9yZSBzZXR0aW5nIGFzIHByaW1hcnlcIik7XG5cdH1cblxuXHQvLyBVcGRhdGUgYWxsIGRvbWFpbnM6IHVuc2V0IGN1cnJlbnQgcHJpbWFyeSwgc2V0IG5ldyBwcmltYXJ5XG5cdGF3YWl0IGRiLiR0cmFuc2FjdGlvbihbXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgdGVuYW50SWQsIGlzUHJpbWFyeTogdHJ1ZSB9LFxuXHRcdFx0ZGF0YTogeyBpc1ByaW1hcnk6IGZhbHNlIH0sXG5cdFx0fSksXG5cdFx0ZGIudGVuYW50RG9tYWluLnVwZGF0ZSh7XG5cdFx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRcdGRhdGE6IHsgaXNQcmltYXJ5OiB0cnVlIH0sXG5cdFx0fSksXG5cdF0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vLyBWZXJpZnkgZG9tYWluIEROUyByZWNvcmRzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5RG9tYWluKGRvbWFpbklkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZU1hbmFnZVBlcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdC8vIFBlcmZvcm0gRE5TIHZlcmlmaWNhdGlvblxuXHRjb25zdCBpc1ZlcmlmaWVkID0gYXdhaXQgY2hlY2tEbnNWZXJpZmljYXRpb24oZG9tYWluLmRvbWFpbiwgZG9tYWluLmRuc1Rva2VuKTtcblxuXHRpZiAoaXNWZXJpZmllZCkge1xuXHRcdGF3YWl0IGRiLnRlbmFudERvbWFpbi51cGRhdGUoe1xuXHRcdFx0d2hlcmU6IHsgaWQ6IGRvbWFpbklkIH0sXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGRuc1ZlcmlmaWVkOiB0cnVlLFxuXHRcdFx0XHRzc2xTdGF0dXM6IFwicHJvdmlzaW9uaW5nXCIsIC8vIFNTTCB3aWxsIGJlIHByb3Zpc2lvbmVkIGJ5IFZlcmNlbC9DbG91ZGZsYXJlXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vc2V0dGluZ3MvZG9tYWluc1wiKTtcblxuXHRcdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHZlcmlmaWVkOiB0cnVlIH07XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlLCB2ZXJpZmllZDogZmFsc2UgfTtcbn1cblxuLy8gUmVmcmVzaCB2ZXJpZmljYXRpb24gdG9rZW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoRG5zVG9rZW4oZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlTWFuYWdlUGVybWlzc2lvbihcInNldHRpbmdzXCIpO1xuXG5cdGNvbnN0IGRvbWFpbiA9IGF3YWl0IGRiLnRlbmFudERvbWFpbi5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkOiBkb21haW5JZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkb21haW4pIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEb21haW4gbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gR2VuZXJhdGUgYSBuZXcgdG9rZW4gYnkgdXBkYXRpbmcgdGhlIHJlY29yZCAoY3VpZCB3aWxsIGF1dG8tZ2VuZXJhdGUpXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi50ZW5hbnREb21haW4udXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQgfSxcblx0XHRkYXRhOiB7XG5cdFx0XHRkbnNUb2tlbjogZ2VuZXJhdGVWZXJpZmljYXRpb25Ub2tlbigpLFxuXHRcdFx0ZG5zVmVyaWZpZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3NldHRpbmdzL2RvbWFpbnNcIik7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBETlMgVFhUIHJlY29yZFxuYXN5bmMgZnVuY3Rpb24gY2hlY2tEbnNWZXJpZmljYXRpb24oXG5cdGRvbWFpbjogc3RyaW5nLFxuXHRleHBlY3RlZFRva2VuOiBzdHJpbmdcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHR0cnkge1xuXHRcdC8vIFVzZSBETlMgb3ZlciBIVFRQUyAoQ2xvdWRmbGFyZSkgZm9yIHZlcmlmaWNhdGlvblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG5cdFx0XHRgaHR0cHM6Ly9jbG91ZGZsYXJlLWRucy5jb20vZG5zLXF1ZXJ5P25hbWU9X2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW59JnR5cGU9VFhUYCxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9kbnMtanNvblwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdGlmICghZGF0YS5BbnN3ZXIgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5BbnN3ZXIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgaWYgYW55IFRYVCByZWNvcmQgY29udGFpbnMgb3VyIHZlcmlmaWNhdGlvbiB0b2tlblxuXHRcdGZvciAoY29uc3QgYW5zd2VyIG9mIGRhdGEuQW5zd2VyKSB7XG5cdFx0XHRpZiAoYW5zd2VyLnR5cGUgPT09IDE2KSB7XG5cdFx0XHRcdC8vIFRYVCByZWNvcmQgdHlwZVxuXHRcdFx0XHRjb25zdCB0eHRWYWx1ZSA9IGFuc3dlci5kYXRhPy5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcblx0XHRcdFx0aWYgKHR4dFZhbHVlID09PSBgYm9vc3RjYXJ0LXZlcmlmeT0ke2V4cGVjdGVkVG9rZW59YCkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJETlMgdmVyaWZpY2F0aW9uIGVycm9yOlwiLCBlcnJvcik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSB2ZXJpZmljYXRpb24gdG9rZW5cbmZ1bmN0aW9uIGdlbmVyYXRlVmVyaWZpY2F0aW9uVG9rZW4oKTogc3RyaW5nIHtcblx0Y29uc3QgY2hhcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuXHRsZXQgdG9rZW4gPSBcIlwiO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcblx0XHR0b2tlbiArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG5cdH1cblx0cmV0dXJuIHRva2VuO1xufVxuXG4vLyBHZXQgdmVyaWZpY2F0aW9uIGluc3RydWN0aW9ucyBmb3IgYSBkb21haW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREb21haW5WZXJpZmljYXRpb25JbnN0cnVjdGlvbnMoZG9tYWluSWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlVmlld1Blcm1pc3Npb24oXCJzZXR0aW5nc1wiKTtcblxuXHRjb25zdCBkb21haW4gPSBhd2FpdCBkYi50ZW5hbnREb21haW4uZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogZG9tYWluSWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghZG9tYWluKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRG9tYWluIG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZG9tYWluOiBkb21haW4uZG9tYWluLFxuXHRcdGRuc1Rva2VuOiBkb21haW4uZG5zVG9rZW4sXG5cdFx0dmVyaWZpZWQ6IGRvbWFpbi5kbnNWZXJpZmllZCxcblx0XHRpbnN0cnVjdGlvbnM6IHtcblx0XHRcdHR5cGU6IFwiVFhUXCIsXG5cdFx0XHRob3N0OiBgX2Jvb3N0Y2FydC12ZXJpZmljYXRpb24uJHtkb21haW4uZG9tYWlufWAsXG5cdFx0XHR2YWx1ZTogYGJvb3N0Y2FydC12ZXJpZnk9JHtkb21haW4uZG5zVG9rZW59YCxcblx0XHRcdHR0bDogMzYwMCxcblx0XHRcdGNuYW1lOiB7XG5cdFx0XHRcdGhvc3Q6IGRvbWFpbi5kb21haW4sXG5cdFx0XHRcdHZhbHVlOiBcImNuYW1lLmJvb3N0Y2FydC5iZ1wiLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpVEE2SnNCLHlMQUFBIn0=
}),
"[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DomainsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/admin/polaris-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/empty.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$4364b9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:4364b9 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$80b930__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:80b930 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$a89bff__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:a89bff [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$96b6a9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:96b6a9 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$5370bc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:5370bc [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$8ce927__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:8ce927 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$17fc06__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:17fc06 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function DomainsPage() {
    const [domains, setDomains] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [addDialogOpen, setAddDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verifyDialogOpen, setVerifyDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDomain, setSelectedDomain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newDomain, setNewDomain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [addingDomain, setAddingDomain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verifying, setVerifying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verificationInstructions, setVerificationInstructions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchDomains = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setLoading(true);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$a89bff__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDomains"])();
            setDomains(data);
        } catch (_error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to load domains");
        } finally{
            setLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchDomains();
    }, [
        fetchDomains
    ]);
    const handleAddDomain = async ()=>{
        if (!newDomain.trim()) return;
        try {
            setAddingDomain(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$4364b9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addDomain"])({
                domain: newDomain.trim()
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Domain added successfully");
            setNewDomain("");
            setAddDialogOpen(false);
            fetchDomains();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error instanceof Error ? error.message : "Failed to add domain");
        } finally{
            setAddingDomain(false);
        }
    };
    const handleVerifyClick = async (domain)=>{
        setSelectedDomain(domain);
        try {
            const instructions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$80b930__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDomainVerificationInstructions"])(domain.id);
            setVerificationInstructions(instructions);
            setVerifyDialogOpen(true);
        } catch (_error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to load verification instructions");
        }
    };
    const handleVerifyDomain = async ()=>{
        if (!selectedDomain) return;
        try {
            setVerifying(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$17fc06__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["verifyDomain"])(selectedDomain.id);
            if (result.verified) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Domain verified successfully!");
                setVerifyDialogOpen(false);
                fetchDomains();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("DNS record not found. Please check your DNS settings and try again.");
            }
        } catch (_error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Verification failed");
        } finally{
            setVerifying(false);
        }
    };
    const handleRefreshToken = async ()=>{
        if (!selectedDomain) return;
        try {
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$96b6a9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["refreshDnsToken"])(selectedDomain.id);
            setVerificationInstructions((prev)=>prev ? {
                    ...prev,
                    dnsToken: updated.dnsToken,
                    instructions: {
                        ...prev.instructions,
                        value: `boostcart-verify=${updated.dnsToken}`
                    }
                } : null);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Verification token refreshed");
        } catch (_error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to refresh token");
        }
    };
    const handleSetPrimary = async (domain)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$8ce927__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["setPrimaryDomain"])(domain.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Primary domain updated");
            fetchDomains();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error instanceof Error ? error.message : "Failed to set primary domain");
        }
    };
    const handleDeleteClick = (domain)=>{
        setSelectedDomain(domain);
        setDeleteDialogOpen(true);
    };
    const handleDeleteDomain = async ()=>{
        if (!selectedDomain) return;
        try {
            setDeleting(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$5370bc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["removeDomain"])(selectedDomain.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Domain removed");
            setDeleteDialogOpen(false);
            fetchDomains();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error instanceof Error ? error.message : "Failed to remove domain");
        } finally{
            setDeleting(false);
        }
    };
    const copyToClipboard = (text, label)=>{
        navigator.clipboard.writeText(text);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`${label} copied to clipboard`);
    };
    const getStatusBadge = (domain)=>{
        if (!domain.dnsVerified) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "outline",
                className: "text-amber-600 border-amber-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        className: "h-3 w-3 mr-1"
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                        lineNumber: 236,
                        columnNumber: 6
                    }, this),
                    "Pending Verification"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                lineNumber: 235,
                columnNumber: 5
            }, this);
        }
        if (domain.sslStatus === "active") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "outline",
                className: "text-green-600 border-green-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-3 w-3 mr-1"
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                        lineNumber: 245,
                        columnNumber: 6
                    }, this),
                    "Active"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                lineNumber: 244,
                columnNumber: 5
            }, this);
        }
        if (domain.sslStatus === "provisioning") {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "outline",
                className: "text-blue-600 border-blue-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                        className: "h-3 w-3 mr-1 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                        lineNumber: 254,
                        columnNumber: 6
                    }, this),
                    "SSL Provisioning"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                lineNumber: 253,
                columnNumber: 5
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            className: "text-red-600 border-red-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                    className: "h-3 w-3 mr-1"
                }, void 0, false, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                    lineNumber: 262,
                    columnNumber: 5
                }, this),
                domain.sslStatus
            ]
        }, void 0, true, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
            lineNumber: 261,
            columnNumber: 4
        }, this);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
                size: "lg"
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                lineNumber: 271,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
            lineNumber: 270,
            columnNumber: 4
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold tracking-tight",
                                children: "Custom Domains"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                lineNumber: 281,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "Connect your own domain to your store"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                lineNumber: 282,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                        lineNumber: 280,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarisButton"], {
                        onClick: ()=>setAddDialogOpen(true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                lineNumber: 287,
                                columnNumber: 6
                            }, this),
                            "Add Domain"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                        lineNumber: 286,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                lineNumber: 279,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "h-5 w-5 text-blue-600 shrink-0 mt-0.5"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 295,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-blue-900 dark:text-blue-100",
                                    children: "How custom domains work"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-700 dark:text-blue-300 mt-1",
                                    children: "Add your domain, verify ownership via DNS TXT record, then point your domain to our servers. SSL certificates are automatically provisioned."
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 296,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                    lineNumber: 294,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                lineNumber: 293,
                columnNumber: 4
            }, this),
            domains.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Empty"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyMedia"], {
                                    variant: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "h-8 w-8"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyTitle"], {
                                    children: "No custom domains"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyDescription"], {
                                    children: "Add a custom domain to give your store a professional look"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 313,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                onClick: ()=>setAddDialogOpen(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 9
                                    }, this),
                                    "Add Your First Domain"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                lineNumber: 323,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 322,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                    lineNumber: 312,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                lineNumber: 311,
                columnNumber: 5
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: domains.map((domain)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 rounded-lg bg-muted",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "h-5 w-5 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 336,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: domain.domain
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 12
                                                        }, this),
                                                        domain.isPrimary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            className: "bg-primary/10 text-primary",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    className: "h-3 w-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                                    lineNumber: 347,
                                                                    columnNumber: 14
                                                                }, this),
                                                                "Primary"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mt-1",
                                                    children: [
                                                        getStatusBadge(domain),
                                                        domain.dnsVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-muted-foreground flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                                    lineNumber: 356,
                                                                    columnNumber: 14
                                                                }, this),
                                                                "SSL",
                                                                " ",
                                                                domain.sslStatus === "active" ? "Active" : "Pending"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        !domain.dnsVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>handleVerifyClick(domain),
                                            children: "Verify"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 12
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                    align: "end",
                                                    children: [
                                                        domain.dnsVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            onClick: ()=>window.open(`https://${domain.domain}`, "_blank"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 14
                                                                }, this),
                                                                "Visit Site"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 13
                                                        }, this),
                                                        domain.dnsVerified && !domain.isPrimary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            onClick: ()=>handleSetPrimary(domain),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 14
                                                                }, this),
                                                                "Set as Primary"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 13
                                                        }, this),
                                                        !domain.dnsVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            onClick: ()=>handleVerifyClick(domain),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                                    lineNumber: 406,
                                                                    columnNumber: 14
                                                                }, this),
                                                                "Verify Domain"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            className: "text-destructive",
                                                            onClick: ()=>handleDeleteClick(domain),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 13
                                                                }, this),
                                                                "Remove Domain"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 377,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 334,
                            columnNumber: 8
                        }, this)
                    }, domain.id, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                        lineNumber: 333,
                        columnNumber: 7
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                lineNumber: 331,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: addDialogOpen,
                onOpenChange: setAddDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Add Custom Domain"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 431,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Enter the domain you want to connect to your store. You'll need to verify ownership and update DNS records."
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 432,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 430,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "domain",
                                        children: "Domain"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "domain",
                                        placeholder: "store.example.com",
                                        value: newDomain,
                                        onChange: (e)=>setNewDomain(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Enter your domain without https:// or trailing slashes"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                        lineNumber: 446,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                lineNumber: 438,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 437,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setAddDialogOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                    onClick: handleAddDomain,
                                    loading: addingDomain,
                                    disabled: !newDomain.trim(),
                                    children: "Add Domain"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 451,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                    lineNumber: 429,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                lineNumber: 428,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: verifyDialogOpen,
                onOpenChange: setVerifyDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Verify Domain Ownership"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 470,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: [
                                        "Add the following DNS records to verify ownership of",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: verificationInstructions?.domain
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 469,
                            columnNumber: 6
                        }, this),
                        verificationInstructions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm",
                                                    children: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 10
                                                }, this),
                                                "Add TXT Record for Verification"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 480,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "p-4 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[100px_1fr_auto] gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-sm bg-muted px-2 py-1 rounded",
                                                            children: verificationInstructions.instructions.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 489,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[100px_1fr_auto] gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Host"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-sm bg-muted px-2 py-1 rounded truncate",
                                                            children: "_boostcart-verification"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "h-8 w-8",
                                                            onClick: ()=>copyToClipboard("_boostcart-verification", "Host"),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                                lineNumber: 507,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[100px_1fr_auto] gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Value"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 511,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-sm bg-muted px-2 py-1 rounded truncate",
                                                            children: verificationInstructions.instructions.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "h-8 w-8",
                                                            onClick: ()=>copyToClipboard(verificationInstructions.instructions.value, "Value"),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[100px_1fr_auto] gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "TTL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-sm bg-muted px-2 py-1 rounded",
                                                            children: [
                                                                verificationInstructions.instructions.ttl,
                                                                " (or Auto)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 534,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 486,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 479,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm",
                                                    children: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 10
                                                }, this),
                                                "Add CNAME Record to Point to BoostCart"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 541,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "p-4 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[100px_1fr_auto] gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-sm bg-muted px-2 py-1 rounded",
                                                            children: "CNAME"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[100px_1fr_auto] gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Host"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 556,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-sm bg-muted px-2 py-1 rounded",
                                                            children: [
                                                                "@ or",
                                                                " ",
                                                                verificationInstructions.instructions.cname.host.split(".")[0] || "@"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 557,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "h-8 w-8",
                                                            onClick: ()=>copyToClipboard(verificationInstructions.instructions.cname.host.split(".")[0] || "@", "Host"),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                                lineNumber: 576,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 563,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[100px_1fr_auto] gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Value"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-sm bg-muted px-2 py-1 rounded",
                                                            children: verificationInstructions.instructions.cname.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "h-8 w-8",
                                                            onClick: ()=>copyToClipboard(verificationInstructions.instructions.cname.value, "CNAME Value"),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                                lineNumber: 595,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                            lineNumber: 584,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 547,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 540,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "h-5 w-5 text-amber-600 shrink-0 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 602,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-amber-800 dark:text-amber-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium",
                                                    children: "DNS changes can take time"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 604,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1",
                                                    children: "DNS records may take up to 48 hours to propagate, though most changes are visible within minutes."
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 603,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 601,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 477,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: handleRefreshToken,
                                    size: "sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 615,
                                            columnNumber: 8
                                        }, this),
                                        "New Token"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 614,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setVerifyDialogOpen(false),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 618,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                    onClick: handleVerifyDomain,
                                    loading: verifying,
                                    children: "Verify DNS"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 624,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 613,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                    lineNumber: 468,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                lineNumber: 467,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: deleteDialogOpen,
                onOpenChange: setDeleteDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Remove Domain"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 635,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: [
                                        "Are you sure you want to remove",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: selectedDomain?.domain
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                            lineNumber: 638,
                                            columnNumber: 8
                                        }, this),
                                        "? This action cannot be undone and will make the domain unavailable for your store."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 636,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 634,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setDeleteDialogOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 643,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    onClick: handleDeleteDomain,
                                    disabled: deleting,
                                    children: deleting ? "Removing..." : "Remove Domain"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                            lineNumber: 642,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                    lineNumber: 633,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
                lineNumber: 632,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/settings/domains/page.tsx",
        lineNumber: 277,
        columnNumber: 3
    }, this);
}
}),
];

//# sourceMappingURL=apps_platform_src_4aae467b._.js.map