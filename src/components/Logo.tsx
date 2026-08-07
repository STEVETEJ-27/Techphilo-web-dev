// TechPhilo Logo — uses the actual brand asset provided
interface LogoProps {
  /** Height of the logo image */
  height?: number
  /** Show full wordmark (logo only, since the image already contains branding) */
  className?: string
}

export default function Logo({ height = 42, className = '' }: LogoProps) {
  return (
    <img
      src="/favicon.svg"
      alt="TechPhilo"
      height={height}
      style={{
        height: `${height}px`,
        width: 'auto',
        display: 'block',
        objectFit: 'contain',
      }}
      className={className}
    />
  )
}
