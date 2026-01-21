export function getCountryName() {
  let countryCode = "IN"; // default

  try {
    const headerList = headers();
    countryCode =
      headerList.get("cloudfront-viewer-country") ||
      headerList.get("x-vercel-ip-country") ||
      headerList.get("x-vercel-country") ||
      "IN";
  } catch {
    
    countryCode = "IN";
  }

  try {
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(countryCode) || "India";
  } catch {
    return "India";
  }
}
