import { User } from "@/types"
import Logo from "@/components/logo";
import { UserMenu } from "@/components/commerce/user-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserPlus2 } from "lucide-react";
import { WishlistDropdown } from "./wishlist-dropdown";
import { CartDropdown } from "./cart-dropdown";
import { Search } from "./search";

interface NavigationProps {
	user?: User;
}

export const Navigation = ({ user }: NavigationProps) => {
	return (
		<div className="w-full border-b border-border">
			<nav className="container flex items-center justify-between gap-8 p-4 mx-auto">
				<Logo
					variant="logo"
					color="black"
					href="/"
					width={150}
					height={80}
				/>

				<Search />

				<div className="flex items-center gap-x-1">
					<WishlistDropdown />
					<CartDropdown />

					{user ? (
						<UserMenu
							user={user}
						/>
					) : (
						<Button
							asChild
							size="icon"
							variant="primaryGhost"
							className="[&_svg]:size-8 [&_svg]:shrink-0"
						>
							<Link href="/login">
								<UserPlus2 />
							</Link>
						</Button>
					)}
				</div>
			</nav>
		</div>
	)
}