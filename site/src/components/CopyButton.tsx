import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Check, Copy } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { copyText } from '../lib/clipboard'

interface CopyButtonProps {
  text: string
  label: string
  /** What screen readers hear after a successful copy, for example "Master prompt copied". */
  doneMessage: string
  className?: string
  /** Title of the fallback window shown when the browser blocks copying. */
  fallbackTitle?: string
}

export function CopyButton({ text, label, doneMessage, className = 'btn btn-lime', fallbackTitle }: CopyButtonProps) {
  const [state, setState] = useState<'idle' | 'done'>('idle')
  const [announce, setAnnounce] = useState('')
  const [fallbackOpen, setFallbackOpen] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const button = useRef<HTMLButtonElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function onCopy() {
    const ok = await copyText(text)
    if (!ok) {
      setFallbackOpen(true)
      return
    }
    setState('done')
    setAnnounce(doneMessage)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      setState('idle')
      setAnnounce('')
    }, 2200)
  }

  // The label slides up and out; with reduced motion it simply swaps.
  const slide = reduce
    ? { initial: { y: 0 }, animate: { y: 0 }, exit: { y: 0, transition: { duration: 0 } } }
    : { initial: { y: '110%' }, animate: { y: 0 }, exit: { y: '-110%' } }

  return (
    <>
      <button ref={button} type="button" className={`${className} overflow-hidden`} onClick={onCopy}>
        <span className="relative inline-grid">
          {/* Keeps the button as wide as its longer label so nothing jumps. */}
          <span aria-hidden="true" className="invisible col-start-1 row-start-1 inline-flex items-center gap-2">
            <Copy className="size-4" />
            {label}
          </span>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={state}
              className="col-start-1 row-start-1 inline-flex items-center justify-center gap-2"
              initial={slide.initial}
              animate={slide.animate}
              exit={slide.exit}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {state === 'idle' ? (
                <Copy aria-hidden="true" className="size-4" strokeWidth={2.2} />
              ) : (
                <Check aria-hidden="true" className="size-4" strokeWidth={2.6} />
              )}
              {state === 'idle' ? label : 'Copied'}
            </motion.span>
          </AnimatePresence>
        </span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {announce}
      </span>
      {fallbackOpen && (
        <CopyFallback
          title={fallbackTitle ?? label}
          text={text}
          onClose={() => {
            setFallbackOpen(false)
            button.current?.focus()
          }}
        />
      )}
    </>
  )
}

function CopyFallback({ title, text, onClose }: { title: string; text: string; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const area = useRef<HTMLTextAreaElement>(null)
  const titleId = useId()

  useEffect(() => {
    const node = dialog.current
    if (!node) return
    node.showModal()
    area.current?.focus()
    area.current?.select()
    return () => {
      if (node.open) node.close()
    }
  }, [])

  return (
    <dialog
      ref={dialog}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      className="m-auto w-[min(40rem,calc(100vw-2rem))] rounded-2xl bg-ink-2 p-0 text-ivory shadow-2xl ring-1 ring-white/10"
    >
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <h2 id={titleId} className="text-lg font-semibold tracking-tight">
          {title}
        </h2>
        <p className="text-sm text-mute">
          Your browser blocked automatic copying. The text below is selected: press Ctrl+C (Cmd+C on a Mac) to copy it.
        </p>
        <textarea
          ref={area}
          readOnly
          value={text}
          rows={10}
          aria-label="Text to copy"
          className="w-full resize-y rounded-xl bg-ink p-3 font-mono text-xs leading-relaxed text-ivory ring-1 ring-line"
        />
        <div className="flex justify-end">
          <button type="button" className="btn btn-ghost btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  )
}
