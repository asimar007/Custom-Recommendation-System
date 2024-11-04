/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Allows any hostname
                port: '',      // No specific port
                pathname: '**' // Allows any pathname
            },
            {
                protocol: 'http',
                hostname: '**', // Allows any hostname
                port: '',
                pathname: '**'  // Allows any pathname
            }
        ],
    },
};

export default nextConfig;