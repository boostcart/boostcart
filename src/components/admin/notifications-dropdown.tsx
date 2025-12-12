"use client";

import { Bell, Check, Package, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { NotificationIcon } from "@shopify/polaris-icons";

interface Notification {
	id: string;
	type: "new_order" | "order_status" | "new_review";
	title: string;
	description: string;
	time: string;
	url: string;
	read: boolean;
}

const initialNotifications: Notification[] = [
	{
		id: "1",
		type: "new_order",
		title: "New Order #3210",
		description: "Sofia Martinez placed an order for $329.00",
		time: "2 min ago",
		url: "/admin/orders",
		read: false,
	},
	{
		id: "2",
		type: "order_status",
		title: "Order Status Changed",
		description: "Order #3209 has been shipped",
		time: "15 min ago",
		url: "/admin/orders",
		read: false,
	},
	{
		id: "3",
		type: "new_review",
		title: "New Review",
		description: 'Elena Dimitrova reviewed "MacBook Pro 16\\" M3"',
		time: "1 hour ago",
		url: "/admin/reviews",
		read: false,
	},
	{
		id: "4",
		type: "new_order",
		title: "New Order #3208",
		description: "Georgi Ivanov placed an order for $599.00",
		time: "3 hours ago",
		url: "/admin/orders",
		read: true,
	},
	{
		id: "5",
		type: "order_status",
		title: "Order Status Changed",
		description: "Order #3207 has been delivered",
		time: "5 hours ago",
		url: "/admin/orders",
		read: true,
	},
	{
		id: "6",
		type: "new_review",
		title: "New Review",
		description: 'Maria Popova reviewed "Wireless Headphones"',
		time: "1 day ago",
		url: "/admin/reviews",
		read: true,
	},
];

const getNotificationIcon = (type: Notification["type"]) => {
	switch (type) {
		case "new_order":
			return ShoppingCart;
		case "order_status":
			return Package;
		case "new_review":
			return Star;
	}
};

const getNotificationColor = (type: Notification["type"]) => {
	switch (type) {
		case "new_order":
			return "text-blue-500";
		case "order_status":
			return "text-green-500";
		case "new_review":
			return "text-yellow-500";
	}
};

export function NotificationsDropdown() {
	const [notifications, setNotifications] =
		useState<Notification[]>(initialNotifications);
	const [open, setOpen] = useState(false);

	const unreadCount = notifications.filter((n) => !n.read).length;

	const markAllAsRead = () => {
		setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
	};

	const markAsRead = (id: string) => {
		setNotifications((prev) =>
			prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
		);
	};

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button
					type="button"
					variant="ghost"
					size="sm"
					className="relative size-9 p-0 hover:bg-[#2c2c2c]"
				>
					<NotificationIcon className="size-4.5 fill-white" />
					{unreadCount > 0 && (
						<Badge
							variant="destructive"
							className="absolute top-0 right-0 size-4 flex items-center justify-center p-0 text-[9px] rounded-full"
						>
							{unreadCount}
						</Badge>
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-80 p-0">
				<div className={cn(
					"flex items-center justify-between border-b",
					unreadCount > 0 ? "p-2" : "px-2 py-3.5"
				)}>
					<h3 className="font-semibold text-sm">Notifications</h3>
					{unreadCount > 0 && (
						<Button
							type="button"
							variant="ghost"
							size="sm"
							onClick={markAllAsRead}
							className="h-8 text-xs"
						>
							<Check className="size-3" />
							Mark all read
						</Button>
					)}
				</div>
				<ScrollArea className="h-[400px]">
					<div className="p-2">
						{notifications.length === 0 ? (
							<div className="flex flex-col items-center justify-center py-8 text-center">
								<Bell className="h-12 w-12 text-muted-foreground/50 mb-2" />
								<p className="text-sm text-muted-foreground">
									No notifications yet
								</p>
							</div>
						) : (
							notifications.map((notification, index) => {
								const Icon = getNotificationIcon(notification.type);
								const iconColor = getNotificationColor(notification.type);

								return (
									<div key={notification.id}>
										<DropdownMenuItem
											asChild
											className={cn(
												"cursor-pointer p-3 rounded-md",
												!notification.read && "bg-accent/50",
											)}
											onClick={() => markAsRead(notification.id)}
										>
											<Link
												href={notification.url}
												className="flex gap-3"
												onClick={() => setOpen(false)}
											>
												<div
													className={cn(
														"h-10 w-10 rounded-full flex items-center justify-center shrink-0",
														!notification.read ? "bg-primary/10" : "bg-muted",
													)}
												>
													<Icon className={cn("h-5 w-5", iconColor)} />
												</div>
												<div className="flex-1 min-w-0">
													<div className="flex items-start justify-between gap-2">
														<p className="text-sm font-medium truncate">
															{notification.title}
														</p>
														{!notification.read && (
															<div className="h-2 w-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
														)}
													</div>
													<p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
														{notification.description}
													</p>
													<p className="text-xs text-muted-foreground mt-1">
														{notification.time}
													</p>
												</div>
											</Link>
										</DropdownMenuItem>
										{index < notifications.length - 1 && (
											<DropdownMenuSeparator className="my-1" />
										)}
									</div>
								);
							})
						)}
					</div>
				</ScrollArea>
				<div className="border-t p-2">
					<Button
						type="button"
						variant="ghost"
						size="sm"
						className="w-full"
						asChild
					>
						<Link href="/admin/settings" onClick={() => setOpen(false)}>
							View all notifications
						</Link>
					</Button>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
