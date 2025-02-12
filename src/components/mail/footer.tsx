import { Link, Section, Text } from "@react-email/components";

const MailFooter = () => {
	return (
		<Section className="text-center mt-4 p-4">
			<table className="w-full">
				<tr className="w-full">
					<td align="center">
						<Text className="my-[4px] text-[16px] font-semibold leading-[16px] text-neutral-900">
							BoostCart
						</Text>
						<Text className="mb-0 mt-[4px] text-[16px] leading-[16px] text-neutral-500">
							Supercharge your online presence
						</Text>
					</td>
				</tr>
				<tr>
					<td align="center">
						<Link href="https://boostcart.dev" className="my-[8px] mx-2 text-[16px] font-semibold leading-[24px] text-[#f03d7e]">
							boostcart.dev
						</Link>
						<Link href="mailto:support@boostcart.dev" className="mb-0 mx-2 mt-[4px] text-[16px] font-semibold leading-[24px] text-[#f03d7e]">
							support@boostcart.dev
						</Link>
					</td>
				</tr>
			</table>
		</Section>
	)
}

export default MailFooter;