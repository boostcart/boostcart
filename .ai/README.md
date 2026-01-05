# BoostCart AI Development Context

> Quick reference for AI assistants working on this project.

---

## Project Overview

**BoostCart** is a cloud-hosted SaaS e-commerce platform (Shopify competitor) targeting the Bulgarian market.

### Key Facts
- **Stage**: Early development (Phase 1 starting)
- **Developer**: Solo + AI assistance
- **Timeline**: 14-18 months to MVP
- **Budget**: ~3,000-5,000 BGN

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Monorepo | Turborepo |
| Package Manager | **Bun** (not npm/pnpm) |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Database | PostgreSQL (Neon) |
| ORM | Prisma |
| Auth (Platform) | Better Auth |
| Auth (Customers) | JWT |
| Styling | Tailwind CSS |
| UI | shadcn/ui + Radix UI |
| Hosting | Vercel |
| Cache | Upstash Redis |
| CDN/Storage | Cloudflare R2 |
| Email | Resend |

---

## Architecture

### Multi-Tenant Model
- Single application, shared database
- All tables have `tenantId` for isolation
- Subdomain routing: `store.boostcart.bg`
- Custom domain support

### Key Models
- `Tenant` - Store/shop
- `User` - Platform users (Better Auth)
- `Customer` - Store customers (per-tenant)
- `Product`, `Order`, `Collection`, etc.

---

## Current Codebase Structure

```
boostcart/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (internal)/         # Admin dashboard
│   │   ├── (private)/          # Authenticated pages
│   │   ├── (public)/           # Public pages
│   │   └── (unauthenticated)/  # Auth pages
│   ├── components/             # React components
│   ├── server/                 # Server-side code
│   └── lib/                    # Utilities
├── prisma/                     # Database schema
└── .ai/                        # AI context files
```

---

## Important Files

| File | Purpose |
|------|---------|
| `.ai/PLATFORM_PLAN.md` | Complete development plan |
| `.ai/CURRENT.md` | Current work status |
| `.ai/CHANGELOG.md` | Development history |
| `.ai/PATTERNS.md` | Solutions to problems |
| `prisma/schema.prisma` | Current database schema |

---

## Development Rules

### DO
- Use Bun for all package operations (`bun add`, `bun run`)
- Follow existing patterns in codebase
- Update `.ai/CHANGELOG.md` after significant changes
- Update `.ai/CURRENT.md` with progress
- Check `.ai/PATTERNS.md` before solving common problems

### DON'T
- Don't use npm/pnpm - we use Bun
- Don't use Docker/Kubernetes - we're serverless
- Don't run `bun dev` / `bun build` - server is already running
- Don't modify `package.json` directly - use terminal for installs

---

## Current Phase: Foundation

### Goals
1. Set up Turborepo monorepo
2. Migrate existing code to `apps/platform`
3. Extract shared packages
4. Configure CI/CD

### Next Phases
See `.ai/PLATFORM_PLAN.md` for full 12-phase roadmap.

---

## Quick Commands

```bash
# Install package
bun add <package>

# Run dev (already running, don't need this)
bun dev

# Database
bunx prisma migrate dev
bunx prisma studio

# Shadcn component
bunx shadcn@latest add <component>
```
