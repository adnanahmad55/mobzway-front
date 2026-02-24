import EuContent from "./EuContent"; // Client component

export const metadata = {
    // 1. Title: Professional & Authority wala
    title: "Best Gaming Software Development Company in Europe | Mobzway",
    
    // 2. Description: Trust & Compliance focus (Europe me ye zaruri hai)
    description: "Mobzway offers certified iGaming software solutions across Europe. We provide GDPR-compliant Poker, Casino, Sportsbook, and Lottery platforms tailored for EU markets like UK, Malta, and Germany.",
    
    // 3. Keywords: High-value keywords added
    keywords: "iGaming Software Europe, Casino Game Development EU, White Label Casino Europe, MGA Compliant Software, UKGC Standard Games, Poker Software Providers Europe",
    
    openGraph: {
        title: "Mobzway - Premier iGaming Software Provider in Europe",
        description: "Standard-compliant custom gaming software including Poker, Casino, and Sportsbook tailored for the European market.",
        url: "https://www.mobzway.com/eu", // ✅ Fixed URL
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/homepage_banner.avif",
                width: 815,
                height: 821,
                alt: "Mobzway iGaming Solutions Europe",
                type: "image/jpg",
            },
        ],
        locale: "en_ie", 
        type: "website",
    },
    
    twitter: {
        card: "summary_large_image",
        title: "Best Gaming Software Development Company in Europe",
        description: "Delivering secure and scalable iGaming platforms for the European market.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com/assets/images/homepage_banner.avif"],
    },
    
    alternates: {
        canonical: "https://www.mobzway.com/eu",
      
    },
};

export default function EuHomePage() {
   
    return <EuContent />;
}