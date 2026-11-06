import { ArrowUpRight, Download } from 'lucide-react'
import type { ReactNode } from 'react'
import { CopyButton } from '../components/CopyButton'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'
import { dayOne, everyVideo, everyWeek, sources, type GuideStep } from '../content/guide'
import { masterPrompt, prompts } from '../content/prompts'
import { counts, fileOnGitHub, version, zipUrl } from '../content/site'
import { downloadText } from '../lib/clipboard'

const toc = [
  { id: 'how-it-works', label: 'How it works' },
  { id: 'need', label: 'What you need' },
  { id: 'open', label: 'Open your folder' },
  { id: 'day-one', label: 'Day one' },
  { id: 'every-video', label: 'Every video' },
  { id: 'every-week', label: 'Every week' },
  { id: 'all-prompts', label: 'All prompts' },
  { id: 'questions', label: 'Questions' },
  { id: 'sources', label: 'Research and sources' },
]

const ext = 'font-medium text-ivory underline decoration-line underline-offset-4 hover:decoration-lime'

const questions: { id: string; q: string; a: ReactNode }[] = [
  {
    id: 'q-free',
    q: 'Is it really free?',
    a: (
      <>
        The kit and every default tool are free or open source: Google Flow&apos;s free daily credits for visuals,
        HyperFrames and FFmpeg for editing, faster-whisper for captions, your own voice or the free Chatterbox and
        Kokoro voices, and each app&apos;s own scheduler. Running the chats needs a Claude plan that includes Claude
        Code or Cowork, which costs money (
        <a className={ext} href="https://claude.com/pricing">
          claude.com/pricing
        </a>
        ). Paid tools you already have, like CapCut or Google AI Pro, are used when you say so. New paid tools are only
        suggested once your page earns.
      </>
    ),
  },
  {
    id: 'q-face',
    q: 'Do I have to show my face or use my voice?',
    a: (
      <>
        No face, ever. For the voice you choose: record your own (the most original), clone your own voice for free
        with Chatterbox, use a free preset voice from Kokoro, or a paid voice you already have.
      </>
    ),
  },
  {
    id: 'q-ideas',
    q: 'What kind of page can I make?',
    a: (
      <>
        Setup offers three concepts from the kit&apos;s trend research, or runs a fresh scan first. Formats working now:
        2D mascot curiosity stories, 3D &ldquo;what would happen&rdquo; Shorts, stickman explainers, animated true
        stories, what-if questions and animated comedy. Other pages inspire the format, never the content. Every story
        is yours, with two sources for each fact.
      </>
    ),
  },
  {
    id: 'q-money',
    q: 'When do I get paid?',
    a: (
      <>
        <strong className="text-ivory">YouTube:</strong> at 500 subscribers you can earn from fans (memberships, Super
        Thanks). Ads need 1,000 subscribers plus 10 million Shorts views in 90 days, or 4,000 watch hours in 12 months,
        in a country where the{' '}
        <a className={ext} href="https://support.google.com/youtube/answer/72851">
          Partner Program
        </a>{' '}
        is open. From 1 Feb 2027 new channels need 20 million Shorts views or 8,000 watch hours, then 10 million Shorts
        views every 90 days to keep earning from Shorts (
        <a
          className={ext}
          href="https://blog.youtube/news-and-events/youtube-partner-program-updates-2027-new-opportunities-earn/"
        >
          YouTube&apos;s announcement
        </a>
        ). <strong className="text-ivory">Facebook:</strong>{' '}
        <a className={ext} href="https://creators.facebook.com/tools/facebook-content-monetization">
          Content Monetization
        </a>{' '}
        is invite-only for now: express interest in the Professional Dashboard in your first week. Reels under 10
        seconds don&apos;t earn. Stars open at 500 followers. <strong className="text-ivory">TikTok:</strong> check
        TikTok Studio, then Monetization. Rules and countries change; these were checked on 5 Nov 2026. Nothing is
        guaranteed, and your weekly review tracks how close you are.
      </>
    ),
  },
  {
    id: 'q-ai',
    q: 'Is AI content allowed?',
    a: (
      <>
        Yes, when it&apos;s original and tells a real story. Meta and YouTube cut reach and pay for reposted clips and
        mass-produced slideshows (
        <a className={ext} href="https://about.fb.com/news/2026/03/rewarding-original-creators-on-facebook/">
          Meta on originality
        </a>
        ). The kit makes each video yours: your script, your character, your voice and two sources per fact. On
        YouTube, animation and your own cloned voice don&apos;t need an{' '}
        <a className={ext} href="https://support.google.com/youtube/answer/14328491">
          AI label
        </a>
        . Your mascot tells stories and never gives health, legal or money advice: YouTube won&apos;t pay channels
        whose AI character does.
      </>
    ),
  },
  {
    id: 'q-review',
    q: 'What does the weekly review do?',
    a: (
      <>
        It&apos;s a performance check, not a recap video. You paste the week&apos;s numbers or screenshots from each
        platform and get 3 things to keep, 3 to change, 3 tests for next week and a monetization check per platform.
      </>
    ),
  },
  {
    id: 'q-model',
    q: 'Which video model does it use in Flow?',
    a: (
      <>
        Omni 1.1 Flash by default: it&apos;s Flow&apos;s default video model and costs 7 to 15 credits a clip,
        depending on length. Setup lets you pick another one for your page (Veo 3.1 Lite, Fast or Quality, from 10 to
        100 credits a clip), and you can switch any single shot. Most shots are free stills animated in the edit; only
        the key moments use video credits. Flow shows the real price before you generate.
      </>
    ),
  },
  {
    id: 'q-flow',
    q: 'Can the chat make the Flow clips by itself?',
    a: (
      <>
        Only if you want it to. By default you paste the prompt sheet into Flow yourself. If you&apos;d rather let
        the chat do it, install{' '}
        <a className={ext} href="https://github.com/GTAI-1/flow-mcp">
          flow-mcp
        </a>
        , a third-party tool that drives Flow in its own Chrome window: you install it from its README, sign in to
        Google by hand, and it skips any clip above its credit cap (25 by default). Then say yes to Flow automation in
        setup. Its own README warns that it can break when Flow changes and that automated use may be against
        Google&apos;s terms, so use it on your own account at your own risk.
      </>
    ),
  },
  {
    id: 'q-safe',
    q: 'What will the AI do on my computer?',
    a: (
      <>
        It never types your passwords or 2-step codes: you sign in yourself. It asks before installing software,
        deleting files or spending credits or money, and asks multiple-choice questions with the recommended answer
        first. Type in Tagalog, Taglish or any language; answers stay in English unless you choose another. It reads
        the handoff files first, checks real files before it claims anything and marks what it couldn&apos;t check.
      </>
    ),
  },
  {
    id: 'q-signature',
    q: "What's the KuyaLoy signature?",
    a: (
      <>
        A tiny &ldquo;KuyaLoy&rdquo; signature hidden in one background spot per video (a poster on a wall, a shop
        sign, a T-shirt print, a TV in the room), like a painter&apos;s signature: the kit&apos;s thank-you, since
        it&apos;s free. It&apos;s on by default and setup tells you about it. You can keep it, use your own name
        instead, or turn it off.
      </>
    ),
  },
]

