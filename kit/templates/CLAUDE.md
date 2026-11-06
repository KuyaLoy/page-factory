# CLAUDE.md: Page Factory Studio

Rules for every chat in this studio. The HQ setup chat fills in the <placeholders>.

## What this is
- Owner: <name>. Faceless short-form video pages for Facebook, Instagram, Threads, YouTube Shorts
  and TikTok. Details about the owner and tools: studio.md. Details per page: pages/<slug>/page.md.
- Kit (templates, skills, research, manual): page-factory/. Kit version in use: .kit-version.
- Active pages: <slug: page name>.

## Language and style
- <name> may type in <languages>. Always reply in <reply language, default English>.
- Simple words, short sentences, no em dashes, no hype. Copy-paste-ready output.
- Questions: multiple choice, max 4 per round, recommended option first, marked "(Recommended)".
- When the user must do something: numbered steps, then wait for "done".

## Continuity and no guessing (most important)
- The studio remembers through files, not chat history.
- Start of every chat: read ai-handoff-summary.md, then this file, then studio.md, then the page's
  page.md. Open handoff.md only for the section you need. The page-factory skill routes the work.
- Never ask a setup question whose answer is already in studio.md or page.md. If something is
  missing, ask once and save the answer there.
- Source of truth, in order: real files > handoff.md > ai-handoff-summary.md > memory or chat.
  When they disagree, trust the files and fix the handoff.
- Never guess paths, versions, counts, URLs, statuses or numbers. Check them or write "unknown, check".
  Summary facts carry [verified YYYY-MM-DD: how] or [unverified: source].
- Decisions the user hasn't made go under Open questions, never written as decided.
- After each big step and before ending: update handoff.md and ai-handoff-summary.md (handoff skill,
  max 60 lines, one Next action). Tell the user in one line.

## One job per chat
- HQ setup has its own chat. Then: one video per chat, or one batch per chat.
- When the video or batch is done, say: "Done. Open a new chat for the next one." Don't start another.
- Claim episodes at the start (episodes.csv status "in progress") and close them at the end, so chats
  never collide.

## Originality (monetization depends on this)
- Other pages inspire FORMATS only. Never use their clips, frames, audio, scripts, characters, names,
  thumbnails or titles. Check topics/done-topics.csv (it holds competitor titles) before picking a topic.
- Everything we publish is made by us: our script, our character, our voice, our edit.
  Meta counts content "produced directly by a creator or owner of a Profile or Page" as original.
- Scripts are always written in our own words from fact-checked notes. Never read text from websites,
  news or books aloud: YouTube won't monetize readings of material we didn't write.
- No slideshow feel. YouTube doesn't monetize "image slideshows, templated storylines ... with minimal
  or no narrative" or AI content "giving the impression of mass production". Every still moves and
  every video tells a story. Vary story structure across series. Each episode needs its own storyline
  and outcome: YouTube won't monetize characters "put in the same situation over and over again with
  the same outcome".
- Export clean: no visible third-party watermarks or end screens.
- Never upload the same video twice to one platform. Sharing our own video across our own accounts is fine.
- Easter egg: only when page.md says it's on (one tiny background spot per video, see shot-planner).
  Never add hidden text or names otherwise.

## Facts and safety
- Every factual claim needs 2 independent reliable sources in the episode brief. Disputed: say so on
  screen. Myth: drop it. Never invent numbers, dates or quotes.
- No medical, legal or financial advice. No AI "experts". No real people made to say or do things.
  The mascot tells stories and never advises on health, law, money or politics: YouTube won't monetize
  a channel whose AI persona does.

## AI disclosure (YouTube Help 14328491, checked 2026-11-05)
- YouTube: disclose realistic AI content only. Animation and "cloning one's own voice to create voice
  overs" don't need it. Disclosing doesn't limit reach or earnings. A preset AI voice that isn't the
  user's own: disclose to be safe.
- Meta: AI label for photorealistic AI video or realistic AI audio. TikTok: its AI-generated label for
  AI visuals.

## Made for kids
- General audience. Cartoon style alone doesn't make a video "made for kids", but avoid kid-targeted
  themes, nursery songs and toy content.

## Free first
- Default tools are free or open-source (studio.md, Tools). Paid tools the user already has replace
  the free one for that job only. Suggest new paid tools only after a page earns money.
- Visual credits: budget <90> per video. Log every generation in credits.csv.
- No paid tools, API spend or subscriptions without approval.

## Files
- Episode: pages/<slug>/episodes/EP###-<slug>/ with brief.md, raw/, vo/, edit/, export/.
- Names: raw/shot-01.png, raw/shot-02.mp4, vo/vo.wav, edit/captions.json, export/final.mp4,
  export/cover.png, export/thumb-yt.png.
- Ask before deleting anything. Never write secrets outside .env.

## Video spec
- 1080x1920, 30 fps, H.264 high, yuv420p, AAC 48 kHz, voice about -14 LUFS, +faststart.
- Length 30-90 s, usually 45-60 s. The story sets the length; never pad. Facebook Reels earn only
  from 10 s, and views under 5 s don't count. YouTube Shorts over 1 minute with any copyright claim can't earn, so longer videos use
  only our own or cleared audio and visuals.
- Hook in the first 2 seconds. Captions in the middle band, away from the bottom bar and right-side buttons.
- No licensed label music in Shorts. Facebook: max 5 hashtags.

## Kit
- Upgrade with page-factory/prompts/update-kit.md. Don't hand-edit .claude/skills/ for kit changes:
  improve the kit (prompts/retro.md) and update, so every studio gets the fix.
- Modules enabled: <none yet>.
