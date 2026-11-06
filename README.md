# Page Factory

A free kit that sets up a faceless video page for Facebook, Instagram, Threads, YouTube Shorts and
TikTok, using Claude Code or Cowork. One master prompt sets everything up. After that, every chat makes
one finished video: topic, sources, script, visuals, voice, captions, title, cover and posting text.

**Site, manual and tutorial:** https://kuyaloy.github.io/page-factory/
Version: see `VERSION`. Facts in `research/` carry the date they were checked.

## Start in 3 steps
1. Make an empty folder for your studio (for example `D:\My Studio`).
2. Open it in Claude Code (type `claude` in a terminal in that folder) or in Cowork (connect the folder).
3. Paste everything inside the block in [MASTER-PROMPT.md](MASTER-PROMPT.md).

The master prompt downloads this kit into your folder, asks you everything once, helps you create or
connect your accounts, installs free tools, builds your page brand and plans your first month.

## After setup: one chat per job
| You want to | Open a new chat and paste |
|---|---|
| Make one video | [prompts/new-video.md](prompts/new-video.md) |
| Make several videos at once | [prompts/weekly-batch.md](prompts/weekly-batch.md) |
| Review the week's numbers | [prompts/weekly-review.md](prompts/weekly-review.md) |
| Pick up where a chat stopped | [prompts/continue.md](prompts/continue.md) |
| Start another page | [prompts/new-page.md](prompts/new-page.md) |
| Refresh trends and rules (monthly) | [prompts/trend-refresh.md](prompts/trend-refresh.md) |
| Get the newest kit | [prompts/update-kit.md](prompts/update-kit.md) |
| Improve the kit from real work | [prompts/retro.md](prompts/retro.md) |

Every chat reads `ai-handoff-summary.md` first and updates it at the end, so fresh chats lose nothing.
Type in any language (Tagalog, Taglish ...). Answers come in English unless you choose otherwise.

## Free by default
Google Flow's free daily credits for visuals, HyperFrames + FFmpeg for editing, faster-whisper for
captions, your own voice or free Chatterbox / Kokoro voices, and the platforms' own schedulers.
Paid tools you already have (CapCut, Higgsfield, Google AI Pro ...) are used when you say so.
New paid tools are suggested only after a page earns. You need a Claude plan to run the chats.

## What's inside
| Path | What it is |
|---|---|
| `MASTER-PROMPT.md` | The HQ setup prompt (paste once) |
| `prompts/` | Prompts for every later chat |
| `kit/skills/` | 15 skills copied into your studio (`.claude/skills/`) |
| `kit/templates/` | CLAUDE.md rules, studio.md, page and episode files, CSV trackers |
| `kit/tools/` | Helper scripts (captions.py) |
| `research/` | Monetization and policy, trend radar and page ideas, tools and costs |
| `docs/` | The site and manual (GitHub Pages) |
| `docs-src/`, `tools/build_manual.py` | Site source, pictures (`docs-src/assets/`, credits inside) and build script |
| `kit/manifest.json`, `kit/EXTENDING.md` | Kit contents and how to extend it |
| `VERSION`, `CHANGELOG.md`, `ROADMAP.md` | Version, changes with migration notes, what's next |
| `LICENSE` | MIT |

## For maintainers
- Rebuild the site and manifest after any change: `python tools/build_manual.py` (it also copies
  `docs-src/assets/` to `docs/assets/`).
- Release: bump `VERSION`, add a `CHANGELOG.md` entry, rebuild, then
  `git add -A`, `git commit -m "vX.Y.Z: ..."`, `git push`.
- GitHub Pages: Settings > Pages > Deploy from a branch > `main`, `/docs`.
- Own domain later: put the domain in `docs/CNAME` (the build keeps it), add the DNS records GitHub
  shows, then Settings > Pages > Custom domain and Enforce HTTPS.

## Easter egg (optional)
During setup you're asked whether to hide a tiny "KuyaLoy" signature in one background spot per
video (a poster, a sign, a T-shirt, a TV in the room) as a thank-you to the kit's creator, like a
hidden detail in a painting. You can also hide your own name instead, or say no. It's off unless you
say yes.

## License
MIT (see `LICENSE`). Use it, change it, share it, sell what you make with it. Keep the license notice
in copies of the kit.

## Tool licenses
Site: anime.js MIT, rough.js MIT, fonts Permanent Marker (Apache-2.0) and Kalam (SIL Open Font License), pictures
public domain (see `docs-src/assets/CREDITS.md`).
Video tools: HyperFrames Apache-2.0, FFmpeg LGPL/GPL, faster-whisper MIT, Chatterbox MIT, Kokoro Apache-2.0,
OpenMontage AGPL-3.0, Postiz AGPL-3.0, Remotion free for teams of 3 or fewer. Check each before
commercial use.
