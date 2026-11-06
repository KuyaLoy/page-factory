// Makes the web copies of the originals in assets-src/originals/ and writes
// src/content/media.generated.ts. Run from site/: npm run media
// Posters: pf-poster-<name>.(jpg|png|webp) -> AVIF, WebP and JPG at 480, 720 and 1080 px wide (9:16).
// Videos:  pf-loop-<name>.(mp4|mov|webm)  -> 720x1280 H.264 MP4 and VP9 WebM, no audio.
//          If the clip ends on the picture it starts with, the last frame is dropped (hard loop).
//          Otherwise the last second is crossfaded into the first second (crossfade loop).
//          Needs ffmpeg and ffprobe on PATH; videos are skipped with a note when they are missing.
// Outputs newer than their original are kept, so re-runs only redo what changed.
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises'
import { execFileSync, spawnSync } from 'node:child_process'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const SRC = 'assets-src/originals'
const OUT = 'public/media'
const MANIFEST = 'src/content/media.generated.ts'
const WIDTHS = [480, 720, 1080]
const CROSSFADE_SECONDS = 1
const heightFor = (w) => Math.round((w * 16) / 9)
const kb = (n) => `${Math.round(n / 1024)} KB`

const mtime = async (path) => {
  try {
    return (await stat(path)).mtimeMs
  } catch {
    return 0
  }
}

const files = (await readdir(SRC)).sort()
await mkdir(OUT, { recursive: true })

const posters = {}
for (const file of files) {
  const { name, ext } = parse(file)
  const match = /^pf-poster-([a-z0-9-]+)$/.exec(name)
  if (!match || !['.jpg', '.jpeg', '.png', '.webp'].includes(ext.toLowerCase())) continue
  const src = join(SRC, file)
  const srcTime = await mtime(src)
  const sizes = []
  for (const w of WIDTHS) {
    const h = heightFor(w)
    const jobs = [
      [`${name}-${w}.avif`, (p) => p.avif({ quality: 52, effort: 6 })],
      [`${name}-${w}.webp`, (p) => p.webp({ quality: 74, effort: 6 })],
      [`${name}-${w}.jpg`, (p) => p.jpeg({ quality: 80, mozjpeg: true, progressive: true })],
    ]
    for (const [outName, encode] of jobs) {
      const out = join(OUT, outName)
      if ((await mtime(out)) <= srcTime) {
        await encode(sharp(src).resize(w, h, { fit: 'cover', position: 'centre' })).toFile(out)
      }
      sizes.push(`${outName} ${kb((await stat(out)).size)}`)
    }
  }
  posters[match[1]] = true
  console.log(`poster ${match[1]}: ${sizes.join(', ')}`)
}

const hasFfmpeg = ['ffmpeg', 'ffprobe'].every((bin) => spawnSync(bin, ['-version']).status === 0)

const ssimOf = (fileA, frameA, fileB, frameB) => {
  const run = spawnSync('ffmpeg', ['-v', 'info', '-i', fileA, '-i', fileB, '-filter_complex',
    `[0:v]select=eq(n\\,${frameA}),scale=360:-2[a];[1:v]select=eq(n\\,${frameB}),scale=360:-2[b];[a][b]ssim`,
    '-frames:v', '1', '-f', 'null', '-'], { encoding: 'utf8' })
  const m = /All:([0-9.]+)/.exec(`${run.stdout}${run.stderr}`)
  return m ? Number(m[1]) : 0
}

const countFrames = (file) => Number(execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-count_frames',
  '-show_entries', 'stream=nb_read_frames', '-of', 'csv=p=0', file]).toString().trim())

const videos = {}
for (const file of files) {
  const { name, ext } = parse(file)
  const match = /^pf-loop-([a-z0-9-]+)$/.exec(name)
  if (!match || !['.mp4', '.mov', '.webm'].includes(ext.toLowerCase())) continue
  if (!hasFfmpeg) {
    console.log(`video ${name}: skipped, ffmpeg or ffprobe not found`)
    continue
  }
  const key = match[1]
  const src = join(SRC, file)
  const rate = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=r_frame_rate',
    '-of', 'csv=p=0', src]).toString().trim()
  const [num, den] = rate.split('/').map(Number)
  const fps = num / (den || 1)
  const frames = countFrames(src)
  const endSsim = ssimOf(src, 0, src, frames - 1)
  const scale = 'scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1'
  let mode
  let graph
  if (endSsim > 0.97) {
    mode = 'hard loop (last frame dropped)'
    graph = `[0:v]trim=end_frame=${frames - 1},setpts=PTS-STARTPTS,${scale}[v]`
  } else {
    const fade = Math.round(CROSSFADE_SECONDS * fps)
    const loopFrames = frames - fade
    mode = `crossfade loop (${CROSSFADE_SECONDS} s)`
    graph = [
      '[0:v]split=3[s0][s1][s2]',
      `[s0]trim=start_frame=0:end_frame=${fade},setpts=PTS-STARTPTS[head]`,
      `[s1]trim=start_frame=${loopFrames}:end_frame=${frames},setpts=PTS-STARTPTS[tail]`,
      `[s2]trim=start_frame=${fade}:end_frame=${loopFrames},setpts=PTS-STARTPTS[mid]`,
      `[tail][head]xfade=transition=fade:duration=${CROSSFADE_SECONDS}:offset=0[xf]`,
      `[xf][mid]concat=n=2:v=1:a=0,${scale}[v]`,
    ].join(';')
  }
  const mp4 = join(OUT, `${name}.mp4`)
  const webm = join(OUT, `${name}.webm`)
  const srcTime = await mtime(src)
  if ((await mtime(mp4)) <= srcTime) {
    execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', src, '-filter_complex', graph, '-map', '[v]', '-an',
      '-c:v', 'libx264', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-crf', '22', '-preset', 'slow',
      '-movflags', '+faststart', mp4])
  }
  if ((await mtime(webm)) <= srcTime) {
    execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', src, '-filter_complex', graph, '-map', '[v]', '-an',
      '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '33', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '2', webm])
  }
  const outFrames = countFrames(mp4)
  const seamSsim = ssimOf(mp4, outFrames - 1, mp4, 0)
  const neighbourSsim = ssimOf(mp4, 40, mp4, 41)
  videos[key] = {
    mp4: `media/${name}.mp4`,
    webm: `media/${name}.webm`,
    width: 720,
    height: 1280,
    seconds: Number((outFrames / fps).toFixed(2)),
    mp4Bytes: (await stat(mp4)).size,
    webmBytes: (await stat(webm)).size,
  }
  console.log(`video ${key}: ${frames} frames in, ${outFrames} out, ${mode}; first/last frame of the original SSIM ` +
    `${endSsim.toFixed(3)}; loop seam SSIM ${seamSsim.toFixed(3)} (two neighbouring frames: ${neighbourSsim.toFixed(3)}); ` +
    `mp4 ${kb(videos[key].mp4Bytes)}, webm ${kb(videos[key].webmBytes)}`)
}

const manifest = `// Written by scripts/optimize-media.mjs. Do not edit by hand: run "npm run media".
export const posterWidths = ${JSON.stringify(WIDTHS)} as const

export const posters = ${JSON.stringify(posters, null, 2)} as const

export const videos = ${JSON.stringify(videos, null, 2)} as const
`
await writeFile(MANIFEST, manifest)
console.log(`wrote ${MANIFEST}`)
