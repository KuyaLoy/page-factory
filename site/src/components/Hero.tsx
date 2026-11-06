import { Download } from 'lucide-react'
import { masterPrompt } from '../content/prompts'
import { counts, version } from '../content/site'
import { downloadText } from '../lib/clipboard'
import { CopyButton } from './CopyButton'
import { HeroStudio } from './HeroStudio'

export function Hero({ onOpenPrompt }: { onOpenPrompt: (id: string) => void }) {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-lines absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_35%,black,transparent_70%)]"
      />
      <div className="mx-auto grid max-w-[1240px] gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:pb-28 lg:pt-20">
        <div>
          <p className="eyebrow text-mute">
            Free kit for Claude Code and Cowork <span className="text-lime">v{version}</span>
          </p>
          <h1 id="hero-title" className="display mt-6 text-[13vw] sm:text-[clamp(3rem,6.6vw,5.6rem)]">
            <span className="block">One prompt</span>
            <span className="block">sets up your</span>
            <span className="block text-lime">video studio.</span>
          </h1>
          <p className="mt-7 max-w-[35rem] text-lg leading-relaxed text-mute">
            Project Factory is a free, open-source kit. Paste the master prompt into your first chat: it downloads
            the kit, asks you everything once and sets up a faceless page for YouTube Shorts, Facebook, Instagram,
            Threads and TikTok. After that, every new chat makes one finished video.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <CopyButton text={masterPrompt.paste} label="Copy master prompt" doneMessage="Master prompt copied" />
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => downloadText('MASTER-PROMPT.md', masterPrompt.raw)}
            >
              <Download aria-hidden="true" className="size-4" />
              Download .md
            </button>
            <button
              type="button"
              className="px-2 py-2 text-sm text-mute underline decoration-line underline-offset-4 transition-colors hover:text-ivory"
              onClick={() => onOpenPrompt('master')}
            >
              Read it first
            </button>
          </div>
          <p className="mt-5 max-w-[35rem] text-sm leading-relaxed text-mute">
            The kit is free and MIT licensed. Running it is not: you need a Claude plan that includes Claude Code or
            Cowork, and some tools you choose may cost money.
          </p>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            <div>
              <dt className="eyebrow text-mute">Prompts</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">{counts.prompts}</dd>
            </div>
            <div>
              <dt className="eyebrow text-mute">Skills</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">{counts.skills}</dd>
            </div>
            <div>
              <dt className="eyebrow text-mute">Platforms</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">5</dd>
            </div>
          </dl>
        </div>
        <HeroStudio />
      </div>
    </section>
  )
}
