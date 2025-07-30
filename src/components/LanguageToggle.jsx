import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setLang(lng);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
   <div className="fixed top-3.5 right-20 z-50 flex border rounded-full overflow-hidden">
      <button
        onClick={() => changeLanguage("en")}
        className={cn(
          "px-3 py-1 text-sm font-medium transition-colors",
          lang === "en" ? "bg-primary text-white" : "bg-muted text-foreground"
        )}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className={cn(
          "px-3 py-1 text-sm font-medium transition-colors",
          lang === "es" ? "bg-primary text-white" : "bg-muted text-foreground"
        )}
      >
        Español
      </button>
    </div>
  );
};
