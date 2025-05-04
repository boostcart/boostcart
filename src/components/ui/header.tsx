import * as React from "react";

interface HeaderProps {
	title: string;
	description?: string;
	children?: React.ReactNode;
}

function Header({ title, description, children }: HeaderProps) {
	return (
		<div data-slot="header" className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center">
			<div data-slot="header-content" className="flex flex-col">
				<h1 data-slot="title" className="text-2xl font-bold">{title}</h1>
				{description && (
					<p data-slot="description" className="text-sm text-muted-foreground">{description}</p>
				)}
			</div>

			{children && (
				<div data-slot="header-actions" className="flex items-center justify-end space-x-2">
					{children}
				</div>
			)}
		</div>
	);
}

export default Header;
