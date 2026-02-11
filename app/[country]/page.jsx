// app/[country]/page.jsx

import AfHomepage from "../asia/AsiaClient"; 
import { notFound } from "next/navigation";

const ASIA_CODES = ['sg', 'pk', 'am', 'in', 'th', 'vn', 'id', 'my']; 

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