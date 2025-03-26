"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useTransition } from "react";

import { Globe } from "lucide-react";
import { Locale } from "@/i18n/config";
import ReactCountryFlag from "react-country-flag";
import { setUserLocale } from "@/server/locale";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const [value, setValue] = useState<string>(locale);
  const [isPending, startTransition] = useTransition();

  type Language = {
    code: string;
    label: string;
    flag: string;
  }

  const languages = [
    { code: "en", label: "English", flag: "GB" },
    { code: "bg", label: "Български", flag: "BG" }
  ] as Language[];

  const handleLocaleChange = (value: string) => {
    const nextLocale = value as Locale;

    startTransition(() => {
      setUserLocale(nextLocale);
      setValue(nextLocale);
    });

    console.log("Locale changed to", nextLocale);
  }

  return (
    <Select
      defaultValue={value}
      onValueChange={handleLocaleChange}
      disabled={isPending}
    >
      <SelectTrigger
        className={`
          ${pathname.includes("/dashboard") && "bg-transparent border-0 outline-none w-fit cursor-pointer"}
        `}
      >
        {pathname.includes("/dashboard") ? (
          <Globe className="mr-1" />
        ) : (
          <SelectValue />
        )}
      </SelectTrigger>
      <SelectContent align={pathname.includes("/dashboard") ? "end" : "start"}>
        {languages.map((language, index) => (
          <SelectItem key={index} value={language.code}>
            <div className="flex items-center space-x-2">
              <ReactCountryFlag
                svg
                countryCode={language.flag || "GB"}
                aria-label={language.label}
                className="text-xl rounded-full"
              />

              <span>{language.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select >
  )
}

export default LanguageSwitcher;