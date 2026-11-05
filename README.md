# Page Factory

One master prompt that sets up a faceless Reels and Shorts studio in Claude Code or Cowork.
After setup, every new chat makes a video: topic, sources, script, visuals, voice, captions,
title, cover and schedule. A new page reuses the same studio.

Version: see `VERSION` (1.0.0, 2026-11-05). Research dates are inside each file. Re-check monthly.
Repo: https://github.com/KuyaLoy/page-factory | Manual: https://kuyaloy.github.io/page-factory/

## How it works

```
SETUP (once)            VIDEO (one per chat)        WEEKLY BATCH           WEEKLY REVIEW        NEW PAGE (any time)
MASTER-PROMPT.md  --->  prompts/new-video.md  or   prompts/weekly-batch  prompts/weekly-review  prompts/new-page.md
skills, rules,          topic > sources > script    plan 4-5 videos,      numbers > decisions   trend scan > concept >
tools, accounts,        > shots > voice > edit >    one generation        > topic scores        brand > accounts >
brand, topics           cover > schedule            sheet, schedule                             topics
```
Every chat starts by reading `ai-handoff-summary.md` and ends by updating `handoff.md` and
`ai-handoff-summary.md`, so any chat (or any AI) can pick up where the last one stopped.

## What's inside
| Path | What it is |
|---|---|
| `MASTER-PROMPT.md` | Paste once in the first chat. Sets up rules, skills, tools, accounts, brand, topics |
| `prompts/` | Prompts for later chats: new-video, weekly-batch, weekly-review, new-page, trend-refresh, continue, update-kit, retro |
| `kit/skills/` | 13 skills the studio uses (copied to `.claude/skills/` during setup) |
| `kit/templates/` | CLAUDE.md rules, page, mascot and episode templates, CSV trackers, .gitignore, .env.example |
| `kit/tools/` | Helper scripts (captions.py) |
| `kit/manifest.json` | Machine-readable list of skills, prompts, templates and tools with versions |
| `kit/EXTENDING.md` | How to add skills, prompts and modules without breaking existing studios |
| `VERSION`, `CHANGELOG.md`, `ROADMAP.md` | Kit version, what changed (with migration notes), what's next |
| `research/` | 01 monetization and policy, 02 trend radar and page ideas, 03 tools, costs and workflow |
| `docs/index.html` | The manual, ready for GitHub Pages |
| `docs-src/` + `tools/build_manual.py` | Source and build script for the manual |
| `handoff.md`, `ai-handoff-summary.md` | Continuity notes for this kit itself |

## Quick start

### Claude Code (recommended for setup and rendering)
1. Keep this folder at `D:\claude-ai-video-edit\page-factory`. The studio root is `D:\claude-ai-video-edit`.
2. Open PowerShell in `D:\claude-ai-video-edit` and run `claude`.
3. Paste everything inside the block in `MASTER-PROMPT.md`. Answer the multiple-choice questions.
4. Later chats: run `claude` in the same folder and paste a prompt from `prompts/`.

### Cowork
1. In the Claude desktop app, connect `D:\claude-ai-video-edit`.
2. Start a task and paste `MASTER-PROMPT.md`. Cowork creates files and plans well. Windows installs
   and video rendering are best done in Claude Code.
3. Later chats: paste a prompt from `prompts/`.

You can type in Tagalog or Taglish. The AI always answers in English (it's in the rules).

## Improve and update the kit
- **Retro:** paste `prompts/retro.md` with the folders to review. The chat finds what worked and what
  broke, proposes kit changes, and after your OK edits the kit, bumps `VERSION`, writes `CHANGELOG.md`.
- **Update a studio:** paste `prompts/update-kit.md`. It pulls the new kit, copies new skills and tools,
  merges template changes with your approval, runs migrations, and never touches page data.
- **Add features:** follow `kit/EXTENDING.md` (skills, prompts, modules, versioning, release checklist).

## Put the manual on GitHub Pages
1. Push this folder to https://github.com/KuyaLoy/page-factory (first push below).
2. Repo Settings > Pages > Source: "Deploy from a branch" > Branch `main`, folder `/docs`.
3. The manual will be at https://kuyaloy.github.io/page-factory/
GitHub Pages on a free account needs a public repo. Never commit `.env` or anything private.

First push (PowerShell in `D:\claude-ai-video-edit\page-factory`):
```
git init -b main
git add -A
git commit -m "v1.0.0: Page Factory kit"
git remote add origin https://github.com/KuyaLoy/page-factory.git
git push -u origin main
```

## Update the manual
Edit `docs-src/manual.src.html` or any prompt file, then run:
```
python tools/build_manual.py
```
It rebuilds `docs/index.html` with the current prompts embedded.

## Licenses of tools used
HyperFrames Apache-2.0, OpenMontage AGPL-3.0, Postiz AGPL-3.0, Posthive AGPL-3.0, Chatterbox MIT,
WhisperX BSD-2, VectCutAPI Apache-2.0, Remotion free for teams of 3 or fewer. Check each before
commercial use. This kit's own files are yours to license as you like.
