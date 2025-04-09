export default async function AuthLayout(
	props: Readonly<{
		children: React.ReactNode;
	}>,
) {
	const { children } = props;

	return <main>{children}</main>;
}
