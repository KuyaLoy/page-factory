# handoff.md: Page Factory kit

## Goal
A reusable, versioned kit (master prompt + skills + templates + research + manual) that sets up a
faceless Facebook Reels / Instagram / Threads / YouTube Shorts studio in Claude Code or Cowork.
One setup chat, then one chat per video (or a weekly batch), weekly reviews, new pages on demand.
The kit improves through retros and studios upgrade with update-kit. Repo: github.com/KuyaLoy/page-factory.

## Current State (2026-11-05)
- v1.0.0 built in the AI Video Planner chat (Cowork, claude.ai project "AI Video Planner").
- Manual built to docs/index.html and published as a private Claude Artifact:
  https://claude.ai/artifact/PKNSDS2UhkeQUpveVC8cFZ
- Repo created by Loy (public, empty): https://github.com/KuyaLoy/page-factory. Not pushed yet.
- The deep-research workflow (run wf_12669520-66c) was still verifying claims when v1.0.0 shipped.
  The kit's research files are based on official pages read directly in that chat. Merge any new
  findings from that report into research/ as v1.0.1.
- Nothing has been run in a studio yet. No page is set up. Page #1 concept not chosen (Loy wants the
  setup chat to help pick; Time Intern is the recommendation).

## Active Files
- MASTER-PROMPT.md: setup prompt (sections 0, 0b continuity, 1-8).
- prompts/*.md: new-video, weekly-batch, weekly-review, new-page, trend-refresh, continue, update-kit, retro.
- kit/skills/*/SKILL.md: 13 skills (router: page-factory).
- kit/templates/: CLAUDE.md, page/, episode/brief.md, studio.gitignore, env.example.
- kit/tools/captions.py, kit/manifest.json, kit/EXTENDING.md.
- research/01-monetization-and-policy.md, 02-trend-radar.md, 03-tools-and-stack.md.
- docs-src/manual.src.html + tools/build_manual.py -> docs/index.html, build/artifact.html (gitignored).
- VERSION, CHANGELOG.md, ROADMAP.md, README.md.

## Changes Made
- 2026-11-05: v1.0.0 created. Research checked against official Meta, YouTube, Google Flow pages and
  tool repos (dates in each research file). Ricks Clips channel viewed in Chrome for the reference analysis.
- 2026-11-05: Added update-kit and retro prompts, EXTENDING.md, manifest builder, continuity rules
  (source-of-truth order, verified tags) after Loy asked for scalability and anti-hallucination handoffs.
- 2026-11-05: Manual QA: HTML structure parsed clean, no em dashes, no horizontal scroll at 390 px,
  timing chart ticks placed to scale, slate grid fixed to 3 columns.

## Failed Attempts
- 2026-11-05: Reading YouTube channel data by web fetch returned a thin page; the channel RSS feed is
  blocked by robots.txt. Used the Chrome browser view of the channel instead.
- 2026-11-05: facebook.com help-center pages (Content Monetization Policies, Partner Monetization
  Policies) are blocked by robots.txt for automated fetching. Used creators.facebook.com, about.fb.com
  and secondary sources. Check the policy pages manually if needed.
- 2026-11-05: gh CLI in the cloud session can't access repos (session GitHub access not enabled).
  Pushing must be done from Loy's PC.

## Next Steps
1. Push v1.0.0 from D:\claude-ai-video-edit\page-factory (commands in README), then enable GitHub
   Pages (main, /docs).
2. Run MASTER-PROMPT.md in Claude Code at D:\claude-ai-video-edit (setup chat).
3. Make EP001-EP005, then run prompts/retro.md on the studio folder and release v1.1.
4. Merge the deep-research workflow report into research/ (v1.0.1) when it is available.
5. Open questions: Higgsfield commercial terms for Loy's plan; whether Flow Pro exports carry a visible
   watermark; what the Facebook Monetization tab shows for Loy's UAE-run Page.
