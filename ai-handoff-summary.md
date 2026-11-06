# AI handoff summary: Page Factory kit + Project Factory site
Updated: 2026-11-06 19:30 UTC | By: Claude (Cowork), AI Video Planner project chat
Last change: v1.4.0 built, tested and copied into D: (not pushed yet)
Status: ACTIVE

## Now
- v1.4.0 is ready in D:\claude-ai-video-edit\page-factory; live site still v1.3.0 (03f7269).
- Waiting on: Loy to commit and push (commands in handoff.md > Next Steps; includes git rm --cached for
  the two old video originals).

## Next action
- After Loy pushes: check the live site, run pf-interact.cjs on the live URL, PageSpeed 3 times.

## Verified facts
- v1.4.0: 59/59 Playwright checks, no console errors at 375/768/1024/1440 on home and /manual/
  [verified 2026-11-06 ~19:15 UTC: production build, pf-interact.cjs, pf-check.cjs]
- Clean clone + npm ci + npm run build works; only site/public/media/*.mp4 are tracked mp4s
  [verified 2026-11-06 ~19:20 UTC: fresh git clone in the cloud]
- D: copy matches the cloud copy file by file; docs/, docs-src/, build_manual.py, sync-content.mjs deleted
  there with Loy's permission [verified 2026-11-06 ~19:25 UTC: CRLF-normalized hash lists]
- Flow: 5 Veo 3.1 Quality clips, 100 credits each, approved by Loy, seen finished, frame-checked
  [verified 2026-11-06: Flow UI, frame sheets]
- Flow video costs (9:16, 720p, 8 s): Omni 1.1 Flash 12, Veo 3.1 Lite 10, Fast 20, Quality 100
  [verified 2026-11-06: Flow app]
- Pages source = GitHub Actions [verified 2026-11-06 14:26 UTC]
- v1.3.0 PageSpeed: mobile 98-100, desktop 99-100 [verified 2026-11-06: pagespeed.web.dev]
- flow-mcp license [unverified: not stated in its README]
- 45% Shorts revenue share [unverified]; TikTok monetization rules [unverified]

## Key paths
- handoff.md: full record (decisions, Flow notes, failed attempts, next steps)
- site/: landing page (index.html) + guide (manual/index.html, src/guide/, src/content/guide.ts)
- site/scripts/optimize-media.mjs: loops start at frame 24, poster = that frame, bitrate cap
- site/assets-src/originals/: posters in git; pf-loop-*.mp4 originals local only (gitignored)
- kit/skills/hq-setup + shot-planner, kit/templates/studio.md + page/page.md: model, flow-mcp, signature
- tools/build_manifest.py: rebuild kit/manifest.json after kit changes
- ASSET-REQUESTS.md, VIDEO-REQUESTS.md (V3-V7 prompts), ASSET-LICENSES.md
- D:\claude-ai-video-edit\page-factory: Loy's repo (he runs git there)

## Rules for this project
- Answer in English, simple, no em dashes, even when Loy writes Tagalog or Taglish.
- Multiple-choice questions with the recommended option first.
- Never ask for or handle passwords, codes, cookies or tokens. Loy signs in himself.
- Show Flow's visible cost before any credit use; Loy says credits are plentiful, still no wasteful retries.
- Never call a video generated until it is seen. Downloads need OK (name, source, size).
- Never close Loy's Chrome tabs. No hotlinked Flow URLs. No keys in VITE_ vars or the bundle.
- No commit, push or publish without Loy's OK. No index-writing git in the device shell (lock files).
- Never install flow-mcp for Loy or any kit user; the signature is never hidden from kit users.
- Surgical edits. Kit keeps the name Page Factory; only the site says Project Factory.
- Update both handoff files after big changes and before ending a session.

## Open questions
- Domain name for the site (Loy will buy one; then VITE_BASE=/)
- TikTok monetization rules; flow-mcp license; flow-mcp on a real Windows PC

## Where to look in handoff.md
- Current state and Loy's v1.4 choices: handoff.md > Current State
- Flow tips (viewer download spots, prompts that read as motion): handoff.md > Project Factory site: decisions
- Known traps (lock files, loop seams, poster jumps, repo size): handoff.md > Failed Attempts
