"use client";

import * as React from "react";

import {
	Body,
	Button,
	Column,
	Font,
	Head,
	Heading,
	Html,
	Link,
	Row,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

import MailFooter from "@/components/mail/footer";
import MailHeader from "@/components/mail/header";

export default function ForgotPasswordEmail(props: any) {
	const { name, email, resetLink, requestNewLink } = props;

	return (
		<Html>
			<Head>
				<Font
					fontFamily="Inter"
					fallbackFontFamily="sans-serif"
					webFont={{
						url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZFhiI2B.woff2",
						format: "woff2",
					}}
					fontWeight={400}
					fontStyle="normal"
				/>

				<Font
					fontFamily="Inter"
					fallbackFontFamily="sans-serif"
					webFont={{
						url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZFhiI2B.woff2",
						format: "woff2",
					}}
					fontWeight={500}
					fontStyle="normal"
				/>
			</Head>
			<Tailwind>
				<Body className="p-4 bg-neutral-100">
					<MailHeader />
					<Section className="w-full p-4 bg-white rounded-md shadow-xs">
						<Row>
							<Column align="center">
								<Heading as="h2">Hey, {name}! Forgot your password?</Heading>
								<Text className="max-w-lg text-lg text-neutral-500">
									That&apos;s okay, it happens! Make a new one by clicking the
									link below.
								</Text>
							</Column>
						</Row>
						<Row>
							<Column align="center">
								<Button
									href={resetLink}
									className="bg-[#f03d7e] text-[#fff5f5] h-10 px-5 py-2 text-md inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold ring-offset-background transition focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
								>
									Reset your password
								</Button>
							</Column>
						</Row>
						<Row className="mt-8">
							<Column className="text-sm leading-3" align="center">
								<Text className="text-neutral-500">
									This email was sent to <strong>{email}</strong>. If you
									didn&apos;t make this request, please ignore this email.
								</Text>
								<Text className="text-neutral-500">
									Please note that this link{" "}
									<strong>expires in 24 hours</strong>. If your link has
									expired, you can always{" "}
									<Link
										className="text-[#f03d7e] underline"
										href={requestNewLink}
									>
										request another
									</Link>
									.
								</Text>
							</Column>
						</Row>
					</Section>
					<MailFooter />
				</Body>
			</Tailwind>
		</Html>
	);
}

ForgotPasswordEmail.PreviewProps = {
	name: "John",
	email: "johndoe@example.com",
	resetLink: "http://localhost:3000/reset-password",
	requestNewLink: "http://localhost:3000/forgot-password",
};
