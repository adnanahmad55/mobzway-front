import { headers } from 'next/headers';

export async function getCountryFromIP() {
  // 1. Production Check (Vercel/AWS Headers)
  try {
    const headerList = headers();
    const countryFromHeader = 
      headerList.get("x-vercel-ip-country") || 
      headerList.get("cloudfront-viewer-country") ||
      headerList.get("cf-ipcountry");

    if (countryFromHeader) {
      return countryFromHeader.toUpperCase(); // e.g., 'IN', 'US'
    }
  } catch (e) {
    // Ignore error if headers() is not available
  }

  // 2. Localhost Fallback (Agar headers nahi mile to API call karo)
  // Note: Ye server component me thoda slow ho sakta hai, isliye production me headers best hain.
  try {
    const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    const data = await res.json();
    return data.country_code || 'IN'; // Return 'IN' if API fails
  } catch (error) {
    console.log("IP API Failed:", error);
    return 'IN'; // Default fallback
  }
}