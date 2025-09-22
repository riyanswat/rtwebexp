/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // keep your existing sanity domain if you still use it
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      // add Vercel Blob public URLs
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "uzbcwvdwfpkflcggeofg.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;

