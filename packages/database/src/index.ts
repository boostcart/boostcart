// Re-export Prisma client and types
export * from "./client";

// Re-export generated types and enums
export * from "./generated/prisma/enums";
// Re-export model types with simpler names for convenience
export type {
	AccountModel as Account,
	BrandModel as Brand,
	CartItemModel as CartItem,
	CartModel as Cart,
	CategoryModel as Category,
	CollectionModel as Collection,
	CustomerAddressModel as CustomerAddress,
	CustomerModel as Customer,
	CustomerSessionModel as CustomerSession,
	DiscountModel as Discount,
	FilterAttributeModel as FilterAttribute,
	FilterModel as Filter,
	GiftCardModel as GiftCard,
	OrderItemModel as OrderItem,
	OrderModel as Order,
	PageModel as Page,
	PaymentMethodModel as PaymentMethod,
	ProductMediaModel as ProductMedia,
	ProductModel as Product,
	ProductVariantModel as ProductVariant,
	PromoCodeModel as PromoCode,
	ReviewModel as Review,
	SessionModel as Session,
	ShippingMethodModel as ShippingMethod,
	TenantDomainModel as TenantDomain,
	TenantModel as Tenant,
	TenantStaffModel as TenantStaff,
	UserAddressModel as UserAddress,
	UserModel as User,
	WishlistItemModel as WishlistItem,
} from "./generated/prisma/models";
export * from "./generated/prisma/models";
