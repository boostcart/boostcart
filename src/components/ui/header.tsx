interface HeaderProps {
	title: string;
	description?: string;
	children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, description, children }) => {
	return (
		<div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:items-center">
			<div className="flex flex-col">
				<h1 className="text-2xl font-bold">{title}</h1>
				{description && (
					<p className="text-sm text-muted-foreground">{description}</p>
				)}
			</div>

			{children && (
				<div className="flex items-center justify-end space-x-2">
					{children}
				</div>
			)}
		</div>
	);
};

export default Header;
