import { render } from "@react-email/render";
import type { EmailClient } from "./client";
import {
	OrderConfirmationEmail,
	PasswordResetEmail,
	ShippingUpdateEmail,
	VerificationEmail,
	WelcomeEmail,
} from "./templates";
import type {
	OrderEmailData,
	PasswordResetEmailData,
	ShippingUpdateData,
	VerificationEmailData,
	WelcomeEmailData,
} from "./types";

/**
 * Email service for sending transactional emails
 */
export class EmailService {
	constructor(private client: EmailClient) {}

	/**
	 * Send order confirmation email
	 */
	async sendOrderConfirmation(data: OrderEmailData) {
		const html = await render(OrderConfirmationEmail(data));
		const text = `Благодарим за поръчката! Вашата поръчка #${data.orderNumber} е потвърдена.`;

		return this.client.send({
			to: data.customerEmail,
			subject: `Потвърждение на поръчка #${data.orderNumber}`,
			html,
			text,
			from: `${data.storeName} <${data.storeEmail}>`,
		});
	}

	/**
	 * Send shipping update email
	 */
	async sendShippingUpdate(
		data: ShippingUpdateData,
		customerEmail: string,
		storeEmail: string,
	) {
		const html = await render(ShippingUpdateEmail(data));
		const text = `Вашата поръчка #${data.orderNumber} е изпратена!${data.trackingNumber ? ` Номер за проследяване: ${data.trackingNumber}` : ""}`;

		return this.client.send({
			to: customerEmail,
			subject: `Поръчката Ви #${data.orderNumber} е изпратена`,
			html,
			text,
			from: `${data.storeName} <${storeEmail}>`,
		});
	}

	/**
	 * Send email verification
	 */
	async sendVerificationEmail(data: VerificationEmailData) {
		const html = await render(VerificationEmail(data));
		const text = `Моля, потвърдете имейл адреса си: ${data.verificationUrl}`;

		return this.client.send({
			to: data.email,
			subject: `Потвърдете имейл адреса си за ${data.storeName}`,
			html,
			text,
		});
	}

	/**
	 * Send password reset email
	 */
	async sendPasswordReset(data: PasswordResetEmailData) {
		const html = await render(PasswordResetEmail(data));
		const text = `Нулиране на парола: ${data.resetUrl}`;

		return this.client.send({
			to: data.email,
			subject: `Нулиране на парола за ${data.storeName}`,
			html,
			text,
		});
	}

	/**
	 * Send welcome email
	 */
	async sendWelcomeEmail(data: WelcomeEmailData, storeEmail: string) {
		const html = await render(WelcomeEmail(data));
		const text = `Добре дошли в ${data.storeName}, ${data.customerName}!`;

		return this.client.send({
			to: data.email,
			subject: `Добре дошли в ${data.storeName}!`,
			html,
			text,
			from: `${data.storeName} <${storeEmail}>`,
		});
	}
}

/**
 * Create an email service instance
 */
export function createEmailService(client: EmailClient) {
	return new EmailService(client);
}
