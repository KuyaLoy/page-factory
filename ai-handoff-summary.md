# AI handoff summary: Page Factory kit
Updated: 2026-11-05 | By: Claude (Cowork), AI Video Planner project chat
Last change: v1.2.1, research merge (YouTube 2027 thresholds, Facebook rules, no-advice rule)
Status: ACTIVE

## Now
- v1.2.1 files are in D:\claude-ai-video-edit\page-factory [verified 2026-11-06: device bridge];
  not committed or pushed yet.
- Preview: https://claude.ai/artifact/PKNSDS2UhkeQUpveVC8cFZ (private).
- Waiting on: Loy to run git add, commit and push in Git Bash in that folder.

## Next action
- In that folder: git add -A, git commit -m "v1.2.1: hand-drawn landing page, research merge", git push.

## Verified facts
- v1.2.1 build: 15 skills, 9 prompts, 12 templates, 1 tool [verified 2026-11-05: build_manual.py output]
- YouTube from 1 Feb 2027: new channels need 1,000 subs + 20M Shorts views in 90 days or 8,000 watch
  hours; YPP channels need 10M Shorts views per 90 days for Shorts pay [verified 2026-11-05: blog.youtube
  2026-08-10, Help 12843009]
- Facebook Fast Track needs US/CA/UK/AU residence and fewer than 6 FB Reels in 180 days [verified
  2026-11-05: creators.facebook.com/creator-fast-track]
- 45% Shorts revenue share [unverified: second check 2026-11-05 could not re-confirm, re-read Help 12504220]
- Site: taste-skill inspect 0 FAIL, 3 WARN at 1440/768/390 [verified 2026-11-05: inspect.mjs]
- Copy buttons, filter, letter keys, FAQ links, reduced motion work in Chromium [verified 2026-11-05: Playwright]
- Pages serves main /docs [verified 2026-11-05: Loy's screenshot]
- v1.1.0 on GitHub [unverified: README screenshot showed v1.1.0 sections]
- Flow: 50 free credits a day for everyone [verified 2026-11-05: Flow Help]
- YouTube: own cloned voice and animation need no AI disclosure [verified 2026-11-05: Help 14328491]
- TikTok monetization rules [unverified: help pages unreadable by fetch tools]
- Site pictures are public domain [verified 2026-11-05: Wikimedia Commons pages, see CREDITS.md]

## Key paths
- MASTER-PROMPT.md, prompts/, kit/skills/, kit/templates/, research/
- docs-src/manual.src.html (site source) + docs-src/assets/ (pictures, CREDITS.md)
- tools/build_manual.py -> docs/ (Pages) and build/artifact.html (Artifact preview)
- VERSION, CHANGELOG.md, ROADMAP.md, kit/manifest.json, kit/EXTENDING.md

## Rules for this project
- Loy types Tagalog or Taglish; always answer in English, simple, no em dashes.
- Multiple-choice questions with the recommended option first.
- The kit is shared: generic wording, free and open-source by default, no personal defaults.
- Inspiration from other pages is format-only. Never copy content.
- Every kit change: bump VERSION, CHANGELOG (with Migration), rebuild, update both handoffs.
- Never handle Loy's passwords or tokens. He pushes from his PC.
- Don't run git in the device shell on the connected folder without delete permission (lock files).
- Site style: hand-drawn zine (Permanent Marker + Kalam, orange/ink/white, rough.js, anime.js).

## Open questions
- Domain name for the site (Loy will buy one)
- TikTok monetization rules and countries (check official pages in a browser)
- Unverified after research: earnings per 1,000 views, Facebook invite wait, cross-posting effects

## Where to look in handoff.md
- Why things are built this way: Changes Made
- Known traps (Pages root, anime.js transforms, mp4 ignore): Failed Attempts
- Warnings kept on purpose: Inspector warnings kept on purpose
