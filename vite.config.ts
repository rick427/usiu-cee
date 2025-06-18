import path from 'node:path';
import { defineConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://usiu-cee.netlify.app',
      exclude: ['/admin', '/private'],  // exclude admin or other private routes
      generateRobotsTxt: true, // generate both sitemap.xml and robots.txt
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "${path.join(process.cwd(), 'src/_mantine').replace(/\\/g, '/')}" as mantine;`,
      },
    },
  },
  resolve: {
    alias: {
      "@/assets": "/src/assets",
      "@/styles": "/src/styles",
      "@/pages": "/src/pages",
      "@/hooks": "/src/hooks",
      "@/services": "/src/services",
      "@/components": "/src/components",
      "@/common": "/src/common",
      "@/utils": "/src/utils",
      "@/routes": "/src/routes",
    }
  },
})
