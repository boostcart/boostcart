"use client";

import {
	AlertCircle,
	Check,
	Download,
	File,
	FileImage,
	FileText,
	FileVideo,
	FolderOpen,
	Grid3X3,
	Image,
	List,
	Loader2,
	Search,
	Trash2,
	Upload,
	X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { PolarisButton } from "@/components/admin/polaris-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	deleteMedia,
	deleteMultipleMedia,
	getFolders,
	getMediaFiles,
	getMediaStats,
	updateMedia,
} from "@/server/api/internal/media";

function formatFileSize(bytes: number): string {
	if (bytes === 0) return "0 Bytes";
	const k = 1024;
	const sizes = ["Bytes", "KB", "MB", "GB"];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return `${Number.parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
}

interface MediaFile {
	id: string;
	filename: string;
	originalName: string;
	url: string;
	mimeType: string;
	size: number;
	width: number | null;
	height: number | null;
	altText: string | null;
	folder: string | null;
	createdAt: Date;
	updatedAt: Date;
}

interface MediaStats {
	totalFiles: number;
	totalSize: number;
	images: number;
	documents: number;
	videos: number;
	folderCount: number;
}

interface PendingUpload {
	id: string;
	file: File;
	status: "pending" | "uploading" | "success" | "error";
	progress: number;
	error?: string;
}

const ALLOWED_TYPES = [
	"image/jpeg",
	"image/png",
	"image/gif",
	"image/webp",
	"image/svg+xml",
	"video/mp4",
	"video/webm",
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	"text/plain",
	"text/csv",
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export default function FilesPage() {
	const [files, setFiles] = useState<MediaFile[]>([]);
	const [stats, setStats] = useState<MediaStats | null>(null);
	const [folders, setFolders] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
	const [selectedFolder, setSelectedFolder] = useState<string>("all");
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
	const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [editDialogOpen, setEditDialogOpen] = useState(false);
	const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null);
	const [editAltText, setEditAltText] = useState("");
	const [deleting, setDeleting] = useState(false);

	// Upload state
	const [pendingUploads, setPendingUploads] = useState<PendingUpload[]>([]);
	const [isDragging, setIsDragging] = useState(false);
	const [uploadFolder, setUploadFolder] = useState<string>("__root__");
	const [isUploading, setIsUploading] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const loadData = useCallback(async () => {
		try {
			setLoading(true);
			const folder = selectedFolder === "all" ? undefined : selectedFolder;
			const [filesData, statsData, foldersData] = await Promise.all([
				getMediaFiles(folder),
				getMediaStats(),
				getFolders(),
			]);
			setFiles(filesData);
			setStats(statsData);
			setFolders(foldersData);
		} catch {
			toast.error("Failed to load files");
		} finally {
			setLoading(false);
		}
	}, [selectedFolder]);

	useEffect(() => {
		loadData();
	}, [loadData]);

	const filteredFiles = files.filter((file) =>
		file.originalName.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const getFileIcon = (mimeType: string) => {
		if (mimeType.startsWith("image/")) return FileImage;
		if (mimeType.startsWith("video/")) return FileVideo;
		if (mimeType.includes("pdf") || mimeType.includes("document"))
			return FileText;
		return File;
	};

	// File validation
	const validateFile = useCallback((file: File): string | null => {
		if (!ALLOWED_TYPES.includes(file.type)) {
			return `File type "${file.type}" is not supported`;
		}
		if (file.size > MAX_FILE_SIZE) {
			return `File size exceeds 10MB limit`;
		}
		return null;
	}, []);

	// Add files to pending uploads
	const addFilesToUpload = useCallback(
		(fileList: FileList | File[]) => {
			const newUploads: PendingUpload[] = [];
			const filesArray = Array.from(fileList);

			for (const file of filesArray) {
				const error = validateFile(file);
				newUploads.push({
					id: `${file.name}-${Date.now()}-${Math.random()}`,
					file,
					status: error ? "error" : "pending",
					progress: 0,
					error: error ?? undefined,
				});
			}

			setPendingUploads((prev) => [...prev, ...newUploads]);
		},
		[validateFile],
	);

	// Handle file input change
	const handleFileInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (e.target.files && e.target.files.length > 0) {
				addFilesToUpload(e.target.files);
			}
			// Reset input so same file can be selected again
			e.target.value = "";
		},
		[addFilesToUpload],
	);

	// Handle drag events
	const handleDragEnter = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	}, []);

	const handleDragLeave = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	}, []);

	const handleDragOver = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
	}, []);

	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragging(false);

			if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
				addFilesToUpload(e.dataTransfer.files);
			}
		},
		[addFilesToUpload],
	);

	// Remove file from pending uploads
	const removeFromUpload = useCallback((id: string) => {
		setPendingUploads((prev) => prev.filter((u) => u.id !== id));
	}, []);

	// Upload all pending files
	const handleUploadFiles = async () => {
		const filesToUpload = pendingUploads.filter((u) => u.status === "pending");
		if (filesToUpload.length === 0) return;

		setIsUploading(true);

		for (const upload of filesToUpload) {
			// Update status to uploading
			setPendingUploads((prev) =>
				prev.map((u) =>
					u.id === upload.id ? { ...u, status: "uploading" as const } : u,
				),
			);

			try {
				const formData = new FormData();
				formData.append("file", upload.file);
				// Only append folder if not root (__root__ is special value for no folder)
				if (uploadFolder && uploadFolder !== "__root__") {
					formData.append("folder", uploadFolder);
				}

				const response = await fetch("/api/upload", {
					method: "POST",
					body: formData,
				});

				if (!response.ok) {
					const errorData = await response.json();
					throw new Error(errorData.error ?? "Upload failed");
				}

				// Update status to success
				setPendingUploads((prev) =>
					prev.map((u) =>
						u.id === upload.id
							? { ...u, status: "success" as const, progress: 100 }
							: u,
					),
				);
			} catch (error) {
				// Update status to error
				setPendingUploads((prev) =>
					prev.map((u) =>
						u.id === upload.id
							? {
									...u,
									status: "error" as const,
									error:
										error instanceof Error ? error.message : "Upload failed",
								}
							: u,
					),
				);
			}
		}

		setIsUploading(false);

		// Check if all uploads succeeded
		const updatedUploads = pendingUploads.filter(
			(u) => u.status === "success" || filesToUpload.some((f) => f.id === u.id),
		);
		const allSucceeded = filesToUpload.every((u) =>
			updatedUploads.find((up) => up.id === u.id && up.status === "success"),
		);

		// Refresh the file list
		loadData();

		// If all succeeded, close dialog after a brief delay
		if (allSucceeded && filesToUpload.length > 0) {
			setTimeout(() => {
				toast.success(`${filesToUpload.length} file(s) uploaded`);
				setUploadDialogOpen(false);
				setPendingUploads([]);
				setUploadFolder("__root__");
			}, 500);
		}
	};

	// Reset upload dialog state when closing
	const handleUploadDialogClose = (open: boolean) => {
		if (!open && !isUploading) {
			setPendingUploads([]);
			setUploadFolder("__root__");
			setIsDragging(false);
		}
		setUploadDialogOpen(open);
	};

	const handleSelectAll = () => {
		if (selectedFiles.size === filteredFiles.length) {
			setSelectedFiles(new Set());
		} else {
			setSelectedFiles(new Set(filteredFiles.map((f) => f.id)));
		}
	};

	const handleSelectFile = (id: string) => {
		const newSelected = new Set(selectedFiles);
		if (newSelected.has(id)) {
			newSelected.delete(id);
		} else {
			newSelected.add(id);
		}
		setSelectedFiles(newSelected);
	};

	const handleEditClick = (file: MediaFile) => {
		setSelectedFile(file);
		setEditAltText(file.altText ?? "");
		setEditDialogOpen(true);
	};

	const handleSaveEdit = async () => {
		if (!selectedFile) return;

		try {
			await updateMedia(selectedFile.id, { altText: editAltText });
			toast.success("File updated");
			setEditDialogOpen(false);
			loadData();
		} catch {
			toast.error("Failed to update file");
		}
	};

	const handleDeleteSelected = async () => {
		try {
			setDeleting(true);
			const selectedArray = [...selectedFiles];
			const firstFile = selectedArray[0];
			if (selectedFiles.size === 1 && firstFile) {
				await deleteMedia(firstFile);
			} else {
				await deleteMultipleMedia(selectedArray);
			}
			toast.success(`${selectedFiles.size} file(s) deleted`);
			setSelectedFiles(new Set());
			setDeleteDialogOpen(false);
			loadData();
		} catch {
			toast.error("Failed to delete files");
		} finally {
			setDeleting(false);
		}
	};

	const formatDate = (date: Date) => {
		return new Date(date).toLocaleDateString("bg-BG", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center h-64">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Files</h1>
					<p className="text-muted-foreground mt-1">
						Manage your media files and assets
					</p>
				</div>
				<PolarisButton onClick={() => setUploadDialogOpen(true)}>
					<Upload className="h-4 w-4" />
					Upload Files
				</PolarisButton>
			</div>

			<div className="grid gap-4 md:grid-cols-4">
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<File className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">Total Files</p>
					</div>
					<p className="text-2xl font-bold mt-1">{stats?.totalFiles ?? 0}</p>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<Image className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">Images</p>
					</div>
					<p className="text-2xl font-bold mt-1">{stats?.images ?? 0}</p>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<FileText className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">Documents</p>
					</div>
					<p className="text-2xl font-bold mt-1">{stats?.documents ?? 0}</p>
				</Card>
				<Card className="p-4">
					<div className="flex items-center gap-2">
						<FolderOpen className="h-4 w-4 text-muted-foreground" />
						<p className="text-sm text-muted-foreground">Storage Used</p>
					</div>
					<p className="text-2xl font-bold mt-1">
						{formatFileSize(stats?.totalSize ?? 0)}
					</p>
				</Card>
			</div>

			<div className="flex flex-col sm:flex-row gap-4">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<Input
						placeholder="Search files..."
						className="pl-10"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
				<Select value={selectedFolder} onValueChange={setSelectedFolder}>
					<SelectTrigger className="w-45">
						<SelectValue placeholder="All folders" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All folders</SelectItem>
						{folders.map((folder) => (
							<SelectItem key={folder} value={folder}>
								{folder}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<div className="flex border rounded-md">
					<Button
						variant={viewMode === "grid" ? "secondary" : "ghost"}
						size="icon"
						onClick={() => setViewMode("grid")}
					>
						<Grid3X3 className="h-4 w-4" />
					</Button>
					<Button
						variant={viewMode === "list" ? "secondary" : "ghost"}
						size="icon"
						onClick={() => setViewMode("list")}
					>
						<List className="h-4 w-4" />
					</Button>
				</div>
			</div>

			{selectedFiles.size > 0 && (
				<div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
					<p className="text-sm font-medium">
						{selectedFiles.size} file(s) selected
					</p>
					<Button
						variant="outline"
						size="sm"
						onClick={() => setSelectedFiles(new Set())}
					>
						Clear
					</Button>
					<Button
						variant="destructive"
						size="sm"
						onClick={() => setDeleteDialogOpen(true)}
					>
						<Trash2 className="h-4 w-4 mr-1" />
						Delete
					</Button>
				</div>
			)}

			<Card>
				{filteredFiles.length === 0 ? (
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<FolderOpen className="h-8 w-8" />
							</EmptyMedia>
							<EmptyTitle>No files yet</EmptyTitle>
							<EmptyDescription>
								Upload images, documents, and other files for your store
							</EmptyDescription>
						</EmptyHeader>
						<EmptyContent>
							<PolarisButton onClick={() => setUploadDialogOpen(true)}>
								<Upload className="h-4 w-4" />
								Upload Files
							</PolarisButton>
						</EmptyContent>
					</Empty>
				) : viewMode === "grid" ? (
					<div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
						{filteredFiles.map((file) => {
							const FileIcon = getFileIcon(file.mimeType);
							const isSelected = selectedFiles.has(file.id);

							return (
								// biome-ignore lint/a11y/useSemanticElements: Using div with role=button for clickable file item because we cannot have nested buttons
								<div
									key={file.id}
									className={`group relative border rounded-lg overflow-hidden cursor-pointer transition-all ${
										isSelected ? "ring-2 ring-primary" : "hover:border-primary"
									}`}
									onClick={() => handleSelectFile(file.id)}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											e.preventDefault();
											handleSelectFile(file.id);
										}
									}}
									role="button"
									tabIndex={0}
								>
									<div className="absolute top-2 left-2 z-10">
										<Checkbox
											checked={isSelected}
											onClick={(e) => {
												e.stopPropagation();
												handleSelectFile(file.id);
											}}
										/>
									</div>
									<div className="aspect-square bg-muted flex items-center justify-center">
										{file.mimeType.startsWith("image/") ? (
											<div
												className="w-full h-full bg-cover bg-center"
												style={{ backgroundImage: `url(${file.url})` }}
											/>
										) : (
											<FileIcon className="h-12 w-12 text-muted-foreground" />
										)}
									</div>
									<div className="p-2">
										<p
											className="text-sm font-medium truncate"
											title={file.originalName}
										>
											{file.originalName}
										</p>
										<p className="text-xs text-muted-foreground">
											{formatFileSize(file.size)}
										</p>
									</div>
									<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
										<Button
											size="icon"
											variant="secondary"
											onClick={(e) => {
												e.stopPropagation();
												handleEditClick(file);
											}}
										>
											<FileText className="h-4 w-4" />
										</Button>
										<Button
											size="icon"
											variant="secondary"
											onClick={(e) => {
												e.stopPropagation();
												window.open(file.url, "_blank");
											}}
										>
											<Download className="h-4 w-4" />
										</Button>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-10">
									<Checkbox
										checked={selectedFiles.size === filteredFiles.length}
										onCheckedChange={handleSelectAll}
									/>
								</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Type</TableHead>
								<TableHead>Size</TableHead>
								<TableHead>Folder</TableHead>
								<TableHead>Uploaded</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredFiles.map((file) => {
								const FileIcon = getFileIcon(file.mimeType);

								return (
									<TableRow key={file.id}>
										<TableCell>
											<Checkbox
												checked={selectedFiles.has(file.id)}
												onCheckedChange={() => handleSelectFile(file.id)}
											/>
										</TableCell>
										<TableCell>
											<div className="flex items-center gap-3">
												<div className="h-10 w-10 bg-muted rounded flex items-center justify-center">
													{file.mimeType.startsWith("image/") ? (
														<div
															className="w-full h-full rounded bg-cover bg-center"
															style={{ backgroundImage: `url(${file.url})` }}
														/>
													) : (
														<FileIcon className="h-5 w-5 text-muted-foreground" />
													)}
												</div>
												<span className="font-medium truncate max-w-50">
													{file.originalName}
												</span>
											</div>
										</TableCell>
										<TableCell>
											<Badge variant="outline">
												{file.mimeType.split("/")[1]?.toUpperCase() ?? "FILE"}
											</Badge>
										</TableCell>
										<TableCell>{formatFileSize(file.size)}</TableCell>
										<TableCell>{file.folder ?? "—"}</TableCell>
										<TableCell>{formatDate(file.createdAt)}</TableCell>
										<TableCell className="text-right">
											<div className="flex justify-end gap-2">
												<Button
													variant="ghost"
													size="icon"
													onClick={() => handleEditClick(file)}
												>
													<FileText className="h-4 w-4" />
												</Button>
												<Button
													variant="ghost"
													size="icon"
													onClick={() => window.open(file.url, "_blank")}
												>
													<Download className="h-4 w-4" />
												</Button>
											</div>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				)}
			</Card>

			{/* Upload Dialog */}
			<Dialog open={uploadDialogOpen} onOpenChange={handleUploadDialogClose}>
				<DialogContent className="sm:max-w-lg">
					<DialogHeader>
						<DialogTitle>Upload Files</DialogTitle>
						<DialogDescription>
							Select files to upload to your media library
						</DialogDescription>
					</DialogHeader>

					{/* Hidden file input */}
					<input
						ref={fileInputRef}
						type="file"
						multiple
						accept={ALLOWED_TYPES.join(",")}
						onChange={handleFileInputChange}
						className="hidden"
					/>

					{/* Dropzone */}
					{/* biome-ignore lint/a11y/useSemanticElements: Using div with role=button for dropzone drag-drop functionality */}
					<div
						role="button"
						tabIndex={0}
						className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
							isDragging
								? "border-primary bg-primary/5"
								: "border-muted-foreground/25 hover:border-primary/50"
						}`}
						onDragEnter={handleDragEnter}
						onDragOver={handleDragOver}
						onDragLeave={handleDragLeave}
						onDrop={handleDrop}
						onClick={() => fileInputRef.current?.click()}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								fileInputRef.current?.click();
							}
						}}
					>
						<Upload
							className={`h-8 w-8 mx-auto mb-4 ${
								isDragging ? "text-primary" : "text-muted-foreground"
							}`}
						/>
						<p className="text-sm text-muted-foreground mb-2">
							{isDragging
								? "Drop files here..."
								: "Drag and drop files here, or click to select"}
						</p>
						<Button
							variant="outline"
							size="sm"
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								fileInputRef.current?.click();
							}}
						>
							Select Files
						</Button>
						<p className="text-xs text-muted-foreground mt-2">
							Supported: Images, Videos, PDFs, Documents up to 10MB
						</p>
					</div>

					{/* Folder selection */}
					{pendingUploads.length > 0 && (
						<div className="space-y-2">
							<Label htmlFor="upload-folder">Upload to folder (optional)</Label>
							<Select value={uploadFolder} onValueChange={setUploadFolder}>
								<SelectTrigger id="upload-folder">
									<SelectValue placeholder="Root folder" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="__root__">Root folder</SelectItem>
									<SelectItem value="products">Products</SelectItem>
									<SelectItem value="blog">Blog</SelectItem>
									<SelectItem value="pages">Pages</SelectItem>
									<SelectItem value="marketing">Marketing</SelectItem>
									<SelectItem value="other">Other</SelectItem>
									{folders
										.filter(
											(f) =>
												![
													"products",
													"blog",
													"pages",
													"marketing",
													"other",
												].includes(f),
										)
										.map((folder) => (
											<SelectItem key={folder} value={folder}>
												{folder}
											</SelectItem>
										))}
								</SelectContent>
							</Select>
						</div>
					)}

					{/* Pending uploads list */}
					{pendingUploads.length > 0 && (
						<div className="space-y-2 max-h-48 overflow-y-auto">
							{pendingUploads.map((upload) => (
								<div
									key={upload.id}
									className="flex items-center gap-3 p-2 rounded-md bg-muted/50"
								>
									<div className="shrink-0">
										{upload.status === "pending" && (
											<File className="h-4 w-4 text-muted-foreground" />
										)}
										{upload.status === "uploading" && (
											<Loader2 className="h-4 w-4 animate-spin text-primary" />
										)}
										{upload.status === "success" && (
											<Check className="h-4 w-4 text-green-500" />
										)}
										{upload.status === "error" && (
											<AlertCircle className="h-4 w-4 text-destructive" />
										)}
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-sm font-medium truncate">
											{upload.file.name}
										</p>
										{upload.status === "error" && upload.error && (
											<p className="text-xs text-destructive">{upload.error}</p>
										)}
										{upload.status === "uploading" && (
											<Progress value={50} className="h-1 mt-1" />
										)}
									</div>
									<div className="shrink-0 text-xs text-muted-foreground">
										{formatFileSize(upload.file.size)}
									</div>
									{upload.status !== "uploading" && (
										<Button
											variant="ghost"
											size="icon"
											className="h-6 w-6"
											onClick={() => removeFromUpload(upload.id)}
										>
											<X className="h-3 w-3" />
										</Button>
									)}
								</div>
							))}
						</div>
					)}

					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => handleUploadDialogClose(false)}
							disabled={isUploading}
						>
							Cancel
						</Button>
						<PolarisButton
							onClick={handleUploadFiles}
							disabled={
								isUploading ||
								pendingUploads.filter((u) => u.status === "pending").length ===
									0
							}
						>
							{isUploading ? (
								<>
									<Loader2 className="h-4 w-4 animate-spin" />
									Uploading...
								</>
							) : (
								<>
									<Upload className="h-4 w-4" />
									Upload{" "}
									{pendingUploads.filter((u) => u.status === "pending").length >
									0
										? `(${pendingUploads.filter((u) => u.status === "pending").length})`
										: ""}
								</>
							)}
						</PolarisButton>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Edit Dialog */}
			<Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Edit File</DialogTitle>
						<DialogDescription>Update file details</DialogDescription>
					</DialogHeader>

					{selectedFile && (
						<div className="space-y-4">
							<div className="flex items-center gap-4">
								{selectedFile.mimeType.startsWith("image/") ? (
									<div
										className="h-20 w-20 rounded bg-cover bg-center"
										style={{ backgroundImage: `url(${selectedFile.url})` }}
									/>
								) : (
									<div className="h-20 w-20 rounded bg-muted flex items-center justify-center">
										<File className="h-8 w-8 text-muted-foreground" />
									</div>
								)}
								<div>
									<p className="font-medium">{selectedFile.originalName}</p>
									<p className="text-sm text-muted-foreground">
										{formatFileSize(selectedFile.size)}
									</p>
								</div>
							</div>

							<div>
								<Label htmlFor="altText">Alt Text</Label>
								<Input
									id="altText"
									value={editAltText}
									onChange={(e) => setEditAltText(e.target.value)}
									placeholder="Describe this file for accessibility"
								/>
							</div>
						</div>
					)}

					<DialogFooter>
						<Button variant="outline" onClick={() => setEditDialogOpen(false)}>
							Cancel
						</Button>
						<PolarisButton onClick={handleSaveEdit}>Save Changes</PolarisButton>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Delete Dialog */}
			<Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Delete Files</DialogTitle>
						<DialogDescription>
							Are you sure you want to delete {selectedFiles.size} file(s)? This
							action cannot be undone.
						</DialogDescription>
					</DialogHeader>

					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setDeleteDialogOpen(false)}
						>
							Cancel
						</Button>
						<Button
							variant="destructive"
							onClick={handleDeleteSelected}
							disabled={deleting}
						>
							{deleting ? "Deleting..." : "Delete Files"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
