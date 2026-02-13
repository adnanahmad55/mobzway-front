import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../public/assets/css/style.css';
import '../public/assets/css/all.min.css';
import '../public/assets/css/animate.css';
import '../public/assets/css/style_ra.css';
import '../public/assets/css/aos.css';

// 👇 Naya Component Import karein (Header/Footer ab iske andar hain)
import CountryLayout from "components/CountryLayout"; 

import SiteScripts from "./components/SiteScripts";
import ZohoLoader from "./components/ZohoLoader";

// 1. Viewport settings
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// 2. Meta tags
export const metadata = {
  title: {
    default: 'Mobzway Technologies',
    template: '%s | Mobzway Technologies',
  },
  description: 'Mobzway is a top poker and casino game development company.',
  icons: {
    icon: '/assets/images/favicon1.png',
  },
  verification: {
    google: 'iNOnO6qiU2-w90b4anRR28cExx9pzKzxyxUhC-DD8vw',
    other: {
      'facebook-domain-verification': 'zsg01m72ilhq1kj2o4e44ewy91r4ll',
    },
  },
  other: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        
        {/* 👇 Logic ab is component ke andar chalega */}
        <CountryLayout>
          {children}
        </CountryLayout>
        
        {/* Loaders and Scripts */}
        <ZohoLoader />
        <SiteScripts />
      </body>
    </html>
  );
}