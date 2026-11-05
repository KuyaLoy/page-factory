# MAKE ONE VIDEO

Open a NEW chat for every video (Claude Code in your studio folder, or Cowork with it connected) and
paste the block. One video per chat keeps the AI fresh. The handoff files carry everything over.

```text
MAKE ONE VIDEO. Page: <page-slug, or ask me if there is more than one page>.

This chat makes ONE video. When it's done, I open a new chat for the next one.

1. Read ai-handoff-summary.md, CLAUDE.md, studio.md and pages/<page>/page.md. Open handoff.md only
   for the section you need. Don't ask me setup questions: the answers are in those files. If
   something is missing, ask once and save the answer.
2. Claim the episode: next EP = highest EP in pages/<page>/episodes.csv + 1. Add the row now with
   status "in progress" and today's date.
3. topic-picker: 5 topics as multiple choice, recommended first.
4. After I pick, run the pipeline and save everything in pages/<page>/episodes/EP###-<slug>/:
   a. fact-checker: 2+ sources per claim.
   b. script-writer: 30-90 s script (usually 45-60 s, the story sets the length) with the 5-beat
      timing, 3 title options (I pick).
   c. shot-planner: shot list, prompts for my visual tool (studio.md), credit plan within budget.
   d. STOP. Give me one copy block with every prompt and the exact file name for each result.
      Wait for "assets done" (or check raw/ yourself).
   e. voice-director: narration with my voice choice (studio.md), saved as vo/vo.wav, normalized.
   f. video-assembler: word captions, render with my editor (studio.md, default HyperFrames),
      export export/final.mp4 at 1080x1920, 30 fps.
   g. QA: look at 5 frames (hook, 25%, 50%, payoff, end) and fix once.
   h. thumbnail-maker: cover.png (1080x1920) and a YouTube thumbnail if needed. 2 variants, I pick.
   i. publisher: the posting pack for every platform in page.md (title, caption or description,
      hashtags, AI disclosure, audience), the schedule slot, and step-by-step posting help.
5. Close the episode: episodes.csv (status and links), done-topics.csv, queue.csv, credits.csv,
   schedule.csv, then handoff.md and ai-handoff-summary.md ("Last video: EP###").
6. End with: file paths, the posting pack, and "Done. Open a new chat for the next video."
```
