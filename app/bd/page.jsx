import BDHomeClient from "./BDHomeClient";

export const metadata = {
  // ✅ 1. Title Change: Bangladesh Specific
  title: "Best Game Development Company in Bangladesh | Mobzway",
  
  // ✅ 2. Description Change: Targeted for BD Audience
  description: "Mobzway is a top gaming software development company in Bangladesh. We provide custom Poker, Casino, Rummy, Ludo, and Teen Patti game development services tailored for the BD market.",
  
  // ✅ 3. Keywords: Localized
  keywords: "Game Development Bangladesh, Ludo Game Developer BD, Casino Software Bangladesh, Rummy Game Development BD, Poker Software Provider Bangladesh",
  
  openGraph: {
    title: "Best Game Development Company in Bangladesh | Mobzway",
    description: "Looking for game developers in Bangladesh? Mobzway offers certified Casino, Ludo, and Rummy game software solutions with local payment integration.",
    url: "https://www.mobzway.com/bd", // ✅ Fixed URL
    siteName: "Mobzway Technologies",
    images: [
      {
        url: "https://www.mobzway.com/assets/images/homepage_banner.avif", // Agar koi BD specific image hai to wo lagayein
        width: 815,
        height: 821,
        alt: "Game Development Company Bangladesh",
        type: "image/jpg",
      },
    ],
    locale: "en_US", // Ya 'en_BD' agar supported ho, par en_US safe hai
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Game Development Services in Bangladesh | Mobzway",
    description: "Top-rated Casino and Ludo game development company serving clients in Bangladesh.",
    site: "@mobzway",
    creator: "@mobzway",
    images: ["https://www.mobzway.com/assets/images/homepage_banner.avif"],
  },
  
  alternates: {
    // 🚨 4. MOST IMPORTANT: Canonical URL must be this page, NOT home page
    canonical: "https://www.mobzway.com/bd",
    languages: {
        "en-BD": "https://www.mobzway.com/bd",
    },
  },
};

export default function BDHome() {
  return (
    <>
      <BDHomeClient />
    </>
  );
}