/** @type {import('next').NextConfig} */
const webpack = require('webpack')

const { parsed: myEnvFILE } = require('dotenv').config({
  path:'.env'
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    config.plugins.push(new webpack.EnvironmentPlugin(myEnvFILE))
    return config;
  },
}

module.exports = nextConfig
