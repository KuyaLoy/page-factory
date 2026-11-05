# Changelog

All notable changes to the Page Factory kit. Versions follow SemVer (see kit/EXTENDING.md).
Studios upgrade with prompts/update-kit.md, which runs the Migration steps of every skipped version.

## 1.1.0 (2026-11-05)
Made for sharing: free-first, spoon-fed, and the master prompt is now the HQ that sets up everything.
- MASTER-PROMPT.md rewritten as the HQ setup. It downloads the kit from GitHub by itself, asks every
  question once (about you, paid tools you already have, the page, each platform, pace and visuals),
  creates or connects Facebook, Instagram, Threads, YouTube and TikTok accounts, installs free tools,
  builds the brand and content plan, runs a 10-second test clip, and writes complete handoffs.
- New skills: hq-setup (setup checklist and question rounds), platform-setup (account guides for all
  five platforms, posting tools, monetization prep).
- New templates: studio.md (all setup answers, so video chats never re-ask), episodes.csv (episode
  claims so chats never collide).
- One job per chat: one video or one batch per chat, then a fresh chat. Episodes are claimed at the
  start and closed at the end.
- Free and open-source by default: Google Flow free daily credits (50 a day), HyperFrames + FFmpeg,
  faster-whisper, your own voice or Chatterbox or Kokoro, native schedulers. Paid tools are used only
  if the user already has them; new paid tools are suggested only after a page earns.
- Removed personal defaults (Higgsfield, CapCut Pro, fixed paths and names). The kit is generic.
- Video length is 30-90 s, usually 45-60 s, set by the story. Scripts, shot counts and credit budgets
  scale with length.
- TikTok added to setup, publishing, reviews and research (rules flagged unverified where TikTok's
  help pages couldn't be read).
- Manual rebuilt as a landing page and step-by-step tutorial with copy buttons and an FAQ; research
  moved under "More details".
- Competitor title list moved from the done-topics template to research/competitors/curiosity-stories.csv.
- MIT license added.
- Optional easter egg: setup asks whether to hide a tiny "KuyaLoy" (or the user's own) signature in
  one background spot per video. Off unless the user says yes.

Migration: none needed (no studio ran 1.0.0). If one did: copy kit/templates/studio.md and
kit/templates/page/episodes.csv into the studio, fill them from CLAUDE.md and page.md, and copy the
two new skills (hq-setup, platform-setup) into .claude/skills/.

## 1.0.0 (2026-11-05)
First release.
- MASTER-PROMPT.md: one-time studio setup (rules, continuity and no-guessing rules, skills, tools,
  accounts, page brand, topic queue).
- Prompts: new-video, weekly-batch, weekly-review, new-page, trend-refresh, continue, update-kit, retro.
- 13 skills, templates, kit/tools/captions.py, research (checked 2026-11-05), manual (docs/index.html).

Migration: none (first release).
