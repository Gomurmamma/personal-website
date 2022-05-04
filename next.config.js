/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    //Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
