# Asset requests: Project Factory site (Kinetic Studio)

Status: done 2026-11-06. Made in Google Flow (Nano Banana Pro, 9:16, 2 takes each, 0 credits) in Loy's
signed-in Chrome, picked by eye, downloaded as "2K upscaled" JPGs (1536x2752). Originals are in
`site/assets-src/originals/`; web copies come from `npm run media` in `site/`. Provenance: `ASSET-LICENSES.md`.

Rules every asset followed
- Artwork only. No text, logos, UI, buttons, play icons, waveforms, timeline bars or watermarks. The site draws
  all of that in HTML and SVG on top.
- No people's faces, no real brands, no famous identifiable buildings or landmarks.
- One consistent world for the three nature shots: the same alpine valley, early-morning light (low sun from
  the left, cool shadows, warm highlights), natural color grade. In Flow, the lake picture was added as a
  reference image for the forest and waterfall prompts.
- The pictures are illustrative samples on the website. They are not presented as output of the kit.

## The prompts used in Flow (Nano Banana Pro, 9:16)

A1 pf-poster-lake (picked take: "Glacial lake reflects mountain peaks")
```text
Vertical 9:16 photograph. A calm glacial lake with milky turquoise water at first light in a high alpine valley,
snow-capped jagged peaks behind, dark pine forest along both shores, soft mist drifting low over the water,
mirror-like reflections. Early morning, low sun from the left, cool blue shadows, warm golden highlights,
natural cinematic color, gentle contrast. Camera at lake level, centered composition, the lake surface filling
the lower half of the frame. Keep the top 15% simple sky, keep the band between 55% and 80% of the height calm
and low in detail, keep the exact center uncluttered. No text, no letters, no logos, no watermarks, no people,
no boats, no buildings.
```

A2 pf-poster-forest (reference image: A1)
```text
Vertical 9:16 photograph in the same alpine valley, on the same early morning, with the same light and color
grade as the reference image. Tall old pine forest at the edge of the turquoise lake, low sun rays streaming
through the trees from the left, soft volumetric light and light mist, moss and ferns on the forest floor, a
glimpse of turquoise water at the bottom right. Strong vertical tree trunks, cool blue shadows, warm golden
highlights, natural cinematic color, gentle contrast. Keep the center and the lower third calm. No text, no
letters, no logos, no watermarks, no people, no animals.
```

A3 pf-poster-waterfall (reference image: A1)
```text
Vertical 9:16 photograph in the same alpine valley, on the same early morning, with the same light and color
grade as the reference image. A tall waterfall falling over dark mossy rock into a turquoise pool, a snowy peak
visible at the top, fine spray catching the low morning sun from the left, light mist. Water centered
vertically, dark rocks framing both sides, calm simple sky in the top 10%. Cool blue shadows, warm golden
highlights, natural cinematic color, gentle contrast. No text, no letters, no logos, no watermarks, no people,
no animals, no buildings.
```

A4 pf-poster-architecture
```text
Vertical 9:16 photograph. A minimal raw-concrete stairway rising beside a curved concrete wall in hard
late-afternoon sun, one strong diagonal shadow cutting across the steps, a small slice of deep blue sky at the
top of the frame. Warm grey board-formed concrete, crisp shadow edges, quiet and geometric, natural color,
gentle contrast. An anonymous modern structure, not a famous or recognizable building. No people, no signs, no
text, no letters, no logos, no watermarks.
```

A5 pf-poster-macro
```text
Vertical 9:16 macro photograph. Extreme close-up of morning dew drops on a fresh green fern frond, the drops
catching tiny points of warm golden light, a soft dark green background with gentle round bokeh, shallow depth
of field, the sharpest drops a little above the center of the frame. Natural color, gentle contrast, calm and
clean. No text, no letters, no logos, no watermarks, no insects.
```

## Asset details

| ID | File | Use and placement | Decorative? | Alt text |
|---|---|---|---|---|
| A1 | pf-poster-lake.jpg | Hero main card (under the lake clip), final 9:16 preview in the workflow scene, timeline thumbnail, gallery card 1, social image. Start and end frame of video V1. | No | A calm turquoise glacial lake at first light, snowy peaks and pine forest reflected in the water. |
| A2 | pf-poster-forest.jpg | Hero tilted card (back), timeline thumbnail, gallery card 2. | Yes in the hero, no in the gallery | Morning sun rays streaming through tall pines beside a turquoise lake. |
| A3 | pf-poster-waterfall.jpg | Hero tilted card (middle), timeline thumbnail, gallery card 3 (under clip V2). Start and end frame of V2. | Same as A2 | A tall waterfall pouring over mossy rock into a turquoise pool under a snowy peak. |
| A4 | pf-poster-architecture.jpg | Gallery card 4. | No | A raw concrete stairway and curved wall in hard sunlight with one long diagonal shadow. |
| A5 | pf-poster-macro.jpg | Gallery card 5, timeline thumbnail. | No | Dew drops on a green fern frond catching tiny points of golden morning light. |

Crop-safe notes (still true for replacements)
- Timeline thumbnails crop each 9:16 poster to a wide strip around the middle (about 40% to 60% of the height).
- Hero cards are tilted and overlapped; keep the subject in the center 70%.
- Captions sit between 55% and 80% of the height.
- The web copies are cropped to exactly 9:16 (the 2K originals are 1536x2752, a little taller).

## If you ever regenerate the set with ChatGPT or Codex instead
Paste this, then put the files in `site/assets-src/originals/` with the same names and run `npm run media`.

```text
Please generate 5 separate images for the Project Factory website. Generate each image separately and return
each as its own downloadable file with the exact filename I give. Artwork only: no text, no letters, no logos,
no UI elements, no play buttons, no waveforms, no watermarks, no people's faces, no real brands, no famous
landmarks. All five are vertical 9:16 at 1080x1920 pixels, opaque background.

Images 1, 2 and 3 are one consistent set: the same alpine valley, shot on the same early morning, low sun from
the left, cool blue shadows, warm golden highlights, light mist, natural cinematic color.

1) pf-poster-lake.png: a calm glacial lake with milky turquoise water at first light, snow-capped jagged peaks
behind, dark pine forest along both shores, soft mist low over the water, mirror-like reflections. Camera at
lake level, centered, the lake filling the lower half. Keep the top 15% simple sky, the band between 55% and 80%
of the height calm, and the exact center uncluttered.
2) pf-poster-forest.png: tall old pine forest at the edge of the same lake, sun rays through the trees from the
left, moss and ferns, a glimpse of turquoise water at the bottom right. Keep the center and lower third calm.
3) pf-poster-waterfall.png: a tall waterfall over dark mossy rock into a turquoise pool in the same valley, a
snowy peak at the top, spray catching the low sun. Water centered, rocks framing both sides, calm sky on top.
4) pf-poster-architecture.png: a minimal raw-concrete stairway and curved wall in hard late-afternoon sun, one
strong diagonal shadow, a small slice of deep blue sky. Not a famous building. No people, signs or text.
5) pf-poster-macro.png: extreme macro of dew drops on a green fern frond catching tiny points of golden light,
soft dark green bokeh, shallow depth of field, sharpest drops a little above the center.
```
