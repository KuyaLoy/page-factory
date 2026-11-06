// Written by scripts/optimize-media.mjs. Do not edit by hand: run "npm run media".
export const posterWidths = [480,720,1080] as const

export const posters = {
  "architecture": true,
  "forest": true,
  "lake": true,
  "macro": true,
  "waterfall": true
} as const

export const videos = {
  "lake": {
    "mp4": "media/pf-loop-lake.mp4",
    "webm": "media/pf-loop-lake.webm",
    "width": 720,
    "height": 1280,
    "seconds": 6.83,
    "mp4Bytes": 1043586,
    "webmBytes": 694062
  },
  "waterfall": {
    "mp4": "media/pf-loop-waterfall.mp4",
    "webm": "media/pf-loop-waterfall.webm",
    "width": 720,
    "height": 1280,
    "seconds": 6.83,
    "mp4Bytes": 2206348,
    "webmBytes": 1353226
  }
} as const
