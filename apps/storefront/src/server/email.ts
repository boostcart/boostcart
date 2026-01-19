import { createEmailClient, createEmailService } from "@boostcart/email";
import { env } from "@/env";

const apiKey = env.RESEND_API_KEY;

if (!apiKey) {
	console.warn("RESEND_API_KEY not set - emails will not be sent");
}

const emailClient = createEmailClient(apiKey || "dummy-key");
const emailService = createEmailService(emailClient);

export { emailClient, emailService };
