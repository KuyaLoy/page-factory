# UPDATE KIT

Upgrade a studio to the newest kit version. Page data is never touched.

```text
UPDATE KIT.

1. Read ai-handoff-summary.md and CLAUDE.md.
2. In page-factory/ run "git pull" (or ask me to download the newest kit). Read VERSION and CHANGELOG.md.
   Compare with the studio's .kit-version. If they match, say "up to date" and stop.
3. Read page-factory/kit/manifest.json and the CHANGELOG entries newer than our version. Show me the
   list of changes first. After I approve:
   - Skills and tools: copy new or changed ones into .claude/skills/ and tools/.
   - Templates: never overwrite filled files (CLAUDE.md, page.md, mascot-bible.md, briefs, CSVs).
     Show a short diff of what changed in each template and merge it section by section.
   - Migrations: run every "Migration" step in CHANGELOG.md for each version we skipped, in order.
4. Never touch pages/*/episodes, pages/*/analytics, pages/*/brand or .env.
5. Write the new version into .kit-version. Update handoff.md and ai-handoff-summary.md.
6. Tell me in 5 lines what changed and what to try first.
```
