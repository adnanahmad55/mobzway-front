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
  'asia',

  // East Asia
  'cn','jp','kr','kp','tw','hk','mo','mn',

  // Southeast Asia
  'th','vn','my','sg','id','ph','kh','la','mm','bn','tl',

  // South Asia
  'pk','lk','np','bt','mv','af','bd','in',

  // Central Asia
  'kz','uz','tm','tj','kg',

  // West Asia / Middle East
  'ae','sa','qa','kw','bh','om','ye',
  'ir','iq','il','jo','lb','sy','ps',

  // Transcontinental / Caucasus
  'tr','am','az'
];


const EU_CODES = [
  // Western Europe
  'eu','nl','de','fr','be','lu','at','ch','li','mc','ie','gb','ge',

  // Northern Europe
  'no','fi','se','dk','is','ee','lv','lt',

  // Southern Europe
  'it','es','pt','gr','cy','mt','sm','va','ad',

  // Central / Eastern Europe
  'pl','cz','sk','hu','ro','bg',

  // Balkans
  'hr','si','rs','ba','al','mk','me','xk',

  // Eastern Europe / Eurasia
  'md','ua','by','ru','tr'
];

const AF_CODES = [
  // North Africa
  'dz','eg','ly','ma','tn','sd','ss','af',

  // West Africa
  'bj','bf','cv','ci','gm','gh','gn','gw',
  'lr','ml','mr','ne','ng','sn','sl','tg',

  // Central Africa
  'cm','cf','td','cg','cd','gq','ga','st','ao',

  // East Africa
  'ke','tz','ug','rw','bi','et','er','so','dj',

  // Southern Africa
  'za','zw','zm','mz','bw','na','ls','sz',
  'mg','mw','mu','sc','km'
];


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