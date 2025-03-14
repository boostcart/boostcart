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
    >
      <SelectTrigger
        className={`
          outline-hidden ${!pathname.includes('dashboard') && 'lg:text-white lg:bg-transparent lg:border-0'}  
        `}
        disabled={isPending}
      >
        {pathname.includes("dashboard") ? (
          <SelectValue />
        ) : (
          <div>
            <div className="lg:hidden">
              <SelectValue />
            </div>

            <span className="hidden p-2 text-xl uppercase opacity-0 lg:opacity-100 lg:block lg:hover:opacity-70 transition">
              <Globe />
            </span>
          </div>
        )}
      </SelectTrigger>
      <SelectContent>
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