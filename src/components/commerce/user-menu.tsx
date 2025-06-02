"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@/types";
import { LogOutIcon, SettingsIcon, ShieldUserIcon, ShoppingBagIcon, UserIcon } from "lucide-react";

import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";

interface UserMenuProps {
	user: User;
}

export const UserMenu = ({ user }: UserMenuProps) => {
	const t = useTranslations();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size="icon"
					variant="primaryGhost"
					className="[&_svg]:size-8 [&_svg]:shrink-0"
				>
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel className="flex flex-col items-start">
					<span>{user.name}</span>
					<span className="text-xs font-normal text-muted-foreground">
						{user.email}
					</span>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{user.role !== "USER" && (
					<DropdownMenuItem asChild>
						<Link href="/dashboard">
							<ShieldUserIcon />
							{t("general.dashboard")}
						</Link>
					</DropdownMenuItem>
				)}
				<DropdownMenuItem asChild>
					<Link href="/account">
						<UserIcon />
						{t("general.account")}
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/account/orders">
						<ShoppingBagIcon />
						{t("general.orders")}
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() =>
						signOut({
							redirectTo: "/",
							redirect: true,
						})
					}
					className="focus:text-destructive"
				>
					<LogOutIcon />
					{t("general.logout")}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
