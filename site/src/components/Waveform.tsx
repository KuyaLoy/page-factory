import { forwardRef, useId } from 'react'

export const WAVE_WIDTH = 560
const WAVE_HEIGHT = 64
const BAR_COUNT = 70
const BAR_STEP = WAVE_WIDTH / BAR_COUNT

/** Fixed, made-up bar heights: an illustration of a voice track, not real audio data. */
const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
  const shape = Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.43)) * 0.75 + Math.abs(Math.sin(i * 0.31)) * 0.25
  const gap = i % 23 === 22 || i % 23 === 0 ? 0.15 : 1
  return Math.max(0.08, shape * gap)
})

interface WaveformProps {
  className?: string
  /** 0 to 1: how much of the track is drawn as played. Ignored when a playedRef drives it. */
  played?: number
}

/**
 * A voice-track waveform. The played part is lime. Pass a ref to update the played width
 * every frame without re-rendering (set the rect's width attribute from 0 to WAVE_WIDTH).
 */
export const Waveform = forwardRef<SVGRectElement, WaveformProps>(function Waveform(
  { className = '', played = 0 },
  playedRef,
) {
  const clipId = `wave-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  const shapes = bars.map((h, i) => {
    const barHeight = h * WAVE_HEIGHT
    return (
      <rect
        key={i}
        x={i * BAR_STEP + 1}
        y={(WAVE_HEIGHT - barHeight) / 2}
        width={BAR_STEP - 3}
        height={barHeight}
        rx={(BAR_STEP - 3) / 2}
      />
    )
  })
  return (
    <svg
      viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-full w-full ${className}`}
    >
      <defs>
        <clipPath id={clipId}>
          <rect ref={playedRef} x="0" y="0" width={played * WAVE_WIDTH} height={WAVE_HEIGHT} />
        </clipPath>
      </defs>
      <g fill="#3a403b">{shapes}</g>
      <g fill="#D5FF35" clipPath={`url(#${clipId})`}>
        {shapes}
      </g>
    </svg>
  )
})
