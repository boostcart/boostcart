import {
	CategoryTranslation,
	Brand as PBrand,
	Category as PCategory,
	Message as PMessage,
	Post as PPost,
	Product as PProduct,
	ProductReview as PProductReview,
	ProductVariant as PProductVariant,
	User as PUser,
	PasswordChange,
	PostTranslation,
	ProductImage,
	ProductTag as PProductTag,
	ProductTagTranslation,
	ProductTranslation,
	ShippingAddress,
	TechnicalInfo as PTechnicalInfo,
	TechnicalInfoTranslation,
} from "@prisma/client";

import { ClientUploadedFileData } from "uploadthing/types";

export type Roles = "USER" | "ADMIN" | "SUPER_ADMIN";

export type UploadedFile<T = unknown> = ClientUploadedFileData<T>;

export type User = PUser & {
	shippingAddresses: ShippingAddress[];
	passwordChanges: PasswordChange[];
	messages: Message[];
	posts: Post[];
	productReviews: PProductReview[];
};

export type Message = PMessage & {
	user: User;
};

export type Post = PPost & {
	translations: PostTranslation[];
	user: Pick<PUser, "name" | "email" | "image">;
};

export type Brand = PBrand & {
	products: Product[];
};

export type Category = PCategory & {
	parent: Category | null;
	subcategories: Category[];
	translations: CategoryTranslation[];
	products: Product[];
};

export type ProductReview = PProductReview & {
	product: Product;
	user: User;
};

export type Product = PProduct & {
	translations: ProductTranslation[];
	brand: Brand;
	category: Category;
	technicalInfo: TechnicalInfo[];
	reviews: PProductReview[];
	tags: ProductTag[];
	images: ProductImage[];
	variants: ProductVariant[];
};

export type ProductTag = PProductTag & {
	translations: ProductTagTranslation[];
	products: Product[];
};

export type ProductVariant = PProductVariant & {
	product: Product;
};

export type TechnicalInfo = PTechnicalInfo & {
	translations: TechnicalInfoTranslation[];
	product: Product;
};

