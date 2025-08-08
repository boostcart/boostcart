import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/server/auth";

export default async function UnauthenticatedLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const isUserLoggedIn = await auth();

	if (isUserLoggedIn?.user) {
		redirect("/?silent=already_logged_in");
	}

	return (
		<main className="relative flex h-screen w-full flex-col justify-center sm:p-0 lg:flex-row dark:bg-neutral-900">
			{children}
			<div className="lg:w-1/2 w-full h-full bg-rose-950 dark:bg-white/5 lg:grid items-center hidden">
				<div className="relative items-center justify-center  flex z-1">
					<div className="flex flex-col items-center max-w-xs">
						<Link href="/" className="block mb-4">
							<Image width={231} height={48} src="/logo-white.png" alt="Logo" />
						</Link>
						<p className="text-center text-neutral-200 dark:text-white/60">
							Supercharge your online presence with BoostCart, the solution for
							selling online.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
