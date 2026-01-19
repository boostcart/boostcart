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
import type { VerificationEmailData } from "../types";

export function VerificationEmail(props: VerificationEmailData) {
	const { email, verificationUrl, storeName, expiresIn } = props;

	return (
		<Html>
			<Head />
			<Preview>Потвърдете Вашия имейл адрес за {storeName}</Preview>
			<Body style={main}>
				<Container style={container}>
					<Heading style={h1}>Потвърдете имейл адреса си</Heading>

					<Text style={text}>
						Благодарим Ви, че се регистрирахте в {storeName}!
					</Text>

					<Text style={text}>
						Моля, кликнете на бутона по-долу, за да потвърдите имейл адреса си:{" "}
						<strong>{email}</strong>
					</Text>

					<Section style={buttonContainer}>
						<Button href={verificationUrl} style={button}>
							Потвърди имейл
						</Button>
					</Section>

					<Text style={disclaimer}>
						Този линк ще изтече след {expiresIn}. Ако не сте създали акаунт в{" "}
						{storeName}, можете спокойно да игнорирате този имейл.
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
