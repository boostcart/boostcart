import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

export type { PrismaClient };

export const createPrismaClient = (connectionString: string, isDev = false) => {
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({
    adapter,
    log: isDev ? ["query", "error", "warn"] : ["error"],
  });
};

// For singleton pattern in apps
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const getPrismaClient = (connectionString: string, isDev = false) => {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient(connectionString, isDev);
  }
  return globalForPrisma.prisma;
};

export { PrismaClient as PrismaClientClass } from "./generated/prisma/client";
