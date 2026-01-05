"use client";

import {
	closestCenter,
	DndContext,
	type DragEndEvent,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import {
	arrayMove,
	rectSortingStrategy,
	SortableContext,
	sortableKeyboardCoordinates,
	useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FileVideo, GripVertical, Play, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SortableMediaItem {
	id: string;
	url: string;
	type: "image" | "video";
	altText?: string;
}

interface SortableMediaGridProps {
	items: SortableMediaItem[];
	onReorder: (items: SortableMediaItem[]) => void;
	onRemove?: (id: string) => void;
	onItemClick?: (item: SortableMediaItem) => void;
	disabled?: boolean;
	className?: string;
	columns?: 2 | 3 | 4 | 5 | 6;
}

export function SortableMediaGrid({
	items,
	onReorder,
	onRemove,
	onItemClick,
	disabled = false,
	className,
	columns = 4,
}: SortableMediaGridProps) {
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8,
			},
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (over && active.id !== over.id) {
			const oldIndex = items.findIndex((item) => item.id === active.id);
			const newIndex = items.findIndex((item) => item.id === over.id);
			const newItems = arrayMove(items, oldIndex, newIndex);
			onReorder(newItems);
		}
	};

	const gridCols = {
		2: "grid-cols-2",
		3: "grid-cols-2 sm:grid-cols-3",
		4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
		5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
		6: "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6",
	};

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<SortableContext
				items={items.map((i) => i.id)}
				strategy={rectSortingStrategy}
			>
				<div className={cn("grid gap-3", gridCols[columns], className)}>
					{items.map((item, index) => (
						<SortableMediaItem
							key={item.id}
							item={item}
							index={index}
							disabled={disabled}
							onRemove={onRemove}
							onClick={onItemClick}
						/>
					))}
				</div>
			</SortableContext>
		</DndContext>
	);
}

interface SortableMediaItemProps {
	item: SortableMediaItem;
	index: number;
	disabled?: boolean;
	onRemove?: (id: string) => void;
	onClick?: (item: SortableMediaItem) => void;
}

function SortableMediaItem({
	item,
	index,
	disabled,
	onRemove,
	onClick,
}: SortableMediaItemProps) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: item.id, disabled });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		// biome-ignore lint/a11y/useSemanticElements: It must be a div because there's a button inside and it causes a hydration error
		<div
			role="button"
			ref={setNodeRef}
			style={style}
			className={cn(
				"group relative aspect-square rounded-lg border bg-muted overflow-hidden",
				isDragging && "z-50 shadow-lg ring-2 ring-primary",
				!disabled && "cursor-grab active:cursor-grabbing",
			)}
			onClick={() => onClick?.(item)}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onClick?.(item);
				}
			}}
			tabIndex={0}
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
					src={item.url}
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

			{/* Drag handle overlay */}
			{!disabled && (
				<div
					{...attributes}
					{...listeners}
					className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-colors opacity-0 group-hover:opacity-100"
				>
					<GripVertical className="h-6 w-6 text-white drop-shadow-md" />
				</div>
			)}

			{/* Remove button */}
			{onRemove && !disabled && (
				<Button
					type="button"
					variant="destructive"
					size="icon"
					className="absolute top-1.5 right-1.5 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
					onClick={(e) => {
						e.stopPropagation();
						onRemove(item.id);
					}}
				>
					<X className="h-3 w-3" />
				</Button>
			)}

			{/* Order number */}
			<div className="absolute bottom-1.5 right-1.5 h-5 w-5 rounded-full bg-black/50 text-white text-xs flex items-center justify-center">
				{index + 1}
			</div>
		</div>
	);
}
