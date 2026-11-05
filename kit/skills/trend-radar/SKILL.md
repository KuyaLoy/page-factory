---
name: trend-radar
description: Find which faceless short-form formats, pages and topics are growing right now on YouTube Shorts, Facebook and Instagram Reels, Threads and TikTok, for inspiration only. Use for new pages, the monthly trend refresh, and quick topic scans for a video.
---

# Trend radar

## Modes
- Quick (one page, about 10 minutes): 10 fresh topic ideas that fit the page's series.
- Full (new page or monthly refresh): formats, example pages, topics, and what is dying.

## Where to look
1. YouTube: search the niche, filter by upload date, open rising channels (subs, views, video count,
   channel age). Note titles that beat the channel's average by 3x or more.
2. Facebook Reels and Instagram Reels search for the niche. Note follower counts and view counts.
3. TikTok and Threads search for the same topics.
4. Reddit and forums: r/NewTubers, r/PartneredYoutube, r/youtubers, r/facebook, r/aivideo,
   r/todayilearned (topics), r/AskHistorians (fact quality).
5. Google Trends, Wikipedia "Unusual articles" and "On this day" for evergreen topics.

## Record for each format
Format name | what it looks like | example pages with numbers and the date checked | why it works |
how it is made | Flow credits per video | originality risk | made-for-kids risk | ad-friendliness.
Mark numbers from tool vendors' blogs as "vendor claim, unverified".

## Score each topic (1-5 each, total out of 30)
curiosity gap | visual potential | fact-checkable (2+ good sources) | evergreen | fits a series |
fresh (not in done-topics.csv, no competitor did this exact story).

## Rules
- Inspiration only. Learn the format, the pacing and the title pattern. Never copy a script,
  character, name, title or thumbnail. Never download other creators' videos.
- Date every number. Trends move fast.
- Flag formats that platforms are demoting: unedited AI narration over stock footage, plain image
  slideshows, reposted clips, compilations with nothing added.

## Output
- Quick: 10 scored rows appended to pages/<slug>/topics/queue.csv.
- Full: update page-factory/research/02-trend-radar.md with a dated section.
