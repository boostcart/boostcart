"use client";

import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { type Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
	Bold,
	Heading1,
	Heading2,
	Heading3,
	ImagePlus,
	Italic,
	Link as LinkIcon,
	List,
	ListOrdered,
	Loader2,
	Minus,
	Quote,
	Redo,
	Strikethrough,
	Underline as UnderlineIcon,
	Undo,
	Unlink,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

interface RichTextEditorProps {
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
	minHeight?: string;
	/** Folder for image uploads (e.g., 'blog', 'pages') */
	imageFolder?: string;
	/** Whether to enable image uploads */
	enableImages?: boolean;
}

export function RichTextEditor({
	value = "",
	onChange,
	placeholder = "Start writing...",
	disabled = false,
	className,
	minHeight = "200px",
	imageFolder = "other",
	enableImages = true,
}: RichTextEditorProps) {
	const isInternalUpdate = React.useRef(false);

	const editor = useEditor({
		immediatelyRender: false,
		extensions: [
			StarterKit.configure({
				heading: {
					levels: [1, 2, 3],
				},
			}),
			Underline,
			Link.configure({
				openOnClick: false,
				HTMLAttributes: {
					class: "text-primary underline underline-offset-2",
				},
			}),
			Image.configure({
				inline: false,
				allowBase64: false,
				HTMLAttributes: {
					class: "rounded-md max-w-full h-auto",
				},
			}),
			Placeholder.configure({
				placeholder,
			}),
		],
		content: value,
		editable: !disabled,
		onUpdate: ({ editor }) => {
			if (!isInternalUpdate.current) {
				onChange?.(editor.getHTML());
			}
		},
		editorProps: {
			attributes: {
				class: cn(
					"prose prose-sm max-w-none focus:outline-none",
					"prose-headings:font-semibold prose-headings:tracking-tight",
					"prose-p:leading-relaxed prose-p:my-2",
					"prose-ul:my-2 prose-ol:my-2",
					"prose-li:my-0.5",
					"prose-blockquote:border-l-2 prose-blockquote:border-muted-foreground/20 prose-blockquote:pl-4 prose-blockquote:italic",
				),
			},
		},
	});

	// Update content when value prop changes externally
	React.useEffect(() => {
		if (!editor) return;

		const currentContent = editor.getHTML();
		// Normalize empty content comparison - Tiptap returns <p></p> for empty
		const normalizedCurrent =
			currentContent === "<p></p>" ? "" : currentContent;
		const normalizedValue = value === "<p></p>" ? "" : value;

		if (normalizedValue !== normalizedCurrent) {
			// Use queueMicrotask to ensure the flag stays set during the async update
			isInternalUpdate.current = true;
			editor.commands.setContent(value);
			// Reset after a microtask to ensure onUpdate has fired
			queueMicrotask(() => {
				isInternalUpdate.current = false;
			});
		}
	}, [value, editor]);

	if (!editor) {
		return (
			<div
				className={cn("rounded-md border bg-muted/50 animate-pulse", className)}
				style={{ minHeight }}
			/>
		);
	}

	return (
		<div
			className={cn(
				"rounded-md border bg-background",
				disabled && "opacity-50",
				className,
			)}
		>
			{/* Toolbar */}
			<div className="flex flex-wrap items-center gap-0.5 border-b p-1">
				<ToolbarGroup>
					<ToolbarToggle
						pressed={editor.isActive("bold")}
						onPressedChange={() => editor.chain().focus().toggleBold().run()}
						disabled={disabled}
						tooltip="Bold"
					>
						<Bold className="h-4 w-4" />
					</ToolbarToggle>
					<ToolbarToggle
						pressed={editor.isActive("italic")}
						onPressedChange={() => editor.chain().focus().toggleItalic().run()}
						disabled={disabled}
						tooltip="Italic"
					>
						<Italic className="h-4 w-4" />
					</ToolbarToggle>
					<ToolbarToggle
						pressed={editor.isActive("underline")}
						onPressedChange={() =>
							editor.chain().focus().toggleUnderline().run()
						}
						disabled={disabled}
						tooltip="Underline"
					>
						<UnderlineIcon className="h-4 w-4" />
					</ToolbarToggle>
					<ToolbarToggle
						pressed={editor.isActive("strike")}
						onPressedChange={() => editor.chain().focus().toggleStrike().run()}
						disabled={disabled}
						tooltip="Strikethrough"
					>
						<Strikethrough className="h-4 w-4" />
					</ToolbarToggle>
				</ToolbarGroup>

				<Separator orientation="vertical" className="mx-1 h-6" />

				<ToolbarGroup>
					<ToolbarToggle
						pressed={editor.isActive("heading", { level: 1 })}
						onPressedChange={() =>
							editor.chain().focus().toggleHeading({ level: 1 }).run()
						}
						disabled={disabled}
						tooltip="Heading 1"
					>
						<Heading1 className="h-4 w-4" />
					</ToolbarToggle>
					<ToolbarToggle
						pressed={editor.isActive("heading", { level: 2 })}
						onPressedChange={() =>
							editor.chain().focus().toggleHeading({ level: 2 }).run()
						}
						disabled={disabled}
						tooltip="Heading 2"
					>
						<Heading2 className="h-4 w-4" />
					</ToolbarToggle>
					<ToolbarToggle
						pressed={editor.isActive("heading", { level: 3 })}
						onPressedChange={() =>
							editor.chain().focus().toggleHeading({ level: 3 }).run()
						}
						disabled={disabled}
						tooltip="Heading 3"
					>
						<Heading3 className="h-4 w-4" />
					</ToolbarToggle>
				</ToolbarGroup>

				<Separator orientation="vertical" className="mx-1 h-6" />

				<ToolbarGroup>
					<ToolbarToggle
						pressed={editor.isActive("bulletList")}
						onPressedChange={() =>
							editor.chain().focus().toggleBulletList().run()
						}
						disabled={disabled}
						tooltip="Bullet List"
					>
						<List className="h-4 w-4" />
					</ToolbarToggle>
					<ToolbarToggle
						pressed={editor.isActive("orderedList")}
						onPressedChange={() =>
							editor.chain().focus().toggleOrderedList().run()
						}
						disabled={disabled}
						tooltip="Numbered List"
					>
						<ListOrdered className="h-4 w-4" />
					</ToolbarToggle>
					<ToolbarToggle
						pressed={editor.isActive("blockquote")}
						onPressedChange={() =>
							editor.chain().focus().toggleBlockquote().run()
						}
						disabled={disabled}
						tooltip="Quote"
					>
						<Quote className="h-4 w-4" />
					</ToolbarToggle>
					<ToolbarToggle
						pressed={false}
						onPressedChange={() =>
							editor.chain().focus().setHorizontalRule().run()
						}
						disabled={disabled}
						tooltip="Horizontal Rule"
					>
						<Minus className="h-4 w-4" />
					</ToolbarToggle>
				</ToolbarGroup>

				<Separator orientation="vertical" className="mx-1 h-6" />

				<ToolbarGroup>
					<LinkButton editor={editor} disabled={disabled} />
					{editor.isActive("link") && (
						<ToolbarToggle
							pressed={false}
							onPressedChange={() => editor.chain().focus().unsetLink().run()}
							disabled={disabled}
							tooltip="Remove Link"
						>
							<Unlink className="h-4 w-4" />
						</ToolbarToggle>
					)}
					{enableImages && (
						<ImageButton
							editor={editor}
							disabled={disabled}
							folder={imageFolder}
						/>
					)}
				</ToolbarGroup>

				<div className="flex-1" />

				<ToolbarGroup>
					<ToolbarToggle
						pressed={false}
						onPressedChange={() => editor.chain().focus().undo().run()}
						disabled={disabled || !editor.can().undo()}
						tooltip="Undo"
					>
						<Undo className="h-4 w-4" />
					</ToolbarToggle>
					<ToolbarToggle
						pressed={false}
						onPressedChange={() => editor.chain().focus().redo().run()}
						disabled={disabled || !editor.can().redo()}
						tooltip="Redo"
					>
						<Redo className="h-4 w-4" />
					</ToolbarToggle>
				</ToolbarGroup>
			</div>

			{/* Editor content */}
			{/* biome-ignore lint/a11y/useSemanticElements: Custom rich text editor wrapper requires role="textbox" */}
			<div
				className="p-3 overflow-y-auto"
				style={{ minHeight }}
				onClick={() => editor.chain().focus().run()}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						editor.chain().focus().run();
					}
				}}
				role="textbox"
				tabIndex={0}
				aria-label="Rich text editor"
			>
				<EditorContent editor={editor} />
			</div>
		</div>
	);
}

