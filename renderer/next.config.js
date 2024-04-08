/* * */

const withNextIntl = require('next-intl/plugin')();

/* * */

module.exports = withNextIntl({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/geobus',
        permanent: false,
      },
    ];
  },
});
