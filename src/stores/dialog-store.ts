import { create } from "zustand";

interface DialogState {
	// Product dialogs
	isAddProductOpen: boolean;
	isEditProductOpen: boolean;
	isViewProductOpen: boolean;
	isDeleteProductOpen: boolean;

	// Discount dialogs
	isAddDiscountOpen: boolean;
	isEditDiscountOpen: boolean;
	isViewDiscountOpen: boolean;
	isDeleteDiscountOpen: boolean;

	// Customer dialogs
	isAddCustomerOpen: boolean;
	isEditCustomerOpen: boolean;
	isViewCustomerOpen: boolean;
	isDeleteCustomerOpen: boolean;

	// Order dialogs
	isAddOrderOpen: boolean;
	isEditOrderOpen: boolean;
	isViewOrderOpen: boolean;
	isDeleteOrderOpen: boolean;

	// Category dialogs
	isAddCategoryOpen: boolean;
	isEditCategoryOpen: boolean;
	isViewCategoryOpen: boolean;
	isDeleteCategoryOpen: boolean;

	// Brand dialogs
	isAddBrandOpen: boolean;
	isEditBrandOpen: boolean;
	isViewBrandOpen: boolean;
	isDeleteBrandOpen: boolean;

	// Collection dialogs
	isAddCollectionOpen: boolean;
	isEditCollectionOpen: boolean;
	isViewCollectionOpen: boolean;
	isDeleteCollectionOpen: boolean;

	// Review dialogs
	isAddReviewOpen: boolean;
	isEditReviewOpen: boolean;
	isViewReviewOpen: boolean;
	isDeleteReviewOpen: boolean;

	// Gift Card dialogs
	isAddGiftCardOpen: boolean;
	isEditGiftCardOpen: boolean;
	isViewGiftCardOpen: boolean;
	isDeleteGiftCardOpen: boolean;

	// Promo Code dialogs
	isAddPromoCodeOpen: boolean;
	isEditPromoCodeOpen: boolean;
	isViewPromoCodeOpen: boolean;
	isDeletePromoCodeOpen: boolean;

	// Page dialogs
	isAddPageOpen: boolean;
	isEditPageOpen: boolean;
	isViewPageOpen: boolean;
	isDeletePageOpen: boolean;

	// Shipping dialogs
	isAddShippingZoneOpen: boolean;
	isEditShippingZoneOpen: boolean;
	isViewShippingZoneOpen: boolean;
	isDeleteShippingZoneOpen: boolean;

	// Payment dialogs
	isAddPaymentMethodOpen: boolean;
	isEditPaymentMethodOpen: boolean;
	isViewPaymentMethodOpen: boolean;
	isDeletePaymentMethodOpen: boolean;

	// Locale dialogs
	isAddLocaleOpen: boolean;
	isEditLocaleOpen: boolean;
	isViewLocaleOpen: boolean;
	isDeleteLocaleOpen: boolean;

	// Actions
	openDialog: (
		dialogName: keyof Omit<
			DialogState,
			"openDialog" | "closeDialog" | "closeAllDialogs"
		>,
	) => void;
	closeDialog: (
		dialogName: keyof Omit<
			DialogState,
			"openDialog" | "closeDialog" | "closeAllDialogs"
		>,
	) => void;
	closeAllDialogs: () => void;
}

