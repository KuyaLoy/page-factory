import { lazy, Suspense } from 'react'
import { PINNED_SCENE_QUERY, useMediaQuery } from '../lib/useMediaQuery'
import { steps } from '../content/workflow'
import { Intro, NAV_HEIGHT, PreviewCard, PromptWindow, Ruler, ScriptTrack, ShotsTrack, VoiceTrack, illustrationNote } from './WorkflowParts'

const PinnedScene = lazy(() => import('./WorkflowPinned'))

/* ---------- Stacked version (phones, tablets, touch, reduced motion) ---------- */

function StackedScene() {
  const figures = [
    <PromptWindow key="1" />,
    <div key="2" className="flex flex-col gap-2">
      <ScriptTrack lit={0} className="h-9" />
      <VoiceTrack className="h-9" />
      <ShotsTrack className="h-14" />
    </div>,
    <div key="3" className="relative flex flex-col gap-2">
      <Ruler />
      <ScriptTrack lit={6} className="h-9" />
      <VoiceTrack played={0.6} className="h-9" />
      <ShotsTrack className="h-14" />
      <span aria-hidden="true" className="absolute bottom-0 top-5 w-0.5 rounded bg-lime" style={{ left: 'calc(3.5rem + (100% - 3.5rem) * 0.6)' }} />
    </div>,
    <div key="4" className="flex justify-center pb-6">
      <PreviewCard filled className="w-40" />
    </div>,
  ]
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-20 sm:px-6 lg:py-28">
      <div className="max-w-2xl">
        <Intro />
      </div>
      <ol className="mt-10 grid gap-4 md:grid-cols-2">
        {steps.map((step, i) => (
          <li key={step.title} className="flex min-w-0 flex-col gap-5 rounded-2xl bg-ink-2 p-5 ring-1 ring-white/[0.07] sm:p-6">
            <div className="flex gap-4">
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-lime font-mono text-xs text-ink">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ivory/80">{step.text}</p>
              </div>
            </div>
            <div aria-hidden="true">{figures[i]}</div>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-xs text-mute">{illustrationNote}</p>
    </div>
  )
}

export function WorkflowScene() {
  const pinned = useMediaQuery(PINNED_SCENE_QUERY)
  return (
    <section id="how" aria-labelledby="how-title" className="relative border-t border-white/[0.06]">
      {pinned ? (
        <Suspense fallback={<div style={{ height: `calc(100vh - ${NAV_HEIGHT}px)` }} />}>
          <PinnedScene />
        </Suspense>
      ) : (
        <StackedScene />
      )}
    </section>
  )
}
