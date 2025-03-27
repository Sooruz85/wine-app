"use client";
import { createContext, useContext, useState, useEffect } from "react";
import fr from "@/locales/fr.json";
import en from "@/locales/en.json";
import de from "@/locales/de.json";
import jp from "@/locales/jp.json";
import cn from "@/locales/cn.json";

const translations = { fr, en, de, jp, cn };

const LangContext = createContext();

export function LangProvider({ children }) {
  const [locale, setLocale] = useState("fr"); // 🇫🇷 Par défaut

  useEffect(() => {
    const savedLocale = localStorage.getItem("lang") || "fr";
    setLocale(savedLocale);
  }, []);

  const changeLocale = (lang) => {
    setLocale(lang);
    localStorage.setItem("lang", lang);
    window.location.reload(); // 🔄 Rafraîchir pour recharger les traductions
  };

  const t = (key) => translations[locale][key] || key;

  return (
    <LangContext.Provider value={{ locale, changeLocale, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
