# MAKE A BATCH

Make several videos in one chat (for example a week's worth on a weekend). Open a NEW chat for every
batch. The handoff files carry everything over.

```text
MAKE A BATCH. Page: <page-slug>. Videos: <number, or use the pace in page.md>.

This chat makes ONE batch. When it's done, I open a new chat for the next batch.

1. Read ai-handoff-summary.md, CLAUDE.md, studio.md, pages/<page>/page.md and the newest file in
   analytics/. Don't ask setup questions: the answers are in those files.
2. topic-picker (batch): 3 batch plans as multiple choice, recommended first. Each plan: topics,
   series balance, posting slots in my timezone and the audience's.
3. After I pick: claim all EP numbers in episodes.csv (status "in progress").
4. For each episode: fact-checker, script-writer (I pick the titles), shot-planner.
5. STOP. Give me ONE generation sheet: every prompt for the whole batch, grouped by episode, with
   exact file names. If my voice is recorded or from a paid tool, add all narration texts with file
   names. Split visual credits across days so we stay inside the free daily credits (studio.md).
6. When I say "assets done": build each video one at a time (voice-director, video-assembler, QA,
   thumbnail-maker, publisher). After EACH video, close it in episodes.csv and update the handoff
   files, so a new chat can finish the batch if this one gets long (prompts/continue.md).
7. Finish: schedule.csv filled, the posting packs, step-by-step posting help for every platform,
   handoffs updated, and "Done. Open a new chat for the next batch."
```
