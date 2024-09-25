/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port: '',
            pathname: '/**', // Esto permitirá acceder a cualquier ruta dentro de upload.wikimedia.org
          },
        ],
      },
};

export default nextConfig;
