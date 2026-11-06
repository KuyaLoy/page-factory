// The prompt library reads the real kit files at build time, so the site never drifts from the repo.
import masterRaw from '../../../MASTER-PROMPT.md?raw'

const promptFiles = import.meta.glob<string>('../../../prompts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export type PromptGroup = 'setup' | 'make' | 'review' | 'maintain'

export const groupLabels: Record<PromptGroup, string> = {
  setup: 'Set up',
  make: 'Make videos',
  review: 'Review',
  maintain: 'Keep going',
}

export interface PromptItem {
  id: string
  /** Anchor kept from the v1.2 site, so old links like #p-video still open this prompt. */
  anchor: string
  /** Path in the repo, also the download file name. */
  file: string
  label: string
  group: PromptGroup
  when: string
  summary: string
  /** The file's own heading, for example "MAKE ONE VIDEO". */
  heading: string
  /** The text before the paste block. */
  intro: string
  /** The exact text inside the ```text block: what people paste. */
  paste: string
  /** The whole file. */
  raw: string
}

interface PromptMeta {
  id: string
  file: string
  anchor: string
  label: string
  group: PromptGroup
  when: string
  summary: string
}

const meta: PromptMeta[] = [
  {
    id: 'master',
    file: 'MASTER-PROMPT.md',
    anchor: 'p-master',
    label: 'Master prompt',
    group: 'setup',
    when: 'Once, in the first chat of an empty studio folder.',
    summary:
      'Downloads the kit, asks you everything once, helps with your accounts, installs free tools, builds the page brand and plans the first month.',
  },
  {
    id: 'new-video',
    file: 'prompts/new-video.md',
    anchor: 'p-video',
    label: 'Make one video',
    group: 'make',
    when: 'A new chat for every video.',
    summary:
      'Topic, two sources per claim, a 30 to 90 second script, shot prompts, voice, captions, cover and a posting pack for each platform.',
  },
  {
    id: 'weekly-batch',
    file: 'prompts/weekly-batch.md',
    anchor: 'p-batch',
    label: 'Make a batch',
    group: 'make',
    when: 'A new chat when you want several videos at once.',
    summary:
      'Plans the batch, gives you one sheet with every visual prompt, then builds the videos one at a time.',
  },
  {
    id: 'weekly-review',
    file: 'prompts/weekly-review.md',
    anchor: 'p-review',
    label: 'Weekly review',
    group: 'review',
    when: 'Once a week, 2 to 3 days after the last video went live.',
    summary:
      "Paste the week's numbers. Get 3 things to keep, 3 to change, 3 tests for next week and a monetization check per platform.",
  },
  {
    id: 'trend-refresh',
    file: 'prompts/trend-refresh.md',
    anchor: 'p-trend',
    label: 'Trend refresh',
    group: 'review',
    when: 'Once a month, or when views drop two weeks in a row.',
    summary:
      'Rechecks growing formats and the monetization rules on the official pages, dates every number and adds new topics.',
  },
  {
    id: 'new-page',
    file: 'prompts/new-page.md',
    anchor: 'p-page',
    label: 'New page',
    group: 'setup',
    when: 'When you want another page in the same studio.',
    summary:
      'Scans what is growing, offers 4 page concepts and sets up the one you pick. Studio questions are not asked again.',
  },
  {
    id: 'continue',
    file: 'prompts/continue.md',
    anchor: 'p-continue',
    label: 'Continue',
    group: 'maintain',
    when: 'When a chat got long or stopped halfway.',
    summary: 'Reads the handoff files, tells you where things stand in 3 lines and does the next step.',
  },
  {
    id: 'update-kit',
    file: 'prompts/update-kit.md',
    anchor: 'p-update',
    label: 'Update kit',
    group: 'maintain',
    when: 'When a new kit version is out.',
    summary:
      'Gets the newest kit with a backup first and shows the changes before applying them. Page data is never touched.',
  },
  {
    id: 'retro',
    file: 'prompts/retro.md',
    anchor: 'p-retro',
    label: 'Retro',
    group: 'maintain',
    when: 'After real work, for example your first five videos.',
    summary: 'Reviews finished work without changing it and turns the lessons into kit changes you approve.',
  },
]

const pasteBlock = /```text\n([\s\S]*?)\n```/

function parse(raw: string) {
  const text = raw.replace(/\r\n/g, '\n')
  const headingMatch = /^#\s+(.+)$/m.exec(text)
  const heading = headingMatch ? headingMatch[1].trim() : ''
  const block = pasteBlock.exec(text)
  const afterHeading = headingMatch ? headingMatch.index + headingMatch[0].length : 0
  const intro = text.slice(afterHeading, block ? block.index : undefined).trim()
  return { text, heading, intro, paste: block ? block[1] : text }
}

function rawFor(file: string): string {
  if (file === 'MASTER-PROMPT.md') return masterRaw
  const entry = Object.entries(promptFiles).find(([path]) => path.endsWith(`/${file}`))
  if (!entry) throw new Error(`Prompt file missing from the repo: ${file}`)
  return entry[1]
}

export const prompts: PromptItem[] = meta.map((m) => {
  const parsed = parse(rawFor(m.file))
  return { ...m, heading: parsed.heading, intro: parsed.intro, paste: parsed.paste, raw: parsed.text }
})

export const masterPrompt = prompts[0]

export const promptByAnchor = (anchor: string) => prompts.find((p) => p.anchor === anchor || p.id === anchor)
