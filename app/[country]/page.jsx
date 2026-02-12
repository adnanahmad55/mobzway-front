// app/[country]/page.jsx

import AfHomepage from "../asia/AsiaClient"; 
import { notFound } from "next/navigation";

const ASIA_CODES = [ 'sg', 'pk', 'th', 'vn', 'id', 'my',              // SE Asia & Pakistan
        'am', 'az', 'kh', 'ge', 'jp', 'la', 'lb', 'mv',  // Armenia, Azerbaijan, Cambodia, Georgia, Japan, Laos, Lebanon, Maldives
        'mn', 'mm', 'ph', 'kr', 'lk', 'tr', 'ae','sa']; 

export default async function CountryDynamicPage({ params }) {
  const resolvedParams = await params;
  const country = resolvedParams.country; // 'sg' yahan se mil raha hai

  if (!ASIA_CODES.includes(country)) {
    return notFound();
  }

  return (
    <div>
       {/* 🔥 CHANGE: Component ko batao ki country kaunsi hai */}
       <AfHomepage countryCode={country} />
    </div>
  );
}