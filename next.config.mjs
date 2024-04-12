/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'th.bing.com',
                port: '',
                // pathname: '/*',
            },
            {
                protocol: 'https',
                hostname: 'www.postcourier.com.pg',
                port: '',
                // pathname: '/*',
            },
            {
                protocol: 'https',
                hostname: 'emtv.com.pg',
                port: '',
                // pathname: '/*',
            },
        ]
    }
};

export default nextConfig;
