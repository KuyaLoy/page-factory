# RETRO

Review real work (a studio, an episode, an old project) and turn the lessons into kit improvements.
Run it in the kit's main chat or in Claude Code inside page-factory/.

```text
RETRO. Folders to review: <paths>.

1. Read page-factory/README.md, VERSION, CHANGELOG.md, ROADMAP.md, kit/manifest.json and
   kit/EXTENDING.md so you know what the kit already does and how to extend it.
2. Review the folders: handoff files, briefs, scripts, shot lists, credits.csv, analytics, failed
   attempts, anything that took long or broke. Read only. Don't change those files.
3. Report:
   - Keep: what worked, with the file that shows it.
   - Fix: what broke or wasted time, with the file that shows it.
   - Add: missing skills, prompts, templates or modules.
   - Proposed kit changes: a checklist with the exact kit file to change, why, and size
     (small / medium / big). Ask me to pick which ones to do (multiple choice).
4. After I approve: edit the kit files following kit/EXTENDING.md, bump VERSION (patch = fixes,
   minor = new skill/prompt/module, major = needs migration), add a CHANGELOG.md entry with a
   "Migration" note when studios need steps, update kit/manifest.json and ROADMAP.md, then run
   python tools/build_manual.py.
5. Update page-factory/handoff.md and ai-handoff-summary.md. Give me the git commands to commit and push.
```
