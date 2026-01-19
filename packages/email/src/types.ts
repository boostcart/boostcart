/**
 * Email types and interfaces
 */

export interface EmailOptions {
	to: string | string[];
	subject: string;
	html: string;
	text?: string;
	from?: string;
	replyTo?: string;
	attachments?: Array<{
		filename: string;
		content: Buffer | string;
		contentType?: string;
	}>;
}

export interface OrderEmailData {
	orderNumber: string;
	customerName: string;
	customerEmail: string;
	items: Array<{
		name: string;
		quantity: number;
		price: number;
		image?: string;
	}>;
	subtotal: number;
	shipping: number;
	tax: number;
	total: number;
	currency: string;
	shippingAddress: {
		name: string;
		line1: string;
		line2?: string;
		city: string;
		postalCode: string;
		country: string;
	};
	orderDate: Date;
	storeName: string;
	storeUrl: string;
	storeEmail: string;
	storeLogo?: string;
}

export interface ShippingUpdateData {
	orderNumber: string;
	customerName: string;
	trackingNumber?: string;
	carrier?: string;
	estimatedDelivery?: Date;
	storeName: string;
	storeUrl: string;
}

export interface VerificationEmailData {
	email: string;
	verificationUrl: string;
	storeName: string;
	expiresIn: string;
}

export interface PasswordResetEmailData {
	email: string;
	resetUrl: string;
	storeName: string;
	expiresIn: string;
}

export interface WelcomeEmailData {
	customerName: string;
	email: string;
	storeName: string;
	storeUrl: string;
	storeLogo?: string;
}
