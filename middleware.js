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
  HK: 'hongkong',
  // India (IN) and Bangladesh (BD) are handled in VIP section
};

// 2. Europe Region (EU)
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
    
    // Country Detect Karo 
    // Fallback 'US' kar diya hai taaki Localhost par Thailand na khule
    let country = searchParams.get('c') || request.geo?.country || request.headers.get('x-vercel-ip-country') || 'US';
    
    country = country.toUpperCase(); // Ensure uppercase
    
    console.log(`🛡️ Middleware Detected Country: ${country}`);

    // --- PRIORITY 1: VIP COUNTRIES (Fixed Folders) ---
    if (country === 'IN') return NextResponse.redirect(new URL('/in', request.url));
    if (country === 'US') return NextResponse.redirect(new URL('/us', request.url));
    if (country === 'GB') return NextResponse.redirect(new URL('/uk', request.url)); 
    if (country === 'BD') return NextResponse.redirect(new URL('/bd', request.url));

    // --- PRIORITY 2: REGIONS (Europe & Africa) ---
    
    // Agar EU country hai -> /eu
    if (EUROPEAN_COUNTRIES.includes(country)) {
        return NextResponse.redirect(new URL('/eu', request.url));
    }

    // Agar Africa country hai -> /af
    if (AFRICAN_COUNTRIES.includes(country)) {
        return NextResponse.redirect(new URL('/af', request.url));
    }

    // --- PRIORITY 3: DYNAMIC ASIA ROUTES ---
    // Agar Asia list mein hai -> /asia/country-name (e.g. /asia/japan)
    if (ASIA_SLUGS[country]) {
        return NextResponse.redirect(new URL(`/asia/${ASIA_SLUGS[country]}`, request.url));
    }

    // --- PRIORITY 4: GLOBAL FALLBACK (IMP CHANGE 🛑) ---
    // Pehle yahan Thailand redirect tha. Ab maine hata diya.
    // Agar country upar kisi list mein nahi hai, to wo Normal Home Page ('/') par rahega.
    
    console.log(`🌍 Global User from ${country}. No redirect.`);
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};