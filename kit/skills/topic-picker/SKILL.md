---
name: topic-picker
description: Pick the next video topic, or a whole week of topics, for a Page Factory page. Use when Loy starts a new video or a weekly batch and needs topic options as multiple choice.
---

# Topic picker

## Single video
1. Read pages/<slug>/topics/queue.csv and done-topics.csv.
2. Take the 3 highest-scoring topics that are not done, plus 2 fresh ones from trend-radar (quick).
3. Overlap check: if a competitor told the same story, skip it unless we have a clearly different
   angle and our own sources. Say which.
4. Show 5 options as multiple choice, recommended first. Each option: working title, series,
   hook line (first 2 seconds), score out of 30, why now.

## Week mode
1. Build 3 plans of 4-5 topics each (Plan A recommended).
2. Balance series (no series twice in a row), mix one "safe evergreen" with one "test" topic.
3. Show posting days and times in US Eastern and Dubai time.

## After the pick
- Create the episode folder EP###-<slug> with brief.md from kit/templates/episode/brief.md.
- Mark the topic "in progress" in queue.csv.
