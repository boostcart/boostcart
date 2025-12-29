"use client";

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
	Italic,
	Link as LinkIcon,
	List,
	ListOrdered,
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
}

export function RichTextEditor({
	value = "",
	onChange,
	placeholder = "Start writing...",
	disabled = false,
	className,
	minHeight = "200px",
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
