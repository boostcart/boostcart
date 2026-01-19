import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import type { PasswordResetEmailData } from "../types";

export function PasswordResetEmail(props: PasswordResetEmailData) {
	const { email, resetUrl, storeName, expiresIn } = props;

	return (
		<Html>
			<Head />
			<Preview>Нулиране на парола за {storeName}</Preview>
			<Body style={main}>
				<Container style={container}>
					<Heading style={h1}>Нулиране на парола</Heading>

					<Text style={text}>
						Получихме заявка за нулиране на паролата за акаунта Ви с имейл{" "}
						<strong>{email}</strong> в {storeName}.
					</Text>

					<Text style={text}>
						Кликнете на бутона по-долу, за да зададете нова парола:
					</Text>

					<Section style={buttonContainer}>
						<Button href={resetUrl} style={button}>
							Нулиране на парола
						</Button>
					</Section>

					<Text style={disclaimer}>
						Този линк ще изтече след {expiresIn}. Ако не сте заявили нулиране на
						парола, моля игнорирайте този имейл. Вашата парола няма да бъде
						променена.
					</Text>

					<Text style={footer}>
						© {new Date().getFullYear()} {storeName}. Всички права запазени.
					</Text>
				</Container>
			</Body>
		</Html>
	);
}

// Styles
const main = {
	backgroundColor: "#f6f9fc",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "20px 0 48px",
	marginBottom: "64px",
	maxWidth: "600px",
};

const h1 = {
	color: "#333",
	fontSize: "24px",
	fontWeight: "bold",
	margin: "40px 0 20px",
	padding: "0 40px",
	textAlign: "center" as const,
};

const text = {
	color: "#333",
	fontSize: "16px",
	lineHeight: "26px",
	padding: "0 40px",
	marginTop: "16px",
};

const buttonContainer = {
	padding: "0 40px",
	marginTop: "32px",
	textAlign: "center" as const,
};

const button = {
	backgroundColor: "#000",
	borderRadius: "5px",
	color: "#fff",
	fontSize: "16px",
	fontWeight: "bold",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	width: "100%",
	padding: "12px",
};

const disclaimer = {
	color: "#666",
	fontSize: "14px",
	lineHeight: "20px",
	padding: "0 40px",
	marginTop: "32px",
	textAlign: "center" as const,
};

const footer = {
	color: "#8898aa",
	fontSize: "12px",
	lineHeight: "16px",
	padding: "0 40px",
	marginTop: "32px",
	textAlign: "center" as const,
};
