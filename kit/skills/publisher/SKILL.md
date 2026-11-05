---
name: publisher
description: Package and schedule a finished Page Factory video for every platform in page.md (Facebook, Instagram, Threads, YouTube, TikTok): final title, captions, descriptions, hashtags, AI disclosure and audience settings, schedule, and a step-by-step posting walk-through. Use after export and cover are done.
---

# Publisher

## Posting pack (one block per platform in page.md)
- Final title: 3 options, the user picks (multiple choice).
- Facebook and Instagram: hook line, 1-2 lines of context, one question for comments, max 5 hashtags
  (Meta's own tip).
- Threads: shorter and conversational, 1-2 hashtags or none.
- YouTube Shorts: title (the hook, under about 60 characters), description (2-3 lines, sources list
  optional), a few tags.
- TikTok: caption with the hook, 3-5 relevant hashtags, the cover image. Videos over 1 minute may
  count for TikTok's rewards program where it's available (check TikTok Studio).
- AI disclosure: YouTube "AI use" setting only for realistic AI content. Animation and the user's own
  cloned voice don't need it. A preset AI voice: disclose to be safe. Meta: AI label for photorealistic
  AI video or realistic AI audio. TikTok: use its AI-generated content label when the visuals are AI.
- Audience: "No, it's not made for kids" when the content is for a general audience.

## Schedule
- Fill schedule.csv: date, time in the user's timezone and the audience's, platform, episode, title.
- Default slots come from page.md. Space uploads at least a day apart on each platform.

## Walk the user through posting (free tools)
1. Meta Business Suite > Create reel: upload final.mp4 and cover.png, caption, choose the Facebook Page
   and Instagram, schedule.
2. Threads: post from the app.
3. YouTube Studio > Create > Upload: title, description, audience, AI use, Visibility > Schedule.
4. TikTok Studio (web) or the app: upload, caption, cover, post or schedule if offered.
5. Later, if set up: Postiz (self-hosted) for one dashboard. Keys only in .env.

## After posting
- Pin a comment with the question. Reply to early comments when possible.
- episodes.csv: status and links. done-topics.csv: add the title. queue.csv: mark done.
