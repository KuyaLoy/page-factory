import { posterWidths, videos } from './media.generated'
import { media } from './site'

export type PosterKey = 'lake' | 'forest' | 'waterfall' | 'architecture' | 'macro'
export type VideoKey = 'lake' | 'waterfall'

export const posterAlt: Record<PosterKey, string> = {
  lake: 'A calm turquoise glacial lake at first light, snowy peaks and pine forest reflected in the water.',
  forest: 'Morning sun rays streaming through tall pines beside a turquoise lake.',
  waterfall: 'A tall waterfall pouring over mossy rock into a turquoise pool under a snowy peak.',
  architecture: 'A raw concrete stairway and curved wall in hard sunlight with one long diagonal shadow.',
  macro: 'Dew drops on a green fern frond catching tiny points of golden morning light.',
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
