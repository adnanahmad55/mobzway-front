import UKHomeClient from "./UKHomeClient"; // 👈 Client Component Import

export const metadata = {
    // 1. Title: Targeted for UK Market
    title: "Best Gaming Software Development Company in UK | Mobzway",
    
    // 2. Description: Mentioning UK & Compliance (Critical for UK SEO)
    description: "Mobzway is a leading gaming software development company in the UK. We provide UKGC-compliant custom poker, casino, sports betting, and white-label iGaming software solutions in London and across the UK.",
    
    // 3. Keywords: UK Specific (UKGC, London, etc.)
    keywords: "Gaming Software Development UK, Casino Software UK, UKGC Compliant Software, iGaming Providers London, Sportsbook Software UK, White Label Casino UK",
    
    openGraph: {
        title: "Premier Gaming Software Development Company in UK | Mobzway",
        description: "Mobzway offers secure and scalable iGaming software solutions in the UK. Custom Poker, Casino, and Sportsbook platforms tailored for the British market.",
        url: "https://www.mobzway.com/uk", // ✅ Fixed URL
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/homepage_banner.avif",
                width: 815,
                height: 821,
                alt: "Mobzway Gaming Software UK",
                type: "image/jpg",
            },
        ],
        locale: "en_GB", // ✅ Great Britain English (Standard for UK)
        type: "website",
    },
    
    twitter: {
        card: "summary_large_image",
        title: "Best Gaming Software Development Company in UK",
        description: "Leading iGaming software provider in London, UK. Secure and UKGC ready platforms.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com/assets/images/homepage_banner.avif"],
    },
    
    alternates: {
        // 🚨 4. CANONICAL URL FIXED (Very Important)
        canonical: "https://www.mobzway.com/uk",
        languages: {
            "en-uk": "https://www.mobzway.com/uk",
        },
    },
};

export default function UKHomePage() {
    return <UKHomeClient />;
}