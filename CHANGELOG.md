# Changelog

All notable changes to the Page Factory kit. Versions follow SemVer (see kit/EXTENDING.md).
Studios upgrade with prompts/update-kit.md, which runs the Migration steps of every skipped version.

## 1.4.0 (2026-11-06)
A video model choice, optional Flow automation and the KuyaLoy signature on by default. The full guide is
rebuilt in the Project Factory brand, and the sample clips now move.
Kit:
- Video model: motion shots use Flow's default video model, Omni 1.1 Flash (7 to 15 credits a clip).
  Setup (Round E) lets the owner pick Veo 3.1 Lite, Fast or Quality instead, each shown with its credit
  cost, and any single shot can still be switched. shot-planner uses the studio's model and keeps Veo 3.1
  Quality for proven hero shots, only when the owner picks it. Costs seen in the Flow app on 2026-11-06 are
  in research/03.
- Flow automation (optional): setup asks whether to use flow-mcp (github.com/GTAI-1/flow-mcp), a
  third-party tool the owner installs from its own README. It's off by default and the kit never installs
  it. When it's on, shot-planner shows the shots, models and total credits and waits for OK, sets a credit
  cap per shot, downloads into raw/, never regenerates because a download failed, and asks before any
  retry. Its README's warnings (it can break when Flow changes; automated use may be against Google's
  terms) are in research/03 and are said at setup.
- KuyaLoy signature: on by default now. Setup always tells the owner, who can keep it, use their own name
  or handle, or turn it off (the "Easter egg:" line in page.md). It's never hidden from the owner.
- tools/build_manifest.py replaces tools/build_manual.py: the old guide is gone, so only kit/manifest.json
  is rebuilt. kit/EXTENDING.md and prompts/retro.md point to it.
Site:
- The full guide at /manual/ is rebuilt in the Project Factory brand: what you need, opening your folder,
  every step of day one, every video and every week (with copy buttons), all 9 prompts (copy, download,
  GitHub), the questions people ask and the research files with their dates. The v1.2 hand-drawn page and
  its source (docs/, docs-src/) are removed, so old links under /manual/assets/ and /assets/ stop working.
- New sample clips with obvious motion, made in Flow with Veo 3.1 Quality: a drone glide, a walk-through,
  a push-in, a time-lapse and slow motion. All five gallery cards play, muted, while they're on screen; the
  hero uses the drone clip.
- npm run media: loops start one second in and crossfade their last second into it, each poster is its
  loop's first frame, and clips are capped at about 1.6 Mbit/s. Video originals stay out of git.
- FAQ answers for the video model, Flow automation and the signature. Footer: "Made by KuyaLoy with Claude".

Migration: copy kit/skills/hq-setup/SKILL.md and kit/skills/shot-planner/SKILL.md into .claude/skills/
(same folders). In studio.md, add "model: Omni 1.1 Flash (default)" to the Notes of the Motion clips row and
add the "Flow automation" row from kit/templates/studio.md set to "off", unless the owner asks for another
model or for flow-mcp. In CLAUDE.md, the Kit line now reads "Kit (templates, skills, research, prompts)".
Leave the "Easter egg:" line in each page.md as it is: the owner already chose. Tell the owner that the
signature is on by default for new pages and that they can change theirs any time, and that flow-mcp is
optional and theirs to install. Maintainers: run python tools/build_manifest.py after kit changes. Video
originals are no longer tracked: run git rm --cached site/assets-src/originals/pf-loop-lake.mp4
site/assets-src/originals/pf-loop-waterfall.mp4 once (the files stay on disk).

## 1.3.0 (2026-11-06)
A new landing page, Project Factory, built as a small React site in site/ and deployed by GitHub Actions.
The kit itself is unchanged: prompts, skills, templates and research are the same as 1.2.1.
- New site in site/: React, TypeScript and Vite, Tailwind CSS, GSAP ScrollTrigger for one pinned "how a
  video gets made" scene, Motion for small UI transitions, Lucide icons. No server, no API, no secrets.
- First screen with "Copy master prompt" (copies the exact paste block) and a download of the full
  MASTER-PROMPT.md.
- An illustrated walk through one video: the prompt, then script, voice and shots on a timeline, then a
  finished 9:16 frame. It becomes stacked cards on phones, touch screens and with "reduce motion".
