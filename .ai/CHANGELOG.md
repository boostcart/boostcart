# BoostCart Development Changelog

> This file tracks all significant changes, decisions, and progress on the BoostCart platform.

---

## January 7, 2026

### Platform Admin (Super Admin) Pages ✅

Created platform admin dashboard for managing all tenants and users across the platform. Accessible at `/platform-admin` for users with `UserRole.ADMIN`.

**New Route Structure:**
- `apps/platform/src/app/(internal)/platform-admin/layout.tsx` - Dark-themed layout with GitHub-style UI
- `apps/platform/src/app/(internal)/platform-admin/page.tsx` - Dashboard with platform-wide stats
- `apps/platform/src/app/(internal)/platform-admin/tenants/page.tsx` - Tenant management
- `apps/platform/src/app/(internal)/platform-admin/users/page.tsx` - User management
- `apps/platform/src/app/(internal)/platform-admin/analytics/page.tsx` - Analytics placeholder
- `apps/platform/src/app/(internal)/platform-admin/settings/page.tsx` - Platform settings placeholder

**Platform Admin Features:**
- **Dashboard**: Total tenants, active tenants, total users, total products, total orders, total revenue
- **Recent Tenants Table**: Shows newest tenants with product/order counts
- **Quick Actions**: Links to manage tenants, users, and analytics
- **Dark Theme**: GitHub-style dark UI to visually distinguish from store admin

**Tenants Management:**
- List all tenants with pagination, search, and status filter
- Shows: name, email, slug, isActive status, product count, order count, staff count
- Actions: Activate/Deactivate tenant, Delete tenant
- Confirmation dialogs for status changes and deletion

**Users Management:**
- List all platform users with pagination, search, and role filter
- Shows: avatar, name, email, role (USER/ADMIN), email verification status
- Actions: Grant/Remove admin access, Delete user
- Prevents self-deletion and self-demotion from admin
- Confirmation dialogs for role changes and deletion

**Server Actions:**
`apps/platform/src/server/api/platform/actions.ts`:
- `requirePlatformAdmin()` - Auth helper checking `session.user.role === "ADMIN"`
- `getPlatformStats()` - Aggregates tenant, user, product, order counts + revenue
- `getTenants(options)` - Paginated tenant list with search/filter
- `updateTenantStatus(id, isActive)` - Activate/deactivate tenant
- `deleteTenant(id)` - Delete tenant and all data
- `getPlatformUsers(options)` - Paginated user list with search/filter
- `updateUserRole(id, role)` - Change user role (USER/ADMIN)
- `deleteUser(id)` - Delete platform user

**Schema Notes:**
- Uses `Tenant.isActive: boolean` instead of status enum
- Uses `Order.totalAmount` for revenue calculation (not `total`)
- `UserRole` enum: `USER`, `ADMIN` for platform-level roles
- `StaffRole` enum: `OWNER`, `ADMIN`, `MANAGER`, `SUPPORT`, `VIEWER` for tenant-level roles

---

## January 6, 2026

### Fixed Pages, Locales, and Server Actions ✅

Fixed issues with Pages, Locales admin pages that were using mock data and had incorrect type definitions.

**Pages Admin (`/admin/pages/page.tsx`):**
- Rewrote entire page to use real server actions instead of `mockPages` array
- Integrated `getPages()`, `createPage()`, `updatePage()`, `deletePage()`, `togglePageActive()`, `getPageTypes()`
- Integrated `getOrCreateDefaultLocale()` to ensure valid locale ID for translations
- Replaced external dialog components with inline Dialog components
- Added loading state, form validation, toast notifications
- Removed unused `page-dialogs.tsx` component file

**Locales Admin (`/admin/locales/page.tsx`):**
- Rewrote entire page to use real server actions instead of `mockLocales` array
- Integrated `getLocales()`, `createLocale()`, `updateLocale()`, `deleteLocale()`, `setDefaultLocale()`
- Fixed interface to match actual Prisma schema (Locale model has no `isActive`, `createdAt`, `updatedAt`)
- Simplified UI to match actual data structure (removed Status column)
- Removed unused `locale-dialogs.tsx` component file

