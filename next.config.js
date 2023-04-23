/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['react-pageflip', 'react-pdf']);
const { i18n } = require('./next-i18next.config')

module.exports = withTM({
  swcMinify: true,
  reactStrictMode: false,
	i18n,
	trailingSlash: true,
  images: {
    domains: ['storage.bright.getter.uz']
  }
});