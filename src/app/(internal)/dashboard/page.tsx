import Link from "next/link";

export default function DashboardHome() {
	return (
		<main>
			<h1>Admin Dashboard</h1>
			<Link href="/" className="text-blue-500">
				Go to Home
			</Link>
		</main>
	);
}
