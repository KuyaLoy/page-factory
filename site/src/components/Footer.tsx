import { authorUrl, changelogUrl, licenseUrl, manualUrl, repoUrl, version, zipUrl } from '../content/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink-2">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-14 text-sm sm:px-6 md:grid-cols-[1.2fr_1fr_1.4fr]">
        <div>
          <p className="flex items-center gap-2.5 font-semibold tracking-tight">
            <Logo className="size-6" />
            Project Factory
          </p>
          <p className="mt-3 max-w-xs leading-relaxed text-mute">
            A free, open-source prompt and skills kit for Claude Code and Cowork. Version {version}. The repository is
            named page-factory.
          </p>
        </div>
        <nav aria-label="Kit links">
          <h2 className="eyebrow text-mute">The kit</h2>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <a className="hover:text-lime" href={repoUrl}>
                Source on GitHub
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={zipUrl}>
                Download the ZIP
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={changelogUrl}>
                Changelog
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={manualUrl}>
                Full guide
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={licenseUrl}>
                MIT License
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="eyebrow text-mute">Credits</h2>
          <ul className="mt-3 flex flex-col gap-2 leading-relaxed text-mute">
            <li>
              Sample pictures and clips: made with Google Flow for this site (Nano Banana Pro pictures, Veo 3.1 clips).
              Illustrative, not output of the kit.
            </li>
            <li>Type: Geist and Geist Mono (SIL Open Font License 1.1). Icons: Lucide (ISC).</li>
            <li>Built with React, Vite and Tailwind CSS (MIT). Motion: GSAP (Standard no-charge license) and Motion (MIT).</li>
            <li>Not affiliated with Anthropic, Google, Meta, YouTube or TikTok.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.07]">
        <p className="mx-auto max-w-[1240px] px-4 py-5 text-sm text-mute sm:px-6">
          Made by{' '}
          <a className="font-medium text-ivory underline decoration-line underline-offset-4 hover:decoration-lime" href={authorUrl}>
            KuyaLoy
          </a>{' '}
          with Claude. MIT License.
        </p>
      </div>
    </footer>
  )
}
