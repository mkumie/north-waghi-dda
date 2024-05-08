/** @type {import('next').NextConfig} */
// import pgk from "tailwind-scrollbar-hide";

// const { config } = pgk;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "th.bing.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.postcourier.com.pg",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "emtv.com.pg",
        port: "",
        pathname: "/**",
      },
    ],
  },
  //   plugins: [config],
  transpilePackages: ["tailwind-scrollbar-hide"],
};

export default nextConfig;
