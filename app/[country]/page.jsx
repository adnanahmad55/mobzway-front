import AfHomepage from "../asia/AsiaClient"; // Path check kar lena
import { notFound } from "next/navigation";

const ASIA_CODES = ['sg', 'pk', 'am', 'in', 'th', 'vn', 'id', 'my'];

// 1. Function ko 'async' banao
export default async function CountryDynamicPage({ params }) {
  
  // 2. Params ko 'await' karo (Next.js 15+ mein zaroori hai)
  const resolvedParams = await params;
  const country = resolvedParams.country;

  // Debugging ke liye: Console mein check karo kya aa raha hai
  console.log("Requested Country:", country);

  // 3. Check karo
  if (!ASIA_CODES.includes(country)) {
    return notFound();
  }

  return (
    <div>
       <AfHomepage />
    </div>
  );
}