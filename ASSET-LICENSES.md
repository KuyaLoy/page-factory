# Asset and license notes: Project Factory site

Everything shipped in `site/` and where it came from. Update this file whenever a file is added, replaced or
removed.

## Pictures and clips on the landing page (`site/public/media/`, originals in `site/assets-src/originals/`)
All made on 2026-11-06 in Google Flow, in Loy's own Flow account (Google AI Pro plan), driven by Claude in his
signed-in Chrome with his approval. Picked by eye from 2 takes each. No visible watermark on the downloaded
files (checked by eye). Prompts and settings: `ASSET-REQUESTS.md` and `VIDEO-REQUESTS.md`.

| File (original) | Made with | Credits | Status |
|---|---|---|---|
| pf-poster-lake.jpg | Nano Banana Pro, 9:16, downloaded "2K upscaled" (1536x2752) | 0 | In use |
| pf-poster-forest.jpg | Nano Banana Pro, 9:16, lake picture as reference, 2K upscaled | 0 | In use |
| pf-poster-waterfall.jpg | Nano Banana Pro, 9:16, lake picture as reference, 2K upscaled | 0 | In use |
| pf-poster-architecture.jpg | Nano Banana Pro, 9:16, 2K upscaled | 0 | In use |
| pf-poster-macro.jpg | Nano Banana Pro, 9:16, 2K upscaled | 0 | In use |
| pf-loop-lake.mp4 | Veo 3.1 Quality, Frames (start and end: lake picture), 720p 8 s, downloaded 1080p upscaled | 100 | In use (hero) |
| pf-loop-waterfall.mp4 | Veo 3.1 Quality, Frames (start and end: waterfall picture), 720p 8 s, downloaded 1080p upscaled | 100 | In use (gallery card 3) |

Web copies (`npm run media`): AVIF, WebP and JPG at 480, 720 and 1080 px wide; MP4 (H.264) and WebM (VP9) at
720x1280 without sound, crossfaded so they loop. `public/og.jpg` (social share image, 1200x630) is a
screenshot of an HTML card that uses the lake, forest and waterfall pictures.

The temporary SVG art from the first draft (`site/public/media/temp/`) was removed once these arrived.
No third-party photographs or clips are used on the landing page. All sample pictures are illustrative and the
page says they are not output of the kit.

## Preserved guide (`/manual/`, copied from `docs/` at build time)
The v1.2 guide keeps its own pictures, all public domain, credited in `docs-src/assets/CREDITS.md`
(Gertie the Dinosaur poster, drawings and film, 1914; zoetrope strip, about 1860; phenakistiscope disc, 1833;
Muybridge's Horse in Motion, 1878; via Wikimedia Commons).

## Fonts, icons and code
| Item | License |
|---|---|
| Geist and Geist Mono (via @fontsource-variable) | SIL Open Font License 1.1 |
| Lucide icons (lucide-react) | ISC |
| React, React DOM | MIT |
| Vite, @vitejs/plugin-react | MIT |
| Tailwind CSS, @tailwindcss/vite | MIT |
| Motion (motion/react) | MIT |
| GSAP, ScrollTrigger, @gsap/react | GSAP Standard "no charge" license (https://gsap.com/standard-license) |
| sharp (build-time image tool, not shipped) | Apache-2.0 |
| Page Factory kit and this site's code | MIT (see LICENSE) |
