// TechPhilo Logo — combines separate emblem logo SVG and title wordmark SVG
interface LogoProps {
  /** Height of the emblem icon mark in pixels (default: 42) */
  height?: number | string
  /** Width of the emblem icon mark (default: 'auto') */
  width?: number | string
  /** Height of the title graphic in pixels (default: ~75% of emblem height) */
  titleHeight?: number | string
  /** Width of the title graphic (default: 'auto') */
  titleWidth?: number | string
  /** Distance/gap between emblem icon and title graphic (e.g. '0.65rem', '12px', or 10) */
  gap?: number | string
  /** Whether to show the separate title graphic (default: true) */
  showTitle?: boolean
  /** Additional CSS class for the wrapper container */
  className?: string
}

export default function Logo({
  height = 36.5,
  width = 'auto',
  titleHeight,
  titleWidth = 'auto',
  gap = '3px',
  showTitle = true,
  className = '',
}: LogoProps) {
  // Format numeric values into CSS px strings if needed
  const iconH = typeof height === 'number' ? `${height}px` : height
  const iconW = typeof width === 'number' ? `${width}px` : width

  // Compute title height: reduced by -2px as requested
  const calcTitleH = titleHeight !== undefined
    ? (typeof titleHeight === 'number' ? `${titleHeight}px` : titleHeight)
    : (typeof height === 'number' ? `${Math.max(10, (height * 0.95) - 2)}px` : '28px')

  const calcTitleW = typeof titleWidth === 'number' ? `${titleWidth}px` : titleWidth
  const gapVal = typeof gap === 'number' ? `${gap}px` : gap

  return (
    <div
      className={`brand-logo-group ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: gapVal,
      }}
    >
      {/* 1. Emblem Logo Icon */}
      <img
        src="/TPlogo01.svg"
        alt="TechPhilo Emblem"
        style={{
          height: iconH,
          width: iconW,
          display: 'block',
          objectFit: 'contain',
          flexShrink: 0,
        }}
      />

      {/* 2. Title Graphic */}
      {showTitle && (
        <img
          src="/TPtitle01.svg"
          alt="TechPhilo"
          style={{
            height: calcTitleH,
            width: calcTitleW,
            display: 'block',
            objectFit: 'contain',
            flexShrink: 0,
            transform: 'translateY(1px)',
          }}
        />
      )}
    </div>
  )
}
