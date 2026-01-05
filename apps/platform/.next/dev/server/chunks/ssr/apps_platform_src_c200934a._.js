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
"[project]/apps/platform/src/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectIndicator",
    ()=>SelectIndicator,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript) <export * as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// Create a Context for `indicatorPosition` and `indicator` control
const SelectContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    indicatorPosition: "left",
    indicator: null,
    indicatorVisibility: true
});
// Root Component
const Select = ({ indicatorPosition = "left", indicatorVisibility = true, indicator, ...props })=>{
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            indicatorPosition,
            indicatorVisibility,
            indicator
        }), [
        indicatorPosition,
        indicatorVisibility,
        indicator
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Root, {
            ...props
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/components/ui/select.tsx",
            lineNumber: 35,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Group, {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Value, {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
// Define size variants for SelectTrigger
const selectTriggerVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])(`
    flex bg-background w-full items-center justify-between outline-none border border-input shadow-xs shadow-black/5 transition-shadow 
    text-foreground data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] 
    focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 
    aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/20
    [[data-invalid=true]_&]:border-destructive/60 [[data-invalid=true]_&]:ring-destructive/10  dark:[[data-invalid=true]_&]:border-destructive dark:[[data-invalid=true]_&]:ring-destructive/20
  `, {
    variants: {
        size: {
            sm: "h-7 px-2.5 text-xs gap-1 rounded-md",
            md: "h-8.5 px-3 text-[0.8125rem] leading-(--text-sm--line-height) gap-1 rounded-md",
            lg: "h-10 px-4 text-sm gap-1.5 rounded-md"
        }
    },
    defaultVariants: {
        size: "md"
    }
});
function SelectTrigger({ className, children, size, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Trigger, {
        "data-slot": "select-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(selectTriggerVariants({
            size
        }), className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Icon, {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-60 -me-0.5"
                }, void 0, false, {
                    fileName: "[project]/apps/platform/src/components/ui/select.tsx",
                    lineNumber: 93,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/components/ui/select.tsx",
                lineNumber: 92,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 86,
        columnNumber: 3
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollUpButton, {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/components/ui/select.tsx",
            lineNumber: 112,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 104,
        columnNumber: 3
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollDownButton, {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/components/ui/select.tsx",
            lineNumber: 130,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 122,
        columnNumber: 3
    }, this);
}
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Content, {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover shadow-md shadow-black/5 text-secondary-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1.5 data-[side=left]:-translate-x-1.5 data-[side=right]:translate-x-1.5 data-[side=top]:-translate-y-1.5", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/apps/platform/src/components/ui/select.tsx",
                    lineNumber: 154,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Viewport, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1.5", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/platform/src/components/ui/select.tsx",
                    lineNumber: 155,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/apps/platform/src/components/ui/select.tsx",
                    lineNumber: 164,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/platform/src/components/ui/select.tsx",
            lineNumber: 143,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 142,
        columnNumber: 3
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Label, {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-1.5 ps-8 pe-2 text-xs text-muted-foreground font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 175,
        columnNumber: 3
    }, this);
}
function SelectItem({ className, children, ...props }) {
    const { indicatorPosition, indicatorVisibility, indicator } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SelectContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Item, {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 text-sm outline-hidden text-foreground hover:bg-accent focus:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50", indicatorPosition === "left" ? "ps-8 pe-2" : "pe-8 ps-2", className),
        ...props,
        children: [
            indicatorVisibility && (indicator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(indicator) ? indicator : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute flex h-3.5 w-3.5 items-center justify-center", indicatorPosition === "left" ? "start-2" : "end-2"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
                        lineNumber: 215,
                        columnNumber: 8
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/platform/src/components/ui/select.tsx",
                    lineNumber: 214,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/components/ui/select.tsx",
                lineNumber: 208,
                columnNumber: 6
            }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemText, {
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/components/ui/select.tsx",
                lineNumber: 219,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 195,
        columnNumber: 3
    }, this);
}
function SelectIndicator({ children, className, ...props }) {
    const { indicatorPosition } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SelectContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "select-indicator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute flex top-1/2 -translate-y-1/2 items-center justify-center", indicatorPosition === "left" ? "start-2" : "end-2", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemIndicator, {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/components/ui/select.tsx",
            lineNumber: 241,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 232,
        columnNumber: 3
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Separator, {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1.5 my-1.5 h-px bg-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 251,
        columnNumber: 3
    }, this);
}
;
}),
"[project]/apps/platform/src/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 3
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
TableCaption.displayName = "TableCaption";
;
}),
"[project]/apps/platform/src/server/api/internal/data:736fb0 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteDiscount",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"406435e0bb0828775866742820983c53cabc7c38db":"deleteDiscount"},"apps/platform/src/server/api/internal/discounts.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("406435e0bb0828775866742820983c53cabc7c38db", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteDiscount");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGlzY291bnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgdHlwZSB7IERpc2NvdW50U2NvcGUsIERpc2NvdW50VHlwZSB9IGZyb20gXCJAYm9vc3RjYXJ0L2RhdGFiYXNlXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvc2VydmVyL2F1dGhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvc2VydmVyL2RiXCI7XG5pbXBvcnQgeyByZXF1aXJlQWRtaW5UZW5hbnQgfSBmcm9tIFwiQC9zZXJ2ZXIvdGVuYW50XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVTdG9yZUFjY2VzcygpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcblx0aWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcblx0fVxuXG5cdGNvbnN0IHRlbmFudCA9IGF3YWl0IHJlcXVpcmVBZG1pblRlbmFudCgpO1xuXG5cdGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghc3RhZmZSZWNvcmQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcblx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREaXNjb3VudHMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGRpc2NvdW50cyA9IGF3YWl0IGRiLmRpc2NvdW50LmZpbmRNYW55KHtcblx0XHR3aGVyZTogeyB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdF9jb3VudDoge1xuXHRcdFx0XHRzZWxlY3Q6IHtcblx0XHRcdFx0XHRwcm9kdWN0czogdHJ1ZSxcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiB0cnVlLFxuXHRcdFx0XHRcdGJyYW5kczogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIGRpc2NvdW50cztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERpc2NvdW50KGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgZGlzY291bnQgPSBhd2FpdCBkYi5kaXNjb3VudC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHByb2R1Y3RzOiB7XG5cdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRwcm9kdWN0OiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGNhdGVnb3JpZXM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdGNhdGVnb3J5OiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGJyYW5kczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0YnJhbmQ6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghZGlzY291bnQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXNjb3VudCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRyZXR1cm4gZGlzY291bnQ7XG59XG5cbmludGVyZmFjZSBEaXNjb3VudElucHV0IHtcblx0bmFtZTogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0dHlwZTogRGlzY291bnRUeXBlO1xuXHR2YWx1ZTogbnVtYmVyO1xuXHRzY29wZTogRGlzY291bnRTY29wZTtcblx0c3RhcnREYXRlOiBEYXRlO1xuXHRlbmREYXRlPzogRGF0ZTtcblx0aXNBY3RpdmU/OiBib29sZWFuO1xuXHRwcm9kdWN0SWRzPzogc3RyaW5nW107XG5cdGNhdGVnb3J5SWRzPzogc3RyaW5nW107XG5cdGJyYW5kSWRzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVEaXNjb3VudChpbnB1dDogRGlzY291bnRJbnB1dCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCB7IHByb2R1Y3RJZHMsIGNhdGVnb3J5SWRzLCBicmFuZElkcywgLi4uZGlzY291bnREYXRhIH0gPSBpbnB1dDtcblxuXHRjb25zdCBkaXNjb3VudCA9IGF3YWl0IGRiLmRpc2NvdW50LmNyZWF0ZSh7XG5cdFx0ZGF0YToge1xuXHRcdFx0Li4uZGlzY291bnREYXRhLFxuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHRwcm9kdWN0czogcHJvZHVjdElkcz8ubGVuZ3RoXG5cdFx0XHRcdD8ge1xuXHRcdFx0XHRcdFx0Y3JlYXRlOiBwcm9kdWN0SWRzLm1hcCgocHJvZHVjdElkKSA9PiAoeyBwcm9kdWN0SWQgfSkpLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0OiB1bmRlZmluZWQsXG5cdFx0XHRjYXRlZ29yaWVzOiBjYXRlZ29yeUlkcz8ubGVuZ3RoXG5cdFx0XHRcdD8ge1xuXHRcdFx0XHRcdFx0Y3JlYXRlOiBjYXRlZ29yeUlkcy5tYXAoKGNhdGVnb3J5SWQpID0+ICh7IGNhdGVnb3J5SWQgfSkpLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0OiB1bmRlZmluZWQsXG5cdFx0XHRicmFuZHM6IGJyYW5kSWRzPy5sZW5ndGhcblx0XHRcdFx0PyB7XG5cdFx0XHRcdFx0XHRjcmVhdGU6IGJyYW5kSWRzLm1hcCgoYnJhbmRJZCkgPT4gKHsgYnJhbmRJZCB9KSksXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ6IHVuZGVmaW5lZCxcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gZGlzY291bnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEaXNjb3VudChcblx0aWQ6IHN0cmluZyxcblx0aW5wdXQ6IFBhcnRpYWw8RGlzY291bnRJbnB1dD4sXG4pIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IGRpc2NvdW50IGJlbG9uZ3MgdG8gdGVuYW50XG5cdGNvbnN0IGRpc2NvdW50ID0gYXdhaXQgZGIuZGlzY291bnQuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkaXNjb3VudCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRpc2NvdW50IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuXHR9XG5cblx0Y29uc3QgeyBwcm9kdWN0SWRzLCBjYXRlZ29yeUlkcywgYnJhbmRJZHMsIC4uLmRpc2NvdW50RGF0YSB9ID0gaW5wdXQ7XG5cblx0Ly8gSWYgc2NvcGUtc3BlY2lmaWMgSURzIGFyZSBwcm92aWRlZCwgdXBkYXRlIHRoZSByZWxhdGlvbnNoaXBzXG5cdGlmIChwcm9kdWN0SWRzICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBEZWxldGUgZXhpc3RpbmcgYW5kIGNyZWF0ZSBuZXdcblx0XHRhd2FpdCBkYi5kaXNjb3VudFByb2R1Y3QuZGVsZXRlTWFueSh7XG5cdFx0XHR3aGVyZTogeyBkaXNjb3VudElkOiBpZCB9LFxuXHRcdH0pO1xuXHRcdGlmIChwcm9kdWN0SWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGF3YWl0IGRiLmRpc2NvdW50UHJvZHVjdC5jcmVhdGVNYW55KHtcblx0XHRcdFx0ZGF0YTogcHJvZHVjdElkcy5tYXAoKHByb2R1Y3RJZCkgPT4gKHtcblx0XHRcdFx0XHRkaXNjb3VudElkOiBpZCxcblx0XHRcdFx0XHRwcm9kdWN0SWQsXG5cdFx0XHRcdH0pKSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGlmIChjYXRlZ29yeUlkcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0YXdhaXQgZGIuZGlzY291bnRDYXRlZ29yeS5kZWxldGVNYW55KHtcblx0XHRcdHdoZXJlOiB7IGRpc2NvdW50SWQ6IGlkIH0sXG5cdFx0fSk7XG5cdFx0aWYgKGNhdGVnb3J5SWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGF3YWl0IGRiLmRpc2NvdW50Q2F0ZWdvcnkuY3JlYXRlTWFueSh7XG5cdFx0XHRcdGRhdGE6IGNhdGVnb3J5SWRzLm1hcCgoY2F0ZWdvcnlJZCkgPT4gKHtcblx0XHRcdFx0XHRkaXNjb3VudElkOiBpZCxcblx0XHRcdFx0XHRjYXRlZ29yeUlkLFxuXHRcdFx0XHR9KSksXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoYnJhbmRJZHMgIT09IHVuZGVmaW5lZCkge1xuXHRcdGF3YWl0IGRiLmRpc2NvdW50QnJhbmQuZGVsZXRlTWFueSh7XG5cdFx0XHR3aGVyZTogeyBkaXNjb3VudElkOiBpZCB9LFxuXHRcdH0pO1xuXHRcdGlmIChicmFuZElkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRhd2FpdCBkYi5kaXNjb3VudEJyYW5kLmNyZWF0ZU1hbnkoe1xuXHRcdFx0XHRkYXRhOiBicmFuZElkcy5tYXAoKGJyYW5kSWQpID0+ICh7XG5cdFx0XHRcdFx0ZGlzY291bnRJZDogaWQsXG5cdFx0XHRcdFx0YnJhbmRJZCxcblx0XHRcdFx0fSkpLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdXBkYXRlZCA9IGF3YWl0IGRiLmRpc2NvdW50LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiBkaXNjb3VudERhdGEsXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGlzY291bnQoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHQvLyBWZXJpZnkgZGlzY291bnQgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgZGlzY291bnQgPSBhd2FpdCBkYi5kaXNjb3VudC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIWRpc2NvdW50KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzY291bnQgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG5cdH1cblxuXHRhd2FpdCBkYi5kaXNjb3VudC5kZWxldGUoe1xuXHRcdHdoZXJlOiB7IGlkIH0sXG5cdH0pO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZURpc2NvdW50U3RhdHVzKGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IGRpc2NvdW50IGJlbG9uZ3MgdG8gdGVuYW50XG5cdGNvbnN0IGRpc2NvdW50ID0gYXdhaXQgZGIuZGlzY291bnQuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkaXNjb3VudCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRpc2NvdW50IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuXHR9XG5cblx0Y29uc3QgdXBkYXRlZCA9IGF3YWl0IGRiLmRpc2NvdW50LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiB7IGlzQWN0aXZlOiAhZGlzY291bnQuaXNBY3RpdmUgfSxcblx0fSk7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFUQXFNc0IsMkxBQUEifQ==
}),
"[project]/apps/platform/src/server/api/internal/data:5afe10 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDiscounts",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00b3dccbe824893632c0c4a995953e9be16597e1e6":"getDiscounts"},"apps/platform/src/server/api/internal/discounts.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00b3dccbe824893632c0c4a995953e9be16597e1e6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getDiscounts");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGlzY291bnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgdHlwZSB7IERpc2NvdW50U2NvcGUsIERpc2NvdW50VHlwZSB9IGZyb20gXCJAYm9vc3RjYXJ0L2RhdGFiYXNlXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvc2VydmVyL2F1dGhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvc2VydmVyL2RiXCI7XG5pbXBvcnQgeyByZXF1aXJlQWRtaW5UZW5hbnQgfSBmcm9tIFwiQC9zZXJ2ZXIvdGVuYW50XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVTdG9yZUFjY2VzcygpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcblx0aWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcblx0fVxuXG5cdGNvbnN0IHRlbmFudCA9IGF3YWl0IHJlcXVpcmVBZG1pblRlbmFudCgpO1xuXG5cdGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghc3RhZmZSZWNvcmQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcblx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREaXNjb3VudHMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGRpc2NvdW50cyA9IGF3YWl0IGRiLmRpc2NvdW50LmZpbmRNYW55KHtcblx0XHR3aGVyZTogeyB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdF9jb3VudDoge1xuXHRcdFx0XHRzZWxlY3Q6IHtcblx0XHRcdFx0XHRwcm9kdWN0czogdHJ1ZSxcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiB0cnVlLFxuXHRcdFx0XHRcdGJyYW5kczogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIGRpc2NvdW50cztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERpc2NvdW50KGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgZGlzY291bnQgPSBhd2FpdCBkYi5kaXNjb3VudC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHByb2R1Y3RzOiB7XG5cdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRwcm9kdWN0OiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGNhdGVnb3JpZXM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdGNhdGVnb3J5OiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGJyYW5kczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0YnJhbmQ6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghZGlzY291bnQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXNjb3VudCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRyZXR1cm4gZGlzY291bnQ7XG59XG5cbmludGVyZmFjZSBEaXNjb3VudElucHV0IHtcblx0bmFtZTogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0dHlwZTogRGlzY291bnRUeXBlO1xuXHR2YWx1ZTogbnVtYmVyO1xuXHRzY29wZTogRGlzY291bnRTY29wZTtcblx0c3RhcnREYXRlOiBEYXRlO1xuXHRlbmREYXRlPzogRGF0ZTtcblx0aXNBY3RpdmU/OiBib29sZWFuO1xuXHRwcm9kdWN0SWRzPzogc3RyaW5nW107XG5cdGNhdGVnb3J5SWRzPzogc3RyaW5nW107XG5cdGJyYW5kSWRzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVEaXNjb3VudChpbnB1dDogRGlzY291bnRJbnB1dCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCB7IHByb2R1Y3RJZHMsIGNhdGVnb3J5SWRzLCBicmFuZElkcywgLi4uZGlzY291bnREYXRhIH0gPSBpbnB1dDtcblxuXHRjb25zdCBkaXNjb3VudCA9IGF3YWl0IGRiLmRpc2NvdW50LmNyZWF0ZSh7XG5cdFx0ZGF0YToge1xuXHRcdFx0Li4uZGlzY291bnREYXRhLFxuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHRwcm9kdWN0czogcHJvZHVjdElkcz8ubGVuZ3RoXG5cdFx0XHRcdD8ge1xuXHRcdFx0XHRcdFx0Y3JlYXRlOiBwcm9kdWN0SWRzLm1hcCgocHJvZHVjdElkKSA9PiAoeyBwcm9kdWN0SWQgfSkpLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0OiB1bmRlZmluZWQsXG5cdFx0XHRjYXRlZ29yaWVzOiBjYXRlZ29yeUlkcz8ubGVuZ3RoXG5cdFx0XHRcdD8ge1xuXHRcdFx0XHRcdFx0Y3JlYXRlOiBjYXRlZ29yeUlkcy5tYXAoKGNhdGVnb3J5SWQpID0+ICh7IGNhdGVnb3J5SWQgfSkpLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0OiB1bmRlZmluZWQsXG5cdFx0XHRicmFuZHM6IGJyYW5kSWRzPy5sZW5ndGhcblx0XHRcdFx0PyB7XG5cdFx0XHRcdFx0XHRjcmVhdGU6IGJyYW5kSWRzLm1hcCgoYnJhbmRJZCkgPT4gKHsgYnJhbmRJZCB9KSksXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ6IHVuZGVmaW5lZCxcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gZGlzY291bnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEaXNjb3VudChcblx0aWQ6IHN0cmluZyxcblx0aW5wdXQ6IFBhcnRpYWw8RGlzY291bnRJbnB1dD4sXG4pIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IGRpc2NvdW50IGJlbG9uZ3MgdG8gdGVuYW50XG5cdGNvbnN0IGRpc2NvdW50ID0gYXdhaXQgZGIuZGlzY291bnQuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkaXNjb3VudCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRpc2NvdW50IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuXHR9XG5cblx0Y29uc3QgeyBwcm9kdWN0SWRzLCBjYXRlZ29yeUlkcywgYnJhbmRJZHMsIC4uLmRpc2NvdW50RGF0YSB9ID0gaW5wdXQ7XG5cblx0Ly8gSWYgc2NvcGUtc3BlY2lmaWMgSURzIGFyZSBwcm92aWRlZCwgdXBkYXRlIHRoZSByZWxhdGlvbnNoaXBzXG5cdGlmIChwcm9kdWN0SWRzICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBEZWxldGUgZXhpc3RpbmcgYW5kIGNyZWF0ZSBuZXdcblx0XHRhd2FpdCBkYi5kaXNjb3VudFByb2R1Y3QuZGVsZXRlTWFueSh7XG5cdFx0XHR3aGVyZTogeyBkaXNjb3VudElkOiBpZCB9LFxuXHRcdH0pO1xuXHRcdGlmIChwcm9kdWN0SWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGF3YWl0IGRiLmRpc2NvdW50UHJvZHVjdC5jcmVhdGVNYW55KHtcblx0XHRcdFx0ZGF0YTogcHJvZHVjdElkcy5tYXAoKHByb2R1Y3RJZCkgPT4gKHtcblx0XHRcdFx0XHRkaXNjb3VudElkOiBpZCxcblx0XHRcdFx0XHRwcm9kdWN0SWQsXG5cdFx0XHRcdH0pKSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGlmIChjYXRlZ29yeUlkcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0YXdhaXQgZGIuZGlzY291bnRDYXRlZ29yeS5kZWxldGVNYW55KHtcblx0XHRcdHdoZXJlOiB7IGRpc2NvdW50SWQ6IGlkIH0sXG5cdFx0fSk7XG5cdFx0aWYgKGNhdGVnb3J5SWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGF3YWl0IGRiLmRpc2NvdW50Q2F0ZWdvcnkuY3JlYXRlTWFueSh7XG5cdFx0XHRcdGRhdGE6IGNhdGVnb3J5SWRzLm1hcCgoY2F0ZWdvcnlJZCkgPT4gKHtcblx0XHRcdFx0XHRkaXNjb3VudElkOiBpZCxcblx0XHRcdFx0XHRjYXRlZ29yeUlkLFxuXHRcdFx0XHR9KSksXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoYnJhbmRJZHMgIT09IHVuZGVmaW5lZCkge1xuXHRcdGF3YWl0IGRiLmRpc2NvdW50QnJhbmQuZGVsZXRlTWFueSh7XG5cdFx0XHR3aGVyZTogeyBkaXNjb3VudElkOiBpZCB9LFxuXHRcdH0pO1xuXHRcdGlmIChicmFuZElkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRhd2FpdCBkYi5kaXNjb3VudEJyYW5kLmNyZWF0ZU1hbnkoe1xuXHRcdFx0XHRkYXRhOiBicmFuZElkcy5tYXAoKGJyYW5kSWQpID0+ICh7XG5cdFx0XHRcdFx0ZGlzY291bnRJZDogaWQsXG5cdFx0XHRcdFx0YnJhbmRJZCxcblx0XHRcdFx0fSkpLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdXBkYXRlZCA9IGF3YWl0IGRiLmRpc2NvdW50LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiBkaXNjb3VudERhdGEsXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGlzY291bnQoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHQvLyBWZXJpZnkgZGlzY291bnQgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgZGlzY291bnQgPSBhd2FpdCBkYi5kaXNjb3VudC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIWRpc2NvdW50KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzY291bnQgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG5cdH1cblxuXHRhd2FpdCBkYi5kaXNjb3VudC5kZWxldGUoe1xuXHRcdHdoZXJlOiB7IGlkIH0sXG5cdH0pO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZURpc2NvdW50U3RhdHVzKGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IGRpc2NvdW50IGJlbG9uZ3MgdG8gdGVuYW50XG5cdGNvbnN0IGRpc2NvdW50ID0gYXdhaXQgZGIuZGlzY291bnQuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkaXNjb3VudCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRpc2NvdW50IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuXHR9XG5cblx0Y29uc3QgdXBkYXRlZCA9IGF3YWl0IGRiLmRpc2NvdW50LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiB7IGlzQWN0aXZlOiAhZGlzY291bnQuaXNBY3RpdmUgfSxcblx0fSk7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1UQWlDc0IseUxBQUEifQ==
}),
"[project]/apps/platform/src/server/api/internal/data:b0a401 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toggleDiscountStatus",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"409719470c3c21101c47e88b84794e03f5c8ebbdf2":"toggleDiscountStatus"},"apps/platform/src/server/api/internal/discounts.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("409719470c3c21101c47e88b84794e03f5c8ebbdf2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "toggleDiscountStatus");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGlzY291bnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgdHlwZSB7IERpc2NvdW50U2NvcGUsIERpc2NvdW50VHlwZSB9IGZyb20gXCJAYm9vc3RjYXJ0L2RhdGFiYXNlXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvc2VydmVyL2F1dGhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvc2VydmVyL2RiXCI7XG5pbXBvcnQgeyByZXF1aXJlQWRtaW5UZW5hbnQgfSBmcm9tIFwiQC9zZXJ2ZXIvdGVuYW50XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVTdG9yZUFjY2VzcygpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcblx0aWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcblx0fVxuXG5cdGNvbnN0IHRlbmFudCA9IGF3YWl0IHJlcXVpcmVBZG1pblRlbmFudCgpO1xuXG5cdGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghc3RhZmZSZWNvcmQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcblx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREaXNjb3VudHMoKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGRpc2NvdW50cyA9IGF3YWl0IGRiLmRpc2NvdW50LmZpbmRNYW55KHtcblx0XHR3aGVyZTogeyB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdF9jb3VudDoge1xuXHRcdFx0XHRzZWxlY3Q6IHtcblx0XHRcdFx0XHRwcm9kdWN0czogdHJ1ZSxcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiB0cnVlLFxuXHRcdFx0XHRcdGJyYW5kczogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIGRpc2NvdW50cztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERpc2NvdW50KGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgZGlzY291bnQgPSBhd2FpdCBkYi5kaXNjb3VudC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHByb2R1Y3RzOiB7XG5cdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRwcm9kdWN0OiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGNhdGVnb3JpZXM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdGNhdGVnb3J5OiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGJyYW5kczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0YnJhbmQ6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghZGlzY291bnQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXNjb3VudCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRyZXR1cm4gZGlzY291bnQ7XG59XG5cbmludGVyZmFjZSBEaXNjb3VudElucHV0IHtcblx0bmFtZTogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0dHlwZTogRGlzY291bnRUeXBlO1xuXHR2YWx1ZTogbnVtYmVyO1xuXHRzY29wZTogRGlzY291bnRTY29wZTtcblx0c3RhcnREYXRlOiBEYXRlO1xuXHRlbmREYXRlPzogRGF0ZTtcblx0aXNBY3RpdmU/OiBib29sZWFuO1xuXHRwcm9kdWN0SWRzPzogc3RyaW5nW107XG5cdGNhdGVnb3J5SWRzPzogc3RyaW5nW107XG5cdGJyYW5kSWRzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVEaXNjb3VudChpbnB1dDogRGlzY291bnRJbnB1dCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCB7IHByb2R1Y3RJZHMsIGNhdGVnb3J5SWRzLCBicmFuZElkcywgLi4uZGlzY291bnREYXRhIH0gPSBpbnB1dDtcblxuXHRjb25zdCBkaXNjb3VudCA9IGF3YWl0IGRiLmRpc2NvdW50LmNyZWF0ZSh7XG5cdFx0ZGF0YToge1xuXHRcdFx0Li4uZGlzY291bnREYXRhLFxuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHRwcm9kdWN0czogcHJvZHVjdElkcz8ubGVuZ3RoXG5cdFx0XHRcdD8ge1xuXHRcdFx0XHRcdFx0Y3JlYXRlOiBwcm9kdWN0SWRzLm1hcCgocHJvZHVjdElkKSA9PiAoeyBwcm9kdWN0SWQgfSkpLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0OiB1bmRlZmluZWQsXG5cdFx0XHRjYXRlZ29yaWVzOiBjYXRlZ29yeUlkcz8ubGVuZ3RoXG5cdFx0XHRcdD8ge1xuXHRcdFx0XHRcdFx0Y3JlYXRlOiBjYXRlZ29yeUlkcy5tYXAoKGNhdGVnb3J5SWQpID0+ICh7IGNhdGVnb3J5SWQgfSkpLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0OiB1bmRlZmluZWQsXG5cdFx0XHRicmFuZHM6IGJyYW5kSWRzPy5sZW5ndGhcblx0XHRcdFx0PyB7XG5cdFx0XHRcdFx0XHRjcmVhdGU6IGJyYW5kSWRzLm1hcCgoYnJhbmRJZCkgPT4gKHsgYnJhbmRJZCB9KSksXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ6IHVuZGVmaW5lZCxcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gZGlzY291bnQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVEaXNjb3VudChcblx0aWQ6IHN0cmluZyxcblx0aW5wdXQ6IFBhcnRpYWw8RGlzY291bnRJbnB1dD4sXG4pIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IGRpc2NvdW50IGJlbG9uZ3MgdG8gdGVuYW50XG5cdGNvbnN0IGRpc2NvdW50ID0gYXdhaXQgZGIuZGlzY291bnQuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkaXNjb3VudCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRpc2NvdW50IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuXHR9XG5cblx0Y29uc3QgeyBwcm9kdWN0SWRzLCBjYXRlZ29yeUlkcywgYnJhbmRJZHMsIC4uLmRpc2NvdW50RGF0YSB9ID0gaW5wdXQ7XG5cblx0Ly8gSWYgc2NvcGUtc3BlY2lmaWMgSURzIGFyZSBwcm92aWRlZCwgdXBkYXRlIHRoZSByZWxhdGlvbnNoaXBzXG5cdGlmIChwcm9kdWN0SWRzICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBEZWxldGUgZXhpc3RpbmcgYW5kIGNyZWF0ZSBuZXdcblx0XHRhd2FpdCBkYi5kaXNjb3VudFByb2R1Y3QuZGVsZXRlTWFueSh7XG5cdFx0XHR3aGVyZTogeyBkaXNjb3VudElkOiBpZCB9LFxuXHRcdH0pO1xuXHRcdGlmIChwcm9kdWN0SWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGF3YWl0IGRiLmRpc2NvdW50UHJvZHVjdC5jcmVhdGVNYW55KHtcblx0XHRcdFx0ZGF0YTogcHJvZHVjdElkcy5tYXAoKHByb2R1Y3RJZCkgPT4gKHtcblx0XHRcdFx0XHRkaXNjb3VudElkOiBpZCxcblx0XHRcdFx0XHRwcm9kdWN0SWQsXG5cdFx0XHRcdH0pKSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGlmIChjYXRlZ29yeUlkcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0YXdhaXQgZGIuZGlzY291bnRDYXRlZ29yeS5kZWxldGVNYW55KHtcblx0XHRcdHdoZXJlOiB7IGRpc2NvdW50SWQ6IGlkIH0sXG5cdFx0fSk7XG5cdFx0aWYgKGNhdGVnb3J5SWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGF3YWl0IGRiLmRpc2NvdW50Q2F0ZWdvcnkuY3JlYXRlTWFueSh7XG5cdFx0XHRcdGRhdGE6IGNhdGVnb3J5SWRzLm1hcCgoY2F0ZWdvcnlJZCkgPT4gKHtcblx0XHRcdFx0XHRkaXNjb3VudElkOiBpZCxcblx0XHRcdFx0XHRjYXRlZ29yeUlkLFxuXHRcdFx0XHR9KSksXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoYnJhbmRJZHMgIT09IHVuZGVmaW5lZCkge1xuXHRcdGF3YWl0IGRiLmRpc2NvdW50QnJhbmQuZGVsZXRlTWFueSh7XG5cdFx0XHR3aGVyZTogeyBkaXNjb3VudElkOiBpZCB9LFxuXHRcdH0pO1xuXHRcdGlmIChicmFuZElkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRhd2FpdCBkYi5kaXNjb3VudEJyYW5kLmNyZWF0ZU1hbnkoe1xuXHRcdFx0XHRkYXRhOiBicmFuZElkcy5tYXAoKGJyYW5kSWQpID0+ICh7XG5cdFx0XHRcdFx0ZGlzY291bnRJZDogaWQsXG5cdFx0XHRcdFx0YnJhbmRJZCxcblx0XHRcdFx0fSkpLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdXBkYXRlZCA9IGF3YWl0IGRiLmRpc2NvdW50LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiBkaXNjb3VudERhdGEsXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGlzY291bnQoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHQvLyBWZXJpZnkgZGlzY291bnQgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgZGlzY291bnQgPSBhd2FpdCBkYi5kaXNjb3VudC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIWRpc2NvdW50KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRGlzY291bnQgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG5cdH1cblxuXHRhd2FpdCBkYi5kaXNjb3VudC5kZWxldGUoe1xuXHRcdHdoZXJlOiB7IGlkIH0sXG5cdH0pO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZURpc2NvdW50U3RhdHVzKGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IGRpc2NvdW50IGJlbG9uZ3MgdG8gdGVuYW50XG5cdGNvbnN0IGRpc2NvdW50ID0gYXdhaXQgZGIuZGlzY291bnQuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFkaXNjb3VudCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkRpc2NvdW50IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuXHR9XG5cblx0Y29uc3QgdXBkYXRlZCA9IGF3YWl0IGRiLmRpc2NvdW50LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiB7IGlzQWN0aXZlOiAhZGlzY291bnQuaXNBY3RpdmUgfSxcblx0fSk7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJUQXdOc0IsaU1BQUEifQ==
}),
"[project]/apps/platform/src/stores/dialog-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDialogStore",
    ()=>useDialogStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useDialogStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        // Product dialogs
        isAddProductOpen: false,
        isEditProductOpen: false,
        isViewProductOpen: false,
        isDeleteProductOpen: false,
        // Discount dialogs
        isAddDiscountOpen: false,
        isEditDiscountOpen: false,
        isViewDiscountOpen: false,
        isDeleteDiscountOpen: false,
        // Customer dialogs
        isAddCustomerOpen: false,
        isEditCustomerOpen: false,
        isViewCustomerOpen: false,
        isDeleteCustomerOpen: false,
        // Order dialogs
        isAddOrderOpen: false,
        isEditOrderOpen: false,
        isViewOrderOpen: false,
        isDeleteOrderOpen: false,
        // Category dialogs
        isAddCategoryOpen: false,
        isEditCategoryOpen: false,
        isViewCategoryOpen: false,
        isDeleteCategoryOpen: false,
        // Brand dialogs
        isAddBrandOpen: false,
        isEditBrandOpen: false,
        isViewBrandOpen: false,
        isDeleteBrandOpen: false,
        // Collection dialogs
        isAddCollectionOpen: false,
        isEditCollectionOpen: false,
        isViewCollectionOpen: false,
        isDeleteCollectionOpen: false,
        // Review dialogs
        isAddReviewOpen: false,
        isEditReviewOpen: false,
        isViewReviewOpen: false,
        isDeleteReviewOpen: false,
        // Gift Card dialogs
        isAddGiftCardOpen: false,
        isEditGiftCardOpen: false,
        isViewGiftCardOpen: false,
        isDeleteGiftCardOpen: false,
        // Promo Code dialogs
        isAddPromoCodeOpen: false,
        isEditPromoCodeOpen: false,
        isViewPromoCodeOpen: false,
        isDeletePromoCodeOpen: false,
        // Page dialogs
        isAddPageOpen: false,
        isEditPageOpen: false,
        isViewPageOpen: false,
        isDeletePageOpen: false,
        // Shipping dialogs
        isAddShippingZoneOpen: false,
        isEditShippingZoneOpen: false,
        isViewShippingZoneOpen: false,
        isDeleteShippingZoneOpen: false,
        // Payment dialogs
        isAddPaymentMethodOpen: false,
        isEditPaymentMethodOpen: false,
        isViewPaymentMethodOpen: false,
        isDeletePaymentMethodOpen: false,
        // Locale dialogs
        isAddLocaleOpen: false,
        isEditLocaleOpen: false,
        isViewLocaleOpen: false,
        isDeleteLocaleOpen: false,
        // Actions
        openDialog: (dialogName)=>set({
                [dialogName]: true
            }),
        closeDialog: (dialogName)=>set({
                [dialogName]: false
            }),
        closeAllDialogs: ()=>set({
                // Product dialogs
                isAddProductOpen: false,
                isEditProductOpen: false,
                isViewProductOpen: false,
                isDeleteProductOpen: false,
                // Discount dialogs
                isAddDiscountOpen: false,
                isEditDiscountOpen: false,
                isViewDiscountOpen: false,
                isDeleteDiscountOpen: false,
                // Customer dialogs
                isAddCustomerOpen: false,
                isEditCustomerOpen: false,
                isViewCustomerOpen: false,
                isDeleteCustomerOpen: false,
                // Order dialogs
                isAddOrderOpen: false,
                isEditOrderOpen: false,
                isViewOrderOpen: false,
                isDeleteOrderOpen: false,
                // Category dialogs
                isAddCategoryOpen: false,
                isEditCategoryOpen: false,
                isViewCategoryOpen: false,
                isDeleteCategoryOpen: false,
                // Brand dialogs
                isAddBrandOpen: false,
                isEditBrandOpen: false,
                isViewBrandOpen: false,
                isDeleteBrandOpen: false,
                // Collection dialogs
                isAddCollectionOpen: false,
                isEditCollectionOpen: false,
                isViewCollectionOpen: false,
                isDeleteCollectionOpen: false,
                // Review dialogs
                isAddReviewOpen: false,
                isEditReviewOpen: false,
                isViewReviewOpen: false,
                isDeleteReviewOpen: false,
                // Gift Card dialogs
                isAddGiftCardOpen: false,
                isEditGiftCardOpen: false,
                isViewGiftCardOpen: false,
                isDeleteGiftCardOpen: false,
                // Promo Code dialogs
                isAddPromoCodeOpen: false,
                isEditPromoCodeOpen: false,
                isViewPromoCodeOpen: false,
                isDeletePromoCodeOpen: false,
                // Page dialogs
                isAddPageOpen: false,
                isEditPageOpen: false,
                isViewPageOpen: false,
                isDeletePageOpen: false,
                // Shipping dialogs
                isAddShippingZoneOpen: false,
                isEditShippingZoneOpen: false,
                isViewShippingZoneOpen: false,
                isDeleteShippingZoneOpen: false,
                // Payment dialogs
                isAddPaymentMethodOpen: false,
                isEditPaymentMethodOpen: false,
                isViewPaymentMethodOpen: false,
                isDeletePaymentMethodOpen: false,
                // Locale dialogs
                isAddLocaleOpen: false,
                isEditLocaleOpen: false,
                isViewLocaleOpen: false,
                isDeleteLocaleOpen: false
            })
    }));
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
"[project]/apps/platform/src/components/ui/separator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/apps/platform/src/components/ui/switch.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Thumb"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/components/ui/switch.tsx",
            lineNumber: 20,
            columnNumber: 3
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/switch.tsx",
        lineNumber: 12,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
