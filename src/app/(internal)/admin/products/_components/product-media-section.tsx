"use client";

import { FileVideo, Play, Upload, X } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import type { CreateProductInput, ProductMediaInput } from "@/schemas/product";

// Local staged media item (not yet uploaded)
interface StagedMediaItem {
	id: string;
	file?: File;
	previewUrl: string;
	type: "image" | "video";
	altText?: string;
	// If this came from existing data (edit mode), it has a real URL
	existingUrl?: string;
}

export function ProductMediaSection() {
	const form = useFormContext<CreateProductInput>();
	const formMedia = form.watch("media") ?? [];

	// Local state for staged media (includes both existing and new uploads)
	const [stagedMedia, setStagedMedia] = React.useState<StagedMediaItem[]>([]);
	const [isDragging, setIsDragging] = React.useState(false);
	const inputRef = React.useRef<HTMLInputElement>(null);
	const isInitializedRef = React.useRef(false);

	// Ref for form.setValue to avoid dependency issues
	const setValueRef = React.useRef(form.setValue);
	setValueRef.current = form.setValue;

	// Initialize staged media from form data (for edit mode) - only once
	React.useEffect(() => {
		if (!isInitializedRef.current && formMedia.length > 0) {
			isInitializedRef.current = true;
			const existing: StagedMediaItem[] = formMedia.map((m, index) => ({
				id: m.id ?? `existing-${index}`,
				previewUrl: m.url,
				existingUrl: m.url,
				type: m.mediaType === "VIDEO" ? "video" : "image",
				altText: m.altText,
			}));
			setStagedMedia(existing);
		}
	}, [formMedia]);

	// Sync staged media back to form whenever it changes
	React.useEffect(() => {
		// Skip initial sync to avoid loop
		if (!isInitializedRef.current && stagedMedia.length === 0) {
			return;
		}

		const mediaInput: ProductMediaInput[] = stagedMedia.map(
			(item, index) =>
				({
					id: item.existingUrl ? item.id : undefined, // Only keep ID if it's existing
					url: item.existingUrl ?? item.previewUrl, // Use existing URL or preview for new
					mediaType: item.type === "video" ? "VIDEO" : "IMAGE",
					altText: item.altText,
					order: index,
					// Mark new files for upload handling in form submit
					_stagedFile: item.file,
				}) as ProductMediaInput & { _stagedFile?: File },
		);

		setValueRef.current("media", mediaInput, { shouldDirty: true });
	}, [stagedMedia]);

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false);
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false);
		const files = Array.from(e.dataTransfer.files);
		handleFiles(files);
	};

	const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		const files = Array.from(e.target.files);
		handleFiles(files);
		if (inputRef.current) {
			inputRef.current.value = "";
		}
	};

	const handleFiles = (files: File[]) => {
		const validFiles = files.filter(
			(file) =>
				file.type.startsWith("image/") || file.type.startsWith("video/"),
		);

		const newItems: StagedMediaItem[] = validFiles.map((file) => ({
			id: `new-${Date.now()}-${Math.random().toString(36).slice(2)}`,
			file,
			previewUrl: URL.createObjectURL(file),
			type: file.type.startsWith("video/") ? "video" : "image",
			altText: file.name,
		}));

		setStagedMedia((prev) => [...prev, ...newItems]);
	};

	const handleRemove = (id: string) => {
		setStagedMedia((prev) => {
			const item = prev.find((m) => m.id === id);
			// Revoke object URL to free memory if it's a new file
			if (item?.file && item.previewUrl.startsWith("blob:")) {
				URL.revokeObjectURL(item.previewUrl);
			}
			return prev.filter((m) => m.id !== id);
		});
	};

	// const handleReorder = (fromIndex: number, toIndex: number) => {
	// 	setStagedMedia(prev => {
	// 		const newItems = [...prev];
	// 		const [removed] = newItems.splice(fromIndex, 1);
	// 		if (removed) {
	// 			newItems.splice(toIndex, 0, removed);
	// 		}
	// 		return newItems;
	// 	});
	// };

	// Cleanup blob URLs on unmount
	React.useEffect(() => {
		return () => {
			stagedMedia.forEach((item) => {
				if (item.previewUrl.startsWith("blob:")) {
					URL.revokeObjectURL(item.previewUrl);
				}
			});
		};
	}, [stagedMedia]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Media</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<FormField
					control={form.control}
					name="media"
					render={() => (
						<FormItem>
							<div className="space-y-4">
								{/* Media grid */}
								{stagedMedia.length > 0 && (
									<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
										{stagedMedia.map((item, index) => (
											<div
												key={item.id}
												className="group relative aspect-square rounded-lg border bg-muted overflow-hidden"
											>
												{/* Media content */}
												{item.type === "video" ? (
													<div className="absolute inset-0 flex items-center justify-center bg-muted">
														<div className="relative">
															<FileVideo className="h-10 w-10 text-muted-foreground" />
															<Play className="absolute inset-0 m-auto h-4 w-4 text-muted-foreground" />
														</div>
													</div>
												) : (
													<Image
														src={item.previewUrl}
														alt={item.altText || `Media ${index + 1}`}
														fill
														className="object-cover"
														draggable={false}
														unoptimized
													/>
												)}

												{/* Cover badge */}
												{index === 0 && (
													<div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded">
														Cover
													</div>
												)}

												{/* New file badge */}
												{item.file && (
													<div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded">
														{index === 0 ? "Cover (New)" : "New"}
													</div>
												)}

												{/* Remove button */}
												<Button
													type="button"
													variant="destructive"
													size="icon"
													className="absolute top-1.5 right-1.5 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity z-10"
													onClick={() => handleRemove(item.id)}
												>
													<X className="h-3 w-3" />
												</Button>

												{/* Order number */}
												<div className="absolute bottom-1.5 right-1.5 h-5 w-5 rounded-full bg-black/50 text-white text-xs flex items-center justify-center">
													{index + 1}
												</div>
											</div>
										))}
									</div>
								)}

								{/* Upload dropzone */}
								<button
									type="button"
									className={cn(
										"border-2 border-dashed rounded-lg p-6 transition-colors w-full",
										isDragging
											? "border-primary bg-primary/5"
											: "border-muted-foreground/25 hover:border-primary/50",
									)}
									onDragOver={handleDragOver}
									onDragLeave={handleDragLeave}
									onDrop={handleDrop}
									onClick={() => inputRef.current?.click()}
								>
									<input
										ref={inputRef}
										type="file"
										accept="image/*,video/*"
										multiple
										className="hidden"
										onChange={handleFileSelect}
									/>
									<div className="flex flex-col items-center gap-2 text-center">
										<div className="p-3 rounded-full bg-muted">
											<Upload className="h-6 w-6 text-muted-foreground" />
										</div>
										<div>
											<p className="text-sm font-medium">
												Drag & drop files here
											</p>
											<p className="text-xs text-muted-foreground">
												or click to browse
											</p>
										</div>
										<span className="text-xs text-primary">
											Click anywhere to select files
										</span>
									</div>
								</button>
							</div>
							<p className="text-xs text-muted-foreground mt-2">
								The first image will be the cover image. Files will be uploaded
								when you save the product. Supports images and videos up to
								16MB.
							</p>
							<FormMessage />
						</FormItem>
					)}
				/>
			</CardContent>
		</Card>
	);
}
