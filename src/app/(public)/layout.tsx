import { forbidden, unauthorized } from "next/navigation";

import { auth } from "@/auth";
import { getUserById } from "@/data/user";
import { UserRole } from "@/app/generated/prisma/client";
import { Navigation } from "@/components/commerce/navigation";

export default async function MainLayout(
	props: Readonly<{
		children: React.ReactNode;
	}>,
) {
	const { children } = props;
	const session = await auth();

	const user = await getUserById(session?.user?.id);

	return (
		<div className="flex flex-col flex-1 w-full h-screen overflow-hidden bg-background">
			<Navigation
				user={user}
			/>

			<main>
				{children}
			</main>
		</div>
	);
}
