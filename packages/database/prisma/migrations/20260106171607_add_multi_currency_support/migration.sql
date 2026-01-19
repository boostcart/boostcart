/*
  Warnings:

  - You are about to drop the column `isDefault` on the `Currency` table. All the data in the column will be lost.
  - You are about to alter the column `rate` on the `Currency` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `Decimal(10,6)`.

*/
-- AlterTable
ALTER TABLE "Currency" DROP COLUMN "isDefault",
ADD COLUMN     "decimals" INTEGER NOT NULL DEFAULT 2,
ADD COLUMN     "symbolFirst" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "rate" SET DATA TYPE DECIMAL(10,6);

-- CreateTable
CREATE TABLE "TenantCurrency" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "currencyId" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TenantCurrency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductPrice" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "currencyId" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "compareAtPrice" DECIMAL(10,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductPrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TenantCurrency_tenantId_idx" ON "TenantCurrency"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "TenantCurrency_tenantId_currencyId_key" ON "TenantCurrency"("tenantId", "currencyId");

-- CreateIndex
CREATE INDEX "ProductPrice_productId_idx" ON "ProductPrice"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductPrice_productId_currencyId_key" ON "ProductPrice"("productId", "currencyId");

-- AddForeignKey
ALTER TABLE "TenantCurrency" ADD CONSTRAINT "TenantCurrency_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantCurrency" ADD CONSTRAINT "TenantCurrency_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPrice" ADD CONSTRAINT "ProductPrice_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPrice" ADD CONSTRAINT "ProductPrice_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