**Server Actions Created:**
`apps/platform/src/server/api/internal/locales.ts`:
- `getOrCreateDefaultLocale()` - Returns or creates default locale (bg-BG for Bulgarian platform)
- `getLocales()` - Get all locales sorted by default first
- `getLocale(id)` - Get single locale by ID
- `createLocale(input)` - Create new locale with code/name
- `updateLocale(id, input)` - Update locale code/name
- `deleteLocale(id)` - Delete locale (prevents deleting default)
- `setDefaultLocale(id)` - Set a locale as default (unsets others)

**Bug Fixes:**
- Fixed TypeScript error where `isActive` was being passed to create/update inputs (not in schema)
- Fixed TypeScript error where return type didn't include `isActive`, `createdAt`, `updatedAt`
- Removed unused Switch import from locales page

---

## January 5, 2026

### Settings & Analytics Pages Integration ✅

Integrated Settings and Analytics admin pages with real data from new server actions.

**New Server Actions:**

`apps/platform/src/server/api/internal/settings.ts`:
- `getTenantSettings()` - Get full tenant settings with domains
- `updateStoreInfo(input)` - Update store name, description, email, phone
- `updateLocalization(input)` - Update currency, locale, timezone
- `updateTheme(input)` - Update themeId and themeConfig (JSON)
- `updateStoreLogo(logoUrl)` / `updateStoreFavicon(faviconUrl)`
- `getEnabledPaymentMethods()` / `getEnabledShippingMethods()`
- `togglePaymentMethod(id)` / `toggleShippingMethod(id)`
- `addCustomDomain(domain)` / `removeCustomDomain(domainId)` / `setPrimaryDomain(domainId)`

`apps/platform/src/server/api/internal/analytics.ts`:
- `getAnalyticsOverview(period)` - Revenue, orders, customers, products sold with growth %
- `getTopProducts(period, limit)` - Top products by revenue with sales count and growth
- `getTopCategories(period, limit)` - Top categories by revenue with order count and share %
- `getRecentActivity(limit)` - Combined feed of orders, customers, reviews with relative time
- `getOrdersByStatus(period)` - Orders grouped by status
- `getRevenueByDay(period)` - Daily revenue data for charts
- Helper: `getDateRange(period)` - Calculates start/end dates for 7days/30days/90days/year
- Helper: `getRelativeTime(date)` - Human-readable relative timestamps

**Settings Page Updates:**
- Form state management with useState for all fields
- Fetches real tenant data with `getTenantSettings()` on mount
- Store Information form: name, email, phone, description (save with `updateStoreInfo()`)
- Localization form: locale, currency, timezone (save with `updateLocalization()`)
- Payment methods list from `getEnabledPaymentMethods()` with toggle buttons
- Shipping methods list from `getEnabledShippingMethods()` with toggle buttons
- New Billing Status card showing billingStatus, billingCycle, trialEndsAt, currentPeriodEnd
- Loading state with Loader2 spinner
- Toast notifications for success/error

**Analytics Page Updates:**
- Period selector (7days, 30days, 90days, year) with controlled state
- Re-fetches all data when period changes
- Key metrics: Revenue, Orders, New Customers, Avg Order Value (with growth %)
- Secondary metrics: New Customers, Products Sold, Store Views (-), Cart Abandonment (-)
- Top Products list with rank, name, sales count, revenue, growth %
- Top Categories with progress bars showing revenue share
- Recent Activity feed with action, details, relative time
- Empty states for all sections when no data
- `formatCurrency()` and `formatNumber()` helpers with bg-BG locale

**Progress:** Phase 2 now at 85% completion

---

## January 2, 2026

### UI Package Migration & Remaining Admin Pages ✅

Migrated UI components to `@boostcart/ui` package and integrated remaining admin pages with server actions.

