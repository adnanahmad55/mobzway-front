import { NextResponse } from 'next/server';

// 1. Asia Routing (Country Code -> Folder Slug)
const ASIA_SLUGS = {
  CN: 'china', JP: 'japan', KR: 'southkorea', PK: 'pakistan', 
  TH: 'thailand', VN: 'vietnam', MY: 'malaysia', SG: 'singapore', 
  ID: 'indonesia', PH: 'philippines', AE: 'uae', SA: 'saudiarabia',
  LK: 'srilanka', NP: 'nepal', TW: 'taiwan', HK: 'hongkong'
};

// 2. Europe Region (EU)
const EUROPEAN_COUNTRIES = [
  'FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'SE', 'NO', 'DK', 'FI', 
  'PL', 'IE', 'CH', 'AT', 'PT', 'RU', 'UA', 'GR', 'CZ', 'RO', 'HU', 'GB' // GB bhi Europe logic me daal sakte ho ya alag rakho
]; 

// 3. Africa Region (AF)
const AFRICAN_COUNTRIES = [
  'ZA', 'EG', 'NG', 'KE', 'GH', 'MA', 'TZ', 'UG', 'ZW', 'ET', 
  'DZ', 'SD', 'AO', 'MZ', 'CI', 'CM', 'SN'
];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 🛑 SAFETY CHECK: Agar hum already kisi folder (/in, /us, /af) mein hain, to kuch mat karo.
  // Sirf exactly '/' par logic chalana hai.
  if (pathname !== '/') {
      return NextResponse.next();
  }

  // --- COUNTRY DETECTION ---
  // Localhost par 'US' manega, Live par Real Country uthayega
  let country = request.geo?.country || request.headers.get('x-vercel-ip-country') || 'US';
  country = country.toUpperCase();

  console.log(`🚀 Middleware Routing: Detected ${country} on Home Page`);

  // --- 1. VIP COUNTRIES (Direct Folders) ---
  if (country === 'IN') return NextResponse.redirect(new URL('/in', request.url));
  if (country === 'US') return NextResponse.redirect(new URL('/us', request.url));
  if (country === 'BD') return NextResponse.redirect(new URL('/bd', request.url));
  if (country === 'GB') return NextResponse.redirect(new URL('/uk', request.url));

  // --- 2. REGIONS ---
  
  // Europe
  if (EUROPEAN_COUNTRIES.includes(country)) {
      return NextResponse.redirect(new URL('/eu', request.url));
  }

  // Africa
  if (AFRICAN_COUNTRIES.includes(country)) {
      return NextResponse.redirect(new URL('/af', request.url));
  }

  // Asia Dynamic
  if (ASIA_SLUGS[country]) {
      return NextResponse.redirect(new URL(`/asia/${ASIA_SLUGS[country]}`, request.url));
  }

  // --- 3. GLOBAL FALLBACK ---
  // Agar koi country list mein nahi hai, to usse Home Page par hi rehne do.
  // Redirect mat karo taaki loop na bane.
  return NextResponse.next();
}

// Config: Sirf Home page par run karega
export const config = {
  matcher: '/',
};