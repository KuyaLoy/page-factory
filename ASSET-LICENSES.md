# Asset and license notes: Project Factory site

Everything shipped in `site/` and where it came from. Update this file whenever a file is added, replaced or
removed.

## Pictures and clips on the site (`site/public/media/`, originals in `site/assets-src/originals/`)
All made on 2026-11-06 in Google Flow, in Loy's own Flow account (Google AI Pro plan), driven by Claude in his
signed-in Chrome with his approval. No visible watermark on the downloaded files (checked by eye). Prompts and
settings: `ASSET-REQUESTS.md` and `VIDEO-REQUESTS.md`.

| File (original) | Made with | Credits | Status |
|---|---|---|---|
| pf-loop-lake.mp4 (V3) | Veo 3.1 Quality, Frames (start: A1 lake picture), 720p 8 s, downloaded 1080p upscaled | 100 | In use (hero, gallery card 1) |
| pf-loop-forest.mp4 (V4) | Veo 3.1 Quality, Frames (start: A2 forest picture), 720p 8 s, downloaded 1080p upscaled | 100 | In use (gallery card 2) |
| pf-loop-waterfall.mp4 (V5) | Veo 3.1 Quality, Frames (start: A3 waterfall picture), 720p 8 s, downloaded 1080p upscaled | 100 | In use (gallery card 3) |
| pf-loop-architecture.mp4 (V6) | Veo 3.1 Quality, Frames (start: A4 stairway picture), 720p 8 s, downloaded 1080p upscaled | 100 | In use (gallery card 4) |
| pf-loop-macro.mp4 (V7) | Veo 3.1 Quality, Frames (start: A5 fern picture), 720p 8 s, downloaded 1080p upscaled | 100 | In use (gallery card 5) |
| pf-poster-<name>.jpg | Frame 24 of each clip above (the loop's first frame), saved by `npm run media` | 0 | In use (posters, hero side cards, workflow scene) |
| A1 to A5 stills | Nano Banana Pro, 9:16, 2K upscaled (1536x2752), picked from 2 takes each | 0 | Start frames of V3 to V7; in git history (v1.3.0) |
| V1, V2 (v1.3.0 loops) | Veo 3.1 Quality, Frames (start and end: A1, A3) | 200 | Replaced in v1.4.0; in git history |

The video originals (1080p downloads) are kept out of git because of their size; Loy keeps them locally.
Web copies (`npm run media`): AVIF, WebP and JPG at 480, 720 and 1080 px wide; MP4 (H.264) and WebM (VP9) at
720x1280 without sound, about 1.6 Mbit/s at most, crossfaded so they loop. `public/og.jpg` (social share
image, 1200x630) is a screenshot of an HTML card that uses the v1.3.0 lake, forest and waterfall pictures.

No third-party photographs or clips are used on the site. All samples are illustrative and the site says they
are not output of the kit.

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
