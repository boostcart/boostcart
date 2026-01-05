/**
 * Email templates for authentication emails.
 * Centralized templates for consistent branding across all auth emails.
 */

const currentYear = new Date().getFullYear();

const baseStyles = {
	body: `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;`,
	header: `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;`,
	headerTitle: `color: white; margin: 0; font-size: 28px;`,
	content: `background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;`,
	paragraph: `font-size: 16px; margin-bottom: 20px;`,
	buttonWrapper: `text-align: center; margin: 30px 0;`,
	button: `background: #667eea; color: white; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 16px;`,
	smallText: `font-size: 14px; color: #666; margin-top: 30px;`,
	footer: `text-align: center; margin-top: 20px; color: #999; font-size: 12px;`,
};

function createEmailTemplate(title: string, content: string): string {
	return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body style="${baseStyles.body}">
		<div style="${baseStyles.header}">
			<h1 style="${baseStyles.headerTitle}">${title}</h1>
		</div>
		<div style="${baseStyles.content}">
			${content}
		</div>
		<div style="${baseStyles.footer}">
			<p>© ${currentYear} BoostCart. All rights reserved.</p>
		</div>
	</body>
</html>`;
}

export const emailTemplates = {
	resetPassword: ({ user, url }: { user: { name?: string | null; email?: string }; url: string }) => ({
		subject: "Reset your password",
		html: createEmailTemplate(
			"Reset Your Password",
			`
			<p style="${baseStyles.paragraph}">Hi ${user.name || "there"}!</p>
			<p style="${baseStyles.paragraph}">We received a request to reset your password. Click the button below to create a new password:</p>
			<div style="${baseStyles.buttonWrapper}">
				<a href="${url}" style="${baseStyles.button}">Reset Password</a>
			</div>
			<p style="${baseStyles.smallText}">If you didn't request this password reset, you can safely ignore this email.</p>
			<p style="font-size: 14px; color: #666; margin-top: 10px;">This link will expire in 1 hour.</p>
			`
		),
	}),

	magicLink: ({ email, url }: { email: string; url: string }) => ({
		subject: "Sign in to BoostCart",
		html: createEmailTemplate(
			"Welcome back!",
			`
			<p style="${baseStyles.paragraph}">Click the button below to sign in to your BoostCart account:</p>
			<div style="${baseStyles.buttonWrapper}">
				<a href="${url}" style="${baseStyles.button}">Sign In</a>
			</div>
			<p style="${baseStyles.smallText}">If you didn't request this email, you can safely ignore it.</p>
			<p style="font-size: 14px; color: #666; margin-top: 10px;">This link will expire in 5 minutes.</p>
			`
		),
	}),

	verifyEmail: ({ user, url }: { user: { name?: string | null; email?: string }; url: string }) => ({
		subject: "Verify your email address",
		html: createEmailTemplate(
			"Verify Your Email",
			`
			<p style="${baseStyles.paragraph}">Hi ${user.name || "there"}!</p>
			<p style="${baseStyles.paragraph}">Thanks for signing up for BoostCart. Please verify your email address by clicking the button below:</p>
			<div style="${baseStyles.buttonWrapper}">
				<a href="${url}" style="${baseStyles.button}">Verify Email</a>
			</div>
			<p style="${baseStyles.smallText}">If you didn't create an account, you can safely ignore this email.</p>
			`
		),
	}),
};
