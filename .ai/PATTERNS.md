# Development Patterns & Solutions

> Solutions to problems we've encountered. Reference this to avoid repeating mistakes.

---

## React / Next.js

### Infinite Loop in Form Components (React Hook Form)

**Problem**: Components with `Select`, `RadioGroup`, or `Switch` from Radix UI cause "Maximum update depth exceeded" when wrapped in `FormControl`.

**Solution**: Extract complex form controls to memoized components:

```tsx
// ❌ BAD - causes infinite loop
<FormControl>
  <Select value={value} onValueChange={onChange}>
    ...
  </Select>
</FormControl>

// ✅ GOOD - extract and memoize
const MemoizedSelect = memo(function MemoizedSelect({ 
  value, 
  onChange 
}: Props) {
  const handleChange = useCallback((v: string) => {
    if (v !== value) onChange(v);
  }, [value, onChange]);
  
  return (
    <Select value={value} onValueChange={handleChange}>
      ...
    </Select>
  );
});

// In form:
<FormField
  control={form.control}
  name="fieldName"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Label</FormLabel>
      <MemoizedSelect value={field.value} onChange={field.onChange} />
    </FormItem>
  )}
/>
```

**Key Points**:
- Remove `FormControl` wrapper from Radix primitives
- Use `useCallback` for onChange handlers
- Add value comparison guard: `if (v !== value)`
- Wrap component in `memo()`

---

### useEffect Infinite Loop with form.setValue

**Problem**: Using `form.setValue` in useEffect with `form` as dependency causes infinite loop.

**Solution**: Use useRef to get stable reference:

```tsx
// ❌ BAD
useEffect(() => {
  form.setValue('field', value);
}, [form, value]); // form changes every render!

// ✅ GOOD
const setValueRef = useRef(form.setValue);
setValueRef.current = form.setValue;

useEffect(() => {
  setValueRef.current('field', value);
}, [value]);
```

---

### Infinite Query Loop with searchParams

**Problem**: Using searchParams object directly in query dependencies causes infinite refetch.

**Solution**: Extract primitive values:

```tsx
// ❌ BAD
const { data } = useQuery({
  queryKey: ['items', searchParams],
  queryFn: () => fetchItems(searchParams),
});

// ✅ GOOD
const page = searchParams.get('page') ?? '1';
const search = searchParams.get('search') ?? '';

const { data } = useQuery({
  queryKey: ['items', page, search],
  queryFn: () => fetchItems({ page, search }),
});
```

---

## Prisma

### Multi-Tenant Queries

Always filter by tenantId:

```typescript
// Use Prisma extension for automatic filtering
const tenantDb = prisma.$extends({
  query: {
    $allModels: {
      async findMany({ args, query }) {
        args.where = { ...args.where, tenantId };
        return query(args);
      },
      // ... other methods
    },
  },
});
```

---

### Prisma Schema Field Names

**Problem**: Common assumptions about field names that are WRONG:

| Assumption | Reality |
|------------|---------|
| `Product.categories` (many-to-many) | `Product.category` via `categoryId` (single) |
| `Product.trackQuantity`, `Product.quantity` | `Product.trackStock`, `Product.stock` |
| `Product.collections` | `Product.collectionProducts` (junction table) |
| `ProductVariant.optionValues` (relation) | `ProductVariant.options` (JSON) |
| `Collection.order` | Does NOT exist - use `createdAt` |
| `Collection.seo` | Does NOT exist - SEO in translations |

**Solution**: Always check `prisma/schema.prisma` before writing queries.

---

## Zod / React Hook Form

### Zod v4 with @hookform/resolvers

**Problem**: `@hookform/resolvers` expects Zod v3 types, but Zod v4 has incompatible internal structure. Error: `Type '4' is not assignable to type '3 | 2 | 1'`.

**Solution**: Import from Zod v3 compatibility layer:

```tsx
// ❌ BAD - breaks with @hookform/resolvers
import { z } from "zod";

// ✅ GOOD - use v3 compatibility
import { z } from "zod/v3";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// Works with zodResolver
const form = useForm({
  resolver: zodResolver(schema),
});
```

---

## File Upload

### Staged Upload Pattern

For forms with media, use staged uploads:

```tsx
interface StagedFile {
  id: string;
  file: File;
  preview: string;
  status: 'pending' | 'uploading' | 'uploaded' | 'error';
  url?: string;
}

// 1. User selects files → create staged entries with previews
// 2. On form submit → upload all pending files
// 3. After upload → update form with URLs
// 4. Cleanup: revoke object URLs on unmount
```

---

## Component Patterns

### Form Section Components

Keep form sections as separate components for maintainability:

```
product-form/
├── product-form.tsx           # Main form container
├── product-general-section.tsx
├── product-media-section.tsx
├── product-pricing-section.tsx
├── product-inventory-section.tsx
└── product-variants-section.tsx
```

Each section receives `form` prop and handles its own fields.

---

## Adding New Entries

When solving a new problem, add it here with:
1. **Problem**: What went wrong
2. **Solution**: Code example of the fix
3. **Key Points**: Important details to remember
