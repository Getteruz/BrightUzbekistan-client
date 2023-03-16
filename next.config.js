/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['react-pageflip', 'react-pdf']);

module.exports = withTM({
  swcMinify: true,
  env: {
    COOKIE_TIME: 30 * 24 * 60 * 60,
  },
  images: {
    domains: ['localhost', 'bright-test.onrender.com', 'storage.bright.getter.uz']
  }
});
