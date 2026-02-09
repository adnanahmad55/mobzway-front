import { NextResponse } from 'next/server';

// ... (List wahi purani rahengi: EUROPEAN_COUNTRIES, etc.) ...
const EUROPEAN_COUNTRIES = ['FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'SE', 'NO', 'DK', 'FI', 'PL', 'IE', 'CH', 'AT', 'PT', 'RU']; 
const AFRICAN_COUNTRIES = ['ZA', 'EG', 'NG', 'KE', 'GH', 'MA', 'TZ', 'UG', 'ZW', 'ET'];
const ASIAN_COUNTRIES = ['PK', 'LK', 'NP', 'TH', 'SG', 'JP', 'KR', 'MY', 'VN', 'ID', 'PH', 'CN', 'TW', 'HK', 'AE', 'SA'];

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. Country Detect
  let country = searchParams.get('c') || request.geo?.country || 'IN';
  country = country.toUpperCase();

  // Root ('/') par Redirect Logic
  if (pathname === '/') {
    let targetUrl = '/asia'; 

    if (country === 'IN') targetUrl = '/in';
    else if (country === 'US') targetUrl = '/us';
    else if (country === 'GB') targetUrl = '/uk';
    else if (country === 'BD') targetUrl = '/bd';
    else if (EUROPEAN_COUNTRIES.includes(country)) targetUrl = '/eu';
    else if (AFRICAN_COUNTRIES.includes(country)) targetUrl = '/af';
    else if (ASIAN_COUNTRIES.includes(country)) targetUrl = '/asia';

    // 2. Response Banao
    const response = NextResponse.redirect(new URL(targetUrl, request.url));
    
    // 🔥 FIX 1: Cookie ko Force Update karo (Path '/' zaroori hai)
    response.cookies.set('country_code', country, { 
      path: '/',
      maxAge: 60 * 60 * 24 // 1 day validity
    });

    // 🔥 FIX 2: Browser Cache ko maaro goli (Disable Cache)
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};