**UI Package Migration:**
- Added components to `packages/ui/src/`:
  - `badge.tsx` - Status badges with variants
  - `card.tsx` - Card container with header/footer/content
  - `separator.tsx` - Visual dividers
  - `label.tsx` - Form labels
  - `scroll-area.tsx` - Scrollable containers
  - `tooltip.tsx` - Hover tooltips
- Updated `packages/ui/src/index.ts` with all exports
- All components use `./lib/utils` for cn function (package-relative)

**Product Pages Updated:**
- `products/new/page.tsx` - Replaced mock data with real server action calls
- `products/[productId]/edit/page.tsx` - Same treatment
- Both use `Promise.all([getCategories(), getBrands(), getCollections()])` for parallel fetching
- Added loading state with Loader2 spinner

**Reviews Page Integration:**
- Full rewrite of `reviews/page.tsx` with server action integration
- Uses `getReviews()`, `approveReview()`, `unapproveReview()`, `deleteReview()`
- Added `mapReviewToDisplay()` function to transform server data
- Stats calculated from real data (totalReviews, pendingReviews, avgRating, thisMonth)
- Clickable badge for approve/unapprove toggle
- Updated `review-dialogs.tsx` with `onConfirm` and `onSuccess` callbacks

**Discounts Page Integration:**
- Full rewrite of `discounts/page.tsx` with server action integration
- Uses `getDiscounts()`, `toggleDiscountStatus()`, `deleteDiscount()`
- Added `mapDiscountToDisplay()` function
- Stats: totalDiscounts, activeDiscounts, totalUses
- Search and type filter with `React.useMemo` for filteredDiscounts
- Empty state with conditional action button
- Updated `discount-dialogs.tsx` with `onConfirm` and `onSuccess` callbacks

**Gift Cards Page Integration:**
- Full rewrite of `gift-cards/page.tsx` with server action integration
- Uses `getGiftCards()`, `deleteGiftCard()`, `deactivateGiftCard()`
- Added `mapGiftCardToDisplay()` function with status calculation
- Stats: totalGiftCards, activeGiftCards, totalValue, redeemedValue
- Clickable badge for deactivate toggle
- Empty state with action button
- Updated `gift-card-dialogs.tsx` with `onConfirm` and `onSuccess` callbacks

**Progress:** Phase 2 now at 75% completion

---

## January 1, 2026

### Form Dialogs Full Integration ✅

Updated all admin form dialogs to use proper state management and integrate with server actions for create/edit operations:

**Modified Files:**
- `apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx`
- `apps/platform/src/app/(internal)/admin/brands/_components/brand-dialogs.tsx`
- `apps/platform/src/app/(internal)/admin/collections/_components/collection-dialogs.tsx`
- `apps/platform/src/app/(internal)/admin/customers/_components/customer-dialogs.tsx`
- Updated parent pages to pass `onSuccess` callbacks for data refresh

**CategoryFormDialog:**
- Added controlled state for name, slug, description, parentId, isActive
- Auto-generate slug from name (create mode only)
- Integrated with `createCategory()` and `updateCategory()` server actions
- Added loading state with Loader2 spinner
- Dynamic parent category selection from categories list
- Prevents selecting self as parent in edit mode
- Added `onSuccess` callback for list refresh

**BrandFormDialog:**
- Added controlled state for name, slug, description, logoUrl, websiteUrl, isActive, isFeatured
- Auto-generate slug from name (create mode only)
- Integrated with `createBrand()` and `updateBrand()` server actions
- Added loading state and form disable during submission
- Added `onSuccess` callback for list refresh

**CollectionFormDialog:**
- Complex tabbed form with General, Products, and Automation Rules tabs
- Controlled state for name, slug, description, type, isActive, isFeatured, rules
- Integrated with `createCollection()` and `updateCollection()` server actions
- Dynamic rules management with add/remove functionality
- Collection type changes dynamically show/hide automation rules
- Added `onSuccess` callback for list refresh

