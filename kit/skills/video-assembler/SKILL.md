---
name: video-assembler
description: Build the final vertical video for a Page Factory episode from the shots, narration and script: word captions, motion on stills, music and SFX, export and frame QA. Use when raw/ and vo/ are ready.
---

# Video assembler

## Inputs
raw/shot-XX.png|mp4, vo/vo-norm.wav, brief.md (script table, caption chunks), assets/music, assets/sfx.

## 1. Caption timing (faster-whisper)
    pip install faster-whisper
    python tools/captions.py pages/<slug>/episodes/EP###-<slug>
This writes edit/captions.json (word timings) and edit/captions.srt (2-4 word chunks).
The setup copies the script from page-factory/kit/tools/captions.py.
Then fix spellings against the script (names, numbers). Captions: 2-4 words per chunk, bold,
high contrast, in the middle band. Keep clear of the bottom bar and the right-side buttons.

## 2. Pick the route
| Route | When | How |
|---|---|---|
| A. HyperFrames (default) | Most episodes | HTML composition 1080x1920: one layer per shot, GSAP motion on stills, kinetic word captions from captions.json, audio tags for VO, music and SFX. Render to MP4 with the HyperFrames CLI (see its README / skills). |
| B. Remotion | If Loy prefers React templates | One composition per series, props = shots + captions. |
| C. CapCut Pro | Loy wants hands-on polish | Build a draft with VectCutAPI, or follow a manual recipe. Export without any watermark or end screen. |
| D. ffmpeg only | Fallback | Motion on each still, concat, then mix (commands below). |

## 3. ffmpeg building blocks (tested)
Push-in on a still, 4 s at 30 fps (120 frames):
    ffmpeg -i raw/shot-01.png -vf "scale=3240:-2,zoompan=z='min(zoom+0.0007,1.12)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=120:s=1080x1920:fps=30,format=yuv420p" -c:v libx264 -crf 18 edit/shot-01.mp4
Final mux and export:
    ffmpeg -i edit/video.mp4 -i edit/mix.wav -map 0:v -map 1:a -c:v libx264 -profile:v high -pix_fmt yuv420p -r 30 -crf 18 -preset slow -c:a aac -b:a 192k -ar 48000 -shortest -movflags +faststart export/final.mp4
Join scenes with the concat demuxer and -c copy when they share size, fps and codec settings.

## 4. Audio mix
- Voice about -14 LUFS. Music bed 14-18 dB under the voice. SFX on cuts and reveals.
- Music: our own, or royalty-free (YouTube Audio Library, Facebook Sound Collection, Suno on a plan
  that grants commercial rights). No licensed label tracks in Shorts: they cut the revenue share.

## 5. QA (one pass)
Pull 5 frames (2%, 25%, 50%, 80%, 97%), look at each, check: hook is clear without sound, captions
spelled right and readable, mascot on-model, no watermark, nothing important under the app buttons,
the end flows back into the start. Fix once, re-export, done.
