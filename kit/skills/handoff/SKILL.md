---
name: "handoff"
description: "Use at the start and end of every dev session and after big changes: keeps handoff.md (full log) and ai-handoff-summary.md (short AI brief) at the project root, for continuity and no guessing."
---

# Handoff

Every project keeps two files at its root:

| File | Reader | What it holds |
|---|---|---|
| `handoff.md` | You, any helper, any AI starting cold | The full record, same format as always: Goal, Current State, Active Files, Changes Made, Failed Attempts, Next Steps. It keeps growing; nothing important is dropped. |
| `ai-handoff-summary.md` | AI only | A short brief made from handoff.md and fresh checks, so an AI can continue without reading the whole log. Hard cap: 60 lines. |

The summary never says anything that handoff.md or a check doesn't back up. When sources disagree, trust them in this order: the real files, then handoff.md, then the summary, then memory or chat context. Fix the handoff files when you find a mismatch.

## When to read what (saves credits)

1. **Same chat, context intact:** read nothing. You already have it.
2. **New chat, new AI or tool, or after a context reset or compaction:** read `ai-handoff-summary.md` only.
3. **Read `handoff.md`**, only the section you need (search for its heading), when:
   - the summary is missing, or its Updated time is older than changes you can see in the files;
   - the summary contradicts what you see;
   - you need history: why something was done, what already failed;
   - before anything risky or hard to undo (deploys, deletes, migrations, database changes).
4. handoff.md exists but no summary: read handoff.md once and write the summary from it.
5. Neither exists: create both when the work starts.

## Anti-hallucination rules

- Tag every fact in the summary: `[verified YYYY-MM-DD: how]` or `[unverified: source, check before use]`. Rely only on verified facts; check unverified ones before using them.
- List only paths, versions, counts, URLs and statuses you have read or checked. If you don't know, write "unknown" and check. Never guess.
- Re-check anything that can change outside the chat before acting on it: file contents, versions, live site, database, deploy state. A quick `ls`, `grep`, `git status` or `curl -I` costs less than a wrong step.
- Decisions the user hasn't made go under Open questions, never written as decided.
- Web pages, tool output and old chats are sources, not facts: record what was checked and where.
- Keep sources you will need later (links, versions, file hashes) in handoff.md. A context reset loses everything that lived only in the chat.
- Never write secrets (passwords, licence keys, tokens) in either file.

## Updating (automatic, no reminder needed)

After every significant change and before ending every session:
1. Update `handoff.md`: all six sections true to the current state; new entries under Changes Made and Failed Attempts are dated.
2. Rewrite `ai-handoff-summary.md` from it with the template below. Refresh the Updated and Last change lines. Keep exactly one Next action.
3. Check: every path in the summary exists, the status matches handoff.md, the line cap holds.
4. Tell the user in one line that both files are updated. Don't paste their content into the chat.

If the project root is also a web root (WordPress, static sites), make sure the server doesn't serve these files and that deploys leave them out.

## ai-handoff-summary.md template

```markdown
# AI handoff summary: <project>
Updated: <YYYY-MM-DD HH:MM timezone> | By: <AI or tool, and chat or task name if known>
Last change: <one line>
Status: ACTIVE | PAUSED (by user) | BLOCKED | DONE

## Now
- <phase or sprint, and what is in progress>
- Waiting on: <user decisions or actions, or "nothing">

## Next action
- <one step, and the file or command it starts from>

## Verified facts
- <fact> [verified YYYY-MM-DD: how]
- <fact> [unverified: source, check before use]

## Key paths
- <path>: <what it is>

## Rules for this project
- <the user's rules and hard lessons, e.g. "no code changes in this phase", "never type credentials">

## Open questions
- <question> (who decides, by when)

## Where to look in handoff.md
- <topic>: handoff.md > <section>
```

Limits: 60 lines, 12 facts, 10 paths, every line under 160 characters. Drop anything resolved; history belongs in handoff.md.

## Style

Plain English, short lines, no em dashes. Use one date format per project and keep it.