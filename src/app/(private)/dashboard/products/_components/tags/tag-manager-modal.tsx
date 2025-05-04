"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ProductTag } from "@/types";
import { Tag, Settings } from "lucide-react";
import TagManagement from "./tag-management";

interface TagManagerModalProps {
  tags: ProductTag[];
  onTagsChange?: (tags: ProductTag[]) => void;
  triggerLabel?: string;
}

export default function TagManagerModal({ 
  tags, 
  onTagsChange,
  triggerLabel = "Manage Tags" 
}: TagManagerModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Tag className="h-4 w-4" />
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Tag Management
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <TagManagement 
            tags={tags} 
            onTagsChange={(updatedTags) => {
              if (onTagsChange) {
                onTagsChange(updatedTags);
              }
            }} 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}