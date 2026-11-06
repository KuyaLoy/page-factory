// The pinned, scroll-driven scene. Loaded only on wide screens with a mouse and motion allowed,
// so phones never download GSAP.
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useState } from 'react'
import { Intro, NAV_HEIGHT, PreviewCard, PromptWindow, Ruler, ScriptTrack, ShotsTrack, StepList, TrackLabel, illustrationNote } from './WorkflowParts'
import { WAVE_WIDTH, Waveform } from './Waveform'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/* ---------- Pinned, scroll-driven version (wide screens, mouse, motion allowed) ---------- */

export default function PinnedScene() {
  const root = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)

  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const stage = q('[data-stage]')[0] as HTMLElement
      const lane = q('[data-lane]')[0] as HTMLElement
      const clock = q('[data-clock]')[0] as HTMLElement
      const words = q('[data-word]')
      const tracks = q('[data-track]')
      const laneWidth = () => lane.getBoundingClientRect().width - 56

      const tl = gsap.timeline({ defaults: { ease: 'none' } })

      // 0 to 25%: the prompt panel opens in perspective.
      tl.fromTo(
        q('[data-prompt]'),
        { rotateX: 62, y: 70, scale: 0.84, opacity: 0.4, transformPerspective: 1100, transformOrigin: '50% 100%' },
        { rotateX: 0, y: 0, scale: 1, opacity: 1, duration: 0.25, ease: 'power2.out' },
        0,
      )

      // 25 to 60%: script, voice and shots split out of it into tracks.
      tl.to(q('[data-prompt]'), { y: -24, scale: 0.6, opacity: 0, transformOrigin: '0% 0%', duration: 0.17 }, 0.25)
      tl.fromTo(q('[data-ruler]'), { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0.33)
      tl.fromTo(
        tracks,
        { opacity: 0, y: (i: number) => -60 - i * 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.22, stagger: 0.05, ease: 'power2.out' },
        0.3,
      )

      // 60 to 85%: the playhead crosses the timeline; words light up as it passes.
      tl.fromTo(q('[data-playhead]'), { opacity: 0, x: 0 }, { opacity: 1, duration: 0.02 }, 0.6)
      tl.fromTo(q('[data-playhead]'), { x: 0 }, { x: laneWidth, duration: 0.25 }, 0.6)
      tl.fromTo(
        q('[data-played-wave] clipPath rect'),
        { attr: { width: 0 } },
        { attr: { width: WAVE_WIDTH }, duration: 0.25 },
        0.6,
      )
      words.forEach((word, i) => {
        tl.to(word, { backgroundColor: '#D5FF35', color: '#101211', duration: 0.01 }, 0.6 + (0.24 * (i + 0.5)) / words.length)
      })

      // 85 to 100%: the layers regroup into a vertical preview.
      tl.to(
        [...tracks, ...q('[data-ruler]'), ...q('[data-playhead]')],
        { x: () => stage.getBoundingClientRect().width * 0.2, scale: 0.55, opacity: 0, duration: 0.12, stagger: 0.015 },
        0.85,
      )
      tl.fromTo(
        q('[data-preview-fill]'),
        { opacity: 0, scale: 0.86 },
        { opacity: 1, scale: 1, duration: 0.12, ease: 'power2.out' },
        0.87,
      )
      // The finished frame moves to the middle of the stage and grows a little.
      tl.to(
        q('[data-preview]'),
        {
          x: () => -stage.getBoundingClientRect().width * 0.33,
          y: () => stage.getBoundingClientRect().width * 0.025,
          scale: 1.25,
          duration: 0.12,
          ease: 'power2.inOut',
        },
        0.87,
      )
      tl.to({}, { duration: 0.01 }, 0.99)

      // Web fonts change text heights above this scene, so measure again once they are in.
      document.fonts?.ready.then(() => ScrollTrigger.refresh())

      ScrollTrigger.create({
        trigger: root.current,
        start: `top top+=${NAV_HEIGHT}`,
        end: '+=150%',
        pin: true,
        scrub: 0.5,
        animation: tl,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress
          const index = p < 0.25 ? 0 : p < 0.6 ? 1 : p < 0.85 ? 2 : 3
          if (index !== activeRef.current) {
            activeRef.current = index
            setActive(index)
          }
          const seconds = Math.round(Math.min(Math.max((p - 0.6) / 0.25, 0), 1) * 45)
          clock.textContent = `00:${String(seconds).padStart(2, '0')} / 00:45`
        },
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} className="flex items-center" style={{ height: `calc(100vh - ${NAV_HEIGHT}px)` }}>
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[0.85fr_1.15fr] items-center gap-12 px-6">
        <div>
          <Intro />
          <StepList active={active} pinned />
          <p className="mt-8 text-xs text-mute">{illustrationNote}</p>
        </div>
        <div data-stage className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-white/[0.07]">
          <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5 font-mono text-[0.6875rem] text-mute">
            <span>studio / EP draft</span>
            <span data-clock className="tabular-nums text-ivory">
              00:00 / 00:45
            </span>
          </div>
          <div data-prompt className="absolute left-[5%] top-[14%] w-[60%]">
            <PromptWindow />
          </div>
          <div data-lane className="absolute bottom-[10%] left-[4%] right-[33%] top-[15%]">
            <div data-ruler className="absolute inset-x-0 top-0">
              <Ruler />
            </div>
            <div data-track className="absolute inset-x-0 top-[12%] h-[20%]">
              <ScriptTrack className="h-full" />
            </div>
            <div data-track className="absolute inset-x-0 top-[37%] h-[20%]">
              <div className="flex h-full items-center gap-2">
                <TrackLabel>Voice</TrackLabel>
                <div data-played-wave className="h-full flex-1 rounded-md bg-ink-3 px-1.5 py-1">
                  <Waveform />
                </div>
              </div>
            </div>
            <div data-track className="absolute inset-x-0 top-[62%] h-[34%]">
              <ShotsTrack className="h-full" />
            </div>
            <div data-playhead className="absolute bottom-0 left-14 top-[8%] w-0.5 rounded bg-lime opacity-0">
              <span className="absolute -left-[5px] -top-1 size-3 rounded-sm bg-lime" />
            </div>
          </div>
          <div data-preview className="absolute right-[5%] top-[15%] w-[24%]">
            <PreviewCard filled={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
