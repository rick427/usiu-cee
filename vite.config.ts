import path from 'node:path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
