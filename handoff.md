# handoff.md: Page Factory kit

## Goal
A free, shareable, versioned kit that sets up a faceless video page (Facebook, Instagram, Threads,
YouTube Shorts, TikTok) with Claude Code or Cowork. One HQ chat (MASTER-PROMPT.md) downloads the kit,
asks everything once and sets up everything; after that, one chat per video or per batch, weekly
reviews, new pages on demand. Improved through retros; studios upgrade with update-kit.
Repo: https://github.com/KuyaLoy/page-factory | Manual: https://kuyaloy.github.io/page-factory/

## Current State (2026-11-05)
- v1.1.0 built in the "AI Video Planner" project chat (Cowork) and copied to
  D:\claude-ai-video-edit\page-factory. Waiting for Loy to commit and push it.
- v1.0.0 is on GitHub (Loy pushed it; his terminal showed "main -> main").
- GitHub Pages is on. Loy's screenshot showed source "main / (root)"; he was told to switch to /docs.
- Manual Artifact (private preview): https://claude.ai/artifact/PKNSDS2UhkeQUpveVC8cFZ (updated to v1.1.0).
- The deep-research workflow (run wf_12669520-66c) was still verifying claims. Merge new findings into
  research/ as v1.1.1 when it reports.
- No studio has run the kit yet. Loy's own studio root will be D:\claude-ai-video-edit.

## Active Files
- MASTER-PROMPT.md: HQ setup (sections 0-9; section 2 downloads the kit).
- prompts/: new-video (one video), weekly-batch (a batch), weekly-review, new-page, continue,
  trend-refresh, update-kit, retro.
- kit/skills/: 15 skills (router page-factory; new in 1.1.0: hq-setup, platform-setup).
- kit/templates/: CLAUDE.md, studio.md (new), page/ (page.md, mascot-bible.md, queue, done-topics,
  episodes (new), schedule, credits), episode/brief.md, studio.gitignore, env.example.
- research/01-03 + research/competitors/curiosity-stories.csv.
- docs-src/manual.src.html + tools/build_manual.py -> docs/index.html, build/artifact.html (gitignored).
- VERSION (1.1.0), CHANGELOG.md, ROADMAP.md, README.md, kit/manifest.json, kit/EXTENDING.md.

## Changes Made
- 2026-11-05 v1.0.0: first kit (master prompt, 13 skills, templates, research, manual).
- 2026-11-05 v1.0.0 additions: update-kit and retro prompts, EXTENDING.md, manifest builder,
  continuity rules (source-of-truth order, verified tags).
- 2026-11-05 v1.1.0 (Loy's feedback: manual not user friendly, kit to be shared):
  HQ master prompt that downloads the kit and asks everything once incl. paid tools already owned and
  all 5 platforms (have / create / skip); hq-setup and platform-setup skills; studio.md; episodes.csv
  claims; one job per chat; free-first defaults (Flow free 50 credits/day, HyperFrames, faster-whisper,
  own voice / Chatterbox / Kokoro); Higgsfield and other personal defaults removed; video length
  30-90 s (usually 45-60 s); TikTok added; manual rebuilt as landing page + tutorial.

## Failed Attempts
- 2026-11-05: YouTube channel data via web fetch was thin and the RSS feed is robots-blocked. Used Chrome.
- 2026-11-05: facebook.com help-center policy pages and TikTok help/Creator Academy pages can't be read
  by the fetch tools (robots or empty). TikTok monetization facts are marked unverified.
- 2026-11-05: gh CLI in the cloud session has no repo access. Pushes are done from Loy's PC.
- 2026-11-05: First push failed with "fatal error in commit_refs_rules" (GitHub server side). A retry
  worked. Also: running the v1.1.0 commit before the files arrived gives "nothing to commit".

## Next Steps
1. Loy pushes v1.1.0 from D:\claude-ai-video-edit\page-factory:
   git add -A / git commit -m "v1.1.0: HQ setup, free-first, one chat per video" / git push
2. Confirm GitHub Pages uses main /docs and the landing page shows v1.1.0.
3. First real run: open D:\claude-ai-video-edit in Claude Code and paste MASTER-PROMPT.md.
4. After EP001-EP005: prompts/retro.md on the studio folder, release v1.2.0.
5. Merge the deep-research workflow report into research/ (v1.1.1).
6. Open questions: TikTok monetization rules for Loy's country; visible watermark on Flow exports;
   Higgsfield terms if Loy keeps using his paid voice.
