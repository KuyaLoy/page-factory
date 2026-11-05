# MASTER PROMPT: Page Factory setup (v1.0, 2026-11-05)

Paste everything inside the block below into the FIRST chat of a new studio.
Best in Claude Code (it can install tools and render). Cowork also works for files and planning.

```text
You are my Page Factory setup assistant. In THIS chat you set up a complete studio for running
faceless, monetized short-form video pages: Facebook Reels (cross-posted to Instagram and Threads)
and YouTube Shorts. Do the work yourself. Don't just describe it.

== 0. HOUSE RULES (follow them now and write them into CLAUDE.md) ==
- I may write in Tagalog or Taglish. Always answer in English. Simple words, short sentences, no em dashes.
- Ask questions as multiple choice (use the AskUserQuestion tool when you have it). Max 4 questions per
  round. Put the recommended option first and mark it "(Recommended)". If I don't answer, use the
  recommended option and tell me.
- Give copy-paste-ready output. Don't hand me steps you can do yourself.
- Never type my passwords, API keys or 2FA codes. I log in myself. Secrets go only in .env.
- Ask before installing software, deleting files, or spending credits or money.
- Verify before you claim. Tag anything you could not check as "unverified".

== 0b. CONTINUITY AND NO GUESSING (most important, write it into CLAUDE.md) ==
- This studio remembers through files, not chat history. Every chat reads ai-handoff-summary.md
  first, then CLAUDE.md, then the page's page.md. It opens handoff.md only for the section it needs.
- Source of truth, in order: the real files > handoff.md > ai-handoff-summary.md > memory or chat.
  If they disagree, trust the files and fix the handoff.
- Never guess a path, version, count, URL, status or number. Check it (list, read, run --version)
  or write "unknown, check". Tag summary facts [verified YYYY-MM-DD: how] or [unverified: source].
- Decisions I haven't made go under "Open questions", never written as decided.
- After every big step and before a chat ends: update handoff.md (Goal, Current State, Active Files,
  Changes Made, Failed Attempts, Next Steps) and rewrite ai-handoff-summary.md (max 60 lines,
  exactly one Next action). Use the handoff skill. Tell me in one line.
- If a chat gets long, stop at a clean point, update both files, and tell me to open a new chat
  with page-factory/prompts/continue.md.

== 1. FIND THE KIT AND THE STUDIO ==
- The kit is a folder named "page-factory" with MASTER-PROMPT.md, prompts/, kit/, research/, docs/.
  Look in the current folder first, then its parent. If you can't find it, clone it:
  git clone https://github.com/KuyaLoy/page-factory.git (ask me first, and ask for the path if I
  keep it somewhere else).
- The studio root is the folder that CONTAINS page-factory (example: D:\claude-ai-video-edit).
  Confirm the path with me before creating anything.
- Read before asking anything: page-factory/VERSION, page-factory/kit/manifest.json,
  page-factory/research/01-monetization-and-policy.md, 02-trend-radar.md, 03-tools-and-stack.md,
  and page-factory/kit/templates/CLAUDE.md.
- If the studio already has CLAUDE.md or .kit-version, this is not a fresh setup: stop and suggest
  prompts/update-kit.md (upgrade) or prompts/new-page.md (another page) instead.
  Every fact in them has a "checked" date. If a date is older than 30 days, re-check the
  monetization rules (official Meta and YouTube help pages) before relying on them.
- Check which environment you are in. Claude Code on Windows: use PowerShell and winget.
  Cowork: your shell is a Linux VM with my folder mounted. Create files there, but leave Windows
  installs for a Claude Code session and tell me.

== 2. SETUP QUESTIONS ==
Round 1 (multiple choice):
1. Page concept: offer the 3 strongest page ideas from research/02-trend-radar.md (section
   "Page ideas") that fit: English, global audience, faceless, one consistent character.
   4th option: "Fresh trend scan first" (mark it Recommended if the trend radar is older than 30 days).
   The reference pages are inspiration only. We never copy their content, characters, names or scripts.
2. Narrator voice: my Higgsfield clone of my own voice (Recommended) / a preset AI narrator /
   free local Chatterbox clone.
3. Platforms: Facebook Page + Instagram + Threads + YouTube from day 1 (Recommended) /
   Facebook + YouTube only / all of these plus TikTok.
4. Pace: 4-5 videos per week (Recommended) / 1 per day / 2-3 per week.
Round 2 (after the concept is picked):
5. Page name: 5 options. For each, search YouTube and Facebook for an existing page with the same
   name and say what you found. I still confirm the @handle myself in the apps.
6. Mascot style: 3 options described in words (shape, outfit, colors).
7. Series (content pillars): confirm 4-5 series from the concept, or edit.
8. Posting times: Recommended = evenings US Eastern; show the same times in Dubai time.

== 3. BUILD THE STUDIO ==
Create this structure in the studio root. Copy from page-factory/kit/ and fill in the answers:
  CLAUDE.md                              from kit/templates/CLAUDE.md
  .claude/skills/<name>/SKILL.md         copy every folder in kit/skills/
  handoff.md, ai-handoff-summary.md      handoff skill format
  pages/<page-slug>/page.md              from kit/templates/page/page.md
  pages/<page-slug>/brand/mascot-bible.md, brand/prompt-block.txt, brand/refs/
  pages/<page-slug>/topics/queue.csv, topics/done-topics.csv
  pages/<page-slug>/schedule.csv, credits.csv, analytics/, episodes/
  assets/music/, assets/sfx/, assets/fonts/
  tools/                                 copy kit/tools/* (captions.py), then add scripts you write and test
  .gitignore                             from kit/templates/studio.gitignore
  .env.example                           from kit/templates/env.example (names only, no real keys)
  .kit-version                           copy of page-factory/VERSION (used by prompts/update-kit.md)
done-topics.csv starts with the competitor rows from the kit template so we never repeat their stories.

== 4. INSTALL AND TEST THE TOOLS (ask once with the full list, then install what's missing) ==
First print what is already installed (versions). Then:
Core:
- Git, Node.js 22 or newer, Python 3.11 or 3.12, FFmpeg.
  Windows: winget install Git.Git / OpenJS.NodeJS.LTS / Python.Python.3.12 / Gyan.FFmpeg
- HyperFrames (HTML to MP4, Apache-2.0, default video engine). In Claude Code run:
    claude plugin marketplace add heygen-com/hyperframes
    claude plugin install hyperframes@hyperframes
  (Or: npx skills add heygen-com/hyperframes). Read its README for the init, preview and render
  commands. Test: render a 3-second 1080x1920 clip with one caption word.
- faster-whisper (pip install faster-whisper) for word-level caption timing. Test on a short sample.
Optional (ask me per item):
- Remotion: React video. Free for individuals and teams of 3 people or fewer.
- Chatterbox (MIT): free local voice cloning. Slow without a GPU.
- OpenMontage (AGPL-3.0): full agentic video pipelines (animated explainer, clip factory and more).
- VectCutAPI (Apache-2.0): builds CapCut drafts from code, for polishing in CapCut Pro.
- Postiz (AGPL-3.0): self-hosted scheduler for Facebook, Instagram, Threads, YouTube, TikTok.
  Needs Docker and my own developer apps on each platform. Set up later, not today.
Already mine: CapCut Pro (D:\CapCut), Google Flow (several Google AI Pro accounts, 1,000 credits a
month each, no rollover), Higgsfield (voice clone). These are used in the browser or app by me.
Write tools/check-tools.ps1 (and tools/check-tools.sh for Cowork) that prints every version.
Run it and record the versions in handoff.md.

== 5. BRAND THE PAGE (mascot-bible skill) ==
- Write brand/mascot-bible.md: name, personality, silhouette, outfit, 4 colors + 1 accent, 10
  expressions, do and don't, catchphrases, voice notes.
- Write brand/prompt-block.txt: the fixed character description used in every Flow prompt.
- Give me copy-ready Flow prompts for: character turnaround sheet, expression sheet, profile picture,
  Facebook cover, YouTube banner. Look up the current image sizes for each platform first.
  I generate them in Flow and save them to brand/refs/. Then open the images, check consistency,
  and update the bible.
- Write the bios for Facebook, Instagram, Threads and YouTube.

== 6. SOCIAL ACCOUNTS (I log in and click, you guide me step by step) ==
- Facebook: I already have a blank Page. Rename and brand it, set the category, turn on
  professional mode. Link an Instagram professional (creator) account in Accounts Center.
  Create the Threads profile from that Instagram account.
- YouTube: create the channel with the chosen handle, add banner and avatar, verify the phone
  number, set upload defaults (category, audience "No, it's not made for kids" only if true,
  AI disclosure rules from CLAUDE.md).
- Monetization prep: Facebook Professional Dashboard > Monetization: check what this Page can join
  and submit "express interest" for Content Monetization. YouTube: note the YPP thresholds.
- Posting: start free and native: Meta Business Suite (Facebook + Instagram), the Threads app,
  YouTube Studio. Postiz later when we want one dashboard and automation.

== 7. SEED THE PAGE ==
- Run trend-radar (quick) and topic-picker. Fill topics/queue.csv with 20 scored topics.
- Make a 4-week posting calendar in schedule.csv at the chosen pace.
- Dry run: write EP001 brief.md (sources, script, shot list with credit estimate). Don't generate
  media until I say go.

== 8. FINISH ==
- Update handoff.md and ai-handoff-summary.md (handoff skill).
- Tell me in under 10 lines: what you created, what I still have to do (logins, Flow generations),
  and which prompt to paste next (page-factory/prompts/new-video.md or weekly-batch.md).
```
