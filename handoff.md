# handoff.md: Page Factory kit

## Goal
A free, shareable, versioned kit that sets up a faceless video page (Facebook, Instagram, Threads,
YouTube Shorts, TikTok) with Claude Code or Cowork. One HQ chat (MASTER-PROMPT.md) downloads the kit,
asks everything once and sets up everything; after that, one chat per video or per batch, weekly
reviews, new pages on demand. Improved through retros; studios upgrade with update-kit.
Repo: https://github.com/KuyaLoy/page-factory | Site: https://kuyaloy.github.io/page-factory/
Loy plans to buy a domain for the site later.

## Current State (2026-11-05)
- v1.2.1 built in the "AI Video Planner" project chat (Cowork, cloud). On 2026-11-06 it was copied into
  D:\claude-ai-video-edit\page-factory [verified 2026-11-06: device bridge, VERSION 1.2.1, assets present].
  Loy commits and pushes from Git Bash (the device shell has no GitHub login).
- v1.2.0 = new landing page (docs/, docs-src/, build script, .gitignore).
- v1.2.1 = research merge from the deep-research run wf_12669520-66c (finished 2026-11-05):
  research/01 and 03, CLAUDE.md template, page.md template, 4 skills, site FAQ.
- v1.1.0 is on GitHub [unverified: Loy's screenshot of the README showed the v1.1.0 sections].
- GitHub Pages serves main /docs [verified 2026-11-05: Loy's screenshot "Your site is live ... /docs"].
- Private preview of the new page: https://claude.ai/artifact/PKNSDS2UhkeQUpveVC8cFZ.
- The deep-research run is merged (v1.2.1). Still unverified after it: earnings per 1,000 views, the
  wait from Facebook's interest form to an invite, cross-posting effects on reach, Flow character
  consistency tools and 9:16 output, voice and open-source tool claims, TikTok rules.
- No studio has run the kit yet. Loy's own studio root will be D:\claude-ai-video-edit.

## Active Files
- MASTER-PROMPT.md: HQ setup (sections 0-9; section 2 downloads the kit).
- prompts/: new-video, weekly-batch, weekly-review, new-page, continue, trend-refresh, update-kit, retro.
- kit/skills/: 15 skills (router page-factory; hq-setup, platform-setup since 1.1.0).
- kit/templates/: CLAUDE.md, studio.md, page/ (page.md, mascot-bible.md, queue, done-topics, episodes,
  schedule, credits), episode/brief.md, studio.gitignore, env.example.
- research/01-03 + research/competitors/curiosity-stories.csv.
- docs-src/manual.src.html: the site source. {{PROMPT:KEY}} and {{VERSION}} placeholders; the part
  before <!-- HEAD:END --> is the head. Sections: hero, studio screens (live topic picker, data in the
  TOPICS object in the script), how it works (flow diagram drawn by JS), steps table, prompts command
  list, FAQ cards, COPY band, footer.
- docs-src/assets/: pictures and the Gertie clip (webm + mp4 + poster), CREDITS.md.
- tools/build_manual.py -> docs/index.html, docs/assets/, build/artifact.html, build/assets/ (build/ is
  gitignored), kit/manifest.json.
- VERSION (1.2.1), CHANGELOG.md, ROADMAP.md, README.md, kit/manifest.json, kit/EXTENDING.md.

## Changes Made
- 2026-11-05 v1.0.0: first kit (master prompt, 13 skills, templates, research, manual).
- 2026-11-05 v1.0.0 additions: update-kit and retro prompts, EXTENDING.md, manifest builder,
  continuity rules (source-of-truth order, verified tags).
- 2026-11-05 v1.1.0 (Loy: manual not user friendly, kit to be shared): HQ master prompt that downloads
  the kit and asks everything once, paid tools already owned, 5 platforms (have / create / skip);
  hq-setup and platform-setup skills; studio.md; episodes.csv claims; one job per chat; free-first
  defaults; personal defaults removed; videos 30-90 s; TikTok; landing page + tutorial manual.
- 2026-11-05 v1.2.0 (Loy: the page looked boring, not a landing page; wants motion graphics with
  anime.js, a hand-drawn style, no AI slop; will buy a domain): new site built with the taste-skill
  process. Direction "dressed as something else" (seed 1487268850), borrowed category: a DIY zine.
  Type: Permanent Marker + Kalam. Palette: orange #ff7a1f, ink #050f16, white sections.
  Motion: anime.js (headline reveal, diagram, panel captions), CSS entrances, rough.js pen lines.
  Live thing: pick a topic, the script / Flow sheet / post / handoff screens follow it.
  Pictures: public-domain early animation (Gertie 1914 poster, drawings, film loop; zoetrope strip;
  phenakistiscope; Muybridge). Inspector: 0 FAIL, 3 WARN (defended below). Critique round 2: about 8.0.
- 2026-11-05 v1.2.1 (deep-research run finished): YouTube's 1 Feb 2027 entry bar (1,000 subs + 20M Shorts
  views in 90 days or 8,000 watch hours) and monthly 10M Shorts floor; Facebook qualified views, the
  10-second Reel minimum and full Fast Track rules (fewer than 6 FB Reels in 180 days); YouTube AI
  personas rule (no advice from the mascot) and reused-content rule (own words only); Flow credits per
  generation. The 45% Shorts share is marked for re-checking (refuted 0-3 as a compound claim).

## Failed Attempts
- 2026-11-05: YouTube channel data via web fetch was thin and the RSS feed is robots-blocked. Used Chrome.
- 2026-11-05: facebook.com help-center policy pages and TikTok help/Creator Academy pages can't be read
  by the fetch tools (robots or empty). TikTok monetization facts are marked unverified.
- 2026-11-05: gh CLI in the cloud session has no repo access. Pushes are done from Loy's PC.
- 2026-11-05: First push failed with "fatal error in commit_refs_rules" (GitHub server side). A retry
  worked. Running a commit before the files arrive gives "nothing to commit".
- 2026-11-05: GitHub Pages on "main / (root)" shows the README, not the site. It must be main /docs.
- 2026-11-05 (site build): Chrome as root needs --no-sandbox (wrapper script for taste-skill inspect).
  anime.js 3 appends its transforms to an inline "translate(...)" string, so start positions must be
  written as translateX/translateY/rotate. A <video height> attribute beats aspect-ratio unless CSS
  sets height: auto. The repo .gitignore ignored *.mp4; docs/assets and docs-src/assets are now allowed.

- 2026-11-06: in the connected folder the device shell can't delete files, so git commands that drop
  their own lock files leave .git/index.lock behind and break Loy's git. One stale lock was renamed to
  .git/stale-index-lock-claude (safe to delete). Without delete permission, don't run git status, diff
  or checkout there; Loy runs git in Git Bash.
- 2026-11-06: the cloud copies of the CSV templates had CRLF line endings (Python csv default) while
  the repo stores LF. The repo versions were restored before the commit; the cloud copies are now LF.

## Inspector warnings kept on purpose (v1.2.0)
- card-rows: the studio-screen carousel and the FAQ card drawer are the dealt compositions, not grids.
- font-count: the only monospace is the prompt text inside closed "Read it" boxes; the meter counts it.
- side-scroll: the studio screens are a swipe row by design, with Back and Next buttons and a caption.

## Next Steps
1. Loy commits and pushes from D:\claude-ai-video-edit\page-factory in Git Bash (files copied 2026-11-06):
   git add -A
   git commit -m "v1.2.1: hand-drawn landing page, research merge"
   git push
2. Check https://kuyaloy.github.io/page-factory/ after 1-2 minutes (hard refresh).
3. Domain: buy it, add docs/CNAME, DNS records, Pages > Custom domain, Enforce HTTPS; update og:image.
4. First real run: open D:\claude-ai-video-edit in Claude Code and paste MASTER-PROMPT.md.
5. After EP001-EP005: prompts/retro.md on the studio folder.
6. Research gaps to fill (ROADMAP): earnings per 1,000 views, Facebook invite wait, TikTok rules.
7. Open questions: TikTok monetization rules for Loy's country; visible watermark or C2PA metadata on
   Flow exports (check the first upload for an automatic AI label).
