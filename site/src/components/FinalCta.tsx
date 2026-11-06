import { ArrowUpRight, Download } from 'lucide-react'
import { masterPrompt } from '../content/prompts'
import { repoUrl, zipUrl } from '../content/site'
import { downloadText } from '../lib/clipboard'
import { CopyButton } from './CopyButton'

export function FinalCta() {
  return (
    <section id="start" aria-labelledby="start-title" className="relative isolate overflow-hidden border-t border-white/[0.06]">
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-6 lg:py-36">
        <h2 id="start-title" className="display text-[clamp(3rem,9vw,8rem)]">
          Start with
          <br />
          <span className="text-lime">one prompt.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute">
          Make an empty folder, open it in Claude Code or Cowork, paste the master prompt and press Enter. The kit takes
          it from there and asks before anything that costs money.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <CopyButton text={masterPrompt.paste} label="Copy master prompt" doneMessage="Master prompt copied" />
          <button type="button" className="btn btn-ghost" onClick={() => downloadText('MASTER-PROMPT.md', masterPrompt.raw)}>
            <Download aria-hidden="true" className="size-4" />
            Download .md
          </button>
          <a href={zipUrl} className="btn btn-ghost">
            Kit as a ZIP
          </a>
          <a
            href={repoUrl}
            className="inline-flex min-h-11 items-center gap-1 px-2 text-sm text-mute underline decoration-line underline-offset-4 hover:text-ivory"
          >
            Source on GitHub
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
