"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ProductTag } from "@/types";
import { UseFormReturn } from "react-hook-form";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import TagManagerModal from "./tag-manager-modal";
import { useState } from "react";

interface TagSelectorProps {
  form: UseFormReturn<any>;
  tags: ProductTag[];
  disabled?: boolean;
}

export default function TagSelector({ form, tags, disabled = false }: TagSelectorProps) {
  const [localTags, setLocalTags] = useState<ProductTag[]>(tags);

  // Handle tags being updated from the tag manager
  const handleTagsChange = (updatedTags: ProductTag[]) => {
    setLocalTags(updatedTags);
    
    // Make sure we remove any selected tags that no longer exist
    const currentSelectedTags = form.getValues("tagIds") || [];
    const validTagIds = updatedTags.map(tag => tag.id);
    const validSelectedTags = currentSelectedTags.filter((id: string) => 
      validTagIds.includes(id)
    );
    
    if (validSelectedTags.length !== currentSelectedTags.length) {
      form.setValue("tagIds", validSelectedTags);
    }
  };
  
  return (
    <FormField
      control={form.control}
      name="tagIds"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-wrap gap-2 mb-3">
            {field.value?.map((tagId: string) => {
              const tag = localTags.find((t) => t.id === tagId);
              if (!tag) return null;
              return (
                <Badge key={tag.id} variant="secondary" className="px-3 py-1">
                  {tag.name}
                  <X 
                    className="h-3 w-3 ml-2 cursor-pointer" 
                    onClick={() => {
                      const updatedTags = field.value?.filter((id: string) => id !== tag.id) || [];
                      form.setValue("tagIds", updatedTags);
                    }}
                  />
                </Badge>
              );
            })}
            {!field.value?.length && (
              <p className="text-sm text-muted-foreground">No tags selected</p>
            )}
          </div>
          
          <div className="mb-3 flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between",
                      "text-muted-foreground"
                    )}
                    disabled={disabled}
                  >
                    Select tags
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search tag..." />
                  <CommandList>
                    <CommandEmpty>No tags found</CommandEmpty>
                    <CommandGroup>
                      {localTags.map((tag) => (
                        <CommandItem
                          value={tag.name}
                          key={tag.id}
                          onSelect={() => {
                            const current = field.value || [];
                            const updated = current.includes(tag.id)
                              ? current.filter((id: string) => id !== tag.id)
                              : [...current, tag.id];
                            form.setValue("tagIds", updated);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              field.value?.includes(tag.id)
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {tag.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            
            <TagManagerModal 
              tags={localTags}
              onTagsChange={handleTagsChange}
              triggerLabel="Manage"
            />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}