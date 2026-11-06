# 03: Tools, Costs, Skills and Weekly Rhythm

Last checked: 2026-11-05 | Rule: free and open-source first. Paid tools you already have plug in for
their job. New paid tools only after a page earns money.

## 1. The free stack: one job per tool

| Job | Free default | Other free options | If you already pay for | Upgrade when you earn |
|---|---|---|---|---|
| Ideas, sources, scripts | Claude + the kit skills | | | |
| Stills | Google Flow, Nano Banana 2 Lite (no charge) | ComfyUI + FLUX.1 schnell (local, NVIDIA GPU) | Canva Pro, Adobe | Google AI Pro |
| Motion clips | Google Flow free credits (50 a day) | ComfyUI + Wan (local, strong NVIDIA GPU) | Google AI Plus/Pro/Ultra, SuperGrok | Google AI Pro (+1,000 credits a month) |
| Voice | Your own recorded voice | Chatterbox (MIT, clone your voice), Kokoro (Apache-2.0, preset voices) | Higgsfield, ElevenLabs | ElevenLabs or Higgsfield |
| Captions | faster-whisper (MIT, kit/tools/captions.py) | WhisperX (BSD-2) | CapCut Pro auto captions | |
| Editor | HyperFrames (Apache-2.0) + FFmpeg | Kdenlive, Shotcut (open-source), Remotion (free for 3 people or fewer) | CapCut Pro, Premiere | CapCut Pro |
| Covers | HyperFrames still or HTML template | GIMP, Krita | Canva Pro | Canva Pro |
| Music | YouTube Audio Library, Meta Sound Collection, your own | | Epidemic Sound, Artlist | a music library |
| Posting | Meta Business Suite, Threads app, YouTube Studio, TikTok Studio | Postiz (AGPL-3.0, self-hosted) | | Postiz Cloud |
| Full pipelines | | OpenMontage (AGPL-3.0) | | |

## 2. Tool facts (checked 2026-11-05)

### Google Flow (support.google.com/flow)
- "With or without a subscription, you receive 50 Google Flow credits per day." They reset daily and
  don't roll over. Paid plans add monthly credits: AI Plus +200, AI Pro +1,000, Ultra 10,000 or 25,000.
- Without a subscription, "During peak hours, roughly 2 PM to 5 PM UTC, you may not be able to generate
  videos". Images still work. 1080p upscaling needs a paid plan.
