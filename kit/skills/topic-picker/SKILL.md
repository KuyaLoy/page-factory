---
name: topic-picker
description: Pick the next video topic, or a whole batch of topics, for a Page Factory page, and claim the episode numbers. Use when the user starts a video or a batch and needs topic options as multiple choice.
---

# Topic picker

## Single video
1. Read pages/<slug>/topics/queue.csv, done-topics.csv and episodes.csv.
2. Take the 3 highest-scoring topics that aren't done, plus 2 fresh ones from trend-radar (quick).
3. Overlap check: if a competitor told the same story (done-topics.csv), skip it unless there's a
   clearly different angle and our own sources. Say which.
4. Show 5 options as multiple choice, recommended first. Each: working title, series, hook line
   (first 2 seconds), score out of 30, why now.

## Batch
1. Build 3 plans of N topics (N from the prompt or page.md). Plan A is recommended.
2. Balance series (no series twice in a row). Mix safe evergreen topics with one test topic.
3. Show posting days and times in the user's timezone and the audience's.

## Claim (prevents conflicts with other chats)
- Next EP = highest EP in episodes.csv + 1 (batch: the next N numbers).
- Add each row now: ep, slug, title, series, status "in progress", started date.
- Create pages/<slug>/episodes/EP###-<slug>/ with brief.md from kit/templates/episode/brief.md.
- Mark the topic "in progress" in queue.csv.
