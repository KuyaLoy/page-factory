# Video requests: Project Factory site (Google Flow)

Status: done 2026-11-06. Both clips were made in Google Flow in Loy's signed-in Chrome. Loy approved each
credit cost before it was submitted. Both finished clips were watched in Flow's player before download.

How it was done (repeat this for new clips)
- Loy signs in to Flow himself. Claude never asks for passwords, codes or cookies.
- Read the cost Flow shows ("Generating will use N credits") and get Loy's OK before each credit-using
  generation. No paid retries without a new OK.
- Outputs per request: 1.
- Nothing is called "generated" until the finished clip has been seen.

Flow video models seen on 2026-11-06 (9:16, 720p, 8 s, 1 output): Omni 1.1 Flash 12 credits, Veo 3.1 Lite 10,
Veo 3.1 Fast 20, Veo 3.1 Quality 100. These change; read Flow's own number every time.

## V1: hero loop (used)
| Field | Value |
|---|---|
| Model | Veo 3.1 Quality, Frames mode, 9:16, 720p, 8 s, 1 output: 100 credits (approved by Loy) |
| Frames | Start and end frame: A1 pf-poster-lake (so the clip can loop) |
| Download | "1080p upscaled" MP4 (1080x1920, 24 fps, 7.85 s, with sound), 3.8 MB |
| Original | `site/assets-src/originals/pf-loop-lake.mp4` |
| Web copies | `site/public/media/pf-loop-lake.mp4` (1.0 MB) and `.webm` (0.7 MB), 720x1280, no sound |
| Loop | The last frame was not identical to the first (SSIM 0.93), so `npm run media` crossfades the last second into the first: 6.83 s, seam SSIM 0.99 |
| Use | Hero main card. Plays muted after the page loads, with a Pause button. Never autoplays under reduced motion. |

Prompt
```text
Locked-off cinematic shot of a calm turquoise glacial lake at first light, matching the frame exactly. The
camera does not move. Snow-capped peaks, pine forest and horizon stay perfectly still and sharp. Gentle ripples
move slowly across the water and soft mist drifts slowly from left to right low over the lake. The morning
light stays constant. One continuous shot, no cuts, no zoom, no camera shake. No text, no people, no animals,
no boats, no birds, no lens flares, no new objects, no sudden light changes.
```

## V2: waterfall loop (used)
| Field | Value |
|---|---|
| Model | Veo 3.1 Quality, Frames mode, 9:16, 720p, 8 s, 1 output: 100 credits (approved by Loy) |
| Frames | Start and end frame: A3 pf-poster-waterfall |
| Download | "1080p upscaled" MP4 (1080x1920, 24 fps, 7.85 s, with sound), 6.6 MB |
| Original | `site/assets-src/originals/pf-loop-waterfall.mp4` |
| Web copies | `site/public/media/pf-loop-waterfall.mp4` (2.2 MB) and `.webm` (1.3 MB), 720x1280, no sound |
| Loop | Crossfade loop like V1 (first/last SSIM 0.84 before, seam SSIM 0.99 after) |
| Use | Gallery card 3. Plays only when the visitor presses Play. |

Prompt
```text
Locked-off cinematic shot of a tall waterfall pouring over dark mossy rock into a turquoise pool, matching the
frame exactly. The camera does not move. Rocks, snowy peak and sky stay perfectly still and sharp. Water falls
continuously, fine spray drifts slowly in the low morning sunlight, the pool surface ripples gently. The light
stays constant. One continuous shot, no cuts, no zoom, no camera shake. No text, no people, no animals, no
birds, no new objects, no flicker.
```

## After a new download
1. Put the Flow file in `site/assets-src/originals/` as `pf-loop-<name>.mp4`.
2. Run `npm run media` in `site/` (needs ffmpeg). Check the printed loop seam number and watch the loop.
3. Record model, settings, credits, date and sizes in `ASSET-LICENSES.md`.
4. The page must look complete with the posters alone; videos are an extra.
