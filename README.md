# Page Factory

A free kit that sets up a faceless video page for Facebook, Instagram, Threads, YouTube Shorts and
TikTok, using Claude Code or Cowork. One master prompt sets everything up. After that, every chat makes
one finished video: topic, sources, script, visuals, voice, captions, title, cover and posting text.

**Site:** https://kuyaloy.github.io/page-factory/ (the full step-by-step guide: https://kuyaloy.github.io/page-factory/manual/)
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

Motion shots use Flow's default video model, Omni 1.1 Flash (7 to 15 credits a clip). Setup lets you
pick Veo 3.1 Lite, Fast or Quality instead, with each one's cost shown, and you can switch any single shot.

## What's inside
| Path | What it is |
|---|---|
| `MASTER-PROMPT.md` | The HQ setup prompt (paste once) |
| `prompts/` | Prompts for every later chat |
| `kit/skills/` | 15 skills copied into your studio (`.claude/skills/`) |
| `kit/templates/` | CLAUDE.md rules, studio.md, page and episode files, CSV trackers |
| `kit/tools/` | Helper scripts (captions.py) |
| `research/` | Monetization and policy, trend radar and page ideas, tools and costs |
| `site/` | The Project Factory site (React + Vite): the landing page and the full guide at `/manual/`. See `site/README.md` |
| `.github/workflows/pages.yml` | Builds `site/` and deploys it to GitHub Pages |
| `tools/build_manifest.py` | Rebuilds `kit/manifest.json` after a kit change |
| `ASSET-REQUESTS.md`, `VIDEO-REQUESTS.md`, `ASSET-LICENSES.md` | How the site's sample pictures and clips were made, and their sources |
| `kit/manifest.json`, `kit/EXTENDING.md` | Kit contents and how to extend it |
| `VERSION`, `CHANGELOG.md`, `ROADMAP.md` | Version, changes with migration notes, what's next |
| `LICENSE` | MIT |

## For maintainers
- Rebuild the manifest after any kit change: `python tools/build_manifest.py`.
- The site: `cd site`, `npm install`, `npm run dev`. The landing page and the guide read the prompt files,
  VERSION and kit/manifest.json at build time, so prompt edits show up after a rebuild. Details in
  `site/README.md`.
- Release: bump `VERSION`, add a `CHANGELOG.md` entry, rebuild, then
  `git add -A`, `git commit -m "vX.Y.Z: ..."`, `git push`.
- GitHub Pages: Settings > Pages > Source: GitHub Actions. `.github/workflows/pages.yml` builds `site/` (the
  landing page and the guide at `/manual/`) on every push to `main`.
- Own domain later: add the DNS records GitHub shows, then Settings > Pages > Custom domain and Enforce
  HTTPS, and build the site with `VITE_BASE=/` (see `site/README.md`).

## The KuyaLoy signature (on by default)
Every video hides a tiny "KuyaLoy" signature in one background spot (a poster, a sign, a T-shirt, a TV
in the room), like a painter's signature: the kit's thank-you, since it's free. Setup tells you about it
and lets you keep it, use your own name or handle instead, or turn it off. Your choice is the
`Easter egg:` line in your page file, and you can change it any time.

## Flow automation (optional)
By default you paste the prompt sheet into Google Flow yourself. If you'd rather let the chat make the
Flow clips, install [flow-mcp](https://github.com/GTAI-1/flow-mcp) yourself from its README and say yes
to Flow automation in setup. It's a third-party tool that drives Flow in its own Chrome window after you
sign in by hand, and it skips any clip above its credit cap. Its README warns that it can break when
Flow changes and that automated use may be against Google's terms: use it on your own account, at your
own risk. The kit never installs it for you, and still shows the credits before anything is generated.

## License
MIT (see `LICENSE`). Use it, change it, share it, sell what you make with it. Keep the license notice
in copies of the kit.

## Tool licenses
Site: React, Vite, Tailwind CSS and Motion MIT, GSAP Standard "no charge" license, Geist fonts SIL Open Font
License, Lucide icons ISC, sample pictures and clips made with Google Flow (see `ASSET-LICENSES.md`).
Optional: flow-mcp is third-party; check its license and terms before you use it.
Video tools: HyperFrames Apache-2.0, FFmpeg LGPL/GPL, faster-whisper MIT, Chatterbox MIT, Kokoro Apache-2.0,
OpenMontage AGPL-3.0, Postiz AGPL-3.0, Remotion free for teams of 3 or fewer. Check each before
commercial use.