**CustomerFormDialog:**
- Simplified form with Personal Info and Address tabs
- Controlled state for firstName, lastName, email, phone, acceptsMarketing
- Integrated with `createCustomer()` and `updateCustomer()` server actions
- Name parsing for edit mode (splits customer.name into first/last)
- Added `onSuccess` callback for list refresh

**Technical Pattern:**
All form dialogs now follow consistent pattern:
1. State variables for each form field with useState
2. useEffect to reset form when dialog opens or entity changes
3. Auto-generate slug from name in create mode
4. handleSubmit async function with try/catch and toast notifications
5. Loading state disables all form inputs and shows spinner
6. onSuccess callback triggers parent page data refresh

**TypeScript:** All changes pass type checking

---

## December 30, 2025

### Orders & Customers Admin UI Integration ✅

Continued Phase 2 integration, connecting Orders and Customers pages with real server actions:

**Modified Files:**
- `apps/platform/src/app/(internal)/admin/orders/page.tsx` - Full backend integration
- `apps/platform/src/app/(internal)/admin/customers/page.tsx` - Full backend integration
- `apps/platform/src/app/(internal)/admin/customers/_components/customer-dialogs.tsx` - Added onConfirm prop to DeleteCustomerDialog

**Orders Page:**
- Removed mock data and integrated with `getOrders()` server action
- Added loading states with Loader2 spinner
- Added error handling with toast notifications
- Transform API response to match UI Order type expectations
- Handled Prisma Decimal to Number conversion for totalAmount
- Stats now computed dynamically from real order data
- Search/filter functionality works with live data

**Customers Page:**
- Removed mock data and integrated with `getCustomers()` server action
- Added loading/empty states with contextual messaging
- Implemented delete functionality via `deleteCustomer()`
- Computed statistics from real data (total, active, order count)
- Transform API data including customer name concatenation
- Delete confirmation dialog now uses proper async onConfirm handler

**Brands Stats Fix:**
- Fixed hardcoded stats in brands page to use computed values from brands array

**Technical Details:**
- All admin list pages now follow consistent pattern: state → fetchData callback → filter useEffect → event handlers → conditional JSX
- TypeScript compilation passing for all modified files

---

### Brands & Collections Admin UI Integration ✅

Integrated brands and collections management pages with real server actions:

**Modified Files:**
- `apps/platform/src/app/(internal)/admin/brands/page.tsx` - Connected to backend APIs
- `apps/platform/src/app/(internal)/admin/brands/_components/brand-dialogs.tsx` - Added onConfirm prop
- `apps/platform/src/app/(internal)/admin/collections/page.tsx` - Connected to backend APIs
- `apps/platform/src/app/(internal)/admin/collections/_components/collection-dialogs.tsx` - Added onConfirm prop

**Brands Page:**
- Removed mock data and integrated with `getBrands()` server action
- Added loading states with Loader2 spinner
- Added error handling with toast notifications
- Implemented real-time brand deletion via `deleteBrand()`
- Computed statistics from real data (total brands, active brands, total products)
- Transform API response to match UI component expectations

**Collections Page:**
- Removed mock data and integrated with `getCollections()` server action
- Added loading/empty states
- Implemented delete functionality via `deleteCollection()`
- Computed dynamic statistics (total, active, products, avg products per collection)
- Transform API data to include computed fields

**Technical Details:**
- Created type transformation layers for both brands and collections
- Brand model missing: websiteUrl, isActive, isFeatured fields (noted in TODOs)
- Collection model missing: name, description, type, featured fields (noted in TODOs)
- All TypeScript errors resolved - full typecheck passes

### Categories Admin UI Integration ✅

Integrated the categories management page with real server actions:

**Modified Files:**
- `apps/platform/src/app/(internal)/admin/categories/page.tsx` - Connected to backend APIs
- `apps/platform/src/app/(internal)/admin/categories/_components/category-dialogs.tsx` - Updated types

