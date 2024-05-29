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
};
