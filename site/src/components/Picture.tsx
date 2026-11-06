import { posterAlt, posterSources, type PosterKey } from '../content/media'

interface PictureProps {
  name: PosterKey
  /** The sizes attribute: how wide the picture is shown at each screen width. */
  sizes: string
  /** Pass an empty string for decorative pictures. Defaults to the poster's alt text. */
  alt?: string
  className?: string
  imgClassName?: string
  priority?: boolean
}

/** A 9:16 poster with AVIF, WebP and JPG at 480, 720 and 1080 px wide. */
export function Picture({ name, sizes, alt, className, imgClassName, priority = false }: PictureProps) {
  const sources = posterSources(name)
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={sources.avif} sizes={sizes} />
      <source type="image/webp" srcSet={sources.webp} sizes={sizes} />
      <img
        src={sources.fallback}
        srcSet={sources.jpg}
        sizes={sizes}
        width={720}
        height={1280}
        alt={alt ?? posterAlt[name]}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className={imgClassName ?? 'block h-full w-full object-cover'}
      />
    </picture>
  )
}
