import path from 'node:path';
import fs from 'node:fs';
import { defineConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'ensure-dist-folder',
      closeBundle() {
        const distPath = path.resolve(__dirname, 'dist');
        if (!fs.existsSync(distPath)) {
          fs.mkdirSync(distPath, { recursive: true });
        }
      }
    },
    react(),
    Sitemap({
      hostname: 'https://usiu-cee.netlify.app',
      exclude: ['/admin', '/private'],  // exclude admin or other private routes
      generateRobotsTxt: true, // generate both sitemap.xml and robots.txt
      dynamicRoutes: [
        '/programs/open-executive-short-programs', 
        '/programs/open-executive-modular-programs',
        '/programs/organizational-custom-solutions',
        '/programs/open-executive-short-programs/business-analytics-for-executives-program-(BAEP)',
        '/programs/open-executive-short-programs/client-experience-excellence-program-(CEEP)',
        '/programs/open-executive-short-programs/new-manager-development-program-(NMDP)',
        '/programs/open-executive-short-programs/artificial-intelligence-for-executives-program-(AIEP)',
        '/programs/open-executive-modular-programs/strategic-management-development-program-(SMDP)',
        '/programs/open-executive-modular-programs/senior-leadership-development-program-(SLDP)',
        '/programs/open-executive-modular-programs/executive-leadership-development-program-for-higher-learning-institutions-leaders-(ELDP-HLIL)',
        '/programs/open-executive-modular-programs/developing-emerging-leaders-in-higher-learning-institutions-(DEL-HLIP)',
        '/teams/caroline-muthoni',
        '/teams/joseph-munyao',
        '/teams/prof-amos-njuguna',
        '/teams/prof-peter-kiriri',
        '/teams/amb-prof-ruthie-rono',
        '/teams/amb-dr-josephine-ojiambo',
      ],
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
