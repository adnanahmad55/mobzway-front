// app/[country]/page.jsx
import React from 'react';
import { notFound } from "next/navigation";

// --- 1. IMPORT ALL COMPONENTS ---
import AfHomeClient from '@/app/af/AfHomeClient';      // Africa & Default Global
import UsHomeClient from '@/app/us/USHomeClient';      // USA
import AsiaHomeClient from '@/app/asia/AsiaClient';    // Asia
import UKHomeClient from '@/app/uk/UKHomeClient';      // UK
import BDHomeClient from '@/app/bd/BDHomeClient';      // Bangladesh
import IndiaHomeClient from '@/app/in/InHeader';       // India
import EuContent from '@/app/eu/EuContent';            // Europe (Ensure path is correct)

// --- 2. DEFINE REGION LISTS ---
const ASIA_CODES = [
    'asia', 'cn', 'jp', 'kr', 'kp', 'tw', 'hk', 'mo', 'mn',
    'pk', 'lk', 'np', 'bt', 'mv', 'af',
    'th', 'vn', 'my', 'sg', 'id', 'ph', 'kh', 'la', 'mm', 'bn', 'tl',
    'kz', 'uz', 'tm', 'tj', 'kg','id',
    'ae', 'sa', 'qa', 'kw', 'bh', 'om', 'ye',
    'ir', 'iq', 'il', 'jo', 'lb', 'sy',
    'tr', 'ge', 'am', 'az'
];

const EU_CODES = [
    'eu', 'fr', 'de', 'it', 'es', 'nl', 'be', 'se', 'no', 'dk', 'fi', 
    'pl', 'ie', 'ch', 'at', 'pt', 'ru', 'ua', 'gr', 'cz', 'ro', 'hu'
];
const AF_CODES = ['af', 'za', 'eg', 'ng', 'ke', 'gh', 'ma', 'tz', 'ug', 'zw', 'et', 'dz', 'sd', 'ao', 'mz', 'ci', 'cm', 'sn', 'na', 'bw', 'rw'];

export default async function CountryDynamicPage({ params }) {
    // Next.js 15+ mein params await karna padta hai
    const resolvedParams = await params;
    const country = resolvedParams.country;
    
    // ✅ Fix: 'c' variable define kiya (lowercase safety ke liye)
    const c = country.toLowerCase(); 

    console.log("🚀 Loading Content for Country Code:", c);

    // --- 3. LOGIC FLOW ---

    // A. VIP Countries (Direct Components)
    if (c === 'us' || c === 'usa') return <UsHomeClient />;
    if (c === 'uk' || c === 'gb') return <UKHomeClient />;
    if (c === 'in' || c === 'india') return <IndiaHomeClient />;
    if (c === 'bd') return <BDHomeClient />;

    // B. EUROPE Check
    if (EU_CODES.includes(c)) {
        // ✅ Prop pass kar rahe hain taaki "Casino in France" dikhe
        return <EuContent countryCode={c} />;
    }

    // C. ASIA Check
    // (Note: Humne 'notFound' hata diya, kyunki agar Asia nahi h to fallback chalega)
    if (ASIA_CODES.includes(c)) {
        // ✅ Prop pass kar rahe hain taaki "Sportsbook in Nepal" dikhe
        return <AsiaHomeClient countryCode={c} />;
    }

    // D. GLOBAL FALLBACK (Africa / Rest of World)
    // Agar country kisi list mein nahi hai (e.g. Brazil, Australia), tab ye chalega.
   if (AF_CODES.includes(c)) {
        // 🔥 Prop pass kar rahe hain taaki "Casino in Nigeria" dikhe
        return <AfHomeClient countryCode={c} />;
    }
}