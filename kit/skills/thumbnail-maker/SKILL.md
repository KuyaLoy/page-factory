---
name: thumbnail-maker
description: Make covers and thumbnails for Page Factory videos with free tools: 1080x1920 covers for Reels, Shorts and TikTok, and 1280x720 YouTube thumbnails, built from the episode's own art with big readable text. Use after the final video is exported.
---

# Thumbnail maker

## Sizes
- Reels, Shorts and TikTok cover: 1080x1920. Keep the important part in the center: apps crop covers
  in profile grids.
- YouTube long-form thumbnail: 1280x720.

## Design rules
- One subject (the character reacting) plus one object from the story.
- 2-5 words, huge, high contrast. The cover adds curiosity; it doesn't repeat the title.
- The same series badge in the same corner every time.
- No clickbait the video doesn't pay off. No other creators' art.

## How (free)
1. Default: an HTML template per series, rendered to PNG with HyperFrames (single frame) or a headless
   browser screenshot (Playwright). Layers: background art from raw/, character pose, text, badge.
2. Or a free Flow image with empty space for text, then the text added in the template.
3. Paid tools only if the user already has them (Canva Pro, Adobe).
4. Make 2 variants. The user picks (multiple choice). Save export/cover.png and export/thumb-yt.png.

## Upload notes
- Facebook and Instagram Reels, TikTok: choose or upload the cover when posting.
- YouTube Shorts: pick a frame, or upload a cover if the option is available on the account.
- YouTube long-form: custom thumbnails need a verified phone number on the channel.
