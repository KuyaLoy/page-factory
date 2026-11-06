# Project Factory site

The landing page for the Page Factory kit, live at https://kuyaloy.github.io/page-factory/.
A static site: React, TypeScript and Vite, styled with Tailwind CSS. GSAP with ScrollTrigger drives the one
pinned "how a video gets made" scene; Motion handles the small UI transitions; icons are Lucide.
There is no server, no API, no database and no secret anywhere in this folder.

## Run it on your computer
Needs Node.js 20.19 or newer (22 recommended).

```bash
cd site
npm install
npm run dev        # http://localhost:5173/page-factory/
npm run build      # production build in site/dist
npm run preview    # serves site/dist at http://localhost:4173/page-factory/
npm run lint       # oxlint
```

`npm run dev` and `npm run build` first run `npm run sync`, which copies the v1.2 guide from `../docs/` into
`public/manual/` (served at `/page-factory/manual/`) and `../docs/assets/` into `public/assets/` (so old picture
and video links keep working). Both copies are gitignored; never edit them, edit `docs-src/` and run
`python tools/build_manual.py` instead.

## Where the content comes from
- The prompt library and the "Copy master prompt" buttons read `../MASTER-PROMPT.md` and `../prompts/*.md` at
  build time. Copy buttons copy the exact text inside each file's ```` ```text ```` block; the downloads give
  the whole file. Edit the prompt files, rebuild, and the site follows.
- The version label comes from `../VERSION`; the prompt and skill counts from `../kit/manifest.json`.
- Labels, summaries and "when to use" lines for each prompt live in `src/content/prompts.ts`.

## Pictures and video
Originals live in `assets-src/originals/` (kept in git, not served). After adding or replacing one:

```bash
npm run media
```

That writes AVIF, WebP and JPG copies at 480, 720 and 1080 px wide into `public/media/`, 720x1280 MP4 and
WebM loops without sound (needs `ffmpeg` and `ffprobe` on your PATH), and `src/content/media.generated.ts`.
Clips that don't end on their first frame get a 1-second crossfade so they loop without a jump.
File names: `pf-poster-<name>.(jpg|png)` and `pf-loop-<name>.mp4`. Sources and licenses are recorded in
`../ASSET-LICENSES.md`.

## Deploy
`.github/workflows/pages.yml` builds this folder and publishes `site/dist` on every push to `main`.
One-time setup in the repository: Settings > Pages > Build and deployment > Source: **GitHub Actions**
(instead of "Deploy from a branch").

The site expects to live at `/page-factory/`. For your own domain later, add it in Settings > Pages >
Custom domain, and build with `VITE_BASE=/` (add `env: VITE_BASE: /` to the build step).

## Accessibility and motion
- Every button works with the keyboard; the prompt window traps focus, closes on Escape and returns focus.
- With "reduce motion" turned on, on touch screens and on small screens the pinned scene becomes stacked
  cards, nothing autoplays and the pointer effects are off.
- The hero clip is muted and has a Pause button. The page looks complete without any video.

## Licenses
Site code: MIT (see `../LICENSE`). Geist and Geist Mono: SIL Open Font License 1.1. Lucide: ISC. React, Vite,
Tailwind CSS, Motion: MIT. GSAP: Standard "no charge" license. Sample pictures and clips: made with Google Flow
for this site, see `../ASSET-LICENSES.md`.