**Changes:**
- Removed mock data and integrated with `getCategories()` server action
- Added loading states with Loader2 spinner
- Added error handling with toast notifications
- Implemented real-time category deletion via `deleteCategory()`
- Added search/filter functionality working with live data
- Computed statistics (root categories, subcategories, total products) from real data
- Fixed type mismatches between API types and dialog component types
- Added type transformation layer to bridge backend and UI components

**Technical Details:**
- Created separate `ApiCategory` and `Category` interfaces
- Transform API response to include flattened counts and parent slug
- Dialogs now receive properly typed data matching their expected structure
- All TypeScript errors resolved - full typecheck passes

**TODOs for Future:**
- Add `name` field to Category model (currently using slug as name)
- Add `status` field to Category model (currently hardcoded as "Active")
- Update CategoryFormDialog to support create/edit with real API calls
- Update DeleteCategoryDialog to integrate with actual delete handler

---

## December 29, 2025

### Server Actions with Tenant Filtering ✅

Created complete server action APIs for core admin entities, all properly filtered by tenant:

**New Files:**
- `apps/platform/src/server/api/internal/orders.ts` - Order management with status updates
- `apps/platform/src/server/api/internal/customers.ts` - Customer CRUD with anonymization
- `apps/platform/src/server/api/internal/categories.ts` - Category management with hierarchy
- `apps/platform/src/server/api/internal/brands.ts` - Brand CRUD operations
- `apps/platform/src/server/api/internal/collections.ts` - Collection management with product associations

**Orders API (`orders.ts`):**
- `getOrders()` - List all orders for tenant with customer, items, shipping/payment methods
- `getOrder(id)` - Get single order with full details and history
- `updateOrderStatus(orderId, status)` - Change order status (PENDING, CONFIRMED, etc.)
- `updatePaymentStatus(orderId, paymentStatus)` - Update payment status
- `addOrderNote(orderId, note)` - Add notes via OrderHistory
- `cancelOrder(orderId, reason)` - Cancel order with optional reason in history
- `fulfillOrder(orderId, trackingNumber, trackingUrl)` - Mark as delivered with tracking

**Customers API (`customers.ts`):**
- `getCustomers()` - List all customers for tenant with order/address counts
- `getCustomer(id)` - Get customer with recent orders and addresses
- `createCustomer(input)` - Create new customer (checks email uniqueness per tenant)
- `updateCustomer(id, input)` - Update customer details
- `deleteCustomer(id)` - Delete customer (only if no orders)
- `anonymizeCustomer(id)` - GDPR-compliant anonymization for customers with orders

**Categories API (`categories.ts`):**
- `getCategories()` - List all categories with parent and product/subcategory counts
- `getCategory(id)` - Get category with parent, subcategories, and products
- `createCategory(input)` - Create category with slug validation
- `updateCategory(id, input)` - Update category (prevents circular parent references)
- `deleteCategory(id)` - Delete category (only if no products or subcategories)

**Brands API (`brands.ts`):**
- `getBrands()` - List all brands with product counts
- `getBrand(id)` - Get brand with products
- `createBrand(input)` - Create brand with slug validation
- `updateBrand(id, input)` - Update brand details
- `deleteBrand(id)` - Delete brand (only if no products)

**Collections API (`collections.ts`):**
- `getCollections()` - List all collections with product counts
- `getCollection(id)` - Get collection with products
- `createCollection(input)` - Create collection with slug validation
- `updateCollection(id, input)` - Update collection details
- `deleteCollection(id)` - Delete collection (products remain)
- `addProductsToCollection(collectionId, productIds)` - Bulk add products
- `removeProductsFromCollection(collectionId, productIds)` - Bulk remove products

**Common Pattern:**
All APIs use the same `requireStoreAccess()` helper that:
1. Checks user authentication
2. Gets current tenant via `requireAdminTenant()`
3. Verifies user has `TenantStaff` record for this tenant
4. Returns `{ userId, tenantId, role }` for use in queries

