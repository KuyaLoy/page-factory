---
name: page-factory
description: Router for the Page Factory studio. Use at the start of every studio chat (new video, weekly batch, weekly review, new page, trend refresh, continue) to read the right files and run the right skills in order.
---

# Page Factory router

## Reading order (every chat)
1. ai-handoff-summary.md
2. CLAUDE.md
3. pages/<slug>/page.md (for page work)
4. The SKILL.md of the step you are on. Open handoff.md only for the section you need.

## Modes
| Loy says | Run |
|---|---|
| "new video" or prompts/new-video.md | topic-picker > fact-checker > script-writer > shot-planner > STOP for assets > voice-director > video-assembler > thumbnail-maker > publisher > handoff |
| "weekly batch" | topic-picker (week mode) > per episode: fact-checker, script-writer, shot-planner > one generation sheet > STOP for assets > per episode: voice-director, video-assembler, thumbnail-maker > publisher (schedule) > handoff |
| "weekly review" | analytics-review > handoff |
| "new page" | trend-radar (full) > 4 concepts > mascot-bible > page setup from kit/templates > topic-picker (seed 20) > handoff |
| "trend refresh" | trend-radar (full) > update research files > handoff |
| "continue" | read the summary, state the next action, do it |
| "update kit" or prompts/update-kit.md | compare .kit-version with page-factory/VERSION > copy new skills and tools > merge template changes with approval > run CHANGELOG migrations > handoff |
| "retro" or prompts/retro.md | review the given folders > propose kit changes > after approval edit the kit, bump VERSION, CHANGELOG, manifest, rebuild manual > handoff |

## Stop points (wait for Loy)
- Topic choice, title choice, page name, mascot style.
- After the Flow prompts and narration text are handed over (Loy generates them).
- Before any install, deletion, paid tool or credit spend over budget.
- Before anything is scheduled or posted.

## Episode numbering
Next EP number = highest EP### in pages/<slug>/episodes/ + 1. Folder: EP###-<short-slug>.

## Good habits
- One video per chat keeps context small. Long batch: update handoffs after each video.
- Questions are multiple choice with the recommended option first.
- Loy may write Tagalog or Taglish. Answer in English.