function ToolbarGroup({ children }: { children: React.ReactNode }) {
	return <div className="flex items-center gap-0.5">{children}</div>;
}

interface ToolbarToggleProps {
	pressed: boolean;
	onPressedChange: () => void;
	disabled?: boolean;
	tooltip?: string;
	children: React.ReactNode;
}

function ToolbarToggle({
	pressed,
	onPressedChange,
	disabled,
	tooltip,
	children,
}: ToolbarToggleProps) {
	return (
		<Toggle
			size="sm"
			pressed={pressed}
			onPressedChange={onPressedChange}
			disabled={disabled}
			aria-label={tooltip}
			className="h-8 w-8 p-0 data-[state=on]:bg-accent"
		>
			{children}
		</Toggle>
	);
}

function LinkButton({
	editor,
	disabled,
}: {
	editor: Editor;
	disabled?: boolean;
}) {
	const [open, setOpen] = React.useState(false);
	const [url, setUrl] = React.useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (url) {
			editor
				.chain()
				.focus()
				.extendMarkRange("link")
				.setLink({ href: url })
				.run();
		}
		setUrl("");
		setOpen(false);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Toggle
					size="sm"
					pressed={editor.isActive("link")}
					disabled={disabled}
					aria-label="Add Link"
					className="h-8 w-8 p-0 data-[state=on]:bg-accent"
				>
					<LinkIcon className="h-4 w-4" />
				</Toggle>
			</PopoverTrigger>
			<PopoverContent className="w-80" align="start">
				<form onSubmit={handleSubmit} className="space-y-3">
					<div className="space-y-1">
						<Label htmlFor="link-url">URL</Label>
						<Input
							id="link-url"
							type="url"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
							placeholder="https://example.com"
						/>
					</div>
					<div className="flex justify-end gap-2">
						<Button
							type="button"
							variant="outline"
							size="sm"
							onClick={() => setOpen(false)}
						>
							Cancel
						</Button>
						<Button type="submit" size="sm">
							Add Link
						</Button>
					</div>
				</form>
			</PopoverContent>
		</Popover>
	);
}

