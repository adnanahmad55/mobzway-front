import { NextResponse } from 'next/server';

// 1. Asia Codes 
// 🛑 Note: Maine yahan se 'IN' aur 'BD' hata diya hai kyunki wo upar VIP section mein handle ho rahe hain.
const ASIA_CODES = [
  // East Asia
  'CN', 'JP', 'KR', 'KP', 'TW', 'HK', 'MO', 'MN',
  // South Asia (Removed IN, BD)
  'PK', 'LK', 'NP', 'BT', 'MV', 'AF',
  // Southeast Asia
  'TH', 'VN', 'MY', 'SG', 'ID', 'PH', 'KH', 'LA', 'MM', 'BN', 'TL',
  // Central Asia
  'KZ', 'UZ', 'TM', 'TJ', 'KG',
  // West Asia / Middle East
  'AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'YE', 'IR', 'IQ', 'IL', 'JO', 'LB', 'SY', 'TR', 'GE', 'AM', 'AZ'
];

// 2. Europe Region
const EUROPEAN_COUNTRIES = [
  'FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'SE', 'NO', 'DK', 'FI', 
  'PL', 'IE', 'CH', 'AT', 'PT', 'RU', 'UA', 'GR', 'CZ', 'RO', 'HU'
]; 

// 3. Africa Region
const AFRICAN_COUNTRIES = [
  'ZA', 'EG', 'NG', 'KE', 'GH', 'MA', 'TZ', 'UG', 'ZW', 'ET', 
  'DZ', 'SD', 'AO', 'MZ', 'CI', 'CM', 'SN'
];

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Static Files ko ignore karo (Speed Badhane ke liye)
  const IGNORED_PATHS = ['/api', '/_next', '/assets', '/favicon.ico'];
  if (IGNORED_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 2. Sirf Home Page ('/') par logic lagana hai
  if (pathname === '/') {
    
    // Country Detect
    let country = 
      searchParams.get('c') || 
      request.geo?.country || 
      request.headers.get('x-vercel-ip-country') || 
      'NP'; // Testing ke liye default NP rakha hai
    
    country = country ? country.toUpperCase().trim() : 'NP';
    
    console.log(`🛡️ Middleware Detected: ${country}`);

    // --- PRIORITY 1: VIP COUNTRIES ---
    if (country === 'IN') return NextResponse.redirect(new URL('/in', request.url));
    if (country === 'US') return NextResponse.redirect(new URL('/us', request.url));
    if (country === 'GB') return NextResponse.redirect(new URL('/uk', request.url)); 
    if (country === 'BD') return NextResponse.redirect(new URL('/bd', request.url));

    // --- PRIORITY 2: REGIONS ---
    if (EUROPEAN_COUNTRIES.includes(country)) return NextResponse.redirect(new URL('/eu', request.url));
    if (AFRICAN_COUNTRIES.includes(country)) return NextResponse.redirect(new URL('/af', request.url));

    // --- PRIORITY 3: DYNAMIC ASIA ROUTES (Ye Nepal ko /np par bhejega) ---
    if (ASIA_CODES.includes(country)) {
        // Example: NP -> /np
        return NextResponse.redirect(new URL(`/${country.toLowerCase()}`, request.url));
    }
    
    // --- PRIORITY 4: FINAL FALLBACK ---
    // Agar Australia (AU) ya Brazil (BR) se koi aaya -> Default /asia ya /af
    return NextResponse.redirect(new URL('/asia', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};