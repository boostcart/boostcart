import Redis from "ioredis";
import { env } from "@/env";

// Redis client singleton
let redis: Redis | null = null;

/**
 * Get the Redis client instance.
 * Returns null if REDIS_URL is not configured (allows graceful degradation).
 */
export function getRedis(): Redis | null {
	if (!env.REDIS_URL) {
		return null;
	}

	if (!redis) {
		redis = new Redis(env.REDIS_URL, {
			maxRetriesPerRequest: 3,
			retryStrategy(times) {
				if (times > 3) {
					// Stop retrying after 3 attempts
					return null;
				}
				// Exponential backoff: 200ms, 400ms, 800ms
				return Math.min(times * 200, 2000);
			},
			lazyConnect: true,
		});

		redis.on("error", (err) => {
			console.error("Redis connection error:", err);
		});

		redis.on("connect", () => {
			console.log("Redis connected");
		});
	}

	return redis;
}

/**
 * Cache wrapper with automatic JSON serialization.
 * Returns cached value if exists, otherwise executes fn and caches the result.
 */
export async function cached<T>(
	key: string,
	fn: () => Promise<T>,
	ttlSeconds = 300,
): Promise<T> {
	const client = getRedis();

	// If Redis is not available, just execute the function
	if (!client) {
		return fn();
	}

	try {
		// Try to get cached value
		const cached = await client.get(key);
		if (cached) {
			return JSON.parse(cached) as T;
		}

		// Execute function and cache result
		const result = await fn();
		await client.setex(key, ttlSeconds, JSON.stringify(result));
		return result;
	} catch (error) {
		console.error("Redis cache error:", error);
		// On error, fall back to executing the function
		return fn();
	}
}

/**
 * Invalidate cache by key pattern.
 * Supports wildcards: "user:*" will delete all keys starting with "user:"
 */
export async function invalidateCache(pattern: string): Promise<void> {
	const client = getRedis();
	if (!client) return;

	try {
		if (pattern.includes("*")) {
			// Use SCAN for pattern matching (safer than KEYS in production)
			let cursor = "0";
			do {
				const [nextCursor, keys] = await client.scan(
					cursor,
					"MATCH",
					pattern,
					"COUNT",
					100,
				);
				cursor = nextCursor;
				if (keys.length > 0) {
					await client.del(...keys);
				}
			} while (cursor !== "0");
		} else {
			await client.del(pattern);
		}
	} catch (error) {
		console.error("Redis invalidate error:", error);
	}
}

/**
 * Cache keys for different entities.
 * Use these to maintain consistent key naming.
 */
export const CacheKeys = {
	// Tenant-specific keys
	tenant: (tenantId: string) => `tenant:${tenantId}`,
	tenantSettings: (tenantId: string) => `tenant:${tenantId}:settings`,

	// Product keys
	product: (tenantId: string, productId: string) =>
		`tenant:${tenantId}:product:${productId}`,
	products: (tenantId: string) => `tenant:${tenantId}:products`,
	productsByCollection: (tenantId: string, collectionId: string) =>
		`tenant:${tenantId}:collection:${collectionId}:products`,
	productsByCategory: (tenantId: string, categoryId: string) =>
		`tenant:${tenantId}:category:${categoryId}:products`,

	// Collection keys
	collection: (tenantId: string, collectionId: string) =>
		`tenant:${tenantId}:collection:${collectionId}`,
	collections: (tenantId: string) => `tenant:${tenantId}:collections`,

	// Category keys
	category: (tenantId: string, categoryId: string) =>
		`tenant:${tenantId}:category:${categoryId}`,
	categories: (tenantId: string) => `tenant:${tenantId}:categories`,

	// Content keys
	pages: (tenantId: string) => `tenant:${tenantId}:pages`,
	page: (tenantId: string, slug: string) => `tenant:${tenantId}:page:${slug}`,
	blogPosts: (tenantId: string) => `tenant:${tenantId}:blog`,
	blogPost: (tenantId: string, slug: string) =>
		`tenant:${tenantId}:blog:${slug}`,

	// Locale keys
	locales: (tenantId: string) => `tenant:${tenantId}:locales`,
	defaultLocale: (tenantId: string) => `tenant:${tenantId}:locale:default`,

	// Customer keys (for storefront)
	customer: (tenantId: string, customerId: string) =>
		`tenant:${tenantId}:customer:${customerId}`,
	customerCart: (tenantId: string, customerId: string) =>
		`tenant:${tenantId}:customer:${customerId}:cart`,

	// Session keys
	session: (sessionId: string) => `session:${sessionId}`,
} as const;

/**
 * TTL presets in seconds
 */
export const CacheTTL = {
	/** 1 minute - for frequently changing data */
	SHORT: 60,
	/** 5 minutes - default */
	DEFAULT: 300,
	/** 15 minutes - for moderately stable data */
	MEDIUM: 900,
	/** 1 hour - for stable data */
	LONG: 3600,
	/** 24 hours - for rarely changing data */
	DAY: 86400,
} as const;
