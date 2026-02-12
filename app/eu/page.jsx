import EuContent from "./EuContent"; // Client component

export const metadata = {
    title: "Mobzway - Online Gaming Software Development Company in Europe",
    description: "Mobzway provides top-tier gaming software development services across Europe. We specialize in custom poker, casino, slots, and iGaming platforms compliant with European standards.",
    keywords: "Gaming Software Development Europe, Casino Software Europe, iGaming Providers EU, Custom Slot Development Europe",
    openGraph: {
        title: "Mobzway - Online Gaming Software Development Company Europe",
        description: "Mobzway provides top-tier gaming software development services across Europe. Custom poker, casino, and iGaming platforms.",
        url: "https://www.mobzway.com/eu", // ✅ Updated URL
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/homepage_banner.avif",
                width: 815,
                height: 821,
                alt: "Mobzway Gaming Software Europe",
                type: "image/jpg",
            },
        ],
        locale: "en_GB", // ✅ Europe ke liye en_GB ya en_IE better hai
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobzway - Online Gaming Software Development Company Europe",
        description: "Leading gaming software development company serving the European market.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com/assets/images/homepage_banner.avif"],
    },
    alternates: {
        canonical: "https://www.mobzway.com/eu",
    },
};

export default function EuHomePage() {
    // Ye generic '/eu' page hai, isliye hum koi specific countryCode pass nahi kar rahe.
    // EuContent component apne aap IP detect karke user ki country dikhayega.
    return <EuContent />;
}