/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/contact/:slug*',
        destination: '/about/board',
        permanent: true,
      },
      {
        source: '/parents/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:slug*',
        destination: '/not-found',
        permanent: true,
      },
      {
        source: '/bylaws/:slug*',
        destination: '/resources/bylaws',
        permanent: true,
      },
      {
        source: '/calendar/:slug*',
        destination: '/events/calendar',
        permanent: true,
      },
      {
        source: '/resources/billing-and-late-fee-policy-and-procedures',
        destination: '/resources/billing',
        permanent: true,
      },
      {
        source: '/affiliation-information/:slug*',
        destination: '/advisors/affiliation',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
