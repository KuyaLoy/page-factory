import { posterWidths, videos } from './media.generated'
import { media } from './site'

export type PosterKey = 'lake' | 'forest' | 'waterfall' | 'architecture' | 'macro'
/** Every sample has a clip; each poster is the first frame of its clip. */
export type VideoKey = PosterKey

export const posterAlt: Record<PosterKey, string> = {
  lake: 'A calm turquoise glacial lake at first light, snowy peaks and pine forest reflected in the water.',
  forest: 'Morning sun rays streaming through tall pines beside a turquoise lake.',
  waterfall: 'A tall waterfall pouring over mossy rock into a turquoise pool under a snowy peak.',
  architecture: 'A raw concrete stairway and curved wall in hard sunlight with one long diagonal shadow.',
  macro: 'Dew drops on a green fern frond, one drop falling from above.',
}

/** What each clip shows, for screen readers. */
export const clipLabel: Record<VideoKey, string> = {
  lake: 'Sample clip: a drone glides low over a misty turquoise glacial lake toward snowy peaks.',
  forest: 'Sample clip: the camera moves through a pine forest full of sunbeams and comes out at a lake.',
  waterfall: 'Sample clip: a slow push-in toward a tall waterfall pouring into a turquoise pool.',
  architecture: 'Sample clip: a time-lapse of the shadow sweeping across a concrete stairway as the sun sets.',
  macro: 'Sample clip: dew drops fall onto a fern frond and slide along the leaves, in slow motion.',
}

export function posterSources(key: PosterKey) {
  const set = (ext: string) =>
    posterWidths.map((w) => `${media(`media/pf-poster-${key}-${w}.${ext}`)} ${w}w`).join(', ')
  return {
    avif: set('avif'),
    webp: set('webp'),
    jpg: set('jpg'),
    fallback: media(`media/pf-poster-${key}-720.jpg`),
    small: media(`media/pf-poster-${key}-480.jpg`),
  }
}

interface VideoFiles {
  mp4: string
  webm: string
}

export function loopVideo(key: VideoKey): VideoFiles | null {
  const all: Record<string, VideoFiles | undefined> = videos
  const found = all[key]
  return found ? { mp4: media(found.mp4), webm: media(found.webm) } : null
}
