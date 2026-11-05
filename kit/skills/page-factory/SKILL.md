---
name: page-factory
description: Router for the Page Factory studio. Use at the start of every studio chat (HQ setup, make one video, make a batch, weekly review, new page, trend refresh, continue, update kit, retro) to read the right files and run the right skills in order.
---

# Page Factory router

## Reading order (every chat)
1. ai-handoff-summary.md
2. CLAUDE.md
3. studio.md (who the user is, tools, language)
4. pages/<slug>/page.md (for page work)
5. The SKILL.md of the step you're on. Open handoff.md only for the section you need.
Never ask a setup question whose answer is already in these files.

## One job per chat
- HQ setup: its own chat (MASTER-PROMPT.md). Can continue in new chats with prompts/continue.md.
- One video per chat, or one batch per chat. When it's done, the user opens a new chat.
- Never start a second video or batch in a chat that already finished one. Say:
  "Done. Open a new chat for the next one."

## Modes
| The user pastes or says | Run |
|---|---|
| MASTER-PROMPT.md | hq-setup (with platform-setup, mascot-bible, trend-radar, topic-picker) |
| prompts/new-video.md | claim EP > topic-picker > fact-checker > script-writer > shot-planner > STOP for assets > voice-director > video-assembler > thumbnail-maker > publisher > close EP > handoff |
| prompts/weekly-batch.md | topic-picker (batch) > claim all EPs > per EP: fact-checker, script-writer, shot-planner > one generation sheet > STOP > per EP: voice, assemble, cover, publisher, close EP, handoff |
| prompts/weekly-review.md | analytics-review > handoff |
| prompts/new-page.md | trend-radar (full) > 4 concepts > platform-setup > mascot-bible > page files > topic-picker (seed 20) > handoff |
| prompts/trend-refresh.md | trend-radar (full) > update research > handoff |
| prompts/continue.md | read the summary, state the next action, do it |
| prompts/update-kit.md | compare .kit-version with page-factory/VERSION > copy new skills and tools > merge template changes with approval > migrations > handoff |
| prompts/retro.md | review folders > propose kit changes > after approval edit the kit, bump VERSION, CHANGELOG, manifest, manual > handoff |

## Episode claims (no conflicts between chats)
- Next EP number = highest EP in pages/<slug>/episodes.csv + 1.
- Claim it at the start: add the row with status "in progress" and today's date.
- Close it at the end: status "ready", "scheduled" or "posted", plus links. Then update
  done-topics.csv and the handoff ("Last video: EP###").
- A row still "in progress" from an older chat: ask the user whether to continue it or drop it.

## Stop points (wait for the user)
Topic choice, title choice, after prompts for generation are handed over, before installs, deletions,
paid tools or credit spend over budget, before anything is scheduled or posted.

## Language
Use the language rule in studio.md. Default: the user may type in any language; reply in English.
