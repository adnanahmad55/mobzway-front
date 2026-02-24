import { NextResponse } from 'next/server';

// 1. Asia Codes 
// Note: IN, BD removed (VIP handled)
const ASIA_CODES = [
  'CN','JP','KR','KP','TW','HK','MO','MN',
  'TH','VN','MY','SG','ID','PH','KH','LA','MM','BN','TL',
  'PK','LK','NP','BT','MV',
  'KZ','UZ','TM','TJ','KG',
  'AE','SA','QA','KW','BH','OM','YE',
  'IR','IQ','IL','JO','LB','SY',
  'TR','GE','AM','AZ'
];

// 2. Europe Region (VIP: GB handled separately)
// ✅ ADDED: RS (Serbia), HR, SI, BA, MK, ME (Balkans), EE, LT, LV (Baltics), SK, BG
const EUROPEAN_COUNTRIES = [
  'AL','AD','AT','BY','BE','BA','BG','HR','CY','CZ',
  'DK','EE','FI','FR','DE','GB','GR','HU','IS','IE',
  'IT','LV','LI','LT','LU','MT','MD','MC','ME','NL',
  'MK','NO','PL','PT','RO','RU','SM','RS','SK','SI',
  'ES','SE','CH','TR','UA','VA','XK'
];

// 3. Africa Region
const AFRICAN_COUNTRIES = [
  'DZ', // Algeria
  'AO', // Angola
  'BJ', // Benin
  'BW', // Botswana
  'BF', // Burkina Faso
  'BI', // Burundi
  'CV', // Cape Verde
  'CM', // Cameroon
  'CF', // Central African Republic
  'TD', // Chad
  'KM', // Comoros
  'CG', // Congo (Republic)
  'CD', // Congo (DRC)
  'CI', // Côte d’Ivoire
  'DJ', // Djibouti
  'EG', // Egypt
  'GQ', // Equatorial Guinea
  'ER', // Eritrea
  'SZ', // Eswatini (Swaziland)
  'ET', // Ethiopia
  'GA', // Gabon
  'GM', // Gambia
  'GH', // Ghana
  'GN', // Guinea
  'GW', // Guinea-Bissau
  'KE', // Kenya
  'LS', // Lesotho
  'LR', // Liberia
  'LY', // Libya
  'MG', // Madagascar
  'MW', // Malawi
  'ML', // Mali
  'MR', // Mauritania
  'MU', // Mauritius
  'MA', // Morocco
  'MZ', // Mozambique
  'NA', // Namibia
  'NE', // Niger
  'NG', // Nigeria
  'RW', // Rwanda
  'ST', // São Tomé & Príncipe
  'SN', // Senegal
  'SC', // Seychelles
  'SL', // Sierra Leone
  'SO', // Somalia
  'ZA', // South Africa
  'SS', // South Sudan
  'SD', // Sudan
  'TZ', // Tanzania
  'TG', // Togo
  'TN', // Tunisia
  'UG', // Uganda
  'ZM', // Zambia
  'ZW'  // Zimbabwe
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
      searchParams.get('c') ||                                // 1. Manual Testing via URL (?c=US)
      request.headers.get('cf-ipcountry') ||                  // 2. Cloudflare (Best for custom cloud servers)
      request.headers.get('cloudfront-viewer-country') ||     // 3. AWS CloudFront
      request.headers.get('x-vercel-ip-country') ||           // 4. Vercel
      request.geo?.country ||                                 // 5. Next.js Default Geo
      'IN';                                                  
    
    country = country ? country.toUpperCase().trim() : 'IN';
    
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