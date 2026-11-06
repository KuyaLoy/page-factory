// Text for the "how a video gets made" scene. Sample script and shots are illustrative.
import { prompts } from './prompts'

export const steps = [
  {
    title: 'Paste a prompt',
    text: 'Every job starts in a new chat with one prompt from the library. This one makes a single video.',
  },
  {
    title: 'Script, voice and shots',
    text: 'Claude picks a topic with you, checks two sources per claim, writes a 30 to 90 second script and plans every shot. You make the visuals from the prompts it gives you (Google Flow by default).',
  },
  {
    title: 'Cut on a timeline',
    text: 'Voice, word captions and shots come together and render with free tools: HyperFrames and FFmpeg by default.',
  },
  {
    title: 'A finished 9:16 video',
    text: 'You get final.mp4 at 1080x1920, a cover, and the title, caption and hashtags for each platform you post on.',
  },
]

export const scriptWords = ['That', 'blue', "isn't", 'the', 'sky.', 'Glaciers', 'grind', 'rock', 'to', 'flour.']
export const promptLines = (prompts.find((p) => p.id === 'new-video')?.paste ?? '').split('\n').slice(0, 9)
export const shots = [
  { name: 'lake' as const, grow: 30 },
  { name: 'forest' as const, grow: 22 },
  { name: 'waterfall' as const, grow: 26 },
  { name: 'macro' as const, grow: 22 },
]

/* ---------- Pieces shared by the pinned scene and the stacked version ---------- */
