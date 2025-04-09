"use client";

import * as React from "react";

import {
	Body,
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

export default function ChangedPasswordEmail(props: any) {
	const { name, email, when, where, device } = props;

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
								<Heading as="h2">
									Hey, {name}! Did you change your password?
								</Heading>
								<Text className="max-w-lg text-lg text-neutral-500">
									We noticed the password for your BoostCart account was
									recently changed. If this was you, you can safely ignore this
									email.
								</Text>
							</Column>
						</Row>
						<Row className="max-w-lg">
							<Column
								className="w-full p-4 rounded-md shadow-xs bg-neutral-100"
								align="center"
							>
								<Row>
									<Column>
										<strong className="mr-2">When</strong>
										<span>{when}</span>
									</Column>
								</Row>
								<Row className="my-2">
									<Column>
										<strong className="mr-2">Where</strong>
										<span>{where}</span>
									</Column>
								</Row>
								<Row>
									<Column>
										<strong className="mr-2">Device</strong>
										<span>{device}</span>
									</Column>
								</Row>
							</Column>
						</Row>
						<Row className="mt-8">
							<Column className="text-sm leading-3" align="center">
								<Text className="text-neutral-500">
									This email was sent to <strong>{email}</strong>. If
									that&apos;s not you, please ignore this email.
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

ChangedPasswordEmail.PreviewProps = {
	name: "John",
	email: "johndoe@example.com",
	resetLink: "http://localhost:3000/reset-password",
	requestNewLink: "http://localhost:3000/forgot-password",
	when: "Sun, Mar 12, 2025, 12:00 PM",
	where: "Sofia, Bulgaria",
	device: "Chrome on Windows",
};
