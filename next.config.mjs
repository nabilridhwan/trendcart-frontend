import { config as _config } from 'dotenv';
const { parsed: env } = _config({
  path: '.env.local',
});

// Extract all environment variables from `env` object
const envVariables = Object.keys(env).reduce((acc, key) => {
  acc[key] = env[key];
  return acc;
}, {});

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    ...envVariables,
  },
};

export default nextConfig;
