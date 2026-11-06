import { ArrowUpRight } from 'lucide-react'
import { masterPrompt } from '../content/prompts'
import { manualUrl } from '../content/site'
import { CopyButton } from './CopyButton'

const steps = [
  {
    title: 'Make an empty folder',
    text: 'For example D:\\My Studio on Windows or ~/My Studio on a Mac. This becomes your studio.',
  },
  {
    title: 'Open it in Claude',
    text: 'Claude Code: open a terminal in the folder and type claude. Cowork: start a task and connect the folder. Setup works best in Claude Code, which can install tools and render.',
  },
  {
    title: 'Paste the master prompt',
    text: 'It downloads the kit, asks you everything once, helps with your accounts, installs free tools and plans your first month.',
  },
]

const costs = [
  { item: 'The kit', value: 'Free. MIT licensed, so you can change it and share it.' },
  { item: 'Claude', value: 'Costs money: you need a Claude plan that includes Claude Code or Cowork.' },
  { item: 'Visuals', value: "Google Flow's free daily credits by default. Paid plans you already have are used when you say so." },
  { item: 'Editing, captions, voice', value: 'Free, open-source tools by default: HyperFrames, FFmpeg, faster-whisper, Chatterbox, Kokoro.' },
  { item: 'New paid tools', value: 'Only suggested once a page earns.' },
]

export function Setup() {
  return (
    <section id="steps" aria-labelledby="steps-title" className="on-ivory bg-ivory text-ink">
      <div className="mx-auto max-w-[1240px] px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-stone">Setup, about 1 to 2 hours</p>
            <h2 id="steps-title" className="display mt-4 text-[clamp(2.4rem,5vw,4.25rem)]">
              Start in three steps.
            </h2>
          </div>
          <a
            href={manualUrl}
            className="inline-flex items-center gap-1 text-sm font-medium text-stone underline decoration-stone/40 underline-offset-4 hover:text-ink"
          >
            Full step-by-step guide
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-ink/10">
              <span className="font-mono text-sm text-stone">0{i + 1}</span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-stone">{step.text}</p>
              {i === 2 && (
                <div className="mt-auto pt-6">
                  <CopyButton
                    text={masterPrompt.paste}
                    label="Copy master prompt"
                    doneMessage="Master prompt copied"
                    className="btn btn-ink"
                  />
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 border-t border-ink/15 pt-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">What it costs</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-stone">
              The kit is free. Running it is not, and earning is never guaranteed: each platform sets its own rules.
            </p>
          </div>
          <dl className="divide-y divide-ink/10 border-y border-ink/10">
            {costs.map((row) => (
              <div key={row.item} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="font-semibold">{row.item}</dt>
                <dd className="text-stone">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
