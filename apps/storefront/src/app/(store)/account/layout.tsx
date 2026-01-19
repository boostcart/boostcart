import type { ReactNode } from "react";

interface AccountLayoutProps {
	children: ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
	return <div className="container mx-auto py-16">{children}</div>;
}
