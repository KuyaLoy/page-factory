# NEW VIDEO

Paste in a new chat (Claude Code in the studio root, or Cowork with the studio folder connected).

```text
NEW VIDEO. Page: <page-slug, or ask me>.

1. Read ai-handoff-summary.md, then CLAUDE.md, then pages/<page>/page.md.
   Open handoff.md only for the section you need. Use the page-factory skill as the router.
2. topic-picker: give me 5 topics as multiple choice, recommended first.
   3 from topics/queue.csv (best score, not in done-topics.csv) + 2 fresh from a quick trend-radar scan.
   For each: working title, series, hook line, score, why now.
3. After I pick, run the pipeline. Save everything in pages/<page>/episodes/EP###-<slug>/.
   a. fact-checker: 2+ sources per claim in brief.md (Sources).
   b. script-writer: 45-60 s script with the 5-beat timing table. Give me 3 title options.
   c. shot-planner: shot list, Flow prompts, credit estimate under the page budget, and which
      Flow account to use (credits.csv).
   d. STOP. Give me one copy block with every Flow prompt and the exact file name for each result
      (raw/shot-01.png, raw/shot-02.mp4 ...). Wait until I say "assets done" or the files are in raw/.
   e. voice-director: narration text for my Higgsfield clone (or run Chatterbox if chosen).
      I save the file as vo/vo.wav. Then normalize it.
   f. video-assembler: word captions, assemble with HyperFrames (default) or Remotion or a CapCut
      draft, export export/final.mp4 at 1080x1920, 30 fps.
   g. QA: pull 5 frames (hook, 25%, 50%, payoff, end), look at them, fix problems once.
   h. thumbnail-maker: cover.png (1080x1920) and, if needed, thumb-yt.png (1280x720). 2 variants.
   i. publisher: final title (multiple choice), Facebook/Instagram/Threads caption (max 5 hashtags),
      YouTube title and description, AI disclosure check, made-for-kids check, schedule slot.
4. Update done-topics.csv, credits.csv, schedule.csv, handoff.md and ai-handoff-summary.md.
5. Finish with: export path, cover path, the caption block, the YouTube block, and the scheduled times.
```
