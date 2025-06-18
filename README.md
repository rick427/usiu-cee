# USIU-A: Center for Executive Education

This is the frontend for the USIU‑A Center for Executive Education, built using React and Vite. It serves as a modern web portal to browse programs, enroll in courses, and access resources.

# Tech Stack
- React (with Vite + SWC)
- Mantine UI for components & styling
- React Router for client-side navigation
- React Hook Form for managing forms and input validation
- EmailJS for email submissions (contact & enrollment)

# Getting Started

## Prerequisites
You'll need Node.js installed. Recommended version: >= 16.x.

## Install Dependencies

```
git clone https://github.com/rick427/usiu-cee.git
cd usiu-cee
npm install
```
## Start Development Server

```
npm run dev
# Visit http://localhost:5173
```

## Build for Production

```
npm run build
```
The static site will be generated into dist/ and is ready for deployment on Netlify, Vercel, or any static hosting.

## Project Structure

/src
 ├─ assets/              Static assets (logos, images)
/ ├─ components/          Reusable React components
   ├─ pages/              Route-level or feature pages
   ├─ shared/             UI building blocks (Button, Card, etc.)
 ├─ services/            API & business logic (email, teams, delivery)
 ├─ routes/              React Router setup
 ├─ styles/              Global and themed SCSS files
 └─ main.tsx             App entry point (with ChakraProvider, HelmetProvider)

## Key Features

- Responsive UI powered by Mantine
- Email submissions (contact form, enrollment) via EmailJS
- Dynamic routing for program/course details
- Team management page with React-Hook-Form, live data
- Notifications & Select controls, plus real-time validation
- SEO-ready: meta tags, structured data, sitemap, robots.txt
- Performance ready: Lighthouse-optimized, image assets, caching

## Configuration & Deployment Notes

### EmailJS Integration
Make sure to create an .env.local with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_BD_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## SCSS Global Styles

- _mantine.scss defines breakpoints, mixins (smaller-than, etc.)
- Imported globally via Vite’s css.preprocessorOptions.additionalData

## Sitemap & robots.txt

Generated on build via vite-plugin-sitemap:

```
import Sitemap from 'vite-plugin-sitemap';

Sitemap({
  hostname: 'https://usiu-cee.netlify.app',
  exclude: ['/admin', '/private'],
  generateRobotsTxt: true
});
```

