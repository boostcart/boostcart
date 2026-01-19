"use client";

import { FileImage, FileVideo, Loader2, Upload, X } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface UploadedMedia {
	url: string;
	type: "image" | "video";
	name: string;
}

interface MediaUploadProps {
	folder?: string;
	value?: UploadedMedia[];
	onChange?: (media: UploadedMedia[]) => void;
	maxFiles?: number;
	disabled?: boolean;
	className?: string;
	acceptImages?: boolean;
	acceptVideos?: boolean;
}

async function uploadFile(
	file: File,
	folder?: string,
): Promise<{ url: string; type: "image" | "video"; name: string }> {
	const formData = new FormData();
	formData.append("file", file);
	if (folder) {
		formData.append("folder", folder);
	}

	const response = await fetch("/api/upload", {
		method: "POST",
		body: formData,
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.error || "Upload failed");
	}

	const result = await response.json();
	return {
		url: result.media.url,
		type: file.type.startsWith("video/") ? "video" : "image",
		name: result.media.originalName || file.name,
	};
}

export function MediaUpload({
	folder = "media",
	value = [],
	onChange,
	maxFiles = 20,
	disabled = false,
	className,
	acceptImages = true,
	acceptVideos = true,
}: MediaUploadProps) {
	const [isDragging, setIsDragging] = React.useState(false);
	const [isUploading, setIsUploading] = React.useState(false);
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleUpload = async (files: File[]) => {
		if (files.length === 0) return;

		setIsUploading(true);
		try {
			const uploadPromises = files.map((file) => uploadFile(file, folder));
			const results = await Promise.all(uploadPromises);
			onChange?.([...value, ...results]);
		} catch (error) {
			console.error("Upload error:", error);
		} finally {
			setIsUploading(false);
		}
	};

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		if (!disabled && !isUploading) {
			setIsDragging(true);
		}
	};

	const handleDragLeave = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false);
	};

	const handleDrop = async (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false);

		if (disabled || isUploading) return;

		const files = Array.from(e.dataTransfer.files);
		const remainingSlots = maxFiles - value.length;
		const filesToUpload = files.slice(0, remainingSlots);

		await handleUpload(filesToUpload);
	};

	const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (disabled || isUploading || !e.target.files) return;

		const files = Array.from(e.target.files);
		const remainingSlots = maxFiles - value.length;
		const filesToUpload = files.slice(0, remainingSlots);

		await handleUpload(filesToUpload);

		// Reset input
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	};

	const handleRemove = (index: number) => {
		const newValue = value.filter((_, i) => i !== index);
		onChange?.(newValue);
	};

	const acceptedTypes: string[] = [];
	if (acceptImages) acceptedTypes.push("image/*");
	if (acceptVideos) acceptedTypes.push("video/*");

	const canAddMore = value.length < maxFiles && !disabled && !isUploading;

	return (
		<div className={cn("space-y-4", className)}>
			{/* Upload dropzone */}
			{canAddMore && (
				<button
					type="button"
					tabIndex={0}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
					onClick={() => inputRef.current?.click()}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							inputRef.current?.click();
						}
					}}
					className={cn(
						"relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 cursor-pointer transition-colors",
						isDragging
							? "border-primary bg-primary/5"
							: "border-muted-foreground/25 hover:border-muted-foreground/50",
						(disabled || isUploading) && "opacity-50 cursor-not-allowed",
					)}
				>
					<input
						ref={inputRef}
						type="file"
						accept={acceptedTypes.join(",")}
						multiple
						onChange={handleFileSelect}
						disabled={disabled || isUploading}
						className="hidden"
					/>
					{isUploading ? (
						<>
							<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
							<p className="text-sm text-muted-foreground">Uploading...</p>
						</>
					) : (
						<>
							<Upload className="h-8 w-8 text-muted-foreground" />
							<div className="text-center">
								<p className="text-sm font-medium">
									Drop files here or click to upload
								</p>
								<p className="text-xs text-muted-foreground mt-1">
									{acceptImages && acceptVideos
										? "Images and videos"
										: acceptImages
											? "Images only"
											: "Videos only"}
									{" • "}
									{maxFiles - value.length} slots remaining
								</p>
							</div>
						</>
					)}
				</button>
			)}

			{/* Preview grid */}
			{value.length > 0 && (
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
					{value.map((media, index) => (
						<div
							key={`${media.url}-${index}`}
							className="group relative aspect-square rounded-lg border bg-muted overflow-hidden"
						>
							{media.type === "video" ? (
								<div className="absolute inset-0 flex items-center justify-center bg-muted">
									<FileVideo className="h-8 w-8 text-muted-foreground" />
								</div>
							) : (
								<Image
									src={media.url}
									alt={media.name}
									fill
									className="object-cover"
									unoptimized
								/>
							)}
							{index === 0 && (
								<div className="absolute top-1 left-1 px-1.5 py-0.5 bg-primary text-primary-foreground text-xs rounded">
									Cover
								</div>
							)}
							<Button
								type="button"
								variant="destructive"
								size="icon"
								className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
								onClick={(e) => {
									e.stopPropagation();
									handleRemove(index);
								}}
							>
								<X className="h-3 w-3" />
							</Button>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

// Simple single image upload
interface SingleImageUploadProps {
	folder?: string;
	value?: string;
	onChange?: (url: string | undefined) => void;
	disabled?: boolean;
	className?: string;
	aspectRatio?: "square" | "video" | "auto";
}

export function SingleImageUpload({
	folder = "media",
	value,
	onChange,
	disabled = false,
	className,
	aspectRatio = "square",
}: SingleImageUploadProps) {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [isUploading, setIsUploading] = React.useState(false);

	const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (disabled || isUploading || !e.target.files?.[0]) return;

		setIsUploading(true);
		try {
			const result = await uploadFile(e.target.files[0], folder);
			onChange?.(result.url);
		} catch (error) {
			console.error("Upload error:", error);
		} finally {
			setIsUploading(false);
			if (inputRef.current) {
				inputRef.current.value = "";
			}
		}
	};

	const aspectClass =
		aspectRatio === "square"
			? "aspect-square"
			: aspectRatio === "video"
				? "aspect-video"
				: "";

	return (
		<div className={cn("relative", aspectClass, className)}>
			<input
				ref={inputRef}
				type="file"
				accept="image/*"
				onChange={handleFileSelect}
				disabled={disabled || isUploading}
				className="hidden"
			/>

			{value ? (
				<div className="relative h-full w-full rounded-lg border overflow-hidden group">
					<Image
						src={value}
						alt="Uploaded"
						fill
						className="object-cover"
						unoptimized
					/>
					<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
						<Button
							type="button"
							variant="secondary"
							size="sm"
							onClick={() => inputRef.current?.click()}
							disabled={isUploading}
						>
							{isUploading ? (
								<Loader2 className="h-4 w-4 animate-spin" />
							) : (
								"Change"
							)}
						</Button>
						<Button
							type="button"
							variant="destructive"
							size="sm"
							onClick={() => onChange?.(undefined)}
						>
							Remove
						</Button>
					</div>
				</div>
			) : (
				<button
					type="button"
					onClick={() => inputRef.current?.click()}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							inputRef.current?.click();
						}
					}}
					tabIndex={0}
					className={cn(
						"h-full w-full flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed cursor-pointer transition-colors",
						"border-muted-foreground/25 hover:border-muted-foreground/50",
						(disabled || isUploading) && "opacity-50 cursor-not-allowed",
					)}
				>
					{isUploading ? (
						<Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
					) : (
						<>
							<FileImage className="h-6 w-6 text-muted-foreground" />
							<span className="text-xs text-muted-foreground">
								Upload image
							</span>
						</>
					)}
				</button>
			)}
		</div>
	);
}
