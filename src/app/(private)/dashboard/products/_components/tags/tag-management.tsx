"use client";

import { useState, useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Edit, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FormLabel } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form";
import { ProductTag } from "@/types";
import { 
  createProductTag, 
  deleteProductTag, 
  updateProductTag, 
  updateProductTagTranslations,
  getProductTags
} from "@/data/product";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import TagTranslationManager from "./tag-translation-manager";
import { Separator } from "@/components/ui/separator";

interface TagManagementProps {
  tags: ProductTag[];
  onTagsChange?: (tags: ProductTag[]) => void;
}

export default function TagManagement({ tags, onTagsChange }: TagManagementProps) {
  const [isPending, startTransition] = useTransition();
  const [showNewTagDialog, setShowNewTagDialog] = useState(false);
  const [showEditTagDialog, setShowEditTagDialog] = useState(false);
  const [showDeleteTagDialog, setShowDeleteTagDialog] = useState(false);
  const [tagToDelete, setTagToDelete] = useState<ProductTag | null>(null);
  const [newTagName, setNewTagName] = useState("");
  const [newTagSlug, setNewTagSlug] = useState("");
  const [newTagTranslations, setNewTagTranslations] = useState<Array<{ language: string; name: string; id?: string }>>([]);
  const [editingTag, setEditingTag] = useState<ProductTag | null>(null);
  const [editTagName, setEditTagName] = useState("");
  const [editTagSlug, setEditTagSlug] = useState("");
  const [editTagTranslations, setEditTagTranslations] = useState<Array<{ language: string; name: string; id?: string }>>([]);
  const router = useRouter();
  const [localTags, setLocalTags] = useState<ProductTag[]>(tags);

  // Helper function to generate slugs from names
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/_/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "")
      .trim();
  };

  // Fetch tags on initial load
  useEffect(() => {
    async function loadTags() {
      try {
        const fetchedTags = await getProductTags();
        if (fetchedTags && Array.isArray(fetchedTags) && fetchedTags.length > 0) {
          setLocalTags(fetchedTags as ProductTag[]);
          // Notify parent component of tags if callback exists
          if (onTagsChange) {
            onTagsChange(fetchedTags as ProductTag[]);
          }
        }
      } catch (error) {
        console.error("Failed to load product tags:", error);
      }
    }
    
    // Only fetch if we don't already have tags
    if (localTags.length === 0) {
      loadTags();
    }
  });

  // Helper function for handling tag creation
  const handleCreateTag = async () => {
    // Generate slug from tag name if not provided
    const slug = newTagSlug || generateSlug(newTagName);

    startTransition(async () => {
      const result = await createProductTag({ name: newTagName, slug });

      if (result.error) {
        toast.error(
          result.error === "tag_already_exists"
            ? "A tag with this name or slug already exists"
            : result.error === "not_logged_in"
              ? "You must be logged in"
              : result.error === "unauthorized"
                ? "You are not authorized to create tags"
                : "Something went wrong, please try again"
        );
        return;
      }

      // Now save translations if there are any
      if (newTagTranslations.length > 0 && result.tag) {
        const translationResult = await updateProductTagTranslations({
          tagId: result.tag.id,
          translations: newTagTranslations
        });

        if (translationResult.error) {
          toast.error("Failed to save translations, but tag was created");
        } else if (translationResult.tag) {
          result.tag = translationResult.tag; // Use the updated tag with translations
        }
      }

      toast.success("Tag created successfully");
      
      // Fetch the latest tags after creating a new one
      const latestTags = await getProductTags();
      setLocalTags(latestTags as ProductTag[]);
      
      setShowNewTagDialog(false);
      setNewTagName("");
      setNewTagSlug("");
      setNewTagTranslations([]);
      
      if (onTagsChange) {
        onTagsChange(latestTags as ProductTag[]);
      }
      
      router.refresh();
    });
  };

  // Helper function for handling tag editing
  const handleEditTag = () => {
    if (!editingTag) return;
    
    const slug = editTagSlug || generateSlug(editTagName);
    
    startTransition(async () => {
      const result = await updateProductTag({
        id: editingTag.id,
        name: editTagName,
        slug
      });

      if (result.error) {
        toast.error(
          result.error === "tag_already_exists"
            ? "A tag with this name or slug already exists"
            : result.error === "tag_not_found"
              ? "Tag not found"
              : result.error === "not_logged_in"
                ? "You must be logged in"
                : result.error === "unauthorized"
                  ? "You are not authorized to edit tags"
                  : "Something went wrong, please try again"
        );
        return;
      }

      // Now save translations if there are any changes
      const translationResult = await updateProductTagTranslations({
        tagId: editingTag.id,
        translations: editTagTranslations
      });

      if (translationResult.error) {
        toast.error("Failed to save translations, but tag was updated");
      } else if (translationResult.tag) {
        result.tag = translationResult.tag; // Use the updated tag with translations
      }

      toast.success("Tag updated successfully");
      
      // Fetch the latest tags after editing
      const latestTags = await getProductTags();
      setLocalTags(latestTags as ProductTag[]);
      
      setShowEditTagDialog(false);
      setEditingTag(null);
      setEditTagName("");
      setEditTagSlug("");
      setEditTagTranslations([]);
      
      if (onTagsChange) {
        onTagsChange(latestTags as ProductTag[]);
      }
      
      router.refresh();
    });
  };

  // Set up editing for a specific tag
  const setupTagEditing = (tag: ProductTag) => {
    setEditingTag(tag);
    setEditTagName(tag.name);
    setEditTagSlug(tag.slug);
    
    // Map existing translations to the format expected by the translation manager
    const translations = tag.translations && tag.translations.length > 0
      ? tag.translations.map(t => ({
          id: t.id,
          language: t.language,
          name: t.name
        }))
      : [];
    
    setEditTagTranslations(translations);
    setShowEditTagDialog(true);
  };

  // Set up deletion for a specific tag
  const setupTagDeletion = (tag: ProductTag) => {
    setTagToDelete(tag);
    setShowDeleteTagDialog(true);
  };

  // Helper function for handling tag deletion
  const handleDeleteTag = async () => {
    if (!tagToDelete) return;
    
    startTransition(async () => {
      const result = await deleteProductTag(tagToDelete.id);

      if (result.error) {
        toast.error(
          result.error === "tag_not_found"
            ? "Tag not found"
            : result.error === "not_logged_in"
              ? "You must be logged in"
              : result.error === "unauthorized"
                ? "You are not authorized to delete tags"
                : "Something went wrong, please try again"
        );
        return;
      }

      toast.success("Tag deleted successfully");
      
      // Fetch the latest tags after deleting
      const latestTags = await getProductTags();
      setLocalTags(latestTags as ProductTag[]);
      
      setShowDeleteTagDialog(false);
      setTagToDelete(null);
      
      if (onTagsChange) {
        onTagsChange(latestTags as ProductTag[]);
      }
      
      router.refresh();
    });
  };

  // Define table columns for the tags
  const columns: ColumnDef<ProductTag>[] = [
    {
      accessorKey: "name",
      header: "Tag Name",
      cell: ({ row }) => <span className="font-medium">{row.original.name}</span>,
    },
    {
      accessorKey: "slug",
      header: "Slug",
      cell: ({ row }) => (
        <span className="text-sm text-muted-foreground">{row.original.slug}</span>
      ),
    },
    {
      id: "translations",
      header: "Translations",
      cell: ({ row }) => (
        <div className="flex flex-wrap gap-1">
          {row.original.translations && row.original.translations.length > 0 ? (
            row.original.translations.map(t => (
              <Badge key={t.id} variant="outline" className="text-xs">
                {t.language}: {t.name}
              </Badge>
            ))
          ) : (
            <span className="text-sm text-muted-foreground">No translations</span>
          )}
        </div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setupTagEditing(row.original)}
              title="Edit tag"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setupTagDeletion(row.original)}
              className="text-destructive hover:text-destructive/80"
              title="Delete tag"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Button 
          type="button" 
          size="sm" 
          onClick={() => setShowNewTagDialog(true)}
          disabled={isPending}
        >
          <Plus className="h-4 w-4 mr-2" />
          New Tag
        </Button>
      </div>
      
      {localTags.length > 0 ? (
        <div className="border rounded-md p-4">
          <DataTable columns={columns} data={localTags} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-40 border rounded-md">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">No tags available</p>
            <Button
              onClick={() => setShowNewTagDialog(true)}
              disabled={isPending}
            >
              <Plus className="h-4 w-4 mr-2" />
              Create your first tag
            </Button>
          </div>
        </div>
      )}

      {/* Dialog for creating new tag */}
      <AlertDialog open={showNewTagDialog} onOpenChange={setShowNewTagDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create New Tag</AlertDialogTitle>
            <AlertDialogDescription>
              Add a new tag for categorizing products
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <FormLabel htmlFor="newTagName">Tag Name</FormLabel>
              <Input
                id="newTagName"
                placeholder="e.g., Summer Collection"
                value={newTagName}
                onChange={(e) => {
                  setNewTagName(e.target.value);
                  // Generate slug automatically
                  const slug = generateSlug(e.target.value);
                  setNewTagSlug(slug);
                }}
              />
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="newTagSlug">Tag Slug</FormLabel>
              <Input
                id="newTagSlug"
                placeholder="e.g., summer-collection"
                value={newTagSlug}
                onChange={(e) => setNewTagSlug(e.target.value)}
              />
              <FormDescription>
                URL-friendly identifier. Generated automatically, but you can edit it.
              </FormDescription>
            </div>
            
            <Separator className="my-4" />
            
            <TagTranslationManager
              translations={[]}
              onChange={setNewTagTranslations}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setNewTagName("");
                setNewTagSlug("");
                setNewTagTranslations([]);
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleCreateTag}
              disabled={!newTagName.trim() || !newTagSlug.trim() || isPending}
            >
              {isPending ? "Creating..." : "Create Tag"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Dialog for editing tag */}
      <AlertDialog open={showEditTagDialog} onOpenChange={setShowEditTagDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Edit Tag</AlertDialogTitle>
            <AlertDialogDescription>
              Modify the details of your product tag
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <FormLabel htmlFor="editTagName">Tag Name</FormLabel>
              <Input
                id="editTagName"
                placeholder="e.g., Summer Collection"
                value={editTagName}
                onChange={(e) => {
                  setEditTagName(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <FormLabel htmlFor="editTagSlug">Tag Slug</FormLabel>
              <Input
                id="editTagSlug"
                placeholder="e.g., summer-collection"
                value={editTagSlug}
                onChange={(e) => setEditTagSlug(e.target.value)}
              />
              <FormDescription>
                URL-friendly identifier for the tag.
              </FormDescription>
            </div>
            
            <Separator className="my-4" />
            
            <TagTranslationManager
              translations={editingTag?.translations || []}
              onChange={setEditTagTranslations}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setEditingTag(null);
                setEditTagName("");
                setEditTagSlug("");
                setEditTagTranslations([]);
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleEditTag}
              disabled={!editTagName.trim() || !editTagSlug.trim() || isPending}
            >
              {isPending ? "Saving..." : "Save Changes"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Dialog for deleting tag */}
      <AlertDialog open={showDeleteTagDialog} onOpenChange={setShowDeleteTagDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Tag</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete the tag &quot;{tagToDelete?.name}&quot;?
              {(tagToDelete?.products?.length ?? 0) > 0 && (
                <p className="mt-2 text-destructive font-medium">
                  Warning: This tag is used by {tagToDelete?.products?.length} products. 
                  Deleting it will remove it from all products.
                </p>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setTagToDelete(null);
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteTag}
              disabled={isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isPending ? "Deleting..." : "Delete Tag"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}