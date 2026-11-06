# Roadmap

Ideas, not promises. Retros (prompts/retro.md) add to this list.

## Next (v1.5)
- [ ] Own domain for the site: DNS records, Settings > Pages > Custom domain, HTTPS; build site/ with
      VITE_BASE=/ and update the og:image and canonical links in site/index.html and site/manual/index.html.
- [ ] Test the flow-mcp route end to end on a real Windows PC (its README says Windows hasn't been run on a
      real PC yet) and write down what the owner sees.
- [ ] First real run: HQ setup + EP001-EP005 on Page #1, then a retro.
- [ ] HyperFrames starter templates per format: caption styles, title cards, covers.
- [ ] tools/check-tools.ps1 and check-tools.sh shipped in the kit and tested.
- [ ] Verify TikTok monetization rules from official pages and update research/01.
- [ ] Find dated, sourced earnings per 1,000 views (Facebook and YouTube, by viewer country) and the
      usual wait from Facebook's interest form to an invite. None were verified on 2026-11-05.
- [ ] Optional local-visuals route: tested ComfyUI workflows (FLUX.1 schnell stills, Wan clips).

## Soon
- [ ] Module: posting-automation (self-hosted Postiz with API scripts; Posthive MCP as an experiment).
- [ ] Module: long-form-compiler (8-12 minute videos from a series, with new intro and links).
- [ ] Module: analytics-import (CSV exports from YouTube Studio, Meta and TikTok).
- [ ] Module: dubbing (second pages in other languages from the same episodes).
- [ ] Cover and title test habit (2 variants, track which wins).

## Later
- [ ] Scheduled monthly trend refresh.
- [ ] Multi-page dashboard that reads the studio CSVs.
- [ ] Translations of the guide.

## Done
- [x] v1.4.0 (2026-11-06): video model choice (Omni 1.1 Flash default, Veo 3.1 Lite, Fast or Quality),
      optional Flow automation with flow-mcp (owner installs it), KuyaLoy signature on by default and said at
      setup, the guide rebuilt in the Project Factory brand, five sample clips with obvious motion.
- [x] v1.3.0 (2026-11-06): Project Factory landing page in site/ (React, Vite, Tailwind, GSAP, Motion),
      GitHub Actions deploy, prompt library from the real files, Flow-made sample pictures and clips,
      1200x630 link preview image, the v1.2 page kept as the guide at /manual/.
- [x] v1.2.1 (2026-11-05): research merge (YouTube 2027 thresholds, Facebook qualified views and Fast
      Track rules, AI personas and reused-content rules, Flow per-generation credits).
- [x] v1.2.0 (2026-11-05): hand-drawn zine landing page with motion, a live studio demo, command list
      for the prompts, index-card FAQ, public-domain animation pictures with credits.
- [x] v1.1.0 (2026-11-05): HQ master prompt downloads the kit and sets up everything incl. 5 platforms,
      studio.md, episode claims, one job per chat, free-first tools, 30-90 s videos, tutorial manual.
- [x] v1.0.0 (2026-11-05): master prompt, 13 skills, templates, research, manual, update-kit and retro prompts.
