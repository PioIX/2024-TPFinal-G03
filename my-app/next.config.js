module.exports = {
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
  }