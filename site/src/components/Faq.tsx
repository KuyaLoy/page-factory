import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Plus } from 'lucide-react'
import { useEffect, useId, useState, type ReactNode } from 'react'
import { manualUrl } from '../content/site'

interface Item {
  id: string
  question: string
  answer: ReactNode
}

const items: Item[] = [
  {
    id: 'faq-free',
    question: 'Is it really free?',
    answer: (
      <>
        The kit is free and MIT licensed, and every default tool is free or open source: Google Flow&apos;s free daily
        credits for visuals, HyperFrames and FFmpeg for editing, faster-whisper for captions, and your own voice or the
        free Chatterbox and Kokoro voices. Running the chats needs a Claude plan, which costs money. Paid tools you
        already have are used only when you say so.
      </>
    ),
  },
  {
    id: 'faq-need',
    question: 'What do I need?',
    answer: (
      <>
        A Windows or Mac computer with about 10 GB free, a Claude plan that includes Claude Code or Cowork, and a Google
        account for YouTube and Flow. Plan on 1 to 2 hours for setup, then 1 to 2 hours per video while you learn.
      </>
    ),
  },
  {
    id: 'faq-face',
    question: 'Do I have to show my face or use my voice?',
    answer: (
      <>
        No face, ever. For the voice you choose: record your own, clone your own voice for free with Chatterbox, use a
        free Kokoro voice, or a paid voice you already have.
      </>
    ),
  },
  {
    id: 'faq-money',
    question: 'Will the page earn money?',
    answer: (
      <>
        Nothing is guaranteed. Each platform sets its own entry rules and they change: YouTube raises its Shorts bar
        for new channels on 1 Feb 2027, and Facebook&apos;s Content Monetization is invite-only for now. The kit keeps
        the current rules with the date they were checked, and the weekly review shows how close you are.
      </>
    ),
  },
  {
    id: 'faq-review',
    question: 'What does the weekly review do?',
    answer: (
      <>
        It is a performance check, not a recap video. You paste the week&apos;s numbers or screenshots from each
        platform and get 3 things to keep, 3 to change, 3 tests for next week and a monetization check per platform.
      </>
    ),
  },
  {
    id: 'faq-ai',
    question: 'Is AI-made content allowed?',
    answer: (
      <>
        Yes, when it is original. Meta and YouTube cut reach and pay for reposted clips and mass-produced slideshows.
        The kit makes each video yours: your script, your character, your voice and two sources per claim. Your mascot
        tells stories and never gives health, legal or money advice.
      </>
    ),
  },
  {
    id: 'faq-safe',
    question: 'What will the AI do on my computer?',
    answer: (
      <>
        It never types your passwords or 2-step codes: you sign in yourself. It asks before installing software,
        deleting files or spending credits or money, and asks multiple-choice questions with the recommended answer
        first.
      </>
    ),
  },
  {
    id: 'faq-egg',
    question: "What's the easter egg?",
    answer: (
      <>
        An optional thank-you. Setup asks whether to hide a tiny &ldquo;KuyaLoy&rdquo; signature in one background spot
        per video. You can hide your own name instead, or say no. It&apos;s off unless you say yes.
      </>
    ),
  },
]

function FaqItem({ item, open, onToggle }: { item: Item; open: boolean; onToggle: () => void }) {
  const reduce = useReducedMotion()
  const panelId = useId()
  return (
    <li id={item.id} className="border-b border-ink/12">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold tracking-tight"
        >
          {item.question}
          <motion.span
            aria-hidden="true"
            className="grid size-8 shrink-0 place-items-center rounded-full ring-1 ring-ink/20"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <Plus className="size-4" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0.1 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 leading-relaxed text-stone">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export function Faq() {
  const [open, setOpen] = useState<string | null>('faq-free')

  // Old links such as #faq-money open the matching answer.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1)
      if (items.some((item) => item.id === id)) setOpen(id)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [])

  return (
    <section id="faq" aria-labelledby="faq-title" className="on-ivory bg-ivory text-ink">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
        <div>
          <p className="eyebrow text-stone">Questions</p>
          <h2 id="faq-title" className="display mt-4 text-[clamp(2.4rem,5vw,4.25rem)]">
            Before you paste.
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-stone">
            Short answers here. The full guide covers every step with pictures:{' '}
            <a href={manualUrl} className="font-medium text-ink underline underline-offset-4">
              open the guide
            </a>
            .
          </p>
        </div>
        <ul className="border-t border-ink/12">
          {items.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              open={open === item.id}
              onToggle={() => setOpen((current) => (current === item.id ? null : item.id))}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
