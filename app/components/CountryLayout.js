// components/CountryLayout.js
"use client"; // 👈 Ye zaroori hai URL check karne ke liye

import { usePathname } from "next/navigation";
import { LanguageProvider } from "./LanguageProvider";
import Header from "./Header";
import Footer from "./Footer";

export default function CountryLayout({ children }) {
  const pathname = usePathname() || ""; // Current URL path

  // 🌍 Country Logic based on URL
  let currentCountry = "global"; // Default

  if (pathname.includes("/in")) {
    currentCountry = "in";
  } else if (pathname.includes("/bd")) {
    currentCountry = "bd";
  } else if (pathname.includes("/uk")) {
    currentCountry = "uk";
  } else if (pathname.includes("/eu")) {
    currentCountry = "eu";
  } else if (pathname.includes("/asia")) {
    currentCountry = "asia";
  } else if (pathname.includes("/af")) {
    currentCountry = "af";
  } else if (pathname.includes("/us")) {
    currentCountry = "us";
  }

  return (
    <LanguageProvider defaultLang={currentCountry}>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
}