// ✅ Correct (Make sure spelling matches everywhere)
const ASIA_CODES = ['sg', 'pk', 'am', 'in', 'th', 'vn', 'id', 'my']; 

export default async function CountryDynamicPage({ params }) {
  const resolvedParams = await params;
  const country = resolvedParams.country;

  // Ab ye sahi chalega
  if (!ASIA_CODES.includes(country)) {
    return notFound();
  }
  
  return (
    <div>
       <AfHomepage />
    </div>
  );
}