All create/update/delete operations verify tenant ownership before executing.

**Schema Alignment:**
- Fixed Category to use `subCategories` not `children`
- Orders use embedded address fields, not relations
- OrderHistory stores notes/tracking info (not Order directly)
- OrderItem has `selectedVariant` not `productVariant`
- Customer has no `tags` or `notes` fields in base model

---

### Additional Server Actions ✅

Completed remaining core admin APIs with tenant filtering:

**Reviews API (`reviews.ts`):**
- `getReviews(productId?)` - List reviews for tenant, optionally filtered by product
- `getReview(id)` - Get single review with product and customer details
- `approveReview(id)` - Approve a review for display
- `unapproveReview(id)` - Unapprove a review
- `deleteReview(id)` - Delete a review
- `bulkApproveReviews(ids)` - Bulk approve multiple reviews
- `bulkDeleteReviews(ids)` - Bulk delete multiple reviews

**Discounts API (`discounts.ts`):**
- `getDiscounts()` - List all discounts with scope counts
- `getDiscount(id)` - Get discount with related products/categories/brands
- `createDiscount(input)` - Create discount with scope (ALL_PRODUCTS, PRODUCT, CATEGORY, BRAND)
- `updateDiscount(id, input)` - Update discount and relationships
- `deleteDiscount(id)` - Delete discount
- `toggleDiscountStatus(id)` - Activate/deactivate discount

**Gift Cards API (`gift-cards.ts`):**
- `getGiftCards()` - List all gift cards with usage stats
- `getGiftCard(id)` - Get gift card with order history
- `createGiftCard(input)` - Create gift card with auto-generated code
- `updateGiftCard(id, input)` - Update balance or expiration
- `deactivateGiftCard(id)` - Deactivate a gift card
- `deleteGiftCard(id)` - Delete unused gift card
- `checkGiftCardBalance(code)` - Validate and check gift card balance

**Shipping Methods API (`shipping.ts`):**
- `getShippingMethods()` - List all shipping methods
- `getShippingMethod(id)` - Get shipping method details
- `createShippingMethod(input)` - Create new shipping method (IN_STORE, TO_ADDRESS, DELIVERY_BOX, DELIVERY_OFFICE)
- `updateShippingMethod(id, input)` - Update method details
- `deleteShippingMethod(id)` - Delete unused method
- `toggleShippingMethodStatus(id)` - Activate/deactivate method

**Payment Methods API (`payments.ts`):**
- `getPaymentMethods()` - List all payment methods
- `getPaymentMethod(id)` - Get payment method details
- `createPaymentMethod(input)` - Create new payment method (CASH_ON_DELIVERY, CREDIT_CARD, etc.)
- `updatePaymentMethod(id, input)` - Update method details
- `deletePaymentMethod(id)` - Delete unused method
- `togglePaymentMethodStatus(id)` - Activate/deactivate method

All APIs prevent deletion of entities that have been used in orders, recommending deactivation instead for data integrity.

---

## December 30, 2025

### Tenant Context & Dashboard ✅

Added tenant-aware admin dashboard with real data:

**New Files:**
- `apps/platform/src/providers/tenant-provider.tsx` - React context for tenant data
- Added `getCurrentTenant()` to tenant.ts - Fetches tenant with stats

**Features:**
- Dashboard shows store name, slug, and billing status
- Real-time stats: Total Revenue, Orders, Products, Customers
- Trial banner with days remaining countdown
- Warning when trial is about to expire (≤3 days)
- Currency formatting based on tenant locale (BGN default)

**Authorization Fix:**
- Changed `(internal)/layout.tsx` to check store ownership instead of ADMIN role
- Any user with a store can now access admin (not just platform admins)
- Redirects to `/signin` if not logged in
- Redirects to `/onboarding` if no store

---

### Tenant Onboarding Flow ✅

Created complete store onboarding experience for new users:

