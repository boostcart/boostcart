import { CategoryTranslation, Brand as PBrand, Category as PCategory, Post as PPost, Product as PProduct, ProductVariant as PProductVariant, ProductImage, ProductReview, ProductTag, ProductTranslation, TechnicalInfo } from "@prisma/client";
import { PostTranslation, User } from "@prisma/client";

import { ClientUploadedFileData } from "uploadthing/types";

export type Roles = "USER" | "ADMIN" | "SUPER_ADMIN";

export type UploadedFile<T = unknown> = ClientUploadedFileData<T>;

export type Post = PPost & {
  translations: PostTranslation[];
  user: User;
};

export type Brand = PBrand & {
  products: PProduct[];
};

export type Category = PCategory & {
  parent: Category | null;
  subcategories: Category[];
  translations: CategoryTranslation[];
  products: PProduct[];
};

export type Product = PProduct & {
  translations: ProductTranslation[];
  brand: Brand;
  category: Category;
  technicalInfo: TechnicalInfo[];
  reviews: ProductReview[];
  tags: ProductTag[];
  images: ProductImage[];
  variatns: ProductVariant[];
};

export type ProductVariant = PProductVariant & {
  product: Product;
};

