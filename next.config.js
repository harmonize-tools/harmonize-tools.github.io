/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/harmonize-toolkits-page/' : '',
  trailingSlash: true
}
