import versionRaw from '../../../VERSION?raw'
import manifest from '../../../kit/manifest.json'

export const version = versionRaw.trim()
export const authorUrl = 'https://github.com/KuyaLoy'
export const repoUrl = `${authorUrl}/page-factory`
export const zipUrl = `${repoUrl}/archive/refs/heads/main.zip`
export const changelogUrl = `${repoUrl}/blob/main/CHANGELOG.md`
export const licenseUrl = `${repoUrl}/blob/main/LICENSE`
export const fileOnGitHub = (path: string) => `${repoUrl}/blob/main/${path}`

/** The site base, "/page-factory/" on GitHub Pages. */
export const base = import.meta.env.BASE_URL
export const manualUrl = `${base}manual/`
export const media = (path: string) => `${base}${path}`

export const counts = {
  skills: manifest.skills.length,
  prompts: manifest.prompts.length,
  templates: manifest.templates.length,
}
