/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: ''
            }
        ]
    },
    webpack: (config, { dev }) => {
        if (dev) {
          // Configuración para modo development
          config.optimization.minimize = false;
        } else {
          // Configuración para modo production
          config.optimization.minimize = true;
          config.optimization.minimizer = [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
          ];
        }
    
        return config;
    }
}

module.exports = nextConfig
