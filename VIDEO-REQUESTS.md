# Video requests: Project Factory site (Google Flow)

Status: v1.4.0, 2026-11-06. Five clips with obvious motion (V3 to V7) replace the two calm v1.3.0 loops (V1,
V2), because the calm ones barely looked like video. All were made in Google Flow in Loy's signed-in Chrome.
Loy approved the cost (5 x 100 credits, Veo 3.1 Quality, one take each) before anything was submitted. Each
clip was seen finished in Flow before download and checked frame by frame after.

How it was done (repeat this for new clips)
- Loy signs in to Flow himself. Claude never asks for passwords, codes or cookies.
- Read the cost Flow shows ("Generating will use N credits") and get Loy's OK before each credit-using
  generation. No paid retries without a new OK.
- Outputs per request: 1.
- Nothing is called "generated" until the finished clip has been seen.

Flow video models seen on 2026-11-06 (9:16, 720p, 8 s, 1 output): Omni 1.1 Flash 12 credits, Veo 3.1 Lite 10,
Veo 3.1 Fast 20, Veo 3.1 Quality 100. These change; read Flow's own number every time.

## V3 to V7: the v1.4.0 clips (in use)
All five: Veo 3.1 Quality, Frames mode with the matching A-picture from `ASSET-REQUESTS.md` as the start frame
only (the camera moves, so the clip can't end where it began), 9:16, 720p, 8 s, 1 output, 100 credits each,
downloaded as "1080p upscaled" MP4 (1080x1920, 24 fps, 7.85 s, with sound). `npm run media` makes 6.83 s loops
that start one second in and crossfade their last second into that start, and saves each loop's first frame as
the poster.

| ID | Original (`site/assets-src/originals/`, kept out of git) | Download | Web copies (MP4 / WebM, 720x1280, no sound) | Use |
|---|---|---|---|---|
| V3 | pf-loop-lake.mp4 (start frame A1) | 3.7 MB | 0.9 MB / 0.7 MB | Hero main card, gallery card 1 (Drone glide) |
| V4 | pf-loop-forest.mp4 (start frame A2) | 27.8 MB | 1.5 MB / 1.5 MB | Gallery card 2 (Walk-through) |
| V5 | pf-loop-waterfall.mp4 (start frame A3) | 10.4 MB | 1.5 MB / 1.3 MB | Gallery card 3 (Push-in) |
| V6 | pf-loop-architecture.mp4 (start frame A4) | 6.4 MB | 1.5 MB / 1.3 MB | Gallery card 4 (Time-lapse) |
| V7 | pf-loop-macro.mp4 (start frame A5) | 3.7 MB | 0.9 MB / 0.6 MB | Gallery card 5 (Slow motion) |

Every clip plays muted, only while it's on screen and after the page has loaded, with a Pause button. Nothing
autoplays with "reduce motion" on.

V3 lake (Flow title "Drone gliding over glacial lake")
```text
Smooth cinematic aerial drone shot gliding forward low over the calm turquoise glacial lake toward the
snow-capped peaks at first light. The camera moves steadily forward and rises slightly, the pine forest on both
shores slides past on the sides, soft mist drifts across the water, gentle ripples catch the warm morning light.
Clear, continuous forward motion, one continuous shot, no cuts. Mountains and trees keep their shape. No text,
no people, no animals, no boats, no birds, no lens flares.
```

V4 forest (Flow title "Camera moving through pine forest")
```text
Smooth cinematic dolly shot moving steadily forward between tall old pine trunks as golden sun rays stream
through the trees from the left. The light beams sweep and shift as the camera passes the trunks, mist drifts
through the beams, ferns sway gently on the forest floor, the turquoise lake glimmers ahead. Clear, continuous
forward camera motion, one continuous shot, no cuts. Trees keep their shape. No text, no people, no animals.
```

V5 waterfall (Flow title "Waterfall pouring into turquoise…")
```text
Cinematic slow push-in toward the tall waterfall. Powerful white water pours down the dark mossy rock into the
turquoise pool, thick spray and mist billow up and drift through the low golden morning sunlight, the pool
surface churns and ripples outward. Clear forward camera motion and strong, obvious water movement, one
continuous shot, no cuts. Rocks and the snowy peak keep their shape. No text, no people, no animals, no birds.
```

V6 architecture (Flow title "Shadow moving across concrete st…")
```text
Time-lapse: the late-afternoon sun moves and the sharp diagonal shadow sweeps steadily across the raw concrete
stairway and curved wall, the shadow edge visibly travels up the steps, the warm light deepens to golden, the
slice of blue sky stays clear. Obvious, continuous shadow movement. Locked-off camera, one continuous shot, no
cuts. The stairs and wall keep their shape. No people, no text, no signs, no birds.
```

V7 macro (Flow title "Dew drop falling from fern")
```text
Extreme macro, slow motion: a large dew drop swells at the tip of the green fern frond, slides along the leaf
and falls out of frame, the frond springs up and sways gently, the other droplets sparkle as the golden light
shifts, the soft dark green bokeh shimmers in the background. Clear, obvious motion, one continuous shot, no
cuts. The fern keeps its shape. No text, no insects.
```

What made the difference: each prompt names one clear camera move (drone glide, dolly, push-in, locked-off
time-lapse, macro slow motion) and says "clear, obvious motion". The v1.3.0 prompts asked for a locked-off
camera and gentle movement, which reads as a still picture on a small card.

## V1: hero loop (v1.3.0, replaced by V3 in v1.4.0)
| Field | Value |
|---|---|
| Model | Veo 3.1 Quality, Frames mode, 9:16, 720p, 8 s, 1 output: 100 credits (approved by Loy) |
| Frames | Start and end frame: A1 pf-poster-lake (so the clip can loop) |
| Download | "1080p upscaled" MP4 (1080x1920, 24 fps, 7.85 s, with sound), 3.8 MB |
| Original | `site/assets-src/originals/pf-loop-lake.mp4` |
| Web copies | `site/public/media/pf-loop-lake.mp4` (1.0 MB) and `.webm` (0.7 MB), 720x1280, no sound |
| Loop | The last frame was not identical to the first (SSIM 0.93), so `npm run media` crossfades the last second into the first: 6.83 s, seam SSIM 0.99 |
| Use | Hero main card until v1.4.0. |

Prompt
```text
Locked-off cinematic shot of a calm turquoise glacial lake at first light, matching the frame exactly. The
camera does not move. Snow-capped peaks, pine forest and horizon stay perfectly still and sharp. Gentle ripples
move slowly across the water and soft mist drifts slowly from left to right low over the lake. The morning
light stays constant. One continuous shot, no cuts, no zoom, no camera shake. No text, no people, no animals,
no boats, no birds, no lens flares, no new objects, no sudden light changes.
```

## V2: waterfall loop (v1.3.0, replaced by V5 in v1.4.0)
| Field | Value |
|---|---|
| Model | Veo 3.1 Quality, Frames mode, 9:16, 720p, 8 s, 1 output: 100 credits (approved by Loy) |
| Frames | Start and end frame: A3 pf-poster-waterfall |
| Download | "1080p upscaled" MP4 (1080x1920, 24 fps, 7.85 s, with sound), 6.6 MB |
| Original | `site/assets-src/originals/pf-loop-waterfall.mp4` |
| Web copies | `site/public/media/pf-loop-waterfall.mp4` (2.2 MB) and `.webm` (1.3 MB), 720x1280, no sound |
| Loop | Crossfade loop like V1 (first/last SSIM 0.84 before, seam SSIM 0.99 after) |
| Use | Gallery card 3 until v1.4.0. |

Prompt
```text
Locked-off cinematic shot of a tall waterfall pouring over dark mossy rock into a turquoise pool, matching the
frame exactly. The camera does not move. Rocks, snowy peak and sky stay perfectly still and sharp. Water falls
continuously, fine spray drifts slowly in the low morning sunlight, the pool surface ripples gently. The light
stays constant. One continuous shot, no cuts, no zoom, no camera shake. No text, no people, no animals, no
birds, no new objects, no flicker.
```

## After a new download
1. Put the Flow file in `site/assets-src/originals/` as `pf-loop-<name>.mp4` (it stays out of git).
2. Run `npm run media` in `site/` (needs ffmpeg). It also replaces `pf-poster-<name>.jpg` with the loop's first
   frame. Check the printed loop seam number and watch the loop.
3. Record model, settings, credits, date and sizes in `ASSET-LICENSES.md`.
4. The page must look complete with the posters alone; videos are an extra.
