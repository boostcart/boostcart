/**
 * Session type with user data
 */
export interface Session {
	id: string;
	userId: string;
	expiresAt: Date;
	ipAddress?: string;
	userAgent?: string;
	user: User;
}

/**
 * User type with platform-specific fields
 */
export interface User {
	id: string;
	email: string;
	name: string | null;
	firstName: string | null;
	lastName: string | null;
	image: string | null;
	emailVerified: boolean;
	emailVerifiedAt: Date | null;
	role: "USER" | "ADMIN";
	createdAt: Date;
	updatedAt: Date;
}

/**
 * Configuration for creating the auth instance
 */
export interface AuthConfig {
	/**
	 * Prisma database client (any Prisma client instance)
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	db: any;

	/**
	 * Base URL for the application (used for callbacks)
	 */
	baseURL: string;

	/**
	 * Trusted origins for CORS
	 */
	trustedOrigins?: string[];

	/**
	 * Email configuration
	 */
	email?: {
		/**
		 * Resend API key for sending emails
		 */
		resendApiKey?: string;

		/**
		 * From address for emails
		 */
		from?: string;
	};

	/**
	 * Social provider configuration
	 */
	socialProviders?: {
		google?: {
			clientId: string;
			clientSecret: string;
		};
	};

	/**
	 * Session configuration
	 */
	session?: {
		/**
		 * Session expiration time in seconds (default: 7 days)
		 */
		expiresIn?: number;

		/**
		 * How often to update the session in seconds (default: 1 day)
		 */
		updateAge?: number;
	};
}

/**
 * Email templates configuration
 */
export interface EmailTemplates {
	resetPassword: (params: { user: { name?: string; email: string }; url: string }) => {
		subject: string;
		html: string;
	};
	magicLink: (params: { email: string; url: string }) => {
		subject: string;
		html: string;
	};
	verifyEmail: (params: { user: { name?: string; email: string }; url: string }) => {
		subject: string;
		html: string;
	};
}
