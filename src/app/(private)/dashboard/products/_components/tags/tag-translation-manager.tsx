"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Globe } from "lucide-react";
import { FormDescription } from "@/components/ui/form";
import { ProductTagTranslation } from "@/app/generated/prisma/client";

interface TagTranslationManagerProps {
  translations: ProductTagTranslation[];
  onChange: (translations: Array<{ id?: string; language: string; name: string }>) => void;
}

// Available languages in the system - could be fetched from an API or config
const AVAILABLE_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "bg", name: "Bulgarian" }
];

export default function TagTranslationManager({ 
  translations = [], 
  onChange 
}: TagTranslationManagerProps) {
  const [activeTranslations, setActiveTranslations] = useState<
    Array<{ id?: string; language: string; name: string }>
  >(translations);
  
  const [newTranslation, setNewTranslation] = useState({ language: "", name: "" });
  const [showAddForm, setShowAddForm] = useState(false);

  // Get languages that are already in use
  const usedLanguages = activeTranslations.map(t => t.language);
  
  // Available languages for new translations
  const availableLanguages = AVAILABLE_LANGUAGES.filter(
    lang => !usedLanguages.includes(lang.code)
  );

  const handleAddTranslation = () => {
    if (!newTranslation.language || !newTranslation.name.trim()) return;
    
    const updated = [...activeTranslations, newTranslation];
    setActiveTranslations(updated);
    onChange(updated);
    
    // Reset form
    setNewTranslation({ language: "", name: "" });
    setShowAddForm(false);
  };

  const handleRemoveTranslation = (index: number) => {
    const updated = activeTranslations.filter((_, i) => i !== index);
    setActiveTranslations(updated);
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label className="text-base flex items-center gap-2">
          <Globe className="h-4 w-4" />
          Translations
        </Label>
        
        {!showAddForm && availableLanguages.length > 0 && (
          <Button 
            type="button" 
            variant="outline" 
            size="sm"
            onClick={() => setShowAddForm(true)}
          >
            <Plus className="h-3.5 w-3.5 mr-1" />
            Add Translation
          </Button>
        )}
      </div>
      
      {activeTranslations.length > 0 ? (
        <div className="space-y-2">
          {activeTranslations.map((translation, index) => (
            <div 
              key={translation.id || `new-${index}`} 
              className="flex items-center gap-2 bg-muted/50 p-2 rounded-md"
            >
              <Badge variant="outline" className="min-w-16 justify-center">
                {translation.language}
              </Badge>
              <span className="flex-grow font-medium text-sm">{translation.name}</span>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => handleRemoveTranslation(index)}
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
          No translations added yet. Translations allow your tags to be displayed in multiple languages.
        </div>
      )}
      
      {showAddForm && (
        <div className="border p-3 rounded-md space-y-3">
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select
              value={newTranslation.language}
              onValueChange={(value) => 
                setNewTranslation({ ...newTranslation, language: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {availableLanguages.map(lang => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name} ({lang.code})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="translatedName">Translated Name</Label>
            <Input
              id="translatedName"
              value={newTranslation.name}
              onChange={(e) => 
                setNewTranslation({ ...newTranslation, name: e.target.value })
              }
              placeholder="Tag name in selected language"
            />
          </div>
          
          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setShowAddForm(false);
                setNewTranslation({ language: "", name: "" });
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={handleAddTranslation}
              disabled={!newTranslation.language || !newTranslation.name.trim()}
            >
              Add
            </Button>
          </div>
        </div>
      )}
      
      <FormDescription>
        Adding translations will help users see tag names in their preferred language.
      </FormDescription>
    </div>
  );
}