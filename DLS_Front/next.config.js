/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
experiments: {
  topLevelAwait: true;
}
module.exports = nextConfig;
module.exports = {
  env: {
    NEXT_APP_API_KEY: process.env.NEXT_APP_API_KEY,
    NEXT_APP_AUTH_DOMAIN: process.env.NEXT_APP_AUTH_DOMAIN,
    NEXT_PROJECT_ID: process.env.NEXT_PROJECT_ID,
    NEXT_STORAGE_BUCKET: process.env.NEXT_STORAGE_BUCKET,
    NEXT_MESSAGING_SENDER_ID: process.env.NEXT_MESSAGING_SENDER_ID,
    NEXT_APP_ID: process.env.NEXT_APP_ID,
    NEXT_MEASUREMENT_ID: process.env.NEXT_MEASUREMENT_ID,
    BASE_URL: process.env.BASE_URL,
    LOCATIONS: process.env.LOCATIONS,
    LOCATION_DETAILS: process.env.LOCATION_DETAILS,
    MACHINE_LIST: process.env.MACHINE_LIST,
    MACHINE_DETAILS: process.env.MACHINE_DETAILS,
    COMMENT_LIST: process.env.COMMENT_LIST,
    COMMENT_DETAILS: process.env.COMMENT_DETAILS,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:4000/:path*",
      },
    ];
  },
};
