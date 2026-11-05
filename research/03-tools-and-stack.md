# 03: Tools, Costs, Skills and Weekly Workflow

Last checked: 2026-11-05 | Already owned by Loy: several Google Flow Pro accounts (Google AI Pro,
1,000 Flow credits a month each), CapCut Pro, a Higgsfield voice clone. Paid upgrades only after
monetization.

## 1. The stack: one job per tool

| Job | Use now | Free / open-source option | Later (paid) | Notes |
|---|---|---|---|---|
| Ideas and scripts | Claude + the kit skills | | | Every claim needs 2 sources |
| Mascot and stills | Google Flow, Nano Banana | ComfyUI (local) | Grok Imagine | Flow Help lists Nano Banana 2 Lite as no charge |
| Motion clips | Flow: Veo 3.1 Lite, Gemini Omni Flash | ComfyUI + Wan (needs a strong GPU) | Grok Imagine | Character "ingredients" on Lite, Fast (8 s) and Omni |
| Voice | Higgsfield clone of Loy's voice | Chatterbox (MIT) | ElevenLabs direct | Higgsfield's default clone engine is ElevenLabs |
| Captions | faster-whisper (kit/tools/captions.py) | WhisperX (BSD-2) | | CapCut auto captions also work |
| Assembly | HyperFrames (Apache-2.0) | ffmpeg | Remotion (free for 3 people or fewer) | HyperFrames is HTML/CSS/GSAP, a fit for a front-end dev |
| Hands-on polish | CapCut Pro | VectCutAPI (Apache-2.0) builds CapCut drafts from code | | Export with no watermark |
| Full pipelines | | OpenMontage (AGPL-3.0) | | Agentic pipelines incl. animated explainer, clip factory |
| Covers and thumbnails | HyperFrames still / HTML template | Flow image + text overlay | | |
| Posting | Meta Business Suite, Threads app, YouTube Studio | Postiz (AGPL-3.0, self-hosted) | Postiz Cloud | Posthive: newer, built-in MCP |
| Music | Own tracks, YouTube Audio Library, Facebook Sound Collection | | Suno on a plan with commercial rights | No licensed label music in Shorts |

## 2. Tool facts (checked 2026-11-05)

### Google Flow (support.google.com/flow)
| Model | Clip | Credits (non-Ultra) |
|---|---|---|
| Veo 3.1 Lite | 4-8 s | 10 |
| Veo 3.1 Fast | 4 / 6 / 8 s | 20 |
| Veo 3.1 Quality | 8 s | 100 |
| Gemini Omni Flash 720p | 4 / 6 / 8 / 10 s | 7 / 10 / 12 / 15 |
| Omni edit of a video | up to 10 s | 40 |
- Google AI Pro: 1,000 extra Flow credits a month. Unused credits do not roll over. "Limits are subject
  to change at any time."
- Frames to video on all Veo 3.1 tiers and Omni. Ingredients (reference images) on Lite, Fast (8 s) and
  Omni. Extend on Lite and Quality. Video-to-video edits on Omni.
- Flow is available in the UAE and the Philippines. It won't generate prominent people.
- Watermarks: the help pages read don't say. Ultra users reported a visible Veo watermark in March 2026
  (piunikaweb, no Google statement). Check your first exports; Meta advises against visible
  third-party watermarks.

### Credit plan per video
- All-motion (12 Veo Fast shots x 2 tries) = about 480 credits = 2 videos per account per month. Too much.
- Image-first, not slideshow (recommended): 8-10 Nano Banana stills animated in the edit + 3-4 motion
  shots on Veo 3.1 Lite or Omni Flash x 2 tries = about 60-120 credits = 8-15 videos per account a month.
- At 4-5 videos a week (17-22 a month) that is about 2 Flow accounts' worth of credits.

### HyperFrames (github.com/heygen-com/hyperframes)
- "A free, open-source framework for turning HTML, CSS, media, and seekable animations into deterministic
  MP4 videos." Renders by seeking frames in headless Chrome and encoding with FFmpeg. Apache-2.0,
  about 79K stars. Works with GSAP, CSS, Lottie, Three.js. Ships 9 agent skills; kinetic captions; audio.