export const useDialogStore = create<DialogState>((set) => ({
	// Product dialogs
	isAddProductOpen: false,
	isEditProductOpen: false,
	isViewProductOpen: false,
	isDeleteProductOpen: false,

	// Discount dialogs
	isAddDiscountOpen: false,
	isEditDiscountOpen: false,
	isViewDiscountOpen: false,
	isDeleteDiscountOpen: false,

	// Customer dialogs
	isAddCustomerOpen: false,
	isEditCustomerOpen: false,
	isViewCustomerOpen: false,
	isDeleteCustomerOpen: false,

	// Order dialogs
	isAddOrderOpen: false,
	isEditOrderOpen: false,
	isViewOrderOpen: false,
	isDeleteOrderOpen: false,

	// Category dialogs
	isAddCategoryOpen: false,
	isEditCategoryOpen: false,
	isViewCategoryOpen: false,
	isDeleteCategoryOpen: false,

	// Brand dialogs
	isAddBrandOpen: false,
	isEditBrandOpen: false,
	isViewBrandOpen: false,
	isDeleteBrandOpen: false,

	// Collection dialogs
	isAddCollectionOpen: false,
	isEditCollectionOpen: false,
	isViewCollectionOpen: false,
	isDeleteCollectionOpen: false,

	// Review dialogs
	isAddReviewOpen: false,
	isEditReviewOpen: false,
	isViewReviewOpen: false,
	isDeleteReviewOpen: false,

	// Gift Card dialogs
	isAddGiftCardOpen: false,
	isEditGiftCardOpen: false,
	isViewGiftCardOpen: false,
	isDeleteGiftCardOpen: false,

	// Promo Code dialogs
	isAddPromoCodeOpen: false,
	isEditPromoCodeOpen: false,
	isViewPromoCodeOpen: false,
	isDeletePromoCodeOpen: false,

	// Page dialogs
	isAddPageOpen: false,
	isEditPageOpen: false,
	isViewPageOpen: false,
	isDeletePageOpen: false,

	// Shipping dialogs
	isAddShippingZoneOpen: false,
	isEditShippingZoneOpen: false,
	isViewShippingZoneOpen: false,
	isDeleteShippingZoneOpen: false,

	// Payment dialogs
	isAddPaymentMethodOpen: false,
	isEditPaymentMethodOpen: false,
	isViewPaymentMethodOpen: false,
	isDeletePaymentMethodOpen: false,

	// Locale dialogs
	isAddLocaleOpen: false,
	isEditLocaleOpen: false,
	isViewLocaleOpen: false,
	isDeleteLocaleOpen: false,

	// Actions
	openDialog: (dialogName) => set({ [dialogName]: true }),
	closeDialog: (dialogName) => set({ [dialogName]: false }),
	closeAllDialogs: () =>
		set({
			// Product dialogs
			isAddProductOpen: false,
			isEditProductOpen: false,
			isViewProductOpen: false,
			isDeleteProductOpen: false,

			// Discount dialogs
			isAddDiscountOpen: false,
			isEditDiscountOpen: false,
			isViewDiscountOpen: false,
			isDeleteDiscountOpen: false,

			// Customer dialogs
			isAddCustomerOpen: false,
			isEditCustomerOpen: false,
			isViewCustomerOpen: false,
			isDeleteCustomerOpen: false,

			// Order dialogs
			isAddOrderOpen: false,
			isEditOrderOpen: false,
			isViewOrderOpen: false,
			isDeleteOrderOpen: false,

			// Category dialogs
			isAddCategoryOpen: false,
			isEditCategoryOpen: false,
			isViewCategoryOpen: false,
			isDeleteCategoryOpen: false,

			// Brand dialogs
			isAddBrandOpen: false,
			isEditBrandOpen: false,
			isViewBrandOpen: false,
			isDeleteBrandOpen: false,

			// Collection dialogs
			isAddCollectionOpen: false,
			isEditCollectionOpen: false,
			isViewCollectionOpen: false,
			isDeleteCollectionOpen: false,

			// Review dialogs
			isAddReviewOpen: false,
			isEditReviewOpen: false,
			isViewReviewOpen: false,
			isDeleteReviewOpen: false,

			// Gift Card dialogs
			isAddGiftCardOpen: false,
			isEditGiftCardOpen: false,
			isViewGiftCardOpen: false,
			isDeleteGiftCardOpen: false,

			// Promo Code dialogs
			isAddPromoCodeOpen: false,
			isEditPromoCodeOpen: false,
			isViewPromoCodeOpen: false,
			isDeletePromoCodeOpen: false,

			// Page dialogs
			isAddPageOpen: false,
			isEditPageOpen: false,
			isViewPageOpen: false,
			isDeletePageOpen: false,

			// Shipping dialogs
			isAddShippingZoneOpen: false,
			isEditShippingZoneOpen: false,
			isViewShippingZoneOpen: false,
			isDeleteShippingZoneOpen: false,

			// Payment dialogs
			isAddPaymentMethodOpen: false,
			isEditPaymentMethodOpen: false,
			isViewPaymentMethodOpen: false,
			isDeletePaymentMethodOpen: false,

			// Locale dialogs
			isAddLocaleOpen: false,
			isEditLocaleOpen: false,
			isViewLocaleOpen: false,
			isDeleteLocaleOpen: false,
		}),
}));
