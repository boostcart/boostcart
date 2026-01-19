/*
  Warnings:

  - You are about to drop the column `customerId` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `CustomerAddress` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `WishlistItem` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CustomerSession` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,tenantId,productId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,tenantId,productId]` on the table `WishlistItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerProfileId` to the `CustomerAddress` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Review` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `tenantId` to the `WishlistItem` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `WishlistItem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "CustomerAddress" DROP CONSTRAINT "CustomerAddress_customerId_fkey";

-- DropForeignKey
ALTER TABLE "CustomerSession" DROP CONSTRAINT "CustomerSession_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- DropForeignKey
ALTER TABLE "WishlistItem" DROP CONSTRAINT "WishlistItem_customerId_fkey";

-- DropIndex
DROP INDEX "Cart_customerId_idx";

-- DropIndex
DROP INDEX "CustomerAddress_customerId_idx";

-- DropIndex
DROP INDEX "Order_customerId_idx";

-- DropIndex
DROP INDEX "WishlistItem_customerId_productId_key";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "customerId";

-- AlterTable
ALTER TABLE "CustomerAddress" DROP COLUMN "customerId",
ADD COLUMN     "customerProfileId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "customerId";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "customerId",
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phone" TEXT;

-- AlterTable
ALTER TABLE "WishlistItem" DROP COLUMN "customerId",
ADD COLUMN     "tenantId" TEXT NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "CustomerSession";

-- CreateTable
CREATE TABLE "CustomerProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "acceptsMarketing" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT NOT NULL DEFAULT 'bg',
    "totalSpent" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "ordersCount" INTEGER NOT NULL DEFAULT 0,
    "lastOrderAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CustomerProfile_tenantId_idx" ON "CustomerProfile"("tenantId");

-- CreateIndex
CREATE INDEX "CustomerProfile_userId_idx" ON "CustomerProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerProfile_userId_tenantId_key" ON "CustomerProfile"("userId", "tenantId");

-- CreateIndex
CREATE INDEX "CustomerAddress_customerProfileId_idx" ON "CustomerAddress"("customerProfileId");

-- CreateIndex
CREATE INDEX "Order_userId_idx" ON "Order"("userId");

-- CreateIndex
CREATE INDEX "Review_productId_idx" ON "Review"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_userId_tenantId_productId_key" ON "Review"("userId", "tenantId", "productId");

-- CreateIndex
CREATE INDEX "WishlistItem_tenantId_idx" ON "WishlistItem"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "WishlistItem_userId_tenantId_productId_key" ON "WishlistItem"("userId", "tenantId", "productId");

-- AddForeignKey
ALTER TABLE "CustomerProfile" ADD CONSTRAINT "CustomerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerProfile" ADD CONSTRAINT "CustomerProfile_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerAddress" ADD CONSTRAINT "CustomerAddress_customerProfileId_fkey" FOREIGN KEY ("customerProfileId") REFERENCES "CustomerProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistItem" ADD CONSTRAINT "WishlistItem_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