- Honest setup steps and costs, sample frames, a searchable prompt library built from the real prompt
  files (copy, download, view on GitHub), and a short FAQ.
- Sample pictures and clips made with Google Flow for the site (Nano Banana Pro, Veo 3.1 Quality), credited
  in ASSET-LICENSES.md, with the prompts in ASSET-REQUESTS.md and VIDEO-REQUESTS.md.
- The v1.2 hand-drawn page lives on as the full guide at /manual/. Old picture links under /assets/ and old
  #p-... and #faq-... links still work.
- .github/workflows/pages.yml builds site/ and deploys it to GitHub Pages.
- The site is branded Project Factory. The repository, kit files and skills keep the name Page Factory.

Migration: none for studios. Maintainers: switch Settings > Pages > Source to "GitHub Actions" once; after
that every push to main deploys. Run python tools/build_manual.py after changing docs-src/, and npm run media
in site/ after adding pictures or clips.

## 1.2.1 (2026-11-05)
Research merge. A second research pass re-checked 25 claims on official Meta, YouTube and Google pages
(23 confirmed, 2 refuted). What changed in the kit:
- YouTube: from 1 Feb 2027 new channels need 1,000 subscribers plus 20M qualified Shorts views in 90
  days, or 8,000 watch hours in 365 days, for ads. YPP channels then need 10M qualified Shorts views
  per 90 days (counted to the 15th) to earn from Shorts that month. New activity rule. The 500-subscriber
  fan-funding tier is unchanged and open in the UAE and the Philippines. Updated in research/01, the
  page.md template, analytics-review, platform-setup and the site FAQ.
- Facebook: only qualified views pay (no repeat views, none under 5 seconds); Reels under 10 seconds
  earn nothing. Full Creator Fast Track rules, including "fewer than 6 Facebook Reels in the past 180
  days": users who qualify should apply before posting Reels.
- New rules in CLAUDE.md and script-writer: scripts in our own words (never read source text aloud),
  each episode its own storyline and outcome, and the mascot never gives health, legal, money or
  political advice (YouTube's AI personas rule).
- Flow: credits are charged per generation, so set 1 output per request; Veo costs the same for 4 to
  8-second clips. Added to shot-planner and research/03.
- The 45% Shorts revenue share is marked for re-checking: the second pass could not re-confirm the pool
  details.
- Site: money and AI answers updated; a sample shot prompt no longer shows a real person.

Migration: copy the changed skills (script-writer, shot-planner, platform-setup, analytics-review) into
.claude/skills/. In CLAUDE.md, merge the new lines in "Originality", "Facts and safety" and "Video spec"
from kit/templates/CLAUDE.md. In each pages/<slug>/page.md, replace the rows of the "Monetization path"
table with the rows in kit/templates/page/page.md, keeping your Status and Checked values.

## 1.2.0 (2026-11-05)
The site becomes a real landing page: hand-drawn, moving, and still the whole tutorial.
- New landing page in docs/, styled like a photocopied DIY zine: marker and handwriting type
  (Permanent Marker, Kalam), pen lines drawn with rough.js, hand-cut fills, motion with anime.js.
- Sections: first screen with the copy button; a row of studio screens you can swipe, where picking a
  topic makes the script, Flow prompt sheet, posting pack and handoff follow it; how it works (a drawn
  diagram: many answers into files, out as finished videos); every step with who, where and about how
  long, with copy buttons in the rows; all prompts as a command list (type to filter, arrow keys,
  letter shortcuts, Enter to copy, "Read it" before you copy); FAQ as index cards; a one-word COPY band;
  footer with the research files and picture credits.
- Pictures from early animation, all public domain and credited on the page and in
  docs-src/assets/CREDITS.md: the Gertie the Dinosaur poster, drawings and an 8-second film loop
  (1914), a zoetrope strip (about 1860), a spinning phenakistiscope disc (1833) and Muybridge's
  Horse in Motion (1878).
- Works on phones, honours "reduce motion", and every copy button has a fallback when the browser
  blocks the clipboard.
- tools/build_manual.py copies docs-src/assets/ to docs/assets/ and build/assets/.
- .gitignore keeps the site's mp4 clip.
- Kit content is unchanged: prompts, skills, templates and research are the same as 1.1.0.

Migration: none for studios. Maintainers: run python tools/build_manual.py, then commit docs/
including docs/assets/.

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
