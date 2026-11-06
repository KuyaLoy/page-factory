import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { PosterKey, VideoKey } from '../content/media'
import { REDUCED_MOTION_QUERY, useMediaQuery } from '../lib/useMediaQuery'
import { LoopVideo } from './LoopVideo'
import { Picture } from './Picture'

interface Sample {
  poster: PosterKey
  video?: VideoKey
  style: string
  caption: [string, string]
}

/** Sample frames with the kind of word captions the kit puts on videos. Illustrative only. */
const samples: Sample[] = [
  { poster: 'lake', style: 'Calm nature', caption: ["That blue isn't", 'the sky.'] },
  { poster: 'forest', style: 'Light', caption: ['Why sunbeams', 'show up in mist.'] },
  { poster: 'waterfall', video: 'waterfall', style: 'Motion', caption: ['Where the mist', 'comes from.'] },
  { poster: 'architecture', style: 'Texture', caption: ['Wood grain,', 'cast in concrete.'] },
  { poster: 'macro', style: 'Detail', caption: ['Dew forms on', 'clear, calm nights.'] },
]

export function Gallery() {
  const list = useRef<HTMLUListElement>(null)
  const reduce = useMediaQuery(REDUCED_MOTION_QUERY)
  const [edges, setEdges] = useState({ start: true, end: false })

  const update = useCallback(() => {
    const el = list.current
    if (!el) return
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 })
  }, [])

  useEffect(() => {
    const el = list.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  function step(direction: 1 | -1) {
    const el = list.current
    const card = el?.querySelector('li')
    if (!el || !card) return
    const gap = parseFloat(getComputedStyle(el).columnGap || '16') || 16
    el.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section id="samples" aria-labelledby="samples-title" className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1240px] px-4 pt-20 sm:px-6 lg:pt-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-mute">Samples, for illustration</p>
            <h2 id="samples-title" className="display mt-4 text-[clamp(2.4rem,5vw,4.25rem)]">
              What a 9:16 frame can look like.
            </h2>
            <p className="mt-5 leading-relaxed text-mute">
              Vertical frames with word captions, the format the kit makes. These pictures and the clip were made with
              Google Flow for this site. They are not output of the kit, and your page gets its own look.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full ring-1 ring-line transition-colors hover:ring-mute disabled:opacity-35"
              onClick={() => step(-1)}
              disabled={edges.start}
              aria-label="Previous samples"
              aria-controls="sample-list"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full ring-1 ring-line transition-colors hover:ring-mute disabled:opacity-35"
              onClick={() => step(1)}
              disabled={edges.end}
              aria-label="Next samples"
              aria-controls="sample-list"
            >
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>
      </div>
      <ul
        id="sample-list"
        ref={list}
        aria-label="Sample frames"
        tabIndex={0}
        className="bleed-x scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-20 lg:pb-28"
      >
        {samples.map((sample, i) => (
          <li key={sample.poster} className="w-[72vw] max-w-[19rem] shrink-0 snap-start sm:w-[17rem]">
            <figure>
              <div className="card-frame relative aspect-[9/16]">
                {sample.video ? (
                  <LoopVideo
                    video={sample.video}
                    poster={sample.poster}
                    label="Sample clip: a waterfall pouring into a turquoise pool."
                    sizes="(min-width: 640px) 272px, 72vw"
                    className="h-full w-full"
                    buttonClassName="right-3 top-3"
                  />
                ) : (
                  <Picture name={sample.poster} sizes="(min-width: 640px) 272px, 72vw" />
                )}
                <p
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-3 top-[62%] text-center text-[1.15rem] font-bold leading-[1.35] tracking-tight"
                >
                  <span className="caption-chip">{sample.caption[0]}</span>
                  <br />
                  <span className="caption-chip">{sample.caption[1]}</span>
                </p>
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-3 text-sm">
                <span className="font-medium">{sample.style}</span>
                <span className="font-mono text-xs text-mute">
                  {i + 1} / {samples.length}
                  {sample.video ? ' · clip' : ''}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
