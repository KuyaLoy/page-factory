// Pieces shared by the pinned scene (WorkflowPinned) and the stacked version (WorkflowScene).
import { promptLines, scriptWords, shots, steps } from '../content/workflow'
import { Picture } from './Picture'
import { Waveform } from './Waveform'

export const NAV_HEIGHT = 64

export function PromptWindow({ className = '' }: { className?: string }) {
  return (
    <div className={`panel overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-white/20" />
        <span className="ml-2 font-mono text-[0.6875rem] text-mute">prompts/new-video.md</span>
      </div>
      <pre className="overflow-hidden whitespace-pre-wrap px-3 py-2.5 font-mono text-[0.625rem] leading-[1.55] text-ivory/85 xl:text-[0.6875rem]">
        {promptLines.join('\n')}
      </pre>
    </div>
  )
}

export function TrackLabel({ children }: { children: string }) {
  return <span className="w-12 shrink-0 font-mono text-[0.625rem] uppercase tracking-wider text-mute">{children}</span>
}

export function ScriptTrack({ lit = 0, className = '' }: { lit?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <TrackLabel>Script</TrackLabel>
      <div className="flex min-w-0 flex-1 gap-1 overflow-hidden rounded-md bg-ink-3 p-1.5">
        {scriptWords.map((word, i) => (
          <span
            key={word + i}
            data-word
            className={`shrink-0 rounded px-1.5 py-1 font-mono text-[0.625rem] leading-none ${
              i < lit ? 'bg-lime text-ink' : 'bg-white/[0.06] text-mute'
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}

export function VoiceTrack({ played = 0, className = '' }: { played?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <TrackLabel>Voice</TrackLabel>
      <div className="h-full min-h-8 min-w-0 flex-1 rounded-md bg-ink-3 px-1.5 py-1">
        <Waveform played={played} />
      </div>
    </div>
  )
}

export function ShotsTrack({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <TrackLabel>Shots</TrackLabel>
      <div className="flex h-full min-h-12 min-w-0 flex-1 gap-1 rounded-md bg-ink-3 p-1">
        {shots.map((shot) => (
          <div key={shot.name} className="min-w-0 overflow-hidden rounded-[5px]" style={{ flexGrow: shot.grow, flexBasis: 0 }}>
            <Picture
              name={shot.name}
              alt=""
              sizes="140px"
              imgClassName="block h-full w-full object-cover object-center"
              className="block h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Ruler({ className = '' }: { className?: string }) {
  return (
    <div className={`flex justify-between pl-14 font-mono text-[0.625rem] tabular-nums text-mute ${className}`}>
      <span>00:00</span>
      <span>00:15</span>
      <span>00:30</span>
      <span>00:45</span>
    </div>
  )
}

export function PreviewCard({ filled, className = '' }: { filled: boolean; className?: string }) {
  return (
    <div className={`relative aspect-[9/16] ${className}`}>
      <div className="absolute inset-0 rounded-[0.9rem] border border-dashed border-white/15" />
      <div data-preview-fill className={`card-frame absolute inset-0 ${filled ? '' : 'opacity-0'}`}>
        <Picture name="lake" alt="" sizes="(min-width: 1024px) 180px, 40vw" />
        <p className="absolute inset-x-2 top-[62%] text-center text-[0.8rem] font-bold leading-[1.35] tracking-tight xl:text-sm">
          <span className="caption-chip">That blue isn&apos;t</span>
          <br />
          <span className="caption-chip">
            the <span className="text-lime">sky.</span>
          </span>
        </p>
        <div className="absolute inset-x-2 bottom-2 h-0.5 overflow-hidden rounded bg-white/20">
          <div className="h-full w-full bg-lime" />
        </div>
      </div>
      <span className="eyebrow absolute -bottom-6 left-0 text-[0.625rem] text-mute">final.mp4 · 9:16</span>
    </div>
  )
}

export function StepList({ active, pinned }: { active: number; pinned: boolean }) {
  return (
    <ol className="mt-8 flex flex-col gap-5">
      {steps.map((step, i) => {
        const on = !pinned || i === active
        return (
          <li key={step.title} className="flex gap-4">
            <span
              className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full font-mono text-xs transition-colors duration-300 ${
                pinned && i === active ? 'bg-lime text-ink' : 'bg-ink-3 text-ivory ring-1 ring-line'
              }`}
            >
              {i + 1}
            </span>
            <div>
              <h3 className={`font-semibold tracking-tight transition-colors duration-300 ${on ? 'text-ivory' : 'text-mute'}`}>
                {step.title}
              </h3>
              <p className={`mt-1 text-sm leading-relaxed transition-colors duration-300 ${on ? 'text-ivory/80' : 'text-mute'}`}>
                {step.text}
              </p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export function Intro() {
  return (
    <>
      <p className="eyebrow text-mute">How a video gets made</p>
      <h2 id="how-title" className="display mt-4 text-[clamp(2.4rem,4.6vw,4rem)]">
        From one prompt to a finished 9:16 video.
      </h2>
    </>
  )
}

export const illustrationNote = 'Illustration of the work done in your Claude chats. Pictures are samples.'
