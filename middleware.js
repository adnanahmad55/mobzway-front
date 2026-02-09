import { NextResponse } from 'next/server';

// 1. Dynamic Asia Routing (Code -> Folder Name)
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

// 2. Other Regions
const EUROPEAN_COUNTRIES = ['FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'SE', 'NO', 'DK', 'FI', 'PL', 'IE', 'CH', 'AT', 'PT', 'RU']; 
const AFRICAN_COUNTRIES = ['ZA', 'EG', 'NG', 'KE', 'GH', 'MA', 'TZ', 'UG', 'ZW', 'ET'];

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Country Detect (Query Param ?c=XX ya GeoLocation)
  let country = searchParams.get('c') || request.geo?.country || 'IN';
  country = country.toUpperCase();

  // Sirf Home Page ('/') par redirect logic chalega
  if (pathname === '/') {
    
    // --- Rule 1: Dynamic Asia Countries ---
    if (ASIA_SLUGS[country]) {
        // Example: CN -> /asia/china
        return NextResponse.redirect(new URL(`/asia/${ASIA_SLUGS[country]}`, request.url));
    }

    // --- Rule 2: Fixed Specific Routes ---
    if (country === 'IN') return NextResponse.redirect(new URL('/in', request.url));
    if (country === 'US') return NextResponse.redirect(new URL('/us', request.url));
    if (country === 'GB') return NextResponse.redirect(new URL('/uk', request.url)); 
    if (country === 'BD') return NextResponse.redirect(new URL('/bd', request.url));

    // --- Rule 3: Broad Regions ---
    if (EUROPEAN_COUNTRIES.includes(country)) return NextResponse.redirect(new URL('/eu', request.url));
    if (AFRICAN_COUNTRIES.includes(country)) return NextResponse.redirect(new URL('/af', request.url));

    // --- Rule 4: Default Fallback (Thailand) ---
    // Agar country code match nahi hua, toh safe side Thailand bhej do
    return NextResponse.redirect(new URL('/asia/thailand', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};