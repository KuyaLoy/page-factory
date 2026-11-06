import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'motion/react'
import { useCallback, useRef, type PointerEvent } from 'react'
import { FINE_POINTER_QUERY, useMediaQuery } from '../lib/useMediaQuery'
import { LoopVideo } from './LoopVideo'
import { Picture } from './Picture'
import { WAVE_WIDTH, Waveform } from './Waveform'

const CLIP_SECONDS = 7

/** Moves a layer with the pointer. Depth is in pixels at the edge of the box. */
function useDepth(x: MotionValue<number>, y: MotionValue<number>, depth: number) {
  return {
    x: useTransform(x, (v) => v * depth),
    y: useTransform(y, (v) => v * depth * 0.7),
  }
}

export function HeroStudio() {
  const fine = useMediaQuery(FINE_POINTER_QUERY)
  const box = useRef<HTMLDivElement>(null)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const x = useSpring(pointerX, { stiffness: 110, damping: 18, mass: 0.6 })
  const y = useSpring(pointerY, { stiffness: 110, damping: 18, mass: 0.6 })
  const back = useDepth(x, y, -10)
  const middle = useDepth(x, y, -16)
  const front = useDepth(x, y, 12)
  const script = useDepth(x, y, 22)
  const wave = useDepth(x, y, 18)

  const played = useRef<SVGRectElement>(null)
  const clock = useRef<HTMLSpanElement>(null)
  const onProgress = useCallback((progress: number) => {
    played.current?.setAttribute('width', String(progress * WAVE_WIDTH))
    if (clock.current) {
      const seconds = Math.floor(progress * CLIP_SECONDS)
      clock.current.textContent = `00:0${seconds}`
    }
  }, [])

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!fine || !box.current) return
    const rect = box.current.getBoundingClientRect()
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2)
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2)
  }

  function onPointerLeave() {
    pointerX.set(0)
    pointerY.set(0)
  }

  const still = !fine

  return (
    <figure className="relative mx-auto w-full max-w-[34rem]">
      <div
        ref={box}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="relative aspect-[4/5] w-full select-none"
      >
        <motion.div style={still ? undefined : back} className="absolute left-[1%] top-[10%] w-[39%]">
          <div className="card-frame aspect-[9/16] -rotate-[8deg] opacity-80">
            <Picture name="forest" alt="" sizes="(min-width: 1024px) 210px, 36vw" />
          </div>
        </motion.div>
        <motion.div style={still ? undefined : middle} className="absolute left-[19%] top-[2%] w-[39%]">
          <div className="card-frame aspect-[9/16] rotate-[5deg] opacity-90">
            <Picture name="waterfall" alt="" sizes="(min-width: 1024px) 210px, 36vw" />
          </div>
        </motion.div>

        <motion.div style={still ? undefined : front} className="absolute right-0 top-0 w-[55%]">
          <div className="card-frame relative aspect-[9/16]">
            <LoopVideo
              video="lake"
              poster="lake"
              label="Sample clip: mist drifting over a turquoise glacial lake below snowy peaks."
              sizes="(min-width: 1024px) 300px, 52vw"
              autoPlay
              priority
              onProgress={onProgress}
              className="h-full w-full"
              buttonClassName="bottom-3 right-3"
            />
            <span className="eyebrow pointer-events-none absolute left-3 top-3 rounded-full bg-ink/70 px-2 py-1 text-[0.625rem] text-ivory backdrop-blur">
              Sample
            </span>
            <p
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-3 top-[63%] text-center text-[clamp(0.95rem,2.6vw,1.35rem)] font-bold leading-[1.35] tracking-tight"
            >
              <span className="caption-chip">That blue isn&apos;t</span>
              <br />
              <span className="caption-chip">
                the <span className="text-lime">sky.</span>
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div style={still ? undefined : script} className="absolute bottom-[14%] left-0 w-[64%]">
          <div className="panel p-3 sm:p-4" aria-hidden="true">
            <div className="flex items-center justify-between font-mono text-[0.625rem] text-mute sm:text-[0.6875rem]">
              <span>script.md</span>
              <span>3 beats</span>
            </div>
            <dl className="mt-2.5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 font-mono text-[0.625rem] leading-snug sm:text-xs">
              <dt className="text-lime">HOOK</dt>
              <dd className="text-ivory">That blue isn&apos;t the sky.</dd>
              <dt className="text-mute">WHY</dt>
              <dd className="text-ivory/85">Glaciers grind rock into a fine flour.</dd>
              <dt className="text-mute">PAYOFF</dt>
              <dd className="text-ivory/85">The flour scatters sunlight, so the water glows.</dd>
            </dl>
          </div>
        </motion.div>

        <motion.div style={still ? undefined : wave} className="absolute bottom-0 right-0 w-[76%]">
          <div className="panel flex items-center gap-3 px-3 py-2.5" aria-hidden="true">
            <span className="font-mono text-[0.625rem] text-mute sm:text-[0.6875rem]">voice</span>
            <div className="h-9 flex-1">
              <Waveform ref={played} />
            </div>
            <span ref={clock} className="w-9 text-right font-mono text-[0.625rem] tabular-nums text-ivory sm:text-[0.6875rem]">
              00:00
            </span>
          </div>
        </motion.div>
      </div>
      <figcaption className="mt-5 text-center text-xs text-mute">
        Illustration. Sample picture and clip made with Google Flow for this site, not by the kit.
      </figcaption>
    </figure>
  )
}
