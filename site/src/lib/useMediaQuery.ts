import { useSyncExternalStore } from 'react'

/** True while the media query matches. Updates when the window changes. */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query)
      list.addEventListener('change', onChange)
      return () => list.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

/** The pinned, scroll-driven scene only runs on wide, tall-enough screens with a mouse and motion allowed. */
export const PINNED_SCENE_QUERY =
  '(min-width: 1024px) and (min-height: 680px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

export const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
