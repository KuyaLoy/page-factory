---
name: shot-planner
description: Turn a Page Factory script into a shot list with copy-ready prompts for the user's visual tool (Google Flow free credits by default), exact file names and a credit budget. Use after the script is approved and before the user generates assets.
---

# Shot planner

## Which visual tool
Read studio.md (Tools). Default: Google Flow with the free daily credits. Other routes: a paid Flow
plan, local ComfyUI (open-source, NVIDIA GPU), or a paid tool the user already has (for example
Grok Imagine). Use the same shot list for any route; only the prompt format changes.
Video model: studio.md (Motion clips) names the model for motion shots. Default: Omni 1.1 Flash, Flow's
default video model. The user can switch any shot to Veo 3.1 Lite, Fast or Quality; show the credit
difference when they do.

## Google Flow costs (Flow Help, checked 2026-11-05, re-check monthly)
- Everyone gets 50 Flow credits a day, with or without a subscription. They reset daily and don't
  roll over. Paid plans add monthly credits (AI Plus +200, AI Pro +1,000).
- Without a subscription, video generation may be unavailable at peak hours (about 2-5 PM UTC).
  Images still work then.
| Model | Length | Credits | Use for |
|---|---|---|---|
| Nano Banana 2 Lite (image) | still | no charge listed | most shots, poses, backgrounds |
| Omni 1.1 Flash (Flow's default video model), 720p | 4 / 6 / 8 / 10 s | 7 / 10 / 12 / 15 | default motion, takes character references |
| Veo 3.1 Lite | 4-8 s | 10 | key motion moments, takes character references |
| Veo 3.1 Fast | 4-8 s | 20 | when Lite isn't good enough |
| Veo 3.1 Quality | 8 s | 100 | only for a proven topic's hero shot |
- Credits are charged per generation, not per request. Set Flow to 1 output per request unless the
  user wants two takes to choose from.
- Veo costs the same for 4, 6 or 8 s, so ask for 8 s and trim when the shot can use the extra footage.

## Plan
1. Split the script into shots of 3-5 seconds that follow the 5-beat timing: about 8 shots for 30 s,
   12-15 for 60 s, 18-22 for 90 s.
2. Mark each shot:
   - still: free image, animated in the edit (parallax, push-in, cut-out move, shake).
   - motion: the studio's video model (studio.md, default Omni 1.1 Flash), only for key moments (hook,
     twist, payoff): 2-3 shots for 30 s, 3-4 for 60 s, 4-6 for 90 s. Veo 3.1 Quality only for a proven
     topic's hero shot, and only when the user picks it.
   - card: text, map or diagram built in HyperFrames (no credits).
3. Budget (2 tries per motion shot): about 60 credits for 30 s, 90 for 60 s, 130 for 90 s. Stay
   inside the budget in page.md. Split big batches across days so the free 50 a day covers them
   (credits.csv).
4. Prompt shape: [prompt block from brand/prompt-block.txt] + [setting, era, light] +
   [character action and emotion] + [camera] + "vertical 9:16, no text, no watermark".
   Use the character reference ("@name" in Flow) when the model supports references.

## Easter egg (only if page.md says on)
- Pick ONE still per video with a natural background surface: a wall poster, shop sign, newspaper,
  T-shirt print, tattoo, TV or billboard in the scene, book spine, graffiti.
- Add the easter-egg text from page.md to that shot's prompt, small and in the background, styled to
  fit the era and place. Never on the main subject, never where captions or app buttons sit.
- Vary the spot every video. Note it in brief.md (Shots) so the user knows where it is.
- Easter egg off: no text in generated images at all.

## Prompt rules
- Describe motion as forces and intent ("stumbles back, catches the clipboard mid-fall").
  Use the motion-design-prompts skill if it's installed.
- One action per clip. No text (except the easter egg when it's on), logos, real people or other
  creators' characters.
- No plain slideshows: every still needs planned motion in the edit, and the story carries the video.
- Keep period details accurate, using the fact-checker's sources.

## Flow automation (only if studio.md says "Flow automation: on")
- flow-mcp drives Flow for the chat. Check its tools are connected; if not, fall back to the copy-ready
  sheet and tell the user.
- Show the shots, models and total credits first and wait for the user's OK. Then queue one output per
  shot with max_credits set to that shot's budget, so anything pricier is skipped, not paid.
- Download results with flow_download (free) into raw/ under the exact file names from the sheet.
  Never regenerate a clip only because a download failed.
- Log real credits in credits.csv. Stop and ask before any retry that costs credits.

## Output
- brief.md (Shots table: shot, time, type, model, prompt, file name, credits).
- One copy-ready generation sheet in shooting order: shot id, model, prompt, file name
  (raw/shot-01.png, raw/shot-02.mp4 ...).
- Planned credits in credits.csv. After generation, update with the real numbers.
