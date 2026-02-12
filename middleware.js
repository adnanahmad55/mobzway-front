import { NextResponse } from 'next/server';

// 1. Asia Codes (ASIA_SLUGS hata diya kyunki use nahi ho rha tha)
const ASIA_CODES = [
  // East Asia
  'CN', 'JP', 'KR', 'KP', 'TW', 'HK', 'MO', 'MN',

  // South Asia
  'IN', 'PK', 'BD', 'LK', 'NP', 'BT', 'MV', 'AF',

  // Southeast Asia
  'TH', 'VN', 'MY', 'SG', 'ID', 'PH', 'KH', 'LA', 'MM', 'BN', 'TL',

  // Central Asia
  'KZ', 'UZ', 'TM', 'TJ', 'KG',

  // West Asia / Middle East
  'AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'YE',
  'IR', 'IQ', 'IL', 'JO', 'LB', 'SY',
  'TR', 'GE', 'AM', 'AZ'
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

  if (pathname === '/') {
    
    // --- 🚨 PRODUCTION CHANGE HERE 🚨 ---
    
    let country = 
      // 1. Manual Testing (?c=US) - Ye production me debugging ke liye rakh sakte ho
      searchParams.get('c') || 
      
      // 2. Vercel & Next.js Edge
      request.geo?.country || 
      request.headers.get('x-vercel-ip-country') || 
      
      // 3. AWS CloudFront (Agar AWS use kar rahe ho)
      request.headers.get('cloudfront-viewer-country') ||

      // 4. Azure / Cloudflare (Agar Azure Front Door ya CF use ho raha h)
      request.headers.get('cf-ipcountry') || 
      
      // 5. Default Fallback (Agar IP detect na ho to India ya Thailand bhejo)
      'IN'; 
    
    // Country code ko clean karo
    country = country ? country.toUpperCase().trim() : 'IN';
    
    console.log(`🛡️ Live User Country: ${country}`);

    // --- PRIORITY 1: VIP COUNTRIES ---
    if (country === 'IN') return NextResponse.redirect(new URL('/in', request.url));
    if (country === 'US') return NextResponse.redirect(new URL('/us', request.url));
    if (country === 'GB') return NextResponse.redirect(new URL('/uk', request.url)); 
    if (country === 'BD') return NextResponse.redirect(new URL('/bd', request.url));

    // --- PRIORITY 2: REGIONS ---
    if (EUROPEAN_COUNTRIES.includes(country)) {
        return NextResponse.redirect(new URL('/eu', request.url));
    }
    if (AFRICAN_COUNTRIES.includes(country)) {
        return NextResponse.redirect(new URL('/af', request.url));
    }

    // --- PRIORITY 3: DYNAMIC ASIA ROUTES ---
    if (ASIA_CODES.includes(country)) {
        return NextResponse.redirect(new URL(`/${country.toLowerCase()}`, request.url));
    }
    
    // --- PRIORITY 4: FINAL FALLBACK ---
    // Agar country kisi list me nahi mili (e.g. Antarctica, Australia)
    console.log(`⚠️ Unmatched Country: ${country}. Fallback to /asia`);
    return NextResponse.redirect(new URL('/asia', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};