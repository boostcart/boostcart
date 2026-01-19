/*
  Warnings:

  - You are about to drop the column `userId` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `customerProfileId` on the `CustomerAddress` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `WishlistItem` table. All the data in the column will be lost.
  - You are about to drop the `CustomerProfile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[customerId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customerId,productId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customerId,productId]` on the table `WishlistItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `CustomerAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `WishlistItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- DropForeignKey
ALTER TABLE "CustomerAddress" DROP CONSTRAINT "CustomerAddress_customerProfileId_fkey";

-- DropForeignKey
ALTER TABLE "CustomerProfile" DROP CONSTRAINT "CustomerProfile_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "CustomerProfile" DROP CONSTRAINT "CustomerProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- DropForeignKey
ALTER TABLE "WishlistItem" DROP CONSTRAINT "WishlistItem_userId_fkey";

-- DropIndex
DROP INDEX "Cart_userId_key";

-- DropIndex
DROP INDEX "CustomerAddress_customerProfileId_idx";

-- DropIndex
DROP INDEX "Order_userId_idx";

-- DropIndex
DROP INDEX "Review_userId_tenantId_productId_key";

-- DropIndex
DROP INDEX "WishlistItem_userId_tenantId_productId_key";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "userId",
ADD COLUMN     "customerId" TEXT;

-- AlterTable
ALTER TABLE "CustomerAddress" DROP COLUMN "customerProfileId",
ADD COLUMN     "customerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "userId",
ADD COLUMN     "customerId" TEXT,
ADD COLUMN     "guestPhone" TEXT;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "userId",
ADD COLUMN     "customerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WishlistItem" DROP COLUMN "userId",
ADD COLUMN     "customerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "CustomerProfile";

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "phone" TEXT,
    "acceptsMarketing" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT NOT NULL DEFAULT 'bg',
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "emailVerifiedAt" TIMESTAMP(3),
    "googleId" TEXT,
    "facebookId" TEXT,
    "totalSpent" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "ordersCount" INTEGER NOT NULL DEFAULT 0,
    "lastOrderAt" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerSession" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "lastActiveAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Customer_tenantId_idx" ON "Customer"("tenantId");

-- CreateIndex
CREATE INDEX "Customer_email_idx" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_tenantId_email_key" ON "Customer"("tenantId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerSession_token_key" ON "CustomerSession"("token");

-- CreateIndex
CREATE INDEX "CustomerSession_customerId_idx" ON "CustomerSession"("customerId");

-- CreateIndex
CREATE INDEX "CustomerSession_token_idx" ON "CustomerSession"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Cart_customerId_key" ON "Cart"("customerId");

-- CreateIndex
CREATE INDEX "Cart_customerId_idx" ON "Cart"("customerId");

-- CreateIndex
CREATE INDEX "CustomerAddress_customerId_idx" ON "CustomerAddress"("customerId");

-- CreateIndex
CREATE INDEX "Order_customerId_idx" ON "Order"("customerId");

-- CreateIndex
CREATE INDEX "Review_customerId_idx" ON "Review"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_customerId_productId_key" ON "Review"("customerId", "productId");

-- CreateIndex
CREATE INDEX "WishlistItem_customerId_idx" ON "WishlistItem"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "WishlistItem_customerId_productId_key" ON "WishlistItem"("customerId", "productId");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerSession" ADD CONSTRAINT "CustomerSession_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerAddress" ADD CONSTRAINT "CustomerAddress_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishlistItem" ADD CONSTRAINT "WishlistItem_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