function ImageButton({
	editor,
	disabled,
	folder,
}: {
	editor: Editor;
	disabled?: boolean;
	folder: string;
}) {
	const [open, setOpen] = React.useState(false);
	const [uploading, setUploading] = React.useState(false);
	const [url, setUrl] = React.useState("");
	const fileInputRef = React.useRef<HTMLInputElement>(null);

	const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		// Validate file type
		if (!file.type.startsWith("image/")) {
			return;
		}

		// Validate file size (max 10MB)
		if (file.size > 10 * 1024 * 1024) {
			return;
		}

		try {
			setUploading(true);

			const formData = new FormData();
			formData.append("file", file);
			formData.append("folder", folder);

			const response = await fetch("/api/upload", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.error || "Upload failed");
			}

			const data = await response.json();

			// Insert image into editor
			editor
				.chain()
				.focus()
				.setImage({ src: data.media.url, alt: file.name })
				.run();
			setOpen(false);
		} catch (error) {
			console.error("Image upload failed:", error);
		} finally {
			setUploading(false);
			// Reset file input
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}
		}
	};

	const handleUrlSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (url) {
			editor.chain().focus().setImage({ src: url }).run();
		}
		setUrl("");
		setOpen(false);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Toggle
					size="sm"
					pressed={false}
					disabled={disabled}
					aria-label="Add Image"
					className="h-8 w-8 p-0"
				>
					{uploading ? (
						<Loader2 className="h-4 w-4 animate-spin" />
					) : (
						<ImagePlus className="h-4 w-4" />
					)}
				</Toggle>
			</PopoverTrigger>
			<PopoverContent className="w-80" align="start">
				<div className="space-y-4">
					<div>
						<Label className="text-sm font-medium">Upload Image</Label>
						<p className="text-xs text-muted-foreground mb-2">
							Max 10MB. JPG, PNG, GIF, WebP
						</p>
						<input
							ref={fileInputRef}
							type="file"
							accept="image/*"
							onChange={handleFileSelect}
							disabled={uploading}
							className="block w-full text-sm text-muted-foreground
								file:mr-4 file:py-2 file:px-4
								file:rounded-md file:border-0
								file:text-sm file:font-medium
								file:bg-primary file:text-primary-foreground
								hover:file:bg-primary/90
								file:cursor-pointer cursor-pointer
								disabled:opacity-50 disabled:cursor-not-allowed"
						/>
					</div>

					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-popover px-2 text-muted-foreground">
								Or enter URL
							</span>
						</div>
					</div>

					<form onSubmit={handleUrlSubmit} className="space-y-3">
						<div className="space-y-1">
							<Label htmlFor="image-url">Image URL</Label>
							<Input
								id="image-url"
								type="url"
								value={url}
								onChange={(e) => setUrl(e.target.value)}
								placeholder="https://example.com/image.jpg"
								disabled={uploading}
							/>
						</div>
						<div className="flex justify-end gap-2">
							<Button
								type="button"
								variant="outline"
								size="sm"
								onClick={() => setOpen(false)}
								disabled={uploading}
							>
								Cancel
							</Button>
							<Button type="submit" size="sm" disabled={uploading || !url}>
								Add Image
							</Button>
						</div>
					</form>
				</div>
			</PopoverContent>
		</Popover>
	);
}
