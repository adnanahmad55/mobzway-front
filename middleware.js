import { NextResponse } from 'next/server';

// Allowed Asian Countries (India is NOT here)
const ASIA_SLUGS = {
  CN: 'china', JP: 'japan', KR: 'southkorea', 
  PK: 'pakistan', TH: 'thailand', VN: 'vietnam', 
  MY: 'malaysia', SG: 'singapore', ID: 'indonesia', 
  PH: 'philippines', AE: 'uae', SA: 'saudiarabia',
  LK: 'srilanka', NP: 'nepal', TW: 'taiwan', HK: 'hongkong'
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Sirf Home Page ('/') par check karenge
  if (pathname === '/') {
    
    let country = 'TH'; // Default fallback

    try {
      // 1. IP se Country Pata karo (Vercel/Next.js IP header)
      // Localhost pe ye aksar kaam nahi karta, isliye API fallback zaruri hai
      const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
      
      // Note: Middleware me hum external fetch avoid karte hain speed ke liye, 
      // lekin strict requirement ke liye yahan simple geo header check karte hain.
      // Vercel/Netlify par 'x-vercel-ip-country' header milta hai.
      
      const geoCountry = request.geo?.country || request.headers.get('x-vercel-ip-country') || 'TH';
      country = geoCountry;

    } catch (error) {
      console.log("Geo lookup failed, using default");
    }

    // Convert to Uppercase
    country = country.toUpperCase();
    console.log("Detected Country via Middleware:", country);

    // --- ROUTING LOGIC ---

    // 1. Agar India (IN) hai -> /in bhejo
    if (country === 'IN') {
      return NextResponse.redirect(new URL('/in', request.url));
    }

    // 2. Agar koi Allowed Asian Country hai -> /asia/country-name
    if (ASIA_SLUGS[country]) {
      return NextResponse.redirect(new URL(`/asia/${ASIA_SLUGS[country]}`, request.url));
    }

    // 3. Agar Netherlands (NL) ya koi aur Unknown country hai -> Default Thailand
    // Ye line ensure karegi ki NL wale ko India na dikhe
    return NextResponse.redirect(new URL('/asia/thailand', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};