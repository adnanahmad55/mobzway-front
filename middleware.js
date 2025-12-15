// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const url = request.nextUrl;
//   const pathname = url.pathname;
// //   console.log(url.pathname, 'pathname11111');
  

  
//   const country = request.geo?.country || "IN";
// //   const country = "US";
// // console.log(country, 'pathname11111');
  
//   const countryRouteMap = {
//     IN: "/in",
//     BD: "/bd",
//     US: "/us",
//   };

//   const targetPath = countryRouteMap[country] || "/in";

  
//   if (pathname === "/") {
//     return NextResponse.redirect(new URL(targetPath, request.url));
//   }

  
//   if (["/in", "/bd", "/us"].includes(pathname)) {
    
//     if (pathname !== targetPath) {
//       return NextResponse.redirect(new URL(targetPath, request.url));
//     }

    
//     return NextResponse.next();
//   }

  
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next|favicon.ico).*)"],
// };

import { NextResponse } from "next/server";

export function middleware(request) {
  // Use the Vercel-provided geo header for country detection
  const country = request.headers.get('x-vercel-country') || "IN";
  
  // Log for debugging
  console.log("Detected country:", country);
  console.log(request.geo?.country, 'request.geo?.country');
  

  const url = request.nextUrl;
  const pathname = url.pathname;

  const countryRouteMap = {
    IN: "/in",
    BD: "/bd",
    US: "/us",
  };

  const targetPath = countryRouteMap[country] || "/in";
  
  console.log("Redirecting to:", targetPath); // Log the target path
  
  // Root redirection
  if (pathname === "/") {
    return NextResponse.redirect(new URL(targetPath, request.url));
  }

  // Handle country-specific page redirection
  if (["/in", "/bd", "/us"].includes(pathname)) {
    if (pathname !== targetPath) {
      return NextResponse.redirect(new URL(targetPath, request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};

