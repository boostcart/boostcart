import { Column, Img, Link, Row, Section } from "@react-email/components";

const MailHeader = () => {
	return (
		<Section className="mb-4 p-4">
			<Row>
				<Column align="center">
					<Link href="https://boostcart.dev">
						<Img
							alt="BoostCart logo"
							height="64"
							src="/static/logo-black.png"
						/>
					</Link>
				</Column>
			</Row>
		</Section>
	)
}

export default MailHeader;