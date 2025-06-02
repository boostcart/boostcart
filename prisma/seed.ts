import { PrismaClient } from "@/app/generated/prisma/client";
import seedSettings from "./seeds/settings";

const prisma = new PrismaClient();

async function main() {
	const start = new Date();
	console.log("Seeding database...");

	await seedSettings(prisma);

	const end = new Date();
	console.log(`Seeding completed: ${end.getTime() - start.getTime()}ms`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
