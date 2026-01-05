(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/platform/src/components/admin/polaris-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolarisButton",
    ()=>PolarisButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function PolarisButton({ children, size = "slim", fullWidth = false, loading = false, disabled = false, icon, className, ...props }) {
    const sizeClasses = {
        micro: "h-7 px-2.5 text-xs",
        slim: "h-9 px-3 text-sm",
        medium: "h-10 px-4 text-sm",
        large: "h-12 px-5 text-base"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        disabled: disabled || loading,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Base styles matching Polaris primary button
        "relative inline-flex items-center justify-center gap-2", "font-semibold rounded-[10px] cursor-pointer", "transition-all duration-200 ease-out", "outline-none focus-visible:outline-2 focus-visible:outline-offset-2", "border-0", "shadow-[inset_0_1.5px_0_0_rgba(0,0,0,0.6),inset_1.5px_0_0_0_rgba(0,0,0,0.8),inset_-1.5px_0_0_0_rgba(0,0,0,0.8),inset_0_-3px_0_0_rgba(0,0,0,0.8)]", "bg-linear-to-b from-[#4a4a4a] to-[#303030]", // Text colors from Polaris tokens
        "text-white", "hover:before:absolute hover:before:inset-0 hover:before:rounded-[10px] hover:before:bg-black hover:before:opacity-30 hover:before:transition-opacity hover:before:duration-200 hover:before:content-['']", // Disabled state
        "disabled:bg-linear-to-b disabled:from-[rgba(0,0,0,0.2)] disabled:to-[rgba(0,0,0,0.17)]", "disabled:text-[rgba(255,255,255,0.6)]", "disabled:cursor-not-allowed", "disabled:shadow-[inset_0_1.5px_0_0_rgba(0,0,0,0.2),inset_1.5px_0_0_0_rgba(0,0,0,0.2),inset_-1.5px_0_0_0_rgba(0,0,0,0.2),inset_0_-3px_0_0_rgba(0,0,0,0.2)]", "disabled:hover:before:opacity-0", // Focus state border
        "focus-visible:outline-[#005BD3]", "active:shadow-[inset_0_4px_0_0_rgba(0,0,0,0.8),inset_1.5px_0_0_0_rgba(0,0,0,0.8),inset_-1.5px_0_0_0_rgba(0,0,0,0.8),inset_0_-3px_0_0_rgba(0,0,0,0.8)]", "active:bg-linear-to-b active:from-[#2a2a2a] active:to-[#1a1a1a]", "active:[&>span:last-child]:translate-y-px", // Size variants
        sizeClasses[size], // Full width
        fullWidth && "w-full", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0_3px_0_0_rgba(255,255,255,0.2),inset_1.5px_0_0_0_rgba(255,255,255,0.1),inset_-1.5px_0_0_0_rgba(255,255,255,0.1)] active:opacity-0 transition-opacity duration-200"
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/components/admin/polaris-button.tsx",
                lineNumber: 76,
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
                                lineNumber: 86,
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
                                lineNumber: 87,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    }, this) : icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
