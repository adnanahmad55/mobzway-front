import AfHomeClient from "./AfHomeClient"; // 👈 Client Component Import

export const metadata = {
    title: "Mobzway - Online Gaming Software Development Company Africa",
    description: "Mobzway is one of the top gaming software development company in Africa. We provide custom poker, casino, rummy, Ludo, and Teen Patti gaming software solutions.",
    keywords: "Gaming Software Development Africa, Gaming Software Developers, Gaming Software Providers",
    openGraph: {
        title: "Mobzway - Online Gaming Software Development Company Africa",
        description: "Mobzway is one of the top gaming software development company in Africa. We provide custom poker, casino, rummy, Ludo, and Teen Patti gaming software solutions.",
        url: "https://www.mobzway.com/af",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/homepage_banner.avif",
                width: 815,
                height: 821,
                alt: "mobzway africa",
                type: "image/jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobzway - Online Gaming Software Development Company Africa",
        description: "Mobzway is one of the top gaming software development company in Africa.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com/assets/images/homepage_banner.avif"],
    },
    alternates: {
        canonical: "https://www.mobzway.com/af",
    },
};

export default function AfHomePage() {
    return <AfHomeClient />;
}