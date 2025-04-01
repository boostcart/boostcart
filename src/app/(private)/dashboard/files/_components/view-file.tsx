"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Image from "next/image";
import { UploadedFile } from "../page";

const ViewFile: React.FC<{ file: UploadedFile; }> = ({ file }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="icon">
					<Eye />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{file.name}</DialogTitle>
				</DialogHeader>
				<div>
					<Image
						src={`https://utfs.io/f/${file.key}`}
						alt={file.name}
						width={500}
						height={500}
						className="w-full object-contain rounded-lg bg-accent shadow"
					/>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default ViewFile;