- Nano Banana 2 Lite (images) "is the default model available at no charge."
| Model | Clip | Credits (non-Ultra) |
|---|---|---|
| Omni 1.1 Flash (Flow's default video model; Help calls it Gemini Omni Flash), 720p | 4 / 6 / 8 / 10 s | 7 / 10 / 12 / 15 |
| Veo 3.1 Lite | 4-8 s | 10 |
| Veo 3.1 Fast | 4 / 6 / 8 s | 20 |
| Veo 3.1 Quality | 8 s | 100 |
- Seen in the Flow app on 2026-11-06 (9:16, 720p, 8 s, 1 output): Omni 1.1 Flash 12, Veo 3.1 Lite 10,
  Veo 3.1 Fast 20, Veo 3.1 Quality 100 credits; Nano Banana Pro images 0 credits on a Google AI Pro plan.
  Downloads: images 1K or 2K upscaled (4K needs a higher plan), videos 720p or 1080p upscaled. The
  kit's default video model is Omni 1.1 Flash; setup lets the owner pick another. [High: Flow app]
- Character references ("ingredients") work on Veo 3.1 Lite, Fast (8 s) and Omni. Flow is for users
  18+, available in many countries (check yours), and won't generate prominent people.
- Watermarks: not stated on the help pages read. Check your first exports.
- Costs are per generation, not per request: one request can return 2 videos. Set 1 output per request
  unless you want two takes to choose from. [High: Flow Help 16526234, 16353334]
- Veo costs the same for 4, 6 or 8 s clips (Quality is 8 s only), so 8 s gives the most footage per
  credit when the shot can use it. [inference from the price table]
- Google's own Flow pages disagree on which models can Extend, which lengths Quality supports and
  whether some features need a paid plan. Check in the app. [High: Help 16352836 vs 16526234, 2026-11-05]

### Flow automation (optional): flow-mcp (github.com/GTAI-1/flow-mcp)
- A third-party program that runs on your own computer, opens its own Chrome window signed in as you
  (you sign in by hand; it never types your password) and clicks Flow's real buttons, so a chat can
  queue generations and download results. Works with Claude Code, Codex and other MCP apps.
- Needs Node.js 22+, Chrome, a Google account and a display that stays awake. Developed on macOS;
  Windows is supported but its README says it hadn't been run on a real PC yet.
- Before each generation it reads Flow's credit quote and skips the scene if it costs more than
  max_credits (default 25). One generation at a time, with 25-70 s pauses. Re-downloads are free.
- Risk, in its own words: it "can break whenever Google changes that interface, and automated use may be
  against Google's terms of service. Use it on your own account, at your own risk."
- Kit rule: off by default. The owner installs it from its README; the kit never installs it. When on,
  shot-planner shows the shots and total credits first and waits for an OK. [README read 2026-11-06]

### Credit plan per video
- All-motion (12 Veo Fast shots x 2 tries) = about 480 credits. Too much for any plan.
- Image-first, not slideshow (default): 8-10 free stills animated in the edit + 3-4 motion shots on Omni
  Flash or Veo 3.1 Lite x 2 tries = about 60-120 credits. Default budget 90.
- Free tier: 50 a day is about 1,500 a month, so 4-5 videos a week fit if you spread generation across
  the week.
- Google AI Pro: about 2,500 credits a month if the 50 daily credits are used every day (1,000 + 50 x 30).
  The daily credits add more than the monthly bonus and don't roll over: generate something every day.

### HyperFrames (github.com/heygen-com/hyperframes)
- "A free, open-source framework for turning HTML, CSS, media, and seekable animations into deterministic
  MP4 videos." Headless Chrome renders each frame, FFmpeg encodes. Apache-2.0, about 79K stars. Works
  with GSAP, CSS, Lottie, Three.js. Ships agent skills, kinetic captions and audio.
- In Claude Code: `claude plugin marketplace add heygen-com/hyperframes`, then
  `claude plugin install hyperframes@hyperframes` (or `npx skills add heygen-com/hyperframes`).
  Needs Node.js 22+ and FFmpeg. Set the composition to 1080x1920 for vertical video.

### OpenMontage (github.com/calesthio/OpenMontage)
- "World's first open-source, agentic video production system." Pipelines include Animated Explainer,
  Animation, Clip Factory, Localization and Dub. AGPL-3.0, about 72K stars. Python 3.10+, FFmpeg,
  Node 18+. Free with Piper TTS and stock sources; paid image or video APIs are optional.

### Remotion (remotion.dev)
- Free "for any individual or small company", up to 3 people, commercial use included. Source-available,
  not open source.

### Voice
- Chatterbox (github.com/resemble-ai/chatterbox): MIT, about 27K stars, zero-shot voice cloning from a
  reference clip, English. Faster with an NVIDIA GPU.
- Kokoro (github.com/hexgrad/kokoro): Apache-2.0, 82M-parameter TTS with preset voices. Light enough for a CPU.
- Avoid for monetized videos: F5-TTS pre-trained models (CC-BY-NC) and Higgs Audio v3 weights
  (non-commercial). IndexTTS uses its own model license: read it first.
- Paid, only if you already have it: Higgsfield voice cloning (ElevenLabs is its default engine, exports
  WAV), ElevenLabs. Check your plan allows monetized use.

### Captions and helpers
- WhisperX: word timestamps, BSD-2, about 25K stars. faster-whisper is the lighter one the kit uses.
- auto-editor: cuts dead air, public domain. VectCutAPI: Apache-2.0, builds CapCut drafts (only useful
  if you use CapCut).
- MoneyPrinterTurbo (MIT) and short-video-maker (MIT): stock-footage generators, a style platforms now
  demote. Borrow parts only.

### Grok Imagine (xAI), paid only
- Version 1.5 (mid-2026): about 10-15 s clips, 720p, native audio, image to video. No free video since
  January 2026. [secondary sources, June 2026]

### Posting automation (later)
| Tool | License | Stars | Platforms | Agent access | Catch |
|---|---|---|---|---|---|
| Postiz (gitroomhq/postiz-app) | AGPL-3.0 | about 40K | 30+ incl. Facebook, Instagram, Threads, YouTube, TikTok | Public API, Node SDK, n8n node | Docker Compose with Postgres, Redis, Temporal; your own developer app per platform |
| Posthive (AstaBlackClove/posthive) | AGPL-3.0 | 18 | 14+ incl. Instagram Reels, YouTube Shorts | Built-in MCP server | Very new; same developer-app setup |
| Mixpost Lite (inovector/mixpost) | MIT | about 4K | not confirmed | | Laravel/PHP; Pro is paid |
- A Meta developer app must be set to Live or posts are visible only to you. YouTube needs a Google
  Cloud OAuth client with you as a test user. Start with the free native schedulers.

## 3. Upgrade when you earn (cheapest useful first)
1. Google AI Pro: +1,000 Flow credits a month, 1080p upscaling, no peak-hour block.
2. A paid voice (ElevenLabs or Higgsfield) if your recorded or free voice holds you back.
3. CapCut Pro or Canva Pro if you prefer hands-on editing and covers.
4. A music library (Epidemic Sound, Artlist) once you post a lot.
5. Postiz Cloud if posting to five platforms takes too long.

## 4. Skills in the kit (kit/skills/)
| Skill | Job |
|---|---|
| page-factory | Router: reading order, one job per chat, episode claims, stop points |
| hq-setup | The one-time setup checklist and question rounds |
| platform-setup | Create or check Facebook, Instagram, Threads, YouTube, TikTok accounts |
| trend-radar | Trending formats and topics, inspiration only |
| topic-picker | Topic options, batch plans, episode claims |
| fact-checker | 2 sources per claim, myths dropped |
| script-writer | 30-90 s 5-beat scripts (usually 45-60 s), titles, long-form compilations |
| mascot-bible | Original character or style, prompt block, brand art, bios |
| shot-planner | Shot list, prompts, credit budget, generation sheet |
| voice-director | Narration text, voice route, loudness |
| video-assembler | Captions, HyperFrames / ffmpeg / Remotion / Kdenlive / CapCut, mix, QA |
| thumbnail-maker | Covers and YouTube thumbnails |
| publisher | Posting packs, disclosure, schedule, posting help |
| analytics-review | Weekly numbers, decisions, monetization tracker, upgrade advice |
| handoff | handoff.md and ai-handoff-summary.md continuity |
Optional Claude skills that help if you have them: motion-design-prompts (AI video prompts),
video-making (ffmpeg rendering).

## 5. Human skills to build (highest impact first)
1. Hooks and retention writing
2. Story research and fact-checking
3. Art direction for one consistent character
4. Prompting and shot planning
5. Voice and pacing
6. Editing rhythm: cuts, sound effects, captions, loop endings
7. Titles and covers
8. Reading analytics
9. Platform rules (originality, AI disclosure, made for kids)
10. Batching discipline

## 6. Weekly rhythm at 4-5 videos a week (estimate)
| When | Time | Work |
|---|---|---|
| Mon-Thu evenings | 15 min a day | Reply to comments, note topic ideas, generate a few visuals with the day's free credits |
| Friday | 30 min | Weekly review chat |
| Saturday | 3-4 h | Batch chat: topics, sources, scripts, shot lists, generation |
| Sunday | 3-4 h | Voice, assemble, covers, posting packs, schedule everything |
About 8-11 hours a week to start. It gets faster with practice.

## 7. Install checklist
Windows (PowerShell):
    winget install Git.Git
    winget install OpenJS.NodeJS.LTS
    winget install Python.Python.3.12
    winget install Gyan.FFmpeg
Mac (Terminal, with Homebrew):
    brew install git node python@3.12 ffmpeg
Then, in Claude Code:
    claude plugin marketplace add heygen-com/hyperframes
    claude plugin install hyperframes@hyperframes
    pip install faster-whisper

## Sources
- https://support.google.com/flow/answer/16526234 (credits)
- https://support.google.com/flow/answer/16352836 (models and features)
- https://support.google.com/flow/answer/16353544 (where Flow is available)
- https://github.com/heygen-com/hyperframes
- https://github.com/calesthio/OpenMontage
- https://www.remotion.dev/docs/license/faq
- https://github.com/resemble-ai/chatterbox, https://github.com/hexgrad/kokoro
- https://github.com/SWivid/F5-TTS, https://github.com/boson-ai/higgs-audio, https://github.com/index-tts/index-tts
- https://github.com/m-bain/whisperX, https://github.com/sun-guannan/VectCutAPI, https://github.com/WyattBlue/auto-editor
- https://github.com/harry0703/MoneyPrinterTurbo, https://github.com/gyoridavid/short-video-maker
- https://github.com/gitroomhq/postiz-app, https://docs.postiz.com/public-api
- https://github.com/AstaBlackClove/posthive, https://github.com/inovector/mixpost
- https://higgsfield.ai/voice-cloning
- https://the-context.pages.dev/en/news/2026-06-10-grok-imagine-pricing-api-economics/ (secondary)
