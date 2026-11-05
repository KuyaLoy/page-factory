---
name: shot-planner
description: Turn a Page Factory script into a shot list with copy-ready Google Flow (or Grok) prompts, file names and a credit budget. Use after the script is approved and before Loy generates assets.
---

# Shot planner

## Flow costs (Flow Help, checked 2026-11-05, re-check monthly)
| Model | Length | Credits (Google AI Pro) | Use for |
|---|---|---|---|
| Nano Banana 2 Lite (image) | still | no charge listed | most shots, mascot poses, backgrounds |
| Veo 3.1 Lite | 4-8 s | 10 | key motion moments, supports ingredients |
| Gemini Omni Flash 720p | 4 / 6 / 8 / 10 s | 7 / 10 / 12 / 15 | cheap motion, ingredients, video edits |
| Veo 3.1 Fast | 4 / 6 / 8 s | 20 | better motion when Lite fails |
| Veo 3.1 Quality | 8 s | 100 | only for a proven topic's hero shot |
Google AI Pro = 1,000 credits per account per month, no rollover.

## Plan
1. Split the script into 10-14 shots of 3-5 seconds. Match the 5-beat timing.
2. Mark each shot:
   - still: Nano Banana image, animated in the edit (parallax, push-in, cut-out move, shake).
   - motion: Veo 3.1 Lite or Omni Flash, only for 3-4 key moments (hook, twist, payoff).
   - card: text or map card built in HyperFrames (no credits).
3. Budget: total under the page budget (default 150 credits, counting 2 tries per motion shot).
   Pick the Flow account with the most credits left (credits.csv).
4. Write each prompt as: [prompt block] + [setting, era, lighting] + [mascot action and emotion] +
   [camera] + "vertical 9:16, no text, no watermark". Use the mascot ingredient ("@<name>") when
   the model supports ingredients.

## Prompt rules
- Describe motion as forces and intent ("stumbles back, catches the clipboard mid-fall"), not
  as UI terms. Use the motion-design-prompts skill if it is available.
- One action per clip. Short clips beat long ones.
- No text, logos, real people or other creators' characters in prompts.
- Keep era details accurate (clothes, buildings) using the fact-checker's sources.

## Output
- brief.md (Shots table with type, model, prompt, file name, credits).
- One "generation sheet" copy block: shot id, model, prompt, file name, in shooting order.
- Log planned credits in credits.csv. After Loy generates, update with the real numbers.
