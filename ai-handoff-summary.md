# AI handoff summary: Page Factory kit
Updated: 2026-11-05 | By: Claude (Cowork), AI Video Planner project chat
Last change: v1.1.0 built (HQ master prompt, free-first, one chat per video, tutorial manual)
Status: ACTIVE

## Now
- v1.1.0 is in D:\claude-ai-video-edit\page-factory, not pushed yet.
- Waiting on: Loy to push v1.1.0 and confirm GitHub Pages serves main /docs.

## Next action
- Loy runs in that folder: git add -A, git commit -m "v1.1.0: ...", git push.

## Verified facts
- v1.1.0 build: 15 skills, 9 prompts, 12 templates, 1 tool [verified 2026-11-05: build_manual.py output]
- Manual HTML parses clean, no overflow at 390 px [verified 2026-11-05: Playwright screenshots]
- v1.0.0 is on GitHub main [verified 2026-11-05: Loy's terminal screenshot "main -> main"]
- Pages source was main / (root) [verified 2026-11-05: Loy's screenshot]; switched to /docs [unverified]
- Flow: 50 free credits a day for everyone, Nano Banana 2 Lite no charge [verified 2026-11-05: Flow Help]
- YouTube: own cloned voice and animation need no AI disclosure [verified 2026-11-05: Help 14328491]
- TikTok monetization rules [unverified: help pages unreadable by fetch tools]
- HyperFrames install commands [unverified: from its README, not run]
- Research facts carry their own dates and confidence tags in research/*.md

## Key paths
- MASTER-PROMPT.md: HQ setup (downloads the kit, asks everything, sets up everything)
- prompts/: new-video, weekly-batch, weekly-review, continue, new-page, trend-refresh, update-kit, retro
- kit/skills/hq-setup, kit/skills/platform-setup: setup checklist and account guides
- kit/templates/studio.md, kit/templates/page/episodes.csv: setup answers, episode claims
- docs-src/manual.src.html + tools/build_manual.py: manual source and build
- VERSION, CHANGELOG.md, ROADMAP.md, kit/manifest.json, kit/EXTENDING.md

## Rules for this project
- Loy types Tagalog or Taglish; always answer in English, simple, no em dashes.
- Multiple-choice questions with the recommended option first.
- The kit is shared: generic wording, free and open-source by default, no personal defaults.
- Inspiration from other pages is format-only. Never copy content.
- Every kit change: bump VERSION, CHANGELOG (with Migration), rebuild the manual, update both handoffs.
- Never handle Loy's passwords or tokens. He pushes from his PC.

## Open questions
- TikTok monetization rules and countries (check official pages in a browser)
- Visible watermark on Flow exports? (check the first exports)
- Deep-research workflow report: merge into research/ when it lands (v1.1.1)

## Where to look in handoff.md
- Why things are built this way: handoff.md > Changes Made
- Blocked fetches, push errors: handoff.md > Failed Attempts
- Full next steps: handoff.md > Next Steps
