import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import type { OrderEmailData } from "../types";

export function OrderConfirmationEmail(props: OrderEmailData) {
	const {
		orderNumber,
		customerName,
		items,
		subtotal,
		shipping,
		tax,
		total,
		currency,
		shippingAddress,
		orderDate,
		storeName,
		storeUrl,
		storeLogo,
	} = props;

	const formattedDate = orderDate.toLocaleDateString("bg-BG", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<Html>
			<Head />
			<Preview>Вашата поръчка #{orderNumber} е потвърдена</Preview>
			<Body style={main}>
				<Container style={container}>
					{storeLogo && (
						<Img src={storeLogo} alt={storeName} width="120" style={logo} />
					)}

					<Heading style={h1}>Благодарим за поръчката!</Heading>

					<Text style={text}>Здравейте, {customerName}!</Text>

					<Text style={text}>
						Вашата поръчка <strong>#{orderNumber}</strong> от {formattedDate}{" "}
						беше успешно потвърдена и скоро ще бъде обработена.
					</Text>

					<Section style={orderInfo}>
						<Heading as="h2" style={h2}>
							Детайли на поръчката
						</Heading>

						{items.map((item) => (
							<Section key={item.id || item.name} style={itemRow}>
								<div style={itemDetails}>
									{item.image && (
										<Img
											src={item.image}
											alt={item.name}
											width="60"
											style={itemImage}
										/>
									)}
									<div>
										<Text style={itemName}>{item.name}</Text>
										<Text style={itemQuantity}>
											Количество: {item.quantity}
										</Text>
									</div>
								</div>
								<Text style={itemPrice}>
									{(item.price * item.quantity).toFixed(2)} {currency}
								</Text>
							</Section>
						))}

						<Hr style={hr} />

						<Section style={totals}>
							<div style={totalRow}>
								<Text style={totalLabel}>Междинна сума:</Text>
								<Text style={totalValue}>
									{subtotal.toFixed(2)} {currency}
								</Text>
							</div>
							<div style={totalRow}>
								<Text style={totalLabel}>Доставка:</Text>
								<Text style={totalValue}>
									{shipping.toFixed(2)} {currency}
								</Text>
							</div>
							<div style={totalRow}>
								<Text style={totalLabel}>ДДС:</Text>
								<Text style={totalValue}>
									{tax.toFixed(2)} {currency}
								</Text>
							</div>
							<Hr style={hr} />
							<div style={totalRow}>
								<Text style={totalLabelBold}>Общо:</Text>
								<Text style={totalValueBold}>
									{total.toFixed(2)} {currency}
								</Text>
							</div>
						</Section>
					</Section>

					<Section style={addressSection}>
						<Heading as="h2" style={h2}>
							Адрес за доставка
						</Heading>
						<Text style={addressText}>
							{shippingAddress.name}
							<br />
							{shippingAddress.line1}
							<br />
							{shippingAddress.line2 && (
								<>
									{shippingAddress.line2}
									<br />
								</>
							)}
							{shippingAddress.city}, {shippingAddress.postalCode}
							<br />
							{shippingAddress.country}
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

					<Hr style={hr} />

					<Text style={footer}>
						Ако имате въпроси относно поръчката си, моля свържете се с нас на{" "}
						{props.storeEmail}
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
};

const orderInfo = {
	padding: "0 40px",
	marginTop: "32px",
};

const itemRow = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: "16px",
};

const itemDetails = {
	display: "flex",
	alignItems: "center",
	gap: "12px",
};

const itemImage = {
	borderRadius: "4px",
};

const itemName = {
	fontSize: "14px",
	fontWeight: "500",
	margin: "0",
	color: "#333",
};

const itemQuantity = {
	fontSize: "13px",
	color: "#666",
	margin: "4px 0 0 0",
};

const itemPrice = {
	fontSize: "14px",
	fontWeight: "500",
	color: "#333",
	margin: "0",
};

const hr = {
	borderColor: "#e6ebf1",
	margin: "20px 0",
};

const totals = {
	marginTop: "20px",
};

const totalRow = {
	display: "flex",
	justifyContent: "space-between",
	marginBottom: "8px",
};

const totalLabel = {
	fontSize: "14px",
	color: "#666",
	margin: "0",
};

const totalValue = {
	fontSize: "14px",
	color: "#333",
	margin: "0",
};

const totalLabelBold = {
	fontSize: "16px",
	fontWeight: "bold",
	color: "#333",
	margin: "0",
};

const totalValueBold = {
	fontSize: "16px",
	fontWeight: "bold",
	color: "#333",
	margin: "0",
};

const addressSection = {
	padding: "0 40px",
	marginTop: "32px",
};

const addressText = {
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
	marginTop: "16px",
	textAlign: "center" as const,
};
