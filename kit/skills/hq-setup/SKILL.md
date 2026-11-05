---
name: hq-setup
description: The full one-time setup checklist for a Page Factory studio (the HQ chat started with MASTER-PROMPT.md): question rounds, social accounts, free tool installs, studio files, brand pack, content plan, test run and final handoff. Use only in the HQ setup chat or to continue an unfinished setup.
---

# HQ setup

Goal: after this chat, a video chat can run without asking a single setup question.

## Progress tracker
Copy this into handoff.md (Current State) at the start and tick items as they finish. A new chat that
continues the setup starts from the first unticked item.

    [ ] A about you        [ ] B paid tools      [ ] C page            [ ] D platforms
    [ ] E pace + visuals   [ ] accounts done     [ ] tools installed   [ ] studio files
    [ ] brand pack         [ ] content plan      [ ] test run          [ ] final handoff

## Question rounds (multiple choice, max 4 per round, recommended first)

### Round A: about you (save to studio.md)
1. Name or nickname to use.
2. Languages you'll type in (multi-select) and the reply language. Recommended: reply in English.
3. Timezone and the country you live in. Explain: the country decides which monetization programs
   you can join (example: Facebook Creator Fast Track is only for US, Canada, UK, Australia residents).
4. Computer: Windows / Mac. GPU: NVIDIA with 8 GB+ VRAM / other or none / not sure.
5. Where you'll work: Claude Code and Cowork (Recommended) / Claude Code only / Cowork only.
6. Hours per week for the page: 3-5 / 6-10 (Recommended for 4-5 videos) / 10+.

### Round B: paid tools you already have (multi-select, save to studio.md)
CapCut Pro, Google AI Plus / Pro / Ultra (more Flow credits), Higgsfield, ElevenLabs, SuperGrok
(Grok Imagine), Canva Pro, Adobe (Premiere, After Effects, Express), a music library (Epidemic Sound,
Artlist), none. Rule: free tools stay the default; a paid tool the user already has replaces the free
one only for its job (example: Higgsfield replaces Chatterbox for voice).

### Round C: the page (save to page.md)
1. Concept: the 3 best ideas from research/02-trend-radar.md that fit "faceless, one consistent
   character or style, global audience", plus "Fresh trend scan first". Explain each in one line.
2. Name: 5 options. Search YouTube, Facebook and TikTok for each and report clashes.
3. Character or visual style: 3 options described in words.
4. Series (content pillars): propose 4-5, user confirms or edits.
5. Narrator voice: your own recorded voice (free, most original) / free clone of your voice with
   Chatterbox / free preset voice with Kokoro / a paid voice you already have.
6. Audience: global English (Recommended) or a specific country or language. Posting times: evenings
   in the audience's timezone, shown in the user's timezone too.
7. Easter egg (optional, no recommended option, it's the user's choice): "Hide a tiny 'KuyaLoy'
   signature in one background spot per video (a poster, a sign, a T-shirt print, a TV in the room) as
   a thank-you to the kit's creator?" Yes / No. Also offer "my own signature instead" (their name or
   handle). Save the answer in page.md. Never turn it on without a clear yes.

### Round D: platforms (save to page.md)
For EACH of Facebook Page, Instagram, Threads, YouTube (Shorts), TikTok:
"I already have it (paste the link)" / "Help me create it" / "Skip for now".
Then follow the platform-setup skill.

### Round E: pace and visuals (save to studio.md and page.md)
1. Videos per week: 4-5 (Recommended) / 1 per day / 2-3.
2. Visuals: Google Flow free credits, 50 a day (Recommended) / my paid Flow plan / local ComfyUI
   (only with a strong NVIDIA GPU) / a paid tool I already have.
3. Editor: HyperFrames + ffmpeg (Recommended, free) / CapCut (if owned) / Kdenlive or Shotcut.

## Defaults when the user skips a question
Reply in English | US Eastern evening posting | 4-5 videos a week | Flow free credits | HyperFrames |
Kokoro preset voice | all five platforms set to "Skip for now" until the user asks.

## Where answers go
- studio.md: Round A, Round B, tool choices, environment, setup status.
- pages/<slug>/page.md: Round C, Round D (links, handles, status), monetization prep, schedule.
- CLAUDE.md: rules, language rule, default tools (from studio.md).
- handoff.md + ai-handoff-summary.md: progress tracker, verified facts, next action.

## Finish criteria (check before saying "done")
- Every question above has an answer or a recorded default.
- Every chosen platform has a link or handle, or "skipped" on purpose.
- Tools pass tools/check-tools; the 10-second test clip rendered and the user saw it.
- 20 topics in queue.csv, 4-week schedule in schedule.csv, brand refs saved in brand/refs/.
- handoff.md and ai-handoff-summary.md say: "Setup complete. Next: new chat with
  page-factory/prompts/new-video.md or weekly-batch.md."