- Install in Claude Code: `claude plugin marketplace add heygen-com/hyperframes` then
  `claude plugin install hyperframes@hyperframes` (or `npx skills add heygen-com/hyperframes`).
  Needs Node.js 22+ and FFmpeg. 9:16 output is set by the composition size (README shows 1920x1080;
  use 1080x1920).

### OpenMontage (github.com/calesthio/OpenMontage)
- "World's first open-source, agentic video production system." Your AI coding assistant is the
  orchestrator. Pipelines include Animated Explainer, Animation, Clip Factory, Localization and Dub.
  Orchestrates Remotion, HyperFrames, FFmpeg, Veo, Kling, Wan, FLUX, Imagen, Piper, ElevenLabs, Suno.
- AGPL-3.0, about 72K stars. Python 3.10+, FFmpeg, Node 18+. API keys optional; with paid providers the
  project estimates about $0.15-$1.50 per video. Useful to borrow pipelines and skills from. Our Flow
  credits are used through the Flow website, not an API, so OpenMontage can't spend them directly.

### Remotion (remotion.dev)
- Free "for any individual or small company", "up to 3 people", commercial use included. Source-available,
  not open source. Paid: $25/month per person for larger teams.

### Grok Imagine (xAI), optional paid
- Version 1.5 (mid-2026). Up to 720p, about 10-15 s per clip, native audio, image to video.
  No free video since January 2026; SuperGrok about $30/month; API about $0.08/s (480p) or $0.14/s
  (720p). Commercial terms not confirmed. [secondary sources, June 2026]

### Voice
- Higgsfield voice cloning: upload or record your own voice (up to 2 minutes), up to 3 custom voices,
  ElevenLabs is the default engine, export MP3, WAV or OGG. Commercial rights are not stated on the
  product pages: check the terms for your plan.
- Chatterbox (github.com/resemble-ai/chatterbox): MIT, about 27K stars, zero-shot voice cloning from
  a reference clip, English.
- Avoid for monetized videos: F5-TTS pre-trained models (CC-BY-NC) and Higgs Audio v3 weights
  (non-commercial). IndexTTS uses its own model license: read it before use.

### Captions and editing helpers
- WhisperX: word-level timestamps, BSD-2, about 25K stars. faster-whisper is the lighter option the kit uses.
- VectCutAPI: Apache-2.0, creates CapCut International (and JianYing) drafts you open in CapCut.
- auto-editor: cuts dead air, public domain.
- MoneyPrinterTurbo (MIT, about 134K stars) and short-video-maker (MIT, Kokoro TTS + whisper.cpp, MCP
  and REST): built for stock-footage videos, which platforms are demoting. Borrow parts only.

### Posting automation (later)
| Tool | License | Stars | Platforms | Agent access | Catch |
|---|---|---|---|---|---|
| Postiz (gitroomhq/postiz-app) | AGPL-3.0 | about 40K | 32 incl. Facebook, Instagram, Threads, YouTube, TikTok, X | Public API (POST /public/v1/upload, /public/v1/posts), Node SDK, n8n node | Docker Compose with Postgres, Redis, Temporal. Your own developer app per platform |
| Posthive (AstaBlackClove/posthive) | AGPL-3.0 | 18 | 14+ incl. Instagram Reels, YouTube Shorts, Threads, Facebook, TikTok | Built-in MCP server (create_post, list_scheduled_posts ...) | Very new and small; Docker Compose, Redis, Postgres. Same developer-app setup |
| Mixpost Lite (inovector/mixpost) | MIT | about 4K | Not confirmed | | Laravel/PHP. Pro is paid |
- Developer-app gotchas: a Meta app must be set to Live or posts are only visible to you; public apps need
  business verification. YouTube needs a Google Cloud OAuth client with you as a test user. Threads API
  needs media on a public URL at publish time.
- Verdict: start with the free native schedulers. When posting gets tedious, self-host Postiz (mature, big
  community, API). Try Posthive only as an experiment if you want Claude to post through MCP.

