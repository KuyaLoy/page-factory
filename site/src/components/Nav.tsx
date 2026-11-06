import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { masterPrompt } from '../content/prompts'
import { base, manualUrl, repoUrl } from '../content/site'
import { CopyButton } from './CopyButton'
import { Logo } from './Logo'

const sections = [
  { hash: '#how', label: 'How it works' },
  { hash: '#steps', label: 'Setup' },
  { hash: '#samples', label: 'Samples' },
  { hash: '#prompts', label: 'Prompts' },
  { hash: '#faq', label: 'FAQ' },
]

/** On the guide page the section links point back to the home page. */
export function Nav({ page = 'home' }: { page?: 'home' | 'guide' }) {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const reduce = useReducedMotion()
  const onGuide = page === 'guide'
  const links = sections.map((link) => ({ href: onGuide ? `${base}${link.hash}` : link.hash, label: link.label }))
  const guideCurrent = onGuide ? ('page' as const) : undefined

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center gap-6 px-4 sm:px-6">
        <a
          href={onGuide ? base : '#top'}
          className="flex items-center gap-2.5 text-[0.95rem] font-semibold tracking-tight"
        >
          <Logo className="size-7" />
          Project Factory
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm text-mute">
            {links.map((link) => (
              <li key={link.href}>
                <a className="transition-colors hover:text-ivory" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="transition-colors hover:text-ivory aria-[current=page]:text-lime"
                href={manualUrl}
                aria-current={guideCurrent}
              >
                Guide
              </a>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <a
            href={repoUrl}
            className="hidden items-center gap-1 rounded-full px-3 py-2 text-sm text-mute transition-colors hover:text-ivory sm:inline-flex"
          >
            GitHub
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
          <CopyButton
            text={masterPrompt.paste}
            label="Copy master prompt"
            doneMessage="Master prompt copied"
            className="btn btn-lime btn-sm hidden sm:inline-flex"
          />
          <button
            ref={toggle}
            type="button"
            className="grid size-10 place-items-center rounded-full text-ivory ring-1 ring-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            className="overflow-hidden border-t border-white/[0.07] lg:hidden"
            initial={reduce ? false : { height: 0 }}
            animate={{ height: 'auto' }}
            exit={reduce ? { height: 0, transition: { duration: 0 } } : { height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col px-4 py-3 sm:px-6">
              {[...links, { href: manualUrl, label: 'Guide' }, { href: repoUrl, label: 'GitHub' }].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={link.href === manualUrl ? guideCurrent : undefined}
                    className="flex min-h-12 items-center justify-between border-b border-white/[0.06] text-lg aria-[current=page]:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-5 sm:hidden">
              <CopyButton
                text={masterPrompt.paste}
                label="Copy master prompt"
                doneMessage="Master prompt copied"
                className="btn btn-lime w-full"
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
