import AfHomeClient from "./AfHomeClient"; // 👈 Client Component Import

export const metadata = {
    title: "Mobzway - Online Gaming Software Development Company in Africa",
    description: "Mobzway is a leading gaming software development company in Africa. We provide custom poker, casino, sports betting, and lottery software solutions across South Africa, Nigeria, Kenya, and other African markets.",
    keywords: "Gaming Software Development Africa, Casino Software South Africa, Sports Betting Software Nigeria, iGaming Providers Africa, Ludo Game Development Kenya",
    openGraph: {
        title: "Mobzway - Online Gaming Software Development Company Africa",
        description: "Mobzway is a leading gaming software development company in Africa. We provide custom poker, casino, sports betting, and lottery software solutions.",
        url: "https://www.mobzway.com/af",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/homepage_banner.avif",
                width: 815,
                height: 821,
                alt: "Mobzway Gaming Software Africa",
                type: "image/jpg",
            },
        ],
        locale: "en_ZA", // ✅ South Africa / English (Standard for Africa region)
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobzway - Online Gaming Software Development Company Africa",
        description: "Leading gaming software development company serving the African market.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com/assets/images/homepage_banner.avif"],
    },
    alternates: {
        canonical: "https://www.mobzway.com/af",
    },
};

export default function AfHomePage() {
    // Ye generic '/af' page hai.
    // AfHomeClient apne aap IP detect karke user ki country dikhayega.
    return <AfHomeClient />;
}