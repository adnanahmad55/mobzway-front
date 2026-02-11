// 1. Dhyan dena: Path '../asia/AsiaClient' tumhare folder structure ke hisab se change ho sakta hai
// Agar ye file 'app/[country]/' mein hai aur component 'app/asia/' mein, to '../asia' sahi hai.
import AfHomepage from "../asia/AsiaClient"; 
import { notFound } from "next/navigation";

// Jo countries allow karni hain unki list
const ASIA_CODES = ['sg', 'pk', 'am', 'in', 'th', 'vn', 'id', 'my']; 

export default function CountryDynamicPage({ params }) {
  // 2. Security Check: Agar koi galat country dale (e.g. /usa) to 404 dikhao
  if (!ASIA_CODES.includes(params.country)) {
    return notFound();
  }

  // 3. Magic: Wahi same 'AfHomepage' component return kar do
  // Isse content wahi 'Asia' wala dikhega, par URL '/sg' rahega
  return (
    <div>
       <AfHomepage />
    </div>
  );
}