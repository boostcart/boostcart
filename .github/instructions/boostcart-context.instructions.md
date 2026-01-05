---
applyTo: '**'
---
# BoostCart Project Instructions

You are working on **BoostCart**, a cloud-hosted SaaS e-commerce platform (Shopify competitor) targeting the Bulgarian market.

## Project Context Files (READ THESE)

Before starting any significant work, check these files in the `.ai/` folder:

| File | Purpose |
|------|---------|
| `.ai/PLATFORM_PLAN.md` | Complete development plan, architecture, database schema, roadmap |
| `.ai/CURRENT.md` | Current phase, active tasks, blockers, decisions |
| `.ai/CHANGELOG.md` | History of changes and progress |
| `.ai/PATTERNS.md` | Solutions to problems we've encountered |
| `.ai/README.md` | Quick reference for project context |

## Tech Stack (IMPORTANT)

- **Package Manager**: Bun (NOT npm/pnpm) - use `bun add <package>`
- **Framework**: Next.js 16 with App Router
- **Database**: PostgreSQL with Prisma
- **Auth**: Better Auth (platform users) + JWT (customers)
- **UI**: Tailwind CSS + shadcn/ui + Radix UI
- **Hosting**: Vercel (serverless) - NO Docker/Kubernetes

## Architecture

### Multi-Tenant Model
- Single application, shared database
- All tenant data filtered by `tenantId`
- Subdomain routing: `store.boostcart.bg`
- Custom domain support planned

### Current Structure
```
boostcart/
├── src/
│   ├── app/
│   │   ├── (internal)/admin/    # Admin dashboard
│   │   ├── (private)/           # Authenticated user pages
│   │   ├── (public)/            # Public storefront (future)
│   │   └── (unauthenticated)/   # Auth pages
│   ├── components/
│   │   ├── ui/                  # shadcn components
│   │   └── admin/               # Admin-specific components
│   ├── server/                  # tRPC, services, auth
│   └── lib/                     # Utilities
├── prisma/                      # Database schema
└── .ai/                         # AI context & planning
```

### Target Structure (Monorepo)
```
boostcart/
├── apps/
│   ├── platform/                # Main app (current src/)
│   ├── docs/                    # Documentation
│   └── marketing/               # Marketing site
├── packages/
│   ├── database/                # Prisma schema & client
│   ├── ui/                      # Shared components
│   ├── auth/                    # Auth logic
│   └── config/                  # Shared configs
└── .ai/                         # AI context
```

## Development Rules

### ALWAYS
- Use `bun add <package>` for installing packages
- Update `.ai/CHANGELOG.md` after significant changes
- Update `.ai/CURRENT.md` when starting/completing tasks
- Check `.ai/PATTERNS.md` before solving common problems
- Use TypeScript with strict types
- Follow existing code patterns in the codebase

### NEVER
- Use npm, yarn, or pnpm
- Run `bun dev`, `bun build`, or `bun start` (server is already running)
- Use Docker or Kubernetes (we're serverless)
- Create .css/.scss files (use Tailwind only)
- Leave TODOs or placeholder code

## Known Patterns & Solutions

### React Hook Form + Radix UI Infinite Loops
When using Select, RadioGroup, Switch in forms:
1. Extract to memoized component
2. Remove FormControl wrapper
3. Use useCallback with value comparison guard
4. See `.ai/PATTERNS.md` for code examples

### Multi-Tenant Queries
Always filter by tenantId - use Prisma extension for automatic filtering.

### File Uploads
Use staged upload pattern - see `.ai/PATTERNS.md`

## Current Development Phase

**Phase 1: Foundation** (Starting)
- Set up Turborepo monorepo
- Migrate existing code
- Extract shared packages
- Configure CI/CD

Check `.ai/CURRENT.md` for detailed task list and progress.

## Database Models (Key Ones)

- `User` - Platform users (managed by Better Auth)
- `Tenant` - Stores/shops
- `Customer` - Store customers (per-tenant)
- `Product`, `ProductVariant`, `ProductMedia`
- `Order`, `OrderItem`
- `Collection`, `Category`, `Brand`

Full schema in `.ai/PLATFORM_PLAN.md` Section 5.

## Quick Commands

```bash
# Install package
bun add <package>

# Prisma
bunx prisma migrate dev --name <name>
bunx prisma generate
bunx prisma studio

# Shadcn
bunx shadcn@latest add <component>
```

## When in Doubt

1. Read `.ai/CURRENT.md` for context
2. Check `.ai/PATTERNS.md` for solutions
3. Reference `.ai/PLATFORM_PLAN.md` for architecture decisions
4. Ask the user for clarification
