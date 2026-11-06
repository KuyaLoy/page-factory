import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Download, X } from 'lucide-react'
import { useEffect, useId, useRef } from 'react'
import { groupLabels, type PromptItem } from '../content/prompts'
import { fileOnGitHub } from '../content/site'
import { downloadText } from '../lib/clipboard'
import { useMediaQuery } from '../lib/useMediaQuery'
import { CopyButton } from './CopyButton'

interface PromptDrawerProps {
  prompt: PromptItem | null
  onClose: () => void
}

/**
 * A side panel (a bottom sheet on phones) built on a modal <dialog>: the page behind is inert,
 * focus stays inside, Escape closes it and focus goes back to whatever opened it.
 */
export function PromptDrawer({ prompt, onClose }: PromptDrawerProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const opener = useRef<HTMLElement | null>(null)
  const titleId = useId()
  const reduce = useReducedMotion()
  const wide = useMediaQuery('(min-width: 768px)')
  const open = prompt !== null

  useEffect(() => {
    const node = dialog.current
    if (!node || !open || node.open) return
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    node.showModal()
    closeButton.current?.focus()
  }, [open])

  function finishClose() {
    const node = dialog.current
    if (node?.open) node.close()
    opener.current?.focus({ preventScroll: true })
    opener.current = null
  }

  const hidden = reduce ? { opacity: 0 } : wide ? { x: '100%' } : { y: '100%' }
  const shown = reduce ? { opacity: 1 } : wide ? { x: 0 } : { y: 0 }

  return (
    <dialog
      ref={dialog}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-transparent p-0 text-ivory backdrop:bg-transparent backdrop:backdrop-blur-none"
    >
      <AnimatePresence onExitComplete={finishClose}>
        {prompt && (
          <motion.div
            key="backdrop"
            className="absolute inset-0 bg-ink/70 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
        )}
        {prompt && (
          <motion.div
            key={`panel-${prompt.id}`}
            className="absolute inset-x-0 bottom-0 flex max-h-[92dvh] flex-col rounded-t-3xl bg-ink-2 shadow-2xl ring-1 ring-white/10 md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:w-[min(44rem,92vw)] md:rounded-none md:rounded-l-3xl"
            initial={hidden}
            animate={shown}
            exit={hidden}
            transition={{ duration: reduce ? 0.12 : 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-4 border-b border-white/[0.07] p-5 sm:p-6">
              <div className="min-w-0 flex-1">
                <p className="eyebrow text-mute">{groupLabels[prompt.group]}</p>
                <h2 id={titleId} className="mt-2 text-2xl font-semibold tracking-tight">
                  {prompt.label}
                </h2>
                <p className="mt-1 font-mono text-xs text-mute">{prompt.file}</p>
              </div>
              <button
                ref={closeButton}
                type="button"
                onClick={onClose}
                className="grid size-10 shrink-0 place-items-center rounded-full ring-1 ring-line transition-colors hover:ring-mute"
              >
                <span className="sr-only">Close</span>
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto overscroll-contain p-5 sm:p-6">
              <dl className="grid gap-x-4 gap-y-2 text-sm sm:grid-cols-[7rem_1fr]">
                <dt className="text-mute">When</dt>
                <dd>{prompt.when}</dd>
                <dt className="mt-2 text-mute sm:mt-0">What it does</dt>
                <dd className="leading-relaxed">{prompt.summary}</dd>
              </dl>
              {prompt.intro && <p className="text-sm leading-relaxed text-mute">{prompt.intro.replace(/\s*\n\s*/g, ' ')}</p>}
              <div>
                <p className="eyebrow mb-2 text-mute">Paste this</p>
                <pre
                  tabIndex={0}
                  aria-label={`${prompt.label} prompt text`}
                  className="whitespace-pre-wrap break-words rounded-xl bg-ink p-4 font-mono text-[0.78rem] leading-relaxed text-ivory/90 ring-1 ring-line"
                >
                  {prompt.paste}
                </pre>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 border-t border-white/[0.07] p-4 sm:p-5">
              <CopyButton
                text={prompt.paste}
                label="Copy prompt"
                doneMessage={`${prompt.label} prompt copied`}
                fallbackTitle={`Copy the ${prompt.label} prompt`}
              />
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => downloadText(prompt.file.split('/').pop() ?? 'prompt.md', prompt.raw)}
              >
                <Download aria-hidden="true" className="size-4" />
                Download .md
              </button>
              <a
                href={fileOnGitHub(prompt.file)}
                className="inline-flex min-h-11 items-center gap-1 px-2 text-sm text-mute underline decoration-line underline-offset-4 hover:text-ivory"
              >
                View on GitHub
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  )
}
