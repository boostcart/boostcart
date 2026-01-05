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
"[project]/apps/platform/src/server/api/internal/data:a79e09 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProduct",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"405d7bf5b1e1ff67b41050f9c6b3b647526820a0d9":"deleteProduct"},"apps/platform/src/server/api/internal/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("405d7bf5b1e1ff67b41050f9c6b3b647526820a0d9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProduct");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7XG5cdHR5cGUgQ3JlYXRlUHJvZHVjdElucHV0LFxuXHRDcmVhdGVQcm9kdWN0U2NoZW1hLFxuXHR0eXBlIFByb2R1Y3RGaWx0ZXJJbnB1dCxcblx0UHJvZHVjdEZpbHRlclNjaGVtYSxcblx0dHlwZSBVcGRhdGVQcm9kdWN0SW5wdXQsXG5cdFVwZGF0ZVByb2R1Y3RTY2hlbWEsXG59IGZyb20gXCJAL3NjaGVtYXMvcHJvZHVjdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7IGNsZWFudXBQcm9kdWN0TWVkaWEgfSBmcm9tIFwiQC9zZXJ2ZXIvc2VydmljZXMvbWVkaWEtY2xlYW51cFwiO1xuaW1wb3J0IHtcblx0cmVxdWlyZVZpZXdQZXJtaXNzaW9uLFxuXHRyZXF1aXJlTWFuYWdlUGVybWlzc2lvbixcblx0cmVxdWlyZURlbGV0ZVBlcm1pc3Npb24sXG59IGZyb20gXCJAL3NlcnZlci9hcGkvcGVybWlzc2lvbnNcIjtcblxuLy8gSGVscGVyIHRvIGNoZWNrIGFjY2VzcyBhbmQgZ2V0IHRlbmFudCBjb250ZXh0IGZvciBhZG1pbiBvcGVyYXRpb25zIChyZWFkIGFjY2VzcylcbmFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVTdG9yZUFjY2VzcygpIHtcblx0Y29uc3QgY29udGV4dCA9IGF3YWl0IHJlcXVpcmVWaWV3UGVybWlzc2lvbihcInByb2R1Y3RzXCIpO1xuXHRyZXR1cm4gY29udGV4dDtcbn1cblxuLy8gSGVscGVyIGZvciB3cml0ZSBvcGVyYXRpb25zIChjcmVhdGUvdXBkYXRlKVxuYXN5bmMgZnVuY3Rpb24gcmVxdWlyZVByb2R1Y3RNYW5hZ2VBY2Nlc3MoKSB7XG5cdGNvbnN0IGNvbnRleHQgPSBhd2FpdCByZXF1aXJlTWFuYWdlUGVybWlzc2lvbihcInByb2R1Y3RzXCIpO1xuXHRyZXR1cm4gY29udGV4dDtcbn1cblxuLy8gSGVscGVyIGZvciBkZWxldGUgb3BlcmF0aW9uc1xuYXN5bmMgZnVuY3Rpb24gcmVxdWlyZVByb2R1Y3REZWxldGVBY2Nlc3MoKSB7XG5cdGNvbnN0IGNvbnRleHQgPSBhd2FpdCByZXF1aXJlRGVsZXRlUGVybWlzc2lvbihcInByb2R1Y3RzXCIpO1xuXHRyZXR1cm4gY29udGV4dDtcbn1cblxuLy8gR2V0IHByb2R1Y3RzIHdpdGggZmlsdGVyc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzKGZpbHRlcnM/OiBQcm9kdWN0RmlsdGVySW5wdXQpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgdmFsaWRhdGVkRmlsdGVycyA9IGZpbHRlcnNcblx0XHQ/IFByb2R1Y3RGaWx0ZXJTY2hlbWEucGFyc2UoZmlsdGVycylcblx0XHQ6IHsgcGFnZTogMSwgcGFnZVNpemU6IDIwIH07XG5cblx0Y29uc3Qge1xuXHRcdHBhZ2UsXG5cdFx0cGFnZVNpemUsXG5cdFx0c2VhcmNoLFxuXHRcdHN0YXR1cyxcblx0XHRjYXRlZ29yeUlkcyxcblx0XHRicmFuZElkcyxcblx0XHRzdG9ja1N0YXR1cyxcblx0XHRwcmljZU1pbixcblx0XHRwcmljZU1heCxcblx0XHRzb3J0QnksXG5cdH0gPSB2YWxpZGF0ZWRGaWx0ZXJzO1xuXG5cdGNvbnN0IHdoZXJlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcblx0XHR0ZW5hbnRJZCwgLy8gRmlsdGVyIGJ5IGN1cnJlbnQgdGVuYW50XG5cdFx0ZGVsZXRlZEF0OiBudWxsLCAvLyBPbmx5IGFjdGl2ZSBwcm9kdWN0c1xuXHR9O1xuXG5cdC8vIFNlYXJjaFxuXHRpZiAoc2VhcmNoKSB7XG5cdFx0d2hlcmUuT1IgPSBbXG5cdFx0XHR7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgfSB9LFxuXHRcdFx0e1xuXHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRzb21lOiB7IG5hbWU6IHsgY29udGFpbnM6IHNlYXJjaCwgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIH0gfSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XTtcblx0fVxuXG5cdC8vIFN0YXR1cyBmaWx0ZXJcblx0aWYgKHN0YXR1cyAmJiBzdGF0dXMubGVuZ3RoID4gMCkge1xuXHRcdHdoZXJlLnN0YXR1cyA9IHsgaW46IHN0YXR1cyB9O1xuXHR9XG5cblx0Ly8gQ2F0ZWdvcnkgZmlsdGVyXG5cdGlmIChjYXRlZ29yeUlkcyAmJiBjYXRlZ29yeUlkcy5sZW5ndGggPiAwKSB7XG5cdFx0d2hlcmUuY2F0ZWdvcnlJZCA9IHsgaW46IGNhdGVnb3J5SWRzIH07XG5cdH1cblxuXHQvLyBCcmFuZCBmaWx0ZXJcblx0aWYgKGJyYW5kSWRzICYmIGJyYW5kSWRzLmxlbmd0aCA+IDApIHtcblx0XHR3aGVyZS5icmFuZElkID0geyBpbjogYnJhbmRJZHMgfTtcblx0fVxuXG5cdC8vIFN0b2NrIHN0YXR1cyBmaWx0ZXJcblx0aWYgKHN0b2NrU3RhdHVzKSB7XG5cdFx0c3dpdGNoIChzdG9ja1N0YXR1cykge1xuXHRcdFx0Y2FzZSBcImluX3N0b2NrXCI6XG5cdFx0XHRcdHdoZXJlLk9SID0gW3sgdHJhY2tTdG9jazogZmFsc2UgfSwgeyBzdG9jazogeyBndDogMTAgfSB9XTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibG93X3N0b2NrXCI6XG5cdFx0XHRcdHdoZXJlLnRyYWNrU3RvY2sgPSB0cnVlO1xuXHRcdFx0XHR3aGVyZS5zdG9jayA9IHsgZ3Q6IDAsIGx0ZTogMTAgfTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwib3V0X29mX3N0b2NrXCI6XG5cdFx0XHRcdHdoZXJlLnRyYWNrU3RvY2sgPSB0cnVlO1xuXHRcdFx0XHR3aGVyZS5zdG9jayA9IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8vIFByaWNlIGZpbHRlclxuXHRpZiAocHJpY2VNaW4gIT09IHVuZGVmaW5lZCB8fCBwcmljZU1heCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0d2hlcmUucHJpY2UgPSB7fTtcblx0XHRpZiAocHJpY2VNaW4gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0KHdoZXJlLnByaWNlIGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pLmd0ZSA9IHByaWNlTWluO1xuXHRcdH1cblx0XHRpZiAocHJpY2VNYXggIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0KHdoZXJlLnByaWNlIGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pLmx0ZSA9IHByaWNlTWF4O1xuXHRcdH1cblx0fVxuXG5cdC8vIFNvcnRpbmdcblx0Y29uc3Qgb3JkZXJCeTogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG5cdGlmIChzb3J0QnkpIHtcblx0XHRzd2l0Y2ggKHNvcnRCeSkge1xuXHRcdFx0Y2FzZSBcIm5hbWVfYXNjXCI6XG5cdFx0XHRjYXNlIFwibmFtZV9kZXNjXCI6XG5cdFx0XHRcdC8vIEZvciBuYW1lIHNvcnRpbmcsIHdlIG5lZWQgdG8gc29ydCBieSB0cmFuc2xhdGlvblxuXHRcdFx0XHQvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCAtIGlkZWFsbHkgd2UnZCBqb2luIGFuZCBzb3J0XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInByaWNlX2FzY1wiOlxuXHRcdFx0XHRvcmRlckJ5LnB1c2goeyBwcmljZTogXCJhc2NcIiB9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicHJpY2VfZGVzY1wiOlxuXHRcdFx0XHRvcmRlckJ5LnB1c2goeyBwcmljZTogXCJkZXNjXCIgfSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNyZWF0ZWRfYXNjXCI6XG5cdFx0XHRcdG9yZGVyQnkucHVzaCh7IGNyZWF0ZWRBdDogXCJhc2NcIiB9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiY3JlYXRlZF9kZXNjXCI6XG5cdFx0XHRcdG9yZGVyQnkucHVzaCh7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInN0b2NrX2FzY1wiOlxuXHRcdFx0XHRvcmRlckJ5LnB1c2goeyBzdG9jazogXCJhc2NcIiB9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwic3RvY2tfZGVzY1wiOlxuXHRcdFx0XHRvcmRlckJ5LnB1c2goeyBzdG9jazogXCJkZXNjXCIgfSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmIChvcmRlckJ5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdG9yZGVyQnkucHVzaCh7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSk7XG5cdH1cblxuXHRjb25zdCBbcHJvZHVjdHMsIHRvdGFsXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRkYi5wcm9kdWN0LmZpbmRNYW55KHtcblx0XHRcdHdoZXJlLFxuXHRcdFx0b3JkZXJCeSxcblx0XHRcdHNraXA6IChwYWdlIC0gMSkgKiBwYWdlU2l6ZSxcblx0XHRcdHRha2U6IHBhZ2VTaXplLFxuXHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRjYXRlZ29yeToge1xuXHRcdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uczoge1xuXHRcdFx0XHRcdFx0XHR3aGVyZTogeyBsb2NhbGVJZDogXCJlblwiIH0sXG5cdFx0XHRcdFx0XHRcdHRha2U6IDEsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJyYW5kOiB7XG5cdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdHdoZXJlOiB7IGxvY2FsZUlkOiBcImVuXCIgfSxcblx0XHRcdFx0XHRcdFx0dGFrZTogMSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdFx0d2hlcmU6IHsgbG9jYWxlSWQ6IFwiZW5cIiB9LFxuXHRcdFx0XHRcdHRha2U6IDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1lZGlhOiB7XG5cdFx0XHRcdFx0b3JkZXJCeTogeyBvcmRlcjogXCJhc2NcIiB9LFxuXHRcdFx0XHRcdHRha2U6IDEsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pLFxuXHRcdGRiLnByb2R1Y3QuY291bnQoeyB3aGVyZSB9KSxcblx0XSk7XG5cblx0cmV0dXJuIHtcblx0XHRwcm9kdWN0czogcHJvZHVjdHMubWFwKChwKSA9PiAoe1xuXHRcdFx0aWQ6IHAuaWQsXG5cdFx0XHRzbHVnOiBwLnNsdWcsXG5cdFx0XHRzdGF0dXM6IHAuc3RhdHVzLFxuXHRcdFx0cHJpY2U6IHAucHJpY2UsXG5cdFx0XHRjb21wYXJlQXRQcmljZTogcC5jb21wYXJlQXRQcmljZSxcblx0XHRcdHNrdTogcC5za3UsXG5cdFx0XHR0cmFja1N0b2NrOiBwLnRyYWNrU3RvY2ssXG5cdFx0XHRzdG9jazogcC5zdG9jayxcblx0XHRcdG5hbWU6IHAudHJhbnNsYXRpb25zWzBdPy5uYW1lID8/IFwiVW50aXRsZWRcIixcblx0XHRcdGRlc2NyaXB0aW9uOiBwLnRyYW5zbGF0aW9uc1swXT8uZGVzY3JpcHRpb24sXG5cdFx0XHRjYXRlZ29yeUlkOiBwLmNhdGVnb3J5SWQsXG5cdFx0XHRjYXRlZ29yeU5hbWU6IHAuY2F0ZWdvcnk/LnRyYW5zbGF0aW9uc1swXT8ubmFtZSA/PyBcIlVuY2F0ZWdvcml6ZWRcIixcblx0XHRcdGJyYW5kSWQ6IHAuYnJhbmRJZCxcblx0XHRcdGJyYW5kTmFtZTogcC5icmFuZD8udHJhbnNsYXRpb25zWzBdPy5uYW1lLFxuXHRcdFx0aW1hZ2VVcmw6IHAubWVkaWFbMF0/LnVybCxcblx0XHRcdGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXG5cdFx0XHR1cGRhdGVkQXQ6IHAudXBkYXRlZEF0LFxuXHRcdH0pKSxcblx0XHRwYWdpbmF0aW9uOiB7XG5cdFx0XHRwYWdlLFxuXHRcdFx0cGFnZVNpemUsXG5cdFx0XHR0b3RhbCxcblx0XHRcdHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKSxcblx0XHR9LFxuXHR9O1xufVxuXG4vLyBHZXQgc2luZ2xlIHByb2R1Y3QgYnkgSURcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCwgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHRydWUsXG5cdFx0XHRtZWRpYTogeyBvcmRlckJ5OiB7IG9yZGVyOiBcImFzY1wiIH0gfSxcblx0XHRcdHZhcmlhbnRzOiB7XG5cdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRvcHRpb25NZXRhOiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNoaXBwaW5nSW5mbzogdHJ1ZSxcblx0XHRcdGNvbGxlY3Rpb25Qcm9kdWN0czoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0Y29sbGVjdGlvbjoge1xuXHRcdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHR3aGVyZTogeyBsb2NhbGVJZDogXCJlblwiIH0sXG5cdFx0XHRcdFx0XHRcdFx0dGFrZTogMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFwcm9kdWN0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRjb25zdCBlbmdsaXNoVHJhbnNsYXRpb24gPSBwcm9kdWN0LnRyYW5zbGF0aW9ucy5maW5kKFxuXHRcdCh0OiB7IGxvY2FsZUlkOiBzdHJpbmcgfSkgPT4gdC5sb2NhbGVJZCA9PT0gXCJlblwiLFxuXHQpO1xuXG5cdHJldHVybiB7XG5cdFx0aWQ6IHByb2R1Y3QuaWQsXG5cdFx0c2x1ZzogcHJvZHVjdC5zbHVnLFxuXHRcdHN0YXR1czogcHJvZHVjdC5zdGF0dXMsXG5cdFx0Y2F0ZWdvcnlJZDogcHJvZHVjdC5jYXRlZ29yeUlkLFxuXHRcdGJyYW5kSWQ6IHByb2R1Y3QuYnJhbmRJZCxcblx0XHRwcmljZTogcHJvZHVjdC5wcmljZSxcblx0XHRjb21wYXJlQXRQcmljZTogcHJvZHVjdC5jb21wYXJlQXRQcmljZSxcblx0XHRjb3N0UGVySXRlbTogcHJvZHVjdC5jb3N0UGVySXRlbSxcblx0XHRza3U6IHByb2R1Y3Quc2t1LFxuXHRcdHRyYWNrU3RvY2s6IHByb2R1Y3QudHJhY2tTdG9jayxcblx0XHRzdG9jazogcHJvZHVjdC5zdG9jayxcblx0XHRsb3dTdG9ja1RocmVzaG9sZDogcHJvZHVjdC5sb3dTdG9ja1RocmVzaG9sZCxcblx0XHRwdXJjaGFzZVR5cGU6IHByb2R1Y3QucHVyY2hhc2VUeXBlLFxuXHRcdHN1YnNjcmlwdGlvbkRpc2NvdW50UGVyY2VudDogcHJvZHVjdC5zdWJzY3JpcHRpb25EaXNjb3VudFBlcmNlbnQsXG5cdFx0c3Vic2NyaXB0aW9uSW50ZXJ2YWxzOiBwcm9kdWN0LnN1YnNjcmlwdGlvbkludGVydmFscyxcblx0XHRwcmVPcmRlclJlbGVhc2VEYXRlOiBwcm9kdWN0LnByZU9yZGVyUmVsZWFzZURhdGUsXG5cdFx0cHJlT3JkZXJEZXBvc2l0UGVyY2VudDogcHJvZHVjdC5wcmVPcmRlckRlcG9zaXRQZXJjZW50LFxuXHRcdHVuaXRQcmljZUFtb3VudDogcHJvZHVjdC51bml0UHJpY2VBbW91bnQsXG5cdFx0dW5pdFByaWNlTWVhc3VyZW1lbnQ6IHByb2R1Y3QudW5pdFByaWNlTWVhc3VyZW1lbnQsXG5cdFx0dW5pdFByaWNlQmFzZUFtb3VudDogcHJvZHVjdC51bml0UHJpY2VCYXNlQW1vdW50LFxuXHRcdHVuaXRQcmljZUJhc2VNZWFzdXJlbWVudDogcHJvZHVjdC51bml0UHJpY2VCYXNlTWVhc3VyZW1lbnQsXG5cdFx0bmFtZTogZW5nbGlzaFRyYW5zbGF0aW9uPy5uYW1lID8/IFwiXCIsXG5cdFx0ZGVzY3JpcHRpb246IGVuZ2xpc2hUcmFuc2xhdGlvbj8uZGVzY3JpcHRpb24gPz8gXCJcIixcblx0XHRtZWRpYTogcHJvZHVjdC5tZWRpYS5tYXAoXG5cdFx0XHQobToge1xuXHRcdFx0XHRpZDogc3RyaW5nO1xuXHRcdFx0XHR1cmw6IHN0cmluZztcblx0XHRcdFx0bWVkaWFUeXBlOiBzdHJpbmc7XG5cdFx0XHRcdGFsdFRleHQ6IHN0cmluZyB8IG51bGw7XG5cdFx0XHRcdG9yZGVyOiBudW1iZXI7XG5cdFx0XHR9KSA9PiAoe1xuXHRcdFx0XHRpZDogbS5pZCxcblx0XHRcdFx0dXJsOiBtLnVybCxcblx0XHRcdFx0bWVkaWFUeXBlOiBtLm1lZGlhVHlwZSxcblx0XHRcdFx0YWx0VGV4dDogbS5hbHRUZXh0LFxuXHRcdFx0XHRvcmRlcjogbS5vcmRlcixcblx0XHRcdH0pLFxuXHRcdCksXG5cdFx0dmFyaWFudHM6IHByb2R1Y3QudmFyaWFudHMubWFwKFxuXHRcdFx0KHY6IHtcblx0XHRcdFx0aWQ6IHN0cmluZztcblx0XHRcdFx0c2t1OiBzdHJpbmcgfCBudWxsO1xuXHRcdFx0XHRwcmljZTogdW5rbm93bjtcblx0XHRcdFx0cHJpY2VBZGp1c3RtZW50OiB1bmtub3duO1xuXHRcdFx0XHRzdG9jazogbnVtYmVyIHwgbnVsbDtcblx0XHRcdFx0aW1hZ2VVcmw6IHN0cmluZyB8IG51bGw7XG5cdFx0XHRcdG9wdGlvbnM6IHVua25vd247XG5cdFx0XHRcdG9wdGlvbk1ldGE6IHVua25vd25bXTtcblx0XHRcdH0pID0+ICh7XG5cdFx0XHRcdGlkOiB2LmlkLFxuXHRcdFx0XHRza3U6IHYuc2t1LFxuXHRcdFx0XHRwcmljZTogdi5wcmljZSxcblx0XHRcdFx0cHJpY2VBZGp1c3RtZW50OiB2LnByaWNlQWRqdXN0bWVudCxcblx0XHRcdFx0c3RvY2s6IHYuc3RvY2ssXG5cdFx0XHRcdGltYWdlVXJsOiB2LmltYWdlVXJsLFxuXHRcdFx0XHRvcHRpb25zOiB2Lm9wdGlvbnMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPixcblx0XHRcdFx0b3B0aW9uTWV0YTogdi5vcHRpb25NZXRhLFxuXHRcdFx0fSksXG5cdFx0KSxcblx0XHRzaGlwcGluZ0luZm86IHByb2R1Y3Quc2hpcHBpbmdJbmZvXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHRwYWNrYWdlVHlwZTogcHJvZHVjdC5zaGlwcGluZ0luZm8ucGFja2FnZVR5cGUsXG5cdFx0XHRcdFx0cGFja2FnaW5nV2VpZ2h0S2c6IHByb2R1Y3Quc2hpcHBpbmdJbmZvLnBhY2thZ2luZ1dlaWdodEtnLFxuXHRcdFx0XHRcdHBhY2thZ2luZ0xlbmd0aENtOiBwcm9kdWN0LnNoaXBwaW5nSW5mby5wYWNrYWdpbmdMZW5ndGhDbSxcblx0XHRcdFx0XHRwYWNrYWdpbmdXaWR0aENtOiBwcm9kdWN0LnNoaXBwaW5nSW5mby5wYWNrYWdpbmdXaWR0aENtLFxuXHRcdFx0XHRcdHBhY2thZ2luZ0hlaWdodENtOiBwcm9kdWN0LnNoaXBwaW5nSW5mby5wYWNrYWdpbmdIZWlnaHRDbSxcblx0XHRcdFx0XHRwcm9kdWN0V2VpZ2h0S2c6IHByb2R1Y3Quc2hpcHBpbmdJbmZvLnByb2R1Y3RXZWlnaHRLZyxcblx0XHRcdFx0XHRwcm9kdWN0TGVuZ3RoQ206IHByb2R1Y3Quc2hpcHBpbmdJbmZvLnByb2R1Y3RMZW5ndGhDbSxcblx0XHRcdFx0XHRwcm9kdWN0V2lkdGhDbTogcHJvZHVjdC5zaGlwcGluZ0luZm8ucHJvZHVjdFdpZHRoQ20sXG5cdFx0XHRcdFx0cHJvZHVjdEhlaWdodENtOiBwcm9kdWN0LnNoaXBwaW5nSW5mby5wcm9kdWN0SGVpZ2h0Q20sXG5cdFx0XHRcdH1cblx0XHRcdDogbnVsbCxcblx0XHRzZW86IHtcblx0XHRcdG1ldGFUaXRsZTogZW5nbGlzaFRyYW5zbGF0aW9uPy5tZXRhVGl0bGUsXG5cdFx0XHRtZXRhRGVzY3JpcHRpb246IGVuZ2xpc2hUcmFuc2xhdGlvbj8ubWV0YURlc2NyaXB0aW9uLFxuXHRcdFx0c2x1ZzogcHJvZHVjdC5zbHVnLFxuXHRcdH0sXG5cdFx0Y29sbGVjdGlvbklkczogcHJvZHVjdC5jb2xsZWN0aW9uUHJvZHVjdHMubWFwKFxuXHRcdFx0KGM6IHsgY29sbGVjdGlvbklkOiBzdHJpbmcgfSkgPT4gYy5jb2xsZWN0aW9uSWQsXG5cdFx0KSxcblx0fTtcbn1cblxuLy8gQ3JlYXRlIHByb2R1Y3RcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0KGlucHV0OiBDcmVhdGVQcm9kdWN0SW5wdXQpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVByb2R1Y3RNYW5hZ2VBY2Nlc3MoKTtcblxuXHRjb25zdCB2YWxpZGF0ZWRJbnB1dCA9IENyZWF0ZVByb2R1Y3RTY2hlbWEucGFyc2UoaW5wdXQpO1xuXG5cdGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBwcm9kdWN0XG5cdFx0Y29uc3QgbmV3UHJvZHVjdCA9IGF3YWl0IHR4LnByb2R1Y3QuY3JlYXRlKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dGVuYW50SWQsXG5cdFx0XHRcdHNsdWc6IHZhbGlkYXRlZElucHV0LnNsdWcsXG5cdFx0XHRcdHN0YXR1czogdmFsaWRhdGVkSW5wdXQuc3RhdHVzLFxuXHRcdFx0XHRjYXRlZ29yeUlkOiB2YWxpZGF0ZWRJbnB1dC5jYXRlZ29yeUlkLFxuXHRcdFx0XHRicmFuZElkOiB2YWxpZGF0ZWRJbnB1dC5icmFuZElkIHx8IG51bGwsXG5cdFx0XHRcdHByaWNlOiB2YWxpZGF0ZWRJbnB1dC5wcmljZSxcblx0XHRcdFx0Y29tcGFyZUF0UHJpY2U6IHZhbGlkYXRlZElucHV0LmNvbXBhcmVBdFByaWNlLFxuXHRcdFx0XHRjb3N0UGVySXRlbTogdmFsaWRhdGVkSW5wdXQuY29zdFBlckl0ZW0sXG5cdFx0XHRcdHNrdTogdmFsaWRhdGVkSW5wdXQuc2t1LFxuXHRcdFx0XHR0cmFja1N0b2NrOiB2YWxpZGF0ZWRJbnB1dC50cmFja1N0b2NrLFxuXHRcdFx0XHRzdG9jazogdmFsaWRhdGVkSW5wdXQuc3RvY2ssXG5cdFx0XHRcdGxvd1N0b2NrVGhyZXNob2xkOiB2YWxpZGF0ZWRJbnB1dC5sb3dTdG9ja1RocmVzaG9sZCxcblx0XHRcdFx0Ly8gUHVyY2hhc2Ugb3B0aW9uc1xuXHRcdFx0XHRwdXJjaGFzZVR5cGU6IHZhbGlkYXRlZElucHV0LnB1cmNoYXNlT3B0aW9ucz8udHlwZSA/PyBcIk9ORV9USU1FXCIsXG5cdFx0XHRcdHN1YnNjcmlwdGlvbkRpc2NvdW50UGVyY2VudDpcblx0XHRcdFx0XHR2YWxpZGF0ZWRJbnB1dC5wdXJjaGFzZU9wdGlvbnM/LnN1YnNjcmlwdGlvbkRpc2NvdW50LFxuXHRcdFx0XHRzdWJzY3JpcHRpb25JbnRlcnZhbHM6XG5cdFx0XHRcdFx0dmFsaWRhdGVkSW5wdXQucHVyY2hhc2VPcHRpb25zPy5zdWJzY3JpcHRpb25JbnRlcnZhbHMgPz8gW10sXG5cdFx0XHRcdHByZU9yZGVyUmVsZWFzZURhdGU6XG5cdFx0XHRcdFx0dmFsaWRhdGVkSW5wdXQucHVyY2hhc2VPcHRpb25zPy5wcmVPcmRlclJlbGVhc2VEYXRlLFxuXHRcdFx0XHRwcmVPcmRlckRlcG9zaXRQZXJjZW50OlxuXHRcdFx0XHRcdHZhbGlkYXRlZElucHV0LnB1cmNoYXNlT3B0aW9ucz8ucHJlT3JkZXJEZXBvc2l0UGVyY2VudCxcblx0XHRcdFx0Ly8gVW5pdCBwcmljaW5nXG5cdFx0XHRcdHVuaXRQcmljZUFtb3VudDogdmFsaWRhdGVkSW5wdXQudW5pdFByaWNlPy51bml0UHJpY2VBbW91bnQsXG5cdFx0XHRcdHVuaXRQcmljZU1lYXN1cmVtZW50OiB2YWxpZGF0ZWRJbnB1dC51bml0UHJpY2U/LnVuaXRQcmljZU1lYXN1cmVtZW50LFxuXHRcdFx0XHR1bml0UHJpY2VCYXNlQW1vdW50OiB2YWxpZGF0ZWRJbnB1dC51bml0UHJpY2U/LnVuaXRQcmljZUJhc2VBbW91bnQsXG5cdFx0XHRcdHVuaXRQcmljZUJhc2VNZWFzdXJlbWVudDpcblx0XHRcdFx0XHR2YWxpZGF0ZWRJbnB1dC51bml0UHJpY2U/LnVuaXRQcmljZUJhc2VNZWFzdXJlbWVudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHQvLyBDcmVhdGUgdHJhbnNsYXRpb24gKEVuZ2xpc2ggYnkgZGVmYXVsdClcblx0XHRhd2FpdCB0eC5wcm9kdWN0VHJhbnNsYXRpb24uY3JlYXRlKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0cHJvZHVjdElkOiBuZXdQcm9kdWN0LmlkLFxuXHRcdFx0XHRsb2NhbGVJZDogXCJlblwiLFxuXHRcdFx0XHRuYW1lOiB2YWxpZGF0ZWRJbnB1dC5uYW1lLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogdmFsaWRhdGVkSW5wdXQuZGVzY3JpcHRpb24sXG5cdFx0XHRcdG1ldGFUaXRsZTogdmFsaWRhdGVkSW5wdXQuc2VvPy5tZXRhVGl0bGUsXG5cdFx0XHRcdG1ldGFEZXNjcmlwdGlvbjogdmFsaWRhdGVkSW5wdXQuc2VvPy5tZXRhRGVzY3JpcHRpb24sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Ly8gQ3JlYXRlIG1lZGlhXG5cdFx0aWYgKHZhbGlkYXRlZElucHV0Lm1lZGlhICYmIHZhbGlkYXRlZElucHV0Lm1lZGlhLmxlbmd0aCA+IDApIHtcblx0XHRcdGF3YWl0IHR4LnByb2R1Y3RNZWRpYS5jcmVhdGVNYW55KHtcblx0XHRcdFx0ZGF0YTogdmFsaWRhdGVkSW5wdXQubWVkaWEubWFwKChtLCBpbmRleCkgPT4gKHtcblx0XHRcdFx0XHRwcm9kdWN0SWQ6IG5ld1Byb2R1Y3QuaWQsXG5cdFx0XHRcdFx0dXJsOiBtLnVybCxcblx0XHRcdFx0XHRtZWRpYVR5cGU6IG0ubWVkaWFUeXBlLFxuXHRcdFx0XHRcdGFsdFRleHQ6IG0uYWx0VGV4dCxcblx0XHRcdFx0XHRvcmRlcjogbS5vcmRlciA/PyBpbmRleCxcblx0XHRcdFx0fSkpLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIHZhcmlhbnRzXG5cdFx0aWYgKHZhbGlkYXRlZElucHV0LnZhcmlhbnRzICYmIHZhbGlkYXRlZElucHV0LnZhcmlhbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiB2YWxpZGF0ZWRJbnB1dC52YXJpYW50cykge1xuXHRcdFx0XHRjb25zdCBjcmVhdGVkVmFyaWFudCA9IGF3YWl0IHR4LnByb2R1Y3RWYXJpYW50LmNyZWF0ZSh7XG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0cHJvZHVjdElkOiBuZXdQcm9kdWN0LmlkLFxuXHRcdFx0XHRcdFx0c2t1OiB2YXJpYW50LnNrdSxcblx0XHRcdFx0XHRcdHByaWNlOiB2YXJpYW50LnByaWNlLFxuXHRcdFx0XHRcdFx0cHJpY2VBZGp1c3RtZW50OiB2YXJpYW50LnByaWNlQWRqdXN0bWVudCA/PyAwLFxuXHRcdFx0XHRcdFx0c3RvY2s6IHZhcmlhbnQuc3RvY2ssXG5cdFx0XHRcdFx0XHRpbWFnZVVybDogdmFyaWFudC5pbWFnZVVybCxcblx0XHRcdFx0XHRcdG9wdGlvbnM6IHZhcmlhbnQub3B0aW9ucyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBDcmVhdGUgdmFyaWFudCBvcHRpb24gbWV0YSAoZm9yIGNvbG9ycylcblx0XHRcdFx0aWYgKHZhcmlhbnQub3B0aW9uTWV0YSAmJiB2YXJpYW50Lm9wdGlvbk1ldGEubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGF3YWl0IHR4LnZhcmlhbnRPcHRpb25NZXRhLmNyZWF0ZU1hbnkoe1xuXHRcdFx0XHRcdFx0ZGF0YTogdmFyaWFudC5vcHRpb25NZXRhLm1hcCgobWV0YSkgPT4gKHtcblx0XHRcdFx0XHRcdFx0dmFyaWFudElkOiBjcmVhdGVkVmFyaWFudC5pZCxcblx0XHRcdFx0XHRcdFx0b3B0aW9uTmFtZTogbWV0YS5vcHRpb25OYW1lLFxuXHRcdFx0XHRcdFx0XHRoZXhDb2xvcjogbWV0YS5oZXhDb2xvcixcblx0XHRcdFx0XHRcdH0pKSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENyZWF0ZSBzaGlwcGluZyBpbmZvXG5cdFx0aWYgKHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mbykge1xuXHRcdFx0YXdhaXQgdHgucHJvZHVjdFNoaXBwaW5nSW5mby5jcmVhdGUoe1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0cHJvZHVjdElkOiBuZXdQcm9kdWN0LmlkLFxuXHRcdFx0XHRcdHBhY2thZ2VUeXBlOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZVR5cGUsXG5cdFx0XHRcdFx0cGFja2FnaW5nV2VpZ2h0S2c6IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby53ZWlnaHQsXG5cdFx0XHRcdFx0cGFja2FnaW5nTGVuZ3RoQ206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wYWNrYWdlTGVuZ3RoLFxuXHRcdFx0XHRcdHBhY2thZ2luZ1dpZHRoQ206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wYWNrYWdlV2lkdGgsXG5cdFx0XHRcdFx0cGFja2FnaW5nSGVpZ2h0Q206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wYWNrYWdlSGVpZ2h0LFxuXHRcdFx0XHRcdHByb2R1Y3RXZWlnaHRLZzogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnByb2R1Y3RXZWlnaHQsXG5cdFx0XHRcdFx0cHJvZHVjdExlbmd0aENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucHJvZHVjdExlbmd0aCxcblx0XHRcdFx0XHRwcm9kdWN0V2lkdGhDbTogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnByb2R1Y3RXaWR0aCxcblx0XHRcdFx0XHRwcm9kdWN0SGVpZ2h0Q206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wcm9kdWN0SGVpZ2h0LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gTGluayB0byBjb2xsZWN0aW9uc1xuXHRcdGlmIChcblx0XHRcdHZhbGlkYXRlZElucHV0LmNvbGxlY3Rpb25JZHMgJiZcblx0XHRcdHZhbGlkYXRlZElucHV0LmNvbGxlY3Rpb25JZHMubGVuZ3RoID4gMFxuXHRcdCkge1xuXHRcdFx0YXdhaXQgdHguY29sbGVjdGlvblByb2R1Y3QuY3JlYXRlTWFueSh7XG5cdFx0XHRcdGRhdGE6IHZhbGlkYXRlZElucHV0LmNvbGxlY3Rpb25JZHMubWFwKChjb2xsZWN0aW9uSWQpID0+ICh7XG5cdFx0XHRcdFx0cHJvZHVjdElkOiBuZXdQcm9kdWN0LmlkLFxuXHRcdFx0XHRcdGNvbGxlY3Rpb25JZCxcblx0XHRcdFx0fSkpLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ld1Byb2R1Y3Q7XG5cdH0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2R1Y3RzXCIpO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByb2R1Y3RJZDogcHJvZHVjdC5pZCB9O1xufVxuXG4vLyBVcGRhdGUgcHJvZHVjdFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3QoaW5wdXQ6IFVwZGF0ZVByb2R1Y3RJbnB1dCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlUHJvZHVjdE1hbmFnZUFjY2VzcygpO1xuXG5cdGNvbnN0IHZhbGlkYXRlZElucHV0ID0gVXBkYXRlUHJvZHVjdFNjaGVtYS5wYXJzZShpbnB1dCk7XG5cblx0Ly8gVmVyaWZ5IHByb2R1Y3QgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgZXhpc3RpbmdQcm9kdWN0ID0gYXdhaXQgZGIucHJvZHVjdC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkOiB2YWxpZGF0ZWRJbnB1dC5pZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cdGlmICghZXhpc3RpbmdQcm9kdWN0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XG5cdFx0Ly8gVXBkYXRlIHRoZSBtYWluIHByb2R1Y3Rcblx0XHRhd2FpdCB0eC5wcm9kdWN0LnVwZGF0ZSh7XG5cdFx0XHR3aGVyZTogeyBpZDogdmFsaWRhdGVkSW5wdXQuaWQgfSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0Li4uKHZhbGlkYXRlZElucHV0LnNsdWcgJiYgeyBzbHVnOiB2YWxpZGF0ZWRJbnB1dC5zbHVnIH0pLFxuXHRcdFx0XHQuLi4odmFsaWRhdGVkSW5wdXQuc3RhdHVzICYmIHsgc3RhdHVzOiB2YWxpZGF0ZWRJbnB1dC5zdGF0dXMgfSksXG5cdFx0XHRcdC4uLih2YWxpZGF0ZWRJbnB1dC5jYXRlZ29yeUlkICYmIHtcblx0XHRcdFx0XHRjYXRlZ29yeUlkOiB2YWxpZGF0ZWRJbnB1dC5jYXRlZ29yeUlkLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0YnJhbmRJZDogdmFsaWRhdGVkSW5wdXQuYnJhbmRJZCB8fCBudWxsLFxuXHRcdFx0XHQuLi4odmFsaWRhdGVkSW5wdXQucHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7XG5cdFx0XHRcdFx0cHJpY2U6IHZhbGlkYXRlZElucHV0LnByaWNlLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0Y29tcGFyZUF0UHJpY2U6IHZhbGlkYXRlZElucHV0LmNvbXBhcmVBdFByaWNlLFxuXHRcdFx0XHRjb3N0UGVySXRlbTogdmFsaWRhdGVkSW5wdXQuY29zdFBlckl0ZW0sXG5cdFx0XHRcdHNrdTogdmFsaWRhdGVkSW5wdXQuc2t1LFxuXHRcdFx0XHR0cmFja1N0b2NrOiB2YWxpZGF0ZWRJbnB1dC50cmFja1N0b2NrLFxuXHRcdFx0XHRzdG9jazogdmFsaWRhdGVkSW5wdXQuc3RvY2ssXG5cdFx0XHRcdGxvd1N0b2NrVGhyZXNob2xkOiB2YWxpZGF0ZWRJbnB1dC5sb3dTdG9ja1RocmVzaG9sZCxcblx0XHRcdFx0Ly8gUHVyY2hhc2Ugb3B0aW9uc1xuXHRcdFx0XHQuLi4odmFsaWRhdGVkSW5wdXQucHVyY2hhc2VPcHRpb25zICYmIHtcblx0XHRcdFx0XHRwdXJjaGFzZVR5cGU6IHZhbGlkYXRlZElucHV0LnB1cmNoYXNlT3B0aW9ucy50eXBlLFxuXHRcdFx0XHRcdHN1YnNjcmlwdGlvbkRpc2NvdW50UGVyY2VudDpcblx0XHRcdFx0XHRcdHZhbGlkYXRlZElucHV0LnB1cmNoYXNlT3B0aW9ucy5zdWJzY3JpcHRpb25EaXNjb3VudCxcblx0XHRcdFx0XHRzdWJzY3JpcHRpb25JbnRlcnZhbHM6XG5cdFx0XHRcdFx0XHR2YWxpZGF0ZWRJbnB1dC5wdXJjaGFzZU9wdGlvbnMuc3Vic2NyaXB0aW9uSW50ZXJ2YWxzID8/IFtdLFxuXHRcdFx0XHRcdHByZU9yZGVyUmVsZWFzZURhdGU6XG5cdFx0XHRcdFx0XHR2YWxpZGF0ZWRJbnB1dC5wdXJjaGFzZU9wdGlvbnMucHJlT3JkZXJSZWxlYXNlRGF0ZSxcblx0XHRcdFx0XHRwcmVPcmRlckRlcG9zaXRQZXJjZW50OlxuXHRcdFx0XHRcdFx0dmFsaWRhdGVkSW5wdXQucHVyY2hhc2VPcHRpb25zLnByZU9yZGVyRGVwb3NpdFBlcmNlbnQsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQvLyBVbml0IHByaWNpbmdcblx0XHRcdFx0Li4uKHZhbGlkYXRlZElucHV0LnVuaXRQcmljZSAmJiB7XG5cdFx0XHRcdFx0dW5pdFByaWNlQW1vdW50OiB2YWxpZGF0ZWRJbnB1dC51bml0UHJpY2UudW5pdFByaWNlQW1vdW50LFxuXHRcdFx0XHRcdHVuaXRQcmljZU1lYXN1cmVtZW50OiB2YWxpZGF0ZWRJbnB1dC51bml0UHJpY2UudW5pdFByaWNlTWVhc3VyZW1lbnQsXG5cdFx0XHRcdFx0dW5pdFByaWNlQmFzZUFtb3VudDogdmFsaWRhdGVkSW5wdXQudW5pdFByaWNlLnVuaXRQcmljZUJhc2VBbW91bnQsXG5cdFx0XHRcdFx0dW5pdFByaWNlQmFzZU1lYXN1cmVtZW50OlxuXHRcdFx0XHRcdFx0dmFsaWRhdGVkSW5wdXQudW5pdFByaWNlLnVuaXRQcmljZUJhc2VNZWFzdXJlbWVudCxcblx0XHRcdFx0fSksXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Ly8gVXBkYXRlIHRyYW5zbGF0aW9uXG5cdFx0aWYgKFxuXHRcdFx0dmFsaWRhdGVkSW5wdXQubmFtZSB8fFxuXHRcdFx0dmFsaWRhdGVkSW5wdXQuZGVzY3JpcHRpb24gfHxcblx0XHRcdHZhbGlkYXRlZElucHV0LnNlb1xuXHRcdCkge1xuXHRcdFx0YXdhaXQgdHgucHJvZHVjdFRyYW5zbGF0aW9uLnVwc2VydCh7XG5cdFx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdElkX2xvY2FsZUlkOiB7XG5cdFx0XHRcdFx0XHRwcm9kdWN0SWQ6IHZhbGlkYXRlZElucHV0LmlkLFxuXHRcdFx0XHRcdFx0bG9jYWxlSWQ6IFwiZW5cIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cGRhdGU6IHtcblx0XHRcdFx0XHQuLi4odmFsaWRhdGVkSW5wdXQubmFtZSAmJiB7IG5hbWU6IHZhbGlkYXRlZElucHV0Lm5hbWUgfSksXG5cdFx0XHRcdFx0Li4uKHZhbGlkYXRlZElucHV0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYge1xuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IHZhbGlkYXRlZElucHV0LmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdC4uLih2YWxpZGF0ZWRJbnB1dC5zZW8/Lm1ldGFUaXRsZSAhPT0gdW5kZWZpbmVkICYmIHtcblx0XHRcdFx0XHRcdG1ldGFUaXRsZTogdmFsaWRhdGVkSW5wdXQuc2VvLm1ldGFUaXRsZSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHQuLi4odmFsaWRhdGVkSW5wdXQuc2VvPy5tZXRhRGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCAmJiB7XG5cdFx0XHRcdFx0XHRtZXRhRGVzY3JpcHRpb246IHZhbGlkYXRlZElucHV0LnNlby5tZXRhRGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNyZWF0ZToge1xuXHRcdFx0XHRcdHByb2R1Y3RJZDogdmFsaWRhdGVkSW5wdXQuaWQsXG5cdFx0XHRcdFx0bG9jYWxlSWQ6IFwiZW5cIixcblx0XHRcdFx0XHRuYW1lOiB2YWxpZGF0ZWRJbnB1dC5uYW1lID8/IFwiVW50aXRsZWRcIixcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogdmFsaWRhdGVkSW5wdXQuZGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0bWV0YVRpdGxlOiB2YWxpZGF0ZWRJbnB1dC5zZW8/Lm1ldGFUaXRsZSxcblx0XHRcdFx0XHRtZXRhRGVzY3JpcHRpb246IHZhbGlkYXRlZElucHV0LnNlbz8ubWV0YURlc2NyaXB0aW9uLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gVXBkYXRlIG1lZGlhIChyZXBsYWNlIGFsbClcblx0XHRpZiAodmFsaWRhdGVkSW5wdXQubWVkaWEpIHtcblx0XHRcdGF3YWl0IHR4LnByb2R1Y3RNZWRpYS5kZWxldGVNYW55KHtcblx0XHRcdFx0d2hlcmU6IHsgcHJvZHVjdElkOiB2YWxpZGF0ZWRJbnB1dC5pZCB9LFxuXHRcdFx0fSk7XG5cblx0XHRcdGlmICh2YWxpZGF0ZWRJbnB1dC5tZWRpYS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGF3YWl0IHR4LnByb2R1Y3RNZWRpYS5jcmVhdGVNYW55KHtcblx0XHRcdFx0XHRkYXRhOiB2YWxpZGF0ZWRJbnB1dC5tZWRpYS5tYXAoKG0sIGluZGV4KSA9PiAoe1xuXHRcdFx0XHRcdFx0cHJvZHVjdElkOiB2YWxpZGF0ZWRJbnB1dC5pZCxcblx0XHRcdFx0XHRcdHVybDogbS51cmwsXG5cdFx0XHRcdFx0XHRtZWRpYVR5cGU6IG0ubWVkaWFUeXBlLFxuXHRcdFx0XHRcdFx0YWx0VGV4dDogbS5hbHRUZXh0LFxuXHRcdFx0XHRcdFx0b3JkZXI6IG0ub3JkZXIgPz8gaW5kZXgsXG5cdFx0XHRcdFx0fSkpLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBVcGRhdGUgdmFyaWFudHMgKHJlcGxhY2UgYWxsKVxuXHRcdGlmICh2YWxpZGF0ZWRJbnB1dC52YXJpYW50cykge1xuXHRcdFx0Ly8gRGVsZXRlIGV4aXN0aW5nIHZhcmlhbnRzIGFuZCB0aGVpciBtZXRhXG5cdFx0XHRjb25zdCBleGlzdGluZ1ZhcmlhbnRzID0gYXdhaXQgdHgucHJvZHVjdFZhcmlhbnQuZmluZE1hbnkoe1xuXHRcdFx0XHR3aGVyZTogeyBwcm9kdWN0SWQ6IHZhbGlkYXRlZElucHV0LmlkIH0sXG5cdFx0XHRcdHNlbGVjdDogeyBpZDogdHJ1ZSB9LFxuXHRcdFx0fSk7XG5cblx0XHRcdGZvciAoY29uc3QgdiBvZiBleGlzdGluZ1ZhcmlhbnRzKSB7XG5cdFx0XHRcdGF3YWl0IHR4LnZhcmlhbnRPcHRpb25NZXRhLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB2YXJpYW50SWQ6IHYuaWQgfSB9KTtcblx0XHRcdH1cblxuXHRcdFx0YXdhaXQgdHgucHJvZHVjdFZhcmlhbnQuZGVsZXRlTWFueSh7XG5cdFx0XHRcdHdoZXJlOiB7IHByb2R1Y3RJZDogdmFsaWRhdGVkSW5wdXQuaWQgfSxcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDcmVhdGUgbmV3IHZhcmlhbnRzXG5cdFx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFsaWRhdGVkSW5wdXQudmFyaWFudHMpIHtcblx0XHRcdFx0Y29uc3QgY3JlYXRlZFZhcmlhbnQgPSBhd2FpdCB0eC5wcm9kdWN0VmFyaWFudC5jcmVhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHByb2R1Y3RJZDogdmFsaWRhdGVkSW5wdXQuaWQsXG5cdFx0XHRcdFx0XHRza3U6IHZhcmlhbnQuc2t1LFxuXHRcdFx0XHRcdFx0cHJpY2U6IHZhcmlhbnQucHJpY2UsXG5cdFx0XHRcdFx0XHRwcmljZUFkanVzdG1lbnQ6IHZhcmlhbnQucHJpY2VBZGp1c3RtZW50ID8/IDAsXG5cdFx0XHRcdFx0XHRzdG9jazogdmFyaWFudC5zdG9jayxcblx0XHRcdFx0XHRcdGltYWdlVXJsOiB2YXJpYW50LmltYWdlVXJsLFxuXHRcdFx0XHRcdFx0b3B0aW9uczogdmFyaWFudC5vcHRpb25zLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmICh2YXJpYW50Lm9wdGlvbk1ldGEgJiYgdmFyaWFudC5vcHRpb25NZXRhLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRhd2FpdCB0eC52YXJpYW50T3B0aW9uTWV0YS5jcmVhdGVNYW55KHtcblx0XHRcdFx0XHRcdGRhdGE6IHZhcmlhbnQub3B0aW9uTWV0YS5tYXAoKG1ldGEpID0+ICh7XG5cdFx0XHRcdFx0XHRcdHZhcmlhbnRJZDogY3JlYXRlZFZhcmlhbnQuaWQsXG5cdFx0XHRcdFx0XHRcdG9wdGlvbk5hbWU6IG1ldGEub3B0aW9uTmFtZSxcblx0XHRcdFx0XHRcdFx0aGV4Q29sb3I6IG1ldGEuaGV4Q29sb3IsXG5cdFx0XHRcdFx0XHR9KSksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBVcGRhdGUgc2hpcHBpbmcgaW5mb1xuXHRcdGlmICh2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8pIHtcblx0XHRcdGF3YWl0IHR4LnByb2R1Y3RTaGlwcGluZ0luZm8udXBzZXJ0KHtcblx0XHRcdFx0d2hlcmU6IHsgcHJvZHVjdElkOiB2YWxpZGF0ZWRJbnB1dC5pZCB9LFxuXHRcdFx0XHR1cGRhdGU6IHtcblx0XHRcdFx0XHRwYWNrYWdlVHlwZTogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnBhY2thZ2VUeXBlLFxuXHRcdFx0XHRcdHBhY2thZ2luZ1dlaWdodEtnOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ud2VpZ2h0LFxuXHRcdFx0XHRcdHBhY2thZ2luZ0xlbmd0aENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZUxlbmd0aCxcblx0XHRcdFx0XHRwYWNrYWdpbmdXaWR0aENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZVdpZHRoLFxuXHRcdFx0XHRcdHBhY2thZ2luZ0hlaWdodENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZUhlaWdodCxcblx0XHRcdFx0XHRwcm9kdWN0V2VpZ2h0S2c6IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wcm9kdWN0V2VpZ2h0LFxuXHRcdFx0XHRcdHByb2R1Y3RMZW5ndGhDbTogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnByb2R1Y3RMZW5ndGgsXG5cdFx0XHRcdFx0cHJvZHVjdFdpZHRoQ206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wcm9kdWN0V2lkdGgsXG5cdFx0XHRcdFx0cHJvZHVjdEhlaWdodENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucHJvZHVjdEhlaWdodCxcblx0XHRcdFx0fSxcblx0XHRcdFx0Y3JlYXRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdElkOiB2YWxpZGF0ZWRJbnB1dC5pZCxcblx0XHRcdFx0XHRwYWNrYWdlVHlwZTogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnBhY2thZ2VUeXBlLFxuXHRcdFx0XHRcdHBhY2thZ2luZ1dlaWdodEtnOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ud2VpZ2h0LFxuXHRcdFx0XHRcdHBhY2thZ2luZ0xlbmd0aENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZUxlbmd0aCxcblx0XHRcdFx0XHRwYWNrYWdpbmdXaWR0aENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZVdpZHRoLFxuXHRcdFx0XHRcdHBhY2thZ2luZ0hlaWdodENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZUhlaWdodCxcblx0XHRcdFx0XHRwcm9kdWN0V2VpZ2h0S2c6IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wcm9kdWN0V2VpZ2h0LFxuXHRcdFx0XHRcdHByb2R1Y3RMZW5ndGhDbTogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnByb2R1Y3RMZW5ndGgsXG5cdFx0XHRcdFx0cHJvZHVjdFdpZHRoQ206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wcm9kdWN0V2lkdGgsXG5cdFx0XHRcdFx0cHJvZHVjdEhlaWdodENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucHJvZHVjdEhlaWdodCxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIFVwZGF0ZSBjb2xsZWN0aW9uIGxpbmtzXG5cdFx0aWYgKHZhbGlkYXRlZElucHV0LmNvbGxlY3Rpb25JZHMpIHtcblx0XHRcdGF3YWl0IHR4LmNvbGxlY3Rpb25Qcm9kdWN0LmRlbGV0ZU1hbnkoe1xuXHRcdFx0XHR3aGVyZTogeyBwcm9kdWN0SWQ6IHZhbGlkYXRlZElucHV0LmlkIH0sXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKHZhbGlkYXRlZElucHV0LmNvbGxlY3Rpb25JZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRhd2FpdCB0eC5jb2xsZWN0aW9uUHJvZHVjdC5jcmVhdGVNYW55KHtcblx0XHRcdFx0XHRkYXRhOiB2YWxpZGF0ZWRJbnB1dC5jb2xsZWN0aW9uSWRzLm1hcCgoY29sbGVjdGlvbklkKSA9PiAoe1xuXHRcdFx0XHRcdFx0cHJvZHVjdElkOiB2YWxpZGF0ZWRJbnB1dC5pZCxcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb25JZCxcblx0XHRcdFx0XHR9KSksXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJvZHVjdHNcIik7XG5cdHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vcHJvZHVjdHMvJHt2YWxpZGF0ZWRJbnB1dC5pZH0vZWRpdGApO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuLy8gU29mdCBkZWxldGUgcHJvZHVjdCAobW92ZSB0byB0cmFzaClcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVQcm9kdWN0TWFuYWdlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IHByb2R1Y3QgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogcHJvZHVjdElkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblx0aWYgKCFwcm9kdWN0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRhd2FpdCBkYi5wcm9kdWN0LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCB9LFxuXHRcdGRhdGE6IHsgZGVsZXRlZEF0OiBuZXcgRGF0ZSgpIH0sXG5cdH0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2R1Y3RzXCIpO1xuXHRyZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9kdWN0cy90cmFzaFwiKTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIFJlc3RvcmUgcHJvZHVjdCBmcm9tIHRyYXNoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzdG9yZVByb2R1Y3QocHJvZHVjdElkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVByb2R1Y3RNYW5hZ2VBY2Nlc3MoKTtcblxuXHQvLyBWZXJpZnkgcHJvZHVjdCBiZWxvbmdzIHRvIHRlbmFudFxuXHRjb25zdCBwcm9kdWN0ID0gYXdhaXQgZGIucHJvZHVjdC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkOiBwcm9kdWN0SWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXHRpZiAoIXByb2R1Y3QpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQcm9kdWN0IG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdGF3YWl0IGRiLnByb2R1Y3QudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZDogcHJvZHVjdElkIH0sXG5cdFx0ZGF0YTogeyBkZWxldGVkQXQ6IG51bGwgfSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJvZHVjdHNcIik7XG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2R1Y3RzL3RyYXNoXCIpO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuLy8gQnVsayByZXN0b3JlIHByb2R1Y3RzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzdG9yZVByb2R1Y3RzKHByb2R1Y3RJZHM6IHN0cmluZ1tdKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGF3YWl0IGRiLnByb2R1Y3QudXBkYXRlTWFueSh7XG5cdFx0d2hlcmU6IHsgaWQ6IHsgaW46IHByb2R1Y3RJZHMgfSwgdGVuYW50SWQgfSxcblx0XHRkYXRhOiB7IGRlbGV0ZWRBdDogbnVsbCB9LFxuXHR9KTtcblxuXHRyZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9kdWN0c1wiKTtcblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJvZHVjdHMvdHJhc2hcIik7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vLyBQZXJtYW5lbnRseSBkZWxldGUgcHJvZHVjdFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBlcm1hbmVudGx5RGVsZXRlUHJvZHVjdChwcm9kdWN0SWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlUHJvZHVjdERlbGV0ZUFjY2VzcygpO1xuXG5cdC8vIFZlcmlmeSBwcm9kdWN0IGJlbG9uZ3MgdG8gdGVuYW50IGFuZCBnZXQgbWVkaWEgZm9yIGNsZWFudXBcblx0Y29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogcHJvZHVjdElkLCB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdG1lZGlhOiB7XG5cdFx0XHRcdHNlbGVjdDogeyB1cmw6IHRydWUgfSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdGlmICghcHJvZHVjdCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlByb2R1Y3Qgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gQ29sbGVjdCBtZWRpYSBVUkxzIGZvciBjbGVhbnVwXG5cdGNvbnN0IG1lZGlhVXJscyA9IHByb2R1Y3QubWVkaWEubWFwKChtKSA9PiBtLnVybCk7XG5cblx0YXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xuXHRcdC8vIERlbGV0ZSByZWxhdGVkIGRhdGFcblx0XHRjb25zdCB2YXJpYW50cyA9IGF3YWl0IHR4LnByb2R1Y3RWYXJpYW50LmZpbmRNYW55KHtcblx0XHRcdHdoZXJlOiB7IHByb2R1Y3RJZCB9LFxuXHRcdFx0c2VsZWN0OiB7IGlkOiB0cnVlIH0sXG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IHYgb2YgdmFyaWFudHMpIHtcblx0XHRcdGF3YWl0IHR4LnZhcmlhbnRPcHRpb25NZXRhLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB2YXJpYW50SWQ6IHYuaWQgfSB9KTtcblx0XHR9XG5cblx0XHRhd2FpdCB0eC5wcm9kdWN0VmFyaWFudC5kZWxldGVNYW55KHsgd2hlcmU6IHsgcHJvZHVjdElkIH0gfSk7XG5cdFx0YXdhaXQgdHgucHJvZHVjdE1lZGlhLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyBwcm9kdWN0SWQgfSB9KTtcblx0XHRhd2FpdCB0eC5wcm9kdWN0U2hpcHBpbmdJbmZvLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyBwcm9kdWN0SWQgfSB9KTtcblx0XHRhd2FpdCB0eC5wcm9kdWN0VHJhbnNsYXRpb24uZGVsZXRlTWFueSh7IHdoZXJlOiB7IHByb2R1Y3RJZCB9IH0pO1xuXHRcdGF3YWl0IHR4LmNvbGxlY3Rpb25Qcm9kdWN0LmRlbGV0ZU1hbnkoeyB3aGVyZTogeyBwcm9kdWN0SWQgfSB9KTtcblxuXHRcdC8vIEZpbmFsbHkgZGVsZXRlIHRoZSBwcm9kdWN0XG5cdFx0YXdhaXQgdHgucHJvZHVjdC5kZWxldGUoeyB3aGVyZTogeyBpZDogcHJvZHVjdElkIH0gfSk7XG5cdH0pO1xuXG5cdC8vIENsZWFudXAgbWVkaWEgZmlsZXMgZnJvbSBSMiAoYWZ0ZXIgREIgZGVsZXRpb24pXG5cdGlmIChtZWRpYVVybHMubGVuZ3RoID4gMCkge1xuXHRcdGF3YWl0IGNsZWFudXBQcm9kdWN0TWVkaWEobWVkaWFVcmxzLCB0ZW5hbnRJZCk7XG5cdH1cblxuXHRyZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9kdWN0cy90cmFzaFwiKTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIEJ1bGsgcGVybWFuZW50bHkgZGVsZXRlIHByb2R1Y3RzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGVybWFuZW50bHlEZWxldGVQcm9kdWN0cyhwcm9kdWN0SWRzOiBzdHJpbmdbXSkge1xuXHRhd2FpdCByZXF1aXJlUHJvZHVjdERlbGV0ZUFjY2VzcygpOyAvLyBWZXJpZnkgZGVsZXRlIHBlcm1pc3Npb25cblxuXHRmb3IgKGNvbnN0IHByb2R1Y3RJZCBvZiBwcm9kdWN0SWRzKSB7XG5cdFx0YXdhaXQgcGVybWFuZW50bHlEZWxldGVQcm9kdWN0KHByb2R1Y3RJZCk7XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIEdldCB0cmFzaGVkIHByb2R1Y3RzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VHJhc2hlZFByb2R1Y3RzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZCxcblx0XHRcdGRlbGV0ZWRBdDogeyBub3Q6IG51bGwgfSxcblx0XHR9LFxuXHRcdG9yZGVyQnk6IHsgZGVsZXRlZEF0OiBcImRlc2NcIiB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHRyYW5zbGF0aW9uczoge1xuXHRcdFx0XHR3aGVyZTogeyBsb2NhbGVJZDogXCJlblwiIH0sXG5cdFx0XHRcdHRha2U6IDEsXG5cdFx0XHR9LFxuXHRcdFx0bWVkaWE6IHtcblx0XHRcdFx0b3JkZXJCeTogeyBvcmRlcjogXCJhc2NcIiB9LFxuXHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gcHJvZHVjdHMubWFwKChwKSA9PiAoe1xuXHRcdGlkOiBwLmlkLFxuXHRcdG5hbWU6IHAudHJhbnNsYXRpb25zWzBdPy5uYW1lID8/IFwiVW50aXRsZWRcIixcblx0XHRza3U6IHAuc2t1LFxuXHRcdHByaWNlOiBwLnByaWNlLFxuXHRcdGRlbGV0ZWRBdDogcC5kZWxldGVkQXQgPz8gbmV3IERhdGUoKSxcblx0XHRpbWFnZVVybDogcC5tZWRpYVswXT8udXJsID8/IG51bGwsXG5cdH0pKTtcbn1cblxuLy8gQ2xlYW4gdXAgb2xkIHRyYXNoZWQgcHJvZHVjdHMgKGNhbGxlZCBieSBjcm9uIGpvYilcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhbnVwVHJhc2hlZFByb2R1Y3RzKHJldGVudGlvbkRheXMgPSAzMCkge1xuXHQvLyBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYnkgYSBjcm9uIGpvYlxuXHQvLyBEb24ndCByZXF1aXJlIGFkbWluIC0gaXQgcnVucyBhcyBhIHN5c3RlbSB0YXNrXG5cblx0Y29uc3QgY3V0b2ZmRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGN1dG9mZkRhdGUuc2V0RGF0ZShjdXRvZmZEYXRlLmdldERhdGUoKSAtIHJldGVudGlvbkRheXMpO1xuXG5cdGNvbnN0IG9sZFByb2R1Y3RzID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdGRlbGV0ZWRBdDogeyBsdGU6IGN1dG9mZkRhdGUgfSxcblx0XHR9LFxuXHRcdHNlbGVjdDogeyBpZDogdHJ1ZSB9LFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IHByb2R1Y3Qgb2Ygb2xkUHJvZHVjdHMpIHtcblx0XHRhd2FpdCBwZXJtYW5lbnRseURlbGV0ZVByb2R1Y3QocHJvZHVjdC5pZCk7XG5cdH1cblxuXHRyZXR1cm4geyBkZWxldGVkOiBvbGRQcm9kdWN0cy5sZW5ndGggfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVRBd3FCc0IsMExBQUEifQ==
}),
"[project]/apps/platform/src/server/api/internal/data:6c25a3 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProducts",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"400bf41a515368060d000c008be7121072342d4535":"getProducts"},"apps/platform/src/server/api/internal/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400bf41a515368060d000c008be7121072342d4535", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProducts");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7XG5cdHR5cGUgQ3JlYXRlUHJvZHVjdElucHV0LFxuXHRDcmVhdGVQcm9kdWN0U2NoZW1hLFxuXHR0eXBlIFByb2R1Y3RGaWx0ZXJJbnB1dCxcblx0UHJvZHVjdEZpbHRlclNjaGVtYSxcblx0dHlwZSBVcGRhdGVQcm9kdWN0SW5wdXQsXG5cdFVwZGF0ZVByb2R1Y3RTY2hlbWEsXG59IGZyb20gXCJAL3NjaGVtYXMvcHJvZHVjdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2ZXIvZGJcIjtcbmltcG9ydCB7IGNsZWFudXBQcm9kdWN0TWVkaWEgfSBmcm9tIFwiQC9zZXJ2ZXIvc2VydmljZXMvbWVkaWEtY2xlYW51cFwiO1xuaW1wb3J0IHtcblx0cmVxdWlyZVZpZXdQZXJtaXNzaW9uLFxuXHRyZXF1aXJlTWFuYWdlUGVybWlzc2lvbixcblx0cmVxdWlyZURlbGV0ZVBlcm1pc3Npb24sXG59IGZyb20gXCJAL3NlcnZlci9hcGkvcGVybWlzc2lvbnNcIjtcblxuLy8gSGVscGVyIHRvIGNoZWNrIGFjY2VzcyBhbmQgZ2V0IHRlbmFudCBjb250ZXh0IGZvciBhZG1pbiBvcGVyYXRpb25zIChyZWFkIGFjY2VzcylcbmFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVTdG9yZUFjY2VzcygpIHtcblx0Y29uc3QgY29udGV4dCA9IGF3YWl0IHJlcXVpcmVWaWV3UGVybWlzc2lvbihcInByb2R1Y3RzXCIpO1xuXHRyZXR1cm4gY29udGV4dDtcbn1cblxuLy8gSGVscGVyIGZvciB3cml0ZSBvcGVyYXRpb25zIChjcmVhdGUvdXBkYXRlKVxuYXN5bmMgZnVuY3Rpb24gcmVxdWlyZVByb2R1Y3RNYW5hZ2VBY2Nlc3MoKSB7XG5cdGNvbnN0IGNvbnRleHQgPSBhd2FpdCByZXF1aXJlTWFuYWdlUGVybWlzc2lvbihcInByb2R1Y3RzXCIpO1xuXHRyZXR1cm4gY29udGV4dDtcbn1cblxuLy8gSGVscGVyIGZvciBkZWxldGUgb3BlcmF0aW9uc1xuYXN5bmMgZnVuY3Rpb24gcmVxdWlyZVByb2R1Y3REZWxldGVBY2Nlc3MoKSB7XG5cdGNvbnN0IGNvbnRleHQgPSBhd2FpdCByZXF1aXJlRGVsZXRlUGVybWlzc2lvbihcInByb2R1Y3RzXCIpO1xuXHRyZXR1cm4gY29udGV4dDtcbn1cblxuLy8gR2V0IHByb2R1Y3RzIHdpdGggZmlsdGVyc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzKGZpbHRlcnM/OiBQcm9kdWN0RmlsdGVySW5wdXQpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVN0b3JlQWNjZXNzKCk7XG5cblx0Y29uc3QgdmFsaWRhdGVkRmlsdGVycyA9IGZpbHRlcnNcblx0XHQ/IFByb2R1Y3RGaWx0ZXJTY2hlbWEucGFyc2UoZmlsdGVycylcblx0XHQ6IHsgcGFnZTogMSwgcGFnZVNpemU6IDIwIH07XG5cblx0Y29uc3Qge1xuXHRcdHBhZ2UsXG5cdFx0cGFnZVNpemUsXG5cdFx0c2VhcmNoLFxuXHRcdHN0YXR1cyxcblx0XHRjYXRlZ29yeUlkcyxcblx0XHRicmFuZElkcyxcblx0XHRzdG9ja1N0YXR1cyxcblx0XHRwcmljZU1pbixcblx0XHRwcmljZU1heCxcblx0XHRzb3J0QnksXG5cdH0gPSB2YWxpZGF0ZWRGaWx0ZXJzO1xuXG5cdGNvbnN0IHdoZXJlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcblx0XHR0ZW5hbnRJZCwgLy8gRmlsdGVyIGJ5IGN1cnJlbnQgdGVuYW50XG5cdFx0ZGVsZXRlZEF0OiBudWxsLCAvLyBPbmx5IGFjdGl2ZSBwcm9kdWN0c1xuXHR9O1xuXG5cdC8vIFNlYXJjaFxuXHRpZiAoc2VhcmNoKSB7XG5cdFx0d2hlcmUuT1IgPSBbXG5cdFx0XHR7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgfSB9LFxuXHRcdFx0e1xuXHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRzb21lOiB7IG5hbWU6IHsgY29udGFpbnM6IHNlYXJjaCwgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIH0gfSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XTtcblx0fVxuXG5cdC8vIFN0YXR1cyBmaWx0ZXJcblx0aWYgKHN0YXR1cyAmJiBzdGF0dXMubGVuZ3RoID4gMCkge1xuXHRcdHdoZXJlLnN0YXR1cyA9IHsgaW46IHN0YXR1cyB9O1xuXHR9XG5cblx0Ly8gQ2F0ZWdvcnkgZmlsdGVyXG5cdGlmIChjYXRlZ29yeUlkcyAmJiBjYXRlZ29yeUlkcy5sZW5ndGggPiAwKSB7XG5cdFx0d2hlcmUuY2F0ZWdvcnlJZCA9IHsgaW46IGNhdGVnb3J5SWRzIH07XG5cdH1cblxuXHQvLyBCcmFuZCBmaWx0ZXJcblx0aWYgKGJyYW5kSWRzICYmIGJyYW5kSWRzLmxlbmd0aCA+IDApIHtcblx0XHR3aGVyZS5icmFuZElkID0geyBpbjogYnJhbmRJZHMgfTtcblx0fVxuXG5cdC8vIFN0b2NrIHN0YXR1cyBmaWx0ZXJcblx0aWYgKHN0b2NrU3RhdHVzKSB7XG5cdFx0c3dpdGNoIChzdG9ja1N0YXR1cykge1xuXHRcdFx0Y2FzZSBcImluX3N0b2NrXCI6XG5cdFx0XHRcdHdoZXJlLk9SID0gW3sgdHJhY2tTdG9jazogZmFsc2UgfSwgeyBzdG9jazogeyBndDogMTAgfSB9XTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibG93X3N0b2NrXCI6XG5cdFx0XHRcdHdoZXJlLnRyYWNrU3RvY2sgPSB0cnVlO1xuXHRcdFx0XHR3aGVyZS5zdG9jayA9IHsgZ3Q6IDAsIGx0ZTogMTAgfTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwib3V0X29mX3N0b2NrXCI6XG5cdFx0XHRcdHdoZXJlLnRyYWNrU3RvY2sgPSB0cnVlO1xuXHRcdFx0XHR3aGVyZS5zdG9jayA9IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8vIFByaWNlIGZpbHRlclxuXHRpZiAocHJpY2VNaW4gIT09IHVuZGVmaW5lZCB8fCBwcmljZU1heCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0d2hlcmUucHJpY2UgPSB7fTtcblx0XHRpZiAocHJpY2VNaW4gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0KHdoZXJlLnByaWNlIGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pLmd0ZSA9IHByaWNlTWluO1xuXHRcdH1cblx0XHRpZiAocHJpY2VNYXggIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0KHdoZXJlLnByaWNlIGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pLmx0ZSA9IHByaWNlTWF4O1xuXHRcdH1cblx0fVxuXG5cdC8vIFNvcnRpbmdcblx0Y29uc3Qgb3JkZXJCeTogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG5cdGlmIChzb3J0QnkpIHtcblx0XHRzd2l0Y2ggKHNvcnRCeSkge1xuXHRcdFx0Y2FzZSBcIm5hbWVfYXNjXCI6XG5cdFx0XHRjYXNlIFwibmFtZV9kZXNjXCI6XG5cdFx0XHRcdC8vIEZvciBuYW1lIHNvcnRpbmcsIHdlIG5lZWQgdG8gc29ydCBieSB0cmFuc2xhdGlvblxuXHRcdFx0XHQvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCAtIGlkZWFsbHkgd2UnZCBqb2luIGFuZCBzb3J0XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInByaWNlX2FzY1wiOlxuXHRcdFx0XHRvcmRlckJ5LnB1c2goeyBwcmljZTogXCJhc2NcIiB9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicHJpY2VfZGVzY1wiOlxuXHRcdFx0XHRvcmRlckJ5LnB1c2goeyBwcmljZTogXCJkZXNjXCIgfSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNyZWF0ZWRfYXNjXCI6XG5cdFx0XHRcdG9yZGVyQnkucHVzaCh7IGNyZWF0ZWRBdDogXCJhc2NcIiB9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiY3JlYXRlZF9kZXNjXCI6XG5cdFx0XHRcdG9yZGVyQnkucHVzaCh7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInN0b2NrX2FzY1wiOlxuXHRcdFx0XHRvcmRlckJ5LnB1c2goeyBzdG9jazogXCJhc2NcIiB9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwic3RvY2tfZGVzY1wiOlxuXHRcdFx0XHRvcmRlckJ5LnB1c2goeyBzdG9jazogXCJkZXNjXCIgfSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmIChvcmRlckJ5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdG9yZGVyQnkucHVzaCh7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSk7XG5cdH1cblxuXHRjb25zdCBbcHJvZHVjdHMsIHRvdGFsXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRkYi5wcm9kdWN0LmZpbmRNYW55KHtcblx0XHRcdHdoZXJlLFxuXHRcdFx0b3JkZXJCeSxcblx0XHRcdHNraXA6IChwYWdlIC0gMSkgKiBwYWdlU2l6ZSxcblx0XHRcdHRha2U6IHBhZ2VTaXplLFxuXHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRjYXRlZ29yeToge1xuXHRcdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uczoge1xuXHRcdFx0XHRcdFx0XHR3aGVyZTogeyBsb2NhbGVJZDogXCJlblwiIH0sXG5cdFx0XHRcdFx0XHRcdHRha2U6IDEsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJyYW5kOiB7XG5cdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdHdoZXJlOiB7IGxvY2FsZUlkOiBcImVuXCIgfSxcblx0XHRcdFx0XHRcdFx0dGFrZTogMSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0dHJhbnNsYXRpb25zOiB7XG5cdFx0XHRcdFx0d2hlcmU6IHsgbG9jYWxlSWQ6IFwiZW5cIiB9LFxuXHRcdFx0XHRcdHRha2U6IDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1lZGlhOiB7XG5cdFx0XHRcdFx0b3JkZXJCeTogeyBvcmRlcjogXCJhc2NcIiB9LFxuXHRcdFx0XHRcdHRha2U6IDEsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pLFxuXHRcdGRiLnByb2R1Y3QuY291bnQoeyB3aGVyZSB9KSxcblx0XSk7XG5cblx0cmV0dXJuIHtcblx0XHRwcm9kdWN0czogcHJvZHVjdHMubWFwKChwKSA9PiAoe1xuXHRcdFx0aWQ6IHAuaWQsXG5cdFx0XHRzbHVnOiBwLnNsdWcsXG5cdFx0XHRzdGF0dXM6IHAuc3RhdHVzLFxuXHRcdFx0cHJpY2U6IHAucHJpY2UsXG5cdFx0XHRjb21wYXJlQXRQcmljZTogcC5jb21wYXJlQXRQcmljZSxcblx0XHRcdHNrdTogcC5za3UsXG5cdFx0XHR0cmFja1N0b2NrOiBwLnRyYWNrU3RvY2ssXG5cdFx0XHRzdG9jazogcC5zdG9jayxcblx0XHRcdG5hbWU6IHAudHJhbnNsYXRpb25zWzBdPy5uYW1lID8/IFwiVW50aXRsZWRcIixcblx0XHRcdGRlc2NyaXB0aW9uOiBwLnRyYW5zbGF0aW9uc1swXT8uZGVzY3JpcHRpb24sXG5cdFx0XHRjYXRlZ29yeUlkOiBwLmNhdGVnb3J5SWQsXG5cdFx0XHRjYXRlZ29yeU5hbWU6IHAuY2F0ZWdvcnk/LnRyYW5zbGF0aW9uc1swXT8ubmFtZSA/PyBcIlVuY2F0ZWdvcml6ZWRcIixcblx0XHRcdGJyYW5kSWQ6IHAuYnJhbmRJZCxcblx0XHRcdGJyYW5kTmFtZTogcC5icmFuZD8udHJhbnNsYXRpb25zWzBdPy5uYW1lLFxuXHRcdFx0aW1hZ2VVcmw6IHAubWVkaWFbMF0/LnVybCxcblx0XHRcdGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXG5cdFx0XHR1cGRhdGVkQXQ6IHAudXBkYXRlZEF0LFxuXHRcdH0pKSxcblx0XHRwYWdpbmF0aW9uOiB7XG5cdFx0XHRwYWdlLFxuXHRcdFx0cGFnZVNpemUsXG5cdFx0XHR0b3RhbCxcblx0XHRcdHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKSxcblx0XHR9LFxuXHR9O1xufVxuXG4vLyBHZXQgc2luZ2xlIHByb2R1Y3QgYnkgSURcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRGaXJzdCh7XG5cdFx0d2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCwgdGVuYW50SWQgfSxcblx0XHRpbmNsdWRlOiB7XG5cdFx0XHR0cmFuc2xhdGlvbnM6IHRydWUsXG5cdFx0XHRtZWRpYTogeyBvcmRlckJ5OiB7IG9yZGVyOiBcImFzY1wiIH0gfSxcblx0XHRcdHZhcmlhbnRzOiB7XG5cdFx0XHRcdGluY2x1ZGU6IHtcblx0XHRcdFx0XHRvcHRpb25NZXRhOiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHNoaXBwaW5nSW5mbzogdHJ1ZSxcblx0XHRcdGNvbGxlY3Rpb25Qcm9kdWN0czoge1xuXHRcdFx0XHRpbmNsdWRlOiB7XG5cdFx0XHRcdFx0Y29sbGVjdGlvbjoge1xuXHRcdFx0XHRcdFx0aW5jbHVkZToge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHR3aGVyZTogeyBsb2NhbGVJZDogXCJlblwiIH0sXG5cdFx0XHRcdFx0XHRcdFx0dGFrZTogMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFwcm9kdWN0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRjb25zdCBlbmdsaXNoVHJhbnNsYXRpb24gPSBwcm9kdWN0LnRyYW5zbGF0aW9ucy5maW5kKFxuXHRcdCh0OiB7IGxvY2FsZUlkOiBzdHJpbmcgfSkgPT4gdC5sb2NhbGVJZCA9PT0gXCJlblwiLFxuXHQpO1xuXG5cdHJldHVybiB7XG5cdFx0aWQ6IHByb2R1Y3QuaWQsXG5cdFx0c2x1ZzogcHJvZHVjdC5zbHVnLFxuXHRcdHN0YXR1czogcHJvZHVjdC5zdGF0dXMsXG5cdFx0Y2F0ZWdvcnlJZDogcHJvZHVjdC5jYXRlZ29yeUlkLFxuXHRcdGJyYW5kSWQ6IHByb2R1Y3QuYnJhbmRJZCxcblx0XHRwcmljZTogcHJvZHVjdC5wcmljZSxcblx0XHRjb21wYXJlQXRQcmljZTogcHJvZHVjdC5jb21wYXJlQXRQcmljZSxcblx0XHRjb3N0UGVySXRlbTogcHJvZHVjdC5jb3N0UGVySXRlbSxcblx0XHRza3U6IHByb2R1Y3Quc2t1LFxuXHRcdHRyYWNrU3RvY2s6IHByb2R1Y3QudHJhY2tTdG9jayxcblx0XHRzdG9jazogcHJvZHVjdC5zdG9jayxcblx0XHRsb3dTdG9ja1RocmVzaG9sZDogcHJvZHVjdC5sb3dTdG9ja1RocmVzaG9sZCxcblx0XHRwdXJjaGFzZVR5cGU6IHByb2R1Y3QucHVyY2hhc2VUeXBlLFxuXHRcdHN1YnNjcmlwdGlvbkRpc2NvdW50UGVyY2VudDogcHJvZHVjdC5zdWJzY3JpcHRpb25EaXNjb3VudFBlcmNlbnQsXG5cdFx0c3Vic2NyaXB0aW9uSW50ZXJ2YWxzOiBwcm9kdWN0LnN1YnNjcmlwdGlvbkludGVydmFscyxcblx0XHRwcmVPcmRlclJlbGVhc2VEYXRlOiBwcm9kdWN0LnByZU9yZGVyUmVsZWFzZURhdGUsXG5cdFx0cHJlT3JkZXJEZXBvc2l0UGVyY2VudDogcHJvZHVjdC5wcmVPcmRlckRlcG9zaXRQZXJjZW50LFxuXHRcdHVuaXRQcmljZUFtb3VudDogcHJvZHVjdC51bml0UHJpY2VBbW91bnQsXG5cdFx0dW5pdFByaWNlTWVhc3VyZW1lbnQ6IHByb2R1Y3QudW5pdFByaWNlTWVhc3VyZW1lbnQsXG5cdFx0dW5pdFByaWNlQmFzZUFtb3VudDogcHJvZHVjdC51bml0UHJpY2VCYXNlQW1vdW50LFxuXHRcdHVuaXRQcmljZUJhc2VNZWFzdXJlbWVudDogcHJvZHVjdC51bml0UHJpY2VCYXNlTWVhc3VyZW1lbnQsXG5cdFx0bmFtZTogZW5nbGlzaFRyYW5zbGF0aW9uPy5uYW1lID8/IFwiXCIsXG5cdFx0ZGVzY3JpcHRpb246IGVuZ2xpc2hUcmFuc2xhdGlvbj8uZGVzY3JpcHRpb24gPz8gXCJcIixcblx0XHRtZWRpYTogcHJvZHVjdC5tZWRpYS5tYXAoXG5cdFx0XHQobToge1xuXHRcdFx0XHRpZDogc3RyaW5nO1xuXHRcdFx0XHR1cmw6IHN0cmluZztcblx0XHRcdFx0bWVkaWFUeXBlOiBzdHJpbmc7XG5cdFx0XHRcdGFsdFRleHQ6IHN0cmluZyB8IG51bGw7XG5cdFx0XHRcdG9yZGVyOiBudW1iZXI7XG5cdFx0XHR9KSA9PiAoe1xuXHRcdFx0XHRpZDogbS5pZCxcblx0XHRcdFx0dXJsOiBtLnVybCxcblx0XHRcdFx0bWVkaWFUeXBlOiBtLm1lZGlhVHlwZSxcblx0XHRcdFx0YWx0VGV4dDogbS5hbHRUZXh0LFxuXHRcdFx0XHRvcmRlcjogbS5vcmRlcixcblx0XHRcdH0pLFxuXHRcdCksXG5cdFx0dmFyaWFudHM6IHByb2R1Y3QudmFyaWFudHMubWFwKFxuXHRcdFx0KHY6IHtcblx0XHRcdFx0aWQ6IHN0cmluZztcblx0XHRcdFx0c2t1OiBzdHJpbmcgfCBudWxsO1xuXHRcdFx0XHRwcmljZTogdW5rbm93bjtcblx0XHRcdFx0cHJpY2VBZGp1c3RtZW50OiB1bmtub3duO1xuXHRcdFx0XHRzdG9jazogbnVtYmVyIHwgbnVsbDtcblx0XHRcdFx0aW1hZ2VVcmw6IHN0cmluZyB8IG51bGw7XG5cdFx0XHRcdG9wdGlvbnM6IHVua25vd247XG5cdFx0XHRcdG9wdGlvbk1ldGE6IHVua25vd25bXTtcblx0XHRcdH0pID0+ICh7XG5cdFx0XHRcdGlkOiB2LmlkLFxuXHRcdFx0XHRza3U6IHYuc2t1LFxuXHRcdFx0XHRwcmljZTogdi5wcmljZSxcblx0XHRcdFx0cHJpY2VBZGp1c3RtZW50OiB2LnByaWNlQWRqdXN0bWVudCxcblx0XHRcdFx0c3RvY2s6IHYuc3RvY2ssXG5cdFx0XHRcdGltYWdlVXJsOiB2LmltYWdlVXJsLFxuXHRcdFx0XHRvcHRpb25zOiB2Lm9wdGlvbnMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPixcblx0XHRcdFx0b3B0aW9uTWV0YTogdi5vcHRpb25NZXRhLFxuXHRcdFx0fSksXG5cdFx0KSxcblx0XHRzaGlwcGluZ0luZm86IHByb2R1Y3Quc2hpcHBpbmdJbmZvXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHRwYWNrYWdlVHlwZTogcHJvZHVjdC5zaGlwcGluZ0luZm8ucGFja2FnZVR5cGUsXG5cdFx0XHRcdFx0cGFja2FnaW5nV2VpZ2h0S2c6IHByb2R1Y3Quc2hpcHBpbmdJbmZvLnBhY2thZ2luZ1dlaWdodEtnLFxuXHRcdFx0XHRcdHBhY2thZ2luZ0xlbmd0aENtOiBwcm9kdWN0LnNoaXBwaW5nSW5mby5wYWNrYWdpbmdMZW5ndGhDbSxcblx0XHRcdFx0XHRwYWNrYWdpbmdXaWR0aENtOiBwcm9kdWN0LnNoaXBwaW5nSW5mby5wYWNrYWdpbmdXaWR0aENtLFxuXHRcdFx0XHRcdHBhY2thZ2luZ0hlaWdodENtOiBwcm9kdWN0LnNoaXBwaW5nSW5mby5wYWNrYWdpbmdIZWlnaHRDbSxcblx0XHRcdFx0XHRwcm9kdWN0V2VpZ2h0S2c6IHByb2R1Y3Quc2hpcHBpbmdJbmZvLnByb2R1Y3RXZWlnaHRLZyxcblx0XHRcdFx0XHRwcm9kdWN0TGVuZ3RoQ206IHByb2R1Y3Quc2hpcHBpbmdJbmZvLnByb2R1Y3RMZW5ndGhDbSxcblx0XHRcdFx0XHRwcm9kdWN0V2lkdGhDbTogcHJvZHVjdC5zaGlwcGluZ0luZm8ucHJvZHVjdFdpZHRoQ20sXG5cdFx0XHRcdFx0cHJvZHVjdEhlaWdodENtOiBwcm9kdWN0LnNoaXBwaW5nSW5mby5wcm9kdWN0SGVpZ2h0Q20sXG5cdFx0XHRcdH1cblx0XHRcdDogbnVsbCxcblx0XHRzZW86IHtcblx0XHRcdG1ldGFUaXRsZTogZW5nbGlzaFRyYW5zbGF0aW9uPy5tZXRhVGl0bGUsXG5cdFx0XHRtZXRhRGVzY3JpcHRpb246IGVuZ2xpc2hUcmFuc2xhdGlvbj8ubWV0YURlc2NyaXB0aW9uLFxuXHRcdFx0c2x1ZzogcHJvZHVjdC5zbHVnLFxuXHRcdH0sXG5cdFx0Y29sbGVjdGlvbklkczogcHJvZHVjdC5jb2xsZWN0aW9uUHJvZHVjdHMubWFwKFxuXHRcdFx0KGM6IHsgY29sbGVjdGlvbklkOiBzdHJpbmcgfSkgPT4gYy5jb2xsZWN0aW9uSWQsXG5cdFx0KSxcblx0fTtcbn1cblxuLy8gQ3JlYXRlIHByb2R1Y3RcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0KGlucHV0OiBDcmVhdGVQcm9kdWN0SW5wdXQpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVByb2R1Y3RNYW5hZ2VBY2Nlc3MoKTtcblxuXHRjb25zdCB2YWxpZGF0ZWRJbnB1dCA9IENyZWF0ZVByb2R1Y3RTY2hlbWEucGFyc2UoaW5wdXQpO1xuXG5cdGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBwcm9kdWN0XG5cdFx0Y29uc3QgbmV3UHJvZHVjdCA9IGF3YWl0IHR4LnByb2R1Y3QuY3JlYXRlKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0dGVuYW50SWQsXG5cdFx0XHRcdHNsdWc6IHZhbGlkYXRlZElucHV0LnNsdWcsXG5cdFx0XHRcdHN0YXR1czogdmFsaWRhdGVkSW5wdXQuc3RhdHVzLFxuXHRcdFx0XHRjYXRlZ29yeUlkOiB2YWxpZGF0ZWRJbnB1dC5jYXRlZ29yeUlkLFxuXHRcdFx0XHRicmFuZElkOiB2YWxpZGF0ZWRJbnB1dC5icmFuZElkIHx8IG51bGwsXG5cdFx0XHRcdHByaWNlOiB2YWxpZGF0ZWRJbnB1dC5wcmljZSxcblx0XHRcdFx0Y29tcGFyZUF0UHJpY2U6IHZhbGlkYXRlZElucHV0LmNvbXBhcmVBdFByaWNlLFxuXHRcdFx0XHRjb3N0UGVySXRlbTogdmFsaWRhdGVkSW5wdXQuY29zdFBlckl0ZW0sXG5cdFx0XHRcdHNrdTogdmFsaWRhdGVkSW5wdXQuc2t1LFxuXHRcdFx0XHR0cmFja1N0b2NrOiB2YWxpZGF0ZWRJbnB1dC50cmFja1N0b2NrLFxuXHRcdFx0XHRzdG9jazogdmFsaWRhdGVkSW5wdXQuc3RvY2ssXG5cdFx0XHRcdGxvd1N0b2NrVGhyZXNob2xkOiB2YWxpZGF0ZWRJbnB1dC5sb3dTdG9ja1RocmVzaG9sZCxcblx0XHRcdFx0Ly8gUHVyY2hhc2Ugb3B0aW9uc1xuXHRcdFx0XHRwdXJjaGFzZVR5cGU6IHZhbGlkYXRlZElucHV0LnB1cmNoYXNlT3B0aW9ucz8udHlwZSA/PyBcIk9ORV9USU1FXCIsXG5cdFx0XHRcdHN1YnNjcmlwdGlvbkRpc2NvdW50UGVyY2VudDpcblx0XHRcdFx0XHR2YWxpZGF0ZWRJbnB1dC5wdXJjaGFzZU9wdGlvbnM/LnN1YnNjcmlwdGlvbkRpc2NvdW50LFxuXHRcdFx0XHRzdWJzY3JpcHRpb25JbnRlcnZhbHM6XG5cdFx0XHRcdFx0dmFsaWRhdGVkSW5wdXQucHVyY2hhc2VPcHRpb25zPy5zdWJzY3JpcHRpb25JbnRlcnZhbHMgPz8gW10sXG5cdFx0XHRcdHByZU9yZGVyUmVsZWFzZURhdGU6XG5cdFx0XHRcdFx0dmFsaWRhdGVkSW5wdXQucHVyY2hhc2VPcHRpb25zPy5wcmVPcmRlclJlbGVhc2VEYXRlLFxuXHRcdFx0XHRwcmVPcmRlckRlcG9zaXRQZXJjZW50OlxuXHRcdFx0XHRcdHZhbGlkYXRlZElucHV0LnB1cmNoYXNlT3B0aW9ucz8ucHJlT3JkZXJEZXBvc2l0UGVyY2VudCxcblx0XHRcdFx0Ly8gVW5pdCBwcmljaW5nXG5cdFx0XHRcdHVuaXRQcmljZUFtb3VudDogdmFsaWRhdGVkSW5wdXQudW5pdFByaWNlPy51bml0UHJpY2VBbW91bnQsXG5cdFx0XHRcdHVuaXRQcmljZU1lYXN1cmVtZW50OiB2YWxpZGF0ZWRJbnB1dC51bml0UHJpY2U/LnVuaXRQcmljZU1lYXN1cmVtZW50LFxuXHRcdFx0XHR1bml0UHJpY2VCYXNlQW1vdW50OiB2YWxpZGF0ZWRJbnB1dC51bml0UHJpY2U/LnVuaXRQcmljZUJhc2VBbW91bnQsXG5cdFx0XHRcdHVuaXRQcmljZUJhc2VNZWFzdXJlbWVudDpcblx0XHRcdFx0XHR2YWxpZGF0ZWRJbnB1dC51bml0UHJpY2U/LnVuaXRQcmljZUJhc2VNZWFzdXJlbWVudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHQvLyBDcmVhdGUgdHJhbnNsYXRpb24gKEVuZ2xpc2ggYnkgZGVmYXVsdClcblx0XHRhd2FpdCB0eC5wcm9kdWN0VHJhbnNsYXRpb24uY3JlYXRlKHtcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0cHJvZHVjdElkOiBuZXdQcm9kdWN0LmlkLFxuXHRcdFx0XHRsb2NhbGVJZDogXCJlblwiLFxuXHRcdFx0XHRuYW1lOiB2YWxpZGF0ZWRJbnB1dC5uYW1lLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogdmFsaWRhdGVkSW5wdXQuZGVzY3JpcHRpb24sXG5cdFx0XHRcdG1ldGFUaXRsZTogdmFsaWRhdGVkSW5wdXQuc2VvPy5tZXRhVGl0bGUsXG5cdFx0XHRcdG1ldGFEZXNjcmlwdGlvbjogdmFsaWRhdGVkSW5wdXQuc2VvPy5tZXRhRGVzY3JpcHRpb24sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Ly8gQ3JlYXRlIG1lZGlhXG5cdFx0aWYgKHZhbGlkYXRlZElucHV0Lm1lZGlhICYmIHZhbGlkYXRlZElucHV0Lm1lZGlhLmxlbmd0aCA+IDApIHtcblx0XHRcdGF3YWl0IHR4LnByb2R1Y3RNZWRpYS5jcmVhdGVNYW55KHtcblx0XHRcdFx0ZGF0YTogdmFsaWRhdGVkSW5wdXQubWVkaWEubWFwKChtLCBpbmRleCkgPT4gKHtcblx0XHRcdFx0XHRwcm9kdWN0SWQ6IG5ld1Byb2R1Y3QuaWQsXG5cdFx0XHRcdFx0dXJsOiBtLnVybCxcblx0XHRcdFx0XHRtZWRpYVR5cGU6IG0ubWVkaWFUeXBlLFxuXHRcdFx0XHRcdGFsdFRleHQ6IG0uYWx0VGV4dCxcblx0XHRcdFx0XHRvcmRlcjogbS5vcmRlciA/PyBpbmRleCxcblx0XHRcdFx0fSkpLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIHZhcmlhbnRzXG5cdFx0aWYgKHZhbGlkYXRlZElucHV0LnZhcmlhbnRzICYmIHZhbGlkYXRlZElucHV0LnZhcmlhbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiB2YWxpZGF0ZWRJbnB1dC52YXJpYW50cykge1xuXHRcdFx0XHRjb25zdCBjcmVhdGVkVmFyaWFudCA9IGF3YWl0IHR4LnByb2R1Y3RWYXJpYW50LmNyZWF0ZSh7XG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0cHJvZHVjdElkOiBuZXdQcm9kdWN0LmlkLFxuXHRcdFx0XHRcdFx0c2t1OiB2YXJpYW50LnNrdSxcblx0XHRcdFx0XHRcdHByaWNlOiB2YXJpYW50LnByaWNlLFxuXHRcdFx0XHRcdFx0cHJpY2VBZGp1c3RtZW50OiB2YXJpYW50LnByaWNlQWRqdXN0bWVudCA/PyAwLFxuXHRcdFx0XHRcdFx0c3RvY2s6IHZhcmlhbnQuc3RvY2ssXG5cdFx0XHRcdFx0XHRpbWFnZVVybDogdmFyaWFudC5pbWFnZVVybCxcblx0XHRcdFx0XHRcdG9wdGlvbnM6IHZhcmlhbnQub3B0aW9ucyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBDcmVhdGUgdmFyaWFudCBvcHRpb24gbWV0YSAoZm9yIGNvbG9ycylcblx0XHRcdFx0aWYgKHZhcmlhbnQub3B0aW9uTWV0YSAmJiB2YXJpYW50Lm9wdGlvbk1ldGEubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGF3YWl0IHR4LnZhcmlhbnRPcHRpb25NZXRhLmNyZWF0ZU1hbnkoe1xuXHRcdFx0XHRcdFx0ZGF0YTogdmFyaWFudC5vcHRpb25NZXRhLm1hcCgobWV0YSkgPT4gKHtcblx0XHRcdFx0XHRcdFx0dmFyaWFudElkOiBjcmVhdGVkVmFyaWFudC5pZCxcblx0XHRcdFx0XHRcdFx0b3B0aW9uTmFtZTogbWV0YS5vcHRpb25OYW1lLFxuXHRcdFx0XHRcdFx0XHRoZXhDb2xvcjogbWV0YS5oZXhDb2xvcixcblx0XHRcdFx0XHRcdH0pKSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENyZWF0ZSBzaGlwcGluZyBpbmZvXG5cdFx0aWYgKHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mbykge1xuXHRcdFx0YXdhaXQgdHgucHJvZHVjdFNoaXBwaW5nSW5mby5jcmVhdGUoe1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0cHJvZHVjdElkOiBuZXdQcm9kdWN0LmlkLFxuXHRcdFx0XHRcdHBhY2thZ2VUeXBlOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZVR5cGUsXG5cdFx0XHRcdFx0cGFja2FnaW5nV2VpZ2h0S2c6IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby53ZWlnaHQsXG5cdFx0XHRcdFx0cGFja2FnaW5nTGVuZ3RoQ206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wYWNrYWdlTGVuZ3RoLFxuXHRcdFx0XHRcdHBhY2thZ2luZ1dpZHRoQ206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wYWNrYWdlV2lkdGgsXG5cdFx0XHRcdFx0cGFja2FnaW5nSGVpZ2h0Q206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wYWNrYWdlSGVpZ2h0LFxuXHRcdFx0XHRcdHByb2R1Y3RXZWlnaHRLZzogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnByb2R1Y3RXZWlnaHQsXG5cdFx0XHRcdFx0cHJvZHVjdExlbmd0aENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucHJvZHVjdExlbmd0aCxcblx0XHRcdFx0XHRwcm9kdWN0V2lkdGhDbTogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnByb2R1Y3RXaWR0aCxcblx0XHRcdFx0XHRwcm9kdWN0SGVpZ2h0Q206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wcm9kdWN0SGVpZ2h0LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gTGluayB0byBjb2xsZWN0aW9uc1xuXHRcdGlmIChcblx0XHRcdHZhbGlkYXRlZElucHV0LmNvbGxlY3Rpb25JZHMgJiZcblx0XHRcdHZhbGlkYXRlZElucHV0LmNvbGxlY3Rpb25JZHMubGVuZ3RoID4gMFxuXHRcdCkge1xuXHRcdFx0YXdhaXQgdHguY29sbGVjdGlvblByb2R1Y3QuY3JlYXRlTWFueSh7XG5cdFx0XHRcdGRhdGE6IHZhbGlkYXRlZElucHV0LmNvbGxlY3Rpb25JZHMubWFwKChjb2xsZWN0aW9uSWQpID0+ICh7XG5cdFx0XHRcdFx0cHJvZHVjdElkOiBuZXdQcm9kdWN0LmlkLFxuXHRcdFx0XHRcdGNvbGxlY3Rpb25JZCxcblx0XHRcdFx0fSkpLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ld1Byb2R1Y3Q7XG5cdH0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2R1Y3RzXCIpO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByb2R1Y3RJZDogcHJvZHVjdC5pZCB9O1xufVxuXG4vLyBVcGRhdGUgcHJvZHVjdFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3QoaW5wdXQ6IFVwZGF0ZVByb2R1Y3RJbnB1dCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlUHJvZHVjdE1hbmFnZUFjY2VzcygpO1xuXG5cdGNvbnN0IHZhbGlkYXRlZElucHV0ID0gVXBkYXRlUHJvZHVjdFNjaGVtYS5wYXJzZShpbnB1dCk7XG5cblx0Ly8gVmVyaWZ5IHByb2R1Y3QgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgZXhpc3RpbmdQcm9kdWN0ID0gYXdhaXQgZGIucHJvZHVjdC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkOiB2YWxpZGF0ZWRJbnB1dC5pZCwgdGVuYW50SWQgfSxcblx0fSk7XG5cdGlmICghZXhpc3RpbmdQcm9kdWN0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XG5cdFx0Ly8gVXBkYXRlIHRoZSBtYWluIHByb2R1Y3Rcblx0XHRhd2FpdCB0eC5wcm9kdWN0LnVwZGF0ZSh7XG5cdFx0XHR3aGVyZTogeyBpZDogdmFsaWRhdGVkSW5wdXQuaWQgfSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0Li4uKHZhbGlkYXRlZElucHV0LnNsdWcgJiYgeyBzbHVnOiB2YWxpZGF0ZWRJbnB1dC5zbHVnIH0pLFxuXHRcdFx0XHQuLi4odmFsaWRhdGVkSW5wdXQuc3RhdHVzICYmIHsgc3RhdHVzOiB2YWxpZGF0ZWRJbnB1dC5zdGF0dXMgfSksXG5cdFx0XHRcdC4uLih2YWxpZGF0ZWRJbnB1dC5jYXRlZ29yeUlkICYmIHtcblx0XHRcdFx0XHRjYXRlZ29yeUlkOiB2YWxpZGF0ZWRJbnB1dC5jYXRlZ29yeUlkLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0YnJhbmRJZDogdmFsaWRhdGVkSW5wdXQuYnJhbmRJZCB8fCBudWxsLFxuXHRcdFx0XHQuLi4odmFsaWRhdGVkSW5wdXQucHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7XG5cdFx0XHRcdFx0cHJpY2U6IHZhbGlkYXRlZElucHV0LnByaWNlLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0Y29tcGFyZUF0UHJpY2U6IHZhbGlkYXRlZElucHV0LmNvbXBhcmVBdFByaWNlLFxuXHRcdFx0XHRjb3N0UGVySXRlbTogdmFsaWRhdGVkSW5wdXQuY29zdFBlckl0ZW0sXG5cdFx0XHRcdHNrdTogdmFsaWRhdGVkSW5wdXQuc2t1LFxuXHRcdFx0XHR0cmFja1N0b2NrOiB2YWxpZGF0ZWRJbnB1dC50cmFja1N0b2NrLFxuXHRcdFx0XHRzdG9jazogdmFsaWRhdGVkSW5wdXQuc3RvY2ssXG5cdFx0XHRcdGxvd1N0b2NrVGhyZXNob2xkOiB2YWxpZGF0ZWRJbnB1dC5sb3dTdG9ja1RocmVzaG9sZCxcblx0XHRcdFx0Ly8gUHVyY2hhc2Ugb3B0aW9uc1xuXHRcdFx0XHQuLi4odmFsaWRhdGVkSW5wdXQucHVyY2hhc2VPcHRpb25zICYmIHtcblx0XHRcdFx0XHRwdXJjaGFzZVR5cGU6IHZhbGlkYXRlZElucHV0LnB1cmNoYXNlT3B0aW9ucy50eXBlLFxuXHRcdFx0XHRcdHN1YnNjcmlwdGlvbkRpc2NvdW50UGVyY2VudDpcblx0XHRcdFx0XHRcdHZhbGlkYXRlZElucHV0LnB1cmNoYXNlT3B0aW9ucy5zdWJzY3JpcHRpb25EaXNjb3VudCxcblx0XHRcdFx0XHRzdWJzY3JpcHRpb25JbnRlcnZhbHM6XG5cdFx0XHRcdFx0XHR2YWxpZGF0ZWRJbnB1dC5wdXJjaGFzZU9wdGlvbnMuc3Vic2NyaXB0aW9uSW50ZXJ2YWxzID8/IFtdLFxuXHRcdFx0XHRcdHByZU9yZGVyUmVsZWFzZURhdGU6XG5cdFx0XHRcdFx0XHR2YWxpZGF0ZWRJbnB1dC5wdXJjaGFzZU9wdGlvbnMucHJlT3JkZXJSZWxlYXNlRGF0ZSxcblx0XHRcdFx0XHRwcmVPcmRlckRlcG9zaXRQZXJjZW50OlxuXHRcdFx0XHRcdFx0dmFsaWRhdGVkSW5wdXQucHVyY2hhc2VPcHRpb25zLnByZU9yZGVyRGVwb3NpdFBlcmNlbnQsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQvLyBVbml0IHByaWNpbmdcblx0XHRcdFx0Li4uKHZhbGlkYXRlZElucHV0LnVuaXRQcmljZSAmJiB7XG5cdFx0XHRcdFx0dW5pdFByaWNlQW1vdW50OiB2YWxpZGF0ZWRJbnB1dC51bml0UHJpY2UudW5pdFByaWNlQW1vdW50LFxuXHRcdFx0XHRcdHVuaXRQcmljZU1lYXN1cmVtZW50OiB2YWxpZGF0ZWRJbnB1dC51bml0UHJpY2UudW5pdFByaWNlTWVhc3VyZW1lbnQsXG5cdFx0XHRcdFx0dW5pdFByaWNlQmFzZUFtb3VudDogdmFsaWRhdGVkSW5wdXQudW5pdFByaWNlLnVuaXRQcmljZUJhc2VBbW91bnQsXG5cdFx0XHRcdFx0dW5pdFByaWNlQmFzZU1lYXN1cmVtZW50OlxuXHRcdFx0XHRcdFx0dmFsaWRhdGVkSW5wdXQudW5pdFByaWNlLnVuaXRQcmljZUJhc2VNZWFzdXJlbWVudCxcblx0XHRcdFx0fSksXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Ly8gVXBkYXRlIHRyYW5zbGF0aW9uXG5cdFx0aWYgKFxuXHRcdFx0dmFsaWRhdGVkSW5wdXQubmFtZSB8fFxuXHRcdFx0dmFsaWRhdGVkSW5wdXQuZGVzY3JpcHRpb24gfHxcblx0XHRcdHZhbGlkYXRlZElucHV0LnNlb1xuXHRcdCkge1xuXHRcdFx0YXdhaXQgdHgucHJvZHVjdFRyYW5zbGF0aW9uLnVwc2VydCh7XG5cdFx0XHRcdHdoZXJlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdElkX2xvY2FsZUlkOiB7XG5cdFx0XHRcdFx0XHRwcm9kdWN0SWQ6IHZhbGlkYXRlZElucHV0LmlkLFxuXHRcdFx0XHRcdFx0bG9jYWxlSWQ6IFwiZW5cIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR1cGRhdGU6IHtcblx0XHRcdFx0XHQuLi4odmFsaWRhdGVkSW5wdXQubmFtZSAmJiB7IG5hbWU6IHZhbGlkYXRlZElucHV0Lm5hbWUgfSksXG5cdFx0XHRcdFx0Li4uKHZhbGlkYXRlZElucHV0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYge1xuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IHZhbGlkYXRlZElucHV0LmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdC4uLih2YWxpZGF0ZWRJbnB1dC5zZW8/Lm1ldGFUaXRsZSAhPT0gdW5kZWZpbmVkICYmIHtcblx0XHRcdFx0XHRcdG1ldGFUaXRsZTogdmFsaWRhdGVkSW5wdXQuc2VvLm1ldGFUaXRsZSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHQuLi4odmFsaWRhdGVkSW5wdXQuc2VvPy5tZXRhRGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCAmJiB7XG5cdFx0XHRcdFx0XHRtZXRhRGVzY3JpcHRpb246IHZhbGlkYXRlZElucHV0LnNlby5tZXRhRGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNyZWF0ZToge1xuXHRcdFx0XHRcdHByb2R1Y3RJZDogdmFsaWRhdGVkSW5wdXQuaWQsXG5cdFx0XHRcdFx0bG9jYWxlSWQ6IFwiZW5cIixcblx0XHRcdFx0XHRuYW1lOiB2YWxpZGF0ZWRJbnB1dC5uYW1lID8/IFwiVW50aXRsZWRcIixcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogdmFsaWRhdGVkSW5wdXQuZGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0bWV0YVRpdGxlOiB2YWxpZGF0ZWRJbnB1dC5zZW8/Lm1ldGFUaXRsZSxcblx0XHRcdFx0XHRtZXRhRGVzY3JpcHRpb246IHZhbGlkYXRlZElucHV0LnNlbz8ubWV0YURlc2NyaXB0aW9uLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gVXBkYXRlIG1lZGlhIChyZXBsYWNlIGFsbClcblx0XHRpZiAodmFsaWRhdGVkSW5wdXQubWVkaWEpIHtcblx0XHRcdGF3YWl0IHR4LnByb2R1Y3RNZWRpYS5kZWxldGVNYW55KHtcblx0XHRcdFx0d2hlcmU6IHsgcHJvZHVjdElkOiB2YWxpZGF0ZWRJbnB1dC5pZCB9LFxuXHRcdFx0fSk7XG5cblx0XHRcdGlmICh2YWxpZGF0ZWRJbnB1dC5tZWRpYS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGF3YWl0IHR4LnByb2R1Y3RNZWRpYS5jcmVhdGVNYW55KHtcblx0XHRcdFx0XHRkYXRhOiB2YWxpZGF0ZWRJbnB1dC5tZWRpYS5tYXAoKG0sIGluZGV4KSA9PiAoe1xuXHRcdFx0XHRcdFx0cHJvZHVjdElkOiB2YWxpZGF0ZWRJbnB1dC5pZCxcblx0XHRcdFx0XHRcdHVybDogbS51cmwsXG5cdFx0XHRcdFx0XHRtZWRpYVR5cGU6IG0ubWVkaWFUeXBlLFxuXHRcdFx0XHRcdFx0YWx0VGV4dDogbS5hbHRUZXh0LFxuXHRcdFx0XHRcdFx0b3JkZXI6IG0ub3JkZXIgPz8gaW5kZXgsXG5cdFx0XHRcdFx0fSkpLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBVcGRhdGUgdmFyaWFudHMgKHJlcGxhY2UgYWxsKVxuXHRcdGlmICh2YWxpZGF0ZWRJbnB1dC52YXJpYW50cykge1xuXHRcdFx0Ly8gRGVsZXRlIGV4aXN0aW5nIHZhcmlhbnRzIGFuZCB0aGVpciBtZXRhXG5cdFx0XHRjb25zdCBleGlzdGluZ1ZhcmlhbnRzID0gYXdhaXQgdHgucHJvZHVjdFZhcmlhbnQuZmluZE1hbnkoe1xuXHRcdFx0XHR3aGVyZTogeyBwcm9kdWN0SWQ6IHZhbGlkYXRlZElucHV0LmlkIH0sXG5cdFx0XHRcdHNlbGVjdDogeyBpZDogdHJ1ZSB9LFxuXHRcdFx0fSk7XG5cblx0XHRcdGZvciAoY29uc3QgdiBvZiBleGlzdGluZ1ZhcmlhbnRzKSB7XG5cdFx0XHRcdGF3YWl0IHR4LnZhcmlhbnRPcHRpb25NZXRhLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB2YXJpYW50SWQ6IHYuaWQgfSB9KTtcblx0XHRcdH1cblxuXHRcdFx0YXdhaXQgdHgucHJvZHVjdFZhcmlhbnQuZGVsZXRlTWFueSh7XG5cdFx0XHRcdHdoZXJlOiB7IHByb2R1Y3RJZDogdmFsaWRhdGVkSW5wdXQuaWQgfSxcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDcmVhdGUgbmV3IHZhcmlhbnRzXG5cdFx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgdmFsaWRhdGVkSW5wdXQudmFyaWFudHMpIHtcblx0XHRcdFx0Y29uc3QgY3JlYXRlZFZhcmlhbnQgPSBhd2FpdCB0eC5wcm9kdWN0VmFyaWFudC5jcmVhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHByb2R1Y3RJZDogdmFsaWRhdGVkSW5wdXQuaWQsXG5cdFx0XHRcdFx0XHRza3U6IHZhcmlhbnQuc2t1LFxuXHRcdFx0XHRcdFx0cHJpY2U6IHZhcmlhbnQucHJpY2UsXG5cdFx0XHRcdFx0XHRwcmljZUFkanVzdG1lbnQ6IHZhcmlhbnQucHJpY2VBZGp1c3RtZW50ID8/IDAsXG5cdFx0XHRcdFx0XHRzdG9jazogdmFyaWFudC5zdG9jayxcblx0XHRcdFx0XHRcdGltYWdlVXJsOiB2YXJpYW50LmltYWdlVXJsLFxuXHRcdFx0XHRcdFx0b3B0aW9uczogdmFyaWFudC5vcHRpb25zLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmICh2YXJpYW50Lm9wdGlvbk1ldGEgJiYgdmFyaWFudC5vcHRpb25NZXRhLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRhd2FpdCB0eC52YXJpYW50T3B0aW9uTWV0YS5jcmVhdGVNYW55KHtcblx0XHRcdFx0XHRcdGRhdGE6IHZhcmlhbnQub3B0aW9uTWV0YS5tYXAoKG1ldGEpID0+ICh7XG5cdFx0XHRcdFx0XHRcdHZhcmlhbnRJZDogY3JlYXRlZFZhcmlhbnQuaWQsXG5cdFx0XHRcdFx0XHRcdG9wdGlvbk5hbWU6IG1ldGEub3B0aW9uTmFtZSxcblx0XHRcdFx0XHRcdFx0aGV4Q29sb3I6IG1ldGEuaGV4Q29sb3IsXG5cdFx0XHRcdFx0XHR9KSksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBVcGRhdGUgc2hpcHBpbmcgaW5mb1xuXHRcdGlmICh2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8pIHtcblx0XHRcdGF3YWl0IHR4LnByb2R1Y3RTaGlwcGluZ0luZm8udXBzZXJ0KHtcblx0XHRcdFx0d2hlcmU6IHsgcHJvZHVjdElkOiB2YWxpZGF0ZWRJbnB1dC5pZCB9LFxuXHRcdFx0XHR1cGRhdGU6IHtcblx0XHRcdFx0XHRwYWNrYWdlVHlwZTogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnBhY2thZ2VUeXBlLFxuXHRcdFx0XHRcdHBhY2thZ2luZ1dlaWdodEtnOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ud2VpZ2h0LFxuXHRcdFx0XHRcdHBhY2thZ2luZ0xlbmd0aENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZUxlbmd0aCxcblx0XHRcdFx0XHRwYWNrYWdpbmdXaWR0aENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZVdpZHRoLFxuXHRcdFx0XHRcdHBhY2thZ2luZ0hlaWdodENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZUhlaWdodCxcblx0XHRcdFx0XHRwcm9kdWN0V2VpZ2h0S2c6IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wcm9kdWN0V2VpZ2h0LFxuXHRcdFx0XHRcdHByb2R1Y3RMZW5ndGhDbTogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnByb2R1Y3RMZW5ndGgsXG5cdFx0XHRcdFx0cHJvZHVjdFdpZHRoQ206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wcm9kdWN0V2lkdGgsXG5cdFx0XHRcdFx0cHJvZHVjdEhlaWdodENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucHJvZHVjdEhlaWdodCxcblx0XHRcdFx0fSxcblx0XHRcdFx0Y3JlYXRlOiB7XG5cdFx0XHRcdFx0cHJvZHVjdElkOiB2YWxpZGF0ZWRJbnB1dC5pZCxcblx0XHRcdFx0XHRwYWNrYWdlVHlwZTogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnBhY2thZ2VUeXBlLFxuXHRcdFx0XHRcdHBhY2thZ2luZ1dlaWdodEtnOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ud2VpZ2h0LFxuXHRcdFx0XHRcdHBhY2thZ2luZ0xlbmd0aENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZUxlbmd0aCxcblx0XHRcdFx0XHRwYWNrYWdpbmdXaWR0aENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZVdpZHRoLFxuXHRcdFx0XHRcdHBhY2thZ2luZ0hlaWdodENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucGFja2FnZUhlaWdodCxcblx0XHRcdFx0XHRwcm9kdWN0V2VpZ2h0S2c6IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wcm9kdWN0V2VpZ2h0LFxuXHRcdFx0XHRcdHByb2R1Y3RMZW5ndGhDbTogdmFsaWRhdGVkSW5wdXQuc2hpcHBpbmdJbmZvLnByb2R1Y3RMZW5ndGgsXG5cdFx0XHRcdFx0cHJvZHVjdFdpZHRoQ206IHZhbGlkYXRlZElucHV0LnNoaXBwaW5nSW5mby5wcm9kdWN0V2lkdGgsXG5cdFx0XHRcdFx0cHJvZHVjdEhlaWdodENtOiB2YWxpZGF0ZWRJbnB1dC5zaGlwcGluZ0luZm8ucHJvZHVjdEhlaWdodCxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIFVwZGF0ZSBjb2xsZWN0aW9uIGxpbmtzXG5cdFx0aWYgKHZhbGlkYXRlZElucHV0LmNvbGxlY3Rpb25JZHMpIHtcblx0XHRcdGF3YWl0IHR4LmNvbGxlY3Rpb25Qcm9kdWN0LmRlbGV0ZU1hbnkoe1xuXHRcdFx0XHR3aGVyZTogeyBwcm9kdWN0SWQ6IHZhbGlkYXRlZElucHV0LmlkIH0sXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKHZhbGlkYXRlZElucHV0LmNvbGxlY3Rpb25JZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRhd2FpdCB0eC5jb2xsZWN0aW9uUHJvZHVjdC5jcmVhdGVNYW55KHtcblx0XHRcdFx0XHRkYXRhOiB2YWxpZGF0ZWRJbnB1dC5jb2xsZWN0aW9uSWRzLm1hcCgoY29sbGVjdGlvbklkKSA9PiAoe1xuXHRcdFx0XHRcdFx0cHJvZHVjdElkOiB2YWxpZGF0ZWRJbnB1dC5pZCxcblx0XHRcdFx0XHRcdGNvbGxlY3Rpb25JZCxcblx0XHRcdFx0XHR9KSksXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJvZHVjdHNcIik7XG5cdHJldmFsaWRhdGVQYXRoKGAvYWRtaW4vcHJvZHVjdHMvJHt2YWxpZGF0ZWRJbnB1dC5pZH0vZWRpdGApO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuLy8gU29mdCBkZWxldGUgcHJvZHVjdCAobW92ZSB0byB0cmFzaClcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVQcm9kdWN0TWFuYWdlQWNjZXNzKCk7XG5cblx0Ly8gVmVyaWZ5IHByb2R1Y3QgYmVsb25ncyB0byB0ZW5hbnRcblx0Y29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogcHJvZHVjdElkLCB0ZW5hbnRJZCB9LFxuXHR9KTtcblx0aWYgKCFwcm9kdWN0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XG5cdH1cblxuXHRhd2FpdCBkYi5wcm9kdWN0LnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCB9LFxuXHRcdGRhdGE6IHsgZGVsZXRlZEF0OiBuZXcgRGF0ZSgpIH0sXG5cdH0pO1xuXG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2R1Y3RzXCIpO1xuXHRyZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9kdWN0cy90cmFzaFwiKTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIFJlc3RvcmUgcHJvZHVjdCBmcm9tIHRyYXNoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzdG9yZVByb2R1Y3QocHJvZHVjdElkOiBzdHJpbmcpIHtcblx0Y29uc3QgeyB0ZW5hbnRJZCB9ID0gYXdhaXQgcmVxdWlyZVByb2R1Y3RNYW5hZ2VBY2Nlc3MoKTtcblxuXHQvLyBWZXJpZnkgcHJvZHVjdCBiZWxvbmdzIHRvIHRlbmFudFxuXHRjb25zdCBwcm9kdWN0ID0gYXdhaXQgZGIucHJvZHVjdC5maW5kRmlyc3Qoe1xuXHRcdHdoZXJlOiB7IGlkOiBwcm9kdWN0SWQsIHRlbmFudElkIH0sXG5cdH0pO1xuXHRpZiAoIXByb2R1Y3QpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQcm9kdWN0IG5vdCBmb3VuZFwiKTtcblx0fVxuXG5cdGF3YWl0IGRiLnByb2R1Y3QudXBkYXRlKHtcblx0XHR3aGVyZTogeyBpZDogcHJvZHVjdElkIH0sXG5cdFx0ZGF0YTogeyBkZWxldGVkQXQ6IG51bGwgfSxcblx0fSk7XG5cblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJvZHVjdHNcIik7XG5cdHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL3Byb2R1Y3RzL3RyYXNoXCIpO1xuXG5cdHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuLy8gQnVsayByZXN0b3JlIHByb2R1Y3RzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzdG9yZVByb2R1Y3RzKHByb2R1Y3RJZHM6IHN0cmluZ1tdKSB7XG5cdGNvbnN0IHsgdGVuYW50SWQgfSA9IGF3YWl0IHJlcXVpcmVTdG9yZUFjY2VzcygpO1xuXG5cdGF3YWl0IGRiLnByb2R1Y3QudXBkYXRlTWFueSh7XG5cdFx0d2hlcmU6IHsgaWQ6IHsgaW46IHByb2R1Y3RJZHMgfSwgdGVuYW50SWQgfSxcblx0XHRkYXRhOiB7IGRlbGV0ZWRBdDogbnVsbCB9LFxuXHR9KTtcblxuXHRyZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9kdWN0c1wiKTtcblx0cmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vcHJvZHVjdHMvdHJhc2hcIik7XG5cblx0cmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vLyBQZXJtYW5lbnRseSBkZWxldGUgcHJvZHVjdFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBlcm1hbmVudGx5RGVsZXRlUHJvZHVjdChwcm9kdWN0SWQ6IHN0cmluZykge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlUHJvZHVjdERlbGV0ZUFjY2VzcygpO1xuXG5cdC8vIFZlcmlmeSBwcm9kdWN0IGJlbG9uZ3MgdG8gdGVuYW50IGFuZCBnZXQgbWVkaWEgZm9yIGNsZWFudXBcblx0Y29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZEZpcnN0KHtcblx0XHR3aGVyZTogeyBpZDogcHJvZHVjdElkLCB0ZW5hbnRJZCB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdG1lZGlhOiB7XG5cdFx0XHRcdHNlbGVjdDogeyB1cmw6IHRydWUgfSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdGlmICghcHJvZHVjdCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlByb2R1Y3Qgbm90IGZvdW5kXCIpO1xuXHR9XG5cblx0Ly8gQ29sbGVjdCBtZWRpYSBVUkxzIGZvciBjbGVhbnVwXG5cdGNvbnN0IG1lZGlhVXJscyA9IHByb2R1Y3QubWVkaWEubWFwKChtKSA9PiBtLnVybCk7XG5cblx0YXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xuXHRcdC8vIERlbGV0ZSByZWxhdGVkIGRhdGFcblx0XHRjb25zdCB2YXJpYW50cyA9IGF3YWl0IHR4LnByb2R1Y3RWYXJpYW50LmZpbmRNYW55KHtcblx0XHRcdHdoZXJlOiB7IHByb2R1Y3RJZCB9LFxuXHRcdFx0c2VsZWN0OiB7IGlkOiB0cnVlIH0sXG5cdFx0fSk7XG5cblx0XHRmb3IgKGNvbnN0IHYgb2YgdmFyaWFudHMpIHtcblx0XHRcdGF3YWl0IHR4LnZhcmlhbnRPcHRpb25NZXRhLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyB2YXJpYW50SWQ6IHYuaWQgfSB9KTtcblx0XHR9XG5cblx0XHRhd2FpdCB0eC5wcm9kdWN0VmFyaWFudC5kZWxldGVNYW55KHsgd2hlcmU6IHsgcHJvZHVjdElkIH0gfSk7XG5cdFx0YXdhaXQgdHgucHJvZHVjdE1lZGlhLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyBwcm9kdWN0SWQgfSB9KTtcblx0XHRhd2FpdCB0eC5wcm9kdWN0U2hpcHBpbmdJbmZvLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyBwcm9kdWN0SWQgfSB9KTtcblx0XHRhd2FpdCB0eC5wcm9kdWN0VHJhbnNsYXRpb24uZGVsZXRlTWFueSh7IHdoZXJlOiB7IHByb2R1Y3RJZCB9IH0pO1xuXHRcdGF3YWl0IHR4LmNvbGxlY3Rpb25Qcm9kdWN0LmRlbGV0ZU1hbnkoeyB3aGVyZTogeyBwcm9kdWN0SWQgfSB9KTtcblxuXHRcdC8vIEZpbmFsbHkgZGVsZXRlIHRoZSBwcm9kdWN0XG5cdFx0YXdhaXQgdHgucHJvZHVjdC5kZWxldGUoeyB3aGVyZTogeyBpZDogcHJvZHVjdElkIH0gfSk7XG5cdH0pO1xuXG5cdC8vIENsZWFudXAgbWVkaWEgZmlsZXMgZnJvbSBSMiAoYWZ0ZXIgREIgZGVsZXRpb24pXG5cdGlmIChtZWRpYVVybHMubGVuZ3RoID4gMCkge1xuXHRcdGF3YWl0IGNsZWFudXBQcm9kdWN0TWVkaWEobWVkaWFVcmxzLCB0ZW5hbnRJZCk7XG5cdH1cblxuXHRyZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9wcm9kdWN0cy90cmFzaFwiKTtcblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIEJ1bGsgcGVybWFuZW50bHkgZGVsZXRlIHByb2R1Y3RzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGVybWFuZW50bHlEZWxldGVQcm9kdWN0cyhwcm9kdWN0SWRzOiBzdHJpbmdbXSkge1xuXHRhd2FpdCByZXF1aXJlUHJvZHVjdERlbGV0ZUFjY2VzcygpOyAvLyBWZXJpZnkgZGVsZXRlIHBlcm1pc3Npb25cblxuXHRmb3IgKGNvbnN0IHByb2R1Y3RJZCBvZiBwcm9kdWN0SWRzKSB7XG5cdFx0YXdhaXQgcGVybWFuZW50bHlEZWxldGVQcm9kdWN0KHByb2R1Y3RJZCk7XG5cdH1cblxuXHRyZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbi8vIEdldCB0cmFzaGVkIHByb2R1Y3RzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VHJhc2hlZFByb2R1Y3RzKCkge1xuXHRjb25zdCB7IHRlbmFudElkIH0gPSBhd2FpdCByZXF1aXJlU3RvcmVBY2Nlc3MoKTtcblxuXHRjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZE1hbnkoe1xuXHRcdHdoZXJlOiB7XG5cdFx0XHR0ZW5hbnRJZCxcblx0XHRcdGRlbGV0ZWRBdDogeyBub3Q6IG51bGwgfSxcblx0XHR9LFxuXHRcdG9yZGVyQnk6IHsgZGVsZXRlZEF0OiBcImRlc2NcIiB9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdHRyYW5zbGF0aW9uczoge1xuXHRcdFx0XHR3aGVyZTogeyBsb2NhbGVJZDogXCJlblwiIH0sXG5cdFx0XHRcdHRha2U6IDEsXG5cdFx0XHR9LFxuXHRcdFx0bWVkaWE6IHtcblx0XHRcdFx0b3JkZXJCeTogeyBvcmRlcjogXCJhc2NcIiB9LFxuXHRcdFx0XHR0YWtlOiAxLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gcHJvZHVjdHMubWFwKChwKSA9PiAoe1xuXHRcdGlkOiBwLmlkLFxuXHRcdG5hbWU6IHAudHJhbnNsYXRpb25zWzBdPy5uYW1lID8/IFwiVW50aXRsZWRcIixcblx0XHRza3U6IHAuc2t1LFxuXHRcdHByaWNlOiBwLnByaWNlLFxuXHRcdGRlbGV0ZWRBdDogcC5kZWxldGVkQXQgPz8gbmV3IERhdGUoKSxcblx0XHRpbWFnZVVybDogcC5tZWRpYVswXT8udXJsID8/IG51bGwsXG5cdH0pKTtcbn1cblxuLy8gQ2xlYW4gdXAgb2xkIHRyYXNoZWQgcHJvZHVjdHMgKGNhbGxlZCBieSBjcm9uIGpvYilcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhbnVwVHJhc2hlZFByb2R1Y3RzKHJldGVudGlvbkRheXMgPSAzMCkge1xuXHQvLyBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYnkgYSBjcm9uIGpvYlxuXHQvLyBEb24ndCByZXF1aXJlIGFkbWluIC0gaXQgcnVucyBhcyBhIHN5c3RlbSB0YXNrXG5cblx0Y29uc3QgY3V0b2ZmRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGN1dG9mZkRhdGUuc2V0RGF0ZShjdXRvZmZEYXRlLmdldERhdGUoKSAtIHJldGVudGlvbkRheXMpO1xuXG5cdGNvbnN0IG9sZFByb2R1Y3RzID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdGRlbGV0ZWRBdDogeyBsdGU6IGN1dG9mZkRhdGUgfSxcblx0XHR9LFxuXHRcdHNlbGVjdDogeyBpZDogdHJ1ZSB9LFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IHByb2R1Y3Qgb2Ygb2xkUHJvZHVjdHMpIHtcblx0XHRhd2FpdCBwZXJtYW5lbnRseURlbGV0ZVByb2R1Y3QocHJvZHVjdC5pZCk7XG5cdH1cblxuXHRyZXR1cm4geyBkZWxldGVkOiBvbGRQcm9kdWN0cy5sZW5ndGggfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVRBc0NzQix3TEFBQSJ9
}),
"[project]/apps/platform/src/stores/dialog-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDialogStore",
    ()=>useDialogStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useDialogStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
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
"[project]/apps/platform/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript) <export * as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Create a Context for `indicatorPosition` and `indicator` control
const SelectContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    indicatorPosition: "left",
    indicator: null,
    indicatorVisibility: true
});
// Root Component
const Select = ({ indicatorPosition = "left", indicatorVisibility = true, indicator, ...props })=>{
    _s();
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Select.useMemo[contextValue]": ()=>({
                indicatorPosition,
                indicatorVisibility,
                indicator
            })
    }["Select.useMemo[contextValue]"], [
        indicatorPosition,
        indicatorVisibility,
        indicator
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Root, {
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
_s(Select, "JLzJfL3KLoV7bWTi3UEfulSv7uk=");
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Group, {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Value, {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_c2 = SelectValue;
// Define size variants for SelectTrigger
const selectTriggerVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])(`
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Trigger, {
        "data-slot": "select-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(selectTriggerVariants({
            size
        }), className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Icon, {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
_c3 = SelectTrigger;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollUpButton, {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
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
_c4 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollDownButton, {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
_c5 = SelectScrollDownButton;
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Content, {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover shadow-md shadow-black/5 text-secondary-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1.5 data-[side=left]:-translate-x-1.5 data-[side=right]:translate-x-1.5 data-[side=top]:-translate-y-1.5", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/apps/platform/src/components/ui/select.tsx",
                    lineNumber: 154,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Viewport, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1.5", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/platform/src/components/ui/select.tsx",
                    lineNumber: 155,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
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
_c6 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Label, {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-1.5 ps-8 pe-2 text-xs text-muted-foreground font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 175,
        columnNumber: 3
    }, this);
}
_c7 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    _s1();
    const { indicatorPosition, indicatorVisibility, indicator } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SelectContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Item, {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 text-sm outline-hidden text-foreground hover:bg-accent focus:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50", indicatorPosition === "left" ? "ps-8 pe-2" : "pe-8 ps-2", className),
        ...props,
        children: [
            indicatorVisibility && (indicator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(indicator) ? indicator : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute flex h-3.5 w-3.5 items-center justify-center", indicatorPosition === "left" ? "start-2" : "end-2"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemText, {
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
_s1(SelectItem, "FKSiJ6FGKEdW/hu/p9l0pXqmqH8=");
_c8 = SelectItem;
function SelectIndicator({ children, className, ...props }) {
    _s2();
    const { indicatorPosition } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SelectContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "select-indicator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute flex top-1/2 -translate-y-1/2 items-center justify-center", indicatorPosition === "left" ? "start-2" : "end-2", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemIndicator, {
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
_s2(SelectIndicator, "fR0cPdKGbP8PGezwXXscmBIB8vU=");
_c9 = SelectIndicator;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Separator, {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1.5 my-1.5 h-px bg-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/select.tsx",
        lineNumber: 251,
        columnNumber: 3
    }, this);
}
_c10 = SelectSeparator;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectScrollUpButton");
__turbopack_context__.k.register(_c5, "SelectScrollDownButton");
__turbopack_context__.k.register(_c6, "SelectContent");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem");
__turbopack_context__.k.register(_c9, "SelectIndicator");
__turbopack_context__.k.register(_c10, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
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
_c1 = Switch;
Switch.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Switch$React.forwardRef");
__turbopack_context__.k.register(_c1, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/tabs.tsx",
        lineNumber: 14,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = TabsList;
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/tabs.tsx",
        lineNumber: 29,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TabsTrigger;
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/tabs.tsx",
        lineNumber: 44,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TabsContent;
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TabsList$React.forwardRef");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "TabsTrigger");
__turbopack_context__.k.register(_c4, "TabsContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/textarea.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteProductDialog",
    ()=>DeleteProductDialog,
    "ProductFormDialog",
    ()=>ProductFormDialog,
    "ViewProductDialog",
    ()=>ViewProductDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/admin/polaris-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/textarea.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
function ViewProductDialog({ open, onOpenChange, product }) {
    if (!product) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-3xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: [
                                "Product Details - ",
                                product.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 65,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "View complete product information"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 66,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                    lineNumber: 64,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                    defaultValue: "general",
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                            className: "grid w-full grid-cols-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "general",
                                    children: "General"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 73,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "inventory",
                                    children: "Inventory"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 74,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "pricing",
                                    children: "Pricing"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 75,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "media",
                                    children: "Media"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 76,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 72,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "general",
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Product Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 81,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "SKU"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-mono",
                                                    children: product.sku || "N/A"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 87,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Slug"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-mono",
                                                    children: product.slug
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 91,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm",
                                                    children: product.categoryName || product.categoryId
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 97,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Brand"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm",
                                                    children: product.brandName || product.brandId || "N/A"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 105,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    children: product.deletedAt ? "Deleted" : "Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 113,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 80,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 120,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-muted-foreground",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 122,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "High-quality wireless headphones with active noise cancellation, 40-hour battery life, and premium sound quality. Perfect for music lovers and professionals."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 125,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 121,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 79,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "inventory",
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Current Stock"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold",
                                                    children: product.stock
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 135,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Reserved"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold",
                                                    children: "5"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 141,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-muted-foreground",
                                                    children: "Available"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold",
                                                    children: (product.stock ?? 0) - 5
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 147,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 134,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 154,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium",
                                            children: "Stock History"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 156,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Initial stock"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "+150"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Sold"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-600",
                                                            children: "-35"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "Restocked"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-600",
                                                            children: "+50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 157,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 155,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 133,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "pricing",
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-muted-foreground",
                                                children: "Price"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                lineNumber: 177,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold",
                                                children: product.price
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                lineNumber: 180,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                        lineNumber: 176,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-muted-foreground",
                                                children: "Cost"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                lineNumber: 183,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold",
                                                children: "$45.00"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                lineNumber: 186,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                        lineNumber: 182,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-muted-foreground",
                                                children: "Margin"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                lineNumber: 189,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold text-green-600",
                                                children: "95%"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                lineNumber: 192,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                        lineNumber: 188,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-muted-foreground",
                                                children: "Compare at Price"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                lineNumber: 195,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold line-through text-muted-foreground",
                                                children: "$129.99"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                lineNumber: 198,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                        lineNumber: 194,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                lineNumber: 175,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 174,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "media",
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-4",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-square border-2 border-dashed rounded-lg flex items-center justify-center bg-muted/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                            className: "h-8 w-8 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 212,
                                            columnNumber: 10
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                        lineNumber: 208,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                lineNumber: 206,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 205,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                    lineNumber: 71,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: ()=>onOpenChange(false),
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                        lineNumber: 220,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                    lineNumber: 219,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
            lineNumber: 63,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, this);
}
_c = ViewProductDialog;
function ProductFormDialog({ open, onOpenChange, product, mode }) {
    _s();
    const [variants, setVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: `1`,
            name: ``,
            value: ``
        }
    ]);
    const addVariant = ()=>{
        setVariants([
            ...variants,
            {
                id: Date.now().toString(),
                name: ``,
                value: ``
            }
        ]);
    };
    const removeVariant = (id)=>{
        setVariants(variants.filter((v)=>v.id !== id));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        onOpenChange(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-4xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: mode === "create" ? "Create New Product" : `Edit Product`
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 264,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: mode === "create" ? "Add a new product to your catalog" : "Update product information"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 267,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                    lineNumber: 263,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                            defaultValue: "general",
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                    className: "grid w-full grid-cols-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "general",
                                            children: "General"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 277,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "pricing",
                                            children: "Pricing"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 278,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "inventory",
                                            children: "Inventory"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 279,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "variants",
                                            children: "Variants"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 280,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 276,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "general",
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "productName",
                                                    children: "Product Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "productName",
                                                    defaultValue: product?.name,
                                                    placeholder: "Wireless Headphones",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 284,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "sku",
                                                            children: "SKU *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "sku",
                                                            defaultValue: product?.sku ?? "",
                                                            placeholder: "WH-001",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "barcode",
                                                            children: "Barcode"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "barcode",
                                                            placeholder: "1234567890123"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 294,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "category",
                                                            children: "Category *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                            defaultValue: product?.categoryId,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                    id: "category",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                        placeholder: "Select category"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                        lineNumber: 315,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                    lineNumber: 314,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "Electronics",
                                                                            children: "Electronics"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 318,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "Clothing",
                                                                            children: "Clothing"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 319,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "Home",
                                                                            children: "Home & Garden"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 320,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "Sports",
                                                                            children: "Sports"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 321,
                                                                            columnNumber: 12
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "brand",
                                                            children: "Brand"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                            defaultValue: product?.brandId ?? "",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                    id: "brand",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                        placeholder: "Select brand"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                        lineNumber: 329,
                                                                        columnNumber: 12
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 11
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "Apple",
                                                                            children: "Apple"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 332,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "Samsung",
                                                                            children: "Samsung"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 333,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "Sony",
                                                                            children: "Sony"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 334,
                                                                            columnNumber: 12
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "Nike",
                                                                            children: "Nike"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 335,
                                                                            columnNumber: 12
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                    lineNumber: 331,
                                                                    columnNumber: 11
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 310,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "description",
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                    id: "description",
                                                    placeholder: "Detailed product description...",
                                                    rows: 4
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 341,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "active",
                                                            children: "Product Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Make this product available for purchase"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                    id: "active",
                                                    defaultChecked: true
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 350,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 283,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "pricing",
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "price",
                                                            children: "Price *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "price",
                                                            type: "number",
                                                            step: "0.01",
                                                            min: "0",
                                                            defaultValue: product?.price ?? "",
                                                            placeholder: "89.99",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "comparePrice",
                                                            children: "Compare at Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "comparePrice",
                                                            type: "number",
                                                            step: "0.01",
                                                            min: "0",
                                                            placeholder: "129.99"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 362,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "cost",
                                                            children: "Cost per Item"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "cost",
                                                            type: "number",
                                                            step: "0.01",
                                                            min: "0",
                                                            placeholder: "45.00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "profit",
                                                            children: "Profit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "profit",
                                                            placeholder: "Calculated automatically",
                                                            disabled: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 387,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 408,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "taxable",
                                                            children: "Charge Tax"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "This product is taxable"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                    id: "taxable",
                                                    defaultChecked: true
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 410,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 361,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "inventory",
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "stock",
                                                            children: "Stock Quantity *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "stock",
                                                            type: "number",
                                                            min: "0",
                                                            defaultValue: product?.stock ?? "",
                                                            placeholder: "100",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "lowStock",
                                                            children: "Low Stock Alert"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "lowStock",
                                                            type: "number",
                                                            min: "0",
                                                            defaultValue: "10",
                                                            placeholder: "10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "weight",
                                                            children: "Weight (kg)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "weight",
                                                            type: "number",
                                                            step: "0.01",
                                                            min: "0",
                                                            placeholder: "0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 446,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 422,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 456,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "trackInventory",
                                                            children: "Track Inventory"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Enable stock management for this product"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                    id: "trackInventory",
                                                    defaultChecked: true
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 458,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "allowBackorder",
                                                            children: "Allow Backorders"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 10
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Customers can purchase when out of stock"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 10
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                    id: "allowBackorder"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 468,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 421,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "variants",
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: variants.map((variant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 p-4 border rounded-lg bg-muted/30",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 grid grid-cols-2 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: `variantName-${variant.id}`,
                                                                            children: "Option Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 488,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            id: `variantName-${variant.id}`,
                                                                            placeholder: "Size, Color, Material..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 491,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: `variantValue-${variant.id}`,
                                                                            children: "Values"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            id: `variantValue-${variant.id}`,
                                                                            placeholder: "S, M, L, XL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                            lineNumber: 500,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: ()=>removeVariant(variant.id),
                                                            className: "mt-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, variant.id, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 10
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 480,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            onClick: addVariant,
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 9
                                                }, this),
                                                "Add Variant Option"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 519,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 479,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 275,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                            className: "my-6"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 531,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    children: "Product Images"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 534,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-4",
                                    children: [
                                        1,
                                        2,
                                        3,
                                        4
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square border-2 border-dashed rounded-lg flex flex-col items-center justify-center bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "h-6 w-6 text-muted-foreground mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Upload"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                            lineNumber: 537,
                                            columnNumber: 9
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 535,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 533,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: ()=>onOpenChange(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 549,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                    type: "submit",
                                    children: mode === "create" ? "Create Product" : "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 556,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 548,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                    lineNumber: 274,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
            lineNumber: 262,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
        lineNumber: 261,
        columnNumber: 3
    }, this);
}
_s(ProductFormDialog, "EGaPDizjiZh52o1i6YPDdz3qb/0=");
_c1 = ProductFormDialog;
function DeleteProductDialog({ open, onOpenChange, product, onConfirm }) {
    _s1();
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDelete = async ()=>{
        if (onConfirm) {
            setIsDeleting(true);
            try {
                await onConfirm();
            } finally{
                setIsDeleting(false);
            }
        } else {
            onOpenChange(false);
        }
    };
    if (!product) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Delete Product"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 600,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Are you sure you want to delete this product? It will be moved to trash and permanently deleted after 30 days."
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 601,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                    lineNumber: 599,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border rounded-lg bg-muted/30 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Product:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 609,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 610,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 608,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "SKU:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 613,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium font-mono",
                                    children: product.sku ?? "—"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 614,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 612,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Stock:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 617,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: [
                                        product.stock ?? "—",
                                        " units"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 618,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 616,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Price:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 621,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: [
                                        "€",
                                        typeof product.price === "number" ? product.price.toFixed(2) : product.price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                                    lineNumber: 622,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 620,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                    lineNumber: 607,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            disabled: isDeleting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 632,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "destructive",
                            onClick: handleDelete,
                            disabled: isDeleting,
                            children: isDeleting ? "Deleting..." : "Delete Product"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                            lineNumber: 639,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
                    lineNumber: 631,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
            lineNumber: 598,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx",
        lineNumber: 597,
        columnNumber: 3
    }, this);
}
_s1(DeleteProductDialog, "PcvudgQ4pB1b8YUmRhNmcS3boU8=");
_c2 = DeleteProductDialog;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ViewProductDialog");
__turbopack_context__.k.register(_c1, "ProductFormDialog");
__turbopack_context__.k.register(_c2, "DeleteProductDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript) <export * as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Popover({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Root, {
        "data-slot": "popover",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/popover.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = Popover;
function PopoverTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Trigger, {
        "data-slot": "popover-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/popover.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_c1 = PopoverTrigger;
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Popover$3e$__["Popover"].Content, {
        "data-slot": "popover-content",
        align: align,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md shadow-black/5 outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/ui/popover.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, this);
}
_c2 = PopoverContent;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Popover");
__turbopack_context__.k.register(_c1, "PopoverTrigger");
__turbopack_context__.k.register(_c2, "PopoverContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductFilters",
    ()=>ProductFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/separator.tsx [app-client] (ecmascript)");
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
const STATUS_OPTIONS = [
    {
        value: "ACTIVE",
        label: "Active"
    },
    {
        value: "DRAFT",
        label: "Draft"
    },
    {
        value: "UNLISTED",
        label: "Unlisted"
    }
];
const STOCK_OPTIONS = [
    {
        value: "in_stock",
        label: "In Stock"
    },
    {
        value: "low_stock",
        label: "Low Stock"
    },
    {
        value: "out_of_stock",
        label: "Out of Stock"
    }
];
const PURCHASE_TYPE_OPTIONS = [
    {
        value: "ONE_TIME",
        label: "One-time purchase"
    },
    {
        value: "SUBSCRIPTION",
        label: "Subscription"
    },
    {
        value: "PRE_ORDER",
        label: "Pre-order"
    }
];
function ProductFilters({ categories, brands, onFiltersChange }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: searchParams.get("status"),
        categoryId: searchParams.get("categoryId"),
        brandId: searchParams.get("brandId"),
        stockStatus: searchParams.get("stockStatus"),
        purchaseType: searchParams.get("purchaseType")
    });
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Count active filters
    const activeFilterCount = Object.values(filters).filter(Boolean).length;
    // Sync URL params with filters
    const updateURLParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductFilters.useCallback[updateURLParams]": (newFilters)=>{
            const params = new URLSearchParams(searchParams.toString());
            // Update or remove each filter param
            Object.entries(newFilters).forEach({
                "ProductFilters.useCallback[updateURLParams]": ([key, value])=>{
                    if (value) {
                        params.set(key, value);
                    } else {
                        params.delete(key);
                    }
                }
            }["ProductFilters.useCallback[updateURLParams]"]);
            // Reset to page 1 when filters change
            params.delete("page");
            router.push(`${pathname}?${params.toString()}`, {
                scroll: false
            });
        }
    }["ProductFilters.useCallback[updateURLParams]"], [
        pathname,
        router,
        searchParams
    ]);
    const handleFilterChange = (key, value)=>{
        const newFilters = {
            ...filters,
            [key]: value === "all" ? null : value
        };
        setFilters(newFilters);
        updateURLParams(newFilters);
        onFiltersChange?.(newFilters);
    };
    const clearAllFilters = ()=>{
        const clearedFilters = {
            status: null,
            categoryId: null,
            brandId: null,
            stockStatus: null,
            purchaseType: null
        };
        setFilters(clearedFilters);
        updateURLParams(clearedFilters);
        onFiltersChange?.(clearedFilters);
    };
    const clearFilter = (key)=>{
        handleFilterChange(key, null);
    };
    // Get label for filter value
    const getFilterLabel = (key, value)=>{
        switch(key){
            case "status":
                return STATUS_OPTIONS.find((o)=>o.value === value)?.label ?? value;
            case "stockStatus":
                return STOCK_OPTIONS.find((o)=>o.value === value)?.label ?? value;
            case "purchaseType":
                return PURCHASE_TYPE_OPTIONS.find((o)=>o.value === value)?.label ?? value;
            case "categoryId":
                return categories.find((c)=>c.id === value)?.name ?? value;
            case "brandId":
                return brands.find((b)=>b.id === value)?.name ?? value;
            default:
                return value;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                open: isOpen,
                onOpenChange: setIsOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                    lineNumber: 155,
                                    columnNumber: 7
                                }, this),
                                "Filters",
                                activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    className: "ml-2 h-5 w-5 p-0 flex items-center justify-center rounded-full text-xs",
                                    children: activeFilterCount
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                    lineNumber: 158,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                            lineNumber: 154,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                        lineNumber: 153,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                        className: "w-80",
                        align: "start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium",
                                            children: "Filters"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 170,
                                            columnNumber: 8
                                        }, this),
                                        activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: clearAllFilters,
                                            className: "h-auto p-0 text-muted-foreground hover:text-foreground",
                                            children: "Clear all"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 172,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                    lineNumber: 169,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                    lineNumber: 183,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 187,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: filters.status ?? "all",
                                            onValueChange: (value)=>handleFilterChange("status", value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "All statuses"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "all",
                                                            children: "All statuses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 10
                                                        }, this),
                                                        STATUS_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: option.value,
                                                                children: option.label
                                                            }, option.value, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 11
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 188,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                    lineNumber: 186,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 208,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: filters.categoryId ?? "all",
                                            onValueChange: (value)=>handleFilterChange("categoryId", value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "All categories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "all",
                                                            children: "All categories"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 10
                                                        }, this),
                                                        categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: category.id,
                                                                children: category.name
                                                            }, category.id, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 11
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 209,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                    lineNumber: 207,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Brand"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 231,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: filters.brandId ?? "all",
                                            onValueChange: (value)=>handleFilterChange("brandId", value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "All brands"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "all",
                                                            children: "All brands"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 10
                                                        }, this),
                                                        brands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: brand.id,
                                                                children: brand.name
                                                            }, brand.id, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 11
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 232,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                    lineNumber: 230,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Stock Status"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 252,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: filters.stockStatus ?? "all",
                                            onValueChange: (value)=>handleFilterChange("stockStatus", value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "All stock statuses"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "all",
                                                            children: "All stock statuses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 10
                                                        }, this),
                                                        STOCK_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: option.value,
                                                                children: option.label
                                                            }, option.value, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 11
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 253,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                    lineNumber: 251,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Purchase Type"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 275,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: filters.purchaseType ?? "all",
                                            onValueChange: (value)=>handleFilterChange("purchaseType", value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "All purchase types"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 10
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "all",
                                                            children: "All purchase types"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 10
                                                        }, this),
                                                        PURCHASE_TYPE_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: option.value,
                                                                children: option.label
                                                            }, option.value, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 11
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                            lineNumber: 276,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                    lineNumber: 274,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                            lineNumber: 168,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                        lineNumber: 167,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                lineNumber: 152,
                columnNumber: 4
            }, this),
            activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    Object.entries(filters).map(([key, value])=>{
                        if (!value) return null;
                        const filterKey = key;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "secondary",
                            className: "pl-2 pr-1 py-1 flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    children: getFilterLabel(filterKey, value)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                    lineNumber: 311,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>clearFilter(filterKey),
                                    className: "ml-1 rounded-full p-0.5 hover:bg-muted",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                        lineNumber: 319,
                                        columnNumber: 10
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                                    lineNumber: 314,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                            lineNumber: 306,
                            columnNumber: 8
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: clearAllFilters,
                        className: "h-7 px-2 text-xs text-muted-foreground",
                        children: "Clear all"
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                        lineNumber: 324,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
                lineNumber: 301,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx",
        lineNumber: 151,
        columnNumber: 3
    }, this);
}
_s(ProductFilters, "NS2hPtGz2iufZKJrVeggo1whlmo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ProductFilters;
var _c;
__turbopack_context__.k.register(_c, "ProductFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/components/loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript) <export default as LoaderIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/lib/utils.ts [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderIcon$3e$__["LoaderIcon"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground animate-spin", sizeClasses[size], className)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/components/loader.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
}
_c = Loader;
const __TURBOPACK__default__export__ = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductImportExportDialog",
    ()=>ProductImportExportDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/admin/polaris-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/switch.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/server/api/internal/product-import-export'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
function ProductImportExportDialog({ open, onOpenChange, onImportComplete }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("choose");
    const [csvContent, setCsvContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [updateExisting, setUpdateExisting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [validating, setValidating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [importing, setImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exporting, setExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validationResult, setValidationResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [importResult, setImportResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [exportFormat, setExportFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("csv");
    const [includeDrafts, setIncludeDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resetState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductImportExportDialog.useCallback[resetState]": ()=>{
            setStep("choose");
            setCsvContent("");
            setFileName("");
            setValidationResult(null);
            setImportResult(null);
        }
    }["ProductImportExportDialog.useCallback[resetState]"], []);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductImportExportDialog.useCallback[handleClose]": ()=>{
            resetState();
            onOpenChange(false);
        }
    }["ProductImportExportDialog.useCallback[handleClose]"], [
        onOpenChange,
        resetState
    ]);
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductImportExportDialog.useCallback[handleFileSelect]": (event)=>{
            const file = event.target.files?.[0];
            if (!file) return;
            if (!file.name.endsWith(".csv")) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select a CSV file");
                return;
            }
            const reader = new FileReader();
            reader.onload = ({
                "ProductImportExportDialog.useCallback[handleFileSelect]": (e)=>{
                    const content = e.target?.result;
                    setCsvContent(content);
                    setFileName(file.name);
                    setStep("import");
                }
            })["ProductImportExportDialog.useCallback[handleFileSelect]"];
            reader.onerror = ({
                "ProductImportExportDialog.useCallback[handleFileSelect]": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to read file");
                }
            })["ProductImportExportDialog.useCallback[handleFileSelect]"];
            reader.readAsText(file);
            // Reset input so same file can be selected again
            event.target.value = "";
        }
    }["ProductImportExportDialog.useCallback[handleFileSelect]"], []);
    const handleValidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductImportExportDialog.useCallback[handleValidate]": async ()=>{
            if (!csvContent) return;
            setValidating(true);
            try {
                const result = await validateProductCSV(csvContent);
                setValidationResult(result);
                setStep("validate");
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Validation failed");
            } finally{
                setValidating(false);
            }
        }
    }["ProductImportExportDialog.useCallback[handleValidate]"], [
        csvContent
    ]);
    const handleImport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductImportExportDialog.useCallback[handleImport]": async ()=>{
            if (!csvContent) return;
            setImporting(true);
            setStep("importing");
            try {
                const result = await importProductsFromCSV(csvContent, {
                    updateExisting
                });
                setImportResult(result);
                setStep("result");
                if (result.success) {
                    onImportComplete?.();
                }
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Import failed");
                setStep("import");
            } finally{
                setImporting(false);
            }
        }
    }["ProductImportExportDialog.useCallback[handleImport]"], [
        csvContent,
        updateExisting,
        onImportComplete
    ]);
    const handleExport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductImportExportDialog.useCallback[handleExport]": async ()=>{
            setExporting(true);
            try {
                const content = await exportProducts({
                    format: exportFormat,
                    includeDrafts
                });
                // Download file
                const blob = new Blob([
                    content
                ], {
                    type: exportFormat === "csv" ? "text/csv" : "application/json"
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `products-export-${new Date().toISOString().split("T")[0]}.${exportFormat}`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Export completed");
                handleClose();
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Export failed");
            } finally{
                setExporting(false);
            }
        }
    }["ProductImportExportDialog.useCallback[handleExport]"], [
        exportFormat,
        includeDrafts,
        handleClose
    ]);
    const handleDownloadTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductImportExportDialog.useCallback[handleDownloadTemplate]": async ()=>{
            try {
                const template = await getProductImportTemplate();
                const blob = new Blob([
                    template
                ], {
                    type: "text/csv"
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "product-import-template.csv";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to download template");
            }
        }
    }["ProductImportExportDialog.useCallback[handleDownloadTemplate]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-lg",
            children: [
                step === "choose" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Import / Export Products"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 210,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Bulk import products from CSV or export your catalog"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 211,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 209,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-4 cursor-pointer hover:border-primary transition-colors",
                                    onClick: ()=>fileInputRef.current?.click(),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-lg bg-green-100 dark:bg-green-900",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "h-6 w-6 text-green-600 dark:text-green-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                lineNumber: 221,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-medium",
                                                        children: "Import Products"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Upload a CSV file to add or update products"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                lineNumber: 224,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                        lineNumber: 220,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 216,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-4 cursor-pointer hover:border-primary transition-colors",
                                    onClick: ()=>setStep("export"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-lg bg-blue-100 dark:bg-blue-900",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "h-6 w-6 text-blue-600 dark:text-blue-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                lineNumber: 237,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-medium",
                                                        children: "Export Products"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Download your product catalog as CSV or JSON"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                lineNumber: 240,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                        lineNumber: 236,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 232,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 215,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: handleDownloadTemplate,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                        lineNumber: 251,
                                        columnNumber: 9
                                    }, this),
                                    "Download Template"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                lineNumber: 250,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 249,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true),
                step === "import" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Import Products"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 262,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Review your file and import settings"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 263,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 261,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                        className: "h-8 w-8 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium",
                                                                children: fileName
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "CSV file selected"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                lineNumber: 270,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                onClick: ()=>{
                                                    setCsvContent("");
                                                    setFileName("");
                                                    setStep("choose");
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                lineNumber: 279,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                        lineNumber: 269,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 268,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "update-existing",
                                                    children: "Update existing products"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Products with matching SKU will be updated"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 294,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                            id: "update-existing",
                                            checked: updateExisting,
                                            onCheckedChange: setUpdateExisting
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 300,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 293,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 267,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setStep("choose"),
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 308,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                    onClick: handleValidate,
                                    loading: validating,
                                    children: "Validate & Preview"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 311,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 307,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true),
                step === "validate" && validationResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Validation Results"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 322,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: validationResult.valid ? "Your file is ready to import" : "Some rows have errors"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 323,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 321,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold",
                                                    children: validationResult.totalRows
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Total Rows"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 331,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-green-600",
                                                    children: validationResult.validRows
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Valid Rows"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 335,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 330,
                                    columnNumber: 8
                                }, this),
                                validationResult.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-destructive",
                                            children: [
                                                "Errors (",
                                                validationResult.errors.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 345,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-h-40 overflow-y-auto space-y-2",
                                            children: [
                                                validationResult.errors.slice(0, 10).map((err, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm p-2 bg-destructive/10 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: [
                                                                    "Row ",
                                                                    err.row,
                                                                    ":"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 13
                                                            }, this),
                                                            " ",
                                                            err.errors.join(", ")
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 12
                                                    }, this)),
                                                validationResult.errors.length > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: [
                                                        "...and ",
                                                        validationResult.errors.length - 10,
                                                        " more errors"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 12
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 348,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 344,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 329,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setStep("import"),
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 368,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                    onClick: handleImport,
                                    disabled: validationResult.validRows === 0,
                                    children: [
                                        "Import ",
                                        validationResult.validRows,
                                        " Products"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 371,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 367,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true),
                step === "importing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Importing Products"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 385,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Please wait while we process your file"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 386,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 384,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                                    size: "lg"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 391,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm text-muted-foreground",
                                    children: "This may take a few moments..."
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 392,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 390,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true),
                step === "result" && importResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: importResult.success ? "Import Complete" : "Import Complete with Errors"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 403,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: importResult.success ? "All products were processed successfully" : "Some products could not be imported"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 406,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 402,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-green-600",
                                                    children: importResult.imported
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Created"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 414,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-blue-600",
                                                    children: importResult.updated
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Updated"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 420,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-amber-600",
                                                    children: importResult.skipped
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Skipped"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 426,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 413,
                                    columnNumber: 8
                                }, this),
                                importResult.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-destructive flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 11
                                                }, this),
                                                "Errors (",
                                                importResult.errors.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 436,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-h-40 overflow-y-auto space-y-2",
                                            children: importResult.errors.slice(0, 10).map((err, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm p-2 bg-destructive/10 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Row ",
                                                                err.row,
                                                                " (SKU: ",
                                                                err.sku || "N/A",
                                                                "):"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                            lineNumber: 446,
                                                            columnNumber: 13
                                                        }, this),
                                                        " ",
                                                        err.error
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 12
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 440,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 435,
                                    columnNumber: 9
                                }, this),
                                importResult.success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-5 w-5 text-green-600"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 458,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-green-800 dark:text-green-200",
                                            children: "All products were imported successfully!"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 459,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 457,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 412,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                onClick: handleClose,
                                children: "Done"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                lineNumber: 466,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 465,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true),
                step === "export" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Export Products"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 475,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Choose your export format and options"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 476,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 474,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: `p-4 cursor-pointer transition-colors ${exportFormat === "csv" ? "border-primary bg-primary/5" : "hover:border-muted-foreground"}`,
                                            onClick: ()=>setExportFormat("csv"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                        className: "h-8 w-8 mx-auto mb-2 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: "CSV"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 492,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "For spreadsheets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                lineNumber: 490,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 482,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: `p-4 cursor-pointer transition-colors ${exportFormat === "json" ? "border-primary bg-primary/5" : "hover:border-muted-foreground"}`,
                                            onClick: ()=>setExportFormat("json"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                        className: "h-8 w-8 mx-auto mb-2 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: "JSON"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "For developers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                        lineNumber: 509,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                lineNumber: 506,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 498,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 481,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "include-drafts",
                                                    children: "Include draft products"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Export products that are not yet published"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 517,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                            id: "include-drafts",
                                            checked: includeDrafts,
                                            onCheckedChange: setIncludeDrafts
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 523,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 516,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 480,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setStep("choose"),
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 531,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                    onClick: handleExport,
                                    loading: exporting,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                            lineNumber: 535,
                                            columnNumber: 9
                                        }, this),
                                        "Export Products"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                                    lineNumber: 534,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                            lineNumber: 530,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ref: fileInputRef,
                    type: "file",
                    accept: ".csv",
                    onChange: handleFileSelect,
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
                    lineNumber: 543,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
            lineNumber: 205,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx",
        lineNumber: 204,
        columnNumber: 3
    }, this);
}
_s(ProductImportExportDialog, "Qnq1p/c58txzweLUwYW+fXu2+5M=");
_c = ProductImportExportDialog;
var _c;
__turbopack_context__.k.register(_c, "ProductImportExportDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/platform/src/app/(internal)/admin/products/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/admin/polaris-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$a79e09__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:a79e09 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$6c25a3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/platform/src/server/api/internal/data:6c25a3 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/stores/dialog-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$products$2f$_components$2f$product$2d$dialogs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/app/(internal)/admin/products/_components/product-dialogs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$products$2f$_components$2f$product$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/app/(internal)/admin/products/_components/product-filters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$products$2f$_components$2f$product$2d$import$2d$export$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/platform/src/app/(internal)/admin/products/_components/product-import-export-dialog.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
// TODO: Replace with real data from API
const mockCategories = [
    {
        id: "cat-1",
        name: "Electronics"
    },
    {
        id: "cat-2",
        name: "Clothing"
    },
    {
        id: "cat-3",
        name: "Home & Garden"
    },
    {
        id: "cat-4",
        name: "Sports & Outdoors"
    },
    {
        id: "cat-5",
        name: "Beauty & Health"
    }
];
const mockBrands = [
    {
        id: "brand-1",
        name: "Apple"
    },
    {
        id: "brand-2",
        name: "Samsung"
    },
    {
        id: "brand-3",
        name: "Nike"
    },
    {
        id: "brand-4",
        name: "Adidas"
    },
    {
        id: "brand-5",
        name: "Sony"
    }
];
function ProductsPageContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        total: 0,
        active: 0,
        outOfStock: 0,
        lowStock: 0
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.get("search") ?? "");
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [importExportOpen, setImportExportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        page: 1,
        pageSize: 20,
        total: 0,
        totalPages: 0
    });
    // Dialog states from zustand
    const isViewProductOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogStore"])({
        "ProductsPageContent.useDialogStore[isViewProductOpen]": (state)=>state.isViewProductOpen
    }["ProductsPageContent.useDialogStore[isViewProductOpen]"]);
    const isDeleteProductOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogStore"])({
        "ProductsPageContent.useDialogStore[isDeleteProductOpen]": (state)=>state.isDeleteProductOpen
    }["ProductsPageContent.useDialogStore[isDeleteProductOpen]"]);
    const openDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogStore"])({
        "ProductsPageContent.useDialogStore[openDialog]": (state)=>state.openDialog
    }["ProductsPageContent.useDialogStore[openDialog]"]);
    const closeDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogStore"])({
        "ProductsPageContent.useDialogStore[closeDialog]": (state)=>state.closeDialog
    }["ProductsPageContent.useDialogStore[closeDialog]"]);
    // Extract primitive values from searchParams to use as stable dependencies
    const currentPage = searchParams.get("page") ?? "1";
    const statusParam = searchParams.get("status") ?? "";
    const categoryIdParam = searchParams.get("categoryId") ?? "";
    const brandIdParam = searchParams.get("brandId") ?? "";
    const stockStatusParam = searchParams.get("stockStatus") ?? "";
    const searchParam = searchParams.get("search") ?? "";
    // Fetch products with filters
    const fetchProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductsPageContent.useCallback[fetchProducts]": async ()=>{
            setIsLoading(true);
            try {
                const page = parseInt(currentPage, 10);
                const status = statusParam;
                const categoryId = categoryIdParam || null;
                const brandId = brandIdParam || null;
                // Validate stockStatus against allowed values
                const validStockStatuses = [
                    "in_stock",
                    "out_of_stock",
                    "low_stock"
                ];
                const stockStatus = stockStatusParam && validStockStatuses.includes(stockStatusParam) ? stockStatusParam : undefined;
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$6c25a3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProducts"])({
                    page,
                    pageSize: 20,
                    status: status ? [
                        status
                    ] : undefined,
                    categoryIds: categoryId ? [
                        categoryId
                    ] : undefined,
                    brandIds: brandId ? [
                        brandId
                    ] : undefined,
                    stockStatus,
                    search: searchParam || undefined
                });
                setProducts(result.products.map({
                    "ProductsPageContent.useCallback[fetchProducts]": (p)=>({
                            id: p.id,
                            slug: p.slug,
                            name: p.name,
                            description: p.description ?? null,
                            status: p.status,
                            price: Number(p.price),
                            sku: p.sku,
                            trackStock: p.trackStock,
                            stock: p.stock,
                            categoryId: p.categoryId,
                            categoryName: p.categoryName ?? "Uncategorized",
                            brandId: p.brandId,
                            brandName: p.brandName ?? null,
                            imageUrl: p.imageUrl ?? null,
                            createdAt: new Date(p.createdAt),
                            updatedAt: new Date(p.updatedAt)
                        })
                }["ProductsPageContent.useCallback[fetchProducts]"]));
                setPagination({
                    page: result.pagination.page,
                    pageSize: result.pagination.pageSize,
                    total: result.pagination.total,
                    totalPages: result.pagination.totalPages
                });
                // Update stats
                setStats({
                    total: result.pagination.total,
                    active: result.products.filter({
                        "ProductsPageContent.useCallback[fetchProducts]": (p)=>p.status === "ACTIVE"
                    }["ProductsPageContent.useCallback[fetchProducts]"]).length,
                    outOfStock: result.products.filter({
                        "ProductsPageContent.useCallback[fetchProducts]": (p)=>p.trackStock && p.stock === 0
                    }["ProductsPageContent.useCallback[fetchProducts]"]).length,
                    lowStock: result.products.filter({
                        "ProductsPageContent.useCallback[fetchProducts]": (p)=>p.trackStock && p.stock !== null && p.stock > 0 && p.stock <= 10
                    }["ProductsPageContent.useCallback[fetchProducts]"]).length
                });
            } catch (error) {
                console.error("Failed to fetch products:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load products");
            } finally{
                setIsLoading(false);
            }
        }
    }["ProductsPageContent.useCallback[fetchProducts]"], [
        currentPage,
        statusParam,
        categoryIdParam,
        brandIdParam,
        stockStatusParam,
        searchParam
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsPageContent.useEffect": ()=>{
            fetchProducts();
        }
    }["ProductsPageContent.useEffect"], [
        fetchProducts
    ]);
    // Handle search with debounce - only update URL if searchQuery differs from URL param
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsPageContent.useEffect": ()=>{
            // Skip if searchQuery matches URL (prevents loop)
            if (searchQuery === searchParam) {
                return;
            }
            const handler = setTimeout({
                "ProductsPageContent.useEffect.handler": ()=>{
                    const params = new URLSearchParams();
                    // Rebuild params from current values
                    if (searchQuery) {
                        params.set("search", searchQuery);
                    }
                    if (statusParam) {
                        params.set("status", statusParam);
                    }
                    if (categoryIdParam) {
                        params.set("categoryId", categoryIdParam);
                    }
                    if (brandIdParam) {
                        params.set("brandId", brandIdParam);
                    }
                    if (stockStatusParam) {
                        params.set("stockStatus", stockStatusParam);
                    }
                    // Reset page when searching
                    router.push(`/admin/products?${params.toString()}`, {
                        scroll: false
                    });
                }
            }["ProductsPageContent.useEffect.handler"], 300);
            return ({
                "ProductsPageContent.useEffect": ()=>clearTimeout(handler)
            })["ProductsPageContent.useEffect"];
        }
    }["ProductsPageContent.useEffect"], [
        searchQuery,
        searchParam,
        statusParam,
        categoryIdParam,
        brandIdParam,
        stockStatusParam,
        router
    ]);
    // Event handlers
    const handleView = (product)=>{
        setSelectedProduct(product);
        openDialog("isViewProductOpen");
    };
    const handleEdit = (product)=>{
        router.push(`/admin/products/${product.id}/edit`);
    };
    const handleDelete = (product)=>{
        setSelectedProduct(product);
        openDialog("isDeleteProductOpen");
    };
    const handleConfirmDelete = async ()=>{
        if (!selectedProduct) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$server$2f$api$2f$internal$2f$data$3a$a79e09__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProduct"])(selectedProduct.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Product moved to trash");
            closeDialog("isDeleteProductOpen");
            fetchProducts();
        } catch (error) {
            console.error("Failed to delete product:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete product");
        }
    };
    const handleCreate = ()=>{
        router.push("/admin/products/new");
    };
    const handlePageChange = (newPage)=>{
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`/admin/products?${params.toString()}`, {
            scroll: false
        });
    };
    const getStatusBadge = (status)=>{
        switch(status){
            case "ACTIVE":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "secondary",
                    className: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
                    children: "Active"
                }, void 0, false, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                    lineNumber: 306,
                    columnNumber: 6
                }, this);
            case "DRAFT":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "secondary",
                    className: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
                    children: "Draft"
                }, void 0, false, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                    lineNumber: 315,
                    columnNumber: 6
                }, this);
            case "UNLISTED":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "secondary",
                    className: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
                    children: "Unlisted"
                }, void 0, false, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                    lineNumber: 324,
                    columnNumber: 6
                }, this);
        }
    };
    const getStockBadge = (product)=>{
        if (!product.trackStock) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-muted-foreground",
                children: "Not tracked"
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 336,
                columnNumber: 11
            }, this);
        }
        const stock = product.stock ?? 0;
        if (stock === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "destructive",
                className: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
                children: "Out of Stock"
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 343,
                columnNumber: 5
            }, this);
        }
        if (stock <= 10) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "secondary",
                className: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
                children: [
                    "Low: ",
                    stock
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 354,
                columnNumber: 5
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "secondary",
            className: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
            children: stock
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
            lineNumber: 364,
            columnNumber: 4
        }, this);
    };
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
                                children: "Products"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 378,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-1",
                                children: "Manage your product inventory and catalog"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 379,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                        lineNumber: 377,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: ()=>setImportExportOpen(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 7
                                    }, this),
                                    "Import / Export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 384,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin/products/trash",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 8
                                        }, this),
                                        "Trash"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                    lineNumber: 389,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 388,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                                type: "button",
                                onClick: handleCreate,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 7
                                    }, this),
                                    "Add Product"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 394,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                        lineNumber: 383,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 376,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Total Products"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 404,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: stats.total.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 405,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                        lineNumber: 403,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Active Products"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 410,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: stats.active.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 411,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                        lineNumber: 409,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Out of Stock"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 416,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: stats.outOfStock.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 417,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                        lineNumber: 415,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Low Stock"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 422,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-1",
                                children: stats.lowStock.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 423,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                        lineNumber: 421,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 402,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "search",
                                    placeholder: "Search by product name, SKU, or brand...",
                                    className: "pl-9",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                    lineNumber: 434,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                            lineNumber: 432,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$products$2f$_components$2f$product$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductFilters"], {
                            categories: mockCategories,
                            brands: mockBrands
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                            lineNumber: 442,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 7
                                }, this),
                                "Export"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                            lineNumber: 443,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                    lineNumber: 431,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 430,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-8 w-8 animate-spin text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                        lineNumber: 454,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                    lineNumber: 453,
                    columnNumber: 6
                }, this) : products.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-full bg-muted p-4 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                className: "h-8 w-8 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 459,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                            lineNumber: 458,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-medium mb-1",
                            children: "No products found"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                            lineNumber: 461,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: searchQuery || searchParams.toString() ? "Try adjusting your search or filters" : "Get started by adding your first product"
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                            lineNumber: 462,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$admin$2f$polaris$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarisButton"], {
                            type: "button",
                            onClick: handleCreate,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                    lineNumber: 468,
                                    columnNumber: 8
                                }, this),
                                "Add Product"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                            lineNumber: 467,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                    lineNumber: 457,
                    columnNumber: 6
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Product"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "SKU"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                        lineNumber: 478,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Brand"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                        lineNumber: 480,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                        lineNumber: 481,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-right",
                                        children: "Price"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                        lineNumber: 482,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "w-[70px]"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                        lineNumber: 483,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 475,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                            lineNumber: 474,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    className: "cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-10 w-10 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm overflow-hidden relative",
                                                        children: product.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: product.imageUrl,
                                                            alt: product.name,
                                                            fill: true,
                                                            className: "object-cover",
                                                            unoptimized: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 14
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                            className: "h-5 w-5 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 14
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-sm",
                                                                children: product.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 505,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-muted-foreground text-xs truncate max-w-[200px]",
                                                                children: product.slug
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 506,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                            lineNumber: 489,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: getStatusBadge(product.status)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "font-mono text-sm",
                                            children: product.sku ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                            lineNumber: 513,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: product.categoryName
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: product.brandName ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                            lineNumber: 517,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: getStockBadge(product)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                            lineNumber: 518,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            className: "text-right font-medium",
                                            children: [
                                                "€",
                                                product.price.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                            lineNumber: 519,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            variant: "ghost",
                                                            size: "icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                        align: "end",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                                children: "Actions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 530,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>handleView(product),
                                                                children: "View details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                onClick: ()=>handleEdit(product),
                                                                children: "Edit product"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 534,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                children: "Duplicate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                children: "Manage inventory"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                children: "View analytics"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 540,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 541,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                className: "text-red-600",
                                                                onClick: ()=>handleDelete(product),
                                                                children: "Delete product"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                                lineNumber: 542,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                                lineNumber: 523,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                            lineNumber: 522,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, product.id, true, {
                                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                            lineNumber: 486,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                    lineNumber: 473,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 451,
                columnNumber: 4
            }, this),
            !isLoading && products.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Showing",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: [
                                    (pagination.page - 1) * pagination.pageSize + 1,
                                    "-",
                                    Math.min(pagination.page * pagination.pageSize, pagination.total)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 563,
                                columnNumber: 7
                            }, this),
                            " ",
                            "of ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: pagination.total
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 570,
                                columnNumber: 10
                            }, this),
                            " products"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                        lineNumber: 561,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                size: "sm",
                                disabled: pagination.page <= 1,
                                onClick: ()=>handlePageChange(pagination.page - 1),
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 573,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                size: "sm",
                                disabled: pagination.page >= pagination.totalPages,
                                onClick: ()=>handlePageChange(pagination.page + 1),
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                                lineNumber: 582,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                        lineNumber: 572,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 560,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$products$2f$_components$2f$product$2d$dialogs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewProductDialog"], {
                open: isViewProductOpen,
                onOpenChange: (open)=>open ? openDialog("isViewProductOpen") : closeDialog("isViewProductOpen"),
                product: selectedProduct ? {
                    ...selectedProduct,
                    price: selectedProduct.price,
                    createdAt: selectedProduct.createdAt.toISOString(),
                    updatedAt: selectedProduct.updatedAt.toISOString(),
                    deletedAt: null
                } : null
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 596,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$products$2f$_components$2f$product$2d$dialogs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteProductDialog"], {
                open: isDeleteProductOpen,
                onOpenChange: (open)=>open ? openDialog("isDeleteProductOpen") : closeDialog("isDeleteProductOpen"),
                product: selectedProduct ? {
                    ...selectedProduct,
                    price: selectedProduct.price,
                    createdAt: selectedProduct.createdAt.toISOString(),
                    updatedAt: selectedProduct.updatedAt.toISOString(),
                    deletedAt: null
                } : null,
                onConfirm: handleConfirmDelete
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 615,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$app$2f28$internal$292f$admin$2f$products$2f$_components$2f$product$2d$import$2d$export$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductImportExportDialog"], {
                open: importExportOpen,
                onOpenChange: setImportExportOpen,
                onImportComplete: fetchProducts
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 635,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
        lineNumber: 374,
        columnNumber: 3
    }, this);
}
_s(ProductsPageContent, "pHkMmqLIXONCkg1ZjH8HDPA0rTk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$platform$2f$src$2f$stores$2f$dialog$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogStore"]
    ];
});
_c = ProductsPageContent;
function ProductsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-8 w-8 animate-spin text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
                lineNumber: 649,
                columnNumber: 6
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
            lineNumber: 648,
            columnNumber: 5
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductsPageContent, {}, void 0, false, {
            fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
            lineNumber: 653,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/platform/src/app/(internal)/admin/products/page.tsx",
        lineNumber: 646,
        columnNumber: 3
    }, this);
}
_c1 = ProductsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductsPageContent");
__turbopack_context__.k.register(_c1, "ProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_platform_src_5e48d71b._.js.map