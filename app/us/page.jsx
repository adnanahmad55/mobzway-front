import USHomeClient from "./USHomeClient"; // 👈 Client Component Import kiya

export const metadata = {
    title: "Mobzway - Online Gaming Software Development Company",
    description: "Mobzway is one of the top gaming software development company in India. We are custom poker, casino, rummy, Ludo, and Teen Patti gaming software providers.",
    keywords: "Gaming Software Development, Gaming Software Developers, Gaming Software Providers",
    openGraph: {
        title: "Mobzway - Online Gaming Software Development Company | Gaming Software Provider",
        description: "Mobzway is one of the top gaming software development company in India. We are custom poker, casino, rummy, Ludo, and Teen Patti gaming software providers.",
        url: "https://www.mobzway.com/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/homepage_banner.avif",
                width: 815,
                height: 821,
                alt: "mobzway",
                type: "image/jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobzway - Online Gaming Software Development Company | Gaming Software Provider",
        description: "Mobzway is one of the top gaming software development company in India. We are custom poker, casino, rummy, Ludo, and Teen Patti gaming software providers.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com/assets/images/homepage_banner.avif"],
    },
    alternates: {
        canonical: "https://www.mobzway.com/",
    },
};

export default function USHome() {
    return (
        <>
            <USHomeClient /> {/* 👈 Logic ab yahan chalega */}
        </>
    );
}