Switch.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/apps/platform/src/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/textarea.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
Textarea.displayName = "Textarea";
;
}),
"[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteDiscountDialog",
    ()=>DeleteDiscountDialog,
    "DiscountFormDialog",
    ()=>DiscountFormDialog,
    "ViewDiscountDialog",
    ()=>ViewDiscountDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/admin/polaris-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/switch.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
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
function ViewDiscountDialog({ open, onOpenChange, discount }) {
    if (!discount) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: discount.name
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 63,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    children: discount.status
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 64,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 62,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Discount campaign details"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 66,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                    lineNumber: 61,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Discount Code"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 72,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-mono font-bold",
                                            children: discount.code
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 75,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 71,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Type"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 78,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            children: discount.type
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 79,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 77,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Value"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 82,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold",
                                            children: discount.value
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 83,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 81,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Scope"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 86,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            children: discount.scope
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 87,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 85,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 70,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 91,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm font-medium text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 9
                                                }, this),
                                                "Start Date"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 95,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: discount.startDate
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 99,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 94,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm font-medium text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 9
                                                }, this),
                                                "End Date"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 102,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: discount.endDate
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 106,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 101,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 93,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 110,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Usage Statistics"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 113,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border rounded-lg bg-muted/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground mb-1",
                                                    children: "Used"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold",
                                                    children: discount.uses
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 117,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border rounded-lg bg-muted/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground mb-1",
                                                    children: "Limit"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold",
                                                    children: "100"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 121,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border rounded-lg bg-muted/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground mb-1",
                                                    children: "Remaining"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold",
                                                    children: 100 - discount.uses
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 125,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 116,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 112,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 133,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Special discount for Black Friday campaign. Valid on all electronics category products."
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 136,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 132,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                    lineNumber: 69,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 144,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            children: "Duplicate"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 147,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                    lineNumber: 143,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
            lineNumber: 60,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, this);
}
function DiscountFormDialog({ open, onOpenChange, discount, mode, onSuccess }) {
    const handleSubmit = (e)=>{
        e.preventDefault();
        onOpenChange(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: mode === "create" ? "Create New Discount" : "Edit Discount"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 178,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: mode === "create" ? "Set up a new discount campaign" : "Update discount settings"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 181,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                    lineNumber: 177,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "discountName",
                                    children: "Campaign Name *"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 190,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "discountName",
                                    defaultValue: discount?.name,
                                    placeholder: "Black Friday Sale",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 191,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 189,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "discountCode",
                                            children: "Discount Code *"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 201,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "discountCode",
                                            defaultValue: discount?.code,
                                            placeholder: "BLACKFRIDAY2025",
                                            className: "font-mono uppercase",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 202,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 200,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "discountType",
                                            children: "Type *"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 211,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                            defaultValue: discount?.type || "PERCENTAGE",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    id: "discountType",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "PERCENTAGE",
                                                            children: "Percentage"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "FIXED_AMOUNT",
                                                            children: "Fixed Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "FREE_SHIPPING",
                                                            children: "Free Shipping"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "BUY_X_GET_Y",
                                                            children: "Buy X Get Y"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 212,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 210,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 199,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "discountValue",
                                            children: "Value *"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 228,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "discountValue",
                                            type: "number",
                                            step: "0.01",
                                            min: "0",
                                            defaultValue: discount?.value.replace(`%`, ``).replace(`$`, ``),
                                            placeholder: "20",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 229,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 227,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "discountScope",
                                            children: "Scope *"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 240,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                            defaultValue: discount?.scope || "ALL_PRODUCTS",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    id: "discountScope",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "ALL_PRODUCTS",
                                                            children: "All Products"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "CATEGORY",
                                                            children: "Specific Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "PRODUCT",
                                                            children: "Specific Product"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "BRAND",
                                                            children: "Specific Brand"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 241,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 239,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 226,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 255,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "startDate",
                                            children: "Start Date *"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 259,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "startDate",
                                            type: "datetime-local",
                                            defaultValue: discount?.startDate,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 260,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 258,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "endDate",
                                            children: "End Date *"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 268,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "endDate",
                                            type: "datetime-local",
                                            defaultValue: discount?.endDate || ``,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 269,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 267,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 257,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 278,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "usageLimit",
                                                    children: "Usage Limit"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "usageLimit",
                                                    type: "number",
                                                    min: "0",
                                                    placeholder: "100"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 282,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "minPurchase",
                                                    children: "Minimum Purchase ($)"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "minPurchase",
                                                    type: "number",
                                                    step: "0.01",
                                                    min: "0",
                                                    placeholder: "50.00"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 291,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 281,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "description",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 304,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                            id: "description",
                                            placeholder: "Internal notes about this discount...",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 305,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 303,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "active",
                                                    children: "Active Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Enable this discount immediately"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 313,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Switch"], {
                                            id: "active",
                                            defaultChecked: discount?.status === "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 319,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 312,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "combinable",
                                                    children: "Combinable"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Can be combined with other discounts"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 326,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Switch"], {
                                            id: "combinable"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                            lineNumber: 332,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 325,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 280,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: ()=>onOpenChange(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 337,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                    type: "submit",
                                    children: mode === "create" ? "Create Discount" : "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 344,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 336,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                    lineNumber: 188,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
            lineNumber: 176,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
        lineNumber: 175,
        columnNumber: 3
    }, this);
}
function DeleteDiscountDialog({ open, onOpenChange, discount, onConfirm }) {
    const handleDelete = ()=>{
        onConfirm?.();
    };
    if (!discount) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Delete Discount"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 377,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Are you sure you want to delete this discount? This action cannot be undone."
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 378,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                    lineNumber: 376,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border rounded-lg bg-muted/30 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Campaign:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 386,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: discount.name
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 387,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 385,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Code:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 390,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium font-mono",
                                    children: discount.code
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 391,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 389,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Value:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 394,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: discount.value
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 395,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 393,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Times Used:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 398,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: discount.uses
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                                    lineNumber: 399,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 397,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                    lineNumber: 384,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 404,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "destructive",
                            onClick: handleDelete,
                            children: "Delete Discount"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                            lineNumber: 407,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
                    lineNumber: 403,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
            lineNumber: 375,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx",
        lineNumber: 374,
        columnNumber: 3
    }, this);
}
}),
"[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiscountsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/percent.js [app-ssr] (ecmascript) <export default as Percent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/admin/polaris-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/empty.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$736fb0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:736fb0 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$5afe10__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:5afe10 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$b0a401__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:b0a401 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/stores/dialog-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$discounts$2f$_components$2f$discount$2d$dialogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/app/(internal)/admin/discounts/_components/discount-dialogs.tsx [app-ssr] (ecmascript)");
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
;
function mapDiscountToDisplay(discount) {
    const value = discount.type === "PERCENTAGE" ? `${discount.value}%` : `$${Number(discount.value).toFixed(2)}`;
    return {
        id: discount.id,
        name: discount.name,
        code: "",
        description: discount.description ?? "",
        type: discount.type,
        value,
        scope: discount.scope,
        status: discount.isActive ? "Active" : "Inactive",
        startDate: new Date(discount.startDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        }),
        endDate: discount.endDate ? new Date(discount.endDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        }) : null,
        uses: 0,
        limit: undefined,
        minimumPurchase: undefined,
        combinable: undefined,
        isActive: discount.isActive
    };
}
function DiscountsPage() {
    const [discounts, setDiscounts] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    const [searchQuery, setSearchQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    const [typeFilter, setTypeFilter] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("all");
    const [selectedDiscount, setSelectedDiscount] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    // Dialog states from zustand
    const isAddDiscountOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogStore"])((state)=>state.isAddDiscountOpen);
    const isEditDiscountOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogStore"])((state)=>state.isEditDiscountOpen);
    const isViewDiscountOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogStore"])((state)=>state.isViewDiscountOpen);
    const isDeleteDiscountOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogStore"])((state)=>state.isDeleteDiscountOpen);
    const openDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogStore"])((state)=>state.openDialog);
    const closeDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDialogStore"])((state)=>state.closeDialog);
    const fetchDiscounts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](async ()=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$5afe10__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDiscounts"])();
            setDiscounts(data.map(mapDiscountToDisplay));
        } catch (error) {
            console.error("Failed to fetch discounts:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to load discounts");
        } finally{
            setIsLoading(false);
        }
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        fetchDiscounts();
    }, [
        fetchDiscounts
    ]);
    // Filter discounts based on search and type filter
    const filteredDiscounts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return discounts.filter((discount)=>{
            const matchesSearch = searchQuery === "" || discount.name.toLowerCase().includes(searchQuery.toLowerCase()) || discount.description.toLowerCase().includes(searchQuery.toLowerCase()) || discount.code.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType = typeFilter === "all" || discount.type === typeFilter;
            return matchesSearch && matchesType;
        });
    }, [
        discounts,
        searchQuery,
        typeFilter
    ]);
    // Stats calculations
    const totalDiscounts = discounts.length;
    const activeDiscounts = discounts.filter((d)=>d.status === "Active").length;
    const totalUses = discounts.reduce((acc, d)=>acc + d.uses, 0);
    // Event handlers
    const handleView = (discount)=>{
        setSelectedDiscount(discount);
        openDialog("isViewDiscountOpen");
    };
    const handleEdit = (discount)=>{
        setSelectedDiscount(discount);
        openDialog("isEditDiscountOpen");
    };
    const handleDelete = (discount)=>{
        setSelectedDiscount(discount);
        openDialog("isDeleteDiscountOpen");
    };
    const handleCreate = ()=>{
        setSelectedDiscount(null);
        openDialog("isAddDiscountOpen");
    };
    const handleToggleStatus = async (discountId)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$b0a401__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["toggleDiscountStatus"])(discountId);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Discount status updated");
            await fetchDiscounts();
        } catch (error) {
            console.error("Failed to toggle discount status:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to update discount status");
        }
    };
    const handleDeleteConfirm = async ()=>{
        if (!selectedDiscount) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$736fb0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteDiscount"])(selectedDiscount.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Discount deleted");
            closeDialog("isDeleteDiscountOpen");
            await fetchDiscounts();
        } catch (error) {
            console.error("Failed to delete discount:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete discount");
        }
    };
    const getScopeBadge = (scope)=>{
        const styles = {
            PRODUCT: `bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300`,
            CATEGORY: `bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300`,
            BRAND: `bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300`,
            ALL_PRODUCTS: `bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300`
        };
        return styles[scope] || styles.ALL_PRODUCTS;
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Loader"], {
                size: "lg"
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                lineNumber: 235,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
            lineNumber: 234,
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
                                children: "Discounts"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 245,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "Create and manage discount campaigns"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 246,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                        lineNumber: 244,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarisButton"], {
                        type: "button",
                        onClick: handleCreate,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 251,
                                columnNumber: 6
                            }, this),
                            "Create Discount"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                        lineNumber: 250,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                lineNumber: 243,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Total Discounts"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 258,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: totalDiscounts
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 259,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                        lineNumber: 257,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Active Discounts"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 262,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: activeDiscounts
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 263,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                        lineNumber: 261,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Total Uses"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 266,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: totalUses.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 267,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                        lineNumber: 265,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Inactive"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 272,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: totalDiscounts - activeDiscounts
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 273,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                        lineNumber: 271,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                lineNumber: 256,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "search",
                                    placeholder: "Search by discount name or description...",
                                    className: "pl-9",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                            lineNumber: 281,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                            value: typeFilter,
                            onValueChange: setTypeFilter,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                    className: "w-full sm:w-[180px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                        placeholder: "Filter by type"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "all",
                                            children: "All Types"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "PERCENTAGE",
                                            children: "Percentage"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: "FIXED_AMOUNT",
                                            children: "Fixed Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                            lineNumber: 291,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 7
                                }, this),
                                "More Filters"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                            lineNumber: 301,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                    lineNumber: 280,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                lineNumber: 279,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: filteredDiscounts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Empty"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyMedia"], {
                                    variant: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"], {
                                        className: "h-8 w-8"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyTitle"], {
                                    children: "No discounts found"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyDescription"], {
                                    children: searchQuery || typeFilter !== "all" ? "Try adjusting your search or filter" : "Create your first discount to get started"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                            lineNumber: 311,
                            columnNumber: 7
                        }, this),
                        !searchQuery && typeFilter === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                type: "button",
                                onClick: handleCreate,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 10
                                    }, this),
                                    "Create Discount"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 324,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                            lineNumber: 323,
                            columnNumber: 8
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                    lineNumber: 310,
                    columnNumber: 6
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Discount"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Value"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Scope"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Active Period"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Uses"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "w-[70px]"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 334,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                            lineNumber: 333,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: filteredDiscounts.map((discount)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: "cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-sm",
                                                        children: discount.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground text-xs",
                                                        children: discount.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: discount.type === "PERCENTAGE" ? "Percentage" : "Fixed"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: discount.value
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-1 text-xs font-medium rounded-full ${getScopeBadge(discount.scope)}`,
                                                children: discount.scope.replace("_", " ")
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-3 w-3 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        children: [
                                                            discount.startDate,
                                                            " - ",
                                                            discount.endDate || "Ongoing"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: discount.uses
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleToggleStatus(discount.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-1 text-xs font-medium rounded-full cursor-pointer ${discount.status === "Active" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"}`,
                                                    children: discount.status
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 12
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                            lineNumber: 382,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            variant: "ghost",
                                                            size: "icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                        align: "end",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                                children: "Actions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>handleView(discount),
                                                                children: "View details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>handleEdit(discount),
                                                                children: "Edit discount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                children: "Duplicate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                children: "View analytics"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                                lineNumber: 415,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                                lineNumber: 416,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                className: "text-red-600",
                                                                onClick: ()=>handleDelete(discount),
                                                                children: "Delete discount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                                lineNumber: 399,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, discount.id, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                            lineNumber: 345,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                    lineNumber: 332,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                lineNumber: 308,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Showing",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: [
                                    "1-",
                                    filteredDiscounts.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 436,
                                columnNumber: 6
                            }, this),
                            " of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: totalDiscounts
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 437,
                                columnNumber: 6
                            }, this),
                            " discounts"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                        lineNumber: 434,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                size: "sm",
                                disabled: true,
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 440,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                size: "sm",
                                disabled: true,
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                                lineNumber: 443,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                        lineNumber: 439,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                lineNumber: 433,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$discounts$2f$_components$2f$discount$2d$dialogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewDiscountDialog"], {
                open: isViewDiscountOpen,
                onOpenChange: (open)=>open ? openDialog("isViewDiscountOpen") : closeDialog("isViewDiscountOpen"),
                discount: selectedDiscount
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                lineNumber: 449,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$discounts$2f$_components$2f$discount$2d$dialogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiscountFormDialog"], {
                open: isAddDiscountOpen,
                onOpenChange: (open)=>open ? openDialog("isAddDiscountOpen") : closeDialog("isAddDiscountOpen"),
                mode: "create",
                onSuccess: fetchDiscounts
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                lineNumber: 458,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$discounts$2f$_components$2f$discount$2d$dialogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiscountFormDialog"], {
                open: isEditDiscountOpen,
                onOpenChange: (open)=>open ? openDialog("isEditDiscountOpen") : closeDialog("isEditDiscountOpen"),
                mode: "edit",
                discount: selectedDiscount,
                onSuccess: fetchDiscounts
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                lineNumber: 468,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$discounts$2f$_components$2f$discount$2d$dialogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeleteDiscountDialog"], {
                open: isDeleteDiscountOpen,
                onOpenChange: (open)=>open ? openDialog("isDeleteDiscountOpen") : closeDialog("isDeleteDiscountOpen"),
                discount: selectedDiscount,
                onConfirm: handleDeleteConfirm
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
                lineNumber: 479,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/discounts/page.tsx",
        lineNumber: 241,
        columnNumber: 3
    }, this);
}
}),
];

//# sourceMappingURL=apps_platform_src_c200934a._.js.map