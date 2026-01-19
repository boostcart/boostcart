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
import type { ShippingUpdateData } from "../types";

export function ShippingUpdateEmail(props: ShippingUpdateData) {
	const {
		orderNumber,
		customerName,
		trackingNumber,
		carrier,
		estimatedDelivery,
		storeName,
		storeUrl,
	} = props;

	const estimatedDeliveryText = estimatedDelivery
		? estimatedDelivery.toLocaleDateString("bg-BG", {
				year: "numeric",
				month: "long",
				day: "numeric",
			})
		: "Ще бъдете уведомени скоро";

	return (
		<Html>
			<Head />
			<Preview>Вашата поръчка #{orderNumber} е изпратена</Preview>
			<Body style={main}>
				<Container style={container}>
					<Heading style={h1}>Поръчката Ви е изпратена! 📦</Heading>

					<Text style={text}>Здравейте, {customerName}!</Text>

					<Text style={text}>
						Радваме се да Ви съобщим, че поръчката Ви{" "}
						<strong>#{orderNumber}</strong> е изпратена и е на път към Вас.
					</Text>

					{trackingNumber && (
						<Section style={trackingSection}>
							<Heading as="h2" style={h2}>
								Проследяване на пратка
							</Heading>
							{carrier && (
								<Text style={infoText}>
									<strong>Куриер:</strong> {carrier}
								</Text>
							)}
							<Text style={infoText}>
								<strong>Номер за проследяване:</strong> {trackingNumber}
							</Text>
						</Section>
					)}

					<Section style={deliverySection}>
						<Text style={infoText}>
							<strong>Очаквана доставка:</strong> {estimatedDeliveryText}
						</Text>
					</Section>

					<Section style={buttonContainer}>
						<Button
							href={`${storeUrl}/account/orders/${orderNumber}`}
							style={button}
						>
							Преглед на поръчката
						</Button>
					</Section>

					<Text style={footer}>
						Благодарим, че пазарувате при нас!
						<br />
						{storeName}
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

const h2 = {
	color: "#333",
	fontSize: "18px",
	fontWeight: "bold",
	margin: "24px 0 16px",
	padding: "0 40px",
};

const text = {
	color: "#333",
	fontSize: "16px",
	lineHeight: "26px",
	padding: "0 40px",
};

const trackingSection = {
	marginTop: "32px",
	padding: "20px 40px",
	backgroundColor: "#f8f9fa",
	borderRadius: "8px",
	margin: "32px 40px",
};

const deliverySection = {
	padding: "0 40px",
	marginTop: "24px",
};

const infoText = {
	fontSize: "14px",
	lineHeight: "24px",
	color: "#666",
	margin: "8px 0",
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

const footer = {
	color: "#8898aa",
	fontSize: "12px",
	lineHeight: "16px",
	padding: "0 40px",
	marginTop: "32px",
	textAlign: "center" as const,
};
