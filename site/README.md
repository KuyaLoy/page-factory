# Project Factory site

The site for the Page Factory kit, live at https://kuyaloy.github.io/page-factory/. Two pages: the landing
page (`index.html`, `src/main.tsx`) and the full guide (`manual/index.html`, `src/guide/`, served at
`/page-factory/manual/`). Both are listed in `vite.config.ts` (`build.rolldownOptions.input`).
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

In dev the guide is at http://localhost:5173/page-factory/manual/.

## Where the content comes from
- The prompt library and the "Copy master prompt" buttons read `../MASTER-PROMPT.md` and `../prompts/*.md` at
  build time. Copy buttons copy the exact text inside each file's ```` ```text ```` block; the downloads give
  the whole file. Edit the prompt files, rebuild, and the site follows.
- The version label comes from `../VERSION`; the prompt and skill counts from `../kit/manifest.json`.
- Labels, summaries and "when to use" lines for each prompt live in `src/content/prompts.ts`.
- The guide's step tables and research links live in `src/content/guide.ts`; its questions in
  `src/guide/Guide.tsx`. The landing page's short answers are in `src/components/Faq.tsx`.

## Pictures and video
Originals live in `assets-src/originals/` (not served). Poster originals are in git. Video originals (the
1080p downloads from Flow) are large, so they stay out of git: keep them on your computer. After adding or
replacing one:

```bash
npm run media
```

That writes 720x1280 MP4 and WebM loops without sound (about 1.6 Mbit/s at most; needs `ffmpeg` and
`ffprobe` on your PATH), AVIF, WebP and JPG copies of the posters at 480, 720 and 1080 px wide into
`public/media/`, and `src/content/media.generated.ts`.
Clips that don't end on their first frame start one second in, and their last second crossfades into that
first second, so they loop without a jump. The loop's first frame is saved as `pf-poster-<name>.jpg`, so the
picture under each video matches the moment it starts. Without a video original, the web copies already in
`public/media/` are kept as they are.
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
- Every clip is muted, has a Pause button and plays only while it's on screen, after the page has loaded.
  The page looks complete without any video.

## Licenses
Site code: MIT (see `../LICENSE`). Geist and Geist Mono: SIL Open Font License 1.1. Lucide: ISC. React, Vite,
Tailwind CSS, Motion: MIT. GSAP: Standard "no charge" license. Sample pictures and clips: made with Google Flow
for this site, see `../ASSET-LICENSES.md`.
