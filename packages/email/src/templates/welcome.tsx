import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import type { WelcomeEmailData } from "../types";

export function WelcomeEmail(props: WelcomeEmailData) {
	const { customerName, email, storeName, storeUrl, storeLogo } = props;

	return (
		<Html>
			<Head />
			<Preview>Добре дошли в {storeName}!</Preview>
			<Body style={main}>
				<Container style={container}>
					{storeLogo && (
						<Img src={storeLogo} alt={storeName} width="120" style={logo} />
					)}

					<Heading style={h1}>Добре дошли! 🎉</Heading>

					<Text style={text}>Здравейте, {customerName}!</Text>

					<Text style={text}>
						Радваме се, че се присъединихте към {storeName}! Вашият акаунт е
						създаден успешно с имейл адрес <strong>{email}</strong>.
					</Text>

					<Section style={benefitsSection}>
						<Heading as="h2" style={h2}>
							Какво можете да правите с акаунта си:
						</Heading>
						<Text style={benefitItem}>✓ Проследявайте Вашите поръчки</Text>
						<Text style={benefitItem}>
							✓ Запазвайте адреси за по-бърза поръчка
						</Text>
						<Text style={benefitItem}>✓ Създавайте списъци с желания</Text>
						<Text style={benefitItem}>✓ Получавайте ексклузивни оферти</Text>
					</Section>

					<Text style={text}>
						Започнете да разглеждате нашите продукти на{" "}
						<a href={storeUrl} style={link}>
							{storeUrl}
						</a>
					</Text>

					<Text style={footer}>
						Благодарим, че избрахте {storeName}!
						<br />© {new Date().getFullYear()} {storeName}. Всички права
						запазени.
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

const logo = {
	margin: "0 auto",
	marginBottom: "32px",
};

const h1 = {
	color: "#333",
	fontSize: "24px",
	fontWeight: "bold",
	margin: "40px 0 20px",
	padding: "0 40px",
	textAlign: "center" as const,
};

const h2 = {
	color: "#333",
	fontSize: "18px",
	fontWeight: "bold",
	margin: "24px 0 16px",
};

const text = {
	color: "#333",
	fontSize: "16px",
	lineHeight: "26px",
	padding: "0 40px",
	marginTop: "16px",
};

const benefitsSection = {
	marginTop: "32px",
	backgroundColor: "#f8f9fa",
	borderRadius: "8px",
	padding: "24px 40px",
	margin: "32px 40px",
};

const benefitItem = {
	fontSize: "14px",
	lineHeight: "24px",
	color: "#666",
	margin: "8px 0",
};

const link = {
	color: "#000",
	textDecoration: "underline",
};

const footer = {
	color: "#8898aa",
	fontSize: "12px",
	lineHeight: "16px",
	padding: "0 40px",
	marginTop: "32px",
	textAlign: "center" as const,
};
