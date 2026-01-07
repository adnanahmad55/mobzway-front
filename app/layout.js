import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../public/assets/css/style.css';
// import '../public/assets/css/all.min.css';
import '../public/assets/css/all.min.css';
import '../public/assets/css/animate.css';
import '../public/assets/css/style_ra.css';
import '../public/assets/css/aos.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
import SiteScripts from "./components/SiteScripts";
import ZohoLoader from "./components/ZohoLoader";
import { LanguageProvider } from "./components/LanguageProvider";
import { cookies } from "next/headers";
// import '../public/assets/css/owl.css';
// import '../public/assets/css/owl.carousel.min.css';
// import '../public/assets/css/owl.theme.default.min.css';
// import '../public/assets/css/slick.min.css';
// import '../public/assets/css/slick-theme.min.css';


export const metadata = {
  title: 'Mobzway Technologies',
  description: 'Mobzway is a top poker and casino game development company.',
};

export default async function RootLayout({ children }) {
  // const cookieStore = cookies();
  const defaultLang =  "en";

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta name="facebook-domain-verification" content="zsg01m72ilhq1kj2o4e44ewy91r4ll" />
        <meta name="google-site-verification" content="iNOnO6qiU2-w90b4anRR28cExx9pzKzxyxUhC-DD8vw" />
        <link rel="icon" href="/assets/images/favicon1.png" sizes="16x16" />

        {/* Microsoft Clarity */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ld9v9lbx54");
            `,
          }}
        /> */}

        {/* Google Analytics / GTM */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            if(navigator.userAgent.indexOf("Chrome-Lighthouse")==-1){
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtag/js?id=UA-70164754-1'+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXXXXX');
            }
            `,
          }}
        /> */}

        {/* Structured Data JSON-LD */}
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mobzway Technologies",
            "url": "https://www.mobzway.com/",
            "logo": "https://www.mobzway.com/assets/images/logo.png",
            "description": "Mobzway is one of the top poker and casino game development company. We Develop custom poker, casino, rummy, ludo and teen patti game.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "G-4, Okay Plus Spaces, Malviya Nagar Industrial Area",
              "addressLocality": "Jaipur",
              "addressRegion": "Rajasthan",
              "postalCode": "302017",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "telephone": "+91 7878044044"
            }
          })
        }} /> */}

        {/* Global GA4 */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-B3GVZ3J32T"></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B3GVZ3J32T');
            `,
          }}
        /> */}
      </head>

      <body className="">
        <LanguageProvider defaultLang={defaultLang}>
        <Header />
        {children}
        <Footer />
        </LanguageProvider>
        <ZohoLoader />
        <SiteScripts />

      </body>
    </html>
  );
}