function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-white/[0.07] pt-10">
      {kicker && <p className="eyebrow text-mute">{kicker}</p>}
      <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function StepRows({ steps, label }: { steps: GuideStep[]; label: string }) {
  return (
    <div>
      <div
        aria-hidden="true"
        className="hidden grid-cols-[2rem_1.4fr_1.4fr_0.9fr_4.5rem] gap-4 border-b border-white/[0.07] pb-2 font-mono text-[0.6875rem] uppercase tracking-wider text-mute md:grid"
      >
        <span />
        <span>Step</span>
        <span>Where</span>
        <span>Who</span>
        <span className="text-right">Time</span>
      </div>
      <ol aria-label={label} className="divide-y divide-white/[0.06]">
        {steps.map((row, i) => {
          const prompt = row.copy ? prompts.find((p) => p.id === row.copy) : undefined
          return (
            <li
              key={row.step}
              className="grid grid-cols-[2rem_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[2rem_1.4fr_1.4fr_0.9fr_4.5rem] md:items-center"
            >
              <span className="row-span-4 font-mono text-sm text-lime md:row-span-1">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-medium">{row.step}</span>
              <span className="text-sm text-mute">
                <span className="sr-only">Where: </span>
                {row.link ? (
                  <a className={ext} href={row.link}>
                    {row.where}
                  </a>
                ) : (
                  row.where
                )}
                {prompt && (
                  <span className="mt-2 block md:mt-1.5">
                    <CopyButton
                      text={prompt.paste}
                      label={`Copy ${prompt.label}`}
                      doneMessage={`${prompt.label} prompt copied`}
                      className="btn btn-ghost btn-sm"
                    />
                  </span>
                )}
              </span>
              <span className="text-sm text-ivory/80">
                <span className="text-mute md:sr-only">Who: </span>
                {row.who}
              </span>
              <span className="font-mono text-sm tabular-nums text-ivory/80 md:text-right">
                <span className="font-sans text-mute md:sr-only">Time: </span>
                {row.time}
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function NewChatNote() {
  return (
    <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-3 px-3 py-1.5 font-mono text-xs text-mute">
      <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
      Then open a new chat
    </p>
  )
}

export function Guide() {
  return (
    <>
      <a
        href="#main"
        className="sr-only-focusable fixed left-4 top-3 z-50 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink"
      >
        Skip to content
      </a>
      <Nav page="guide" />
      <main id="main">
        <header className="relative isolate overflow-hidden border-b border-white/[0.07]">
          <div
            aria-hidden="true"
            className="grid-lines absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_80%_20%,black,transparent_70%)]"
          />
          <div className="mx-auto max-w-[1240px] px-4 pb-14 pt-12 sm:px-6 lg:pb-20 lg:pt-16">
            <p className="eyebrow text-mute">
              The full guide <span className="text-lime">v{version}</span>
            </p>
            <h1 className="display mt-5 max-w-4xl text-[clamp(2.6rem,6.4vw,5.4rem)]">
              Every step, from an empty folder to a <span className="text-lime">posted video.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute">
              What you need, how to open your folder in Claude, what the setup chat does, how each video gets made and
              what to do every week. Times are rough guesses for your first weeks; they shrink once your page has a
              routine.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CopyButton text={masterPrompt.paste} label="Copy master prompt" doneMessage="Master prompt copied" />
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => downloadText('MASTER-PROMPT.md', masterPrompt.raw)}
              >
                <Download aria-hidden="true" className="size-4" />
                Download .md
              </button>
            </div>
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-4 border-t border-line pt-6 sm:grid-cols-4">
              <div>
                <dt className="eyebrow text-mute">Setup</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight">1-2 h</dd>
              </div>
              <div>
                <dt className="eyebrow text-mute">Per video</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight">1-2 h</dd>
              </div>
              <div>
                <dt className="eyebrow text-mute">Prompts</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight">{counts.prompts}</dd>
              </div>
              <div>
                <dt className="eyebrow text-mute">Skills</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight">{counts.skills}</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[13rem_1fr] lg:py-20">
          <nav aria-label="On this page" className="hidden lg:block">
            <ul className="sticky top-24 flex flex-col gap-1 border-l border-line text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a className="-ml-px block border-l border-transparent py-1.5 pl-4 text-mute hover:border-lime hover:text-ivory" href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex min-w-0 flex-col gap-16">
            <Section id="how-it-works" title="Ask once, make many." kicker="How it works">
              <p className="max-w-2xl leading-relaxed text-mute">
                Chats forget. Files don&apos;t. Your first chat turns your answers into files: rules, brand, topics and
                a log of every video. Each new chat reads them first, makes one finished video and writes down what it
                did.
              </p>
              <ol className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ['Answer', 'You answer everything once, in the first chat.'],
                  ['Remember', 'It all goes into files that every chat reads first.'],
                  ['Make', 'Each new chat makes one finished video.'],
                ].map(([title, text], i) => (
                  <li key={title} className="rounded-2xl bg-ink-2 p-5 ring-1 ring-white/[0.07]">
                    <span className="font-mono text-sm text-lime">0{i + 1}</span>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mute">{text}</p>
                  </li>
                ))}
              </ol>
            </Section>

            <Section id="need" title="What you need" kicker="Before you start">
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  ['A computer', 'Windows or Mac with about 10 GB free. No special graphics card: visuals come from Google Flow in your browser.'],
                  ['A Claude plan', 'One that includes Claude Code or Cowork. This is the part that costs money.'],
                  ['A Google account', 'For YouTube and for Flow, which gives everyone 50 free credits a day.'],
                  ['Some time', 'About 1 to 2 hours for setup, then 1 to 2 hours per video while you learn.'],
                ].map(([title, text]) => (
                  <li key={title} className="rounded-2xl bg-ink-2 p-5 ring-1 ring-white/[0.07]">
                    <h3 className="font-semibold tracking-tight">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mute">{text}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-mute">
                Already have a Facebook Page or a YouTube channel? Keep it. Setup asks for the link and fixes what&apos;s
                missing with you.
              </p>
            </Section>

            <Section id="open" title="Open your folder in Claude" kicker="Step 2 of day one">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-ink-2 p-5 ring-1 ring-white/[0.07]">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Claude Code <span className="ml-1 rounded-full bg-lime px-2 py-0.5 align-middle text-xs text-ink">best for setup</span>
                  </h3>
                  <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed text-mute">
                    <li>
                      Install it with the{' '}
                      <a className={ext} href="https://docs.claude.com/en/docs/claude-code/quickstart">
                        quickstart
                      </a>
                      .
                    </li>
                    <li>Windows: open your studio folder, right-click an empty spot and choose Open in Terminal.</li>
                    <li>Mac: open Terminal, type cd and a space, drag the folder into the window and press Enter.</li>
                    <li>
                      Type <code className="rounded bg-ink px-1.5 py-0.5 font-mono text-ivory">claude</code> and press Enter.
                    </li>
                  </ol>
                </div>
                <div className="rounded-2xl bg-ink-2 p-5 ring-1 ring-white/[0.07]">
                  <h3 className="text-lg font-semibold tracking-tight">Cowork</h3>
                  <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed text-mute">
                    <li>Open the Claude desktop app.</li>
                    <li>Connect your studio folder and start a new task.</li>
                    <li>Installs and video rendering work best in Claude Code, so use it for setup if you can.</li>
                  </ol>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-mute">
                Then paste the master prompt. If downloads are blocked,{' '}
                <a className={ext} href={zipUrl}>
                  get the ZIP
                </a>
                , unzip it into your studio folder and paste again.
              </p>
            </Section>

            <Section id="day-one" title="Day one: the setup chat" kicker="About 1 to 2 hours">
              <StepRows steps={dayOne} label="Day one steps" />
              <NewChatNote />
            </Section>

            <Section id="every-video" title="Every video: a new chat" kicker="About 1 to 2 hours while you learn">
              <StepRows steps={everyVideo} label="Steps for every video" />
              <NewChatNote />
            </Section>

            <Section id="every-week" title="Every week, and now and then" kicker="The rhythm">
              <StepRows steps={everyWeek} label="Weekly and monthly steps" />
            </Section>

            <Section id="all-prompts" title="All prompts" kicker="The real files from the repo">
              <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {prompts.map((prompt) => (
                  <li key={prompt.id} id={`g-${prompt.anchor}`} className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:gap-6">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold tracking-tight">{prompt.label}</h3>
                      <p className="mt-0.5 text-sm text-mute">{prompt.when}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <CopyButton
                        text={prompt.paste}
                        label="Copy"
                        doneMessage={`${prompt.label} prompt copied`}
                        className="btn btn-ghost btn-sm"
                      />
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={() => downloadText(prompt.file.split('/').pop() ?? 'prompt.md', prompt.raw)}
                        aria-label={`Download ${prompt.file}`}
                      >
                        <Download aria-hidden="true" className="size-4" />
                        .md
                      </button>
                      <a
                        className="inline-flex min-h-9 items-center gap-1 px-2 font-mono text-xs text-mute hover:text-ivory"
                        href={fileOnGitHub(prompt.file)}
                      >
                        {prompt.file}
                        <ArrowUpRight aria-hidden="true" className="size-3" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="questions" title="Questions" kicker="Before you paste">
              <dl className="flex flex-col gap-8">
                {questions.map((item) => (
                  <div key={item.id} id={item.id} className="max-w-3xl">
                    <dt className="text-lg font-semibold tracking-tight">{item.q}</dt>
                    <dd className="mt-2 leading-relaxed text-mute">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </Section>

            <Section id="sources" title="Research and sources" kicker="Checked, with dates">
              <ul className="grid gap-3 sm:grid-cols-2">
                {sources.map((source) => (
                  <li key={source.path}>
                    <a
                      href={fileOnGitHub(source.path)}
                      className="flex h-full flex-col rounded-2xl bg-ink-2 p-5 ring-1 ring-white/[0.07] transition-colors hover:ring-mute/60"
                    >
                      <span className="flex items-center justify-between gap-3 font-semibold tracking-tight">
                        {source.label}
                        <ArrowUpRight aria-hidden="true" className="size-4 text-mute" />
                      </span>
                      <span className="mt-1 text-sm text-mute">{source.note}</span>
                      <span className="mt-3 font-mono text-xs text-mute">{source.path}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
