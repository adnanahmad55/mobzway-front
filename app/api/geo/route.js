import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.ip ||
      "";

    let country = null;

    // 🔁 API 1 — ipapi.co
    try {
      const res1 = await fetch("https://ipapi.co/json/");
      const data1 = await res1.json();
      console.log(data1, 'data1');
      
      if (data1?.country) country = data1.country_code;
    } catch {}

    // 🔁 API 2 — ipwho.is
    if (!country) {
      try {
        const res2 = await fetch("https://ipwho.is/");
        const data2 = await res2.json();
        if (data2?.country_code) country = data2.country_code;
      } catch {}
    }

    // 🔁 API 3 — ip-api.com
    if (!country) {
      try {
        const res3 = await fetch("http://ip-api.com/json/");
        const data3 = await res3.json();
        if (data3?.countryCode) country = data3.countryCode;
      } catch {}
    }

    return NextResponse.json({
      country: country || "IN",
    });
  } catch (error) {
    return NextResponse.json({ country: "IN" });
  }
}