**New Files:**
- `apps/platform/src/app/(private)/onboarding/page.tsx` - Store creation wizard
- `apps/platform/src/server/api/private/tenant.ts` - Server actions for tenant management
- `apps/platform/src/schemas/index.ts` - Added `CreateStoreSchema`

**Features:**
- Store name and URL (slug) input with real-time validation
- Auto-generates slug from store name
- Slug availability checking with debounce
- Suggests alternative slugs if taken
- Industry selection (optional) for future customization
- 14-day free trial automatically applied
- Creates `TenantStaff` record linking user as OWNER

**Server Actions:**
- `checkSlugAvailability(slug)` - Checks if slug is available, suggests alternatives
- `createStore(data)` - Creates tenant + links user as owner in transaction
- `getUserStores()` - Returns all stores user has access to
- `userHasStore()` - Quick check if user owns/manages any store

**Redirect Logic:**
- Admin pages (`/admin/*`) now redirect to `/onboarding` if user has no store
- Updated `apps/platform/src/app/(internal)/layout.tsx` with store check

**Reserved Slugs:**
`admin`, `api`, `app`, `www`, `mail`, `ftp`, `blog`, `help`, `support`, `docs`, `status`, `cdn`, `assets`, `static`, `boostcart`

---

### Auth Package Extraction ✅

Created `@boostcart/auth` package with reusable authentication logic:

**Structure:**
```
packages/auth/
├── package.json           # Dependencies: better-auth, resend
├── tsconfig.json          # Extends ../config/typescript/library.json
└── src/
    ├── index.ts           # Re-exports all modules
    ├── types.ts           # Session, User, AuthConfig interfaces
    ├── server.ts          # createAuth() factory function
    ├── client.ts          # createAuthClient() for React
    └── email-templates.ts # Centralized email templates
```

**Key Features:**
- Factory pattern: `createAuth(config)` allows platform-specific configuration
- Email templates for: password reset, magic link, email verification
- Better Auth integration with Prisma adapter
- Support for: email/password, magic link, Google OAuth

**Platform Integration:**
- `apps/platform/src/server/auth/auth.ts` now uses `createAuth()` from `@boostcart/auth/server`
- `apps/platform/src/lib/auth-client.ts` now uses `createAuthClient()` from `@boostcart/auth/client`

**TypeScript passes** - all 4 package typechecks successful.

---

## December 29, 2025 (Late Night - Part 2)

### Next.js 16 Migration: Middleware → Proxy ✅

As of Next.js 16, middleware has been renamed to proxy:

- ✅ Renamed `src/middleware.ts` → `src/proxy.ts`
- ✅ Renamed exported function from `middleware()` → `proxy()`
- ✅ Updated documentation in CURRENT.md
- ✅ TypeScript compiles successfully

**Why the change?**
Next.js renamed middleware to proxy because:
1. The term "middleware" was often confused with Express.js middleware
2. "Proxy" better describes its purpose - it acts as a network boundary in front of the app
3. Proxy can run at the Edge, closer to the client

**No functional changes** - the multi-tenant routing logic remains the same.

---

## December 29, 2025 (Late Night)

### Multi-Tenant Schema Migration ✅

- ✅ Fixed Prisma schema after db pull corrupted relation names
- ✅ Restored original schema from git and manually added multi-tenant models
- ✅ Applied migration successfully (20251229015436_add_multi_tenant_models)
- ✅ Fixed TypeScript errors in tenant.ts and products.ts
- ✅ Updated Product API with tenant context (`requireAdminWithTenant`)

**Schema is now correctly structured with:**
- Lowercase relation names (e.g., `tenant`, `category`, `brand`)
- `@default(cuid())` on all id fields
- `@updatedAt` on all updatedAt fields
- Proper indexes for multi-tenant queries

---

## December 29, 2025 (Night)

### CI/CD Pipeline ✅

- ✅ Created `.github/workflows/ci.yml` - lint, test, build pipeline
- ✅ Created `.github/workflows/deploy.yml` - Vercel deployment
- ✅ Created `.github/PULL_REQUEST_TEMPLATE.md`
- ✅ Added `test` script to root package.json

