---
name: mascot-bible
description: Create and protect a page's brand: original mascot design, prompt block for Flow, reference sheets, profile and cover art prompts, and bios. Use when setting up a new page or when the mascot looks off-model.
---

# Mascot bible

## Design rules
- Original character only. Never resemble an existing cartoon, mascot or creator character.
- A silhouette that reads at thumbnail size (one big shape plus one or two props).
- 4 colors plus 1 accent. Flat 2D, clean outline, simple shapes. Simple designs stay consistent.
- Same outfit in every story. Only props and settings change.

## Build
1. Write brand/mascot-bible.md from kit/templates/page/mascot-bible.md.
2. Write brand/prompt-block.txt: 60-90 words describing the character exactly, plus the style.
   Example shape (write a new one per page):
   "<Name>, a small round-bodied cartoon <role> with <eyes>, <outfit>, <prop>. Flat 2D cartoon,
   clean dark outline, <palette>, simple shapes, soft cel shading, no text."
3. Give Loy copy-ready Flow prompts for: turnaround sheet (front, 3/4, side, back), expression sheet
   (10 expressions), profile picture, Facebook cover, YouTube banner. Look up current image sizes first.
4. Loy saves results in brand/refs/. Open them and check: same face, same outfit, same colors.
5. In Flow, Loy saves the turnaround as an ingredient. Prompts call it with "@<name>".

## Consistency test (before EP001)
Generate 6 test shots in different eras or places. Reject if the face, outfit or colors drift.
Tighten the prompt block and log the change in the bible.

## Bios
Facebook, Instagram, Threads, YouTube: one line of what the page is, one line of the promise
("A weird bit of history every day"), keywords for search on YouTube.
