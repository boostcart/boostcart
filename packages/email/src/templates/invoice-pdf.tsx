import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { OrderEmailData } from "../types";

// Styles for PDF invoice
const styles = StyleSheet.create({
	page: {
		padding: 40,
		fontSize: 10,
		fontFamily: "Helvetica",
	},
	header: {
		marginBottom: 30,
	},
	logo: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 5,
	},
	storeName: {
		fontSize: 14,
		color: "#666",
	},
	invoiceTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20,
		marginTop: 20,
	},
	section: {
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 12,
		fontWeight: "bold",
		marginBottom: 10,
		textTransform: "uppercase",
		color: "#333",
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 5,
	},
	label: {
		color: "#666",
	},
	value: {
		fontWeight: "bold",
	},
	table: {
		marginTop: 10,
	},
	tableHeader: {
		flexDirection: "row",
		borderBottomWidth: 2,
		borderBottomColor: "#000",
		paddingBottom: 5,
		marginBottom: 5,
		fontWeight: "bold",
	},
	tableRow: {
		flexDirection: "row",
		paddingVertical: 5,
		borderBottomWidth: 1,
		borderBottomColor: "#eee",
	},
	col1: {
		width: "50%",
	},
	col2: {
		width: "15%",
		textAlign: "right",
	},
	col3: {
		width: "15%",
		textAlign: "right",
	},
	col4: {
		width: "20%",
		textAlign: "right",
	},
	totalsSection: {
		marginTop: 20,
		paddingTop: 10,
		borderTopWidth: 2,
		borderTopColor: "#000",
	},
	totalRow: {
		flexDirection: "row",
		justifyContent: "flex-end",
		marginBottom: 5,
	},
	totalLabel: {
		width: 100,
		textAlign: "right",
		marginRight: 20,
	},
	totalValue: {
		width: 80,
		textAlign: "right",
	},
	grandTotal: {
		fontSize: 12,
		fontWeight: "bold",
		marginTop: 10,
	},
	footer: {
		position: "absolute",
		bottom: 40,
		left: 40,
		right: 40,
		textAlign: "center",
		color: "#999",
		fontSize: 8,
		borderTopWidth: 1,
		borderTopColor: "#eee",
		paddingTop: 10,
	},
});

export function InvoicePDF(props: OrderEmailData) {
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
		storeEmail,
	} = props;

	const formattedDate = orderDate.toLocaleDateString("bg-BG", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{/* Header */}
				<View style={styles.header}>
					<Text style={styles.logo}>{storeName}</Text>
					<Text style={styles.storeName}>{storeEmail}</Text>
				</View>

				{/* Invoice Title */}
				<Text style={styles.invoiceTitle}>ФАКТУРА / INVOICE</Text>

				{/* Order Info */}
				<View style={styles.section}>
					<View style={styles.row}>
						<Text style={styles.label}>Номер на поръчка:</Text>
						<Text style={styles.value}>#{orderNumber}</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.label}>Дата:</Text>
						<Text style={styles.value}>{formattedDate}</Text>
					</View>
				</View>

				{/* Customer Info */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Клиент</Text>
					<Text>{customerName}</Text>
					<Text>{shippingAddress.line1}</Text>
					{shippingAddress.line2 && <Text>{shippingAddress.line2}</Text>}
					<Text>
						{shippingAddress.city}, {shippingAddress.postalCode}
					</Text>
					<Text>{shippingAddress.country}</Text>
				</View>

				{/* Items Table */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Артикули</Text>
					<View style={styles.table}>
						{/* Header */}
						<View style={styles.tableHeader}>
							<Text style={styles.col1}>Продукт</Text>
							<Text style={styles.col2}>Цена</Text>
							<Text style={styles.col3}>Кол.</Text>
							<Text style={styles.col4}>Общо</Text>
						</View>

						{/* Rows */}
						{items.map((item) => (
							<View key={item.id || item.name} style={styles.tableRow}>
								<Text style={styles.col1}>{item.name}</Text>
								<Text style={styles.col2}>
									{item.price.toFixed(2)} {currency}
								</Text>
								<Text style={styles.col3}>{item.quantity}</Text>
								<Text style={styles.col4}>
									{(item.price * item.quantity).toFixed(2)} {currency}
								</Text>
							</View>
						))}
					</View>
				</View>

				{/* Totals */}
				<View style={styles.totalsSection}>
					<View style={styles.totalRow}>
						<Text style={styles.totalLabel}>Междинна сума:</Text>
						<Text style={styles.totalValue}>
							{subtotal.toFixed(2)} {currency}
						</Text>
					</View>
					<View style={styles.totalRow}>
						<Text style={styles.totalLabel}>Доставка:</Text>
						<Text style={styles.totalValue}>
							{shipping.toFixed(2)} {currency}
						</Text>
					</View>
					{tax > 0 && (
						<View style={styles.totalRow}>
							<Text style={styles.totalLabel}>ДДС (20%):</Text>
							<Text style={styles.totalValue}>
								{tax.toFixed(2)} {currency}
							</Text>
						</View>
					)}
					<View style={[styles.totalRow, styles.grandTotal]}>
						<Text style={styles.totalLabel}>ОБЩО:</Text>
						<Text style={styles.totalValue}>
							{total.toFixed(2)} {currency}
						</Text>
					</View>
				</View>

				{/* Footer */}
				<Text style={styles.footer}>
					Благодарим Ви за поръчката! | {storeName} | {storeEmail}
				</Text>
			</Page>
		</Document>
	);
}
