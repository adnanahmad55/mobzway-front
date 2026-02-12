import { NextResponse } from 'next/server';

// 1. Asia Codes 
// Note: IN, BD removed (VIP handled)
const ASIA_CODES = [
  'CN', 'JP', 'KR', 'KP', 'TW', 'HK', 'MO', 'MN',
  'PK', 'LK', 'NP', 'BT', 'MV', 'AF',
  'TH', 'VN', 'MY', 'SG', 'ID', 'PH', 'KH', 'LA', 'MM', 'BN', 'TL',
  'KZ', 'UZ', 'TM', 'TJ', 'KG',
  'AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'YE', 'IR', 'IQ', 'IL', 'JO', 'LB', 'SY', 'TR', 'GE', 'AM', 'AZ'
];

// 2. Europe Region (VIP: GB is handled separately)
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
      'NP'; // Testing Default
    
    country = country ? country.toUpperCase().trim() : 'NP';
    
    console.log(`🛡️ Middleware Detected: ${country}`);

    // --- PRIORITY 1: VIP COUNTRIES (Fixed URLs) ---
    if (country === 'IN') return NextResponse.redirect(new URL('/in', request.url));
    if (country === 'US') return NextResponse.redirect(new URL('/us', request.url));
    if (country === 'GB') return NextResponse.redirect(new URL('/uk', request.url)); // GB -> /uk
    if (country === 'BD') return NextResponse.redirect(new URL('/bd', request.url));

    // --- PRIORITY 2: DYNAMIC REGIONS (Country Code URL) ---
    
    // A. EUROPE (Ab ye /eu par nahi, balki /fr, /de par bhejega) ✅ CHANGED
    if (EUROPEAN_COUNTRIES.includes(country)) {
        return NextResponse.redirect(new URL(`/${country.toLowerCase()}`, request.url));
    }

    // B. ASIA (Ye /np, /sg par bhejega)
    if (ASIA_CODES.includes(country)) {
        return NextResponse.redirect(new URL(`/${country.toLowerCase()}`, request.url));
    }

    // --- PRIORITY 3: STATIC REGIONS ---
    
    // Africa (Abhi bhi /af par hi bhej rahe hain, agar dynamic chahiye to bata dena)
    if (AFRICAN_COUNTRIES.includes(country)) return NextResponse.redirect(new URL(`/${country.toLowerCase()}`, request.url));

    // C. FALLBACK
    return NextResponse.redirect(new URL('/af', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};