import { Copy, Search } from 'lucide-react'
import { useId, useMemo, useState } from 'react'
import { groupLabels, prompts, type PromptGroup, type PromptItem } from '../content/prompts'
import { copyText } from '../lib/clipboard'

type Filter = 'all' | PromptGroup

const filters: Filter[] = ['all', 'setup', 'make', 'review', 'maintain']

function matches(prompt: PromptItem, query: string) {
  if (!query) return true
  const haystack = `${prompt.label} ${prompt.heading} ${prompt.when} ${prompt.summary} ${prompt.paste}`.toLowerCase()
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word))
}

export function PromptLibrary({ onOpen }: { onOpen: (id: string) => void }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('all')
  const [copied, setCopied] = useState<string | null>(null)
  const searchId = useId()

  const shown = useMemo(
    () => prompts.filter((p) => (filter === 'all' || p.group === filter) && matches(p, query.trim())),
    [filter, query],
  )

  async function quickCopy(prompt: PromptItem) {
    const ok = await copyText(prompt.paste)
    if (ok) {
      setCopied(prompt.id)
      window.setTimeout(() => setCopied((current) => (current === prompt.id ? null : current)), 2000)
    } else {
      onOpen(prompt.id)
    }
  }

  return (
    <section id="prompts" aria-labelledby="prompts-title" className="border-t border-white/[0.06] bg-ink-2">
      <div className="mx-auto max-w-[1240px] px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-mute">Prompt library, the real files from the repo</p>
            <h2 id="prompts-title" className="display mt-4 text-[clamp(2.4rem,5vw,4.25rem)]">
              One prompt for every chat.
            </h2>
            <p className="mt-5 leading-relaxed text-mute">
              After setup, every job is a new chat with one of these. Open a prompt to read it, copy it or download the
              file.
            </p>
          </div>
          <div className="relative w-full lg:w-80">
            <label htmlFor={searchId} className="sr-only">
              Search prompts
            </label>
            <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-mute" />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search, for example review"
              className="h-11 w-full rounded-full bg-ink pl-10 pr-4 text-sm text-ivory ring-1 ring-line placeholder:text-mute focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            />
          </div>
        </div>

        <div role="group" aria-label="Filter prompts" className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`min-h-9 rounded-full px-4 text-sm transition-colors ${
                filter === f ? 'bg-ivory text-ink' : 'text-mute ring-1 ring-line hover:text-ivory'
              }`}
            >
              {f === 'all' ? 'All' : groupLabels[f]}
            </button>
          ))}
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          {shown.length === 1 ? '1 prompt shown' : `${shown.length} prompts shown`}
        </p>

        {shown.length === 0 ? (
          <p className="mt-10 rounded-2xl bg-ink p-6 text-mute ring-1 ring-line">
            No prompt matches &ldquo;{query}&rdquo;. Try &ldquo;video&rdquo;, &ldquo;review&rdquo; or &ldquo;update&rdquo;.
          </p>
        ) : (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((prompt) => (
              <li key={prompt.id} id={prompt.anchor} className="group relative flex flex-col rounded-2xl bg-ink p-5 ring-1 ring-line transition-colors hover:ring-mute/60">
                <div className="flex items-start justify-between gap-3">
                  <span className="eyebrow text-mute">{groupLabels[prompt.group]}</span>
                  <button
                    type="button"
                    onClick={() => quickCopy(prompt)}
                    className="relative z-10 -mr-1.5 -mt-1.5 inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-xs text-mute ring-1 ring-line transition-colors hover:text-ivory"
                    aria-label={`Copy the ${prompt.label} prompt`}
                  >
                    <Copy aria-hidden="true" className="size-3.5" />
                    {copied === prompt.id ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  <button
                    type="button"
                    onClick={() => onOpen(prompt.id)}
                    className="text-left after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-lime"
                  >
                    {prompt.label}
                  </button>
                </h3>
                <p className="mt-1 text-sm text-ivory/70">{prompt.when}</p>
                <p className="mt-4 text-sm leading-relaxed text-mute">{prompt.summary}</p>
                <span className="mt-5 font-mono text-xs text-mute">{prompt.file}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
