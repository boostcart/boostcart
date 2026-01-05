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
"[project]/apps/platform/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
// Define input size variants
const inputVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])(`
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
const inputAddonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("flex items-center shrink-0 justify-center bg-muted border border-input shadow-xs shadow-[rgba(0,0,0,0.05)] text-secondary-foreground", {
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
const inputGroupVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])(`
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
const inputWrapperVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])(`
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        "data-slot": "input",
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(inputVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/input.tsx",
        lineNumber: 128,
        columnNumber: 3
    }, this);
}
_c = Input;
function InputAddon({ className, variant, mode, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "input-addon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(inputAddonVariants({
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
_c1 = InputAddon;
function InputGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "input-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(inputGroupVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/input.tsx",
        lineNumber: 157,
        columnNumber: 3
    }, this);
}
_c2 = InputGroup;
function InputWrapper({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "input-wrapper",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(inputVariants({
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
_c3 = InputWrapper;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Input");
__turbopack_context__.k.register(_c1, "InputAddon");
__turbopack_context__.k.register(_c2, "InputGroup");
__turbopack_context__.k.register(_c3, "InputWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__ = __turbopack_context__.i("[project]/node_modules/radix-ui/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript) <export * as Label>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__["Label"].Root, {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/label.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
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
"[project]/apps/platform/src/server/api/internal/data:5b05fb [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLocale",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40969e058f7f35f7266cb67e2bfdfc4093987b52f0":"createLocale"},"apps/platform/src/server/api/internal/locales.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40969e058f7f35f7266cb67e2bfdfc4093987b52f0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createLocale");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbG9jYWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG4vKipcbiAqIEdldCBvciBjcmVhdGUgYSBkZWZhdWx0IGxvY2FsZSBmb3IgdGhlIHBsYXRmb3JtLlxuICogVGhpcyBlbnN1cmVzIHRoZXJlJ3MgYWx3YXlzIGEgdmFsaWQgbG9jYWxlIGF2YWlsYWJsZSBmb3IgdHJhbnNsYXRpb25zLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JDcmVhdGVEZWZhdWx0TG9jYWxlKCkge1xuXHQvLyBGaXJzdCB0cnkgdG8gZ2V0IHRoZSBkZWZhdWx0IGxvY2FsZVxuXHRsZXQgZGVmYXVsdExvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHR9KTtcblxuXHRpZiAoIWRlZmF1bHRMb2NhbGUpIHtcblx0XHQvLyBUcnkgdG8gZ2V0IGFueSBleGlzdGluZyBsb2NhbGVcblx0XHRkZWZhdWx0TG9jYWxlID0gYXdhaXQgZGIubG9jYWxlLmZpbmRGaXJzdCgpO1xuXHR9XG5cblx0aWYgKCFkZWZhdWx0TG9jYWxlKSB7XG5cdFx0Ly8gQ3JlYXRlIGEgZGVmYXVsdCBCdWxnYXJpYW4gbG9jYWxlIHNpbmNlIHRoaXMgaXMgYSBCdWxnYXJpYW4tZm9jdXNlZCBwbGF0Zm9ybVxuXHRcdGRlZmF1bHRMb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuY3JlYXRlKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0Y29kZTogXCJiZy1CR1wiLFxuXHRcdFx0XHRuYW1lOiBcItCR0YrQu9Cz0LDRgNGB0LrQuFwiLFxuXHRcdFx0XHRpc0RlZmF1bHQ6IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpZDogZGVmYXVsdExvY2FsZS5pZCxcblx0XHRjb2RlOiBkZWZhdWx0TG9jYWxlLmNvZGUsXG5cdFx0bmFtZTogZGVmYXVsdExvY2FsZS5uYW1lLFxuXHRcdGlzRGVmYXVsdDogZGVmYXVsdExvY2FsZS5pc0RlZmF1bHQsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhbGVzKCkge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGVzID0gYXdhaXQgZGIubG9jYWxlLmZpbmRNYW55KHtcblx0XHRvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6IFwiZGVzY1wiIH0sIHsgbmFtZTogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGxvY2FsZXMubWFwKChsb2NhbGUpID0+ICh7XG5cdFx0aWQ6IGxvY2FsZS5pZCxcblx0XHRjb2RlOiBsb2NhbGUuY29kZSxcblx0XHRuYW1lOiBsb2NhbGUubmFtZSxcblx0XHRpc0RlZmF1bHQ6IGxvY2FsZS5pc0RlZmF1bHQsXG5cdH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2FsZShpZDogc3RyaW5nKSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRpZiAoIWxvY2FsZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxvY2FsZSBub3QgZm91bmRcIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGlkOiBsb2NhbGUuaWQsXG5cdFx0Y29kZTogbG9jYWxlLmNvZGUsXG5cdFx0bmFtZTogbG9jYWxlLm5hbWUsXG5cdFx0aXNEZWZhdWx0OiBsb2NhbGUuaXNEZWZhdWx0LFxuXHR9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUxvY2FsZUlucHV0IHtcblx0Y29kZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGlzRGVmYXVsdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMb2NhbGUoaW5wdXQ6IENyZWF0ZUxvY2FsZUlucHV0KSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgY29kZVxuXHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBjb2RlOiBpbnB1dC5jb2RlIH0sXG5cdH0pO1xuXG5cdGlmIChleGlzdGluZykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkEgbG9jYWxlIHdpdGggdGhpcyBjb2RlIGFscmVhZHkgZXhpc3RzXCIpO1xuXHR9XG5cblx0Ly8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0c1xuXHRpZiAoaW5wdXQuaXNEZWZhdWx0KSB7XG5cdFx0YXdhaXQgZGIubG9jYWxlLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdGNvZGU6IGlucHV0LmNvZGUsXG5cdFx0XHRuYW1lOiBpbnB1dC5uYW1lLFxuXHRcdFx0aXNEZWZhdWx0OiBpbnB1dC5pc0RlZmF1bHQgPz8gZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIGxvY2FsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVMb2NhbGVJbnB1dCB7XG5cdGNvZGU/OiBzdHJpbmc7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdGlzRGVmYXVsdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMb2NhbGUoaWQ6IHN0cmluZywgaW5wdXQ6IFVwZGF0ZUxvY2FsZUlucHV0KSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRpZiAoIWxvY2FsZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxvY2FsZSBub3QgZm91bmRcIik7XG5cdH1cblxuXHQvLyBDaGVjayBmb3IgZHVwbGljYXRlIGNvZGUgaWYgY2hhbmdpbmdcblx0aWYgKGlucHV0LmNvZGUgJiYgaW5wdXQuY29kZSAhPT0gbG9jYWxlLmNvZGUpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHRcdHdoZXJlOiB7IGNvZGU6IGlucHV0LmNvZGUgfSxcblx0XHR9KTtcblxuXHRcdGlmIChleGlzdGluZykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQSBsb2NhbGUgd2l0aCB0aGlzIGNvZGUgYWxyZWFkeSBleGlzdHNcIik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0c1xuXHRpZiAoaW5wdXQuaXNEZWZhdWx0ICYmICFsb2NhbGUuaXNEZWZhdWx0KSB7XG5cdFx0YXdhaXQgZGIubG9jYWxlLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5sb2NhbGUudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHtcblx0XHRcdGNvZGU6IGlucHV0LmNvZGUsXG5cdFx0XHRuYW1lOiBpbnB1dC5uYW1lLFxuXHRcdFx0aXNEZWZhdWx0OiBpbnB1dC5pc0RlZmF1bHQsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhbGUoaWQ6IHN0cmluZykge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0aWYgKCFsb2NhbGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMb2NhbGUgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0aWYgKGxvY2FsZS5pc0RlZmF1bHQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGVsZXRlIHRoZSBkZWZhdWx0IGxvY2FsZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGlmIGxvY2FsZSBpcyB1c2VkIGluIGFueSB0cmFuc2xhdGlvbnNcblx0Y29uc3QgdXNhZ2VDb3VudCA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRkYi5wcm9kdWN0VHJhbnNsYXRpb24uY291bnQoeyB3aGVyZTogeyBsb2NhbGVJZDogaWQgfSB9KSxcblx0XHRkYi5jYXRlZ29yeVRyYW5zbGF0aW9uLmNvdW50KHsgd2hlcmU6IHsgbG9jYWxlSWQ6IGlkIH0gfSksXG5cdFx0ZGIuYnJhbmRUcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLnBhZ2VUcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLmNvbGxlY3Rpb25UcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLmJsb2dQb3N0VHJhbnNsYXRpb24uY291bnQoeyB3aGVyZTogeyBsb2NhbGVJZDogaWQgfSB9KSxcblx0XSk7XG5cblx0Y29uc3QgdG90YWxVc2FnZSA9IHVzYWdlQ291bnQucmVkdWNlKChzdW0sIGNvdW50KSA9PiBzdW0gKyBjb3VudCwgMCk7XG5cblx0aWYgKHRvdGFsVXNhZ2UgPiAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0YENhbm5vdCBkZWxldGUgbG9jYWxlOiBpdCBpcyB1c2VkIGluICR7dG90YWxVc2FnZX0gdHJhbnNsYXRpb24ocylgXG5cdFx0KTtcblx0fVxuXG5cdGF3YWl0IGRiLmxvY2FsZS5kZWxldGUoe1xuXHRcdHdoZXJlOiB7IGlkIH0sXG5cdH0pO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUoaWQ6IHN0cmluZykge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0aWYgKCFsb2NhbGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMb2NhbGUgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gVW5zZXQgY3VycmVudCBkZWZhdWx0XG5cdGF3YWl0IGRiLmxvY2FsZS51cGRhdGVNYW55KHtcblx0XHR3aGVyZTogeyBpc0RlZmF1bHQ6IHRydWUgfSxcblx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0fSk7XG5cblx0Ly8gU2V0IG5ldyBkZWZhdWx0XG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5sb2NhbGUudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpVEEwR3NCLHlMQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:c3874e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteLocale",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"401f362e5aaf8f405884971ae2436da791b63ad493":"deleteLocale"},"apps/platform/src/server/api/internal/locales.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("401f362e5aaf8f405884971ae2436da791b63ad493", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteLocale");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbG9jYWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG4vKipcbiAqIEdldCBvciBjcmVhdGUgYSBkZWZhdWx0IGxvY2FsZSBmb3IgdGhlIHBsYXRmb3JtLlxuICogVGhpcyBlbnN1cmVzIHRoZXJlJ3MgYWx3YXlzIGEgdmFsaWQgbG9jYWxlIGF2YWlsYWJsZSBmb3IgdHJhbnNsYXRpb25zLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JDcmVhdGVEZWZhdWx0TG9jYWxlKCkge1xuXHQvLyBGaXJzdCB0cnkgdG8gZ2V0IHRoZSBkZWZhdWx0IGxvY2FsZVxuXHRsZXQgZGVmYXVsdExvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHR9KTtcblxuXHRpZiAoIWRlZmF1bHRMb2NhbGUpIHtcblx0XHQvLyBUcnkgdG8gZ2V0IGFueSBleGlzdGluZyBsb2NhbGVcblx0XHRkZWZhdWx0TG9jYWxlID0gYXdhaXQgZGIubG9jYWxlLmZpbmRGaXJzdCgpO1xuXHR9XG5cblx0aWYgKCFkZWZhdWx0TG9jYWxlKSB7XG5cdFx0Ly8gQ3JlYXRlIGEgZGVmYXVsdCBCdWxnYXJpYW4gbG9jYWxlIHNpbmNlIHRoaXMgaXMgYSBCdWxnYXJpYW4tZm9jdXNlZCBwbGF0Zm9ybVxuXHRcdGRlZmF1bHRMb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuY3JlYXRlKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0Y29kZTogXCJiZy1CR1wiLFxuXHRcdFx0XHRuYW1lOiBcItCR0YrQu9Cz0LDRgNGB0LrQuFwiLFxuXHRcdFx0XHRpc0RlZmF1bHQ6IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpZDogZGVmYXVsdExvY2FsZS5pZCxcblx0XHRjb2RlOiBkZWZhdWx0TG9jYWxlLmNvZGUsXG5cdFx0bmFtZTogZGVmYXVsdExvY2FsZS5uYW1lLFxuXHRcdGlzRGVmYXVsdDogZGVmYXVsdExvY2FsZS5pc0RlZmF1bHQsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhbGVzKCkge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGVzID0gYXdhaXQgZGIubG9jYWxlLmZpbmRNYW55KHtcblx0XHRvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6IFwiZGVzY1wiIH0sIHsgbmFtZTogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGxvY2FsZXMubWFwKChsb2NhbGUpID0+ICh7XG5cdFx0aWQ6IGxvY2FsZS5pZCxcblx0XHRjb2RlOiBsb2NhbGUuY29kZSxcblx0XHRuYW1lOiBsb2NhbGUubmFtZSxcblx0XHRpc0RlZmF1bHQ6IGxvY2FsZS5pc0RlZmF1bHQsXG5cdH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2FsZShpZDogc3RyaW5nKSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRpZiAoIWxvY2FsZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxvY2FsZSBub3QgZm91bmRcIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGlkOiBsb2NhbGUuaWQsXG5cdFx0Y29kZTogbG9jYWxlLmNvZGUsXG5cdFx0bmFtZTogbG9jYWxlLm5hbWUsXG5cdFx0aXNEZWZhdWx0OiBsb2NhbGUuaXNEZWZhdWx0LFxuXHR9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUxvY2FsZUlucHV0IHtcblx0Y29kZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGlzRGVmYXVsdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMb2NhbGUoaW5wdXQ6IENyZWF0ZUxvY2FsZUlucHV0KSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgY29kZVxuXHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBjb2RlOiBpbnB1dC5jb2RlIH0sXG5cdH0pO1xuXG5cdGlmIChleGlzdGluZykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkEgbG9jYWxlIHdpdGggdGhpcyBjb2RlIGFscmVhZHkgZXhpc3RzXCIpO1xuXHR9XG5cblx0Ly8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0c1xuXHRpZiAoaW5wdXQuaXNEZWZhdWx0KSB7XG5cdFx0YXdhaXQgZGIubG9jYWxlLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdGNvZGU6IGlucHV0LmNvZGUsXG5cdFx0XHRuYW1lOiBpbnB1dC5uYW1lLFxuXHRcdFx0aXNEZWZhdWx0OiBpbnB1dC5pc0RlZmF1bHQgPz8gZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIGxvY2FsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVMb2NhbGVJbnB1dCB7XG5cdGNvZGU/OiBzdHJpbmc7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdGlzRGVmYXVsdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMb2NhbGUoaWQ6IHN0cmluZywgaW5wdXQ6IFVwZGF0ZUxvY2FsZUlucHV0KSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRpZiAoIWxvY2FsZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxvY2FsZSBub3QgZm91bmRcIik7XG5cdH1cblxuXHQvLyBDaGVjayBmb3IgZHVwbGljYXRlIGNvZGUgaWYgY2hhbmdpbmdcblx0aWYgKGlucHV0LmNvZGUgJiYgaW5wdXQuY29kZSAhPT0gbG9jYWxlLmNvZGUpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHRcdHdoZXJlOiB7IGNvZGU6IGlucHV0LmNvZGUgfSxcblx0XHR9KTtcblxuXHRcdGlmIChleGlzdGluZykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQSBsb2NhbGUgd2l0aCB0aGlzIGNvZGUgYWxyZWFkeSBleGlzdHNcIik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0c1xuXHRpZiAoaW5wdXQuaXNEZWZhdWx0ICYmICFsb2NhbGUuaXNEZWZhdWx0KSB7XG5cdFx0YXdhaXQgZGIubG9jYWxlLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5sb2NhbGUudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHtcblx0XHRcdGNvZGU6IGlucHV0LmNvZGUsXG5cdFx0XHRuYW1lOiBpbnB1dC5uYW1lLFxuXHRcdFx0aXNEZWZhdWx0OiBpbnB1dC5pc0RlZmF1bHQsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhbGUoaWQ6IHN0cmluZykge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0aWYgKCFsb2NhbGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMb2NhbGUgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0aWYgKGxvY2FsZS5pc0RlZmF1bHQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGVsZXRlIHRoZSBkZWZhdWx0IGxvY2FsZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGlmIGxvY2FsZSBpcyB1c2VkIGluIGFueSB0cmFuc2xhdGlvbnNcblx0Y29uc3QgdXNhZ2VDb3VudCA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRkYi5wcm9kdWN0VHJhbnNsYXRpb24uY291bnQoeyB3aGVyZTogeyBsb2NhbGVJZDogaWQgfSB9KSxcblx0XHRkYi5jYXRlZ29yeVRyYW5zbGF0aW9uLmNvdW50KHsgd2hlcmU6IHsgbG9jYWxlSWQ6IGlkIH0gfSksXG5cdFx0ZGIuYnJhbmRUcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLnBhZ2VUcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLmNvbGxlY3Rpb25UcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLmJsb2dQb3N0VHJhbnNsYXRpb24uY291bnQoeyB3aGVyZTogeyBsb2NhbGVJZDogaWQgfSB9KSxcblx0XSk7XG5cblx0Y29uc3QgdG90YWxVc2FnZSA9IHVzYWdlQ291bnQucmVkdWNlKChzdW0sIGNvdW50KSA9PiBzdW0gKyBjb3VudCwgMCk7XG5cblx0aWYgKHRvdGFsVXNhZ2UgPiAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0YENhbm5vdCBkZWxldGUgbG9jYWxlOiBpdCBpcyB1c2VkIGluICR7dG90YWxVc2FnZX0gdHJhbnNsYXRpb24ocylgXG5cdFx0KTtcblx0fVxuXG5cdGF3YWl0IGRiLmxvY2FsZS5kZWxldGUoe1xuXHRcdHdoZXJlOiB7IGlkIH0sXG5cdH0pO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUoaWQ6IHN0cmluZykge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0aWYgKCFsb2NhbGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMb2NhbGUgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gVW5zZXQgY3VycmVudCBkZWZhdWx0XG5cdGF3YWl0IGRiLmxvY2FsZS51cGRhdGVNYW55KHtcblx0XHR3aGVyZTogeyBpc0RlZmF1bHQ6IHRydWUgfSxcblx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0fSk7XG5cblx0Ly8gU2V0IG5ldyBkZWZhdWx0XG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5sb2NhbGUudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpVEF5THNCLHlMQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:188660 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLocales",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00e91691b7f42ab5617808351bb848723dc4b54758":"getLocales"},"apps/platform/src/server/api/internal/locales.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00e91691b7f42ab5617808351bb848723dc4b54758", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getLocales");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbG9jYWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG4vKipcbiAqIEdldCBvciBjcmVhdGUgYSBkZWZhdWx0IGxvY2FsZSBmb3IgdGhlIHBsYXRmb3JtLlxuICogVGhpcyBlbnN1cmVzIHRoZXJlJ3MgYWx3YXlzIGEgdmFsaWQgbG9jYWxlIGF2YWlsYWJsZSBmb3IgdHJhbnNsYXRpb25zLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JDcmVhdGVEZWZhdWx0TG9jYWxlKCkge1xuXHQvLyBGaXJzdCB0cnkgdG8gZ2V0IHRoZSBkZWZhdWx0IGxvY2FsZVxuXHRsZXQgZGVmYXVsdExvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHR9KTtcblxuXHRpZiAoIWRlZmF1bHRMb2NhbGUpIHtcblx0XHQvLyBUcnkgdG8gZ2V0IGFueSBleGlzdGluZyBsb2NhbGVcblx0XHRkZWZhdWx0TG9jYWxlID0gYXdhaXQgZGIubG9jYWxlLmZpbmRGaXJzdCgpO1xuXHR9XG5cblx0aWYgKCFkZWZhdWx0TG9jYWxlKSB7XG5cdFx0Ly8gQ3JlYXRlIGEgZGVmYXVsdCBCdWxnYXJpYW4gbG9jYWxlIHNpbmNlIHRoaXMgaXMgYSBCdWxnYXJpYW4tZm9jdXNlZCBwbGF0Zm9ybVxuXHRcdGRlZmF1bHRMb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuY3JlYXRlKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0Y29kZTogXCJiZy1CR1wiLFxuXHRcdFx0XHRuYW1lOiBcItCR0YrQu9Cz0LDRgNGB0LrQuFwiLFxuXHRcdFx0XHRpc0RlZmF1bHQ6IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpZDogZGVmYXVsdExvY2FsZS5pZCxcblx0XHRjb2RlOiBkZWZhdWx0TG9jYWxlLmNvZGUsXG5cdFx0bmFtZTogZGVmYXVsdExvY2FsZS5uYW1lLFxuXHRcdGlzRGVmYXVsdDogZGVmYXVsdExvY2FsZS5pc0RlZmF1bHQsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhbGVzKCkge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGVzID0gYXdhaXQgZGIubG9jYWxlLmZpbmRNYW55KHtcblx0XHRvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6IFwiZGVzY1wiIH0sIHsgbmFtZTogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGxvY2FsZXMubWFwKChsb2NhbGUpID0+ICh7XG5cdFx0aWQ6IGxvY2FsZS5pZCxcblx0XHRjb2RlOiBsb2NhbGUuY29kZSxcblx0XHRuYW1lOiBsb2NhbGUubmFtZSxcblx0XHRpc0RlZmF1bHQ6IGxvY2FsZS5pc0RlZmF1bHQsXG5cdH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2FsZShpZDogc3RyaW5nKSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRpZiAoIWxvY2FsZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxvY2FsZSBub3QgZm91bmRcIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGlkOiBsb2NhbGUuaWQsXG5cdFx0Y29kZTogbG9jYWxlLmNvZGUsXG5cdFx0bmFtZTogbG9jYWxlLm5hbWUsXG5cdFx0aXNEZWZhdWx0OiBsb2NhbGUuaXNEZWZhdWx0LFxuXHR9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUxvY2FsZUlucHV0IHtcblx0Y29kZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGlzRGVmYXVsdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMb2NhbGUoaW5wdXQ6IENyZWF0ZUxvY2FsZUlucHV0KSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgY29kZVxuXHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBjb2RlOiBpbnB1dC5jb2RlIH0sXG5cdH0pO1xuXG5cdGlmIChleGlzdGluZykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkEgbG9jYWxlIHdpdGggdGhpcyBjb2RlIGFscmVhZHkgZXhpc3RzXCIpO1xuXHR9XG5cblx0Ly8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0c1xuXHRpZiAoaW5wdXQuaXNEZWZhdWx0KSB7XG5cdFx0YXdhaXQgZGIubG9jYWxlLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdGNvZGU6IGlucHV0LmNvZGUsXG5cdFx0XHRuYW1lOiBpbnB1dC5uYW1lLFxuXHRcdFx0aXNEZWZhdWx0OiBpbnB1dC5pc0RlZmF1bHQgPz8gZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIGxvY2FsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVMb2NhbGVJbnB1dCB7XG5cdGNvZGU/OiBzdHJpbmc7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdGlzRGVmYXVsdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMb2NhbGUoaWQ6IHN0cmluZywgaW5wdXQ6IFVwZGF0ZUxvY2FsZUlucHV0KSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRpZiAoIWxvY2FsZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxvY2FsZSBub3QgZm91bmRcIik7XG5cdH1cblxuXHQvLyBDaGVjayBmb3IgZHVwbGljYXRlIGNvZGUgaWYgY2hhbmdpbmdcblx0aWYgKGlucHV0LmNvZGUgJiYgaW5wdXQuY29kZSAhPT0gbG9jYWxlLmNvZGUpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHRcdHdoZXJlOiB7IGNvZGU6IGlucHV0LmNvZGUgfSxcblx0XHR9KTtcblxuXHRcdGlmIChleGlzdGluZykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQSBsb2NhbGUgd2l0aCB0aGlzIGNvZGUgYWxyZWFkeSBleGlzdHNcIik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0c1xuXHRpZiAoaW5wdXQuaXNEZWZhdWx0ICYmICFsb2NhbGUuaXNEZWZhdWx0KSB7XG5cdFx0YXdhaXQgZGIubG9jYWxlLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5sb2NhbGUudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHtcblx0XHRcdGNvZGU6IGlucHV0LmNvZGUsXG5cdFx0XHRuYW1lOiBpbnB1dC5uYW1lLFxuXHRcdFx0aXNEZWZhdWx0OiBpbnB1dC5pc0RlZmF1bHQsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhbGUoaWQ6IHN0cmluZykge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0aWYgKCFsb2NhbGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMb2NhbGUgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0aWYgKGxvY2FsZS5pc0RlZmF1bHQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGVsZXRlIHRoZSBkZWZhdWx0IGxvY2FsZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGlmIGxvY2FsZSBpcyB1c2VkIGluIGFueSB0cmFuc2xhdGlvbnNcblx0Y29uc3QgdXNhZ2VDb3VudCA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRkYi5wcm9kdWN0VHJhbnNsYXRpb24uY291bnQoeyB3aGVyZTogeyBsb2NhbGVJZDogaWQgfSB9KSxcblx0XHRkYi5jYXRlZ29yeVRyYW5zbGF0aW9uLmNvdW50KHsgd2hlcmU6IHsgbG9jYWxlSWQ6IGlkIH0gfSksXG5cdFx0ZGIuYnJhbmRUcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLnBhZ2VUcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLmNvbGxlY3Rpb25UcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLmJsb2dQb3N0VHJhbnNsYXRpb24uY291bnQoeyB3aGVyZTogeyBsb2NhbGVJZDogaWQgfSB9KSxcblx0XSk7XG5cblx0Y29uc3QgdG90YWxVc2FnZSA9IHVzYWdlQ291bnQucmVkdWNlKChzdW0sIGNvdW50KSA9PiBzdW0gKyBjb3VudCwgMCk7XG5cblx0aWYgKHRvdGFsVXNhZ2UgPiAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0YENhbm5vdCBkZWxldGUgbG9jYWxlOiBpdCBpcyB1c2VkIGluICR7dG90YWxVc2FnZX0gdHJhbnNsYXRpb24ocylgXG5cdFx0KTtcblx0fVxuXG5cdGF3YWl0IGRiLmxvY2FsZS5kZWxldGUoe1xuXHRcdHdoZXJlOiB7IGlkIH0sXG5cdH0pO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUoaWQ6IHN0cmluZykge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0aWYgKCFsb2NhbGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMb2NhbGUgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gVW5zZXQgY3VycmVudCBkZWZhdWx0XG5cdGF3YWl0IGRiLmxvY2FsZS51cGRhdGVNYW55KHtcblx0XHR3aGVyZTogeyBpc0RlZmF1bHQ6IHRydWUgfSxcblx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0fSk7XG5cblx0Ly8gU2V0IG5ldyBkZWZhdWx0XG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5sb2NhbGUudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrU0FrRXNCLHVMQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:09d3f4 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setDefaultLocale",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4065d87ec4b54bfb8bcc8182e3fb5c78a1697a5d82":"setDefaultLocale"},"apps/platform/src/server/api/internal/locales.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4065d87ec4b54bfb8bcc8182e3fb5c78a1697a5d82", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "setDefaultLocale");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbG9jYWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG4vKipcbiAqIEdldCBvciBjcmVhdGUgYSBkZWZhdWx0IGxvY2FsZSBmb3IgdGhlIHBsYXRmb3JtLlxuICogVGhpcyBlbnN1cmVzIHRoZXJlJ3MgYWx3YXlzIGEgdmFsaWQgbG9jYWxlIGF2YWlsYWJsZSBmb3IgdHJhbnNsYXRpb25zLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JDcmVhdGVEZWZhdWx0TG9jYWxlKCkge1xuXHQvLyBGaXJzdCB0cnkgdG8gZ2V0IHRoZSBkZWZhdWx0IGxvY2FsZVxuXHRsZXQgZGVmYXVsdExvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHR9KTtcblxuXHRpZiAoIWRlZmF1bHRMb2NhbGUpIHtcblx0XHQvLyBUcnkgdG8gZ2V0IGFueSBleGlzdGluZyBsb2NhbGVcblx0XHRkZWZhdWx0TG9jYWxlID0gYXdhaXQgZGIubG9jYWxlLmZpbmRGaXJzdCgpO1xuXHR9XG5cblx0aWYgKCFkZWZhdWx0TG9jYWxlKSB7XG5cdFx0Ly8gQ3JlYXRlIGEgZGVmYXVsdCBCdWxnYXJpYW4gbG9jYWxlIHNpbmNlIHRoaXMgaXMgYSBCdWxnYXJpYW4tZm9jdXNlZCBwbGF0Zm9ybVxuXHRcdGRlZmF1bHRMb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuY3JlYXRlKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0Y29kZTogXCJiZy1CR1wiLFxuXHRcdFx0XHRuYW1lOiBcItCR0YrQu9Cz0LDRgNGB0LrQuFwiLFxuXHRcdFx0XHRpc0RlZmF1bHQ6IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpZDogZGVmYXVsdExvY2FsZS5pZCxcblx0XHRjb2RlOiBkZWZhdWx0TG9jYWxlLmNvZGUsXG5cdFx0bmFtZTogZGVmYXVsdExvY2FsZS5uYW1lLFxuXHRcdGlzRGVmYXVsdDogZGVmYXVsdExvY2FsZS5pc0RlZmF1bHQsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhbGVzKCkge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGVzID0gYXdhaXQgZGIubG9jYWxlLmZpbmRNYW55KHtcblx0XHRvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6IFwiZGVzY1wiIH0sIHsgbmFtZTogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGxvY2FsZXMubWFwKChsb2NhbGUpID0+ICh7XG5cdFx0aWQ6IGxvY2FsZS5pZCxcblx0XHRjb2RlOiBsb2NhbGUuY29kZSxcblx0XHRuYW1lOiBsb2NhbGUubmFtZSxcblx0XHRpc0RlZmF1bHQ6IGxvY2FsZS5pc0RlZmF1bHQsXG5cdH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2FsZShpZDogc3RyaW5nKSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRpZiAoIWxvY2FsZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxvY2FsZSBub3QgZm91bmRcIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGlkOiBsb2NhbGUuaWQsXG5cdFx0Y29kZTogbG9jYWxlLmNvZGUsXG5cdFx0bmFtZTogbG9jYWxlLm5hbWUsXG5cdFx0aXNEZWZhdWx0OiBsb2NhbGUuaXNEZWZhdWx0LFxuXHR9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUxvY2FsZUlucHV0IHtcblx0Y29kZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGlzRGVmYXVsdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMb2NhbGUoaW5wdXQ6IENyZWF0ZUxvY2FsZUlucHV0KSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgY29kZVxuXHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBjb2RlOiBpbnB1dC5jb2RlIH0sXG5cdH0pO1xuXG5cdGlmIChleGlzdGluZykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkEgbG9jYWxlIHdpdGggdGhpcyBjb2RlIGFscmVhZHkgZXhpc3RzXCIpO1xuXHR9XG5cblx0Ly8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0c1xuXHRpZiAoaW5wdXQuaXNEZWZhdWx0KSB7XG5cdFx0YXdhaXQgZGIubG9jYWxlLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdGNvZGU6IGlucHV0LmNvZGUsXG5cdFx0XHRuYW1lOiBpbnB1dC5uYW1lLFxuXHRcdFx0aXNEZWZhdWx0OiBpbnB1dC5pc0RlZmF1bHQgPz8gZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIGxvY2FsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVMb2NhbGVJbnB1dCB7XG5cdGNvZGU/OiBzdHJpbmc7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdGlzRGVmYXVsdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMb2NhbGUoaWQ6IHN0cmluZywgaW5wdXQ6IFVwZGF0ZUxvY2FsZUlucHV0KSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRpZiAoIWxvY2FsZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxvY2FsZSBub3QgZm91bmRcIik7XG5cdH1cblxuXHQvLyBDaGVjayBmb3IgZHVwbGljYXRlIGNvZGUgaWYgY2hhbmdpbmdcblx0aWYgKGlucHV0LmNvZGUgJiYgaW5wdXQuY29kZSAhPT0gbG9jYWxlLmNvZGUpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHRcdHdoZXJlOiB7IGNvZGU6IGlucHV0LmNvZGUgfSxcblx0XHR9KTtcblxuXHRcdGlmIChleGlzdGluZykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQSBsb2NhbGUgd2l0aCB0aGlzIGNvZGUgYWxyZWFkeSBleGlzdHNcIik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0c1xuXHRpZiAoaW5wdXQuaXNEZWZhdWx0ICYmICFsb2NhbGUuaXNEZWZhdWx0KSB7XG5cdFx0YXdhaXQgZGIubG9jYWxlLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5sb2NhbGUudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHtcblx0XHRcdGNvZGU6IGlucHV0LmNvZGUsXG5cdFx0XHRuYW1lOiBpbnB1dC5uYW1lLFxuXHRcdFx0aXNEZWZhdWx0OiBpbnB1dC5pc0RlZmF1bHQsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhbGUoaWQ6IHN0cmluZykge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0aWYgKCFsb2NhbGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMb2NhbGUgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0aWYgKGxvY2FsZS5pc0RlZmF1bHQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGVsZXRlIHRoZSBkZWZhdWx0IGxvY2FsZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGlmIGxvY2FsZSBpcyB1c2VkIGluIGFueSB0cmFuc2xhdGlvbnNcblx0Y29uc3QgdXNhZ2VDb3VudCA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRkYi5wcm9kdWN0VHJhbnNsYXRpb24uY291bnQoeyB3aGVyZTogeyBsb2NhbGVJZDogaWQgfSB9KSxcblx0XHRkYi5jYXRlZ29yeVRyYW5zbGF0aW9uLmNvdW50KHsgd2hlcmU6IHsgbG9jYWxlSWQ6IGlkIH0gfSksXG5cdFx0ZGIuYnJhbmRUcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLnBhZ2VUcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLmNvbGxlY3Rpb25UcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLmJsb2dQb3N0VHJhbnNsYXRpb24uY291bnQoeyB3aGVyZTogeyBsb2NhbGVJZDogaWQgfSB9KSxcblx0XSk7XG5cblx0Y29uc3QgdG90YWxVc2FnZSA9IHVzYWdlQ291bnQucmVkdWNlKChzdW0sIGNvdW50KSA9PiBzdW0gKyBjb3VudCwgMCk7XG5cblx0aWYgKHRvdGFsVXNhZ2UgPiAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0YENhbm5vdCBkZWxldGUgbG9jYWxlOiBpdCBpcyB1c2VkIGluICR7dG90YWxVc2FnZX0gdHJhbnNsYXRpb24ocylgXG5cdFx0KTtcblx0fVxuXG5cdGF3YWl0IGRiLmxvY2FsZS5kZWxldGUoe1xuXHRcdHdoZXJlOiB7IGlkIH0sXG5cdH0pO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUoaWQ6IHN0cmluZykge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0aWYgKCFsb2NhbGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMb2NhbGUgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gVW5zZXQgY3VycmVudCBkZWZhdWx0XG5cdGF3YWl0IGRiLmxvY2FsZS51cGRhdGVNYW55KHtcblx0XHR3aGVyZTogeyBpc0RlZmF1bHQ6IHRydWUgfSxcblx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0fSk7XG5cblx0Ly8gU2V0IG5ldyBkZWZhdWx0XG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5sb2NhbGUudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxVEFpT3NCLDZMQUFBIn0=
}),
"[project]/apps/platform/src/server/api/internal/data:648878 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateLocale",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6070b58a72f8742e9145a6937fd56bc634cc254952":"updateLocale"},"apps/platform/src/server/api/internal/locales.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6070b58a72f8742e9145a6937fd56bc634cc254952", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateLocale");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbG9jYWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL3NlcnZlci9hdXRoXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NlcnZlci9kYlwiO1xuaW1wb3J0IHsgcmVxdWlyZUFkbWluVGVuYW50IH0gZnJvbSBcIkAvc2VydmVyL3RlbmFudFwiO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1aXJlU3RvcmVBY2Nlc3MoKSB7XG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cdGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG5cdH1cblxuXHRjb25zdCB0ZW5hbnQgPSBhd2FpdCByZXF1aXJlQWRtaW5UZW5hbnQoKTtcblxuXHRjb25zdCBzdGFmZlJlY29yZCA9IGF3YWl0IGRiLnRlbmFudFN0YWZmLmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXHRcdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHR9LFxuXHR9KTtcblxuXHRpZiAoIXN0YWZmUmVjb3JkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiRm9yYmlkZGVuOiBObyBhY2Nlc3MgdG8gdGhpcyBzdG9yZVwiKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG5cdFx0dGVuYW50SWQ6IHRlbmFudC5pZCxcblx0XHRyb2xlOiBzdGFmZlJlY29yZC5yb2xlLFxuXHR9O1xufVxuXG4vKipcbiAqIEdldCBvciBjcmVhdGUgYSBkZWZhdWx0IGxvY2FsZSBmb3IgdGhlIHBsYXRmb3JtLlxuICogVGhpcyBlbnN1cmVzIHRoZXJlJ3MgYWx3YXlzIGEgdmFsaWQgbG9jYWxlIGF2YWlsYWJsZSBmb3IgdHJhbnNsYXRpb25zLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JDcmVhdGVEZWZhdWx0TG9jYWxlKCkge1xuXHQvLyBGaXJzdCB0cnkgdG8gZ2V0IHRoZSBkZWZhdWx0IGxvY2FsZVxuXHRsZXQgZGVmYXVsdExvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlzRGVmYXVsdDogdHJ1ZSB9LFxuXHR9KTtcblxuXHRpZiAoIWRlZmF1bHRMb2NhbGUpIHtcblx0XHQvLyBUcnkgdG8gZ2V0IGFueSBleGlzdGluZyBsb2NhbGVcblx0XHRkZWZhdWx0TG9jYWxlID0gYXdhaXQgZGIubG9jYWxlLmZpbmRGaXJzdCgpO1xuXHR9XG5cblx0aWYgKCFkZWZhdWx0TG9jYWxlKSB7XG5cdFx0Ly8gQ3JlYXRlIGEgZGVmYXVsdCBCdWxnYXJpYW4gbG9jYWxlIHNpbmNlIHRoaXMgaXMgYSBCdWxnYXJpYW4tZm9jdXNlZCBwbGF0Zm9ybVxuXHRcdGRlZmF1bHRMb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuY3JlYXRlKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0Y29kZTogXCJiZy1CR1wiLFxuXHRcdFx0XHRuYW1lOiBcItCR0YrQu9Cz0LDRgNGB0LrQuFwiLFxuXHRcdFx0XHRpc0RlZmF1bHQ6IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpZDogZGVmYXVsdExvY2FsZS5pZCxcblx0XHRjb2RlOiBkZWZhdWx0TG9jYWxlLmNvZGUsXG5cdFx0bmFtZTogZGVmYXVsdExvY2FsZS5uYW1lLFxuXHRcdGlzRGVmYXVsdDogZGVmYXVsdExvY2FsZS5pc0RlZmF1bHQsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhbGVzKCkge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGVzID0gYXdhaXQgZGIubG9jYWxlLmZpbmRNYW55KHtcblx0XHRvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6IFwiZGVzY1wiIH0sIHsgbmFtZTogXCJhc2NcIiB9XSxcblx0fSk7XG5cblx0cmV0dXJuIGxvY2FsZXMubWFwKChsb2NhbGUpID0+ICh7XG5cdFx0aWQ6IGxvY2FsZS5pZCxcblx0XHRjb2RlOiBsb2NhbGUuY29kZSxcblx0XHRuYW1lOiBsb2NhbGUubmFtZSxcblx0XHRpc0RlZmF1bHQ6IGxvY2FsZS5pc0RlZmF1bHQsXG5cdH0pKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2FsZShpZDogc3RyaW5nKSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRpZiAoIWxvY2FsZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxvY2FsZSBub3QgZm91bmRcIik7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGlkOiBsb2NhbGUuaWQsXG5cdFx0Y29kZTogbG9jYWxlLmNvZGUsXG5cdFx0bmFtZTogbG9jYWxlLm5hbWUsXG5cdFx0aXNEZWZhdWx0OiBsb2NhbGUuaXNEZWZhdWx0LFxuXHR9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUxvY2FsZUlucHV0IHtcblx0Y29kZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGlzRGVmYXVsdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMb2NhbGUoaW5wdXQ6IENyZWF0ZUxvY2FsZUlucHV0KSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdC8vIENoZWNrIGZvciBkdXBsaWNhdGUgY29kZVxuXHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBjb2RlOiBpbnB1dC5jb2RlIH0sXG5cdH0pO1xuXG5cdGlmIChleGlzdGluZykge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkEgbG9jYWxlIHdpdGggdGhpcyBjb2RlIGFscmVhZHkgZXhpc3RzXCIpO1xuXHR9XG5cblx0Ly8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0c1xuXHRpZiAoaW5wdXQuaXNEZWZhdWx0KSB7XG5cdFx0YXdhaXQgZGIubG9jYWxlLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5jcmVhdGUoe1xuXHRcdGRhdGE6IHtcblx0XHRcdGNvZGU6IGlucHV0LmNvZGUsXG5cdFx0XHRuYW1lOiBpbnB1dC5uYW1lLFxuXHRcdFx0aXNEZWZhdWx0OiBpbnB1dC5pc0RlZmF1bHQgPz8gZmFsc2UsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIGxvY2FsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVMb2NhbGVJbnB1dCB7XG5cdGNvZGU/OiBzdHJpbmc7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdGlzRGVmYXVsdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMb2NhbGUoaWQ6IHN0cmluZywgaW5wdXQ6IFVwZGF0ZUxvY2FsZUlucHV0KSB7XG5cdGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IGxvY2FsZSA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHR9KTtcblxuXHRpZiAoIWxvY2FsZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkxvY2FsZSBub3QgZm91bmRcIik7XG5cdH1cblxuXHQvLyBDaGVjayBmb3IgZHVwbGljYXRlIGNvZGUgaWYgY2hhbmdpbmdcblx0aWYgKGlucHV0LmNvZGUgJiYgaW5wdXQuY29kZSAhPT0gbG9jYWxlLmNvZGUpIHtcblx0XHRjb25zdCBleGlzdGluZyA9IGF3YWl0IGRiLmxvY2FsZS5maW5kVW5pcXVlKHtcblx0XHRcdHdoZXJlOiB7IGNvZGU6IGlucHV0LmNvZGUgfSxcblx0XHR9KTtcblxuXHRcdGlmIChleGlzdGluZykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQSBsb2NhbGUgd2l0aCB0aGlzIGNvZGUgYWxyZWFkeSBleGlzdHNcIik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgc2V0dGluZyBhcyBkZWZhdWx0LCB1bnNldCBvdGhlciBkZWZhdWx0c1xuXHRpZiAoaW5wdXQuaXNEZWZhdWx0ICYmICFsb2NhbGUuaXNEZWZhdWx0KSB7XG5cdFx0YXdhaXQgZGIubG9jYWxlLnVwZGF0ZU1hbnkoe1xuXHRcdFx0d2hlcmU6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdFx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5sb2NhbGUudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHtcblx0XHRcdGNvZGU6IGlucHV0LmNvZGUsXG5cdFx0XHRuYW1lOiBpbnB1dC5uYW1lLFxuXHRcdFx0aXNEZWZhdWx0OiBpbnB1dC5pc0RlZmF1bHQsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHVwZGF0ZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhbGUoaWQ6IHN0cmluZykge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0aWYgKCFsb2NhbGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMb2NhbGUgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0aWYgKGxvY2FsZS5pc0RlZmF1bHQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGVsZXRlIHRoZSBkZWZhdWx0IGxvY2FsZVwiKTtcblx0fVxuXG5cdC8vIENoZWNrIGlmIGxvY2FsZSBpcyB1c2VkIGluIGFueSB0cmFuc2xhdGlvbnNcblx0Y29uc3QgdXNhZ2VDb3VudCA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRkYi5wcm9kdWN0VHJhbnNsYXRpb24uY291bnQoeyB3aGVyZTogeyBsb2NhbGVJZDogaWQgfSB9KSxcblx0XHRkYi5jYXRlZ29yeVRyYW5zbGF0aW9uLmNvdW50KHsgd2hlcmU6IHsgbG9jYWxlSWQ6IGlkIH0gfSksXG5cdFx0ZGIuYnJhbmRUcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLnBhZ2VUcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLmNvbGxlY3Rpb25UcmFuc2xhdGlvbi5jb3VudCh7IHdoZXJlOiB7IGxvY2FsZUlkOiBpZCB9IH0pLFxuXHRcdGRiLmJsb2dQb3N0VHJhbnNsYXRpb24uY291bnQoeyB3aGVyZTogeyBsb2NhbGVJZDogaWQgfSB9KSxcblx0XSk7XG5cblx0Y29uc3QgdG90YWxVc2FnZSA9IHVzYWdlQ291bnQucmVkdWNlKChzdW0sIGNvdW50KSA9PiBzdW0gKyBjb3VudCwgMCk7XG5cblx0aWYgKHRvdGFsVXNhZ2UgPiAwKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0YENhbm5vdCBkZWxldGUgbG9jYWxlOiBpdCBpcyB1c2VkIGluICR7dG90YWxVc2FnZX0gdHJhbnNsYXRpb24ocylgXG5cdFx0KTtcblx0fVxuXG5cdGF3YWl0IGRiLmxvY2FsZS5kZWxldGUoe1xuXHRcdHdoZXJlOiB7IGlkIH0sXG5cdH0pO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUoaWQ6IHN0cmluZykge1xuXHRhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBsb2NhbGUgPSBhd2FpdCBkYi5sb2NhbGUuZmluZFVuaXF1ZSh7XG5cdFx0d2hlcmU6IHsgaWQgfSxcblx0fSk7XG5cblx0aWYgKCFsb2NhbGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMb2NhbGUgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gVW5zZXQgY3VycmVudCBkZWZhdWx0XG5cdGF3YWl0IGRiLmxvY2FsZS51cGRhdGVNYW55KHtcblx0XHR3aGVyZTogeyBpc0RlZmF1bHQ6IHRydWUgfSxcblx0XHRkYXRhOiB7IGlzRGVmYXVsdDogZmFsc2UgfSxcblx0fSk7XG5cblx0Ly8gU2V0IG5ldyBkZWZhdWx0XG5cdGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5sb2NhbGUudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZCB9LFxuXHRcdGRhdGE6IHsgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdH0pO1xuXG5cdHJldHVybiB1cGRhdGVkO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpVEErSXNCLHlMQUFBIn0=
}),
"[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/admin/polaris-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/empty.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$5b05fb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:5b05fb [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$c3874e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:c3874e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$188660__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:188660 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$09d3f4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:09d3f4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$648878__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:648878 [app-client] (ecmascript) <text/javascript>");
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
;
function LocalesPage() {
    _s();
    const [locales, setLocales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [viewDialogOpen, setViewDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formDialogOpen, setFormDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLocale, setSelectedLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formMode, setFormMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("create");
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form state
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        code: "",
        name: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalesPage.useEffect": ()=>{
            loadData();
        }
    }["LocalesPage.useEffect"], []);
    async function loadData() {
        try {
            setLoading(true);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$188660__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getLocales"])();
            setLocales(data);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load locales");
        } finally{
            setLoading(false);
        }
    }
    const handleView = (locale)=>{
        setSelectedLocale(locale);
        setViewDialogOpen(true);
    };
    const handleEdit = (locale)=>{
        setSelectedLocale(locale);
        setFormMode("edit");
        setFormData({
            code: locale.code,
            name: locale.name
        });
        setFormDialogOpen(true);
    };
    const handleCreate = ()=>{
        setSelectedLocale(null);
        setFormMode("create");
        setFormData({
            code: "",
            name: ""
        });
        setFormDialogOpen(true);
    };
    const handleDeleteClick = (locale)=>{
        setSelectedLocale(locale);
        setDeleteDialogOpen(true);
    };
    const handleSetDefault = async (locale)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$09d3f4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["setDefaultLocale"])(locale.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${locale.name} is now the default locale`);
            loadData();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to set default locale");
        }
    };
    const handleSubmit = async ()=>{
        if (!formData.code || !formData.name) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Code and name are required");
            return;
        }
        try {
            setSaving(true);
            if (formMode === "create") {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$5b05fb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createLocale"])({
                    code: formData.code,
                    name: formData.name
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Locale created");
            } else if (selectedLocale) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$648878__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateLocale"])(selectedLocale.id, {
                    code: formData.code,
                    name: formData.name
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Locale updated");
            }
            setFormDialogOpen(false);
            loadData();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error instanceof Error ? error.message : "Failed to save locale");
        } finally{
            setSaving(false);
        }
    };
    const handleDelete = async ()=>{
        if (!selectedLocale) return;
        try {
            setDeleting(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$c3874e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteLocale"])(selectedLocale.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Locale deleted");
            setDeleteDialogOpen(false);
            loadData();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error instanceof Error ? error.message : "Failed to delete locale");
        } finally{
            setDeleting(false);
        }
    };
    const defaultLocale = locales.find((l)=>l.isDefault);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                lineNumber: 181,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
            lineNumber: 180,
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
                                children: "Locales & Translations"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                lineNumber: 190,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "Manage languages and translations"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                lineNumber: 193,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                        lineNumber: 189,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                        onClick: handleCreate,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                lineNumber: 198,
                                columnNumber: 6
                            }, this),
                            "Add Locale"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                        lineNumber: 197,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                lineNumber: 188,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Total Locales"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                lineNumber: 205,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: locales.length
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                lineNumber: 206,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                        lineNumber: 204,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Default Locale"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                lineNumber: 209,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: defaultLocale?.code ?? "None"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                lineNumber: 210,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                        lineNumber: 208,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                lineNumber: 203,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: locales.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyMedia"], {
                                    variant: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "h-8 w-8"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyTitle"], {
                                    children: "No locales yet"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyDescription"], {
                                    children: "Create your first locale to enable multi-language support"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 219,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$empty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                onClick: handleCreate,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 9
                                    }, this),
                                    "Add Locale"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                lineNumber: 229,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 228,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                    lineNumber: 218,
                    columnNumber: 6
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Code"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Default"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-right",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                lineNumber: 238,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 237,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: locales.map((locale)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "font-mono",
                                            children: locale.code
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "font-medium",
                                            children: locale.name
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: locale.isDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: "text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: "h-3 w-3 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 13
                                                    }, this),
                                                    "Default"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 12
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end gap-2",
                                                children: [
                                                    !locale.isDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: ()=>handleSetDefault(locale),
                                                        title: "Set as default",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 14
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: ()=>handleView(locale),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: ()=>handleEdit(locale),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        onClick: ()=>handleDeleteClick(locale),
                                                        disabled: locale.isDefault,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, locale.id, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 245,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                    lineNumber: 236,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                lineNumber: 216,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: viewDialogOpen,
                onOpenChange: setViewDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Locale Details"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "View locale information"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 304,
                            columnNumber: 6
                        }, this),
                        selectedLocale && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-muted-foreground",
                                                children: "Code"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono",
                                                children: selectedLocale.code
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-muted-foreground",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: selectedLocale.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                className: "text-muted-foreground",
                                                children: "Default"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: selectedLocale.isDefault ? "Yes" : "No"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                lineNumber: 313,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 312,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setViewDialogOpen(false),
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 331,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                    onClick: ()=>{
                                        setViewDialogOpen(false);
                                        if (selectedLocale) handleEdit(selectedLocale);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 8
                                        }, this),
                                        "Edit Locale"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 330,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                    lineNumber: 303,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                lineNumber: 302,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: formDialogOpen,
                onOpenChange: setFormDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: formMode === "create" ? "Add Locale" : "Edit Locale"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: formMode === "create" ? "Add a new locale for translations" : "Update locale settings"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 354,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 350,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "code",
                                            children: "Locale Code"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                            lineNumber: 363,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "code",
                                            value: formData.code,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    code: e.target.value
                                                }),
                                            placeholder: "e.g. bg-BG, en-US"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-1",
                                            children: "Use format: language-COUNTRY (e.g. bg-BG, en-US)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "name",
                                            children: "Display Name"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "name",
                                            value: formData.name,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    name: e.target.value
                                                }),
                                            placeholder: "e.g. Bulgarian, English (US)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 361,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setFormDialogOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 391,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                    onClick: handleSubmit,
                                    disabled: saving,
                                    children: saving ? "Saving..." : formMode === "create" ? "Add Locale" : "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 390,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                    lineNumber: 349,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                lineNumber: 348,
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
                                    children: "Delete Locale"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 409,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: [
                                        'Are you sure you want to delete "',
                                        selectedLocale?.name,
                                        '"? This will also remove all translations for this locale.'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 410,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 408,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setDeleteDialogOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 417,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    onClick: handleDelete,
                                    disabled: deleting,
                                    children: deleting ? "Deleting..." : "Delete Locale"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                                    lineNumber: 423,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                            lineNumber: 416,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                    lineNumber: 407,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
                lineNumber: 406,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/locales/page.tsx",
        lineNumber: 187,
        columnNumber: 3
    }, this);
}
_s(LocalesPage, "NJcKzs4epTXPf1lkStlNPUwsb9c=");
_c = LocalesPage;
var _c;
__turbopack_context__.k.register(_c, "LocalesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_platform_src_4f0795a7._.js.map