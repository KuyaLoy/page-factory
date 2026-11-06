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
  "architecture": {
    "mp4": "media/pf-loop-architecture.mp4",
    "webm": "media/pf-loop-architecture.webm",
    "width": 720,
    "height": 1280,
    "seconds": 6.83,
    "mp4Bytes": 1464496,
    "webmBytes": 1289639
  },
  "forest": {
    "mp4": "media/pf-loop-forest.mp4",
    "webm": "media/pf-loop-forest.webm",
    "width": 720,
    "height": 1280,
    "seconds": 6.83,
    "mp4Bytes": 1508951,
    "webmBytes": 1516782
  },
  "lake": {
    "mp4": "media/pf-loop-lake.mp4",
    "webm": "media/pf-loop-lake.webm",
    "width": 720,
    "height": 1280,
    "seconds": 6.83,
    "mp4Bytes": 921333,
    "webmBytes": 700264
  },
  "macro": {
    "mp4": "media/pf-loop-macro.mp4",
    "webm": "media/pf-loop-macro.webm",
    "width": 720,
    "height": 1280,
    "seconds": 6.83,
    "mp4Bytes": 931357,
    "webmBytes": 607840
  },
  "waterfall": {
    "mp4": "media/pf-loop-waterfall.mp4",
    "webm": "media/pf-loop-waterfall.webm",
    "width": 720,
    "height": 1280,
    "seconds": 6.83,
    "mp4Bytes": 1501198,
    "webmBytes": 1334433
  }
} as const
