import { NextResponse } from 'next/server';

// 1. Dynamic Asia Routing (Country Code -> Folder Slug)
const ASIA_SLUGS = {
  CN: 'china', 
  JP: 'japan', 
  KR: 'southkorea', 
  PK: 'pakistan', 
  TH: 'thailand', 
  VN: 'vietnam', 
  MY: 'malaysia', 
  SG: 'singapore', 
  ID: 'indonesia', 
  PH: 'philippines', 
  AE: 'uae', 
  SA: 'saudiarabia',
  LK: 'srilanka', 
  NP: 'nepal', 
  TW: 'taiwan', 
  HK: 'hongkong'
};

// 2. Europe Region (EU) - Norway (NO) included here!
const EUROPEAN_COUNTRIES = [
  'FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'SE', 'NO', 'DK', 'FI', 
  'PL', 'IE', 'CH', 'AT', 'PT', 'RU', 'UA', 'GR', 'CZ', 'RO', 'HU'
]; 

// 3. Africa Region (AF)
const AFRICAN_COUNTRIES = [
  'ZA', 'EG', 'NG', 'KE', 'GH', 'MA', 'TZ', 'UG', 'ZW', 'ET', 
  'DZ', 'SD', 'AO', 'MZ', 'CI', 'CM', 'SN'
];

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Sirf Home Page ('/') par redirect logic chalega
  if (pathname === '/') {
    
    // Country Detect Karo (Query Param 'c' se testing ke liye, ya Vercel Header se)
    let country = searchParams.get('c') || request.geo?.country || request.headers.get('x-vercel-ip-country') || 'TH';
    
    country = country.toUpperCase(); // Ensure uppercase (e.g., 'no' -> 'NO')
    
    console.log(`🛡️ Middleware Detected Country: ${country}`);

    // --- PRIORITY 1: VIP COUNTRIES (Fixed Folders) ---
    if (country === 'IN') return NextResponse.redirect(new URL('/in', request.url));
    if (country === 'US') return NextResponse.redirect(new URL('/us', request.url));
    if (country === 'GB') return NextResponse.redirect(new URL('/uk', request.url)); // GB = United Kingdom
    if (country === 'BD') return NextResponse.redirect(new URL('/bd', request.url));

    // --- PRIORITY 2: REGIONS (Europe & Africa) ---
    
    // Agar Norway (NO) ya koi bhi EU country hai -> /eu par bhejo
    if (EUROPEAN_COUNTRIES.includes(country)) {
        return NextResponse.redirect(new URL('/eu', request.url));
    }

    // Agar Africa list mein hai -> /af par bhejo
    if (AFRICAN_COUNTRIES.includes(country)) {
        return NextResponse.redirect(new URL('/af', request.url));
    }

    // --- PRIORITY 3: DYNAMIC ASIA ROUTES ---
    // Agar Asia list mein hai -> /asia/country-name
    if (ASIA_SLUGS[country]) {
        return NextResponse.redirect(new URL(`/asia/${ASIA_SLUGS[country]}`, request.url));
    }

    // --- PRIORITY 4: DEFAULT FALLBACK ---
    // Agar Antarctica, Brazil, Australia se koi aaya -> Default Thailand
    console.log(`⚠️ No specific route for ${country}. Fallback to Thailand.`);
    return NextResponse.redirect(new URL('/asia/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};