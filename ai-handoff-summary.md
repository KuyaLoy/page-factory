# AI handoff summary: Page Factory kit
Updated: 2026-11-05 19:52 Asia/Dubai | By: Claude (Cowork), AI Video Planner project chat
Last change: v1.0.0 kit built, manual published as an Artifact, files delivered to Loy's PC
Status: ACTIVE

## Now
- Kit v1.0.0 is complete and waiting to be pushed to GitHub.
- Waiting on: Loy to push (README "First push") and enable GitHub Pages (main, /docs).

## Next action
- Loy runs the push commands in PowerShell at D:\claude-ai-video-edit\page-factory (see README.md).

## Verified facts
- Kit v1.0.0: 13 skills, 9 prompts, 10 templates, 1 tool [verified 2026-11-05: build_manual.py output]
- Manual HTML parses clean, no overflow at 390 px [verified 2026-11-05: Playwright screenshots]
- Manual Artifact: https://claude.ai/artifact/PKNSDS2UhkeQUpveVC8cFZ [verified 2026-11-05: publish result]
- ffmpeg commands in video-assembler work on ffmpeg 6.1.1 [verified 2026-11-05: test render]
- captions.py chunking and SRT timing work [verified 2026-11-05: unit test]; transcription itself [unverified: not run]
- HyperFrames install commands [unverified: copied from its README, not run]
- Repo https://github.com/KuyaLoy/page-factory exists, empty [unverified: Loy's message]
- Research facts carry their own dates and confidence tags in research/*.md

## Key paths
- MASTER-PROMPT.md: setup prompt for a new studio
- prompts/: per-chat prompts (new-video, weekly-batch, update-kit, retro ...)
- kit/skills/, kit/templates/, kit/tools/: copied into studios
- research/: monetization, trend radar, tools (checked 2026-11-05)
- docs-src/manual.src.html + tools/build_manual.py: manual source and build
- VERSION, CHANGELOG.md, ROADMAP.md, kit/manifest.json, kit/EXTENDING.md: versioning and growth

## Rules for this project
- Loy may write Tagalog or Taglish; always answer in English, simple, no em dashes.
- Multiple-choice questions with the recommended option first.
- Inspiration from other pages is format-only. Never copy content.
- Every kit change: bump VERSION, CHANGELOG (with Migration), rebuild manual, update both handoff files.
- Never handle Loy's passwords or tokens. He pushes to GitHub from his PC.

## Open questions
- Page #1 concept (setup chat will ask; Time Intern recommended) (Loy)
- Higgsfield commercial terms on Loy's plan (Loy to check)
- Visible watermark on Flow Pro exports? (check first exports)
- Facebook Monetization tab for a UAE-run Page (check in Professional Dashboard)

## Where to look in handoff.md
- Why things were built this way: handoff.md > Changes Made
- What failed (blocked fetches, gh access): handoff.md > Failed Attempts
- Full next steps: handoff.md > Next Steps
