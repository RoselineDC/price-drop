const nextConfig = {
  experimental: {
    serverActions: {
      enabled: true
    }
  },
  serverExternalPackages: [
    "mongoose"
  ],
  images: {
    domains: [
      'm.media-amazon.com'
    ]
  },
};

export default nextConfig;
