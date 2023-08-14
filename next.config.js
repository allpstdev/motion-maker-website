/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: {
            displayName: false
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co'
            }
        ]
    }
}

module.exports = nextConfig
