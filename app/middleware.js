// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Localhost par request.geo kaam nahi karega.
  // Testing ke liye yahan manually "US" ya "BD" likh kar check karein:
  const country = request.geo?.country || "IN"; 

  const url = request.nextUrl.clone();

  if (url.pathname === '/') {
    if (country === "IN") {
      url.pathname = '/in';
      return NextResponse.redirect(url);
    }
    if (country === "BD") {
      url.pathname = '/bd';
      return NextResponse.redirect(url);
    }
    if (country === "US") {
      url.pathname = '/us';
      return NextResponse.redirect(url);
    }
    
    // Default fallback
    url.pathname = '/asia';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}