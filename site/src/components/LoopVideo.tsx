import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { loopVideo, type PosterKey, type VideoKey } from '../content/media'
import { REDUCED_MOTION_QUERY, useMediaQuery } from '../lib/useMediaQuery'
import { Picture } from './Picture'

interface LoopVideoProps {
  video: VideoKey
  poster: PosterKey
  /** What the clip shows, for screen readers. */
  label: string
  /** Picture sizes attribute for the poster underneath. */
  sizes: string
  /** Plays on its own (muted) after the page has loaded and while on screen. Never under reduced motion. */
  autoPlay?: boolean
  /** Load the poster early (above the fold). */
  priority?: boolean
  /** Called on every frame while playing, with progress from 0 to 1. Keep it stable (useCallback). */
  onProgress?: (progress: number) => void
  className?: string
  buttonClassName?: string
}

/**
 * A muted loop with a visible Pause/Play button. The poster picture sits underneath and the
 * video paints over it once it plays, so the page looks complete without the video.
 */
export function LoopVideo({
  video,
  poster,
  label,
  sizes,
  autoPlay = false,
  priority = false,
  onProgress,
  className = '',
  buttonClassName = '',
}: LoopVideoProps) {
  const files = loopVideo(video)
  const reduced = useMediaQuery(REDUCED_MOTION_QUERY)
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const userPaused = useRef(false)
  const onScreen = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.muted = true
    el.defaultMuted = true
    if (!autoPlay || reduced) return

    let ready = false
    const attempt = () => {
      if (ready && onScreen.current && !userPaused.current) el.play().catch(() => undefined)
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen.current = entry.isIntersecting
        if (entry.isIntersecting) attempt()
        else if (!el.paused) el.pause()
      },
      { threshold: 0.2 },
    )
    observer.observe(el)

    // Start after the page has loaded, so the clip never competes with the first paint.
    let timer: number | undefined
    const begin = () => {
      timer = window.setTimeout(() => {
        ready = true
        attempt()
      }, 500)
    }
    if (document.readyState === 'complete') begin()
    else window.addEventListener('load', begin, { once: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('load', begin)
      window.clearTimeout(timer)
    }
  }, [autoPlay, reduced])

  useEffect(() => {
    if (!playing || !onProgress) return
    let frame = 0
    const tick = () => {
      const el = ref.current
      if (el && el.duration) onProgress(el.currentTime / el.duration)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [playing, onProgress])

  function toggle() {
    const el = ref.current
    if (!el) return
    if (el.paused) {
      userPaused.current = false
      el.play().catch(() => undefined)
    } else {
      userPaused.current = true
      el.pause()
    }
  }

  return (
    <div className={`relative ${className}`}>
      <Picture name={poster} sizes={sizes} priority={priority} alt={files ? '' : undefined} />
      {files && (
        <>
          <video
            ref={ref}
            className="absolute inset-0 block h-full w-full object-cover"
            muted
            loop
            playsInline
            preload="none"
            width={720}
            height={1280}
            aria-label={label}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src={files.webm} type="video/webm" />
            <source src={files.mp4} type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? 'Pause video' : 'Play video'}
            className={`absolute z-10 grid size-11 place-items-center rounded-full bg-ink/70 text-ivory ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-ink/85 ${buttonClassName}`}
          >
            {playing ? (
              <Pause aria-hidden="true" className="size-4" fill="currentColor" strokeWidth={0} />
            ) : (
              <Play aria-hidden="true" className="ml-0.5 size-4" fill="currentColor" strokeWidth={0} />
            )}
          </button>
        </>
      )}
    </div>
  )
}
