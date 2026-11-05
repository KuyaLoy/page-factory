# CLAUDE.md: Page Factory Studio

Rules for every chat in this studio. The setup chat fills in the <placeholders>.

## What this is
- Owner: Loy. Faceless short-form video pages: Facebook Reels (cross-posted to Instagram and Threads)
  and YouTube Shorts. English, global audience.
- Pages: pages/<slug>/. Kit (templates, research, manual): page-factory/.
- Active pages: <page-slug: page name, one line>.

## Language and style
- Loy may write in Tagalog or Taglish. Always answer in English.
- Simple English, short sentences, no em dashes, no hype words. Copy-paste-ready output.
- Questions: multiple choice, max 4 per round, recommended option first, marked "(Recommended)".
- If Loy is away, pick the recommended option and say so.

## Continuity and no guessing (most important)
- The studio remembers through files, not chat history.
- Start: read ai-handoff-summary.md, then this file, then the page's page.md. Open handoff.md
  only for the section you need. The page-factory skill routes the work.
- Source of truth, in order: real files > handoff.md > ai-handoff-summary.md > memory or chat.
  When they disagree, trust the files and fix the handoff.
- Never guess paths, versions, counts, URLs, statuses or numbers. Check them or write "unknown, check".
  Summary facts carry [verified YYYY-MM-DD: how] or [unverified: source].
- Decisions Loy hasn't made go under Open questions, never written as decided.
- After each big step and before ending: update handoff.md and ai-handoff-summary.md
  (handoff skill, max 60 lines, one Next action). Tell Loy in one line.
- Long chat: stop at a clean point, update both files, suggest a new chat with prompts/continue.md.

## Kit
- Kit version used by this studio: see .kit-version. Kit source: page-factory/ (git repo).
- Upgrade with page-factory/prompts/update-kit.md. Never edit .claude/skills/ by hand for kit
  changes: improve the kit (prompts/retro.md) and update, so every studio gets the fix.
- Modules enabled: <none yet>.

## Originality (monetization depends on this)
- Other pages are inspiration for FORMATS only. Never use their clips, frames, audio, scripts,
  characters, names, thumbnails or titles.
- Check topics/done-topics.csv (it includes competitor titles) before picking a topic.
  A common story needs a new angle and our own sources.
- Everything we publish is made by us: our script, our character, our voice, our edit.
  Meta counts content "produced directly by a creator or owner of a Profile or Page" as original.
- No slideshow feel. YouTube does not monetize "image slideshows, templated storylines ... with
  minimal or no narrative" or AI content "giving the impression of mass production".
  Every still gets motion (parallax, cut-out moves, camera moves) and every video tells a story.
- Vary story structure across series. Same intro and outro is fine.
- Export clean: no visible third-party watermarks or end screens.
- Never upload the same video twice to the same platform. Sharing our own video across our own
  Facebook Page, Instagram, Threads and YouTube is fine.

## Facts and safety
- Every factual claim needs 2 independent reliable sources in brief.md (Sources).
  Disputed: say so on screen. Myth: drop it. Never invent numbers, dates or quotes.
- No medical, legal or financial advice. No AI "experts". No real people made to say or do things.
  No prominent people (Flow blocks them anyway).

## AI disclosure (YouTube Help 14328491, checked 2026-11-05)
- YouTube: disclose only realistic AI content (realistic scenes, real people, real events altered,
  AI music as the main focus). Animation and "cloning one's own voice to create voice overs" do not
  need it. Disclosing does not limit reach or monetization. When unsure, disclose.
- Meta: use the AI label for photorealistic AI video or realistic AI audio.
- A preset AI narrator voice (not Loy's own): not covered by YouTube's lists. Disclose to be safe.

## Made for kids
- Our audience is general. Cartoon style alone does not make a video "made for kids"
  ("Animated content that appeals to everyone" is general audience per YouTube Help 9528076),
  but avoid kid-targeted themes, nursery songs and toy content.

## Credits and money
- Google Flow: image-first. Budget per video: <150> credits unless Loy approves more.
  Log every generation in credits.csv (date, account, model, credits, episode).
- Flow credits do not roll over. Spread work across accounts within the month.
- No paid tools, API spend or subscriptions without approval.

## Files
- Episode: pages/<slug>/episodes/EP###-<slug>/ with brief.md, raw/, vo/, edit/, export/.
- Names: raw/shot-01.png, raw/shot-02.mp4, vo/vo.wav, edit/captions.json, export/final.mp4,
  export/cover.png, export/thumb-yt.png.
- Ask before deleting anything. Never write secrets outside .env.

## Video spec
- 1080x1920, 30 fps, H.264 high, yuv420p, AAC 48 kHz, voice around -14 LUFS, +faststart.
- 45-60 s for Shorts and Reels (Facebook Reels must be at least 10 s to earn).
- Hook in the first 2 seconds. Captions in the middle band, away from the bottom bar and the
  right-side buttons.
- No licensed label music in Shorts (it reduces the revenue share). Use our own or royalty-free music.
- Facebook: max 5 hashtags.

## Default tools
| Job | Default | Backup |
|---|---|---|
| Stills | Flow, Nano Banana | Grok Imagine (paid, optional) |
| Motion | Flow, Veo 3.1 Lite or Gemini Omni Flash | Veo 3.1 Fast, Grok Imagine |
| Voice | Higgsfield clone of Loy's voice | Chatterbox (local) |
| Captions | faster-whisper word timings | CapCut auto captions |
| Assembly | HyperFrames | Remotion, CapCut Pro (VectCutAPI draft), ffmpeg |
| Covers | HyperFrames still | Flow image + text overlay |
| Posting | Meta Business Suite, Threads app, YouTube Studio | Postiz (self-hosted) |
