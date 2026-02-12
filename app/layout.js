import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../public/assets/css/style.css';
import '../public/assets/css/all.min.css';
import '../public/assets/css/animate.css';
import '../public/assets/css/style_ra.css';
import '../public/assets/css/aos.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Script from "next/script"; // Unused in this file currently
import SiteScripts from "./components/SiteScripts";
import ZohoLoader from "./components/ZohoLoader";
import { LanguageProvider } from "./components/LanguageProvider";
// import { cookies } from "next/headers";

// 1. Move Viewport settings here
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // themeColor: 'black', // Optional: Add theme color if needed
};

// 2. Move all Meta tags here
export const metadata = {
  title: {
    default: 'Mobzway Technologies',
    template: '%s | Mobzway Technologies', // This allows child pages to just set their specific title
  },
  description: 'Mobzway is a top poker and casino game development company.',
  
  // Charset is added automatically by Next.js
  
  // Icons (Favicon)
  icons: {
    icon: '/assets/images/favicon1.png',
  },

  // Verification Tags
  verification: {
    google: 'iNOnO6qiU2-w90b4anRR28cExx9pzKzxyxUhC-DD8vw',
    other: {
      'facebook-domain-verification': 'zsg01m72ilhq1kj2o4e44ewy91r4ll',
    },
  },

  // Other custom tags
  other: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  },
};

export default async function RootLayout({ children }) {
  const defaultLang = "en";

  return (
    <html lang="en">
      {/* ❌ DO NOT add a <head> tag here. 
        Next.js will automatically inject the head based on the metadata export above.
      */}
      
      <body className="">
        <LanguageProvider defaultLang={defaultLang}>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
        
        {/* Loaders and Scripts */}
        <ZohoLoader />
        <SiteScripts />
        
        {/* If you have specific scripts like Analytics that were commented out 
           in your old head, they should be placed in your <SiteScripts /> 
           component or using the <Script /> component here in the body.
        */}
      </body>
    </html>
  );
}