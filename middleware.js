import { NextResponse } from 'next/server';

// 1. Asia Codes 
// Note: IN, BD removed (VIP handled)
const ASIA_CODES = [
  'CN', 'JP', 'KR', 'KP', 'TW', 'HK', 'MO', 'MN',
  'PK', 'LK', 'NP', 'BT', 'MV', // 'AF' (Afghanistan) removed to avoid conflict with /af (Africa page)
  'TH', 'VN', 'MY', 'SG', 'ID', 'PH', 'KH', 'LA', 'MM', 'BN', 'TL',
  'KZ', 'UZ', 'TM', 'TJ', 'KG',
  'AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'YE', 'IR', 'IQ', 'IL', 'JO', 'LB', 'SY', 'TR', 'GE', 'AM', 'AZ'
];

// 2. Europe Region (VIP: GB handled separately)
// ✅ ADDED: RS (Serbia), HR, SI, BA, MK, ME (Balkans), EE, LT, LV (Baltics), SK, BG
const EUROPEAN_COUNTRIES = [
  'FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'SE', 'NO', 'DK', 'FI', 
  'PL', 'IE', 'CH', 'AT', 'PT', 'RU', 'UA', 'GR', 'CZ', 'RO', 'HU',
  'RS', 'HR', 'SI', 'BA', 'MK', 'ME', 'AL', 'BG', 'SK', 'EE', 'LT', 'LV', 'CY', 'MT', 'IS'
]; 

// 3. Africa Region
const AFRICAN_COUNTRIES = [
  'ZA', 'EG', 'NG', 'KE', 'GH', 'MA', 'TZ', 'UG', 'ZW', 'ET', 
  'DZ', 'SD', 'AO', 'MZ', 'CI', 'CM', 'SN', 'NA', 'BW', 'RW'
];

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Static Files Ignore
  const IGNORED_PATHS = ['/api', '/_next', '/assets', '/favicon.ico', '/robots.txt', '/sitemap.xml'];
  if (IGNORED_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 2. Sirf Home Page ('/') par logic lagana hai
  if (pathname === '/') {
    
    // Country Detect (Priority: URL > Vercel > Default)
    let country = 
      searchParams.get('c') || 
      request.geo?.country || 
      request.headers.get('x-vercel-ip-country') || 
      'NP'; 
    
    country = country ? country.toUpperCase().trim() : 'NP';
    
    console.log(`🛡️ Middleware Detected: ${country}`);

    // --- PRIORITY 1: VIP COUNTRIES (Fixed URLs) ---
    if (country === 'IN') return NextResponse.redirect(new URL('/in', request.url));
    if (country === 'US') return NextResponse.redirect(new URL('/us', request.url));
    if (country === 'GB') return NextResponse.redirect(new URL('/uk', request.url)); // GB -> /uk
    if (country === 'BD') return NextResponse.redirect(new URL('/bd', request.url));

    // --- PRIORITY 2: DYNAMIC REGIONS (Country Code URL) ---
    
    // A. EUROPE (Ab RS/Serbia bhi yahan pakda jayega aur /rs par bhejega)
    if (EUROPEAN_COUNTRIES.includes(country)) {
        return NextResponse.redirect(new URL(`/${country.toLowerCase()}`, request.url));
    }

    // B. ASIA
    if (ASIA_CODES.includes(country)) {
        return NextResponse.redirect(new URL(`/${country.toLowerCase()}`, request.url));
    }

    // C. AFRICA (Dynamic Redirect: ZA -> /za)
    if (AFRICAN_COUNTRIES.includes(country)) {
        return NextResponse.redirect(new URL(`/${country.toLowerCase()}`, request.url));
    }

    // --- PRIORITY 3: FALLBACK ---
    // Agar country upar kisi list mein nahi mili (unknown), to /af par bhejo
    return NextResponse.redirect(new URL('/af', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};