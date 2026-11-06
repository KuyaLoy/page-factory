# Extending the kit

How to add features without breaking studios that already run the kit.

## Principles
- One skill, one job. Skills don't call each other. The page-factory router decides the order.
- Tools are swappable routes (HyperFrames, Remotion, CapCut, ffmpeg). No page depends on one tool.
- Studio data (pages/, .env, brand files, episodes, analytics) is never touched by kit updates.
- Facts carry a "checked" date. Rules that depend on platforms live in research/ and get re-checked.
- Plain English, no em dashes, multiple-choice questions with a recommended option.

## Add a skill
1. Create kit/skills/<name>/SKILL.md with frontmatter: name, description (when to use it).
2. Add it to kit/manifest.json under "skills" with "since": "<new version>".
3. Add it to the Modes table in kit/skills/page-factory/SKILL.md and to any prompt that should run it.
4. Bump VERSION (minor), add a CHANGELOG.md entry, run python tools/build_manifest.py.

## Add a prompt
1. Create prompts/<name>.md with one ```text block. That block is exactly what the site's copy
   buttons copy (the site reads the file itself at build time).
2. Add it to the README table and to the list in site/src/content/prompts.ts (label, group, when to use,
   summary). Run python tools/build_manifest.py to add it to kit/manifest.json.

## Add a module (bigger feature)
- Folder kit/modules/<name>/ with README.md (what it does, setup, cost, licenses), plus its own skills/,
  prompts/ and templates/ if needed.
- Modules are off by default. A studio turns one on in its CLAUDE.md ("Modules enabled").
- Register it in kit/manifest.json "modules".
- Candidates on the roadmap: posting-automation, long-form-compiler, analytics-import, dubbing.

## Versioning (SemVer)
- Patch (1.0.x): fixes and wording.
- Minor (1.x.0): new skill, prompt, template or module. Studios can update any time.
- Major (x.0.0): changes that need a migration. Add "Migration" steps to the CHANGELOG entry.

## Release checklist
1. VERSION, CHANGELOG.md (with Migration notes), kit/manifest.json.
2. python tools/build_manifest.py
3. git add -A
   git commit -m "vX.Y.Z: <summary>"
   git push
4. Studios run prompts/update-kit.md.
