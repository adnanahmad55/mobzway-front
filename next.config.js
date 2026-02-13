/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // removed

  async redirects() {
    return [
      // 1. Sportsbook (Asia -> BD)
      {
        source: '/bd/sportsbook-software-development-asia',
        destination: '/bd/sportsbook-software-development-bd',
        permanent: true,
      },

      // 2. Casino Games (Asia -> BD)
      {
        source: '/bd/casino-software-development-asia', // ⚠️ Purana URL
        destination: '/bd/casino-software-development-bd', // ✅ Naya URL (Check karein ki ye page bana ho)
        permanent: true,
      },

      // 3. Slot Games (Asia -> BD)
      {
        source: '/bd/slot-game-development', // ⚠️ Purana URL
        destination: '/bd/slot-game-development-bd', // ✅ Naya URL
        permanent: true,
      },
    ];
  },
};

export default nextConfig;