### Multi-Tenant Schema ✅

Added comprehensive multi-tenant support to the database:

**New Models:**

- `Tenant` - Store/shop with billing, theme, settings
- `TenantStaff` - Links Users to Tenants with roles (OWNER, ADMIN, MANAGER, SUPPORT, VIEWER)
- `TenantDomain` - Custom domain support with DNS/SSL verification
- `Customer` - Per-tenant customers (separate from platform Users)
- `CustomerAddress` - Customer shipping/billing addresses
- `CustomerSession` - Customer auth sessions

**Updated Models with tenantId:**

- `Product`, `Category`, `Brand`, `Collection`
- `Order`, `Cart`, `CartItem`
- `Discount`, `PromoCode`, `GiftCard`
- `Review`, `Page`, `Filter`
- `ShippingMethod`, `PaymentMethod`
- `WishlistItem` (now supports both User and Customer)

**New Enums:**

- `BillingStatus` - TRIAL, ACTIVE, PAST_DUE, CANCELLED, SUSPENDED
- `BillingCycle` - MONTHLY, YEARLY
- `StaffRole` - OWNER, ADMIN, MANAGER, SUPPORT, VIEWER

### Tenant Middleware ✅

- ✅ Created `src/middleware.ts` - subdomain & custom domain routing
- ✅ Created `src/lib/tenant.ts` - tenant lookup with caching
- ✅ Created `src/lib/tenant-context.ts` - React context for tenant
- ✅ Created `src/server/tenant.ts` - server-side tenant helpers

---

## December 29, 2025 (Evening)

### Monorepo Migration Complete ✅

- ✅ Installed Turborepo v2.7.2
- ✅ Created `apps/platform` - moved all Next.js app code
- ✅ Created `packages/database` - Prisma schema & client
- ✅ Created `packages/ui` - scaffolded for shared components
- ✅ Created `packages/config` - shared TypeScript configs
- ✅ Configured workspace packages with Bun
- ✅ Updated all imports from `@/generated/prisma` to `@boostcart/database`
- ✅ Symlinked `.env` to `apps/platform` for Next.js
- ✅ Verified dev server runs correctly

### New Structure

```
boostcart/
├── apps/
│   └── platform/           # Main Next.js app
├── packages/
│   ├── database/           # Prisma schema, client, types
│   ├── ui/                 # Shared components (scaffolded)
│   └── config/             # TypeScript configs
├── turbo.json              # Turborepo configuration
└── package.json            # Root workspace config
```

### Package Dependencies

- `@boostcart/platform` depends on `@boostcart/database`, `@boostcart/ui`
- `@boostcart/database` exports Prisma client and all generated types
- `@boostcart/ui` exports `cn()` utility (components to be migrated)

---

## December 29, 2025

### Project Setup

- ✅ Created comprehensive platform plan (`PLATFORM_PLAN.md`)
- ✅ Set up `.ai` folder for development tracking
- ✅ Established development context and instructions

### Architecture Decisions

- **Package Manager**: Bun (instead of pnpm) - faster, native TS support
- **Framework**: Next.js 16 with App Router
- **Database**: PostgreSQL with Prisma
- **Auth**: Better Auth for platform users, JWT for customers
- **Hosting**: Vercel + Neon + Upstash + Cloudflare R2

### Planning Complete

- Defined 12-phase roadmap (52 weeks)
- Designed multi-tenant architecture
- Created database schema (15+ models)
- Planned plugin system (OAuth + webhooks)
- Planned theme engine (CDN + hybrid rendering)
- Planned visual editor (35+ blocks)

---

## Template for Future Entries

```markdown
## [Date]

### [Category]
- ✅ Completed item
- 🔄 In progress item
- ❌ Blocked item (reason)
- 💡 Decision: [what and why]

### Issues Encountered
- **Issue**: Description
- **Solution**: How we fixed it

### Notes
- Any relevant context
```
