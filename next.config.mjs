/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'syn.cloudinary.com',
          port: ''
        }
      ]
    }
  };
  
  export default nextConfig;
  