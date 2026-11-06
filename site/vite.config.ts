import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The site is served from https://kuyaloy.github.io/page-factory/ (GitHub Pages project site).
// VITE_BASE overrides the base for previews that are not served from that path (for example './').
export default defineConfig({
  base: process.env.VITE_BASE ?? '/page-factory/',
  plugins: [react(), tailwindcss()],
  build: {
    assetsDir: 'static',
    target: 'es2022',
  },
  server: {
    // The prompt library and the version label read files from the repo root (../).
    fs: { allow: ['..'] },
  },
})
