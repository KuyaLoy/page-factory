// Text for the full guide page (/manual/). Times are rough guesses for a first few weeks.

export interface GuideStep {
  step: string
  where: string
  who: string
  time: string
  /** A prompt id from prompts.ts: the row gets a copy button for it. */
  copy?: string
  /** An anchor on this page, linked from the "where" text. */
  link?: string
}

export const dayOne: GuideStep[] = [
  { step: 'Make an empty studio folder', where: 'Anywhere, like D:\\My Studio', who: 'You', time: '1 min' },
  { step: 'Open it in Claude Code or Cowork', where: 'How to open it', link: '#open', who: 'You', time: '2 min' },
  { step: 'Paste the master prompt', where: 'Copy it, paste, press Enter', copy: 'master', who: 'You', time: '1 min' },
  { step: 'It downloads the kit', where: 'Into page-factory/', who: 'Setup chat', time: '2 min' },
  { step: 'Answer five rounds of questions', where: 'Multiple choice, recommended first', who: 'You', time: '15 min' },
  { step: 'Create or connect five accounts', where: 'One app at a time', who: 'You sign in', time: '45 min' },
  { step: 'Install the free tools', where: 'Your computer', who: 'Setup chat asks first', time: '15 min' },
  { step: 'Make your brand pictures', where: 'Google Flow, from its prompts', who: 'You', time: '20 min' },
  { step: 'Get 20 topics and a calendar', where: 'pages/your-page/', who: 'Setup chat', time: '5 min' },
  { step: 'Watch a 10-second test clip', where: 'Rendered with HyperFrames', who: 'Setup chat', time: '5 min' },
]

export const everyVideo: GuideStep[] = [
  { step: 'Paste "Make one video"', where: 'Copy it, same folder', copy: 'new-video', who: 'You', time: '1 min' },
  { step: 'Pick one of five topics', where: 'Scored, best first', who: 'You', time: '1 min' },
  { step: 'Sources, script and title', where: 'Two sources for every fact', who: 'Video chat', time: '10 min' },
  {
    step: 'Make the visuals in Flow',
    where: 'One prompt sheet with exact file names, or flow-mcp if you turned it on',
    link: '#q-flow',
    who: 'You',
    time: '30 min',
  },
  { step: 'Type: assets done', where: 'It checks every file', who: 'You', time: '1 min' },
  { step: 'Record or make the voice', where: 'Your voice, Kokoro or Chatterbox', who: 'You or the chat', time: '10 min' },
  { step: 'Captions, edit and cover', where: 'faster-whisper, HyperFrames', who: 'Video chat', time: '15 min' },
  { step: 'Post to five platforms', where: "Each app's own scheduler", who: 'You', time: '10 min' },
]

export const everyWeek: GuideStep[] = [
  { step: 'Make a batch at the weekend', where: 'Copy it, one new chat', copy: 'weekly-batch', who: 'You and the chat', time: '2-4 h' },
  { step: "Review the week's numbers", where: 'Copy it, paste your stats', copy: 'weekly-review', who: 'You and the chat', time: '15 min' },
  { step: 'Refresh trends, once a month', where: 'Copy it, one new chat', copy: 'trend-refresh', who: 'The chat', time: '20 min' },
  { step: 'Update the kit when it changes', where: 'Copy it, your pages stay safe', copy: 'update-kit', who: 'The chat', time: '10 min' },
]

export const sources = [
  {
    label: 'Monetization and policy',
    path: 'research/01-monetization-and-policy.md',
    note: 'Meta, YouTube and TikTok rules, checked 2026-11-05',
  },
  { label: 'Trends and page ideas', path: 'research/02-trend-radar.md', note: 'Formats growing now, checked 2026-11-05' },
  {
    label: 'Tools and costs',
    path: 'research/03-tools-and-stack.md',
    note: 'Free stack, Flow models and credits, re-checked 2026-11-06',
  },
  { label: 'What changed', path: 'CHANGELOG.md', note: 'Every version, with migration notes' },
  { label: "What's next", path: 'ROADMAP.md', note: 'Ideas, not promises' },
  { label: 'License', path: 'LICENSE', note: 'MIT: use it, change it, share it' },
]
