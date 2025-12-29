/*
  Warnings:

  - You are about to drop the column `depthCm` on the `ProductShippingInfo` table. All the data in the column will be lost.
  - You are about to drop the column `heightCm` on the `ProductShippingInfo` table. All the data in the column will be lost.
  - You are about to drop the column `weightKg` on the `ProductShippingInfo` table. All the data in the column will be lost.
  - You are about to drop the column `widthCm` on the `ProductShippingInfo` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `ProductVariant` table. All the data in the column will be lost.
  - You are about to drop the `ProductImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('ACTIVE', 'UNLISTED', 'DRAFT');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO');

-- CreateEnum
CREATE TYPE "PurchaseType" AS ENUM ('ONE_TIME', 'SUBSCRIPTION', 'ONE_TIME_AND_SUBSCRIPTION', 'PRE_ORDER');

-- CreateEnum
CREATE TYPE "SubscriptionInterval" AS ENUM ('WEEKLY', 'BI_WEEKLY', 'MONTHLY', 'BI_MONTHLY', 'QUARTERLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "PackageType" AS ENUM ('BOX', 'ENVELOPE', 'SOFT_PACKAGE', 'PALLET');

-- CreateEnum
CREATE TYPE "MeasurementUnit" AS ENUM ('KG', 'G', 'L', 'ML', 'M', 'CM', 'MM', 'SQM', 'SQCM', 'PER_ITEM');

-- DropForeignKey
ALTER TABLE "ProductImage" DROP CONSTRAINT "ProductImage_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "compareAtPrice" DECIMAL(10,2),
ADD COLUMN     "costPerItem" DECIMAL(10,2),
ADD COLUMN     "lowStockThreshold" INTEGER,
ADD COLUMN     "preOrderDepositPercent" DECIMAL(5,2),
ADD COLUMN     "preOrderReleaseDate" TIMESTAMP(3),
ADD COLUMN     "purchaseType" "PurchaseType" NOT NULL DEFAULT 'ONE_TIME',
ADD COLUMN     "status" "ProductStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "subscriptionDiscountPercent" DECIMAL(5,2),
ADD COLUMN     "subscriptionIntervals" "SubscriptionInterval"[],
ADD COLUMN     "unitPriceAmount" DECIMAL(10,2),
ADD COLUMN     "unitPriceBaseAmount" DECIMAL(10,2),
ADD COLUMN     "unitPriceBaseMeasurement" "MeasurementUnit",
ADD COLUMN     "unitPriceMeasurement" "MeasurementUnit";

-- AlterTable
ALTER TABLE "ProductShippingInfo" DROP COLUMN "depthCm",
DROP COLUMN "heightCm",
DROP COLUMN "weightKg",
DROP COLUMN "widthCm",
ADD COLUMN     "packageType" "PackageType" NOT NULL DEFAULT 'BOX',
ADD COLUMN     "packagingHeightCm" DECIMAL(10,2),
ADD COLUMN     "packagingLengthCm" DECIMAL(10,2),
ADD COLUMN     "packagingWeightKg" DECIMAL(10,3),
ADD COLUMN     "packagingWidthCm" DECIMAL(10,2),
ADD COLUMN     "productHeightCm" DECIMAL(10,2),
ADD COLUMN     "productLengthCm" DECIMAL(10,2),
ADD COLUMN     "productWeightKg" DECIMAL(10,3),
ADD COLUMN     "productWidthCm" DECIMAL(10,2);

-- AlterTable
ALTER TABLE "ProductTranslation" ADD COLUMN     "customSlug" TEXT,
ADD COLUMN     "metaDescription" TEXT,
ADD COLUMN     "metaTitle" TEXT;

-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "image",
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "price" DECIMAL(10,2);

-- DropTable
DROP TABLE "ProductImage";

-- CreateTable
CREATE TABLE "ProductMedia" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "mediaType" "MediaType" NOT NULL DEFAULT 'IMAGE',
    "altText" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariantOptionMeta" (
    "id" TEXT NOT NULL,
    "variantId" TEXT NOT NULL,
    "optionName" TEXT NOT NULL,
    "hexColor" TEXT,

    CONSTRAINT "VariantOptionMeta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VariantOptionMeta_variantId_optionName_key" ON "VariantOptionMeta"("variantId", "optionName");

-- AddForeignKey
ALTER TABLE "ProductMedia" ADD CONSTRAINT "ProductMedia_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantOptionMeta" ADD CONSTRAINT "VariantOptionMeta_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "ProductVariant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
