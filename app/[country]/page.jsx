// app/[country]/page.jsx

import AfHomepage from "../asia/AsiaClient"; 
import { notFound } from "next/navigation";

const ASIA_CODES = [
    // East Asia
    'cn', 'jp', 'kr', 'kp', 'tw', 'hk', 'mo', 'mn',

    // South Asia
    'in', 'pk', 'bd', 'lk', 'np', 'bt', 'mv', 'af',

    // Southeast Asia
    'th', 'vn', 'my', 'sg', 'id', 'ph', 'kh', 'la', 'mm', 'bn', 'tl',

    // Central Asia
    'kz', 'uz', 'tm', 'tj', 'kg',

    // West Asia / Middle East
    'ae', 'sa', 'qa', 'kw', 'bh', 'om', 'ye',
    'ir', 'iq', 'il', 'jo', 'lb', 'sy',
    'tr', 'ge', 'am', 'az'
]; 

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