/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/category/all',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'smgaxvzzaljxhpqpejww.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/product_images/**',
      },
    ],
  },
};
