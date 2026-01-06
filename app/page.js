// export default function Home() {
//   return <p>Redirecting...</p>;
// }

"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function detectCountry() {
      try {
        // 1. Get real IP from client
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        // 2. Get country from IP
        const geoRes = await fetch(`https://ipwho.is/${ip}`);
        const geo = await geoRes.json();
        const country = geo.country_code || "IN";

        const asiaCountries = ["PK","NP","LK","BT","MM","TH","MY","SG",
                               "ID","PH","VN","KH","LA","CN","JP","KR"];
        let prefix = "in";

        if (country === "IN") prefix = "in";
        else if (country === "BD") prefix = "bd";
        else if (asiaCountries.includes(country)) prefix = "asia";
        else if (country === "US") prefix = "us";
        else if (country === "GB") prefix = "uk";
        else if (["DE","FR","IT","ES","NL"].includes(country)) prefix = "eu";
        else if (["NG","ZA","KE","EG"].includes(country)) prefix = "af";

        window.location.replace(`/${prefix}`);
      } catch (err) {
        window.location.replace("/in");
      }
    }

    
    detectCountry();
  }, []);

  return null;
}
