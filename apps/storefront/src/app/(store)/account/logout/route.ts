import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logoutCustomer } from "@/server/auth/customer-auth";

export async function POST() {
	await logoutCustomer();

	const cookieStore = await cookies();
	cookieStore.delete("bc_customer_access");
	cookieStore.delete("bc_customer_refresh");

	redirect("/");
}
