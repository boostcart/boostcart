# Current Development Status

> Quick reference for current work, blockers, and immediate next steps.

---

## 🎯 Current Phase: Phase 2 - Multi-Tenant Foundation

**Status**: In Progress (95% complete)  
**Target**: Weeks 5-8  
**Goal**: Tenant management, subdomain routing, platform admin, RBAC

---

## 📋 Immediate Tasks

### Completed ✅

**Phase 1:**
1. [x] Initialize Turborepo monorepo structure
2. [x] Set up workspace packages (`@boostcart/platform`, `@boostcart/database`, `@boostcart/ui`, `@boostcart/config`)
3. [x] Configure shared TypeScript config
4. [x] Migrate existing code to `apps/platform`
5. [x] Extract database package with Prisma
6. [x] Set up CI/CD pipeline (GitHub Actions)
7. [x] Add multi-tenant schema (Tenant, TenantStaff, TenantDomain, Customer, CustomerAddress, CustomerSession)
8. [x] Create tenant proxy for subdomain routing (Next.js 16 uses `proxy.ts` instead of `middleware.ts`)
9. [x] Apply multi-tenant schema migration to database
10. [x] Update Product API with tenant context
11. [x] Extract auth package (`@boostcart/auth`) with factory functions
12. [x] Create tenant onboarding flow
13. [x] Create tenant context provider for admin dashboard
14. [x] Update admin dashboard with real tenant data
15. [x] Create server actions for Orders, Customers, Categories, Brands, Collections (all with tenant filtering)
16. [x] Create server actions for Reviews, Discounts, Gift Cards, Shipping Methods, Payment Methods

**Phase 2:**
1. [x] Integrate Categories admin page with server actions
2. [x] Integrate Brands admin page with server actions
3. [x] Integrate Collections admin page with server actions
4. [x] Integrate Orders admin page with server actions
5. [x] Integrate Customers admin page with server actions
6. [x] Update CategoryFormDialog to support create/edit operations
7. [x] Update BrandFormDialog to support create/edit operations
8. [x] Update CollectionFormDialog to support create/edit operations
9. [x] Update CustomerFormDialog to support create/edit operations
10. [x] Migrate UI components to `@boostcart/ui` (badge, card, separator, label, scroll-area, tooltip)
11. [x] Update Product new/edit pages to use real data
12. [x] Integrate Reviews admin page with server actions
13. [x] Integrate Discounts admin page with server actions
14. [x] Integrate Gift Cards admin page with server actions
15. [x] Create Settings server actions (tenant settings, localization, payment/shipping methods)
16. [x] Integrate Settings admin page with server actions
17. [x] Create Analytics server actions (overview, top products, top categories, recent activity)
18. [x] Integrate Analytics admin page with server actions
19. [x] Create platform admin dashboard (super admin) at `/platform-admin`
20. [x] Create tenant management page (list/activate/deactivate/delete)
21. [x] Create user management page (list/role change/delete)
22. [x] Create platform server actions with ADMIN role check

### Up Next

1. [ ] Set up Vercel project and link
2. [ ] Add SEO fields to product form UI
3. [ ] Create dedicated media library page

### Completed Recently ✅

1. [x] Add product bulk import/export
   - Created server actions in `src/server/api/internal/product-import-export.ts`
   - CSV parsing with validation, create/update products
   - Export to CSV or JSON format
   - Import preview with validation results
   - Added Import/Export button to products page

2. [x] Add DNS verification webhook
   - Created API endpoint at `/api/webhooks/domain-verification`
   - Handles domain.verified, domain.ssl_provisioned, domain.ssl_failed events
   - HMAC-SHA256 signature verification

3. [x] Add custom domain management UI
   - Created server actions in `src/server/api/internal/domains.ts`
   - Implemented DNS-over-HTTPS verification using Cloudflare API
   - Created admin settings domains page at `/admin/settings/domains`
   - Added domain list, add/remove, verification instructions, primary domain toggle
   - Linked from main settings page

2. [x] Add RBAC for tenant staff roles (restrict features by StaffRole)
   - Created permission definitions in `src/lib/rbac.ts`
   - Created `usePermissions` hook and `PermissionGuard` component
   - Updated admin navigation to filter by role
   - Added server-side permission checks to products and orders actions

### In Progress

- None

### Blocked

- None

---

## 🧠 Current Thinking

### Multi-Tenant Architecture

We've added full multi-tenant support:

- `Tenant` model - stores/shops with billing, theme, settings
- `TenantStaff` - links platform Users to Tenants with roles
- `TenantDomain` - custom domain support with DNS/SSL verification
- `Customer` model - separate from platform Users, per-tenant
- All key models now have `tenantId` for data isolation

### Tenant Routing

```
boostcart.bg/*              → Main platform (no tenant)
store.boostcart.bg/*        → Tenant "store" storefront
custom-domain.com/*         → Tenant with custom domain
```

**Note**: As of Next.js 16, middleware has been renamed to proxy. The file is now `src/proxy.ts` with an exported `proxy()` function instead of `middleware()`.

Proxy sets `x-tenant-slug` or `x-custom-domain` headers for downstream use.

---

## 🐛 Known Issues

None currently.

---

## 💡 Decisions Made

| Decision | Choice | Reason | Date |
| -------- | ------ | ------ | ---- |
| Package manager | Bun | Faster, native TS, already using | Dec 29, 2025 |
| No Docker/K8s | Serverless only | Solo dev, Vercel handles scaling | Dec 29, 2025 |
| Multi-tenant approach | Single app, shared DB | Simpler, cost-effective | Dec 29, 2025 |

---

## 📝 Notes

- The existing codebase already has auth (Better Auth), admin pages, and basic structure
- We need to carefully migrate without breaking existing functionality
- Focus on incremental progress - don't try to do everything at once
