import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const page = (path: string) => fileURLToPath(new URL(path, import.meta.url))

// The site is served from https://kuyaloy.github.io/page-factory/ (GitHub Pages project site).
// VITE_BASE overrides the base for previews that are not served from that path (for example './').
export default defineConfig({
  base: process.env.VITE_BASE ?? '/page-factory/',
  plugins: [react(), tailwindcss()],
  build: {
    assetsDir: 'static',
    target: 'es2022',
    // Two pages: the home page and the full guide at /manual/.
    rolldownOptions: {
      input: {
        main: page('./index.html'),
        guide: page('./manual/index.html'),
      },
    },
  },
  server: {
    // The prompt library and the version label read files from the repo root (../).
    fs: { allow: ['..'] },
  },
})
