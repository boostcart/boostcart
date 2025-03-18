"use client";

import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import type { User } from "@prisma/client";
import { useTranslations } from "next-intl";

const EditUser: React.FC<{ user: User; }> = ({ user }) => {
	const t = useTranslations();

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<Pencil />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>{t("dashboard.customers.editUser.title", { userName: user.name })}</SheetTitle>
				</SheetHeader>
				<div></div>
				<SheetFooter>
					<SheetClose asChild>
						<Button variant="secondary">
							{t("general.cancel")}
						</Button>
					</SheetClose>
					<Button>
						{t("general.create")}
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default EditUser;