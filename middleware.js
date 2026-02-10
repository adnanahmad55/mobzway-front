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

// 2. Europe Region (EU) - In sabko /eu par bhejenge
const EUROPEAN_COUNTRIES = [
  'FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'SE', 'NO', 'DK', 'FI', 
  'PL', 'IE', 'CH', 'AT', 'PT', 'RU', 'UA', 'GR', 'CZ', 'RO'
]; 

// 3. Africa Region (AF) - In sabko /af par bhejenge
const AFRICAN_COUNTRIES = [
  'ZA', 'EG', 'NG', 'KE', 'GH', 'MA', 'TZ', 'UG', 'ZW', 'ET', 
  'DZ', 'SD', 'AO', 'MZ', 'CI', 'CM'
];

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Sirf Home Page ('/') par redirect logic chalega
  if (pathname === '/') {
    
    // Country Detect Karo (Vercel Header se ya Query Param se testing ke liye)
    // ?c=FR likh kar tum test kar sakte ho localhost pe
    let country = searchParams.get('c') || request.geo?.country || request.headers.get('x-vercel-ip-country') || 'TH';
    
    country = country.toUpperCase(); // Ensure uppercase (e.g., 'in' -> 'IN')
    
    console.log(`Middleware Detected: ${country}`);

    // --- PRIORITY 1: FIXED SPECIFIC ROUTES ---
    // In countries ka apna alag folder hai, pehle inhe check karo
    if (country === 'IN') return NextResponse.redirect(new URL('/in', request.url));
    if (country === 'US') return NextResponse.redirect(new URL('/us', request.url));
    if (country === 'GB') return NextResponse.redirect(new URL('/uk', request.url)); // GB = United Kingdom
    if (country === 'BD') return NextResponse.redirect(new URL('/bd', request.url));

    // --- PRIORITY 2: DYNAMIC ASIA ROUTES ---
    // Agar Asia list mein hai -> /asia/country-name
    if (ASIA_SLUGS[country]) {
        return NextResponse.redirect(new URL(`/asia/${ASIA_SLUGS[country]}`, request.url));
    }

    // --- PRIORITY 3: BROAD REGIONS ---
    // Agar Europe list mein hai -> /eu
    if (EUROPEAN_COUNTRIES.includes(country)) {
        return NextResponse.redirect(new URL('/eu', request.url));
    }

    // Agar Africa list mein hai -> /af
    if (AFRICAN_COUNTRIES.includes(country)) {
        return NextResponse.redirect(new URL('/af', request.url));
    }

    // --- PRIORITY 4: DEFAULT FALLBACK ---
    // Agar upar mein se koi nahi mila (jaise Antarctica, Brazil, Australia), toh Thailand bhej do
    return NextResponse.redirect(new URL('/asia/thailand', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};