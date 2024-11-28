/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:"s3-mbg-inventorymanagement.s3.us-east-1.amazonaws.com/",
                port:"",
                pathname:"/**"
            }
        ]
    }
};

export default nextConfig;
