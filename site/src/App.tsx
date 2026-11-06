import { useCallback, useEffect, useState } from 'react'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { PromptDrawer } from './components/PromptDrawer'
import { PromptLibrary } from './components/PromptLibrary'
import { Setup } from './components/Setup'
import { WorkflowScene } from './components/WorkflowScene'
import { promptByAnchor, prompts } from './content/prompts'

export default function App() {
  const [openId, setOpenId] = useState<string | null>(null)
  const current = prompts.find((p) => p.id === openId) ?? null

  const openPrompt = useCallback((id: string) => {
    const prompt = prompts.find((p) => p.id === id)
    if (!prompt) return
    setOpenId(prompt.id)
    window.history.replaceState(null, '', `#${prompt.anchor}`)
  }, [])

  const closePrompt = useCallback(() => {
    setOpenId(null)
    if (window.location.hash.startsWith('#p-')) window.history.replaceState(null, '', '#prompts')
  }, [])

  // Links from the old site, such as #p-video, open that prompt.
  useEffect(() => {
    const fromHash = () => {
      const anchor = window.location.hash.slice(1)
      if (!anchor.startsWith('p-')) return
      const prompt = promptByAnchor(anchor)
      if (prompt) setOpenId(prompt.id)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only-focusable fixed left-4 top-3 z-50 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero onOpenPrompt={openPrompt} />
        <WorkflowScene />
        <Setup />
        <Gallery />
        <PromptLibrary onOpen={openPrompt} />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <PromptDrawer prompt={current} onClose={closePrompt} />
    </>
  )
}
