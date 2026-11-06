// Copies the v1.2 guide into the site so its pages and picture URLs keep working.
// Runs before dev and build (npm predev, prebuild). Outputs are gitignored.
//   ../docs/          -> public/manual/   (the guide, now at /page-factory/manual/)
//   ../docs/assets/   -> public/assets/   (old picture and video URLs, /page-factory/assets/...)
import { cp, rm, stat } from 'node:fs/promises'

const copies = [
  ['../docs', 'public/manual'],
  ['../docs/assets', 'public/assets'],
]

for (const [from, to] of copies) {
  try {
    await stat(from)
  } catch {
    console.error(`sync-content: ${from} is missing. Run this from site/ inside the page-factory repo.`)
    process.exit(1)
  }
  await rm(to, { recursive: true, force: true })
  await cp(from, to, {
    recursive: true,
    filter: (src) => !/(^|[\\/])(CNAME|\.nojekyll)$/.test(src),
  })
  console.log(`sync-content: ${from} -> ${to}`)
}
