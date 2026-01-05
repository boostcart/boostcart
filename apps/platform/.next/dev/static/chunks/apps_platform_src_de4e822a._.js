(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/platform/src/components/admin/polaris-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolarisButton",
    ()=>PolarisButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function PolarisButton({ children, size = "slim", fullWidth = false, loading = false, disabled = false, icon, asChild = false, className, ...props }) {
    const sizeClasses = {
        micro: "h-7 px-2.5 text-xs",
        slim: "h-9 px-3 text-sm",
        medium: "h-10 px-4 text-sm",
        large: "h-12 px-5 text-base"
    };
    const buttonClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Base styles matching Polaris primary button
    "relative inline-flex items-center justify-center gap-2", "font-semibold rounded-[10px] cursor-pointer", "transition-all duration-200 ease-out", "outline-none focus-visible:outline-2 focus-visible:outline-offset-2", "border-0", "shadow-[inset_0_1.5px_0_0_rgba(0,0,0,0.6),inset_1.5px_0_0_0_rgba(0,0,0,0.8),inset_-1.5px_0_0_0_rgba(0,0,0,0.8),inset_0_-3px_0_0_rgba(0,0,0,0.8)]", "bg-linear-to-b from-[#4a4a4a] to-[#303030]", // Text colors from Polaris tokens
    "text-white", "hover:before:absolute hover:before:inset-0 hover:before:rounded-[10px] hover:before:bg-black hover:before:opacity-30 hover:before:transition-opacity hover:before:duration-200 hover:before:content-['']", // Disabled state
    "disabled:bg-linear-to-b disabled:from-[rgba(0,0,0,0.2)] disabled:to-[rgba(0,0,0,0.17)]", "disabled:text-[rgba(255,255,255,0.6)]", "disabled:cursor-not-allowed", "disabled:shadow-[inset_0_1.5px_0_0_rgba(0,0,0,0.2),inset_1.5px_0_0_0_rgba(0,0,0,0.2),inset_-1.5px_0_0_0_rgba(0,0,0,0.2),inset_0_-3px_0_0_rgba(0,0,0,0.2)]", "disabled:hover:before:opacity-0", // Focus state border
    "focus-visible:outline-[#005BD3]", "active:shadow-[inset_0_4px_0_0_rgba(0,0,0,0.8),inset_1.5px_0_0_0_rgba(0,0,0,0.8),inset_-1.5px_0_0_0_rgba(0,0,0,0.8),inset_0_-3px_0_0_rgba(0,0,0,0.8)]", "active:bg-linear-to-b active:from-[#2a2a2a] active:to-[#1a1a1a]", // Size variants
    sizeClasses[size], // Full width
    fullWidth && "w-full", disabled && "pointer-events-none opacity-50", className);
    // When asChild is true, render Slot directly with the child (Link, etc.)
    // The child component receives all the styling via className
    if (asChild) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Slot, {
            className: buttonClasses,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
            lineNumber: 79,
            columnNumber: 4
        }, this);
    }
    // Regular button with internal structure
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        disabled: disabled || loading,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonClasses, "active:[&>span:last-child]:translate-y-px"),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0_3px_0_0_rgba(255,255,255,0.2),inset_1.5px_0_0_0_rgba(255,255,255,0.1),inset_-1.5px_0_0_0_rgba(255,255,255,0.1)] active:opacity-0 transition-opacity duration-200"
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                lineNumber: 93,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative flex items-center justify-center gap-2 transition-transform duration-200",
                children: [
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "animate-spin size-4",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                children: "Loading"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                                lineNumber: 103,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                                lineNumber: 104,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                                lineNumber: 112,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                        lineNumber: 97,
                        columnNumber: 6
                    }, this) : icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                        lineNumber: 119,
                        columnNumber: 14
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                lineNumber: 95,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
        lineNumber: 87,
        columnNumber: 3
    }, this);
}
_c = PolarisButton;
var _c;
__turbopack_context__.k.register(_c, "PolarisButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
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
_c1 = Table;
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = TableRow;
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = TableHead;
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c13 = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c15 = TableCaption;
TableCaption.displayName = "TableCaption";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "Table$React.forwardRef");
__turbopack_context__.k.register(_c1, "Table");
__turbopack_context__.k.register(_c2, "TableHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "TableHeader");
__turbopack_context__.k.register(_c4, "TableBody$React.forwardRef");
__turbopack_context__.k.register(_c5, "TableBody");
__turbopack_context__.k.register(_c6, "TableFooter$React.forwardRef");
__turbopack_context__.k.register(_c7, "TableFooter");
__turbopack_context__.k.register(_c8, "TableRow$React.forwardRef");
__turbopack_context__.k.register(_c9, "TableRow");
__turbopack_context__.k.register(_c10, "TableHead$React.forwardRef");
__turbopack_context__.k.register(_c11, "TableHead");
__turbopack_context__.k.register(_c12, "TableCell$React.forwardRef");
__turbopack_context__.k.register(_c13, "TableCell");
__turbopack_context__.k.register(_c14, "TableCaption$React.forwardRef");
__turbopack_context__.k.register(_c15, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/server/api/internal/data:8b73a3 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteBlogPost",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40d81df54c74dd0f77bc6811c424f98f0caf2d80d1":"deleteBlogPost"},"apps/platform/src/server/api/internal/blog.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40d81df54c74dd0f77bc6811c424f98f0caf2d80d1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteBlogPost");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYmxvZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3RzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0cyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRNYW55KHtcblx0XHR3aGVyZTogeyB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHRyYW5zbGF0aW9uczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0bG9jYWxlOiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuXHR9KTtcblxuXHRyZXR1cm4gcG9zdHMubWFwKChwb3N0KSA9PiAoe1xuXHRcdGlkOiBwb3N0LmlkLFxuXHRcdHNsdWc6IHBvc3Quc2x1Zyxcblx0XHRmZWF0dXJlZEltYWdlOiBwb3N0LmZlYXR1cmVkSW1hZ2UsXG5cdFx0YXV0aG9yOiBwb3N0LmF1dGhvcixcblx0XHRpc1B1Ymxpc2hlZDogcG9zdC5pc1B1Ymxpc2hlZCxcblx0XHRwdWJsaXNoZWRBdDogcG9zdC5wdWJsaXNoZWRBdCxcblx0XHR0aXRsZTogcG9zdC50cmFuc2xhdGlvbnNbMF0/LnRpdGxlID8/IHBvc3Quc2x1Zyxcblx0XHRleGNlcnB0OiBwb3N0LnRyYW5zbGF0aW9uc1swXT8uZXhjZXJwdCA/PyBcIlwiLFxuXHRcdGNvbnRlbnQ6IHBvc3QudHJhbnNsYXRpb25zWzBdPy5jb250ZW50ID8/IFwiXCIsXG5cdFx0dHJhbnNsYXRpb25zOiBwb3N0LnRyYW5zbGF0aW9ucy5tYXAoKHQpID0+ICh7XG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRleGNlcnB0OiB0LmV4Y2VycHQsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcG9zdC5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwb3N0LnVwZGF0ZWRBdCxcblx0fSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3QoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0ID0gYXdhaXQgZGIuYmxvZ1Bvc3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdGxvY2FsZTogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFwb3N0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQmxvZyBwb3N0IG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aWQ6IHBvc3QuaWQsXG5cdFx0c2x1ZzogcG9zdC5zbHVnLFxuXHRcdGZlYXR1cmVkSW1hZ2U6IHBvc3QuZmVhdHVyZWRJbWFnZSxcblx0XHRhdXRob3I6IHBvc3QuYXV0aG9yLFxuXHRcdGlzUHVibGlzaGVkOiBwb3N0LmlzUHVibGlzaGVkLFxuXHRcdHB1Ymxpc2hlZEF0OiBwb3N0LnB1Ymxpc2hlZEF0LFxuXHRcdHRyYW5zbGF0aW9uczogcG9zdC50cmFuc2xhdGlvbnMubWFwKCh0KSA9PiAoe1xuXHRcdFx0aWQ6IHQuaWQsXG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRleGNlcnB0OiB0LmV4Y2VycHQsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcG9zdC5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwb3N0LnVwZGF0ZWRBdCxcblx0fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVCbG9nUG9zdElucHV0IHtcblx0c2x1Zzogc3RyaW5nO1xuXHRmZWF0dXJlZEltYWdlPzogc3RyaW5nO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGlzUHVibGlzaGVkPzogYm9vbGVhbjtcblx0cHVibGlzaGVkQXQ/OiBEYXRlO1xuXHR0cmFuc2xhdGlvbnM6IHtcblx0XHRsb2NhbGVJZDogc3RyaW5nO1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0ZXhjZXJwdD86IHN0cmluZztcblx0XHRjb250ZW50OiBzdHJpbmc7XG5cdH1bXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJsb2dQb3N0KGlucHV0OiBDcmVhdGVCbG9nUG9zdElucHV0KSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc2x1Z1xuXHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZF9zbHVnOiB7XG5cdFx0XHRcdHRlbmFudElkLFxuXHRcdFx0XHRzbHVnOiBpbnB1dC5zbHVnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIGJsb2cgcG9zdCB3aXRoIHRoaXMgc2x1ZyBhbHJlYWR5IGV4aXN0c1wiKTtcblx0fVxuXG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBkYi5ibG9nUG9zdC5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRmZWF0dXJlZEltYWdlOiBpbnB1dC5mZWF0dXJlZEltYWdlLFxuXHRcdFx0YXV0aG9yOiBpbnB1dC5hdXRob3IsXG5cdFx0XHRpc1B1Ymxpc2hlZDogaW5wdXQuaXNQdWJsaXNoZWQgPz8gZmFsc2UsXG5cdFx0XHRwdWJsaXNoZWRBdDogaW5wdXQuaXNQdWJsaXNoZWQgPyAoaW5wdXQucHVibGlzaGVkQXQgPz8gbmV3IERhdGUoKSkgOiBudWxsLFxuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0Y3JlYXRlOiBpbnB1dC50cmFuc2xhdGlvbnMubWFwKCh0KSA9PiAoe1xuXHRcdFx0XHRcdGxvY2FsZUlkOiB0LmxvY2FsZUlkLFxuXHRcdFx0XHRcdHRpdGxlOiB0LnRpdGxlLFxuXHRcdFx0XHRcdGV4Y2VycHQ6IHQuZXhjZXJwdCxcblx0XHRcdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0XHRcdH0pKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHRydWUsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHBvc3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlQmxvZ1Bvc3RJbnB1dCB7XG5cdHNsdWc/OiBzdHJpbmc7XG5cdGZlYXR1cmVkSW1hZ2U/OiBzdHJpbmcgfCBudWxsO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGlzUHVibGlzaGVkPzogYm9vbGVhbjtcblx0cHVibGlzaGVkQXQ/OiBEYXRlIHwgbnVsbDtcblx0dHJhbnNsYXRpb25zPzoge1xuXHRcdGxvY2FsZUlkOiBzdHJpbmc7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRleGNlcnB0Pzogc3RyaW5nO1xuXHRcdGNvbnRlbnQ6IHN0cmluZztcblx0fVtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmxvZ1Bvc3QoaWQ6IHN0cmluZywgaW5wdXQ6IFVwZGF0ZUJsb2dQb3N0SW5wdXQpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgcG9zdCA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghcG9zdCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkJsb2cgcG9zdCBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc2x1ZyBpZiBjaGFuZ2luZ1xuXHRpZiAoaW5wdXQuc2x1ZyAmJiBpbnB1dC5zbHVnICE9PSBwb3N0LnNsdWcpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRVbmlxdWUoe1xuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0dGVuYW50SWRfc2x1Zzoge1xuXHRcdFx0XHRcdHRlbmFudElkLFxuXHRcdFx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIGJsb2cgcG9zdCB3aXRoIHRoaXMgc2x1ZyBhbHJlYWR5IGV4aXN0c1wiKTtcblx0XHR9XG5cdH1cblxuXHQvLyBIYW5kbGUgcHVibGlzaCBzdGF0ZSBjaGFuZ2Vcblx0bGV0IHB1Ymxpc2hlZEF0ID0gaW5wdXQucHVibGlzaGVkQXQ7XG5cdGlmIChpbnB1dC5pc1B1Ymxpc2hlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGlucHV0LmlzUHVibGlzaGVkICYmICFwb3N0LmlzUHVibGlzaGVkKSB7XG5cdFx0XHQvLyBQdWJsaXNoaW5nIGZvciB0aGUgZmlyc3QgdGltZVxuXHRcdFx0cHVibGlzaGVkQXQgPSBwdWJsaXNoZWRBdCA/PyBuZXcgRGF0ZSgpO1xuXHRcdH0gZWxzZSBpZiAoIWlucHV0LmlzUHVibGlzaGVkKSB7XG5cdFx0XHQvLyBVbnB1Ymxpc2hpbmdcblx0XHRcdHB1Ymxpc2hlZEF0ID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIuYmxvZ1Bvc3QudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHtcblx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRmZWF0dXJlZEltYWdlOiBpbnB1dC5mZWF0dXJlZEltYWdlLFxuXHRcdFx0YXV0aG9yOiBpbnB1dC5hdXRob3IsXG5cdFx0XHRpc1B1Ymxpc2hlZDogaW5wdXQuaXNQdWJsaXNoZWQsXG5cdFx0XHRwdWJsaXNoZWRBdCxcblx0XHRcdC4uLihpbnB1dC50cmFuc2xhdGlvbnMgJiYge1xuXHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRkZWxldGVNYW55OiB7fSxcblx0XHRcdFx0XHRjcmVhdGU6IGlucHV0LnRyYW5zbGF0aW9ucy5tYXAoKHQpID0+ICh7XG5cdFx0XHRcdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdFx0XHRcdHRpdGxlOiB0LnRpdGxlLFxuXHRcdFx0XHRcdFx0ZXhjZXJwdDogdC5leGNlcnB0LFxuXHRcdFx0XHRcdFx0Y29udGVudDogdC5jb250ZW50LFxuXHRcdFx0XHRcdH0pKSxcblx0XHRcdFx0fSxcblx0XHRcdH0pLFxuXHRcdH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0dHJhbnNsYXRpb25zOiB0cnVlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQmxvZ1Bvc3QoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0ID0gYXdhaXQgZGIuYmxvZ1Bvc3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFwb3N0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQmxvZyBwb3N0IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuXHR9XG5cblx0YXdhaXQgZGIuYmxvZ1Bvc3QuZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVCbG9nUG9zdFB1Ymxpc2hlZChpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBkYi5ibG9nUG9zdC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIXBvc3QpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJCbG9nIHBvc3Qgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG5cdH1cblxuXHRjb25zdCBpc1B1Ymxpc2hlZCA9ICFwb3N0LmlzUHVibGlzaGVkO1xuXHRjb25zdCBwdWJsaXNoZWRBdCA9IGlzUHVibGlzaGVkXG5cdFx0PyBwb3N0LnB1Ymxpc2hlZEF0ID8/IG5ldyBEYXRlKClcblx0XHQ6IHBvc3QucHVibGlzaGVkQXQ7XG5cblx0Y29uc3QgdXBkYXRlZCA9IGF3YWl0IGRiLmJsb2dQb3N0LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiB7XG5cdFx0XHRpc1B1Ymxpc2hlZCxcblx0XHRcdHB1Ymxpc2hlZEF0LFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1N0YXRzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBbdG90YWwsIHB1Ymxpc2hlZCwgZHJhZnRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRkYi5ibG9nUG9zdC5jb3VudCh7IHdoZXJlOiB7IHRlbmFudElkIH0gfSksXG5cdFx0ZGIuYmxvZ1Bvc3QuY291bnQoeyB3aGVyZTogeyB0ZW5hbnRJZCwgaXNQdWJsaXNoZWQ6IHRydWUgfSB9KSxcblx0XHRkYi5ibG9nUG9zdC5jb3VudCh7IHdoZXJlOiB7IHRlbmFudElkLCBpc1B1Ymxpc2hlZDogZmFsc2UgfSB9KSxcblx0XSk7XG5cblx0Ly8gR2V0IHJlY2VudCBwb3N0cyAobGFzdCA3IGRheXMpXG5cdGNvbnN0IHdlZWtBZ28gPSBuZXcgRGF0ZSgpO1xuXHR3ZWVrQWdvLnNldERhdGUod2Vla0Fnby5nZXREYXRlKCkgLSA3KTtcblxuXHRjb25zdCByZWNlbnQgPSBhd2FpdCBkYi5ibG9nUG9zdC5jb3VudCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0Y3JlYXRlZEF0OiB7IGd0ZTogd2Vla0FnbyB9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0dG90YWwsXG5cdFx0cHVibGlzaGVkLFxuXHRcdGRyYWZ0cyxcblx0XHRyZWNlbnQsXG5cdH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdUQXNQc0IsMkxBQUEifQ==
}),
"[project]/apps/platform/src/server/api/internal/data:4498d5 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlogPosts",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00de3f01b91a9ac6d513de5942c011266961dc79c4":"getBlogPosts"},"apps/platform/src/server/api/internal/blog.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00de3f01b91a9ac6d513de5942c011266961dc79c4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getBlogPosts");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYmxvZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3RzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0cyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRNYW55KHtcblx0XHR3aGVyZTogeyB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHRyYW5zbGF0aW9uczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0bG9jYWxlOiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuXHR9KTtcblxuXHRyZXR1cm4gcG9zdHMubWFwKChwb3N0KSA9PiAoe1xuXHRcdGlkOiBwb3N0LmlkLFxuXHRcdHNsdWc6IHBvc3Quc2x1Zyxcblx0XHRmZWF0dXJlZEltYWdlOiBwb3N0LmZlYXR1cmVkSW1hZ2UsXG5cdFx0YXV0aG9yOiBwb3N0LmF1dGhvcixcblx0XHRpc1B1Ymxpc2hlZDogcG9zdC5pc1B1Ymxpc2hlZCxcblx0XHRwdWJsaXNoZWRBdDogcG9zdC5wdWJsaXNoZWRBdCxcblx0XHR0aXRsZTogcG9zdC50cmFuc2xhdGlvbnNbMF0/LnRpdGxlID8/IHBvc3Quc2x1Zyxcblx0XHRleGNlcnB0OiBwb3N0LnRyYW5zbGF0aW9uc1swXT8uZXhjZXJwdCA/PyBcIlwiLFxuXHRcdGNvbnRlbnQ6IHBvc3QudHJhbnNsYXRpb25zWzBdPy5jb250ZW50ID8/IFwiXCIsXG5cdFx0dHJhbnNsYXRpb25zOiBwb3N0LnRyYW5zbGF0aW9ucy5tYXAoKHQpID0+ICh7XG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRleGNlcnB0OiB0LmV4Y2VycHQsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcG9zdC5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwb3N0LnVwZGF0ZWRBdCxcblx0fSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3QoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0ID0gYXdhaXQgZGIuYmxvZ1Bvc3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdGxvY2FsZTogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFwb3N0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQmxvZyBwb3N0IG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aWQ6IHBvc3QuaWQsXG5cdFx0c2x1ZzogcG9zdC5zbHVnLFxuXHRcdGZlYXR1cmVkSW1hZ2U6IHBvc3QuZmVhdHVyZWRJbWFnZSxcblx0XHRhdXRob3I6IHBvc3QuYXV0aG9yLFxuXHRcdGlzUHVibGlzaGVkOiBwb3N0LmlzUHVibGlzaGVkLFxuXHRcdHB1Ymxpc2hlZEF0OiBwb3N0LnB1Ymxpc2hlZEF0LFxuXHRcdHRyYW5zbGF0aW9uczogcG9zdC50cmFuc2xhdGlvbnMubWFwKCh0KSA9PiAoe1xuXHRcdFx0aWQ6IHQuaWQsXG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRleGNlcnB0OiB0LmV4Y2VycHQsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcG9zdC5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwb3N0LnVwZGF0ZWRBdCxcblx0fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVCbG9nUG9zdElucHV0IHtcblx0c2x1Zzogc3RyaW5nO1xuXHRmZWF0dXJlZEltYWdlPzogc3RyaW5nO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGlzUHVibGlzaGVkPzogYm9vbGVhbjtcblx0cHVibGlzaGVkQXQ/OiBEYXRlO1xuXHR0cmFuc2xhdGlvbnM6IHtcblx0XHRsb2NhbGVJZDogc3RyaW5nO1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0ZXhjZXJwdD86IHN0cmluZztcblx0XHRjb250ZW50OiBzdHJpbmc7XG5cdH1bXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJsb2dQb3N0KGlucHV0OiBDcmVhdGVCbG9nUG9zdElucHV0KSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc2x1Z1xuXHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZF9zbHVnOiB7XG5cdFx0XHRcdHRlbmFudElkLFxuXHRcdFx0XHRzbHVnOiBpbnB1dC5zbHVnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIGJsb2cgcG9zdCB3aXRoIHRoaXMgc2x1ZyBhbHJlYWR5IGV4aXN0c1wiKTtcblx0fVxuXG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBkYi5ibG9nUG9zdC5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRmZWF0dXJlZEltYWdlOiBpbnB1dC5mZWF0dXJlZEltYWdlLFxuXHRcdFx0YXV0aG9yOiBpbnB1dC5hdXRob3IsXG5cdFx0XHRpc1B1Ymxpc2hlZDogaW5wdXQuaXNQdWJsaXNoZWQgPz8gZmFsc2UsXG5cdFx0XHRwdWJsaXNoZWRBdDogaW5wdXQuaXNQdWJsaXNoZWQgPyAoaW5wdXQucHVibGlzaGVkQXQgPz8gbmV3IERhdGUoKSkgOiBudWxsLFxuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0Y3JlYXRlOiBpbnB1dC50cmFuc2xhdGlvbnMubWFwKCh0KSA9PiAoe1xuXHRcdFx0XHRcdGxvY2FsZUlkOiB0LmxvY2FsZUlkLFxuXHRcdFx0XHRcdHRpdGxlOiB0LnRpdGxlLFxuXHRcdFx0XHRcdGV4Y2VycHQ6IHQuZXhjZXJwdCxcblx0XHRcdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0XHRcdH0pKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHRydWUsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHBvc3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlQmxvZ1Bvc3RJbnB1dCB7XG5cdHNsdWc/OiBzdHJpbmc7XG5cdGZlYXR1cmVkSW1hZ2U/OiBzdHJpbmcgfCBudWxsO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGlzUHVibGlzaGVkPzogYm9vbGVhbjtcblx0cHVibGlzaGVkQXQ/OiBEYXRlIHwgbnVsbDtcblx0dHJhbnNsYXRpb25zPzoge1xuXHRcdGxvY2FsZUlkOiBzdHJpbmc7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRleGNlcnB0Pzogc3RyaW5nO1xuXHRcdGNvbnRlbnQ6IHN0cmluZztcblx0fVtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmxvZ1Bvc3QoaWQ6IHN0cmluZywgaW5wdXQ6IFVwZGF0ZUJsb2dQb3N0SW5wdXQpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgcG9zdCA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghcG9zdCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkJsb2cgcG9zdCBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc2x1ZyBpZiBjaGFuZ2luZ1xuXHRpZiAoaW5wdXQuc2x1ZyAmJiBpbnB1dC5zbHVnICE9PSBwb3N0LnNsdWcpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRVbmlxdWUoe1xuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0dGVuYW50SWRfc2x1Zzoge1xuXHRcdFx0XHRcdHRlbmFudElkLFxuXHRcdFx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIGJsb2cgcG9zdCB3aXRoIHRoaXMgc2x1ZyBhbHJlYWR5IGV4aXN0c1wiKTtcblx0XHR9XG5cdH1cblxuXHQvLyBIYW5kbGUgcHVibGlzaCBzdGF0ZSBjaGFuZ2Vcblx0bGV0IHB1Ymxpc2hlZEF0ID0gaW5wdXQucHVibGlzaGVkQXQ7XG5cdGlmIChpbnB1dC5pc1B1Ymxpc2hlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGlucHV0LmlzUHVibGlzaGVkICYmICFwb3N0LmlzUHVibGlzaGVkKSB7XG5cdFx0XHQvLyBQdWJsaXNoaW5nIGZvciB0aGUgZmlyc3QgdGltZVxuXHRcdFx0cHVibGlzaGVkQXQgPSBwdWJsaXNoZWRBdCA/PyBuZXcgRGF0ZSgpO1xuXHRcdH0gZWxzZSBpZiAoIWlucHV0LmlzUHVibGlzaGVkKSB7XG5cdFx0XHQvLyBVbnB1Ymxpc2hpbmdcblx0XHRcdHB1Ymxpc2hlZEF0ID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIuYmxvZ1Bvc3QudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHtcblx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRmZWF0dXJlZEltYWdlOiBpbnB1dC5mZWF0dXJlZEltYWdlLFxuXHRcdFx0YXV0aG9yOiBpbnB1dC5hdXRob3IsXG5cdFx0XHRpc1B1Ymxpc2hlZDogaW5wdXQuaXNQdWJsaXNoZWQsXG5cdFx0XHRwdWJsaXNoZWRBdCxcblx0XHRcdC4uLihpbnB1dC50cmFuc2xhdGlvbnMgJiYge1xuXHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRkZWxldGVNYW55OiB7fSxcblx0XHRcdFx0XHRjcmVhdGU6IGlucHV0LnRyYW5zbGF0aW9ucy5tYXAoKHQpID0+ICh7XG5cdFx0XHRcdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdFx0XHRcdHRpdGxlOiB0LnRpdGxlLFxuXHRcdFx0XHRcdFx0ZXhjZXJwdDogdC5leGNlcnB0LFxuXHRcdFx0XHRcdFx0Y29udGVudDogdC5jb250ZW50LFxuXHRcdFx0XHRcdH0pKSxcblx0XHRcdFx0fSxcblx0XHRcdH0pLFxuXHRcdH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0dHJhbnNsYXRpb25zOiB0cnVlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQmxvZ1Bvc3QoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0ID0gYXdhaXQgZGIuYmxvZ1Bvc3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFwb3N0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQmxvZyBwb3N0IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuXHR9XG5cblx0YXdhaXQgZGIuYmxvZ1Bvc3QuZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVCbG9nUG9zdFB1Ymxpc2hlZChpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBkYi5ibG9nUG9zdC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIXBvc3QpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJCbG9nIHBvc3Qgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG5cdH1cblxuXHRjb25zdCBpc1B1Ymxpc2hlZCA9ICFwb3N0LmlzUHVibGlzaGVkO1xuXHRjb25zdCBwdWJsaXNoZWRBdCA9IGlzUHVibGlzaGVkXG5cdFx0PyBwb3N0LnB1Ymxpc2hlZEF0ID8/IG5ldyBEYXRlKClcblx0XHQ6IHBvc3QucHVibGlzaGVkQXQ7XG5cblx0Y29uc3QgdXBkYXRlZCA9IGF3YWl0IGRiLmJsb2dQb3N0LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiB7XG5cdFx0XHRpc1B1Ymxpc2hlZCxcblx0XHRcdHB1Ymxpc2hlZEF0LFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1N0YXRzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBbdG90YWwsIHB1Ymxpc2hlZCwgZHJhZnRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRkYi5ibG9nUG9zdC5jb3VudCh7IHdoZXJlOiB7IHRlbmFudElkIH0gfSksXG5cdFx0ZGIuYmxvZ1Bvc3QuY291bnQoeyB3aGVyZTogeyB0ZW5hbnRJZCwgaXNQdWJsaXNoZWQ6IHRydWUgfSB9KSxcblx0XHRkYi5ibG9nUG9zdC5jb3VudCh7IHdoZXJlOiB7IHRlbmFudElkLCBpc1B1Ymxpc2hlZDogZmFsc2UgfSB9KSxcblx0XSk7XG5cblx0Ly8gR2V0IHJlY2VudCBwb3N0cyAobGFzdCA3IGRheXMpXG5cdGNvbnN0IHdlZWtBZ28gPSBuZXcgRGF0ZSgpO1xuXHR3ZWVrQWdvLnNldERhdGUod2Vla0Fnby5nZXREYXRlKCkgLSA3KTtcblxuXHRjb25zdCByZWNlbnQgPSBhd2FpdCBkYi5ibG9nUG9zdC5jb3VudCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0Y3JlYXRlZEF0OiB7IGd0ZTogd2Vla0FnbyB9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0dG90YWwsXG5cdFx0cHVibGlzaGVkLFxuXHRcdGRyYWZ0cyxcblx0XHRyZWNlbnQsXG5cdH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhTQWdDc0IseUxBQUEifQ==
}),
"[project]/apps/platform/src/server/api/internal/data:1720a9 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlogStats",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"008f8492eda7112a375805aa48685413214aeab93d":"getBlogStats"},"apps/platform/src/server/api/internal/blog.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("008f8492eda7112a375805aa48685413214aeab93d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getBlogStats");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYmxvZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3RzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0cyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRNYW55KHtcblx0XHR3aGVyZTogeyB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHRyYW5zbGF0aW9uczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0bG9jYWxlOiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuXHR9KTtcblxuXHRyZXR1cm4gcG9zdHMubWFwKChwb3N0KSA9PiAoe1xuXHRcdGlkOiBwb3N0LmlkLFxuXHRcdHNsdWc6IHBvc3Quc2x1Zyxcblx0XHRmZWF0dXJlZEltYWdlOiBwb3N0LmZlYXR1cmVkSW1hZ2UsXG5cdFx0YXV0aG9yOiBwb3N0LmF1dGhvcixcblx0XHRpc1B1Ymxpc2hlZDogcG9zdC5pc1B1Ymxpc2hlZCxcblx0XHRwdWJsaXNoZWRBdDogcG9zdC5wdWJsaXNoZWRBdCxcblx0XHR0aXRsZTogcG9zdC50cmFuc2xhdGlvbnNbMF0/LnRpdGxlID8/IHBvc3Quc2x1Zyxcblx0XHRleGNlcnB0OiBwb3N0LnRyYW5zbGF0aW9uc1swXT8uZXhjZXJwdCA/PyBcIlwiLFxuXHRcdGNvbnRlbnQ6IHBvc3QudHJhbnNsYXRpb25zWzBdPy5jb250ZW50ID8/IFwiXCIsXG5cdFx0dHJhbnNsYXRpb25zOiBwb3N0LnRyYW5zbGF0aW9ucy5tYXAoKHQpID0+ICh7XG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRleGNlcnB0OiB0LmV4Y2VycHQsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcG9zdC5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwb3N0LnVwZGF0ZWRBdCxcblx0fSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3QoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0ID0gYXdhaXQgZGIuYmxvZ1Bvc3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdGxvY2FsZTogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFwb3N0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQmxvZyBwb3N0IG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aWQ6IHBvc3QuaWQsXG5cdFx0c2x1ZzogcG9zdC5zbHVnLFxuXHRcdGZlYXR1cmVkSW1hZ2U6IHBvc3QuZmVhdHVyZWRJbWFnZSxcblx0XHRhdXRob3I6IHBvc3QuYXV0aG9yLFxuXHRcdGlzUHVibGlzaGVkOiBwb3N0LmlzUHVibGlzaGVkLFxuXHRcdHB1Ymxpc2hlZEF0OiBwb3N0LnB1Ymxpc2hlZEF0LFxuXHRcdHRyYW5zbGF0aW9uczogcG9zdC50cmFuc2xhdGlvbnMubWFwKCh0KSA9PiAoe1xuXHRcdFx0aWQ6IHQuaWQsXG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRleGNlcnB0OiB0LmV4Y2VycHQsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcG9zdC5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwb3N0LnVwZGF0ZWRBdCxcblx0fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVCbG9nUG9zdElucHV0IHtcblx0c2x1Zzogc3RyaW5nO1xuXHRmZWF0dXJlZEltYWdlPzogc3RyaW5nO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGlzUHVibGlzaGVkPzogYm9vbGVhbjtcblx0cHVibGlzaGVkQXQ/OiBEYXRlO1xuXHR0cmFuc2xhdGlvbnM6IHtcblx0XHRsb2NhbGVJZDogc3RyaW5nO1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0ZXhjZXJwdD86IHN0cmluZztcblx0XHRjb250ZW50OiBzdHJpbmc7XG5cdH1bXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJsb2dQb3N0KGlucHV0OiBDcmVhdGVCbG9nUG9zdElucHV0KSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc2x1Z1xuXHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZF9zbHVnOiB7XG5cdFx0XHRcdHRlbmFudElkLFxuXHRcdFx0XHRzbHVnOiBpbnB1dC5zbHVnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIGJsb2cgcG9zdCB3aXRoIHRoaXMgc2x1ZyBhbHJlYWR5IGV4aXN0c1wiKTtcblx0fVxuXG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBkYi5ibG9nUG9zdC5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRmZWF0dXJlZEltYWdlOiBpbnB1dC5mZWF0dXJlZEltYWdlLFxuXHRcdFx0YXV0aG9yOiBpbnB1dC5hdXRob3IsXG5cdFx0XHRpc1B1Ymxpc2hlZDogaW5wdXQuaXNQdWJsaXNoZWQgPz8gZmFsc2UsXG5cdFx0XHRwdWJsaXNoZWRBdDogaW5wdXQuaXNQdWJsaXNoZWQgPyAoaW5wdXQucHVibGlzaGVkQXQgPz8gbmV3IERhdGUoKSkgOiBudWxsLFxuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0Y3JlYXRlOiBpbnB1dC50cmFuc2xhdGlvbnMubWFwKCh0KSA9PiAoe1xuXHRcdFx0XHRcdGxvY2FsZUlkOiB0LmxvY2FsZUlkLFxuXHRcdFx0XHRcdHRpdGxlOiB0LnRpdGxlLFxuXHRcdFx0XHRcdGV4Y2VycHQ6IHQuZXhjZXJwdCxcblx0XHRcdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0XHRcdH0pKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHRydWUsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHBvc3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlQmxvZ1Bvc3RJbnB1dCB7XG5cdHNsdWc/OiBzdHJpbmc7XG5cdGZlYXR1cmVkSW1hZ2U/OiBzdHJpbmcgfCBudWxsO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGlzUHVibGlzaGVkPzogYm9vbGVhbjtcblx0cHVibGlzaGVkQXQ/OiBEYXRlIHwgbnVsbDtcblx0dHJhbnNsYXRpb25zPzoge1xuXHRcdGxvY2FsZUlkOiBzdHJpbmc7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRleGNlcnB0Pzogc3RyaW5nO1xuXHRcdGNvbnRlbnQ6IHN0cmluZztcblx0fVtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmxvZ1Bvc3QoaWQ6IHN0cmluZywgaW5wdXQ6IFVwZGF0ZUJsb2dQb3N0SW5wdXQpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgcG9zdCA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghcG9zdCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkJsb2cgcG9zdCBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc2x1ZyBpZiBjaGFuZ2luZ1xuXHRpZiAoaW5wdXQuc2x1ZyAmJiBpbnB1dC5zbHVnICE9PSBwb3N0LnNsdWcpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRVbmlxdWUoe1xuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0dGVuYW50SWRfc2x1Zzoge1xuXHRcdFx0XHRcdHRlbmFudElkLFxuXHRcdFx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIGJsb2cgcG9zdCB3aXRoIHRoaXMgc2x1ZyBhbHJlYWR5IGV4aXN0c1wiKTtcblx0XHR9XG5cdH1cblxuXHQvLyBIYW5kbGUgcHVibGlzaCBzdGF0ZSBjaGFuZ2Vcblx0bGV0IHB1Ymxpc2hlZEF0ID0gaW5wdXQucHVibGlzaGVkQXQ7XG5cdGlmIChpbnB1dC5pc1B1Ymxpc2hlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGlucHV0LmlzUHVibGlzaGVkICYmICFwb3N0LmlzUHVibGlzaGVkKSB7XG5cdFx0XHQvLyBQdWJsaXNoaW5nIGZvciB0aGUgZmlyc3QgdGltZVxuXHRcdFx0cHVibGlzaGVkQXQgPSBwdWJsaXNoZWRBdCA/PyBuZXcgRGF0ZSgpO1xuXHRcdH0gZWxzZSBpZiAoIWlucHV0LmlzUHVibGlzaGVkKSB7XG5cdFx0XHQvLyBVbnB1Ymxpc2hpbmdcblx0XHRcdHB1Ymxpc2hlZEF0ID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIuYmxvZ1Bvc3QudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHtcblx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRmZWF0dXJlZEltYWdlOiBpbnB1dC5mZWF0dXJlZEltYWdlLFxuXHRcdFx0YXV0aG9yOiBpbnB1dC5hdXRob3IsXG5cdFx0XHRpc1B1Ymxpc2hlZDogaW5wdXQuaXNQdWJsaXNoZWQsXG5cdFx0XHRwdWJsaXNoZWRBdCxcblx0XHRcdC4uLihpbnB1dC50cmFuc2xhdGlvbnMgJiYge1xuXHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRkZWxldGVNYW55OiB7fSxcblx0XHRcdFx0XHRjcmVhdGU6IGlucHV0LnRyYW5zbGF0aW9ucy5tYXAoKHQpID0+ICh7XG5cdFx0XHRcdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdFx0XHRcdHRpdGxlOiB0LnRpdGxlLFxuXHRcdFx0XHRcdFx0ZXhjZXJwdDogdC5leGNlcnB0LFxuXHRcdFx0XHRcdFx0Y29udGVudDogdC5jb250ZW50LFxuXHRcdFx0XHRcdH0pKSxcblx0XHRcdFx0fSxcblx0XHRcdH0pLFxuXHRcdH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0dHJhbnNsYXRpb25zOiB0cnVlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQmxvZ1Bvc3QoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0ID0gYXdhaXQgZGIuYmxvZ1Bvc3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFwb3N0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQmxvZyBwb3N0IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuXHR9XG5cblx0YXdhaXQgZGIuYmxvZ1Bvc3QuZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVCbG9nUG9zdFB1Ymxpc2hlZChpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBkYi5ibG9nUG9zdC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIXBvc3QpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJCbG9nIHBvc3Qgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG5cdH1cblxuXHRjb25zdCBpc1B1Ymxpc2hlZCA9ICFwb3N0LmlzUHVibGlzaGVkO1xuXHRjb25zdCBwdWJsaXNoZWRBdCA9IGlzUHVibGlzaGVkXG5cdFx0PyBwb3N0LnB1Ymxpc2hlZEF0ID8/IG5ldyBEYXRlKClcblx0XHQ6IHBvc3QucHVibGlzaGVkQXQ7XG5cblx0Y29uc3QgdXBkYXRlZCA9IGF3YWl0IGRiLmJsb2dQb3N0LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiB7XG5cdFx0XHRpc1B1Ymxpc2hlZCxcblx0XHRcdHB1Ymxpc2hlZEF0LFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1N0YXRzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBbdG90YWwsIHB1Ymxpc2hlZCwgZHJhZnRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRkYi5ibG9nUG9zdC5jb3VudCh7IHdoZXJlOiB7IHRlbmFudElkIH0gfSksXG5cdFx0ZGIuYmxvZ1Bvc3QuY291bnQoeyB3aGVyZTogeyB0ZW5hbnRJZCwgaXNQdWJsaXNoZWQ6IHRydWUgfSB9KSxcblx0XHRkYi5ibG9nUG9zdC5jb3VudCh7IHdoZXJlOiB7IHRlbmFudElkLCBpc1B1Ymxpc2hlZDogZmFsc2UgfSB9KSxcblx0XSk7XG5cblx0Ly8gR2V0IHJlY2VudCBwb3N0cyAobGFzdCA3IGRheXMpXG5cdGNvbnN0IHdlZWtBZ28gPSBuZXcgRGF0ZSgpO1xuXHR3ZWVrQWdvLnNldERhdGUod2Vla0Fnby5nZXREYXRlKCkgLSA3KTtcblxuXHRjb25zdCByZWNlbnQgPSBhd2FpdCBkYi5ibG9nUG9zdC5jb3VudCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0Y3JlYXRlZEF0OiB7IGd0ZTogd2Vla0FnbyB9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0dG90YWwsXG5cdFx0cHVibGlzaGVkLFxuXHRcdGRyYWZ0cyxcblx0XHRyZWNlbnQsXG5cdH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhTQW1Tc0IseUxBQUEifQ==
}),
"[project]/apps/platform/src/server/api/internal/data:779bd1 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toggleBlogPostPublished",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40d7322993d5c124ec007959f402c333effe14ccca":"toggleBlogPostPublished"},"apps/platform/src/server/api/internal/blog.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40d7322993d5c124ec007959f402c333effe14ccca", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "toggleBlogPostPublished");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYmxvZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3RzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0cyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRNYW55KHtcblx0XHR3aGVyZTogeyB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHRyYW5zbGF0aW9uczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0bG9jYWxlOiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuXHR9KTtcblxuXHRyZXR1cm4gcG9zdHMubWFwKChwb3N0KSA9PiAoe1xuXHRcdGlkOiBwb3N0LmlkLFxuXHRcdHNsdWc6IHBvc3Quc2x1Zyxcblx0XHRmZWF0dXJlZEltYWdlOiBwb3N0LmZlYXR1cmVkSW1hZ2UsXG5cdFx0YXV0aG9yOiBwb3N0LmF1dGhvcixcblx0XHRpc1B1Ymxpc2hlZDogcG9zdC5pc1B1Ymxpc2hlZCxcblx0XHRwdWJsaXNoZWRBdDogcG9zdC5wdWJsaXNoZWRBdCxcblx0XHR0aXRsZTogcG9zdC50cmFuc2xhdGlvbnNbMF0/LnRpdGxlID8/IHBvc3Quc2x1Zyxcblx0XHRleGNlcnB0OiBwb3N0LnRyYW5zbGF0aW9uc1swXT8uZXhjZXJwdCA/PyBcIlwiLFxuXHRcdGNvbnRlbnQ6IHBvc3QudHJhbnNsYXRpb25zWzBdPy5jb250ZW50ID8/IFwiXCIsXG5cdFx0dHJhbnNsYXRpb25zOiBwb3N0LnRyYW5zbGF0aW9ucy5tYXAoKHQpID0+ICh7XG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRleGNlcnB0OiB0LmV4Y2VycHQsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcG9zdC5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwb3N0LnVwZGF0ZWRBdCxcblx0fSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1Bvc3QoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0ID0gYXdhaXQgZGIuYmxvZ1Bvc3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdGxvY2FsZTogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFwb3N0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQmxvZyBwb3N0IG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aWQ6IHBvc3QuaWQsXG5cdFx0c2x1ZzogcG9zdC5zbHVnLFxuXHRcdGZlYXR1cmVkSW1hZ2U6IHBvc3QuZmVhdHVyZWRJbWFnZSxcblx0XHRhdXRob3I6IHBvc3QuYXV0aG9yLFxuXHRcdGlzUHVibGlzaGVkOiBwb3N0LmlzUHVibGlzaGVkLFxuXHRcdHB1Ymxpc2hlZEF0OiBwb3N0LnB1Ymxpc2hlZEF0LFxuXHRcdHRyYW5zbGF0aW9uczogcG9zdC50cmFuc2xhdGlvbnMubWFwKCh0KSA9PiAoe1xuXHRcdFx0aWQ6IHQuaWQsXG5cdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdGxvY2FsZUNvZGU6IHQubG9jYWxlLmNvZGUsXG5cdFx0XHRsb2NhbGVOYW1lOiB0LmxvY2FsZS5uYW1lLFxuXHRcdFx0dGl0bGU6IHQudGl0bGUsXG5cdFx0XHRleGNlcnB0OiB0LmV4Y2VycHQsXG5cdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0fSkpLFxuXHRcdGNyZWF0ZWRBdDogcG9zdC5jcmVhdGVkQXQsXG5cdFx0dXBkYXRlZEF0OiBwb3N0LnVwZGF0ZWRBdCxcblx0fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVCbG9nUG9zdElucHV0IHtcblx0c2x1Zzogc3RyaW5nO1xuXHRmZWF0dXJlZEltYWdlPzogc3RyaW5nO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGlzUHVibGlzaGVkPzogYm9vbGVhbjtcblx0cHVibGlzaGVkQXQ/OiBEYXRlO1xuXHR0cmFuc2xhdGlvbnM6IHtcblx0XHRsb2NhbGVJZDogc3RyaW5nO1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0ZXhjZXJwdD86IHN0cmluZztcblx0XHRjb250ZW50OiBzdHJpbmc7XG5cdH1bXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJsb2dQb3N0KGlucHV0OiBDcmVhdGVCbG9nUG9zdElucHV0KSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc2x1Z1xuXHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRVbmlxdWUoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZF9zbHVnOiB7XG5cdFx0XHRcdHRlbmFudElkLFxuXHRcdFx0XHRzbHVnOiBpbnB1dC5zbHVnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIGJsb2cgcG9zdCB3aXRoIHRoaXMgc2x1ZyBhbHJlYWR5IGV4aXN0c1wiKTtcblx0fVxuXG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBkYi5ibG9nUG9zdC5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRmZWF0dXJlZEltYWdlOiBpbnB1dC5mZWF0dXJlZEltYWdlLFxuXHRcdFx0YXV0aG9yOiBpbnB1dC5hdXRob3IsXG5cdFx0XHRpc1B1Ymxpc2hlZDogaW5wdXQuaXNQdWJsaXNoZWQgPz8gZmFsc2UsXG5cdFx0XHRwdWJsaXNoZWRBdDogaW5wdXQuaXNQdWJsaXNoZWQgPyAoaW5wdXQucHVibGlzaGVkQXQgPz8gbmV3IERhdGUoKSkgOiBudWxsLFxuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0Y3JlYXRlOiBpbnB1dC50cmFuc2xhdGlvbnMubWFwKCh0KSA9PiAoe1xuXHRcdFx0XHRcdGxvY2FsZUlkOiB0LmxvY2FsZUlkLFxuXHRcdFx0XHRcdHRpdGxlOiB0LnRpdGxlLFxuXHRcdFx0XHRcdGV4Y2VycHQ6IHQuZXhjZXJwdCxcblx0XHRcdFx0XHRjb250ZW50OiB0LmNvbnRlbnQsXG5cdFx0XHRcdH0pKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHRydWUsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHBvc3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlQmxvZ1Bvc3RJbnB1dCB7XG5cdHNsdWc/OiBzdHJpbmc7XG5cdGZlYXR1cmVkSW1hZ2U/OiBzdHJpbmcgfCBudWxsO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGlzUHVibGlzaGVkPzogYm9vbGVhbjtcblx0cHVibGlzaGVkQXQ/OiBEYXRlIHwgbnVsbDtcblx0dHJhbnNsYXRpb25zPzoge1xuXHRcdGxvY2FsZUlkOiBzdHJpbmc7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRleGNlcnB0Pzogc3RyaW5nO1xuXHRcdGNvbnRlbnQ6IHN0cmluZztcblx0fVtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQmxvZ1Bvc3QoaWQ6IHN0cmluZywgaW5wdXQ6IFVwZGF0ZUJsb2dQb3N0SW5wdXQpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgcG9zdCA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghcG9zdCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkJsb2cgcG9zdCBub3QgZm91bmQgb3IgYWNjZXNzIGRlbmllZFwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgc2x1ZyBpZiBjaGFuZ2luZ1xuXHRpZiAoaW5wdXQuc2x1ZyAmJiBpbnB1dC5zbHVnICE9PSBwb3N0LnNsdWcpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmJsb2dQb3N0LmZpbmRVbmlxdWUoe1xuXHRcdFx0d2hlcmU6IHtcblx0XHRcdFx0dGVuYW50SWRfc2x1Zzoge1xuXHRcdFx0XHRcdHRlbmFudElkLFxuXHRcdFx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIGJsb2cgcG9zdCB3aXRoIHRoaXMgc2x1ZyBhbHJlYWR5IGV4aXN0c1wiKTtcblx0XHR9XG5cdH1cblxuXHQvLyBIYW5kbGUgcHVibGlzaCBzdGF0ZSBjaGFuZ2Vcblx0bGV0IHB1Ymxpc2hlZEF0ID0gaW5wdXQucHVibGlzaGVkQXQ7XG5cdGlmIChpbnB1dC5pc1B1Ymxpc2hlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGlucHV0LmlzUHVibGlzaGVkICYmICFwb3N0LmlzUHVibGlzaGVkKSB7XG5cdFx0XHQvLyBQdWJsaXNoaW5nIGZvciB0aGUgZmlyc3QgdGltZVxuXHRcdFx0cHVibGlzaGVkQXQgPSBwdWJsaXNoZWRBdCA/PyBuZXcgRGF0ZSgpO1xuXHRcdH0gZWxzZSBpZiAoIWlucHV0LmlzUHVibGlzaGVkKSB7XG5cdFx0XHQvLyBVbnB1Ymxpc2hpbmdcblx0XHRcdHB1Ymxpc2hlZEF0ID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIuYmxvZ1Bvc3QudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHtcblx0XHRcdHNsdWc6IGlucHV0LnNsdWcsXG5cdFx0XHRmZWF0dXJlZEltYWdlOiBpbnB1dC5mZWF0dXJlZEltYWdlLFxuXHRcdFx0YXV0aG9yOiBpbnB1dC5hdXRob3IsXG5cdFx0XHRpc1B1Ymxpc2hlZDogaW5wdXQuaXNQdWJsaXNoZWQsXG5cdFx0XHRwdWJsaXNoZWRBdCxcblx0XHRcdC4uLihpbnB1dC50cmFuc2xhdGlvbnMgJiYge1xuXHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRkZWxldGVNYW55OiB7fSxcblx0XHRcdFx0XHRjcmVhdGU6IGlucHV0LnRyYW5zbGF0aW9ucy5tYXAoKHQpID0+ICh7XG5cdFx0XHRcdFx0XHRsb2NhbGVJZDogdC5sb2NhbGVJZCxcblx0XHRcdFx0XHRcdHRpdGxlOiB0LnRpdGxlLFxuXHRcdFx0XHRcdFx0ZXhjZXJwdDogdC5leGNlcnB0LFxuXHRcdFx0XHRcdFx0Y29udGVudDogdC5jb250ZW50LFxuXHRcdFx0XHRcdH0pKSxcblx0XHRcdFx0fSxcblx0XHRcdH0pLFxuXHRcdH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0dHJhbnNsYXRpb25zOiB0cnVlLFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQmxvZ1Bvc3QoaWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwb3N0ID0gYXdhaXQgZGIuYmxvZ1Bvc3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cblx0aWYgKCFwb3N0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQmxvZyBwb3N0IG5vdCBmb3VuZCBvciBhY2Nlc3MgZGVuaWVkXCIpO1xuXHR9XG5cblx0YXdhaXQgZGIuYmxvZ1Bvc3QuZGVsZXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVCbG9nUG9zdFB1Ymxpc2hlZChpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBkYi5ibG9nUG9zdC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblxuXHRpZiAoIXBvc3QpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJCbG9nIHBvc3Qgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG5cdH1cblxuXHRjb25zdCBpc1B1Ymxpc2hlZCA9ICFwb3N0LmlzUHVibGlzaGVkO1xuXHRjb25zdCBwdWJsaXNoZWRBdCA9IGlzUHVibGlzaGVkXG5cdFx0PyBwb3N0LnB1Ymxpc2hlZEF0ID8/IG5ldyBEYXRlKClcblx0XHQ6IHBvc3QucHVibGlzaGVkQXQ7XG5cblx0Y29uc3QgdXBkYXRlZCA9IGF3YWl0IGRiLmJsb2dQb3N0LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0XHRkYXRhOiB7XG5cdFx0XHRpc1B1Ymxpc2hlZCxcblx0XHRcdHB1Ymxpc2hlZEF0LFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1N0YXRzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBbdG90YWwsIHB1Ymxpc2hlZCwgZHJhZnRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRkYi5ibG9nUG9zdC5jb3VudCh7IHdoZXJlOiB7IHRlbmFudElkIH0gfSksXG5cdFx0ZGIuYmxvZ1Bvc3QuY291bnQoeyB3aGVyZTogeyB0ZW5hbnRJZCwgaXNQdWJsaXNoZWQ6IHRydWUgfSB9KSxcblx0XHRkYi5ibG9nUG9zdC5jb3VudCh7IHdoZXJlOiB7IHRlbmFudElkLCBpc1B1Ymxpc2hlZDogZmFsc2UgfSB9KSxcblx0XSk7XG5cblx0Ly8gR2V0IHJlY2VudCBwb3N0cyAobGFzdCA3IGRheXMpXG5cdGNvbnN0IHdlZWtBZ28gPSBuZXcgRGF0ZSgpO1xuXHR3ZWVrQWdvLnNldERhdGUod2Vla0Fnby5nZXREYXRlKCkgLSA3KTtcblxuXHRjb25zdCByZWNlbnQgPSBhd2FpdCBkYi5ibG9nUG9zdC5jb3VudCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHRlbmFudElkLFxuXHRcdFx0Y3JlYXRlZEF0OiB7IGd0ZTogd2Vla0FnbyB9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0dG90YWwsXG5cdFx0cHVibGlzaGVkLFxuXHRcdGRyYWZ0cyxcblx0XHRyZWNlbnQsXG5cdH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InlUQXdRc0Isb01BQUEifQ==
}),
"[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/admin/polaris-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/empty.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$8b73a3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:8b73a3 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$4498d5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:4498d5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$1720a9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:1720a9 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$779bd1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:779bd1 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
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
function BlogPage() {
    _s();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [viewDialogOpen, setViewDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPost, setSelectedPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BlogPage.useCallback[loadData]": async ()=>{
            try {
                setLoading(true);
                const [postsData, statsData] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$4498d5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBlogPosts"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$1720a9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBlogStats"])()
                ]);
                setPosts(postsData);
                setStats(statsData);
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load blog posts");
            } finally{
                setLoading(false);
            }
        }
    }["BlogPage.useCallback[loadData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogPage.useEffect": ()=>{
            loadData();
        }
    }["BlogPage.useEffect"], [
        loadData
    ]);
    const handleView = (post)=>{
        setSelectedPost(post);
        setViewDialogOpen(true);
    };
    const handleDeleteClick = (post)=>{
        setSelectedPost(post);
        setDeleteDialogOpen(true);
    };
    const handleTogglePublished = async (post)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$779bd1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["toggleBlogPostPublished"])(post.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(post.isPublished ? "Post unpublished" : "Post published");
            loadData();
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update post status");
        }
    };
    const handleDelete = async ()=>{
        if (!selectedPost) return;
        try {
            setDeleting(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$8b73a3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteBlogPost"])(selectedPost.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Blog post deleted");
            setDeleteDialogOpen(false);
            loadData();
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete blog post");
        } finally{
            setDeleting(false);
        }
    };
    const formatDate = (date)=>{
        if (!date) return "—";
        return new Date(date).toLocaleDateString("bg-BG", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                lineNumber: 156,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
            lineNumber: 155,
            columnNumber: 4
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold tracking-tight",
                                children: "Blog Posts"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 165,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "Create and manage blog content for your store"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 166,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                        lineNumber: 164,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin/content/blog/new",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 7
                                }, this),
                                "Create Post"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                            lineNumber: 171,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                        lineNumber: 170,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                lineNumber: 163,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Total Posts"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 180,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: stats?.total ?? 0
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 184,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                        lineNumber: 179,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Published"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 187,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: stats?.published ?? 0
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 191,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                        lineNumber: 186,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Drafts"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 194,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: stats?.drafts ?? 0
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 198,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                        lineNumber: 193,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "This Week"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 201,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: stats?.recent ?? 0
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 205,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                        lineNumber: 200,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                lineNumber: 178,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyMedia"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "h-12 w-12 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 213,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                            lineNumber: 212,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyTitle"], {
                                    children: "No blog posts yet"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyDescription"], {
                                    children: "Create your first blog post to start engaging with your customers"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                            lineNumber: 215,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin/content/blog/new",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 10
                                        }, this),
                                        "Create Post"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 223,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                            lineNumber: 222,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                    lineNumber: 211,
                    columnNumber: 6
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Title"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Author"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-right",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                lineNumber: 234,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                            lineNumber: 233,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: post.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: [
                                                            "/",
                                                            post.slug
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: post.isPublished ? "default" : "secondary",
                                                className: "cursor-pointer",
                                                onClick: ()=>handleTogglePublished(post),
                                                children: post.isPublished ? "Published" : "Draft"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: post.author ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: formatDate(post.publishedAt ?? post.createdAt)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: ()=>handleView(post),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/admin/content/blog/${post.id}/edit`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: ()=>handleDeleteClick(post),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                lineNumber: 267,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, post.id, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                            lineNumber: 242,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                    lineNumber: 232,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                lineNumber: 209,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: viewDialogOpen,
                onOpenChange: setViewDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-3xl max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Blog Post Preview"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Preview how your post will look"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                            lineNumber: 299,
                            columnNumber: 6
                        }, this),
                        selectedPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: selectedPost.isPublished ? "default" : "secondary",
                                            children: selectedPost.isPublished ? "Published" : "Draft"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                            lineNumber: 307,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                "/",
                                                selectedPost.slug
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    children: selectedPost.title
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 8
                                }, this),
                                selectedPost.author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        "By ",
                                        selectedPost.author,
                                        " •",
                                        " ",
                                        formatDate(selectedPost.publishedAt ?? selectedPost.createdAt)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 9
                                }, this),
                                selectedPost.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground italic",
                                    children: selectedPost.excerpt
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 327,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "prose prose-sm dark:prose-invert max-w-none",
                                        // biome-ignore lint/security/noDangerouslySetInnerHtml: Rich text content
                                        dangerouslySetInnerHTML: {
                                            __html: selectedPost.content
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 333,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                            lineNumber: 305,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setViewDialogOpen(false),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/admin/content/blog/${selectedPost?.id}/edit`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                                lineNumber: 348,
                                                columnNumber: 9
                                            }, this),
                                            "Edit Post"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                            lineNumber: 342,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                    lineNumber: 298,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                lineNumber: 297,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: deleteDialogOpen,
                onOpenChange: setDeleteDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Delete Blog Post"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: [
                                        'Are you sure you want to delete "',
                                        selectedPost?.title,
                                        '"? This action cannot be undone.'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 361,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                            lineNumber: 359,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setDeleteDialogOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    onClick: handleDelete,
                                    disabled: deleting,
                                    children: deleting ? "Deleting..." : "Delete Post"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                            lineNumber: 367,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                    lineNumber: 358,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
                lineNumber: 357,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/content/blog/page.tsx",
        lineNumber: 162,
        columnNumber: 3
    }, this);
}
_s(BlogPage, "QP/ScnqHZh+JD2+PUbgQy9C7RMU=");
_c = BlogPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_platform_src_de4e822a._.js.map