"[project]/apps/platform/src/server/api/internal/data:ce429d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteAbandonedCart",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"402e4db47585a79d13ca193e0710c5a391edd8674a":"deleteAbandonedCart"},"apps/platform/src/server/api/internal/abandoned-carts.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("402e4db47585a79d13ca193e0710c5a391edd8674a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteAbandonedCart");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWJhbmRvbmVkLWNhcnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvc2VydmVyL2F1dGhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvc2VydmVyL2RiXCI7XG5pbXBvcnQgeyByZXF1aXJlQWRtaW5UZW5hbnQgfSBmcm9tIFwiQC9zZXJ2ZXIvdGVuYW50XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVTdG9yZUFjY2VzcygpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcblx0aWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcblx0fVxuXG5cdGNvbnN0IHRlbmFudCA9IGF3YWl0IHJlcXVpcmVBZG1pblRlbmFudCgpO1xuXG5cdGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghc3RhZmZSZWNvcmQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcblx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYmFuZG9uZWRDYXJ0cygpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gQSBjYXJ0IGlzIGNvbnNpZGVyZWQgYWJhbmRvbmVkIGlmOlxuXHQvLyAxLiBJdCBoYXMgaXRlbXNcblx0Ly8gMi4gSXQgd2FzIGxhc3QgdXBkYXRlZCBtb3JlIHRoYW4gMSBob3VyIGFnb1xuXHQvLyAzLiBJdCBoYXNuJ3QgYmVlbiBjb252ZXJ0ZWQgdG8gYW4gb3JkZXJcblx0Y29uc3Qgb25lSG91ckFnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA2MCAqIDYwICogMTAwMCk7XG5cblx0Y29uc3QgY2FydHMgPSBhd2FpdCBkYi5jYXJ0LmZpbmRNYW55KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHR1cGRhdGVkQXQ6IHtcblx0XHRcdFx0bHQ6IG9uZUhvdXJBZ28sXG5cdFx0XHR9LFxuXHRcdFx0aXRlbXM6IHtcblx0XHRcdFx0c29tZToge30sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0Y3VzdG9tZXI6IHRydWUsXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDoge1xuXHRcdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IHVwZGF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIGNhcnRzLm1hcCgoY2FydCkgPT4gKHtcblx0XHRpZDogY2FydC5pZCxcblx0XHRjdXN0b21lcjogY2FydC5jdXN0b21lclxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0aWQ6IGNhcnQuY3VzdG9tZXIuaWQsXG5cdFx0XHRcdFx0ZW1haWw6IGNhcnQuY3VzdG9tZXIuZW1haWwsXG5cdFx0XHRcdFx0bmFtZTpcblx0XHRcdFx0XHRcdGAke2NhcnQuY3VzdG9tZXIuZmlyc3ROYW1lID8/IFwiXCJ9ICR7Y2FydC5jdXN0b21lci5sYXN0TmFtZSA/PyBcIlwifWAudHJpbSgpIHx8XG5cdFx0XHRcdFx0XHRcIlVua25vd25cIixcblx0XHRcdFx0fVxuXHRcdFx0OiBudWxsLFxuXHRcdHNlc3Npb25JZDogY2FydC5zZXNzaW9uSWQsXG5cdFx0aXRlbUNvdW50OiBjYXJ0Lml0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnF1YW50aXR5LCAwKSxcblx0XHR0b3RhbFZhbHVlOiBjYXJ0Lml0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBwcmljZSA9IGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2U7XG5cdFx0XHRyZXR1cm4gc3VtICsgTnVtYmVyKHByaWNlKSAqIGl0ZW0ucXVhbnRpdHk7XG5cdFx0fSwgMCksXG5cdFx0aXRlbXM6IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiAoe1xuXHRcdFx0aWQ6IGl0ZW0uaWQsXG5cdFx0XHRwcm9kdWN0SWQ6IGl0ZW0ucHJvZHVjdElkLFxuXHRcdFx0cHJvZHVjdE5hbWU6IGl0ZW0ucHJvZHVjdC50cmFuc2xhdGlvbnNbMF0/Lm5hbWUgPz8gaXRlbS5wcm9kdWN0LnNsdWcsXG5cdFx0XHR2YXJpYW50U2t1OiBpdGVtLnNlbGVjdGVkVmFyaWFudD8uc2t1LFxuXHRcdFx0cXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG5cdFx0XHRwcmljZTogTnVtYmVyKGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2UpLFxuXHRcdH0pKSxcblx0XHRhYmFuZG9uZWRBdDogY2FydC51cGRhdGVkQXQsXG5cdFx0Y3JlYXRlZEF0OiBjYXJ0LmNyZWF0ZWRBdCxcblx0fSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWJhbmRvbmVkQ2FydChpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGNhcnQgPSBhd2FpdCBkYi5jYXJ0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0Y3VzdG9tZXI6IHRydWUsXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDoge1xuXHRcdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRtZWRpYToge1xuXHRcdFx0XHRcdFx0XHRcdG9yZGVyQnk6IHsgb3JkZXI6IFwiYXNjXCIgfSxcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFjYXJ0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FydCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGlkOiBjYXJ0LmlkLFxuXHRcdGN1c3RvbWVyOiBjYXJ0LmN1c3RvbWVyXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHRpZDogY2FydC5jdXN0b21lci5pZCxcblx0XHRcdFx0XHRlbWFpbDogY2FydC5jdXN0b21lci5lbWFpbCxcblx0XHRcdFx0XHRuYW1lOlxuXHRcdFx0XHRcdFx0YCR7Y2FydC5jdXN0b21lci5maXJzdE5hbWUgPz8gXCJcIn0gJHtjYXJ0LmN1c3RvbWVyLmxhc3ROYW1lID8/IFwiXCJ9YC50cmltKCkgfHxcblx0XHRcdFx0XHRcdFwiVW5rbm93blwiLFxuXHRcdFx0XHRcdHBob25lOiBjYXJ0LmN1c3RvbWVyLnBob25lLFxuXHRcdFx0XHR9XG5cdFx0XHQ6IG51bGwsXG5cdFx0c2Vzc2lvbklkOiBjYXJ0LnNlc3Npb25JZCxcblx0XHRpdGVtczogY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG5cdFx0XHRpZDogaXRlbS5pZCxcblx0XHRcdHByb2R1Y3RJZDogaXRlbS5wcm9kdWN0SWQsXG5cdFx0XHRwcm9kdWN0TmFtZTogaXRlbS5wcm9kdWN0LnRyYW5zbGF0aW9uc1swXT8ubmFtZSA/PyBpdGVtLnByb2R1Y3Quc2x1Zyxcblx0XHRcdHByb2R1Y3RJbWFnZTogaXRlbS5wcm9kdWN0Lm1lZGlhWzBdPy51cmwsXG5cdFx0XHR2YXJpYW50U2t1OiBpdGVtLnNlbGVjdGVkVmFyaWFudD8uc2t1LFxuXHRcdFx0dmFyaWFudE9wdGlvbnM6IGl0ZW0uc2VsZWN0ZWRWYXJpYW50XG5cdFx0XHRcdD8gT2JqZWN0LmVudHJpZXMoaXRlbS5zZWxlY3RlZFZhcmlhbnQub3B0aW9ucyBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KVxuXHRcdFx0XHRcdFx0Lm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtrZXl9OiAke3ZhbHVlfWApXG5cdFx0XHRcdFx0XHQuam9pbihcIiwgXCIpXG5cdFx0XHRcdDogbnVsbCxcblx0XHRcdHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuXHRcdFx0cHJpY2U6IE51bWJlcihpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlKSxcblx0XHR9KSksXG5cdFx0dG90YWxWYWx1ZTogY2FydC5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2UgPSBpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlO1xuXHRcdFx0cmV0dXJuIHN1bSArIE51bWJlcihwcmljZSkgKiBpdGVtLnF1YW50aXR5O1xuXHRcdH0sIDApLFxuXHRcdGFiYW5kb25lZEF0OiBjYXJ0LnVwZGF0ZWRBdCxcblx0XHRjcmVhdGVkQXQ6IGNhcnQuY3JlYXRlZEF0LFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWJhbmRvbmVkQ2FydChpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIFZlcmlmeSBjYXJ0IGJlbG9uZ3MgdG8gdGVuYW50XG5cdGNvbnN0IGNhcnQgPSBhd2FpdCBkYi5jYXJ0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghY2FydCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhcnQgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG5cdH1cblxuXHRhd2FpdCBkYi5jYXJ0LmRlbGV0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWJhbmRvbmVkQ2FydFN0YXRzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBvbmVIb3VyQWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDYwICogNjAgKiAxMDAwKTtcblx0Y29uc3Qgb25lRGF5QWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXHRjb25zdCBvbmVXZWVrQWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuXHQvLyBHZXQgYWxsIGFiYW5kb25lZCBjYXJ0c1xuXHRjb25zdCBhYmFuZG9uZWRDYXJ0cyA9IGF3YWl0IGRiLmNhcnQuZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZCxcblx0XHRcdHVwZGF0ZWRBdDoge1xuXHRcdFx0XHRsdDogb25lSG91ckFnbyxcblx0XHRcdH0sXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRzb21lOiB7fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDogdHJ1ZSxcblx0XHRcdFx0XHRzZWxlY3RlZFZhcmlhbnQ6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdC8vIENhbGN1bGF0ZSBzdGF0c1xuXHRjb25zdCB0b3RhbENhcnRzID0gYWJhbmRvbmVkQ2FydHMubGVuZ3RoO1xuXHRjb25zdCB0b3RhbFZhbHVlID0gYWJhbmRvbmVkQ2FydHMucmVkdWNlKChzdW0sIGNhcnQpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0c3VtICtcblx0XHRcdGNhcnQuaXRlbXMucmVkdWNlKChpdGVtU3VtLCBpdGVtKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHByaWNlID0gaXRlbS5zZWxlY3RlZFZhcmlhbnQ/LnByaWNlID8/IGl0ZW0ucHJvZHVjdC5wcmljZTtcblx0XHRcdFx0cmV0dXJuIGl0ZW1TdW0gKyBOdW1iZXIocHJpY2UpICogaXRlbS5xdWFudGl0eTtcblx0XHRcdH0sIDApXG5cdFx0KTtcblx0fSwgMCk7XG5cblx0Y29uc3QgbGFzdDI0SG91cnMgPSBhYmFuZG9uZWRDYXJ0cy5maWx0ZXIoXG5cdFx0KGNhcnQpID0+IGNhcnQudXBkYXRlZEF0ID49IG9uZURheUFnbyxcblx0KS5sZW5ndGg7XG5cdGNvbnN0IGxhc3RXZWVrID0gYWJhbmRvbmVkQ2FydHMuZmlsdGVyKFxuXHRcdChjYXJ0KSA9PiBjYXJ0LnVwZGF0ZWRBdCA+PSBvbmVXZWVrQWdvLFxuXHQpLmxlbmd0aDtcblxuXHRyZXR1cm4ge1xuXHRcdHRvdGFsQ2FydHMsXG5cdFx0dG90YWxWYWx1ZSxcblx0XHRsYXN0MjRIb3Vycyxcblx0XHRsYXN0V2Vlayxcblx0XHRhdmVyYWdlVmFsdWU6IHRvdGFsQ2FydHMgPiAwID8gdG90YWxWYWx1ZSAvIHRvdGFsQ2FydHMgOiAwLFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnVUFxS3NCLGdNQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:f25e61 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAbandonedCartStats",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00e344ca32fba57f962a282726ba061f619e3fc212":"getAbandonedCartStats"},"apps/platform/src/server/api/internal/abandoned-carts.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00e344ca32fba57f962a282726ba061f619e3fc212", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAbandonedCartStats");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWJhbmRvbmVkLWNhcnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvc2VydmVyL2F1dGhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvc2VydmVyL2RiXCI7XG5pbXBvcnQgeyByZXF1aXJlQWRtaW5UZW5hbnQgfSBmcm9tIFwiQC9zZXJ2ZXIvdGVuYW50XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVTdG9yZUFjY2VzcygpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcblx0aWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcblx0fVxuXG5cdGNvbnN0IHRlbmFudCA9IGF3YWl0IHJlcXVpcmVBZG1pblRlbmFudCgpO1xuXG5cdGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghc3RhZmZSZWNvcmQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcblx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYmFuZG9uZWRDYXJ0cygpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gQSBjYXJ0IGlzIGNvbnNpZGVyZWQgYWJhbmRvbmVkIGlmOlxuXHQvLyAxLiBJdCBoYXMgaXRlbXNcblx0Ly8gMi4gSXQgd2FzIGxhc3QgdXBkYXRlZCBtb3JlIHRoYW4gMSBob3VyIGFnb1xuXHQvLyAzLiBJdCBoYXNuJ3QgYmVlbiBjb252ZXJ0ZWQgdG8gYW4gb3JkZXJcblx0Y29uc3Qgb25lSG91ckFnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA2MCAqIDYwICogMTAwMCk7XG5cblx0Y29uc3QgY2FydHMgPSBhd2FpdCBkYi5jYXJ0LmZpbmRNYW55KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHR1cGRhdGVkQXQ6IHtcblx0XHRcdFx0bHQ6IG9uZUhvdXJBZ28sXG5cdFx0XHR9LFxuXHRcdFx0aXRlbXM6IHtcblx0XHRcdFx0c29tZToge30sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0Y3VzdG9tZXI6IHRydWUsXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDoge1xuXHRcdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IHVwZGF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIGNhcnRzLm1hcCgoY2FydCkgPT4gKHtcblx0XHRpZDogY2FydC5pZCxcblx0XHRjdXN0b21lcjogY2FydC5jdXN0b21lclxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0aWQ6IGNhcnQuY3VzdG9tZXIuaWQsXG5cdFx0XHRcdFx0ZW1haWw6IGNhcnQuY3VzdG9tZXIuZW1haWwsXG5cdFx0XHRcdFx0bmFtZTpcblx0XHRcdFx0XHRcdGAke2NhcnQuY3VzdG9tZXIuZmlyc3ROYW1lID8/IFwiXCJ9ICR7Y2FydC5jdXN0b21lci5sYXN0TmFtZSA/PyBcIlwifWAudHJpbSgpIHx8XG5cdFx0XHRcdFx0XHRcIlVua25vd25cIixcblx0XHRcdFx0fVxuXHRcdFx0OiBudWxsLFxuXHRcdHNlc3Npb25JZDogY2FydC5zZXNzaW9uSWQsXG5cdFx0aXRlbUNvdW50OiBjYXJ0Lml0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnF1YW50aXR5LCAwKSxcblx0XHR0b3RhbFZhbHVlOiBjYXJ0Lml0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBwcmljZSA9IGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2U7XG5cdFx0XHRyZXR1cm4gc3VtICsgTnVtYmVyKHByaWNlKSAqIGl0ZW0ucXVhbnRpdHk7XG5cdFx0fSwgMCksXG5cdFx0aXRlbXM6IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiAoe1xuXHRcdFx0aWQ6IGl0ZW0uaWQsXG5cdFx0XHRwcm9kdWN0SWQ6IGl0ZW0ucHJvZHVjdElkLFxuXHRcdFx0cHJvZHVjdE5hbWU6IGl0ZW0ucHJvZHVjdC50cmFuc2xhdGlvbnNbMF0/Lm5hbWUgPz8gaXRlbS5wcm9kdWN0LnNsdWcsXG5cdFx0XHR2YXJpYW50U2t1OiBpdGVtLnNlbGVjdGVkVmFyaWFudD8uc2t1LFxuXHRcdFx0cXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG5cdFx0XHRwcmljZTogTnVtYmVyKGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2UpLFxuXHRcdH0pKSxcblx0XHRhYmFuZG9uZWRBdDogY2FydC51cGRhdGVkQXQsXG5cdFx0Y3JlYXRlZEF0OiBjYXJ0LmNyZWF0ZWRBdCxcblx0fSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWJhbmRvbmVkQ2FydChpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGNhcnQgPSBhd2FpdCBkYi5jYXJ0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0Y3VzdG9tZXI6IHRydWUsXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDoge1xuXHRcdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRtZWRpYToge1xuXHRcdFx0XHRcdFx0XHRcdG9yZGVyQnk6IHsgb3JkZXI6IFwiYXNjXCIgfSxcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFjYXJ0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FydCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGlkOiBjYXJ0LmlkLFxuXHRcdGN1c3RvbWVyOiBjYXJ0LmN1c3RvbWVyXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHRpZDogY2FydC5jdXN0b21lci5pZCxcblx0XHRcdFx0XHRlbWFpbDogY2FydC5jdXN0b21lci5lbWFpbCxcblx0XHRcdFx0XHRuYW1lOlxuXHRcdFx0XHRcdFx0YCR7Y2FydC5jdXN0b21lci5maXJzdE5hbWUgPz8gXCJcIn0gJHtjYXJ0LmN1c3RvbWVyLmxhc3ROYW1lID8/IFwiXCJ9YC50cmltKCkgfHxcblx0XHRcdFx0XHRcdFwiVW5rbm93blwiLFxuXHRcdFx0XHRcdHBob25lOiBjYXJ0LmN1c3RvbWVyLnBob25lLFxuXHRcdFx0XHR9XG5cdFx0XHQ6IG51bGwsXG5cdFx0c2Vzc2lvbklkOiBjYXJ0LnNlc3Npb25JZCxcblx0XHRpdGVtczogY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG5cdFx0XHRpZDogaXRlbS5pZCxcblx0XHRcdHByb2R1Y3RJZDogaXRlbS5wcm9kdWN0SWQsXG5cdFx0XHRwcm9kdWN0TmFtZTogaXRlbS5wcm9kdWN0LnRyYW5zbGF0aW9uc1swXT8ubmFtZSA/PyBpdGVtLnByb2R1Y3Quc2x1Zyxcblx0XHRcdHByb2R1Y3RJbWFnZTogaXRlbS5wcm9kdWN0Lm1lZGlhWzBdPy51cmwsXG5cdFx0XHR2YXJpYW50U2t1OiBpdGVtLnNlbGVjdGVkVmFyaWFudD8uc2t1LFxuXHRcdFx0dmFyaWFudE9wdGlvbnM6IGl0ZW0uc2VsZWN0ZWRWYXJpYW50XG5cdFx0XHRcdD8gT2JqZWN0LmVudHJpZXMoaXRlbS5zZWxlY3RlZFZhcmlhbnQub3B0aW9ucyBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KVxuXHRcdFx0XHRcdFx0Lm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtrZXl9OiAke3ZhbHVlfWApXG5cdFx0XHRcdFx0XHQuam9pbihcIiwgXCIpXG5cdFx0XHRcdDogbnVsbCxcblx0XHRcdHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuXHRcdFx0cHJpY2U6IE51bWJlcihpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlKSxcblx0XHR9KSksXG5cdFx0dG90YWxWYWx1ZTogY2FydC5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2UgPSBpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlO1xuXHRcdFx0cmV0dXJuIHN1bSArIE51bWJlcihwcmljZSkgKiBpdGVtLnF1YW50aXR5O1xuXHRcdH0sIDApLFxuXHRcdGFiYW5kb25lZEF0OiBjYXJ0LnVwZGF0ZWRBdCxcblx0XHRjcmVhdGVkQXQ6IGNhcnQuY3JlYXRlZEF0LFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWJhbmRvbmVkQ2FydChpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIFZlcmlmeSBjYXJ0IGJlbG9uZ3MgdG8gdGVuYW50XG5cdGNvbnN0IGNhcnQgPSBhd2FpdCBkYi5jYXJ0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghY2FydCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhcnQgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG5cdH1cblxuXHRhd2FpdCBkYi5jYXJ0LmRlbGV0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWJhbmRvbmVkQ2FydFN0YXRzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBvbmVIb3VyQWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDYwICogNjAgKiAxMDAwKTtcblx0Y29uc3Qgb25lRGF5QWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXHRjb25zdCBvbmVXZWVrQWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuXHQvLyBHZXQgYWxsIGFiYW5kb25lZCBjYXJ0c1xuXHRjb25zdCBhYmFuZG9uZWRDYXJ0cyA9IGF3YWl0IGRiLmNhcnQuZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZCxcblx0XHRcdHVwZGF0ZWRBdDoge1xuXHRcdFx0XHRsdDogb25lSG91ckFnbyxcblx0XHRcdH0sXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRzb21lOiB7fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDogdHJ1ZSxcblx0XHRcdFx0XHRzZWxlY3RlZFZhcmlhbnQ6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdC8vIENhbGN1bGF0ZSBzdGF0c1xuXHRjb25zdCB0b3RhbENhcnRzID0gYWJhbmRvbmVkQ2FydHMubGVuZ3RoO1xuXHRjb25zdCB0b3RhbFZhbHVlID0gYWJhbmRvbmVkQ2FydHMucmVkdWNlKChzdW0sIGNhcnQpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0c3VtICtcblx0XHRcdGNhcnQuaXRlbXMucmVkdWNlKChpdGVtU3VtLCBpdGVtKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHByaWNlID0gaXRlbS5zZWxlY3RlZFZhcmlhbnQ/LnByaWNlID8/IGl0ZW0ucHJvZHVjdC5wcmljZTtcblx0XHRcdFx0cmV0dXJuIGl0ZW1TdW0gKyBOdW1iZXIocHJpY2UpICogaXRlbS5xdWFudGl0eTtcblx0XHRcdH0sIDApXG5cdFx0KTtcblx0fSwgMCk7XG5cblx0Y29uc3QgbGFzdDI0SG91cnMgPSBhYmFuZG9uZWRDYXJ0cy5maWx0ZXIoXG5cdFx0KGNhcnQpID0+IGNhcnQudXBkYXRlZEF0ID49IG9uZURheUFnbyxcblx0KS5sZW5ndGg7XG5cdGNvbnN0IGxhc3RXZWVrID0gYWJhbmRvbmVkQ2FydHMuZmlsdGVyKFxuXHRcdChjYXJ0KSA9PiBjYXJ0LnVwZGF0ZWRBdCA+PSBvbmVXZWVrQWdvLFxuXHQpLmxlbmd0aDtcblxuXHRyZXR1cm4ge1xuXHRcdHRvdGFsQ2FydHMsXG5cdFx0dG90YWxWYWx1ZSxcblx0XHRsYXN0MjRIb3Vycyxcblx0XHRsYXN0V2Vlayxcblx0XHRhdmVyYWdlVmFsdWU6IHRvdGFsQ2FydHMgPiAwID8gdG90YWxWYWx1ZSAvIHRvdGFsQ2FydHMgOiAwLFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrVUF3THNCLGtNQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:3cfe2c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAbandonedCarts",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"008383a3cfd5f573c97614ab7d3862746c82a5dd8c":"getAbandonedCarts"},"apps/platform/src/server/api/internal/abandoned-carts.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("008383a3cfd5f573c97614ab7d3862746c82a5dd8c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAbandonedCarts");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWJhbmRvbmVkLWNhcnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvc2VydmVyL2F1dGhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvc2VydmVyL2RiXCI7XG5pbXBvcnQgeyByZXF1aXJlQWRtaW5UZW5hbnQgfSBmcm9tIFwiQC9zZXJ2ZXIvdGVuYW50XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVTdG9yZUFjY2VzcygpIHtcblx0Y29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcblx0aWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcblx0fVxuXG5cdGNvbnN0IHRlbmFudCA9IGF3YWl0IHJlcXVpcmVBZG1pblRlbmFudCgpO1xuXG5cdGNvbnN0IHN0YWZmUmVjb3JkID0gYXdhaXQgZGIudGVuYW50U3RhZmYuZmluZEZpcnN0KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdH0sXG5cdH0pO1xuXG5cdGlmICghc3RhZmZSZWNvcmQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJGb3JiaWRkZW46IE5vIGFjY2VzcyB0byB0aGlzIHN0b3JlXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcblx0XHR0ZW5hbnRJZDogdGVuYW50LmlkLFxuXHRcdHJvbGU6IHN0YWZmUmVjb3JkLnJvbGUsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBYmFuZG9uZWRDYXJ0cygpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Ly8gQSBjYXJ0IGlzIGNvbnNpZGVyZWQgYWJhbmRvbmVkIGlmOlxuXHQvLyAxLiBJdCBoYXMgaXRlbXNcblx0Ly8gMi4gSXQgd2FzIGxhc3QgdXBkYXRlZCBtb3JlIHRoYW4gMSBob3VyIGFnb1xuXHQvLyAzLiBJdCBoYXNuJ3QgYmVlbiBjb252ZXJ0ZWQgdG8gYW4gb3JkZXJcblx0Y29uc3Qgb25lSG91ckFnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA2MCAqIDYwICogMTAwMCk7XG5cblx0Y29uc3QgY2FydHMgPSBhd2FpdCBkYi5jYXJ0LmZpbmRNYW55KHtcblx0XHR3aGVyZToge1xuXHRcdFx0dGVuYW50SWQsXG5cdFx0XHR1cGRhdGVkQXQ6IHtcblx0XHRcdFx0bHQ6IG9uZUhvdXJBZ28sXG5cdFx0XHR9LFxuXHRcdFx0aXRlbXM6IHtcblx0XHRcdFx0c29tZToge30sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0Y3VzdG9tZXI6IHRydWUsXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDoge1xuXHRcdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRvcmRlckJ5OiB7IHVwZGF0ZWRBdDogXCJkZXNjXCIgfSxcblx0fSk7XG5cblx0cmV0dXJuIGNhcnRzLm1hcCgoY2FydCkgPT4gKHtcblx0XHRpZDogY2FydC5pZCxcblx0XHRjdXN0b21lcjogY2FydC5jdXN0b21lclxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0aWQ6IGNhcnQuY3VzdG9tZXIuaWQsXG5cdFx0XHRcdFx0ZW1haWw6IGNhcnQuY3VzdG9tZXIuZW1haWwsXG5cdFx0XHRcdFx0bmFtZTpcblx0XHRcdFx0XHRcdGAke2NhcnQuY3VzdG9tZXIuZmlyc3ROYW1lID8/IFwiXCJ9ICR7Y2FydC5jdXN0b21lci5sYXN0TmFtZSA/PyBcIlwifWAudHJpbSgpIHx8XG5cdFx0XHRcdFx0XHRcIlVua25vd25cIixcblx0XHRcdFx0fVxuXHRcdFx0OiBudWxsLFxuXHRcdHNlc3Npb25JZDogY2FydC5zZXNzaW9uSWQsXG5cdFx0aXRlbUNvdW50OiBjYXJ0Lml0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnF1YW50aXR5LCAwKSxcblx0XHR0b3RhbFZhbHVlOiBjYXJ0Lml0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCBwcmljZSA9IGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2U7XG5cdFx0XHRyZXR1cm4gc3VtICsgTnVtYmVyKHByaWNlKSAqIGl0ZW0ucXVhbnRpdHk7XG5cdFx0fSwgMCksXG5cdFx0aXRlbXM6IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiAoe1xuXHRcdFx0aWQ6IGl0ZW0uaWQsXG5cdFx0XHRwcm9kdWN0SWQ6IGl0ZW0ucHJvZHVjdElkLFxuXHRcdFx0cHJvZHVjdE5hbWU6IGl0ZW0ucHJvZHVjdC50cmFuc2xhdGlvbnNbMF0/Lm5hbWUgPz8gaXRlbS5wcm9kdWN0LnNsdWcsXG5cdFx0XHR2YXJpYW50U2t1OiBpdGVtLnNlbGVjdGVkVmFyaWFudD8uc2t1LFxuXHRcdFx0cXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXG5cdFx0XHRwcmljZTogTnVtYmVyKGl0ZW0uc2VsZWN0ZWRWYXJpYW50Py5wcmljZSA/PyBpdGVtLnByb2R1Y3QucHJpY2UpLFxuXHRcdH0pKSxcblx0XHRhYmFuZG9uZWRBdDogY2FydC51cGRhdGVkQXQsXG5cdFx0Y3JlYXRlZEF0OiBjYXJ0LmNyZWF0ZWRBdCxcblx0fSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWJhbmRvbmVkQ2FydChpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGNhcnQgPSBhd2FpdCBkYi5jYXJ0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdFx0aW5jbHVkZToge1xuXHRcdFx0Y3VzdG9tZXI6IHRydWUsXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDoge1xuXHRcdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRtZWRpYToge1xuXHRcdFx0XHRcdFx0XHRcdG9yZGVyQnk6IHsgb3JkZXI6IFwiYXNjXCIgfSxcblx0XHRcdFx0XHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHNlbGVjdGVkVmFyaWFudDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFjYXJ0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FydCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGlkOiBjYXJ0LmlkLFxuXHRcdGN1c3RvbWVyOiBjYXJ0LmN1c3RvbWVyXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHRpZDogY2FydC5jdXN0b21lci5pZCxcblx0XHRcdFx0XHRlbWFpbDogY2FydC5jdXN0b21lci5lbWFpbCxcblx0XHRcdFx0XHRuYW1lOlxuXHRcdFx0XHRcdFx0YCR7Y2FydC5jdXN0b21lci5maXJzdE5hbWUgPz8gXCJcIn0gJHtjYXJ0LmN1c3RvbWVyLmxhc3ROYW1lID8/IFwiXCJ9YC50cmltKCkgfHxcblx0XHRcdFx0XHRcdFwiVW5rbm93blwiLFxuXHRcdFx0XHRcdHBob25lOiBjYXJ0LmN1c3RvbWVyLnBob25lLFxuXHRcdFx0XHR9XG5cdFx0XHQ6IG51bGwsXG5cdFx0c2Vzc2lvbklkOiBjYXJ0LnNlc3Npb25JZCxcblx0XHRpdGVtczogY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG5cdFx0XHRpZDogaXRlbS5pZCxcblx0XHRcdHByb2R1Y3RJZDogaXRlbS5wcm9kdWN0SWQsXG5cdFx0XHRwcm9kdWN0TmFtZTogaXRlbS5wcm9kdWN0LnRyYW5zbGF0aW9uc1swXT8ubmFtZSA/PyBpdGVtLnByb2R1Y3Quc2x1Zyxcblx0XHRcdHByb2R1Y3RJbWFnZTogaXRlbS5wcm9kdWN0Lm1lZGlhWzBdPy51cmwsXG5cdFx0XHR2YXJpYW50U2t1OiBpdGVtLnNlbGVjdGVkVmFyaWFudD8uc2t1LFxuXHRcdFx0dmFyaWFudE9wdGlvbnM6IGl0ZW0uc2VsZWN0ZWRWYXJpYW50XG5cdFx0XHRcdD8gT2JqZWN0LmVudHJpZXMoaXRlbS5zZWxlY3RlZFZhcmlhbnQub3B0aW9ucyBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KVxuXHRcdFx0XHRcdFx0Lm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtrZXl9OiAke3ZhbHVlfWApXG5cdFx0XHRcdFx0XHQuam9pbihcIiwgXCIpXG5cdFx0XHRcdDogbnVsbCxcblx0XHRcdHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuXHRcdFx0cHJpY2U6IE51bWJlcihpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlKSxcblx0XHR9KSksXG5cdFx0dG90YWxWYWx1ZTogY2FydC5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2UgPSBpdGVtLnNlbGVjdGVkVmFyaWFudD8ucHJpY2UgPz8gaXRlbS5wcm9kdWN0LnByaWNlO1xuXHRcdFx0cmV0dXJuIHN1bSArIE51bWJlcihwcmljZSkgKiBpdGVtLnF1YW50aXR5O1xuXHRcdH0sIDApLFxuXHRcdGFiYW5kb25lZEF0OiBjYXJ0LnVwZGF0ZWRBdCxcblx0XHRjcmVhdGVkQXQ6IGNhcnQuY3JlYXRlZEF0LFxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWJhbmRvbmVkQ2FydChpZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIFZlcmlmeSBjYXJ0IGJlbG9uZ3MgdG8gdGVuYW50XG5cdGNvbnN0IGNhcnQgPSBhd2FpdCBkYi5jYXJ0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXG5cdGlmICghY2FydCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhcnQgbm90IGZvdW5kIG9yIGFjY2VzcyBkZW5pZWRcIik7XG5cdH1cblxuXHRhd2FpdCBkYi5jYXJ0LmRlbGV0ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWJhbmRvbmVkQ2FydFN0YXRzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBvbmVIb3VyQWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDYwICogNjAgKiAxMDAwKTtcblx0Y29uc3Qgb25lRGF5QWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXHRjb25zdCBvbmVXZWVrQWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuXHQvLyBHZXQgYWxsIGFiYW5kb25lZCBjYXJ0c1xuXHRjb25zdCBhYmFuZG9uZWRDYXJ0cyA9IGF3YWl0IGRiLmNhcnQuZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZCxcblx0XHRcdHVwZGF0ZWRBdDoge1xuXHRcdFx0XHRsdDogb25lSG91ckFnbyxcblx0XHRcdH0sXG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRzb21lOiB7fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHRpdGVtczoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdDogdHJ1ZSxcblx0XHRcdFx0XHRzZWxlY3RlZFZhcmlhbnQ6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdC8vIENhbGN1bGF0ZSBzdGF0c1xuXHRjb25zdCB0b3RhbENhcnRzID0gYWJhbmRvbmVkQ2FydHMubGVuZ3RoO1xuXHRjb25zdCB0b3RhbFZhbHVlID0gYWJhbmRvbmVkQ2FydHMucmVkdWNlKChzdW0sIGNhcnQpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0c3VtICtcblx0XHRcdGNhcnQuaXRlbXMucmVkdWNlKChpdGVtU3VtLCBpdGVtKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHByaWNlID0gaXRlbS5zZWxlY3RlZFZhcmlhbnQ/LnByaWNlID8/IGl0ZW0ucHJvZHVjdC5wcmljZTtcblx0XHRcdFx0cmV0dXJuIGl0ZW1TdW0gKyBOdW1iZXIocHJpY2UpICogaXRlbS5xdWFudGl0eTtcblx0XHRcdH0sIDApXG5cdFx0KTtcblx0fSwgMCk7XG5cblx0Y29uc3QgbGFzdDI0SG91cnMgPSBhYmFuZG9uZWRDYXJ0cy5maWx0ZXIoXG5cdFx0KGNhcnQpID0+IGNhcnQudXBkYXRlZEF0ID49IG9uZURheUFnbyxcblx0KS5sZW5ndGg7XG5cdGNvbnN0IGxhc3RXZWVrID0gYWJhbmRvbmVkQ2FydHMuZmlsdGVyKFxuXHRcdChjYXJ0KSA9PiBjYXJ0LnVwZGF0ZWRBdCA+PSBvbmVXZWVrQWdvLFxuXHQpLmxlbmd0aDtcblxuXHRyZXR1cm4ge1xuXHRcdHRvdGFsQ2FydHMsXG5cdFx0dG90YWxWYWx1ZSxcblx0XHRsYXN0MjRIb3Vycyxcblx0XHRsYXN0V2Vlayxcblx0XHRhdmVyYWdlVmFsdWU6IHRvdGFsQ2FydHMgPiAwID8gdG90YWxWYWx1ZSAvIHRvdGFsQ2FydHMgOiAwLFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4VEFnQ3NCLDhMQUFBIn0=
}),
"[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AbandonedCheckoutsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/admin/polaris-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/empty.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$ce429d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:ce429d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$f25e61__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:f25e61 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$3cfe2c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:3cfe2c [app-client] (ecmascript) <text/javascript>");
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
function AbandonedCheckoutsPage() {
    _s();
    const [carts, setCarts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [viewDialogOpen, setViewDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCart, setSelectedCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AbandonedCheckoutsPage.useEffect": ()=>{
            loadData();
        }
    }["AbandonedCheckoutsPage.useEffect"], []);
    async function loadData() {
        try {
            setLoading(true);
            const [cartsData, statsData] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$3cfe2c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAbandonedCarts"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$f25e61__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAbandonedCartStats"])()
            ]);
            setCarts(cartsData);
            setStats(statsData);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load abandoned carts");
        } finally{
            setLoading(false);
        }
    }
    const handleView = (cart)=>{
        setSelectedCart(cart);
        setViewDialogOpen(true);
    };
    const handleDeleteClick = (cart)=>{
        setSelectedCart(cart);
        setDeleteDialogOpen(true);
    };
    const handleDelete = async ()=>{
        if (!selectedCart) return;
        try {
            setDeleting(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$ce429d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteAbandonedCart"])(selectedCart.id);
            setCarts((prev)=>prev.filter((c)=>c.id !== selectedCart.id));
            setDeleteDialogOpen(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Abandoned cart deleted");
            loadData(); // Refresh stats
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete cart");
        } finally{
            setDeleting(false);
        }
    };
    const handleSendRecoveryEmail = (cart)=>{
        if (cart.customer?.email) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Recovery email sent to ${cart.customer.email}`);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No email address available for this cart");
        }
    };
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat("bg-BG", {
            style: "currency",
            currency: "BGN"
        }).format(amount);
    };
    const formatTimeAgo = (date)=>{
        const now = new Date();
        const diff = now.getTime() - new Date(date).getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(hours / 24);
        if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                lineNumber: 163,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
            lineNumber: 162,
            columnNumber: 4
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold tracking-tight",
                        children: "Abandoned Checkouts"
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                        lineNumber: 171,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-1",
                        children: "View and recover abandoned shopping carts"
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                        lineNumber: 174,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                lineNumber: 170,
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Total Abandoned"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                lineNumber: 181,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: stats?.totalCarts ?? 0
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                lineNumber: 185,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                        lineNumber: 180,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Potential Revenue"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                lineNumber: 188,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: formatCurrency(stats?.totalValue ?? 0)
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                lineNumber: 192,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                        lineNumber: 187,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Last 24 Hours"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                lineNumber: 197,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: stats?.last24Hours ?? 0
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                lineNumber: 201,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                        lineNumber: 196,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Average Value"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                lineNumber: 204,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: formatCurrency(stats?.averageValue ?? 0)
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                lineNumber: 208,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                        lineNumber: 203,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                lineNumber: 179,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: carts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyMedia"], {
                                    variant: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        className: "h-8 w-8"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyTitle"], {
                                    children: "No abandoned carts"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyDescription"], {
                                    children: "When customers leave items in their cart without completing checkout, they'll appear here"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                            lineNumber: 217,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "All carts are either completed or empty"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                lineNumber: 228,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                            lineNumber: 227,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                    lineNumber: 216,
                    columnNumber: 6
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Items"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Value"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Abandoned"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-right",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                lineNumber: 236,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                            lineNumber: 235,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: carts.map((cart)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: cart.customer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: cart.customer.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: cart.customer.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 12
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Guest"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 12
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: [
                                                cart.itemCount,
                                                " items"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "font-medium",
                                            children: formatCurrency(cart.totalValue)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: formatTimeAgo(cart.abandonedAt)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "secondary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        className: "h-3 w-3 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 12
                                                    }, this),
                                                    "Abandoned"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                lineNumber: 266,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 265,
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
                                                        onClick: ()=>handleView(cart),
                                                        title: "View details",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 12
                                                    }, this),
                                                    cart.customer?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: ()=>handleSendRecoveryEmail(cart),
                                                        title: "Send recovery email",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 14
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: ()=>handleDeleteClick(cart),
                                                        title: "Delete",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                lineNumber: 272,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, cart.id, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                            lineNumber: 245,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                    lineNumber: 234,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                lineNumber: 214,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: viewDialogOpen,
                onOpenChange: setViewDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Abandoned Cart Details"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "View the items left in this abandoned cart"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                            lineNumber: 311,
                            columnNumber: 6
                        }, this),
                        selectedCart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Customer"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 10
                                                }, this),
                                                selectedCart.customer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium",
                                                            children: selectedCart.customer.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: selectedCart.customer.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 11
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground mt-1",
                                                    children: "Guest visitor"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Abandoned"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium mt-1",
                                                    children: formatTimeAgo(selectedCart.abandonedAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mb-2",
                                            children: "Cart Items"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded-lg divide-y",
                                            children: selectedCart.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium",
                                                                    children: item.productName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 13
                                                                }, this),
                                                                item.variantSku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "SKU: ",
                                                                        item.variantSku
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                                    lineNumber: 353,
                                                                    columnNumber: 14
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium",
                                                                    children: formatCurrency(item.price)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "Qty: ",
                                                                        item.quantity
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 11
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center pt-4 border-t",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium",
                                            children: "Total Value"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl font-bold",
                                            children: formatCurrency(selectedCart.totalValue)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 373,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                            lineNumber: 319,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                selectedCart?.customer?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                    onClick: ()=>{
                                        handleSendRecoveryEmail(selectedCart);
                                        setViewDialogOpen(false);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 9
                                        }, this),
                                        "Send Recovery Email"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setViewDialogOpen(false),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 392,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                            lineNumber: 380,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                    lineNumber: 310,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                lineNumber: 309,
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
                                    children: "Delete Abandoned Cart"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 403,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Are you sure you want to delete this abandoned cart? This action cannot be undone."
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                            lineNumber: 402,
                            columnNumber: 6
                        }, this),
                        selectedCart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "Cart contains ",
                                    selectedCart.itemCount,
                                    " items worth",
                                    " ",
                                    formatCurrency(selectedCart.totalValue)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                lineNumber: 412,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                            lineNumber: 411,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setDeleteDialogOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 420,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    onClick: handleDelete,
                                    disabled: deleting,
                                    children: deleting ? "Deleting..." : "Delete Cart"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                            lineNumber: 419,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                    lineNumber: 401,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
                lineNumber: 400,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/orders/abandoned-checkouts/page.tsx",
        lineNumber: 169,
        columnNumber: 3
    }, this);
}
_s(AbandonedCheckoutsPage, "zW6j4FdVl/qj5qHe8uZxy9rV0PI=");
_c = AbandonedCheckoutsPage;
var _c;
__turbopack_context__.k.register(_c, "AbandonedCheckoutsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_platform_src_756b71dd._.js.map