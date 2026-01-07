// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const pathname = request.nextUrl.pathname;

//   // Country detection (Vercel Edge)
//   const country =
//     request.headers.get("x-vercel-ip-country") ||
//     request.headers.get("x-vercel-country") ||
//     "IN";

//   console.log(country, 'country');


//   const map = {
//     // Asia
//     IN: "/in",
//     BD: "/bd",

//     // USA
//     US: "/us",

//     // UK
//     GB: "/uk",

//     // Europe
//     DE: "/eu",
//     FR: "/eu",
//     IT: "/eu",
//     ES: "/eu",
//     NL: "/eu",

//     // Africa
//     NG: "/af",
//     ZA: "/af",
//     KE: "/af",
//     EG: "/af",

//   };

//   const target = map[country] || "/in";

//   // ✅ ONLY redirect from ROOT
//   if (pathname === "/") {
//     return NextResponse.redirect(new URL(target, request.url));
//   }

//   // ❌ Do NOT force redirect on /in /us /bd
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/", "/eu/:path*", "/af/:path*", "/uk/:path*"],
// };



// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/assets") ||
//     pathname.startsWith("/favicon") ||
//     pathname.startsWith("/fonts") ||
//     pathname.startsWith("/css") ||
//     pathname.startsWith("/js") ||
//     pathname.match(/\.(png|jpg|jpeg|webp|svg|ico|css|js|map|woff|woff2|ttf|eot)$/)
//   ) {
//     return NextResponse.next();
//   }


//   if (
//     pathname.startsWith("/in") ||
//     pathname.startsWith("/bd") ||
//     pathname.startsWith("/us") ||
//     pathname.startsWith("/uk") ||
//     pathname.startsWith("/eu") ||
//     pathname.startsWith("/af")
//   ) {
//     return NextResponse.next();
//   }

//   // 🌍 Country detect
//   const country =
//     request.headers.get("x-vercel-ip-country") ||
//     request.headers.get("x-vercel-country") ||
//     "IN";

//   const map = {
//     IN: "in",
//     BD: "bd",
//     US: "us",
//     GB: "uk",
//     DE: "eu",
//     FR: "eu",
//     IT: "eu",
//     ES: "eu",
//     NL: "eu",
//     NG: "af",
//     ZA: "af",
//     KE: "af",
//     EG: "af",
//   };

//   const prefix = map[country] || "in";

//   // ✅ ROOT
//   if (pathname === "/") {
//     return NextResponse.redirect(new URL(`/${prefix}`, request.url));
//   }

//   // ✅ ANDAR KE PAGES
//   return NextResponse.redirect(
//     new URL(`/${prefix}${pathname}`, request.url)
//   );
// }

// export const config = {
//   matcher: ["/((?!_next|favicon1.png).*)"],
// };


import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/css") ||
    pathname.startsWith("/js") ||
    pathname.match(/\.(png|jpg|jpeg|webp|svg|ico|css|js|map|woff|woff2|ttf|eot)$/)
  ) {
    return NextResponse.next();
  }

  // Already routed paths (avoid loop)
  if (
    pathname.startsWith("/in") ||
    pathname.startsWith("/bd") ||
    pathname.startsWith("/asia") ||
    pathname.startsWith("/us") ||
    pathname.startsWith("/uk") ||
    pathname.startsWith("/eu") ||
    pathname.startsWith("/af")
  ) {
    return NextResponse.next();
  }

  // 🌍 Country detection
  const country =
    request.headers.get("cloudfront-viewer-country") || // AWS
    request.headers.get("x-vercel-ip-country") ||       // Vercel
    request.headers.get("x-vercel-country") ||          // Vercel fallback
    "IN";

  // 🌏 Asia (except India & Bangladesh)
  const asiaCountries = [
    "PK", "NP", "LK", "BT", "MM", "TH", "MY", "SG",
    "ID", "PH", "VN", "KH", "LA", "CN", "JP", "KR"
  ];

  let prefix = "in"; // default

  if (country === "IN") prefix = "in";
  else if (country === "BD") prefix = "bd";
  else if (asiaCountries.includes(country)) prefix = "asia";
  else if (["US"].includes(country)) prefix = "us";
  else if (["GB"].includes(country)) prefix = "uk";
  else if (["DE", "FR", "IT", "ES", "NL"].includes(country)) prefix = "eu";
  else if (["NG", "ZA", "KE", "EG"].includes(country)) prefix = "af";

  // 🔁 Redirect only from root
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${prefix}`, request.url));
  }

  // All other routes
  return NextResponse.redirect(
    new URL(`/${prefix}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|favicon1.png).*)"],
};


