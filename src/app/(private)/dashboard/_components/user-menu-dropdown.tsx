"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LifeBuoyIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";

import Link from "next/link";
import type { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

const UserMenu: React.FC<{ user: User; }> = ({ user }) => {
	const t = useTranslations();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="cursor-pointer">
				<Avatar>
					<AvatarImage
						src={user.image as string}
						alt={user.name as string}
					/>
					<AvatarFallback>
						{user.name ?
							user.name.split(' ').length > 1
								? `${user.name.split(' ')[0][0]}${user.name.split(' ')[user.name.split(' ').length - 1][0]}`
								: user.name.substring(0, 2)
							: '??'}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel className="flex flex-col items-start">
					<span>{user.name}</span>
					<span className="text-xs font-normal text-muted-foreground">{user.email}</span>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href="/account">
						<UserIcon />
						{t("general.account")}
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/settings">
						<SettingsIcon />
						{t("general.settings")}
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/dashboard/help">
						<LifeBuoyIcon />
						{t("general.help")}
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => signOut({
						redirectTo: '/',
						redirect: true
					})}
					className="focus:text-destructive"
				>
					<LogOutIcon />
					{t("general.logout")}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserMenu;