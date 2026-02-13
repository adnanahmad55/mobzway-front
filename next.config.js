/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // removed

  async redirects() {
    return [
      {
        source: '/bd/sportsbook-software-development-asia', // ❌ पुराना URL
        destination: '/bd/sportsbook-software-development-bd', // ✅ नया URL (जहाँ भेजना है)
        permanent: true, // 301 Redirect (SEO के लिए बेस्ट)
      },
    ];
  },
};

export default nextConfig;