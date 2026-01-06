import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip");

    let country = null;

    // 🥇 BEST — ipwho.is (IP ke saath)
    try {
      const res = await fetch(`https://ipwho.is/${ip}`);
      const data = await res.json();
      if (data?.success && data?.country_code) {
        country = data.country_code;
      }
    } catch {}

    // 🥈 fallback
    if (!country) {
      try {
        const res = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await res.json();
        if (data?.countryCode) country = data.countryCode;
      } catch {}
    }

    return NextResponse.json({
      country: country || "IN",
      ip,
    });
  } catch {
    return NextResponse.json({ country: "IN" });
  }
}
