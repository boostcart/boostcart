import { renderToBuffer } from "@react-pdf/renderer";
import { InvoicePDF } from "./templates/invoice-pdf";
import type { OrderEmailData } from "./types";

/**
 * Generate PDF invoice for an order
 * Returns a Buffer that can be attached to emails or downloaded
 */
export async function generateInvoicePDF(
	orderData: OrderEmailData,
): Promise<Buffer> {
	const pdfStream = await renderToBuffer(<InvoicePDF {...orderData} />);
	return pdfStream;
}

/**
 * Generate invoice filename
 */
export function getInvoiceFilename(orderNumber: string): string {
	return `invoice-${orderNumber}.pdf`;
}