## 3. Skills in the kit (kit/skills/)
| Skill | Job |
|---|---|
| page-factory | Router: reading order, modes, stop points |
| trend-radar | Trending formats and topics, inspiration only |
| topic-picker | 5 topic options or a 3-plan week |
| fact-checker | 2 sources per claim, myths dropped |
| script-writer | 45-60 s 5-beat scripts, titles, long-form compilations |
| mascot-bible | Original mascot, prompt block, brand art prompts, bios |
| shot-planner | Shot list, Flow prompts, credit budget, generation sheet |
| voice-director | TTS text, Higgsfield or Chatterbox, loudness |
| video-assembler | Captions, HyperFrames / Remotion / CapCut / ffmpeg, mix, QA |
| thumbnail-maker | Covers 1080x1920 and YouTube thumbnails 1280x720 |
| publisher | Titles, captions, disclosure, audience, schedule, posting checklist |
| analytics-review | Weekly numbers, decisions, monetization tracker |
| handoff | handoff.md + ai-handoff-summary.md continuity |
Also useful from Loy's account: motion-design-prompts (Veo prompts), video-making (ffmpeg rendering),
taste-skill:brandkit (brand boards).

## 4. Human skills to build (highest impact first)
1. Hooks and retention writing
2. Story research and fact-checking
3. Art direction for one consistent mascot
4. Flow prompting and shot planning
5. Voice direction (pacing and emphasis in TTS)
6. Editing rhythm: cuts, SFX, captions, loop endings
7. Packaging: titles and covers
8. Reading analytics
9. Policy literacy (Meta originality, YouTube inauthentic content, AI disclosure)
10. Batching discipline

## 5. Weekly rhythm at 4-5 videos a week (estimate)
| When | Time | Work |
|---|---|---|
| Mon-Thu evenings | 15 min/day | Reply to comments, note topic ideas |
| Friday | 30 min | Weekly review chat (prompts/weekly-review.md) |
| Saturday AM | 2-3 h | Weekly batch chat: pick topics, sources, scripts, shot lists |
| Saturday PM | 2-3 h | Generate all Flow assets and Higgsfield narrations |
| Sunday | 3-4 h | Assemble, covers, packaging, schedule everything |
About 8-11 hours a week. Templates and practice make it faster.

## 6. Install checklist (Windows, Claude Code)
    winget install Git.Git
    winget install OpenJS.NodeJS.LTS
    winget install Python.Python.3.12
    winget install Gyan.FFmpeg
    claude plugin marketplace add heygen-com/hyperframes
    claude plugin install hyperframes@hyperframes
    pip install faster-whisper
Optional: Remotion, Chatterbox, OpenMontage, VectCutAPI, Docker Desktop + Postiz.

## Sources
- https://support.google.com/flow/answer/16526234 (credits)
- https://support.google.com/flow/answer/16352836 (models and features)
- https://piunikaweb.com/2026/03/09/google-one-ai-ultra-users-report-veo-watermark-appearing-on-videos/
- https://github.com/heygen-com/hyperframes
- https://github.com/calesthio/OpenMontage
- https://www.remotion.dev/docs/license/faq
- https://the-context.pages.dev/en/news/2026-06-10-grok-imagine-pricing-api-economics/ (secondary)
- https://fluxnote.io/guides/grok-ai-video-generator-guide (secondary)
- https://higgsfield.ai/voice-cloning
- https://github.com/resemble-ai/chatterbox
- https://github.com/SWivid/F5-TTS, https://github.com/boson-ai/higgs-audio, https://github.com/index-tts/index-tts
- https://github.com/m-bain/whisperX, https://github.com/sun-guannan/VectCutAPI, https://github.com/WyattBlue/auto-editor
- https://github.com/harry0703/MoneyPrinterTurbo, https://github.com/gyoridavid/short-video-maker
- https://github.com/gitroomhq/postiz-app, https://docs.postiz.com/public-api
- https://github.com/AstaBlackClove/posthive
- https://github.com/inovector/mixpost
