---
name: publisher
description: Package and schedule a finished Page Factory video for Facebook, Instagram, Threads and YouTube: final title, captions, descriptions, hashtags, AI disclosure and audience settings, schedule.csv, and the posting checklist. Use after export and cover are done.
---

# Publisher

## Package
- Final title: 3 options, Loy picks (multiple choice).
- Facebook / Instagram / Threads caption: hook line, 1-2 lines of context, one question to invite
  comments, max 5 hashtags (Meta's own tip). Threads: shorter, conversational.
- YouTube Shorts: title (the hook, under about 60 characters), description (2-3 lines, sources
  link list optional), a few tags.
- AI disclosure (YouTube "AI use" during upload): needed only for realistic AI content. Animation
  and Loy's own cloned voice: not needed. Preset AI voice: disclose to be safe.
  Meta: AI label for photorealistic AI video or realistic AI audio.
- Audience: "No, it's not made for kids" when the content is for a general audience.

## Schedule
- Fill schedule.csv: date, time US Eastern, time Dubai, platform, episode, title, status.
- Default slots come from page.md. Space uploads at least a day apart on each platform.

## Post (free native tools first)
1. Meta Business Suite > Create reel: upload final.mp4 and cover.png, caption, choose Facebook Page
   and Instagram, schedule.
2. Threads: post the video from the app or Postiz.
3. YouTube Studio > Create > Upload: title, description, audience, AI use setting, schedule.
4. Optional automation (after setup): Postiz public API (POST /public/v1/upload, then
   /public/v1/posts with type "schedule"), or Posthive's MCP tools. Keys only in .env.

## After posting
- Pin a comment with the question. Reply to early comments when possible.
- Update schedule.csv (status, link), done-topics.csv (add the title), queue.csv (status done).
