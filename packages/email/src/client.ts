import { Resend } from "resend";
import type { EmailOptions } from "./types";

/**
 * Email client for sending emails via Resend.
 * Requires RESEND_API_KEY environment variable.
 */
export class EmailClient {
	private resend: Resend;
	private defaultFrom: string;

	constructor(
		apiKey: string,
		defaultFrom: string = "BoostCart <noreply@boostcart.bg>",
	) {
		this.resend = new Resend(apiKey);
		this.defaultFrom = defaultFrom;
	}

	/**
	 * Send an email
	 */
	async send(options: EmailOptions) {
		try {
			const { data, error } = await this.resend.emails.send({
				from: options.from || this.defaultFrom,
				to: Array.isArray(options.to) ? options.to : [options.to],
				subject: options.subject,
				html: options.html,
				text: options.text,
				replyTo: options.replyTo,
				attachments: options.attachments?.map((att) => ({
					filename: att.filename,
					content: att.content,
					...(att.contentType && { content_type: att.contentType }),
				})),
			});

			if (error) {
				console.error("Failed to send email:", error);
				throw new Error(`Email send failed: ${error.message}`);
			}

			return { success: true, id: data?.id };
		} catch (error) {
			console.error("Email client error:", error);
			throw error;
		}
	}

	/**
	 * Get the Resend instance for advanced usage
	 */
	getResend() {
		return this.resend;
	}
}

/**
 * Create an email client instance
 */
export function createEmailClient(apiKey: string, defaultFrom?: string) {
	return new EmailClient(apiKey, defaultFrom);
}
