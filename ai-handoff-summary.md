# AI handoff summary: Page Factory kit + Project Factory site
Updated: 2026-11-06 14:20 UTC | By: Claude (Cowork), AI Video Planner project chat
Last change: v1.3.0, Project Factory landing page in site/ with a GitHub Actions deploy, copied into D:
Status: ACTIVE

## Now
- v1.3.0 is in D:\claude-ai-video-edit\page-factory, not committed or pushed. Live site still v1.2.1.
- Waiting on: Loy to set Pages Source to GitHub Actions, then commit and push from Git Bash.

## Next action
- After Loy pushes: check the Actions run and the live site (/ and /manual/), then PageSpeed 3 times.

## Verified facts
- origin/main ba2a326 = v1.2.1 [verified 2026-11-06 13:01 UTC: git ls-remote]
- Files replaced in D: matched HEAD before the copy [verified 2026-11-06: device compare vs git cat-file]
- Site: 41/41 Playwright behaviour checks pass, no console errors [verified 2026-11-06: pf-interact.cjs]
- No horizontal scroll at 375/390/412/768; pin only at >=1024x680 with mouse [verified 2026-11-06: Playwright]
- First load 0.31 MB phone, 0.38 MB desktop + 0.68 MB hero clip after load [verified 2026-11-06: Playwright]
- Clean npm ci + npm run build works; dist 16 MB [verified 2026-11-06: fresh copy build]
- Flow: 5 posters 0 credits; 2 Veo 3.1 Quality clips 100 credits each, Loy approved [verified 2026-11-06: Flow UI]
- Actions: checkout@v7, setup-node@v7, configure-pages@v6, upload-pages-artifact@v5, deploy-pages@v5 [verified 2026-11-06: ls-remote]
- Pages: site up to 1 GB, deploy timeout 10 min, files over 100 MiB blocked [verified 2026-11-06: GitHub Docs]
- 45% Shorts revenue share [unverified: could not re-confirm, re-read Help 12504220]
- TikTok monetization rules [unverified: help pages unreadable by fetch tools]

## Key paths
- handoff.md: full record ("Project Factory site: decisions" holds the design, brief rules, Flow notes)
- site/: the landing page; site/README.md has commands; src/content/prompts.ts reads the prompt files
- site/assets-src/originals/: Flow masters; npm run media makes public/media/
- .github/workflows/pages.yml: build site/ and deploy to Pages
- ASSET-REQUESTS.md, VIDEO-REQUESTS.md, ASSET-LICENSES.md: how the media was made and its sources
- docs-src/manual.src.html + tools/build_manual.py: the v1.2 guide, served at /manual/
- D:\claude-ai-video-edit\page-factory: Loy's repo (he runs git there)

## Rules for this project
- Answer in English, simple, no em dashes, even when Loy writes Tagalog or Taglish.
- Multiple-choice questions with the recommended option first.
- Never ask for or handle passwords, codes, cookies or tokens. Loy signs in himself.
- Show Flow's visible cost before any credit use; Loy says credits are plentiful, still no wasteful retries.
- Never call a video generated until it is seen. Downloads need OK (name, source, size).
- Never close Loy's Chrome tabs. No hotlinked Flow URLs. No keys in VITE_ vars or the bundle.
- No commit, push or publish without Loy's OK. No index-writing git in the device shell (lock files).
- Surgical edits. Kit keeps the name Page Factory; only the site says Project Factory.
- Site: no anime.js, Lenis or Three.js; GSAP and Motion never animate the same element.
- Update both handoff files after big changes and before ending a session.

## Open questions
- Domain name for the site (Loy will buy one; then VITE_BASE=/)
- TikTok monetization rules and countries (check official pages in a browser)

## Where to look in handoff.md
- Design, brief rules, Flow costs and download options: handoff.md > Project Factory site: decisions
- Known traps (lock files, CRLF, proxy, layout bugs, loop seams): handoff.md > Failed Attempts
- Push and deploy steps: handoff.md > Next Steps
