// Re-export Prisma client and types
export * from "./client";

// Re-export generated types and enums
export * from "./generated/prisma/enums";
export * from "./generated/prisma/models";

// Re-export model types with simpler names for convenience
export type {
	TenantModel as Tenant,
	TenantStaffModel as TenantStaff,
	TenantDomainModel as TenantDomain,
	CustomerModel as Customer,
	CustomerAddressModel as CustomerAddress,
	CustomerSessionModel as CustomerSession,
	UserModel as User,
	AccountModel as Account,
	SessionModel as Session,
	ProductModel as Product,
	ProductVariantModel as ProductVariant,
	ProductMediaModel as ProductMedia,
	CategoryModel as Category,
	BrandModel as Brand,
	CollectionModel as Collection,
	OrderModel as Order,
	OrderItemModel as OrderItem,
	CartModel as Cart,
	CartItemModel as CartItem,
	ReviewModel as Review,
	PageModel as Page,
	DiscountModel as Discount,
	PromoCodeModel as PromoCode,
	GiftCardModel as GiftCard,
	ShippingMethodModel as ShippingMethod,
	PaymentMethodModel as PaymentMethod,
	FilterModel as Filter,
	FilterAttributeModel as FilterAttribute,
	WishlistItemModel as WishlistItem,
	UserAddressModel as UserAddress,
} from "./generated/prisma/models";
