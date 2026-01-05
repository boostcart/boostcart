# BoostCart Platform - Complete Development Plan

> **Version:** 1.0
> **Last Updated:** December 29, 2025
> **Target Launch:** Q4 2026

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Platform Vision](#2-platform-vision)
3. [Architecture Overview](#3-architecture-overview)
4. [Technology Stack](#4-technology-stack)
5. [Database Schema](#5-database-schema)
6. [Core Features (Built-in)](#6-core-features-built-in)
7. [Plugin System](#7-plugin-system)
8. [Theme System](#8-theme-system)
9. [Visual Editor](#9-visual-editor)
10. [Multi-Tenancy](#10-multi-tenancy)
11. [Customer Accounts](#11-customer-accounts)
12. [Marketplace](#12-marketplace)
13. [Bulgarian Market Integration](#13-bulgarian-market-integration)
14. [Pricing & Business Model](#14-pricing--business-model)
15. [Development Roadmap](#15-development-roadmap)
16. [Infrastructure & Deployment](#16-infrastructure--deployment)
17. [Security Considerations](#17-security-considerations)

---

## 1. Executive Summary

BoostCart is a cloud-hosted SaaS e-commerce platform designed to compete with Shopify, initially targeting the Bulgarian market before expanding to the Balkans and beyond.

### Key Differentiators

- **Bulgarian-First**: Native support for Bulgarian payment gateways (ePay, EasyPay, Borica) and shipping providers (Econt, Speedy)
- **Hybrid Theme System**: React components + JSON configuration for both developers and non-technical users
- **Plugin Marketplace**: Shopify-style app ecosystem with OAuth-secured microservices
- **Visual Page Builder**: Drag-and-drop editor with 35+ blocks
- **Built-in Marketing**: Analytics, SEO tools, and abandoned cart recovery included in core platform

### Target Metrics (Year 1)

- 500 active stores
- 30% paid conversion rate
- ~63,000 BGN annual recurring revenue

---

## 2. Platform Vision

### 2.1 What We're Building

A complete e-commerce platform that allows anyone to:
1. Create an online store in minutes
2. Customize it with themes (no coding required)
3. Extend functionality with plugins
4. Accept payments and ship products
5. Grow their business with built-in marketing tools

### 2.2 User Types

| User Type | Description | Needs |
|-----------|-------------|-------|
| **Store Owner** | Bulgarian SMB owner | Easy store setup, local payments/shipping |
| **Store Staff** | Employee with limited access | Order management, customer support |
| **Customer** | End shopper | Browse, purchase, track orders |
| **Plugin Developer** | Creates marketplace plugins | SDK, documentation, revenue share |
| **Theme Developer** | Creates marketplace themes | SDK, documentation, revenue share |
| **Platform Admin** | BoostCart staff | Approve plugins/themes, support |

### 2.3 Core Principles

1. **Cloud-Native**: Everything hosted by us, zero server management for users
2. **API-First**: All functionality exposed via APIs for extensibility
3. **Security**: Tenant isolation, plugin sandboxing, GDPR compliance
4. **Performance**: Sub-second page loads, 99.9% uptime
5. **Scalability**: Support 10,000+ stores without architecture changes

---

## 3. Architecture Overview

### 3.1 Monorepo Structure

```
boostcart/
├── apps/
│   ├── platform/                 # Main Next.js app (multi-tenant)
│   │   ├── (admin)/             # Admin dashboard routes
│   │   │   ├── dashboard/       # Analytics overview
│   │   │   ├── products/        # Product management
│   │   │   ├── orders/          # Order management
│   │   │   ├── customers/       # Customer management
│   │   │   ├── marketing/       # Abandoned cart, discounts
│   │   │   ├── analytics/       # Built-in analytics
│   │   │   ├── seo/             # SEO management
│   │   │   ├── settings/        # Store settings
│   │   │   └── marketplace/     # Install plugins/themes
│   │   ├── (storefront)/        # Customer-facing routes
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── products/        # Product pages
│   │   │   ├── collections/     # Collection pages
│   │   │   ├── cart/            # Shopping cart
│   │   │   ├── checkout/        # Checkout flow
│   │   │   ├── account/         # Customer account
│   │   │   └── auth/            # Customer login/register
│   │   └── (public)/            # Marketing site
│   │       ├── page.tsx         # Landing page
│   │       ├── pricing/         # Pricing page
│   │       ├── features/        # Features page
│   │       └── signup/          # Store signup
│   ├── marketplace/              # Public marketplace app
│   │   ├── plugins/             # Browse plugins
│   │   ├── themes/              # Browse themes
│   │   └── developers/          # Developer portal
│   ├── visual-editor/           # Visual page builder (iframe)
│   └── api/                     # Public REST API
├── packages/
│   ├── database/                # Prisma schema & client
│   ├── ui/                      # Shared UI components
│   ├── auth/                    # Authentication logic
│   ├── theme-engine/            # Theme loading & rendering
│   ├── plugin-engine/           # Plugin execution
│   ├── visual-editor-sdk/       # Visual editor SDK
│   ├── plugin-sdk/              # Plugin development SDK
│   ├── theme-sdk/               # Theme development SDK
│   ├── analytics/               # Built-in analytics
│   ├── seo/                     # Built-in SEO tools
│   ├── marketing/               # Abandoned cart, campaigns
│   ├── email/                   # Email templates & sending
│   └── config/                  # Shared configurations
├── examples/                     # Example code for developers
│   ├── plugin-starter/          # Plugin boilerplate
│   └── theme-starter/           # Theme boilerplate
└── infrastructure/
    ├── cdn/                     # CDN configuration
    ├── queue/                   # Background job processing
    └── cache/                   # Redis caching
```

### 3.2 Request Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER REQUEST                             │
│              shop.boostcart.bg/products/cool-shirt              │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CLOUDFLARE CDN                              │
│                 (SSL, DDoS protection, caching)                  │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      NEXT.JS MIDDLEWARE                          │
│  1. Extract tenant from subdomain/custom domain                  │
│  2. Validate tenant exists & is active                          │
│  3. Set tenant context in headers                               │
│  4. Route to admin or storefront                                │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      STOREFRONT PAGE                             │
│  1. Get tenant from context                                      │
│  2. Load theme from CDN (cached)                                │
│  3. Fetch product data (database)                               │
│  4. Render with theme components (SSR)                          │
│  5. Hydrate on client (CSR)                                     │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      PLUGIN EXECUTION                            │
│  (If plugins add content to page)                               │
│  1. Get active plugins for tenant                               │
│  2. Call plugin APIs or render iframe widgets                   │
│  3. Merge plugin content into page                              │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      RESPONSE TO USER                            │
│                    (HTML + CSS + JS)                            │
└─────────────────────────────────────────────────────────────────┘
```

### 3.3 Plugin Communication Flow

```
┌──────────────┐     HTTP/OAuth     ┌──────────────────────────┐
│   PLATFORM   │ ◄──────────────────► │   PLUGIN SERVER         │
│              │                      │   (External Service)     │
│  - Orders    │                      │                          │
│  - Products  │   Webhooks           │  - Payment processing   │
│  - Customers │ ──────────────────►  │  - Shipping rates       │
│              │                      │  - Custom logic         │
└──────────────┘                      └──────────────────────────┘
       │
       │  OAuth Token
       │  (read_orders, write_transactions)
       ▼
┌──────────────────────────────────────────────────────────────────┐
│                      EXAMPLE: PAYMENT FLOW                       │
│                                                                  │
│  1. Customer clicks "Pay"                                        │
│  2. Platform calls: POST /plugins/epay/create-payment            │
│  3. ePay plugin calls ePay API, returns redirect URL             │
│  4. Customer completes payment on ePay                           │
│  5. ePay sends webhook to plugin                                 │
│  6. Plugin calls: POST /api/orders/{id}/mark-paid                │
│  7. Platform marks order as paid                                 │
└──────────────────────────────────────────────────────────────────┘
```

---

## 4. Technology Stack

### 4.1 Core Technologies

| Category | Technology | Rationale |
|----------|------------|-----------|
| **Monorepo** | Turborepo | Fast builds, intelligent caching |
| **Package Manager** | Bun | Fast installs, native TS, built-in tooling |
| **Framework** | Next.js 16 (App Router) | SSR, API routes, edge runtime |
| **Language** | TypeScript | Type safety, better DX |
| **Database** | PostgreSQL | Reliable, scalable, JSON support |
| **ORM** | Prisma | Type-safe queries, migrations |
| **Styling** | Tailwind CSS | Utility-first, fast development |
| **UI Components** | shadcn/ui + Radix UI | Accessible, customizable |
| **State (Client)** | Zustand | Simple, performant |
| **Forms** | React Hook Form + Zod | Type-safe validation |
| **Auth** | Better Auth | Flexible, multi-tenant support |

### 4.2 Infrastructure

| Category | Technology | Rationale |
|----------|------------|-----------|
| **Hosting** | Vercel | Edge network, automatic scaling |
| **Database Hosting** | Neon / Supabase | Serverless PostgreSQL |
| **Cache** | Upstash Redis | Serverless Redis |
| **CDN / Storage** | Cloudflare R2 | S3-compatible, affordable |
| **Email** | Resend | Modern API, React Email |
| **Payments (Platform)** | Stripe | Subscriptions, Connect |
| **Background Jobs** | Trigger.dev / BullMQ | Reliable job processing |
| **Monitoring** | Sentry | Error tracking |
| **Analytics** | Vercel Analytics | Performance monitoring |
| **Search** | Meilisearch | Fast, typo-tolerant |

### 4.3 Developer Tools

| Category | Technology | Rationale |
|----------|------------|-----------|
| **API (Internal)** | tRPC | Type-safe, no codegen |
| **API (External)** | REST + OpenAPI | Standard, well-documented |
| **Testing** | Vitest + Playwright | Unit + E2E testing |
| **Load Testing** | k6 | Performance testing |
| **Documentation** | Mintlify / Nextra | Beautiful docs |
| **Visual Editor DnD** | @dnd-kit | Modern drag-and-drop |
| **Rich Text** | Tiptap | Extensible editor |

---

## 5. Database Schema

> **Note**: The `User` model is managed by Better Auth and includes fields like `id`, `email`, `name`, `emailVerified`, `image`, `createdAt`, `updatedAt`. Platform users (store owners, staff) use this model, while store customers use the separate `Customer` model.

### 5.1 Multi-Tenant Core

```prisma
// ============= TENANTS (Stores) =============
model Tenant {
  id              String   @id @default(cuid())
  
  // Domain Configuration
  subdomain       String   @unique      // shop.boostcart.bg
  customDomain    String?  @unique      // myshop.com
  
  // Store Information
  name            String                // "My Awesome Shop"
  description     String?
  logo            String?               // CDN URL
  favicon         String?               // CDN URL
  
  // Theme
  themeId         String
  theme           Theme    @relation(fields: [themeId], references: [id])
  themeConfig     Json     @default("{}") // User's color/font overrides
  
  // Billing
  plan            Plan     @default(FREE)
  billingStatus   BillingStatus @default(ACTIVE)
  billingCycle    BillingCycle @default(MONTHLY)
  stripeCustomerId String?
  stripeSubscriptionId String?
  trialEndsAt     DateTime?
  
  // Owner & Staff
  ownerId         String
  owner           User     @relation("TenantOwner", fields: [ownerId], references: [id])
  staff           TenantStaff[]
  
  // Settings
  currency        String   @default("BGN")
  timezone        String   @default("Europe/Sofia")
  language        String   @default("bg")
  
  // Business Settings
  taxIncluded     Boolean  @default(true)   // Prices include tax
  taxRate         Decimal  @default(20)     // Bulgarian VAT 20%
  
  // Limits (based on plan)
  limits          Json     @default("{}")
  
  // Relations
  products        Product[]
  orders          Order[]
  customers       Customer[]
  pages           Page[]
  collections     Collection[]
  discountCodes   DiscountCode[]
  plugins         TenantPlugin[]
  
  // Built-in Features Config
  analyticsConfig   AnalyticsConfig?
  seoSettings       SEOSettings?
  marketingConfig   MarketingConfig?
  
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  deletedAt       DateTime?  // Soft delete
  
  @@index([subdomain])
  @@index([customDomain])
  @@index([ownerId])
}

enum Plan {
  FREE          // 50 products, 100 orders/month, 2% transaction fee
  STARTER       // 1000 products, unlimited orders, 0% fee
  PROFESSIONAL  // Unlimited, advanced features
  ENTERPRISE    // White-label, custom
}

enum BillingStatus {
  ACTIVE
  TRIAL
  PAST_DUE
  CANCELLED
  SUSPENDED
}

enum BillingCycle {
  MONTHLY
  YEARLY
}

model TenantStaff {
  id          String   @id @default(cuid())
  tenantId    String
  userId      String
  role        StaffRole
  
  permissions Json     @default("[]") // Custom permissions
  
  tenant      Tenant   @relation(fields: [tenantId], references: [id])
  user        User     @relation(fields: [userId], references: [id])
  
  createdAt   DateTime @default(now())
  
  @@unique([tenantId, userId])
}

enum StaffRole {
  ADMIN       // Full access
  MANAGER     // Products, orders, customers
  SUPPORT     // Orders, customers only
  VIEWER      // Read-only
}
```

### 5.2 Products & Inventory

```prisma
// ============= PRODUCTS =============
model Product {
  id            String   @id @default(cuid())
  tenantId      String
  
  // Basic Info
  slug          String
  status        ProductStatus @default(DRAFT)
  
  // Categorization
  categoryId    String?
  brandId       String?
  
  // Pricing
  price         Decimal
  compareAtPrice Decimal?  // Original price (for discounts)
  costPerItem   Decimal?   // For profit calculations
  
  // Inventory
  sku           String?
  barcode       String?
  trackStock    Boolean  @default(true)
  stock         Int      @default(0)
  lowStockThreshold Int  @default(5)
  
  // Purchase Options
  purchaseType  PurchaseType @default(ONE_TIME)
  
  // Physical Properties
  weight        Decimal?  // kg
  
  // SEO (Built-in)
  seoTitle      String?
  seoDescription String?
  seoKeywords   String[]
  
  // Relations
  tenant        Tenant     @relation(fields: [tenantId], references: [id])
  category      Category?  @relation(fields: [categoryId], references: [id])
  brand         Brand?     @relation(fields: [brandId], references: [id])
  translations  ProductTranslation[]
  variants      ProductVariant[]
  media         ProductMedia[]
  collections   CollectionProduct[]
  reviews       ProductReview[]
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  deletedAt     DateTime?
  
  @@unique([tenantId, slug])
  @@index([tenantId, status])
  @@index([tenantId, categoryId])
}

enum ProductStatus {
  DRAFT
  ACTIVE
  ARCHIVED
}

enum PurchaseType {
  ONE_TIME
  SUBSCRIPTION
  PRE_ORDER
}

model ProductTranslation {
  id          String   @id @default(cuid())
  productId   String
  localeId    String   // "bg", "en"
  
  name        String
  description String?  @db.Text
  
  // SEO per locale
  metaTitle   String?
  metaDescription String?
  
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  @@unique([productId, localeId])
}

model ProductVariant {
  id          String   @id @default(cuid())
  productId   String
  
  // Variant Options (e.g., {"Size": "M", "Color": "Red"})
  options     Json
  
  // Override pricing
  price       Decimal?
  compareAtPrice Decimal?
  
  // Inventory
  sku         String?
  barcode     String?
  stock       Int      @default(0)
  
  // Media
  imageUrl    String?
  
  // Physical
  weight      Decimal?
  
  // Order
  position    Int      @default(0)
  
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  orderItems  OrderItem[]
  cartItems   CartItem[]
  
  @@index([productId])
}

model ProductMedia {
  id          String   @id @default(cuid())
  productId   String
  
  url         String   // CDN URL
  mediaType   MediaType
  altText     String?
  position    Int      @default(0)
  
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  @@index([productId])
}

enum MediaType {
  IMAGE
  VIDEO
}

model ProductReview {
  id          String   @id @default(cuid())
  tenantId    String
  productId   String
  customerId  String
  
  rating      Int      // 1-5
  title       String?
  content     String?  @db.Text
  
  // Moderation
  status      ReviewStatus @default(PENDING)
  
  // Helpful votes
  helpfulCount Int     @default(0)
  
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  customer    Customer @relation(fields: [customerId], references: [id])
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([productId, status])
}

enum ReviewStatus {
  PENDING
  APPROVED
  REJECTED
}

model Category {
  id          String   @id @default(cuid())
  tenantId    String
  parentId    String?
  
  slug        String
  name        String
  description String?
  imageUrl    String?
  
  position    Int      @default(0)
  
  parent      Category?  @relation("CategoryChildren", fields: [parentId], references: [id])
  children    Category[] @relation("CategoryChildren")
  products    Product[]
  
  @@unique([tenantId, slug])
  @@index([tenantId, parentId])
}

model Brand {
  id          String   @id @default(cuid())
  tenantId    String
  
  slug        String
  name        String
  description String?
  logoUrl     String?
  websiteUrl  String?
  
  products    Product[]
  
  @@unique([tenantId, slug])
}

model Collection {
  id          String   @id @default(cuid())
  tenantId    String
  
  slug        String
  name        String
  description String?
  imageUrl    String?
  
  // Auto-collection rules (optional)
  rules       Json?    // { "conditions": [...], "match": "all" | "any" }
  
  tenant      Tenant   @relation(fields: [tenantId], references: [id])
  products    CollectionProduct[]
  
  @@unique([tenantId, slug])
}

model CollectionProduct {
  collectionId String
  productId    String
  position     Int      @default(0)
  
  collection   Collection @relation(fields: [collectionId], references: [id], onDelete: Cascade)
  product      Product    @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  @@id([collectionId, productId])
}
```

### 5.3 Orders & Customers

```prisma
// ============= CUSTOMERS =============
model Customer {
  id            String   @id @default(cuid())
  tenantId      String
  
  // Auth
  email         String
  password      String?  // Nullable for social login
  emailVerified Boolean  @default(false)
  
  // Profile
  firstName     String
  lastName      String
  phone         String?
  
  // Status
  status        CustomerStatus @default(ACTIVE)
  
  // Preferences
  acceptsMarketing Boolean @default(false)
  locale        String   @default("bg")
  
  // Stats (denormalized for performance)
  totalSpent    Decimal  @default(0)
  ordersCount   Int      @default(0)
  lastOrderAt   DateTime?
  
  // Loyalty
  loyaltyPoints Int      @default(0)
  tier          CustomerTier @default(REGULAR)
  
  // Relations
  tenant        Tenant   @relation(fields: [tenantId], references: [id])
  addresses     CustomerAddress[]
  orders        Order[]
  wishlist      WishlistItem[]
  reviews       ProductReview[]
  sessions      CustomerSession[]
  oauthAccounts CustomerOAuthAccount[]
  abandonedCarts AbandonedCart[]
  tags          CustomerTag[] @relation("CustomerTags")
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  @@unique([tenantId, email])
  @@index([tenantId, status])
}

enum CustomerStatus {
  ACTIVE
  DISABLED
  BANNED
}

enum CustomerTier {
  REGULAR
  VIP
  WHOLESALE
}

model CustomerAddress {
  id          String   @id @default(cuid())
  customerId  String
  
  firstName   String
  lastName    String
  company     String?
  address1    String
  address2    String?
  city        String
  province    String?  // Region/State
  country     String   @default("BG")
  postalCode  String
  phone       String?
  
  isDefault   Boolean  @default(false)
  
  customer    Customer @relation(fields: [customerId], references: [id], onDelete: Cascade)
  
  @@index([customerId])
}

model CustomerSession {
  id          String   @id @default(cuid())
  customerId  String
  token       String   @unique
  
  ipAddress   String?
  userAgent   String?
  
  customer    Customer @relation(fields: [customerId], references: [id], onDelete: Cascade)
  
  createdAt   DateTime @default(now())
  expiresAt   DateTime
  
  @@index([token])
}

model CustomerOAuthAccount {
  id          String   @id @default(cuid())
  customerId  String
  
  provider    String   // "google", "facebook", "apple"
  providerId  String
  
  customer    Customer @relation(fields: [customerId], references: [id], onDelete: Cascade)
  
  createdAt   DateTime @default(now())
  
  @@unique([provider, providerId])
}

model CustomerTag {
  id          String   @id @default(cuid())
  tenantId    String
  name        String   // "VIP", "Loyal", "At Risk"
  color       String?
  
  customers   Customer[] @relation("CustomerTags")
  
  @@unique([tenantId, name])
}

model WishlistItem {
  id          String   @id @default(cuid())
  customerId  String
  productId   String
  variantId   String?
  
  customer    Customer @relation(fields: [customerId], references: [id], onDelete: Cascade)
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  
  addedAt     DateTime @default(now())
  
  @@unique([customerId, productId, variantId])
}

// ============= ORDERS =============
model Order {
  id            String   @id @default(cuid())
  tenantId      String
  customerId    String?  // Nullable for guest checkout
  
  // Order Number (human readable)
  orderNumber   String
  
  // Status
  status        OrderStatus @default(PENDING)
  paymentStatus PaymentStatus @default(PENDING)
  fulfillmentStatus FulfillmentStatus @default(UNFULFILLED)
  
  // Customer Info (snapshot)
  email         String
  phone         String?
  
  // Addresses (snapshot)
  shippingAddress Json
  billingAddress  Json?
  
  // Pricing
  subtotal      Decimal
  shippingTotal Decimal  @default(0)
  taxTotal      Decimal  @default(0)
  discountTotal Decimal  @default(0)
  total         Decimal
  currency      String   @default("BGN")
  
  // Discount
  discountCodeId String?
  discountCode   DiscountCode? @relation(fields: [discountCodeId], references: [id])
  
  // Shipping
  shippingMethodId String?
  shippingMethod   String?  // Name snapshot
  trackingNumber   String?
  trackingUrl      String?
  
  // Payment
  paymentMethodId String?
  paymentMethod   String?  // Name snapshot
  
  // Analytics
  utmSource     String?
  utmMedium     String?
  utmCampaign   String?
  sessionId     String?
  
  // Notes
  customerNote  String?  // From customer
  staffNote     String?  // Internal
  
  // Relations
  tenant        Tenant   @relation(fields: [tenantId], references: [id])
  customer      Customer? @relation(fields: [customerId], references: [id])
  items         OrderItem[]
  timeline      OrderTimeline[]
  refunds       Refund[]
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  @@unique([tenantId, orderNumber])
  @@index([tenantId, status])
  @@index([tenantId, createdAt])
  @@index([customerId])
}

enum OrderStatus {
  PENDING
  CONFIRMED
  PROCESSING
  SHIPPED
  DELIVERED
  CANCELLED
  REFUNDED
}

enum PaymentStatus {
  PENDING
  PAID
  PARTIALLY_REFUNDED
  REFUNDED
  FAILED
}

enum FulfillmentStatus {
  UNFULFILLED
  PARTIALLY_FULFILLED
  FULFILLED
}

model OrderItem {
  id          String   @id @default(cuid())
  orderId     String
  
  productId   String
  variantId   String?
  
  // Snapshot at time of order
  name        String
  sku         String?
  imageUrl    String?
  options     Json?    // {"Size": "M", "Color": "Red"}
  
  // Pricing
  price       Decimal
  quantity    Int
  total       Decimal
  
  // Fulfillment
  fulfilledQuantity Int @default(0)
  
  order       Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  variant     ProductVariant? @relation(fields: [variantId], references: [id])
  
  @@index([orderId])
}

model OrderTimeline {
  id          String   @id @default(cuid())
  orderId     String
  
  type        String   // "status_changed", "email_sent", "note_added"
  title       String
  description String?
  metadata    Json?
  
  createdBy   String?  // User ID or "system"
  
  order       Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  
  createdAt   DateTime @default(now())
  
  @@index([orderId])
}

model Refund {
  id          String   @id @default(cuid())
  orderId     String
  
  amount      Decimal
  reason      String?
  
  status      RefundStatus @default(PENDING)
  
  order       Order    @relation(fields: [orderId], references: [id])
  
  createdAt   DateTime @default(now())
  processedAt DateTime?
}

enum RefundStatus {
  PENDING
  PROCESSED
  FAILED
}

// ============= CART =============
model Cart {
  id          String   @id @default(cuid())
  tenantId    String
  customerId  String?
  sessionId   String?  // For guest carts
  
  items       CartItem[]
  
  // Discount
  discountCodeId String?
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  expiresAt   DateTime // 30 days
  
  @@index([tenantId, sessionId])
  @@index([customerId])
}

model CartItem {
  id          String   @id @default(cuid())
  cartId      String
  
  productId   String
  variantId   String?
  quantity    Int
  
  cart        Cart     @relation(fields: [cartId], references: [id], onDelete: Cascade)
  variant     ProductVariant? @relation(fields: [variantId], references: [id])
  
  @@index([cartId])
}
```

---

## 6. Core Features (Built-in)

These features are included in the platform, NOT plugins. They provide essential functionality every store needs.

### 6.1 Analytics (Built-in)

```prisma
// ============= ANALYTICS =============
model AnalyticsConfig {
  id              String   @id @default(cuid())
  tenantId        String   @unique
  
  // Settings
  trackingEnabled Boolean  @default(true)
  cookieConsent   Boolean  @default(true)
  
  // Third-party integrations (optional)
  googleAnalyticsId String?
  facebookPixelId   String?
  
  tenant          Tenant   @relation(fields: [tenantId], references: [id])
}

model AnalyticsEvent {
  id          String   @id @default(cuid())
  tenantId    String
  
  // Event
  type        AnalyticsEventType
  page        String?
  productId   String?
  orderId     String?
  customerId  String?
  
  // Session
  sessionId   String
  ipAddress   String?
  userAgent   String?
  referrer    String?
  
  // UTM
  utmSource   String?
  utmMedium   String?
  utmCampaign String?
  
  // E-commerce
  revenue     Decimal?
  quantity    Int?
  
  createdAt   DateTime @default(now())
  
  @@index([tenantId, type, createdAt])
  @@index([tenantId, sessionId])
}

enum AnalyticsEventType {
  PAGE_VIEW
  PRODUCT_VIEW
  ADD_TO_CART
  REMOVE_FROM_CART
  CHECKOUT_START
  CHECKOUT_COMPLETE
  PURCHASE
  SEARCH
}

// Daily aggregated data (for fast dashboard queries)
model AnalyticsSummary {
  id          String   @id @default(cuid())
  tenantId    String
  date        DateTime @db.Date
  
  // Traffic
  visitors    Int      @default(0)
  pageViews   Int      @default(0)
  sessions    Int      @default(0)
  
  // E-commerce
  orders      Int      @default(0)
  revenue     Decimal  @default(0)
  avgOrderValue Decimal @default(0)
  
  // Conversion
  addToCarts  Int      @default(0)
  checkouts   Int      @default(0)
  conversionRate Decimal @default(0)
  
  @@unique([tenantId, date])
  @@index([tenantId, date])
}
```

**Analytics Dashboard Features:**
- Traffic overview (visitors, pageviews, sessions)
- Sales metrics (revenue, orders, average order value)
- Conversion funnel (visitors → add to cart → checkout → purchase)
- Top products & categories
- Traffic sources (organic, direct, referral, social)
- Customer behavior (new vs returning)
- Geographic distribution
- Device & browser breakdown

### 6.2 SEO Tools (Built-in)

```prisma
// ============= SEO =============
model SEOSettings {
  id              String   @id @default(cuid())
  tenantId        String   @unique
  
  // Global SEO
  metaTitle       String?  // "My Store | Best Products"
  metaDescription String?
  ogImage         String?  // Default OG image
  faviconUrl      String?
  
  // Structured Data
  businessSchema  Json?    // Organization schema
  
  // Sitemap
  sitemapEnabled  Boolean  @default(true)
  
  // Robots.txt
  robotsTxt       String?  // Custom content
  
  // Verification
  googleSearchConsole String?
  bingWebmaster      String?
  
  tenant          Tenant   @relation(fields: [tenantId], references: [id])
}

model SEORedirect {
  id          String   @id @default(cuid())
  tenantId    String
  
  fromPath    String   // /old-product
  toPath      String   // /new-product
  type        Int      @default(301) // 301 or 302
  
  clicks      Int      @default(0)
  
  createdAt   DateTime @default(now())
  
  @@unique([tenantId, fromPath])
}
```

**SEO Features:**
- Global meta tags (title, description, OG image)
- Per-product & per-page SEO fields
- Auto-generated sitemap.xml
- Robots.txt editor
- 301/302 redirect manager
- Structured data (JSON-LD) for products, organization, breadcrumbs
- SEO audit tool (missing meta, broken links, image alt text)
- Google Search Console integration

### 6.3 Marketing Tools (Built-in)

```prisma
// ============= MARKETING =============
model MarketingConfig {
  id              String   @id @default(cuid())
  tenantId        String   @unique
  
  // Abandoned Cart
  abandonedCartEnabled Boolean @default(true)
  abandonedCartDelay   Int     @default(60) // minutes
  abandonedCartEmails  Int     @default(3)  // number of reminders
  
  // Email Settings
  emailFromName   String?
  emailFromEmail  String?
  
  tenant          Tenant   @relation(fields: [tenantId], references: [id])
}

model AbandonedCart {
  id          String   @id @default(cuid())
  tenantId    String
  customerId  String?
  
  // Cart Data
  email       String
  items       Json     // CartItem[]
  total       Decimal
  currency    String
  
  // Recovery
  recoveryToken String  @unique
  recoveryUrl   String
  recovered     Boolean @default(false)
  recoveredAt   DateTime?
  orderId       String?
  
  // Email Tracking
  emailsSent    Int     @default(0)
  lastEmailSent DateTime?
  emailOpened   Boolean @default(false)
  emailClicked  Boolean @default(false)
  
  customer      Customer? @relation(fields: [customerId], references: [id])
  emails        AbandonedCartEmail[]
  
  createdAt     DateTime @default(now())
  expiresAt     DateTime // 30 days
  
  @@index([tenantId, recovered])
}

model AbandonedCartEmail {
  id              String   @id @default(cuid())
  abandonedCartId String
  
  subject         String
  sentAt          DateTime @default(now())
  opened          Boolean  @default(false)
  openedAt        DateTime?
  clicked         Boolean  @default(false)
  clickedAt       DateTime?
  
  abandonedCart   AbandonedCart @relation(fields: [abandonedCartId], references: [id], onDelete: Cascade)
}

// ============= DISCOUNT CODES =============
model DiscountCode {
  id          String   @id @default(cuid())
  tenantId    String
  
  code        String
  description String?
  
  // Type
  type        DiscountType
  value       Decimal      // percentage or fixed amount
  
  // Conditions
  minPurchase Decimal?
  maxUses     Int?
  maxUsesPerCustomer Int?
  
  // Restrictions
  productIds     String[]     // Empty = all products
  collectionIds  String[]     // Empty = all collections
  
  // Schedule
  active      Boolean  @default(true)
  startsAt    DateTime?
  endsAt      DateTime?
  
  // Usage
  usedCount   Int      @default(0)
  
  // Relations
  tenant      Tenant   @relation(fields: [tenantId], references: [id])
  orders      Order[]
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@unique([tenantId, code])
}

enum DiscountType {
  PERCENTAGE      // 10% off
  FIXED           // 5 BGN off
  FREE_SHIPPING   // Free shipping
  BOGO            // Buy one get one
}
```

**Marketing Features:**
- **Abandoned Cart Recovery**
  - Automatic detection when cart is abandoned
  - 3-email sequence (1 hour, 24 hours, 3 days)
  - Customizable email templates
  - Recovery link with pre-filled cart
  - Dashboard with conversion rate & revenue recovered
  
- **Discount Codes**
  - Percentage, fixed amount, free shipping, BOGO
  - Minimum purchase requirements
  - Usage limits (total and per customer)
  - Date range scheduling
  - Product/collection restrictions
  
- **Email Marketing (Basic)**
  - Customer newsletters
  - Order notifications
  - Welcome emails
  - Back-in-stock alerts

---

## 7. Plugin System

### 7.1 Plugin Architecture

Plugins are **external microservices** that extend platform functionality. They communicate via OAuth-secured APIs and webhooks.

```prisma
// ============= PLUGINS =============
model Plugin {
  id            String   @id @default(cuid())
  slug          String   @unique
  name          String
  description   String   @db.Text
  version       String
  
  // Author
  author        String
  authorId      String   // Developer ID
  authorUrl     String?
  
  // Type & Category
  type          PluginType
  category      PluginCategory
  
  // Endpoints (plugin runs externally)
  apiUrl        String?    // https://myplugin.com/api
  webhookUrl    String?    // https://myplugin.com/webhooks
  iframeUrl     String?    // For UI widgets
  adminUrl      String?    // Plugin settings UI
  
  // OAuth Scopes
  oauthScopes   String[]   // ["read_orders", "write_products"]
  
  // Configuration Schema
  configSchema  Json       // Zod schema as JSON
  
  // Pricing
  pricingModel  PricingModel @default(FREE)
  price         Decimal      @default(0)
  currency      String       @default("BGN")
  billingInterval BillingInterval?
  trialDays     Int?
  
  // Assets (stored on CDN)
  thumbnail     String
  screenshots   String[]
  demoUrl       String?
  
  // Marketplace
  downloads     Int        @default(0)
  activeInstalls Int       @default(0)
  rating        Float?
  featured      Boolean    @default(false)
  
  // Status
  status        PluginStatus @default(DRAFT)
  
  // Relations
  tenants       TenantPlugin[]
  purchases     PluginPurchase[]
  reviews       PluginReview[]
  versions      PluginVersion[]
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum PluginType {
  MICROSERVICE    // Backend service (payments, shipping)
  UI_COMPONENT    // Frontend widget (reviews, chat)
  HYBRID          // Both backend + frontend
}

enum PluginCategory {
  PAYMENT
  SHIPPING
  MARKETING
  ANALYTICS
  SOCIAL
  CUSTOMER_SERVICE
  INVENTORY
  SUBSCRIPTIONS
  REVIEWS
  UTILITIES
}

enum PricingModel {
  FREE            // Free forever
  ONE_TIME        // Single purchase
  SUBSCRIPTION    // Recurring
  FREEMIUM        // Free base + paid features
}

enum BillingInterval {
  MONTHLY
  YEARLY
}

enum PluginStatus {
  DRAFT
  PENDING_REVIEW
  APPROVED
  REJECTED
  SUSPENDED
}

model PluginVersion {
  id          String   @id @default(cuid())
  pluginId    String
  version     String   // "1.2.0"
  changelog   String?  @db.Text
  
  // Compatibility
  minPlatformVersion String?
  
  plugin      Plugin   @relation(fields: [pluginId], references: [id], onDelete: Cascade)
  
  createdAt   DateTime @default(now())
  
  @@unique([pluginId, version])
}

model PluginReview {
  id          String   @id @default(cuid())
  pluginId    String
  userId      String   // Platform user who wrote review
  
  rating      Int      // 1-5
  title       String?
  content     String?  @db.Text
  
  plugin      Plugin   @relation(fields: [pluginId], references: [id], onDelete: Cascade)
  
  createdAt   DateTime @default(now())
  
  @@unique([pluginId, userId])
}

// ============= INSTALLED PLUGINS =============
model TenantPlugin {
  id          String  @id @default(cuid())
  tenantId    String
  pluginId    String
  
  enabled     Boolean @default(true)
  config      Json    @default("{}") // User's settings
  
  // OAuth
  accessToken  String  @unique
  refreshToken String?
  
  // Version
  installedVersion String
  
  tenant      Tenant  @relation(fields: [tenantId], references: [id])
  plugin      Plugin  @relation(fields: [pluginId], references: [id])
  
  installedAt DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@unique([tenantId, pluginId])
}

model PluginPurchase {
  id          String   @id @default(cuid())
  tenantId    String
  pluginId    String
  
  // Purchase Details
  pricingModel  PricingModel
  amount        Decimal
  currency      String
  
  // Payment
  stripePaymentId String?
  
  // One-Time Purchase
  licenseKey    String?  @unique
  
  // Subscription
  stripeSubscriptionId String?
  subscriptionStatus   SubscriptionStatus?
  currentPeriodStart   DateTime?
  currentPeriodEnd     DateTime?
  cancelAtPeriodEnd    Boolean @default(false)
  
  // Trial
  trialStart    DateTime?
  trialEnd      DateTime?
  
  tenant        Tenant   @relation(fields: [tenantId], references: [id])
  plugin        Plugin   @relation(fields: [pluginId], references: [id])
  
  purchasedAt   DateTime @default(now())
  
  @@unique([tenantId, pluginId])
}

enum SubscriptionStatus {
  ACTIVE
  TRIALING
  PAST_DUE
  CANCELLED
  EXPIRED
}
```

### 7.2 Plugin Isolation Strategy

**Three Levels of Plugin Trust:**

| Level | Type | Isolation | Use Case |
|-------|------|-----------|----------|
| **Trusted** | Core/Official | Same process | Payment gateways, official plugins |
| **UI Components** | IFrame | DOM sandbox | Review widgets, chat |
| **Microservices** | External | HTTP/OAuth | Third-party plugins |

**Microservice Plugins (Recommended for third-party):**
```
┌─────────────────────────────────────────────────────────────────┐
│                         PLATFORM                                 │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            │ HTTP + OAuth Token
                            │ (read_orders, write_transactions)
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    PLUGIN SERVER                                 │
│                 (Developer's Infrastructure)                     │
│                                                                  │
│  POST /create-payment  ────► Process payment ────► Return URL   │
│  POST /webhook/paid    ◄──── Payment provider callback          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 7.3 OAuth Scopes

| Scope | Description |
|-------|-------------|
| `read_products` | Read product data |
| `write_products` | Create/update products |
| `read_orders` | Read order data |
| `write_orders` | Update order status |
| `read_customers` | Read customer data |
| `write_customers` | Create/update customers |
| `read_inventory` | Read stock levels |
| `write_inventory` | Update stock |
| `write_transactions` | Create payment transactions |
| `read_analytics` | Access analytics data |

### 7.4 Official Plugins

**Payment Plugins:**
| Plugin | Type | Pricing |
|--------|------|---------|
| Stripe | Payment | Free |
| ePay.bg | Payment | Free |
| EasyPay | Payment | Free |
| Borica | Payment | Free |
| Cash on Delivery | Payment | Free |

**Shipping Plugins:**
| Plugin | Type | Pricing |
|--------|------|---------|
| Econt Express | Shipping | Free |
| Speedy | Shipping | Free |
| Bulgarian Post | Shipping | Free |
| Manual Shipping | Shipping | Free |

**Feature Plugins:**
| Plugin | Type | Pricing |
|--------|------|---------|
| Subscriptions | E-commerce | 29 BGN/mo |
| Product Reviews | Social | Free |
| Live Chat | Support | 19 BGN/mo |
| Email Automation | Marketing | 39 BGN/mo |
| Social Selling | Marketing | 29 BGN/mo |
| Gift Cards | E-commerce | 19 BGN/mo |

---

## 8. Theme System

### 8.1 Theme Architecture

Themes are **distributed via CDN** and loaded at runtime. They combine:
1. **React Components** - For developers (full customization)
2. **JSON Configuration** - For non-technical users (visual customization)

```prisma
// ============= THEMES =============
model Theme {
  id            String   @id @default(cuid())
  slug          String   @unique
  name          String
  description   String   @db.Text
  version       String
  
  // Author
  author        String
  authorId      String
  authorUrl     String?
  
  // Pricing
  pricingModel  PricingModel @default(FREE)
  price         Decimal      @default(0)
  currency      String       @default("BGN")
  
  // Assets (stored on CDN)
  assetsUrl     String   // https://cdn.boostcart.bg/themes/sofia/1.2.0/
  
  // Theme Data (stored in DB)
  config        Json     // Default configuration
  components    Json     // Component definitions
  templates     Json     // Page template definitions
  
  // Marketing
  thumbnail     String
  screenshots   String[]
  demoUrl       String?
  category      String[] // ["Fashion", "Electronics"]
  tags          String[]
  
  // Stats
  downloads     Int      @default(0)
  activeInstalls Int     @default(0)
  rating        Float?
  featured      Boolean  @default(false)
  
  // Status
  status        ThemeStatus @default(DRAFT)
  
  // Relations
  tenants       Tenant[]
  purchases     ThemePurchase[]
  reviews       ThemeReview[]
  versions      ThemeVersion[]
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

enum ThemeStatus {
  DRAFT
  PENDING_REVIEW
  APPROVED
  REJECTED
}

model ThemeVersion {
  id          String   @id @default(cuid())
  themeId     String
  version     String
  changelog   String?
  assetsUrl   String
  
  theme       Theme    @relation(fields: [themeId], references: [id], onDelete: Cascade)
  
  createdAt   DateTime @default(now())
  
  @@unique([themeId, version])
}

model ThemePurchase {
  id          String   @id @default(cuid())
  tenantId    String
  themeId     String
  
  pricingModel  PricingModel
  amount        Decimal
  currency      String
  
  stripePaymentId String?
  licenseKey      String   @unique
  
  tenant      Tenant   @relation(fields: [tenantId], references: [id])
  theme       Theme    @relation(fields: [themeId], references: [id])
  
  purchasedAt DateTime @default(now())
  
  @@unique([tenantId, themeId])
}

model ThemeReview {
  id          String   @id @default(cuid())
  themeId     String
  userId      String   // Platform user who wrote review
  
  rating      Int      // 1-5
  title       String?
  content     String?  @db.Text
  
  theme       Theme    @relation(fields: [themeId], references: [id], onDelete: Cascade)
  
  createdAt   DateTime @default(now())
  
  @@unique([themeId, userId])
}
```

### 8.2 Theme Configuration Schema

```typescript
// packages/theme-sdk/types.ts
interface ThemeConfig {
  // Identity
  id: string;
  name: string;
  version: string;
  
  // Colors
  colors: {
    primary: string;      // Brand color
    secondary: string;    // Accent color
    accent: string;       // Highlight color
    background: string;   // Page background
    surface: string;      // Card background
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
    border: string;
    error: string;
    success: string;
    warning: string;
  };
  
  // Typography
  typography: {
    headingFont: string;  // "Montserrat"
    bodyFont: string;     // "Inter"
    sizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    weights: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
  
  // Spacing
  spacing: {
    containerWidth: string;  // "1280px"
    sectionPadding: string;  // "4rem"
    gridGap: string;         // "1.5rem"
  };
  
  // Border Radius
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  
  // Layout Options
  layouts: {
    header: 'centered' | 'left-logo' | 'split' | 'minimal';
    footer: 'simple' | 'detailed' | 'minimal';
    productGrid: 2 | 3 | 4 | 5;
    productCard: 'vertical' | 'horizontal' | 'minimal';
  };
  
  // Feature Toggles
  features: {
    quickView: boolean;
    wishlist: boolean;
    compareProducts: boolean;
    productZoom: boolean;
    stickyHeader: boolean;
    backToTop: boolean;
    newsletterPopup: boolean;
  };
}
```

### 8.3 Theme CDN Structure

```
https://cdn.boostcart.bg/themes/sofia/1.2.0/
├── components.js       # Bundled React components
├── templates.js        # Page templates
├── styles.css          # Compiled CSS
├── config.json         # Default theme configuration
├── preview.png         # Marketplace thumbnail
├── screenshots/
│   ├── home.png
│   ├── product.png
│   └── cart.png
└── assets/
    ├── fonts/
    └── images/
```

### 8.4 Theme Loading

```typescript
// packages/theme-engine/loader.ts
export async function loadTheme(themeId: string, tenantConfig: object) {
  // 1. Get theme metadata from database
  const theme = await db.theme.findUnique({ where: { id: themeId } });
  
  // 2. Check cache
  const cacheKey = `theme:${themeId}:${theme.version}`;
  const cached = await redis.get(cacheKey);
  if (cached) {
    return mergeConfig(JSON.parse(cached), tenantConfig);
  }
  
  // 3. Fetch from CDN
  const [components, templates, styles, config] = await Promise.all([
    fetch(`${theme.assetsUrl}/components.js`).then(r => r.text()),
    fetch(`${theme.assetsUrl}/templates.js`).then(r => r.text()),
    fetch(`${theme.assetsUrl}/styles.css`).then(r => r.text()),
    fetch(`${theme.assetsUrl}/config.json`).then(r => r.json()),
  ]);
  
  // 4. Cache theme
  await redis.set(cacheKey, JSON.stringify({
    components,
    templates,
    styles,
    config,
  }), 'EX', 3600); // 1 hour
  
  // 5. Merge with tenant's customizations
  return mergeConfig(config, tenantConfig);
}

// Merge user's customizations with theme defaults
function mergeConfig(themeConfig: ThemeConfig, tenantConfig: object) {
  return deepMerge(themeConfig, tenantConfig);
}
```

### 8.5 Hybrid Rendering (SSR + CSR)

```typescript
// apps/platform/(storefront)/[...slug]/page.tsx
export default async function StorefrontPage({ params }) {
  const tenant = await getCurrentTenant();
  const page = await getPage(tenant.id, params.slug);
  const theme = await loadTheme(tenant.themeId, tenant.themeConfig);
  
  // SSR: Render HTML on server
  const html = await renderToString(
    <ThemeProvider theme={theme}>
      <PageRenderer blocks={page.blocks} />
    </ThemeProvider>
  );
  
  return (
    <>
      {/* Server-rendered HTML (SEO-friendly) */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      
      {/* Client-side hydration (interactive) */}
      <HydrationBoundary>
        <PageRenderer blocks={page.blocks} />
      </HydrationBoundary>
    </>
  );
}
```

### 8.6 Official Themes

| Theme | Style | Price |
|-------|-------|-------|
| **Sofia** | Bulgarian-focused, modern | Free |
| **Minimal** | Clean, simple | Free |
| **Modern** | Trendy, feature-rich | 79 BGN |
| **Classic** | Traditional e-commerce | 49 BGN |
| **Fashion** | Clothing-focused | 99 BGN |
| **Electronics** | Tech products | 99 BGN |

---

## 9. Visual Editor

### 9.1 Block-Based Architecture

The visual editor uses a **block-based system** similar to WordPress Gutenberg or Framer.

```prisma
// ============= PAGES =============
model Page {
  id          String   @id @default(cuid())
  tenantId    String
  
  title       String
  slug        String
  type        PageType @default(CUSTOM)
  
  // Visual Editor Content
  blocks      Json     @default("[]")
  
  // SEO (built-in)
  seoTitle       String?
  seoDescription String?
  seoKeywords    String[]
  ogImage        String?
  
  // Settings
  fullWidth         Boolean @default(false)
  headerTransparent Boolean @default(false)
  
  // Versioning
  publishedVersion String?
  versions        PageVersion[]
  
  // Status
  status      PageStatus @default(DRAFT)
  publishedAt DateTime?
  
  tenant      Tenant   @relation(fields: [tenantId], references: [id])
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@unique([tenantId, slug])
}

enum PageType {
  HOME
  PRODUCT
  COLLECTION
  CUSTOM
  BLOG_POST
}

enum PageStatus {
  DRAFT
  PUBLISHED
  SCHEDULED
}

model PageVersion {
  id        String   @id @default(cuid())
  pageId    String
  version   Int
  blocks    Json
  
  createdBy String
  
  page      Page     @relation(fields: [pageId], references: [id], onDelete: Cascade)
  
  createdAt DateTime @default(now())
}
```

### 9.2 Block Definition

```typescript
// packages/visual-editor-sdk/types.ts
interface Block {
  id: string;
  type: string;            // "text", "image", "product-grid"
  parentId?: string;       // For nested blocks
  
  // Content
  attributes: Record<string, any>;
  
  // Nested blocks (for containers)
  children?: Block[];
  
  // Styling
  styles: {
    desktop: CSSProperties;
    tablet?: CSSProperties;
    mobile?: CSSProperties;
  };
  
  // Advanced
  animation?: Animation;
  visibility?: VisibilityRule[];
}

interface BlockDefinition {
  type: string;
  label: string;
  icon: string;
  category: 'basic' | 'layout' | 'ecommerce' | 'media' | 'advanced';
  
  // Default values
  defaultAttributes: Record<string, any>;
  
  // Editable controls
  controls: Control[];
  
  // Data binding (for e-commerce blocks)
  dataSource?: 'product' | 'collection' | 'cart';
  
  // Render functions
  render: (props: BlockRenderProps) => ReactNode;
  editor?: (props: BlockEditorProps) => ReactNode;
}

interface Control {
  name: string;
  label: string;
  type: 'text' | 'richtext' | 'number' | 'select' | 'toggle' | 
        'color' | 'image' | 'product' | 'collection';
  options?: { label: string; value: any }[];
  defaultValue?: any;
}
```

### 9.3 Core Blocks (30+)

**Basic Blocks:**
| Block | Description |
|-------|-------------|
| Text | Paragraph text with formatting |
| Heading | H1-H6 headings |
| Button | Call-to-action button |
| Image | Single image with caption |
| Video | Embedded video (YouTube, Vimeo) |
| Icon | Single icon from library |
| Spacer | Vertical spacing |
| Divider | Horizontal line |

**Layout Blocks:**
| Block | Description |
|-------|-------------|
| Container | Content wrapper with max-width |
| Columns | 2-6 column layouts |
| Grid | CSS Grid layout |
| Section | Full-width section with background |
| Accordion | Collapsible content |
| Tabs | Tabbed content |

**E-commerce Blocks (15+):**
| Block | Description |
|-------|-------------|
| Product Grid | Display products from collection |
| Featured Product | Single product showcase |
| Product Card | Individual product card |
| Product Slider | Carousel of products |
| Collection List | List of collections |
| Cart Summary | Shopping cart preview |
| Add to Cart | Add to cart button |
| Price | Product price display |
| Sale Badge | Discount badge |
| Stock Status | In stock/out of stock |
| Product Gallery | Image gallery with zoom |
| Product Variants | Variant selector |
| Reviews Summary | Star rating & count |
| Recently Viewed | Recently viewed products |
| Related Products | Related products grid |

**Media Blocks:**
| Block | Description |
|-------|-------------|
| Gallery | Image gallery/lightbox |
| Slider | Image carousel |
| Banner | Hero banner with CTA |
| Testimonials | Customer testimonials |
| Logo Grid | Partner/brand logos |

**Advanced Blocks:**
| Block | Description |
|-------|-------------|
| HTML | Custom HTML code |
| Form | Contact/custom forms |
| Map | Google Maps embed |
| Countdown | Countdown timer |
| Newsletter | Email signup form |

### 9.4 Visual Editor UI

```typescript
// apps/visual-editor/components/editor.tsx
export function VisualEditor({ pageId }) {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string>();
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  return (
    <div className="editor-layout">
      {/* Top Toolbar */}
      <Toolbar>
        <UndoRedo />
        <DeviceSelector value={device} onChange={setDevice} />
        <ZoomControls />
        <SaveButton onClick={savePage} />
        <PublishButton onClick={publishPage} />
      </Toolbar>
      
      <div className="editor-main">
        {/* Left Sidebar: Block Library */}
        <BlockLibrary onAdd={addBlock} />
        
        {/* Center: Canvas */}
        <Canvas device={device}>
          <DndContext onDragEnd={handleDragEnd}>
            <SortableContext items={blocks}>
              {blocks.map(block => (
                <BlockRenderer
                  key={block.id}
                  block={block}
                  isSelected={block.id === selectedBlockId}
                  onClick={() => setSelectedBlockId(block.id)}
                  onUpdate={updateBlock}
                />
              ))}
            </SortableContext>
          </DndContext>
        </Canvas>
        
        {/* Right Sidebar: Inspector */}
        {selectedBlockId && (
          <BlockInspector
            block={blocks.find(b => b.id === selectedBlockId)}
            onUpdate={updateBlock}
          />
        )}
      </div>
      
      {/* Bottom: Layers Panel (optional) */}
      <LayersPanel blocks={blocks} onSelect={setSelectedBlockId} />
    </div>
  );
}
```

---

## 10. Multi-Tenancy

### 10.1 Architecture

BoostCart uses a **single application, shared database** multi-tenant architecture with tenant isolation at the data layer.

```
┌─────────────────────────────────────────────────────────────────┐
│                    SINGLE PLATFORM APPLICATION                   │
│                                                                  │
│  ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐ │
│  │  Tenant A │   │  Tenant B │   │  Tenant C │   │  Tenant D │ │
│  │  store-a  │   │  store-b  │   │  store-c  │   │  store-d  │ │
│  └─────┬─────┘   └─────┬─────┘   └─────┬─────┘   └─────┬─────┘ │
│        │               │               │               │        │
│        └───────────────┴───────────────┴───────────────┘        │
│                                │                                 │
│                     ┌──────────┴──────────┐                     │
│                     │   PostgreSQL DB     │                     │
│                     │  (with tenantId)    │                     │
│                     └─────────────────────┘                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 10.2 Request Flow

```typescript
// middleware.ts
export async function middleware(request: NextRequest) {
  // 1. Extract tenant from hostname
  const hostname = request.headers.get('host');
  const subdomain = extractSubdomain(hostname); // store-a.boostcart.bg
  
  // Or from custom domain
  const customDomain = await redis.get(`domain:${hostname}`);
  
  // 2. Validate tenant exists
  const tenant = await getTenantBySlugOrDomain(subdomain || customDomain);
  if (!tenant) {
    return NextResponse.redirect(new URL('/404', request.url));
  }
  
  // 3. Set tenant context for downstream
  const response = NextResponse.next();
  response.headers.set('x-tenant-id', tenant.id);
  
  return response;
}
```

### 10.3 Data Isolation

```typescript
// lib/prisma-tenant.ts
import { Prisma, PrismaClient } from '@prisma/client';

export function createTenantClient(tenantId: string) {
  return prisma.$extends({
    query: {
      $allModels: {
        async findMany({ args, query }) {
          args.where = { ...args.where, tenantId };
          return query(args);
        },
        async findFirst({ args, query }) {
          args.where = { ...args.where, tenantId };
          return query(args);
        },
        async create({ args, query }) {
          args.data = { ...args.data, tenantId };
          return query(args);
        },
        async update({ args, query }) {
          args.where = { ...args.where, tenantId };
          return query(args);
        },
        async delete({ args, query }) {
          args.where = { ...args.where, tenantId };
          return query(args);
        },
      },
    },
  });
}

// Usage in API routes
export async function GET(request: Request) {
  const tenantId = request.headers.get('x-tenant-id');
  const db = createTenantClient(tenantId);
  
  // All queries automatically filtered by tenantId
  const products = await db.product.findMany();
  return Response.json(products);
}
```

### 10.4 Custom Domains

```prisma
model TenantDomain {
  id        String   @id @default(cuid())
  tenantId  String
  domain    String   @unique // shop.example.com
  
  // SSL
  sslStatus   SSLStatus @default(PENDING)
  sslExpiry   DateTime?
  
  // DNS
  dnsVerified Boolean   @default(false)
  dnsToken    String    @unique
  
  primary     Boolean   @default(false)
  
  tenant      Tenant    @relation(fields: [tenantId], references: [id])
  
  createdAt   DateTime  @default(now())
  
  @@index([domain])
}

enum SSLStatus {
  PENDING
  ACTIVE
  EXPIRED
  ERROR
}
```

---

## 11. Customer Accounts

### 11.1 Customer vs Platform Users

| Aspect | Platform User | Customer |
|--------|---------------|----------|
| **Scope** | Platform-wide | Per-tenant |
| **Purpose** | Store management | Shopping |
| **Auth** | Better Auth | Simple JWT |
| **Data** | `User` model | `Customer` model |
| **Example** | admin@store.com | customer@gmail.com |

### 11.2 Customer Schema

> **Note**: The full Customer model with all fields is defined in [Section 5.3 - Orders & Customers](#53-orders--customers). Below is a simplified view for reference.

```prisma
// Simplified view - see Section 5.3 for full schema
model Customer {
  id          String   @id @default(cuid())
  tenantId    String
  
  // Auth
  email       String
  password    String?   // Hashed, null for guest checkout
  
  // Profile
  firstName   String?
  lastName    String?
  phone       String?
  
  // Marketing
  acceptsMarketing Boolean @default(false)
  
  // ... additional fields in Section 5.3
  
  @@unique([tenantId, email])
  @@index([tenantId])
}
```

### 11.3 Customer Auth Flow

```typescript
// Customer login (per-tenant)
export async function loginCustomer(
  tenantId: string,
  email: string,
  password: string
) {
  const customer = await db.customer.findUnique({
    where: { tenantId_email: { tenantId, email } },
  });
  
  if (!customer || !customer.password) {
    throw new Error('Invalid credentials');
  }
  
  const valid = await bcrypt.compare(password, customer.password);
  if (!valid) {
    throw new Error('Invalid credentials');
  }
  
  // JWT includes tenantId for isolation
  const token = jwt.sign(
    { customerId: customer.id, tenantId, email },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
  
  return { customer, token };
}
```

### 11.4 Customer Dashboard Features

- **Order History**: View all past orders with status tracking
- **Addresses**: Manage shipping/billing addresses
- **Wishlist**: Saved products for later
- **Account Settings**: Email, password, marketing preferences
- **Return Requests**: Initiate returns for orders

---

## 12. Marketplace

### 12.1 Developer Portal

```prisma
model Developer {
  id            String   @id @default(cuid())
  userId        String   @unique // Platform user
  
  // Profile
  companyName   String?
  website       String?
  
  // Verification
  verified      Boolean  @default(false)
  verifiedAt    DateTime?
  
  // Payout
  stripeConnectId String?
  stripeOnboarded Boolean  @default(false)
  
  // Stats
  totalEarnings   Decimal  @default(0)
  totalDownloads  Int      @default(0)
  
  // Products
  plugins       Plugin[]
  themes        Theme[]
  
  user          User     @relation(fields: [userId], references: [id])
  
  createdAt     DateTime @default(now())
}
```

### 12.2 Marketplace Features

**For Merchants:**
- Browse plugins/themes by category
- Search with filters (price, rating, features)
- One-click installation
- Automatic updates (with changelog)
- Manage installed items

**For Developers:**
- Submit plugins/themes for review
- Version management
- Analytics dashboard (installs, revenue, ratings)
- Payout history
- Documentation & API reference

### 12.3 Review Process

```
┌────────────┐     ┌─────────────┐     ┌──────────┐     ┌──────────┐
│  SUBMITTED │ ──► │   PENDING   │ ──► │ APPROVED │ ──► │  LISTED  │
└────────────┘     │   REVIEW    │     └──────────┘     └──────────┘
                   └─────────────┘             │
                          │                    │
                          ▼                    ▼
                   ┌─────────────┐     ┌──────────────┐
                   │  REJECTED   │     │   FEATURED   │
                   │ (with notes)│     │ (staff pick) │
                   └─────────────┘     └──────────────┘
```

**Review Checklist:**
- [ ] Code security audit
- [ ] UI/UX quality check
- [ ] Performance testing
- [ ] Documentation review
- [ ] Pricing validation
- [ ] Legal compliance (GDPR, terms)

### 12.4 Revenue Split

| Revenue | Platform | Developer |
|---------|----------|-----------|
| One-time purchase | 20% | 80% |
| Subscription (Year 1) | 20% | 80% |
| Subscription (Year 2+) | 15% | 85% |

```typescript
// Payout calculation example
const sale = {
  type: 'SUBSCRIPTION',
  amount: 29, // BGN
  currency: 'BGN',
  year: 1,
};

const platformFee = sale.year === 1 ? 0.20 : 0.15;
const developerPayout = sale.amount * (1 - platformFee);
// Year 1: 29 * 0.80 = 23.20 BGN
// Year 2+: 29 * 0.85 = 24.65 BGN
```

---

## 13. Bulgarian Market Integration

### 13.1 Official Integrations (Plugins)

**Payment Gateways:**
| Gateway | Type | Features |
|---------|------|----------|
| ePay.bg | Online | Cards, ePay wallet |
| EasyPay | Cash/Online | Cash at locations, online |
| Borica | Online | Bulgarian banks |
| Cash on Delivery | Offline | Наложен платеж |

**Shipping Providers:**
| Carrier | Coverage | Features |
|---------|----------|----------|
| Econt Express | Bulgaria | Offices, home delivery, cash on delivery |
| Speedy | Bulgaria | Same as Econt |
| Bulgarian Post | Bulgaria + International | Economy shipping |

### 13.2 Bulgarian Localization

```typescript
// i18n configuration
const locales = {
  bg: {
    currency: 'BGN',
    currencySymbol: 'лв.',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: {
      decimal: ',',
      thousand: ' ',
    },
    // Bulgarian e-commerce terms
    terms: {
      addToCart: 'Добави в количката',
      checkout: 'Плащане',
      cashOnDelivery: 'Наложен платеж',
      freeShipping: 'Безплатна доставка',
      inStock: 'В наличност',
      outOfStock: 'Изчерпан',
    },
  },
};
```

### 13.3 Bulgarian Legal Compliance

- **Consumer Protection Law**: 14-day return policy
- **GDPR**: Data protection compliance
- **E-commerce Regulations**: Required business information
- **NRA Integration** (Future): National Revenue Agency for invoicing

---

## 14. Pricing & Business Model

### 14.1 Platform Plans

| Plan | Price | Features |
|------|-------|----------|
| **Free** | 0 BGN/mo | 50 products, 1% transaction fee, BoostCart branding |
| **Starter** | 49 BGN/mo | 100 products, 0.5% transaction fee, custom domain |
| **Professional** | 99 BGN/mo | Unlimited products, 0% transaction fee, advanced analytics |
| **Enterprise** | 299 BGN/mo | Everything + priority support, SLA, dedicated account manager |

### 14.2 Revenue Streams

| Stream | Source |
|--------|--------|
| Subscriptions | Monthly platform fees |
| Transaction Fees | Percentage on Free/Starter plans |
| Marketplace | 20% commission on plugin/theme sales |
| Premium Themes | First-party theme sales |
| Premium Plugins | First-party plugin sales |
| Custom Development | Enterprise integrations |

### 14.3 Year 1 Projections

| Metric | Value |
|--------|-------|
| Total Stores | 500 |
| Free Tier | 350 (70%) |
| Starter | 100 (20%) |
| Professional | 40 (8%) |
| Enterprise | 10 (2%) |
| **Monthly Revenue** | ~5,260 BGN |
| **Annual Revenue** | ~63,120 BGN |

---

## 15. Development Roadmap

### Phase 1: Foundation (Weeks 1-4)
**Monorepo Setup & Core Infrastructure**

- [ ] Initialize Turborepo structure
- [ ] Set up shared packages (ui, utils, types, config)
- [ ] Configure CI/CD pipelines
- [ ] Set up staging & production environments
- [ ] Implement multi-tenant database schema
- [ ] Configure Cloudflare R2 for CDN
- [ ] Set up Redis for caching

**Deliverables:**
- Working monorepo with package scaffolding
- CI/CD pipeline running
- Database migrations ready

---

### Phase 2: Core Platform (Weeks 5-10)
**Multi-Tenant Foundation**

- [ ] Tenant creation & management
- [ ] Subdomain routing (store.boostcart.bg)
- [ ] Custom domain support with SSL
- [ ] Platform admin dashboard
- [ ] Tenant isolation middleware
- [ ] User authentication (Better Auth)
- [ ] Role-based access control

**Deliverables:**
- Tenants can sign up and access their store
- Custom domains working with auto-SSL
- Admin can manage all tenants

---

### Phase 3: Product Management (Weeks 11-14)
**E-commerce Core**

- [ ] Product CRUD with variants
- [ ] Category & collection management
- [ ] Media library with CDN upload
- [ ] Inventory tracking
- [ ] Product search & filtering
- [ ] Bulk import/export (CSV)
- [ ] Product SEO fields

**Deliverables:**
- Full product management in admin
- Products display on storefront

---

### Phase 4: Orders & Checkout (Weeks 15-18)
**Transaction Flow**

- [ ] Shopping cart (local storage + server sync)
- [ ] Multi-step checkout
- [ ] Guest checkout support
- [ ] Order creation & management
- [ ] Order status workflow
- [ ] Email notifications (order confirmation, shipping)
- [ ] Invoice generation (PDF)

**Deliverables:**
- Complete checkout flow
- Orders appear in admin dashboard

---

### Phase 5: Customer Accounts (Weeks 19-21)
**B2C Features**

- [ ] Customer registration & login
- [ ] Customer dashboard
- [ ] Address book management
- [ ] Order history
- [ ] Wishlist
- [ ] Password reset flow
- [ ] Email verification

**Deliverables:**
- Customers can create accounts and view orders
- Guest checkout converts to account

---

### Phase 6: Theme Engine (Weeks 22-26)
**Visual Customization**

- [ ] Theme configuration schema
- [ ] Theme CDN loader
- [ ] SSR + CSR hybrid rendering
- [ ] Default theme ("Sofia")
- [ ] Theme customizer UI
- [ ] Color & typography controls
- [ ] Layout options

**Deliverables:**
- Stores can switch themes
- Visual customization without code

---

### Phase 7: Visual Editor (Weeks 27-32)
**Page Builder**

- [ ] Block-based architecture
- [ ] 30+ core blocks
- [ ] Drag-and-drop interface
- [ ] Responsive preview (desktop/tablet/mobile)
- [ ] Page versioning
- [ ] Template library
- [ ] E-commerce blocks (product grid, etc.)

**Deliverables:**
- Merchants can build pages visually
- Home page customization working

---

### Phase 8: Built-in Features (Weeks 33-36)
**Core Marketing Tools**

- [ ] Analytics dashboard
- [ ] Real-time visitors
- [ ] Conversion tracking
- [ ] SEO tools & audit
- [ ] Discount code system
- [ ] Abandoned cart recovery
- [ ] Basic email templates

**Deliverables:**
- Analytics visible in dashboard
- Abandoned carts send recovery emails

---

### Phase 9: Plugin System (Weeks 37-40)
**Extensibility Layer**

- [ ] Plugin architecture (OAuth + webhooks)
- [ ] Plugin installation flow
- [ ] Plugin configuration UI
- [ ] Webhook event system
- [ ] API for plugin developers
- [ ] Plugin SDK package

**Deliverables:**
- Third-party plugins can integrate
- First official plugins ready

---

### Phase 10: Official Plugins (Weeks 41-44)
**Bulgarian Integrations**

- [ ] Stripe payment plugin
- [ ] ePay.bg payment plugin
- [ ] Cash on Delivery plugin
- [ ] Econt shipping plugin
- [ ] Speedy shipping plugin
- [ ] Product Reviews plugin

**Deliverables:**
- Stores can accept payments
- Stores can ship with Bulgarian carriers

---

### Phase 11: Marketplace (Weeks 45-48)
**Developer Ecosystem**

- [ ] Developer portal
- [ ] Theme submission & review
- [ ] Plugin submission & review
- [ ] Stripe Connect for payouts
- [ ] Marketplace storefront
- [ ] Rating & review system

**Deliverables:**
- Developers can submit and sell plugins/themes
- Marketplace browsable by merchants

---

### Phase 12: Launch Prep (Weeks 49-52)
**Production Ready**

- [ ] Performance optimization
- [ ] Security audit
- [ ] Load testing
- [ ] Documentation (user & developer)
- [ ] Customer support system
- [ ] Marketing website
- [ ] Beta program

**Deliverables:**
- Platform ready for public launch
- Documentation complete

---

## 16. Infrastructure & Deployment

### 16.1 Cloud Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      CLOUDFLARE                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │    CDN      │  │     WAF     │  │    DNS      │              │
│  │  (R2/Cache) │  │  (DDoS)     │  │  (Routing)  │              │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
└─────────┼────────────────┼────────────────┼─────────────────────┘
          │                │                │
          ▼                ▼                ▼
┌─────────────────────────────────────────────────────────────────┐
│                       VERCEL                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    EDGE NETWORK                          │    │
│  │   ┌────────────┐  ┌────────────┐  ┌────────────┐        │    │
│  │   │  Platform  │  │  Storefront │  │  Visual    │        │    │
│  │   │   Admin    │  │   (SSR)     │  │  Editor    │        │    │
│  │   └────────────┘  └────────────┘  └────────────┘        │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐     │
│  │                 SERVERLESS FUNCTIONS                    │     │
│  │        API Routes    |    Background Jobs              │     │
│  └────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       DATA LAYER                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │  PostgreSQL │  │    Redis    │  │    R2       │              │
│  │  (Neon/     │  │   (Upstash) │  │  (Assets)   │              │
│  │   Supabase) │  │             │  │             │              │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

### 16.2 Environment Configuration

| Environment | Purpose | Database | Domain |
|-------------|---------|----------|--------|
| Development | Local dev | Local PostgreSQL | localhost:3000 |
| Staging | Testing | Staging DB | staging.boostcart.bg |
| Production | Live | Production DB | boostcart.bg |

### 16.3 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main, staging]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install
      - run: bun lint
      - run: bun test
      - run: bun run build

  deploy-staging:
    if: github.ref == 'refs/heads/staging'
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}

  deploy-production:
    if: github.ref == 'refs/heads/main'
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 17. Security Considerations

### 17.1 Authentication & Authorization

- **Platform Users**: Better Auth with 2FA
- **Customers**: JWT with short expiry (30 days)
- **Plugins**: OAuth 2.0 with scoped access
- **API**: Rate limiting per tenant

### 17.2 Data Protection

- **Encryption at rest**: PostgreSQL encrypted storage
- **Encryption in transit**: TLS 1.3 everywhere
- **PII handling**: Automatic data anonymization for analytics
- **GDPR compliance**: Data export, deletion on request

### 17.3 Plugin Security

- **Sandboxing**: Plugins run externally, not in main process
- **Scoped access**: OAuth scopes limit data access
- **Webhook validation**: HMAC signature verification
- **Code review**: Manual review before marketplace listing

### 17.4 Rate Limiting

| Endpoint | Limit |
|----------|-------|
| Public API | 1000/hour |
| Admin API | 5000/hour |
| Webhook Delivery | 100/minute |
| Storefront Pages | 10000/minute |

---

## Appendix A: File Structure (Final)

```
boostcart/
├── apps/
│   ├── platform/                 # Main Next.js app
│   │   ├── (admin)/              # Admin routes
│   │   ├── (storefront)/         # Storefront routes
│   │   └── api/                  # API routes
│   ├── docs/                     # Documentation site
│   └── marketing/                # Marketing website
│
├── packages/
│   ├── ui/                       # Shared React components
│   ├── theme-sdk/                # Theme development kit
│   ├── plugin-sdk/               # Plugin development kit
│   ├── visual-editor-sdk/        # Block definitions
│   ├── database/                 # Prisma schema & client
│   ├── auth/                     # Authentication logic
│   ├── email/                    # Email templates & sending
│   └── config/                   # Shared configurations
│
├── plugins/                      # Official plugins (microservices)
│   ├── stripe-payments/
│   ├── epay-payments/
│   ├── econt-shipping/
│   └── speedy-shipping/
│
├── themes/                       # Official themes
│   ├── sofia/
│   ├── minimal/
│   └── modern/
│
├── turbo.json
├── bunfig.toml                   # Bun workspace config
└── package.json
```

---

## Appendix B: API Endpoints Summary

### Public API (for plugins)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List products |
| GET | `/api/products/:id` | Get product |
| GET | `/api/collections` | List collections |
| GET | `/api/orders` | List orders |
| GET | `/api/orders/:id` | Get order |
| PUT | `/api/orders/:id` | Update order |
| GET | `/api/customers/:id` | Get customer |
| POST | `/api/transactions` | Create transaction |
| POST | `/api/fulfillments` | Create fulfillment |

### Webhook Events

| Event | Payload |
|-------|---------|
| `order.created` | Full order object |
| `order.paid` | Order with payment |
| `order.fulfilled` | Order with fulfillment |
| `order.cancelled` | Order with reason |
| `product.created` | Full product |
| `product.updated` | Full product |
| `customer.created` | Customer profile |
| `cart.abandoned` | Cart contents |

---

## Appendix C: Theme Component Reference

### Required Components

Every theme must export these components:

```typescript
// Theme entry point
export {
  // Layout
  Header,
  Footer,
  Sidebar,
  
  // Pages
  HomePage,
  ProductPage,
  CollectionPage,
  CartPage,
  CheckoutPage,
  
  // E-commerce
  ProductCard,
  ProductGallery,
  ProductInfo,
  AddToCartButton,
  VariantSelector,
  PriceDisplay,
  CartDrawer,
  
  // UI
  Button,
  Input,
  Select,
  Modal,
  Toast,
};
```

---

## Appendix D: Block SDK Reference

### Creating Custom Blocks

```typescript
// my-custom-block.tsx
import { defineBlock } from '@boostcart/visual-editor-sdk';

export const TestimonialBlock = defineBlock({
  type: 'testimonial',
  label: 'Testimonial',
  icon: 'MessageSquare',
  category: 'media',
  
  defaultAttributes: {
    quote: 'This is an amazing product!',
    author: 'John Doe',
    role: 'CEO',
    avatar: '',
    rating: 5,
  },
  
  controls: [
    { name: 'quote', label: 'Quote', type: 'richtext' },
    { name: 'author', label: 'Author Name', type: 'text' },
    { name: 'role', label: 'Role/Title', type: 'text' },
    { name: 'avatar', label: 'Avatar', type: 'image' },
    { name: 'rating', label: 'Rating', type: 'number', min: 1, max: 5 },
  ],
  
  render({ attributes, styles }) {
    return (
      <blockquote style={styles}>
        <p>{attributes.quote}</p>
        <footer>
          <img src={attributes.avatar} alt={attributes.author} />
          <cite>{attributes.author}</cite>
          <span>{attributes.role}</span>
        </footer>
      </blockquote>
    );
  },
});
```

---

**End of Document**

*Total estimated development time: 52 weeks (1 year)*
*Solo developer + AI: 14-18 months (full-time)*
*Initial budget estimate: 3,000 - 5,000 BGN (solo) | 150,000 - 250,000 BGN (team)*
